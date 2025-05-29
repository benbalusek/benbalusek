export type About = {
  id: number;
  alt: string;
  smallSrc: string;
  mediumSrcs: string[];
  smallWidth: number;
  smallHeight: number;
  mediumWidth: number;
  mediumHeight: number;
};

export const selfies: About[] = [
  {
    id: 1,
    alt: "Shooting film in the field",
    smallSrc: "/about/01-small.jpg",
    mediumSrcs: [
      "/about/01-medium.jpg",
      "/about/02-medium.jpg",
      "/about/03-medium.jpg",
    ],
    smallWidth: 750,
    smallHeight: 1000,
    mediumWidth: 975,
    mediumHeight: 1300,
  },
  {
    id: 2,
    alt: "Performing on the guitar",
    smallSrc: "/about/04-small.jpg",
    mediumSrcs: [
      "/about/04-medium.jpg",
      "/about/05-medium.jpg",
      "/about/06-medium.jpg",
    ],
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
  {
    id: 3,
    alt: "Ben Balusek portraits",
    smallSrc: "/about/07-small.jpg",
    mediumSrcs: [
      "/about/07-medium.jpg",
      "/about/08-medium.jpg",
      "/about/09-medium.jpg",
    ],
    smallWidth: 800,
    smallHeight: 600,
    mediumWidth: 1300,
    mediumHeight: 975,
  },
];
