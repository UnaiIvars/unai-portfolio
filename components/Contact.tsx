import { Mail, ExternalLink, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 max-w-6xl mx-auto w-full scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
          <Mail className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Contacto</h2>
      </div>

      <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-8 sm:p-10 backdrop-blur-sm relative overflow-hidden">
        <div
          className="pointer-events-none absolute -bottom-10 right-0 w-80 h-80 bg-sky-500/5 blur-[100px] rounded-full"
          aria-hidden="true"
        />

        <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl">
          Si quieres contactar conmigo, puedes encontrarme en:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href="mailto:eldohu15@gmail.com"
            className="group relative flex flex-col justify-between p-6 rounded-xl border border-white/[0.08] bg-slate-900/60 hover:border-sky-500/40 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-105 transition-transform">
                <Send className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </div>
            <div>
              <span className="block text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                Email
              </span>
              <span className="block text-xs text-slate-400 mt-1 font-mono break-all">
                eldohu15@gmail.com
              </span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/unaiivarsdonaire/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-6 rounded-xl border border-white/[0.08] bg-slate-900/60 hover:border-blue-500/40 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </div>
            <div>
              <span className="block text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                LinkedIn
              </span>
              <span className="block text-xs text-slate-400 mt-1 font-mono">
                /in/unaiivarsdonaire
              </span>
            </div>
          </a>

          <a
            href="https://github.com/UnaiIvars"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-6 rounded-xl border border-white/[0.08] bg-slate-900/60 hover:border-slate-400/40 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/[0.06] text-white border border-white/[0.1] group-hover:scale-105 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="block text-base font-semibold text-white group-hover:text-slate-200 transition-colors">
                GitHub
              </span>
              <span className="block text-xs text-slate-400 mt-1 font-mono">
                @UnaiIvars
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
