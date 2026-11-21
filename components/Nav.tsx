'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/services', label: 'Messages' },
  { href: '/beliefs', label: 'Beliefs' },
  { href: '/give', label: 'Give' },
  { href: '/prayer', label: 'Prayer' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="spc-header">
      <a className="spc-skip" href="#main-content">Skip to content</a>
      <div className="spc-topline">
        <div className="spc-container">
          <p>1090 Springhill Road · Wesson, Mississippi</p>
          <p><strong>Join us Sunday</strong> · 10:00 AM &amp; 6:00 PM · 1st Sunday at 2:00 PM only</p>
        </div>
      </div>
      <div className="spc-container spc-nav-inner">
        <Link href="/" className="spc-brand" aria-label="Springhill Pentecostal Church, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="spc-brand-logo" src="/logo-transparent.png" alt="" aria-hidden="true" />
          <span className="spc-brand-name"><strong>Springhill</strong><small>PENTECOSTAL CHURCH · WESSON, MS</small></span>
        </Link>
        <nav className="spc-desktop-links" aria-label="Main navigation">
          {links.map(link => (
            <Link href={link.href} key={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>
          ))}
        </nav>
        <Link href="/new-here" className="spc-nav-cta">Plan Your Visit <span aria-hidden="true">↗</span></Link>
        <button
          className="spc-menu-trigger" type="button"
          aria-expanded={open} aria-controls="spc-mobile-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen(v => !v)}
        >{open ? '×' : '☰'}</button>
      </div>
      <nav id="spc-mobile-navigation" className="spc-mobile-menu" data-open={open ? 'true' : 'false'} aria-label="Mobile navigation">
        {links.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>
        ))}
        <Link href="/blast" onClick={() => setOpen(false)}>BLAST Kids Church</Link>
        <Link href="/prayer" onClick={() => setOpen(false)}>Prayer &amp; Contact</Link>
        <Link href="/new-here" onClick={() => setOpen(false)}>Plan Your Visit ↗</Link>
      </nav>
    </header>
  );
}
