import Link from 'next/link';
import Image from 'next/image';

// ─── Service schedule ──────────────────────────────────────────────────────────
const regularServices = [
  { day: 'Sunday',    label: 'Morning Service',       time: '10:00 AM', note: 'Prayer 9:30 AM'  },
  { day: 'Sunday',    label: 'Evening Service',       time: '6:00 PM',  note: 'Prayer 5:30 PM'  },
  { day: 'Wednesday', label: 'Bible Study & Prayer',  time: '7:30 PM',  note: 'Prayer 7:00 PM'  },
  { day: 'Monday',    label: 'Prayer Meeting',        time: '7:00 PM',  note: null               },
];

// ─── Preview events ─────────────────────────────────────────────────────────────
const previewEvents = [
  {
    month: 'JUL',
    day:   '5',
    title: 'Friends & Family Service',
    desc:  '1st Sunday of every month — one special service celebrating community and new faces.',
    time:  '2:00 PM',
  },
  {
    month: 'JUL',
    day:   '9',
    title: 'Prayer & Praise Night',
    desc:  'A Spirit-led evening of corporate prayer and live worship. Everyone welcome.',
    time:  '7:30 PM',
  },
  {
    month: 'JUL',
    day:   '19',
    title: 'Youth Night',
    desc:  'An evening of worship, games, and the Word for students 12–18.',
    time:  '6:30 PM',
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
        {/* Animated gradient orbs */}
        <div
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full opacity-20 animate-drift"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-15 animate-drift2"
          style={{ background: 'radial-gradient(circle, #60A5FA 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #93C5FD 0%, transparent 60%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white py-24">
          {/* Logo — transparent white version */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl scale-150" />
              <Image
                src="/logo.png"
                alt="Springhill Pentecostal Church"
                width={200}
                height={200}
                className="relative w-36 md:w-44 h-auto object-contain animate-float mix-blend-screen"
                style={{ filter: 'invert(1)' }}
                priority
              />
            </div>
          </div>

          <p className="text-shimmer font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Welcome Home · Est. 1935
          </p>

          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-5 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Springhill Pentecostal Church
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            A Spirit-filled community in Wesson, MS where faith comes alive,
            families are built, and every person finds a place to belong.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Link href="/prayer" className="btn-gold">
              Plan Your Visit
            </Link>
            <Link href="/beliefs" className="btn-outline">
              What We Believe
            </Link>
          </div>

          {/* Service times strip */}
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/15 w-full max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            {regularServices.map((s) => (
              <div key={s.label} className="bg-white/5 backdrop-blur px-4 py-4 text-center">
                <p className="text-church-gold font-bold text-base">{s.time}</p>
                <p className="text-white font-semibold text-xs mt-1">{s.day}</p>
                <p className="text-white/55 text-xs mt-0.5 leading-tight">{s.label}</p>
                {s.note && (
                  <p className="text-white/35 text-xs mt-1 italic">{s.note}</p>
                )}
              </div>
            ))}
          </div>

          {/* First Sunday callout */}
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-church-gold/80 bg-church-gold/10 border border-church-gold/20 rounded-full px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-church-gold flex-shrink-0" />
            1st Sunday of every month — Friends &amp; Family Service at 2:00 PM
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-church-cream to-transparent" />
      </section>

      {/* ── WELCOME ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-church-cream">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="gold-bar mb-5" />
            <h2 className="section-heading mb-5">
              You&apos;re Welcome Here,<br />Exactly As You Are
            </h2>
            <p className="section-sub mb-5">
              At Springhill Pentecostal Church, we believe the Holy Spirit is alive and
              moving today. Whether you&apos;re new to faith or have walked with God for
              decades, there&apos;s a seat saved for you.
            </p>
            <p className="text-stone-500 mb-8 leading-relaxed">
              Since 1935, we have gathered to worship, pray, study the Word, and
              grow together as a family right here in Wesson, MS. Our doors — and
              our hearts — are always open.
            </p>
            <Link href="/prayer" className="btn-primary">
              Plan Your First Visit
            </Link>
          </div>

          {/* Church photo placeholder */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 md:h-96 bg-gradient-to-br from-church-purple/20 to-church-deep/40 flex items-center justify-center">
            {/* Replace with: <Image src="/church-photo.jpg" fill className="object-cover" alt="Springhill Pentecostal Church" /> */}
            <div className="text-center text-white/40">
              <svg className="w-20 h-20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium">Add a church photo here</p>
              <p className="text-xs mt-1 opacity-60">Place image at /public/church-photo.jpg</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PASTOR & FIRST LADY ──────────────────────────────────────────────── */}
      <section className="py-20 bg-church-warm">
        <div className="max-w-5xl mx-auto px-5">
          {/* Section title */}
          <div className="text-center mb-12">
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="font-serif text-4xl font-bold text-stone-900">Pastor &amp; First Lady</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl bg-gradient-to-br from-church-purple/20 to-church-deep/30 flex items-center justify-center border-4 border-white">
                {/*
                  Add the pastor photo:
                  1. Save the photo as /public/pastor.jpg
                  2. Replace this div with:
                     <Image src="/pastor.jpg" width={256} height={256} className="object-cover w-full h-full" alt="Pastor Tommy & Lori Lee" />
                */}
                <div className="text-center text-white/40 px-4">
                  <svg className="w-14 h-14 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-xs">Add photo at<br />/public/pastor.jpg</p>
                </div>
              </div>
              <p className="font-serif text-2xl font-bold text-stone-800">Tommy &amp; Lori Lee</p>
            </div>

            {/* Message */}
            <div>
              <p className="font-serif text-2xl text-church-gold mb-5 italic">A message from Pastor</p>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Welcome to Springhill Pentecostal Church. Whether you are searching for a
                  new church home or exploring Apostolic faith for the first time, you are
                  welcome here! We believe that church is more than just a building; it&apos;s a
                  family where we grow together, support, and love one another.
                </p>
                <p>
                  We strive to grow a congregation of spiritually mature, visionary people
                  that embodies the principles and actions of the book of Acts church.
                </p>
                <p>
                  If you&apos;re looking for a place to connect, belong and worship, you&apos;ve found
                  it! We would love for you to join us!
                </p>
                <p className="font-semibold text-stone-900 pt-1">— Pastor Tommy Lee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCRIPTURE CALLOUT ────────────────────────────────────────────────── */}
      <section className="py-16 section-dark">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <svg className="w-10 h-10 text-church-gold mx-auto mb-6 opacity-75" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-6">
            &ldquo;But ye shall receive power, after that the Holy Ghost is come upon you:
            and ye shall be witnesses unto me both in Jerusalem, and in all Judaea,
            and in Samaria, and unto the uttermost part of the earth.&rdquo;
          </blockquote>
          <p className="text-church-gold font-semibold tracking-wide">Acts 1:8</p>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-church-warm">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="gold-bar mb-4" />
              <h2 className="section-heading">Upcoming Events</h2>
            </div>
            <Link href="/events" className="text-church-purple font-semibold text-sm hover:underline">
              See all →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {previewEvents.map((evt) => (
              <div key={evt.title} className="card hover:shadow-md transition-shadow duration-200">
                <div className="h-1.5 w-full bg-gradient-to-r from-church-purple to-blue-400" />
                <div className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-14 text-center bg-church-purple/10 rounded-xl py-2">
                      <p className="text-church-purple text-xs font-bold tracking-widest uppercase">{evt.month}</p>
                      <p className="text-church-deep text-2xl font-bold font-serif leading-none">{evt.day}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 text-lg leading-snug mb-1">{evt.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{evt.desc}</p>
                      <p className="text-church-gold text-sm font-semibold mt-3">{evt.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GIVE CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-church-cream">
        <div className="max-w-4xl mx-auto px-5">
          <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 p-10 md:p-14 text-center">
            <div className="w-14 h-14 rounded-full bg-church-gold/20 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-church-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-3">Give Online</h2>
            <p className="text-stone-600 max-w-md mx-auto mb-8 leading-relaxed">
              Your generosity makes ministry possible. Give quickly and securely
              through our online giving portal — every gift makes a difference.
            </p>
            <Link href="/give" className="btn-gold">
              Give Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRAYER CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 section-dark">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="gold-bar mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            We&apos;re Praying With You
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Let us know how we can stand in faith with you. Submit a prayer request
            and our team will lift your need before God.
          </p>
          <Link href="/prayer" className="btn-outline">
            Submit a Prayer Request
          </Link>
        </div>
      </section>
    </>
  );
}
