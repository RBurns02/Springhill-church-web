import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'BLAST Kids Church | Springhill Pentecostal Church',
  description:
    'BLAST Kids Church at Springhill Pentecostal Church — a fun, interactive monthly ministry for kids ages 5–11 in Wesson, MS.',
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
      {/* ── HERO ── */}
      <section className="relative bg-church-dark overflow-hidden py-28 md:py-36 text-center">

        {/* Decorative gold stars */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <span className="absolute text-church-gold opacity-20 text-5xl" style={{ top: '12%', left: '6%' }}>✦</span>
          <span className="absolute text-church-gold opacity-15 text-3xl" style={{ top: '28%', left: '14%' }}>✦</span>
          <span className="absolute text-church-gold opacity-25 text-4xl" style={{ top: '60%', left: '5%' }}>✦</span>
          <span className="absolute text-church-gold opacity-20 text-2xl" style={{ top: '80%', left: '18%' }}>✦</span>
          <span className="absolute text-church-gold opacity-20 text-5xl" style={{ top: '10%', right: '7%' }}>✦</span>
          <span className="absolute text-church-gold opacity-15 text-3xl" style={{ top: '35%', right: '12%' }}>✦</span>
          <span className="absolute text-church-gold opacity-25 text-4xl" style={{ top: '65%', right: '6%' }}>✦</span>
          <span className="absolute text-church-gold opacity-10 text-6xl" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>✦</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5">
          <p className="eyebrow text-church-gold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Children&apos;s Ministry · Springhill Pentecostal Church
          </p>

          <h1
            className="font-serif font-black text-white leading-none tracking-tight mb-3 animate-fade-in-up"
            style={{ fontSize: 'clamp(5rem, 18vw, 11rem)', animationDelay: '0.2s' }}
          >
            BLAST
          </h1>

          <p className="font-serif text-church-gold text-2xl md:text-3xl font-bold mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Kids Church
          </p>

          <div className="gold-bar mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.35s' }} />

          <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            A high-energy monthly experience where kids ages 5–11 discover the
            Bible, make friends, and encounter God in ways that are just for them.
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

      {/* ── WHAT IS BLAST ── */}
      <section className="py-24 bg-white">
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

            {/* Info panel */}
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
      <section className="py-24 section-dark">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-16">
            <div className="gold-bar mx-auto mb-6" />
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
                <div className="border border-white/10 p-8 hover:border-church-gold/40 transition-colors group">
                  <p className="font-serif text-5xl font-black text-church-gold/25 leading-none mb-6 group-hover:text-church-gold/40 transition-colors">
                    {f.number}
                  </p>
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-5 text-white/60 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
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

      {/* ── LEADERS ── */}
      <section className="py-24 bg-church-warm">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-3">Meet the Leaders</h2>
            <p className="section-sub mb-14">
              Led by people who genuinely love kids and are passionate
              about the next generation knowing God.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              {[
                { name: 'Seth Cliburn',    initials: 'SC' },
                { name: 'Kaitlyn Cliburn', initials: 'KC' },
              ].map((p) => (
                <div key={p.name} className="flex-1 max-w-xs mx-auto">
                  <div className="w-20 h-20 bg-church-dark border border-church-gold/30 flex items-center justify-center mx-auto mb-5">
                    <span className="font-serif text-xl font-bold text-church-gold tracking-wide">{p.initials}</span>
                  </div>
                  <p className="font-serif font-bold text-xl text-stone-900 mb-1">{p.name}</p>
                  <p className="eyebrow text-church-gold">BLAST Kids Leader</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SCRIPTURE + CTA — gold background ── */}
      <section className="py-28 bg-church-gold">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            <svg className="w-8 h-8 text-church-dark opacity-30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-serif text-2xl md:text-3xl font-bold text-church-dark italic leading-relaxed mb-5">
              &ldquo;Suffer little children, and forbid them not, to come unto me:
              for of such is the kingdom of heaven.&rdquo;
            </blockquote>
            <p className="text-church-dark/50 text-xs font-semibold tracking-[0.2em] uppercase mb-14">
              Matthew 19:14
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
