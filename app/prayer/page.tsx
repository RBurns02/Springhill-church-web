import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import ContactModal from '@/components/ContactModal';

export const metadata: Metadata = {
  title: 'Contact Us | Springhill Pentecostal Church',
  description:
    'Get in touch with Springhill Pentecostal Church in Wesson, MS. Send a prayer request, get directions, or reach out to our team.',
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

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-5">We&apos;d Love to Hear From You</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight">Contact Us</h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
          Whether you have a question, need directions, or want someone to pray with you —
          we&apos;re here.
        </p>
      </section>

      {/* ── Contact info cards ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-12">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading">Get in Touch</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {/* Address */}
            <ScrollReveal delay={0}>
              <div className="card p-8 text-center group">
                <div className="w-12 h-12 border border-stone-200 flex items-center justify-center mx-auto mb-5 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="eyebrow text-stone-400 mb-3">Address</p>
                <p className="font-serif font-semibold text-stone-900 mb-2">Springhill Pentecostal Church</p>
                <a
                  href="https://maps.google.com/?q=1090+Springhill+Road+Wesson+MS+39191"
                  target="_blank" rel="noopener noreferrer"
                  className="text-stone-500 text-sm leading-relaxed hover:text-church-gold transition-colors"
                >
                  1090 Springhill Road<br />Wesson, MS 39191
                </a>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={80}>
              <ContactModal />
            </ScrollReveal>

            {/* Service Times */}
            <ScrollReveal delay={160}>
              <div className="card p-8 text-center group">
                <div className="w-12 h-12 border border-stone-200 flex items-center justify-center mx-auto mb-5 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="eyebrow text-stone-400 mb-3">Service Times</p>
                <ul className="space-y-1.5 text-sm text-stone-500">
                  <li><span className="font-semibold text-stone-800">Sunday</span> · 10:00 AM &amp; 6:00 PM</li>
                  <li><span className="font-semibold text-stone-800">Monday</span> · 7:00 PM</li>
                  <li><span className="font-semibold text-stone-800">Wednesday</span> · 7:30 PM</li>
                  <li className="text-church-gold text-xs pt-1">1st Sun · Friends &amp; Family 2:00 PM</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal>
            <div className="overflow-hidden border border-stone-200 w-full" style={{ height: '340px' }}>
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
        </div>
      </section>

      {/* ── Prayer request form ── */}
      <section className="py-20 bg-church-warm">
        <div className="max-w-2xl mx-auto px-5">
          <ScrollReveal className="text-center mb-10">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-3">Send a Prayer Request</h2>
            <p className="section-sub">
              Share what&apos;s on your heart. Our prayer team reads every request and lifts
              each one before the Lord.
            </p>
          </ScrollReveal>

          <ScrollReveal>
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
