import {
  Code2,
  FileCode2,
  Atom,
  Globe,
  Server,
  Database,
  Zap,
  Palette,
  GitBranch,
  Cpu,
} from "lucide-react";
import { GithubIcon, AngularIcon, PythonIcon, JavaIcon } from "@/components/Icons";
import { skillsData } from "@/data/skills";

interface TechVisual {
  icon: React.ReactNode;
  glowColor: string;
  borderColor: string;
}

const TECH_VISUALS: Record<string, TechVisual> = {
  TypeScript: {
    icon: <Code2 className="w-6 h-6 text-sky-400" />,
    glowColor: "group-hover:shadow-sky-500/10",
    borderColor: "group-hover:border-sky-500/40",
  },
  JavaScript: {
    icon: <FileCode2 className="w-6 h-6 text-amber-400" />,
    glowColor: "group-hover:shadow-amber-500/10",
    borderColor: "group-hover:border-amber-500/40",
  },
  React: {
    icon: <Atom className="w-6 h-6 text-cyan-400" />,
    glowColor: "group-hover:shadow-cyan-500/10",
    borderColor: "group-hover:border-cyan-500/40",
  },
  "Next.js": {
    icon: <Globe className="w-6 h-6 text-white" />,
    glowColor: "group-hover:shadow-white/10",
    borderColor: "group-hover:border-white/40",
  },
  Angular: {
    icon: <AngularIcon className="w-6 h-6 text-rose-500" />,
    glowColor: "group-hover:shadow-rose-500/10",
    borderColor: "group-hover:border-rose-500/40",
  },
  Java: {
    icon: <JavaIcon className="w-6 h-6 text-orange-400" />,
    glowColor: "group-hover:shadow-orange-500/10",
    borderColor: "group-hover:border-orange-500/40",
  },
  Python: {
    icon: <PythonIcon className="w-6 h-6 text-emerald-400" />,
    glowColor: "group-hover:shadow-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/40",
  },
  PHP: {
    icon: <Server className="w-6 h-6 text-indigo-400" />,
    glowColor: "group-hover:shadow-indigo-500/10",
    borderColor: "group-hover:border-indigo-500/40",
  },
  MySQL: {
    icon: <Database className="w-6 h-6 text-blue-400" />,
    glowColor: "group-hover:shadow-blue-500/10",
    borderColor: "group-hover:border-blue-500/40",
  },
  Supabase: {
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    glowColor: "group-hover:shadow-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/40",
  },
  CSS: {
    icon: <Palette className="w-6 h-6 text-sky-400" />,
    glowColor: "group-hover:shadow-sky-500/10",
    borderColor: "group-hover:border-sky-500/40",
  },
  Git: {
    icon: <GitBranch className="w-6 h-6 text-orange-400" />,
    glowColor: "group-hover:shadow-orange-500/10",
    borderColor: "group-hover:border-orange-500/40",
  },
  GitHub: {
    icon: <GithubIcon className="w-6 h-6 text-slate-200" />,
    glowColor: "group-hover:shadow-slate-400/10",
    borderColor: "group-hover:border-slate-400/40",
  },
};

export default function Skills() {
  return (
    <section id="tecnologias" className="py-20 px-6 max-w-6xl mx-auto w-full scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
          <Cpu className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Tecnologías</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skillsData.map((skill) => {
          const visual = TECH_VISUALS[skill.name] || {
            icon: <Code2 className="w-6 h-6 text-sky-400" />,
            glowColor: "group-hover:shadow-sky-500/10",
            borderColor: "group-hover:border-sky-500/40",
          };

          return (
            <div
              key={skill.name}
              className={`group relative rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 ${visual.borderColor} hover:bg-slate-900/80 hover:shadow-lg ${visual.glowColor} hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
            >
              <div className="mb-4 p-2.5 rounded-lg bg-white/[0.04] w-fit group-hover:scale-110 transition-transform duration-200">
                {visual.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                {skill.category && (
                  <p className="text-xs text-slate-400 mt-1 font-mono tracking-wide">
                    {skill.category}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
