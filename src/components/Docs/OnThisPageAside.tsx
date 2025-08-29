"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "browser-support", label: "Browser Support" },
  { id: "trying-vite-online", label: "Trying Vite Online" },
  {
    id: "scaffolding-your-first-vite-project",
    label: "Scaffolding Your First Vite Project",
  },
  { id: "community-templates", label: "Community Templates" },
  { id: "manual-installation", label: "Manual Installation" },
  { id: "index-html-and-project-root", label: "index.html and Project Root" },
  { id: "specifying-alternative-root", label: "Specifying Alternative Root" },
  { id: "command-line-interface", label: "Command Line Interface" },
  { id: "using-unreleased-commits", label: "Using Unreleased Commits" },
  { id: "dependencies-using-vite", label: "Dependencies using Vite" },
  { id: "community", label: "Community" },
];

export default function OnThisPageAside() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="fixed right-0 top-24 md:top-32 w-64 max-w-xs pr-8 md:pr-12 z-30 flex flex-col items-end">
      <div className="pl-4 border-l-2 border-zinc-300 dark:border-zinc-700 w-full relative">
        <ul className="flex flex-col gap-3">
          {sections.map((section) => (
            <li key={section.id} className="relative">
              <button
                onClick={() => scrollToSection(section.id)}
                className={`block text-left w-full text-base font-medium transition-colors ${
                  activeId === section.id
                    ? "text-primary font-bold"
                    : "text-zinc-800 dark:text-zinc-200"
                }`}
              >
                <span className="relative flex items-center">
                  {/* Gradient bar for active */}
                  {activeId === section.id && (
                    <span className="absolute -left-4 h-6 w-1 rounded bg-gradient-to-b from-primary/80 to-primary/40 animate-pulse" />
                  )}
                  {section.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
        {/* Gradient scroll indicator on the border */}
        <span className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/60 via-transparent to-primary/60" />
      </div>
    </aside>
  );
}
