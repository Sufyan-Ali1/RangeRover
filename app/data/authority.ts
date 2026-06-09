export interface AuthorityLeadingData {
  label: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  body: string;
}

export interface AuthoritySectionData {
  titleBefore: string;
  titleHighlight: string;
  paragraphs: string[];
  badge: { label: string; title: string };
}

// ─────────────────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────────────────

export const authorityLeading: AuthorityLeadingData = {
  label: "UK's #1 Independent JLR Specialist",
  titleBefore: "UK's Leading Authority In ",
  titleHighlight: "Range Rover",
  titleAfter: " Engine Restoration.",
  body: "Range Rover Garage is the UK's leading authority in Range Rover engine restoration, providing a master-level service from our state-of-the-art facility in Grays, Essex. With over 20 years of technical heritage, our independent workshop offers a credible alternative to main dealers, combining specialised JLR expertise with competitive independent pricing. We specialise in the complete overhaul and re-engineering of the Land Rover and Range Rover engine family, including the high-performance 5.0L V8 Supercharged units and the incredibly popular 3.0L TDV6 and SDV6 diesel platforms. Our engineering process involves a 200-point inspection protocol and the use of specialised JLR timing jigs, ensuring that every reconditioned engine we produce meets or exceeds factory tolerances for thermal efficiency and mechanical longevity. From London to Manchester, our nationwide collection service ensures your prestige vehicle is handled with the absolute care it deserves.",
};

// Angle: Expertise, JLR certifications, OEM standards — WHY we are the most qualified
export const authorityNationwide: AuthoritySectionData = {
  titleBefore: "JLR-Certified Engineers & ",
  titleHighlight: "Genuine OEM Parts — No Compromise",
  paragraphs: [
    "Every engineer at Range Rover Garage holds factory-level JLR qualifications earned through years of hands-on work with the full Land Rover and Range Rover engine family. Unlike general garages, we work exclusively on JLR vehicles — which means our knowledge of the 3.0L TDV6, SDV6, SDV8, 5.0L V8 Supercharged and 2.0L Ingenium platforms runs deeper than any main dealer technician who rotates across brands.",
    "We source every component directly from Land Rover approved OEM suppliers — from crankshaft bearings and piston ring sets to timing chains, oil pumps and balance shaft assemblies. Before any rebuilt engine leaves our workshop, it passes a final dynamometer test and a comprehensive 200-point sign-off inspection. The result is a reconditioned unit that meets or exceeds original factory performance tolerances.",
  ],
  badge: { label: "JLR Factory Qualified", title: "200-Point Sign-Off" },
};

// Angle: Technical rebuild process, precision engineering, quality control
export const authorityPrecision: AuthoritySectionData = {
  titleBefore: "A Rebuild Process Built On ",
  titleHighlight: "Precision, Not Shortcuts",
  paragraphs: [
    "Our rebuild process begins where most workshops stop. Every engine undergoes a complete strip-down to individual components, followed by ultrasonic cleaning, precision bore honing and a full dimensional inspection against manufacturer tolerances. We use specialised JLR timing jigs and alignment tools — the same equipment used on the production line — to guarantee exact reassembly on every single job.",
    "No two engines leave our workshop without passing a staged quality gate: pressure testing, oil flow verification, belt and chain tension checks, and a final dynamometer run under simulated load. This rigorous approach is why our rebuilt engines consistently outlast dealer-supplied units and why we can offer up to 24 months warranty with full confidence in every rebuild we complete.",
  ],
  badge: { label: "Dynamometer Tested", title: "Factory Tolerances" },
};

// ─────────────────────────────────────────────────────────
// SERVICES PAGE (/services)
// ─────────────────────────────────────────────────────────

// Angle: Range and depth of specialist services available
export const servicesPageNationwide: AuthoritySectionData = {
  titleBefore: "Eight Specialist Engine Services, ",
  titleHighlight: "One Workshop You Can Trust",
  paragraphs: [
    "From complete engine rebuilds and reconditioned engine supply and fit, to precision timing chain replacement, turbocharger reconditioning, head gasket repair and full engine swap — our specialist team covers every aspect of Range Rover and Land Rover engine restoration. Each service is carried out under one roof by the same JLR-qualified engineers, using the same genuine OEM components and the same 200-point quality protocol.",
    "We do not subcontract or outsource any element of the work. From the initial diagnostic inspection to the final road test, your vehicle is handled exclusively by our in-house team. This end-to-end accountability is what allows us to back every service with up to 24 months warranty — and to stand behind every job we complete.",
  ],
  badge: { label: "In-House Specialists", title: "End-to-End Accountability" },
};

