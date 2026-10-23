import { getServiceImages } from "../serviceImages";
import { supplyFitHeroData } from "../supplyFit/SupplyFitHeroData";
import type { Faq } from "../faqs";
import type { SupplyFitPrecisionData } from "../types";
import type { ProcessStep } from "../supplyFit/ProcessSteps";
import { engineSizes } from "../engineSizes";

export const reconditionedTrust: SupplyFitPrecisionData = {
  eyebrow: "Before you commit",
  title: "Support with Your Engine Enquiry",
  description: "",
  features: [
    { icon: "tested", title: "Inspection & testing", description: "Ask which checks are included for the proposed engine." },
    { icon: "warranty", title: "Warranty information", description: "Confirm the cover, exclusions and maintenance terms in your quote." },
    { icon: "specialist", title: "Compatibility assistance", description: "Share your registration, VIN or engine code for assessment." },
    { icon: "collection", title: "Delivery & fitting options", description: "Discuss arrangements for your vehicle and location." },
  ],
};

// These are catalogue enquiry categories, not a live inventory or a fitment guarantee.
export const reconditionedOptions = engineSizes["range-rover"].sizes.map((size) => ({
  size,
  label: `${size}L engine enquiries`,
  linkLabel: `Explore ${size}L engine information`,
  quoteAriaLabel: `Request a quote for a ${size}L reconditioned engine`,
  description: "Enquire about a suitable reconditioned unit for your Range Rover or Land Rover variant. Engine code, model year and specification must be checked first.",
  href: `/engines/range-rover-${size}`,
}));

export const reconditionedBenefits: SupplyFitPrecisionData = {
  eyebrow: "Understand your options",
  title: "Why Consider a Reconditioned Engine?",
  description: "The right choice depends on your vehicle, the condition of the engine and the work included in the quotation.",
  features: [
    { icon: "ancillaries", title: "An alternative to new", description: "A suitable reconditioned engine may offer another route when your existing engine needs replacing." },
    { icon: "tested", title: "Restore functionality", description: "Addressing worn or damaged components may help restore engine operation. The outcome depends on the unit and work completed." },
    { icon: "pricing", title: "Compare overall costs", description: "There may be a cost advantage over a new engine. Compare the engine, labour, parts and associated work before deciding." },
    { icon: "collection", title: "Supply & installation options", description: "Discuss engine supply alone or supply with professional fitting, depending on the service agreed for your vehicle." },
  ],
};

export const reconditioningSteps: ProcessStep[] = [
  { number: "01", title: "Initial assessment", description: "Assess the engine’s condition and identify the work required." },
  { number: "02", title: "Disassembly", description: "Dismantle the engine where required to access affected components." },
  { number: "03", title: "Clean & inspect", description: "Clean components and inspect for wear, damage and suitability for reuse." },
  { number: "04", title: "Repair or replace", description: "Carry out repairs, machining or component replacement as needed." },
  { number: "05", title: "Reassemble & test", description: "Reassemble the engine and perform appropriate checks and testing." },
  { number: "06", title: "Final preparation", description: "Complete final checks and prepare for agreed delivery or installation." },
];

export const reconditionedFaqs: Faq[] = [
  { q: "What is the difference between a used and reconditioned engine?", a: "A used engine is generally supplied in its existing condition, with any checks specified by the seller. A reconditioned engine has undergone inspection and restoration work. Ask what was inspected, repaired or replaced, as the scope varies." },
  { q: "How much does a reconditioned Range Rover engine cost?", a: "Cost depends on the engine variant, its condition, the reconditioning work and whether fitting is included. Request a vehicle-specific quotation covering labour, additional parts and delivery where applicable." },
  { q: "How can I check which engine fits my vehicle?", a: "Send your registration or VIN, model, year, fuel type and engine code if known. Engine capacity alone does not confirm compatibility; the exact specification must be checked before ordering." },
  { q: "Does a reconditioned engine come with a warranty?", a: "Warranty cover depends on the engine, supplier and agreed service. Ask for the duration, covered components, exclusions and maintenance requirements in writing before accepting the quotation." },
  { q: "Can you supply and fit a replacement engine?", a: "You can enquire about engine supply and fitting through our existing supply-and-fit service. Suitability, installation arrangements, labour and any associated work must be confirmed in your quotation." },
  { q: "How long does engine replacement take?", a: "Timing depends on sourcing a suitable engine, inspection findings, parts availability and the installation work required. Ask for an estimated schedule when your vehicle and service requirements have been assessed." },
  { q: "What information do I need to request a quote?", a: "Provide your registration or VIN, model, year, mileage, fuel type and engine code if known. Include the symptoms or diagnosis, your location and whether you need engine supply only or supply and fitting." },
];

