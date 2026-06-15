import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { gemilaiMachines, tzMachines, wendougeeMachines } from '../data/products';
import type { MachineProduct } from '../data/products';

const BRAND_SECTIONS = [
  { name: 'Gemilai', machines: gemilaiMachines, bg: 'bg-offwhite' },
  { name: 'T&Z', machines: tzMachines, bg: 'bg-stone' },
  { name: 'Wendougee', machines: wendougeeMachines, bg: 'bg-offwhite' },
];

function ProductRow({ product, index }: { product: MachineProduct; index: number }) {
  const imageLeft = index % 2 === 0;
  return (
    <Link to={`/machines/${product.slug}`} className="block product-row-link group">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 items-stretch min-h-[320px] md:min-h-[440px]">
        {imageLeft ? (
          <>
            <ScrollReveal className="md:col-span-3 img-hover-zoom relative overflow-hidden">
              <img src={product.images[0]} alt={product.name} className="w-full h-[280px] md:h-full object-cover" />
              <div className="product-row-overlay absolute inset-0 bg-nearblack" />
              <span className="product-row-overlay absolute inset-0 flex items-center justify-center font-dm text-[12px] uppercase tracking-[3px] text-offwhite">View Details &rarr;</span>
            </ScrollReveal>
            <ScrollReveal delay={80} className="md:col-span-2 flex flex-col justify-center px-6 md:px-10 lg:px-14 py-8 md:py-0">
              <p className="font-dm text-[11px] uppercase tracking-[3px] text-midtone mb-3">{product.brand}</p>
              <h3 className="font-bolsgi text-[28px] md:text-[32px] text-nearblack mb-4 accent-underline">{product.name}</h3>
              <p className="font-dm text-[14px] text-nearblack/60 leading-[1.6] mb-5 max-w-[360px]">{product.features[0]}</p>
              <span className="font-dm text-[13px] uppercase tracking-[2px] text-accent accent-underline">View Details &rarr;</span>
            </ScrollReveal>
          </>
        ) : (
          <>
            <ScrollReveal delay={80} className="md:col-span-2 flex flex-col justify-center px-6 md:px-10 lg:px-14 py-8 md:py-0 order-2 md:order-1">
              <p className="font-dm text-[11px] uppercase tracking-[3px] text-midtone mb-3">{product.brand}</p>
              <h3 className="font-bolsgi text-[28px] md:text-[32px] text-nearblack mb-4 accent-underline">{product.name}</h3>
              <p className="font-dm text-[14px] text-nearblack/60 leading-[1.6] mb-5 max-w-[360px]">{product.features[0]}</p>
              <span className="font-dm text-[13px] uppercase tracking-[2px] text-accent accent-underline">View Details &rarr;</span>
            </ScrollReveal>
            <ScrollReveal className="md:col-span-3 img-hover-zoom relative overflow-hidden order-1 md:order-2">
              <img src={product.images[0]} alt={product.name} className="w-full h-[280px] md:h-full object-cover" />
              <div className="product-row-overlay absolute inset-0 bg-nearblack" />
              <span className="product-row-overlay absolute inset-0 flex items-center justify-center font-dm text-[12px] uppercase tracking-[3px] text-offwhite">View Details &rarr;</span>
            </ScrollReveal>
          </>
        )}
      </div>
    </Link>
  );
}

export default function Machines() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <section className="bg-nearblack pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h1 className="font-bolsgi text-[48px] md:text-[64px] text-offwhite mb-4 leading-[1.1]">
              The Engineering of<br />the Perfect Extraction.
            </h1>
            <p className="font-dm text-[15px] text-midtone max-w-[520px] leading-[1.6]">
              Every machine in our showroom has been chosen for its thermal stability, build integrity, and the quality of the shots it produces — day after day, year after year.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="sticky top-16 md:top-[72px] z-50 bg-stone/95 backdrop-blur-md border-b border-midtone/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center gap-2 md:gap-4 py-3 overflow-x-auto">
          {BRAND_SECTIONS.map((section, i) => (
            <button key={section.name} onClick={() => scrollToSection(`brand-${i}`)} className="font-dm text-[11px] uppercase tracking-[2px] px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap hover:bg-nearblack hover:text-offwhite" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} data-cursor-hover>
              {section.name}
            </button>
          ))}
          <button onClick={() => scrollToSection('balenare-note')} className="font-dm text-[11px] uppercase tracking-[2px] px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap hover:bg-nearblack hover:text-offwhite" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} data-cursor-hover>
            Balenare
          </button>
        </div>
      </div>

      {BRAND_SECTIONS.map((section, i) => (
        <section key={section.name} id={`brand-${i}`} className={`${section.bg} py-16 md:py-24`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <ScrollReveal>
              <h2 className="font-bolsgi text-[56px] md:text-[72px] text-nearblack mb-12 md:mb-16">{section.name}</h2>
            </ScrollReveal>
            <div className="space-y-0 divide-y divide-midtone/20">
              {section.machines.map((machine, j) => (
                <ProductRow key={machine.id} product={machine} index={j} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="balenare-note" className="bg-stone py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <h2 className="font-bolsgi text-[56px] md:text-[72px] text-nearblack">Balenare</h2>
              <p className="font-dm text-[15px] text-nearblack/60">
                Balenare grinders are available on the <Link to="/grinders" className="text-accent accent-underline">Grinders page</Link> &rarr;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
