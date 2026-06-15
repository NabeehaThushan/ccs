import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { balenareGrinders } from '../data/products';

export default function Grinders() {
  return (
    <div>
      <section className="bg-nearblack pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h1 className="font-bolsgi text-[64px] md:text-[88px] text-offwhite mb-4 leading-[1]">Balenare</h1>
            <p className="font-dm italic text-[16px] text-midtone max-w-[420px]">Precision ground. Every time.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {balenareGrinders.map((grinder, i) => (
              <ScrollReveal key={grinder.id} delay={i * 100}>
                <Link to={`/machines/${grinder.slug}`} className="block product-row-link group">
                  <div className="bg-stone card-lift relative overflow-hidden">
                    <div className="img-hover-zoom aspect-[4/3] overflow-hidden">
                      <img src={grinder.images[0]} alt={grinder.name} className="w-full h-full object-cover" />
                      <div className="product-row-overlay absolute inset-0 bg-nearblack" />
                      <span className="product-row-overlay absolute inset-0 flex items-center justify-center font-dm text-[12px] uppercase tracking-[3px] text-offwhite">View Details &rarr;</span>
                    </div>
                    <div className="p-5 md:p-6">
                      <h3 className="font-bolsgi text-[20px] md:text-[22px] text-nearblack mb-2">{grinder.name}</h3>
                      <p className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">
                        {grinder.specs[0].value} &middot; {grinder.specs[2].value} RPM
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
