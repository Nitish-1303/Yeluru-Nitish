"use client";

import { useEffect, useState, useRef } from "react";
import { Search, Compass, ExternalLink, Moon, Sun, Laptop, X } from "lucide-react";
import { userData } from "../data/user.ts";
import { setTheme as saveTheme } from "../lib/theme.ts";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navigation" | "Social & Contact" | "Theme";
  icon: typeof Search;
  action: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Store trigger element when opening for focus return
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      // Focus input
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Global hotkey: Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent if needed, or trigger
          window.dispatchEvent(new CustomEvent("open-command-menu"));
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Handle escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const scrollToSection = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openUrl = (url: string) => {
    onClose();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const setTheme = (mode: "light" | "dark" | "system") => {
    onClose();
    saveTheme(mode);
  };

  const allItems: CommandItem[] = [
    {
      id: "nav-overview",
      title: "Overview",
      subtitle: "Current role, location & live IST clock",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("overview"),
    },
    {
      id: "nav-hero",
      title: "Hero & Intro",
      subtitle: "Nitish Yeluru, headline & wireframe figure",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("hero"),
    },
    {
      id: "nav-about",
      title: "About",
      subtitle: "Background & focus areas",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-stack",
      title: "Stack",
      subtitle: "Core technologies and tooling",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("stack"),
    },
    {
      id: "nav-experience",
      title: "Experience",
      subtitle: "PatchBay & Alignerr timeline",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("experience"),
    },
    {
      id: "nav-projects",
      title: "Projects",
      subtitle: "PatchBay and BuildWithNitish",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-opensource",
      title: "Open Source",
      subtitle: "Merged PRs in magnitude and reflex",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("opensource"),
    },
    {
      id: "nav-github-activity",
      title: "GitHub Activity",
      subtitle: "Contribution graph, repositories, and followers",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("github-activity"),
    },
    {
      id: "nav-organizations",
      title: "Organizations",
      subtitle: "Teams and open source PRs",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("organizations"),
    },
    {
      id: "nav-testimonials",
      title: "Testimonials",
      subtitle: "Feedback from teams and maintainers",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("testimonials"),
    },
    {
      id: "nav-now-shipping",
      title: "Now shipping",
      subtitle: "Dated build log",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("now-shipping"),
    },
    {
      id: "nav-what-im-building",
      title: "What I'm building",
      subtitle: "PatchBay offline prototype",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("what-im-building"),
    },
    {
      id: "nav-contributions",
      title: "Contributions",
      subtitle: "GitHub contribution calendar",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("contributions"),
    },
    {
      id: "nav-work-with-me",
      title: "What I'm looking for",
      subtitle: "Role and location preferences",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("work-with-me"),
    },
    {
      id: "nav-education",
      title: "Education",
      subtitle: "Baba Institute of Technology & Sciences",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("education"),
    },
    {
      id: "nav-contact",
      title: "Contact",
      subtitle: "Email & Topmate links",
      category: "Navigation",
      icon: Compass,
      action: () => scrollToSection("contact"),
    },
    {
      id: "social-github",
      title: "GitHub",
      subtitle: "github.com/Nitish-1303",
      category: "Social & Contact",
      icon: ExternalLink,
      action: () => openUrl(userData.socials.github),
    },
    {
      id: "social-linkedin",
      title: "LinkedIn",
      subtitle: "linkedin.com/in/yeluru-nitish",
      category: "Social & Contact",
      icon: ExternalLink,
      action: () => openUrl(userData.socials.linkedin),
    },
    {
      id: "social-x",
      title: "X (Twitter)",
      subtitle: "@Vibe_User",
      category: "Social & Contact",
      icon: ExternalLink,
      action: () => openUrl(userData.socials.x),
    },
    {
      id: "social-youtube",
      title: "YouTube",
      subtitle: "@buildwithnitish",
      category: "Social & Contact",
      icon: ExternalLink,
      action: () => openUrl(userData.socials.youtube),
    },
    {
      id: "social-topmate",
      title: "Topmate",
      subtitle: "Book a technical conversation",
      category: "Social & Contact",
      icon: ExternalLink,
      action: () => openUrl(userData.socials.topmate),
    },
    {
      id: "theme-light",
      title: "Theme: Light",
      subtitle: "Switch to clean light mode",
      category: "Theme",
      icon: Sun,
      action: () => setTheme("light"),
    },
    {
      id: "theme-dark",
      title: "Theme: Dark",
      subtitle: "Switch to high-contrast dark mode",
      category: "Theme",
      icon: Moon,
      action: () => setTheme("dark"),
    },
    {
      id: "theme-system",
      title: "Theme: System",
      subtitle: "Follow OS system preference",
      category: "Theme",
      icon: Laptop,
      action: () => setTheme("system"),
    },
  ];

  const filteredItems = allItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredItems.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      filteredItems[selectedIndex]?.action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-neutral-950/60 backdrop-blur-xs transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Menu"
    >
      <div
        className="w-full max-w-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 gap-3">
          <Search className="w-4 h-4 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="max-h-72 overflow-y-auto p-2 divide-y divide-neutral-100 dark:divide-neutral-800/50"
        >
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-neutral-500">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-sm transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-neutral-200/70 dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50"
                      : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className="w-4 h-4 shrink-0 opacity-70" />
                    <div className="truncate">
                      <span className="font-medium">{item.title}</span>
                      {item.subtitle && (
                        <span className="ml-2 text-xs text-neutral-400 dark:text-neutral-500 truncate">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-600 shrink-0 ml-2">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-950/50 flex items-center justify-between text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <span>Navigate</span>
            <kbd className="px-1 py-0.5 font-mono text-[9px] bg-neutral-200/60 dark:bg-neutral-800 rounded">↑</kbd>
            <kbd className="px-1 py-0.5 font-mono text-[9px] bg-neutral-200/60 dark:bg-neutral-800 rounded">↓</kbd>
            <span className="ml-2">Select</span>
            <kbd className="px-1 py-0.5 font-mono text-[9px] bg-neutral-200/60 dark:bg-neutral-800 rounded">↵</kbd>
          </div>
          <span>Nitish Yeluru</span>
        </div>
      </div>
    </div>
  );
}
