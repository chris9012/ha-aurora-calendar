"""WebSocket API for Aurora Calendar — enriched event fetching.

Registers the `aurora_calendar/get_events` WebSocket command so the card
can fetch events from multiple calendar entities in a single round-trip and
receive the `organizer_self` flag for Google Calendar events.
"""
from __future__ import annotations

import datetime as dt_mod
import logging
from typing import Any

import voluptuous as vol

from homeassistant.components.websocket_api import (
    ActiveConnection,
    async_register_command,
    async_response,
    websocket_command,
)
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_registry as er
from homeassistant.util import dt as dt_util
import homeassistant.helpers.config_validation as cv

_LOGGER = logging.getLogger(__name__)
_GOOGLE_DOMAIN = "google"


def async_setup(hass: HomeAssistant) -> None:
    """Register Aurora Calendar WebSocket commands."""
    async_register_command(hass, handle_get_events)


@websocket_command(
    {
        vol.Required("type"): "aurora_calendar/get_events",
        vol.Required("entity_ids"): [cv.entity_id],
        vol.Required("start"): cv.string,
        vol.Required("end"): cv.string,
    }
)
@async_response
async def handle_get_events(
    hass: HomeAssistant,
    connection: ActiveConnection,
    msg: dict,
) -> None:
    """Handle aurora_calendar/get_events — fetch and enrich calendar events."""
    start = dt_util.parse_datetime(msg["start"])
    end = dt_util.parse_datetime(msg["end"])

    if start is None or end is None:
        connection.send_error(msg["id"], "invalid_datetime", "Invalid start or end datetime")
        return

    if start.tzinfo is None:
        start = dt_util.as_utc(start)
    if end.tzinfo is None:
        end = dt_util.as_utc(end)

    all_events: list[dict] = []
    for entity_id in msg["entity_ids"]:
        events = await _fetch_entity_events(hass, entity_id, start, end)
        all_events.extend(events)

    connection.send_result(msg["id"], {"events": all_events})


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------

async def _fetch_entity_events(
    hass: HomeAssistant,
    entity_id: str,
    start: dt_mod.datetime,
    end: dt_mod.datetime,
) -> list[dict]:
    """Fetch events for one calendar entity, enriched with organizer data if available."""
    calendar_component = hass.data.get("entity_components", {}).get("calendar")
    if not calendar_component:
        return []

    entity = calendar_component.get_entity(entity_id)
    if not entity:
        return []

    try:
        ha_events = await entity.async_get_events(hass, start, end)
    except Exception as err:
        _LOGGER.warning("Failed to fetch events for %s: %s", entity_id, err)
        return []

    # Best-effort attendee enrichment for Google Calendar entities.
    # has_self_attendee=True  → calendar owner is an explicit attendee (guest copy)
    # has_self_attendee=False → calendar owner is not an attendee (home/originating calendar)
    self_attendee_map: dict[str, bool] = {}
    registry = er.async_get(hass)
    entity_entry = registry.async_get(entity_id)
    if entity_entry and entity_entry.platform == _GOOGLE_DOMAIN:
        self_attendee_map = await _get_google_organizer_map(hass, entity_entry, entity, start, end)

    result = []
    for event in ha_events:
        serialized = _serialize_event(event, entity_id)
        uid = serialized.get("uid")
        if uid is not None and uid in self_attendee_map:
            serialized["has_self_attendee"] = self_attendee_map[uid]
        result.append(serialized)

    return result


def _serialize_event(event: Any, entity_id: str) -> dict:
    """Serialize a HA CalendarEvent to the wire format expected by the card."""
    start = event.start
    end = event.end

    if isinstance(start, dt_mod.datetime):
        start_dict: dict = {"dateTime": dt_util.as_local(start).isoformat()}
        end_dict: dict = {"dateTime": dt_util.as_local(end).isoformat()}
    else:
        start_dict = {"date": start.isoformat()}
        end_dict = {"date": end.isoformat()}

    result: dict[str, Any] = {
        "entity_id": entity_id,
        "summary": event.summary,
        "start": start_dict,
        "end": end_dict,
    }

    if event.description:
        result["description"] = event.description
    if event.location:
        result["location"] = event.location
    if event.uid:
        result["uid"] = event.uid
    if event.recurrence_id:
        result["recurrence_id"] = event.recurrence_id
    rrule = getattr(event, "rrule", None)
    if rrule:
        result["rrule"] = rrule

    return result


async def _get_google_organizer_map(
    hass: HomeAssistant,
    entity_entry: Any,
    entity: Any,
    start: dt_mod.datetime,
    end: dt_mod.datetime,
) -> dict[str, bool]:
    """Return {uid: organizer_self} for a Google Calendar entity.

    Accesses the coordinator already attached to the entity — the same object
    HA uses internally — to get raw gcal_sync Event objects with full attendee
    data.  Returns an empty dict if the coordinator isn't accessible or the
    integration internals differ from the expected version.

    organizer_self is True when the calendar owner is the event organizer, which
    means this calendar is the one the event originated from.  It is determined
    by finding an attendee where both attendee.organizer and attendee.is_self
    are True.
    """
    try:
        # The coordinator lives on the entity (DataUpdateCoordinator pattern).
        coordinator = getattr(entity, "_coordinator", None) or getattr(entity, "coordinator", None)
        if coordinator is None:
            return {}

        raw_events = await coordinator.async_get_events(start, end)

        # has_self_attendee = True means the calendar owner is an explicit attendee
        # (i.e. this is a guest copy of the event).
        # has_self_attendee = False means the calendar owner is NOT in the attendee
        # list, which identifies this as the home/originating calendar.
        self_attendee_map: dict[str, bool] = {}
        for raw_event in raw_events:
            uid = getattr(raw_event, "ical_uuid", None)
            attendees = getattr(raw_event, "attendees", []) or []
            has_self = any(getattr(att, "is_self", False) for att in attendees)
            if uid:
                self_attendee_map[uid] = has_self

        return self_attendee_map

    except Exception as err:
        _LOGGER.debug(
            "Could not fetch Google organizer data for %s: %s",
            entity_entry.entity_id,
            err,
        )
        return {}
