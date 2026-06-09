import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What We Believe | Springhill Pentecostal Church',
  description:
    'Our statement of faith — what Springhill Pentecostal Church believes about Scripture, salvation, the Holy Spirit, and more.',
};

const beliefs = [
  {
    title: 'The Bible',
    body: 'The Bible is divinely inspired and God-breathed (pneuma). It is true in all that it teaches. As the infallible Word of God, it is our primary authority for what we believe and teach, and how we live our lives. (2 Tim 3:15-17)',
  },
  {
    title: 'The Oneness of God',
    body: 'We strictly adhere to the Scriptural teaching of the Oneness of God found in Deuteronomy 6:4 "Hear, O Israel: The LORD our God is one LORD." The New Testament agrees with the Old Testament. The Apostle Paul wrote: "One Lord, one faith, one baptism, One God and Father of all, who is above all, and through all, and in you all." (Isa. 44:6-8, 45:5; Col. 2:9; Eph. 4:5–6)',
  },
  {
    title: 'Sin and Salvation',
    body: 'Everyone has sinned and is in need of salvation. Salvation comes by grace through faith based on the atoning sacrifice of Jesus Christ (Psa. 51:5; Rom. 3:23-25; 6:23; Eph. 2:8-9).',
  },
  {
    title: 'The Gospel',
    body: 'The Gospel is the good news that Jesus died for our sins on the cross, was buried in the tomb, and rose again on the third day. We express our belief in the gospel through our obedience. We obey the gospel and apply it to our lives by repenting of our sins (death to sin), being baptized in water in the name of Jesus Christ for the removal of our sins (burial), and receiving the gift of the Holy Ghost (resurrection). This threefold experience is the consistent pattern of conversion in the early church (1 Cor. 15:1-4; 2 Thes. 1:8; 1 Pet. 4:17; Mark 1:15; Acts 15:7; Rom. 6:3-4; Acts 2:4, 37-39; 8:9-17; 10:1-48; 19:1-7).',
  },
  {
    title: 'Christian Living',
    body: 'As Christians we are to love God and love others. We are to worship God joyfully and seek to live a life that is pleasing to Him both inwardly and outwardly—in our thoughts, words, lifestyle, and actions. The Scripture describes our bodies as the temples (or dwelling places) of the Holy Ghost. We are empowered to live a life pleasing to God through the Holy Ghost. We believe that the supernatural gifts of the Spirit are for the church today and are available to all Spirit-filled believers. (Mark 12:28-31; 1 Cor. 6:19, 12:8-10; 2 Cor. 7:1; Rom. 8:13-14; Gal. 5:19-26; Heb. 12:14)',
  },
  {
    title: 'Healing',
    body: 'We believe that healing is available today. As the ancient prophet Isaiah prophesied, our Savior received the stripes on His back for our healing. We believe that divine healing is available to every believer by the laying on of hands and the prayer of faith. The Scripture declares: "And the prayer of faith shall save the sick, and the Lord shall raise him up; and if he have committed sins, they shall be forgiven him." (James 5:15) In every service, there is an opportunity for those who are ill to come forward and be anointed with oil and prayed over by our pastoral team. Prayer cloths are available also. (Psalm 103:2-3; Isaiah 53:5; Matthew 8:16-17; Mark 16:17-18; Acts 8:6-7; James 5:14-16; Acts 19:11–12; 1 Corinthians 12:9, 28)',
  },
  {
    title: 'Heaven',
    body: 'We believe that a person\'s eternal destination is determined by their response to the Lord Jesus Christ. Heaven is a literal place reserved for those who have obeyed the Gospel message and are living a holy life. (Matt. 5:3, 12, 20; 6:20, 19:21, 25:34; John 14:1–3, 17:24; 2 Cor. 5:1; Heb. 11:16; 1 Peter 1:4; Heb. 9:27; Rev. 19:20)',
  },
  {
    title: 'Hell',
    body: 'Scripture describes Hell as "everlasting fire," "torment," "wrath," and "lake of fire." We believe Hell is a literal place of eternal separation from God. (Mat. 25:41; Mark 9:43-48; Heb. 9:27; Rev. 14:9-11, 20:12-15, 21:8)',
  },
  {
    title: 'The Future',
    body: 'The angels declared to the disciples that the same Jesus that ascended to Heaven is the same one who will come back to earth. We believe that Jesus Christ is coming again to catch away His church (the Rapture or Second Coming of Jesus Christ). We believe that the "dead in Christ" will be resurrected first, and then those who are alive will be caught away. The righteous will inherit eternal life, and the unrighteous will be punished with eternal death. (Acts 1:11; 1 Thes. 4:16-17; Rev. 20:11-15)',
  },
];

