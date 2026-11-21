import type { Metadata } from 'next';
import Link from 'next/link';
import { SpcPageHero, SpcSectionHeading, SpcSectionCta, SpcQuote } from '@/components/SpcPageKit';

export const metadata: Metadata = { title: 'Messages & Sermons | Springhill Pentecostal Church', description: 'Hear recent preaching and Biblical teaching from Springhill Pentecostal Church in Wesson, Mississippi, on SoundCloud.' };

const player = 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/spcwesson&color=%23173e31&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true';

export default function MessagesPage() {
  return <div className="spc-subpage">
    <SpcPageHero eyebrow="From the pulpit" title="Let the Word" accent="go with you." description="Whether you're at home, on the road, or catching up on a service you missed, listen to Biblical preaching from Springhill." image="/church6.jpg" imageAlt="Preaching at Springhill Pentecostal Church" variant="forest" primary={{text:'Listen to sermons',href:'#spc-sermons'}} secondary={{text:'Visit us in person',href:'/new-here'}} />
    <section id="spc-sermons" className="spc-sub-section spc-sub-section--soft"><div className="spc-container"><SpcSectionHeading eyebrow="Listen anytime" title="Recent messages." description="Use the player below to browse and listen to Springhill's published sermons, provided by SoundCloud." /><div className="spc-sermon-player"><iframe title="Springhill Pentecostal Church sermons on SoundCloud" src={player} scrolling="no" allow="autoplay" loading="lazy" /></div><div style={{marginTop:26}}><a href="https://soundcloud.com/spcwesson" target="_blank" rel="noopener noreferrer" className="spc-text-link">Open all recordings on SoundCloud <span aria-hidden="true">↗</span></a></div></div></section>
    <SpcQuote cite="Romans 10:17">“So then faith cometh by hearing, and hearing by the word of God.”</SpcQuote>
    <section className="spc-sub-section"><div className="spc-container"><SpcSectionHeading eyebrow="Every week" title="More than a recording." description="The sermons online are an extension of the worship and fellowship we share together." /><div className="spc-sub-cards">{[{title:'Faithful preaching',copy:'Messages centered on Scripture and the Apostolic faith.'},{title:'Listen wherever you are',copy:'Stream from a phone, tablet, or computer through SoundCloud.'},{title:'Come experience it',copy:'Join us in person for worship, prayer, and the Word.'}].map((v,i)=><article key={v.title} className="spc-sub-card"><span className="spc-sub-card-num">{String(i+1).padStart(2,'0')}</span><h3>{v.title}</h3><p>{v.copy}</p></article>)}</div></div></section>
    <SpcSectionCta eyebrow="Join us this Sunday" title="There's nothing like being in the room." description="We'd love to worship with you at Springhill. Sunday services begin at 10:00 AM and 6:00 PM, except the first Sunday at 2:00 PM only." primary={{text:'Plan your visit',href:'/new-here'}} secondary={{text:'Send a prayer request',href:'/prayer'}} />
  </div>;
}
