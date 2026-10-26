// Each new workshop photo appears on exactly one page.
const workshopPhotos = {
  1: { src: "/images/rrg_images/1.webp", width: 1152, height: 2048, alt: "Black Range Rover parked outside the workshop" },
  2: { src: "/images/rrg_images/2.webp", width: 1152, height: 2048, alt: "White Range Rover outside Range Rover Garage" },
  3: { src: "/images/rrg_images/3.webp", width: 1152, height: 2048, alt: "Land Rover on vehicle transport ramps outside the workshop" },
  4: { src: "/images/rrg_images/4.webp", width: 1152, height: 2048, alt: "Vehicle raised on a lift above a removed engine in the workshop" },
  5: { src: "/images/rrg_images/5.webp", width: 1152, height: 2048, alt: "Vehicle interior with protective seat covers in the workshop" },
  6: { src: "/images/rrg_images/6.webp", width: 1152, height: 2048, alt: "Rear view of a dark Range Rover outside the garage" },
  7: { src: "/images/rrg_images/7.webp", width: 1152, height: 2048, alt: "Land Rover Discovery parked outside the workshop" },
  8: { src: "/images/rrg_images/8.webp", width: 1152, height: 2048, alt: "Range Rover raised on a lift with its engine and drivetrain removed" },
  9: { src: "/images/rrg_images/9.webp", width: 1152, height: 2048, alt: "Dark Range Rover parked beside the workshop" },
  10: { src: "/images/rrg_images/10.webp", width: 1152, height: 2048, alt: "Range Rover positioned between workshop lift posts" },
  11: { src: "/images/rrg_images/11.webp", width: 1152, height: 2048, alt: "Removed engine showing pulleys and drive belt components" },
  12: { src: "/images/rrg_images/12.webp", width: 1152, height: 2048, alt: "Engine assembly on a stand in the workshop" },
  13: { src: "/images/rrg_images/13.webp", width: 1152, height: 2048, alt: "Removed engine with the flywheel visible" },
  14: { src: "/images/rrg_images/14.webp", width: 1152, height: 2048, alt: "Engine assembly and wiring during workshop repairs" },
  15: { src: "/images/workshop-5.webp", width: 1200, height: 900, alt: "Range Rover vehicles lined up outside the workshop" },
  16: { src: "/images/rrg_images/16.webp", width: 1152, height: 2048, alt: "Land Rover raised on a lift during engine removal" },
  17: { src: "/images/rrg_images/17.webp", width: 1152, height: 2048, alt: "Grey Land Rover with its bonnet open in the workshop" },
  18: { src: "/images/rrg_images/18.webp", width: 1152, height: 2048, alt: "Engine and hoses supported by a red workshop stand" },
  19: { src: "/images/rrg_images/19.webp", width: 1152, height: 2048, alt: "Land Rover Discovery between workshop lift posts" },
  20: { src: "/images/rrg_images/20.webp", width: 1152, height: 2048, alt: "Engine block during workshop disassembly" },
  21: { src: "/images/rrg_images/21.webp", width: 1152, height: 2048, alt: "Engine assembly with exposed flywheel during repairs" },
  22: { src: "/images/rrg_images/22.webp", width: 1152, height: 2048, alt: "Removed engine positioned on a red stand beneath a vehicle" },
  23: { src: "/images/rrg_images/23.webp", width: 1152, height: 2048, alt: "Exposed engine timing components during disassembly" },
  24: { src: "/images/rrg_images/24.webp", width: 1152, height: 2048, alt: "Close-up of engine pulleys and drive belt" },
  25: { src: "/images/rrg_images/25.webp", width: 1152, height: 2048, alt: "Land Rover with its bonnet open outside the garage" },
  26: { src: "/images/rrg_images/26.webp", width: 1152, height: 2048, alt: "Land Rover raised above its removed engine and drivetrain" },
  27: { src: "/images/rrg_images/27.webp", width: 1152, height: 2048, alt: "White Range Rover Evoque with its bonnet open in the workshop" },
  28: { src: "/images/rrg_images/28.webp", width: 1152, height: 2048, alt: "Engine assembly with wiring and hoses outside the workshop" },
  29: { src: "/images/rrg_images/29.webp", width: 1152, height: 2048, alt: "Removed engine supported on a red stand beside a workshop lift" },
  30: { src: "/images/rrg_images/30.webp", width: 2048, height: 1152, alt: "Close-up of engine cylinder bores during a rebuild" },
  31: { src: "/images/rrg_images/31.webp", width: 2048, height: 1152, alt: "Rear three-quarter view of a white Range Rover outside the garage" },
  32: { src: "/images/rrg_images/32.webp", width: 2048, height: 1152, alt: "Side view of a white Range Rover outside the workshop" },
  33: { src: "/images/rrg_images/33.webp", width: 2048, height: 1152, alt: "Rear view of a white Range Rover parked at the garage" },
  34: { src: "/images/rrg_images/34.webp", width: 2048, height: 1152, alt: "White Range Rover beside another vehicle outside the workshop" },
  35: { src: "/images/rrg_images/35.webp", width: 2048, height: 1152, alt: "Front three-quarter view of a white Range Rover at the garage" },
  36: { src: "/images/rrg_images/36.webp", width: 2048, height: 1152, alt: "White Range Rover in profile outside Range Rover Garage" },
};

type PhotoNumber = keyof typeof workshopPhotos;

function selectPhotos(numbers: PhotoNumber[]) {
  return numbers.map((number) => workshopPhotos[number]);
}

export const homeWorkshopImages = selectPhotos([1, 2, 4, 11, 15, 18, 27, 29, 34, 36]);
export const rangeRoverWorkshopImages = selectPhotos([3, 8, 19, 10, 12, 13, 31, 32, 33, 35]);
export const landRoverWorkshopImages = selectPhotos([6, 7,9, 14, 16, 17, 20, 21, 22, 26]);
export const galleryWorkshopImages = selectPhotos([5, 23, 24, 25, 28, 30]);
