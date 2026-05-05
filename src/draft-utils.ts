/**
 * Pure helpers for working with the create/edit-event draft state.
 *
 * Extracted from `aurora-calendar-card.ts` so they can be unit-tested
 * without instantiating the full Lit element. Anything in this module
 * MUST be a pure function — no `this`, no DOM, no `hass`.
 */

import type { CreateEventDraft } from "./types";

/**
 * Auto-correct silently-fixable issues on the draft. Currently:
 *   - end date < start date  →  bumped to equal start date
 *
 * Times are NOT auto-corrected: validation surfaces them inline so the
 * user can see and fix what they typed.
 */
export function normalizeDraft(draft: CreateEventDraft): CreateEventDraft {
  if (!draft.startDate) return draft;
  if (!draft.endDate || draft.endDate < draft.startDate) {
    return { ...draft, endDate: draft.startDate };
  }
  return draft;
}

/**
 * Returns a user-facing error string when the draft is invalid, or
 * empty string when it's OK. Used to disable the Save button and show
 * an inline message in the dialog.
 */
export function draftError(draft: CreateEventDraft): string {
  if (!draft.startDate || !draft.endDate) return "";
  if (draft.allDay) {
    return draft.endDate < draft.startDate
      ? "End date must be on or after start date."
      : "";
  }
  if (!draft.startTime || !draft.endTime) return "";
  const start = `${draft.startDate} ${draft.startTime}`;
  const end = `${draft.endDate} ${draft.endTime}`;
  if (end <= start) return "End time must be after start time.";
  return "";
}

/** Add `days` to a YYYY-MM-DD string, returning the same format. */
export function addDaysToDateInput(value: string, days: number): string {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  date.setDate(date.getDate() + days);
  return dateInputValue(date);
}

/** Convert a Date → YYYY-MM-DD using local-date components. */
export function dateInputValue(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Convert a Date → HH:MM in 24-hour, using local hours/minutes. */
export function timeInputValue(date: Date): string {
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

/** Add 1 hour to an "HH:MM" string, wrapping past midnight to "00:MM". */
export function addHourToTimeInput(value: string): string {
  const match = /^(\d{1,2}):(\d{2})/.exec(value);
  if (!match) return value;
  const hours = (parseInt(match[1], 10) + 1) % 24;
  return `${String(hours).padStart(2, "0")}:${match[2]}`;
}
