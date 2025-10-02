import type { StaticImageData } from "next/image";

import smallImg1 from "@/public/websites/01-small.jpg";
import smallImg2 from "@/public/websites/04-small.jpg";
import smallImg3 from "@/public/websites/07-small.jpg";
import smallImg4 from "@/public/websites/10-small.jpg";
import smallImg5 from "@/public/websites/13-small.jpg";

import mediumImg1 from "@/public/websites/01-medium.jpg";
import mediumImg2 from "@/public/websites/02-medium.jpg";
import mediumImg3 from "@/public/websites/03-medium.jpg";
import mediumImg4 from "@/public/websites/04-medium.jpg";
import mediumImg5 from "@/public/websites/05-medium.jpg";
import mediumImg6 from "@/public/websites/06-medium.jpg";
import mediumImg7 from "@/public/websites/07-medium.jpg";
import mediumImg8 from "@/public/websites/08-medium.jpg";
import mediumImg9 from "@/public/websites/09-medium.jpg";
import mediumImg10 from "@/public/websites/10-medium.jpg";
import mediumImg11 from "@/public/websites/11-medium.jpg";
import mediumImg12 from "@/public/websites/12-medium.jpg";
import mediumImg13 from "@/public/websites/13-medium.jpg";
import mediumImg14 from "@/public/websites/14-medium.jpg";

export type WebDev = {
  id: number;
  smallSrc: StaticImageData;
  mediumSrcs: StaticImageData[];
  alt: string;
  title: string;
  tech: string;
  websiteUrl: string;
  gitHubUrl: string;
};

export const websites: WebDev[] = [
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
    websiteUrl: "https://analog-hub.onrender.com/",
    gitHubUrl: "https://github.com/benbalusek/analog-hub",
  },
  {
    id: 3,
    smallSrc: smallImg3,
    mediumSrcs: [mediumImg7, mediumImg8, mediumImg9],
    alt: "The Wild Oasis | Cabin Booking Employee Website",
    title: "The Wild Oasis",
    tech: "React, React Router, Styled Components, Supabase",
    websiteUrl: "https://the-wild-oasis9.netlify.app/dashboard",
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
