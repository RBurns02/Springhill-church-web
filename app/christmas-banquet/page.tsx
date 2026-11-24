import type { Metadata } from 'next';
import Link from 'next/link';
import { SpcQuote, SpcSectionCta } from '@/components/SpcPageKit';
import './christmas-banquet.css';

export const metadata: Metadata = {
  title: 'Christmas Banquet 2026 | Springhill Pentecostal Church',
  description: 'Celebrate the Christmas season with the Springhill church family. Christmas Banquet — Sunday, December 13, 2026 at 6:00 PM. Everyone is welcome.',
};

function XmasSpark({ x, y, s = 1, color = '#f5c54e' }: { x: number; y: number; s?: number; color?: string }) {
  return <path className="xmas-spark" d={'M'+x+' '+(y-9*s)+' L'+(x+2.5*s)+' '+(y-2.5*s)+' L'+(x+9*s)+' '+y+' L'+(x+2.5*s)+' '+(y+2.5*s)+' L'+x+' '+(y+9*s)+' L'+(x-2.5*s)+' '+(y+2.5*s)+' L'+(x-9*s)+' '+y+' L'+(x-2.5*s)+' '+(y-2.5*s)+' Z'} fill={color} />;
}

function TreeIllustration() {
  return (
    <svg className="xmas-tree-svg" viewBox="0 0 650 560" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="xmas-tree-bg"><stop stopColor="#2a5080" stopOpacity=".45"/><stop offset="1" stopColor="#2a5080" stopOpacity="0"/></radialGradient>
        <radialGradient id="xmas-star-halo" cx=".5" cy=".5" r=".5"><stop stopColor="#fffde0"/><stop offset=".55" stopColor="#f5c54e" stopOpacity=".5"/><stop offset="1" stopColor="#f5c54e" stopOpacity="0"/></radialGradient>
      </defs>
      {/* Background glow */}
      <ellipse cx="325" cy="295" rx="275" ry="250" fill="url(#xmas-tree-bg)" />
      {/* Background stars */}
      <circle cx="118" cy="82" r="2" fill="#fffde8" opacity=".85"/><circle cx="175" cy="145" r="1.5" fill="#fffde8" opacity=".6"/><circle cx="502" cy="68" r="2.2" fill="#fffde8" opacity=".8"/><circle cx="560" cy="130" r="1.5" fill="#fffde8" opacity=".55"/><circle cx="88" cy="195" r="1.5" fill="#fffde8" opacity=".5"/><circle cx="568" cy="210" r="1.8" fill="#fffde8" opacity=".65"/><circle cx="145" cy="310" r="1.5" fill="#fffde8" opacity=".45"/><circle cx="528" cy="345" r="1.5" fill="#fffde8" opacity=".5"/>
      {/* Star glow at top */}
      <ellipse cx="325" cy="66" rx="48" ry="48" fill="url(#xmas-star-halo)" opacity=".9"/>
      {/* Main tree group — floats */}
      <g className="xmas-tree-body">
        {/* Tree star */}
        <path className="xmas-star-top" d="M325 46 L330 61 L346 61 L334 71 L338 86 L325 77 L312 86 L316 71 L304 61 L320 61 Z" fill="#f5c54e"/>
        {/* Tier 1 */}
        <path d="M325 95 L375 185 L275 185 Z" fill="#1f5530"/>
        <path d="M325 95 L340 125 L325 118 L310 125 Z" fill="#d4ece0" opacity=".7"/>
        {/* Tier 2 */}
        <path d="M325 155 L425 295 L225 295 Z" fill="#236038"/>
        <path d="M325 155 L348 200 L325 192 L302 200 Z" fill="#d4ece0" opacity=".65"/>
        {/* Tier 3 */}
        <path d="M325 245 L460 415 L190 415 Z" fill="#1f5530"/>
        <path d="M325 245 L352 295 L325 285 L298 295 Z" fill="#d4ece0" opacity=".6"/>
        {/* Snow on tier edges */}
        <path d="M275 185 Q300 178 325 183 Q350 178 375 185" fill="none" stroke="#e4f0ea" strokeWidth="8" strokeLinecap="round" opacity=".7"/>
        <path d="M225 295 Q275 286 325 292 Q375 286 425 295" fill="none" stroke="#e4f0ea" strokeWidth="8" strokeLinecap="round" opacity=".65"/>
        <path d="M190 415 Q255 404 325 410 Q395 404 460 415" fill="none" stroke="#e4f0ea" strokeWidth="8" strokeLinecap="round" opacity=".6"/>
        {/* Trunk */}
        <rect x="307" y="415" width="36" height="62" rx="4" fill="#6b3c20"/>
        {/* Snow drift at base */}
        <ellipse cx="325" cy="490" rx="130" ry="22" fill="#e8f2ee" opacity=".3"/>
        {/* Ornaments tier 1 */}
        <circle cx="316" cy="155" r="9" fill="#c83030"/><circle cx="338" cy="162" r="8" fill="#f5c54e"/>
        {/* Ornaments tier 2 */}
        <circle cx="288" cy="230" r="10" fill="#4a8fd4"/><circle cx="340" cy="220" r="9" fill="#c83030"/><circle cx="368" cy="245" r="8" fill="#f5c54e"/><circle cx="310" cy="262" r="8" fill="#e4f0ef"/>
        {/* Ornaments tier 3 */}
        <circle cx="270" cy="325" r="11" fill="#f5c54e"/><circle cx="312" cy="308" r="10" fill="#c83030"/><circle cx="355" cy="320" r="9" fill="#4a8fd4"/><circle cx="398" cy="344" r="10" fill="#c83030"/><circle cx="250" cy="375" r="8" fill="#e4f0ef"/><circle cx="290" cy="370" r="9" fill="#4ab89a"/><circle cx="362" cy="368" r="8" fill="#f5c54e"/><circle cx="410" cy="373" r="8" fill="#4a8fd4"/>
        {/* String of lights hint */}
        <path d="M290 270 Q310 262 330 268 Q350 262 370 270" fill="none" stroke="#f5c54e" strokeWidth="2.5" strokeLinecap="round" opacity=".7"/>
        <path d="M252 362 Q285 352 325 358 Q365 352 400 362" fill="none" stroke="#f5c54e" strokeWidth="2.5" strokeLinecap="round" opacity=".65"/>
        {/* Presents at base */}
        <rect x="225" y="455" width="45" height="38" rx="3" fill="#c83030"/><rect x="225" y="460" width="45" height="4" fill="#f5c54e"/><rect x="244" y="455" width="4" height="38" fill="#f5c54e"/>
        <rect x="386" y="460" width="40" height="34" rx="3" fill="#4a8fd4"/><rect x="386" y="466" width="40" height="4" fill="#e4f0ef"/><rect x="403" y="460" width="4" height="34" fill="#e4f0ef"/>
        <rect x="286" y="470" width="30" height="24" rx="2" fill="#236038"/><rect x="286" y="474" width="30" height="4" fill="#f5c54e"/>
      </g>
      <XmasSpark x={298} y={48} s={.9} /><XmasSpark x={354} y={52} s={.8} color="#c8d8ff" />
      <XmasSpark x={175} y={340} s={1.1} /><XmasSpark x={488} y={280} s={1.0} color="#f9d070" /><XmasSpark x={130} y={450} s={.8} color="#c8d8ff" /><XmasSpark x={525} y={418} s={.75} />
    </svg>
  );
}

