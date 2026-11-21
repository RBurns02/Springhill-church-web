'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Lightweight shared motion: progressive enhancement, never required to read content. */
export default function SpcMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const doc = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const main = document.getElementById('main-content');
    if (!main) return;

    const selectors = [
      '.spc-reveal', '.spc-subpage .spc-sub-copy',
      '.spc-subpage .spc-belief', '.spc-subpage .spc-event-row',
      '.spc-subpage .spc-sub-schedule', '.spc-subpage .spc-contact-actions',
      '.spc-subpage .spc-sermon-player', '.spc-subpage .spc-calendar-shell',
      '.spc-subpage .spc-subcta-inner',
    ];
    const nodes = Array.from(new Set(main.querySelectorAll<HTMLElement>(selectors.join(','))));
    let observer: IntersectionObserver | undefined;

    if (!reduceMotion && 'IntersectionObserver' in window) {
      nodes.forEach((el, i) => {
        el.setAttribute('data-spc-motion', '');
        el.style.setProperty('--spc-motion-delay', `${(i % 3) * 60}ms`);
        if (el.getBoundingClientRect().top < window.innerHeight + 16 && el.getBoundingClientRect().bottom > 0) {
          el.classList.add('spc-visible');
        }
      });
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          // Reset after exiting either end. Reveals play again on the return scroll.
          entry.target.classList.toggle('spc-visible', entry.isIntersecting);
        }
      }, { threshold: 0.015, rootMargin: '14px 0px 14px 0px' });
      nodes.forEach(el => observer?.observe(el));
      doc.classList.add('spc-motion-enabled');
    }

    const photos = Array.from(main.querySelectorAll<HTMLElement>('[data-spc-parallax]'));
    const track = document.querySelector<HTMLElement>('.spc-scroll-track');
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (track) track.style.transform = `scaleX(${max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0})`;
      doc.classList.toggle('spc-page-scrolled', window.scrollY > 25);
      if (!reduceMotion) {
        for (const el of photos) {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < -100 || rect.top > window.innerHeight + 100) continue;
          const center = rect.top + rect.height / 2;
          const travel = Math.max(-21, Math.min(21, (window.innerHeight / 2 - center) * 0.045));
          el.style.setProperty('--spc-depth-y', `${travel.toFixed(1)}px`);
        }
      }
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      nodes.forEach(el => { el.removeAttribute('data-spc-motion'); el.classList.remove('spc-visible'); el.style.removeProperty('--spc-motion-delay'); });
      photos.forEach(el => el.style.removeProperty('--spc-depth-y'));
      doc.classList.remove('spc-motion-enabled', 'spc-page-scrolled');
    };
  }, [pathname]);

  return <div className="spc-scroll-track" aria-hidden="true" />;
}
