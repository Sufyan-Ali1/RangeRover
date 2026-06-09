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
    desc: "Expert engine restoration for all Land Rover platforms — Discovery 1–5, Discovery Sport, Freelander 1 and Freelander 2.",
    modelCount: 8,
  },
  {
    slug: "jaguar",
    name: "Jaguar",
    tagline: "ENGINE SOLUTION",
    desc: "Specialist Jaguar engine solutions covering the XE, XF, XJ, F-Pace, E-Pace and the Ingenium petrol and diesel engine family.",
    modelCount: 6,
  },
];
