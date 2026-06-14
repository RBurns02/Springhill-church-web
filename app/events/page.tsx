import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import EventCalendar from '@/components/EventCalendar';
import { getUpcomingEvents } from '@/lib/events';

export const dynamic = 'force-dynamic'; // always render fresh so expired events drop off immediately

export const metadata: Metadata = {
  title: 'Events | Springhill Pentecostal Church',
  description: 'Upcoming events and gatherings at Springhill Pentecostal Church.',
  openGraph: {
    title: 'Events | Springhill Pentecostal Church',
    description: 'Upcoming events and gatherings at Springhill Pentecostal Church in Wesson, MS.',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-logo.png'] },
};

const clockIcon = (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const pinIcon = (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-5">Gather Together</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight">Events</h1>
        <p className="text-white/50 text-lg max-w-lg mx-auto leading-relaxed">
          Come be part of what God is doing at Springhill. Everyone is welcome.
        </p>
      </section>

      {/* Upcoming special events */}
      <section id="upcoming" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal className="mb-10">
            <div className="gold-bar mb-5" />
            <h2 className="section-heading">Upcoming Special Events</h2>
          </ScrollReveal>

          {upcomingEvents.length === 0 ? (
            <ScrollReveal>
              <p className="text-stone-400 text-sm py-10 text-center">No upcoming special events right now. Check back soon.</p>
            </ScrollReveal>
          ) : (
            <div className="space-y-4">
              {upcomingEvents.map((event, i) => {
                const href = event.detailsUrl ?? `/events/${event.slug}`;
                return (
                  <ScrollReveal key={event.slug} delay={i * 40}>
                    <div className={`card flex flex-col sm:flex-row group ${event.featured ? 'ring-1 ring-church-gold/30' : ''}`}>
                      <div className={`flex-shrink-0 w-full sm:w-20 flex sm:flex-col items-center justify-center p-5 sm:p-4 gap-3 sm:gap-1 border-b sm:border-b-0 sm:border-r border-stone-100 ${event.featured ? 'bg-church-gold/[0.04]' : ''}`}>
                        <p className="text-church-gold text-[10px] font-semibold tracking-widest uppercase">{event.month}</p>
                        <p className="font-serif text-4xl sm:text-3xl font-bold text-stone-900 leading-none">{event.day}</p>
                      </div>
                      <div className="p-6 flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h2 className="text-lg font-bold text-stone-900">{event.title}</h2>
                            <span className={`text-[10px] font-semibold px-2.5 py-0.5 tracking-wide uppercase ${event.featured ? 'bg-amber-50 text-amber-700' : 'bg-stone-100 text-stone-600'}`}>
                              {event.category}
                            </span>
                          </div>
                          <p className="text-stone-500 text-sm leading-relaxed mb-3">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-xs text-stone-400">
                            <span className="flex items-center gap-1.5">{clockIcon}{event.fullDate} · {event.time}</span>
                            {event.location && <span className="flex items-center gap-1.5">{pinIcon}{event.location}</span>}
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Link
                            href={href}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-church-gold hover:text-church-deep transition-colors"
                          >
                            View Details
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}

          <div className="mt-14 text-center">
            <p className="text-stone-400 text-sm mb-5">Have a question about an event?</p>
            <Link href="/prayer" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section id="calendar" className="py-20 bg-church-warm">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal className="mb-10">
            <div className="gold-bar mb-5" />
            <h2 className="section-heading mb-2">Church Calendar</h2>
            <p className="text-stone-500 text-sm">
              Regular services run every week. Tap any day on mobile to see details.
            </p>
          </ScrollReveal>
          <EventCalendar />
        </div>
      </section>
    </>
  );
}
