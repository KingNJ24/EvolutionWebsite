import { Search, MessageCircle, CalendarCheck } from 'lucide-react';

const points = [
  {
    icon: Search,
    title: 'Google visibility',
    body: 'Your academy shows up when people search for training nearby—so curious athletes find Evolution before they scroll past.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp inquiries',
    body: 'One tap from the site to chat—questions turn into conversations, and conversations turn into mat time.',
  },
  {
    icon: CalendarCheck,
    title: 'Easy trial booking',
    body: 'Clear “free trial” calls-to-action remove friction so more newcomers actually walk through the door.',
  },
] as const;

export function BusinessValueSection() {
  return (
    <section className="border-t border-red-900/25 bg-zinc-950 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-black text-white md:text-4xl">
          How this helps you get{' '}
          <span className="text-red-500">more students</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          Your digital front door should work as hard as your coaches. Here’s how this site supports growth.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-black/50 p-6 transition duration-300 hover:border-red-500/35 hover:bg-black/70"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/20 text-red-400">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
