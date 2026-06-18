import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const BRANDS = ['GEMILAI', 'T&Z', 'BALENARE', 'WENDOUGEE', 'KAPHIE', 'BLUE TRAIL'];

const HERO_CATEGORIES = [
  {
    label: 'Machines',
    path: '/machines',
    image: 'https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=1600&q=80',
    tagline: 'Precision Engineering',
  },
  {
    label: 'Grinders',
    path: '/grinders',
    image: 'https://images.unsplash.com/photo-1516962393444-4e6e0f6f4e28?w=1600&q=80',
    tagline: 'Burr Geometry Perfected',
  },
  {
    label: 'Accessories',
    path: '/accessories',
    image: 'https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=1600&q=80',
    tagline: 'Tools of the Ritual',
  },
  {
    label: 'Coffee',
    path: '/coffee',
    image: 'https://images.unsplash.com/photo-1447933601403-0b6687b8e018?w=1600&q=80',
    tagline: 'Single Origin Excellence',
  },
  {
    label: 'Tea',
    path: '/tea',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1600&q=80',
    tagline: 'Still. Steeped. Considered.',
  },
];

const SLOGANS = [
  'PRECISION · RITUAL · OBSESSION',
  'FROM BEAN TO BAR',
  'THIRD WAVE · FIRST CLASS',
  'SRI LANKA\'S COFFEE DESTINATION',
  'ENGINEERED FOR EXTRACTION',
];

const COFFEE_HISTORY = [
  {
    year: '850 AD',
    title: 'The Legend of Kaldi',
    body: 'An Ethiopian goat herder named Kaldi notices his goats dancing after eating red berries from a wild tree. He brings the berries to a monastery — monks brew the world\'s first cup and stay awake all night.',
    accent: true,
  },
  {
    year: '1000 AD',
    title: 'Coffee Crosses to Arabia',
    body: 'Arab traders carry coffee to Yemen. Sufi monks begin brewing qahwa to fuel their all-night prayers. Coffee spreads through the Islamic world — a sacred stimulant before it became a commodity.',
    accent: false,
  },
  {
    year: '1475',
    title: 'The First Coffee House',
    body: 'Kiva Han opens in Constantinople — the world\'s first public coffee house. Intellectuals, merchants, and poets gather to debate, plot, and philosophise. Coffee doesn\'t just wake you up. It starts revolutions.',
    accent: true,
  },
  {
    year: '1600s',
    title: 'Coffee Conquers Europe',
    body: 'Venetian traders bring coffee to Europe. Within decades, coffee houses replace taverns as the beating heart of public life. London alone hosts over 300 establishments. The Enlightenment was brewed in a coffee cup.',
    accent: false,
  },
  {
    year: '1901',
    title: 'The Espresso Machine',
    body: 'Luigi Bezzera patents the first espresso machine in Milan. Hot water forced through compacted grounds under pressure produces a concentrated, complex shot in under a minute. Espresso culture is born.',
    accent: true,
  },
  {
    year: '2000s',
    title: 'The Third Wave',
    body: 'Coffee is no longer a commodity — it\'s a craft. Single-origin beans, precision brewing, and direct trade transform the cup into a conversation about terroir, process, and people. This is where we live.',
    accent: false,
  },
];

