import type { Metadata } from 'next';
import Link from 'next/link';
import { SpcQuote, SpcSectionCta } from '@/components/SpcPageKit';
import './blast.css';

export const metadata: Metadata = {
  title: 'BLAST Kids Church | Springhill Pentecostal Church',
  description: 'A little adventure and a lot of faith. Discover BLAST Kids Church for ages 5–11 at Springhill Pentecostal Church in Wesson, MS.',
};

function Spark({ x, y, s = 1, color = '#ffdb74' }: { x: number; y: number; s?: number; color?: string }) {
  return <path className="blast-spark" d={'M'+x+' '+(y-10*s)+' L'+(x+3*s)+' '+(y-3*s)+' L'+(x+10*s)+' '+y+' L'+(x+3*s)+' '+(y+3*s)+' L'+x+' '+(y+10*s)+' L'+(x-3*s)+' '+(y+3*s)+' L'+(x-10*s)+' '+y+' L'+(x-3*s)+' '+(y-3*s)+' Z'} fill={color} />;
}

function RocketIllustration() {
  return <svg className="blast-rocket-svg" viewBox="0 0 650 565" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="blast-aura"><stop stopColor="#5db9aa" stopOpacity=".53"/><stop offset="1" stopColor="#5db9aa" stopOpacity="0"/></radialGradient>
      <linearGradient id="blast-body" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff8dc"/><stop offset="1" stopColor="#f7dcb0"/></linearGradient>
      <linearGradient id="blast-flame" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ffec84"/><stop offset=".55" stopColor="#ff9952"/><stop offset="1" stopColor="#ff5b56" stopOpacity="0"/></linearGradient>
    </defs>
    <ellipse cx="334" cy="270" rx="260" ry="238" fill="url(#blast-aura)" />
    <circle className="blast-orbit-ring" cx="331" cy="262" r="210" fill="none" stroke="#b9e8d1" strokeOpacity=".27" strokeWidth="2" strokeDasharray="5 13" />
    <g className="blast-planet-a"><circle cx="110" cy="177" r="43" fill="#eebf77"/><path d="M66 176 Q110 146 153 178" fill="none" stroke="#ffedc6" strokeWidth="7"/><path d="M81 196 Q111 177 142 196" fill="none" stroke="#d47f64" strokeWidth="5"/><ellipse cx="110" cy="177" rx="65" ry="16" transform="rotate(-23 110 177)" fill="none" stroke="#f5d6aa" strokeWidth="7"/></g>
    <g className="blast-planet-b"><circle cx="525" cy="344" r="35" fill="#77c5ad"/><path d="M507 329 Q519 355 545 362" fill="none" stroke="#328c82" strokeWidth="8" strokeLinecap="round"/></g>
    <g className="blast-comet"><path d="M491 112 Q552 78 606 112" stroke="#f6db96" strokeWidth="5" strokeLinecap="round" fill="none"/><circle cx="487" cy="111" r="11" fill="#ffdb79"/></g>
    <Spark x={181} y={69} s={1.25}/><Spark x={555} y={220} s={1.25} color="#bde5d1"/><Spark x={128} y={391} s={1.6}/><Spark x={589} y={429} s={.8}/><Spark x={450} y={44} s={.8}/><Spark x={243} y={475} s={.7} color="#bde5d1"/>
    <g className="blast-trail"><ellipse cx="309" cy="505" rx="128" ry="34" fill="#e7f4d8" opacity=".25"/><path d="M283 395 C261 452 256 513 309 552 C351 514 367 460 345 396Z" fill="url(#blast-flame)"/><path d="M300 400 Q310 477 307 522" fill="none" stroke="#fff2a8" strokeWidth="15" strokeLinecap="round" opacity=".78"/></g>
    <g className="blast-rocket-body">
      <path d="M268 326 Q224 348 225 428 L291 407 L307 330Z" fill="#fa8c64" stroke="#083a4c" strokeWidth="6" strokeLinejoin="round"/>
      <path d="M347 326 Q398 345 413 424 L338 405 L320 333Z" fill="#fa8c64" stroke="#083a4c" strokeWidth="6" strokeLinejoin="round"/>
      <path d="M304 106 Q382 158 373 345 L335 423 L278 423 Q232 330 251 218 Q262 149 304 106Z" fill="url(#blast-body)" stroke="#0a3546" strokeWidth="8" strokeLinejoin="round"/>
      <path d="M304 106 Q351 139 364 197 Q317 219 260 194 Q271 141 304 106Z" fill="#ffb967" stroke="#0a3546" strokeWidth="7"/>
      <circle cx="306" cy="259" r="53" fill="#143f56" stroke="#fff7d7" strokeWidth="9"/>
      <circle cx="306" cy="259" r="40" fill="#80c8b4"/>
      <path d="M305 234 V283 M283 251 H328" stroke="#fff6d9" strokeWidth="11" strokeLinecap="round"/>
      <path d="M274 381 Q307 395 341 381 L337 429 Q307 439 282 427Z" fill="#f6bc68" stroke="#0a3546" strokeWidth="7" />
      <circle cx="277" cy="317" r="6" fill="#df9372"/><circle cx="339" cy="317" r="6" fill="#df9372"/>
    </g>
    <g className="blast-puff blast-puff-one"><circle cx="215" cy="495" r="30" fill="#d4ede2"/><circle cx="248" cy="474" r="36" fill="#d4ede2"/><circle cx="277" cy="499" r="30" fill="#d4ede2"/></g>
    <g className="blast-puff blast-puff-two"><circle cx="358" cy="503" r="32" fill="#d4ede2"/><circle cx="390" cy="477" r="37" fill="#d4ede2"/><circle cx="425" cy="497" r="30" fill="#d4ede2"/></g>
  </svg>;
}

