import { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { blueTrailTea } from '../data/products';
import type { TeaProduct } from '../data/products';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CARD_W = 340;
const GAP = 20;
const STEP = CARD_W + GAP;
const SET_COUNT = blueTrailTea.length;

const LOOP_ITEMS: TeaProduct[] = [
  ...blueTrailTea,
  ...blueTrailTea,
  ...blueTrailTea,
];

function TeaCard({ tea }: { tea: TeaProduct }) {
  return (
    <Link
      to={`/tea/${tea.slug}`}
      className="group block flex-shrink-0 focus:outline-none"
      style={{ width: CARD_W }}
    >
      {/* Split-color image card */}
      <div className="relative overflow-hidden rounded-2xl" style={{ height: 520 }}>
        <div className="absolute inset-x-0 top-0 h-[55%] bg-white" />
        <div className="absolute inset-x-0 bottom-0 h-[48%]" style={{ backgroundColor: tea.color }} />
        <div className="absolute inset-0 flex items-end justify-center" style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 0 }}>
          <img
            src="/images-removebg-preview.png"
            alt={tea.name}
            className="w-full object-contain transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2"
            style={{ height: 490, objectPosition: 'bottom' }}
          />
        </div>
        {/* Color badge overlay */}
        <div className="absolute top-4 left-4">
          <span
            className="font-dm text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: tea.color,
              color: ['#F2F2F2', '#F2BFBF', '#F0D86A', '#F0A878', '#C8D57A', '#7ABCC8'].includes(tea.color) ? '#1A1A1A' : '#F7F5F2',
            }}
          >
            {tea.colorName}
          </span>
        </div>
      </div>

      {/* Name row */}
      <div className="pt-4 pb-1">
        <div className="h-[2px] w-8 mb-3 rounded-full" style={{ backgroundColor: tea.color }} />
        <p className="font-outfit text-[20px] font-semibold text-nearblack leading-tight group-hover:text-salmon transition-colors duration-300">{tea.name}</p>
        <p className="font-dm text-[11px] uppercase tracking-[2px] text-midtone mt-1">{tea.blend}</p>
      </div>
    </Link>
  );
}

export default function Tea() {
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
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-midtone mb-6">Blue Trail — Tea Collection</p>
            <h1 className="font-outfit text-[56px] md:text-[80px] font-bold text-nearblack mb-4 leading-[1.0]">Still. Steeped.<br />Considered.</h1>
            <p className="font-dm text-[15px] text-nearblack/55 max-w-[520px] leading-[1.65] mt-6">
              Blue Trail curates teas with the same rigour applied to wine. Each blend is a meditation on terroir, timing, and the restraint to let the leaf speak for itself.
            </p>
          </ScrollReveal>

          {/* Blend color key */}
          <ScrollReveal delay={120} className="mt-10 flex flex-wrap gap-3">
            {blueTrailTea.map((t) => (
              <Link
                key={t.slug}
                to={`/tea/${t.slug}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone hover:border-midtone transition-colors duration-200"
              >
                <div className="w-3 h-3 rounded-full flex-shrink-0 border border-black/10" style={{ backgroundColor: t.color }} />
                <span className="font-dm text-[11px] uppercase tracking-[1.5px] text-midtone hover:text-nearblack transition-colors">{t.colorName}</span>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Carousel */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-nearblack/50">Blue Trail — {blueTrailTea.length} Blends</p>
          </ScrollReveal>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide pl-6 md:pl-10"
          style={{ gap: GAP, scrollSnapType: 'x mandatory' }}
        >
          {LOOP_ITEMS.map((tea, i) => (
            <div key={`${tea.id}-${i}`} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
              <TeaCard tea={tea} />
            </div>
          ))}
          <div style={{ flexShrink: 0, width: 24 }} />
        </div>

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

      {/* Footer strip */}
      <section className="bg-nearblack py-14 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-4">Single Origin · Ethically Sourced</p>
            <p className="font-outfit font-semibold text-[24px] md:text-[32px] text-white leading-[1.3] max-w-[600px]">
              Every blend is chosen for the story it tells when steeped. Nothing more, nothing less.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
