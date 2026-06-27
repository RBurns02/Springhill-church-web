import type { Metadata } from 'next';
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Springhill Pentecostal Church',
  description:
    'A warm, Spirit-filled community in Wesson, MS. Join us for worship, prayer, and fellowship every Sunday.',
  metadataBase: new URL('https://www.spcwesson.com'),
  openGraph: {
    title: 'Springhill Pentecostal Church',
    description: 'A Spirit-filled community in Wesson, MS. Everyone is welcome.',
    type: 'website',
    images: [
      {
        url: '/og-logo.png',
        width: 1200,
        height: 630,
        alt: 'Springhill Pentecostal Church – SPC Wesson, MS Est. 1935',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Springhill Pentecostal Church',
    description: 'A Spirit-filled community in Wesson, MS. Everyone is welcome.',
    images: ['/og-logo.png'],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: 'Springhill Pentecostal Church',
  url: 'https://www.spcwesson.com',
  logo: 'https://www.spcwesson.com/og-logo.png',
  image: 'https://www.spcwesson.com/og-logo.png',
  description: 'A Spirit-filled Apostolic Pentecostal church in Wesson, MS. Join us for worship, Biblical teaching, and fellowship.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1090 Springhill Road',
    addressLocality: 'Wesson',
    addressRegion: 'MS',
    postalCode: '39191',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday',    opens: '10:00', closes: '12:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday',    opens: '18:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday',    opens: '19:00', closes: '20:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '19:30', closes: '21:00' },
  ],
  sameAs: [
    'https://www.facebook.com/share/1GpFMM7VC2/',
    'https://www.instagram.com/spcwesson',
    'https://soundcloud.com/spcwesson',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://embed.tawk.to/6a3f21c935d7381d4b091eac/default"
          strategy="lazyOnload"
          crossOrigin="*"
        />
      </body>
    </html>
  );
}
