export type {
  Area,
  AreaHero,
  AreaService,
  Overview,
  AreaSpecialistData,
  PopularFaults,
  ServiceCardData,
  WhyChooseData,
  SupportedModels,
  AreaWhatWeOfferData,
  ReviewsData,
  TechnicalContent,
} from "../types";

import { berkshireArea } from "./berkshire";
import { eastSussexArea } from "./east-sussex";
import { essexArea } from "./essex";
import { lincolnshireArea } from "./lincolnshire";
import { londonArea } from "./london";
import { westYorkshireArea } from "./westYorkshire";
import { westSussexArea } from "./west-sussex";
import { oxfordshireArea } from "./oxfordshire";
import { hampshireArea } from "./hampshire";

export const areasData = [
  oxfordshireArea,
  hampshireArea,
  berkshireArea,
  eastSussexArea,
  essexArea,
  lincolnshireArea,
  londonArea,
  westYorkshireArea,
  westSussexArea,
];
