import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Prayer | Springhill Pentecostal Church',
  description:
    'Submit a prayer request to Springhill Pentecostal Church. We believe prayer changes things.',
};

const scriptures = [
  {
    ref:  'Philippians 4:6',
    text: '"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God."',
  },
  {
    ref:  'Jeremiah 33:3',
    text: '"Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not."',
  },
  {
    ref:  'Matthew 7:7',
    text: '"Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you."',
  },
];

export default function PrayerPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-5">We&apos;re Here For You</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight">Prayer Changes Things</h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
          No matter what you&apos;re facing, we would be honored to pray with you.
          Submit a request below — our prayer team reads every one.
        </p>
      </section>

      {/* Prayer form + contact */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-16">

          {/* Form */}
          <ScrollReveal>
            <div className="gold-bar mb-6" />
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-2 tracking-tight">
              Send a Prayer Request
            </h2>
            <p className="text-stone-500 mb-8 leading-relaxed">
              Share what&apos;s on your heart. We will pray over every request with faith
              and sincerity.
            </p>

            {/*
              Formspree setup:
              1. Go to https://formspree.io — create a free account
              2. Create a new form → copy the endpoint URL
              3. Replace YOUR_FORMSPREE_ENDPOINT below
            */}
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-semibold tracking-[0.12em] uppercase text-stone-600 mb-2">
                  Your Name <span className="text-stone-400 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="name" name="name" type="text" placeholder="John Smith"
                  className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-church-gold focus:border-church-gold transition text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold tracking-[0.12em] uppercase text-stone-600 mb-2">
                  Email Address <span className="text-stone-400 normal-case tracking-normal">(optional — if you&apos;d like a reply)</span>
                </label>
                <input
                  id="email" name="email" type="email" placeholder="john@example.com"
                  className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-church-gold focus:border-church-gold transition text-sm"
                />
              </div>

              <div>
                <label htmlFor="request" className="block text-xs font-semibold tracking-[0.12em] uppercase text-stone-600 mb-2">
                  Prayer Request
                </label>
                <textarea
                  id="request" name="request" required rows={6}
                  placeholder="Share your prayer request here…"
                  className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-church-gold focus:border-church-gold transition resize-none text-sm"
                />
              </div>

              <div className="flex items-start gap-3">
                <input id="private" name="private" type="checkbox" className="mt-1 w-4 h-4 accent-church-gold" />
                <label htmlFor="private" className="text-sm text-stone-600 leading-relaxed">
                  Keep my prayer request private (shared only with our prayer team)
                </label>
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                Submit Prayer Request
              </button>

              <p className="text-xs text-stone-400 text-center">
                We respect your privacy. Your information will never be shared or sold.
              </p>
            </form>
          </ScrollReveal>

          {/* Sidebar */}
          <div className="space-y-5">
            <ScrollReveal delay={100}>
              <div className="card p-7">
                <h3 className="font-serif font-bold text-xl text-stone-900 mb-5">Need Someone to Talk To?</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  Sometimes you need more than a form. Our team is here to listen, encourage,
                  and pray with you personally. Don&apos;t hesitate to reach out.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
                      label: 'Pastor',
                      value: 'Pastor Tommy Lee',
                      href: undefined,
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                      label: 'Address',
                      value: '1090 Springhill Road\nWesson, MS 39191',
                      href: 'https://maps.google.com/?q=1090+Springhill+Road+Wesson+MS+39191',
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                      label: 'Email',
                      value: 'pastor@spcwesson.org',
                      href: 'mailto:pastor@spcwesson.org',
                    },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 border border-stone-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-stone-700 text-sm hover:text-church-gold transition-colors break-all whitespace-pre-line">{item.value}</a>
                        ) : (
                          <p className="text-stone-700 text-sm whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={150}>
              <div className="overflow-hidden border border-stone-200" style={{ height: '220px' }}>
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  loading="lazy"
                  title="Springhill Pentecostal Church location"
                  src="https://maps.google.com/maps?q=1090+Springhill+Road+Wesson+MS+39191&output=embed"
                />
              </div>
            </ScrollReveal>

            {/* Service times */}
            <ScrollReveal delay={200}>
              <div className="card p-7">
                <h3 className="font-serif font-bold text-xl text-stone-900 mb-1">Join Us in Person</h3>
                <p className="text-xs text-church-gold font-semibold mb-5 tracking-wide">
                  1st Sunday of every month — Friends &amp; Family Service at 2:00 PM
                </p>
                <ul className="divide-y divide-stone-100">
                  {[
                    { label: 'Sunday Morning Service',   day: 'Sunday',    time: '10:00 AM' },
                    { label: 'Sunday Evening Service',   day: 'Sunday',    time: '6:00 PM'  },
                    { label: 'Monday Prayer Meeting',    day: 'Monday',    time: '7:00 PM'  },
                    { label: 'Wednesday Service',        day: 'Wednesday', time: '7:30 PM'  },
                  ].map((s) => (
                    <li key={s.label} className="py-3 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-stone-800 text-sm">{s.label}</p>
                        <p className="text-stone-400 text-xs">{s.day}</p>
                      </div>
                      <span className="text-church-gold font-bold text-sm">{s.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scripture cards */}
      <section className="py-24 section-dark">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-14">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-white mb-3 tracking-tight">
              What the Bible Says About Prayer
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {scriptures.map((v, i) => (
              <ScrollReveal key={v.ref} delay={i * 100}>
                <div className="border border-white/10 p-8 text-center hover:border-church-gold/30 transition-colors">
                  <svg className="w-7 h-7 text-church-gold mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white/65 text-sm leading-relaxed italic mb-6">{v.text}</p>
                  <p className="text-church-gold text-xs font-semibold tracking-[0.15em] uppercase">{v.ref}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
