import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-offwhite pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <h1 className="font-bolsgi text-[56px] md:text-[72px] text-nearblack mb-4 leading-[1.05]">Let's Talk.</h1>
          <p className="font-dm italic text-[16px] text-nearblack/50 max-w-[420px] mb-12 md:mb-16">
            Whether you're outfitting a café or finding the right machine for your kitchen counter.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-transparent border-b border-midtone py-3 font-dm text-[15px] text-nearblack placeholder:text-midtone/60 transition-colors duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} data-cursor-hover />
                </div>
                <div>
                  <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent border-b border-midtone py-3 font-dm text-[15px] text-nearblack placeholder:text-midtone/60 transition-colors duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} data-cursor-hover />
                </div>
                <div>
                  <textarea placeholder="Message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent border-b border-midtone py-3 font-dm text-[15px] text-nearblack placeholder:text-midtone/60 resize-none transition-colors duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} data-cursor-hover />
                </div>
                <button type="submit" className="w-full bg-nearblack text-offwhite font-dm text-[12px] uppercase tracking-[2px] py-4 hover:bg-nearblack/80 transition-colors duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} data-cursor-hover>Send</button>
              </form>
            ) : (
              <div className="py-16 text-center">
                <p className="font-bolsgi italic text-[28px] text-nearblack">We'll be in touch.</p>
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-8 md:space-y-10">
              <div>
                <p className="font-dm text-[11px] uppercase tracking-[2px] text-midtone mb-2">WhatsApp</p>
                <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="font-dm text-[16px] text-nearblack hover:text-accent transition-colors accent-underline">+94 77 123 4567</a>
              </div>
              <div>
                <p className="font-dm text-[11px] uppercase tracking-[2px] text-midtone mb-2">Email</p>
                <a href="mailto:hello@coffeeconceptstore.com" className="font-dm text-[16px] text-nearblack hover:text-accent transition-colors accent-underline">hello@coffeeconceptstore.com</a>
              </div>
              <div>
                <p className="font-dm text-[11px] uppercase tracking-[2px] text-midtone mb-2">Address</p>
                <p className="font-dm text-[16px] text-nearblack leading-[1.65]">42 Galle Road<br />Colombo 03<br />Sri Lanka</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
