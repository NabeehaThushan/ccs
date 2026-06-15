import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { allGrinders } from '../data/products';
import type { GrinderProduct } from '../data/products';

const META: Record<string, { title: string; subtitle: string; description: string; hero: string }> = {
  'on-demand': {
    title: 'On Demand Grinders',
    subtitle: 'Always fresh. Always consistent.',
    description: 'Hopper-fed grinders built for continuous use — ideal for cafés and home setups where speed and consistency are both required.',
    hero: 'https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=1400&q=80',
  },
  'single-dose': {
    title: 'Single Dose Grinders',
    subtitle: 'One shot. Dialled in.',
    description: 'Grind exactly what you need, when you need it. Single-dose precision for baristas who switch between beans and demand total control.',
    hero: 'https://images.unsplash.com/photo-1516962393444-4e6e0f6f4e28?w=1400&q=80',
  },
};

function ProductCard({ product }: { product: GrinderProduct }) {
  return (
    <Link
      to={`/grinders/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-stone hover:border-salmon/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(217,114,96,0.12)]"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-offwhite">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5 md:p-6">
        <p className="font-dm text-[11px] uppercase tracking-[3px] text-midtone mb-2">{product.brand}</p>
        <h3 className="font-outfit text-[20px] font-semibold text-nearblack mb-3 leading-tight">{product.name}</h3>
        <p className="font-dm text-[13px] text-nearblack/60 leading-[1.6] mb-4 line-clamp-2">{product.features[0]}</p>
        <span className="inline-flex items-center gap-2 font-dm text-[12px] uppercase tracking-[2px] text-salmon group-hover:gap-3 transition-all duration-300">
          View Details <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

export default function GrinderCategory() {
  const { pathname } = useLocation();
  const cat = pathname.split('/').pop() as 'on-demand' | 'single-dose';
  const meta = META[cat ?? ''];

  const filtered = allGrinders.filter((g) => g.grinderType === cat);
  const brands = [...new Set(filtered.map((g) => g.brand))];

  if (!meta) {
    return (
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p className="font-dm text-[15px] text-nearblack/60">Category not found.</p>
          <Link to="/grinders/on-demand" className="font-dm text-[13px] uppercase tracking-[2px] text-salmon mt-6 inline-block">Browse Grinders</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={meta.hero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-nearblack/60" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">
          <Link to="/grinders/on-demand" className="inline-flex items-center gap-2 font-dm text-[12px] uppercase tracking-[2px] text-white/60 hover:text-white transition-colors mb-8">
            ← All Grinders
          </Link>
          <h1 className="font-outfit text-[48px] md:text-[64px] font-bold text-white leading-[1.05] mb-4">{meta.title}</h1>
          <p className="font-dm text-[15px] text-white/70 max-w-[500px] leading-[1.7]">{meta.description}</p>
        </div>
      </section>

      {/* Products by brand */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {brands.map((brand) => {
            const brandGrinders = filtered.filter((g) => g.brand === brand);
            return (
              <div key={brand} className="mb-16 md:mb-24">
                <div className="mb-8 md:mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[3px] bg-salmon rounded-full" />
                    <span className="font-dm text-[11px] uppercase tracking-[3px] text-salmon">Brand</span>
                  </div>
                  <div className="flex items-baseline gap-4 pb-4 border-b border-stone">
                    <h2 className="font-outfit text-[36px] md:text-[48px] font-semibold text-nearblack">{brand}</h2>
                    <span className="font-dm text-[13px] text-midtone">{brandGrinders.length} model{brandGrinders.length !== 1 ? 's' : ''}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brandGrinders.map((grinder) => (
                    <ProductCard key={grinder.id} product={grinder} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-offwhite py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-outfit text-[28px] font-semibold text-nearblack mb-2">Not sure which grinder?</h3>
            <p className="font-dm text-[14px] text-nearblack/60">We'll help you match the right grinder to your brewing style and machine.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-dm text-[12px] uppercase tracking-[2px] bg-salmon text-white px-8 py-4 rounded-full hover:bg-nearblack transition-colors duration-300 whitespace-nowrap"
          >
            Get in touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
