import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import PhotoSlider from '@/components/PhotoSlider';

export const metadata: Metadata = {
  title: 'Springhill Pentecostal Church | Wesson, MS',
  description:
    'A Spirit-filled community in Wesson, Mississippi. Join us for worship, Biblical teaching, and life-changing fellowship.',
};

const serviceTimes = [
  { day: 'Sunday',    session: 'Morning Service', time: '10:00 AM', icon: '☀️' },
  { day: 'Sunday',    session: 'Evening Service',  time: '6:00 PM',  icon: '🌅' },
  { day: 'Wednesday', session: 'Bible Study',      time: '7:30 PM',  icon: '📖' },
];

const expectations = [
  {
    title: 'Friendly Community',
    desc:  'From your very first visit you will be greeted with warm smiles and genuine hospitality. We are a family, and we would love for you to be part of it.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5.364-3.771M9 20H4v-2a4 4 0 015.364-3.771M15 11a4 4 0 10-8 0 4 4 0 008 0z" />
      </svg>
    ),
  },
  {
    title: 'Biblical Preaching',
    desc:  'Every message is rooted in the Word of God. We believe the Bible is the inspired, infallible authority for faith and life.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Spirit-Filled Worship',
    desc:  'We worship with freedom and expectation. Come ready for heartfelt praise, powerful prayer, and the tangible presence of God.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
];

