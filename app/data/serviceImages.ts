export const serviceImages: Record<string, { src: string; alt: string }[]> = {
  "engine-rebuild": [
    { src: "/service/engine_rebuild/engine_rebuild 1.png", alt: "Engine Rebuild 1" },
    { src: "/service/engine_rebuild/engine_rebuild 2.png", alt: "Engine Rebuild 2" },
    { src: "/service/engine_rebuild/engine_rebuild 3.png", alt: "Engine Rebuild 3" },
  ],
  "engine-repair": [
    { src: "/service/engine_repair/engine_repair 1.png", alt: "Engine Repair 1" },
    { src: "/service/engine_repair/engine_repair 2.png", alt: "Engine Repair 2" },
    { src: "/service/engine_repair/engine_repair 3.png", alt: "Engine Repair 3" },
  ],
  "engine-replacement": [
    { src: "/service/engine_replacement/engine_replacement 1.png", alt: "Engine Replacement 1" },
    { src: "/service/engine_replacement/engine_replacement 2.png", alt: "Engine Replacement 2" },
    { src: "/service/engine_replacement/engine_replacement 3.png", alt: "Engine Replacement 3" },
  ],
  "engine-swap": [
    { src: "/service/engine_swap/engine_swap 1.png", alt: "Engine Swap 1" },
    { src: "/service/engine_swap/engine_swap 2.png", alt: "Engine Swap 2" },
    { src: "/service/engine_swap/engine_swap 3.png", alt: "Engine Swap 3" },
  ],
  "head-gasket-replacement": [
    { src: "/service/head_gasket/head_gasket 1.png", alt: "Head Gasket Replacement 1" },
    { src: "/service/head_gasket/head_gasket 2.png", alt: "Head Gasket Replacement 2" },
    { src: "/service/head_gasket/head_gasket 3.png", alt: "Head Gasket Replacement 3" },
  ],
  "timing-belt-replacement": [
    { src: "/service/timming_belt/timing_belt 1.png", alt: "Timing Belt Replacement 1" },
    { src: "/service/timming_belt/timing_belt 2.png", alt: "Timing Belt Replacement 2" },
  ],
  "timing-chain-replacement": [
    { src: "/service/timming_chain/timming_chain 1.png", alt: "Timing Chain Replacement 1" },
    { src: "/service/timming_chain/timming_chain 2.png", alt: "Timing Chain Replacement 2" },
    { src: "/service/timming_chain/timming_chain 3.png", alt: "Timing Chain Replacement 3" },
  ],
  "turbo-replacement": [
    { src: "/service/turbo_replacement/turbo_replacement 1.png", alt: "Turbo Replacement 1" },
  ],
};

export function getServiceImages(slug: string) {
  return serviceImages[slug] ?? [];
}
