import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-church-dark text-stone-300">
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand + social */}
        <div>
          <Image
            src="/logo-gold.png"
            alt="Springhill Pentecostal Church"
            width={160}
            height={80}
            className="h-16 w-auto object-contain mb-4"
          />
          <p className="text-sm text-stone-400 leading-relaxed mb-5">
            A Spirit-filled community where every person is welcomed, loved,
            and empowered to walk in faith.
          </p>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-purple transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-purple transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-purple transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Quick links */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-4">Quick Links</p>
          <ul className="space-y-2.5">
            {[
              { href: '/',         label: 'Home'             },
              { href: '/events',   label: 'Events'           },
              { href: '/beliefs',  label: 'What We Believe'  },
              { href: '/give',     label: 'Give'             },
              { href: '/prayer',   label: 'Prayer & Contact' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-stone-400 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Service times */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-4">Service Times</p>
          <ul className="space-y-3 text-sm">
            <li>
              <p className="text-stone-300 font-semibold">Sunday Morning</p>
              <p className="text-stone-500">10:00 AM</p>
            </li>
            <li>
              <p className="text-stone-300 font-semibold">Sunday Evening</p>
              <p className="text-stone-500">6:00 PM</p>
            </li>
            <li>
              <p className="text-stone-300 font-semibold">Wednesday Night</p>
              <p className="text-stone-500">7:30 PM</p>
            </li>
            <li className="pt-1 border-t border-white/10">
              <p className="text-church-gold font-semibold text-xs">1st Sunday of Every Month</p>
              <p className="text-stone-500 text-xs">Friends &amp; Family Service · 2:00 PM</p>
            </li>
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-4">Contact Us</p>
          <address className="not-italic text-sm text-stone-400 space-y-3 leading-relaxed">
            <p className="text-stone-300 font-semibold">Pastor Tommy Lee</p>
            <p>1090 Springhill Road<br />Wesson, MS 39191</p>
            <p>
              <a href="mailto:info@springhillpentecostal.com" className="hover:text-white transition-colors">
                info@springhillpentecostal.com
              </a>
            </p>
            <p className="text-stone-500 text-xs">Mon – Fri · 9:00 AM – 4:00 PM</p>
          </address>
          <Link href="/prayer" className="inline-block mt-5 text-xs font-semibold text-church-gold hover:text-amber-400 transition-colors">
            Send a Prayer Request →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-stone-600 py-5">
        © {new Date().getFullYear()} Springhill Pentecostal Church · Wesson, MS · Est. 1935
      </div>
    </footer>
  );
}
