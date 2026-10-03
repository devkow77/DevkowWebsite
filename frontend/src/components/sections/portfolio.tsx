import { Container, PortfolioCard } from "../ui";
import type { Project } from "../../types/types";

const projects: Project[] = [
  {
    id: 1,
    title: "SCHRONISKO",
    category: "Web Application",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
      "Tanstack Query",
      "Prisma",
    ],
    description:
      "Fullstackowa aplikacja do zarządzania schroniskiem dla zwierząt zawierająca 3 rodzaje użytkowników: administrator, pracownik i klient oraz asystent AI do wyszukiwania zwierząt.",
    image: "/shelter.jpg",
    liveUrl: "https://schelter.vercel.app/",
    githubUrl: "https://github.com/devkow77/FullManagmentShelter",
  },
  {
    id: 2,
    title: "DRZEWNA APARTAMENTS",
    category: "Wordpress Custom Theme",
    technologies: ["Wordpress", "PHP", "HTML", "CSS", "Javascript"],
    description:
      "Strona internetowa jako custom motyw wordpress napisany w php, niestety z powodu nieporozumienia strona nie została ukończona.",
    image: "/drzewna.png",
    liveUrl: "https://drzewna.shareyou.com.pl/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "RUN4LIFE",
    category: "Mobile Fitness App",
    technologies: ["React Native", "TypeScript", "Tailwind CSS", "Expo"],
    description:
      "Aplikacja mobilna dla biegaczy z rysującą się mapą w trakcie biegu, lokalizacją GPS i statystykami użytkownika oraz zapisem historii  na zalogowanym koncie z możliwością podglądu szczegółów biegu.",
    image: "/run4life.png",
    liveUrl: "#",
    githubUrl: "https://github.com/devkow77/Run4Life",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" aria-labelledby="portfolio-heading">
      <Container>
        <h2
          id="portfolio-heading"
          className="mb-4 text-lg font-bold md:text-2xl"
        >
          MOJE PORTFOLIO
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
