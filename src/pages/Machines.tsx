import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    label: 'Commercial',
    path: '/machines/commercial',
    description: 'High-throughput espresso machines engineered for cafés, offices, and professional settings where consistency and speed are non-negotiable.',
    tag: 'High Volume',
    image: 'https://images.unsplash.com/photo-1442512515301-1f8b32323789?w=800&q=80',
  },
  {
    label: 'Multi-Use',
    path: '/machines/multi-use',
    description: 'Dual-boiler prosumer machines that move seamlessly between home use and light commercial duty — the sweet spot for serious enthusiasts.',
    tag: 'Prosumer',
    image: 'https://images.unsplash.com/photo-1510708287695-0b2a7037ef0d?w=800&q=80',
  },
  {
    label: 'Home',
    path: '/machines/home',
    description: 'Compact, beautifully engineered machines designed around the home barista — intuitive to operate, exceptional in the cup.',
    tag: 'Home Barista',
    image: 'https://images.unsplash.com/photo-1517256064527-9d164d946d65?w=800&q=80',
  },
];

export default function Machines() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-nearblack pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-4">Our Collection</p>
            <h1
              className="font-outfit font-bold text-white leading-[1.0] mb-6"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.03em' }}
            >
              Coffee Machines.
            </h1>
            <p className="font-dm text-[15px] text-white/55 max-w-[520px] leading-[1.75]">
              Every machine in our showroom has been chosen for thermal stability, build integrity, and the quality of shots it produces — day after day, year after year.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Salmon bar */}
      <div className="h-1.5 bg-salmon" />

      {/* Category cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-midtone mb-12">Select a category</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <ScrollReveal key={cat.label} delay={i * 80}>
                <Link
                  to={cat.path}
                  className="group block relative overflow-hidden rounded-3xl"
                  style={{ minHeight: 480 }}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nearblack/90 via-nearblack/30 to-transparent" />
                  <div className="absolute inset-0 bg-salmon/0 group-hover:bg-salmon/20 transition-all duration-500" />

                  <div className="relative z-10 flex flex-col justify-end h-full p-8" style={{ minHeight: 480 }}>
                    <span className="inline-block self-start font-dm text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded-full bg-salmon text-white mb-4">
                      {cat.tag}
                    </span>
                    <h2
                      className="font-outfit font-bold text-[42px] text-white leading-none mb-4"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {cat.label}
                    </h2>
                    <p className="font-dm text-[14px] text-white/65 leading-[1.7] mb-6">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-3 self-start font-dm text-[12px] uppercase tracking-[2px] bg-white text-nearblack px-6 py-3 rounded-full group-hover:bg-salmon group-hover:text-white transition-all duration-300">
                      Explore <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-offwhite py-14 md:py-16 border-t border-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-outfit text-[26px] font-semibold text-nearblack mb-2">Not sure which type?</h3>
            <p className="font-dm text-[14px] text-nearblack/60">Our team will help you find the right machine for your setup and volume.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-dm text-[12px] uppercase tracking-[2px] bg-salmon text-white px-8 py-4 rounded-full hover:bg-nearblack transition-colors duration-300 whitespace-nowrap"
          >
            Speak to Us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
