"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Formación", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#090d16]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="text-lg font-semibold tracking-tight text-transparent select-none pointer-events-auto focus:outline-none focus:ring-2 focus:ring-sky-400/50 rounded-sm"
          aria-label="Ir al inicio"
        >
          &#8203;
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-base font-medium text-slate-300 hover:text-white transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-sky-400/50 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 rounded-md"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#090d16]/98 px-6 py-4 animate-fade-in">
          <nav className="flex flex-col gap-4" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-slate-300 hover:text-sky-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
