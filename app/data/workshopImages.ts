// Each new workshop photo appears on exactly one page.
const workshopPhotos = {
  1: { src: "/images/rrg_images/1.png", width: 1152, height: 2048, alt: "Black Range Rover parked outside the workshop" },
  2: { src: "/images/rrg_images/2.png", width: 1152, height: 2048, alt: "White Range Rover outside Range Rover Garage" },
  3: { src: "/images/rrg_images/3.png", width: 1152, height: 2048, alt: "Land Rover on vehicle transport ramps outside the workshop" },
  4: { src: "/images/rrg_images/4.png", width: 1152, height: 2048, alt: "Vehicle raised on a lift above a removed engine in the workshop" },
  5: { src: "/images/rrg_images/5.png", width: 1152, height: 2048, alt: "Vehicle interior with protective seat covers in the workshop" },
  6: { src: "/images/rrg_images/6.png", width: 1152, height: 2048, alt: "Rear view of a dark Range Rover outside the garage" },
  7: { src: "/images/rrg_images/7.png", width: 1152, height: 2048, alt: "Land Rover Discovery parked outside the workshop" },
  8: { src: "/images/rrg_images/8.png", width: 1152, height: 2048, alt: "Range Rover raised on a lift with its engine and drivetrain removed" },
  9: { src: "/images/rrg_images/9.png", width: 1152, height: 2048, alt: "Dark Range Rover parked beside the workshop" },
  10: { src: "/images/rrg_images/10.png", width: 1152, height: 2048, alt: "Range Rover positioned between workshop lift posts" },
  11: { src: "/images/rrg_images/11.png", width: 1152, height: 2048, alt: "Removed engine showing pulleys and drive belt components" },
  12: { src: "/images/rrg_images/12.png", width: 1152, height: 2048, alt: "Engine assembly on a stand in the workshop" },
  13: { src: "/images/rrg_images/13.png", width: 1152, height: 2048, alt: "Removed engine with the flywheel visible" },
  14: { src: "/images/rrg_images/14.png", width: 1152, height: 2048, alt: "Engine assembly and wiring during workshop repairs" },
  15: { src: "/images/rrg_images/15.png", width: 1152, height: 2048, alt: "Grey Range Rover outside the workshop" },
  16: { src: "/images/rrg_images/16.png", width: 1152, height: 2048, alt: "Land Rover raised on a lift during engine removal" },
  17: { src: "/images/rrg_images/17.png", width: 1152, height: 2048, alt: "Grey Land Rover with its bonnet open in the workshop" },
  18: { src: "/images/rrg_images/18.png", width: 1152, height: 2048, alt: "Engine and hoses supported by a red workshop stand" },
  19: { src: "/images/rrg_images/19.png", width: 1152, height: 2048, alt: "Land Rover Discovery between workshop lift posts" },
  20: { src: "/images/rrg_images/20.png", width: 1152, height: 2048, alt: "Engine block during workshop disassembly" },
  21: { src: "/images/rrg_images/21.png", width: 1152, height: 2048, alt: "Engine assembly with exposed flywheel during repairs" },
  22: { src: "/images/rrg_images/22.png", width: 1152, height: 2048, alt: "Removed engine positioned on a red stand beneath a vehicle" },
  23: { src: "/images/rrg_images/23.png", width: 1152, height: 2048, alt: "Exposed engine timing components during disassembly" },
  24: { src: "/images/rrg_images/24.png", width: 1152, height: 2048, alt: "Close-up of engine pulleys and drive belt" },
  25: { src: "/images/rrg_images/25.png", width: 1152, height: 2048, alt: "Land Rover with its bonnet open outside the garage" },
  26: { src: "/images/rrg_images/26.png", width: 1152, height: 2048, alt: "Land Rover raised above its removed engine and drivetrain" },
  27: { src: "/images/rrg_images/27.png", width: 1152, height: 2048, alt: "White Range Rover Evoque with its bonnet open in the workshop" },
  28: { src: "/images/rrg_images/28.png", width: 1152, height: 2048, alt: "Engine assembly with wiring and hoses outside the workshop" },
  29: { src: "/images/rrg_images/29.png", width: 1152, height: 2048, alt: "Removed engine supported on a red stand beside a workshop lift" },
  30: { src: "/images/rrg_images/30.png", width: 2048, height: 1152, alt: "Close-up of engine cylinder bores during a rebuild" },
  31: { src: "/images/rrg_images/31.png", width: 2048, height: 1152, alt: "Rear three-quarter view of a white Range Rover outside the garage" },
  32: { src: "/images/rrg_images/32.png", width: 2048, height: 1152, alt: "Side view of a white Range Rover outside the workshop" },
  33: { src: "/images/rrg_images/33.png", width: 2048, height: 1152, alt: "Rear view of a white Range Rover parked at the garage" },
  34: { src: "/images/rrg_images/34.png", width: 2048, height: 1152, alt: "White Range Rover beside another vehicle outside the workshop" },
  35: { src: "/images/rrg_images/35.png", width: 2048, height: 1152, alt: "Front three-quarter view of a white Range Rover at the garage" },
  36: { src: "/images/rrg_images/36.png", width: 2048, height: 1152, alt: "White Range Rover in profile outside Range Rover Garage" },
};

type PhotoNumber = keyof typeof workshopPhotos;

function selectPhotos(numbers: PhotoNumber[]) {
  return numbers.map((number) => workshopPhotos[number]);
}

export const homeWorkshopImages = selectPhotos([1, 2, 4, 11, 15, 18, 27, 29, 34, 36]);
export const rangeRoverWorkshopImages = selectPhotos([3, 8, 19, 10, 12, 13, 31, 32, 33, 35]);
export const landRoverWorkshopImages = selectPhotos([6, 7,9, 14, 16, 17, 20, 21, 22, 26]);
export const galleryWorkshopImages = selectPhotos([5, 23, 24, 25, 28, 30]);
