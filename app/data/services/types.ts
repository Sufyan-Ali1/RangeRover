export interface Service {
  slug: string;
  title: string;
  description: string;
}

export interface EngineServicesData {
  heading: string;
  intro: string;
  services: Service[];
}

import { AuthoritySectionData } from "../authority";
import { Review } from "../types";

export interface HeaderData {
  title?: string;
  subtitle?: string;
  highlights?: string[];
}

export interface BookData {
  titleBefore: string;
  titleHighlight: string;
  paragraphs: string[];
}

export interface EngineRebuildData {
  headerData: HeaderData;
  reviews: Review[];
  galleryData: { title: string; subtitle: string };
  whyEngineData: AuthoritySectionData;
  bookEngineData: BookData;
  BrandsData: {
    title: string;
    description: string;
    image: string;
    href: string;
  }[];
  certifiedSpecialistsData: {
    titleBefore: string;
    titleHighlight: string;
    paragraphs: string[];
    badge: { label: string; title: string };
  };
  TrustData: BookData;
  faqs: {
    q: string;
    a: string;
  }[];
}