const WHAT_WE_CARRY = [
  {
    label: 'Coffee Machines',
    sub: 'Commercial · Multi-Use · Home',
    path: '/machines',
    subcategories: [
      { name: 'Commercial', path: '/machines/commercial' },
      { name: 'Multi-Use', path: '/machines/multi-use' },
      { name: 'Home', path: '/machines/home' },
    ],
  },
  {
    label: 'Grinders',
    sub: 'On Demand · Single Dose',
    path: '/grinders',
    subcategories: [
      { name: 'On Demand', path: '/grinders/on-demand' },
      { name: 'Single Dose', path: '/grinders/single-dose' },
    ],
  },
  {
    label: 'Accessories',
    sub: 'Tampers · Cups · Scales',
    path: '/accessories',
    subcategories: [
      { name: 'Tampers', path: '/accessories/tampers' },
      { name: 'Cups', path: '/accessories/cups' },
      { name: 'Scales', path: '/accessories/scales' },
      { name: 'Hand Grinders', path: '/accessories/hand-grinders' },
    ],
  },
  { label: 'Kaphie Coffee', sub: 'Single Origin Beans', path: '/coffee' },
  { label: 'Blue Trail Tea', sub: '8 Signature Blends', path: '/tea' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCategory((prev) => (prev + 1) % HERO_CATEGORIES.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (index: number) => {
    if (index !== activeCategory) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCategory(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const currentHero = HERO_CATEGORIES[activeCategory];

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        {/* Background images with crossfade */}
        {HERO_CATEGORIES.map((cat, i) => (
          <img
            key={cat.label}
            src={cat.image}
            alt={cat.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === activeCategory ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-nearblack/85 via-nearblack/25 to-nearblack/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-nearblack/50 via-transparent to-transparent" />

        <div className="absolute top-28 left-6 md:left-10 z-10">
          <span className="font-dm text-[11px] uppercase tracking-[4px] text-white/40">
            Colombo 03, Sri Lanka
          </span>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
          {/* Category switcher tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {HERO_CATEGORIES.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => handleCategoryClick(i)}
                className={`font-dm text-[11px] uppercase tracking-[2px] px-5 py-2.5 rounded-full transition-all duration-300 ${
                  i === activeCategory
                    ? 'bg-salmon text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dynamic content */}
          <p className={`font-dm text-[11px] uppercase tracking-[5px] text-salmon mb-5 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            {currentHero.tagline}
          </p>
          <h1
            className="font-outfit font-bold text-white leading-[1.0] mb-8"
            style={{ fontSize: 'clamp(52px, 9vw, 130px)', letterSpacing: '-0.03em' }}
          >
            The Art of<br />
            <span className="text-salmon">Extraction.</span>
          </h1>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              to={currentHero.path}
              className="inline-flex items-center gap-3 bg-salmon text-white font-dm text-[12px] uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white hover:text-salmon transition-all duration-300"
            >
              Explore {currentHero.label}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-white/40 text-white font-dm text-[12px] uppercase tracking-[2px] px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Speak to Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 md:right-10 z-10 flex flex-col items-center gap-2">
          <span className="font-dm text-[10px] uppercase tracking-[3px] text-white/35">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/35 to-transparent" />
        </div>
      </section>

      {/* ─── SLOGAN MARQUEE ───────────────────────────────────────────── */}
      <section className="bg-salmon py-8 overflow-hidden">
        <div className="marquee-track flex items-center whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...SLOGANS, ...SLOGANS, ...SLOGANS].map((s, i) => (
            <span key={i} className="flex items-center">
              <span className="font-outfit font-semibold text-[14px] md:text-[16px] uppercase tracking-[3px] text-white">{s}</span>
              <span className="mx-8 md:mx-10 text-white/50 text-[10px]">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── BRAND MARQUEE (reverse direction) ───────────────────────── */}
      <section className="bg-nearblack py-5 overflow-hidden">
        <div className="marquee-track-reverse flex items-center whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="flex items-center">
              <span className="font-outfit font-semibold text-[12px] uppercase tracking-[5px] text-white/35">{brand}</span>
              <span className="mx-8 text-salmon text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────────── */}
      <section className="bg-offwhite py-20 md:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-salmon/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-salmon/5 rounded-full blur-2xl" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Logo + Title column */}
            <ScrollReveal className="lg:col-span-5">
              <div className="relative">
                {/* Logo mark */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-salmon flex items-center justify-center">
                    <span className="font-outfit font-bold text-[28px] md:text-[32px] text-white">C</span>
                  </div>
                  <div>
                    <p className="font-outfit font-semibold text-[18px] text-nearblack leading-tight">Coffee Concept</p>
                    <p className="font-outfit font-semibold text-[18px] text-salmon leading-tight">Store</p>
                  </div>
                </div>

                <div className="inline-block bg-salmon text-white font-dm text-[11px] uppercase tracking-[3px] px-4 py-2 rounded-full mb-6">
                  Who We Are
                </div>
                <h2 className="font-outfit font-bold text-[38px] md:text-[52px] text-nearblack leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
                  A curated showroom for those who take coffee seriously.
                </h2>

                {/* Stats row */}
                <div className="flex flex-wrap gap-4 mt-8">
                  {[
                    { n: '6+', l: 'Brands' },
                    { n: '20+', l: 'Products' },
                    { n: '01', l: 'Obsession' },
                  ].map((stat) => (
                    <div key={stat.l} className="bg-white border border-stone rounded-2xl px-6 py-4 text-center shadow-sm">
                      <p className="font-outfit font-bold text-[32px] text-salmon leading-none">{stat.n}</p>
                      <p className="font-dm text-[11px] uppercase tracking-[2px] text-nearblack/50 mt-1">{stat.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Description column */}
            <ScrollReveal delay={120} className="lg:col-span-7">
              <div className="relative bg-white rounded-3xl border border-stone p-8 md:p-12 shadow-sm">
                {/* Quote mark decoration */}
                <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-salmon flex items-center justify-center">
                  <span className="font-outfit text-white text-[24px]">"</span>
                </div>
                <div className="space-y-5">
                  <p className="font-dm text-[16px] md:text-[17px] text-nearblack/75 leading-[1.75] mt-4">
                    Coffee Concept Store is a destination, not a marketplace. Every machine, grinder, and accessory has been selected for engineering integrity and the capacity to reward daily use for decades.
                  </p>
                  <p className="font-dm text-[16px] md:text-[17px] text-nearblack/75 leading-[1.75]">
                    We represent brands that share our conviction — the best coffee equipment is not the most expensive, but the most honest. No gimmicks. No trends. Just tools built by people who understand that extraction is a discipline.
                  </p>
                  <div className="pt-6 border-t border-stone">
                    <p className="font-outfit font-semibold text-[15px] text-nearblack">The Coffee Concept Team</p>
                    <p className="font-dm text-[13px] text-midtone mt-1">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE CARRY ────────────────────────────────────────────── */}
      <section className="bg-nearblack py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-3">What We Carry</p>
            <h2 className="font-outfit font-bold text-[36px] md:text-[50px] text-white leading-tight mb-12" style={{ letterSpacing: '-0.02em' }}>
              Everything you need.<br />Nothing you don't.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WHAT_WE_CARRY.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 60}>
                <div className="group relative">
                  <Link
                    to={item.path}
                    className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-salmon hover:border-salmon transition-all duration-300"
                  >
                    <h3 className="font-outfit font-semibold text-[16px] text-white mb-2 leading-tight group-hover:text-white transition-colors">{item.label}</h3>
                    <p className="font-dm text-[12px] text-white/40 group-hover:text-white/80 transition-colors leading-[1.5] mb-4">{item.sub}</p>
                    <span className="font-dm text-[11px] uppercase tracking-[2px] text-salmon group-hover:text-white inline-flex items-center gap-1 transition-colors duration-300">
                      Explore →
                    </span>
                  </Link>
                  {/* Subcategory chips - visible on hover (desktop) or always (mobile) */}
                  {item.subcategories && (
                    <div className="flex flex-wrap gap-2 mt-3 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                      {item.subcategories.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="font-dm text-[11px] px-3 py-1.5 rounded-full bg-white/10 text-white/70 hover:bg-salmon hover:text-white transition-colors duration-200"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORY FEATURES ────────────────────────────────────────── */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-3">Our Collections</p>
            <h2 className="font-outfit font-bold text-[36px] md:text-[48px] text-nearblack mb-12 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Precision at every<br />step of your ritual.
            </h2>
          </ScrollReveal>

          {/* Machines — big hero card */}
          <ScrollReveal className="mb-6">
            <Link to="/machines" className="group block relative overflow-hidden rounded-3xl" style={{ minHeight: 460 }}>
              <img
                src="https://images.unsplash.com/photo-1510708287695-0b2a7037ef0d?w=1400&q=80"
                alt="Coffee Machines"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-nearblack/85 via-nearblack/40 to-transparent" />
              <div className="absolute inset-0 bg-salmon/0 group-hover:bg-salmon/20 transition-all duration-500" />
              <div className="relative z-10 p-10 md:p-14 flex flex-col justify-end" style={{ minHeight: 460 }}>
                <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-3">Collection 01</p>
                <h3 className="font-outfit font-bold text-[42px] md:text-[58px] text-white leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  Coffee Machines
                </h3>
                <p className="font-dm text-[15px] text-white/65 max-w-[440px] leading-[1.7] mb-7">
                  Commercial, multi-use, and home machines — each chosen for thermal stability, build integrity, and the silence of its pump.
                </p>
                <span className="inline-flex items-center gap-3 bg-white text-nearblack font-dm text-[12px] uppercase tracking-[2px] px-7 py-3.5 rounded-full self-start group-hover:bg-salmon group-hover:text-white transition-all duration-300">
                  View Machines →
                </span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Grinders + Accessories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <Link to="/grinders" className="group block relative overflow-hidden rounded-3xl" style={{ minHeight: 360 }}>
                <img
                  src="https://images.unsplash.com/photo-1516962393444-4e6e0f6f4e28?w=800&q=80"
                  alt="Grinders"
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nearblack/85 via-nearblack/30 to-transparent" />
                <div className="absolute inset-0 bg-salmon/0 group-hover:bg-salmon/30 transition-all duration-500" />
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end" style={{ minHeight: 360 }}>
                  <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-2">Collection 02</p>
                  <h3 className="font-outfit font-bold text-[34px] text-white mb-3" style={{ letterSpacing: '-0.02em' }}>Grinders</h3>
                  <p className="font-dm text-[13px] text-white/60 leading-[1.65] mb-5">Burr geometry, RPM, and stepless precision — the invisible variables that define the cup.</p>
                  <span className="inline-flex items-center gap-2 border border-white/40 text-white font-dm text-[11px] uppercase tracking-[2px] px-5 py-2.5 rounded-full self-start group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                    View Grinders →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <Link to="/accessories" className="group block relative overflow-hidden rounded-3xl" style={{ minHeight: 360 }}>
                <img
                  src="https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=800&q=80"
                  alt="Accessories"
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nearblack/85 via-nearblack/30 to-transparent" />
                <div className="absolute inset-0 bg-salmon/0 group-hover:bg-salmon/30 transition-all duration-500" />
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end" style={{ minHeight: 360 }}>
                  <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-2">Collection 03</p>
                  <h3 className="font-outfit font-bold text-[34px] text-white mb-3" style={{ letterSpacing: '-0.02em' }}>Accessories</h3>
                  <p className="font-dm text-[13px] text-white/60 leading-[1.65] mb-5">Tamper, distribution tool, scale — precision instruments that turn process into craft.</p>
                  <span className="inline-flex items-center gap-2 border border-white/40 text-white font-dm text-[11px] uppercase tracking-[2px] px-5 py-2.5 rounded-full self-start group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                    View Accessories →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── COFFEE HISTORY ROADMAP ───────────────────────────────────── */}
      <section className="bg-nearblack py-20 md:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-3">The Story</p>
            <h2 className="font-outfit font-bold text-[40px] md:text-[64px] text-white leading-tight mb-16 md:mb-24" style={{ letterSpacing: '-0.02em' }}>
              1,200 years of<br />obsession.
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical spine — desktop only */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, #D97260 70%, transparent)' }} />

            {COFFEE_HISTORY.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={i} delay={i * 80}>
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-5 mb-10">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full border-2 border-salmon bg-nearblack flex-shrink-0 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-salmon" />
                      </div>
                      {i < COFFEE_HISTORY.length - 1 && <div className="w-[2px] flex-1 min-h-[40px] bg-salmon/30 mt-1" />}
                    </div>
                    <div className="pb-6">
                      <span className={`inline-block mb-3 font-outfit font-bold text-[12px] tracking-[2px] px-3 py-1.5 rounded-full ${event.accent ? 'bg-salmon text-white' : 'bg-white/10 text-white/60'}`}>{event.year}</span>
                      <h3 className="font-outfit font-semibold text-[20px] text-white mb-2 leading-tight">{event.title}</h3>
                      <p className="font-dm text-[14px] text-white/55 leading-[1.7]">{event.body}</p>
                    </div>
                  </div>

                  {/* Desktop alternating layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:min-h-[160px] relative">
                    <div className={`py-8 ${isLeft ? 'pr-16 text-right' : ''}`}>
                      {isLeft && (
                        <>
                          <span className={`inline-block mb-3 font-outfit font-bold text-[13px] tracking-[2px] px-4 py-1.5 rounded-full ${event.accent ? 'bg-salmon text-white' : 'bg-white/10 text-white/60'}`}>{event.year}</span>
                          <h3 className="font-outfit font-semibold text-[24px] text-white mb-3 leading-tight">{event.title}</h3>
                          <p className="font-dm text-[14px] text-white/55 leading-[1.75] max-w-[380px] ml-auto">{event.body}</p>
                        </>
                      )}
                    </div>
                    <div className={`py-8 ${!isLeft ? 'pl-16' : ''}`}>
                      {!isLeft && (
                        <>
                          <span className={`inline-block mb-3 font-outfit font-bold text-[13px] tracking-[2px] px-4 py-1.5 rounded-full ${event.accent ? 'bg-salmon text-white' : 'bg-white/10 text-white/60'}`}>{event.year}</span>
                          <h3 className="font-outfit font-semibold text-[24px] text-white mb-3 leading-tight">{event.title}</h3>
                          <p className="font-dm text-[14px] text-white/55 leading-[1.75] max-w-[380px]">{event.body}</p>
                        </>
                      )}
                    </div>
                    {/* Center dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-salmon flex items-center justify-center bg-nearblack z-10">
                      <div className="w-2 h-2 rounded-full bg-salmon" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="mt-20 text-center">
            <p className="font-outfit font-semibold text-[22px] md:text-[28px] text-white/80 italic mb-6 max-w-[640px] mx-auto leading-[1.3]">
              "The best time to discover specialty coffee was 20 years ago. The second best time is today."
            </p>
            <Link
              to="/coffee"
              className="inline-flex items-center gap-3 bg-salmon text-white font-dm text-[12px] uppercase tracking-[2px] px-9 py-4 rounded-full hover:bg-white hover:text-salmon transition-all duration-300"
            >
              Explore Our Coffee →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── VIDEO EDITORIAL ─────────────────────────────────────────────── */}
      <section className="bg-offwhite py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-3">The Engineering of Extraction</p>
            <h2 className="font-outfit font-bold text-[38px] md:text-[56px] text-nearblack leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              Every variable matters.<br />Every second counts.
            </h2>
            <p className="font-dm text-[16px] text-nearblack/60 max-w-[560px] leading-[1.7] mb-14">
              A three-minute journey through the physics of the perfect espresso — pressure, temperature, and the geometry of the burr.
            </p>
          </ScrollReveal>

          {/* Custom video player */}
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden bg-nearblack" style={{ aspectRatio: '16/9' }}>
              {/* Placeholder video image */}
              <img
                src="https://images.unsplash.com/photo-1511920121047-6b38ba6c8480?w=1400&q=80"
                alt="Coffee extraction video"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nearblack/60 via-transparent to-nearblack/20" />

              {/* Play button */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="relative">
                  {/* Outer ring animation */}
                  <div className="absolute inset-0 rounded-full bg-salmon/20 scale-[1.3] group-hover:scale-[1.5] transition-transform duration-500" />
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-salmon flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" style={{ borderLeftWidth: 22 }} />
                  </div>
                </div>
              </button>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex items-end justify-between gap-6">
                <div>
                  <p className="font-dm text-[11px] uppercase tracking-[3px] text-salmon mb-1">Now Playing</p>
                  <h3 className="font-outfit font-semibold text-[20px] md:text-[24px] text-white">The Extraction Equation</h3>
                  <p className="font-dm text-[13px] text-white/50 mt-1">Duration: 3:14</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-salmon animate-pulse" />
                  <span className="font-dm text-[11px] uppercase tracking-[2px] text-white/60">Press to Play</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── COFFEE + TEA ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-3">Taste</p>
            <h2 className="font-outfit font-bold text-[36px] md:text-[52px] text-nearblack mb-12 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              From the farm.<br />To your cup.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <Link to="/coffee" className="group block relative overflow-hidden rounded-3xl min-h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0b6687b8e018?w=800&q=80"
                  alt="Kaphie Coffee"
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-[6s] group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nearblack/80 via-nearblack/20 to-transparent" />
                <div className="absolute inset-0 bg-salmon/0 group-hover:bg-salmon/25 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <span className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-3">Single Origin Coffee</span>
                  <h3 className="font-outfit font-bold text-[40px] text-white mb-2" style={{ letterSpacing: '-0.02em' }}>Kaphie</h3>
                  <p className="font-dm text-[14px] text-white/60 mb-5">Ethiopia, Colombia, Brazil — from origin to cup.</p>
                  <span className="inline-flex items-center gap-3 bg-salmon text-white font-dm text-[12px] uppercase tracking-[2px] px-7 py-3.5 rounded-full self-start group-hover:bg-white group-hover:text-salmon transition-all duration-300">
                    Discover Coffee →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <Link to="/tea" className="group block relative overflow-hidden rounded-3xl min-h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80"
                  alt="Blue Trail Tea"
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-[6s] group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nearblack/80 via-nearblack/20 to-transparent" />
                <div className="absolute inset-0 bg-salmon/0 group-hover:bg-salmon/25 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <span className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-3">Premium Tea Collection</span>
                  <h3 className="font-outfit font-bold text-[40px] text-white mb-2" style={{ letterSpacing: '-0.02em' }}>Blue Trail</h3>
                  <p className="font-dm text-[14px] text-white/60 mb-5">Still. Steeped. Considered — 8 signature blends.</p>
                  <span className="inline-flex items-center gap-3 border border-white/50 text-white font-dm text-[12px] uppercase tracking-[2px] px-7 py-3.5 rounded-full self-start group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                    Discover Tea →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── VISIT STRIP ──────────────────────────────────────────────── */}
      <section className="bg-salmon py-14 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <ScrollReveal>
            <h3 className="font-outfit font-bold text-[32px] md:text-[44px] text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Come see it in person.<br />42 Galle Road, Colombo 03.
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-salmon font-dm text-[12px] uppercase tracking-[2px] px-9 py-4 rounded-full hover:bg-nearblack hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Get in Touch →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
