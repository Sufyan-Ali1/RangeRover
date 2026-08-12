import { EngineServicesMain, Service } from "../types";

export const engineServices: Service[] = [
  {
    slug: "engine-rebuild",
    title: "Engine Rebuild",
    description:
      " Full strip-down and rebuild using OEM-grade parts, restoring your existing engine to reliable, long-term running condition.",
  },
  {
    slug: "timing-chain-replacement",
    title: "Timing Chain Replacement",
    description:
      " Precise timing chain replacement to prevent rattling, premature wear and the risk of serious internal engine failure.",
  },
  {
    slug: "turbo-replacement",
    title: "Turbo Replacement",
    description:
      "Diagnosis and replacement of failing turbochargers, restoring lost power and smoother acceleration to your vehicle.",
  },
  {
    slug: "head-gasket-replacement",
    title: "Head Gasket Replacement",
    description:
      "Careful head gasket repair addressing overheating and coolant loss before further engine damage develops. ",
  },
  {
    slug: "engine-repair",
    title: "Engine Repair",
    description:
      "Targeted fault diagnosis and repair for specific engine issues, avoiding the cost of unnecessary full replacement.  ",
  },
  {
    slug: "engine-replacement",
    title: "Engine Replacement",
    description:
      "Supply and fitting of fully tested reconditioned engines, ideal when repair costs outweigh restoration value.",
  },
  {
    slug: "engine-swap",
    title: "Engine Swap",
    description:
      "Complete engine swap services for owners upgrading performance or replacing a failed unit entirely.",
  },
  {
    slug: "timing-belt-replacement",
    title: "Timing Belt Replacement",
    description:
      " Scheduled and emergency timing belt replacement, protecting your engine from avoidable, costly failure.",
  },
];
export const engineServicesMain: EngineServicesMain = {
  heading: "Services Near You",
  intro:
    "From your local area to anywhere in the UK, these are the engine services our specialists provide most often for Range Rover and Land Rover owners.",
  viewMoreHref: "/services",
};
