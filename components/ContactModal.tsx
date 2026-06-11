'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('_type', 'contact');

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
      {/* Email card trigger */}
      <button className="card p-8 text-center group cursor-pointer w-full h-full flex flex-col items-center justify-center" onClick={() => setOpen(true)}>
        <div className="w-12 h-12 border border-stone-200 flex items-center justify-center mx-auto mb-5 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="eyebrow text-stone-400 mb-3">Email</p>
        <p className="font-serif font-semibold text-stone-900 mb-2">Pastor Tommy Lee</p>
        <span className="text-stone-500 text-sm group-hover:text-church-gold transition-colors">
          Send a Message
        </span>
      </button>

      {/* Modal overlay — rendered in a portal so fixed positioning works */}
      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
          onClick={(e) => { if (e.target === e.currentTarget) { setOpen(false); setStatus('idle'); } }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="bg-white w-full max-w-lg shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-stone-100 flex-shrink-0">
              <div>
                <p className="eyebrow text-stone-400 mb-1">Email</p>
                <h2 id="contact-modal-title" className="font-serif text-xl font-bold text-stone-900">Contact Pastor Tommy Lee</h2>
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
                  <p className="font-serif text-lg font-semibold text-stone-900 mb-2">Message Sent</p>
                  <p className="text-stone-500 text-sm">
                    Thank you for reaching out. Pastor Tommy Lee will get back to you soon.
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
                  action="https://formspree.io/f/mbdezdwj"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold tracking-[0.12em] uppercase text-stone-600 mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name" name="name" type="text" required placeholder="John Smith"
                      className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-church-gold focus:border-church-gold transition text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold tracking-[0.12em] uppercase text-stone-600 mb-2">
                      Your Email
                    </label>
                    <input
                      id="contact-email" name="email" type="email" required placeholder="john@example.com"
                      className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-church-gold focus:border-church-gold transition text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold tracking-[0.12em] uppercase text-stone-600 mb-2">
                      Subject
                    </label>
                    <input
                      id="contact-subject" name="subject" type="text" placeholder="How can we help?"
                      className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-church-gold focus:border-church-gold transition text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold tracking-[0.12em] uppercase text-stone-600 mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message" name="message" required rows={5}
                      placeholder="Write your message here…"
                      className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-church-gold focus:border-church-gold transition resize-none text-sm"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
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
