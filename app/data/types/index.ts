export interface AreaService {
  heading?: string;
  subheading?: string;
  items?: {
    heading?: string;
    paragraph?: string;
  }[];
}

export interface AreaHero {
  eyebrowLabel: string;
  heading?: string;
  introParagraph?: string;
  ctaButtonText?: string;
  trustBadges?: string[];
}

export interface ServiceCardData {
  heading?: string;
  paragraphs?: string[];
  buttonText?: string;
  serviceTag?: string;
}
export interface WhyChooseBullet {
  title: string;
  body: string;
}

export interface WhyChooseData {
  heading: string;
  introParagraph: string;
  bullets: WhyChooseBullet[];
  outroParagraph?: string;
}

export interface Overview {
  fullOverviewParagraphs: string[];
  overviewHeading?: string;
  eyebrowLabel?: string;
}

export interface SupportedModels {
  heading: string;
  models: string[];
}
export interface AreaWhatWeOfferData {
  heading: string;
  subheading: string;
  paragraph: string;
  features: string[];
}

export interface PopularFaults {
  heading: string;
  faults: string[];
}
export interface AreaSpecialistData {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  mainBullets?: string[];
  sidePanel: {
    heading: string;
    chips: string[];
    bullets: string[];
    buttonLabel: string;
  };
}

export interface TechnicalContent {
  technicalHeader: string;
  technicalParagraph: string;
}
export interface ReviewItem {
  content: string;
  name: string;
  meta: string;
  rating?: number;
}

export interface ReviewsData {
  heading: string;
  subheading: string;
  reviews: ReviewItem[];
}

export interface Area {
  id: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  hero?: AreaHero[];
  eyebrow: string;
  description: string;
  fordEngineFaults?: PopularFaults[];
  overview?: Overview[];
  technicalContent?: TechnicalContent[];
  supportedModels: SupportedModels[];
  premiumServices?: ServiceCardData[];
  services: AreaService;
  specialistData?: AreaSpecialistData;
  whyChooseData?: WhyChooseData;
  whatWeOfferData?: AreaWhatWeOfferData;
  reviewsData?: ReviewsData;
}

export interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  stars: number;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
}

export interface EngineServicesMain {
  heading?: string;
  intro?: string;
  viewMoreHref?: string;
}

export interface Model {
  brand: string;
  model: string;
  service: string;
  desc: string;
}

export interface EngineModelsMain {
  label: string;
  heading: string;
  description: string;
  viewMoreHref: string;
}

export interface TrustedSpecialistsData {
  heading: string;
  description: string;
  steps: { id: number; side: "left" | "right"; text: string }[];
}

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

export interface NationwideSupportData {
  titleBefore: string;
  titleHighlight: string;
  paragraphs: string[];
}

export interface AboutData {
  heading: string;
  body: string;
}

export interface SupplyFitEngine {
  id: number;
  image: string;
  title: string;
  description: string;
  specs: string[];
}

export interface SupplyFitEnginesQuoteDataProps {
  headingPart1: string;
  headingPart2: string;
  headingPart3: string;
  description: string;
  noticeText: string;
  engines: SupplyFitEngine[];
}
