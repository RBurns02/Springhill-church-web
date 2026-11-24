import { NextResponse } from 'next/server';
import { getEventBySlug } from '@/lib/events';

function escapeIcs(str: string): string {
  return str.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n');
}

function parseGcalDates(gcalUrl: string): { dtstart: string; dtend: string; tzid: string; allDay: boolean } {
  try {
    const url = new URL(gcalUrl);
    const dates = url.searchParams.get('dates') ?? '';
    const [dtstart = '', dtend = ''] = dates.split('/');
    const tzid = url.searchParams.get('ctz') ?? 'America/Chicago';
    return { dtstart, dtend, tzid, allDay: !dtstart.includes('T') };
  } catch {
    return { dtstart: '', dtend: '', tzid: 'America/Chicago', allDay: false };
  }
}

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) return new NextResponse('Not Found', { status: 404 });

  const { dtstart, dtend, tzid, allDay } = parseGcalDates(event.gcalUrl);
  if (!dtstart) return new NextResponse('Invalid event data', { status: 500 });

  const dtStartLine = allDay ? `DTSTART;VALUE=DATE:${dtstart}` : `DTSTART;TZID=${tzid}:${dtstart}`;
  const dtEndLine   = dtend
    ? allDay ? `DTEND;VALUE=DATE:${dtend}` : `DTEND;TZID=${tzid}:${dtend}`
    : '';

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Springhill Pentecostal Church//spcwesson.com//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.slug}@spcwesson.com`,
    dtStartLine,
    dtEndLine,
    `SUMMARY:${escapeIcs(event.title)}`,
    `DESCRIPTION:${escapeIcs(event.description)}`,
    `LOCATION:${escapeIcs(event.location)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean).join('\r\n');

  return new NextResponse(lines, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${event.slug}.ics"`,
      'Cache-Control': 'no-cache',
    },
  });
}