function BookIllustration() {
  return <svg className="blast-book-svg" viewBox="0 0 590 505" aria-hidden="true" focusable="false">
    <defs><linearGradient id="blast-book-sky" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fce5ad"/><stop offset="1" stopColor="#fbb6a7"/></linearGradient></defs>
    <circle cx="295" cy="249" r="208" fill="url(#blast-book-sky)" />
    <circle className="blast-halo" cx="301" cy="220" r="150" fill="none" stroke="#fff7df" strokeWidth="3" strokeDasharray="7 17" />
    <g className="blast-book-cloud blast-book-cloud-one"><ellipse cx="109" cy="156" rx="73" ry="25" fill="#fff9e9"/><circle cx="96" cy="132" r="29" fill="#fff9e9"/><circle cx="129" cy="139" r="21" fill="#fff9e9"/></g>
    <g className="blast-book-cloud blast-book-cloud-two"><ellipse cx="467" cy="153" rx="65" ry="23" fill="#fff9e9"/><circle cx="459" cy="130" r="27" fill="#fff9e9"/></g>
    <Spark x={180} y={100} s={1.4} color="#fff8e4"/><Spark x={426} y={241} s={1.2} color="#fff8e4"/>
    <path d="M70 407 Q193 349 297 420 Q402 351 525 398 L526 466 L74 466Z" fill="#7ea98b"/>
    <path d="M75 448 Q196 405 288 450 Q405 402 526 442 L526 490 L75 490Z" fill="#397e72"/>
    <g className="blast-book-open">
      <path d="M295 270 Q207 222 117 265 L117 397 Q205 372 295 423Z" fill="#fffdf0" stroke="#164f52" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M295 270 Q374 221 471 264 L471 397 Q371 370 295 423Z" fill="#fff8e6" stroke="#164f52" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M295 271 V424" stroke="#e8b678" strokeWidth="9"/>
      <path d="M150 301 Q211 284 265 311 M150 331 Q212 315 265 340 M150 359 Q212 340 265 367" stroke="#e6c7a5" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <path d="M326 306 Q378 285 435 299 M326 336 Q379 315 435 327 M326 364 Q379 345 435 356" stroke="#e6c7a5" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <path d="M291 418 Q196 387 114 410 M300 418 Q392 388 474 408" fill="none" stroke="#164f52" strokeWidth="8" strokeLinecap="round"/>
    </g>
    <g className="blast-flower-one"><path d="M108 441 Q110 376 126 349" fill="none" stroke="#1d6b56" strokeWidth="7" strokeLinecap="round"/><circle cx="126" cy="346" r="15" fill="#f3bb5f"/><circle cx="110" cy="337" r="10" fill="#fff8e2"/><circle cx="141" cy="338" r="10" fill="#fff8e2"/><circle cx="127" cy="328" r="10" fill="#fff8e2"/></g>
    <g className="blast-flower-two"><path d="M483 444 Q472 374 455 367" fill="none" stroke="#1d6b56" strokeWidth="7" strokeLinecap="round"/><circle cx="455" cy="361" r="13" fill="#edac76"/><circle cx="440" cy="357" r="11" fill="#fff8e2"/><circle cx="470" cy="356" r="11" fill="#fff8e2"/><circle cx="455" cy="342" r="11" fill="#fff8e2"/></g>
  </svg>;
}

