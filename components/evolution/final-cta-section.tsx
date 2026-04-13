import { WHATSAPP_URL_TRIAL } from '@/lib/evolution/constants';

export function FinalCtaSection() {
  return (
    <section className="border-y border-red-900/35 bg-gradient-to-r from-red-950/30 via-black to-red-950/30 px-4 py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-5 text-4xl font-black tracking-tight text-white md:text-5xl">
          Start Your Training Today
        </h2>
        <p className="mb-10 text-lg text-gray-300 md:text-xl">
          Book a free trial and experience real training
        </p>
        <a
          href={WHATSAPP_URL_TRIAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-red-600 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-red-900/30 transition duration-300 hover:scale-[1.02] hover:bg-red-700 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
        >
          Book Free Trial
        </a>
      </div>
    </section>
  );
}
