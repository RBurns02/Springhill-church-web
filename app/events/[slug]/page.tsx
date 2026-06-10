import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { getEventBySlug, events } from '@/lib/events';

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const event = getEventBySlug(params.slug);
  if (!event) return {};
  return {
    title: `${event.title} | Springhill Pentecostal Church`,
    description: event.description,
    openGraph: {
      title: `${event.title} | Springhill Pentecostal Church`,
      description: event.description,
      images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', images: ['/og-logo.png'] },
  };
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);

  if (!event) notFound();
  if (event.expires <= new Date()) redirect('/events');
  if (event.detailsUrl) redirect(event.detailsUrl);

  return (
    <>
      {/* Hero */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-5">
          {event.category} · {event.fullDate}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          {event.title}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 text-white/50 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-church-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {event.time}
          </span>
          {event.location && (
            <>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-church-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </span>
            </>
          )}
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="md:col-span-2">
              <ScrollReveal>
                <div className="gold-bar mb-6" />
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-5">About This Event</h2>
                <p className="text-stone-600 leading-relaxed text-lg mb-8">{event.body}</p>

                {event.highlights && (
                  <ul className="space-y-3">
                    {event.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-stone-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-church-gold flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <ScrollReveal delay={100}>
              <div className="space-y-0 border border-stone-200">
                <div className="p-6 border-b border-stone-100">
                  <p className="eyebrow text-church-gold mb-1">Date</p>
                  <p className="font-serif font-bold text-stone-900">{event.fullDate}</p>
                </div>
                <div className="p-6 border-b border-stone-100">
                  <p className="eyebrow text-church-gold mb-1">Time</p>
                  <p className="font-serif font-bold text-stone-900">{event.time}</p>
                </div>
                {event.location && (
                  <div className="p-6 border-b border-stone-100">
                    <p className="eyebrow text-church-gold mb-1">Location</p>
                    <p className="font-serif font-bold text-stone-900">{event.location}</p>
                  </div>
                )}
                {event.speaker && (
                  <div className="p-6 border-b border-stone-100">
                    <p className="eyebrow text-church-gold mb-1">Speaker</p>
                    <p className="font-serif font-bold text-stone-900">{event.speaker}</p>
                  </div>
                )}
                <div className="p-6">
                  <a
                    href={event.gcalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-stone-500 hover:text-church-gold transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Add to Google Calendar
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-dark">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-white mb-4">We&apos;d Love to See You There</h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Have questions about this event? Reach out — we&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prayer" className="btn-gold">Contact Us</Link>
              <Link href="/events" className="btn-outline">All Events</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
