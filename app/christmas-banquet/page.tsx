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

function MangerIllustration() {
  return (
    <svg className="xmas-tree-svg" viewBox="0 0 650 560" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="xmas-sky-glow"><stop stopColor="#2a4a80" stopOpacity=".45"/><stop offset="1" stopColor="#2a4a80" stopOpacity="0"/></radialGradient>
        <radialGradient id="xmas-star-halo" cx=".5" cy=".5" r=".5"><stop stopColor="#fffde0"/><stop offset=".55" stopColor="#f5c54e" stopOpacity=".5"/><stop offset="1" stopColor="#f5c54e" stopOpacity="0"/></radialGradient>
        <radialGradient id="xmas-warm-glow" cx=".5" cy=".75" r=".55"><stop stopColor="#f5c54e" stopOpacity=".7"/><stop offset=".6" stopColor="#f59a30" stopOpacity=".3"/><stop offset="1" stopColor="#f59a30" stopOpacity="0"/></radialGradient>
      </defs>
      {/* Sky glow */}
      <ellipse cx="325" cy="295" rx="275" ry="250" fill="url(#xmas-sky-glow)" />
      {/* Background stars */}
      <circle cx="118" cy="82" r="2" fill="#fffde8" opacity=".85"/><circle cx="175" cy="145" r="1.5" fill="#fffde8" opacity=".6"/><circle cx="502" cy="68" r="2.2" fill="#fffde8" opacity=".8"/><circle cx="560" cy="130" r="1.5" fill="#fffde8" opacity=".55"/><circle cx="88" cy="195" r="1.5" fill="#fffde8" opacity=".5"/><circle cx="568" cy="210" r="1.8" fill="#fffde8" opacity=".65"/><circle cx="145" cy="315" r="1.5" fill="#fffde8" opacity=".4"/><circle cx="525" cy="345" r="1.5" fill="#fffde8" opacity=".45"/><circle cx="98" cy="385" r="1.5" fill="#fffde8" opacity=".35"/><circle cx="558" cy="395" r="1.5" fill="#fffde8" opacity=".4"/>
      {/* Warm glow from the manger */}
      <ellipse className="xmas-manger-glow-anim" cx="325" cy="385" rx="178" ry="132" fill="url(#xmas-warm-glow)" />
      {/* Star of Bethlehem beams (behind everything) */}
      <path d="M325 112 L317 28 L333 28 Z" fill="#f5c54e" opacity=".45"/>
      <path d="M318 118 L312 232 L338 232 Z" fill="#f5c54e" opacity=".28"/>
      <path d="M270 112 L180 104 L180 120 Z" fill="#f5c54e" opacity=".38"/>
      <path d="M380 112 L470 104 L470 120 Z" fill="#f5c54e" opacity=".38"/>
      {/* Star glow */}
      <ellipse cx="325" cy="112" rx="52" ry="52" fill="url(#xmas-star-halo)" />
      {/* 5-pointed star */}
      <path className="xmas-star-top" d="M325 83 L333 105 L355 105 L337 119 L344 141 L325 128 L306 141 L313 119 L295 105 L317 105 Z" fill="#f5c54e"/>
      {/* Rolling hills */}
      <path d="M0 450 Q80 415 160 440 Q240 465 320 428 Q400 391 480 428 Q560 465 650 445 L650 560 H0Z" fill="#1a3d26"/>
      <path d="M0 490 Q120 468 240 482 Q360 496 480 472 Q560 452 650 468 L650 560 H0Z" fill="#0f2318"/>
      {/* Stable roof */}
      <path d="M196 288 L325 232 L454 288 Z" fill="#5a3015"/>
      <path d="M196 288 L204 285 L325 237 L446 285 L454 288" fill="none" stroke="#6b3a1a" strokeWidth="4"/>
      {/* Stable side posts */}
      <rect x="196" y="287" width="13" height="150" rx="3" fill="#7a4530"/>
      <rect x="441" y="287" width="13" height="150" rx="3" fill="#7a4530"/>
      {/* Stable back wall (dark interior) */}
      <rect x="209" y="287" width="232" height="150" fill="#1e0e04"/>
      {/* Interior warm light overlay */}
      <rect x="209" y="287" width="232" height="150" fill="url(#xmas-warm-glow)" opacity=".75"/>
      {/* Hay on stable floor */}
      <path d="M209 428 Q250 418 290 426 Q325 416 360 426 Q402 418 441 428 L441 437 L209 437Z" fill="#7a5520" opacity=".8"/>
      <path d="M220 428 Q224 420 228 428" fill="none" stroke="#c4902a" strokeWidth="2.5" opacity=".7"/>
      <path d="M240 428 Q244 418 248 428" fill="none" stroke="#c4902a" strokeWidth="2" opacity=".6"/>
      <path d="M400 428 Q404 420 408 428" fill="none" stroke="#c4902a" strokeWidth="2.5" opacity=".7"/>
      <path d="M420 428 Q424 418 428 428" fill="none" stroke="#c4902a" strokeWidth="2" opacity=".6"/>
      {/* Manger / feed box */}
      <path d="M294 358 L356 358 L360 397 L290 397 Z" fill="#8b5020"/>
      <line x1="308" y1="358" x2="304" y2="397" stroke="#6b3810" strokeWidth="3" opacity=".7"/>
      <line x1="325" y1="358" x2="325" y2="397" stroke="#6b3810" strokeWidth="3" opacity=".7"/>
      <line x1="342" y1="358" x2="346" y2="397" stroke="#6b3810" strokeWidth="3" opacity=".7"/>
      <rect x="294" y="397" width="8" height="22" rx="2" fill="#7a4015"/>
      <rect x="348" y="397" width="8" height="22" rx="2" fill="#7a4015"/>
      {/* Hay in manger */}
      <path d="M290 360 Q325 350 360 360" fill="none" stroke="#c4a030" strokeWidth="7" strokeLinecap="round" opacity=".85"/>
      {/* Baby (swaddled, glowing) */}
      <ellipse cx="325" cy="371" rx="30" ry="14" fill="#f5c54e" opacity=".35"/>
      <ellipse cx="325" cy="372" rx="20" ry="9" fill="#fff8e8"/>
      <circle cx="323" cy="364" r="7" fill="#f0c888"/>
      <path d="M305 373 Q325 378 345 373" fill="none" stroke="#e8e0d0" strokeWidth="5" strokeLinecap="round" opacity=".9"/>
      {/* Mary (kneeling, left) */}
      <path d="M220 326 Q244 310 265 324 Q278 345 274 420 Q255 428 236 420 Q218 408 220 326Z" fill="#1a3060"/>
      <circle cx="252" cy="310" r="14" fill="#1e3870"/>
      <path d="M229 312 Q252 290 275 312 Q270 346 252 356 Q234 346 229 312Z" fill="#2a4a88"/>
      <ellipse cx="252" cy="310" rx="8" ry="9" fill="#d4a070" opacity=".75"/>
      <path d="M262 348 Q274 356 290 364" fill="none" stroke="#1a3060" strokeWidth="9" strokeLinecap="round"/>
      {/* Joseph (standing, right) */}
      <line x1="413" y1="280" x2="416" y2="435" stroke="#7a4520" strokeWidth="6" strokeLinecap="round"/>
      <path d="M378 306 Q400 292 420 306 L424 435 Q400 442 376 435 Z" fill="#1a3045"/>
      <circle cx="400" cy="285" r="17" fill="#1a3045"/>
      <path d="M374 288 Q400 266 426 288 Q422 318 400 324 Q378 318 374 288Z" fill="#243a60"/>
      <ellipse cx="400" cy="285" rx="10" ry="11" fill="#c49060" opacity=".7"/>
      <path d="M390 295 Q400 306 410 295" fill="none" stroke="#8a5030" strokeWidth="4" strokeLinecap="round" opacity=".8"/>
      {/* Sparkles */}
      <XmasSpark x={296} y={48} s={.9} /><XmasSpark x={356} y={52} s={.8} color="#c8d8ff" />
      <XmasSpark x={158} y={178} s={1.0} /><XmasSpark x={500} y={165} s={.95} color="#f9d070" />
      <XmasSpark x={118} y={440} s={.8} color="#d8eecc" /><XmasSpark x={535} y={430} s={.75} color="#d8eecc" />
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
            <MangerIllustration />
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
