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

  const isOutdoor     = event.theme === 'outdoor';
  const isAnniversary = event.theme === 'anniversary';

  return (
    <>
      {/* ── HERO ── */}
      {isOutdoor ? (
        /* ── OUTDOOR / KAYAKING HERO ── */
        <section
          className="relative overflow-hidden py-32 md:py-44 text-center text-white"
          style={{ background: 'linear-gradient(160deg, #060f1c 0%, #0b3045 45%, #091f18 100%)' }}
        >
          {/* Concentric ripple rings */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {[500, 750, 1050, 1400].map((size) => (
              <div
                key={size}
                className="absolute rounded-full border border-cyan-400/[0.07]"
                style={{
                  width: size, height: size,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
            {/* Subtle wave at bottom */}
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 1440 90"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,45 C360,90 1080,0 1440,45 L1440,90 L0,90 Z" fill="rgba(255,255,255,0.025)" />
              <path d="M0,65 C480,25 960,80 1440,65 L1440,90 L0,90 Z" fill="rgba(255,255,255,0.04)" />
            </svg>
            {/* Scattered stars/water glints — deterministic positions */}
            {[
              [8,18],[15,62],[6,80],[92,14],[88,55],[94,78],
              [45,8],[55,88],[30,45],[70,38],[22,35],[78,70],
            ].map(([x, y], i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-cyan-300/30"
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-5">
            {/* Wave icon */}
            <div className="w-14 h-14 mx-auto mb-8 border border-cyan-400/30 flex items-center justify-center">
              <svg className="w-7 h-7 text-cyan-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5c.75-1.079 1.75-2 3-2s2.25.921 3 2 1.75 2 3 2 2.25-.921 3-2 1.75-2 3-2M3.75 8.5c.75-1.079 1.75-2 3-2s2.25.921 3 2 1.75 2 3 2 2.25-.921 3-2 1.75-2 3-2" />
              </svg>
            </div>

            <p className="eyebrow text-cyan-400 mb-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {event.category} · {event.fullDate}
            </p>
            <h1
              className="font-serif text-5xl md:text-7xl font-bold mb-5 tracking-tight leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              {event.title}
            </h1>
            {event.tagline && (
              <p
                className="text-cyan-200/50 text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                {event.tagline}
              </p>
            )}
            <div
              className="flex flex-wrap items-center justify-center gap-5 text-white/50 text-sm animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.time}
              </span>
              {event.location && (
                <>
                  <span className="text-white/20">·</span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                </>
              )}
            </div>
          </div>
        </section>

      ) : isAnniversary ? (
        /* ── ANNIVERSARY / CELEBRATION HERO ── */
        <section
          className="relative overflow-hidden py-32 md:py-44 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #080602 0%, #110e06 55%, #080602 100%)' }}
        >
          {/* Radial gold glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Sparkle decorations */}
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            <span className="absolute text-church-gold opacity-[0.18] text-5xl" style={{ top: '12%', left: '5%' }}>✦</span>
            <span className="absolute text-church-gold opacity-[0.12] text-3xl" style={{ top: '30%', left: '12%' }}>✦</span>
            <span className="absolute text-church-gold opacity-[0.22] text-4xl" style={{ top: '62%', left: '4%' }}>✦</span>
            <span className="absolute text-church-gold opacity-[0.10] text-2xl" style={{ top: '82%', left: '16%' }}>✦</span>
            <span className="absolute text-church-gold opacity-[0.18] text-5xl" style={{ top: '10%', right: '6%' }}>✦</span>
            <span className="absolute text-church-gold opacity-[0.12] text-3xl" style={{ top: '36%', right: '11%' }}>✦</span>
            <span className="absolute text-church-gold opacity-[0.22] text-4xl" style={{ top: '65%', right: '5%' }}>✦</span>
            <span className="absolute text-church-gold opacity-[0.08] text-6xl" style={{ top: '48%', left: '50%', transform: 'translate(-50%,-50%)' }}>✦</span>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-5">
            {/* Anniversary badge */}
            <div
              className="inline-flex items-center gap-2 border border-church-gold/40 px-5 py-2 mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.05s' }}
            >
              <svg className="w-3.5 h-3.5 text-church-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-church-gold text-[10px] font-semibold tracking-[0.2em] uppercase">2nd Annual</span>
              <svg className="w-3.5 h-3.5 text-church-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            <p
              className="eyebrow text-church-gold mb-5 animate-fade-in-up"
              style={{ animationDelay: '0.15s' }}
            >
              {event.category} · {event.fullDate}
            </p>
            <h1
              className="font-serif text-4xl md:text-6xl font-bold mb-5 tracking-tight leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.25s' }}
            >
              Pastoral Anniversary<br />
              <span className="text-church-gold">Service</span>
            </h1>
            {event.tagline && (
              <p
                className="text-white/40 text-lg max-w-xl mx-auto mb-10 animate-fade-in-up"
                style={{ animationDelay: '0.35s' }}
              >
                {event.tagline}
              </p>
            )}

            <div
              className="gold-bar mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            />

            <div
              className="flex flex-wrap items-center justify-center gap-5 text-white/50 text-sm animate-fade-in-up"
              style={{ animationDelay: '0.45s' }}
            >
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
          </div>
        </section>

      ) : (
        /* ── DEFAULT HERO ── */
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
      )}

      {/* ── DETAILS ── */}
      <section className={`py-24 ${isAnniversary ? 'bg-stone-50' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="md:col-span-2">
              <ScrollReveal>
                <div className={`h-px w-10 mb-6 ${isOutdoor ? 'bg-cyan-500' : 'bg-church-gold'}`} />
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-5">About This Event</h2>
                <p className="text-stone-600 leading-relaxed text-lg mb-8">{event.body}</p>

                {event.highlights && (
                  <ul className="space-y-3">
                    {event.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-stone-600 text-sm">
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            isOutdoor ? 'bg-cyan-500' : 'bg-church-gold'
                          }`}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <ScrollReveal delay={100}>
              <div className={`space-y-0 border ${isAnniversary ? 'border-church-gold/25' : 'border-stone-200'}`}>
                {isAnniversary && (
                  <div className="h-1 bg-church-gold" />
                )}
                <div className={`p-6 border-b ${isAnniversary ? 'border-church-gold/15' : 'border-stone-100'}`}>
                  <p className={`eyebrow mb-1 ${isOutdoor ? 'text-cyan-600' : 'text-church-gold'}`}>Date</p>
                  <p className="font-serif font-bold text-stone-900">{event.fullDate}</p>
                </div>
                <div className={`p-6 border-b ${isAnniversary ? 'border-church-gold/15' : 'border-stone-100'}`}>
                  <p className={`eyebrow mb-1 ${isOutdoor ? 'text-cyan-600' : 'text-church-gold'}`}>Time</p>
                  <p className="font-serif font-bold text-stone-900">{event.time}</p>
                </div>
                {event.location && (
                  <div className={`p-6 border-b ${isAnniversary ? 'border-church-gold/15' : 'border-stone-100'}`}>
                    <p className={`eyebrow mb-1 ${isOutdoor ? 'text-cyan-600' : 'text-church-gold'}`}>Location</p>
                    <p className="font-serif font-bold text-stone-900">{event.location}</p>
                  </div>
                )}
                {event.speaker && (
                  <div className={`p-6 border-b ${isAnniversary ? 'border-church-gold/15' : 'border-stone-100'}`}>
                    <p className={`eyebrow mb-1 ${isOutdoor ? 'text-cyan-600' : 'text-church-gold'}`}>Speaker</p>
                    <p className="font-serif font-bold text-stone-900">{event.speaker}</p>
                  </div>
                )}
                <div className="p-6">
                  <a
                    href={event.gcalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                      isOutdoor
                        ? 'text-stone-500 hover:text-cyan-600'
                        : 'text-stone-500 hover:text-church-gold'
                    }`}
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

      {/* ── CTA ── */}
      {isOutdoor ? (
        <section
          className="py-24 text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #060f1c 0%, #0b3045 50%, #091f18 100%)' }}
        >
          <svg
            className="absolute bottom-0 left-0 w-full opacity-50"
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="rgba(255,255,255,0.03)" />
          </svg>
          <div className="relative z-10 max-w-2xl mx-auto px-5">
            <ScrollReveal>
              <div className="h-px w-10 bg-cyan-500 mx-auto mb-6" />
              <h2 className="font-serif text-3xl font-bold text-white mb-4">We&apos;d Love to See You There</h2>
              <p className="text-white/45 leading-relaxed mb-10">
                Have questions about the kayaking trip? Reach out and we&apos;ll get you the details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/prayer" className="btn-gold">Contact Us</Link>
                <Link href="/events" className="btn-outline">All Events</Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      ) : isAnniversary ? (
        <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #080602 0%, #110e06 55%, #080602 100%)' }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.10) 0%, transparent 70%)' }}
          />
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            <span className="absolute text-church-gold opacity-[0.12] text-4xl" style={{ top: '20%', left: '8%' }}>✦</span>
            <span className="absolute text-church-gold opacity-[0.12] text-4xl" style={{ top: '20%', right: '8%' }}>✦</span>
            <span className="absolute text-church-gold opacity-[0.08] text-3xl" style={{ bottom: '25%', left: '18%' }}>✦</span>
            <span className="absolute text-church-gold opacity-[0.08] text-3xl" style={{ bottom: '25%', right: '18%' }}>✦</span>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
            <ScrollReveal>
              <div className="gold-bar mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                We&apos;d Love to See You There
              </h2>
              <p className="text-white/45 leading-relaxed mb-10">
                Have questions about the service? Reach out — we&apos;re happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/prayer" className="btn-gold">Contact Us</Link>
                <Link href="/events" className="btn-outline">All Events</Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      ) : (
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
      )}
    </>
  );
}
