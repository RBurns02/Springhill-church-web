'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/church1.png', alt: 'Springhill congregation worshipping together', caption: 'Gathered in His presence' },
  { src: '/church2.png', alt: 'Ministry moment at Springhill Pentecostal Church', caption: 'Rooted in the Word' },
  { src: '/church9.jpg', alt: 'Keyboard player during a Springhill service', caption: 'Heartfelt music' },
  { src: '/church13.png', alt: 'Church members praying and ministering', caption: 'Standing together in faith' },
  { src: '/church4.jpg', alt: 'Sound and lighting ministry at Springhill', caption: 'Serving behind the scenes' },
  { src: '/church5.jpg', alt: 'Preaching from the Springhill pulpit', caption: 'The Word preached' },
];

export default function PhotoSlider() {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchX = useRef<number | null>(null);
  const next = useCallback(() => setIndex(i => (i + 1) % photos.length), []);
  const prev = useCallback(() => setIndex(i => (i - 1 + photos.length) % photos.length), []);

  useEffect(() => {
    if (userPaused || hovered || focused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(next, 5500);
    return () => window.clearInterval(timer);
  }, [userPaused, hovered, focused, next]);

  return (
    <div
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false); }}
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        if (touchX.current === null) return;
        const diff = touchX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 35) { diff > 0 ? next() : prev(); setUserPaused(true); }
        touchX.current = null;
      }}
    >
      <div className="spc-gallery" role="group" aria-roledescription="carousel" aria-label="Life at Springhill photo gallery">
        <div className="spc-gallery-images">
          {photos.map((photo, i) => (
            <Image className="spc-gallery-image" data-active={i === index ? 'true' : 'false'}
              aria-hidden={i !== index} key={photo.src} src={photo.src} alt={photo.alt}
              fill sizes="(max-width: 720px) 100vw, 1176px" priority={i === 0} />
          ))}
        </div>
        <div className="spc-gallery-bottom">
          <p className="spc-gallery-caption" aria-live="polite" aria-atomic="true">{photos[index].caption}</p>
          <div className="spc-gallery-controls">
            <button className="spc-gallery-button" type="button" onClick={() => { prev(); setUserPaused(true); }} aria-label="Previous photo">←</button>
            <button className="spc-gallery-button" type="button" onClick={() => setUserPaused(p => !p)} aria-pressed={userPaused} aria-label={userPaused ? 'Play slideshow' : 'Pause slideshow'}>{userPaused ? '▶' : 'Ⅱ'}</button>
            <button className="spc-gallery-button" type="button" onClick={() => { next(); setUserPaused(true); }} aria-label="Next photo">→</button>
          </div>
        </div>
      </div>
      <div className="spc-gallery-progress" aria-label="Choose gallery photo">
        {photos.map((photo, i) => (
          <button type="button" key={photo.src} onClick={() => { setIndex(i); setUserPaused(true); }}
            data-active={i === index ? 'true' : 'false'}
            aria-label={`Photo ${i + 1}: ${photo.caption}`} aria-current={i === index ? 'true' : undefined} />
        ))}
      </div>
      <p className="spc-gallery-helper">A glimpse of life at Springhill · Use the arrows or swipe to explore</p>
    </div>
  );
}
