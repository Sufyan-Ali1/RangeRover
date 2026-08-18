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

import { AuthoritySectionData } from "../types";
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
  meta: {
    title: string;
    description: string;
  };
  headerData: HeaderData;
  reviews: Review[];
  galleryData: { title: string; subtitle: string };
  whyEngineData: AuthoritySectionData;
  bookEngineData: BookData;
  BrandsData: BrandsDataType[];
  certifiedSpecialistsData: AuthoritySectionData;
  TrustData: BookData;
  faqs: {
    q: string;
    a: string;
  }[];
}

export interface BrandsDataType {
  title: string;
  description: string;
  image: string;
  href: string;
}
