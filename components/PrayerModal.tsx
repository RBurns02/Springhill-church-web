'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function PrayerModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* Prayer request card trigger */}
      <button className="card p-8 text-center group cursor-pointer w-full h-full flex flex-col items-center justify-center" onClick={() => setOpen(true)}>
        <div className="w-12 h-12 border border-stone-200 flex items-center justify-center mx-auto mb-5 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <p className="eyebrow text-stone-400 mb-3">Prayer</p>
        <p className="font-serif font-semibold text-stone-900 mb-2">Prayer Requests</p>
        <span className="text-stone-500 text-sm group-hover:text-church-gold transition-colors">
          Send a Request
        </span>
      </button>

      {/* Modal */}
      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
          onClick={(e) => { if (e.target === e.currentTarget) { setOpen(false); setStatus('idle'); } }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="prayer-modal-title"
            className="bg-white w-full max-w-lg shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-stone-100 flex-shrink-0">
              <div>
                <p className="eyebrow text-stone-400 mb-1">Prayer</p>
                <h2 id="prayer-modal-title" className="font-serif text-xl font-bold text-stone-900">Send a Prayer Request</h2>
              </div>
              <button
                onClick={() => { setOpen(false); setStatus('idle'); }}
                className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-600 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-7 overflow-y-auto">
              {status === 'sent' ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 border border-church-gold flex items-center justify-center mx-auto mb-5 text-church-gold">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-serif text-lg font-semibold text-stone-900 mb-2">Request Received</p>
                  <p className="text-stone-500 text-sm">
                    Our prayer team will lift your request before the Lord. You are not alone.
                  </p>
                  <button
                    onClick={() => { setOpen(false); setStatus('idle'); }}
                    className="mt-6 btn-primary"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="prayer-name" className="block text-xs font-semibold tracking-[0.12em] uppercase text-stone-600 mb-2">
                      Your Name <span className="text-stone-400 normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      id="prayer-name" name="name" type="text" placeholder="John Smith"
                      className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-church-gold focus:border-church-gold transition text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="prayer-email" className="block text-xs font-semibold tracking-[0.12em] uppercase text-stone-600 mb-2">
                      Email <span className="text-stone-400 normal-case tracking-normal">(optional — if you&apos;d like a reply)</span>
                    </label>
                    <input
                      id="prayer-email" name="email" type="email" placeholder="john@example.com"
                      className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-church-gold focus:border-church-gold transition text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="prayer-request" className="block text-xs font-semibold tracking-[0.12em] uppercase text-stone-600 mb-2">
                      Prayer Request
                    </label>
                    <textarea
                      id="prayer-request" name="request" required rows={5}
                      placeholder="Share your prayer request here…"
                      className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-church-gold focus:border-church-gold transition resize-none text-sm"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input id="prayer-private" name="private" type="checkbox" className="mt-1 w-4 h-4 accent-church-gold" />
                    <label htmlFor="prayer-private" className="text-sm text-stone-600 leading-relaxed">
                      Keep my request private (shared only with our prayer team)
                    </label>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Submit Prayer Request'}
                  </button>

                  <p className="text-xs text-stone-400 text-center">
                    We respect your privacy. Your information will never be shared or sold.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
