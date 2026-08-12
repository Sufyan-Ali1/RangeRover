export interface FeatureItem {
  icon: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SupplyFitHeroDataProps {
  badgeText: string;
  titleSpan1: string;
  titleSpan2: string;
  description: string;
  phone: {
    display: string;
    href: string;
  };
  whatsapp: {
    number: string;
    href: string;
  };
  features: FeatureItem[];
  stats: StatItem[];
  images: {
    background: {
      src: string;
      alt: string;
    };
    heroCard: {
      src: string;
      alt: string;
    };
  };
  warrantyBadge: {
    title: string;
    subtitle: string;
  };
}

export const supplyFitHeroData: SupplyFitHeroDataProps = {
  badgeText: "Range Rover & Land Rover Specialists",
  titleSpan1: "Range Rover Engine Supply and Fit,",
  titleSpan2: " Done Right First Time",
  description:
    "Skip the guesswork of sourcing an engine yourself. We supply a fully tested reconditioned unit matched to your exact model and fit it in-house, so you get a warranted, road-ready engine without chasing parts or garages separately.",
  phone: {
    display: "01375 531355",
    href: "tel:01375531355",
  },
  whatsapp: {
    number: "441375531355",
    href: "https://wa.me/441375531355",
  },
  features: [
    { icon: "+", label: "Independent Land Rover Specialist" },
    { icon: "+", label: "Warranty-Backed Engines" },
    { icon: "+", label: "UK-Wide Collection" },
    { icon: "+", label: "Fast Turnaround Fitting" },
  ],
  stats: [
    { value: "500+", label: " engines supplied and fitted " },
    { value: "12mth", label: "minimum warranty cover " },
    { value: "7 Days", label: " average fitting turnaround " },
    { value: "100%", label: "  tested before fitting " },
  ],
  images: {
    background: {
      src: "/images/supply-fit/background-hero.webp",
      alt: "",
    },
    heroCard: {
      src: "/images/supply-fit/hero-image.webp",
      alt: "Supply and fit workshop with Range Rover engine being professionally fitted",
    },
  },
  warrantyBadge: {
    title: "12-month warranty",
    subtitle: "On all parts & labour",
  },
};
