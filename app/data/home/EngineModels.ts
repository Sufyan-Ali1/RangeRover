import { Model } from "../types";
import { EngineModelsMain } from "../types";

export const engineModels: EngineModelsMain = {
  label: "Browse By Model",
  heading: "Engine Rebuilds Across Every Range Rover and Land Rover Model",
  description:
    "Whatever you drive, our engineers understand its engine inside and out. Explore model-specific rebuild and supply-and-fit services built around your exact vehicle.",
  viewMoreHref: "/engines",
};

export const rangeRoverModels: Model[] = [
  {
    brand: "RANGE ROVER",
    model: "EVOQUE",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Specialist rebuild and replacement services for Evoque engines, addressing common faults with precision engineering and genuine parts",
  },
  {
    brand: "RANGE ROVER",
    model: "SPORT",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Full rebuild and replacement solutions for Range Rover Sport engines, restoring power, smoothness and long-term reliability. ",
  },
  {
    brand: "RANGE ROVER",
    model: "VOGUE OLD MK-3",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Dedicated rebuild expertise for the MK-3 Vogue, tackling age-related wear with proven engineering methods and quality parts. ",
  },
  {
    brand: "RANGE ROVER",
    model: "VOGUE NEW MK-4",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Modern rebuild and replacement services for MK-4 Vogue engines, matched to strict factory tolerances and performance standards.",
  },
  {
    brand: "RANGE ROVER",
    model: "VELAR",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Precision rebuild and replacement work for Velar engines, restoring refinement and dependable everyday performance.",
  },
  {
    brand: "RANGE ROVER",
    model: "SPORT SVR",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "High-performance rebuild expertise for the SVR, engineered to restore power delivery without compromising reliability.",
  },
];

export const landRoverModels: Model[] = [
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 1",
    service: "ENGINE SUPPLY & FIT",
    desc: "Reliable engine supply and fitting for the original Discovery, using thoroughly tested reconditioned units.",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 2",
    service: "ENGINE SUPPLY & FIT",
    desc: " Trusted engine replacement for Discovery 2 owners, backed by warranty-covered supply and professional fitting. ",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 3",
    service: "ENGINE SUPPLY & FIT",
    desc: " Quality reconditioned engines supplied and fitted for Discovery 3, restoring dependable long-distance performance.",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 4",
    service: "ENGINE SUPPLY & FIT",
    desc: "Expert supply-and-fit service for Discovery 4 engines, matched precisely to your vehicle's specification. ",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 5",
    service: "ENGINE SUPPLY & FIT",
    desc: "Modern engine supply and fitting for Discovery 5, using genuine and OEM-grade replacement units.",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY SPORT",
    service: "ENGINE SUPPLY & FIT",
    desc: "Efficient engine replacement for Discovery Sport, keeping downtime minimal without cutting corners on quality.",
  },
  {
    brand: "LAND ROVER",
    model: "FREELANDER 1",
    service: "ENGINE SUPPLY & FIT",
    desc: " Dependable engine supply and fitting for the Freelander 1, ideal for owners seeking a cost-effective, lasting solution. ",
  },
  {
    brand: "LAND ROVER",
    model: "FREELANDER 2",
    service: "ENGINE SUPPLY & FIT",
    desc: " Professional engine replacement for Freelander 2, restoring smooth performance with fully tested units.",
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
