import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const NAV_GROUPS = [
  {
    heading: 'Equipment',
    links: [
      { label: 'Coffee Machines', path: '/machines' },
      { label: 'Grinders', path: '/grinders' },
      { label: 'Accessories', path: '/accessories' },
    ],
  },
  {
    heading: 'Taste',
    links: [
      { label: 'Coffee', path: '/coffee' },
      { label: 'Tea', path: '/tea' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Contact', path: '/contact' },
    ],
  },
];

const COFFEE_PATTERN_SVG = `data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='white' stroke-width='1' opacity='0.06'%3E%3C!-- Coffee cup --%3E%3Cellipse cx='30' cy='52' rx='12' ry='3'/%3E%3Crect x='18' y='40' width='24' height='12' rx='2'/%3E%3Cpath d='M42 44 Q50 48 42 52'/%3E%3Cline x1='22' y1='34' x2='24' y2='38'/%3E%3Cline x1='30' y1='32' x2='30' y2='38'/%3E%3Cline x1='38' y1='34' x2='36' y2='38'/%3E%3C!-- Bean --%3E%3Cellipse cx='85' cy='25' rx='8' ry='12' transform='rotate(-30 85 25)'/%3E%3Cpath d='M85 13 Q90 25 85 37' transform='rotate(-30 85 25)'/%3E%3C!-- Small cup bottom right --%3E%3Cellipse cx='90' cy='90' rx='8' ry='2'/%3E%3Crect x='82' y='82' width='16' height='8' rx='1.5'/%3E%3Cpath d='M98 84 Q103 87 98 90'/%3E%3C!-- Bean top left --%3E%3Cellipse cx='15' cy='95' rx='6' ry='9' transform='rotate(20 15 95)'/%3E%3Cpath d='M15 86 Q19 95 15 104' transform='rotate(20 15 95)'/%3E%3C/g%3E%3C/svg%3E`;

export default function Footer() {
  return (
    <footer className="relative bg-nearblack text-offwhite overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${COFFEE_PATTERN_SVG}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '120px 120px',
        }}
      />

      {/* Salmon top accent */}
      <div className="relative h-1 bg-salmon" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 pt-14 pb-10">
        {/* Top row: logo + slogan */}
        <div className="mb-12 md:mb-16">
          <Link to="/" className="font-outfit font-bold text-[22px] md:text-[26px] text-white tracking-tight hover:text-salmon transition-colors duration-300 block mb-3">
            Coffee Concept Store
          </Link>
          <p className="font-dm italic text-[15px] text-white/40">Precision. Ritual. Obsession.</p>
        </div>

        {/* Middle row: nav groups + social */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mb-12 md:mb-16 border-t border-white/10 pt-12">
          {NAV_GROUPS.map((group) => (
            <div key={group.heading}>
              <p className="font-dm text-[11px] uppercase tracking-[3px] text-salmon mb-4">{group.heading}</p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="font-dm text-[13px] text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social column */}
          <div>
            <p className="font-dm text-[11px] uppercase tracking-[3px] text-salmon mb-4">Follow</p>
            <div className="space-y-3">
              <a
                href="https://instagram.com/coffeeconceptstore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-dm text-[13px] text-white/50 hover:text-white transition-colors duration-300"
              >
                <Instagram size={13} strokeWidth={1.5} /> Instagram
              </a>
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-[13px] text-white/50 hover:text-white transition-colors duration-300 block"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="font-dm text-[12px] text-white/30">42 Galle Road, Colombo 03, Sri Lanka</p>
          <p className="font-dm text-[11px] text-white/25">&copy; {new Date().getFullYear()} Coffee Concept Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
