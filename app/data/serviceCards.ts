export interface ExtendedServiceCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const serviceCards: ExtendedServiceCard[] = [
  {
    title: "Range Rover Engines",
    description:
      "Specialist rebuilds and replacements for the full Range Rover lineup — TDV6, SDV6, SDV8 and 5.0L V8 Supercharged — using genuine OEM parts, backed by up to 24 months warranty and free UK collection and delivery.",
    image: "/images/models/sport.webp",
    href: "/engines/range-rover",
  },
  {
    title: "Land Rover Engines",
    description:
      "Our team works across the full Land Rover range, from Discovery to Defender, covering diagnostics, timing components, turbo systems and full engine rebuilds with genuine parts throughout.",
    image: "/images/models/discovery-1.webp",
    href: "/engines/land-rover",
  },
  {
    title: "Jaguar Engines",
    description:
      "Specialist rebuilds and replacements for Jaguar XE, XF, XJ, F-Pace and F-Type across the full Ingenium, 3.0 V6 Supercharged and 5.0 V8 Supercharged range — OEM components, up to 24 months warranty.",
    image: "/jaguar.svg",
    href: "/engines/jaguar",
  },
];