import ScrollReveal from '../components/ScrollReveal';
import { kaphieCoffee } from '../data/products';

export default function Coffee() {
  return (
    <div>
      <section className="bg-nearblack pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h1 className="font-bolsgi text-[56px] md:text-[72px] text-offwhite mb-4 leading-[1.05]">From Origin to Cup.</h1>
            <p className="font-dm text-[15px] text-midtone max-w-[520px] leading-[1.65]">
              Kaphie sources single-origin coffees from the world's most respected growing regions. Every lot is chosen for its traceability, its processing integrity, and the story it tells in the cup.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="h-[50vh] md:h-[65vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1447933601403-0b6687b8e018?w=1600&q=80" alt="Kaphie Coffee" className="w-full h-full object-cover" />
      </section>

      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {kaphieCoffee.map((coffee, i) => (
              <ScrollReveal key={coffee.id} delay={i * 80}>
                <div className="bg-stone card-lift overflow-hidden">
                  <div className="img-hover-zoom aspect-square overflow-hidden">
                    <img src={coffee.image} alt={coffee.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-bolsgi text-[20px] text-nearblack mb-3">{coffee.name}</h3>
                    <p className="font-dm text-[13px] text-nearblack/60 mb-1">{coffee.origin}</p>
                    <p className="font-dm text-[13px] text-nearblack/60 mb-4">{coffee.roastProfile}</p>
                    <a href={`mailto:hello@coffeeconceptstore.com?subject=Enquiry: ${coffee.name}`} className="font-dm text-[13px] uppercase tracking-[2px] text-accent accent-underline">Enquire &rarr;</a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
