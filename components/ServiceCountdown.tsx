'use client';

import { useEffect, useState } from 'react';

type Service = { day: number; hour: number; minute: number; label: string };

const SERVICES: Service[] = [
  { day: 0, hour: 10, minute: 0,  label: 'Sunday Morning Service' },
  { day: 0, hour: 18, minute: 0,  label: 'Sunday Evening Service' },
  { day: 1, hour: 19, minute: 0,  label: 'Monday Prayer Meeting'  },
  { day: 3, hour: 19, minute: 30, label: 'Wednesday Service'       },
];

// Services that don't meet on specific dates (YYYY-MM-DD)
const SKIPPED: Record<string, string[]> = {
  '2026-06-21': ['Sunday Evening Service'],                            // Father's Day — one service only
  '2026-06-28': ['Sunday Morning Service', 'Sunday Evening Service'], // One service at 2 PM
};

// One-time services on a specific date
const ONE_TIME: { date: string; hour: number; minute: number; label: string }[] = [
  { date: '2026-06-28', hour: 14, minute: 0, label: 'Sunday Service' },
];

function dateKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getNextService() {
  const now = new Date();
  let soonest: { label: string; target: Date } | null = null;

  for (const s of SERVICES) {
    const target = new Date(now);
    target.setHours(s.hour, s.minute, 0, 0);
    const diff = (s.day - now.getDay() + 7) % 7;
    target.setDate(target.getDate() + diff);
    if (target.getTime() <= now.getTime()) target.setDate(target.getDate() + 7);

    // Skip services cancelled on this specific date
    const skipped = SKIPPED[dateKey(target)] ?? [];
    if (skipped.includes(s.label)) continue;

    if (!soonest || target < soonest.target) soonest = { label: s.label, target };
  }

  // Check one-time services
  for (const ot of ONE_TIME) {
    const target = new Date(`${ot.date}T${String(ot.hour).padStart(2, '0')}:${String(ot.minute).padStart(2, '0')}:00`);
    if (target.getTime() <= now.getTime()) continue;
    if (!soonest || target < soonest.target) soonest = { label: ot.label, target };
  }

  return soonest!;
}

function toCountdown(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    days:    Math.floor(ms / 86400000),
    hours:   Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000)  / 60000),
    seconds: Math.floor((ms % 60000)    / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function ServiceCountdown() {
  const [state, setState] = useState<{ label: string; countdown: ReturnType<typeof toCountdown> } | null>(null);

  useEffect(() => {
    const tick = () => {
      const next = getNextService();
      setState({ label: next.label, countdown: toCountdown(next.target) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!state) return null;

  const { label, countdown } = state;
  const units = [
    { value: countdown.days,    label: 'Days'    },
    { value: countdown.hours,   label: 'Hours'   },
    { value: countdown.minutes, label: 'Min'     },
    { value: countdown.seconds, label: 'Sec'     },
  ];

  return (
    <div className="bg-church-dark border-b border-church-gold/20 py-12">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <p className="eyebrow text-church-gold mb-3">Next Service</p>
        <p className="font-serif text-lg text-white/80 mb-8">{label}</p>
        <div className="flex items-start justify-center gap-8 md:gap-14">
          {units.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-serif text-4xl md:text-5xl font-bold text-white tabular-nums leading-none">
                {pad(value)}
              </span>
              <span className="text-white/35 text-xs tracking-[0.2em] uppercase mt-2">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