export const reconditionedHero = {
  ...supplyFitHeroData,
  badgeText: "Engine supply & replacement solutions",
  titleSpan1: "Reconditioned",
  titleSpan2: "Range Rover Engines",
  description: "Enquire about sourcing a reconditioned engine for compatible Range Rover and Land Rover models. Share your vehicle details to discuss engine supply, compatibility and professional fitting options.",
  phone: { display: "01708 592377", href: "tel:+441708592377" },
  whatsapp: { number: "447477733313", href: "https://wa.me/447477733313" },
  features: [
    { icon: "+", label: "Compatibility assistance" },
    { icon: "+", label: "Supply & fitting enquiries" },
    { icon: "+", label: "Vehicle-specific quotations" },
  ],
  stats: [],
};

export const reconditionedPageData = {
  buyingGuide: {
    eyebrow: "Buyer's comparison",
    title: "Used, Reconditioned or Rebuilt Range Rover 204DTA: Which One to Choose?",
    description: "Selecting the ideal powertrain solution depends on budget, vehicle age, and long-term ownership plans.",
    subtitle: "Review our verified tiers below to find the correct fit for your Land Rover or Range Rover.",
    cards: [
      {
        tier: "Tier 01",
        badge: "Tested Core",
        title: "Used Engine",
        description: "Inspected low-mileage original units. Ideal for cost-conscious replacements with verified compression and leakdown testing before release.",
        features: ["Endoscopic cylinder wall inspection", "Hot compression test verified", "Clean salvage pedigree verification"],
        linkLabel: "Explore Used Engines",
        href: "/engines",
        highlighted: false,
        recommendation: "",
      },
      {
        tier: "Tier 02",
        badge: "12-Mo Warranty",
        title: "Reconditioned Engine",
        description: "Completely stripped, cleaned, ultrasonic treated, with new bearings, piston rings, gaskets, and updated timing chain kit installed.",
        features: ["Brand new timing chains & tensioners", "New big-end & main crankshaft bearings", "Fully pressure & leak-down tested"],
        linkLabel: "Explore Reconditioned",
        href: "/get-quote",
        highlighted: true,
        recommendation: "Most popular choice",
      },
      {
        tier: "Tier 03",
        badge: "Zero-Hour Spec",
        title: "Rebuilt Engine",
        description: "Zero-hour specification rebuild with brand new crankshaft, upgraded timing components, re-honed cylinders, and comprehensive dyno verification.",
        features: ["New forged OEM crankshaft assembly", "Precision CNC cylinder line boring", "Maximum longevity for high-mileage fleets"],
        linkLabel: "Explore Rebuilt Engines",
        href: "/services/engine-rebuild",
        highlighted: false,
        recommendation: "",
      },
    ],
  },
  overview: {
    catalogueHref: "/engines",
    imageSrc: "/images/service/engine_rebuild/engine_rebuild 2.webp",
    imageAlt: "Dismantled engine block on a workshop stand with the cylinder head removed",
    eyebrow: "Know what you are choosing",
    title: "What Is a Reconditioned Engine?",
    paragraphs: [
      "A reconditioned engine is inspected, dismantled as appropriate and cleaned. Worn or damaged components are then repaired or replaced as required before reassembly and suitable checks.",
      "A used engine is generally supplied in its existing condition, with any checks specified by the seller. Reconditioning involves restoration work, but its quality and scope vary by engine and supplier. Ask exactly what work and testing are included.",
      "Reconditioned does not automatically mean factory-new. Engine code, model year and vehicle specification must be checked: the same engine size alone does not establish compatibility.",
    ],
    catalogueLabel: "Explore our engine catalogue →",
  },
  optionsSection: {
    quoteHref: "/get-quote",
    helpHref: "/contact",
    rangeRoverHref: "/engines/range-rover",
    landRoverHref: "/engines/land-rover",
    eyebrow: "Find your engine family",
    title: "Reconditioned Engines for Range Rover and Land Rover",
    description: "These engine-size categories are a starting point for an enquiry, not a stock list. Availability, fuel type, engine code and exact fitment must be confirmed for your vehicle before ordering.",
    cardEyebrow: "Vehicle-specific assessment",
    quoteLabel: "Request a Quote",
    helpTitle: "Not sure which engine?",
    helpDescription: "Send your registration or VIN. We can help assess the engine specification and discuss suitable next steps.",
    helpLabel: "Ask About Compatibility",
    brandPrefix: "Browse by brand: ",
    rangeRoverLabel: "Range Rover engines",
    brandSeparator: " or ",
    landRoverLabel: "Land Rover engines",
    brandSuffix: ".",
    items: reconditionedOptions,
  },
  supplyOptions: {
    title: "Engine Supply or Engine Supply and Fitting",
    description: "Choose the enquiry route that suits your plans. Confirm what is included before arranging delivery or booking installation.",
    cards: [
      {
        eyebrow: "Sourcing & supply",
        title: "Engine Supply",
        description: "Share your vehicle details to enquire about sourcing a suitable engine. The proposed unit, included components, warranty terms and delivery arrangements are confirmed as part of your quotation.",
        details: "Installation arrangements depend on the agreed service. If you plan to use your own installer, confirm their requirements before ordering.",
        linkLabel: "Enquire About Engine Supply",
        href: "/get-quote",
        highlighted: false,
      },
      {
        eyebrow: "Supply & installation",
        title: "Engine Supply and Fit",
        description: "Enquire about sourcing the engine and arranging professional installation through our existing supply-and-fit service.",
        details: "Labour, fluids, additional parts, ancillary components and associated work must be confirmed in the quotation. Ask about timing and any delivery or collection requirements for your location.",
        linkLabel: "Explore Supply and Fit",
        href: "/supply-fit",
        highlighted: true,
      },
    ],
  },
  contact: {
    phoneHref: "tel:+441708592377",
    whatsappHref: "https://wa.me/447477733313",
    quoteHref: "/get-quote",
    contactHref: "/contact",
    title: "Need a Reconditioned Range Rover Engine?",
    description: "Tell us about your vehicle and whether you need supply only or supply and fitting. We will help you understand the options to confirm in your quotation.",
    phoneLabel: "Call 01708 592377",
    whatsappLabel: "WhatsApp 07477 733313",
    externalLinkLabel: " (opens in a new tab)",
    quoteLabel: "Get a Quote",
    contactLabel: "Contact Us",
  },
  heroSection: {
    formTitle: "Get Your Engine Quote",
    submitLabel: "Request a Quote",
    quoteHref: "/get-quote",
    compatibilityHref: "/contact",
    titleStart: "Reconditioned ",
    titleHighlight: "Range Rover Engines",
    quoteLabel: "Get a Quote",
    compatibilityLabel: "Check Engine Compatibility",
    hero: reconditionedHero,
  },
  gallery: {
    title: "Engine Expertise You Can Trust",
    subtitle: "A closer look at engine work in our workshop. View more photographs in our gallery.",
    linkHref: "/gallery",
    linkLabel: "View Workshop Gallery",
    images: getServiceImages("engine-rebuild"),
  },
  metadata: {"title": "Reconditioned Range Rover Engines | Supply & Fitting Enquiries", "description": "Explore reconditioned Range Rover and Land Rover engine options. Enquire about compatibility, engine supply, fitting and warranty terms for your vehicle.", "canonical": "/reconditioned-engine"},
  workflow: {
    title: "How Engine Reconditioning Works",
    description: "These are typical stages. The exact process, testing and location of the work depend on the engine and supplier. Confirm the proposed scope in your quotation.",
    steps: reconditioningSteps,
  },
  faq: {
    accordionName: "reconditioned-engines-faq",
    description: "Answers to common questions about reconditioned engines. Cost, compatibility, warranty terms and timing depend on your vehicle and quotation.",
    faqs: reconditionedFaqs,
  },
  trust: reconditionedTrust,
  benefits: reconditionedBenefits,
};
