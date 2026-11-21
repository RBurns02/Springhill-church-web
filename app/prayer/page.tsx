import type { Metadata } from 'next';
import ContactModal from '@/components/ContactModal';
import PrayerModal from '@/components/PrayerModal';
import { SpcPageHero, SpcSectionHeading, SpcQuote, spcMapsUrl } from '@/components/SpcPageKit';

export const metadata: Metadata = { title: 'Prayer & Contact | Springhill Pentecostal Church', description: 'Send a prayer request, contact Pastor Tommy Lee, or find Springhill Pentecostal Church at 1090 Springhill Road in Wesson, MS.' };
const scriptures = [
  { text:'“Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.”', cite:'Philippians 4:6' },
  { text:'“Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.”', cite:'Jeremiah 33:3' },
  { text:'“Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.”', cite:'Matthew 7:7' },
];
export default function PrayerPage() {
  return <div className="spc-subpage">
    <SpcPageHero eyebrow="Prayer & contact" title="We're here" accent="for you." description="Whether you need someone to pray with you, have a question, or want to contact Pastor Tommy Lee, we'd love to hear from you." image="/church10.jpg" imageAlt="Prayer at the altar at Springhill Pentecostal Church" variant="forest" primary={{text:'Reach out to us',href:'#spc-contact-options'}} />
    <section id="spc-contact-options" className="spc-sub-section"><div className="spc-container"><SpcSectionHeading eyebrow="Reach out" title="How can we help?" description="Choose an option below. The existing secure contact and prayer forms are preserved in this redesign." /><div className="spc-contact-actions"><ContactModal /><PrayerModal /></div></div></section>
    <section className="spc-sub-section spc-sub-section--sand"><div className="spc-container spc-sub-2col"><div><SpcSectionHeading eyebrow="Find us" title="Join us in Wesson." description="Our doors are open for Sunday worship, Monday prayer, and Wednesday service."/><p style={{lineHeight:1.9,color:'#526256'}}>1090 Springhill Road<br/>Wesson, MS 39191<br/>Sunday: 10:00 AM &amp; 6:00 PM<br/>Monday: 7:00 PM · Wednesday: 7:30 PM<br/>First Sunday: 2:00 PM only</p><a href={spcMapsUrl} target="_blank" rel="noopener noreferrer" className="spc-text-link" style={{marginTop:22}}>Get directions <span aria-hidden="true">↗</span></a></div><div className="spc-contact-map"><iframe title="Springhill Pentecostal Church map, Wesson MS" loading="lazy" src="https://maps.google.com/maps?q=1090+Springhill+Road+Wesson+MS+39191&output=embed" /></div></div></section>
    <section className="spc-sub-section spc-sub-section--forest"><div className="spc-container"><SpcSectionHeading eyebrow="Hold on to the Word" title="What Scripture says about prayer." dark/><div className="spc-prayer-verse-list">{scriptures.map(v=><blockquote key={v.cite} className="spc-prayer-verse spc-reveal"><p>{v.text}</p><cite>{v.cite}</cite></blockquote>)}</div></div></section>
    <SpcQuote cite="James 5:16">“The effectual fervent prayer of a righteous man availeth much.”</SpcQuote>
  </div>;
}
