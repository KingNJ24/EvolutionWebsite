'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '@/lib/evolution/constants';

const links = [
  { id: 'about', label: 'About' },
  { id: 'trust', label: 'Trust' },
  { id: 'programs', label: 'Programs' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'testimonials', label: 'Stories' },
  { id: 'contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-red-900/30 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 rounded-lg outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label="Evolution Combat Studio home"
        >
          <Image
            src={LOGO_URL}
            alt="Evolution Combat Studio Logo"
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            priority
          />
          <span className="hidden text-xl font-bold sm:inline">EVO</span>
        </button>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8 lg:text-base">
          {links.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="text-gray-200 transition hover:text-red-500"
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-red-900/30 bg-black/98 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="w-full rounded-lg py-3 text-left text-gray-200 transition hover:bg-red-950/30 hover:text-red-400"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
