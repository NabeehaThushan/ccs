import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const BRANDS = ['GEMILAI', 'T&Z', 'BALENARE', 'WENDOUGEE', 'KAPHIE', 'BLUE TRAIL'];

const CATEGORY_FEATURES = [
  {
    title: 'Coffee Machines',
    descriptor: 'Engineering meets extraction. Each machine chosen for its thermal stability, build integrity, and the silence of its pump.',
    link: '/machines',
    image: 'https://images.unsplash.com/photo-1510708287695-0b2a7037ef0d?w=1200&q=80',
    imageLeft: true,
    bg: 'bg-stone',
  },
  {
    title: 'Grinders',
    descriptor: 'The grinder makes the coffee. Burr geometry, RPM, and stepless precision — the invisible variables that define the cup.',
    link: '/grinders',
    image: 'https://images.unsplash.com/photo-1516962393444-4e6e0f6f4e28?w=1200&q=80',
    imageLeft: false,
    bg: 'bg-offwhite',
  },
  {
    title: 'Accessories',
    descriptor: 'Tamper, distribution tool, scale, pitcher. Each one a precision instrument that turns good process into repeatable craft.',
    link: '/accessories',
    image: 'https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=1200&q=80',
    imageLeft: true,
    bg: 'bg-stone',
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen flex items-end overflow-hidden hero-vignette">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=1600&q=80"
          alt="Coffee machine hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-nearblack/40 via-transparent to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <div className="stagger-child" style={{ transitionDelay: '150ms' }}>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-offwhite/80 mb-4">
              Espresso Machines
            </p>
          </div>
          <h1
            className="font-bolsgi text-offwhite stagger-child"
            style={{
              fontSize: 'clamp(48px, 8vw, 120px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              transitionDelay: '300ms',
            }}
          >
            The Art of Extraction
          </h1>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-nearblack py-12 md:py-16">
        <ScrollReveal>
          <p className="font-bolsgi italic text-[28px] md:text-[32px] text-offwhite text-center tracking-wide">
            Precision. Ritual. Obsession.
          </p>
        </ScrollReveal>
      </section>

      {/* MARQUEE */}
      <section className="bg-stone overflow-hidden py-6 md:py-8">
        <div className="marquee-track flex items-center whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="flex items-center">
              <span className="font-dm text-[14px] md:text-[18px] uppercase tracking-[4px] text-nearblack">{brand}</span>
              <span className="mx-8 md:mx-10 text-accent text-[8px]">&#9679;</span>
            </span>
          ))}
        </div>
      </section>

      {/* BRAND INTRODUCTION */}
      <section className="bg-offwhite py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <ScrollReveal>
              <h2 className="font-bolsgi text-[36px] md:text-[48px] text-nearblack leading-[1.15]" style={{ maxWidth: '520px' }}>
                A curated showroom for those who take coffee seriously.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="space-y-6" style={{ maxWidth: '480px' }}>
                <p className="font-dm text-[15px] md:text-[16px] text-nearblack/80 leading-[1.65]">
                  Coffee Concept Store is a destination, not a marketplace. Every machine, grinder, and accessory on these pages has been selected for its engineering integrity and its capacity to reward daily use for decades.
                </p>
                <p className="font-dm text-[15px] md:text-[16px] text-nearblack/80 leading-[1.65]">
                  We represent brands that share our conviction: that the best coffee equipment is not the most expensive, but the most honest. No gimmicks. No trends. Just tools built by people who understand that extraction is a discipline, not a hobby.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* EDITORIAL CATEGORY FEATURES */}
      {CATEGORY_FEATURES.map((feat) => (
        <section key={feat.title} className={`${feat.bg} py-0`}>
          <Link to={feat.link} className="block product-row-link">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-5 gap-0 items-stretch min-h-[400px] md:min-h-[560px]">
              {feat.imageLeft ? (
                <>
                  <ScrollReveal className="md:col-span-3 img-hover-zoom relative overflow-hidden">
                    <img src={feat.image} alt={feat.title} className="w-full h-[300px] md:h-full object-cover" />
                    <div className="product-row-overlay absolute inset-0 bg-nearblack" />
                    <span className="product-row-overlay absolute inset-0 flex items-center justify-center font-dm text-[12px] uppercase tracking-[3px] text-offwhite">
                      View Details &rarr;
                    </span>
                  </ScrollReveal>
                  <ScrollReveal delay={100} className="md:col-span-2 flex flex-col justify-center px-0 md:px-12 lg:px-16 py-8 md:py-0">
                    <h3 className="font-bolsgi text-[32px] md:text-[40px] text-nearblack mb-4 accent-underline">{feat.title}</h3>
                    <p className="font-dm text-[15px] text-nearblack/70 leading-[1.65] mb-6 max-w-[380px]">{feat.descriptor}</p>
                    <span className="font-dm text-[13px] uppercase tracking-[2px] text-accent accent-underline">Explore &rarr;</span>
                  </ScrollReveal>
                </>
              ) : (
                <>
                  <ScrollReveal delay={100} className="md:col-span-2 flex flex-col justify-center px-0 md:px-12 lg:px-16 py-8 md:py-0 order-2 md:order-1">
                    <h3 className="font-bolsgi text-[32px] md:text-[40px] text-nearblack mb-4 accent-underline">{feat.title}</h3>
                    <p className="font-dm text-[15px] text-nearblack/70 leading-[1.65] mb-6 max-w-[380px]">{feat.descriptor}</p>
                    <span className="font-dm text-[13px] uppercase tracking-[2px] text-accent accent-underline">Explore &rarr;</span>
                  </ScrollReveal>
                  <ScrollReveal className="md:col-span-3 img-hover-zoom relative overflow-hidden order-1 md:order-2">
                    <img src={feat.image} alt={feat.title} className="w-full h-[300px] md:h-full object-cover" />
                    <div className="product-row-overlay absolute inset-0 bg-nearblack" />
                    <span className="product-row-overlay absolute inset-0 flex items-center justify-center font-dm text-[12px] uppercase tracking-[3px] text-offwhite">
                      View Details &rarr;
                    </span>
                  </ScrollReveal>
                </>
              )}
            </div>
          </Link>
        </section>
      ))}

      {/* COFFEE + TEA TEASER */}
      <section className="bg-nearblack">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ScrollReveal>
              <Link to="/coffee" className="block relative group overflow-hidden min-h-[400px] md:min-h-[560px]">
                <img src="https://images.unsplash.com/photo-1447933601403-0b6687b8e018?w=800&q=80" alt="Kaphie Coffee" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-[1.03]" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
                <div className="absolute inset-0 bg-nearblack/50 group-hover:bg-nearblack/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <h3 className="font-bolsgi text-[36px] md:text-[48px] text-offwhite mb-2">Kaphie</h3>
                  <p className="font-dm text-[14px] text-offwhite/70 mb-4">From origin to cup.</p>
                  <span className="font-dm text-[13px] uppercase tracking-[2px] text-accent accent-underline">Discover &rarr;</span>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Link to="/tea" className="block relative group overflow-hidden min-h-[400px] md:min-h-[560px]">
                <img src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80" alt="Blue Trail Tea" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-[1.03]" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
                <div className="absolute inset-0 bg-nearblack/50 group-hover:bg-nearblack/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <h3 className="font-bolsgi text-[36px] md:text-[48px] text-offwhite mb-2">Blue Trail</h3>
                  <p className="font-dm text-[14px] text-offwhite/70 mb-4">Still. Steeped. Considered.</p>
                  <span className="font-dm text-[13px] uppercase tracking-[2px] text-accent accent-underline">Discover &rarr;</span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
