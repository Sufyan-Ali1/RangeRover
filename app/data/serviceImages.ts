export const serviceImages: Record<string, { src: string; alt: string }[]> = {
  "engine-rebuild": [
    { src: "/images/service/engine_rebuild/engine_rebuild 1.webp", alt: "Engine Rebuild 1" },
    { src: "/images/service/engine_rebuild/engine_rebuild 2.webp", alt: "Engine Rebuild 2" },
    { src: "/images/service/engine_rebuild/engine_rebuild 3.webp", alt: "Engine Rebuild 3" },
  ],
  "engine-repair": [
    { src: "/images/service/engine_repair/engine_repair 1.webp", alt: "Engine Repair 1" },
    { src: "/images/service/engine_repair/engine_repair 2.webp", alt: "Engine Repair 2" },
    { src: "/images/service/engine_repair/engine_repair 3.webp", alt: "Engine Repair 3" },
  ],
  "engine-replacement": [
    { src: "/images/service/engine_replacement/engine_replacement 1.webp", alt: "Engine Replacement 1" },
    { src: "/images/service/engine_replacement/engine_replacement 2.webp", alt: "Engine Replacement 2" },
    { src: "/images/service/engine_replacement/engine_replacement 3.webp", alt: "Engine Replacement 3" },
  ],
  "engine-swap": [
    { src: "/images/service/engine_swap/engine_swap 1.webp", alt: "Engine Swap 1" },
    { src: "/images/service/engine_swap/engine_swap 2.webp", alt: "Engine Swap 2" },
    { src: "/images/service/engine_swap/engine_swap 3.webp", alt: "Engine Swap 3" },
  ],
  "head-gasket-replacement": [
    { src: "/images/service/head_gasket/head_gasket 1.webp", alt: "Head Gasket Replacement 1" },
    { src: "/images/service/head_gasket/head_gasket 2.webp", alt: "Head Gasket Replacement 2" },
    { src: "/images/service/head_gasket/head_gasket 3.webp", alt: "Head Gasket Replacement 3" },
  ],
  "timing-belt-replacement": [
    { src: "/images/service/timming_belt/timing_belt 1.webp", alt: "Timing Belt Replacement 1" },
    { src: "/images/service/timming_belt/timing_belt 2.webp", alt: "Timing Belt Replacement 2" },
  ],
  "timing-chain-replacement": [
    { src: "/images/service/timming_chain/timming_chain 1.webp", alt: "Timing Chain Replacement 1" },
    { src: "/images/service/timming_chain/timming_chain 2.webp", alt: "Timing Chain Replacement 2" },
    { src: "/images/service/timming_chain/timming_chain 3.webp", alt: "Timing Chain Replacement 3" },
  ],
  "turbo-replacement": [
    { src: "/images/service/turbo_replacement/turbo_replacement 1.webp", alt: "Turbo Replacement 1" },
  ],
};

export function getServiceImages(slug: string) {
  return serviceImages[slug] ?? [];
}
