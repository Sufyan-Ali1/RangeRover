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

export const authorityLeading: AuthorityLeadingData = {
  label: "Materials",
  titleBefore: "UK's Leading Authority In ",
  titleHighlight: "Range Rover",
  titleAfter: " Engine Restoration.",
  body: "Range Rover Garage is the UK's leading authority in Range Rover engine restoration, providing a master-level service from our state-of-the-art facility in Grays, Essex. With over 20 years of technical heritage, our independent workshop offers a credible alternative to main dealers, combining specialized JLR expertise with competitive independent pricing. We specialize in the complete overhaul and re-engineering of the Land Rover and Range Rover engine family, including the high-performance 5.0L V8 Supercharged units and the incredibly popular 3.0L TDV6 and SDV6 diesel platforms. Our engineering process involves a 200-point inspection protocol and the use of specialized JLR timing jigs, ensuring that every reconditioned engine we produce meets or exceeds factory tolerances for thermal efficiency and mechanical longevity. From London to Manchester, our nationwide collection service ensures your prestige vehicle is handled with the absolute care it deserves.",
};

export const authorityNationwide: AuthoritySectionData = {
  titleBefore: "Nationwide Support & ",
  titleHighlight: "OEM Parts Excellence",
  paragraphs: [
    "Our commitment to engineering excellence extends across the entire South East, serving luxury vehicle owners in London, Essex, Kent, and beyond with our secure nationwide collection and delivery service. We understand that your Range Rover Vogue or Sport is a precision-engineered asset, which is why we use only genuine Land Rover OEM parts and uprated heavy-duty components where known design weaknesses exist.",
    "Our engine rebuild process is exhaustive, involving a complete technical strip-down, high-pressure chemical cleaning, and precision honing of cylinder bores to ensure maximum longevity and resale value. Every engine service we perform is backed by a comprehensive warranty, giving you total peace of mind for the road ahead. From the classic Range Rover L322 to the modern Discovery 5 and Defender L663, trust the specialists who live and breathe Range Rover engineering every day.",
  ],
  badge: { label: "JLR Certified Tools", title: "Diagnostic Mastery" },
};

export const authorityPrecision: AuthoritySectionData = {
  titleBefore: "Precision Engineering & ",
  titleHighlight: "Certified Expertise",
  paragraphs: [
    "Every engine that leaves our workshop has undergone an exhaustive rebuild process, starting with a full chemical clean and ultrasonic component inspection. Our technicians are factory-trained and hold JLR-certified qualifications, ensuring each rebuild is performed to manufacturer specification or beyond.",
    "We use only genuine OEM components sourced directly from Land Rover approved suppliers, covering everything from piston rings and crankshaft bearings to timing chains and oil pumps. Our quality control process involves a final dynamometer test before any engine is signed off, giving you the confidence that your Range Rover or Defender will perform as intended for years to come.",
  ],
  badge: { label: "JLR Certified Tools", title: "Diagnostic Mastery" },
};
