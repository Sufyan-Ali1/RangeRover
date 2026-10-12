export interface FAQItem {
  q: string;
  a: string;
}

export interface SupplyAndFitFAQDataProps {
  sectionHeading: string;
  intro: string;
  faqs: FAQItem[];
}

export const supplyAndFitFAQData: SupplyAndFitFAQDataProps = {
  sectionHeading: "Supply and Fit Questions",
  intro: "FAQs",
  faqs: [
    {
      q: "What does engine supply and fit actually include?",
      a: "It covers sourcing a tested reconditioned or remanufactured engine matched to your vehicle, removing your old unit, transferring relevant ancillaries, and fitting the replacement engine. Labour, testing and warranty are typically included as part of the overall quoted price.",
    },
    {
      q: "Is supply and fit cheaper than rebuilding an existing engine?",
      a: "Often, yes, particularly when the original engine has suffered severe internal failure. A rebuild requires extensive machining and part-by-part restoration, whereas supply and fit provides a ready-tested unit, which can reduce both cost and turnaround time significantly.",
    },
    {
      q: "Do supplied engines come with a warranty?",
      a: "Yes, every engine we supply and fit is covered by warranty as standard, protecting both the unit itself and the fitting workmanship. Full terms are explained clearly before you commit, so there's no ambiguity about what's covered.",
    },
    {
      q: "How long does engine supply and fit take?",
      a: "Most jobs are completed within around a week, though timing depends on engine availability and vehicle complexity. We'll confirm a realistic turnaround once we've matched the correct engine to your specific model.",
    },
    {
      q: "Do I need to remove my old engine before booking?",
      a: "No, our team handles the complete process, including removal of your existing engine, ancillary assessment, and fitting of the replacement unit. You simply need to arrange collection or drop-off with us.",
    },
    {
      q: "Is a used engine the same as a reconditioned one?",
      a: "Not quite. A used engine is fitted largely as removed, while a reconditioned engine has worn components inspected, repaired or replaced before fitting. We work primarily with reconditioned and remanufactured units for reliability.",
    },
    {
      q: "Can you collect my vehicle for supply and fit work?",
      a: "Yes, we offer UK-wide collection and delivery, so you don't need to arrange your own transport. Once work is complete, your vehicle is returned directly to you with full warranty documentation.",
    },
    {
      q: "What areas do you cover for supply and fit collection?",
      a: "We collect and deliver vehicles across the UK, meaning your location doesn't limit access to our specialist service. Simply provide your address when booking and we'll arrange the logistics from there.",
    },
  ],
};
