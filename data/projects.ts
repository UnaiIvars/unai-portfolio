import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "vigornova",
    title: "VigorNova",
    description:
      "Plataforma web de entrenamiento y nutrición para crear rutinas, registrar sesiones y visualizar la evolución del usuario.",
    technologies: ["TypeScript", "Next.js", "Supabase", "CSS", "Vercel"],
    features: [
      "Creación y gestión de rutinas",
      "Registro de sesiones",
      "Seguimiento del progreso",
      "Visualización de evolución",
      "Autenticación",
      "Funcionalidades sociales",
      "Asistente de IA",
    ],
    githubUrl: "https://github.com/UnaiIvars/VigorNova",
    demoUrl: "https://vigor-nova-ivory.vercel.app/",
    image: "/projects/vigornova.png",
    logo: "/projects/vigornova-logo.png",
  },
  {
    id: "juntia",
    title: "JuntIA",
    description:
      "Aplicación web para organizar viajes y gestionar reservas, usuarios y destinos mediante una base de datos relacional.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Registro e inicio de sesión",
      "Gestión de usuarios",
      "Gestión de destinos",
      "Gestión de reservas",
      "CRUD",
      "Panel de administración",
      "Base de datos relacional MySQL",
      "Mapa interactivo",
      "Gestión de participantes",
    ],
    githubUrl: "https://github.com/UnaiIvars/Juntia",
    demoUrl: "https://juntia-xi.vercel.app",
    image: "/projects/juntia.png",
    logo: "/projects/juntia-transparent.png",
  },
];
