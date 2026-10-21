import type { OilLevelNoticeData } from "../types";

export const homeOilLevelNotice: OilLevelNoticeData = {
  eyebrow: "Important vehicle care",
  title: "Range Rover",
  titleHighlight: "Oil Level",
  images: {
    desktop: "/images/oillevel.webp",
    mobile: "/images/oillevelmobile.webp",
    mobileWidth: 1116,
    mobileHeight: 639,
    alt: "Range Rover beside an instrument display showing the electronic engine oil level",
  },
  paragraphs: [
    [
      { text: "Many Range Rover models " },
      { text: "do not have a physical oil dipstick", bold: true },
      { text: ", so the engine oil level must be checked electronically through the vehicle’s dashboard or instrument display." },
    ],
    [
      { text: "Please check the oil level regularly and " },
      { text: "do not rely only on the warning light", bold: true },
      { text: ". Running the engine with low or no oil can cause serious engine damage and is a common reason for engine failure." },
    ],
    [
      { text: "Keep checking your oil level and " },
      { text: "top up with the correct oil when required", bold: true },
      { text: "." },
    ],
  ],
  warranty: {
    title: "Warranty Notice",
    description: [
      { text: "Any engine damage caused by running the vehicle with low oil, no oil, or failure to maintain the correct oil level " },
      { text: "will void the engine warranty", bold: true },
      { text: "." },
    ],
  },
  support: {
    title: "Need help checking your oil level?",
    description: "Contact Range Rover Garage and our team can guide you through it.",
    phone: { label: "01708 592377", href: "tel:+441708592377" },
    whatsapp: { label: "07477 733313", href: "https://wa.me/447477733313" },
    link: { label: "Contact Our Team", href: "/contact" },
  },
  location: {
    name: "Range Rover Garage",
    addressLines: ["Unit 1 Hedley Ave", "Grays RM20 4EL, United Kingdom"],
    mapHref: "https://maps.app.goo.gl/49cNyUKLEiCa4UL57",
  },
};
