export interface ServiceCard {
  title: string;
  description: string;
}

// ─────────────────────────────────────────────────────────
// BRAND OVERVIEW CARDS — used on model pages
// ─────────────────────────────────────────────────────────

export const serviceCards: ServiceCard[] = [
  {
    title: "Range Rover Engines",
    description:
      "Specialist rebuilds and replacements for the full Range Rover lineup — TDV6, SDV6, SDV8 and 5.0L V8 Supercharged — using genuine OEM parts, backed by up to 24 months warranty and free UK collection and delivery.",
  },
  {
    title: "Land Rover Engines",
    description:
      "Expert engine restoration for all Land Rover models — Defender, Discovery, Freelander and Discovery Sport — covering the full TD4, TD5, TDCi, SDV6 and Ingenium range with up to 24 months warranty on every job.",
  },
  {
    title: "Audi Engines",
    description:
      "Precision rebuilds and replacements for the full Audi range across 2.0 TDI, 3.0 TDI BiTurbo, 2.0 TFSI and 4.0 TFSI V8 platforms — timing belt, turbo, rod bearing and complete reconditioned engine supply and fit.",
  },
  {
    title: "BMW Engines",
    description:
      "Master-level engine rebuilds for BMW 3 Series, 5 Series, X3, X5, M3 and M5 — specialising in B47, N57, B58 and S63 platforms with complete reconditioning to original factory specification.",
  },
  {
    title: "Mercedes Engines",
    description:
      "Expert engine solutions for Mercedes-Benz C-Class, E-Class, GLC, GLE and AMG models across OM651, OM642, M274 and M177/M178 platforms — injector seals, oil cooler leaks, timing chain and full engine rebuilds.",
  },
  {
    title: "Ford Engines",
    description:
      "Specialist rebuild and replacement for Ford Focus, Fiesta, Mondeo, Kuga and Transit across the 1.0 EcoBoost, 2.0 EcoBoost, 2.0 TDCi and 5.0L Coyote platforms — head gaskets, timing belt and full supply and fit.",
  },
  {
    title: "Jaguar Engines",
    description:
      "Specialist rebuilds and replacements for Jaguar XE, XF, XJ, F-Pace and F-Type across the full Ingenium, 3.0 V6 Supercharged and 5.0 V8 Supercharged range — OEM components, up to 24 months warranty.",
  },
  {
    title: "Volkswagen Engines",
    description:
      "Comprehensive rebuild and replacement for VW Golf, Passat, Tiguan and Touareg across 1.5 TSI, 2.0 TDI, 2.0 TSI and 3.0 TDI V6 platforms — timing belt, turbo, and full reconditioned engine supply and fit.",
  },
];

// ─────────────────────────────────────────────────────────
// PER-SERVICE CARDS — unique content per service page
// ─────────────────────────────────────────────────────────

