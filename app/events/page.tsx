import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import EventCalendar from '@/components/EventCalendar';

export const metadata: Metadata = {
  title: 'Events | Springhill Pentecostal Church',
  description: 'Upcoming events and gatherings at Springhill Pentecostal Church.',
};

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

      {/* Calendar */}
      <section className="py-16 bg-church-warm">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal className="mb-10">
            <div className="gold-bar mb-4" />
            <h2 className="section-heading mb-1">Church Calendar</h2>
            <p className="text-slate-500 text-sm">
              Regular services run every week. Tap any day on mobile to see details.
            </p>
          </ScrollReveal>
          <EventCalendar />
        </div>
      </section>

      {/* Upcoming special events */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal className="mb-8">
            <div className="gold-bar mb-4" />
            <h2 className="section-heading">Upcoming Special Events</h2>
          </ScrollReveal>

          <div className="space-y-4">
            <ScrollReveal delay={0}>
              <div className="card flex flex-col sm:flex-row">
                <div className="flex-shrink-0 w-full sm:w-20 bg-church-purple/[0.05] flex sm:flex-col items-center justify-center p-5 sm:p-4 gap-3 sm:gap-1 border-b sm:border-b-0 sm:border-r border-slate-100">
                  <p className="text-church-purple text-[10px] font-bold tracking-widest uppercase">JUN</p>
                  <p className="font-serif text-4xl sm:text-3xl font-bold text-slate-900 leading-none">19</p>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="text-lg font-bold text-slate-900">BLAST — Kids Church</h2>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">Kids</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">
                    Theme: Daniel and the Lions Den. Bring your kids out for a night of fun, worship, and the Word!
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Friday, June 19 · 7:00 PM
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Springhill Pentecostal Church
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="card flex flex-col sm:flex-row">
                <div className="flex-shrink-0 w-full sm:w-20 bg-church-gold/[0.07] flex sm:flex-col items-center justify-center p-5 sm:p-4 gap-3 sm:gap-1 border-b sm:border-b-0 sm:border-r border-slate-100">
                  <p className="text-church-gold text-[10px] font-bold tracking-widest uppercase">JUN</p>
                  <p className="font-serif text-4xl sm:text-3xl font-bold text-slate-900 leading-none">27</p>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="text-lg font-bold text-slate-900">2nd Annual Pastoral Anniversary Service</h2>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700">Special Service</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">
                    Join us as we celebrate our pastor. Rev. Nathaniel Urshan will be ministering to us.
                    You do not want to miss this special evening.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Saturday, June 27 · 7:00 PM
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Springhill Pentecostal Church
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-4">Have a question about an event?</p>
            <Link href="/prayer" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
