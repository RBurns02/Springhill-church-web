'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/',          label: 'Home'            },
  { href: '/events',    label: 'Events'          },
  { href: '/services',  label: 'Services'        },
  { href: '/beliefs',   label: 'What We Believe' },
  { href: '/give',      label: 'Give'            },
  { href: '/prayer',    label: 'Prayer'          },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/96 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-5 h-18 flex items-center justify-between" style={{ height: '72px' }}>

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-transparent.png"
            alt="Springhill Pentecostal Church"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                pathname === href
                  ? 'text-stone-900 font-semibold border-church-gold'
                  : 'text-stone-500 hover:text-stone-900 border-transparent'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link href="/prayer" className="btn-primary text-[11px] px-6 py-3">
            Plan Your Visit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-stone-700 hover:text-stone-900 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white px-5 pb-6 pt-3">
          <nav className="flex flex-col">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-3.5 text-base font-medium border-b border-stone-100 transition-colors ${
                  pathname === href
                    ? 'text-stone-900 font-semibold'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/prayer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-5 justify-center"
            >
              Plan Your Visit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