const serviceCardsBySlug: Record<string, ServiceCard[]> = {

  "engine-rebuild": [
    {
      title: "Range Rover Engine Rebuild",
      description:
        "Full strip-down, ultrasonic cleaning, bore honing and OEM parts replacement across the TDV6, SDV6, SDV8 and 5.0L V8 Supercharged — every rebuild dynamometer tested and backed by up to 24 months warranty.",
    },
    {
      title: "Land Rover Engine Rebuild",
      description:
        "Expert rebuilds on the full Land Rover range — Defender TD5/TDCi, Discovery TDV6/SDV6, Freelander SD4 and Discovery Sport Ingenium — with a 200-point inspection and OEM parts on every job.",
    },
    {
      title: "BMW Engine Rebuild",
      description:
        "Specialist BMW engine rebuilds across N47, N57, B58 and S63 platforms — addressing timing chain wear, rod bearings and swirl flap faults — rebuilt to factory tolerances and signed off with a dynamometer test.",
    },
    {
      title: "Jaguar Engine Rebuild",
      description:
        "Precision Jaguar engine rebuilds for XE, XF, XJ, F-Pace and F-Type — covering Ingenium, 3.0 V6 Supercharged and 5.0 V8 Supercharged platforms — using genuine OEM components with up to 24 months warranty.",
    },
  ],

  "timing-chain-replacement": [
    {
      title: "Range Rover Timing Chain",
      description:
        "Full chain assembly, tensioners, guides and balance shaft replacement on the TDV6 and SDV6 — treating the root cause with OEM Morse components and a complete oil system flush before every sign-off.",
    },
    {
      title: "Land Rover Timing Chain",
      description:
        "Specialist timing chain replacement for Defender TDCi, Discovery TDV6 and Freelander SD4 — full kit including primary and secondary chains, tensioners, guides and sprockets using genuine OEM components.",
    },
    {
      title: "BMW Timing Chain",
      description:
        "Expert replacement for the N47 and N57 — full primary chain, balance shaft chain, tensioners, guides and oil jets using genuine BMW OEM components, with a full oil system clean after every fitment.",
    },
    {
      title: "Audi Timing Chain",
      description:
        "Complete chain assembly, tensioners, guides and dampers for the Audi 2.0 TDI, 2.7 TDI and 3.0 TDI — OEM components throughout, with an oil system flush and pressure test before every sign-off.",
    },
  ],

  "turbo-replacement": [
    {
      title: "Range Rover Turbo Replacement",
      description:
        "Root-cause diagnosis, oil feed and return line inspection, actuator calibration and boost pressure verification on the TDV6 and SDV6 — OEM-grade or genuine Land Rover turbo units on every replacement.",
    },
    {
      title: "Land Rover Turbo Replacement",
      description:
        "Specialist turbo replacement for Defender TDCi, Discovery TDV6, Freelander SD4 and Discovery Sport TD4 — full root-cause diagnosis before any parts are ordered, with a boost pressure and smoke test on completion.",
    },
    {
      title: "Audi Turbo Replacement",
      description:
        "OEM-grade Garrett or BorgWarner turbo fitment for the Audi 2.0 TDI, 3.0 TDI and 4.0 TFSI RS — full oil line inspection, intake carbon clean and boost pressure test included on every replacement.",
    },
    {
      title: "Mercedes Turbo Replacement",
      description:
        "Expert turbo replacement for the OM642, OM651 and M177/M178 BiTurbo — variable vane, CHRA bearing and oil seal failure all diagnosed and resolved with OEM-grade units and a full boost pressure sign-off.",
    },
  ],

  "head-gasket-replacement": [
    {
      title: "Range Rover Head Gasket",
      description:
        "Full head removal, cylinder head skim, coolant flush and OEM MLS gasket fitment on the TDV6 and SDV6 — all head bolts torqued to factory spec with a pressure test and road verification on every job.",
    },
    {
      title: "Land Rover Head Gasket",
      description:
        "Expert head gasket replacement for Defender TDCi, Discovery TDV6/SDV6, Freelander SD4 and Discovery Sport TD4 — cylinder head skim, thermostat replacement, coolant pressure test and post-repair leak sign-off.",
    },
    {
      title: "BMW Head Gasket",
      description:
        "Diagnostic-led head gasket repair for N47, N57 and N54/N55 platforms — cylinder head skim, OEM MLS gasket fitment, manufacturer torque sequences and a final coolant integrity check on every repair.",
    },
    {
      title: "Ford Head Gasket",
      description:
        "Specialist 1.0 EcoBoost head gasket repair — full head removal, skim and pressure test, coolant flush, EGR cooler inspection and OEM gasket fitment, signed off with a coolant system pressure test.",
    },
  ],

  "engine-repair": [
    {
      title: "Range Rover Engine Repair",
      description:
        "Diagnostic-led repair across all Range Rover platforms — oil leaks, misfires, injector failures, balance shaft wear and internal bearing damage — root cause identified before any parts are quoted or fitted.",
    },
    {
      title: "Land Rover Engine Repair",
      description:
        "Comprehensive engine repairs for all Land Rover models — oil leaks, DPF faults, EGR issues, coolant loss and internal wear across TD4, TDV6, SDV6 and Ingenium — manufacturer-level diagnostics on every job.",
    },
    {
      title: "BMW Engine Repair",
      description:
        "Full-range BMW engine repair across N47, N57, B47, B58 and S63 — oil leaks, injector faults, swirl flaps, VANOS issues and bearing wear — with a fixed-price quote after a BMW-specific diagnostic inspection.",
    },
    {
      title: "Mercedes Engine Repair",
      description:
        "Expert repair for Mercedes C-Class, E-Class, GLC, GLE and AMG — oil cooler leaks, injector seals, glow plugs, timing chain rattle and VVT faults across OM651, OM642 and M274 at a fixed price.",
    },
  ],

  "engine-replacement": [
    {
      title: "Range Rover Engine Replacement",
      description:
        "Fully reconditioned or low-mileage OEM-grade unit fitted by JLR-trained engineers — all ancillaries transferred, engine management reset, road-tested and covered by up to 24 months warranty with free UK collection.",
    },
    {
      title: "Land Rover Engine Replacement",
      description:
        "Reconditioned or quality-tested replacement engines for Defender, Discovery, Freelander and Discovery Sport across TD5, TDCi, TDV6, SDV6 and Ingenium — road-tested and backed by up to 24 months warranty.",
    },
    {
      title: "Ford Engine Replacement",
      description:
        "Reconditioned or quality-tested replacement engines for Ford Focus, Fiesta, Mondeo, Kuga and Transit across 1.0 EcoBoost, 2.0 EcoBoost and 2.0 TDCi — up to 24 months warranty and free UK collection.",
    },
    {
      title: "Volkswagen Engine Replacement",
      description:
        "Reconditioned or low-mileage replacement units for Golf, Passat, Tiguan and Touareg across 1.5 TSI, 2.0 TDI, 2.0 TSI and 3.0 TDI V6 — full ECU adaptation, road-test sign-off and up to 24 months warranty.",
    },
  ],

  "engine-swap": [
    {
      title: "Range Rover Engine Swap",
      description:
        "Like-for-like replacements and full platform upgrades on Evoque, Sport, Vogue and Autobiography — engine mounts, ECU remapping and emissions compliance included, road-tested to manufacturer specification.",
    },
    {
      title: "Land Rover Defender Swap",
      description:
        "TD5 to TDCi upgrades and higher-output diesel installations — custom mounting, wiring loom adaptation, management programming and full MOT-compliant emissions sign-off on every Defender engine swap.",
    },
    {
      title: "BMW Engine Swap",
      description:
        "N47, N57 and M-series engine swaps — mount fabrication, cooling system adaptation, ECU programming and full road-test verification, documented with a complete parts record and backed by our warranty.",
    },
    {
      title: "Jaguar Engine Swap",
      description:
        "Ingenium, V6 Supercharged and V8 Supercharged swaps on XF, XJ, F-Pace and F-Type — full ECU adaptation, cooling system verification, emissions compliance sign-off and road test before return.",
    },
  ],

  "timing-belt-replacement": [
    {
      title: "Volkswagen Timing Belt",
      description:
        "Full kit replacement — belt, water pump, tensioner, idler pulleys and seals — on VW 1.4 TSI, 1.6 TDI and 2.0 TDI using OEM or Dayco/Gates components, documented with a mileage-stamped service record.",
    },
    {
      title: "Audi Timing Belt",
      description:
        "Complete belt, water pump, tensioner, idler and camshaft seals for Audi 2.0 TDI, 1.4 TFSI and 1.8 TFSI — OEM or Contitech components, mileage record and camshaft timing verification before road test.",
    },
    {
      title: "Ford Timing Belt",
      description:
        "Full kit replacement for Ford 2.0 TDCi, 1.6 TDCi, 1.5 EcoBoost and 1.8 TDCi — water pump, tensioner and idler pulleys using Gates or Dayco components, documented and signed off with a timing verification check.",
    },
    {
      title: "Land Rover Timing Belt",
      description:
        "Full kit replacement for Freelander 2.2 SD4 and 1.8 petrol — belt, water pump, tensioner and idler pulleys in OEM-quality components, with a coolant system check and mileage-stamped service history record.",
    },
  ],
};

// ─────────────────────────────────────────────────────────
// HELPER — returns service-specific cards, falls back to brand overview
// ─────────────────────────────────────────────────────────

export function getServiceCards(slug: string): ServiceCard[] {
  return serviceCardsBySlug[slug] ?? serviceCards;
}
