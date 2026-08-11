// ─────────────────────────────────────────────────────────
// INTERFACES
// ─────────────────────────────────────────────────────────

export interface NationwideSupportData {
  titleBefore: string;
  titleHighlight: string;
  paragraphs: string[];
}

export interface TrustedSpecialistsData {
  heading: string;
  description: string;
  steps: { id: number; side: "left" | "right"; text: string }[];
}

export const homeTrustedSpecialists: TrustedSpecialistsData = {
  heading: "Trusted Range Rover & Land Rover Specialists — Range Rover Garage.",
  description:
    "Range Rover Garage is the UK's premier independent specialist for Range Rover and Land Rover engine rebuilds, replacements and repairs. Based in Grays, Essex, our JLR-trained engineers serve owners across the entire UK with genuine OEM parts, transparent fixed pricing and up to 24-month warranty on every job.",
  steps: [
    {
      id: 1,
      side: "left",
      text: "Submit your vehicle registration and describe your engine fault. Our JLR-trained specialists review every enquiry and respond with honest, no-obligation advice — usually within a few hours.",
    },
    {
      id: 2,
      side: "right",
      text: "We carry out a full diagnostic inspection to pinpoint the root cause — whether it's a timing chain failure, turbo fault, head gasket failure, or internal engine wear — and provide a transparent, fixed-price quote with no hidden costs.",
    },
    {
      id: 3,
      side: "left",
      text: "Our engineers rebuild or replace your Range Rover or Land Rover engine using genuine OEM components. Every job is road-tested and backed by up to 24 months warranty, with free nationwide collection and delivery included.",
    },
  ],
};

// ─────────────────────────────────────────────────────────
// NATIONWIDE SUPPORT — Static page exports
// NOTE: These cover the customer journey & convenience angle only.
// Expertise & OEM quality is handled by AuthorityNationwide.
// ─────────────────────────────────────────────────────────

// Angle: How to get started — the customer journey from enquiry to return delivery
export const homeNationwideSupport: NationwideSupportData = {
  titleBefore: "From Your Driveway to Our Workshop ",
  titleHighlight: "& Back — Stress-Free",
  paragraphs: [
    "Getting your Range Rover or Land Rover to us could not be simpler. Contact us by phone or through our online quote form, tell us what your vehicle is doing and we will arrange a convenient collection date. Our dedicated transport team handles the secure movement of your vehicle from anywhere in the UK to our workshop in Grays, Essex — at no cost to you, on every single job.",
    "Once your engine rebuild or replacement is complete and has passed our final road-test sign-off, we deliver your vehicle back to your door. Most jobs are completed and returned within 7 to 14 working days. You will have a direct line to your engineer throughout, so you always know exactly where the job stands — no automated updates, no chasing, just clear and honest communication from start to finish.",
  ],
};

// Angle: Transparent pricing, no-obligation quotes, how easy it is to get a price
export const servicesNationwideSupport: NationwideSupportData = {
  titleBefore: "Fixed-Price Quotes, No Hidden Costs & ",
  titleHighlight: "No Obligation to Proceed",
  paragraphs: [
    "Getting a quote from Range Rover Garage is completely free and carries no obligation whatsoever. Simply call us or submit your vehicle registration through our online form and one of our engineers — not a sales advisor — will assess your enquiry and give you an honest, itemised quote that covers every aspect of the work required. We explain what needs doing and why, in plain language.",
    "Every quote we issue is fixed. The price we quote is the price you pay — we do not add extras partway through a job or present you with a larger bill on collection. If we discover additional issues during the rebuild, we contact you first and agree the scope before proceeding. That approach to pricing is what keeps our customers coming back and referring their friends.",
  ],
};

// ─────────────────────────────────────────────────────────
// NATIONWIDE SUPPORT — Dynamic page helpers
// Angle for all: Convenience, booking, what to expect, turnaround
// ─────────────────────────────────────────────────────────

// Angle: How to book this specific service and what the experience looks like
export function getServiceNationwideSupport(serviceTitle: string): NationwideSupportData {
  return {
    titleBefore: `Book Your ${serviceTitle} — `,
    titleHighlight: "Simple, Fast & Fully Managed",
    paragraphs: [
      `Booking a ${serviceTitle.toLowerCase()} with Range Rover Garage takes minutes. Call our team or submit your registration online and we will respond with a no-obligation quote, usually within the same working day. Once you approve the quote, we arrange a free collection of your vehicle from your home or workplace — wherever you are in the UK — and transport it securely to our workshop in Grays, Essex.`,
      `You will receive a direct contact number for your assigned engineer, who will keep you updated throughout the ${serviceTitle.toLowerCase()} process. When the work is complete and your vehicle has passed our final road test, we deliver it back to your door, fully documented and covered by up to 24 months warranty. No uncertainty, no surprises — just a straightforward, professional service from start to finish.`,
    ],
  };
}

// Angle: How [Brand] owners access the service — the full experience
export function getBrandNationwideSupport(brandTitle: string): NationwideSupportData {
  return {
    titleBefore: `Getting Your ${brandTitle} to Us `,
    titleHighlight: "Is Easier Than You Think",
    paragraphs: [
      `${brandTitle} owners across the UK use our free collection and delivery service every week. You do not need to arrange transport, take time off work or find a way to get your vehicle to Essex. We come to you — at a time that suits you — and return your vehicle once the rebuild is complete and road-tested. The entire logistics process is managed by us, at no additional cost.`,
      `From the moment you make contact to the moment your ${brandTitle} is returned to your door, you deal with the same team throughout. We provide a dedicated engineer contact, a fixed-price quote before any work begins, regular progress updates and a written warranty on completion. It is the kind of personal, accountable service that simply does not exist at a main dealer.`,
    ],
  };
}

// Angle: The [Brand] [Model] owner's experience — what actually happens
export function getModelNationwideSupport(brandTitle: string, modelTitle: string): NationwideSupportData {
  return {
    titleBefore: `Your ${brandTitle} ${modelTitle} — `,
    titleHighlight: "Returned Better Than It Left",
    paragraphs: [
      `When you book your ${brandTitle} ${modelTitle} in with Range Rover Garage, the process is designed to be as straightforward as possible. We collect your vehicle free of charge from anywhere in the UK, carry out a comprehensive diagnostic inspection on arrival, and contact you with our findings before a single bolt is turned. You approve the fixed-price quote — and only then does the rebuild begin.`,
      `Most ${brandTitle} ${modelTitle} engine rebuilds and replacements are completed and returned within 7 to 14 working days. Your vehicle is delivered back to your door having passed our full road-test sign-off, with a written warranty certificate and a complete record of every component replaced during the rebuild. It arrives ready to drive, with the confidence that the job has been done properly.`,
    ],
  };
}
