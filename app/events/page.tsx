import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events | Springhill Pentecostal Church',
  description: 'Upcoming events and gatherings at Springhill Pentecostal Church.',
};

// ─── Event data ────────────────────────────────────────────────────────────────
// Replace with your real events. Format: YYYY-MM-DD for date.
const events = [
  {
    date: '2026-06-15',
    title: 'Youth Night',
    category: 'Youth',
    time: '6:30 PM',
    location: 'Main Sanctuary',
    desc: 'An evening of worship, games, and the Word specifically designed for students in 6th–12th grade. Come ready to have fun and encounter God.',
  },
  {
    date: '2026-06-22',
    title: 'Community Cookout',
    category: 'Community',
    time: '12:00 PM',
    location: 'Church Grounds',
    desc: 'Bring the whole family! We\'ll have food, fellowship, games for the kids, and an opportunity to meet your neighbors and church family.',
  },
  {
    date: '2026-07-04',
    title: 'Prayer & Praise Night',
    category: 'Worship',
    time: '7:00 PM',
    location: 'Main Sanctuary',
    desc: 'A Spirit-led evening of corporate prayer and live worship. No agenda — just time in the presence of God.',
  },
  {
    date: '2026-07-12',
    title: "Women's Bible Study",
    category: "Women's Ministry",
    time: '10:00 AM',
    location: 'Fellowship Hall',
    desc: 'Our weekly women\'s study continues through the book of Ruth. All women welcome — bring your Bible and a friend.',
  },
  {
    date: '2026-07-19',
    title: 'Men\'s Breakfast',
    category: "Men's Ministry",
    time: '8:00 AM',
    location: 'Fellowship Hall',
    desc: 'Men of all ages are invited for breakfast, fellowship, and a short devotional. A great chance to connect and encourage one another.',
  },
  {
    date: '2026-07-26',
    title: 'Family Movie Night',
    category: 'Family',
    time: '7:30 PM',
    location: 'Outdoor Lawn',
    desc: 'Bring your blankets and lawn chairs for an outdoor movie night on the church grounds. Family-friendly film, free popcorn provided.',
  },
];

const categoryColors: Record<string, string> = {
  'Youth':            'bg-violet-100 text-violet-700',
  'Community':        'bg-green-100 text-green-700',
  'Worship':          'bg-amber-100 text-amber-700',
  "Women's Ministry": 'bg-pink-100 text-pink-700',
  "Men's Ministry":   'bg-blue-100 text-blue-700',
  'Family':           'bg-orange-100 text-orange-700',
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return {
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day:   d.getDate().toString(),
    full:  d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
  };
}

export default function EventsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-hero-gradient py-20 text-white text-center">
        <p className="text-church-gold text-sm font-semibold tracking-widest uppercase mb-3">
          Gather Together
        </p>
        <h1 className="font-serif text-5xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          From worship nights to community cookouts, there's always something happening
          at Springhill. Come be part of it.
        </p>
      </section>

      {/* Events list */}
      <section className="py-16 bg-church-warm">
        <div className="max-w-3xl mx-auto px-5 space-y-6">
          {events.map((evt) => {
            const { month, day, full } = formatDate(evt.date);
            const categoryClass = categoryColors[evt.category] ?? 'bg-stone-100 text-stone-600';
            return (
              <div key={evt.title} className="card flex flex-col sm:flex-row gap-0 hover:shadow-md transition-shadow">
                {/* Date column */}
                <div className="flex-shrink-0 w-full sm:w-24 bg-church-purple/8 flex sm:flex-col items-center justify-center p-5 gap-3 sm:gap-0 border-b sm:border-b-0 sm:border-r border-stone-100">
                  <p className="text-church-purple text-xs font-bold tracking-widest uppercase">{month}</p>
                  <p className="font-serif text-4xl font-bold text-church-deep leading-none sm:mt-1">{day}</p>
                </div>
                {/* Content */}
                <div className="p-6 flex-1">
                  <div className="flex flex-wrap items-start gap-3 mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{evt.title}</h2>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryClass}`}>
                      {evt.category}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm mb-3 leading-relaxed">{evt.desc}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-stone-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {full} · {evt.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-stone-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {evt.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Questions CTA */}
        <div className="max-w-3xl mx-auto px-5 mt-12 text-center">
          <p className="text-stone-500 mb-3">Have a question about an event?</p>
          <Link href="/prayer" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
