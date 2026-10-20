"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink, FlaskConical, Youtube } from "lucide-react";
import { userData } from "../data/user.ts";

export function Projects() {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const toggleProject = (id: string) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="projects" className="py-7 border-b border-stone-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Projects
        </h2>
        <span className="text-[11px] font-mono text-stone-400">
          Building & Publishing
        </span>
      </div>

      {/* Flagship project */}
      <div className="mb-5 rounded-xl border border-stone-200 bg-white/70 p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-stone-500">
            <FlaskConical className="w-3 h-3" />
            Flagship
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-stone-900">
          Cookbook Canary
        </h3>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          Example code rots quietly: examples are not tests, and CI compiles the
          library while ignoring the <code className="font-mono text-[11px] bg-stone-100 px-1 py-px rounded">examples/</code> directory.
          Cookbook Canary clones a repo, installs each example&apos;s real
          dependencies and runs it alone on its own hardware-isolated microVM,
          then proves it actually worked - up to loading the page in a real
          cloud browser and asserting on the rendered DOM.
        </p>

        <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-stone-600 leading-relaxed">
          <li>125 tests across 25 suites, running on the Node test runner</li>
          <li>GitHub Actions CI runs the test suite and a live canary on every change</li>
          <li>The orchestrator is tested with no API key, no network and no billable VMs</li>
        </ul>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs font-mono">
          <a
            href="https://github.com/Nitish-1303/cookbook-canary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-stone-900 hover:underline underline-offset-4 decoration-stone-400 transition-colors"
          >
            <span>Repository</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://nitish-1303.github.io/cookbook-canary/sample-report.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-stone-900 hover:underline underline-offset-4 decoration-stone-400 transition-colors"
          >
            <span>Live sample report</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Reserved demo video slot */}
        <div
          className="aspect-video w-full rounded-lg border-2 border-dashed border-stone-300 bg-stone-50 flex flex-col items-center justify-center gap-1 text-stone-400"
          aria-label="Demo video slot reserved"
        >
          <span className="text-xs font-mono">Demo video</span>
          <span className="text-[11px] font-mono text-stone-400/80">slot reserved - recording coming soon</span>
        </div>
      </div>

      <div className="space-y-3">
        {userData.projects.map((project) => {
          const isOpen = !!openMap[project.id];
          const isYouTube = project.id === "buildwithnitish";

          return (
            <div
              key={project.id}
              className="rounded-lg border border-stone-200/90 bg-stone-100/30 overflow-hidden transition-colors"
            >
              {/* Header trigger button */}
              <button
                type="button"
                onClick={() => toggleProject(project.id)}
                aria-expanded={isOpen}
                aria-controls={`project-content-${project.id}`}
                className="w-full p-4 flex items-start sm:items-center justify-between gap-3 text-left hover:bg-stone-100/60 transition-colors cursor-pointer"
              >
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                      {isYouTube && <Youtube className="w-3.5 h-3.5 text-stone-500" />}
                      {project.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-200/80 text-stone-600">
                      {project.badge}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 font-normal leading-relaxed">
                    {project.statusSummary}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-0.5 sm:pt-0">
                  <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">
                    {isOpen ? "Collapse" : "Details"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expandable details content */}
              {isOpen && (
                <div
                  id={`project-content-${project.id}`}
                  className="px-4 pb-4 pt-1 border-t border-stone-200/60 text-xs sm:text-sm text-stone-700 space-y-2.5 animate-in fade-in duration-150"
                >
                  <ul className="space-y-1.5 list-disc list-inside text-stone-600 leading-relaxed">
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
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-900 hover:underline underline-offset-4 decoration-stone-400 transition-colors"
                      >
                        <span>{project.linkText ?? `View ${project.title}`}</span>
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
