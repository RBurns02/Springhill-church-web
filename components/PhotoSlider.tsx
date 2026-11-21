'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/church1.png', alt: 'Worship at Springhill Pentecostal Church', caption: 'Worship together' },
  { src: '/church8.jpg', alt: 'Springhill congregation in worship', caption: 'One church family' },
  { src: '/church6.jpg', alt: 'Preaching from the pulpit at Springhill', caption: 'Rooted in the Word' },
  { src: '/church10.jpg', alt: 'Prayer at the altar at Springhill', caption: 'A place of prayer' },
  { src: '/church9.jpg', alt: 'Music during worship at Springhill', caption: 'Lifting up His name' },
  { src: '/church12.jpg', alt: 'Springhill worship service', caption: 'Gathered in His presence' },
  { src: '/church13.png', alt: 'Praise and worship at Springhill', caption: 'Joy in the house' },
  { src: '/church2.png', alt: 'Praise and worship at Springhill', caption: 'A place of praise' },
  { src: '/church3.png', alt: 'Spirit-filled service at Springhill', caption: 'United in faith' },
  { src: '/church4.jpg', alt: 'Sound and worship team at Springhill', caption: 'Serving together' },
  { src: '/church5.jpg', alt: 'Pastor preaching at Springhill', caption: 'Sharing the Word' },
  { src: '/church7.jpg', alt: 'Worship with family at Springhill', caption: 'Every generation' },
  { src: '/church11.jpg', alt: 'Keyboard player during worship at Springhill', caption: 'Heartfelt worship' },
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
          <p className="spc-gallery-caption">{photos[index].caption}</p>
          <div className="spc-gallery-controls">
            <button className="spc-gallery-button" type="button" onClick={prev} aria-label="Previous photo">←</button>
            <button className="spc-gallery-button" type="button" onClick={() => setUserPaused(p => !p)} aria-label={userPaused ? 'Play slideshow' : 'Pause slideshow'}>{userPaused ? '▶' : 'Ⅱ'}</button>
            <button className="spc-gallery-button" type="button" onClick={next} aria-label="Next photo">→</button>
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
