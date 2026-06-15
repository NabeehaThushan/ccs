import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  path: string;
  description: string;
  image: string;
}

interface NavItem {
  label: string;
  path?: string;
  dropdown?: DropdownItem[];
}

const NAV: NavItem[] = [
  {
    label: 'Coffee Machines',
    dropdown: [
      {
        label: 'Commercial',
        path: '/machines/commercial',
        description: 'High-throughput workhorses',
        image: 'https://images.unsplash.com/photo-1442512515301-1f8b32323789?w=600&q=80',
      },
      {
        label: 'Multi-Use',
        path: '/machines/multi-use',
        description: 'Versatile prosumer machines',
        image: 'https://images.unsplash.com/photo-1510708287695-0b2a7037ef0d?w=600&q=80',
      },
      {
        label: 'Home',
        path: '/machines/home',
        description: 'Precision for the home barista',
        image: 'https://images.unsplash.com/photo-1517256064527-9d164d946d65?w=600&q=80',
      },
    ],
  },
  {
    label: 'Grinders',
    dropdown: [
      {
        label: 'On Demand',
        path: '/grinders/on-demand',
        description: 'Continuous hopper grinding',
        image: 'https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=600&q=80',
      },
      {
        label: 'Single Dose',
        path: '/grinders/single-dose',
        description: 'Batch-precise single shots',
        image: 'https://images.unsplash.com/photo-1516962393444-4e6e0f6f4e28?w=600&q=80',
      },
    ],
  },
  {
    label: 'Accessories',
    dropdown: [
      {
        label: 'Tampers',
        path: '/accessories/tampers',
        description: 'Precision puck prep',
        image: 'https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=600&q=80',
      },
      {
        label: 'Glass Cups',
        path: '/accessories/cups',
        description: 'Double-wall borosilicate',
        image: 'https://images.unsplash.com/photo-1572726729207-a78b9a5eb9ce?w=600&q=80',
      },
      {
        label: 'Scales',
        path: '/accessories/scales',
        description: 'Sub-gram brewing scales',
        image: 'https://images.unsplash.com/photo-1504630050765-fc0ab5f7a7b3?w=600&q=80',
      },
      {
        label: 'Hand Grinders',
        path: '/accessories/hand-grinders',
        description: 'Portable precision grinding',
        image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80',
      },
    ],
  },
  { label: 'Coffee', path: '/coffee' },
  { label: 'Tea', path: '/tea' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openDropdown = useCallback((name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 180);
  }, []);

  const activeItem = NAV.find((n) => n.label === activeDropdown);
  const hasDropdown = !!(activeDropdown && activeItem?.dropdown);

  return (
    <>
      {/* Backdrop when dropdown open */}
      {hasDropdown && (
        <div
          className="fixed inset-0 z-[90] bg-nearblack/20 backdrop-blur-[2px]"
          style={{ top: 68 }}
          onClick={() => setActiveDropdown(null)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] bg-white transition-shadow duration-200 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        {/* Bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-[68px]">
          <Link
            to="/"
            className="font-outfit text-[17px] font-semibold tracking-tight text-nearblack hover:text-salmon transition-colors duration-200"
          >
            Coffee Concept Store
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            {NAV.map((item) =>
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`font-dm text-[13px] px-3.5 py-2 rounded-full transition-colors duration-200 ${
                    location.pathname.startsWith(item.path)
                      ? 'text-salmon font-medium'
                      : 'text-nearblack/65 hover:text-salmon'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  key={item.label}
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className={`flex items-center gap-1 font-dm text-[13px] px-3.5 py-2 rounded-full transition-colors duration-200 ${
                      activeDropdown === item.label
                        ? 'text-salmon'
                        : 'text-nearblack/65 hover:text-salmon'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180 text-salmon' : ''
                      }`}
                    />
                  </button>
                </div>
              )
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-full hover:bg-stone transition-colors"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} className="text-nearblack" strokeWidth={1.5} />
          </button>
        </div>

        {/* Bottom border */}
        <div className="h-px bg-stone mx-6 md:mx-10" />

        {/* Dropdown panel */}
        <div
          className={`absolute top-[calc(100%-1px)] left-0 right-0 bg-white border-b border-stone shadow-xl overflow-hidden transition-all duration-300`}
          style={{
            opacity: hasDropdown ? 1 : 0,
            transform: hasDropdown ? 'translateY(0)' : 'translateY(-6px)',
            pointerEvents: hasDropdown ? 'auto' : 'none',
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
          onMouseEnter={() => activeDropdown ? openDropdown(activeDropdown) : undefined}
          onMouseLeave={scheduleClose}
        >
          {/* Salmon accent stripe */}
          <div className="h-[3px] bg-salmon" />
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
            {NAV.filter((n) => n.dropdown).map((item) => (
              <div
                key={item.label}
                className={activeDropdown === item.label ? 'block' : 'hidden'}
              >
                <div className="flex gap-4 flex-wrap">
                  {item.dropdown!.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="group/card block rounded-xl overflow-hidden relative flex-shrink-0"
                      style={{ width: 180, height: 240 }}
                    >
                      <img
                        src={sub.image}
                        alt={sub.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-salmon/0 group-hover/card:bg-salmon/55 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <h4 className="font-outfit text-white text-[16px] font-semibold leading-tight">
                          {sub.label}
                        </h4>
                        <p className="font-dm text-white/65 text-[12px] mt-0.5 leading-tight">
                          {sub.description}
                        </p>
                        <span className="font-dm text-white/50 text-[11px] uppercase tracking-[1.5px] mt-2.5 inline-flex items-center gap-1 group-hover/card:text-salmon transition-colors duration-200">
                          Explore →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-[200] transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
      >
        <div className="absolute inset-0 bg-nearblack" />
        <div className="relative h-full flex flex-col overflow-y-auto">
          {/* Mobile header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link
              to="/"
              className="font-outfit text-[16px] font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Coffee Concept Store
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2">
              <X size={24} className="text-white" strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile nav items */}
          <div className="px-6 py-4 flex-1">
            {NAV.map((item, i) => (
              <div
                key={item.label}
                className="border-b border-white/10"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-12px)',
                  transition: 'opacity 0.4s, transform 0.4s',
                  transitionDelay: mobileOpen ? `${i * 40 + 80}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className="flex items-center justify-between py-4 font-outfit text-[22px] font-medium text-white hover:text-salmon transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-4 font-outfit text-[22px] font-medium text-white"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={20}
                        className={`text-white/50 transition-transform duration-300 ${
                          mobileExpanded === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileExpanded === item.label ? 'max-h-[600px] pb-3' : 'max-h-0'
                      }`}
                    >
                      <div className="space-y-1">
                        {item.dropdown!.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5 hover:bg-salmon/20 border border-transparent hover:border-salmon/30 transition-all duration-200"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div>
                              <p className="font-dm text-[15px] text-white font-medium">{sub.label}</p>
                              <p className="font-dm text-[12px] text-white/45 mt-0.5">{sub.description}</p>
                            </div>
                            <span className="text-white/30 text-sm ml-4">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
