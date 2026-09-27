import { User, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6 max-w-6xl mx-auto w-full scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
          <User className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Sobre mí</h2>
      </div>

      <div className="relative rounded-2xl border border-white/[0.08] bg-slate-900/40 p-8 sm:p-12 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-all duration-300">
        <div
          className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 bg-sky-500/5 blur-[80px] rounded-full group-hover:bg-sky-500/10 transition-all duration-500"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start justify-between">
          <div className="max-w-2xl space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>
              Soy desarrollador de software enfocado en el desarrollo web y la creación de
              aplicaciones full-stack.
            </p>
            <p>
              Me interesa aprender nuevas tecnologías, mejorar mis habilidades y convertir ideas en
              aplicaciones funcionales y bien estructuradas.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 p-5 rounded-xl border border-white/[0.06] bg-black/40 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3 pb-2 border-b border-white/[0.06]">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>perfil.json</span>
            </div>
            <div className="space-y-1.5 font-mono text-xs text-slate-300">
              <p><span className="text-sky-400">const</span> rol = <span className="text-emerald-400">&quot;Software Developer&quot;</span>;</p>
              <p><span className="text-sky-400">const</span> enfoque = <span className="text-emerald-400">&quot;Full-Stack &amp; Web&quot;</span>;</p>
              <p><span className="text-sky-400">const</span> objetivo = <span className="text-emerald-400">&quot;Buenas prácticas &amp; Clean Code&quot;</span>;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
