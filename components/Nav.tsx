'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/',         label: 'Home'     },
  { href: '/events',   label: 'Events'   },
  { href: '/beliefs',  label: 'Beliefs'  },
  { href: '/give',     label: 'Give'     },
  { href: '/prayer',   label: 'Prayer'   },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Springhill Pentecostal Church"
            width={120}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                pathname === href
                  ? 'bg-church-purple/10 text-church-purple font-semibold'
                  : 'text-stone-600 hover:text-church-purple hover:bg-church-purple/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/prayer" className="btn-primary text-sm px-5 py-2.5">
            Plan Your Visit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-stone-100 bg-white px-5 pb-5 pt-2">
          <nav className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  pathname === href
                    ? 'bg-church-purple/10 text-church-purple font-semibold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/prayer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              Plan Your Visit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
