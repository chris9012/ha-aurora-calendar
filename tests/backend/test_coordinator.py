"""Tests for the coordinator's pure helpers and persons-deduplication logic."""
from __future__ import annotations

from unittest.mock import MagicMock

import pytest

from custom_components.aurora_calendar.coordinator import (
    AuroraCalendarCoordinator,
    _entity_to_person,
    _person_slug,
)


class TestEntityToPerson:
    def test_strips_calendar_prefix(self):
        assert _entity_to_person("calendar.jonathan") == "Jonathan"

    def test_underscores_become_spaces(self):
        assert _entity_to_person("calendar.fishing_creek_elementary") == (
            "Fishing Creek Elementary"
        )

    def test_title_cases(self):
        assert _entity_to_person("calendar.MOM") == "Mom"


class TestPersonSlug:
    def test_lowercases(self):
        assert _person_slug("David") == "david"

    def test_replaces_non_alphanumeric(self):
        assert _person_slug("Mom & Dad") == "mom_dad"
        assert _person_slug("Family - Personal") == "family_personal"

    def test_strips_leading_trailing_underscores(self):
        assert _person_slug("  hello  ") == "hello"


def _make_coordinator(calendars: list[dict]) -> AuroraCalendarCoordinator:
    """Build a coordinator with just enough scaffolding to read .persons."""
    coord = AuroraCalendarCoordinator.__new__(AuroraCalendarCoordinator)
    coord.entry = MagicMock()
    coord.entry.options = {"calendars": calendars, "weather_entity": ""}
    coord.hass = MagicMock()
    return coord


class TestPersonsDeduplication:
    def test_unique_persons_kept(self):
        coord = _make_coordinator([
            {"entity_id": "calendar.a", "person": "Alice", "color": "#fff"},
            {"entity_id": "calendar.b", "person": "Bob", "color": "#000"},
        ])
        names = [p["person"] for p in coord.persons]
        assert names == ["Alice", "Bob"]

    def test_duplicates_collapsed_to_first(self):
        """Two calendars with the same person → one entry, first one wins."""
        coord = _make_coordinator([
            {"entity_id": "calendar.a1", "person": "Alice", "color": "#aaa"},
            {"entity_id": "calendar.a2", "person": "Alice", "color": "#bbb"},
        ])
        persons = coord.persons
        assert len(persons) == 1
        assert persons[0]["person"] == "Alice"
        assert persons[0]["color"] == "#aaa"

    def test_falls_back_to_entity_derived_name(self):
        """No `person` field → derive from entity_id."""
        coord = _make_coordinator([
            {"entity_id": "calendar.gloria", "color": "#fff"},
        ])
        assert coord.persons[0]["person"] == "Gloria"

    def test_each_person_has_a_slug(self):
        coord = _make_coordinator([
            {"entity_id": "calendar.a", "person": "Mom & Dad", "color": "#fff"},
        ])
        assert coord.persons[0]["slug"] == "mom_dad"

    def test_color_falls_through_to_palette_when_missing(self):
        """No explicit color → a palette color is assigned."""
        coord = _make_coordinator([
            {"entity_id": "calendar.x", "person": "X"},
        ])
        # Just check we got SOMETHING that looks like a hex color.
        color = coord.persons[0]["color"]
        assert color.startswith("#") and len(color) == 7
