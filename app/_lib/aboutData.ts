export type About = {
  id: number;
  smallSrc: string;
  mediumSrcs: string[];
  alt: string;
  width: number;
  height: number;
};

export const selfies: About[] = [
  {
    id: 1,
    smallSrc: "/about/01-small.jpg",
    mediumSrcs: [
      "/about/01-medium.jpg",
      "/about/02-medium.jpg",
      "/about/03-medium.jpg",
    ],
    alt: "Shooting film in the field",
    width: 900,
    height: 1200,
  },
  {
    id: 2,
    smallSrc: "/about/04-small.jpg",
    mediumSrcs: [
      "/about/04-medium.jpg",
      "/about/05-medium.jpg",
      "/about/06-medium.jpg",
    ],
    alt: "Performing on the guitar",
    width: 1200,
    height: 900,
  },
  {
    id: 3,
    smallSrc: "/about/07-small.jpg",
    mediumSrcs: [
      "/about/07-medium.jpg",
      "/about/08-medium.jpg",
      "/about/09-medium.jpg",
    ],
    alt: "Ben Balusek portraits",
    width: 1200,
    height: 900,
  },
];