// Angle: Why customers choose us over dealers — credibility & trust signals
export const servicesPagePrecision: AuthoritySectionData = {
  titleBefore: "Independent Expertise — ",
  titleHighlight: "At a Fraction of Dealer Prices",
  paragraphs: [
    "Main dealers charge a premium for work that is often carried out by generalist technicians following a service manual. At Range Rover Garage, every technician works exclusively on JLR platforms — which means the engineer working on your engine has rebuilt that exact unit dozens of times before. That depth of model-specific experience is simply not available at a franchised dealership.",
    "Our customers typically save between 30% and 50% compared to main dealer quotations, without any compromise on parts quality or engineering standards. We use the same genuine OEM components, the same manufacturer specifications and the same diagnostic equipment — we simply charge a fair price for honest work, and let our results speak for themselves.",
  ],
  badge: { label: "JLR Specialists Only", title: "Up to 50% Less Than Dealers" },
};

// ─────────────────────────────────────────────────────────
// ENGINES PAGE (/engines)
// ─────────────────────────────────────────────────────────

// Angle: Multi-brand technical depth & manufacturer-approved tooling
export const enginesPageNationwide: AuthoritySectionData = {
  titleBefore: "Factory-Level Expertise Across ",
  titleHighlight: "Every Engine Platform We Service",
  paragraphs: [
    "Our engineering team holds manufacturer-level qualifications across the full JLR range and every additional brand we service — BMW, Audi, Mercedes-Benz, Jaguar, Volkswagen and Ford. This is not generic mechanical knowledge. We invest in brand-specific diagnostic equipment, specialised tooling and technical training for each platform, so our engineers understand the unique failure modes, torque specifications and assembly sequences that define each engine family.",
    "Whether it is the notorious balance shaft wear on a Range Rover TDV6, the rod bearing failures on a BMW N63, the injector seal degradation on a Mercedes OM642, or the timing chain stretch on a Volkswagen TSI — we have diagnosed and rebuilt these engines hundreds of times. That first-hand experience is what separates a precision rebuild from a temporary fix.",
  ],
  badge: { label: "Brand-Specific Tooling", title: "Multi-Platform Qualified" },
};

// Angle: What our rebuild process delivers for multi-brand customers
export const enginesPagePrecision: AuthoritySectionData = {
  titleBefore: "The Same Uncompromising Standard, ",
  titleHighlight: "Regardless of Your Vehicle Brand",
  paragraphs: [
    "Whatever the make or model, every engine rebuild we complete follows the identical quality protocol: full strip-down, ultrasonic component cleaning, dimensional inspection, precision machining where required, OEM parts fitment and a staged sign-off process that ends with a dynamometer test under simulated road load. No shortcuts. No exceptions.",
    "Every customer receives a fixed-price quote before any work begins, a dedicated point of contact throughout the rebuild, and a written warranty certificate on completion. We do not start work until you have approved the quote in full — and we do not sign off an engine until it passes every stage of our quality inspection. That is the commitment we make to every customer, on every vehicle we rebuild.",
  ],
  badge: { label: "Fixed-Price Quotes", title: "Written Warranty" },
};

// ─────────────────────────────────────────────────────────
// ABOUT PAGE (/about)
// ─────────────────────────────────────────────────────────

// Angle: Company heritage, founding story, independent credibility
export const aboutPageNationwide: AuthoritySectionData = {
  titleBefore: "Built by JLR Engineers, ",
  titleHighlight: "Trusted by Owners Across the UK",
  paragraphs: [
    "Range Rover Garage was founded by a team of JLR-trained engineers who believed that Range Rover and Land Rover owners deserved access to main dealer quality without main dealer prices. Starting from a purpose-built workshop in Grays, Essex, we have grown over more than 20 years into the UK's most respected independent specialist for the full JLR engine family — earning that reputation one rebuild at a time.",
    "We have never lost sight of what made us different from the start: genuine technical expertise, honest pricing and a personal relationship with every customer. Unlike franchised dealers who must follow manufacturer policy, we have the freedom to source the best OEM components, apply the most effective repair strategies and give our customers the straightforward advice they deserve.",
  ],
  badge: { label: "Est. 20+ Years", title: "Independent Specialists" },
};

