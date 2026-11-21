import Link from 'next/link';

/** A compact invitation that echoes the animated, illustration-only BLAST page. */
export default function BlastHomeFeature() {
  return (
    <section className="spc-blast-feature" aria-labelledby="spc-blast-feature-title">
      <div className="spc-container spc-blast-feature-grid">
        <div className="spc-blast-feature-copy spc-reveal">
          <p className="spc-eyebrow">BLAST KIDS CHURCH · AGES 5–11</p>
          <h2 id="spc-blast-feature-title">Little hearts.<br/><em>Big faith.</em></h2>
          <p>It's Bible stories, laughter, worship, and a whole lot of adventure. Discover our monthly kids church, built for young hearts and growing faith.</p>
          <Link href="/blast" className="spc-button spc-button--light">Explore BLAST Kids <span aria-hidden="true">↗</span></Link>
          <span className="spc-blast-feature-note">Free to attend · Next date announced on the Events page</span>
        </div>
        <div className="spc-blast-feature-art spc-reveal" aria-hidden="true">
          <svg viewBox="0 0 580 410" role="presentation" focusable="false">
            <defs>
              <radialGradient id="spc-blast-glow"><stop stopColor="#4a9fa2" stopOpacity=".55"/><stop offset="1" stopColor="#4a9fa2" stopOpacity="0"/></radialGradient>
              <linearGradient id="spc-blast-flame"><stop stopColor="#ffe794"/><stop offset=".5" stopColor="#ffad62"/><stop offset="1" stopColor="#ff774e" stopOpacity="0"/></linearGradient>
            </defs>
            <ellipse cx="300" cy="205" rx="260" ry="190" fill="url(#spc-blast-glow)"/>
            <circle cx="290" cy="205" r="170" stroke="#9bcab7" strokeOpacity=".34" strokeDasharray="6 12" strokeWidth="2" fill="none"/>
            <g className="spc-blast-feature-planet"><circle cx="104" cy="130" r="38" fill="#f2c77a"/><ellipse cx="104" cy="131" rx="58" ry="13" fill="none" stroke="#fce2a9" strokeWidth="7" transform="rotate(-26 104 131)"/></g>
            <g className="spc-blast-feature-planet-small"><circle cx="480" cy="270" r="30" fill="#85d0b2"/><path d="M460 263 Q480 245 504 275" fill="none" stroke="#429894" strokeWidth="7" strokeLinecap="round"/></g>
            <g fill="#fbe2a3">
              <path d="M170 58 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5Z"/>
              <path d="M474 79 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4Z"/>
              <path d="M523 185 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4Z"/>
              <path d="M116 312 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5Z"/>
            </g>
            <g className="spc-blast-feature-rocket">
              <path d="M262 272 Q251 322 295 394 Q341 335 327 272Z" fill="url(#spc-blast-flame)"/>
              <path d="M251 245 Q212 270 220 322 L279 291Z" fill="#ef916c" stroke="#133e4d" strokeWidth="6" strokeLinejoin="round"/>
              <path d="M326 245 Q372 268 377 319 L319 288Z" fill="#ef916c" stroke="#133e4d" strokeWidth="6" strokeLinejoin="round"/>
              <path d="M295 76 Q368 133 352 262 L326 320 Q293 334 262 321 Q229 252 244 166 Q254 110 295 76Z" fill="#fff4d8" stroke="#133e4d" strokeWidth="7" strokeLinejoin="round"/>
              <path d="M295 76 Q339 106 348 154 Q292 172 251 154 Q267 105 295 76Z" fill="#ffc16b" stroke="#133e4d" strokeWidth="6"/>
              <circle cx="296" cy="216" r="46" fill="#143f54" stroke="#fff9e5" strokeWidth="7"/>
              <circle cx="296" cy="216" r="35" fill="#83cdb8"/>
              <path d="M296 197 V235 M277 216 H315" stroke="#fff8d3" strokeWidth="9" strokeLinecap="round"/>
              <path d="M266 290 Q298 301 328 291 L323 328 Q295 339 269 326Z" fill="#e9b56d" stroke="#133e4d" strokeWidth="6"/>
            </g>
            <g fill="#c5e5d8" opacity=".9"><circle cx="220" cy="358" r="28"/><circle cx="250" cy="353" r="34"/><circle cx="342" cy="356" r="34"/><circle cx="368" cy="360" r="24"/></g>
          </svg>
          <span className="spc-blast-feature-stamp">FAITH IS AN ADVENTURE ✦</span>
        </div>
      </div>
    </section>
  );
}
