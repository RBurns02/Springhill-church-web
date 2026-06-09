import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'What We Believe | Springhill Pentecostal Church',
  description:
    'Our statement of faith — what Springhill Pentecostal Church believes about Scripture, salvation, the Holy Spirit, and more.',
};

const beliefs = [
  {
    title: 'The Bible',
    refs: '2 Timothy 3:15–17',
    body: 'The Bible is divinely inspired and God-breathed. It is true in all that it teaches. As the infallible Word of God, it is our primary authority for what we believe and teach, and how we live our lives. "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works." (2 Tim. 3:16–17)',
  },
  {
    title: 'One God',
    refs: 'Deuteronomy 6:4 · Isaiah 44:6–8 · Colossians 2:9 · Ephesians 4:5–6',
    body: 'We strictly adhere to the Scriptural teaching of the Oneness of God found in Deuteronomy 6:4: "Hear, O Israel: The LORD our God is one LORD." The New Testament agrees with the Old Testament. Paul wrote: "One Lord, one faith, one baptism, One God and Father of all, who is above all, and through all, and in you all." (Eph. 4:5–6) All the fullness of the Godhead dwells bodily in Jesus Christ. (Col. 2:9)',
  },
  {
    title: 'Jesus Christ',
    refs: 'John 1:1–14 · Colossians 2:9 · Philippians 2:9–11',
    body: 'We believe that Jesus Christ is the Son of God and God manifest in the flesh. "In the beginning was the Word, and the Word was with God, and the Word was God... And the Word was made flesh, and dwelt among us." (John 1:1, 14) He is the only Saviour: "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved." (Acts 4:12)',
  },
  {
    title: 'Salvation',
    refs: 'Romans 3:23 · Ephesians 2:8–9 · Acts 2:38',
    body: 'Everyone has sinned and is in need of salvation. "For all have sinned, and come short of the glory of God." (Rom. 3:23) Salvation comes by grace through faith based on the atoning sacrifice of Jesus Christ. "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God." (Eph. 2:8) The new birth experience is received through obedience to the Gospel of Jesus Christ.',
  },
  {
    title: 'Repentance',
    refs: 'Luke 24:47 · Acts 2:38 · 2 Peter 3:9',
    body: 'We must repent — turn away from sin and toward God. Jesus said: "Repentance and remission of sins should be preached in his name among all nations, beginning at Jerusalem." (Luke 24:47) The Lord is "not willing that any should perish, but that all should come to repentance." (2 Pet. 3:9) Repentance is a sincere change of heart and direction, turning from sin and surrendering to Christ.',
  },
  {
    title: 'Water Baptism in Jesus' Name',
    refs: 'Acts 2:38 · Acts 8:16 · Acts 10:48 · Acts 19:5',
    body: 'We must be water-baptized by immersion in the name of Jesus Christ for the remission of sins. Peter declared: "Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost." (Acts 2:38) Throughout the book of Acts, every recorded baptism was performed in the name of Jesus Christ.',
  },
  {
    title: 'Receiving the Holy Ghost',
    refs: 'Acts 2:4 · Acts 2:38–39 · John 7:37–39',
    body: 'We are promised the gift of the Holy Ghost with the evidence of speaking in other tongues as the Spirit gives utterance. "And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance." (Acts 2:4) Jesus promised: "He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water." (John 7:38) This gift is available to all who believe.',
  },
  {
    title: 'Holy Living',
    refs: '1 Corinthians 6:19–20 · 2 Corinthians 7:1 · Galatians 5:22–26',
    body: 'As Christians we are called to live holy lives, set apart for God both inwardly and outwardly. "What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own? For ye are bought with a price: therefore glorify God in your body, and in your spirit, which are God\'s." (1 Cor. 6:19–20) We are empowered to live godly lives through the Holy Ghost.',
  },
  {
    title: 'Prayer',
    refs: 'Philippians 4:6 · James 5:14–16 · 1 Thessalonians 5:17',
    body: 'We believe in the power and necessity of prayer. "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God." (Phil. 4:6) We are commanded to "pray without ceasing." (1 Thes. 5:17) In every service, those who are ill are invited to come forward and be anointed with oil and prayed over. "The prayer of faith shall save the sick." (James 5:15)',
  },
  {
    title: 'The Church',
    refs: 'Acts 2:42–47 · 1 Corinthians 12:27 · Ephesians 4:11–16',
    body: 'The Church is the body of Christ — a community of Spirit-filled believers who gather together for worship, teaching, fellowship, and the breaking of bread. "And they continued stedfastly in the apostles\' doctrine and fellowship, and in breaking of bread, and in prayers." (Acts 2:42) God has set apostles, prophets, evangelists, pastors, and teachers in the Church for the edifying of the body. (Eph. 4:11–12)',
  },
  {
    title: 'The Return of Christ',
    refs: 'Acts 1:11 · 1 Thessalonians 4:16–17 · Revelation 20:11–15',
    body: 'We believe that Jesus Christ is coming again. The angels declared: "This same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven." (Acts 1:11) "For the Lord himself shall descend from heaven with a shout... and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air." (1 Thes. 4:16–17)',
  },
];

