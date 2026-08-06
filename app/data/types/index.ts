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
  metaTitle:string;
  metaDescription:string;
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