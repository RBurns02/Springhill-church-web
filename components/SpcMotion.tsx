'use client';
import { useEffect } from 'react';

export default function SpcMotion() {
  useEffect(() => {
    const root = document.querySelector('.spc-site');
    if (!root || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = Array.from(root.querySelectorAll('.spc-reveal'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('spc-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    nodes.forEach(node => {
      if (node.getBoundingClientRect().top < window.innerHeight - 25) node.classList.add('spc-visible');
      observer.observe(node);
    });
    root.classList.add('spc-animated');
    return () => { observer.disconnect(); root.classList.remove('spc-animated'); };
  }, []);
  return null;
}
