export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
  logo?: string;
  statusText?: string;
}

export interface Skill {
  name: string;
  category?: string;
}

export interface EducationItem {
  id: string;
  title: string;
  institution?: string;
  period?: string;
  type?: string;
  description?: string;
}