// Angle: How we operate — transparency, accountability, customer relationships
export const aboutPagePrecision: AuthoritySectionData = {
  titleBefore: "Transparency & Accountability ",
  titleHighlight: "at the Heart of Everything We Do",
  paragraphs: [
    "When you trust Range Rover Garage with your vehicle, you are assigned a dedicated engineer who manages your job from first inspection to final delivery. Every stage of the rebuild is documented, every component replaced is logged, and you have a direct line to your engineer throughout the process — not a call centre, not a service advisor relay, your actual engineer.",
    "We operate on a simple principle: we quote what we will charge, we charge what we quote, and we do not release a vehicle until the work meets our own standards — not just yours. That integrity has earned us a client base built almost entirely on personal recommendation, with customers travelling from across the UK to access a standard of service they cannot find closer to home.",
  ],
  badge: { label: "Dedicated Engineer", title: "Direct Communication" },
};

// ─────────────────────────────────────────────────────────
// SUPPLY & FIT PAGE (/supply-fit)
// ─────────────────────────────────────────────────────────

export const supplyFitNationwide: AuthoritySectionData = {
  titleBefore: "Genuine OEM Parts Sourced & Fitted ",
  titleHighlight: "By Land Rover Specialists",
  paragraphs: [
    "Every part we supply is sourced directly from Land Rover-approved UK distributors, ensuring genuine OEM quality on every fitting. Our technicians work exclusively on Range Rover and Land Rover vehicles, which means they understand the exact fitment requirements, torque specifications and assembly sequences for each component — from suspension arms and brake callipers to turbochargers, transfer boxes and complete engine assemblies.",
    "We verify every part against your vehicle's specific VIN before ordering, eliminating the risk of incorrect fitment that plagues non-specialist garages. Once the part arrives, our engineers complete the installation using manufacturer-approved tooling and complete a full road test before signing the job off. Every supply and fit booking is backed by our 12-month parts and labour warranty as standard.",
  ],
  badge: { label: "VIN-Verified Fitment", title: "OEM Parts Only" },
};

export const supplyFitPrecision: AuthoritySectionData = {
  titleBefore: "Transparent Pricing & ",
  titleHighlight: "No Hidden Costs — Ever",
  paragraphs: [
    "Before any work begins, you receive a full written quote that separates the part cost from the labour cost. We do not inflate part prices, charge diagnostic fees on top of agreed quotes, or add unexpected extras on collection. What we quote is what you pay — no surprises, no small print.",
    "Our supply and fit service covers the complete Range Rover and Land Rover model range, from the Freelander and Discovery Sport through to the Defender, Range Rover Sport and full-size Range Rover. Same-day fitting is available for the majority of in-stock components, and our team will always confirm lead times and availability before confirming your booking so you can plan accordingly.",
  ],
  badge: { label: "Fixed Written Quote", title: "No Hidden Charges" },
};

// ─────────────────────────────────────────────────────────
// DYNAMIC PAGE HELPERS
// ─────────────────────────────────────────────────────────

// Angle: Our specific technical credentials for this service
export function getServiceAuthorityNationwide(serviceTitle: string): AuthoritySectionData {
  return {
    titleBefore: `Why Our ${serviceTitle} `,
    titleHighlight: "Delivers Results That Last",
    paragraphs: [
      `Our ${serviceTitle.toLowerCase()} service is not a generic repair — it is a precision engineering process designed specifically for the Range Rover and Land Rover engine family. Every job begins with a full diagnostic inspection to identify not just the primary fault but any contributing factors that a less thorough workshop might miss, ensuring that the root cause is addressed and not just the symptom.`,
      `We use only genuine OEM or manufacturer-approved components on every ${serviceTitle.toLowerCase()} we carry out, and every completed job is pressure tested, road loaded and signed off against our 200-point quality protocol before your vehicle leaves our workshop. That is why we can offer up to 24 months warranty on this service — and why our customers come back to us every time.`,
    ],
    badge: { label: "Root-Cause Diagnosis", title: "OEM Components Only" },
  };
}

// Angle: Technical qualifications specific to this service
export function getServiceAuthorityPrecision(serviceTitle: string): AuthoritySectionData {
  return {
    titleBefore: "JLR-Certified Specialists — ",
    titleHighlight: `${serviceTitle} Done Right`,
    paragraphs: [
      `At Range Rover Garage, ${serviceTitle.toLowerCase()} is a service our engineers have performed hundreds of times on the full spectrum of JLR engines. We hold factory-level qualifications for every platform we work on, which means we understand the specific assembly sequences, torque specifications and material tolerances that separate a precision rebuild from a failed repeat repair.`,
      `We invest in manufacturer-approved tooling for every service we offer, including specialised jigs, alignment fixtures and diagnostic equipment that general garages simply do not carry. This investment in the right tools — combined with the right technical knowledge — is what allows us to guarantee our ${serviceTitle.toLowerCase()} work with up to 24 months warranty and absolute confidence.`,
    ],
    badge: { label: "Factory Tooling", title: "Qualified Engineers" },
  };
}