function FamilyIllustration() {
  return <svg viewBox="0 0 560 385" className="blast-family-svg" aria-hidden="true" focusable="false">
    <circle cx="290" cy="186" r="160" fill="#d8eacb"/>
    <circle className="blast-family-sun" cx="411" cy="95" r="47" fill="#ffce76"/>
    <path d="M29 311 Q145 251 258 298 Q411 238 528 302 L531 381 H32Z" fill="#97c0a1"/>
    <path d="M30 350 Q178 312 291 355 Q423 304 530 345 L530 385 H30Z" fill="#3f897b"/>
    <g className="blast-family-house">
      <path d="M306 203 L412 116 L521 203" fill="none" stroke="#154d4d" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M330 199 V312 H492 V199 L412 136Z" fill="#fff7e2" stroke="#154d4d" strokeWidth="7" strokeLinejoin="round"/>
      <rect x="394" y="245" width="43" height="67" rx="5" fill="#f0bc73"/>
      <path d="M414 108 V82 M402 92 H426" stroke="#154d4d" strokeWidth="6" strokeLinecap="round"/>
      <path d="M359 232 H380 V258 H359Z M452 231 H474 V258 H452Z" fill="#9bcec3"/>
    </g>
    <g className="blast-family-kids">
      <circle cx="145" cy="233" r="27" fill="#9a654b"/><path d="M117 262 Q144 245 173 263 L183 340 H104Z" fill="#f2bb69"/><path d="M119 278 L83 315 M173 280 L204 300" stroke="#9a654b" strokeWidth="13" strokeLinecap="round"/><path d="M126 342 L121 378 M165 342 L171 378" stroke="#164c54" strokeWidth="15" strokeLinecap="round"/>
      <circle cx="239" cy="250" r="22" fill="#b87e59"/><path d="M219 275 Q237 262 263 277 L271 333 H210Z" fill="#f59b77"/><path d="M219 290 L205 301 M261 288 L283 306" stroke="#b87e59" strokeWidth="12" strokeLinecap="round"/><path d="M221 333 L216 379 M256 333 L260 379" stroke="#224e66" strokeWidth="13" strokeLinecap="round"/>
      <path d="M204 300 Q193 301 189 299" stroke="#9a654b" strokeWidth="8" strokeLinecap="round"/>
    </g>
    <Spark x={94} y={107} s={1.3} color="#f5bd70"/><Spark x={484} y={70} s={.75} color="#f2ad81"/>
  </svg>;
}

