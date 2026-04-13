export const PHONE_LOCAL = '9999876004';
export const PHONE_E164 = `91${PHONE_LOCAL}`;
export const PHONE_DISPLAY = `+91 ${PHONE_LOCAL.slice(0, 5)} ${PHONE_LOCAL.slice(5)}`;
export const TEL_HREF = `tel:+${PHONE_E164}`;

export const WHATSAPP_BASE = `https://wa.me/${PHONE_E164}`;

export const WHATSAPP_MESSAGE_JOIN =
  'Hi, I want to join Evolution Combat Studio. Can you share details?';

export const WHATSAPP_MESSAGE_TRIAL =
  "Hi, I'd like to book a free trial at Evolution Combat Studio. Please share available slots.";

export function whatsappHref(message: string): string {
  const params = new URLSearchParams({ text: message });
  return `${WHATSAPP_BASE}?${params.toString()}`;
}

export const WHATSAPP_URL_JOIN = whatsappHref(WHATSAPP_MESSAGE_JOIN);
export const WHATSAPP_URL_TRIAL = whatsappHref(WHATSAPP_MESSAGE_TRIAL);

export const ADDRESS_LINE1 = 'Basement, B-9, B Block, Sector 50';
export const ADDRESS_LINE2 = 'Noida, Uttar Pradesh 201301';

export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/GQ14pC1HDb43vteU6';

export const LOGO_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-RomMUYmDJJLu7vczRvoNj4ERqsHjCz.jpg';

export const HERO_VIDEO_SRC =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Join%20the%20Evolution%20%F0%9F%94%A5Learn%20how%20to%20%F0%9D%90%85%F0%9D%90%88%F0%9D%90%86%F0%9D%90%87%F0%9D%90%93%20%26%20get%20%F0%9D%90%85%F0%9D%90%88%F0%9D%90%93DM%20to%20book%20your%20slotFollow%20%40evolutionco-N2MmzkIFo0fdmZO2w3J0DMCcOFG2ra.mp4';

export const ABOUT_IMAGE_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/If%20you%20want%20to%20go%20fast%2C%20go%20alone.%20If%20you%20want%20to%20go%20far%2C%20go%20together.%20%F0%9F%92%AA%E2%9C%A8Here%E2%80%99s%20to%20the%20grind%2C%20th-my7XRC2kQmuuyGEBiEIRCGz45xYpRP.jpg';
