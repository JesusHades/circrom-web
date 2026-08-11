export interface PortfolioProject {
  name: string;
  description?: string;
  location?: string;
  year?: string;

  images: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Obra 1",

    description:
      "*Descripción de los trabajos realizados en esta obra*",

    location: "Ciudad de México / Estado de México",

    year: "202X",

    images: [
      "/images/portfolio/obra01/01.jpg",
      "/images/portfolio/obra01/02.jpg",
      "/images/portfolio/obra01/03.jpg",
      "/images/portfolio/obra01/04.jpg",
    ],
  },

  {
    name: "Obra 2",

    description:
      "*Descripción de los trabajos realizados en esta obra*",

    location: "Ciudad de México / Estado de México",

    year: "202X",

    images: [
      "/images/portfolio/obra02/01.jpg",
      "/images/portfolio/obra02/02.jpg",
      "/images/portfolio/obra02/03.jpg",
      "/images/portfolio/obra02/04.jpg",
      "/images/portfolio/obra02/05.jpg",
    ],
  },

  {
    name: "Obra 3",

    description:
      "*Descripción de los trabajos realizados en esta obra*",

    location: "Ciudad de México / Estado de México",

    year: "202X",

    images: [
      "/images/portfolio/obra03/01.jpg",
      "/images/portfolio/obra03/02.jpg",
      "/images/portfolio/obra03/03.jpg",
      "/images/portfolio/obra03/04.jpg",
    ],
  },
];