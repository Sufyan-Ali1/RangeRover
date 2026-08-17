import { RangeRoverData } from "./RangeRower/RangRoverData";
import { LandRoverData } from "./LandRower/LandRoverData";
import { JaguarData } from "./Jaguar/JaguarData";

export function getBrandData(brandSlug: string) {
  switch (brandSlug) {
    case "range-rover":
      return RangeRoverData;
    case "land-rover":
      return LandRoverData;
    case "jaguar":
      return JaguarData;
  }
}
import { ModelData } from "@/app/data/types";
import { RREvoqueData } from "./RangeRower/models/EvoqueData";
import { RRSportData } from "./RangeRower/models/SportData";
import { RRVogueMK3Data } from "./RangeRower/models/VogueMK3Data";
import { RRVogueMK4Data } from "./RangeRower/models/VogueMK4Data";
import { RRVelarData } from "./RangeRower/models/VelarData";
import { RRSportSVRData } from "./RangeRower/models/SportSVRData";
import { Discovery1Data } from "./LandRower/models/Discover1Data";
import { Discovery2Data } from "./LandRower/models/Discover2Data";
import { Discovery3Data } from "./LandRower/models/Discover3Data";
import { Discovery4Data } from "./LandRower/models/Discover4Data";
import { Discovery5Data } from "./LandRower/models/Discover5Data";
import { DiscoverySportData } from "./LandRower/models/DiscoverySport";
import { Freelander1Data } from "./LandRower/models/Freelander1Data";
import { Freelander2Data } from "./LandRower/models/Freelander2Data";
export function getBrandsModelsBySlug(modelSlug: string): ModelData {
  switch (modelSlug) {
    case "evoque":
      return RREvoqueData;
    case "sport":
      return RRSportData;
    case "vogue-old-mk-3":
      return RRVogueMK3Data;
    case "vogue-new-mk-4":
      return RRVogueMK4Data;
    case "velar":
      return RRVelarData;
    case "sport-svr":
      return RRSportSVRData;
    case "discovery-1":
      return Discovery1Data;
    case "discovery-2":
      return Discovery2Data;
    case "discovery-3":
      return Discovery3Data;
    case "discovery-4":
      return Discovery4Data;
    case "discovery-5":
      return Discovery5Data;
    case "discovery-sport":
      return DiscoverySportData;
    case "freelander-1":
      return Freelander1Data;
    case "freelander-2":
      return Freelander2Data;
    default:
      throw new Error(`Model data not found for slug: ${modelSlug}`);
  }
}
