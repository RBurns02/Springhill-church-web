import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Give | Springhill Pentecostal Church',
  description: 'Give online to support the ministry of Springhill Pentecostal Church in Wesson, MS.',
};

// ─── Tithe.ly giving link ──────────────────────────────────────────────────────
// Your Tithe.ly giving page. Add your specific form ID to the URL:
//   https://give.tithe.ly/?formId=YOUR_FORM_ID
// Until then, this links to the Tithe.ly base URL.
const GIVE_URL = 'https://give.tithe.ly';

const verses = [
  {
    text: '"Bring ye all the tithes into the storehouse, that there may be meat in mine house."',
    ref:  'Malachi 3:10',
  },
  {
    text: '"Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."',
    ref:  '2 Corinthians 9:7',
  },
  {
    text: '"Honour the LORD with thy substance, and with the firstfruits of all thine increase."',
    ref:  'Proverbs 3:9',
  },
];

export default function GivePage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-hero-gradient py-20 text-white text-center">
        <p className="text-church-gold text-sm font-semibold tracking-widest uppercase mb-3">
          Generosity Changes Everything
        </p>
        <h1 className="font-serif text-5xl font-bold mb-4">Give</h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          Your giving fuels the mission of Springhill Pentecostal Church — in
          Wesson, MS and around the world. Every gift matters.
        </p>
      </section>

      {/* Why we give */}
      <section className="py-16 bg-church-cream">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <div className="gold-bar mx-auto mb-6" />
          <h2 className="section-heading mb-5">Why We Give</h2>
          <p className="section-sub">
            Giving is an act of worship and trust. When we tithe and give offerings, we
            acknowledge that everything we have belongs to God and that His Kingdom is
            worth investing in. Your generosity funds preaching, community outreach,
            youth programs, and ministry both here at home and beyond.
          </p>
        </div>
      </section>

      {/* Online giving CTA — main card */}
      <section className="py-16 bg-church-warm">
        <div className="max-w-3xl mx-auto px-5">
          <div className="card p-10 md:p-14 text-center ring-2 ring-church-purple">
            <div className="w-16 h-16 rounded-2xl bg-church-purple/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-church-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase bg-church-purple text-white px-3 py-1 rounded-full">
              Recommended
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 mt-5 mb-3">Give Online</h2>
            <p className="text-stone-500 max-w-md mx-auto mb-8 leading-relaxed">
              Give securely anytime using a debit card, credit card, or bank transfer
              through our Tithe.ly giving portal. Quick, safe, and paperless.
            </p>
            <a
              href={GIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Give Now via Tithe.ly
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-xs text-stone-400 mt-4">
              You&apos;ll be taken to our secure Tithe.ly giving page.
            </p>
          </div>

          {/* In-person and mail options */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="card p-6">
              <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">Give in Person</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Bring your tithe or offering to any Sunday service.
                Offering envelopes are available at the doors.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">Mail a Check</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Make checks payable to &ldquo;Springhill Pentecostal Church&rdquo;
                and mail to our address in Wesson, MS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture section */}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-serif text-2xl font-bold text-white text-center mb-10">
            What the Bible Says About Giving
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {verses.map((v) => (
              <div key={v.ref} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <svg className="w-8 h-8 text-church-gold mx-auto mb-4 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/80 text-sm leading-relaxed italic mb-4">{v.text}</p>
                <p className="text-church-gold text-sm font-semibold">{v.ref}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-14 bg-church-cream text-center">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="section-heading mb-4">Questions About Giving?</h2>
          <p className="section-sub mb-8">
            Our team is happy to help with questions about online giving, tax receipts,
            or designated gifts.
          </p>
          <Link href="/prayer" className="btn-primary">
            Contact the Church Office
          </Link>
        </div>
      </section>
    </>
  );
}
