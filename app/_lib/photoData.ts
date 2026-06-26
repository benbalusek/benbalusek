import type { StaticImageData } from "next/image";

import smallImg1 from "@/public/photos/01-photo-sm.jpg";
import smallImg2 from "@/public/photos/02-photo-sm.jpg";
import smallImg3 from "@/public/photos/03-photo-sm.jpg";
import smallImg4 from "@/public/photos/04-photo-sm.jpg";
import smallImg5 from "@/public/photos/05-photo-sm.jpg";
import smallImg6 from "@/public/photos/06-photo-sm.jpg";
import smallImg7 from "@/public/photos/07-photo-sm.jpg";
import smallImg8 from "@/public/photos/08-photo-sm.jpg";
import smallImg9 from "@/public/photos/09-photo-sm.jpg";
import smallImg10 from "@/public/photos/10-photo-sm.jpg";
import smallImg11 from "@/public/photos/11-photo-sm.jpg";
import smallImg12 from "@/public/photos/12-photo-sm.jpg";
import smallImg13 from "@/public/photos/13-photo-sm.jpg";
import smallImg14 from "@/public/photos/14-photo-sm.jpg";
import smallImg15 from "@/public/photos/15-photo-sm.jpg";
import smallImg16 from "@/public/photos/16-photo-sm.jpg";

import mediumImg1 from "@/public/photos/01-photo-md.jpg";
import mediumImg2 from "@/public/photos/02-photo-md.jpg";
import mediumImg3 from "@/public/photos/03-photo-md.jpg";
import mediumImg4 from "@/public/photos/04-photo-md.jpg";
import mediumImg5 from "@/public/photos/05-photo-md.jpg";
import mediumImg6 from "@/public/photos/06-photo-md.jpg";
import mediumImg7 from "@/public/photos/07-photo-md.jpg";
import mediumImg8 from "@/public/photos/08-photo-md.jpg";
import mediumImg9 from "@/public/photos/09-photo-md.jpg";
import mediumImg10 from "@/public/photos/10-photo-md.jpg";
import mediumImg11 from "@/public/photos/11-photo-md.jpg";
import mediumImg12 from "@/public/photos/12-photo-md.jpg";
import mediumImg13 from "@/public/photos/13-photo-md.jpg";
import mediumImg14 from "@/public/photos/14-photo-md.jpg";
import mediumImg15 from "@/public/photos/15-photo-md.jpg";
import mediumImg16 from "@/public/photos/16-photo-md.jpg";

export type Photo = {
  id: number;
  smallSrc: StaticImageData;
  mediumSrc: StaticImageData;
  title: string;
  location: string;
  state: string;
  camera: string;
  film: string;
  smallWidth: number;
  smallHeight: number;
  mediumWidth: number;
  mediumHeight: number;
};

