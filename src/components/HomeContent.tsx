"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./Navbar.tsx";
import { Hero } from "./Hero.tsx";
import { Overview } from "./Overview.tsx";
import { About } from "./About.tsx";
import { Stack } from "./Stack.tsx";
import { Experience } from "./Experience.tsx";
import { Projects } from "./Projects.tsx";
import { OpenSource } from "./OpenSource.tsx";
import { GitHubActivity } from "./GitHubActivity.tsx";
import { Testimonials } from "./Testimonials.tsx";
import { Education } from "./Education.tsx";
import { Contact } from "./Contact.tsx";
import { Footer } from "./Footer.tsx";
import { CommandMenu } from "./CommandMenu.tsx";
import type { GitHubStats } from "../lib/github-stats.ts";

export function HomeContent({ githubStats }: { githubStats: GitHubStats }) {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setCommandMenuOpen(true);
    window.addEventListener("open-command-menu", handleOpen);
    return () => window.removeEventListener("open-command-menu", handleOpen);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 flex flex-col font-sans transition-colors duration-150">
      <Navbar onOpenCommandMenu={() => setCommandMenuOpen(true)} />

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pb-20 sm:px-6 sm:pb-0">
        <Hero />
        <Overview />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <OpenSource />
        <GitHubActivity stats={githubStats} />
        <Testimonials />
        <Education />
        <Contact />
      </main>

      <Footer />
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
      />
    </div>
  );
}