const upcomingEvents = [
  { date: 'JUN 13', title: "Men's Camping Trip",                     time: 'All Day',  location: '',                             category: "Men's Ministry"  },
  { date: 'JUN 19', title: 'BLAST — Kids Church',                    time: '7:00 PM', location: 'Springhill Pentecostal Church', category: 'Kids'            },
  { date: 'JUN 27', title: '2nd Annual Pastoral Anniversary Service', time: '7:00 PM', location: 'Springhill Pentecostal Church', category: 'Special Service' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-drift absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] max-w-2xl rounded-full bg-church-purple/25 blur-[100px]" />
          <div className="animate-drift2 absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] max-w-xl rounded-full bg-church-gold/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white pt-20 pb-24">
          <div className="animate-fade-in mb-10" style={{ animationDelay: '0.1s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-transparent.png"
              alt="Springhill Pentecostal Church"
              className="h-56 md:h-72 w-auto mx-auto object-contain"
              style={{ filter: 'invert(1) brightness(1.1)' }}
            />
          </div>

          <p className="eyebrow text-church-gold mb-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Springhill Pentecostal Church · Wesson, MS
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            A Place to Belong.<br />
            A Place to Grow.<br />
            <span className="text-shimmer">A Place to Encounter God.</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Join us as we worship, grow in faith, and build lasting relationships
            centered on Jesus Christ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.65s' }}>
            <Link href="/prayer" className="btn-gold">Plan Your Visit</Link>
            <Link href="/events" className="btn-outline">Upcoming Events</Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-50">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── SERVICE TIMES ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-12">
            <div className="gold-bar mx-auto mb-5" />
            <h2 className="section-heading mb-3">Join Us This Week</h2>
            <p className="section-sub max-w-lg mx-auto">
              We gather multiple times each week to worship, study, and grow together.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {serviceTimes.map((s, i) => (
              <ScrollReveal key={s.session} delay={i * 100}>
                <div className="card p-8 text-center group hover:border-church-purple/30">
                  <div className="w-14 h-14 rounded-2xl bg-church-purple/[0.07] flex items-center justify-center mx-auto mb-5 text-2xl group-hover:bg-church-purple/[0.14] transition-colors">
                    {s.icon}
                  </div>
                  <p className="eyebrow text-church-purple mb-1">{s.day}</p>
                  <h3 className="font-serif font-bold text-xl text-slate-900 mb-2">{s.session}</h3>
                  <p className="text-4xl font-bold text-church-gold font-serif">{s.time}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm text-slate-500 mb-1">
                <strong className="text-church-gold">1st Sunday of every month</strong> — Friends &amp; Family Service at 2:00 PM
              </p>
              <p className="text-sm text-slate-500">1090 Springhill Road · Wesson, MS 39191</p>
              <a
                href="https://maps.google.com/?q=1090+Springhill+Road+Wesson+MS+39191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-church-purple hover:text-church-deep transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WELCOME HOME ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-church-warm">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-5" />
            <h2 className="section-heading mb-5">Welcome Home</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Whether you&apos;ve been walking with the Lord for decades or you&apos;re just
              beginning to seek Him, there is a place for you at Springhill. We are a
              community built on love — for God and for each other.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We believe in the full gospel: repentance, baptism in Jesus&apos; name, and
              the infilling of the Holy Ghost. But more than doctrine, we believe in
              people — and we&apos;d love to walk this journey of faith alongside you.
            </p>
            <Link href="/prayer" className="btn-primary">Plan Your First Visit</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PHOTO SLIDER ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-church-dark">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-8">
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold text-white">Life at Springhill</h2>
          </ScrollReveal>
          <ScrollReveal>
            <PhotoSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-12">
            <div className="gold-bar mx-auto mb-5" />
            <h2 className="section-heading mb-3">What to Expect</h2>
            <p className="section-sub max-w-lg mx-auto">
              We know visiting a new church can feel uncertain. Here&apos;s what you can
              expect when you walk through our doors.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {expectations.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 120}>
                <div className="card p-8 group hover:border-church-purple/30">
                  <div className="w-14 h-14 rounded-2xl bg-church-purple/[0.07] flex items-center justify-center mb-5 text-church-purple group-hover:bg-church-purple group-hover:text-white transition-all duration-300">
                    {e.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">{e.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS PREVIEW ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-church-warm">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <div className="gold-bar mb-4" />
              <h2 className="section-heading">Upcoming Events</h2>
            </div>
            <Link href="/events" className="btn-outline-green shrink-0">View All Events</Link>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt, i) => (
              <ScrollReveal key={evt.title} delay={i * 100}>
                <div className="card overflow-hidden group">
                  <div className="h-2 bg-church-purple group-hover:bg-church-gold transition-colors duration-300" />
                  <div className="p-6">
                    <p className="eyebrow text-church-purple mb-3">{evt.date}</p>
                    <h3 className="font-serif font-bold text-lg text-slate-900 mb-1">{evt.title}</h3>
                    <p className="text-xs text-slate-400 mb-4">{evt.category}</p>
                    <div className="flex flex-col gap-1.5 text-sm text-slate-500">
                      <span className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 text-church-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {evt.time}
                      </span>
                      {evt.location && (
                        <span className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 flex-shrink-0 text-church-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {evt.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE PASTOR ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            {/* Name */}
            <p className="eyebrow text-church-purple mb-2">Our Pastor &amp; First Lady</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Tommy &amp; Lori Lee
            </h2>

            {/* Oval photo frame */}
            <div className="flex justify-center mb-6">
              <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-2 ring-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pastor.png"
                  alt="Pastor Tommy and Lori Lee"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Script subtitle */}
            <p className="font-script text-4xl text-slate-700 mb-8">
              A message from Pastor
            </p>

            <div className="gold-bar mx-auto mb-8" />

            {/* Message */}
            <div className="text-left space-y-4 max-w-xl mx-auto">
              <p className="text-slate-600 leading-relaxed">
                Welcome to Springhill Pentecostal Church. Whether you are searching for a
                new church home or exploring Apostolic faith for the first time, you are
                welcome here! We believe that church is more than just a building; it&apos;s a
                family where we grow together, support, and love one another.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We strive to grow a congregation of spiritually mature, visionary people
                that embodies the principles and actions of the book of Acts church.
              </p>
              <p className="text-slate-600 leading-relaxed">
                If you&apos;re looking for a place to connect, belong and worship, you&apos;ve found
                it! We would love for you to join us!
              </p>
              <p className="font-script text-2xl text-church-purple pt-2">— Pastor Tommy Lee</p>
            </div>

            <div className="mt-10">
              <Link href="/prayer" className="btn-primary">Connect With Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PRAYER CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-church-purple/30 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-church-gold/10 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              We Would Love to Pray With You
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              No matter what you&apos;re facing, our prayer team is here. Submit a request
              or reach out — we believe prayer changes everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prayer" className="btn-gold">Send a Prayer Request</Link>
              <Link href="/beliefs" className="btn-outline">What We Believe</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
