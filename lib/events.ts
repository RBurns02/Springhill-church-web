export type SpcEvent = {
  slug: string;
  expires: Date;        // redirect to /events after this date
  month: string;
  day: string;
  fullDate: string;
  title: string;
  time: string;
  location: string;
  category: string;
  featured?: boolean;   // gold badge
  description: string;  // short — used on listing page
  body: string;         // longer — used on detail page
  highlights?: string[];
  speaker?: string;
  detailsUrl?: string;  // override slug-based URL (e.g. '/blast')
  gcalUrl: string;
  theme?: 'outdoor' | 'anniversary';
  tagline?: string;
};

export const events: SpcEvent[] = [
  {
    slug: 'mens-kayaking-trip',
    expires: new Date('2026-06-14T00:00:00'),
    month: 'JUN',
    day: '13',
    fullDate: 'Saturday, June 13, 2026',
    title: "Men's Kayaking Trip",
    time: 'All Day',
    location: 'Okatoma Creek · Seminary, MS',
    category: "Men's Ministry",
    theme: 'outdoor',
    tagline: "A day on the water with your brothers in Christ.",
    description: "Men, come out for a day on the water at Okatoma Creek — fellowship, fun, and time in God's creation.",
    body: "Join the men of Springhill for a day of kayaking on Okatoma Creek in Seminary, MS — a time set apart for fellowship, fun, and connection with your brothers in Christ. Get out in God's creation, strengthen friendships, and make memories. Whether you've been coming to Springhill for years or you're brand new, you are welcome.",
    highlights: [
      'Open to all men of the church',
      'Location: Okatoma Creek, Seminary, MS',
      'Kayaks and gear details to be announced',
      'Contact the church for more details',
    ],
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Men%27s+Kayaking+Trip&dates=20260613%2F20260614&location=Okatoma+Creek%2C+Seminary%2C+MS&details=Men%27s+Ministry+event+at+Springhill+Pentecostal+Church',
  },
  {
    slug: 'blast-kids-church',
    expires: new Date('2026-06-20T00:00:00'),
    month: 'JUN',
    day: '19',
    fullDate: 'Friday, June 19, 2026',
    title: 'BLAST — Kids Church',
    time: '7:00 PM',
    location: 'Springhill Pentecostal Church',
    category: 'Kids',
    description: "Theme: Daniel and the Lions Den. Bring your kids out for a night of fun, worship, and the Word!",
    body: "This month at BLAST we're diving into the story of Daniel and the Lions Den — one of the most exciting stories in all of Scripture. Kids ages 5–11 will experience Bible stories, games, worship, and prayer in a fun and welcoming environment built just for them.",
    highlights: [
      'Ages 5–11 · No adult required',
      'Theme: Daniel and the Lions Den',
      'Games, worship, and Bible stories',
      'Just walk in — no registration needed',
    ],
    detailsUrl: '/blast',
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=BLAST+Kids+Church&dates=20260619T190000%2F20260619T210000&location=1090+Springhill+Road%2C+Wesson%2C+MS&details=Monthly+BLAST+Kids+Church+for+ages+5-11',
  },
  {
    slug: 'fathers-day-service',
    expires: new Date('2026-06-22T00:00:00'),
    month: 'JUN',
    day: '21',
    fullDate: 'Sunday, June 21, 2026',
    title: "Father's Day Service",
    time: '10:00 AM',
    location: 'Springhill Pentecostal Church',
    category: 'Special Service',
    featured: true,
    description: "Join us for a special Father's Day service celebrating the fathers in our church family. One service only — 10:00 AM.",
    body: "This Father's Day, we're gathering together as one church family to honor the fathers in our congregation and to lift up the name of Jesus. We will have one combined service at 10:00 AM — come expecting a powerful word and a spirit-filled morning of worship. Bring your dad, your grandfather, or any man who has made a difference in your life.",
    highlights: [
      'One service only — 10:00 AM',
      'Open to everyone — bring your father',
      'No evening service this Sunday',
      'Springhill Pentecostal Church · Wesson, MS',
    ],
    gcalUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Father%27s+Day+Service&dates=20260621T100000%2F20260621T120000&location=1090+Springhill+Road%2C+Wesson%2C+MS&details=Special+Father%27s+Day+service+at+Springhill+Pentecostal+Church",
  },
  {
    slug: 'pastoral-anniversary',
    expires: new Date('2026-06-28T00:00:00'),
    month: 'JUN',
    day: '27',
    fullDate: 'Saturday, June 27, 2026',
    title: '2nd Annual Pastoral Anniversary Service',
    time: '7:00 PM',
    location: 'Springhill Pentecostal Church',
    category: 'Special Service',
    featured: true,
    theme: 'anniversary',
    tagline: "Two years of faithful, Spirit-filled ministry.",
    description: "Join us as we celebrate our pastor. Rev. Nathaniel Urshan will be ministering to us. You do not want to miss this special evening.",
    body: "Join us for a special evening celebrating Pastor Tommy Lee and two years of faithful, Spirit-filled ministry at Springhill Pentecostal Church. We are honored to have Rev. Nathaniel Urshan ministering to us. Come expecting a powerful move of God — this is a night you do not want to miss.",
    highlights: [
      'Guest speaker: Rev. Nathaniel Urshan',
      'Celebrating 2 years of Pastor Tommy Lee',
      'Open to everyone — bring a friend',
      'Service begins promptly at 7:00 PM',
    ],
    speaker: 'Rev. Nathaniel Urshan',
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=2nd+Annual+Pastoral+Anniversary+Service&dates=20260627T190000%2F20260627T210000&location=1090+Springhill+Road%2C+Wesson%2C+MS&details=Annual+Pastoral+Anniversary+Service+with+Rev.+Nathaniel+Urshan',
  },
];

export function getUpcomingEvents(): SpcEvent[] {
  const now = new Date();
  return events.filter((e) => e.expires > now);
}

export function getEventBySlug(slug: string): SpcEvent | undefined {
  return events.find((e) => e.slug === slug);
}
