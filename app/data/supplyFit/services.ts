import { EngineServicesMain, Service } from "../types";

export const engineServices: Service[] = [
  {
    slug: "engine-rebuild",
    title: "Engine Rebuild",
    description:
      "Full strip-down and rebuild using OEM-grade parts, restoring your existing engine to reliable, factory-matched condition.",
  },
  {
    slug: "timing-chain-replacement",
    title: "Timing Chain Replacement",
    description:
      "Precise timing chain replacement preventing rattling, wear and the risk of serious internal engine damage.",
  },
  {
    slug: "turbo-replacement",
    title: "Turbo Replacement",
    description:
      "Diagnosis and replacement of failing turbochargers, restoring power, response and fuel efficiency to your engine.",
  },
  {
    slug: "head-gasket-replacement",
    title: "Head Gasket Replacement",
    description:
      "Careful head gasket repair addressing overheating and coolant loss before further damage develops.",
  },
  {
    slug: "engine-repair",
    title: "Engine Repair",
    description:
      "Targeted repairs for specific engine faults, avoiding unnecessary costs where a full replacement isn't needed.",
  },
  {
    slug: "engine-replacement",
    title: "Engine Replacement",
    description:
      "Complete engine replacement using tested reconditioned units, ideal when repair isn't the most cost-effective option.",
  },
  {
    slug: "engine-swap",
    title: "Engine Swap",
    description:
      "Full engine swap services for owners upgrading performance or replacing a failed unit entirely.",
  },
  {
    slug: "timing-belt-replacement",
    title: "Timing Belt Replacement",
    description:
      "Scheduled and emergency timing belt replacement, protecting your engine from avoidable, costly failure.",
  },
];
export const engineServicesMain: EngineServicesMain = {
  heading: "Engine Services We Offer",
  intro:
    "Supply and fit is only one part of what we offer. Our workshop handles the full spectrum of engine work, so whatever your vehicle needs, our specialists can take care of it.",
  viewMoreHref: "/services",
};