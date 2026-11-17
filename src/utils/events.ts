/**
 * Splitting the calendar into what is still coming and what has already
 * happened.
 *
 * Dates in the data files are plain YYYY-MM-DD strings, so everything here
 * compares them as strings. That sorts and compares correctly for ISO dates and
 * avoids the time-zone drift you get from parsing to Date and back.
 */
import type { CalendarEvent } from '../data/events';

/**
 * The club's time zone. "Today" is decided here rather than in UTC: San Diego
 * is 7 to 8 hours behind UTC, so a UTC clock rolls over to tomorrow at 4 or 5 PM
 * local time, which would mark a 6 PM meeting as already over before it starts.
 *
 * The inline scripts in UpNext.astro and calendar.astro repeat this zone,
 * because they run in the browser and cannot import from here.
 */
export const CLUB_TIME_ZONE = 'America/Los_Angeles';

/** Today as YYYY-MM-DD on the club's clock. */
export function todayISO(now: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: CLUB_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? '';
  return `${get('year')}-${get('month')}-${get('day')}`;
}

export interface SplitEvents {
  /** Today onwards, soonest first. An event still counts on the day it runs. */
  upcoming: CalendarEvent[];
  /** Already happened, most recent first. */
  past: CalendarEvent[];
}

export function splitEvents(events: CalendarEvent[], today: string): SplitEvents {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  return {
    upcoming: sorted.filter((event) => event.date >= today),
    past: sorted.filter((event) => event.date < today).reverse(),
  };
}

/** Keep semesters in date order: Fall 2026 before Spring 2027. */
export function groupBySemester(
  events: CalendarEvent[],
  semesterOf: (date: string) => string,
): Map<string, CalendarEvent[]> {
  const semesters = new Map<string, CalendarEvent[]>();
  for (const event of events) {
    const key = semesterOf(event.date);
    semesters.set(key, [...(semesters.get(key) ?? []), event]);
  }
  return semesters;
}
