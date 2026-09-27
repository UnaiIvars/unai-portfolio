import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unai Ivars | Software Developer",
  description:
    "Portfolio de Unai Ivars, Software Developer especializado en desarrollo web y proyectos full-stack.",
  keywords: [
    "Unai Ivars",
    "Software Developer",
    "Web Developer",
    "Full-Stack",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Unai Ivars" }],
  creator: "Unai Ivars",
  openGraph: {
    title: "Unai Ivars | Software Developer",
    description:
      "Portfolio de Unai Ivars, Software Developer especializado en desarrollo web y proyectos full-stack.",
    url: "https://github.com/UnaiIvars",
    siteName: "Unai Ivars Portfolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unai Ivars | Software Developer",
    description:
      "Portfolio de Unai Ivars, Software Developer especializado en desarrollo web y proyectos full-stack.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
