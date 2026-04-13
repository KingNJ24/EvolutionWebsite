'use client';

import { useState } from 'react';
import { Menu, X, MessageCircle, Zap, Shield, Users, Dumbbell, Trophy, MapPin } from 'lucide-react';

/** India mobile; used for tel:, WhatsApp (wa.me), and display */
const PHONE_LOCAL = '9999876004';
const PHONE_E164 = `91${PHONE_LOCAL}`;
const PHONE_DISPLAY = `+91 ${PHONE_LOCAL.slice(0, 5)} ${PHONE_LOCAL.slice(5)}`;
const TEL_HREF = `tel:+${PHONE_E164}`;
const WHATSAPP_URL = `https://wa.me/${PHONE_E164}`;

const ADDRESS_LINE1 = 'Basement, B-9, B Block, Sector 50';
const ADDRESS_LINE2 = 'Noida, Uttar Pradesh 201301';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/GQ14pC1HDb43vteU6';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-RomMUYmDJJLu7vczRvoNj4ERqsHjCz.jpg" 
              alt="Evolution Combat Studio Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="font-bold text-xl hidden sm:inline">EVO</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-red-500 transition">About</button>
            <button onClick={() => scrollToSection('programs')} className="hover:text-red-500 transition">Programs</button>
            <button onClick={() => scrollToSection('why-us')} className="hover:text-red-500 transition">Why Us</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-red-500 transition">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-red-900/30 px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-red-500">About</button>
            <button onClick={() => scrollToSection('programs')} className="block w-full text-left py-2 hover:text-red-500">Programs</button>
            <button onClick={() => scrollToSection('why-us')} className="block w-full text-left py-2 hover:text-red-500">Why Us</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-red-500">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-40"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Join%20the%20Evolution%20%F0%9F%94%A5Learn%20how%20to%20%F0%9D%90%85%F0%9D%90%88%F0%9D%90%86%F0%9D%90%87%F0%9D%90%93%20%26%20get%20%F0%9D%90%85%F0%9D%90%88%F0%9D%90%93DM%20to%20book%20your%20slotFollow%20%40evolutionco-N2MmzkIFo0fdmZO2w3J0DMCcOFG2ra.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-RomMUYmDJJLu7vczRvoNj4ERqsHjCz.jpg" 
            alt="Evolution Combat Studio" 
            className="h-32 w-32 mx-auto mb-8 object-contain"
          />
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-white drop-shadow-lg">
            TRAIN MMA IN NOIDA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Boxing • Kickboxing • BJJ • Muay Thai • Self Defense
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
              Book Free Trial
            </button>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
            Build <span className="text-red-500">Strength</span>, <span className="text-red-500">Confidence</span> & <span className="text-red-500">Discipline</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/If%20you%20want%20to%20go%20fast%2C%20go%20alone.%20If%20you%20want%20to%20go%20far%2C%20go%20together.%20%F0%9F%92%AA%E2%9C%A8Here%E2%80%99s%20to%20the%20grind%2C%20th-my7XRC2kQmuuyGEBiEIRCGz45xYpRP.jpg"
              alt="Evolution Combat Studio Team"
              className="rounded-lg shadow-2xl"
            />
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                At Evolution Combat Studio, we believe fighting is more than just techniques—it&apos;s about transforming yourself. Whether you&apos;re a complete beginner or an aspiring fighter, our professional coaches will guide you through every step of your journey.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We offer real fight training with a beginner-friendly approach. Learn from certified coaches who are passionate about helping you become stronger, more confident, and disciplined in every aspect of life.
              </p>
              <div className="flex items-center gap-3 text-red-500">
                <Zap size={24} />
                <span className="text-xl font-bold">Join our growing family today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 bg-gradient-to-b from-black to-red-950/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            Our <span className="text-red-500">Programs</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: 'MMA', desc: 'Master mixed martial arts with comprehensive training' },
              { icon: Dumbbell, title: 'Boxing', desc: 'Learn footwork, combinations, and precision' },
              { icon: Shield, title: 'Kickboxing', desc: 'Powerful kicks and dynamic striking techniques' },
              { icon: Users, title: 'Brazilian Jiu-Jitsu', desc: 'Ground fighting and grappling excellence' },
              { icon: Zap, title: 'Muay Thai', desc: 'The art of eight limbs and clinch work' },
              { icon: Trophy, title: 'Kids Batch', desc: 'Fun, safe training for young fighters' },
            ].map((program, i) => {
              const Icon = program.icon;
              return (
                <div key={i} className="bg-gradient-to-br from-gray-900/50 to-red-900/20 rounded-xl p-8 border border-red-900/30 hover:border-red-500 transition group hover:shadow-xl hover:shadow-red-500/20">
                  <Icon className="text-red-500 mb-4 group-hover:scale-110 transition" size={32} />
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-400">{program.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            Why Choose <span className="text-red-500">Evolution</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Certified Coaches', desc: 'Professional trainers with years of experience' },
              { title: 'Self Defense Focus', desc: 'Learn practical techniques for real situations' },
              { title: 'Strength & Conditioning', desc: 'Build power, endurance, and athletic performance' },
              { title: 'Beginner Friendly', desc: 'No experience needed - we start from basics' },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-900/30 rounded-lg p-6 border border-red-900/20">
                <div className="text-red-500 font-black text-3xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery with Videos */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-red-950/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            In <span className="text-red-500">Action</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <video
              className="w-full h-64 md:h-80 rounded-xl object-cover border border-red-900/30"
              controls
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Open%20Mat%20every%20SundayJoin%20the%20Evolution%20%F0%9F%94%A5Learn%20how%20to%20%F0%9D%90%85%F0%9D%90%88%F0%9D%90%86%F0%9D%90%87%F0%9D%90%93%20%26%20get%20%F0%9D%90%85%F0%9D%90%88%F0%9D%90%93DM%20to%20book%20your%20sl-bdZluVrkQkuQH4NIznfEEMtkvXObDf.mp4" type="video/mp4" />
            </video>
            <video
              className="w-full h-64 md:h-80 rounded-xl object-cover border border-red-900/30"
              controls
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coach%20said%20%E2%80%9Cyou%20bet%E2%80%9D%20%F0%9F%98%A9DM%20us%20%E2%80%98TRIAL%E2%80%99%20to%20do%20a%20free%20trial%20now%21%F0%9F%93%B2_%EF%AC%81tness%20_mma%20_fun%20_mma%20_coach-xKNr4i7gr5uTjO4Jr5QurDKr3qdJlH.mp4" type="video/mp4" />
            </video>
            <video
              className="w-full h-64 md:h-80 rounded-xl object-cover border border-red-900/30"
              controls
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/We%20promise%20all%20the%20coaches%20aren%E2%80%99t%20this%20mean...%F0%9F%91%80DM%20us%20%E2%80%98TRIAL%E2%80%99%20to%20do%20a%20free%20trial%20now%21%F0%9F%93%B2_%EF%AC%81tness%20_-yMMBTS5xHTMTAYfeEcpr5DGJlgqucp.mp4" type="video/mp4" />
            </video>
            <video
              className="w-full h-64 md:h-80 rounded-xl object-cover border border-red-900/30"
              controls
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%92%AF%20MMA%20Fighter-%20Discipline-%20Hardwork%20-%20Sports%20-%20Motivation-3omFaGOH04S7vHRo3BuNre25IEfrQN.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            Student <span className="text-red-500">Stories</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Arjun Singh', role: 'MMA Fighter', text: 'Evolution Combat Studio completely transformed my fitness and fighting skills. Best decision ever!' },
              { name: 'Priya Sharma', role: 'Self Defense Student', text: 'The coaches are incredibly supportive and make training fun. I&apos;ve become much stronger and confident.' },
              { name: 'Rahul Patel', role: 'BJJ Student', text: 'Professional coaching, beginner-friendly environment, and amazing community. Highly recommend!' },
              { name: 'Neha Verma', role: 'Boxing Enthusiast', text: 'Outstanding facility and the best coaches in Noida. Worth every rupee spent!' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-900/40 rounded-xl p-6 border border-red-900/30">
                <p className="text-gray-300 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600/30 rounded-full flex items-center justify-center font-bold text-red-500">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-red-950/20 border-y border-red-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Start Your <span className="text-red-500">Training</span> Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Evolution Combat Studio and become the strongest version of yourself. First trial is completely free!
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
            Book Free Trial Now
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/40 rounded-xl p-8 text-center border border-red-900/30">
              <div className="text-red-500 text-4xl mb-4">📍</div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-400 leading-relaxed">
                {ADDRESS_LINE1}
                <br />
                {ADDRESS_LINE2}
              </p>
            </div>
            <div className="bg-gray-900/40 rounded-xl p-8 text-center border border-red-900/30">
              <div className="text-red-500 text-4xl mb-4">📱</div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <a
                href={TEL_HREF}
                className="text-gray-400 hover:text-red-500 transition font-medium"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="bg-gray-900/40 rounded-xl p-8 text-center border border-red-900/30">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="text-green-500 text-4xl mb-4">💬</div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-gray-400 hover:text-green-500 transition">Message us directly</p>
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-6">
              Find us on the <span className="text-red-500">map</span>
            </h3>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
            >
              <MapPin size={22} className="shrink-0" aria-hidden />
              Show on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-red-900/30 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-RomMUYmDJJLu7vczRvoNj4ERqsHjCz.jpg" 
                alt="EVO Logo" 
                className="h-8 w-8"
              />
              <span className="font-bold">EVOLUTION COMBAT STUDIO</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Evolution Combat Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
