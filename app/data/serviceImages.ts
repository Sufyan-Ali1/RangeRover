export const serviceImages: Record<string, { src: string; alt: string }[]> = {
  "engine-rebuild": [
    { src: "/images/service/engine_rebuild/engine_rebuild 1.webp", alt: "Engine mounted on a stand during rebuilding at Range Rover Garage" },
    { src: "/images/service/engine_rebuild/engine_rebuild 2.webp", alt: "Engine block on a stand with the cylinder head removed" },
    { src: "/images/service/engine_rebuild/engine_rebuild 3.webp", alt: "Exposed crankshaft inside a dismantled engine block" },
  ],
  "engine-repair": [
    { src: "/images/service/engine_repair/engine_repair 1.webp", alt: "Partially dismantled engine mounted on a workshop stand" },
    { src: "/images/service/engine_repair/engine_repair 2.webp", alt: "Engine cylinder head removed to expose the cylinder bores" },
    { src: "/images/service/engine_repair/engine_repair 3.webp", alt: "Exposed camshafts on an engine undergoing repairs" },
  ],
  "engine-replacement": [
    { src: "/images/service/engine_replacement/engine_replacement 1.webp", alt: "Red Range Rover on a lift with its removed engine below" },
    { src: "/images/service/engine_replacement/engine_replacement 2.webp", alt: "Removed engine on a stand in front of a Range Rover" },
    { src: "/images/service/engine_replacement/engine_replacement 3.webp", alt: "Range Rover with its bonnet open and a removed engine beside it" },
  ],
  "engine-swap": [
    { src: "/images/service/engine_swap/engine_swap 1.webp", alt: "Complete engine mounted on a workshop stand" },
    { src: "/images/service/engine_swap/engine_swap 2.webp", alt: "Mechanic working beside a removed engine below a raised Range Rover" },
    { src: "/images/service/engine_swap/engine_swap 3.webp", alt: "Removed engine and drivetrain in front of a Range Rover" },
  ],
  "head-gasket-replacement": [
    { src: "/images/service/head_gasket/head_gasket 1.webp", alt: "Engine block with the cylinder head removed and pistons exposed" },
    { src: "/images/service/head_gasket/head_gasket 2.webp", alt: "Engine block on a stand with its cylinder head removed" },
    { src: "/images/service/head_gasket/head_gasket 3.webp", alt: "Close-up of exposed pistons and cylinder bores during head gasket work" },
  ],
  "timing-belt-replacement": [
    { src: "/images/service/timming_belt/timing_belt 1.webp", alt: "Engine with its front cover removed to expose timing components" },
    { src: "/images/service/timming_belt/timing_belt 2.webp", alt: "Exposed timing gears on an engine mounted on a stand" },
  ],
  "timing-chain-replacement": [
    { src: "/images/service/timming_chain/timming_chain 1.webp", alt: "Mechanic working on exposed timing components of an engine" },
    { src: "/images/service/timming_chain/timming_chain 2.webp", alt: "Engine timing cover removed to expose internal components" },
    { src: "/images/service/timming_chain/timming_chain 3.webp", alt: "Close-up of an engine timing chain and sprockets" },
  ],
  "turbo-replacement": [
    { src: "/images/service/turbo_replacement/turbo_replacement 1.webp", alt: "Engine with turbocharger and intake components exposed in the workshop" },
  ],
};

export function getServiceImages(slug: string) {
  return serviceImages[slug] ?? [];
}
