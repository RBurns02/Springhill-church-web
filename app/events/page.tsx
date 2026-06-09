import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Events | Springhill Pentecostal Church',
  description: 'Upcoming events and gatherings at Springhill Pentecostal Church.',
};

const events = [
  {
    date: '2026-06-19',
    title: 'BLAST — Kids Church',
    category: 'Kids',
    time: '7:00 PM',
    location: 'Springhill Pentecostal Church',
    desc: 'Theme: Daniel and the Lions Den. Bring your kids out for a night of fun, worship, and the Word!',
  },
  {
    date: '2026-06-27',
    title: '2nd Annual Pastoral Anniversary Service',
    category: 'Special Service',
    time: '7:00 PM',
    location: 'Springhill Pentecostal Church',
    desc: 'Join us as we celebrate our pastor. Rev. Nathaniel Urshan will be ministering to us. You do not want to miss this special evening.',
  },
];

const categoryColors: Record<string, string> = {
  'Kids':            'bg-emerald-50 text-emerald-700',
  'Special Service': 'bg-amber-50 text-amber-700',
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return {
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day:   d.getDate().toString(),
    full:  d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
  };
}

export default function EventsPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-4">Gather Together</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Events</h1>
        <p className="text-white/60 text-lg max-w-lg mx-auto leading-relaxed">
          Come be part of what God is doing at Springhill. Everyone is welcome.
        </p>
      </section>

      {/* Events list */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 space-y-4">
          {events.map((evt, i) => {
            const { month, day, full } = formatDate(evt.date);
            const categoryClass = categoryColors[evt.category] ?? 'bg-slate-50 text-slate-600';
            return (
              <ScrollReveal key={evt.title} delay={i * 80}>
                <div className="card flex flex-col sm:flex-row">
                  {/* Date badge */}
                  <div className="flex-shrink-0 w-full sm:w-20 bg-church-purple/[0.05] flex sm:flex-col items-center justify-center p-5 sm:p-4 gap-3 sm:gap-1 border-b sm:border-b-0 sm:border-r border-slate-100">
                    <p className="text-church-purple text-[10px] font-bold tracking-widest uppercase">{month}</p>
                    <p className="font-serif text-4xl sm:text-3xl font-bold text-slate-900 leading-none">{day}</p>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-lg font-bold text-slate-900">{evt.title}</h2>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryClass}`}>
                        {evt.category}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{evt.desc}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {full} · {evt.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {evt.location}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto px-5 mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">Have a question about an event?</p>
          <Link href="/prayer" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
