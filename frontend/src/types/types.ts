type Project = {
  id: number;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  downloadUrl?: string;
};

export type { Project };
