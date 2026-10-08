"use client";

import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar.tsx";
import { Hero } from "../components/Hero.tsx";
import { Overview } from "../components/Overview.tsx";
import { About } from "../components/About.tsx";
import { Stack } from "../components/Stack.tsx";
import { Experience } from "../components/Experience.tsx";
import { Projects } from "../components/Projects.tsx";
import { OpenSource } from "../components/OpenSource.tsx";
import { Education } from "../components/Education.tsx";
import { Contact } from "../components/Contact.tsx";
import { Footer } from "../components/Footer.tsx";
import { CommandMenu } from "../components/CommandMenu.tsx";

export default function Home() {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  // Listen for custom trigger event
  useEffect(() => {
    const handleOpen = () => setCommandMenuOpen(true);
    window.addEventListener("open-command-menu", handleOpen);
    return () => window.removeEventListener("open-command-menu", handleOpen);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 flex flex-col font-sans transition-colors duration-150">
      {/* 1. Sticky Header */}
      <Navbar onOpenCommandMenu={() => setCommandMenuOpen(true)} />

      {/* Main Column: narrow centered editorial layout (max-w-2xl ~672px) */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Overview Section */}
        <Overview />

        {/* 4. About Section */}
        <About />

        {/* 5. Stack Section */}
        <Stack />

        {/* 6. Experience Timeline */}
        <Experience />

        {/* 7. Projects Collapsible Entries */}
        <Projects />

        {/* 8. Open Source Merged PRs */}
        <OpenSource />

        {/* 9. Education */}
        <Education />

        {/* 10. Contact CTA */}
        <Contact />
      </main>

      {/* 11. Footer with credit and scroll to top */}
      <Footer />

      {/* Command Menu Modal (Cmd+K / Ctrl+K) */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
      />
    </div>
  );
}
