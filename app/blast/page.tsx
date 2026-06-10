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
    title: 'Bible Stories',
    desc: 'Every BLAST service brings a Bible story to life in a way kids can understand, connect with, and remember long after they leave.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Games & Activities',
    desc: 'Kids learn best when they\'re having fun. BLAST uses interactive games and activities to reinforce each lesson in an exciting, hands-on way.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Worship & Prayer',
    desc: 'Children are never too young to encounter God. BLAST creates a space where kids can worship freely and learn to talk to God in their own words.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function BlastPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-5">Children&apos;s Ministry</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight">BLAST Kids Church</h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
          A fun, interactive experience designed to bring kids closer to God —
          one Bible story at a time.
        </p>
      </section>

      {/* What is BLAST */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="gold-bar mb-6" />
              <h2 className="section-heading mb-5">What is BLAST?</h2>
              <p className="text-stone-600 leading-relaxed mb-5 text-lg">
                BLAST is Springhill&apos;s monthly kids church — a high-energy service
                built specifically for children ages 5–11. Every month we gather
                to teach valuable lessons and stories from the Bible in ways that
                are fun, interactive, and age-appropriate.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                Kids under 5 are welcome with a parent or guardian present.
                Everyone is invited — bring your kids, bring your neighbors&apos; kids,
                bring whoever you can find!
              </p>
              <Link href="/events" className="btn-primary">See Upcoming Dates</Link>
            </ScrollReveal>

            {/* At-a-glance card */}
            <ScrollReveal delay={100}>
              <div className="bg-church-warm p-10 space-y-6">
                <div>
                  <p className="eyebrow text-church-gold mb-2">Ages</p>
                  <p className="font-serif text-xl font-semibold text-stone-900">5–11 · No adult required</p>
                  <p className="text-stone-500 text-sm mt-1">Children under 5 welcome with a parent</p>
                </div>
                <div className="h-px bg-stone-200" />
                <div>
                  <p className="eyebrow text-church-gold mb-2">How Often</p>
                  <p className="font-serif text-xl font-semibold text-stone-900">Once a Month</p>
                  <p className="text-stone-500 text-sm mt-1">Check the events page for the next date</p>
                </div>
                <div className="h-px bg-stone-200" />
                <div>
                  <p className="eyebrow text-church-gold mb-2">Check-In</p>
                  <p className="font-serif text-xl font-semibold text-stone-900">No check-in required</p>
                  <p className="text-stone-500 text-sm mt-1">Just walk in — we&apos;re glad you&apos;re here</p>
                </div>
                <div className="h-px bg-stone-200" />
                <div>
                  <p className="eyebrow text-church-gold mb-2">Location</p>
                  <p className="font-serif text-xl font-semibold text-stone-900">Springhill Pentecostal Church</p>
                  <p className="text-stone-500 text-sm mt-1">1090 Springhill Road · Wesson, MS 39191</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What happens at BLAST */}
      <section className="py-24 bg-church-warm">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-14">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-3">What Happens at BLAST?</h2>
            <p className="section-sub max-w-lg mx-auto">
              Every service is different, but every service is designed to make
              kids fall in love with God and His Word.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="card p-9 group">
                  <div className="w-12 h-12 border border-stone-200 flex items-center justify-center mb-6 text-stone-600 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
                    {f.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">{f.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the leaders */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-3">Meet the Leaders</h2>
            <p className="section-sub mb-14">
              BLAST is led by people who genuinely love kids and are passionate
              about the next generation knowing God.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              {[
                { name: 'Seth Cliburn',   role: 'BLAST Kids Leader',    initials: 'SC' },
                { name: 'Kaitlyn Cliburn', role: 'BLAST Kids Leader',   initials: 'KC' },
              ].map((person) => (
                <div key={person.name} className="flex-1 max-w-xs mx-auto">
                  <div className="w-20 h-20 border border-stone-200 flex items-center justify-center mx-auto mb-5 text-stone-500">
                    <span className="font-serif text-xl font-bold tracking-wide">{person.initials}</span>
                  </div>
                  <p className="font-serif font-bold text-xl text-stone-900 mb-1">{person.name}</p>
                  <p className="eyebrow text-church-gold">{person.role}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-24 section-dark">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            <svg className="w-8 h-8 text-church-gold opacity-50 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-white/75 text-xl italic leading-relaxed mb-6">
              &ldquo;But Jesus said, Suffer little children, and forbid them not,
              to come unto me: for of such is the kingdom of heaven.&rdquo;
            </p>
            <p className="text-church-gold text-xs font-semibold tracking-[0.2em] uppercase mb-14">
              Matthew 19:14
            </p>
            <div className="gold-bar mx-auto mb-10" />
            <h2 className="font-serif text-3xl font-bold text-white mb-5">
              Ready to Bring Your Kids?
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Check the events page for the next BLAST date, or reach out to us
              with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events" className="btn-gold">View Upcoming Events</Link>
              <Link href="/prayer" className="btn-outline">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
