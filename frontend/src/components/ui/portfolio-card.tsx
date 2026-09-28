import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";
import type { Project } from "../../types/types";

const PortfolioCard = ({ project }: { project: Project }) => {
  return (
    <section
      aria-label={`Projekt ${project.title}`}
      className="min-h-80 min-w-60 flex-1 cursor-pointer space-y-2 rounded-xl border-black/5 bg-white transition-shadow duration-300 lg:space-y-4 lg:border-2 lg:p-4 lg:hover:shadow-xl"
    >
      <div className="relative h-50 w-full overflow-hidden rounded-xl bg-black/40 xl:h-60">
        <img
          src={project.image}
          alt={project.title}
          className="absolute size-full rounded-xl object-cover object-center transition-all duration-300 hover:scale-105"
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold lg:text-4xl">{project.title}</h3>
        <h4 className="font-semibold">{project.category}</h4>
        <p className="text-sm opacity-60">{project.technologies.join(", ")}</p>
      </div>

      <p className="text-sm font-medium">{project.description}</p>

      <div className="flex items-center gap-x-2 text-white">
        <a
          href={project.liveUrl}
          className="flex h-10 items-center gap-x-2 rounded-sm bg-black px-4 text-sm font-medium text-white"
        >
          <Globe /> Zobacz na żywo
        </a>
        <a
          href={project.githubUrl}
          aria-label={`Kod źródłowy projektu ${project.title}`}
          className="grid size-10 place-items-center rounded-sm bg-black text-2xl text-white"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default PortfolioCard;
