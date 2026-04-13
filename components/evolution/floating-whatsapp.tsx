'use client';

import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL_JOIN } from '@/lib/evolution/constants';

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL_JOIN}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition duration-300 hover:scale-110 hover:bg-[#20BD5A] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:bottom-8 md:right-8 md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2} />
    </a>
  );
}
