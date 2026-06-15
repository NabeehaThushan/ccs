export interface Spec {
  label: string;
  value: string;
}

export interface MachineProduct {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'machine';
  machineType: 'commercial' | 'multi-use' | 'home';
  specs: Spec[];
  features: string[];
  images: string[];
  catalogueUrl: string;
}

export interface GrinderProduct {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'grinder';
  grinderType: 'on-demand' | 'single-dose';
  specs: Spec[];
  features: string[];
  images: string[];
  catalogueUrl: string;
}

export interface CoffeeProduct {
  id: string;
  slug: string;
  name: string;
  brand: 'Kaphie';
  category: 'coffee';
  origin: string;
  roastProfile: string;
  process: string;
  tastingNotes: string[];
  image: string;
}

export interface TeaProduct {
  id: string;
  slug: string;
  name: string;
  brand: 'Blue Trail';
  category: 'tea';
  blend: string;
  origin: string;
  steepTime: string;
  flavourNotes: string[];
  image: string;
  color: string;
  colorName: string;
}

export interface AccessoryProduct {
  id: string;
  slug: string;
  name: string;
  category: 'accessory';
  accessoryType: 'tamper' | 'cup' | 'scale' | 'hand-grinder' | 'other';
  image: string;
  description: string;
  priceLKR: number;
}

export type Product = MachineProduct | GrinderProduct | CoffeeProduct | TeaProduct | AccessoryProduct;

export const CURRENCY_RATES = {
  LKR: 1,
  USD: 0.0031,
  AED: 0.011,
} as const;

export type CurrencyCode = keyof typeof CURRENCY_RATES;

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  LKR: 'Rs.',
  USD: '$',
  AED: 'AED',
};

