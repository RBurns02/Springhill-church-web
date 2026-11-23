import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PhotoSlider from '@/components/PhotoSlider';
import BlastHomeFeature from '@/components/BlastHomeFeature';
import { getUpcomingEvents } from '@/lib/events';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Springhill Pentecostal Church | Welcome Home | Wesson, MS',
  description: 'Find a place to worship and grow at Springhill Pentecostal Church in Wesson, Mississippi. Sunday 10 AM & 6 PM, Wednesday 7:30 PM. First Sundays at 2 PM only; prayer gatherings as announced.',
};

function HeartIcon() {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M16 27 5.5 16.8C-2 8.5 9 1 16 10c7-9 18-1.5 10.5 6.8L16 27Z"/></svg>;
}
function BookIcon() {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M16 7c-4-3-8-3-13-2v20c5-1 9-1 13 2 4-3 8-3 13-2V5c-5-1-9-1-13 2Zm0 0v20"/></svg>;
}
function SparkIcon() {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m16 3 3.7 9.3L29 16l-9.3 3.7L16 29l-3.7-9.3L3 16l9.3-3.7L16 3Z"/></svg>;
}

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents().slice(0, 2);
  return (
    <div className="spc-site">
      <section className="spc-hero" aria-labelledby="spc-hero-heading">
        <div className="spc-hero-copy">
          <p className="spc-eyebrow">Wesson, Mississippi <span aria-hidden="true">·</span> Est. 1935</p>
          <div className="spc-hero-mark" aria-hidden="true" />
          <h1 id="spc-hero-heading" className="spc-display">There&apos;s a place for <em>you here.</em></h1>
          <p className="spc-hero-description">More than a Sunday service, Springhill is a church family. Come worship with us, find your people, and encounter the presence of God.</p>
          <div className="spc-hero-actions">
            <Link href="/new-here" className="spc-button spc-button--green">Plan Your Visit <span className="spc-arrow" aria-hidden="true">↗</span></Link>
            <Link href="/about" className="spc-button spc-button--outline">Get to Know Us <span className="spc-arrow" aria-hidden="true">→</span></Link>
          </div>
          <p className="spc-hero-footnote"><span aria-hidden="true" /> Everyone is welcome. No registration needed.</p>
        </div>
        <div className="spc-hero-photo spc-logo-hero">
          <Image className="spc-hero-logo-image" src="/logo-gold.png" alt="Springhill Pentecostal Church logo" fill priority sizes="(max-width: 720px) 100vw, 48vw" />
          <p className="spc-logo-hero-eyebrow">Springhill Pentecostal Church · Wesson, Mississippi</p>
          <p className="spc-logo-hero-footnote">Rooted in faith since 1935</p>
        </div>
      </section>

      <section className="spc-weekly" aria-label="Worship schedule and prayer gatherings">
        <div className="spc-container spc-weekly-inner">
          <div className="spc-weekly-item"><span>Sunday Worship</span><strong>10 AM &amp; 6 PM</strong><small>Except the first Sunday of each month</small></div>
          <div className="spc-weekly-item"><span>First Sunday</span><strong>2:00 PM only</strong><small>One Friends &amp; Family service</small></div>
          <div className="spc-weekly-item"><span>Wednesday</span><strong>7:30 PM</strong><small>Midweek service</small></div>
          <div className="spc-weekly-item"><span>Prayer Gatherings</span><strong>As announced</strong><small>Often Monday at 7 PM · <Link href="/events">Check updates ↗</Link></small></div>
        </div>
      </section>

      <section className="spc-welcome" aria-labelledby="spc-welcome-heading">
        <div className="spc-container spc-welcome-grid">
          <div className="spc-welcome-copy spc-reveal">
            <p className="spc-eyebrow spc-eyebrow--green">Welcome home</p>
            <h2 id="spc-welcome-heading" className="spc-section-title">Faith is better lived <em>together.</em></h2>
            <p className="spc-text">Whether you&apos;ve grown up in church or this will be your first time through the doors, we would love to meet you. At Springhill you&apos;ll find heartfelt worship, preaching grounded in Scripture, and people who care.</p>
            <p className="spc-text">We believe in repentance, baptism in Jesus&apos; name, and the infilling of the Holy Ghost. And we believe there&apos;s room for you to grow in your walk with God.</p>
            <Link href="/new-here" className="spc-text-link">What to expect on your first visit <span className="spc-arrow" aria-hidden="true">→</span></Link>
          </div>
          <div className="spc-welcome-photos spc-reveal">
            <div className="spc-photo-main"><Image src="/photography/spc-new-10.webp" alt="Prayer at the altar during a Springhill service" fill sizes="(max-width: 720px) 55vw, 28vw" /></div>
            <div className="spc-photo-side"><Image src="/photography/spc-new-00.webp" alt="Members of Springhill praying together at the altar" fill sizes="(max-width: 720px) 40vw, 20vw" /></div>
            <div className="spc-welcome-stamp"><strong>1935</strong><small>Established in faith</small></div>
          </div>
        </div>
      </section>

      <BlastHomeFeature />

      <section className="spc-why" aria-labelledby="spc-expect-heading">
        <div className="spc-container spc-why-editorial">
          <div className="spc-why-picture spc-why-picture--framed spc-reveal">
            <Image src="/photography/spc-new-06.webp" alt="Three men worshipping with hands raised at Springhill" fill sizes="(max-width: 720px) 100vw, 42vw" />
            <span>THE HEART OF SPRINGHILL</span>
          </div>
          <div className="spc-why-detail">
            <p className="spc-eyebrow spc-eyebrow--green spc-reveal">What to expect</p>
            <h2 id="spc-expect-heading" className="spc-section-title spc-reveal">Come as you are.<br/><em>Leave encouraged.</em></h2>
            <p className="spc-text spc-reveal">Real worship, genuine community, and the Word of God. Not just a list of things we do — it's the reason we're here.</p>
            <div className="spc-expectation-lines">
              <article className="spc-expectation-line spc-reveal"><HeartIcon/><div><h3>Real community</h3><p>Friendly faces and a church family that will walk beside you.</p></div></article>
              <article className="spc-expectation-line spc-reveal"><BookIcon/><div><h3>Biblical preaching</h3><p>Faithful teaching from the Word of God, with room to grow.</p></div></article>
              <article className="spc-expectation-line spc-reveal"><SparkIcon/><div><h3>Spirit-filled worship</h3><p>Heartfelt praise, prayer, and a genuine expectation that God moves.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="spc-life" aria-labelledby="spc-life-heading">
        <div className="spc-container">
          <div className="spc-life-head spc-reveal">
            <div><p className="spc-eyebrow spc-eyebrow--gold">A glimpse inside</p><h2 id="spc-life-heading" className="spc-section-title">Life at Springhill.</h2></div>
            <p>These are real moments from our church family. This is what a place to belong looks like.</p>
          </div>
          <PhotoSlider />
        </div>
      </section>

      <section className="spc-connection" aria-label="Sermons and upcoming events">
        <div className="spc-container spc-connection-grid">
          <div className="spc-message-panel spc-reveal">
            <p className="spc-eyebrow spc-eyebrow--green">From the pulpit</p>
            <h2>Listen to a message.</h2>
            <p>Carry the Word with you through the week. Listen to recent preaching from Springhill.</p>
            <div className="spc-audio-player"><iframe title="Springhill Pentecostal Church sermons on SoundCloud" loading="lazy" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/spcwesson&color=%23173e31&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false" /></div>
            <Link href="/services" className="spc-text-link">Browse all messages <span className="spc-arrow" aria-hidden="true">→</span></Link>
          </div>
          <div className="spc-events-panel spc-reveal">
            <p className="spc-eyebrow spc-eyebrow--green">Gather with us</p>
            <h2>There&apos;s always a place for you.</h2>
            <p>From Sunday services to special gatherings, we want you to feel part of the family.</p>
            <div className="spc-events-content">
              {upcomingEvents.length === 0 ? (
                <><strong>Join us this week</strong><p>No special gatherings are currently announced. Sunday and Wednesday services continue, and new BLAST dates will be listed when confirmed.</p></>
              ) : upcomingEvents.map(event => (
                <div key={event.slug} className="mb-5 last:mb-0">
                  <p className="spc-event-date">{event.fullDate} · {event.time}</p>
                  <strong>{event.title}</strong><p>{event.description}</p>
                  <Link href={event.detailsUrl ?? `/events/${event.slug}`} className="spc-text-link" style={{marginTop: 12}}>Event details <span aria-hidden="true">→</span></Link>
                </div>
              ))}
            </div>
            <Link href="/events" className="spc-text-link">See the church calendar <span className="spc-arrow" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="spc-prayer" aria-labelledby="spc-prayer-heading">
        <div className="spc-container spc-prayer-grid">
          <div className="spc-reveal"><p className="spc-eyebrow spc-eyebrow--gold">We&apos;re here for you</p><h2 id="spc-prayer-heading">Can we pray with you?</h2><p>Whatever you&apos;re facing, we believe prayer changes things. Let us stand with you.</p></div>
          <div className="spc-prayer-actions spc-reveal"><Link href="/prayer" className="spc-button spc-button--light">Send a Prayer Request <span className="spc-arrow" aria-hidden="true">→</span></Link><Link href="/beliefs" className="spc-button spc-button--outline">What We Believe</Link></div>
        </div>
      </section>
    </div>
  );
}
