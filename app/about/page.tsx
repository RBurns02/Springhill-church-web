import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Us | Springhill Pentecostal Church',
  description: 'Learn about Springhill Pentecostal Church — a Spirit-filled community in Wesson, MS, established in 1935.',
  openGraph: {
    title: 'About Us | Springhill Pentecostal Church',
    description: 'A Spirit-filled community in Wesson, MS, rooted in faith since 1935.',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-logo.png'] },
};

const values = [
  {
    heading: 'Rooted in the Word',
    body: 'Everything we do flows from Scripture. The Bible is our final authority — for life, for faith, and for how we do church.',
  },
  {
    heading: 'Hungry for His Presence',
    body: "We don't just talk about God — we expect to encounter Him. Every service, every prayer meeting, every gathering is an opportunity to experience the living God.",
  },
  {
    heading: 'Family, Not a Program',
    body: "Springhill is a family first. We celebrate together, carry burdens together, and grow together. You're not a visitor — you're family the moment you walk in.",
  },
  {
    heading: 'Open to Everyone',
    body: "No perfect people required. We've all come from somewhere, and we believe God meets people exactly where they are — and walks with them from there.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-5">Est. 1935</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight">About Springhill</h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
          Nearly a century of faith, family, and the fire of God — right here in Wesson, Mississippi.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="gold-bar mb-6" />
              <h2 className="section-heading mb-6">Our Story</h2>
              <p className="text-stone-500 leading-relaxed mb-5">
                Springhill Pentecostal Church has been a beacon of faith in Wesson, Mississippi since
                1935. For nearly ninety years, this church has been a place where the Holy Ghost moves,
                families are built, and lives are changed by the power of God.
              </p>
              <p className="text-stone-500 leading-relaxed mb-5">
                What started as a gathering of believers hungry for God has grown into a thriving
                community rooted in Apostolic truth and a deep love for one another. Generation after
                generation has worshipped under this roof — and the same Spirit that moved in those
                early services is still moving today.
              </p>
              <p className="text-stone-500 leading-relaxed">
                We are a Oneness Pentecostal church — we preach repentance, baptism in Jesus&apos; name,
                and the infilling of the Holy Ghost, just as the apostles did in the book of Acts.
                That message hasn&apos;t changed, and it never will.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="relative overflow-hidden aspect-[4/5] bg-stone-100">
                <Image
                  src="/church-exterior.png"
                  alt="Springhill Pentecostal Church"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-church-warm">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal className="text-center mb-14">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading">What We&apos;re About</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.heading} delay={i * 60}>
                <div className="card p-8 h-full">
                  <div className="h-px w-8 bg-church-gold mb-5" />
                  <h3 className="font-serif font-bold text-stone-900 text-lg mb-3">{v.heading}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pastor section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={100} className="order-2 md:order-1">
              <div className="relative w-56 h-64 md:w-64 md:h-80 overflow-hidden mx-auto md:mx-0" style={{ borderRadius: '50%' }}>
                <Image
                  src="/pastor.png"
                  alt="Pastor Tommy and Lori Lee"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 224px, 256px"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="order-1 md:order-2">
              <div className="gold-bar mb-6" />
              <p className="eyebrow text-stone-400 mb-3">Our Pastor</p>
              <h2 className="font-serif text-3xl font-bold text-stone-900 mb-5">Pastor Tommy Lee</h2>
              <p className="text-stone-500 leading-relaxed mb-5">
                Pastor Tommy Lee and his wife Lori have led Springhill Pentecostal Church with
                faithfulness, humility, and a heart for the people of this community. Under their
                leadership, Springhill has continued to grow in both Spirit and in truth.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                Pastor Lee&apos;s preaching is marked by a love for the Word and a genuine compassion
                for souls. His door is open — to the longtime member and the first-time visitor alike.
              </p>
              <Link href="/prayer" className="btn-primary">
                Get in Touch with Pastor Lee
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-20 section-dark">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <svg className="w-8 h-8 text-church-gold mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-serif text-2xl md:text-3xl text-white/80 leading-relaxed italic mb-6 max-w-2xl mx-auto">
              &ldquo;And they continued stedfastly in the apostles&apos; doctrine and fellowship,
              and in breaking of bread, and in prayers.&rdquo;
            </p>
            <p className="text-church-gold text-xs font-semibold tracking-[0.2em] uppercase">Acts 2:42</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-church-warm">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-4">Come Be Part of the Family</h2>
            <p className="text-stone-500 leading-relaxed mb-10">
              We&apos;d love to have you. Come on a Sunday, bring a friend, or reach out first —
              whatever feels right. Springhill is home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/new-here" className="btn-primary">New Here?</Link>
              <Link href="/prayer" className="btn-outline-green">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
