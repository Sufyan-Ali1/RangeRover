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
