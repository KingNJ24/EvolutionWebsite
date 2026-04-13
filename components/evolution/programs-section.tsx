import {
  Trophy,
  Dumbbell,
  Shield,
  Users,
  Zap,
  Baby,
} from 'lucide-react';

const programs = [
  {
    icon: Trophy,
    title: 'MMA',
    desc: 'Blend striking and grappling so you can train like a complete fighter—fitness and confidence in every session.',
  },
  {
    icon: Dumbbell,
    title: 'Boxing',
    desc: 'Sharp footwork, hand speed, and defense—high-energy rounds that torch calories and build mental toughness.',
  },
  {
    icon: Shield,
    title: 'Kickboxing',
    desc: 'Full-body striking with pads and drills—perfect if you want power, cardio, and stress relief in one class.',
  },
  {
    icon: Users,
    title: 'Brazilian Jiu-Jitsu',
    desc: 'Control, leverage, and submissions on the ground—ideal for self-defense and building patience under pressure.',
  },
  {
    icon: Zap,
    title: 'Muay Thai',
    desc: 'Clinch, elbows, knees, and kicks—the art of eight limbs for explosive conditioning and striking skill.',
  },
  {
    icon: Baby,
    title: 'Kids Batch',
    desc: 'Discipline, coordination, and confidence in a safe, fun environment—structured for young athletes.',
  },
] as const;

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="scroll-mt-24 bg-gradient-to-b from-black via-red-950/10 to-black px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-black tracking-tight md:text-5xl">
          Our <span className="text-red-500">Programs</span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-gray-400">
          Pick your path—every program is built for progress, not intimidation.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-br from-gray-900/60 to-red-950/20 p-8 transition duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-900/15"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-600/10 blur-2xl transition duration-500 group-hover:bg-red-600/20" />
              <Icon
                className="relative mb-5 text-red-500 transition duration-300 group-hover:scale-110 group-hover:text-red-400"
                size={36}
                strokeWidth={1.75}
              />
              <h3 className="relative mb-3 text-2xl font-bold text-white">{title}</h3>
              <p className="relative text-sm leading-relaxed text-gray-400 md:text-base">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
