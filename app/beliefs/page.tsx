import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What We Believe | Springhill Pentecostal Church',
  description:
    'Our statement of faith — what Springhill Pentecostal Church believes about Scripture, salvation, the Holy Spirit, and more.',
};

const beliefs = [
  {
    icon: '📖',
    title: 'The Bible',
    body: 'We believe the entire Bible is the inspired, infallible Word of God — our final authority in all matters of faith and conduct. Both the Old and New Testaments are God-breathed and profitable for doctrine, correction, and instruction in righteousness (2 Timothy 3:16–17).',
  },
  {
    icon: '🕊️',
    title: 'One God',
    body: 'We believe in one God — eternally existent, the Creator of heaven and earth. He is Father, Son, and Holy Spirit: three distinct persons yet one divine Being, as revealed in Scripture and especially in the New Testament (Deuteronomy 6:4; Matthew 28:19).',
  },
  {
    icon: '✝️',
    title: 'The Lord Jesus Christ',
    body: 'We believe that Jesus Christ is the Son of God, fully divine and fully human. Born of a virgin, He lived a sinless life, died on the cross as the perfect sacrifice for our sins, rose bodily from the dead on the third day, and ascended to the Father where He now intercedes for us (John 3:16; 1 Corinthians 15:3–4).',
  },
  {
    icon: '🔥',
    title: 'Salvation',
    body: 'We believe salvation comes by grace alone through faith alone in Jesus Christ. It includes repentance from sin, confession of faith in Christ, water baptism by immersion in the name of Jesus Christ, and the infilling of the Holy Spirit. Salvation is a free gift — not earned by works (Ephesians 2:8–9; Acts 2:38).',
  },
  {
    icon: '💨',
    title: 'The Holy Spirit',
    body: 'We believe in the baptism of the Holy Spirit as a distinct gift available to every believer, with the initial evidence of speaking in other tongues as the Spirit gives utterance. We also affirm the ongoing gifts of the Spirit operating in the Church today, including prophecy, healing, and tongues (Acts 1:8; Acts 2:4; 1 Corinthians 12).',
  },
  {
    icon: '💧',
    title: 'Water Baptism',
    body: 'We practice baptism by full immersion in water as an outward declaration of an inward work of grace. Baptism is a public declaration of death to the old self and resurrection to new life in Christ (Romans 6:3–4).',
  },
  {
    icon: '🍞',
    title: 'The Lord\'s Supper',
    body: 'We observe the Lord\'s Supper — communion — as a memorial of Christ\'s sacrifice, proclaiming His death until He returns. It is a time of reflection, gratitude, and renewed commitment (1 Corinthians 11:23–26).',
  },
  {
    icon: '🙌',
    title: 'Divine Healing',
    body: 'We believe in divine healing for the physical body through the atonement of Christ. We pray for the sick and expect God to heal, whether miraculously or through medicine, according to His perfect will (James 5:14–15; Isaiah 53:5).',
  },
  {
    icon: '⭐',
    title: 'The Second Coming',
    body: 'We believe in the literal, bodily return of Jesus Christ. He will come again to gather His Church, raise the dead, judge the living and the dead, and establish His eternal kingdom. This blessed hope is a comfort to every believer (1 Thessalonians 4:16–17; Revelation 22:12).',
  },
];

export default function BeliefsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-hero-gradient py-20 text-white text-center">
        <p className="text-church-gold text-sm font-semibold tracking-widest uppercase mb-3">
          Our Foundation
        </p>
        <h1 className="font-serif text-5xl font-bold mb-4">What We Believe</h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          Our faith is rooted in the Word of God and the foundational truths of the
          Pentecostal tradition. Here is what we stand on.
        </p>
      </section>

      {/* Intro */}
      <section className="py-14 bg-church-cream">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <div className="gold-bar mx-auto mb-6" />
          <p className="text-stone-600 text-lg leading-relaxed">
            These are not merely doctrines on paper — they are the living convictions
            that shape every sermon preached, every prayer prayed, and every life
            transformed at Springhill Pentecostal Church.
          </p>
        </div>
      </section>

      {/* Beliefs grid */}
      <section className="pb-20 bg-church-warm">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-6">
          {beliefs.map((b) => (
            <div key={b.title} className="card p-7 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 mt-0.5">{b.icon}</span>
                <div>
                  <h2 className="font-serif font-bold text-xl text-stone-900 mb-2">{b.title}</h2>
                  <p className="text-stone-600 leading-relaxed text-sm">{b.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-dark text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Questions? We'd Love to Talk.
          </h2>
          <p className="text-white/70 mb-8 text-lg leading-relaxed">
            Theology can be deep. We\'re here to walk through it with you — no question
            is too big or too small.
          </p>
          <Link href="/prayer" className="btn-gold">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
