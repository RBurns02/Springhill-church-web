import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'New Here | Springhill Pentecostal Church',
  description: 'Thinking about visiting Springhill Pentecostal Church? You are welcome here. Come as you are.',
  openGraph: {
    title: 'New Here | Springhill Pentecostal Church',
    description: 'You are welcome here. Come as you are — Springhill Pentecostal Church in Wesson, MS.',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-logo.png'] },
};

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    heading: 'Real People',
    body: "We're not a perfect church — we're a family of people who love God and love each other. You'll be greeted with a genuine handshake, not a stranger's smile.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    heading: 'A Place to Belong',
    body: "Whether you've been in church your whole life or you're stepping through those doors for the first time — you have a place here. Everyone belongs before they believe.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    heading: 'The Word, Preached Straight',
    body: "Every Sunday you'll hear the Bible taught with clarity and conviction — not watered down, not complicated. Just the truth of God's Word, applied to real life.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    heading: 'Spirit-Filled Worship',
    body: "Worship at Springhill is alive. We sing, we pray, and we expect God to move. Come with an open heart — you may encounter something you didn't know you were looking for.",
  },
];

export default function NewHerePage() {
  return (
    <>
      {/* Hero */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-5">Welcome</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          You&apos;re Welcome Here
        </h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
          Wherever you&apos;re coming from — whatever your story — there&apos;s a seat for you at Springhill.
        </p>
      </section>

      {/* Opening statement */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal className="text-center mb-16">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-6">Come As You Are</h2>
            <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Springhill Pentecostal Church is a family — and like any good family, you don&apos;t have
              to earn your place at the table. We&apos;re not here to judge where you&apos;ve been.
              We&apos;re here to walk with you toward where God is taking you.
            </p>
          </ScrollReveal>

          {/* 4 pillars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.heading} delay={i * 60}>
                <div className="card p-7 h-full">
                  <div className="w-11 h-11 border border-stone-200 flex items-center justify-center mb-5 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all">
                    {p.icon}
                  </div>
                  <h3 className="font-serif font-bold text-stone-900 text-lg mb-3">{p.heading}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture banner */}
      <section className="py-20 section-dark">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <svg className="w-8 h-8 text-church-gold mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-serif text-2xl md:text-3xl text-white/80 leading-relaxed italic mb-6 max-w-2xl mx-auto">
              &ldquo;Come unto me, all ye that labour and are heavy laden,
              and I will give you rest.&rdquo;
            </p>
            <p className="text-church-gold text-xs font-semibold tracking-[0.2em] uppercase">Matthew 11:28</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service info */}
      <section className="py-20 bg-church-warm">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal className="text-center mb-12">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading">Join Us</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { day: 'Sunday',    times: '10:00 AM & 6:00 PM' },
              { day: 'Monday',    times: '7:00 PM' },
              { day: 'Wednesday', times: '7:30 PM' },
            ].map((s, i) => (
              <ScrollReveal key={s.day} delay={i * 60}>
                <div className="card p-7 text-center">
                  <p className="eyebrow text-church-gold mb-2">{s.day}</p>
                  <p className="font-serif font-bold text-stone-900 text-lg">{s.times}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-stone-500 text-sm mt-6">
              <a
                href="https://maps.google.com/?q=1090+Springhill+Road+Wesson+MS+39191"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-church-gold transition-colors"
              >
                1090 Springhill Road, Wesson, MS 39191
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-dark">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              We&apos;d Love to Meet You
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Have a question before you visit? Want someone to pray with you?
              Reach out — we&apos;re real people and we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prayer" className="btn-gold">Get in Touch</Link>
              <Link href="/beliefs" className="btn-outline">What We Believe</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
