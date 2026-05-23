import type {
  HomeAssistant,
  CalendarEvent,
  CalendarInfo,
  WsCalendarEventRaw,
} from "./types.js";

export function getEnabledCalendars(
  calendars: CalendarInfo[],
  filters: Record<string, boolean>
): CalendarInfo[] {
  return calendars.filter((c) => filters[c.person] !== false);
}

export function eventHasConcluded(event: CalendarEvent, now = new Date()): boolean {
  if (event.all_day) {
    return new Date(`${event.end}T00:00:00`).getTime() <= now.getTime();
  }
  return new Date(event.end).getTime() <= now.getTime();
}

export async function fetchEventsForRange(
  hass: HomeAssistant,
  calendars: CalendarInfo[],
  start: Date,
  end: Date
): Promise<CalendarEvent[]> {
  if (calendars.length === 0) return [];

  const fetchEnd = new Date(end);
  fetchEnd.setDate(fetchEnd.getDate() + 1);

  // Build a lookup so we can map entity_id back to CalendarInfo
  const calByEntityId = new Map<string, CalendarInfo>(
    calendars.map((c) => [c.entity_id, c])
  );

  let wsEvents: WsCalendarEventRaw[];
  try {
    const result = await hass.callWS<{ events: WsCalendarEventRaw[] }>({
      type: "aurora_calendar/get_events",
      entity_ids: calendars.map((c) => c.entity_id),
      start: start.toISOString(),
      end: fetchEnd.toISOString(),
    });
    wsEvents = result.events;
  } catch {
    // WebSocket command unavailable (integration not loaded yet) — fall back
    // to the standard REST API so the card still works during development.
    return _fetchViaRestApi(hass, calendars, start, fetchEnd);
  }

  const events: CalendarEvent[] = wsEvents.flatMap((ev, i) => {
    const cal = calByEntityId.get(ev.entity_id);
    if (!cal) return [];
    return [_mapWsEvent(ev, cal, i)];
  });

  return deduplicateEvents(events);
}

// ---------------------------------------------------------------------------
// Deduplication
// ---------------------------------------------------------------------------

export function deduplicateEvents(events: CalendarEvent[]): CalendarEvent[] {
  // Group events by a stable key.  UID is preferred (iCal spec); fall back to
  // title+start for calendars that don't expose UIDs.
  const groups = new Map<string, CalendarEvent[]>();

  for (const event of events) {
    const key = event.uid
      ? `uid:${event.uid}:${event.recurrenceId ?? ""}`
      : `title:${event.title}:${event.start}`;

    const group = groups.get(key);
    if (group) {
      group.push(event);
    } else {
      groups.set(key, [event]);
    }
  }

  const deduped: CalendarEvent[] = [];

  for (const group of groups.values()) {
    if (group.length === 1) {
      deduped.push(group[0]);
      continue;
    }

    // Pick the primary copy:
    //   1. Prefer the copy where hasSelfAttendee === false — the calendar owner
    //      is NOT an explicit attendee, meaning this is the home/originating
    //      calendar the event was created in (Google Calendar only).
    //   2. Fall back to the first entry, which preserves config order.
    const primary =
      group.find((e) => e.hasSelfAttendee === false) ?? group[0];

    // Collect every person that appears in the duplicate group, primary first.
    const others = group.filter((e) => e !== primary).map((e) => e.person);
    const allPersons = [primary.person, ...new Set(others)];

    deduped.push({
      ...primary,
      attendees: allPersons,
    });
  }

  return deduped;
}

// ---------------------------------------------------------------------------
// Mapping helpers
// ---------------------------------------------------------------------------

function _mapWsEvent(
  ev: WsCalendarEventRaw,
  cal: CalendarInfo,
  index: number
): CalendarEvent {
  const startStr = ev.start.dateTime ?? ev.start.date ?? "";
  return {
    id:
      ev.uid ??
      `${cal.entity_id}:${index}:${startStr}`,
    title: ev.summary ?? "(no title)",
    start: startStr,
    end: ev.end.dateTime ?? ev.end.date ?? "",
    all_day: !ev.start.dateTime,
    person: cal.person,
    color: cal.effective_color ?? cal.color,
    description: ev.description,
    location: ev.location,
    calendarEntity: cal.entity_id,
    calendarName: cal.person,
    uid: ev.uid,
    recurrenceId: ev.recurrence_id ?? ev.recurrenceId,
    hasSelfAttendee: ev.has_self_attendee,
  };
}

// ---------------------------------------------------------------------------
// REST API fallback (used when the WebSocket command is unavailable)
// ---------------------------------------------------------------------------

async function _fetchViaRestApi(
  hass: HomeAssistant,
  calendars: CalendarInfo[],
  start: Date,
  end: Date
): Promise<CalendarEvent[]> {
  const s = encodeURIComponent(start.toISOString());
  const e = encodeURIComponent(end.toISOString());

  const results = await Promise.all(
    calendars.map(async (cal) => {
      try {
        const raw = await hass.callApi<WsCalendarEventRaw[]>(
          "GET",
          `calendars/${cal.entity_id}?start=${s}&end=${e}`
        );
        return raw.map((ev, i): CalendarEvent => ({
          id:
            ev.uid ??
            `${cal.entity_id}:${i}:${ev.start.dateTime ?? ev.start.date ?? ""}`,
          title: ev.summary ?? "(no title)",
          start: ev.start.dateTime ?? ev.start.date ?? "",
          end:   ev.end.dateTime   ?? ev.end.date   ?? "",
          all_day: !ev.start.dateTime,
          person: cal.person,
          color:  cal.effective_color ?? cal.color,
          description: ev.description,
          location: ev.location,
          calendarEntity: cal.entity_id,
          calendarName: cal.person,
          uid: ev.uid,
          recurrenceId: ev.recurrence_id ?? ev.recurrenceId,
        }));
      } catch {
        return [] as CalendarEvent[];
      }
    })
  );

  return deduplicateEvents(results.flat());
}
