import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    label: 'Tampers',
    path: '/accessories/tampers',
    description: 'Precision tamping tools and distribution aids for a level, consistent puck — the foundation of every good espresso.',
    tag: 'Puck Prep',
    image: 'https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=800&q=80',
  },
  {
    label: 'Glass Cups',
    path: '/accessories/cups',
    description: 'Double-wall borosilicate glass for espresso, flat white, and filter — presenting your coffee the way it deserves.',
    tag: 'Vessels',
    image: 'https://images.unsplash.com/photo-1572726729207-a78b9a5eb9ce?w=800&q=80',
  },
  {
    label: 'Scales',
    path: '/accessories/scales',
    description: 'Sub-gram precision scales with timers — because a gram off in the dose is a second off in the flavour.',
    tag: 'Precision',
    image: 'https://images.unsplash.com/photo-1504630050765-fc0ab5f7a7b3?w=800&q=80',
  },
  {
    label: 'Hand Grinders',
    path: '/accessories/hand-grinders',
    description: 'Portable burr grinders for travel or the purist who prefers manual control over every rotation.',
    tag: 'Portable',
    image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80',
  },
];

export default function Accessories() {
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
              Accessories.
            </h1>
            <p className="font-dm text-[15px] text-white/55 max-w-[520px] leading-[1.75]">
              Every tool chosen for the way it disappears into your workflow — and the difference it makes when it's absent.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CATEGORIES.map((cat, i) => (
              <ScrollReveal key={cat.label} delay={i * 60}>
                <Link
                  to={cat.path}
                  className="group block relative overflow-hidden rounded-3xl"
                  style={{ minHeight: 380 }}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nearblack/90 via-nearblack/30 to-transparent" />
                  <div className="absolute inset-0 bg-salmon/0 group-hover:bg-salmon/20 transition-all duration-500" />

                  <div className="relative z-10 flex flex-col justify-end h-full p-7 md:p-9" style={{ minHeight: 380 }}>
                    <span className="inline-block self-start font-dm text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded-full bg-salmon text-white mb-3">
                      {cat.tag}
                    </span>
                    <h2
                      className="font-outfit font-bold text-[34px] text-white leading-none mb-3"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {cat.label}
                    </h2>
                    <p className="font-dm text-[13px] text-white/60 leading-[1.7] mb-5 max-w-[340px]">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-3 self-start font-dm text-[12px] uppercase tracking-[2px] bg-white text-nearblack px-5 py-2.5 rounded-full group-hover:bg-salmon group-hover:text-white transition-all duration-300">
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
            <h3 className="font-outfit text-[26px] font-semibold text-nearblack mb-2">Need a recommendation?</h3>
            <p className="font-dm text-[14px] text-nearblack/60">We'll suggest the right accessories for your setup.</p>
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
