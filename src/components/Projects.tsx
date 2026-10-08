"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink, GitBranch, Youtube } from "lucide-react";
import { userData } from "../data/user.ts";

export function Projects() {
  // First item open by default for immediate context, user can toggle both
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({
    patchbay: true,
    buildwithnitish: false,
  });

  const toggleProject = (id: string) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="projects" className="py-7 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Projects
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Building & Publishing
        </span>
      </div>

      <div className="space-y-3">
        {userData.projects.map((project) => {
          const isOpen = !!openMap[project.id];
          const isPatchBay = project.id === "patchbay";
          const isYouTube = project.id === "buildwithnitish";

          return (
            <div
              key={project.id}
              className="rounded-lg border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100/30 dark:bg-neutral-900/30 overflow-hidden transition-colors"
            >
              {/* Header trigger button */}
              <button
                type="button"
                onClick={() => toggleProject(project.id)}
                aria-expanded={isOpen}
                aria-controls={`project-content-${project.id}`}
                className="w-full p-4 flex items-start sm:items-center justify-between gap-3 text-left hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40 transition-colors cursor-pointer"
              >
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                      {isPatchBay && <GitBranch className="w-3.5 h-3.5 text-neutral-500" />}
                      {isYouTube && <Youtube className="w-3.5 h-3.5 text-neutral-500" />}
                      {project.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                      {project.badge}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
                    {project.statusSummary}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-0.5 sm:pt-0">
                  <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
                    {isOpen ? "Collapse" : "Details"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expandable details content */}
              {isOpen && (
                <div
                  id={`project-content-${project.id}`}
                  className="px-4 pb-4 pt-1 border-t border-neutral-200/60 dark:border-neutral-800/60 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 space-y-2.5 animate-in fade-in duration-150"
                >
                  <ul className="space-y-1.5 list-disc list-inside text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.details.map((point, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {project.link && (
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-900 dark:text-neutral-100 hover:underline underline-offset-4 decoration-neutral-400 transition-colors"
                      >
                        <span>Visit {project.title} on YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
