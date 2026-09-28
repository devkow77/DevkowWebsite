import { Container, PortfolioCard } from "../ui";
import type { Project } from "../../types/types";

const projects: Project[] = [
  {
    id: 1,
    title: "NEXUSPAY",
    category: "Digital Finance App",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "Nowoczesna aplikacja finansowa do zarządzania płatnościami i domowym budżetem.",
    image: "/color-website.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "TASKFLOW",
    category: "Productivity App",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    description:
      "Narzędzie do planowania zadań i sprawnego zarządzania pracą zespołu.",
    image: "/black-website.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "SHOPLY",
    category: "E-commerce Platform",
    technologies: ["React", "Redux", "Tailwind CSS", "Stripe"],
    description:
      "Responsywny sklep internetowy z koszykiem, płatnościami i panelem klienta.",
    image: "/color-website.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "WEATHERLY",
    category: "Weather App",
    technologies: ["Vue", "TypeScript", "REST API", "Chart.js"],
    description:
      "Aplikacja prezentująca aktualną pogodę i szczegółowe prognozy dla miast.",
    image: "/black-website.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "TRAVELIO",
    category: "Travel Planner",
    technologies: ["Next.js", "Supabase", "Mapbox", "Tailwind CSS"],
    description:
      "Planer podróży pozwalający zapisywać miejsca i tworzyć własne trasy.",
    image: "/color-website.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="mb-20">
      <Container>
        <h2 className="mb-4 text-lg font-bold md:text-2xl">MOJE PORTFOLIO</h2>
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