export default function BeliefsPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-4">Our Foundation</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">What We Believe</h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
          Our faith is rooted in the Word of God and the foundational truths of
          Apostolic Pentecostal doctrine. Here is what we stand on.
        </p>
      </section>

      {/* Core statement */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <div className="gold-bar mx-auto mb-6" />
          <div className="card p-8 md:p-10">
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              We believe that Jesus is the name of the Father, the Son, and the Holy Ghost.{' '}
              <span className="text-slate-400 text-sm">(Mat. 28:19; John 5:43, 10:30, 12:45, 14:8–9; Phil. 2:9-11)</span>{' '}
              All the fullness of the godhead rests bodily in Jesus Christ.{' '}
              <span className="text-slate-400 text-sm">(Col. 2:9)</span>{' '}
              We believe salvation is a free gift to all who repent of their sins, are baptized in the name of the Lord Jesus Christ, and are filled with the Holy Ghost by the evidence of speaking in other tongues as the Spirit gives the utterance.{' '}
              <span className="text-slate-400 text-sm">(Acts 2:38, 4:12, 10:44–48; Eph. 2:8, 4:5)</span>{' '}
              We believe that we are chosen people, separated from the world; and that we should live a holy life both inwardly and outwardly.{' '}
              <span className="text-slate-400 text-sm">(1 Pet. 2:9; 2 Cor. 6:17-18)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs grid */}
      <section className="pb-20 bg-church-warm pt-10">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-6">
          {beliefs.map((b) => (
            <div key={b.title} className="card p-7">
              <h2 className="font-serif font-bold text-xl text-stone-900 mb-2 text-center">{b.title}</h2>
              <div className="gold-bar mx-auto mb-4" />
              <p className="text-stone-600 leading-relaxed text-sm">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What Does It Mean To Be Pentecostal ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              What Does It Mean To Be Pentecostal?
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8 md:p-10 mb-10">
            <p className="text-stone-700 leading-relaxed mb-4">
              We call ourselves Pentecostal because we have experienced the same miraculous
              conversion that the 120 followers — which included the mother of Jesus — experienced
              in the second chapter of Acts.
            </p>
            <p className="text-stone-700 leading-relaxed">
              According to the Bible (The Acts of the Apostles), the New Testament Church began
              on the Day of Pentecost, which was fifty days after the resurrection of Jesus Christ.
              When the crowd heard the noise, saw the commotion, and listened to the message, they
              asked the Apostles how to be saved. Peter, standing up with the other eleven apostles,
              preached this message:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Repentance */}
            <div className="card p-7 text-center">
              <div className="w-14 h-14 rounded-full bg-church-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">Repentance</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                We must repent (turn away from) of our sins. We do this by asking Jesus to forgive us.
              </p>
              <p className="text-church-purple text-xs font-semibold">Luke 24:47 · II Peter 3:9 · Acts 2:38</p>
            </div>

            {/* Baptism */}
            <div className="card p-7 text-center">
              <div className="w-14 h-14 rounded-full bg-church-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">Baptism</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                We must be water-baptized in the Name of Jesus Christ for the remission of our sins.
              </p>
              <p className="text-church-purple text-xs font-semibold">John 3:5 · Acts 2:38, 8:16, 10:48, 19:5</p>
            </div>

            {/* Spirit Infilling */}
            <div className="card p-7 text-center">
              <div className="w-14 h-14 rounded-full bg-church-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">Spirit Infilling</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                We are promised the gift of His Spirit with the evidence of speaking in other tongues.
              </p>
              <p className="text-church-purple text-xs font-semibold">John 7:37-39 · Acts 2:4, 2:38, 8:17-18, 10:44-47</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-dark text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Questions? We&apos;d Love to Talk.
          </h2>
          <p className="text-white/70 mb-8 text-lg leading-relaxed">
            Theology can be deep. We&apos;re here to walk through it with you — no question
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
