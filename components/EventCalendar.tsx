'use client';
import { useState } from 'react';

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

interface CalEvent {
  title: string;
  time: string;
  type: 'regular' | 'special';
}

// Special one-off events keyed by YYYY-MM-DD
const SPECIAL: Record<string, CalEvent[]> = {
  '2026-06-19': [{ title: 'BLAST — Kids Church',          time: '7:00 PM', type: 'special' }],
  '2026-06-27': [{ title: 'Pastoral Anniversary Service', time: '7:00 PM', type: 'special' }],
};

function recurringFor(date: Date): CalEvent[] {
  const dow = date.getDay();
  const dom = date.getDate();
  const events: CalEvent[] = [];

  if (dow === 0) {
    if (dom <= 7) {
      events.push({ title: 'Friends & Family Service', time: '2:00 PM', type: 'regular' });
    } else {
      events.push({ title: 'Morning Service',  time: '10:00 AM', type: 'regular' });
      events.push({ title: 'Evening Service',  time: '6:00 PM',  type: 'regular' });
    }
  }
  if (dow === 1) events.push({ title: 'Prayer Meeting', time: '7:00 PM',  type: 'regular' });
  if (dow === 3) events.push({ title: 'Bible Study',    time: '7:30 PM',  type: 'regular' });

  return events;
}

function dateKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function eventsFor(date: Date): CalEvent[] {
  return [...recurringFor(date), ...(SPECIAL[dateKey(date)] ?? [])];
}

// Full list of events for the side panel, sorted by date
function allEventsInMonth(year: number, month: number): { date: Date; events: CalEvent[] }[] {
  const results: { date: Date; events: CalEvent[] }[] = [];
  const days = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= days; d++) {
    const date = new Date(year, month, d);
    const events = eventsFor(date);
    if (events.length) results.push({ date, events });
  }
  return results;
}

export default function EventCalendar() {
  const today = new Date();
  const [year, setYear]   = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<string | null>(null);

  const firstDow  = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const todayKey  = dateKey(today);

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  const cells: (Date | null)[] = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => new Date(year, month, i + 1)),
  ];

  const monthEvents = allEventsInMonth(year, month);

  const selectedEvents = selected
    ? eventsFor(new Date(selected + 'T00:00:00'))
    : null;

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
      {/* ── Calendar grid ── */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.05)' }}>
        {/* Month nav */}
        <div className="flex items-center justify-between px-6 py-4 bg-church-purple text-white">
          <button onClick={prevMonth} aria-label="Previous month"
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="font-serif font-bold text-xl">{MONTH_NAMES[month]} {year}</h3>
          <button onClick={nextMonth} aria-label="Next month"
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-100">
          {DAY_LABELS.map(d => (
            <div key={d} className="py-2 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {d}
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 divide-x divide-y divide-slate-100">
          {cells.map((date, i) => {
            if (!date) {
              return <div key={`e${i}`} className="min-h-[72px] sm:min-h-[88px] bg-slate-50/40" />;
            }
            const key   = dateKey(date);
            const evts  = eventsFor(date);
            const isToday    = key === todayKey;
            const isSelected = key === selected;
            const hasSpecial = evts.some(e => e.type === 'special');
            const hasRegular = evts.some(e => e.type === 'regular');

            return (
              <button
                key={key}
                onClick={() => setSelected(isSelected ? null : key)}
                className={`min-h-[72px] sm:min-h-[88px] p-1.5 text-left transition-colors ${
                  isSelected ? 'bg-church-purple/8 ring-1 ring-inset ring-church-purple/30' : 'hover:bg-slate-50'
                }`}
              >
                <span className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full mb-1 ${
                  isToday
                    ? 'bg-church-purple text-white'
                    : isSelected
                    ? 'text-church-purple'
                    : 'text-slate-700'
                }`}>
                  {date.getDate()}
                </span>

                {/* Mobile: dots */}
                {evts.length > 0 && (
                  <div className="flex gap-0.5 flex-wrap sm:hidden">
                    {hasRegular && <span className="w-1.5 h-1.5 rounded-full bg-church-purple/60" />}
                    {hasSpecial && <span className="w-1.5 h-1.5 rounded-full bg-church-gold" />}
                  </div>
                )}

                {/* Desktop: labels */}
                <div className="hidden sm:block space-y-0.5">
                  {evts.slice(0, 2).map((e, j) => (
                    <div key={j} className={`text-[9px] leading-tight rounded px-1 py-px truncate ${
                      e.type === 'special'
                        ? 'bg-church-gold/15 text-amber-800 font-semibold'
                        : 'bg-church-purple/10 text-church-purple'
                    }`}>
                      {e.title}
                    </div>
                  ))}
                  {evts.length > 2 && (
                    <div className="text-[9px] text-slate-400 pl-1">+{evts.length - 2}</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 px-5 py-3 border-t border-slate-100 bg-slate-50">
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="w-2.5 h-2.5 rounded-sm bg-church-purple/10 border border-church-purple/30 flex-shrink-0" />
            Regular Services
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="w-2.5 h-2.5 rounded-sm bg-church-gold/20 border border-amber-300 flex-shrink-0" />
            Special Events
          </span>
          <span className="text-xs text-slate-400 sm:hidden">Tap a day for details</span>
        </div>
      </div>

      {/* ── Side panel ── */}
      <div className="space-y-4">
        {/* Selected day detail */}
        {selected && selectedEvents && selectedEvents.length > 0 && (
          <div className="bg-white rounded-2xl border border-church-purple/20 p-5" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.05)' }}>
            <p className="text-xs font-bold text-church-purple uppercase tracking-widest mb-3">
              {new Date(selected + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
            <ul className="space-y-2">
              {selectedEvents.map((e, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${e.type === 'special' ? 'bg-church-gold' : 'bg-church-purple'}`} />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{e.title}</p>
                    <p className="text-xs text-slate-400">{e.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Month summary */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.05)' }}>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            All Events — {MONTH_NAMES[month]}
          </p>
          {monthEvents.length === 0 ? (
            <p className="text-sm text-slate-400">No events this month.</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {monthEvents.map(({ date, events }) => (
                <li key={dateKey(date)} className="py-3">
                  <p className="text-xs font-bold text-slate-500 mb-1.5">
                    {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </p>
                  <ul className="space-y-1">
                    {events.map((e, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${e.type === 'special' ? 'bg-church-gold' : 'bg-church-purple/50'}`} />
                        <span className="text-slate-700 font-medium">{e.title}</span>
                        <span className="text-slate-400 ml-auto">{e.time}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
