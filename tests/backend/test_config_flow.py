"""Config + options flow tests for Aurora Calendar."""
from __future__ import annotations

import pytest
from homeassistant import config_entries, data_entry_flow
from homeassistant.core import HomeAssistant
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.aurora_calendar import DOMAIN


async def _create_calendar_entity(hass: HomeAssistant, entity_id: str) -> None:
    """Make a fake calendar entity exist so the EntitySelector accepts it."""
    hass.states.async_set(entity_id, "on", {"friendly_name": entity_id.split(".")[-1]})


async def test_user_step_skips_name_prompt(
    hass: HomeAssistant, bypass_setup_fixture
) -> None:
    """The user step should jump straight to picking calendars — no name form."""
    result = await hass.config_entries.flow.async_init(
        DOMAIN, context={"source": config_entries.SOURCE_USER}
    )
    assert result["type"] == data_entry_flow.FlowResultType.FORM
    assert result["step_id"] == "calendars"


async def test_calendars_step_rejects_empty_selection(
    hass: HomeAssistant, bypass_setup_fixture
) -> None:
    """Submitting with no calendars surfaces the friendly error key — not the
    cryptic voluptuous "Entity is neither a valid entity ID nor a valid UUID"."""
    result = await hass.config_entries.flow.async_init(
        DOMAIN, context={"source": config_entries.SOURCE_USER}
    )
    result = await hass.config_entries.flow.async_configure(
        result["flow_id"],
        user_input={"calendar_entities": []},
    )
    assert result["type"] == data_entry_flow.FlowResultType.FORM
    assert result["step_id"] == "calendars"
    assert result["errors"] == {"calendar_entities": "no_calendars_selected"}


async def test_calendars_step_advances_to_details(
    hass: HomeAssistant, bypass_setup_fixture
) -> None:
    """Picking at least one calendar moves to the details step."""
    await _create_calendar_entity(hass, "calendar.family")

    result = await hass.config_entries.flow.async_init(
        DOMAIN, context={"source": config_entries.SOURCE_USER}
    )
    result = await hass.config_entries.flow.async_configure(
        result["flow_id"],
        user_input={"calendar_entities": ["calendar.family"]},
    )
    assert result["type"] == data_entry_flow.FlowResultType.FORM
    assert result["step_id"] == "details"


async def test_full_flow_creates_entry_with_options(
    hass: HomeAssistant, bypass_setup_fixture
) -> None:
    """End-to-end: calendars → details → entry created with the picked options."""
    await _create_calendar_entity(hass, "calendar.family")

    result = await hass.config_entries.flow.async_init(
        DOMAIN, context={"source": config_entries.SOURCE_USER}
    )
    result = await hass.config_entries.flow.async_configure(
        result["flow_id"],
        user_input={"calendar_entities": ["calendar.family"]},
    )
    # Submit the per-calendar details form (sections payload)
    result = await hass.config_entries.flow.async_configure(
        result["flow_id"],
        user_input={
            "calendar_1": {
                "calendar_entity": "calendar.family",
                "display_name": "Family",
                "color_mode": "override",
                "override_color": "#fbb1a8",
            },
        },
    )
    assert result["type"] == data_entry_flow.FlowResultType.CREATE_ENTRY
    assert result["title"] == "Aurora Calendar"
    assert result["options"]["calendars"][0]["entity_id"] == "calendar.family"
    assert result["options"]["calendars"][0]["person"] == "Family"


async def test_single_instance_aborts_second_flow(
    hass: HomeAssistant, bypass_setup_fixture
) -> None:
    """Adding a second config entry should be aborted."""
    MockConfigEntry(domain=DOMAIN, title="Aurora Calendar").add_to_hass(hass)
    result = await hass.config_entries.flow.async_init(
        DOMAIN, context={"source": config_entries.SOURCE_USER}
    )
    assert result["type"] == data_entry_flow.FlowResultType.ABORT
    assert result["reason"] == "single_instance_allowed"


async def test_options_flow_rejects_empty_selection(
    hass: HomeAssistant, bypass_setup_fixture
) -> None:
    """Same friendly error in the options flow — symmetrical with config."""
    entry = MockConfigEntry(
        domain=DOMAIN,
        title="Aurora Calendar",
        data={"name": "Aurora Calendar"},
        options={"calendars": [], "weather_entity": ""},
    )
    entry.add_to_hass(hass)

    result = await hass.config_entries.options.async_init(entry.entry_id)
    assert result["step_id"] == "calendars"

    result = await hass.config_entries.options.async_configure(
        result["flow_id"],
        user_input={"calendar_entities": []},
    )
    assert result["errors"] == {"calendar_entities": "no_calendars_selected"}
