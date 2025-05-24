export type WebDev = {
  id: number;
  smallSrc: string;
  mediumSrcs: string[];
  alt: string;
  title: string;
  tech: string;
  websiteUrl: string;
  gitHubUrl: string;
};

export const websites: WebDev[] = [
  {
    id: 1,
    smallSrc: "/websites/101-small.jpg",
    mediumSrcs: [
      "/websites/101-medium.jpg",
      "/websites/102-medium.jpg",
      "/websites/103-medium.jpg",
      "/websites/104-medium.jpg",
      "/websites/105-medium.jpg",
    ],
    alt: "The Wild Oasis | Cabin Booking Customer Website",
    title: "The Wild Oasis Website",
    tech: "Next.js, React, Tailwind CSS, Supabase",
    websiteUrl: "https://the-wild-oasis-website-rho-sand.vercel.app/",
    gitHubUrl: "https://github.com/benbalusek/the-wild-oasis-website",
  },
  {
    id: 2,
    smallSrc: "/websites/201-small.jpg",
    mediumSrcs: [
      "/websites/201-medium.jpg",
      "/websites/202-medium.jpg",
      "/websites/203-medium.jpg",
      "/websites/204-medium.jpg",
      "/websites/205-medium.jpg",
    ],
    alt: "The Wild Oasis | Cabin Booking Employee Website",
    title: "The Wild Oasis",
    tech: "React, React Router, Styled Components, Supabase",
    websiteUrl: "https://the-wild-oasis9.netlify.app/dashboard",
    gitHubUrl: "https://github.com/benbalusek/the-wild-oasis",
  },
  {
    id: 3,
    smallSrc: "/websites/301-small.jpg",
    mediumSrcs: [
      "/websites/301-medium.jpg",
      "/websites/302-medium.jpg",
      "/websites/303-medium.jpg",
      "/websites/304-medium.jpg",
      "/websites/305-medium.jpg",
    ],
    alt: "Analog Hub | Film Photography Social Media Website",
    title: "Analog Hub",
    tech: "Javascript, Node.js, Express, MongoDB, Mongoose, EJS",
    websiteUrl: "https://analog-hub.onrender.com/",
    gitHubUrl: "https://github.com/benbalusek/analog-hub",
  },
  {
    id: 4,
    smallSrc: "/websites/401-small.jpg",
    mediumSrcs: [
      "/websites/401-medium.jpg",
      "/websites/402-medium.jpg",
      "/websites/403-medium.jpg",
      "/websites/404-medium.jpg",
      "/websites/405-medium.jpg",
    ],
    alt: "YelpCamp | Campground Booking Website",
    title: "YelpCamp",
    tech: "Javascript, Node.js, Express, MongoDB, Mongoose, EJS",
    websiteUrl: "",
    gitHubUrl: "https://github.com/benbalusek/yelpcamp",
  },
];