function CandleIllustration() {
  return (
    <svg className="xmas-candle-svg" viewBox="0 0 580 500" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="xmas-candle-bg"><stop stopColor="#f5d87a" stopOpacity=".45"/><stop offset="1" stopColor="#f5d87a" stopOpacity="0"/></radialGradient>
        <radialGradient id="xmas-flame-glow" cx=".5" cy=".5" r=".5"><stop stopColor="#ffe7a0"/><stop offset=".6" stopColor="#ffb238" stopOpacity=".5"/><stop offset="1" stopColor="#ff9500" stopOpacity="0"/></radialGradient>
      </defs>
      {/* Background circle */}
      <circle cx="290" cy="248" r="210" fill="url(#xmas-candle-bg)" />
      {/* Background stars */}
      <circle cx="118" cy="96" r="2" fill="#f5c54e" opacity=".6"/><circle cx="463" cy="82" r="1.8" fill="#f5c54e" opacity=".5"/><circle cx="526" cy="175" r="1.5" fill="#f5c54e" opacity=".4"/><circle cx="90" cy="215" r="1.5" fill="#f5c54e" opacity=".35"/>
      {/* Halo ring */}
      <circle className="xmas-halo-ring" cx="290" cy="248" r="162" fill="none" stroke="#f5c54e" strokeOpacity=".16" strokeWidth="2" strokeDasharray="6 15"/>
      {/* Flame glow */}
      <ellipse cx="290" cy="140" rx="55" ry="65" fill="url(#xmas-flame-glow)" />
      {/* Candle body */}
      <rect x="248" y="195" width="84" height="230" rx="8" fill="#fff9ed"/>
      {/* Wax sheen */}
      <rect x="260" y="202" width="20" height="223" rx="6" fill="#fffef5" opacity=".58"/>
      {/* Wax drips */}
      <path d="M260 200 Q254 228 257 250 Q255 238 252 218 Q250 203 258 200Z" fill="#fff2d2" opacity=".8"/>
      <path d="M318 200 Q324 216 321 240 Q323 228 327 208 Q329 200 322 200Z" fill="#fff2d2" opacity=".8"/>
      {/* Candle top ellipse */}
      <ellipse cx="290" cy="195" rx="42" ry="12" fill="#fff6e0"/>
      {/* Wick */}
      <line x1="290" y1="183" x2="290" y2="195" stroke="#4a3010" strokeWidth="3" strokeLinecap="round"/>
      {/* Flame */}
      <path className="xmas-flame-shape" d="M290 183 Q282 175 278 162 Q275 148 283 140 Q288 148 290 158 Q292 148 297 140 Q305 148 302 162 Q298 175 290 183Z" fill="#ffcc44"/>
      <path className="xmas-flame-shape" d="M290 183 Q284 178 282 168 Q280 155 288 148 Q289 155 290 163 Q291 155 292 148 Q300 155 298 168 Q296 178 290 183Z" fill="#ff8020" opacity=".82"/>
      {/* Candle holder */}
      <ellipse cx="290" cy="425" rx="78" ry="16" fill="#d4a855"/>
      <ellipse cx="290" cy="420" rx="70" ry="12" fill="#e8c070"/>
      {/* Holly wreath */}
      <g className="xmas-holly-group">
        <ellipse cx="218" cy="405" rx="22" ry="10" transform="rotate(-40 218 405)" fill="#1f5530"/>
        <ellipse cx="210" cy="420" rx="22" ry="10" transform="rotate(-15 210 420)" fill="#236038"/>
        <ellipse cx="362" cy="405" rx="22" ry="10" transform="rotate(40 362 405)" fill="#1f5530"/>
        <ellipse cx="370" cy="420" rx="22" ry="10" transform="rotate(15 370 420)" fill="#236038"/>
        <ellipse cx="258" cy="428" rx="22" ry="10" transform="rotate(-25 258 428)" fill="#1f5530"/>
        <ellipse cx="322" cy="428" rx="22" ry="10" transform="rotate(25 322 428)" fill="#236038"/>
        <circle cx="233" cy="413" r="7" fill="#c83030"/><circle cx="246" cy="408" r="6" fill="#c83030"/>
        <circle cx="348" cy="413" r="7" fill="#c83030"/><circle cx="336" cy="408" r="6" fill="#c83030"/>
        <circle cx="288" cy="430" r="6" fill="#c83030"/>
      </g>
      <XmasSpark x={158} y={165} s={1.2} /><XmasSpark x={420} y={148} s={1.0} /><XmasSpark x={138} y={325} s={.85} color="#f5c54e" /><XmasSpark x={450} y={340} s={.75} color="#f5c54e" />
    </svg>
  );
}

