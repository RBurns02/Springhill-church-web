import type { Metadata } from 'next';
import Link from 'next/link';
import { SpcPageHero, SpcSectionHeading, SpcSectionCta, SpcImage, SpcQuote } from '@/components/SpcPageKit';

export const metadata: Metadata = { title: 'About Springhill | Springhill Pentecostal Church', description: 'Discover the story, heart, and people of Springhill Pentecostal Church in Wesson, Mississippi, established in 1935.' };

const values = [
  { title: 'Rooted in the Word', copy: 'Everything we do flows from Scripture. The Bible is our final authority for life, faith, and worship.' },
  { title: 'Hungry for His presence', copy: 'Every service, every prayer meeting, and every gathering is an opportunity to encounter God.' },
  { title: 'Family, not a program', copy: 'We celebrate together, carry burdens together, and grow together. There is a place for you here.' },
  { title: 'Open to everyone', copy: 'No perfect people required. We believe God meets people where they are and walks with them from there.' },
];

export default function AboutPage() {
  return <div className="spc-subpage">
    <SpcPageHero eyebrow="Our church · Est. 1935" title="Rooted in faith." accent="Growing together." description="For generations, Springhill has been a place of worship, prayer, and connection in Wesson, Mississippi. We'd love for you to know our story." image="/church-exterior.png" imageAlt="Exterior of Springhill Pentecostal Church in Wesson, Mississippi" photoPosition="35% 60%" primary={{ text: 'Plan your visit', href: '/new-here' }} />
    <section className="spc-sub-section"><div className="spc-container spc-sub-2col">
      <div className="spc-sub-copy"><p className="spc-eyebrow spc-eyebrow--green">Our story</p><h2>A church family since 1935.</h2><p>Springhill Pentecostal Church has been a beacon of faith in Wesson, Mississippi since 1935. For generations, this church has been a place where the Holy Ghost moves, families are built, and lives are changed by the power of God.</p><p>What started as a gathering of believers hungry for God has grown into a community rooted in Apostolic truth and deep love for one another. The same message of Jesus Christ continues today.</p><p>We are an Oneness Pentecostal church. We preach repentance, baptism in Jesus' name, and the infilling of the Holy Ghost as recorded in the book of Acts.</p><Link href="/beliefs" className="spc-text-link">Read what we believe <span aria-hidden="true">→</span></Link></div>
      <SpcImage src="/church8.jpg" alt="Springhill congregation worshipping together" caption="Worship, fellowship, and faith in Wesson, Mississippi" />
    </div></section>
    <section className="spc-sub-section spc-sub-section--sand"><div className="spc-container"><SpcSectionHeading eyebrow="The heart of Springhill" title="What we're about." description="Our mission has always been rooted in God's Word and carried out through people who love one another." /><div className="spc-values-editorial">{values.map(v=><article key={v.title} className="spc-value-story spc-reveal"><span className="spc-value-rule" aria-hidden="true" /><div><h3>{v.title}</h3><p>{v.copy}</p></div></article>)}</div></div></section>
    <section className="spc-sub-section"><div className="spc-container spc-sub-2col spc-sub-2col--reverse"><SpcImage src="/pastor.png" alt="Pastor Tommy and First Lady Lori Lee" className="spc-editorial-photo--portrait" /><div className="spc-sub-copy"><p className="spc-eyebrow spc-eyebrow--green">Meet our pastor and first lady</p><h2>Tommy &amp; Lori Lee</h2><p>Pastor Tommy Lee and his wife Lori have led Springhill Pentecostal Church with faithfulness, humility, and a heart for the people of this community.</p><p>Pastor Lee's preaching is marked by a love for the Word and genuine compassion for souls. His door is open to longtime members and first-time visitors alike.</p><Link href="/prayer" className="spc-text-link">Contact Pastor Tommy Lee <span aria-hidden="true">→</span></Link></div></div></section>
    <SpcQuote cite="Acts 2:42">“And they continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers.”</SpcQuote>
    <SpcSectionCta eyebrow="You're invited" title="Come be part of the family." description="Join us for a service, bring a friend, or get in touch first. We'd be glad to meet you." primary={{ text: 'Plan your visit', href: '/new-here' }} secondary={{ text: 'Contact us', href: '/prayer' }} />
  </div>;
}
