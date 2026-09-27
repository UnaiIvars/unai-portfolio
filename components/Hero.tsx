import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(90vh-4rem)] flex flex-col justify-center px-6 py-16 md:py-24 max-w-6xl mx-auto w-full">
      <div
        className="pointer-events-none absolute -top-20 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-10 w-[400px] h-[400px] bg-indigo-500/10 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-14">
        <div className="flex-1 max-w-xl text-center md:text-left">
          <p className="text-sm md:text-base font-mono uppercase tracking-wider text-sky-400 mb-3 animate-fade-in">
            Hola, soy
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3 animate-fade-in">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Unai Ivars
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-400 mb-6 tracking-tight animate-fade-in-delayed">
            Desarrollador de Aplicaciones Web
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 animate-fade-in-delayed">
            Desarrollo aplicaciones web y proyectos full-stack, explorando nuevas tecnologías y buenas
            prácticas de desarrollo.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 animate-fade-in-delayed-2">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#090d16]"
            >
              Ver proyectos
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/UnaiIvars"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/25 text-slate-200 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="relative shrink-0 animate-fade-in">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/30 via-indigo-500/25 to-sky-400/20 blur-2xl scale-110"
            aria-hidden="true"
          />

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full p-1.5 bg-gradient-to-b from-sky-400/50 via-sky-500/20 to-transparent shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/15 bg-slate-900 shadow-inner">
              <Image
                src="/unai.jpg"
                alt="Foto de Unai Ivars"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 380px"
                className="object-cover object-center scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
