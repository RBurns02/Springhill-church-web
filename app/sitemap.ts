import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.spcwesson.com',          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: 'https://www.spcwesson.com/events',                       lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: 'https://www.spcwesson.com/events/mens-kayaking-trip',    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.6 },
    { url: 'https://www.spcwesson.com/events/pastoral-anniversary',  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.6 },
    { url: 'https://www.spcwesson.com/blast',    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.spcwesson.com/prayer',   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.spcwesson.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.spcwesson.com/give',     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://www.spcwesson.com/beliefs',  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  ];
}
