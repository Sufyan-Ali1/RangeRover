export interface Service {
  slug: string;
  title: string;
  description: string;
}

export const engineServices: Service[] = [
  {
    slug: "engine-rebuild",
    title: "Engine Rebuild",
    description:
      "Master-level 3.0L TDV6 & SDV6 engine rebuilding. Full strip-downs and precision re-assembly using genuine OEM parts to restore factory performance levels.",
  },
  {
    slug: "timing-chain-replacement",
    title: "Timing Chain Replacement",
    description:
      "Specialist timing chain replacement for all Range Rover and Land Rover engines, preventing catastrophic failure and restoring smooth, reliable operation.",
  },
  {
    slug: "turbo-replacement",
    title: "Turbo Replacement",
    description:
      "Full turbocharger replacement and reconditioning service using OEM-grade units, restoring lost power and eliminating smoke or boost pressure issues.",
  },
  {
    slug: "head-gasket-replacement",
    title: "Head Gasket Replacement",
    description:
      "Expert head gasket replacement with full head skim and pressure testing, addressing coolant loss, overheating, and oil contamination at the source.",
  },
  {
    slug: "engine-repair",
    title: "Engine Repair",
    description:
      "Comprehensive diagnostic-led engine repairs covering oil leaks, misfires, sensors, and internal mechanical faults across the full JLR engine range.",
  },
  {
    slug: "engine-replacement",
    title: "Engine Replacement",
    description:
      "Supply and fit of fully reconditioned or low-mileage replacement engines, including full ancillary transfer and road-test sign-off before collection.",
  },
  {
    slug: "engine-swap",
    title: "Engine Swap",
    description:
      "Performance-oriented engine swap service for Range Rover and Defender platforms, including uprated mounts, management mapping, and emissions compliance.",
  },
  {
    slug: "timing-belt-replacement",
    title: "Timing Belt Replacement",
    description:
      "Precision timing belt kit replacement including water pump, tensioners, and idler pulleys — protecting your engine from interval-related mechanical failure.",
  },
];
