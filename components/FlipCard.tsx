'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  scrollFlip?: boolean;
  delay?: number;
}

export default function FlipCard({ front, back, className = '', scrollFlip = false, delay = 0 }: Props) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollFlip) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setFlipped(true), delay);
          observer.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -25% 0px' }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [scrollFlip, delay]);

  return (
    <div
      ref={ref}
      className={`flip-card cursor-pointer select-none ${className}`}
      onClick={() => setFlipped(f => !f)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFlipped(f => !f); }}
    >
      <div className={`flip-card-inner${flipped ? ' is-flipped' : ''}`}>
        <div className="flip-card-face">{front}</div>
        <div className="flip-card-face flip-card-back-face">{back}</div>
      </div>
    </div>
  );
}
