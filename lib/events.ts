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
  theme?: 'outdoor' | 'anniversary' | 'fathersday';
  tagline?: string;
  rescheduled?: boolean;
  speakerImage?: string;
};

export const events: SpcEvent[] = [
  {
    slug: 'mens-kayaking-trip',
    expires: new Date('2026-06-13T23:59:59Z'),
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
    expires: new Date('2026-06-19T23:59:59Z'),
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
    expires: new Date('2026-06-21T23:59:59Z'),
    month: 'JUN',
    day: '21',
    fullDate: 'Sunday, June 21, 2026',
    title: "Father's Day Service",
    time: '10:00 AM',
    location: 'Springhill Pentecostal Church',
    category: 'Special Service',
    featured: true,
    theme: 'fathersday' as const,
    tagline: "Honoring the fathers who lead, love, and serve.",
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
    expires: new Date('2026-06-27T23:59:59Z'),
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
    rescheduled: true,
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=2nd+Annual+Pastoral+Anniversary+Service&dates=20260627T190000%2F20260627T210000&location=1090+Springhill+Road%2C+Wesson%2C+MS&details=Annual+Pastoral+Anniversary+Service+with+Rev.+Nathaniel+Urshan',
  },
  {
    slug: 'july-4th-park',
    expires: new Date('2026-07-04T23:59:59Z'),
    month: 'JUL',
    day: '4',
    fullDate: 'Saturday, July 4, 2026',
    title: 'July 4th Celebration at the Park',
    time: '5:00 PM – 9:00 PM',
    location: 'Wesson City Park · Wesson, MS',
    category: 'Community Event',
    description: "Come celebrate Independence Day with the Springhill church family at the park in Wesson, MS.",
    body: "Come celebrate Independence Day with the Springhill church family at the park in Wesson, MS. Join us from 5:00 PM to 9:00 PM for an evening of fellowship and fun. Everyone is welcome — bring your family and friends!",
    highlights: [
      'Saturday, July 4th · 5:00 PM – 9:00 PM',
      'Wesson City Park, Wesson, MS',
      'Open to everyone — bring the family',
    ],
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=July+4th+Celebration+at+the+Park&dates=20260704T170000%2F20260704T210000&location=Wesson+City+Park%2C+Wesson%2C+MS&details=July+4th+celebration+with+the+Springhill+church+family',
  },
  {
    slug: 'lake-service',
    expires: new Date('2026-07-05T23:59:59Z'),
    month: 'JUL',
    day: '5',
    fullDate: 'Sunday, July 5, 2026',
    title: 'Lake Service',
    time: '10:00 AM',
    location: 'Lake Lincoln · Wesson, MS',
    category: 'Special Service',
    featured: true,
    theme: 'outdoor',
    tagline: 'Worship under the open sky at Lake Lincoln.',
    description: "Join us for a special outdoor Sunday service at Lake Lincoln in Wesson, MS. One service only — 10:00 AM.",
    body: "We're taking church outside! Join us at Lake Lincoln in Wesson for a special outdoor worship service. Come ready to worship God in the beauty of His creation. One service only at 10:00 AM — no evening service this Sunday.",
    highlights: [
      'One service only — 10:00 AM',
      'Location: Lake Lincoln, Wesson, MS',
      'Outdoor worship service',
      'No evening service this Sunday',
    ],
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Lake+Service&dates=20260705T100000%2F20260705T120000&location=Lake+Lincoln%2C+Wesson%2C+MS&details=Special+outdoor+Sunday+service+at+Lake+Lincoln',
  },
  {
    slug: 'merge-service',
    expires: new Date('2026-07-12T23:59:59Z'),
    month: 'JUL',
    day: '12',
    fullDate: 'Sunday, July 12, 2026',
    title: 'Merge Service',
    time: '12:00 PM',
    location: '172 LA-70 Spur',
    category: 'Special Service',
    featured: true,
    tagline: 'One unified service — departing the church at 8:00 AM.',
    description: "Join us for our Merge Service at 12:00 PM at 172 LA-70 Spur. We will be leaving the church around 8:00 AM. One service only.",
    body: "Join us for a special Merge Service at 172 LA-70 Spur. We will be departing from Springhill Pentecostal Church at approximately 8:00 AM. Come expecting a powerful move of God as we gather together for one unified service at 12:00 PM.",
    highlights: [
      'Departing church at approximately 8:00 AM',
      'Service begins at 12:00 PM',
      'Location: 172 LA-70 Spur',
      'One service only',
    ],
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Merge+Service&dates=20260712T120000%2F20260712T140000&location=172+LA-70+Spur&details=Special+Merge+Service+-+Springhill+Pentecostal+Church',
  },
  {
    slug: 'dustin-hughes-service',
    expires: new Date('2026-08-08T23:59:59Z'),
    month: 'AUG',
    day: '8',
    fullDate: 'Sunday, August 8, 2026',
    title: 'Special Evening Service — Rev. Dustin Hughes',
    time: '6:00 PM',
    location: 'Springhill Pentecostal Church',
    category: 'Special Service',
    featured: true,
    speaker: 'Rev. Dustin Hughes',
    speakerImage: '/dustin-hughes.jpg',
    description: "Join us for a special Sunday evening service featuring Rev. Dustin Hughes ministering in the Word.",
    body: "Come join us for a powerful Sunday evening service as we welcome Rev. Dustin Hughes to the Springhill pulpit. Come expecting a word from God — this is a service you do not want to miss.",
    highlights: [
      'Sunday evening — 6:00 PM',
      'Special guest speaker: Rev. Dustin Hughes',
      'Springhill Pentecostal Church · Wesson, MS',
    ],
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Special+Evening+Service+-+Rev.+Dustin+Hughes&dates=20260808T180000%2F20260808T200000&location=1090+Springhill+Road%2C+Wesson%2C+MS&details=Special+evening+service+featuring+Rev.+Dustin+Hughes',
  },
  {
    slug: 'couples-seminar',
    expires: new Date('2026-08-15T23:59:59Z'),
    month: 'AUG',
    day: '15',
    fullDate: 'Saturday, August 15, 2026',
    title: 'Couples Seminar',
    time: '10:00 AM – 1:00 PM',
    location: 'Springhill Pentecostal Church',
    category: 'Seminar',
    featured: true,
    speaker: 'Bro. Jeremy Price',
    description: "A special couples seminar with Bro. Jeremy Price. Come invest in your marriage — 10:00 AM to 1:00 PM.",
    body: "Join us for a special Couples Seminar with Bro. Jeremy Price. Whether you are newlyweds or have been married for decades, this seminar is designed to encourage, strengthen, and equip couples in their walk together. Come invest in your marriage.",
    highlights: [
      'Saturday, August 15 · 10:00 AM – 1:00 PM',
      'Speaker: Bro. Jeremy Price',
      'Open to all couples',
      'Springhill Pentecostal Church · Wesson, MS',
    ],
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Couples+Seminar&dates=20260815T100000%2F20260815T130000&location=1090+Springhill+Road%2C+Wesson%2C+MS&details=Couples+Seminar+with+Bro.+Jeremy+Price',
  },
  {
    slug: 'blast-august',
    expires: new Date('2026-08-21T23:59:59Z'),
    month: 'AUG',
    day: '21',
    fullDate: 'Friday, August 21, 2026',
    title: 'BLAST — Kids Church',
    time: '7:00 PM',
    location: 'Springhill Pentecostal Church',
    category: 'Kids',
    speaker: 'Rev. Seth Cliburn',
    description: "Theme: Jonah and the Whale. Bring your kids out for a night of fun, worship, and the Word with Rev. Seth Cliburn!",
    body: "This month at BLAST we're diving into the story of Jonah and the Whale! Kids ages 5–11 will experience Bible stories, games, worship, and prayer in a fun and welcoming environment built just for them. Rev. Seth Cliburn will be ministering to the kids.",
    highlights: [
      'Ages 5–11 · No adult required',
      'Theme: Jonah and the Whale',
      'Speaker: Rev. Seth Cliburn',
      'Games, worship, and Bible stories',
      'Just walk in — no registration needed',
    ],
    detailsUrl: '/blast',
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=BLAST+Kids+Church&dates=20260821T190000%2F20260821T210000&location=1090+Springhill+Road%2C+Wesson%2C+MS&details=BLAST+Kids+Church+-+Jonah+and+the+Whale+with+Rev.+Seth+Cliburn',
  },
  {
    slug: 'david-cheramie-service',
    expires: new Date('2026-08-23T23:59:59Z'),
    month: 'AUG',
    day: '23',
    fullDate: 'Sunday, August 23, 2026',
    title: 'Special Sunday — Bro. David Cheramie',
    time: '10:00 AM & 6:00 PM',
    location: 'Springhill Pentecostal Church',
    category: 'Special Service',
    featured: true,
    speaker: 'Bro. David Cheramie',
    speakerImage: '/david-cheramie.jpg',
    description: "Bro. David Cheramie will be ministering both Sunday morning and Sunday evening. You do not want to miss this.",
    body: "Join us for a special Sunday as we welcome Bro. David Cheramie to Springhill Pentecostal Church. He will be ministering both in the morning service at 10:00 AM and the evening service at 6:00 PM. Come expecting God to move.",
    highlights: [
      'Morning Service — 10:00 AM',
      'Evening Service — 6:00 PM',
      'Guest speaker: Bro. David Cheramie',
      'Springhill Pentecostal Church · Wesson, MS',
    ],
    gcalUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Special+Sunday+-+Bro.+David+Cheramie&dates=20260823T100000%2F20260823T200000&location=1090+Springhill+Road%2C+Wesson%2C+MS&details=Bro.+David+Cheramie+ministering+morning+and+evening',
  },
];

export function getUpcomingEvents(): SpcEvent[] {
  const now = new Date();
  return events.filter((e) => e.expires > now);
}

export function getEventBySlug(slug: string): SpcEvent | undefined {
  return events.find((e) => e.slug === slug);
}
