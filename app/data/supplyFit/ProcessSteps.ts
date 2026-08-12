export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
export const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Enquiry & Details",
    description: "Share your reg and symptoms with us",
  },
  {
    number: "02",
    title: "Engine Matched",
    description: "We source the correct tested unit",
  },
  {
    number: "03",
    title: "Collection Arranged",
    description: "UK-wide collection of your vehicle",
  },
  {
    number: "04",
    title: "Old Engine Removed",
    description: "Careful removal and ancillary inspection carried out",
  },
  {
    number: "05",
    title: "New Engine Fitted",
    description: "Precision fitting and full ancillary transfer completed",
  },
  {
    number: "06",
    title: "Testing & Checks",
    description: "Running tests confirm smooth, reliable performance",
  },
  {
    number: "07",
    title: "Delivered Back to You",
    description: "Vehicle returned with full warranty paperwork",
  },
];
