import { EngineServicesMain, Service } from "../../types";

export const engineServices: Service[] = [
  {
    slug: "engine-rebuild",
    title: "Engine Rebuild",
    description:
      " Complete rebuilds carried out at our Grays workshop, with vehicles collected from your address and returned once work is finished.",
  },
  {
    slug: "timing-chain-replacement",
    title: "Timing Chain Replacement",
    description:
      " Local and nationwide timing chain replacement, addressing wear before it leads to more serious internal engine failure",
  },
  {
    slug: "turbo-replacement",
    title: "Turbo Replacement",
    description:
      "Turbocharger diagnosis and replacement available wherever you're based, with collection arranged around your schedule.",
  },
  {
    slug: "head-gasket-replacement",
    title: "Head Gasket Replacement",
    description:
      "Head gasket repairs handled by specialists, whether you're local to Essex or contacting us from further across the UK. ",
  },
  {
    slug: "engine-repair",
    title: "Engine Repair",
    description:
      "Targeted fault diagnosis and repair, saving you a trip to us through our collection and delivery service. ",
  },
  {
    slug: "engine-replacement",
    title: "Engine Replacement",
    description:
      "Reconditioned engine replacement supplied and fitted at our workshop, with your vehicle collected and returned nationwide.",
  },
  {
    slug: "engine-swap",
    title: "Engine Swap",
    description:
      "Full engine swap services available to owners across London, Kent, Essex and the wider UK.",
  },
  {
    slug: "timing-belt-replacement",
    title: "Timing Belt Replacement",
    description:
      "Preventative and emergency timing belt work, arranged around your location with no need to self-deliver your vehicle.",
  },
];
export const engineServicesMain: EngineServicesMain = {
  heading: "Services Near You",
  intro:
    "From your local area to anywhere in the UK, these are the engine services our specialists provide most often for Range Rover and Land Rover owners.",
  viewMoreHref: "/services",
};
