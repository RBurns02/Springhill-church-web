import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Recent Messages | Springhill Pentecostal Church',
  description: 'Listen to recent sermons and messages from Springhill Pentecostal Church.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <p className="eyebrow text-church-gold mb-5">Listen &amp; Be Blessed</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight">Recent Messages</h1>
        <p className="text-white/50 text-lg max-w-lg mx-auto leading-relaxed">
          Can&apos;t make it in person? Catch up on recent services and sermons anytime, anywhere.
        </p>
      </section>

      {/* SoundCloud player */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <ScrollReveal className="mb-12 text-center">
            <div className="gold-bar mx-auto mb-6" />
            <h2 className="section-heading mb-3">Listen Online</h2>
            <p className="section-sub max-w-xl mx-auto">
              Our recent services are uploaded to SoundCloud. Press play and let the Word minister to you.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-hidden shadow-xl border border-stone-200">
              <iframe
                width="100%"
                height="600"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/spcwesson&color=%23C9A84C&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
                title="Springhill Pentecostal Church on SoundCloud"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-8 text-center">
            <a
              href="https://soundcloud.com/spcwesson"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-green inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M1.175 12.225c-.056 0-.094.037-.1.094l-.344 2.156.344 2.181c.006.06.044.094.1.094.05 0 .094-.037.1-.094l.394-2.181-.394-2.156c-.006-.057-.05-.094-.1-.094m1.79-.581c-.069 0-.119.05-.125.119l-.3 1.812.3 1.837c.006.069.056.119.125.119.069 0 .119-.05.125-.119l.344-1.837-.344-1.812c-.006-.069-.056-.119-.125-.119m1.8-.378c-.075 0-.131.056-.137.131l-.269 1.559.269 1.584c.006.075.063.131.137.131.075 0 .131-.056.138-.131l.306-1.584-.306-1.559c-.006-.075-.063-.131-.138-.131m1.8-.262c-.081 0-.144.063-.15.144l-.237 1.297.237 1.322c.006.081.069.144.15.144.081 0 .144-.063.15-.144l.269-1.322-.269-1.297c-.006-.081-.069-.144-.15-.144m1.8-.131c-.088 0-.156.069-.163.156l-.206 1.166.206 1.191c.006.088.075.156.163.156.088 0 .156-.069.163-.156l.231-1.191-.231-1.166c-.006-.088-.075-.156-.163-.156m1.8-.088c-.094 0-.169.075-.175.169l-.175 1.078.175 1.103c.006.094.081.169.175.169.094 0 .169-.075.175-.169l.2-1.103-.2-1.078c-.006-.094-.081-.169-.175-.169m1.8-.063c-.1 0-.181.081-.188.181l-.144.991.144 1.016c.006.1.088.181.188.181.1 0 .181-.081.188-.181l.163-1.016-.163-.991c-.006-.1-.088-.181-.188-.181m1.8-.044c-.106 0-.194.088-.2.194l-.113.903.113.928c.006.106.094.194.2.194.106 0 .194-.088.2-.194l.128-.928-.128-.903c-.006-.106-.094-.194-.2-.194m2.787-.731c-.056-.019-.113-.031-.172-.031-.3 0-.581.113-.794.3-.094-1.097-.997-1.953-2.106-1.953-.278 0-.544.056-.787.156-.094.038-.119.075-.119.113v7.256c0 .044.031.081.075.088h3.906c.591 0 1.069-.478 1.069-1.069V11.1c0-.272-.131-.519-.347-.666"/>
              </svg>
              View All on SoundCloud
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-20 bg-church-warm">
        <div className="max-w-4xl mx-auto px-5 grid md:grid-cols-3 gap-10 text-center">
          <ScrollReveal delay={0}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border border-stone-300 flex items-center justify-center text-stone-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-stone-900">Fresh Word</h3>
              <p className="text-sm text-stone-500 leading-relaxed">New messages uploaded regularly so you never miss a service.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border border-stone-300 flex items-center justify-center text-stone-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-stone-900">Listen Anywhere</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Stream on your phone, tablet, or computer — at home or on the go.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border border-stone-300 flex items-center justify-center text-stone-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-stone-900">Spirit-Filled Teaching</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Biblical messages rooted in the Apostolic faith, preached with fire.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-dark text-center">
        <div className="relative z-10 max-w-xl mx-auto px-5">
          <ScrollReveal>
            <div className="gold-bar mx-auto mb-7" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Join Us in Person</h2>
            <p className="text-white/55 leading-relaxed mb-10">
              Listening online is a great start — but there&apos;s nothing like being in the room. Come worship with us this Sunday.
            </p>
            <Link href="/prayer" className="btn-gold">Plan Your Visit</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