export const images: Photo[] = [
  {
    id: 1,
    smallSrc: smallImg1,
    mediumSrc: mediumImg1,
    title: "Taylor Rose double exposed with a rose",
    location: "San Simeon",
    state: "California",
    camera: "Mamiya 645",
    film: "Kodak Gold 200",
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
  {
    id: 2,
    smallSrc: smallImg2,
    mediumSrc: mediumImg2,
    title: "Sun flare on the dunes",
    location: "White Sands National Park",
    state: "New Mexico",
    camera: "Mamiya 645",
    film: "Kodak Ektar 100",
    smallWidth: 600,
    smallHeight: 800,
    mediumWidth: 975,
    mediumHeight: 1300,
  },
  {
    id: 3,
    smallSrc: smallImg3,
    mediumSrc: mediumImg3,
    title: "Wildflowers by Jackson Lake",
    location: "Grand Teton National Park",
    state: "Wyoming",
    camera: "Canon AE-1",
    film: "Kodak Ektar 100",
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
  {
    id: 4,
    smallSrc: smallImg4,
    mediumSrc: mediumImg4,
    title: "Taylor on the dock at Sewell Park",
    location: "San Marcos",
    state: "Texas",
    camera: "Canon AE-1",
    film: "Kodak Portra 400",
    smallWidth: 600,
    smallHeight: 800,
    mediumWidth: 975,
    mediumHeight: 1300,
  },
  {
    id: 5,
    smallSrc: smallImg5,
    mediumSrc: mediumImg5,
    title: "Flock of birds above the coastline",
    location: "Big Sur",
    state: "California",
    camera: "Mamiya 645",
    film: "Kodak Tri-X 400",
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
  {
    id: 6,
    smallSrc: smallImg6,
    mediumSrc: mediumImg6,
    title: "Sunset double exposed",
    location: "Crater Lake National Park",
    state: "Oregon",
    camera: "Canon AE-1",
    film: "Kodak Portra 400",
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
  {
    id: 7,
    smallSrc: smallImg7,
    mediumSrc: mediumImg7,
    title: "Taylor double exposed with the sunset",
    location: "White Sands National Park",
    state: "New Mexico",
    camera: "Mamiya 645",
    film: "Kodak Ektar 100",
    smallWidth: 600,
    smallHeight: 800,
    mediumWidth: 975,
    mediumHeight: 1300,
  },
  {
    id: 8,
    smallSrc: smallImg8,
    mediumSrc: mediumImg8,
    title: "Santa Elena Canyon at sunrise",
    location: "Big Bend National Park",
    state: "Texas",
    camera: "Mamiya 645",
    film: "Kodak Portra 400",
    smallWidth: 600,
    smallHeight: 800,
    mediumWidth: 975,
    mediumHeight: 1300,
  },
  {
    id: 9,
    smallSrc: smallImg9,
    mediumSrc: mediumImg9,
    title: "Wildflowers above McWay Falls",
    location: "Big Sur",
    state: "California",
    camera: "Mamiya 645",
    film: "Kodak Portra 400",
    smallWidth: 600,
    smallHeight: 800,
    mediumWidth: 975,
    mediumHeight: 1300,
  },
  {
    id: 10,
    smallSrc: smallImg10,
    mediumSrc: mediumImg10,
    title: "Mirror portrait during sunset",
    location: "White Sands National Park",
    state: "New Mexico",
    camera: "Mamiya 645",
    film: "Kodak Gold 200",
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
  {
    id: 11,
    smallSrc: smallImg11,
    mediumSrc: mediumImg11,
    title: "Sunset over McWay Falls",
    location: "Big Sur",
    state: "California",
    camera: "Mamiya 645",
    film: "Kodak Gold 200",
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
  {
    id: 12,
    smallSrc: smallImg12,
    mediumSrc: mediumImg12,
    title: "Double exposure of sunrise at the Guadalupe River",
    location: "Canyon Lake",
    state: "Texas",
    camera: "Mamiya 645",
    film: "Kodak Portra 400",
    smallWidth: 600,
    smallHeight: 800,
    mediumWidth: 975,
    mediumHeight: 1300,
  },
  {
    id: 13,
    smallSrc: smallImg13,
    mediumSrc: mediumImg13,
    title: "Sunrise over Mount Rainier",
    location: "Sunrise",
    state: "Washington",
    camera: "Mamiya 645",
    film: "Kodak Portra 400",
    smallWidth: 600,
    smallHeight: 800,
    mediumWidth: 975,
    mediumHeight: 1300,
  },
  {
    id: 14,
    smallSrc: smallImg14,
    mediumSrc: mediumImg14,
    title: "Sahalie Falls flowing into the McKenzie River",
    location: "Willamette National Forest",
    state: "Oregon",
    camera: "Canon AE-1",
    film: "Kodak Portra 400",
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
  {
    id: 15,
    smallSrc: smallImg15,
    mediumSrc: mediumImg15,
    title: "Foggy forest road",
    location: "Redwoods",
    state: "California",
    camera: "Mamiya 645",
    film: "Kodak Portra 400",
    smallWidth: 600,
    smallHeight: 800,
    mediumWidth: 975,
    mediumHeight: 1300,
  },
  {
    id: 16,
    smallSrc: smallImg16,
    mediumSrc: mediumImg16,
    title: "Wildflower meadow below Mount Rainier",
    location: "Paradise",
    state: "Washington",
    camera: "Canon AE-1",
    film: "Kodak Portra 400",
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
];
