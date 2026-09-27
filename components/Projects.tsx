import Image from "next/image";
import { FolderGit2, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projectsData } from "@/data/projects";

interface ProjectTheme {
  bgGradient: string;
  spotlight: string;
  glowShadow: string;
  logoWidthClass: string;
  cardHoverBorder: string;
  screenBlend?: boolean;
}

const PROJECT_THEMES: Record<string, ProjectTheme> = {
  vigornova: {
    bgGradient: "from-[#1b080d] via-[#120509] to-[#09080e]",
    spotlight: "bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.22),transparent_70%)]",
    glowShadow: "",
    logoWidthClass: "w-full",
    cardHoverBorder: "hover:border-rose-500/40 hover:shadow-rose-500/10",
    screenBlend: true,
  },
  juntia: {
    bgGradient: "from-[#140b2a] via-[#0b071a] to-[#07060f]",
    spotlight: "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent_70%)]",
    glowShadow: "drop-shadow-[0_0_35px_rgba(167,139,250,0.45)]",
    logoWidthClass: "w-[95%] sm:w-[90%] max-w-[560px]",
    cardHoverBorder: "hover:border-violet-500/40 hover:shadow-violet-500/10",
  },
};

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-6 max-w-6xl mx-auto w-full scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
          <FolderGit2 className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Proyectos destacados
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => {
          const theme = PROJECT_THEMES[project.id] || {
            bgGradient: "from-slate-900 via-slate-950 to-slate-900",
            spotlight: "bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]",
            glowShadow: "drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]",
            logoWidthClass: "w-[70%] max-w-[340px]",
            cardHoverBorder: "hover:border-sky-500/30 hover:shadow-sky-500/5",
          };

          return (
            <article
              key={project.id}
              className={`flex flex-col rounded-2xl border border-white/[0.08] bg-slate-900/40 ${theme.cardHoverBorder} hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
            >
              <div
                className={`relative w-full h-56 sm:h-64 bg-gradient-to-br ${theme.bgGradient} border-b border-white/[0.08] overflow-hidden flex items-center justify-center p-8`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 ${theme.spotlight}`}
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px] opacity-60"
                  aria-hidden="true"
                />

                {project.logo && (
                  <div
                    className="relative z-10 w-full flex items-center justify-center"
                    style={theme.screenBlend ? { mixBlendMode: "screen" } : undefined}
                  >
                    <Image
                      src={theme.screenBlend
                        ? "/projects/vigornova-logo.jpg"
                        : project.logo}
                      alt={`Logo oficial de ${project.title}`}
                      width={920}
                      height={280}
                      className={`${theme.logoWidthClass} h-auto object-contain group-hover:scale-110 transition-transform duration-500${
                        theme.glowShadow ? ` ${theme.glowShadow}` : ""
                      }`}
                      priority
                    />
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      Características principales
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-300 group-hover:border-white/15 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 bg-white/[0.04] hover:bg-white/[0.12] hover:border-white/40 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-white/5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
                    aria-label={`Ver código de ${project.title} en GitHub`}
                  >
                    <GithubIcon className="w-4 h-4 transition-transform duration-200 group-hover/btn:scale-110" />
                    Código
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-400/40 hover:scale-[1.04] active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
                      aria-label={`Ver demo en vivo de ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
