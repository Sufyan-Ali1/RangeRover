export interface Model {
  brand: string;
  model: string;
  service: string;
  desc: string;
}

const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const rangeRoverModels: Model[] = [
  { brand: "RANGE ROVER", model: "EVOQUE", service: "ENGINE SOLUTION", desc },
  { brand: "RANGE ROVER", model: "SPORT", service: "ENGINE SOLUTION", desc },
  { brand: "RANGE ROVER", model: "VOGUE", service: "ENGINE SOLUTION", desc },
  { brand: "RANGE ROVER", model: "VELAR", service: "ENGINE SOLUTION", desc },
  { brand: "RANGE ROVER", model: "AUTOBIOGRAPHY", service: "ENGINE SOLUTION", desc },
  { brand: "RANGE ROVER", model: "DEFENDER", service: "ENGINE SOLUTION", desc },
];

export const landRoverModels: Model[] = [
  { brand: "LAND ROVER", model: "DEFENDER", service: "ENGINE SOLUTION", desc },
  { brand: "LAND ROVER", model: "DISCOVERY", service: "ENGINE SOLUTION", desc },
  { brand: "LAND ROVER", model: "FREELANDER", service: "ENGINE SOLUTION", desc },
  { brand: "LAND ROVER", model: "DISCOVERY SPORT", service: "ENGINE SOLUTION", desc },
  { brand: "LAND ROVER", model: "RANGE ROVER SPORT", service: "ENGINE SOLUTION", desc },
  { brand: "LAND ROVER", model: "VELAR", service: "ENGINE SOLUTION", desc },
];

export const audiModels: Model[] = [
  { brand: "AUDI", model: "A3", service: "ENGINE SOLUTION", desc },
  { brand: "AUDI", model: "A4", service: "ENGINE SOLUTION", desc },
  { brand: "AUDI", model: "A6", service: "ENGINE SOLUTION", desc },
  { brand: "AUDI", model: "Q5", service: "ENGINE SOLUTION", desc },
  { brand: "AUDI", model: "Q7", service: "ENGINE SOLUTION", desc },
  { brand: "AUDI", model: "RS6", service: "ENGINE SOLUTION", desc },
];

export const mercedesModels: Model[] = [
  { brand: "MERCEDES", model: "C-CLASS", service: "ENGINE SOLUTION", desc },
  { brand: "MERCEDES", model: "E-CLASS", service: "ENGINE SOLUTION", desc },
  { brand: "MERCEDES", model: "S-CLASS", service: "ENGINE SOLUTION", desc },
  { brand: "MERCEDES", model: "GLC", service: "ENGINE SOLUTION", desc },
  { brand: "MERCEDES", model: "GLE", service: "ENGINE SOLUTION", desc },
  { brand: "MERCEDES", model: "AMG GT", service: "ENGINE SOLUTION", desc },
];

export const fordModels: Model[] = [
  { brand: "FORD", model: "FOCUS", service: "ENGINE SOLUTION", desc },
  { brand: "FORD", model: "FIESTA", service: "ENGINE SOLUTION", desc },
  { brand: "FORD", model: "MONDEO", service: "ENGINE SOLUTION", desc },
  { brand: "FORD", model: "KUGA", service: "ENGINE SOLUTION", desc },
  { brand: "FORD", model: "TRANSIT", service: "ENGINE SOLUTION", desc },
  { brand: "FORD", model: "MUSTANG", service: "ENGINE SOLUTION", desc },
];

export const bmwModels: Model[] = [
  { brand: "BMW", model: "3 SERIES", service: "ENGINE SOLUTION", desc },
  { brand: "BMW", model: "5 SERIES", service: "ENGINE SOLUTION", desc },
  { brand: "BMW", model: "X3", service: "ENGINE SOLUTION", desc },
  { brand: "BMW", model: "X5", service: "ENGINE SOLUTION", desc },
  { brand: "BMW", model: "M3", service: "ENGINE SOLUTION", desc },
  { brand: "BMW", model: "M5", service: "ENGINE SOLUTION", desc },
];

export const jaguarModels: Model[] = [
  { brand: "JAGUAR", model: "XE", service: "ENGINE SOLUTION", desc },
  { brand: "JAGUAR", model: "XF", service: "ENGINE SOLUTION", desc },
  { brand: "JAGUAR", model: "XJ", service: "ENGINE SOLUTION", desc },
  { brand: "JAGUAR", model: "F-PACE", service: "ENGINE SOLUTION", desc },
  { brand: "JAGUAR", model: "E-PACE", service: "ENGINE SOLUTION", desc },
  { brand: "JAGUAR", model: "F-TYPE", service: "ENGINE SOLUTION", desc },
];

export const volkswagenModels: Model[] = [
  { brand: "VOLKSWAGEN", model: "GOLF", service: "ENGINE SOLUTION", desc },
  { brand: "VOLKSWAGEN", model: "PASSAT", service: "ENGINE SOLUTION", desc },
  { brand: "VOLKSWAGEN", model: "TIGUAN", service: "ENGINE SOLUTION", desc },
  { brand: "VOLKSWAGEN", model: "TOUAREG", service: "ENGINE SOLUTION", desc },
  { brand: "VOLKSWAGEN", model: "POLO", service: "ENGINE SOLUTION", desc },
  { brand: "VOLKSWAGEN", model: "ARTEON", service: "ENGINE SOLUTION", desc },
];

export const allBrandModels: Model[] = [
  ...rangeRoverModels,
  ...landRoverModels,
  ...audiModels,
  ...mercedesModels,
  ...fordModels,
  ...bmwModels,
  ...jaguarModels,
  ...volkswagenModels,
];

export function toBrandSlug(brand: string) {
  return brand.toLowerCase().replace(/ /g, "-");
}

export function toModelSlug(model: string) {
  return model.toLowerCase().replace(/ /g, "-");
}

export function getModelsByBrandSlug(slug: string): Model[] {
  return allBrandModels.filter((m) => toBrandSlug(m.brand) === slug);
}
