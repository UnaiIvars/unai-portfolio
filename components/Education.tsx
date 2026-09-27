import { GraduationCap, Building2, Calendar } from "lucide-react";
import { educationData } from "@/data/education";

export default function Education() {
  return (
    <section id="formacion" className="py-20 px-6 max-w-6xl mx-auto w-full scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
          <GraduationCap className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Formación</h2>
      </div>

      <div className="space-y-4">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm hover:border-white/20 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                {item.type && (
                  <p className="text-xs font-mono uppercase tracking-wider text-sky-400 mt-1">
                    {item.type}
                  </p>
                )}
                {item.institution && (
                  <div className="flex items-center gap-2 text-sm text-slate-300 mt-3">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                )}
              </div>

              {item.period && (
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-full w-fit shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>{item.period}</span>
                </div>
              )}
            </div>

            {item.description && (
              <p className="text-sm text-slate-300 mt-4 leading-relaxed">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
