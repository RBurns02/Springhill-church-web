import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-church-dark text-stone-300">
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand — gold logo on dark background */}
        <div>
          <Image
            src="/logo-gold.png"
            alt="Springhill Pentecostal Church"
            width={160}
            height={80}
            className="h-20 w-auto object-contain mb-4"
          />
          <p className="text-sm text-stone-400 leading-relaxed">
            A Spirit-filled community where every person is welcomed, loved,
            and empowered to walk in faith since 1935.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-4">
            Quick Links
          </p>
          <ul className="space-y-2">
            {[
              { href: '/',         label: 'Home'             },
              { href: '/events',   label: 'Events'           },
              { href: '/beliefs',  label: 'What We Believe'  },
              { href: '/give',     label: 'Give'             },
              { href: '/prayer',   label: 'Prayer & Contact' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-4">
            Find Us
          </p>
          <address className="not-italic text-sm text-stone-400 space-y-2 leading-relaxed">
            <p className="text-stone-300 font-medium">Pastor Tommy Lee</p>
            <p>1090 Springhill Road<br />Wesson, MS 39191</p>
            <p>
              <a href="mailto:info@springhillpentecostal.com" className="hover:text-white transition-colors">
                info@springhillpentecostal.com
              </a>
            </p>
          </address>

          {/* Service times quick reference */}
          <div className="mt-5 space-y-1 text-xs text-stone-500">
            <p className="text-stone-400 font-semibold text-xs uppercase tracking-wide mb-2">Service Times</p>
            <p>Sun Morning · 10:00 AM</p>
            <p>Sun Evening · 6:00 PM</p>
            <p>Wed Night · 7:30 PM</p>
            <p className="text-church-gold">1st Sunday · Friends &amp; Family · 2:00 PM</p>
          </div>

          {/* Social links */}
          <div className="flex gap-3 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-purple transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-purple transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-purple transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-stone-600 py-5">
        © {new Date().getFullYear()} Springhill Pentecostal Church · Wesson, MS · Est. 1935
      </div>
    </footer>
  );
}
