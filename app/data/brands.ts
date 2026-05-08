export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  modelCount: number;
}

export const brands: Brand[] = [
  {
    slug: "range-rover",
    name: "Range Rover",
    tagline: "ENGINE SOLUTION",
    desc: "Specialist engine rebuilds and replacements for the full Range Rover lineup — Evoque, Sport, Vogue, Velar, Autobiography and Defender.",
    modelCount: 6,
  },
  {
    slug: "land-rover",
    name: "Land Rover",
    tagline: "ENGINE SOLUTION",
    desc: "Expert engine restoration for all Land Rover platforms — Defender, Discovery, Freelander, Discovery Sport and more.",
    modelCount: 6,
  },
  {
    slug: "audi",
    name: "Audi",
    tagline: "ENGINE SOLUTION",
    desc: "Precision engine rebuilds and replacements for the full Audi range — A3, A4, A6, Q5, Q7 and high-performance S and RS variants.",
    modelCount: 6,
  },
  {
    slug: "mercedes",
    name: "Mercedes",
    tagline: "ENGINE SOLUTION",
    desc: "Expert engine restoration for Mercedes-Benz vehicles — C-Class, E-Class, S-Class, GLC, GLE and AMG performance models.",
    modelCount: 6,
  },
  {
    slug: "ford",
    name: "Ford",
    tagline: "ENGINE SOLUTION",
    desc: "Specialist engine rebuild and replacement service for Ford vehicles — Focus, Fiesta, Mondeo, Kuga, Transit and EcoBoost platforms.",
    modelCount: 6,
  },
  {
    slug: "bmw",
    name: "BMW",
    tagline: "ENGINE SOLUTION",
    desc: "Master-level engine rebuilds for the full BMW lineup — 3 Series, 5 Series, X3, X5, M Series and diesel TwinPower Turbo platforms.",
    modelCount: 6,
  },
  {
    slug: "jaguar",
    name: "Jaguar",
    tagline: "ENGINE SOLUTION",
    desc: "Specialist Jaguar engine solutions covering the XE, XF, XJ, F-Pace, E-Pace and the Ingenium petrol and diesel engine family.",
    modelCount: 6,
  },
  {
    slug: "volkswagen",
    name: "Volkswagen",
    tagline: "ENGINE SOLUTION",
    desc: "Comprehensive engine rebuild and replacement for Volkswagen models — Golf, Passat, Tiguan, Touareg and TSI/TDI engine platforms.",
    modelCount: 6,
  },
];
