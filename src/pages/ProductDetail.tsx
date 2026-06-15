import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Download, Mail } from 'lucide-react';
import { getProductBySlug } from '../data/products';
import type { MachineProduct, GrinderProduct } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  if (!product || (product.category !== 'machine' && product.category !== 'grinder')) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-offwhite">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p className="font-dm text-[15px] text-nearblack/60">Product not found.</p>
          <Link to="/machines" className="font-dm text-[13px] uppercase tracking-[2px] text-salmon mt-6 inline-block">Back to Machines</Link>
        </div>
      </div>
    );
  }

  const p = product as MachineProduct | GrinderProduct;
  const categoryLabel = p.category === 'machine' ? 'Coffee Machines' : 'Grinders';
  const categoryPath = p.category === 'machine' ? '/machines' : '/grinders';

  const prevImg = () => setActiveImage((i) => (i - 1 + p.images.length) % p.images.length);
  const nextImg = () => setActiveImage((i) => (i + 1) % p.images.length);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero band */}
      <div className="bg-nearblack pt-24 pb-8 md:pt-28 md:pb-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <nav className="flex items-center gap-2 mb-6">
            <Link to="/" className="font-dm text-[11px] uppercase tracking-[2px] text-white/35 hover:text-white/70 transition-colors">Home</Link>
            <span className="text-white/20 text-[10px]">›</span>
            <Link to={categoryPath} className="font-dm text-[11px] uppercase tracking-[2px] text-white/35 hover:text-white/70 transition-colors">{categoryLabel}</Link>
            <span className="text-white/20 text-[10px]">›</span>
            <span className="font-dm text-[11px] uppercase tracking-[2px] text-salmon">{p.name}</span>
          </nav>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-2">{p.brand}</p>
              <h1 className="font-outfit font-bold text-[48px] md:text-[72px] text-white leading-none" style={{ letterSpacing: '-0.03em' }}>{p.name}</h1>
            </div>
            <Link
              to={categoryPath}
              className="hidden md:inline-flex items-center gap-2 border border-white/20 text-white/60 hover:text-white hover:border-white/50 font-dm text-[11px] uppercase tracking-[2px] px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              <ArrowLeft size={13} /> All {categoryLabel}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ─── IMAGE GALLERY ─── */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl bg-offwhite aspect-[4/3] mb-3 group">
                <img
                  key={activeImage}
                  src={p.images[activeImage]}
                  alt={p.name}
                  className="w-full h-full object-cover animate-fadeIn"
                />
                {/* Nav arrows */}
                <button
                  onClick={prevImg}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100 shadow-sm"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100 shadow-sm"
                >
                  <ArrowRight size={16} />
                </button>
                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-nearblack/60 backdrop-blur-sm text-white font-dm text-[11px] px-3 py-1 rounded-full">
                  {activeImage + 1} / {p.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {p.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-square overflow-hidden rounded-xl transition-all duration-300 ${i === activeImage ? 'ring-2 ring-salmon ring-offset-2' : 'opacity-55 hover:opacity-100'}`}
                    data-cursor-hover
                  >
                    <img src={img} alt={`${p.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ─── PRODUCT INFO ─── */}
          <div className="lg:col-span-5 space-y-8">
            {/* Type badge */}
            <div>
              <span className="inline-block bg-salmon/10 text-salmon font-dm text-[11px] uppercase tracking-[3px] px-4 py-2 rounded-full">
                {p.category === 'machine' ? 'Espresso Machine' : 'Grinder'} · {p.brand}
              </span>
            </div>

            {/* Specs */}
            <div>
              <h2 className="font-outfit font-semibold text-[16px] text-nearblack mb-4 flex items-center gap-3">
                <span className="w-5 h-[2px] bg-salmon inline-block" />
                Specifications
              </h2>
              <div className="rounded-2xl overflow-hidden border border-stone">
                {p.specs.map((spec, i) => (
                  <div key={spec.label} className={`flex items-baseline justify-between px-5 py-3.5 ${i % 2 === 0 ? 'bg-offwhite' : 'bg-white'}`}>
                    <span className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">{spec.label}</span>
                    <span className="font-dm text-[14px] text-nearblack text-right max-w-[55%] leading-[1.4]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-outfit font-semibold text-[16px] text-nearblack mb-4 flex items-center gap-3">
                <span className="w-5 h-[2px] bg-salmon inline-block" />
                Features
              </h2>
              <div className="space-y-4">
                {p.features.map((feat, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-offwhite border border-stone hover:border-salmon/30 transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-salmon flex-shrink-0 mt-2" />
                    <p className="font-dm text-[14px] text-nearblack/70 leading-[1.7]">{feat}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-3">
              <a
                href={`mailto:hello@coffeeconceptstore.com?subject=Enquiry: ${p.name}`}
                className="flex items-center justify-center gap-3 w-full bg-salmon text-white font-dm text-[12px] uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-nearblack transition-colors duration-300"
                data-cursor-hover
              >
                <Mail size={14} /> Request a Quote
              </a>
              <a
                href={p.catalogueUrl}
                className="flex items-center justify-center gap-3 w-full border border-nearblack/30 text-nearblack font-dm text-[12px] uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-nearblack hover:text-white hover:border-nearblack transition-all duration-300"
                data-cursor-hover
              >
                <Download size={14} /> Download Catalogue
              </a>
            </div>

            {/* Back link */}
            <Link
              to={categoryPath}
              className="inline-flex items-center gap-2 font-dm text-[12px] uppercase tracking-[2px] text-midtone hover:text-salmon transition-colors duration-300 pt-2"
            >
              <ArrowLeft size={13} /> All {categoryLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
