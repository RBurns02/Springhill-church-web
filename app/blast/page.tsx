import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'BLAST Kids Church | Springhill Pentecostal Church',
  description:
    'BLAST Kids Church — Jonah & the Whale. A fun, interactive monthly ministry for kids ages 5–11 in Wesson, MS.',
  openGraph: {
    title: 'BLAST Kids Church | Springhill Pentecostal Church',
    description: 'A fun, interactive monthly ministry for kids ages 5–11. Bible stories, games, worship, and more.',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-logo.png'] },
};

const features = [
  {
    number: '01',
    title: 'Bible Stories',
    desc: 'Every BLAST service brings a Bible story to life — real characters, real adventure, and truth kids will carry with them long after they leave.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Games & Activities',
    desc: 'Kids learn best when they\'re having fun. Every lesson is brought to life through interactive games and hands-on activities that make it stick.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Worship & Prayer',
    desc: 'Children are never too young to encounter God. BLAST creates a space where kids worship freely and learn to talk to God in their own words.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function BlastPage() {
  return (
    <>
      {/* ── HERO — deep ocean theme ── */}
      <section
        className="relative overflow-hidden py-28 md:py-40 text-center text-white"
        style={{ background: 'linear-gradient(160deg, #020d1a 0%, #073352 50%, #041a2e 100%)' }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(34,211,238,0.10) 0%, transparent 65%)',
        }} />

        {/* Concentric ripple rings */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[500, 750, 1050, 1400].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-cyan-400/[0.06]"
              style={{ width: size, height: size, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          ))}
        </div>

        {/* Bubble glints */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[
            [8,20],[14,65],[6,82],[91,15],[87,58],[93,80],
            [44,10],[56,88],[28,48],[72,36],[20,38],[80,72],
            [35,25],[65,75],[50,5],
          ].map(([x, y], i) => (
            <div key={i} className="absolute rounded-full bg-cyan-300/25"
              style={{ left: `${x}%`, top: `${y}%`, width: i % 3 === 0 ? 6 : 4, height: i % 3 === 0 ? 6 : 4 }} />
          ))}
        </div>

        {/* Wave at bottom */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,45 C360,90 1080,0 1440,45 L1440,90 L0,90 Z" fill="rgba(255,255,255,0.02)" />
          <path d="M0,65 C480,25 960,80 1440,65 L1440,90 L0,90 Z" fill="rgba(255,255,255,0.035)" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-5">
          {/* Theme badge */}
          <div className="inline-flex items-center gap-3 border border-cyan-400/30 px-5 py-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5c.75-1.079 1.75-2 3-2s2.25.921 3 2 1.75 2 3 2 2.25-.921 3-2 1.75-2 3-2" />
            </svg>
            <span className="text-cyan-300 text-[10px] font-semibold tracking-[0.22em] uppercase">August 2026 · Jonah &amp; the Whale</span>
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5c.75-1.079 1.75-2 3-2s2.25.921 3 2 1.75 2 3 2 2.25-.921 3-2 1.75-2 3-2" />
            </svg>
          </div>

          <p className="eyebrow text-cyan-400 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Children&apos;s Ministry · Springhill Pentecostal Church
          </p>

          <h1
            className="font-serif font-black leading-none tracking-tight mb-3 animate-fade-in-up"
            style={{ fontSize: 'clamp(5rem, 18vw, 11rem)', animationDelay: '0.2s', color: '#22d3ee' }}
          >
            BLAST
          </h1>

          <p className="font-serif text-church-gold text-2xl md:text-3xl font-bold mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Kids Church
          </p>

          <div className="h-px w-16 bg-cyan-400/40 mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.35s' }} />

          <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            This month we&apos;re diving deep into the story of Jonah and the Whale —
            one of the greatest adventures in all of Scripture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
            <Link href="/events" className="btn-gold">See Next Date</Link>
            <Link href="/prayer" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ── GOLD STATS BAR ── */}
      <div className="bg-church-gold py-10">
        <div className="max-w-3xl mx-auto px-5 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-serif text-4xl md:text-5xl font-black text-church-dark leading-none">5–11</p>
            <p className="text-church-dark/60 text-xs tracking-[0.18em] uppercase font-semibold mt-2">Ages</p>
          </div>
          <div className="border-x border-church-dark/15">
            <p className="font-serif text-4xl md:text-5xl font-black text-church-dark leading-none">1×</p>
            <p className="text-church-dark/60 text-xs tracking-[0.18em] uppercase font-semibold mt-2">Per Month</p>
          </div>
          <div>
            <p className="font-serif text-4xl md:text-5xl font-black text-church-dark leading-none">FREE</p>
            <p className="text-church-dark/60 text-xs tracking-[0.18em] uppercase font-semibold mt-2">Just Walk In</p>
          </div>
        </div>
      </div>

      {/* ── THIS MONTH'S STORY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-14">
            <div className="h-px w-16 bg-cyan-500/50 mx-auto mb-6" />
            <p className="eyebrow text-cyan-600 mb-3">This Month&apos;s Story</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
              Jonah &amp; the Whale
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                heading: 'God Calls Jonah',
                body: "God told Jonah to go to Nineveh — but Jonah ran the other way. He got on a ship and tried to hide from God. Sound familiar? We all run sometimes.",
              },
              {
                num: '02',
                heading: 'Inside the Whale',
                body: "A great storm hit the ship, and Jonah was thrown overboard. Then God sent a giant fish to swallow him whole! For three days, Jonah sat in the dark — and finally prayed.",
              },
              {
                num: '03',
                heading: 'A Second Chance',
                body: "God heard Jonah's prayer and the whale spit him out. Jonah went to Nineveh, preached the Word — and the whole city turned to God. That's the mercy of God.",
              },
            ].map((s) => (
              <ScrollReveal key={s.num}>
                <div className="border border-stone-100 p-8 h-full hover:border-cyan-200 transition-colors group">
                  <p className="font-serif text-5xl font-black leading-none mb-5 text-cyan-500/20 group-hover:text-cyan-500/35 transition-colors">
                    {s.num}
                  </p>
                  <h3 className="font-serif font-bold text-stone-900 text-lg mb-3">{s.heading}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS BLAST ── */}
      <section className="py-24 bg-church-warm">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="gold-bar mb-6" />
              <h2 className="section-heading mb-6">What is BLAST?</h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-5">
                BLAST is Springhill&apos;s monthly kids church — built specifically for
                children ages <strong className="text-stone-900">5–11</strong>. Every month we gather to teach
                valuable lessons and stories from the Bible through games,
                activities, and worship that kids actually love.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                No sign-in, no stress — just walk right in. Children under 5 are
                welcome with a parent or guardian by their side. Bring your kids,
                bring your neighbors&apos; kids, bring whoever you can find!
              </p>
              <Link href="/events" className="btn-primary">Find the Next Date</Link>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-0 border border-stone-200">
                {[
                  { label: 'Ages',       value: '5–11 · No adult required',    sub: 'Children under 5 are welcome with a parent' },
                  { label: 'How Often',  value: 'Once a Month',                sub: 'Check the events page for the next date'    },
                  { label: 'Check-In',   value: 'No check-in needed',          sub: 'Just walk in — we\'re glad you\'re here'   },
                  { label: 'Location',   value: '1090 Springhill Rd, Wesson',  sub: 'Springhill Pentecostal Church'              },
                ].map((item, i) => (
                  <div key={item.label} className={`p-7 ${i < 3 ? 'border-b border-stone-200' : ''}`}>
                    <p className="eyebrow text-church-gold mb-1">{item.label}</p>
                    <p className="font-serif font-bold text-stone-900 text-lg">{item.value}</p>
                    <p className="text-stone-400 text-sm mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS ── */}
      <section
        className="relative py-24 overflow-hidden text-white"
        style={{ background: 'linear-gradient(160deg, #020d1a 0%, #073352 50%, #041a2e 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(34,211,238,0.07) 0%, transparent 65%)',
        }} />
        <svg className="absolute bottom-0 left-0 w-full opacity-40" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="rgba(255,255,255,0.03)" />
        </svg>

        <div className="relative z-10 max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-16">
            <div className="h-px w-16 bg-cyan-400/40 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
              What Happens at BLAST?
            </h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto">
              Every service is different — but every service is designed to make
              kids fall in love with God and His Word.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="border border-white/10 p-8 hover:border-cyan-400/30 transition-colors group">
                  <p className="font-serif text-5xl font-black text-cyan-400/20 leading-none mb-6 group-hover:text-cyan-400/35 transition-colors">
                    {f.number}
                  </p>
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-5 text-white/60 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all duration-300">
                    {f.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white mb-3">{f.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCRIPTURE + CTA ── */}
      <section className="py-28 bg-church-gold">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            <svg className="w-8 h-8 text-church-dark opacity-30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-serif text-2xl md:text-3xl font-bold text-church-dark italic leading-relaxed mb-5">
              &ldquo;Salvation is of the LORD.&rdquo;
            </blockquote>
            <p className="text-church-dark/50 text-xs font-semibold tracking-[0.2em] uppercase mb-14">
              Jonah 2:9
            </p>

            <div className="h-px w-16 bg-church-dark/20 mx-auto mb-10" />

            <h2 className="font-serif text-4xl md:text-5xl font-black text-church-dark mb-5 tracking-tight">
              Ready to Bring<br />Your Kids?
            </h2>
            <p className="text-church-dark/60 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
              Check the events page for the next BLAST date.
              No registration, no fee — just show up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-church-dark text-white text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-church-deep active:scale-[0.98]">
                View Upcoming Events
              </Link>
              <Link href="/prayer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-church-dark text-church-dark text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-church-dark hover:text-white active:scale-[0.98]">
                Contact Us
              </Link>
            </div>
            <p className="text-church-dark/40 text-xs mt-10">
              Led by Seth &amp; Kaitlyn Cliburn
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
