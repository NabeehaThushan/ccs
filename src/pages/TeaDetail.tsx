import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blueTrailTea } from '../data/products';

const LIGHT_COLORS = ['#F2F2F2', '#F2BFBF', '#F0D86A', '#F0A878', '#C8D57A', '#7ABCC8'];

export default function TeaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const tea = blueTrailTea.find((t) => t.slug === slug);

  if (!tea) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-offwhite">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p className="font-dm text-[15px] text-nearblack/60">Product not found.</p>
          <Link to="/tea" className="font-dm text-[13px] uppercase tracking-[2px] text-salmon mt-6 inline-block">Back to Tea</Link>
        </div>
      </div>
    );
  }

  const isLight = LIGHT_COLORS.includes(tea.color);
  const textOnColor = isLight ? '#1A1A1A' : '#F7F5F2';

  return (
    <div className="bg-white min-h-screen">
      {/* Hero band — like ProductDetail */}
      <div className="bg-nearblack pt-24 pb-8 md:pt-28 md:pb-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <nav className="flex items-center gap-2 mb-6">
            <Link to="/" className="font-dm text-[11px] uppercase tracking-[2px] text-white/35 hover:text-white/70 transition-colors">Home</Link>
            <span className="text-white/20 text-[10px]">›</span>
            <Link to="/tea" className="font-dm text-[11px] uppercase tracking-[2px] text-white/35 hover:text-white/70 transition-colors">Tea</Link>
            <span className="text-white/20 text-[10px]">›</span>
            <span className="font-dm text-[11px] uppercase tracking-[2px] text-salmon">{tea.name}</span>
          </nav>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-2">Blue Trail</p>
              <h1
                className="font-outfit font-bold text-[44px] md:text-[68px] text-white leading-none"
                style={{ letterSpacing: '-0.03em' }}
              >
                {tea.name}
              </h1>
            </div>
            <Link
              to="/tea"
              className="hidden md:inline-flex items-center gap-2 border border-white/20 text-white/60 hover:text-white hover:border-white/50 font-dm text-[11px] uppercase tracking-[2px] px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              <ArrowLeft size={13} /> All Teas
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ─── COLOR SHOWCASE ─── */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              {/* Split-color hero panel */}
              <div className="relative overflow-hidden rounded-3xl" style={{ height: 560 }}>
                {/* White upper */}
                <div className="absolute inset-x-0 top-0 h-[55%] bg-offwhite" />
                {/* Tea color lower */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[48%] transition-colors duration-500"
                  style={{ backgroundColor: tea.color }}
                />
                {/* Tea product image floating at boundary */}
                <div className="absolute inset-0 flex items-end justify-center px-12 pb-0">
                  <img
                    src="/images-removebg-preview.png"
                    alt={tea.name}
                    className="w-full object-contain"
                    style={{ height: 530, objectPosition: 'bottom' }}
                  />
                </div>
                {/* Color name badge top-left */}
                <div className="absolute top-6 left-6 z-10">
                  <span
                    className="font-dm text-[11px] uppercase tracking-[3px] px-4 py-2 rounded-full"
                    style={{ backgroundColor: tea.color, color: textOnColor }}
                  >
                    {tea.colorName}
                  </span>
                </div>
                {/* Blend badge top-right */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="font-dm text-[11px] uppercase tracking-[2px] text-midtone bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    Blue Trail
                  </span>
                </div>
              </div>

              {/* Color swatch strip — all blends */}
              <div className="mt-5 flex items-center gap-2 flex-wrap">
                <span className="font-dm text-[10px] uppercase tracking-[2px] text-midtone mr-2">All blends</span>
                {blueTrailTea.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/tea/${t.slug}`}
                    title={t.name}
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-125 ${t.slug === tea.slug ? 'border-nearblack scale-125' : 'border-transparent'}`}
                    style={{ backgroundColor: t.color }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ─── DETAILS ─── */}
          <div className="lg:col-span-5 space-y-8">
            {/* Color + brand badge */}
            <div>
              <span
                className="inline-block font-dm text-[11px] uppercase tracking-[3px] px-5 py-2 rounded-full"
                style={{ backgroundColor: tea.color + '30', color: isLight ? '#5A5A52' : tea.color, border: `1px solid ${tea.color}40` }}
              >
                {tea.colorName} · {tea.blend.split(' ').slice(0, 3).join(' ')}
              </span>
            </div>

            {/* Blend description */}
            <div>
              <p className="font-dm text-[15px] text-nearblack/65 leading-[1.7]">{tea.blend}</p>
            </div>

            {/* Specs — zebra rows like ProductDetail */}
            <div>
              <h2 className="font-outfit font-semibold text-[16px] text-nearblack mb-4 flex items-center gap-3">
                <span className="w-5 h-[2px] rounded-full inline-block" style={{ backgroundColor: tea.color }} />
                Details
              </h2>
              <div className="rounded-2xl overflow-hidden border border-stone">
                {[
                  { label: 'Origin', value: tea.origin },
                  { label: 'Blend', value: tea.blend },
                  { label: 'Steep Time', value: tea.steepTime },
                ].map((row, i) => (
                  <div key={row.label} className={`flex items-baseline justify-between px-5 py-3.5 ${i % 2 === 0 ? 'bg-offwhite' : 'bg-white'}`}>
                    <span className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">{row.label}</span>
                    <span className="font-dm text-[14px] text-nearblack text-right max-w-[55%] leading-[1.4]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flavour notes */}
            <div>
              <h2 className="font-outfit font-semibold text-[16px] text-nearblack mb-4 flex items-center gap-3">
                <span className="w-5 h-[2px] rounded-full inline-block" style={{ backgroundColor: tea.color }} />
                Flavour Notes
              </h2>
              <div className="flex flex-wrap gap-2">
                {tea.flavourNotes.map((note, i) => (
                  <span
                    key={i}
                    className="font-dm text-[13px] px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: tea.color + '25',
                      color: tea.color === '#F2F2F2' ? '#5A5A52' : tea.color,
                      border: `1px solid ${tea.color}50`,
                    }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 space-y-3">
              <a
                href={`mailto:hello@coffeeconceptstore.com?subject=Enquiry: ${tea.name}`}
                className="flex items-center justify-center gap-3 w-full font-dm text-[12px] uppercase tracking-[2px] px-8 py-4 rounded-full hover:opacity-80 transition-opacity"
                style={{ backgroundColor: tea.color, color: textOnColor }}
                data-cursor-hover
              >
                Enquire Now →
              </a>
              <a
                href={`mailto:hello@coffeeconceptstore.com?subject=Wholesale Enquiry: ${tea.name}`}
                className="flex items-center justify-center gap-3 w-full border border-nearblack/25 text-nearblack font-dm text-[12px] uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-nearblack hover:text-white hover:border-nearblack transition-all duration-300"
                data-cursor-hover
              >
                Wholesale Enquiry
              </a>
            </div>

            <Link
              to="/tea"
              className="inline-flex items-center gap-2 font-dm text-[12px] uppercase tracking-[2px] text-midtone hover:text-salmon transition-colors duration-300 pt-2"
            >
              <ArrowLeft size={13} /> All Teas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
