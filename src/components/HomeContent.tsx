"use client";

import { useState, useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./Navbar.tsx";
import { Hero } from "./Hero.tsx";
import { Overview } from "./Overview.tsx";
import { BuildLog } from "./BuildLog.tsx";
import { PatchBaySection } from "./PatchBaySection.tsx";
import { About } from "./About.tsx";
import { Stack } from "./Stack.tsx";
import { Projects } from "./Projects.tsx";
import { OpenSource } from "./OpenSource.tsx";
import { GitHubActivity } from "./GitHubActivity.tsx";
import { Organizations } from "./Organizations.tsx";
import { Testimonials } from "./Testimonials.tsx";
import { Education } from "./Education.tsx";
import { LookingForSection } from "./LookingForSection.tsx";
import { Contact } from "./Contact.tsx";
import { Footer } from "./Footer.tsx";
import { CommandMenu } from "./CommandMenu.tsx";
import { WorkExperience } from "@/components/work-experience";
import { TOCMinimap } from "@/components/toc-minimap";
import { experiences } from "../data/experience.ts";
import type { GitHubStats } from "../lib/github-stats.ts";
import type { ContributionData } from "../lib/contributions.ts";

const tocItems = [
  { title: "Overview", url: "#overview", depth: 2 },
  { title: "About", url: "#about", depth: 2 },
  { title: "Stack", url: "#stack", depth: 2 },
  { title: "Experience", url: "#experience", depth: 2 },
  { title: "Projects", url: "#projects", depth: 2 },
  { title: "Open Source", url: "#open-source", depth: 2 },
  { title: "Testimonials", url: "#testimonials", depth: 2 },
  { title: "Contact", url: "#contact", depth: 2 },
];

export function HomeContent({
  githubStats,
  contributions,
}: {
  githubStats: GitHubStats;
  contributions: ContributionData | null;
}) {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setCommandMenuOpen(true);
    window.addEventListener("open-command-menu", handleOpen);
    return () => window.removeEventListener("open-command-menu", handleOpen);
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 flex flex-col font-sans transition-colors duration-150">
        <Navbar onOpenCommandMenu={() => setCommandMenuOpen(true)} />

        <main className="flex-1 w-full max-w-2xl mx-auto px-4 pb-20 sm:px-6 sm:pb-0">
          <Hero />
          <Overview />
          <BuildLog />
          <PatchBaySection />
          <About />
          <Stack />
          <section id="experience" className="py-7 border-b border-neutral-200 dark:border-neutral-800/80">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Experience
              </h2>
              <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                Career Track Record
              </span>
            </div>
            <WorkExperience experiences={experiences} className="!bg-transparent !px-0" />
          </section>
          <Projects />
          <OpenSource />
          <GitHubActivity stats={githubStats} />
          <Organizations />
          <Testimonials />
          <Education />
          <LookingForSection />
          <Contact />
        </main>

        <Footer />
        <CommandMenu
          isOpen={commandMenuOpen}
          onClose={() => setCommandMenuOpen(false)}
        />
        <div className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 z-40">
          <TOCMinimap items={tocItems} />
        </div>
      </div>
    </TooltipProvider>
  );
}