export default function BeliefsPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-5">Our Foundation</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight">What We Believe</h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
          Our faith is rooted in the Word of God and the foundational truths of
          Apostolic Pentecostal doctrine. Here is what we stand on.
        </p>
      </section>

      {/* Core statement */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-8" />
            <div className="card p-8 md:p-10">
              <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                We believe that Jesus is the name of the Father, the Son, and the Holy Ghost.{' '}
                <span className="text-stone-400 text-sm">(Mat. 28:19; John 5:43, 10:30, 12:45, 14:8–9; Phil. 2:9–11)</span>{' '}
                All the fullness of the Godhead rests bodily in Jesus Christ.{' '}
                <span className="text-stone-400 text-sm">(Col. 2:9)</span>{' '}
                We believe salvation is a free gift to all who repent of their sins, are baptized in the name of the Lord Jesus Christ, and are filled with the Holy Ghost by the evidence of speaking in other tongues as the Spirit gives the utterance.{' '}
                <span className="text-stone-400 text-sm">(Acts 2:38, 4:12, 10:44–48; Eph. 2:8, 4:5)</span>{' '}
                We believe that we are chosen people, separated from the world; and that we should live a holy life both inwardly and outwardly.{' '}
                <span className="text-stone-400 text-sm">(1 Pet. 2:9; 2 Cor. 6:17–18)</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Beliefs accordion */}
      <section className="pb-24 bg-church-warm pt-4">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal className="text-center mb-12">
            <div className="gold-bar mx-auto mb-5" />
            <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">Our Statement of Faith</h2>
          </ScrollReveal>

          <div className="space-y-2">
            {beliefs.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 35}>
                <details className="group card overflow-visible">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer select-none list-none">
                    <div className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-7 h-7 border border-stone-300 text-stone-500 text-xs font-semibold flex items-center justify-center group-open:border-church-gold group-open:text-church-gold transition-colors">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-serif font-bold text-lg text-stone-900 group-open:text-church-purple transition-colors">
                          {b.title}
                        </h3>
                        <p className="text-xs text-stone-400 mt-0.5">{b.refs}</p>
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 text-stone-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px bg-stone-100 mb-5" />
                    <p className="text-stone-600 leading-relaxed text-sm">{b.body}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Does It Mean To Be Pentecostal */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <ScrollReveal className="text-center mb-12">
            <div className="gold-bar mx-auto mb-5" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              What Does It Mean To Be Pentecostal?
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="card p-8 md:p-10 mb-10">
              <p className="text-stone-700 leading-relaxed mb-4">
                We call ourselves Pentecostal because we have experienced the same miraculous
                conversion that the 120 followers experienced
                in the second chapter of Acts.
              </p>
              <p className="text-stone-700 leading-relaxed">
                According to the Bible, the New Testament Church began on the Day of Pentecost,
                which was fifty days after the resurrection of Jesus Christ. When the crowd heard
                the noise and listened to the message, they asked the Apostles how to be saved.
                Peter, standing with the eleven, preached the pattern of conversion that the
                church has followed ever since.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            <ScrollReveal delay={0}>
              <div className="card p-8 text-center group">
                <div className="w-12 h-12 border border-stone-200 flex items-center justify-center mx-auto mb-5 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">Repentance</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  We must repent and turn away from sin, asking Jesus to forgive us.
                </p>
                <p className="text-church-gold text-xs font-semibold tracking-wide">Luke 24:47 · 2 Peter 3:9 · Acts 2:38</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="card p-8 text-center group">
                <div className="w-12 h-12 border border-stone-200 flex items-center justify-center mx-auto mb-5 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">Baptism</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  We must be water-baptized in the Name of Jesus Christ for the remission of our sins.
                </p>
                <p className="text-church-gold text-xs font-semibold tracking-wide">John 3:5 · Acts 2:38, 8:16, 10:48, 19:5</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="card p-8 text-center group">
                <div className="w-12 h-12 border border-stone-200 flex items-center justify-center mx-auto mb-5 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">Spirit Infilling</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  We are promised the gift of His Spirit with the evidence of speaking in other tongues.
                </p>
                <p className="text-church-gold text-xs font-semibold tracking-wide">John 7:37–39 · Acts 2:4, 2:38, 8:17–18, 10:44–47</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Have Questions CTA */}
      <section className="py-20 section-dark text-center">
        <div className="max-w-2xl mx-auto px-5">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-7" />
            <h2 className="font-serif text-3xl font-bold text-white mb-4 tracking-tight">
              Have Questions?
            </h2>
            <p className="text-white/55 mb-10 text-lg leading-relaxed">
              Theology can be deep. We&apos;re here to walk through it with you — no question
              is too big or too small. Reach out and we&apos;ll be happy to talk.
            </p>
            <Link href="/prayer" className="btn-gold">Get in Touch</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
