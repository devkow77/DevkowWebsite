import { FaGithub } from "react-icons/fa";
import { Globe, ImageOff } from "lucide-react";
import type { Project } from "../../types/types";

const PortfolioCard = ({ project }: { project: Project }) => {
  return (
    <section
      aria-label={`Projekt ${project.title}`}
      className="group cursor-pointer space-y-2 rounded-xl transition-shadow duration-300 lg:space-y-4 lg:border-2 lg:border-black/5 lg:p-4 lg:hover:shadow-xl dark:lg:border-white/20 dark:lg:hover:shadow-white/10"
    >
      <div className="relative grid h-50 w-full place-items-center overflow-hidden rounded-tl-xl rounded-tr-xl bg-black xl:h-60 dark:bg-white">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute size-full rounded-tl-xl rounded-tr-xl object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <ImageOff className="size-10 text-white xl:size-12 dark:text-black" />
        )}
      </div>

      <div>
        <h4 className="text-2xl font-bold lg:text-4xl">{project.title}</h4>
        <h5 className="font-semibold">{project.category}</h5>
        <p className="text-sm opacity-60">{project.technologies.join(", ")}</p>
      </div>

      <p className="text-sm font-medium">{project.description}</p>

      <div className="flex items-center gap-x-2 text-white">
        <a
          href={project.liveUrl}
          className="flex h-10 items-center gap-x-2 rounded-4xl bg-black px-4 text-sm font-medium text-white dark:bg-white dark:text-black"
        >
          <Globe /> Zobacz na żywo
        </a>
        <a
          href={project.githubUrl}
          aria-label={`Kod źródłowy projektu ${project.title}`}
          className="grid size-10 place-items-center rounded-full bg-black text-2xl text-white dark:bg-white dark:text-black"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default PortfolioCard;
