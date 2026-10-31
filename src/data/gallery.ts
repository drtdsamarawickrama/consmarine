export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: "vessel" | "port" | "cargo";
};

export const gallery: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery/g1.jpeg",
    alt: "CMCS surveyor inspecting vessel draft marks and hull condition",
    category: "vessel",
  },
  {
    id: 2,
    src: "/images/gallery/g2.jpeg",
    alt: "Container terminal vessel loading & tally survey operations",
    category: "port",
  },
  {
    id: 3,
    src: "/images/gallery/g3.jpeg",
    alt: "Commercial bulk carrier berthed at deep-water port terminal",
    category: "port",
  },
  {
    id: 4,
    src: "/images/gallery/g4.jpeg",
    alt: "Container vessel navigation bridge and forward deck view",
    category: "vessel",
  },
  {
    id: 5,
    src: "/images/gallery/g5.jpeg",
    alt: "Offshore towing and marine warranty survey attendance",
    category: "vessel",
  },
  {
    id: 6,
    src: "/images/gallery/g6.jpeg",
    alt: "Port gantry container crane handling operations",
    category: "port",
  },
  {
    id: 7,
    src: "/images/gallery/g7.jpeg",
    alt: "Vessel hull plating condition and cathodic protection check",
    category: "vessel",
  },
  {
    id: 8,
    src: "/images/gallery/g8.jpeg",
    alt: "Vessel deck and forward helipad view at open sea sunrise",
    category: "vessel",
  },
  {
    id: 9,
    src: "/images/gallery/g9.jpeg",
    alt: "Heavy cable reel project cargo securing & lashing survey",
    category: "cargo",
  },
  {
    id: 10,
    src: "/images/gallery/g10.jpeg",
    alt: "CMCS surveyors inspecting structural container damage at container yard",
    category: "cargo",
  },
  {
    id: 11,
    src: "/images/gallery/g11.jpeg",
    alt: "Forklift cargo handling & container stuffing supervision",
    category: "cargo",
  },
  {
    id: 12,
    src: "/images/gallery/g12.jpeg",
    alt: "Deep-water bulk conveyor terminal gantry crane",
    category: "port",
  },
  {
    id: 13,
    src: "/images/gallery/g13.jpeg",
    alt: "Moored cargo ship and terminal conveyor system at sunset",
    category: "port",
  },
  {
    id: 14,
    src: "/images/gallery/g14.jpeg",
    alt: "Vessel deck cranes over open cargo hold during dusk operations",
    category: "port",
  },
  {
    id: 15,
    src: "/images/gallery/g15.jpeg",
    alt: "Cargo hold washdown and grain cleanliness inspection",
    category: "cargo",
  },
  {
    id: 16,
    src: "/images/gallery/g16.jpeg",
    alt: "CMCS surveyor conducting internal cargo hold frame inspection",
    category: "vessel",
  },
  {
    id: 17,
    src: "/images/gallery/g17.jpeg",
    alt: "Heavy lift tubular pile loading & deck rigging supervision",
    category: "cargo",
  },
  {
    id: 18,
    src: "/images/gallery/g18.jpeg",
    alt: "Ultrasonic hatch cover coaming watertightness testing",
    category: "vessel",
  },
  {
    id: 19,
    src: "/images/gallery/g19.jpeg",
    alt: "CMCS surveyor verifying access hatch sealing and integrity",
    category: "vessel",
  },
];
