"use client";

import { useState, useEffect } from "react";
import { Github, Search, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle.tsx";
import { userData } from "../data/user.ts";

interface NavbarProps {
  onOpenCommandMenu: () => void;
}

export function Navbar({ onOpenCommandMenu }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Open Source", href: "#opensource" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? "bg-neutral-50/85 dark:bg-neutral-950/85 backdrop-blur-md border-neutral-200/80 dark:border-neutral-800/80 shadow-xs"
          : "bg-neutral-50/60 dark:bg-neutral-950/60 backdrop-blur-xs border-transparent"
      }`}
    >
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
        {/* Left: Original NY Logo Mark */}
        <a
          href="#hero"
          className="flex items-center gap-2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 rounded-md"
          aria-label="Nitish Yeluru - Go to top"
        >
          <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 font-mono font-bold text-xs flex items-center justify-center tracking-tighter shadow-xs group-hover:scale-105 transition-transform">
            NY
          </div>
          <span className="font-medium text-sm text-neutral-800 dark:text-neutral-200 hidden sm:inline-block tracking-tight">
            Nitish Yeluru
          </span>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1.5 rounded-md hover:text-neutral-950 dark:hover:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions (Cmd+K, GitHub, Theme, Mobile toggle) */}
        <div className="flex items-center gap-1.5">
          {/* Cmd+K trigger */}
          <button
            type="button"
            onClick={onOpenCommandMenu}
            className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/70 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-md transition-colors cursor-pointer"
            aria-label="Open command palette (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
              ⌘K
            </span>
          </button>

          {/* GitHub link */}
          <a
            href={userData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-md flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Theme switcher */}
          <ThemeToggle />

          {/* Mobile menu hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-md flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-md px-4 py-3 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm rounded-md text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors"
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
