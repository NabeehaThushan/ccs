import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { accessories, formatPrice, CURRENCY_SYMBOLS } from '../data/products';
import type { CurrencyCode } from '../data/products';

export default function Accessories() {
  const [currency, setCurrency] = useState<CurrencyCode>('LKR');
  const [flash, setFlash] = useState(false);

  const handleCurrencyChange = (newCurrency: CurrencyCode) => {
    setCurrency(newCurrency);
    setFlash(true);
    setTimeout(() => setFlash(false), 200);
  };

  return (
    <div className="bg-offwhite">
      <section className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h1 className="font-bolsgi text-[56px] md:text-[72px] text-nearblack mb-4 leading-[1.05]">Precision Accessories.</h1>
            <p className="font-dm italic text-[16px] text-nearblack/50 max-w-[480px]">Every tool chosen for the way it disappears into your workflow.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex justify-end mb-8">
            <div className="relative">
              <select
                value={currency}
                onChange={(e) => handleCurrencyChange(e.target.value as CurrencyCode)}
                className="appearance-none bg-stone font-dm text-[12px] uppercase tracking-[2px] text-nearblack px-5 py-2 pr-8 border border-midtone/30 focus:border-accent transition-colors duration-300"
                data-cursor-hover
              >
                {Object.keys(CURRENCY_SYMBOLS).map((code) => (
                  <option key={code} value={code}>{code}</option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-midtone text-[10px] pointer-events-none">&#9662;</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 60}>
                <div className="card-lift bg-stone p-0 group">
                  <div className="img-hover-zoom aspect-square overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bolsgi text-[18px] text-nearblack mb-2 accent-underline">{item.name}</h3>
                    <p className="font-dm text-[12px] text-nearblack/50 mb-3 leading-[1.5]">{item.description}</p>
                    <p className={`font-dm text-[14px] text-nearblack mb-4 ${flash ? 'currency-flash' : ''}`}>
                      {formatPrice(item.priceLKR, currency)}
                    </p>
                    <a href={`mailto:hello@coffeeconceptstore.com?subject=Enquiry: ${item.name}`} className="font-dm text-[13px] uppercase tracking-[2px] text-accent accent-underline">Enquire &rarr;</a>
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
