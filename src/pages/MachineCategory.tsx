import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { allMachines } from '../data/products';
import type { MachineProduct } from '../data/products';

const META: Record<string, { title: string; subtitle: string; description: string; hero: string }> = {
  commercial: {
    title: 'Commercial Machines',
    subtitle: 'Built for volume. Calibrated for quality.',
    description: 'High-throughput espresso machines engineered for cafés, offices, and professional settings where consistency and speed are non-negotiable.',
    hero: 'https://images.unsplash.com/photo-1442512515301-1f8b32323789?w=1400&q=80',
  },
  'multi-use': {
    title: 'Multi-Use Machines',
    subtitle: 'Versatility without compromise.',
    description: 'Dual-boiler prosumer machines that move seamlessly between home use and light commercial duty — the sweet spot for serious enthusiasts.',
    hero: 'https://images.unsplash.com/photo-1510708287695-0b2a7037ef0d?w=1400&q=80',
  },
  home: {
    title: 'Home Machines',
    subtitle: 'Precision for the everyday ritual.',
    description: 'Compact, beautifully engineered machines designed around the home barista — intuitive to operate, exceptional in the cup.',
    hero: 'https://images.unsplash.com/photo-1517256064527-9d164d946d65?w=1400&q=80',
  },
};

function ProductCard({ product }: { product: MachineProduct }) {
  return (
    <Link
      to={`/machines/${product.slug}`}
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

export default function MachineCategory() {
  const { pathname } = useLocation();
  const cat = pathname.split('/').pop() as 'commercial' | 'multi-use' | 'home';
  const meta = META[cat ?? ''];

  const filtered = allMachines.filter((m) => m.machineType === cat);

  const brands = [...new Set(filtered.map((m) => m.brand))];

  if (!meta) {
    return (
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p className="font-dm text-[15px] text-nearblack/60">Category not found.</p>
          <Link to="/machines/home" className="font-dm text-[13px] uppercase tracking-[2px] text-salmon mt-6 inline-block">Browse Machines</Link>
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
          <Link to="/machines/home" className="inline-flex items-center gap-2 font-dm text-[12px] uppercase tracking-[2px] text-white/60 hover:text-white transition-colors mb-8">
            ← All Machines
          </Link>
          <h1 className="font-outfit text-[48px] md:text-[64px] font-bold text-white leading-[1.05] mb-4">{meta.title}</h1>
          <p className="font-dm text-[15px] text-white/70 max-w-[500px] leading-[1.7]">{meta.description}</p>
        </div>
      </section>

      {/* Products by brand */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {brands.map((brand) => {
            const brandMachines = filtered.filter((m) => m.brand === brand);
            return (
              <div key={brand} className="mb-16 md:mb-24">
                <div className="mb-8 md:mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[3px] bg-salmon rounded-full" />
                    <span className="font-dm text-[11px] uppercase tracking-[3px] text-salmon">Brand</span>
                  </div>
                  <div className="flex items-baseline gap-4 pb-4 border-b border-stone">
                    <h2 className="font-outfit text-[36px] md:text-[48px] font-semibold text-nearblack">{brand}</h2>
                    <span className="font-dm text-[13px] text-midtone">{brandMachines.length} model{brandMachines.length !== 1 ? 's' : ''}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brandMachines.map((machine) => (
                    <ProductCard key={machine.id} product={machine} />
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
            <h3 className="font-outfit text-[28px] font-semibold text-nearblack mb-2">Need help choosing?</h3>
            <p className="font-dm text-[14px] text-nearblack/60">Our team is happy to recommend the right machine for your needs.</p>
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