function NightStarIllustration() {
  return (
    <svg className="xmas-star-svg" viewBox="0 0 640 470" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="xmas-star-scene-bg" cx=".5" cy=".45" r=".5"><stop stopColor="#2a7a50" stopOpacity=".6"/><stop offset="1" stopColor="#2a7a50" stopOpacity="0"/></radialGradient>
      </defs>
      {/* Background */}
      <circle cx="320" cy="210" r="195" fill="#0e2d1f" opacity=".65"/>
      {/* Background twinkling stars */}
      <circle cx="98" cy="88" r="2" fill="#c8e8d8" opacity=".7"/><circle cx="152" cy="55" r="1.5" fill="#c8e8d8" opacity=".5"/><circle cx="490" cy="72" r="2" fill="#c8e8d8" opacity=".6"/><circle cx="558" cy="118" r="1.5" fill="#c8e8d8" opacity=".4"/><circle cx="78" cy="175" r="1.5" fill="#c8e8d8" opacity=".45"/><circle cx="568" cy="192" r="1.5" fill="#c8e8d8" opacity=".5"/><circle cx="118" cy="260" r="1.5" fill="#c8e8d8" opacity=".35"/><circle cx="540" cy="295" r="1.5" fill="#c8e8d8" opacity=".4"/>
      {/* Star glow */}
      <ellipse cx="320" cy="200" rx="100" ry="100" fill="url(#xmas-star-scene-bg)" opacity=".6"/>
      {/* Radiating beams (behind star) */}
      <path d="M320 130 L312 48 L328 48 Z" fill="#f5c54e" opacity=".38"/>
      <path d="M320 270 L312 352 L328 352 Z" fill="#f5c54e" opacity=".38"/>
      <path d="M250 200 L168 192 L168 208 Z" fill="#f5c54e" opacity=".38"/>
      <path d="M390 200 L472 192 L472 208 Z" fill="#f5c54e" opacity=".38"/>
      {/* 8-pointed star — M=0°right, then alternating inner/outer clockwise */}
      <path className="xmas-main-star" d="M390 200 L346 211 L370 250 L331 226 L320 270 L309 226 L271 250 L294 211 L250 200 L294 189 L271 151 L309 174 L320 130 L331 174 L370 151 L346 189 Z" fill="#f5c54e"/>
      {/* Snowflake accents */}
      <g className="xmas-snowflake-one">
        <line x1="140" y1="140" x2="140" y2="170" stroke="#c8e8d8" strokeWidth="3" strokeLinecap="round"/>
        <line x1="125" y1="155" x2="155" y2="155" stroke="#c8e8d8" strokeWidth="3" strokeLinecap="round"/>
        <line x1="129" y1="144" x2="151" y2="166" stroke="#c8e8d8" strokeWidth="2" strokeLinecap="round"/>
        <line x1="129" y1="166" x2="151" y2="144" stroke="#c8e8d8" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <g className="xmas-snowflake-two">
        <line x1="488" y1="280" x2="488" y2="306" stroke="#c8e8d8" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="475" y1="293" x2="501" y2="293" stroke="#c8e8d8" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="480" y1="284" x2="496" y2="302" stroke="#c8e8d8" strokeWidth="2" strokeLinecap="round"/>
        <line x1="480" y1="302" x2="496" y2="284" stroke="#c8e8d8" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <g className="xmas-snowflake-three">
        <line x1="175" y1="295" x2="175" y2="315" stroke="#c8e8d8" strokeWidth="2" strokeLinecap="round"/>
        <line x1="165" y1="305" x2="185" y2="305" stroke="#c8e8d8" strokeWidth="2" strokeLinecap="round"/>
        <line x1="168" y1="298" x2="182" y2="312" stroke="#c8e8d8" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="168" y1="312" x2="182" y2="298" stroke="#c8e8d8" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
      {/* Rolling hills silhouette */}
      <path d="M0 380 Q80 335 160 365 Q240 395 320 345 Q400 295 480 345 Q560 395 640 365 L640 470 H0Z" fill="#143d26"/>
      <path d="M0 420 Q100 390 200 410 Q300 430 400 400 Q500 370 600 400 L640 410 L640 470 H0Z" fill="#0e2d1f"/>
      <XmasSpark x={96} y={222} s={.9} color="#c8e8d8" /><XmasSpark x={546} y={242} s={.85} color="#c8e8d8" />
    </svg>
  );
}

