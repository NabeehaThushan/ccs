import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const CHANNELS = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+94 77 123 4567',
    href: 'https://wa.me/94771234567',
    description: 'Chat with us instantly',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@coffeeconceptstore.com',
    href: 'mailto:hello@coffeeconceptstore.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Showroom',
    value: '42 Galle Road, Colombo 03',
    href: '#',
    description: 'Visit us in person',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@coffeeconceptstore',
    href: 'https://instagram.com/coffeeconceptstore',
    description: 'Follow our journey',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-nearblack pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-dm text-[11px] uppercase tracking-[4px] text-salmon mb-4">Get in Touch</p>
            <h1 className="font-outfit font-bold text-[52px] md:text-[80px] text-white leading-none mb-4" style={{ letterSpacing: '-0.03em' }}>
              Let's Talk.
            </h1>
            <p className="font-dm text-[15px] text-white/50 max-w-[480px] leading-[1.7]">
              Whether you're outfitting a café or finding the right machine for your kitchen counter — we're here for the conversation.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Salmon accent bar */}
      <div className="h-1.5 bg-salmon" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ─── FORM ─── */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <h2 className="font-outfit font-semibold text-[24px] text-nearblack mb-8 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-salmon" />
                Send a Message
              </h2>
            </ScrollReveal>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-offwhite border border-stone rounded-xl px-5 py-3.5 font-dm text-[14px] text-nearblack placeholder:text-midtone/60 focus:border-salmon focus:bg-white transition-all duration-300"
                      data-cursor-hover
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">Email</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-offwhite border border-stone rounded-xl px-5 py-3.5 font-dm text-[14px] text-nearblack placeholder:text-midtone/60 focus:border-salmon focus:bg-white transition-all duration-300"
                      data-cursor-hover
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-offwhite border border-stone rounded-xl px-5 py-3.5 font-dm text-[14px] text-nearblack focus:border-salmon focus:bg-white transition-all duration-300 appearance-none"
                    data-cursor-hover
                  >
                    <option value="">What are you looking for?</option>
                    <option value="machine">Coffee Machine Enquiry</option>
                    <option value="grinder">Grinder Enquiry</option>
                    <option value="accessories">Accessories Enquiry</option>
                    <option value="coffee">Coffee / Tea Enquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="font-dm text-[11px] uppercase tracking-[2px] text-midtone">Message</label>
                  <textarea
                    placeholder="Tell us what you have in mind..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-offwhite border border-stone rounded-xl px-5 py-3.5 font-dm text-[14px] text-nearblack placeholder:text-midtone/60 resize-none focus:border-salmon focus:bg-white transition-all duration-300"
                    data-cursor-hover
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-salmon text-white font-dm text-[12px] uppercase tracking-[2px] py-4 rounded-full hover:bg-nearblack transition-colors duration-300"
                  data-cursor-hover
                >
                  Send Message
                </button>
              </form>
            ) : (
              <ScrollReveal>
                <div className="bg-offwhite rounded-3xl p-12 text-center border border-stone">
                  <div className="w-16 h-16 rounded-full bg-salmon/10 flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 rounded-full bg-salmon flex items-center justify-center">
                      <span className="text-white text-[16px]">✓</span>
                    </div>
                  </div>
                  <p className="font-outfit font-bold text-[28px] text-nearblack mb-2" style={{ letterSpacing: '-0.02em' }}>Message sent.</p>
                  <p className="font-dm text-[15px] text-nearblack/55">We'll be in touch within 24 hours.</p>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* ─── CONTACT CHANNELS ─── */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal>
              <h2 className="font-outfit font-semibold text-[24px] text-nearblack mb-8 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-salmon" />
                Reach Us Directly
              </h2>
            </ScrollReveal>
            {CHANNELS.map((ch, i) => (
              <ScrollReveal key={ch.label} delay={i * 60}>
                <a
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-2xl border border-stone bg-offwhite hover:border-salmon hover:bg-salmon/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-salmon/10 group-hover:bg-salmon flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <ch.icon size={18} className="text-salmon group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-dm text-[11px] uppercase tracking-[2px] text-midtone mb-0.5">{ch.label}</p>
                    <p className="font-outfit font-semibold text-[15px] text-nearblack truncate group-hover:text-salmon transition-colors duration-300">{ch.value}</p>
                    <p className="font-dm text-[12px] text-midtone mt-0.5">{ch.description}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}

            {/* Hours */}
            <ScrollReveal delay={250}>
              <div className="p-5 rounded-2xl border border-stone bg-nearblack mt-6">
                <p className="font-dm text-[11px] uppercase tracking-[2px] text-salmon mb-4">Showroom Hours</p>
                {[
                  { d: 'Monday – Friday', t: '9:00 AM – 6:00 PM' },
                  { d: 'Saturday', t: '10:00 AM – 4:00 PM' },
                  { d: 'Sunday', t: 'By Appointment' },
                ].map(({ d, t }) => (
                  <div key={d} className="flex justify-between items-center py-2.5 border-b border-white/10 last:border-0">
                    <span className="font-dm text-[13px] text-white/60">{d}</span>
                    <span className="font-dm text-[13px] text-white">{t}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
