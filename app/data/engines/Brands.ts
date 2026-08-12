export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  modelCount: number;
}

export const brands: Brand[] = [
  {
    slug: "range-rover",
    name: "Range Rover",
    tagline: "ENGINE SOLUTION",
    desc: "Reconditioned engines for every Range Rover generation, from the Evoque and Velar to the Sport, Vogue and SVR, tested to factory standard. ",
    modelCount: 6,
  },
  {
    slug: "land-rover",
    name: "Land Rover",
    tagline: "ENGINE SOLUTION",
    desc: "Supply and fit or reconditioned engine options for Discovery, Defender and Freelander models, backed by our workshop warranty.",
    modelCount: 8,
  },
  {
    slug: "jaguar",
    name: "Jaguar",
    tagline: "ENGINE SOLUTION",
    desc: "Reconditioned and remanufactured engines available for select Jaguar models, tested with the same rigour as our Land Rover work.",
    modelCount: 6,
  },
];
