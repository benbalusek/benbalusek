import type { StaticImageData } from "next/image";

import smallImg1 from "@/public/software/01-software-sm.jpg";
import smallImg2 from "@/public/software/04-software-sm.jpg";
import smallImg3 from "@/public/software/07-software-sm.jpg";
import smallImg4 from "@/public/software/10-software-sm.jpg";
import smallImg5 from "@/public/software/13-software-sm.jpg";
import smallImg6 from "@/public/software/15-software-sm.jpg";

import mediumImg1 from "@/public/software/01-software-md.jpg";
import mediumImg2 from "@/public/software/02-software-md.jpg";
import mediumImg3 from "@/public/software/03-software-md.jpg";
import mediumImg4 from "@/public/software/04-software-md.jpg";
import mediumImg5 from "@/public/software/05-software-md.jpg";
import mediumImg6 from "@/public/software/06-software-md.jpg";
import mediumImg7 from "@/public/software/07-software-md.jpg";
import mediumImg8 from "@/public/software/08-software-md.jpg";
import mediumImg9 from "@/public/software/09-software-md.jpg";
import mediumImg10 from "@/public/software/10-software-md.jpg";
import mediumImg11 from "@/public/software/11-software-md.jpg";
import mediumImg12 from "@/public/software/12-software-md.jpg";
import mediumImg13 from "@/public/software/13-software-md.jpg";
import mediumImg14 from "@/public/software/14-software-md.jpg";
import mediumImg15 from "@/public/software/15-software-md.jpg";
import mediumImg16 from "@/public/software/16-software-md.jpg";
import mediumImg17 from "@/public/software/17-software-md.jpg";

export type Software = {
  id: number;
  smallSrc: StaticImageData;
  mediumSrcs: StaticImageData[];
  alt: string;
  title: string;
  tech: string;
  websiteUrl: string;
  gitHubUrl: string;
  category: "independent" | "learning";
};

export const software: Software[] = [
  {
    id: 1,
    smallSrc: smallImg1,
    mediumSrcs: [mediumImg1, mediumImg2, mediumImg3],
    alt: "YelpCamp | Campground Booking Website",
    title: "YelpCamp",
    tech: "Javascript, Node.js, Express, MongoDB, Mongoose, EJS",
    websiteUrl: "",
    gitHubUrl: "https://github.com/benbalusek/yelpcamp",
    category: "learning",
  },
  {
    id: 2,
    smallSrc: smallImg2,
    mediumSrcs: [mediumImg4, mediumImg5, mediumImg6],
    alt: "Analog Hub | Film Photography Social Media Website",
    title: "Analog Hub",
    tech: "Javascript, Node.js, Express, MongoDB, Mongoose, EJS",
    websiteUrl: "",
    gitHubUrl: "https://github.com/benbalusek/analog-hub",
    category: "independent",
  },
  {
    id: 3,
    smallSrc: smallImg3,
    mediumSrcs: [mediumImg7, mediumImg8, mediumImg9],
    alt: "The Wild Oasis | Cabin Booking Employee Website",
    title: "The Wild Oasis",
    tech: "React, React Router, Styled Components, Supabase",
    websiteUrl: "",
    gitHubUrl: "https://github.com/benbalusek/the-wild-oasis",
    category: "learning",
  },
  {
    id: 4,
    smallSrc: smallImg4,
    mediumSrcs: [mediumImg10, mediumImg11, mediumImg12],
    alt: "The Wild Oasis | Cabin Booking Customer Website",
    title: "The Wild Oasis Website",
    tech: "Next.js, React, Tailwind CSS, Supabase",
    websiteUrl: "https://the-wild-oasis-website-rho-sand.vercel.app/",
    gitHubUrl: "https://github.com/benbalusek/the-wild-oasis-website",
    category: "learning",
  },
  {
    id: 5,
    smallSrc: smallImg5,
    mediumSrcs: [mediumImg13, mediumImg14],
    alt: "Simple Astrology App",
    title: "Simple Astrology",
    tech: "Next.js, React, TypeScript, Tailwind CSS",
    websiteUrl: "https://simple-astrology.vercel.app/",
    gitHubUrl: "https://github.com/benbalusek/simple-astrology",
    category: "independent",
  },
  {
    id: 6,
    smallSrc: smallImg6,
    mediumSrcs: [mediumImg15, mediumImg16, mediumImg17],
    alt: "Ben Balusek Portfolio",
    title: "Ben Balusek",
    tech: "Next.js, React, TypeScript, Tailwind CSS",
    websiteUrl: "https://www.benbalusek.com",
    gitHubUrl: "https://github.com/benbalusek/benbalusek",
    category: "independent",
  },
];
