import Link from 'next/link';
import Image from 'next/image';

const regularServices = [
  { day: 'Sunday',    label: 'Morning Service',      time: '10:00 AM', note: 'Prayer 9:30 AM' },
  { day: 'Sunday',    label: 'Evening Service',       time: '6:00 PM',  note: 'Prayer 5:30 PM' },
  { day: 'Wednesday', label: 'Bible Study & Prayer',  time: '7:30 PM',  note: 'Prayer 7:00 PM' },
  { day: 'Monday',    label: 'Prayer Meeting',        time: '7:00 PM',  note: null              },
];

const previewEvents = [
  {
    month: 'JUL', day: '5',
    title: 'Friends & Family Service',
    desc:  '1st Sunday of every month — one special service celebrating community and new faces.',
    time:  '2:00 PM',
  },
  {
    month: 'JUL', day: '9',
    title: 'Prayer & Praise Night',
    desc:  'A Spirit-led evening of corporate prayer and live worship. Everyone welcome.',
    time:  '7:30 PM',
  },
  {
    month: 'JUL', day: '19',
    title: 'Youth Night',
    desc:  'An evening of worship, games, and the Word for students 12–18.',
    time:  '6:30 PM',
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient">
        {/* Animated orbs */}
        <div
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full opacity-20 animate-drift"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-15 animate-drift2"
          style={{ background: 'radial-gradient(circle, #60A5FA 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white py-32">
          {/* Logo */}
          <div className="flex justify-center mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Image
              src="/logo.png"
              alt="Springhill Pentecostal Church"
              width={160}
              height={160}
              className="w-28 md:w-36 h-auto object-contain animate-float mix-blend-screen"
              style={{ filter: 'invert(1)' }}
              priority
            />
          </div>

          <p className="text-shimmer eyebrow mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Est. 1935 · Wesson, Mississippi
          </p>

          <h1 className="font-serif font-bold leading-[1.06] mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <span className="block text-5xl md:text-7xl">Springhill</span>
            <span className="block text-5xl md:text-7xl">Pentecostal Church</span>
          </h1>

          <p className="text-white/65 text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            A Spirit-filled family in Wesson, MS — where faith comes alive and every person belongs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <Link href="/prayer" className="btn-gold">Plan Your Visit</Link>
            <Link href="/beliefs" className="btn-outline">What We Believe</Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── SERVICE TIMES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <p className="eyebrow text-church-purple mb-2">Join Us</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">Weekly Service Times</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regularServices.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center hover:border-church-purple/25 hover:bg-blue-50/40 transition-all duration-200"
              >
                <p className="font-serif text-2xl md:text-3xl font-bold text-church-purple mb-1">{s.time}</p>
                <p className="text-slate-800 font-semibold text-sm">{s.day}</p>
                <p className="text-slate-500 text-xs mt-1 leading-tight">{s.label}</p>
                {s.note && <p className="text-slate-400 text-xs mt-2 italic">{s.note}</p>}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <span className="inline-flex items-center gap-2 text-sm text-church-gold font-medium bg-amber-50 border border-amber-200/60 rounded-full px-5 py-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-church-gold flex-shrink-0" />
              1st Sunday every month — Friends &amp; Family Service at 2:00 PM
            </span>
          </div>
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section className="py-20 bg-church-warm">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="gold-bar mb-6" />
            <h2 className="section-heading mb-5">
              You&apos;re Welcome Here,<br />Exactly As You Are
            </h2>
            <p className="section-sub mb-5">
              At Springhill Pentecostal Church, we believe the Holy Spirit is alive and
              moving today. Whether you&apos;re new to faith or have walked with God for
              decades, there&apos;s a seat saved for you.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Since 1935, we have gathered to worship, pray, study the Word, and
              grow together as a family right here in Wesson, MS. Our doors — and
              our hearts — are always open.
            </p>
            <Link href="/prayer" className="btn-primary">Plan Your First Visit</Link>
          </div>

          {/* Church photo placeholder */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 md:h-[440px] bg-gradient-to-br from-church-purple/20 to-church-deep/40 flex items-center justify-center">
            {/* To add photo: <Image src="/church-photo.jpg" fill className="object-cover" alt="Springhill Pentecostal Church" /> */}
            <div className="text-center text-white/30 px-6">
              <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Add church photo at /public/church-photo.jpg</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PASTOR & FIRST LADY ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Pastor &amp; First Lady</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center gap-5">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-church-purple/20 to-church-deep/30 flex items-center justify-center ring-4 ring-white ring-offset-4">
                {/* To add photo: <Image src="/pastor.jpg" width={288} height={288} className="object-cover w-full h-full" alt="Pastor Tommy & Lori Lee" /> */}
                <div className="text-center text-white/30 px-4">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-xs">Add photo at /public/pastor.jpg</p>
                </div>
              </div>
              <p className="font-serif text-2xl font-bold text-slate-800">Tommy &amp; Lori Lee</p>
            </div>

            <div>
              <p className="font-serif text-xl text-church-gold mb-6 italic">A message from Pastor</p>
              <div className="space-y-4 text-slate-600 leading-relaxed">
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
                <p className="font-semibold text-slate-900 pt-1">— Pastor Tommy Lee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCRIPTURE CALLOUT ── */}
      <section className="py-20 section-dark">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <svg className="w-10 h-10 text-church-gold mx-auto mb-8 opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-6">
            &ldquo;But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall
            be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the
            uttermost part of the earth.&rdquo;
          </blockquote>
          <p className="text-church-gold eyebrow">Acts 1:8</p>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="py-20 bg-church-warm">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="gold-bar mb-4" />
              <h2 className="section-heading">Upcoming Events</h2>
            </div>
            <Link href="/events" className="text-church-purple font-semibold text-sm hover:underline hidden sm:block">
              See all →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {previewEvents.map((evt) => (
              <div key={evt.title} className="card">
                <div className="h-[3px] w-full bg-gradient-to-r from-church-purple to-blue-400" />
                <div className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-14 text-center bg-church-purple/[0.07] rounded-xl py-2.5 px-1">
                      <p className="text-church-purple text-[10px] font-bold tracking-widest uppercase">{evt.month}</p>
                      <p className="text-church-deep text-2xl font-bold font-serif leading-none mt-0.5">{evt.day}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-base leading-snug mb-1.5">{evt.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{evt.desc}</p>
                      <p className="text-church-gold text-sm font-semibold mt-3">{evt.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/events" className="btn-primary">See All Events</Link>
          </div>
        </div>
      </section>

      {/* ── DUAL CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-6">
          {/* Give */}
          <div className="rounded-3xl bg-church-dark p-10 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-church-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Support the Mission</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-xs">
              Your giving fuels ministry in Wesson and beyond. Give securely online through Tithe.ly.
            </p>
            <Link href="/give" className="btn-gold">Give Now</Link>
          </div>

          {/* Contact */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-church-purple/[0.08] flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-church-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Get in Touch</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
              Prayer request, planning a visit, or just saying hello — we&apos;d love to hear from you.
            </p>
            <Link href="/prayer" className="btn-primary">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  );
}
