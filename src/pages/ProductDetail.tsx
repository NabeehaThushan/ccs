import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import type { MachineProduct, GrinderProduct } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  if (!product || (product.category !== 'machine' && product.category !== 'grinder')) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-dm text-[15px] text-nearblack/60">Product not found.</p>
          <Link to="/machines" className="font-dm text-[13px] uppercase tracking-[2px] text-accent accent-underline mt-6 inline-block">Back to Machines</Link>
        </div>
      </div>
    );
  }

  const p = product as MachineProduct | GrinderProduct;
  const categoryLabel = p.category === 'machine' ? 'Coffee Machines' : 'Grinders';
  const categoryPath = p.category === 'machine' ? '/machines' : '/grinders';

  return (
    <div className="bg-offwhite pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <nav className="font-dm text-[12px] text-midtone mb-8 md:mb-12 flex items-center gap-2">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-1">&gt;</span>
          <Link to={categoryPath} className="hover:text-accent transition-colors">{categoryLabel}</Link>
          <span className="mx-1">&gt;</span>
          <span className="text-nearblack/50">{p.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          <div className="md:col-span-7">
            <div className="md:sticky md:top-28">
              <div className="relative overflow-hidden bg-stone mb-4 aspect-[4/3]">
                <img key={activeImage} src={p.images[activeImage]} alt={p.name} className="w-full h-full object-cover transition-opacity duration-[400ms]" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {p.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImage(i)} className={`aspect-square overflow-hidden bg-stone ${i === activeImage ? 'thumbnail-active' : 'border-2 border-transparent'} transition-all duration-300`} style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} data-cursor-hover>
                    <img src={img} alt={`${p.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <h1 className="font-bolsgi text-[40px] md:text-[52px] text-nearblack leading-[1.05] mb-3">{p.name}</h1>
            <p className="font-dm text-[11px] uppercase tracking-[3px] text-midtone mb-8">
              {p.brand} &middot; {p.category === 'machine' ? 'Espresso Machine' : 'Grinder'}
            </p>

            <div className="mb-10">
              {p.specs.map((spec) => (
                <div key={spec.label} className="flex items-baseline justify-between py-3 border-b border-stone">
                  <span className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">{spec.label}</span>
                  <span className="font-dm text-[15px] text-nearblack text-right max-w-[60%]">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <h3 className="font-bolsgi text-[20px] md:text-[22px] text-nearblack mb-5">Features</h3>
              {p.features.map((feat, i) => (
                <div key={i} className="flex gap-3 mb-4">
                  <span className="text-accent text-[8px] mt-2 shrink-0">&#9679;</span>
                  <p className="font-dm text-[14px] text-nearblack/70 leading-[1.65]">{feat}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`mailto:hello@coffeeconceptstore.com?subject=Enquiry: ${p.name}`} className="bg-nearblack text-offwhite font-dm text-[12px] uppercase tracking-[2px] px-8 py-4 text-center hover:bg-nearblack/80 transition-colors duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} data-cursor-hover>
                Request a Quote
              </a>
              <a href={p.catalogueUrl} className="border border-nearblack text-nearblack font-dm text-[12px] uppercase tracking-[2px] px-8 py-4 text-center hover:bg-nearblack hover:text-offwhite transition-colors duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} data-cursor-hover>
                Download Catalogue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
