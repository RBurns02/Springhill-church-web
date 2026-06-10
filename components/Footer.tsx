import Link from 'next/link';

const navLinks = [
  { href: '/',          label: 'Home'            },
  { href: '/events',    label: 'Events'          },
  { href: '/blast',     label: 'Kids (BLAST)'    },
  { href: '/services',  label: 'Services'        },
  { href: '/beliefs',   label: 'What We Believe' },
  { href: '/give',      label: 'Give'            },
  { href: '/prayer',    label: 'Contact'         },
];

export default function Footer() {
  return (
    <footer className="bg-church-dark text-stone-400 text-sm">

      {/* ── Thin gold top accent ── */}
      <div className="h-px bg-church-gold opacity-30" />

      {/* ── Social bar ── */}
      <div className="border-b border-white/[0.06] py-6 flex justify-center gap-8">
        <a href="https://www.facebook.com/share/1GpFMM7VC2/?mibextid=wwXIfr"
          target="_blank" rel="noopener noreferrer" aria-label="Facebook"
          className="text-stone-400 hover:text-white transition-colors">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/spcwesson"
          target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          className="text-stone-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </a>
        <a href="https://soundcloud.com/spcwesson"
          target="_blank" rel="noopener noreferrer" aria-label="SoundCloud"
          className="text-stone-400 hover:text-white transition-colors">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M1.175 12.225c-.056 0-.094.037-.1.094l-.344 2.156.344 2.181c.006.06.044.094.1.094.05 0 .094-.037.1-.094l.394-2.181-.394-2.156c-.006-.057-.05-.094-.1-.094m1.79-.581c-.069 0-.119.05-.125.119l-.3 1.812.3 1.837c.006.069.056.119.125.119.069 0 .119-.05.125-.119l.344-1.837-.344-1.812c-.006-.069-.056-.119-.125-.119m1.8-.378c-.075 0-.131.056-.137.131l-.269 1.559.269 1.584c.006.075.063.131.137.131.075 0 .131-.056.138-.131l.306-1.584-.306-1.559c-.006-.075-.063-.131-.138-.131m1.8-.262c-.081 0-.144.063-.15.144l-.237 1.297.237 1.322c.006.081.069.144.15.144.081 0 .144-.063.15-.144l.269-1.322-.269-1.297c-.006-.081-.069-.144-.15-.144m1.8-.131c-.088 0-.156.069-.163.156l-.206 1.166.206 1.191c.006.088.075.156.163.156.088 0 .156-.069.163-.156l.231-1.191-.231-1.166c-.006-.088-.075-.156-.163-.156m1.8-.088c-.094 0-.169.075-.175.169l-.175 1.078.175 1.103c.006.094.081.169.175.169.094 0 .169-.075.175-.169l.2-1.103-.2-1.078c-.006-.094-.081-.169-.175-.169m1.8-.063c-.1 0-.181.081-.188.181l-.144.991.144 1.016c.006.1.088.181.188.181.1 0 .181-.081.188-.181l.163-1.016-.163-.991c-.006-.1-.088-.181-.188-.181m1.8-.044c-.106 0-.194.088-.2.194l-.113.903.113.928c.006.106.094.194.2.194.106 0 .194-.088.2-.194l.128-.928-.128-.903c-.006-.106-.094-.194-.2-.194m2.787-.731c-.056-.019-.113-.031-.172-.031-.3 0-.581.113-.794.3-.094-1.097-.997-1.953-2.106-1.953-.278 0-.544.056-.787.156-.094.038-.119.075-.119.113v7.256c0 .044.031.081.075.088h3.906c.591 0 1.069-.478 1.069-1.069V11.1c0-.272-.131-.519-.347-.666"/>
          </svg>
        </a>
      </div>

      {/* ── Main row ── */}
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-0 md:justify-between border-b border-white/[0.06]">

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-transparent.png"
          alt="Springhill Pentecostal Church"
          className="h-12 w-auto object-contain self-start md:self-auto flex-shrink-0"
          style={{ filter: 'invert(1) brightness(0.9)' }}
        />

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-7 gap-y-2">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-stone-400 hover:text-white transition-colors text-xs tracking-wide uppercase font-medium">
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── Info row ── */}
      <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:justify-between text-xs text-stone-400">
        <div className="flex flex-wrap gap-x-5 gap-y-1 items-center">
          <span>Sun · 10:00 AM &amp; 6:00 PM</span>
          <span className="hidden sm:inline text-stone-700">·</span>
          <span>Wed · 7:30 PM</span>
          <span className="hidden sm:inline text-stone-700">·</span>
          <span className="text-church-gold/70">1st Sun · Friends &amp; Family 2:00 PM</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://maps.google.com/?q=1090+Springhill+Road+Wesson+MS+39191"
            target="_blank" rel="noopener noreferrer"
            className="hover:text-stone-300 transition-colors">
            1090 Springhill Rd, Wesson, MS
          </a>
          <span className="text-stone-700">·</span>
          <span>© {new Date().getFullYear()} Springhill Pentecostal Church</span>
        </div>
      </div>

    </footer>
  );
}
