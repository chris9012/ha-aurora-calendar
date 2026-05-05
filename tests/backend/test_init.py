"""Tests for the integration's __init__ — entity ID migration and resource registration."""
from __future__ import annotations

from unittest.mock import patch

import pytest
from homeassistant.const import EVENT_HOMEASSISTANT_STARTED
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_registry as er
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.aurora_calendar import DOMAIN


async def test_drifted_entity_ids_get_migrated(hass: HomeAssistant) -> None:
    """A pre-existing entity registered with a wrong slug (e.g. sensor.events
    instead of sensor.aurora_calendar_events) must be auto-renamed during
    setup, otherwise the card — which hardcodes the expected IDs — breaks."""
    entry = MockConfigEntry(
        domain=DOMAIN,
        title="Aurora Calendar",
        data={"name": "Aurora Calendar"},
        options={"calendars": [], "weather_entity": ""},
        entry_id="01TESTENTRY",
    )
    entry.add_to_hass(hass)

    registry = er.async_get(hass)
    # Simulate the buggy state we shipped before v0.1.x: friendly-name slug.
    registry.async_get_or_create(
        domain="sensor",
        platform=DOMAIN,
        unique_id=f"{entry.entry_id}_events",
        suggested_object_id="events",
        config_entry=entry,
    )
    registry.async_get_or_create(
        domain="select",
        platform=DOMAIN,
        unique_id=f"{entry.entry_id}_view_mode",
        suggested_object_id="view_mode",
        config_entry=entry,
    )
    registry.async_get_or_create(
        domain="switch",
        platform=DOMAIN,
        unique_id=f"{entry.entry_id}_filter_birthdays",
        suggested_object_id="filter_birthdays",
        config_entry=entry,
    )

    # Patch out the heavy stuff — we only want to exercise migration.
    with patch(
        "custom_components.aurora_calendar.AuroraCalendarCoordinator"
    ), patch(
        "homeassistant.config_entries.ConfigEntries.async_forward_entry_setups",
        return_value=True,
    ), patch(
        "custom_components.aurora_calendar._register_card_resources",
        return_value=None,
    ):
        await hass.config_entries.async_setup(entry.entry_id)
        await hass.async_block_till_done()

    # After setup, all entity_ids should have the aurora_calendar_ prefix.
    sensor = registry.async_get_entity_id("sensor", DOMAIN, f"{entry.entry_id}_events")
    select = registry.async_get_entity_id("select", DOMAIN, f"{entry.entry_id}_view_mode")
    switch = registry.async_get_entity_id(
        "switch", DOMAIN, f"{entry.entry_id}_filter_birthdays"
    )
    assert sensor == "sensor.aurora_calendar_events"
    assert select == "select.aurora_calendar_view_mode"
    assert switch == "switch.aurora_calendar_filter_birthdays"


async def test_already_correct_entity_ids_are_not_renamed(
    hass: HomeAssistant,
) -> None:
    """Migration must be idempotent — re-running on already-correct IDs is a no-op."""
    entry = MockConfigEntry(
        domain=DOMAIN,
        title="Aurora Calendar",
        data={"name": "Aurora Calendar"},
        options={"calendars": [], "weather_entity": ""},
        entry_id="01TESTENTRY2",
    )
    entry.add_to_hass(hass)

    registry = er.async_get(hass)
    registry.async_get_or_create(
        domain="sensor",
        platform=DOMAIN,
        unique_id=f"{entry.entry_id}_events",
        suggested_object_id="aurora_calendar_events",
        config_entry=entry,
    )

    with patch(
        "custom_components.aurora_calendar.AuroraCalendarCoordinator"
    ), patch(
        "homeassistant.config_entries.ConfigEntries.async_forward_entry_setups",
        return_value=True,
    ), patch(
        "custom_components.aurora_calendar._register_card_resources",
        return_value=None,
    ):
        await hass.config_entries.async_setup(entry.entry_id)
        await hass.async_block_till_done()

    sensor = registry.async_get_entity_id("sensor", DOMAIN, f"{entry.entry_id}_events")
    assert sensor == "sensor.aurora_calendar_events"
