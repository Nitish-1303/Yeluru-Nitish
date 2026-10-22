"use client";

import { useState, useEffect } from "react";
import { Coffee, Download, Github, Mail, Menu, X } from "lucide-react";

export function Navbar({ githubUrl, emailUrl, paypalMeUrl }: { githubUrl: string; emailUrl: string; paypalMeUrl: string }) {
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
    { label: "Proof", href: "#proof" },
    { label: "Projects", href: "#projects" },
    { label: "Open Source", href: "#opensource" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? "bg-[#faf7f4]/85 backdrop-blur-md border-stone-200/80 shadow-xs"
          : "bg-[#faf7f4]/60 backdrop-blur-xs border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
        {/* Left: wordmark */}
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-stone-900 hover:text-stone-600 transition-colors"
        >
          Nitish Yeluru
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1.5 rounded-md hover:text-stone-950 hover:bg-stone-200/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Email + GitHub + Buy me a coffee + mobile toggle */}
        <div className="flex items-center gap-1.5">
          <a
            href={emailUrl}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-stone-900 text-stone-50 hover:bg-stone-700 border border-stone-900 transition-colors"
            aria-label="Email Nitish"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-8 h-8 rounded-md items-center justify-center text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-stone-900 text-stone-50 hover:bg-stone-700 border border-stone-900 transition-colors"
            aria-label="Download Nitish's resume (PDF)"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <a
            href={paypalMeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-stone-900 text-stone-50 hover:bg-stone-700 border border-stone-900 transition-colors"
            aria-label="Buy me a coffee via PayPal"
          >
            <Coffee className="w-4 h-4" />
            <span>Buy me a coffee</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 rounded-md flex items-center justify-center text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#faf7f4]/95 backdrop-blur-md px-4 py-3 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm rounded-md text-stone-700 hover:text-stone-950 hover:bg-stone-200/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={emailUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-stone-900 text-stone-50 hover:bg-stone-700 border border-stone-900 transition-colors justify-center"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-stone-900 text-stone-50 hover:bg-stone-700 border border-stone-900 transition-colors justify-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <a
                href={paypalMeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-stone-900 text-stone-50 hover:bg-stone-700 border border-stone-900 transition-colors justify-center"
              >
                <Coffee className="w-4 h-4" />
                <span>Buy me a coffee</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
