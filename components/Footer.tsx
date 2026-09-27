import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#090d16] py-10 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© 2026 Unai Ivars</p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/UnaiIvars"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400/50 rounded-sm"
            aria-label="GitHub de Unai Ivars"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/unaiivarsdonaire/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400/50 rounded-sm"
            aria-label="LinkedIn de Unai Ivars"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
