import { AuthoritySectionData } from "../authority";
import { Faq } from "../faqs";
import { NationwideSupportData } from "../sections";
import { EngineServicesData } from "./types";

export const highlights: string[] = [
  "Specialists in Land Rover engines only",
  "12-month warranty on every repair",
  "Nationwide vehicle collection included",
  "Genuine and reconditioned parts used",
];

export const MainServicesData: EngineServicesData = {
  heading: "Every Engine Service, One Team",
  intro:
    "Whatever stage your engine problem has reached, from a diagnostic check to a full rebuild, our specialists handle it under one roof.",
  services: [
    {
      slug: "engine-rebuild",
      title: "Engine Rebuild",
      description:
        "A full internal rebuild restores your existing engine to proper working condition, often at a fraction of the cost of a complete replacement unit. ",
    },
    {
      slug: "timing-chain-replacement",
      title: "Timing Chain Replacement",
      description:
        "Chain rattle at startup is an early warning sign. We diagnose and replace worn timing chains, tensioners and guides before damage spreads. ",
    },
    {
      slug: "turbo-replacement",
      title: "Turbo Replacement",
      description:
        " Whining, smoke or power loss often points to the turbo. We diagnose accurately and offer both reconditioning and full replacement options.",
    },
    {
      slug: "head-gasket-replacement",
      title: "Head Gasket Replacement",
      description:
        " White smoke, overheating or milky oil are urgent signs. We repair blown head gaskets quickly to prevent further engine damage. ",
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
        " When rebuilding isn't viable, we fit a genuine or reconditioned replacement engine, tested thoroughly and matched precisely to your model. ",
    },
    {
      slug: "engine-swap",
      title: "Engine Swap",
      description:
        " Considering a different or upgraded engine? We handle the conversion, compatibility and compliance side of genuine engine swap projects. ",
    },
    {
      slug: "timing-belt-replacement",
      title: "Timing Belt Replacement",
      description:
        "Scheduled belt-driven engines need replacing on interval, not on failure. We fit complete kits, including tensioners and water pumps where needed.",
    },
  ],
};

export const servicesPageNationwide: AuthoritySectionData = {
  titleBefore: "Genuine Expertise Across  ",
  titleHighlight: "Every Engine Code You Drive",
  paragraphs: [
    "From TDV6 and TDV8 diesels to Ingenium units and AJ133 supercharged V8s, we've worked on the full spread of engines fitted across Land Rover, Range Rover and Jaguar vehicles. That breadth means we recognise problems quickly instead of treating every vehicle as a fresh unknown.",
    "Diagnostic accuracy sits at the centre of everything we do, ensuring repairs are targeted correctly the first time rather than guessed at through trial and error at your expense.",
  ],
  badge: { label: "In-House Specialists", title: "End-to-End Accountability" },
};

export const servicesPagePrecision: AuthoritySectionData = {
  titleBefore: "Clear Pricing  ",
  titleHighlight: "You Can Actually Rely On",
  paragraphs: [
    "Every quote we provide follows a full diagnostic assessment, not a rough estimate based on your description alone. That means the price you're given reflects the actual fault found in your engine, not a generic figure pulled from a standard rate card.",
    "No hidden extras appear once work has started. If additional issues are found during a repair, we explain them clearly and confirm cost before proceeding, so you stay in control throughout.",
  ],
  badge: {
    label: "JLR Specialists Only",
    title: "Up to 50% Less Than Dealers",
  },
};

export const servicesNationwideSupport: NationwideSupportData = {
  titleBefore: "Fixed-Price Quotes, No Hidden Costs & ",
  titleHighlight: "No Obligation to Proceed",
  paragraphs: [
    "Getting a quote from Range Rover Garage is completely free and carries no obligation whatsoever. Simply call us or submit your vehicle registration through our online form and one of our engineers — not a sales advisor — will assess your enquiry and give you an honest, itemised quote that covers every aspect of the work required. We explain what needs doing and why, in plain language.",
    "Every quote we issue is fixed. The price we quote is the price you pay — we do not add extras partway through a job or present you with a larger bill on collection. If we discover additional issues during the rebuild, we contact you first and agree the scope before proceeding. That approach to pricing is what keeps our customers coming back and referring their friends.",
  ],
};

export const faqs: Faq[] = [
  {
    q: "What services do Range Rover engine specialists offer?",
    a: " We cover the full range of engine work, including diagnostics, rebuilds, replacements, engine swaps, timing chain and belt replacement, turbo repair and head gasket replacement, all carried out by technicians who work exclusively on these platforms.",
  },
  {
    q: "What is the difference between engine rebuild and engine replacement?",
    a: " A rebuild restores your existing engine internally, repairing worn or damaged components in place. A replacement fits a different genuine or reconditioned engine entirely. We recommend whichever option offers better long-term value for your vehicle.",
  },
  {
    q: "Do you offer engine diagnostics?",
    a: "Yes, every repair starts with proper diagnostics using dealer-level equipment and physical inspection, ensuring the actual fault is confirmed before any repair work or quote is provided to you.",
  },
  {
    q: "Do you offer emergency engine repairs?",
    a: " Yes, urgent issues such as overheating, blown head gaskets or sudden turbo failure are prioritised, since continuing to drive with these faults risks far more serious and costly engine damage.",
  },
  {
    q: "Can you repair or replace an engine, whichever is needed?",
    a: "Absolutely, we assess your engine's condition first and recommend repair, rebuild or replacement based on what genuinely makes sense for your vehicle, not simply the most profitable option for us.",
  },
  {
    q: "Is there a warranty across all your engine services?",
    a: " Yes, every service we provide, from a single component repair to a full engine replacement, is backed by a 12-month parts and labour warranty as standard.",
  },
];
