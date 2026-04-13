import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikram Malhotra',
    role: 'Working professional',
    text: 'I joined for fitness and stayed for the energy. Coaches push you without ego—best decision I made this year in Noida.',
  },
  {
    name: 'Ananya Mehta',
    role: 'Kickboxing & self defense',
    text: 'Felt welcome from day one. Classes are structured, safe, and I finally have a routine I actually look forward to.',
  },
  {
    name: 'Rohan Tyagi',
    role: 'MMA hobbyist',
    text: 'Solid technique, no fluff. If you want real training and a serious community, this is the place.',
  },
] as const;

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-black px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-black md:text-5xl">
          Student <span className="text-red-500">Stories</span>
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-gray-400">
          Real people. Real progress. See what members say after training with us.
        </p>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-2xl border border-red-900/35 bg-gray-900/50 p-8 transition duration-300 hover:border-red-500/40 hover:bg-gray-900/70"
            >
              <Quote
                className="mb-4 h-10 w-10 text-red-500/80"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="mb-6 flex-1 text-gray-300 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-red-900/25 pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600/25 text-sm font-bold text-red-400">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
