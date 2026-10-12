export interface Model {
  brand: string;
  model: string;
  service: string;
  desc: string;
}

export const rangeRoverModels: Model[] = [
  {
    brand: "RANGE ROVER",
    model: "EVOQUE",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Reconditioned and replacement engine options for every Evoque generation, covering both petrol and diesel variants.",
  },
  {
    brand: "RANGE ROVER",
    model: "SPORT",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Rebuild and replacement engines for the Range Rover Sport, matched precisely to diesel, petrol or hybrid specification.",
  },
  {
    brand: "RANGE ROVER",
    model: "VOGUE OLD MK-3",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Specialist engine sourcing and rebuild work for the L322 Vogue, tackling age-related wear with proven expertise..",
  },
  {
    brand: "RANGE ROVER",
    model: "VOGUE NEW MK-4",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Modern engine supply and rebuild solutions for the L405 Vogue, tested against strict factory tolerances throughout. ",
  },
  {
    brand: "RANGE ROVER",
    model: "VELAR",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Reconditioned engine supply and rebuild services for the Velar, restoring smooth, dependable everyday performance reliably. ",
  },
  {
    brand: "RANGE ROVER",
    model: "SPORT SVR",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "High-performance engine rebuild and replacement for the SVR, engineered to restore power without cutting corners. ",
  },
];

export const landRoverModels: Model[] = [
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 1",
    service: "ENGINE SUPPLY & FIT",
    desc: "Reconditioned and replacement engines for the original Discovery, sourced and tested to handle its classic diesel and V8 units.",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 2",
    service: "ENGINE SUPPLY & FIT",
    desc: "Engine supply and rebuild work for Discovery 2, covering Td5 diesel and V8 petrol variants with genuine care.",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 3",
    service: "ENGINE SUPPLY & FIT",
    desc: "Reconditioned engine sourcing for Discovery 3, matched precisely to TDV6 and other factory-fitted engine specifications available.",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 4",
    service: "ENGINE SUPPLY & FIT",
    desc: "Rebuild and replacement engines for Discovery 4, addressing SDV6 and TDV6 platforms with tested, warrantied units. ",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 5",
    service: "ENGINE SUPPLY & FIT",
    desc: "Modern engine supply and fitting for Discovery 5, covering Ingenium diesel platforms to strict testing standards. ",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY SPORT",
    service: "ENGINE SUPPLY & FIT",
    desc: "Reconditioned engine solutions for Discovery Sport, matched to its specific Ingenium diesel and petrol variants.",
  },
  {
    brand: "LAND ROVER",
    model: "FREELANDER 1",
    service: "ENGINE SUPPLY & FIT",
    desc: "Specialist engine sourcing for the Freelander 1, covering K-series and diesel units with proven rebuild expertise.",
  },
  {
    brand: "LAND ROVER",
    model: "FREELANDER 2",
    service: "ENGINE SUPPLY & FIT",
    desc: "Engine supply and rebuild services for Freelander 2, addressing TD4 diesel platforms with genuine tested parts. ",
  },
];

export const jaguarModels: Model[] = [
  {
    brand: "JAGUAR",
    model: "XE",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Specialist engine rebuild and replacement for the Jaguar XE, covering 2.0D Ingenium, 2.0T Ingenium and 3.0 V6 Supercharged units. Timing chain, turbo and full reconditioned engine replacement.",
  },
  {
    brand: "JAGUAR",
    model: "XF",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Expert engine solutions for the Jaguar XF, including 2.0D Ingenium, 3.0 V6D and 5.0 V8 Supercharged platforms. Full diagnostic, timing chain, turbo and engine replacement with OEM parts.",
  },
  {
    brand: "JAGUAR",
    model: "XJ",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Precision engine rebuild and replacement for the Jaguar XJ, covering 3.0 V6D, 5.0 V8 and 5.0 Supercharged units. Master-level engine rebuild and supply and fit with up to 24-month warranty.",
  },
  {
    brand: "JAGUAR",
    model: "F-PACE",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Specialist engine repair and rebuild for the Jaguar F-Pace, including 2.0D Ingenium, 3.0D V6 and 3.0 P400 Supercharged units. Full turbo, timing chain and reconditioned engine replacement service.",
  },
  {
    brand: "JAGUAR",
    model: "E-PACE",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Expert engine solutions for the Jaguar E-Pace, covering 2.0D Ingenium D150, D180 and P200, P250 petrol units. Timing chain, turbo and full engine replacement with genuine Jaguar OEM components.",
  },
  {
    brand: "JAGUAR",
    model: "F-TYPE",
    service: "PERFORMANCE ENGINE REBUILD",
    desc: "High-performance engine rebuild for the Jaguar F-Type, including 2.0T Ingenium, 3.0 V6 Supercharged and 5.0 V8 Supercharged units. Full strip-down rebuild with OEM components and road-test sign-off.",
  },
];

export const allBrandModels: Model[] = [
  ...rangeRoverModels,
  ...landRoverModels,
  ...jaguarModels,
];

export function toBrandSlug(brand: string) {
  return brand.toLowerCase().replace(/ /g, "-");
}

export function toModelSlug(model: string) {
  return model.toLowerCase().replace(/ /g, "-");
}

export function getModelsByBrandSlug(slug: string): Model[] {
  return allBrandModels.filter((m) => toBrandSlug(m.brand) === slug);
}
