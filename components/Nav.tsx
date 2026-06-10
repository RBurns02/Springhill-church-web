'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';
import { getUpcomingEvents } from '@/lib/events';

function buildDropdownItems() {
  const base = [
    { label: 'Events & Calendar', href: '/events' },
  ];
  const eventItems = getUpcomingEvents().map(e => ({
    label: e.title,
    href: e.detailsUrl ?? `/events/${e.slug}`,
  }));
  return [...base, ...eventItems];
}

const links = [
  { href: '/',          label: 'Home'            },
  { href: '/blast',     label: 'Kids'            },
  { href: '/services',  label: 'Services'        },
  { href: '/beliefs',   label: 'What We Believe' },
  { href: '/give',      label: 'Give'            },
  { href: '/prayer',    label: 'Prayer'          },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [desktopEventsOpen, setDesktopEventsOpen] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const dropdownItems = buildDropdownItems();
  const isEventsActive = pathname.startsWith('/events');

  function handleMouseEnter() {
    clearTimeout(hoverTimeout.current);
    setDesktopEventsOpen(true);
  }

  function handleMouseLeave() {
    hoverTimeout.current = setTimeout(() => setDesktopEventsOpen(false), 150);
  }

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
          <Link
            href="/"
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
              pathname === '/'
                ? 'text-stone-900 font-semibold border-church-gold'
                : 'text-stone-500 hover:text-stone-900 border-transparent'
            }`}
          >
            Home
          </Link>

          {/* Events with dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/events"
              className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                isEventsActive
                  ? 'text-stone-900 font-semibold border-church-gold'
                  : 'text-stone-500 hover:text-stone-900 border-transparent'
              }`}
            >
              Events
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${desktopEventsOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {desktopEventsOpen && (
              <div
                className="absolute top-full left-0 w-60 bg-white border border-stone-200 shadow-xl py-2 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="px-4 py-2">
                  {dropdownItems.map((item, i) => (
                    <div key={item.href}>
                      {i === 1 && <div className="h-px bg-stone-100 my-1" />}
                      {i === 1 && (
                        <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-stone-400 mt-2 mb-1">Upcoming Events</p>
                      )}
                      <Link
                        href={item.href}
                        onClick={() => setDesktopEventsOpen(false)}
                        className="block py-2 text-sm text-stone-600 hover:text-church-gold transition-colors"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white px-5 pb-6 pt-3">
          <nav className="flex flex-col">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`py-3.5 text-base font-medium border-b border-stone-100 transition-colors ${
                pathname === '/' ? 'text-stone-900 font-semibold' : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Home
            </Link>

            {/* Events accordion */}
            <button
              onClick={() => setEventsOpen(!eventsOpen)}
              className={`py-3.5 text-base font-medium border-b border-stone-100 transition-colors flex items-center justify-between w-full text-left ${
                isEventsActive ? 'text-stone-900 font-semibold' : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Events
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${eventsOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {eventsOpen && (
              <div className="bg-stone-50 border-b border-stone-100">
                {dropdownItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => { setOpen(false); setEventsOpen(false); }}
                    className="block py-3 pl-6 pr-4 text-sm text-stone-500 hover:text-church-gold border-b border-stone-100 last:border-0 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-3.5 text-base font-medium border-b border-stone-100 transition-colors ${
                  pathname === href ? 'text-stone-900 font-semibold' : 'text-stone-500 hover:text-stone-900'
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