function JonahIllustration() {
  return <svg className="blast-whale-svg" viewBox="0 0 680 470" aria-hidden="true" focusable="false">
    <defs><linearGradient id="blast-sea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#65b6bd"/><stop offset="1" stopColor="#1d7389"/></linearGradient></defs>
    <circle cx="370" cy="206" r="175" fill="#2e697c" opacity=".42"/>
    <Spark x={132} y={99} s={1.15} color="#e5d28f"/><Spark x={545} y={61} s={1.1} color="#b9d7a9"/>
    <g className="blast-whale-spout"><path d="M363 140 Q329 85 311 74 M367 141 Q384 79 404 67 M374 146 Q424 99 449 108" stroke="#92d7d7" strokeWidth="9" strokeLinecap="round" fill="none"/><circle cx="307" cy="70" r="9" fill="#a8ded7"/><circle cx="404" cy="63" r="7" fill="#a8ded7"/></g>
    <g className="blast-whale">
      <path className="blast-whale-tail" d="M125 279 Q63 245 50 192 Q105 203 143 242 Q105 185 117 147 Q196 182 203 267" fill="#5aafbf" stroke="#103f54" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M173 266 Q194 149 375 153 Q527 157 576 246 Q611 299 548 334 Q451 388 310 345 Q229 321 173 266Z" fill="#69b9c5" stroke="#103f54" strokeWidth="8"/>
      <path d="M295 302 Q403 352 572 263 Q573 328 509 346 Q385 381 305 344Z" fill="#d6ecdd"/>
      <path d="M287 188 Q266 131 308 112 Q334 124 342 161" fill="#4699ab" stroke="#103f54" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M366 312 Q387 361 420 376 Q459 363 462 336" fill="#4191a4" stroke="#103f54" strokeWidth="7" strokeLinejoin="round"/>
      <circle cx="487" cy="242" r="11" fill="#0b3445"/><circle cx="491" cy="238" r="3.5" fill="#fff"/>
      <circle cx="510" cy="271" r="13" fill="#ecaa9a" opacity=".7"/>
      <path d="M534 286 Q546 297 559 284" stroke="#134d60" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M351 157 Q360 134 370 143" stroke="#bfe9de" strokeWidth="7" strokeLinecap="round" fill="none"/>
    </g>
    <g className="blast-bubbles"><circle cx="585" cy="202" r="11" fill="none" stroke="#9ad8d8" strokeWidth="4"/><circle cx="610" cy="169" r="6" fill="none" stroke="#9ad8d8" strokeWidth="3"/><circle cx="602" cy="119" r="8" fill="none" stroke="#9ad8d8" strokeWidth="3"/></g>
    <path className="blast-sea-wave blast-sea-wave-back" d="M0 345 Q55 324 110 345 T220 345 T330 345 T440 345 T550 345 T680 345 L680 470 H0Z" fill="#3b99a6" opacity=".75"/>
    <path className="blast-sea-wave blast-sea-wave-front" d="M0 377 Q60 359 120 377 T240 377 T360 377 T480 377 T600 377 T720 377 L720 470 H0Z" fill="url(#blast-sea)"/>
    <path d="M91 402 H145 M491 417 H540 M584 390 H625 M211 431 H259" stroke="#c0e7db" strokeWidth="5" strokeLinecap="round" opacity=".7"/>
  </svg>;
}

const lessons = [
  { icon: '✦', title: 'Bible stories', text: 'Real stories and real truth from Scripture, shared in ways children can understand and remember.' },
  { icon: '✳', title: 'Games & activities', text: 'Hands-on fun helps make each lesson memorable and builds lasting friendships.' },
  { icon: '♫', title: 'Worship & prayer', text: 'Kids learn to worship God and speak to Him with confidence, joy, and faith.' },
];

const story = [
  { title: 'God calls Jonah', text: 'God told Jonah to go to Nineveh, but Jonah chose to run in the other direction.' },
  { title: 'Inside the great fish', text: 'After a great storm, Jonah was swallowed by a great fish. From inside, he prayed to God.' },
  { title: 'A second chance', text: 'God heard Jonah. Jonah went to Nineveh and shared the message God had given him.' },
];