// Angle: Technical depth and credentials for this specific brand
export function getBrandAuthorityNationwide(brandTitle: string): AuthoritySectionData {
  return {
    titleBefore: `${brandTitle} Engine Expertise — `,
    titleHighlight: "Qualified, Equipped & Proven",
    paragraphs: [
      `Our engineers hold manufacturer-level qualifications specific to the ${brandTitle} engine family, built through years of dedicated work on the platform rather than generic mechanical training. We understand the known design characteristics, common failure modes and rebuild specifications that define ${brandTitle} engines — and we invest in brand-approved diagnostic equipment and specialised tooling to match.`,
      `Every ${brandTitle} engine rebuild we complete is subject to the same rigorous 200-point inspection protocol, the same OEM-only parts policy and the same dynamometer sign-off standard that we apply to every vehicle that passes through our workshop. The result is a rebuilt engine that performs to factory tolerances and is backed by up to 24 months warranty.`,
    ],
    badge: { label: `${brandTitle} Qualified`, title: "200-Point Protocol" },
  };
}

// Angle: Why customers trust us specifically for this brand over alternatives
export function getBrandAuthorityPrecision(brandTitle: string): AuthoritySectionData {
  return {
    titleBefore: `The Independent ${brandTitle} Specialist `,
    titleHighlight: "That Outperforms the Dealer",
    paragraphs: [
      `${brandTitle} owners who come to Range Rover Garage typically arrive after receiving a main dealer quotation that bears little relation to the actual cost of quality engine work. Our engineers carry the same qualifications, use the same OEM components and follow the same manufacturer specifications — at a price that reflects honest independent rates, not franchised dealer overheads.`,
      `Beyond pricing, what sets our ${brandTitle} service apart is accountability. You deal with the engineer working on your vehicle, not a service desk acting as an intermediary. You receive a fixed-price quote before work begins, regular progress updates and a written warranty on completion. That direct, transparent relationship is something no main dealer can replicate.`,
    ],
    badge: { label: "Fixed-Price Guarantee", title: "Direct Engineer Access" },
  };
}

// Angle: Model-specific technical knowledge and rebuild precision
export function getModelAuthorityNationwide(brandTitle: string, modelTitle: string): AuthoritySectionData {
  return {
    titleBefore: `${brandTitle} ${modelTitle} Engines — `,
    titleHighlight: "Specialist Knowledge, Proven Results",
    paragraphs: [
      `The ${brandTitle} ${modelTitle} has specific engine characteristics, known failure patterns and rebuild requirements that demand genuine model-level expertise. Our engineers have rebuilt every engine variant fitted to the ${modelTitle} — understanding not just the mechanical process but the precise tolerances, torque sequences and component specifications that ensure each rebuild holds up under real-world driving conditions.`,
      `We use only genuine OEM components sourced directly from approved ${brandTitle} suppliers for every ${modelTitle} engine rebuild we complete. Combined with our specialised tooling, manufacturer-approved diagnostic equipment and 200-point quality protocol, this ensures that every ${brandTitle} ${modelTitle} we return to a customer performs to — or exceeds — its original factory specification.`,
    ],
    badge: { label: "Model-Specific Tooling", title: "OEM Parts Guaranteed" },
  };
}

// Angle: The engineering precision applied to this exact model
export function getModelAuthorityPrecision(brandTitle: string, modelTitle: string): AuthoritySectionData {
  return {
    titleBefore: `Every ${brandTitle} ${modelTitle} Rebuild `,
    titleHighlight: "Held to the Highest Standard",
    paragraphs: [
      `We apply an uncompromising rebuild standard to every ${brandTitle} ${modelTitle} that enters our workshop. The process begins with a full strip-down to individual components, followed by ultrasonic cleaning, dimensional inspection and precision bore honing where required. We use manufacturer-specified torque values and assembly sequences at every stage — the same standards applied on the ${brandTitle} production line.`,
      `Before your ${brandTitle} ${modelTitle} leaves our workshop, the engine undergoes pressure testing, staged assembly checks and a final dynamometer run under simulated load. Only when every parameter meets or exceeds factory tolerance is the job signed off. You receive a written warranty certificate, a full service record of every component replaced and the assurance of a rebuild done properly — the first time.`,
    ],
    badge: { label: "Dynamometer Certified", title: "Written Warranty" },
  };
}
