import { FaGithub } from "react-icons/fa";
import { Globe, ImageOff } from "lucide-react";
import type { Project } from "../../types/types";

const PortfolioCard = ({ project }: { project: Project }) => {
  const hasLiveUrl = project.liveUrl !== "#";
  const hasGithubUrl = project.githubUrl !== "#";

  return (
    <article
      aria-label={`Projekt ${project.title}`}
      className="group cursor-pointer space-y-2 rounded-xl transition-shadow duration-300 lg:space-y-4 lg:border-2 lg:border-black/5 lg:p-4 lg:hover:shadow-xl dark:lg:border-white/20 dark:lg:hover:shadow-white/10"
    >
      <div className="relative grid h-50 w-full place-items-center overflow-hidden rounded-tl-xl rounded-tr-xl bg-black xl:h-60 dark:bg-white">
        {project.image ? (
          <img
            src={project.image}
            alt={`Podgląd projektu ${project.title}`}
            width="640"
            height="384"
            loading="lazy"
            decoding="async"
            className="absolute size-full rounded-tl-xl rounded-tr-xl object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <ImageOff className="size-10 text-white xl:size-12 dark:text-black" />
        )}
      </div>

      <div>
        <h3 className="text-2xl font-bold lg:text-4xl">{project.title}</h3>
        <p className="font-semibold">{project.category}</p>
        <p className="text-sm opacity-60">{project.technologies.join(", ")}</p>
      </div>

      <p className="text-sm font-medium">{project.description}</p>

      <div className="flex items-center gap-x-2 text-white">
        {hasLiveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center gap-x-2 rounded-4xl bg-black px-4 text-sm font-medium text-white dark:bg-white dark:text-black"
          >
            <Globe aria-hidden="true" /> Zobacz na żywo
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="flex h-10 items-center gap-x-2 rounded-4xl bg-black px-4 text-sm font-medium text-white dark:bg-white dark:text-black"
          >
            <Globe aria-hidden="true" /> Zobacz na żywo
          </span>
        )}
        {hasGithubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Kod źródłowy projektu ${project.title}`}
            className="grid size-10 place-items-center rounded-full bg-black text-2xl text-white dark:bg-white dark:text-black"
          >
            <FaGithub aria-hidden="true" />
          </a>
        ) : (
          <span
            role="img"
            aria-label={`Kod źródłowy projektu ${project.title} — niedostępny`}
            aria-disabled="true"
            className="grid size-10 place-items-center rounded-full bg-black text-2xl text-white dark:bg-white dark:text-black"
          >
            <FaGithub aria-hidden="true" />
          </span>
        )}
      </div>
    </article>
  );
};

export default PortfolioCard;
