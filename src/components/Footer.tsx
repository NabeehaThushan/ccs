import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Coffee Machines', path: '/machines' },
  { label: 'Accessories', path: '/accessories' },
  { label: 'Grinders', path: '/grinders' },
  { label: 'Coffee', path: '/coffee' },
  { label: 'Tea', path: '/tea' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-nearblack text-offwhite">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16">
          <Link to="/" className="font-bolsgi text-3xl md:text-4xl tracking-wider mb-8 md:mb-0">
            Coffee Concept Store
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className="font-dm text-[11px] uppercase tracking-[2px] text-midtone hover:text-accent transition-colors duration-300 accent-underline">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 border-t border-midtone/20 pt-12">
          <p className="font-bolsgi italic text-base md:text-lg text-offwhite mb-8 md:mb-0">
            Precision. Ritual. Obsession.
          </p>
          <div className="flex items-center gap-8">
            <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="font-dm text-[11px] uppercase tracking-[2px] text-midtone hover:text-accent transition-colors duration-300 accent-underline">WhatsApp</a>
            <a href="mailto:hello@coffeeconceptstore.com" className="font-dm text-[11px] uppercase tracking-[2px] text-midtone hover:text-accent transition-colors duration-300 accent-underline">Email</a>
            <a href="https://instagram.com/coffeeconceptstore" target="_blank" rel="noopener noreferrer" className="font-dm text-[11px] uppercase tracking-[2px] text-midtone hover:text-accent transition-colors duration-300 accent-underline flex items-center gap-2">
              <Instagram size={14} strokeWidth={1.5} />Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-midtone/20 pt-8">
          <p className="font-dm text-[12px] text-midtone mb-4 md:mb-0">42 Galle Road, Colombo 03, Sri Lanka</p>
          <p className="font-dm text-[11px] text-midtone">&copy; {new Date().getFullYear()} Coffee Concept Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
