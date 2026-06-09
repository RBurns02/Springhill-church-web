import type { Metadata } from 'next';
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
