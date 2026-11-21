import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  photoPosition?: string;
  variant?: 'cream' | 'forest' | 'ocean';
  primary?: { text: string; href: string };
  secondary?: { text: string; href: string };
  note?: string;
};

export function SpcPageHero({ eyebrow, title, accent, description, image, imageAlt, photoPosition, variant = 'cream', primary, secondary, note }: HeroProps) {
  return (
    <section className={`spc-subhero spc-subhero--${variant} ${image ? '' : 'spc-subhero--no-photo'}`}>
      <div className="spc-subhero-copy">
        <p className="spc-eyebrow spc-eyebrow--green">{eyebrow}</p>
        <div className="spc-hero-mark" aria-hidden="true" />
        <h1 className="spc-subhero-title">{title}{accent && <> <em>{accent}</em></>}</h1>
        <p className="spc-subhero-description">{description}</p>
        {(primary || secondary) && <div className="spc-hero-actions">
          {primary && <Link className="spc-button spc-button--green" href={primary.href}>{primary.text} <span aria-hidden="true">↗</span></Link>}
          {secondary && <Link className="spc-button spc-button--outline" href={secondary.href}>{secondary.text} <span aria-hidden="true">→</span></Link>}
        </div>}
        {note && <p className="spc-subhero-note"><span aria-hidden="true" />{note}</p>}
      </div>
      {image && <div className="spc-subhero-media" data-spc-parallax="hero">
        <Image src={image} alt={imageAlt || ''} fill priority sizes="(max-width: 780px) 100vw, 48vw" style={{ objectPosition: photoPosition || 'center' }} />
        <span className="spc-subhero-corner">Springhill · Wesson, MS</span>
      </div>}
    </section>
  );
}

export function SpcSectionHeading({ eyebrow, title, description, dark = false }: { eyebrow: string; title: string; description?: string; dark?: boolean }) {
  return <div className={`spc-sub-section-heading spc-reveal ${dark ? 'spc-on-dark' : ''}`}>
    <p className={`spc-eyebrow ${dark ? 'spc-eyebrow--gold' : 'spc-eyebrow--green'}`}>{eyebrow}</p>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

export function SpcSectionCta({ eyebrow, title, description, primary, secondary }: {
  eyebrow: string; title: string; description: string;
  primary: { text: string; href: string }; secondary?: { text: string; href: string };
}) {
  return <section className="spc-subcta">
    <div className="spc-container spc-subcta-inner spc-reveal">
      <div><p className="spc-eyebrow spc-eyebrow--gold">{eyebrow}</p><h2>{title}</h2><p>{description}</p></div>
      <div className="spc-subcta-actions"><Link href={primary.href} className="spc-button spc-button--light">{primary.text} <span aria-hidden="true">↗</span></Link>{secondary && <Link href={secondary.href} className="spc-button spc-button--outline">{secondary.text}</Link>}</div>
    </div>
  </section>;
}

export function SpcImage({ src, alt, caption, className = '' }: { src: string; alt: string; caption?: string; className?: string }) {
  return <figure className={`spc-editorial-photo ${className}`}><div className="spc-editorial-photo-inner" data-spc-parallax="soft"><Image src={src} alt={alt} fill sizes="(max-width: 780px) 100vw, 50vw" /></div>{caption && <figcaption>{caption}</figcaption>}</figure>;
}

export function SpcQuote({ children, cite }: { children: ReactNode; cite: string }) {
  return <blockquote className="spc-scripture-quote"><div className="spc-reveal"><p>{children}</p><cite>{cite}</cite></div></blockquote>;
}

export const spcMapsUrl = 'https://maps.google.com/?q=1090+Springhill+Road+Wesson+MS+39191';
