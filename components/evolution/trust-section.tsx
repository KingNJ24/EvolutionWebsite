import { Users, Award, HeartHandshake } from 'lucide-react';

const items = [
  {
    icon: Users,
    stat: '100+',
    title: 'Students Trained',
    desc: 'Active members building strength and skill every week.',
  },
  {
    icon: Award,
    stat: 'Pro',
    title: 'Certified MMA Coach',
    desc: 'Learn from qualified coaches who live the sport.',
  },
  {
    icon: HeartHandshake,
    stat: 'All levels',
    title: 'Beginner Friendly',
    desc: 'No experience needed—technique and safety come first.',
  },
] as const;

export function TrustSection() {
  return (
    <section
      id="trust"
      className="scroll-mt-24 border-y border-red-900/25 bg-gradient-to-b from-zinc-950 to-black px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-black tracking-tight text-white md:text-4xl">
          Why students <span className="text-red-500">choose us</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          Real coaching, real community, real results—in the heart of Noida.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map(({ icon: Icon, stat, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-red-900/30 bg-gray-900/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-gray-900/60 hover:shadow-lg hover:shadow-red-950/20"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/15 text-red-500 transition duration-300 group-hover:scale-110 group-hover:bg-red-600/25">
                <Icon className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-red-400">
                {stat}
              </p>
              <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