const eventHighlights = [
  { icon: '✦', title: 'Dinner & fellowship', text: 'Enjoy a Christmas dinner with the Springhill church family — good food, good company, and the warmth of the season.' },
  { icon: '♬', title: 'Christmas music', text: 'Share in the songs and spirit of the season as we celebrate Christmas together in worship and joy.' },
  { icon: '♥', title: 'Open to everyone', text: 'All are welcome — bring your family, your neighbors, and anyone who needs a place to belong this Christmas.' },
];

const seasonMoments = [
  { title: 'The gift of togetherness', text: 'Christmas is about more than a date on the calendar. It is about gathering with the people God has placed in your life and celebrating what truly matters.' },
  { title: 'The light in the dark', text: 'As the year draws to a close, we light candles and share a meal because the Light of the World came to us — and that is worth celebrating every year.' },
  { title: 'A tradition of joy', text: 'The Springhill Christmas Banquet is a family tradition — a night to remember the reason for the season and to look forward together toward the new year.' },
];

export default function ChristmasBanquetPage() {
  return (
    <div className="spc-subpage xmas-page">
      <section className="xmas-hero">
        <div className="spc-container xmas-hero-inner">
          <div className="xmas-hero-copy">
            <p className="xmas-kicker">SPRINGHILL CHURCH FAMILY <span aria-hidden="true">✦</span></p>
            <h1>Christmas<br/><em>Banquet.</em></h1>
            <p className="xmas-hero-description">Celebrate the season and share in the joy of Christmas with the Springhill church family over dinner and fellowship.</p>
            <div className="xmas-hero-actions">
              <a className="xmas-button xmas-button--gold" href="#xmas-details">Event details <span aria-hidden="true">↓</span></a>
              <Link className="xmas-button xmas-button--outline" href="/events">See all events <span aria-hidden="true">→</span></Link>
            </div>
            <p className="xmas-hero-footnote"><span className="xmas-candle-dot" /> Sunday, December 13 · 6:00 PM · Free</p>
          </div>
          <div className="xmas-hero-visual" data-spc-parallax="soft">
            <TreeIllustration />
            <span className="xmas-art-label xmas-art-label--top">GLORY TO GOD <span aria-hidden="true">✷</span></span>
            <span className="xmas-art-label xmas-art-label--bottom">DECEMBER 13 · 6:00 PM</span>
          </div>
        </div>
        <span className="xmas-hero-corner" aria-hidden="true">SPRINGHILL · WESSON, MS</span>
      </section>

      <section className="xmas-fact-strip" aria-label="Christmas Banquet event details">
        <div className="spc-container xmas-facts">
          <div><span>WHO</span><strong>All are welcome</strong></div>
          <div><span>WHEN</span><strong>December 13, 2026</strong></div>
          <div><span>TIME</span><strong>6:00 PM</strong></div>
          <div><span>WHERE</span><strong>Springhill · Wesson</strong></div>
        </div>
      </section>

      <section className="xmas-welcome spc-sub-section" id="xmas-details">
        <div className="spc-container xmas-welcome-grid">
          <div className="xmas-candle-stage spc-reveal" data-spc-parallax="soft">
            <CandleIllustration />
            <span className="xmas-candle-caption">LIGHT THE SEASON</span>
          </div>
          <div className="xmas-welcome-copy">
            <p className="spc-eyebrow spc-eyebrow--green spc-reveal">AN EVENING TO REMEMBER</p>
            <h2 className="xmas-display spc-reveal">An evening of<br/><em>food &amp; fellowship.</em></h2>
            <p className="xmas-intro-text spc-reveal">The Springhill Christmas Banquet is an evening set apart to celebrate the season, share a meal, and simply be together as a church family.</p>
            <div className="xmas-detail-list">
              {eventHighlights.map(h => (
                <article className="xmas-detail spc-reveal" key={h.title}>
                  <span className="xmas-detail-icon" aria-hidden="true">{h.icon}</span>
                  <div><h3>{h.title}</h3><p>{h.text}</p></div>
                </article>
              ))}
            </div>
            <div className="xmas-event-actions spc-reveal">
              <a href="/api/calendar/christmas-banquet-2026" download="christmas-banquet-2026.ics" className="spc-button spc-button--green">Add to Calendar</a>
              <div className="xmas-maps-links">
                <a href="https://maps.apple.com/?q=1090+Springhill+Road+Wesson+MS+39191" target="_blank" rel="noopener noreferrer" className="xmas-text-link">Apple Maps ↗</a>
                <a href="https://maps.google.com/?q=1090+Springhill+Road+Wesson+MS+39191" target="_blank" rel="noopener noreferrer" className="xmas-text-link">Google Maps ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="xmas-gather spc-sub-section">
        <div className="spc-container">
          <div className="xmas-gather-header spc-reveal">
            <p className="spc-eyebrow spc-eyebrow--gold">THE SPIRIT OF CHRISTMAS</p>
            <h2 className="xmas-display">More than a meal.<br/><em>A moment together.</em></h2>
            <p>Christmas is a season of light, love, and gratitude. At Springhill, we celebrate it the way it was meant to be — together.</p>
          </div>
          <div className="xmas-gather-grid">
            <div className="xmas-star-stage spc-reveal" data-spc-parallax="soft">
              <NightStarIllustration />
              <span className="xmas-star-caption">THE LIGHT OF THE WORLD</span>
            </div>
            <div className="xmas-gather-steps spc-reveal">
              <p className="xmas-gather-steps-kicker">THE SEASON <span aria-hidden="true">✦</span></p>
              {seasonMoments.map((moment, i) => (
                <details className="xmas-chapter" key={moment.title} open={i === 0}>
                  <summary><span>{moment.title}</span><span className="xmas-chapter-plus" aria-hidden="true">+</span></summary>
                  <p>{moment.text}</p>
                </details>
              ))}
              <Link href="/prayer" className="xmas-text-link spc-reveal">Have a question? Contact us <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <SpcQuote cite="Luke 2:10">"Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people."</SpcQuote>
      <SpcSectionCta
        eyebrow="You're invited"
        title="Come celebrate Christmas with us."
        description="The Springhill Christmas Banquet is free, open to everyone, and a night you will not want to miss. We hope to see you December 13."
        primary={{ text: 'Contact us', href: '/prayer' }}
        secondary={{ text: 'All events', href: '/events' }}
      />
    </div>
  );
}
