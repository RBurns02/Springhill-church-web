import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getEventBySlug, events, isUpcomingEvent } from '@/lib/events';
import { SpcPageHero, SpcSectionHeading, SpcSectionCta, SpcImage, spcMapsUrl } from '@/components/SpcPageKit';

export const dynamic = 'force-dynamic';
export async function generateStaticParams() { return events.map(event => ({ slug: event.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const event = getEventBySlug(params.slug);
  return event ? { title: `${event.title} | Springhill Pentecostal Church`, description: event.description } : { title: 'Event Not Found | Springhill Pentecostal Church' };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();
  if (!isUpcomingEvent(event)) redirect('/events');
  if (event.detailsUrl) redirect(event.detailsUrl);
  const themeLabel = event.theme === 'outdoor' ? 'Gathering outdoors' : event.theme === 'anniversary' ? 'A time to celebrate' : event.theme === 'fathersday' ? 'Special Sunday service' : 'Church family event';
  return <div className="spc-subpage">
    <SpcPageHero eyebrow={`${themeLabel} · ${event.category}`} title={event.title} description={event.tagline || event.description} image={event.speakerImage ?? "/church8.jpg"} imageAlt={event.speakerImage ? (event.speaker ?? 'Guest speaker') : "Springhill Pentecostal Church congregation"} imageFit={event.speakerImage ? 'contain' : 'cover'} primary={{text:'Event details',href:'#spc-event-detail'}} secondary={{text:'See all events',href:'/events'}} note={`${event.fullDate} · ${event.time}`} />
    <section className="spc-sub-section" id="spc-event-detail"><div className="spc-container spc-event-detail-grid"><div><SpcSectionHeading eyebrow="You're invited" title="About this event." description={event.description}/><div className="spc-sub-copy"><p>{event.body}</p></div>{event.highlights && event.highlights.length>0 && <><h3 style={{fontFamily:'Georgia,serif',fontSize:29,margin:'32px 0 8px'}}>What to know</h3><ul className="spc-event-highlights">{event.highlights.map((highlight,i)=><li key={i}>{highlight}</li>)}</ul></>}</div><aside className="spc-event-detail-aside"><p className="spc-eyebrow spc-eyebrow--green">At a glance</p><dl><dt>When</dt><dd>{event.fullDate}</dd><dt>Time</dt><dd>{event.time}</dd>{event.location && <><dt>Where</dt><dd>{event.location}</dd></>}{event.speaker && <><dt>Speaker</dt><dd>{event.speaker}</dd></>}{event.rescheduled && <><dt>Important update</dt><dd>Rescheduled</dd></>}</dl><a href={`/api/calendar/${event.slug}`} download={`${event.slug}.ics`} className="spc-button spc-button--green" style={{width:'100%'}}>Add to Calendar</a><div style={{marginTop:20,display:'flex',flexDirection:'column',gap:10}}><a href="https://maps.apple.com/?q=1090+Springhill+Road+Wesson+MS+39191" target="_blank" rel="noopener noreferrer" className="spc-text-link">Apple Maps ↗</a><a href={spcMapsUrl} target="_blank" rel="noopener noreferrer" className="spc-text-link">Google Maps ↗</a></div></aside></div></section>
    <section className="spc-sub-section spc-sub-section--sand"><div className="spc-container spc-sub-2col"><div className="spc-sub-copy"><p className="spc-eyebrow spc-eyebrow--green">Find us</p><h2>You're always welcome at Springhill.</h2><p>Springhill Pentecostal Church<br/>1090 Springhill Road<br/>Wesson, MS 39191</p><Link href="/new-here" className="spc-text-link">Plan your visit <span aria-hidden="true">→</span></Link></div>{!event.speakerImage && <SpcImage src="/church-exterior.png" alt="Exterior of Springhill Pentecostal Church" />}</div></section>
    <SpcSectionCta eyebrow="We'd love to see you there" title="Come be part of the family." description="Have a question about this gathering? We're happy to help." primary={{text:'Contact us',href:'/prayer'}} secondary={{text:'All events',href:'/events'}} />
  </div>;
}
