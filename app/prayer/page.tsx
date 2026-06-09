import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prayer & Contact | Springhill Pentecostal Church',
  description:
    'Submit a prayer request or get in touch with Springhill Pentecostal Church in Wesson, MS.',
};

// ─── Contact info — update these with your real details ───────────────────────
const contact = {
  city:        'Wesson, MS',
  phone:       '(123) 456-7890',          // replace with real number
  email:       'info@springhillpentecostal.com',  // replace with real email
  officeHours: 'Monday – Friday · 9:00 AM – 4:00 PM',
};

const services = [
  { day: 'Sunday',    label: 'Morning Service',      prayer: '9:30 AM',  service: '10:00 AM' },
  { day: 'Sunday',    label: 'Evening Service',       prayer: '5:30 PM',  service: '6:00 PM'  },
  { day: 'Monday',    label: 'Prayer Meeting',        prayer: null,       service: '7:00 PM'  },
  { day: 'Wednesday', label: 'Bible Study & Prayer',  prayer: '7:00 PM',  service: '7:30 PM'  },
];

export default function PrayerPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-hero-gradient py-20 text-white text-center">
        <p className="text-church-gold text-sm font-semibold tracking-widest uppercase mb-3">
          We&apos;re Here For You
        </p>
        <h1 className="font-serif text-5xl font-bold mb-4">Prayer &amp; Contact</h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          Submit a prayer request, plan a visit, or just say hello.
          We&apos;d love to hear from you.
        </p>
      </section>

      <section className="py-16 bg-church-warm">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-12">

          {/* ── Form ───────────────────────────────────────────────────────── */}
          <div>
            <div className="gold-bar mb-5" />
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-2">
              Send a Message
            </h2>
            <p className="text-stone-500 mb-7 leading-relaxed">
              Prayer request, general question, or planning a visit — fill out the
              form below and we&apos;ll get back to you within one business day.
            </p>

            {/*
              Formspree setup:
              1. Go to https://formspree.io — create a free account
              2. Create a new form → copy the endpoint URL
              3. Replace YOUR_FORMSPREE_ENDPOINT below (looks like: https://formspree.io/f/xyzabcde)
            */}
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"
              method="POST"
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    id="firstName" name="firstName" type="text" required placeholder="John"
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-church-purple/40 focus:border-church-purple transition"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    id="lastName" name="lastName" type="text" placeholder="Smith"
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-church-purple/40 focus:border-church-purple transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email" name="email" type="email" required placeholder="john@example.com"
                  className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-church-purple/40 focus:border-church-purple transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-1.5">
                  Phone <span className="text-stone-400 font-normal">(optional)</span>
                </label>
                <input
                  id="phone" name="phone" type="tel" placeholder="(123) 456-7890"
                  className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-church-purple/40 focus:border-church-purple transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-1.5">
                  Subject
                </label>
                <select
                  id="subject" name="subject" required
                  className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-church-purple/40 focus:border-church-purple transition"
                >
                  <option value="">Select a subject…</option>
                  <option value="Prayer Request">Prayer Request</option>
                  <option value="Plan a Visit">Plan a Visit</option>
                  <option value="General Question">General Question</option>
                  <option value="Volunteer">Volunteer / Get Involved</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  placeholder="Share your prayer request or question here…"
                  className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-church-purple/40 focus:border-church-purple transition resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input id="private" name="private" type="checkbox" className="mt-1 w-4 h-4 accent-church-purple" />
                <label htmlFor="private" className="text-sm text-stone-600 leading-relaxed">
                  Keep my prayer request private (shared only with our prayer team)
                </label>
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
              </button>

              <p className="text-xs text-stone-400 text-center">
                We respect your privacy. Your information will never be shared or sold.
              </p>
            </form>
          </div>

          {/* ── Contact sidebar ─────────────────────────────────────────────── */}
          <div className="space-y-6">

            {/* Contact details */}
            <div className="card p-7">
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-5">Church Office</h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                    label: 'Location',
                    value: contact.city,
                    href: undefined,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    label: 'Phone',
                    value: contact.phone,
                    href: `tel:${contact.phone.replace(/\D/g, '')}`,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    label: 'Email',
                    value: contact.email,
                    href: `mailto:${contact.email}`,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                    label: 'Office Hours',
                    value: contact.officeHours,
                    href: undefined,
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-church-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-church-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-stone-700 text-sm hover:text-church-purple transition-colors break-all">{item.value}</a>
                      ) : (
                        <p className="text-stone-700 text-sm">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service times */}
            <div className="card p-7">
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-1">Service Times</h3>
              <p className="text-xs text-church-gold font-semibold mb-5">
                1st Sunday of every month — Friends &amp; Family Service at 2:00 PM
              </p>
              <ul className="divide-y divide-stone-100">
                {services.map((s) => (
                  <li key={s.label} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{s.label}</p>
                      <p className="text-stone-400 text-xs">{s.day}{s.prayer ? ` · Prayer ${s.prayer}` : ''}</p>
                    </div>
                    <span className="text-church-purple font-bold text-sm">{s.service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-stone-200 h-44 flex items-center justify-center">
              {/*
                Google Maps embed:
                1. Go to maps.google.com → search your church address
                2. Click Share → Embed a map → copy the <iframe> src URL
                3. Replace this div with:
                   <iframe src="YOUR_EMBED_URL" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              */}
              <div className="text-center text-stone-400 px-4">
                <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-sm font-medium">Add Google Maps embed</p>
                <p className="text-xs mt-1">See code comment above</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
