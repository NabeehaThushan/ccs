import { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { kaphieCoffee } from '../data/products';
import type { CoffeeProduct } from '../data/products';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CARD_W = 340;
const GAP = 20;
const STEP = CARD_W + GAP;
const SET_COUNT = kaphieCoffee.length;

const LOOP_ITEMS: CoffeeProduct[] = [
  ...kaphieCoffee,
  ...kaphieCoffee,
  ...kaphieCoffee,
];

function getRoastColor(roastProfile: string): { color: string; colorName: string } {
  const lower = roastProfile.toLowerCase();
  if (lower.startsWith('light')) return { color: '#E8C98A', colorName: 'Light Roast' };
  if (lower.startsWith('medium-dark') || lower.startsWith('medium dark')) return { color: '#8C4A2F', colorName: 'Medium-Dark' };
  if (lower.startsWith('medium')) return { color: '#C07940', colorName: 'Medium Roast' };
  if (lower.startsWith('dark')) return { color: '#3D1F0E', colorName: 'Dark Roast' };
  return { color: '#C07940', colorName: 'Roast' };
}

function CoffeeCard({ coffee }: { coffee: CoffeeProduct }) {
  const { color, colorName } = getRoastColor(coffee.roastProfile);

  return (
    <Link
      to={`/coffee/${coffee.slug}`}
      className="group block flex-shrink-0 focus:outline-none"
      style={{ width: CARD_W }}
    >
      {/* Image card — same split as Tea */}
      <div className="relative overflow-hidden rounded-2xl" style={{ height: 520 }}>
        {/* Upper white bg */}
        <div className="absolute inset-x-0 top-0 h-[55%] bg-white" />
        {/* Lower roast color */}
        <div className="absolute inset-x-0 bottom-0 h-[48%]" style={{ backgroundColor: color }} />
        {/* Coffee photo centered at boundary */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ height: 380 }}>
            <img
              src={coffee.image}
              alt={coffee.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Roast badge overlay */}
            <div
              className="absolute top-4 right-4 font-dm text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded-full"
              style={{ backgroundColor: color, color: color === '#E8C98A' ? '#1A1A1A' : '#F7F5F2' }}
            >
              {colorName}
            </div>
          </div>
        </div>
      </div>

      {/* Name row */}
      <div className="pt-4 pb-1">
        <div className="h-[2px] w-8 mb-3 rounded-full" style={{ backgroundColor: color }} />
        <p className="font-outfit text-[20px] font-semibold text-nearblack leading-tight group-hover:text-salmon transition-colors duration-300">{coffee.name}</p>
        <p className="font-dm text-[11px] uppercase tracking-[2px] text-midtone mt-1">{coffee.origin}</p>
      </div>
    </Link>
  );
}

export default function Coffee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = SET_COUNT * STEP;
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const minScroll = STEP;
    const maxScroll = SET_COUNT * 2 * STEP;
    if (el.scrollLeft < minScroll) {
      el.scrollLeft += SET_COUNT * STEP;
    } else if (el.scrollLeft >= maxScroll) {
      el.scrollLeft -= SET_COUNT * STEP;
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollBy = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? STEP * 2 : -STEP * 2, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-offwhite pt-28 md:pt-36 pb-12 md:pb-16 border-b border-stone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-midtone mb-6">Kaphie — Coffee Collection</p>
            <h1 className="font-outfit text-[56px] md:text-[80px] font-bold text-nearblack mb-4 leading-[1.0]">From Origin<br />to Cup.</h1>
            <p className="font-dm text-[15px] text-nearblack/55 max-w-[520px] leading-[1.65] mt-6">
              Kaphie sources single-origin coffees from the world's most respected growing regions. Every lot is chosen for its traceability, its processing integrity, and the story it tells in the cup.
            </p>
          </ScrollReveal>

          {/* Roast key */}
          <ScrollReveal delay={120} className="mt-10 flex flex-wrap gap-3">
            {[
              { color: '#E8C98A', label: 'Light Roast', text: '#1A1A1A' },
              { color: '#C07940', label: 'Medium Roast', text: '#F7F5F2' },
              { color: '#8C4A2F', label: 'Medium-Dark', text: '#F7F5F2' },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: r.color }} />
                <span className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">{r.label}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Carousel */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-nearblack/50">Kaphie — {kaphieCoffee.length} Origins</p>
          </ScrollReveal>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide pl-6 md:pl-10"
          style={{ gap: GAP, scrollSnapType: 'x mandatory' }}
        >
          {LOOP_ITEMS.map((coffee, i) => (
            <div key={`${coffee.id}-${i}`} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
              <CoffeeCard coffee={coffee} />
            </div>
          ))}
          <div style={{ flexShrink: 0, width: 24 }} />
        </div>

        {/* Arrows */}
        <button
          onClick={() => scrollBy('left')}
          className="absolute bottom-12 left-6 md:left-10 w-12 h-12 rounded-full border border-nearblack/30 bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:border-nearblack/60 transition-all duration-300 z-10"
        >
          <ArrowLeft className="w-5 h-5 text-nearblack" />
        </button>
        <button
          onClick={() => scrollBy('right')}
          className="absolute bottom-12 right-6 md:right-10 w-12 h-12 rounded-full border border-nearblack/30 bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:border-nearblack/60 transition-all duration-300 z-10"
        >
          <ArrowRight className="w-5 h-5 text-nearblack" />
        </button>
      </section>

      {/* Origin feature strip */}
      <section className="bg-nearblack py-14 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-4">Direct Trade</p>
            <p className="font-outfit font-semibold text-[24px] md:text-[32px] text-white leading-[1.3] max-w-[620px]">
              Every bean has a name, a farm, and a story. We don't sell anonymous coffee.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