export default function BlastPage() {
  return <div className="spc-subpage blast-page">
    <section className="blast-hero">
      <div className="spc-container blast-hero-inner">
        <div className="blast-hero-copy">
          <p className="blast-kicker">SPRINGHILL KIDS MINISTRY</p>
          <h1>Little hearts.<br/><em>Big faith.</em></h1>
          <p className="blast-hero-description">At BLAST Kids Church, every gathering is an adventure in God's Word. Kids learn, laugh, worship, and discover just how much Jesus loves them.</p>
          <div className="blast-hero-actions">
            <Link className="blast-button blast-button--sun" href="/events">Find our next BLAST <span aria-hidden="true">↗</span></Link>
            <Link className="blast-button blast-button--outline" href="/prayer">Ask us a question <span aria-hidden="true">→</span></Link>
          </div>
          <p className="blast-hero-footnote"><span className="blast-live-dot" /> Monthly · Ages 5–11 · Always free</p>
        </div>
        <div className="blast-hero-visual" data-spc-parallax="soft">
          <RocketIllustration />
          <span className="blast-art-label blast-art-label--top">FAITH IS AN ADVENTURE <span aria-hidden="true">✷</span></span>
          <span className="blast-art-label blast-art-label--bottom">READY FOR LIFT OFF?</span>
        </div>
      </div>
      <span className="blast-hero-corner" aria-hidden="true">B L A S T <span>✦</span> K I D S</span>
    </section>

    <section className="blast-fact-strip" aria-label="BLAST ministry details">
      <div className="spc-container blast-facts">
        <div><span>WHO</span><strong>Ages 5–11</strong></div>
        <div><span>WHEN</span><strong>Once a month</strong></div>
        <div><span>ADMISSION</span><strong>Completely free</strong></div>
        <div><span>WHERE</span><strong>Springhill · Wesson</strong></div>
      </div>
    </section>

    <section className="blast-learn spc-sub-section">
      <div className="spc-container blast-learn-grid">
        <div className="blast-book-stage spc-reveal" data-spc-parallax="soft">
          <BookIllustration />
          <span className="blast-book-caption">FAITH. FUN. FRIENDSHIP.</span>
        </div>
        <div className="blast-learn-copy">
          <p className="spc-eyebrow spc-eyebrow--green spc-reveal">WHAT HAPPENS AT BLAST?</p>
          <h2 className="blast-display spc-reveal">Growing in faith<br/><em>can be fun.</em></h2>
          <p className="blast-intro-text spc-reveal">We make room for big questions, joyful worship, and hands-on discovery, all with Jesus at the center.</p>
          <div className="blast-lesson-list">
            {lessons.map(lesson => <article className="blast-lesson spc-reveal" key={lesson.title}>
              <span className="blast-lesson-icon" aria-hidden="true">{lesson.icon}</span>
              <div><h3>{lesson.title}</h3><p>{lesson.text}</p></div>
            </article>)}
          </div>
        </div>
      </div>
    </section>

    <section className="blast-families spc-sub-section">
      <div className="spc-container blast-family-grid">
        <div className="blast-family-copy">
          <p className="spc-eyebrow spc-eyebrow--green spc-reveal">FOR PARENTS & FAMILIES</p>
          <h2 className="blast-display spc-reveal">A place to<br/><em>belong and grow.</em></h2>
          <p className="spc-reveal">BLAST is designed for children ages 5–11, with Bible-centered lessons, prayer, worship, and activities in a welcoming setting.</p>
          <p className="spc-reveal">Children under 5 are welcome with a parent or guardian. There's no cost or registration needed. Just check the calendar for the next gathering.</p>
          <Link href="/events" className="blast-text-link spc-reveal">See upcoming dates <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="blast-family-art spc-reveal" data-spc-parallax="soft">
          <FamilyIllustration />
          <span className="blast-family-caption">YOU BELONG HERE <span aria-hidden="true">♥</span></span>
        </div>
      </div>
    </section>

    <section className="blast-story spc-sub-section">
      <div className="spc-container">
        <div className="blast-story-header spc-reveal">
          <p className="spc-eyebrow spc-eyebrow--gold">A STORY FROM A BLAST LESSON</p>
          <h2 className="blast-display">A great big fish.<br/><em>An even greater God.</em></h2>
          <p>Jonah's story reminds us that God hears our prayers and is full of mercy, even when we make mistakes.</p>
        </div>
        <div className="blast-story-grid">
          <div className="blast-whale-stage spc-reveal" data-spc-parallax="soft">
            <JonahIllustration />
            <span className="blast-whale-caption">THE ADVENTURES OF JONAH</span>
          </div>
          <div className="blast-story-steps spc-reveal">
            <p className="blast-story-steps-kicker">EXPLORE THE STORY <span aria-hidden="true">✦</span></p>
            {story.map((chapter, index) => <details className="blast-chapter" key={chapter.title} open={index === 0}>
              <summary><span>{chapter.title}</span><span className="blast-chapter-plus" aria-hidden="true">+</span></summary>
              <p>{chapter.text}</p>
            </details>)}
            <p className="blast-story-source">Read the whole story in Jonah chapters 1–3 (KJV).</p>
          </div>
        </div>
      </div>
    </section>

    <SpcQuote cite="Jonah 2:9">“Salvation is of the LORD.”</SpcQuote>
    <SpcSectionCta eyebrow="Bring the family" title="Your child's next adventure starts here." description="We'd love to welcome your family at BLAST. Check the upcoming date, then come as you are." primary={{text:'See BLAST dates',href:'/events'}} secondary={{text:'Contact Springhill',href:'/prayer'}} />
  </div>;
}
