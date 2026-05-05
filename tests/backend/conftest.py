"""Shared test fixtures for the Aurora Calendar integration."""
from __future__ import annotations

from collections.abc import Generator
from unittest.mock import patch

import pytest


@pytest.fixture(autouse=True)
def auto_enable_custom_integrations(
    enable_custom_integrations: None,
) -> None:
    """Make HA load `custom_components/aurora_calendar` for every test."""
    return


@pytest.fixture
def bypass_setup_fixture() -> Generator[None, None, None]:
    """Skip the integration's actual entity platform setup in unit tests
    that only care about the config flow / migration logic."""
    with patch(
        "custom_components.aurora_calendar.async_setup_entry",
        return_value=True,
    ):
        yield
