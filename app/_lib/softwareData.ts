import type { StaticImageData } from "next/image";

import smallImg1 from "@/public/software/01-software-sm.jpg";
import smallImg2 from "@/public/software/04-software-sm.jpg";
import smallImg3 from "@/public/software/07-software-sm.jpg";
import smallImg4 from "@/public/software/10-software-sm.jpg";
import smallImg5 from "@/public/software/13-software-sm.jpg";

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

export type Software = {
  id: number;
  smallSrc: StaticImageData;
  mediumSrcs: StaticImageData[];
  alt: string;
  title: string;
  tech: string;
  websiteUrl: string;
  gitHubUrl: string;
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
  },
  {
    id: 5,
    smallSrc: smallImg5,
    mediumSrcs: [mediumImg13, mediumImg14],
    alt: "Simple Astrology App",
    title: "Simple Astrology",
    tech: "Next.js, React, Tailwind CSS",
    websiteUrl: "https://simple-astrology.vercel.app/",
    gitHubUrl: "https://github.com/benbalusek/simple-astrology",
  },
];
