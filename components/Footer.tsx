import Link from 'next/link';

const footerLinks = [
  {href:'/', label:'Home'}, {href:'/about', label:'About'},
  {href:'/events', label:'Events'}, {href:'/new-here', label:'New Here?'},
  {href:'/beliefs', label:'Beliefs'}, {href:'/give', label:'Give'},
  {href:'/services', label:'Messages'}, {href:'/blast', label:'BLAST Kids'}, {href:'/prayer', label:'Prayer & Contact'},
];

export default function Footer() {
  return (
    <footer className="spc-static-footer">
      <div className="spc-container">
        <div className="spc-footer-grid">
          <div>
            <h3>Springhill Pentecostal Church</h3>
            <p>Rooted in the Word. Growing in faith. Together in Wesson, Mississippi since 1935.</p>
            <p style={{marginTop:12}}>1090 Springhill Road<br/>Wesson, MS 39191</p><p style={{marginTop:10}}><a href="mailto:pastor@spcwesson.com">pastor@spcwesson.com</a></p>
          </div>
          <div>
            <p className="spc-eyebrow spc-eyebrow--gold" style={{marginBottom:20}}>Explore</p>
            <nav className="spc-footer-links" aria-label="Footer navigation">
              {footerLinks.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
            </nav>
          </div>
          <div>
            <p className="spc-eyebrow spc-eyebrow--gold" style={{marginBottom:20}}>Stay connected</p>
            <p>Sunday · 10:00 AM &amp; 6:00 PM<br/>Prayer gatherings · as announced<br/>Wednesday · 7:30 PM<br/>First Sunday · 2:00 PM only</p>
            <p style={{marginTop:17}}>
              <a href="https://www.facebook.com/share/1GpFMM7VC2/" target="_blank" rel="noopener noreferrer">Facebook</a>
              {' · '}
              <a href="https://www.instagram.com/spcwesson" target="_blank" rel="noopener noreferrer">Instagram</a>
              {' · '}
              <a href="https://soundcloud.com/spcwesson" target="_blank" rel="noopener noreferrer">SoundCloud</a>
            </p>
          </div>
        </div>
        <div className="spc-footer-bottom"><span>© {new Date().getFullYear()} Springhill Pentecostal Church</span><a href="https://maps.google.com/?q=1090+Springhill+Road+Wesson+MS+39191" target="_blank" rel="noopener noreferrer">Get directions ↗</a></div>
      </div>
    </footer>
  );
}
