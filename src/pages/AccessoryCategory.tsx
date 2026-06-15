import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { accessories } from '../data/products';
import type { AccessoryProduct } from '../data/products';
import { formatPrice } from '../data/products';

const META: Record<string, { title: string; description: string; hero: string }> = {
  tampers: {
    title: 'Tampers & Distribution',
    description: 'Precision tamping tools and distribution aids for a level, consistent puck — the foundation of every good espresso.',
    hero: 'https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=1400&q=80',
  },
  cups: {
    title: 'Glass Cups & Vessels',
    description: 'Double-wall borosilicate glass for espresso, flat white, and filter — presenting your coffee the way it deserves to be seen.',
    hero: 'https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=1400&q=80',
  },
  scales: {
    title: 'Brewing Scales',
    description: 'Sub-gram precision scales with timers — because a gram off in the dose is a second off in the flavour.',
    hero: 'https://images.unsplash.com/photo-1504630050765-fc0ab5f7a7b3?w=1400&q=80',
  },
  'hand-grinders': {
    title: 'Hand Grinders',
    description: 'Portable burr grinders for travel, camping, or the purist who prefers manual control over every rotation.',
    hero: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=1400&q=80',
  },
};

const TYPE_MAP: Record<string, AccessoryProduct['accessoryType']> = {
  tampers: 'tamper',
  cups: 'cup',
  scales: 'scale',
  'hand-grinders': 'hand-grinder',
};

function ProductCard({ product }: { product: AccessoryProduct }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone hover:border-salmon/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(217,114,96,0.12)]">
      <div className="relative overflow-hidden aspect-square bg-offwhite">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-outfit text-[18px] font-semibold text-nearblack mb-2 leading-tight">{product.name}</h3>
        <p className="font-dm text-[13px] text-nearblack/60 leading-[1.6] mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-outfit text-[17px] font-semibold text-nearblack">{formatPrice(product.priceLKR, 'LKR')}</span>
          <a
            href={`mailto:hello@coffeeconceptstore.com?subject=Enquiry: ${product.name}`}
            className="inline-flex items-center gap-2 font-dm text-[12px] uppercase tracking-[2px] text-salmon hover:gap-3 transition-all duration-300"
          >
            Enquire <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AccessoryCategory() {
  const { pathname } = useLocation();
  const accessoryCategory = pathname.split('/').pop() ?? '';
  const meta = META[accessoryCategory];
  const type = TYPE_MAP[accessoryCategory];

  const filtered = accessories.filter((a) => a.accessoryType === type);

  if (!meta) {
    return (
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p className="font-dm text-[15px] text-nearblack/60">Category not found.</p>
          <Link to="/accessories/tampers" className="font-dm text-[13px] uppercase tracking-[2px] text-salmon mt-6 inline-block">Browse Accessories</Link>
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
          <div className="absolute inset-0 bg-nearblack/65" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">
          <Link to="/accessories/tampers" className="inline-flex items-center gap-2 font-dm text-[12px] uppercase tracking-[2px] text-white/60 hover:text-white transition-colors mb-8">
            ← All Accessories
          </Link>
          <h1 className="font-outfit text-[48px] md:text-[64px] font-700 text-white leading-[1.05] mb-4">{meta.title}</h1>
          <p className="font-dm text-[15px] text-white/70 max-w-[500px] leading-[1.7]">{meta.description}</p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((acc) => (
                <ProductCard key={acc.id} product={acc} />
              ))}
            </div>
          ) : (
            <p className="font-dm text-[15px] text-nearblack/60">No products in this category yet.</p>
          )}
        </div>
      </section>

      {/* Cross-links to other accessory categories */}
      <section className="bg-offwhite py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p className="font-dm text-[11px] uppercase tracking-[3px] text-midtone mb-6">Also explore</p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(META)
              .filter(([k]) => k !== accessoryCategory)
              .map(([k, v]) => (
                <Link
                  key={k}
                  to={`/accessories/${k}`}
                  className="font-dm text-[13px] px-5 py-2.5 rounded-full border border-stone bg-white hover:bg-salmon hover:text-white hover:border-salmon transition-all duration-300"
                >
                  {v.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
