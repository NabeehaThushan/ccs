import { useParams, Link } from 'react-router-dom';
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
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-dm text-[15px] text-nearblack/60">Product not found.</p>
          <Link to="/coffee" className="font-dm text-[13px] uppercase tracking-[2px] text-salmon mt-6 inline-block">Back to Coffee</Link>
        </div>
      </div>
    );
  }

  const { color, colorName } = getRoastColor(coffee.roastProfile);
  const isLight = color === '#E8C98A';
  const textOnColor = isLight ? '#1A1A1A' : '#F7F5F2';

  const SplitBg = () => (
    <>
      <div className="absolute inset-x-0 top-0 h-1/2 bg-white" />
      <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ backgroundColor: color }} />
    </>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: color }}>
      <div className="grid md:grid-cols-2 min-h-screen">

        {/* Left — coffee photo */}
        <div className="relative overflow-hidden bg-white" style={{ minHeight: '60vh' }}>
          <SplitBg />

          {/* Photo centered at the color boundary */}
          <div className="absolute inset-0 flex items-center justify-center z-10 p-8 md:p-12">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ height: '72%' }}>
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient bottom blend */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3"
                style={{ background: `linear-gradient(to bottom, transparent, ${color})` }}
              />
            </div>
          </div>

          {/* Roast badge */}
          <div className="absolute top-28 left-8 z-20">
            <span
              className="font-dm text-[11px] uppercase tracking-[3px] px-4 py-2 rounded-full"
              style={{ backgroundColor: color, color: textOnColor }}
            >
              {colorName}
            </span>
          </div>
        </div>

        {/* Right — details */}
        <div className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
          <SplitBg />

          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-14 lg:px-20 py-24 md:py-32">
            <nav className="font-dm text-[12px] text-midtone mb-10 flex items-center gap-2">
              <Link to="/" className="hover:text-salmon transition-colors">Home</Link>
              <span>›</span>
              <Link to="/coffee" className="hover:text-salmon transition-colors">Coffee</Link>
              <span>›</span>
              <span className="text-nearblack/50">{coffee.name}</span>
            </nav>

            <div className="h-[2px] w-10 mb-6 rounded-full" style={{ backgroundColor: color }} />
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-midtone mb-4">Kaphie</p>
            <h1 className="font-outfit text-[44px] md:text-[56px] font-bold text-nearblack leading-[1.0] mb-3" style={{ letterSpacing: '-0.03em' }}>{coffee.name}</h1>
            <p className="font-dm text-[14px] text-nearblack/60 mb-10 leading-[1.6]">{coffee.origin}</p>

            {/* Specs */}
            <div className="mb-10 space-y-0">
              {[
                { label: 'Origin', value: coffee.origin },
                { label: 'Roast Profile', value: coffee.roastProfile },
                { label: 'Process', value: coffee.process },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-baseline py-4 border-b border-stone">
                  <span className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">{label}</span>
                  <span className="font-dm text-[14px] text-nearblack text-right max-w-[55%] leading-[1.4]">{value}</span>
                </div>
              ))}
            </div>

            {/* Tasting notes */}
            <div className="mb-10">
              <p className="font-dm text-[11px] uppercase tracking-[2px] text-midtone mb-4">Tasting Notes</p>
              <div className="flex flex-wrap gap-2">
                {coffee.tastingNotes.map((note, i) => (
                  <span
                    key={i}
                    className="font-dm text-[13px] px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: color + '30',
                      color: isLight ? '#8C4A2F' : color,
                      border: `1px solid ${color}50`,
                    }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={`mailto:hello@coffeeconceptstore.com?subject=Enquiry: ${coffee.name}`}
              className="inline-flex items-center justify-center font-dm text-[12px] uppercase tracking-[2px] px-10 py-4 rounded-full hover:opacity-80 transition-opacity self-start"
              style={{ backgroundColor: color, color: textOnColor }}
            >
              Enquire Now →
            </a>

            {/* Back link */}
            <Link
              to="/coffee"
              className="font-dm text-[12px] uppercase tracking-[2px] text-midtone hover:text-salmon transition-colors mt-6 inline-flex items-center gap-2 self-start"
            >
              ← All Coffees
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
