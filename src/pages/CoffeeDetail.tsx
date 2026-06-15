import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { kaphieCoffee } from '../data/products';

function getRoastColor(roastProfile: string): { color: string; colorName: string } {
  const lower = roastProfile.toLowerCase();
  if (lower.startsWith('light')) return { color: '#E8C98A', colorName: 'Light Roast' };
  if (lower.startsWith('medium-dark') || lower.startsWith('medium dark')) return { color: '#8C4A2F', colorName: 'Medium-Dark' };
  if (lower.startsWith('medium')) return { color: '#C07940', colorName: 'Medium Roast' };
  if (lower.startsWith('dark')) return { color: '#3D1F0E', colorName: 'Dark Roast' };
  return { color: '#C07940', colorName: 'Roast' };
}

export default function CoffeeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const coffee = kaphieCoffee.find((c) => c.slug === slug);

  if (!coffee) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-offwhite">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p className="font-dm text-[15px] text-nearblack/60">Product not found.</p>
          <Link to="/coffee" className="font-dm text-[13px] uppercase tracking-[2px] text-salmon mt-6 inline-block">Back to Coffee</Link>
        </div>
      </div>
    );
  }

  const { color, colorName } = getRoastColor(coffee.roastProfile);
  const isLight = color === '#E8C98A';
  const textOnColor = isLight ? '#1A1A1A' : '#F7F5F2';

  return (
    <div className="bg-white min-h-screen">
      {/* Hero band — matches ProductDetail and TeaDetail */}
      <div className="bg-nearblack pt-24 pb-8 md:pt-28 md:pb-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <nav className="flex items-center gap-2 mb-6">
            <Link to="/" className="font-dm text-[11px] uppercase tracking-[2px] text-white/35 hover:text-white/70 transition-colors">Home</Link>
            <span className="text-white/20 text-[10px]">›</span>
            <Link to="/coffee" className="font-dm text-[11px] uppercase tracking-[2px] text-white/35 hover:text-white/70 transition-colors">Coffee</Link>
            <span className="text-white/20 text-[10px]">›</span>
            <span className="font-dm text-[11px] uppercase tracking-[2px] text-salmon">{coffee.name}</span>
          </nav>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-2">Kaphie</p>
              <h1
                className="font-outfit font-bold text-[44px] md:text-[68px] text-white leading-none"
                style={{ letterSpacing: '-0.03em' }}
              >
                {coffee.name}
              </h1>
            </div>
            <Link
              to="/coffee"
              className="hidden md:inline-flex items-center gap-2 border border-white/20 text-white/60 hover:text-white hover:border-white/50 font-dm text-[11px] uppercase tracking-[2px] px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              <ArrowLeft size={13} /> All Coffees
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ─── ROAST COLOR SHOWCASE ─── */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              {/* Split-color hero panel */}
              <div className="relative overflow-hidden rounded-3xl" style={{ height: 560 }}>
                {/* White upper */}
                <div className="absolute inset-x-0 top-0 h-[55%] bg-offwhite" />
                {/* Roast color lower */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[48%] transition-colors duration-500"
                  style={{ backgroundColor: color }}
                />
                {/* Coffee origin photo centered at boundary */}
                <div className="absolute inset-0 flex items-center justify-center px-10">
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ height: '75%' }}>
                    <img
                      src={coffee.image}
                      alt={coffee.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Bottom gradient blend into roast color */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-2/5"
                      style={{ background: `linear-gradient(to bottom, transparent, ${color}cc)` }}
                    />
                  </div>
                </div>
                {/* Roast badge top-left */}
                <div className="absolute top-6 left-6 z-10">
                  <span
                    className="font-dm text-[11px] uppercase tracking-[3px] px-4 py-2 rounded-full"
                    style={{ backgroundColor: color, color: textOnColor }}
                  >
                    {colorName}
                  </span>
                </div>
                {/* Brand badge top-right */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="font-dm text-[11px] uppercase tracking-[2px] text-midtone bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    Kaphie
                  </span>
                </div>
              </div>

              {/* Roast color strip — all roasts */}
              <div className="mt-5 flex items-center gap-3 flex-wrap">
                <span className="font-dm text-[10px] uppercase tracking-[2px] text-midtone mr-1">Also available</span>
                {kaphieCoffee.map((c) => {
                  const { color: cColor, colorName: cName } = getRoastColor(c.roastProfile);
                  return (
                    <Link
                      key={c.slug}
                      to={`/coffee/${c.slug}`}
                      title={c.name}
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-125 ${c.slug === coffee.slug ? 'border-nearblack scale-125' : 'border-transparent'}`}
                      style={{ backgroundColor: cColor }}
                      aria-label={cName}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─── DETAILS ─── */}
          <div className="lg:col-span-5 space-y-8">
            {/* Roast badge */}
            <div>
              <span
                className="inline-block font-dm text-[11px] uppercase tracking-[3px] px-5 py-2 rounded-full"
                style={{ backgroundColor: color + '30', color: isLight ? '#8C4A2F' : color, border: `1px solid ${color}40` }}
              >
                {colorName} · {coffee.process}
              </span>
            </div>

            {/* Origin tagline */}
            <div>
              <p className="font-dm text-[15px] text-nearblack/65 leading-[1.7]">{coffee.origin}</p>
            </div>

            {/* Specs — zebra rows */}
            <div>
              <h2 className="font-outfit font-semibold text-[16px] text-nearblack mb-4 flex items-center gap-3">
                <span className="w-5 h-[2px] rounded-full inline-block" style={{ backgroundColor: color }} />
                Details
              </h2>
              <div className="rounded-2xl overflow-hidden border border-stone">
                {[
                  { label: 'Origin', value: coffee.origin },
                  { label: 'Roast Profile', value: coffee.roastProfile },
                  { label: 'Process', value: coffee.process },
                ].map((row, i) => (
                  <div key={row.label} className={`flex items-baseline justify-between px-5 py-3.5 ${i % 2 === 0 ? 'bg-offwhite' : 'bg-white'}`}>
                    <span className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">{row.label}</span>
                    <span className="font-dm text-[14px] text-nearblack text-right max-w-[55%] leading-[1.4]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasting notes */}
            <div>
              <h2 className="font-outfit font-semibold text-[16px] text-nearblack mb-4 flex items-center gap-3">
                <span className="w-5 h-[2px] rounded-full inline-block" style={{ backgroundColor: color }} />
                Tasting Notes
              </h2>
              <div className="flex flex-wrap gap-2">
                {coffee.tastingNotes.map((note, i) => (
                  <span
                    key={i}
                    className="font-dm text-[13px] px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: color + '25',
                      color: isLight ? '#8C4A2F' : color,
                      border: `1px solid ${color}50`,
                    }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="pt-2 space-y-3">
              <a
                href={`mailto:hello@coffeeconceptstore.com?subject=Enquiry: ${coffee.name}`}
                className="flex items-center justify-center gap-3 w-full font-dm text-[12px] uppercase tracking-[2px] px-8 py-4 rounded-full hover:opacity-80 transition-opacity"
                style={{ backgroundColor: color, color: textOnColor }}
                data-cursor-hover
              >
                Enquire Now →
              </a>
              <a
                href={`mailto:hello@coffeeconceptstore.com?subject=Wholesale: ${coffee.name}`}
                className="flex items-center justify-center gap-3 w-full border border-nearblack/25 text-nearblack font-dm text-[12px] uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-nearblack hover:text-white hover:border-nearblack transition-all duration-300"
                data-cursor-hover
              >
                Wholesale Enquiry
              </a>
            </div>

            <Link
              to="/coffee"
              className="inline-flex items-center gap-2 font-dm text-[12px] uppercase tracking-[2px] text-midtone hover:text-salmon transition-colors duration-300 pt-2"
            >
              <ArrowLeft size={13} /> All Coffees
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
