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

    default:
      throw new Error(`Model data not found for slug: ${modelSlug}`);
  }
}
