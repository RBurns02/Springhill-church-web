import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import PhotoSlider from '@/components/PhotoSlider';
import FacebookFeed from '@/components/FacebookFeed';

export const metadata: Metadata = {
  title: 'Springhill Pentecostal Church | Wesson, MS',
  description:
    'A Spirit-filled community in Wesson, Mississippi. Join us for worship, Biblical teaching, and life-changing fellowship.',
};

const serviceTimes = [
  { day: 'Sunday',    session: 'Morning Service', time: '10:00 AM', icon: '☀️' },
  { day: 'Sunday',    session: 'Evening Service',  time: '6:00 PM',  icon: '🌅' },
  { day: 'Monday',    session: 'Prayer Meeting',   time: '7:00 PM',  icon: '🙏' },
  { day: 'Wednesday', session: 'Wednesday Service', time: '7:30 PM',  icon: '🙌' },
];

const expectations = [
  {
    title: 'Friendly Community',
    desc:  'From your very first visit you will be greeted with warm smiles and genuine hospitality. We are a family, and we would love for you to be part of it.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5.364-3.771M9 20H4v-2a4 4 0 015.364-3.771M15 11a4 4 0 10-8 0 4 4 0 008 0z" />
      </svg>
    ),
  },
  {
    title: 'Biblical Preaching',
    desc:  'Every message is rooted in the Word of God. We believe the Bible is the inspired, infallible authority for faith and life.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Spirit-Filled Worship',
    desc:  'We worship with freedom and expectation. Come ready for heartfelt praise, powerful prayer, and the tangible presence of God.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
      <section className="relative min-h-screen flex items-center justify-center bg-church-dark overflow-hidden">

        <div className="max-w-4xl mx-auto px-5 text-center text-white pt-20 pb-28">
          <div className="animate-fade-in mb-12" style={{ animationDelay: '0.1s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-transparent.png"
              alt="Springhill Pentecostal Church"
              className="h-52 md:h-64 w-auto mx-auto object-contain opacity-90"
              style={{ filter: 'invert(1) brightness(0.95)' }}
            />
          </div>

          <div className="gold-bar mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }} />

          <p className="eyebrow text-church-gold mb-6 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            Springhill Pentecostal Church · Wesson, MS
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.35s' }}>
            A Place to Belong.<br />
            A Place to Grow.<br />
            <span className="text-shimmer">A Place to Encounter God.</span>
          </h1>

          <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Join us as we worship, grow in faith, and build lasting relationships
            centered on Jesus Christ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.65s' }}>
            <Link href="/prayer" className="btn-gold">Plan Your Visit</Link>
            <Link href="/events" className="btn-outline">Upcoming Events</Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-30">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── SERVICE TIMES ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-14">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-3">Join Us This Week</h2>
            <p className="section-sub max-w-lg mx-auto">
              We gather multiple times each week to worship, study, and grow together.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {serviceTimes.map((s, i) => (
              <ScrollReveal key={s.session} delay={i * 80}>
                <div className="card p-8 text-center group">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-5 text-2xl">
                    {s.icon}
                  </div>
                  <p className="eyebrow text-church-gold mb-2">{s.day}</p>
                  <h3 className="font-serif font-semibold text-lg text-stone-900 mb-3">{s.session}</h3>
                  <p className="text-3xl font-bold text-church-purple font-serif tracking-tight">{s.time}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm text-stone-500 mb-1">
                <strong className="text-church-gold font-semibold">1st Sunday of every month</strong> — Friends &amp; Family Service at 2:00 PM
              </p>
              <p className="text-sm text-stone-400">1090 Springhill Road · Wesson, MS 39191</p>
              <a
                href="https://maps.google.com/?q=1090+Springhill+Road+Wesson+MS+39191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-xs font-semibold tracking-[0.12em] uppercase text-church-purple hover:text-church-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
      <section className="py-24 bg-church-warm">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-6">Welcome Home</h2>
            <p className="text-stone-600 leading-relaxed mb-5 text-lg">
              Whether you&apos;ve been walking with the Lord for decades or you&apos;re just
              beginning to seek Him, there is a place for you at Springhill. We are a
              community built on love — for God and for each other.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              We believe in the full gospel: repentance, baptism in Jesus&apos; name, and
              the infilling of the Holy Ghost. But more than doctrine, we believe in
              people — and we&apos;d love to walk this journey of faith alongside you.
            </p>
            <Link href="/prayer" className="btn-primary">Plan Your First Visit</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PHOTO SLIDER ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-church-dark">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-10">
            <div className="gold-bar mx-auto mb-5" />
            <h2 className="font-serif text-3xl font-bold text-white tracking-tight">Life at Springhill</h2>
          </ScrollReveal>
          <ScrollReveal>
            <PhotoSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-14">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-3">What to Expect</h2>
            <p className="section-sub max-w-lg mx-auto">
              We know visiting a new church can feel uncertain. Here&apos;s what you can
              expect when you walk through our doors.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {expectations.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 100}>
                <div className="card p-9 group">
                  <div className="w-12 h-12 border border-stone-200 flex items-center justify-center mb-6 text-stone-600 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
                    {e.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">{e.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS PREVIEW ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-church-warm">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="gold-bar mb-5" />
              <h2 className="section-heading">Upcoming Events</h2>
            </div>
            <Link href="/events" className="btn-outline-green shrink-0">View All Events</Link>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {upcomingEvents.map((evt, i) => (
              <ScrollReveal key={evt.title} delay={i * 80}>
                <div className="card overflow-hidden group">
                  <div className="h-px bg-church-gold group-hover:bg-church-purple transition-colors duration-300" />
                  <div className="p-7">
                    <p className="eyebrow text-church-gold mb-4">{evt.date}</p>
                    <h3 className="font-serif font-bold text-lg text-stone-900 mb-1.5">{evt.title}</h3>
                    <p className="text-xs text-stone-400 mb-5 uppercase tracking-wide">{evt.category}</p>
                    <div className="flex flex-col gap-2 text-sm text-stone-500">
                      <span className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {evt.time}
                      </span>
                      {evt.location && (
                        <span className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 flex-shrink-0 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            <p className="eyebrow text-church-gold mb-3">Our Pastor &amp; First Lady</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-10 tracking-tight">
              Tommy &amp; Lori Lee
            </h2>

            {/* Photo frame */}
            <div className="flex justify-center mb-8">
              <div className="relative w-60 h-72 md:w-72 md:h-80 overflow-hidden" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pastor.png"
                  alt="Pastor Tommy and Lori Lee"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <p className="font-script text-4xl text-stone-600 mb-6">
              A message from Pastor
            </p>

            <div className="gold-bar mx-auto mb-8" />

            <div className="text-left space-y-4 max-w-xl mx-auto">
              <p className="text-stone-600 leading-relaxed">
                Welcome to Springhill Pentecostal Church. Whether you are searching for a
                new church home or exploring Apostolic faith for the first time, you are
                welcome here! We believe that church is more than just a building; it&apos;s a
                family where we grow together, support, and love one another.
              </p>
              <p className="text-stone-600 leading-relaxed">
                We strive to grow a congregation of spiritually mature, visionary people
                that embodies the principles and actions of the book of Acts church.
              </p>
              <p className="text-stone-600 leading-relaxed">
                If you&apos;re looking for a place to connect, belong and worship, you&apos;ve found
                it! We would love for you to join us!
              </p>
              <p className="font-script text-2xl text-church-gold pt-2">— Pastor Tommy Lee</p>
            </div>

            <div className="mt-10">
              <Link href="/prayer" className="btn-primary">Connect With Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOLLOW US ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-church-warm">
        <div className="max-w-4xl mx-auto px-5">
          <ScrollReveal className="text-center mb-12">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-3">Stay Connected</h2>
            <p className="section-sub">
              Follow us on social media for service highlights, announcements, and more.
            </p>
          </ScrollReveal>

          {/* Facebook feed */}
          <ScrollReveal className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-4 h-4 fill-current text-stone-500" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
              <p className="eyebrow text-stone-400">Latest from Facebook</p>
            </div>
            <Suspense fallback={
              <div className="grid sm:grid-cols-2 gap-5">
                {[0,1,2,3].map(i => <div key={i} className="h-56 bg-stone-100 animate-pulse" />)}
              </div>
            }>
              <FacebookFeed />
            </Suspense>
          </ScrollReveal>

          {/* Instagram + SoundCloud links */}
          <ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <a href="https://www.instagram.com/spcwesson" target="_blank" rel="noopener noreferrer"
                className="card p-7 group flex items-center gap-5">
                <div className="w-11 h-11 border border-stone-200 flex items-center justify-center flex-shrink-0 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </div>
                <div>
                  <p className="eyebrow text-stone-400 mb-1">Instagram</p>
                  <p className="font-serif font-semibold text-stone-900 text-sm">@spcwesson</p>
                </div>
                <span className="ml-auto text-xs font-semibold tracking-[0.1em] uppercase text-church-gold group-hover:text-church-deep transition-colors">Follow →</span>
              </a>

              <a href="https://soundcloud.com/spcwesson" target="_blank" rel="noopener noreferrer"
                className="card p-7 group flex items-center gap-5">
                <div className="w-11 h-11 border border-stone-200 flex items-center justify-center flex-shrink-0 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M1.175 12.225c-.056 0-.094.037-.1.094l-.344 2.156.344 2.181c.006.06.044.094.1.094.05 0 .094-.037.1-.094l.394-2.181-.394-2.156c-.006-.057-.05-.094-.1-.094m1.79-.581c-.069 0-.119.05-.125.119l-.3 1.812.3 1.837c.006.069.056.119.125.119.069 0 .119-.05.125-.119l.344-1.837-.344-1.812c-.006-.069-.056-.119-.125-.119m1.8-.378c-.075 0-.131.056-.137.131l-.269 1.559.269 1.584c.006.075.063.131.137.131.075 0 .131-.056.138-.131l.306-1.584-.306-1.559c-.006-.075-.063-.131-.138-.131m1.8-.262c-.081 0-.144.063-.15.144l-.237 1.297.237 1.322c.006.081.069.144.15.144.081 0 .144-.063.15-.144l.269-1.322-.269-1.297c-.006-.081-.069-.144-.15-.144m1.8-.131c-.088 0-.156.069-.163.156l-.206 1.166.206 1.191c.006.088.075.156.163.156.088 0 .156-.069.163-.156l.231-1.191-.231-1.166c-.006-.088-.075-.156-.163-.156m1.8-.088c-.094 0-.169.075-.175.169l-.175 1.078.175 1.103c.006.094.081.169.175.169.094 0 .169-.075.175-.169l.2-1.103-.2-1.078c-.006-.094-.081-.169-.175-.169m1.8-.063c-.1 0-.181.081-.188.181l-.144.991.144 1.016c.006.1.088.181.188.181.1 0 .181-.081.188-.181l.163-1.016-.163-.991c-.006-.1-.088-.181-.188-.181m1.8-.044c-.106 0-.194.088-.2.194l-.113.903.113.928c.006.106.094.194.2.194.106 0 .194-.088.2-.194l.128-.928-.128-.903c-.006-.106-.094-.194-.2-.194m2.787-.731c-.056-.019-.113-.031-.172-.031-.3 0-.581.113-.794.3-.094-1.097-.997-1.953-2.106-1.953-.278 0-.544.056-.787.156-.094.038-.119.075-.119.113v7.256c0 .044.031.081.075.088h3.906c.591 0 1.069-.478 1.069-1.069V11.1c0-.272-.131-.519-.347-.666" />
                  </svg>
                </div>
                <div>
                  <p className="eyebrow text-stone-400 mb-1">SoundCloud</p>
                  <p className="font-serif font-semibold text-stone-900 text-sm">SPC Wesson</p>
                </div>
                <span className="ml-auto text-xs font-semibold tracking-[0.1em] uppercase text-church-gold group-hover:text-church-deep transition-colors">Listen →</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PRAYER CTA ─────────────────────────────────────────────────────── */}
      <section className="py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-church-gold opacity-10" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-church-gold opacity-10" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-7" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              We Would Love to Pray With You
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
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
