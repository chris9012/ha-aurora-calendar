import { describe, expect, it } from "vitest";
import type { CreateEventDraft } from "../../src/types";
import {
  addDaysToDateInput,
  addHourToTimeInput,
  dateInputValue,
  draftError,
  normalizeDraft,
  timeInputValue,
} from "../../src/draft-utils";

const baseDraft = (overrides: Partial<CreateEventDraft> = {}): CreateEventDraft => ({
  calendarEntity: "calendar.family",
  title: "Test event",
  allDay: false,
  startDate: "2026-05-10",
  endDate: "2026-05-10",
  startTime: "10:00",
  endTime: "11:00",
  location: "",
  description: "",
  ...overrides,
});

describe("normalizeDraft", () => {
  it("leaves a valid draft untouched", () => {
    const d = baseDraft();
    expect(normalizeDraft(d)).toEqual(d);
  });

  it("does nothing when startDate is missing", () => {
    const d = baseDraft({ startDate: "" });
    expect(normalizeDraft(d)).toBe(d);
  });

  it("bumps endDate when it precedes startDate", () => {
    const d = baseDraft({ startDate: "2026-05-10", endDate: "2026-05-08" });
    expect(normalizeDraft(d).endDate).toBe("2026-05-10");
  });

  it("fills in endDate when missing", () => {
    const d = baseDraft({ endDate: "" });
    expect(normalizeDraft(d).endDate).toBe(d.startDate);
  });

  it("does NOT silently rewrite end time (validation handles that)", () => {
    const d = baseDraft({ startTime: "10:00", endTime: "09:00" });
    expect(normalizeDraft(d).endTime).toBe("09:00");
  });

  it("works the same for all-day events", () => {
    const d = baseDraft({ allDay: true, startDate: "2026-05-10", endDate: "2026-05-08" });
    expect(normalizeDraft(d).endDate).toBe("2026-05-10");
  });
});

describe("draftError", () => {
  it("returns empty when dates are missing (treated as in-progress)", () => {
    expect(draftError(baseDraft({ startDate: "" }))).toBe("");
    expect(draftError(baseDraft({ endDate: "" }))).toBe("");
  });

  it("returns empty for a valid same-day timed event", () => {
    expect(draftError(baseDraft())).toBe("");
  });

  it("flags same-day end time before start time", () => {
    const d = baseDraft({ startTime: "10:00", endTime: "09:00" });
    expect(draftError(d)).toBe("End time must be after start time.");
  });

  it("flags same-day end time equal to start time (zero-duration)", () => {
    const d = baseDraft({ startTime: "10:00", endTime: "10:00" });
    expect(draftError(d)).toBe("End time must be after start time.");
  });

  it("does NOT flag cross-day events even when end time is earlier in the day", () => {
    // 5/10 9am → 5/11 8am is valid (next morning)
    const d = baseDraft({
      startDate: "2026-05-10",
      endDate: "2026-05-11",
      startTime: "09:00",
      endTime: "08:00",
    });
    expect(draftError(d)).toBe("");
  });

  it("flags all-day end date before start date", () => {
    const d = baseDraft({
      allDay: true,
      startDate: "2026-05-10",
      endDate: "2026-05-09",
    });
    expect(draftError(d)).toBe("End date must be on or after start date.");
  });

  it("returns empty for a valid all-day single-day event", () => {
    const d = baseDraft({ allDay: true });
    expect(draftError(d)).toBe("");
  });

  it("returns empty for a multi-day all-day event", () => {
    const d = baseDraft({ allDay: true, startDate: "2026-05-10", endDate: "2026-05-12" });
    expect(draftError(d)).toBe("");
  });

  it("returns empty when times are missing on a non-all-day draft (still typing)", () => {
    expect(draftError(baseDraft({ startTime: "" }))).toBe("");
    expect(draftError(baseDraft({ endTime: "" }))).toBe("");
  });
});

describe("addHourToTimeInput", () => {
  it("adds an hour", () => {
    expect(addHourToTimeInput("09:00")).toBe("10:00");
    expect(addHourToTimeInput("13:30")).toBe("14:30");
  });

  it("preserves minutes", () => {
    expect(addHourToTimeInput("09:45")).toBe("10:45");
  });

  it("wraps past midnight to 00:MM", () => {
    expect(addHourToTimeInput("23:00")).toBe("00:00");
    expect(addHourToTimeInput("23:59")).toBe("00:59");
  });

  it("returns the input unchanged when not in HH:MM shape", () => {
    expect(addHourToTimeInput("garbage")).toBe("garbage");
    expect(addHourToTimeInput("")).toBe("");
  });
});

describe("addDaysToDateInput", () => {
  it("adds positive days", () => {
    expect(addDaysToDateInput("2026-05-10", 1)).toBe("2026-05-11");
    expect(addDaysToDateInput("2026-05-30", 5)).toBe("2026-06-04");
  });

  it("subtracts when given a negative number", () => {
    expect(addDaysToDateInput("2026-05-10", -1)).toBe("2026-05-09");
  });

  it("crosses a year boundary", () => {
    expect(addDaysToDateInput("2026-12-31", 1)).toBe("2027-01-01");
  });

  it("returns the input unchanged on a malformed date", () => {
    expect(addDaysToDateInput("not-a-date", 1)).toBe("not-a-date");
  });
});

describe("dateInputValue / timeInputValue", () => {
  it("formats date as YYYY-MM-DD using local components", () => {
    const d = new Date(2026, 4, 10); // May 10, 2026 (month is 0-indexed)
    expect(dateInputValue(d)).toBe("2026-05-10");
  });

  it("zero-pads months and days", () => {
    expect(dateInputValue(new Date(2026, 0, 5))).toBe("2026-01-05");
  });

  it("formats time as HH:MM zero-padded", () => {
    const d = new Date(2026, 4, 10, 9, 5);
    expect(timeInputValue(d)).toBe("09:05");
  });
});
