import { EngineServicesMain, Service } from "../types";

export const engineServices: Service[] = [
  {
    slug: "engine-rebuild",
    title: "Engine Rebuild",
    description:
      "Complete strip-down, machining and reassembly using OEM-grade components, restoring your engine to factory-standard performance and reliability.",
  },
  {
    slug: "timing-chain-replacement",
    title: "Timing Chain Replacement",
    description:
      "Precise timing chain replacement to prevent premature wear, rattling noises and catastrophic engine damage down the line.",
  },
  {
    slug: "turbo-replacement",
    title: "Turbo Replacement",
    description:
      "Expert diagnosis and replacement of failing turbochargers, restoring lost power, smooth acceleration and fuel efficiency.",
  },
  {
    slug: "head-gasket-replacement",
    title: "Head Gasket Replacement",
    description:
      "Thorough head gasket repairs addressing overheating, coolant loss and oil contamination before they cause lasting damage.",
  },
  {
    slug: "engine-repair",
    title: "Engine Repair",
    description:
      "Targeted fault diagnosis and repair for specific engine issues, avoiding unnecessary costs where a full rebuild isn't required.",
  },
  {
    slug: "engine-replacement",
    title: "Engine Replacement",
    description:
      "Supply and fitting of fully reconditioned engines, ideal when repair costs outweigh the value of restoration.",
  },
  {
    slug: "engine-swap",
    title: "Engine Swap",
    description:
      "Complete engine swap services for owners upgrading performance or replacing a failed unit with a tested alternative.",
  },
  {
    slug: "timing-belt-replacement",
    title: "Timing Belt Replacement",
    description:
      "Scheduled and emergency timing belt replacement to protect your engine from costly, avoidable internal failure.",
  },
];
export const engineServicesMain: EngineServicesMain = {
  heading: "Engine Services We Provide",
  intro:
    "From full engine rebuilds to targeted component repairs, our workshop handles every stage of Range Rover and Land Rover engine care with precision, transparency and genuine parts.",
  viewMoreHref: "/services",
};
