export interface EngineSizeEntry {
  heading: string;
  subheading: string;
  description: string;
  sizes: string[];
}

export const engineSizes: Record<string, EngineSizeEntry> = {
  "range-rover": {
    heading: "Popular",
    subheading: "engine sizes",
    description: "Quick access to the most common Range Rover engine displacements we stock.",
    sizes: ["2.0", "2.2", "3.0", "4.4", "5.0"],
  },
  "land-rover": {
    heading: "Popular",
    subheading: "engine sizes",
    description: "Quick access to the most common Land Rover engine displacements we stock.",
    sizes: ["2.0", "2.2", "3.0", "4.4", "5.0"],
  },
};
