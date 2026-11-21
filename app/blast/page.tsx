import type { Metadata } from 'next';
import Link from 'next/link';
import { SpcPageHero, SpcSectionHeading, SpcSectionCta, SpcImage, SpcQuote } from '@/components/SpcPageKit';

export const metadata: Metadata = { title: 'BLAST Kids Church | Springhill Pentecostal Church', description: 'Learn about BLAST, Springhill Pentecostal Church’s monthly kids ministry for ages 5–11 in Wesson, Mississippi.' };
const activities = [
  { title:'Bible stories', body:'Real stories and real truth from Scripture, shared in ways children can understand and remember.' },
  { title:'Games & activities', body:'Hands-on games and activities help bring the Bible lesson to life.' },
  { title:'Worship & prayer', body:'Children learn to worship God and pray with confidence and joy.' },
];
export default function BlastPage() {
  return <div className="spc-subpage">
    <SpcPageHero eyebrow="BLAST Kids Church · Ages 5–11" title="Big faith starts" accent="little." description="BLAST is Springhill's monthly kids church — Bible stories, games, worship, and prayer in a welcoming space built for young hearts." variant="ocean" image="/church2.png" imageAlt="Worship at Springhill Pentecostal Church" primary={{text:'See upcoming dates',href:'/events'}} secondary={{text:'Contact the church',href:'/prayer'}} note="Free to attend. Check the calendar for the next gathering." />
    <div className="spc-sub-schedule" aria-label="BLAST information"><div><span>Who it's for</span><strong>Ages 5–11</strong><small>Children under 5 are welcome with a parent</small></div><div><span>How often</span><strong>Monthly</strong><small>Next date: see events calendar</small></div><div><span>Cost</span><strong>Free</strong><small>No registration needed</small></div><div><span>Where</span><strong>Springhill</strong><small>1090 Springhill Road, Wesson</small></div></div>
    <section className="spc-sub-section"><div className="spc-container"><SpcSectionHeading eyebrow="What is BLAST?" title="A place for kids to grow." description="Through Bible stories, activities, and worship, children learn who Jesus is and discover how much He loves them."/><div className="spc-sub-cards">{activities.map((a,i)=><article key={a.title} className="spc-sub-card"><span className="spc-sub-card-num">{String(i+1).padStart(2,'0')}</span><h3>{a.title}</h3><p>{a.body}</p></article>)}</div></div></section>
    <section className="spc-sub-section spc-sub-section--soft"><div className="spc-container spc-sub-2col"><SpcImage src="/church13.png" alt="Worship during a Springhill Pentecostal Church service" /><div className="spc-sub-copy"><p className="spc-eyebrow spc-eyebrow--green">For parents & families</p><h2>Simple to join. Full of purpose.</h2><p>BLAST is for children ages 5–11. Each gathering is designed to teach the Word of God through engaging stories, prayer, worship, and activities.</p><p>Children under 5 are welcome with a parent or guardian. Check the event calendar for the next date, and contact us with any questions before coming.</p><Link href="/events" className="spc-text-link">Check the next BLAST date <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="spc-sub-section spc-sub-section--sand"><div className="spc-container"><SpcSectionHeading eyebrow="From a past BLAST lesson" title="Jonah &amp; the whale." description="One of the Bible stories BLAST has explored is Jonah — a reminder of God's mercy and second chances."/><div className="spc-sub-cards">{[
      {title:'God calls Jonah',body:'God told Jonah to go to Nineveh, but Jonah ran the other way.'},
      {title:'Inside the great fish',body:'After a great storm, Jonah found himself in the belly of a fish — where he prayed to God.'},
      {title:'A second chance',body:'God heard Jonah, and Jonah went to Nineveh to share God’s message.'},
    ].map((v,i)=><article className="spc-sub-card" key={v.title}><span className="spc-sub-card-num">0{i+1}</span><h3>{v.title}</h3><p>{v.body}</p></article>)}</div></div></section>
    <SpcQuote cite="Jonah 2:9">“Salvation is of the LORD.”</SpcQuote>
    <SpcSectionCta eyebrow="Bring the family" title="Ready for BLAST?" description="We'd love to have your children join us. No fee, no registration — just check the upcoming date and come on in." primary={{text:'Church events',href:'/events'}} secondary={{text:'Ask a question',href:'/prayer'}} />
  </div>;
}
