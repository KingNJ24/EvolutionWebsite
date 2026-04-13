'use client';

import Image from 'next/image';
import { MessageCircle, Zap, MapPin } from 'lucide-react';
import { SiteHeader } from '@/components/evolution/site-header';
import { FloatingWhatsApp } from '@/components/evolution/floating-whatsapp';
import { TrustSection } from '@/components/evolution/trust-section';
import { ProgramsSection } from '@/components/evolution/programs-section';
import { TestimonialsSection } from '@/components/evolution/testimonials-section';
import { FinalCtaSection } from '@/components/evolution/final-cta-section';
import { BusinessValueSection } from '@/components/evolution/business-value-section';
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  TEL_HREF,
  PHONE_DISPLAY,
  WHATSAPP_URL_JOIN,
  WHATSAPP_URL_TRIAL,
  GOOGLE_MAPS_URL,
  LOGO_URL,
  HERO_VIDEO_SRC,
  ABOUT_IMAGE_URL,
} from '@/lib/evolution/constants';

const VIDEO_SOURCES = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Open%20Mat%20every%20SundayJoin%20the%20Evolution%20%F0%9F%94%A5Learn%20how%20to%20%F0%9D%90%85%F0%9D%90%88%F0%9D%90%86%F0%9D%90%87%F0%9D%90%93%20%26%20get%20%F0%9D%90%85%F0%9D%90%88%F0%9D%90%93DM%20to%20book%20your%20sl-bdZluVrkQkuQH4NIznfEEMtkvXObDf.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coach%20said%20%E2%80%9Cyou%20bet%E2%80%9D%20%F0%9F%98%A9DM%20us%20%E2%80%98TRIAL%E2%80%99%20to%20do%20a%20free%20trial%20now%21%F0%9F%93%B2_%EF%AC%81tness%20_mma%20_fun%20_mma%20_coach-xKNr4i7gr5uTjO4Jr5QurDKr3qdJlH.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/We%20promise%20all%20the%20coaches%20aren%E2%80%99t%20this%20mean...%F0%9F%91%80DM%20us%20%E2%80%98TRIAL%E2%80%99%20to%20do%20a%20free%20trial%20now%21%F0%9F%93%B2_%EF%AC%81tness%20_-yMMBTS5xHTMTAYfeEcpr5DGJlgqucp.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%92%AF%20MMA%20Fighter-%20Discipline-%20Hardwork%20-%20Sports%20-%20Motivation-3omFaGOH04S7vHRo3BuNre25IEfrQN.mp4',
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <FloatingWhatsApp />

      <section
        id="hero"
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-40"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-16 pt-24 text-center sm:pb-20 sm:pt-28">
          <Image
            src={LOGO_URL}
            alt="Evolution Combat Studio"
            width={128}
            height={128}
            className="mx-auto mb-6 h-24 w-24 object-contain sm:mb-8 sm:h-32 sm:w-32"
            priority
          />
          <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Body &amp; Learn Real MMA in Noida
          </h1>
          <p className="mx-auto mb-2 max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl">
            Join 50+ students training daily | Boxing, Kickboxing, BJJ, MMA
          </p>
          <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-amber-400/95">
            Limited slots available
          </p>
          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href={WHATSAPP_URL_TRIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-900/35 transition duration-300 hover:scale-[1.02] hover:bg-red-700 hover:shadow-xl"
            >
              🔥 Book Free Trial
            </a>
            <a
              href={WHATSAPP_URL_JOIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white transition duration-300 hover:scale-[1.02] hover:bg-[#20BD5A]"
            >
              <MessageCircle size={22} strokeWidth={2} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 bg-black px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-4xl font-black md:text-5xl">
            Build <span className="text-red-500">Strength</span>,{' '}
            <span className="text-red-500">Confidence</span> &amp;{' '}
            <span className="text-red-500">Discipline</span>
          </h2>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14">
            <div className="relative h-[340px] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/50 sm:h-[400px] md:h-[480px]">
              <Image
                src={ABOUT_IMAGE_URL}
                alt="Evolution Combat Studio team training together in Noida"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                At Evolution Combat Studio, fighting is more than technique—it&apos;s
                transformation. Whether you want the{' '}
                <strong className="font-semibold text-white">
                  best MMA training in Noida
                </strong>
                , structured{' '}
                <strong className="font-semibold text-white">
                  kickboxing classes in Noida
                </strong>
                , or practical{' '}
                <strong className="font-semibold text-white">
                  self defense training in Noida
                </strong>
                , our coaches meet you where you are and build from there.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                We offer real fight training with a beginner-friendly pace—so you
                get fitter, sharper, and more confident without guesswork.
              </p>
              <div className="flex items-center gap-3 text-red-500">
                <Zap size={24} className="shrink-0" />
                <span className="text-xl font-bold">
                  Join our growing family today
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <ProgramsSection />

      <section
        id="why-us"
        className="scroll-mt-24 bg-black px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-4xl font-black md:text-5xl">
            Why Choose <span className="text-red-500">Evolution</span>
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-gray-400">
            Everything you need to train smart and stay consistent.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {[
              {
                title: 'Certified Coaches',
                desc: 'Professional trainers with years of experience in striking and grappling.',
              },
              {
                title: 'Self Defense Focus',
                desc: 'Techniques that work under pressure—not just pad work for show.',
              },
              {
                title: 'Strength & Conditioning',
                desc: 'Build power and endurance that carries over to sport and daily life.',
              },
              {
                title: 'Beginner Friendly',
                desc: 'No experience needed; fundamentals and safety come first, always.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group flex gap-4 rounded-2xl border border-red-900/25 bg-gray-900/30 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:bg-gray-900/50 md:p-8"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/20 text-lg font-black text-red-500 transition group-hover:bg-red-600/30">
                  ✓
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black via-red-950/10 to-black px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl font-black md:text-5xl">
            In <span className="text-red-500">Action</span>
          </h2>
          <p className="mx-auto mb-14 max-w-lg text-center text-gray-400">
            See the energy on the mats—real rounds, real coaching.
          </p>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {VIDEO_SOURCES.map((src) => (
              <video
                key={src}
                className="h-64 w-full rounded-2xl border border-red-900/30 object-cover shadow-lg transition duration-300 hover:border-red-500/40 md:h-80"
                controls
                playsInline
                preload="metadata"
              >
                <source src={src} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FinalCtaSection />

      <section
        id="contact"
        className="scroll-mt-24 bg-black px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-14 text-center text-4xl font-black md:text-5xl">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-2xl border border-red-900/30 bg-gray-900/40 p-8 text-center transition duration-300 hover:border-red-500/35">
              <div className="mb-4 text-4xl" aria-hidden>
                📍
              </div>
              <h3 className="mb-2 text-lg font-bold">Location</h3>
              <p className="leading-relaxed text-gray-400">
                {ADDRESS_LINE1}
                <br />
                {ADDRESS_LINE2}
              </p>
            </div>
            <div className="rounded-2xl border border-red-900/30 bg-gray-900/40 p-8 text-center transition duration-300 hover:border-red-500/35">
              <div className="mb-4 text-4xl" aria-hidden>
                📱
              </div>
              <h3 className="mb-2 text-lg font-bold">Phone</h3>
              <a
                href={TEL_HREF}
                className="font-medium text-gray-400 transition hover:text-red-500"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="rounded-2xl border border-red-900/30 bg-gray-900/40 p-8 text-center transition duration-300 hover:border-red-500/35">
              <a
                href={WHATSAPP_URL_JOIN}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="mb-4 text-4xl" aria-hidden>
                  💬
                </div>
                <h3 className="mb-2 text-lg font-bold">WhatsApp</h3>
                <p className="text-gray-400 transition hover:text-green-500">
                  Message us directly
                </p>
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center text-center">
            <h3 className="mb-6 text-2xl font-bold">
              Find us on the <span className="text-red-500">map</span>
            </h3>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white transition duration-300 hover:scale-[1.02] hover:bg-red-700"
            >
              <MapPin size={22} className="shrink-0" aria-hidden />
              Show on Google Maps
            </a>
          </div>
        </div>
      </section>

      <BusinessValueSection />

      <footer className="border-t border-red-900/30 bg-black/90 px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="EVO Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="font-bold tracking-wide">
              EVOLUTION COMBAT STUDIO
            </span>
          </div>
          <p className="text-center text-sm text-gray-400 md:text-right">
            © {new Date().getFullYear()} Evolution Combat Studio. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
