import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-16 bg-white text-black">
      <p className="text-xs tracking-[0.3em] uppercase text-gray-400">Error 404</p>
      <h1 className="mt-4 text-4xl md:text-5xl font-serif leading-tight">
        The page you&apos;re looking for has slipped away.
      </h1>
      <p className="mt-4 max-w-xl text-sm md:text-base text-gray-500 font-serif leading-relaxed">
        It may have been renamed, archived, or never existed. Let&apos;s head back to the calm center of the site.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-black px-6 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white"
      >
        Return home
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}
