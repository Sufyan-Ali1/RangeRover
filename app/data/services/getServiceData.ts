import { engineRebuildData } from "./engine-rebuild";
import { timingChainReplacementData } from "./timing-chain-replacement";
import { turboReplacementData } from "./turbo-replacement";
import { headGasketReplacementData } from "./head-gasket-replacement";
import { engineRepairData } from "./engine-repair";
import { engineReplacementData } from "./engine-replacement";
import { timingBeltReplacementData } from "./timing-belt-replacement";
import { engineSwapData } from "./engine-swap";

export function getServiceData(slug: string) {
  switch (slug) {
    case "engine-rebuild":
      return engineRebuildData;
    case "timing-chain-replacement":
      return timingChainReplacementData;
    case "turbo-replacement":
      return turboReplacementData;
    case "head-gasket-replacement":
      return headGasketReplacementData;
    case "engine-repair":
      return engineRepairData;
    case "engine-replacement":
      return engineReplacementData;
    case "timing-belt-replacement":
      return timingBeltReplacementData;
    case "engine-swap":
      return engineSwapData;
  }
}
