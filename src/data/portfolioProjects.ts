export interface PortfolioProject {
  name: string;
  description?: string;
  location?: string;
  year?: string;

  images: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "BYD Lomas Verdes",

    description:
      "*Descripción de los trabajos realizados en esta obra*",

    location: "Naucalpan, Estado de México",

    year: "2024",

    images: [
      "/images/portfolio/obra01-BYDLomasVerdes/01.webp",
      "/images/portfolio/obra01-BYDLomasVerdes/02.webp",
      "/images/portfolio/obra01-BYDLomasVerdes/03.webp",
      "/images/portfolio/obra01-BYDLomasVerdes/04.webp",
      "/images/portfolio/obra01-BYDLomasVerdes/05.webp",
      "/images/portfolio/obra01-BYDLomasVerdes/06.webp",
      "/images/portfolio/obra01-BYDLomasVerdes/07.webp",
      "/images/portfolio/obra01-BYDLomasVerdes/08.webp",
    ],
  },

  {
    name: "GWM Ecatepec",

    description:
      "*Descripción de los trabajos realizados en esta obra*",

    location: "Ecatepec, Estado de México",

    year: "2025",

    images: [
      "/images/portfolio/obra02-GWMEcatepec/01.webp",
      "/images/portfolio/obra02-GWMEcatepec/02.webp",
      "/images/portfolio/obra02-GWMEcatepec/03.webp",
      "/images/portfolio/obra02-GWMEcatepec/04.webp",
      "/images/portfolio/obra02-GWMEcatepec/05.webp",
      "/images/portfolio/obra02-GWMEcatepec/06.webp",
      "/images/portfolio/obra02-GWMEcatepec/07.webp",
      "/images/portfolio/obra02-GWMEcatepec/08.webp",
    ],
  },

  {
    name: "Kasa Coacalco",

    description:
      "*Descripción de los trabajos realizados en esta obra*",

    location: "Coacalco, Estado de México",

    year: "2025",

    images: [
      "/images/portfolio/obra03-KasaCoacalco/01.webp",
      "/images/portfolio/obra03-KasaCoacalco/02.webp",
      "/images/portfolio/obra03-KasaCoacalco/03.webp",
      "/images/portfolio/obra03-KasaCoacalco/04.webp",
      "/images/portfolio/obra03-KasaCoacalco/05.webp",
      "/images/portfolio/obra03-KasaCoacalco/06.webp",
      "/images/portfolio/obra03-KasaCoacalco/07.webp",
    ],
  },

  {
    name: "Geely Santa Monica Tlalnepantla",

    description:
      "*Descripción de los trabajos realizados en esta obra*",

    location: "Tlalnepantla, Estado de México",

    year: "2026",

    images: [
      "/images/portfolio/obra04-GeelyStaMonica/01.webp",
      "/images/portfolio/obra04-GeelyStaMonica/02.webp",
      "/images/portfolio/obra04-GeelyStaMonica/03.webp",
      "/images/portfolio/obra04-GeelyStaMonica/04.webp",
      "/images/portfolio/obra04-GeelyStaMonica/05.webp",
      "/images/portfolio/obra04-GeelyStaMonica/06.webp",
    ],
  },
];