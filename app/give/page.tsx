import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Give | Springhill Pentecostal Church',
  description: 'Give online to support the ministry of Springhill Pentecostal Church in Wesson, MS.',
};

const GIVE_URL = 'https://give.tithe.ly';

const giftImpacts = [
  {
    title: 'Ministry',
    desc: 'Funds Sunday services, Biblical teaching, music ministry, and everything that makes our weekly worship possible.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Missions',
    desc: 'Supports evangelism and mission work that spreads the Gospel beyond Wesson — across the nation and around the world.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Outreach',
    desc: 'Enables community events, feeding programs, and local outreach that serve our neighbors right here in Wesson.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Church Operations',
    desc: 'Covers facility maintenance, utilities, and the day-to-day needs that keep the doors open and the lights on.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

const verses = [
  {
    text: '"Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing."',
    ref:  'Malachi 3:10',
  },
  {
    text: '"Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."',
    ref:  '2 Corinthians 9:7',
  },
  {
    text: '"Honour the LORD with thy substance, and with the firstfruits of all thine increase: So shall thy barns be filled with plenty."',
    ref:  'Proverbs 3:9–10',
  },
];

export default function GivePage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-4">Generosity Changes Everything</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Give</h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
          Your giving fuels the mission of Springhill Pentecostal Church — in
          Wesson, MS and around the world. Every gift matters.
        </p>
      </section>

      {/* Why we give */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-5">Why We Give</h2>
            <p className="section-sub">
              Giving is an act of worship and trust. When we tithe and give offerings, we
              acknowledge that everything we have belongs to God and that His Kingdom is
              worth investing in. Your generosity funds preaching, community outreach,
              youth programs, and ministry both here at home and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How your gift helps */}
      <section className="py-16 bg-church-warm">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-12">
            <div className="gold-bar mx-auto mb-5" />
            <h2 className="section-heading mb-3">How Your Gift Helps</h2>
            <p className="section-sub max-w-lg mx-auto">
              Every dollar given to Springhill goes directly toward advancing the Kingdom
              of God in these four vital areas.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftImpacts.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="card p-7 text-center group hover:border-church-purple/30">
                  <div className="w-14 h-14 rounded-2xl bg-church-purple/[0.07] flex items-center justify-center mx-auto mb-5 text-church-purple group-hover:bg-church-purple group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Online giving CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <div className="card p-10 md:p-14 text-center ring-2 ring-church-purple/20">
              <div className="w-16 h-16 rounded-2xl bg-church-purple/[0.08] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-church-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="eyebrow text-xs bg-church-purple text-white px-3 py-1 rounded-full">
                Recommended
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-5 mb-3">Give Online</h2>
              <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
                Give securely anytime using a debit card, credit card, or bank transfer
                through our Tithe.ly giving portal. Quick, safe, and paperless.
              </p>
              <a href={GIVE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Give Now via Tithe.ly
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="text-xs text-slate-400 mt-4">You&apos;ll be taken to our secure Tithe.ly giving page.</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <ScrollReveal delay={80}>
              <div className="card p-6">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Give in Person</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Bring your tithe or offering to any Sunday service.
                  Offering envelopes are available at the doors.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="card p-6">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Mail a Check</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Make checks payable to &ldquo;Springhill Pentecostal Church&rdquo;
                  and mail to 1090 Springhill Road, Wesson, MS 39191.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-5">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-serif text-2xl font-bold text-white">
              What the Bible Says About Giving
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {verses.map((v, i) => (
              <ScrollReveal key={v.ref} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <svg className="w-7 h-7 text-church-gold mx-auto mb-4 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white/75 text-sm leading-relaxed italic mb-4">{v.text}</p>
                  <p className="text-church-gold text-sm font-semibold">{v.ref}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-xl mx-auto px-5">
          <ScrollReveal>
            <h2 className="section-heading mb-4">Questions About Giving?</h2>
            <p className="section-sub mb-8">
              Our team is happy to help with questions about online giving, tax receipts,
              or designated gifts.
            </p>
            <Link href="/prayer" className="btn-primary">Contact the Church Office</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
