import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { blueTrailTea } from '../data/products';

const PLACEHOLDER = '/images-removebg-preview.png';

export default function TeaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const tea = blueTrailTea.find((t) => t.slug === slug);
  const [imgIndex, setImgIndex] = useState(0);

  if (!tea) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-dm text-[15px] text-nearblack/60">Product not found.</p>
          <Link to="/tea" className="font-dm text-[13px] uppercase tracking-[2px] text-accent accent-underline mt-6 inline-block">Back to Tea</Link>
        </div>
      </div>
    );
  }

  const images = [PLACEHOLDER, PLACEHOLDER, PLACEHOLDER, PLACEHOLDER, PLACEHOLDER];
  const isLight = ['#F2F2F2', '#F2BFBF', '#F0D86A', '#F0A878', '#C8D57A', '#7ABCC8'].includes(tea.color);
  const textOnColor = isLight ? '#1A1A1A' : '#F7F5F2';

  const prev = () => setImgIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setImgIndex((i) => (i + 1) % images.length);

  const SplitBg = () => (
    <>
      <div className="absolute inset-x-0 top-0 h-1/2 bg-white" />
      <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ backgroundColor: tea.color }} />
    </>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: tea.color }}>
      <div className="grid md:grid-cols-2 min-h-screen">

        {/* Left — image gallery */}
        <div className="relative overflow-hidden bg-white" style={{ minHeight: '60vh' }}>
          <SplitBg />

          {/* Image centered at the color boundary */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src={images[imgIndex]}
              alt={`${tea.name} view ${imgIndex + 1}`}
              className="object-contain transition-all duration-500"
              style={{ width: '55%', height: '80%', objectFit: 'contain' }}
            />
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{ backgroundColor: i === imgIndex ? textOnColor : textOnColor + '50' }}
              />
            ))}
          </div>

          {/* Color name badge */}
          <div className="absolute top-28 left-8 z-20">
            <span
              className="font-dm text-[11px] uppercase tracking-[3px] px-4 py-2"
              style={{ backgroundColor: tea.color, color: textOnColor }}
            >
              {tea.colorName}
            </span>
          </div>
        </div>

        {/* Right — details, same split background */}
        <div className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
          <SplitBg />

          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-14 lg:px-20 py-24 md:py-32">
            <nav className="font-dm text-[12px] text-midtone mb-10 flex items-center gap-2">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span>&gt;</span>
              <Link to="/tea" className="hover:text-accent transition-colors">Tea</Link>
              <span>&gt;</span>
              <span className="text-nearblack/50">{tea.name}</span>
            </nav>

            <div className="h-[2px] w-10 mb-6" style={{ backgroundColor: tea.color }} />
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-midtone mb-4">Blue Trail</p>
            <h1 className="font-outfit text-[48px] md:text-[60px] font-bold text-nearblack leading-[1.0] mb-3">{tea.name}</h1>
            <p className="font-dm text-[14px] text-nearblack/60 mb-10 leading-[1.6]">{tea.blend}</p>

            <div className="mb-10 space-y-0">
              {[
                { label: 'Origin', value: tea.origin },
                { label: 'Steep Time', value: tea.steepTime },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-baseline py-4 border-b border-stone">
                  <span className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">{label}</span>
                  <span className="font-dm text-[15px] text-nearblack text-right">{value}</span>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <p className="font-dm text-[11px] uppercase tracking-[2px] text-midtone mb-4">Flavour Notes</p>
              <div className="flex flex-wrap gap-2">
                {tea.flavourNotes.map((note, i) => (
                  <span
                    key={i}
                    className="font-dm text-[13px] px-4 py-2"
                    style={{ backgroundColor: tea.color + '25', color: tea.color === '#F2F2F2' ? '#1A1A1A' : tea.color }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`mailto:hello@coffeeconceptstore.com?subject=Enquiry: ${tea.name}`}
              className="inline-flex items-center justify-center font-dm text-[12px] uppercase tracking-[2px] px-10 py-4 hover:opacity-80 transition-opacity self-start"
              style={{ backgroundColor: tea.color, color: textOnColor }}
            >
              Enquire Now &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
