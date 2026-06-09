import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-church-dark text-stone-300">
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand + social */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.wixstatic.com/media/d28003_6c4b55879cc34d02a7f6b21e60b19a9d~mv2.png"
            alt="Springhill Pentecostal Church"
            className="h-16 w-auto object-contain mb-4"
          />
          <p className="text-sm text-stone-400 leading-relaxed mb-5">
            A Spirit-filled community where every person is welcomed, loved,
            and empowered to walk in faith.
          </p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/spcwesson" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-purple transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://soundcloud.com/spcwesson" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-purple transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M1.175 12.225c-.056 0-.094.037-.1.094l-.344 2.156.344 2.181c.006.06.044.094.1.094.05 0 .094-.037.1-.094l.394-2.181-.394-2.156c-.006-.057-.05-.094-.1-.094m1.79-.581c-.069 0-.119.05-.125.119l-.3 1.812.3 1.837c.006.069.056.119.125.119.069 0 .119-.05.125-.119l.344-1.837-.344-1.812c-.006-.069-.056-.119-.125-.119m1.8-.378c-.075 0-.131.056-.137.131l-.269 1.559.269 1.584c.006.075.063.131.137.131.075 0 .131-.056.138-.131l.306-1.584-.306-1.559c-.006-.075-.063-.131-.138-.131m1.8-.262c-.081 0-.144.063-.15.144l-.237 1.297.237 1.322c.006.081.069.144.15.144.081 0 .144-.063.15-.144l.269-1.322-.269-1.297c-.006-.081-.069-.144-.15-.144m1.8-.131c-.088 0-.156.069-.163.156l-.206 1.166.206 1.191c.006.088.075.156.163.156.088 0 .156-.069.163-.156l.231-1.191-.231-1.166c-.006-.088-.075-.156-.163-.156m1.8-.088c-.094 0-.169.075-.175.169l-.175 1.078.175 1.103c.006.094.081.169.175.169.094 0 .169-.075.175-.169l.2-1.103-.2-1.078c-.006-.094-.081-.169-.175-.169m1.8-.063c-.1 0-.181.081-.188.181l-.144.991.144 1.016c.006.1.088.181.188.181.1 0 .181-.081.188-.181l.163-1.016-.163-.991c-.006-.1-.088-.181-.188-.181m1.8-.044c-.106 0-.194.088-.2.194l-.113.903.113.928c.006.106.094.194.2.194.106 0 .194-.088.2-.194l.128-.928-.128-.903c-.006-.106-.094-.194-.2-.194m2.787-.731c-.056-.019-.113-.031-.172-.031-.3 0-.581.113-.794.3-.094-1.097-.997-1.953-2.106-1.953-.278 0-.544.056-.787.156-.094.038-.119.075-.119.113v7.256c0 .044.031.081.075.088h3.906c.591 0 1.069-.478 1.069-1.069V11.1c0-.272-.131-.519-.347-.666"/>
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
