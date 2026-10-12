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
import { EngineSizesData, ModelData } from "@/app/data/types";
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
import { RRSizes20Data } from "./RangeRower/RangeRoverSizes/2.0Data";
import { RRSizes44Data } from "./RangeRower/RangeRoverSizes/4.4Data";
import { RRSizes50Data } from "./RangeRower/RangeRoverSizes/5.0Data";
import { RRSizes30Data } from "./RangeRower/RangeRoverSizes/3.0Data";
import { RRSizes22Data } from "./RangeRower/RangeRoverSizes/2.2Data";
import { LandRoverSizes20Data } from "./LandRower/LandRoverSizes/Land2.0Data";
import { LandRoverSizes22Data } from "./LandRower/LandRoverSizes/Land2.2Data";
import { LandRoverSizes30Data } from "./LandRower/LandRoverSizes/Land3.0Data";
import { LandRoverSizes44Data } from "./LandRower/LandRoverSizes/Land4.4Data";
import { LandRoverSizes50Data } from "./LandRower/LandRoverSizes/Land5.0Data";
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

export function getBrandsModelSizesDataBySlug(
  sizeSlug: string,
): EngineSizesData {
  switch (sizeSlug) {
    case "range-rover-2.0":
      return RRSizes20Data;
    case "range-rover-2.2":
      return RRSizes22Data;
    case "range-rover-3.0":
      return RRSizes30Data;
    case "range-rover-4.4":
      return RRSizes44Data;
    case "range-rover-5.0":
      return RRSizes50Data;
    case "land-rover-2.0":
      return LandRoverSizes20Data;
    case "land-rover-2.2":
      return LandRoverSizes22Data;
    case "land-rover-3.0":
      return LandRoverSizes30Data;
    case "land-rover-4.4":
      return LandRoverSizes44Data;
    case "land-rover-5.0":
      return LandRoverSizes50Data;
    default:
      throw new Error(`Model size data not found for slug: ${sizeSlug}`);
  }
}
