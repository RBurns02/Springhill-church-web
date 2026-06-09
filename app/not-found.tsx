import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white px-5">
      <div className="text-center max-w-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-transparent.png"
          alt="Springhill Pentecostal Church"
          className="h-20 w-auto mx-auto mb-8 opacity-20"
        />
        <p className="text-7xl font-serif font-bold text-slate-100 mb-2 leading-none">404</p>
        <h1 className="font-serif text-2xl font-bold text-slate-900 mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Looks like this page has moved on. Let&apos;s get you back to familiar ground.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/prayer" className="btn-outline-green">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
