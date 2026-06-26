import type { StaticImageData } from "next/image";

import smallImg1 from "@/public/about/01-about-sm.jpg";
import smallImg2 from "@/public/about/04-about-sm.jpg";
import smallImg3 from "@/public/about/07-about-sm.jpg";

import mediumImg1 from "@/public/about/01-about-md.jpg";
import mediumImg2 from "@/public/about/02-about-md.jpg";
import mediumImg3 from "@/public/about/03-about-md.jpg";
import mediumImg4 from "@/public/about/04-about-md.jpg";
import mediumImg5 from "@/public/about/05-about-md.jpg";
import mediumImg6 from "@/public/about/06-about-md.jpg";
import mediumImg7 from "@/public/about/07-about-md.jpg";
import mediumImg8 from "@/public/about/08-about-md.jpg";
import mediumImg9 from "@/public/about/09-about-md.jpg";

export type About = {
  id: number;
  alt: string;
  smallSrc: StaticImageData;
  mediumSrcs: StaticImageData[];
  smallWidth: number;
  smallHeight: number;
  mediumWidth: number;
  mediumHeight: number;
};

export const selfies: About[] = [
  {
    id: 1,
    alt: "Shooting film in the field",
    smallSrc: smallImg1,
    mediumSrcs: [mediumImg1, mediumImg2, mediumImg3],
    smallWidth: 750,
    smallHeight: 1000,
    mediumWidth: 975,
    mediumHeight: 1300,
  },
  {
    id: 2,
    alt: "Performing on the guitar",
    smallSrc: smallImg2,
    mediumSrcs: [mediumImg4, mediumImg5, mediumImg6],
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
  {
    id: 3,
    alt: "Ben Balusek portraits",
    smallSrc: smallImg3,
    mediumSrcs: [mediumImg7, mediumImg8, mediumImg9],
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
];