export const wendougeeMachines: MachineProduct[] = [
  {
    id: 'wendougee-lita-br',
    slug: 'wendougee-lita-br',
    name: 'LITA-BR',
    brand: 'Wendougee',
    category: 'machine',
    machineType: 'multi-use',
    specs: [
      { label: 'Boiler', value: 'Dual stainless steel — 0.75L + 0.75L' },
      { label: 'Pump', value: 'Rotary vane — 9 bar' },
      { label: 'Power', value: '1400W' },
      { label: 'Dimensions', value: '410 × 470 × 380 mm' },
      { label: 'Weight', value: '32 kg' },
      { label: 'Material', value: 'Brushed stainless steel body' },
    ],
    features: [
      'Dual boiler architecture delivers simultaneous brew and steam at stable temperatures, eliminating the wait between shots and milk preparation.',
      'Rotary vane pump operates at a whisper compared to vibration units, bringing commercial-grade silence to the home barista station.',
      'PID-controlled brew temperature holds within half a degree, giving every shot the thermal precision that separates good from transcendent.',
      'Brushed stainless construction resists fingerprinting while projecting the kind of permanence that rewards daily use for decades.',
    ],
    images: [
      'https://images.unsplash.com/photo-1510708287695-0b2a7037ef0d?w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=800&q=80',
      'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&q=80',
      'https://images.unsplash.com/photo-1572726729207-a78b9a5eb9ce?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
  {
    id: 'wendougee-lita-lr',
    slug: 'wendougee-lita-lr',
    name: 'LITA-LR',
    brand: 'Wendougee',
    category: 'machine',
    machineType: 'home',
    specs: [
      { label: 'Boiler', value: 'Single heat-exchange — 1.8L' },
      { label: 'Pump', value: 'Rotary vane — 9 bar' },
      { label: 'Power', value: '1200W' },
      { label: 'Dimensions', value: '390 × 450 × 360 mm' },
      { label: 'Weight', value: '28 kg' },
      { label: 'Material', value: 'Polished stainless steel + walnut accents' },
    ],
    features: [
      'Heat-exchange boiler design lets you brew and steam simultaneously through a single thermally-managed circuit, keeping things simple without sacrificing capability.',
      'Walnut accent panels introduce natural warmth without compromising the industrial precision of the stainless chassis.',
      'Rotary vane pump ensures quiet operation that respects the ritual — no mechanical roar to break the morning stillness.',
      'The LITA-LR is the entry point into serious extraction — everything you need, nothing you don\'t.',
    ],
    images: [
      'https://images.unsplash.com/photo-1517256064527-9d164d946d65?w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80',
      'https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
  {
    id: 'wendougee-lita-ba',
    slug: 'wendougee-lita-ba',
    name: 'LITA-BA',
    brand: 'Wendougee',
    category: 'machine',
    machineType: 'commercial',
    specs: [
      { label: 'Boiler', value: 'Dual SS + thermoblock — 1.0L + 0.75L' },
      { label: 'Pump', value: 'Rotary vane — adjustable 6–12 bar' },
      { label: 'Power', value: '1600W' },
      { label: 'Dimensions', value: '430 × 490 × 400 mm' },
      { label: 'Weight', value: '36 kg' },
      { label: 'Material', value: 'Matte black stainless steel' },
    ],
    features: [
      'Adjustable pump pressure opens the door to pre-infusion profiling — long, slow saturations that coax sweetness from lightly roasted origins.',
      'Thermoblock steam circuit reaches full pressure in under thirty seconds, making the LITA-BA the fastest machine in the Wendougee stable to go from cold to fully operational.',
      'Matte black finish absorbs light the way the machine absorbs attention — understated, confident, impossible to ignore.',
      'The flagship for those who believe the best tool is the one that disappears in your hand and appears in your cup.',
    ],
    images: [
      'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80',
      'https://images.unsplash.com/photo-1442512515301-1f8b32323789?w=800&q=80',
      'https://images.unsplash.com/photo-1504630050765-fc0ab5f7a7b3?w=800&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
];

export const wendougeeGrinders: GrinderProduct[] = [
  {
    id: 'wendougee-grinder-1',
    slug: 'wendougee-grinder-1',
    name: 'WG-64',
    brand: 'Wendougee',
    category: 'grinder',
    grinderType: 'on-demand',
    specs: [
      { label: 'Burr Size', value: '64mm flat steel' },
      { label: 'Adjustment', value: 'Stepless micrometric' },
      { label: 'RPM', value: '800' },
      { label: 'Hopper Capacity', value: '500g' },
      { label: 'Power', value: '300W' },
      { label: 'Weight', value: '12 kg' },
    ],
    features: [
      'Sixty-four millimetre flat burrs deliver the particle distribution that modern espresso demands — even extraction from centre to edge of the puck.',
      'Stepless micrometric adjustment means the distance between grind settings is measured in microns, not clicks — the difference between close and correct.',
      'Low RPM grinding preserves volatile aromatics that high-speed burrs burn off before they reach the portafilter.',
    ],
    images: [
      'https://images.unsplash.com/photo-1516962393444-4e6e0f6f4e28?w=800&q=80',
      'https://images.unsplash.com/photo-1509785308243-0c2e6f77a7a8?w=800&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd19383?w=800&q=80',
      'https://images.unsplash.com/photo-1501336352921-f7a88c6d6a4e?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
  {
    id: 'wendougee-grinder-2',
    slug: 'wendougee-grinder-2',
    name: 'WG-83',
    brand: 'Wendougee',
    category: 'grinder',
    grinderType: 'on-demand',
    specs: [
      { label: 'Burr Size', value: '83mm conical steel' },
      { label: 'Adjustment', value: 'Stepless with digital readout' },
      { label: 'RPM', value: '650' },
      { label: 'Hopper Capacity', value: '800g' },
      { label: 'Power', value: '450W' },
      { label: 'Weight', value: '18 kg' },
    ],
    features: [
      'Eighty-three millimetre conical burrs produce a bimodal distribution that espresso purists prize — body and clarity in the same shot.',
      'Digital grind readout eliminates guesswork when switching between beans, letting you return to a proven setting with repeatable precision.',
      'The WG-83 is the grinder for people who understand that the machine makes the shot but the grinder makes the coffee.',
    ],
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=800&q=80',
      'https://images.unsplash.com/photo-1521017432531-fbd62d7a6393?w=800&q=80',
      'https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
];

export const tzMachines: MachineProduct[] = [
  {
    id: 'tz-alea',
    slug: 'tz-alea',
    name: 'Alea',
    brand: 'T&Z',
    category: 'machine',
    machineType: 'home',
    specs: [
      { label: 'Boiler', value: 'Single PID-controlled — 2.0L' },
      { label: 'Pump', value: 'Vibration — 15 bar (regulated to 9)' },
      { label: 'Power', value: '1100W' },
      { label: 'Dimensions', value: '370 × 420 × 340 mm' },
      { label: 'Weight', value: '24 kg' },
      { label: 'Material', value: 'Powder-coated steel + brass group' },
    ],
    features: [
      'E61-style group head with thermosiphon circulation maintains brew-path stability without active heating — a mechanical solution to a thermal problem.',
      'PID controller replaces the pressurestat, holding brew water within a single degree and making temperature surfing a thing of the past.',
      'Powder-coated steel in matte finishes gives the Alea an appliance presence that belongs in architecture, not just kitchens.',
      'The Alea is T&Z\'s proof that precision doesn\'t require complexity — it requires conviction.',
    ],
    images: [
      'https://images.unsplash.com/photo-1517256064527-9d164d946d65?w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80',
      'https://images.unsplash.com/photo-1442512515301-1f8b32323789?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
  {
    id: 'tz-zenith',
    slug: 'tz-zenith',
    name: 'Zenith',
    brand: 'T&Z',
    category: 'machine',
    machineType: 'commercial',
    specs: [
      { label: 'Boiler', value: 'Dual PID — 0.6L brew + 1.2L steam' },
      { label: 'Pump', value: 'Rotary vane — 9 bar' },
      { label: 'Power', value: '1500W' },
      { label: 'Dimensions', value: '420 × 480 × 390 mm' },
      { label: 'Weight', value: '34 kg' },
      { label: 'Material', value: 'Polished chrome + black lacquer panels' },
    ],
    features: [
      'Independent brew and steam boilers mean the Zenith never compromises — steam pressure stays full even during back-to-back shot sequences.',
      'Rotary vane pump runs at conversation-level volume, a feature you appreciate every single morning.',
      'Black lacquer panels with polished chrome trim are not decoration — they are the visual language of a machine that takes itself as seriously as you take your coffee.',
      'T&Z built the Zenith for people who have outgrown their first serious machine and know exactly what they want next.',
    ],
    images: [
      'https://images.unsplash.com/photo-1510708287695-0b2a7037ef0d?w=800&q=80',
      'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80',
      'https://images.unsplash.com/photo-1504630050765-fc0ab5f7a7b3?w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
];

export const gemilaiMachines: MachineProduct[] = [
  {
    id: 'gemilai-cr-100',
    slug: 'gemilai-cr-100',
    name: 'CR-100',
    brand: 'Gemilai',
    category: 'machine',
    machineType: 'home',
    specs: [
      { label: 'Boiler', value: 'Single thermoblock — 1.5L equivalent' },
      { label: 'Pump', value: 'Vibration — 15 bar' },
      { label: 'Power', value: '1050W' },
      { label: 'Dimensions', value: '340 × 380 × 320 mm' },
      { label: 'Weight', value: '18 kg' },
      { label: 'Material', value: 'ABS + stainless steel trim' },
    ],
    features: [
      'Thermoblock heating delivers near-instant brew readiness — the CR-100 is designed for those who want quality without the warm-up ritual.',
      'Compact footprint fits spaces that full-size prosumers cannot, without sacrificing the pressure or temperature stability needed for proper extraction.',
      'Gemilai brings commercial thinking to a domestic frame — every design choice answers a real user need.',
    ],
    images: [
      'https://images.unsplash.com/photo-1509785308243-0c2e6f77a7a8?w=800&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
      'https://images.unsplash.com/photo-1516962393444-4e6e0f6f4e28?w=800&q=80',
      'https://images.unsplash.com/photo-1501336352921-f7a88c6d6a4e?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
  {
    id: 'gemilai-cr-200',
    slug: 'gemilai-cr-200',
    name: 'CR-200',
    brand: 'Gemilai',
    category: 'machine',
    machineType: 'multi-use',
    specs: [
      { label: 'Boiler', value: 'Dual thermoblock — 0.5L + 0.5L' },
      { label: 'Pump', value: 'Vibration — 15 bar (regulated)' },
      { label: 'Power', value: '1300W' },
      { label: 'Dimensions', value: '380 × 420 × 350 mm' },
      { label: 'Weight', value: '22 kg' },
      { label: 'Material', value: 'Stainless steel + matte polymer' },
    ],
    features: [
      'Dual thermoblock architecture brings dual-boiler capability to a price point that makes the CR-200 one of the most compelling machines in its class.',
      'Independent temperature circuits mean you can steam milk and pull shots without any thermal compromise — a feature usually reserved for machines at twice the price.',
      'Gemilai designed the CR-200 to be the machine that proves you don\'t need to spend a fortune to take espresso seriously.',
    ],
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd19383?w=800&q=80',
      'https://images.unsplash.com/photo-1521017432531-fbd62d7a6393?w=800&q=80',
      'https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1572726729207-a78b9a5eb9ce?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
];

export const balenareGrinders: GrinderProduct[] = [
  {
    id: 'balenare-pro-64',
    slug: 'balenare-pro-64',
    name: 'Pro 64',
    brand: 'Balenare',
    category: 'grinder',
    grinderType: 'on-demand',
    specs: [
      { label: 'Burr Size', value: '64mm flat Italian steel' },
      { label: 'Adjustment', value: 'Stepless worm drive' },
      { label: 'RPM', value: '750' },
      { label: 'Hopper Capacity', value: '450g' },
      { label: 'Power', value: '350W' },
      { label: 'Weight', value: '14 kg' },
    ],
    features: [
      'Italian-made flat burrs deliver the uniform particle size that makes extraction predictable and dial-in sessions shorter.',
      'Worm drive adjustment eliminates backlash — every turn of the dial changes the grind in one direction only, with no slack to confuse your reference point.',
      'At 750 RPM the Pro 64 grinds cool and consistent, preserving the delicate top notes that high-speed grinders vaporize.',
      'The Pro 64 is the workhorse — designed to run all day in a café or sit proudly on a home barista\'s counter.',
    ],
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=800&q=80',
      'https://images.unsplash.com/photo-1509785308243-0c2e6f77a7a8?w=800&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd19383?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
  {
    id: 'balenare-elite-83',
    slug: 'balenare-elite-83',
    name: 'Elite 83',
    brand: 'Balenare',
    category: 'grinder',
    grinderType: 'on-demand',
    specs: [
      { label: 'Burr Size', value: '83mm conical Italian steel' },
      { label: 'Adjustment', value: 'Stepless with numeric dial' },
      { label: 'RPM', value: '580' },
      { label: 'Hopper Capacity', value: '700g' },
      { label: 'Power', value: '500W' },
      { label: 'Weight', value: '22 kg' },
    ],
    features: [
      'Eighty-three millimetre conical burrs produce the broad distribution that gives espresso its syrupy body while preserving aromatic clarity in the upper register.',
      'At 580 RPM the Elite 83 is among the slowest prosumer grinders available — a deliberate choice that treats coffee grounds with the thermal gentleness they deserve.',
      'Numeric dial adjustment brings repeatable precision to blend switching — log the number, return to it, trust the result.',
      'The Elite 83 is Balenare\'s statement that grinders deserve the same engineering ambition as the machines they serve.',
    ],
    images: [
      'https://images.unsplash.com/photo-1516962393444-4e6e0f6f4e28?w=800&q=80',
      'https://images.unsplash.com/photo-1510708287695-0b2a7037ef0d?w=800&q=80',
      'https://images.unsplash.com/photo-1501336352921-f7a88c6d6a4e?w=800&q=80',
      'https://images.unsplash.com/photo-1521017432531-fbd62d7a6393?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
  {
    id: 'balenare-studio-58',
    slug: 'balenare-studio-58',
    name: 'Studio 58',
    brand: 'Balenare',
    category: 'grinder',
    grinderType: 'single-dose',
    specs: [
      { label: 'Burr Size', value: '58mm flat steel' },
      { label: 'Adjustment', value: 'Collar stepped — 40 clicks' },
      { label: 'RPM', value: '900' },
      { label: 'Hopper Capacity', value: '300g' },
      { label: 'Power', value: '250W' },
      { label: 'Weight', value: '9 kg' },
    ],
    features: [
      'The Studio 58 makes Balenare quality accessible — forty-click stepped adjustment is intuitive for newcomers while precise enough for seasoned baristas.',
      'Compact and relatively lightweight at nine kilos, the Studio 58 fits smaller counters without demanding the real estate of a commercial grinder.',
      'Fifty-eight millimetre burrs strike the balance between speed and consistency — fast enough for busy mornings, precise enough for careful dial-in.',
    ],
    images: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80',
      'https://images.unsplash.com/photo-1442512515301-1f8b32323789?w=800&q=80',
      'https://images.unsplash.com/photo-1504630050765-fc0ab5f7a7b3?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
  {
    id: 'balenare-lab-68',
    slug: 'balenare-lab-68',
    name: 'Lab 68',
    brand: 'Balenare',
    category: 'grinder',
    grinderType: 'single-dose',
    specs: [
      { label: 'Burr Size', value: '68mm flat SSP multipurpose' },
      { label: 'Adjustment', value: 'Stepless worm drive + digital timer' },
      { label: 'RPM', value: '680' },
      { label: 'Hopper Capacity', value: '600g' },
      { label: 'Power', value: '400W' },
      { label: 'Weight', value: '16 kg' },
    ],
    features: [
      'SSP multipurpose burrs represent the cutting edge of grind particle engineering — a different geometry from standard flat burrs, producing a distribution that flatters both light and dark roasts.',
      'Built-in digital timer doses to a tenth of a second, turning the guesswork of single-dosing into a repeatable workflow.',
      'The Lab 68 is Balenare\'s experimental platform — for people who treat grind adjustment as craft, not chore.',
      'Six hundred and eighty RPM sits in the sweet spot between thermal safety and practical speed, a grind rate that respects the bean and the barista\'s schedule.',
    ],
    images: [
      'https://images.unsplash.com/photo-1517256064527-9d164d946d65?w=800&q=80',
      'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80',
      'https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1572726729207-a78b9a5eb9ce?w=800&q=80',
    ],
    catalogueUrl: '#',
  },
];

export const kaphieCoffee: CoffeeProduct[] = [
  {
    id: 'kaphie-ethiopia-yirgacheffe',
    slug: 'kaphie-ethiopia-yirgacheffe',
    name: 'Ethiopia Yirgacheffe',
    brand: 'Kaphie',
    category: 'coffee',
    origin: 'Yirgacheffe, Ethiopia',
    roastProfile: 'Light — preserves floral top notes',
    process: 'Washed',
    tastingNotes: ['Jasmine', 'Lemon zest', 'Raw honey', 'Silk finish'],
    image: 'https://images.unsplash.com/photo-1447933601403-0b6687b8e018?w=800&q=80',
  },
  {
    id: 'kaphie-colombia-huila',
    slug: 'kaphie-colombia-huila',
    name: 'Colombia Huila',
    brand: 'Kaphie',
    category: 'coffee',
    origin: 'Huila, Colombia',
    roastProfile: 'Medium — balanced sweetness and body',
    process: 'Washed',
    tastingNotes: ['Red apple', 'Caramel', 'Milk chocolate', 'Clean finish'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=800&q=80',
  },
  {
    id: 'kaphie-brazil-santos',
    slug: 'kaphie-brazil-santos',
    name: 'Brazil Santos',
    brand: 'Kaphie',
    category: 'coffee',
    origin: 'Santos, Brazil',
    roastProfile: 'Medium-dark — full body, low acidity',
    process: 'Natural',
    tastingNotes: ['Dark chocolate', 'Roasted almond', 'Molasses', 'Velvet body'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=800&q=80',
  },
];

export const blueTrailTea: TeaProduct[] = [
  {
    id: 'blue-trail-ceylon-white',
    slug: 'blue-trail-ceylon-white',
    name: 'Ceylon White',
    brand: 'Blue Trail',
    category: 'tea',
    blend: 'Single-origin silver tips',
    origin: 'Nuwara Eliya, Sri Lanka',
    steepTime: '4 minutes at 80°C',
    flavourNotes: ['Pineapple', 'Honeysuckle', 'Peach skin', 'Airy sweetness'],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
    color: '#F2F2F2',
    colorName: 'White',
  },
  {
    id: 'blue-trail-jasmine-oolong',
    slug: 'blue-trail-jasmine-oolong',
    name: 'Jasmine Oolong',
    brand: 'Blue Trail',
    category: 'tea',
    blend: 'Tieguanyin base with jasmine blossoms',
    origin: 'Fujian, China',
    steepTime: '3 minutes at 90°C',
    flavourNotes: ['Jasmine petal', 'Orchid', 'Creamed honey', 'Lingering flora'],
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9ffde?w=800&q=80',
    color: '#F2BFBF',
    colorName: 'Blush',
  },
  {
    id: 'blue-trail-earl-grey-reserve',
    slug: 'blue-trail-earl-grey-reserve',
    name: 'Earl Grey Reserve',
    brand: 'Blue Trail',
    category: 'tea',
    blend: 'Ceylon OP base + Calabrian bergamot',
    origin: 'Ceylon + Calabria',
    steepTime: '3.5 minutes at 95°C',
    flavourNotes: ['Bergamot zest', 'Malt', 'Cedar', 'Brisk finish'],
    image: 'https://images.unsplash.com/photo-1587049352846-6bd9e4e4a2ab?w=800&q=80',
    color: '#2C2C2A',
    colorName: 'Charcoal',
  },
  {
    id: 'blue-trail-chamomile-citrus',
    slug: 'blue-trail-chamomile-citrus',
    name: 'Chamomile Citrus',
    brand: 'Blue Trail',
    category: 'tea',
    blend: 'Egyptian chamomile + lemon myrtle',
    origin: 'Nile Delta, Egypt',
    steepTime: '5 minutes at 95°C',
    flavourNotes: ['Chamomile blossom', 'Lemon zest', 'Honey', 'Gentle warmth'],
    image: 'https://images.unsplash.com/photo-1597318181548-9dda53f0985e?w=800&q=80',
    color: '#F0D86A',
    colorName: 'Buttercup',
  },
  {
    id: 'blue-trail-chai-masala',
    slug: 'blue-trail-chai-masala',
    name: 'Chai Masala',
    brand: 'Blue Trail',
    category: 'tea',
    blend: 'Assam black + traditional spices',
    origin: 'Assam, India',
    steepTime: '4 minutes at 98°C',
    flavourNotes: ['Cinnamon', 'Cardamom', 'Ginger', 'Cloves', 'Warming spice'],
    image: 'https://images.unsplash.com/photo-1571934811356-18141e9e7b4b?w=800&q=80',
    color: '#C4857A',
    colorName: 'Spice',
  },
  {
    id: 'blue-trail-orange-bergamot',
    slug: 'blue-trail-orange-bergamot',
    name: 'Orange Bergamot',
    brand: 'Blue Trail',
    category: 'tea',
    blend: 'Ceylon + blood orange + bergamot oil',
    origin: 'Ceylon + Sicily',
    steepTime: '3 minutes at 92°C',
    flavourNotes: ['Blood orange', 'Bergamot', 'Citrus brightness', 'Clean finish'],
    image: 'https://images.unsplash.com/photo-1627435372345-6b4d6d1b3c07?w=800&q=80',
    color: '#F0A878',
    colorName: 'Citrus',
  },
  {
    id: 'blue-trail-matcha-ceremonial',
    slug: 'blue-trail-matcha-ceremonial',
    name: 'Matcha Ceremonial',
    brand: 'Blue Trail',
    category: 'tea',
    blend: 'Ceremonial grade Uji matcha',
    origin: 'Uji, Kyoto, Japan',
    steepTime: 'Whisk at 75°C',
    flavourNotes: ['Umami', 'Seaweed', 'Fresh grass', 'Velvety sweetness'],
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04606a7?w=800&q=80',
    color: '#C8D57A',
    colorName: 'Matcha',
  },
  {
    id: 'blue-trail-darjeeling-first-flush',
    slug: 'blue-trail-darjeeling-first-flush',
    name: 'Darjeeling First Flush',
    brand: 'Blue Trail',
    category: 'tea',
    blend: 'Spring harvest from high elevation',
    origin: 'Darjeeling, India',
    steepTime: '3 minutes at 85°C',
    flavourNotes: ['Muscatel', 'Floral notes', 'Astringent crispness', 'Mountain air'],
    image: 'https://images.unsplash.com/photo-1564945196010-2c8dee99af2a?w=800&q=80',
    color: '#7ABCC8',
    colorName: 'Teal',
  },
];

export const accessories: AccessoryProduct[] = [
  {
    id: 'acc-tamper',
    slug: 'acc-tamper',
    name: 'Precision Tamper — 58mm',
    category: 'accessory',
    accessoryType: 'tamper',
    image: 'https://images.unsplash.com/photo-1514554595789-096f822a3d8b?w=800&q=80',
    description: 'CNC-machined stainless steel with ergonomic walnut handle',
    priceLKR: 18500,
  },
  {
    id: 'acc-distribution-tool',
    slug: 'acc-distribution-tool',
    name: 'Distribution Tool — 58mm',
    category: 'accessory',
    accessoryType: 'tamper',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    description: 'Adjustable depth wiper for even puck preparation',
    priceLKR: 22000,
  },
  {
    id: 'acc-espresso-cup',
    slug: 'acc-espresso-cup',
    name: 'Double-Wall Espresso Glass — 80ml',
    category: 'accessory',
    accessoryType: 'cup',
    image: 'https://images.unsplash.com/photo-1495474472287-4d23bc958e23?w=800&q=80',
    description: 'Borosilicate double-wall glass with insulating air pocket',
    priceLKR: 8900,
  },
  {
    id: 'acc-latte-cup',
    slug: 'acc-latte-cup',
    name: 'Flat White Glass — 200ml',
    category: 'accessory',
    accessoryType: 'cup',
    image: 'https://images.unsplash.com/photo-1572726729207-a78b9a5eb9ce?w=800&q=80',
    description: 'Tulip-shaped borosilicate for flat white and cortado',
    priceLKR: 7200,
  },
  {
    id: 'acc-scale',
    slug: 'acc-scale',
    name: 'Brewing Scale — 0.1g',
    category: 'accessory',
    accessoryType: 'scale',
    image: 'https://images.unsplash.com/photo-1504630050765-fc0ab5f7a7b3?w=800&q=80',
    description: 'Timed precision scale with waterproof surface',
    priceLKR: 9800,
  },
  {
    id: 'acc-portafilter-scale',
    slug: 'acc-portafilter-scale',
    name: 'Portafilter Scale — 0.01g',
    category: 'accessory',
    accessoryType: 'scale',
    image: 'https://images.unsplash.com/photo-1516962393444-4e6e0f6f4e28?w=800&q=80',
    description: 'Ultra-precise scale that fits under the portafilter',
    priceLKR: 14500,
  },
  {
    id: 'acc-hand-grinder-classic',
    slug: 'acc-hand-grinder-classic',
    name: 'Hand Grinder — Classic 48',
    category: 'accessory',
    accessoryType: 'hand-grinder',
    image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80',
    description: '48mm conical burrs in a compact stainless body — pour-over and espresso capable',
    priceLKR: 24000,
  },
  {
    id: 'acc-hand-grinder-travel',
    slug: 'acc-hand-grinder-travel',
    name: 'Hand Grinder — Travel 38',
    category: 'accessory',
    accessoryType: 'hand-grinder',
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&q=80',
    description: 'Titanium-coated 38mm burrs, folds to 160mm for travel',
    priceLKR: 19500,
  },
];

export const allMachines: MachineProduct[] = [
  ...gemilaiMachines,
  ...tzMachines,
  ...wendougeeMachines,
];

export const allGrinders: GrinderProduct[] = [
  ...balenareGrinders,
  ...wendougeeGrinders,
];

export function getProductBySlug(slug: string): Product | undefined {
  return [
    ...allMachines,
    ...allGrinders,
    ...kaphieCoffee,
    ...blueTrailTea,
    ...accessories,
  ].find((p) => p.slug === slug);
}

export function formatPrice(lkr: number, currency: CurrencyCode): string {
  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];
  const value = lkr * rate;
  if (currency === 'LKR') return `${symbol} ${value.toLocaleString('en-LK', { minimumFractionDigits: 0 })}`;
  if (currency === 'USD') return `${symbol}${value.toFixed(2)}`;
  return `${symbol} ${value.toFixed(2)}`;
}
