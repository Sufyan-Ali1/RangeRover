import "server-only";
import fs from "node:fs";
import path from "node:path";
import evoqueSpecifications from "./RangeRower/models/evoquecode/204DTA.json";
import { getModelsByBrandSlug, toModelSlug } from "@/app/data/models";

const brandFolders: Record<string, string> = {
  "range-rover": "RangeRower",
  "land-rover": "LandRower",
};

type Specifications = typeof evoqueSpecifications;

export function getEngineSpecifications(
  brand: string,
  model: string,
  engineCode: string,
): Specifications {
  const folder = brandFolders[brand];
  const knownModel = getModelsByBrandSlug(brand).some(
    (entry) => toModelSlug(entry.model) === model,
  );
  const code = engineCode.toUpperCase();

  if (!folder || !knownModel || !/^[A-Z0-9-]+$/.test(code)) {
    return evoqueSpecifications;
  }

  // Each model can supply a separate JSON file for each engine code.
  const filePath = path.join(
    process.cwd(),
    "app/data/engines/brands",
    folder,
    "models",
    `${model.replace(/-/g, "")}code`,
    `${code}.json`,
  );

  if (!fs.existsSync(filePath)) return evoqueSpecifications;

  const data: Specifications | { template: string } = JSON.parse(
    fs.readFileSync(filePath, "utf8"),
  );

  // Other models reuse Evoque's 204DTA data until their own specs are added.
  return "template" in data ? evoqueSpecifications : data;
}
