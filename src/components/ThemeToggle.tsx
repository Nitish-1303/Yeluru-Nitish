"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import {
  applyTheme,
  getStoredTheme,
  setTheme as saveTheme,
  type Theme,
} from "../lib/theme.ts";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = getStoredTheme();
    setTheme(saved);
    applyTheme(saved);

    const handleThemeChange = (event: Event) => {
      const nextTheme = (event as CustomEvent<Theme>).detail;
      setTheme(nextTheme);
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (getStoredTheme() === "system") applyTheme("system");
    };

    window.addEventListener("theme-change", handleThemeChange);
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      window.removeEventListener("theme-change", handleThemeChange);
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const cycleTheme = () => {
    const sequence: Theme[] = ["light", "dark", "system"];
    const currentIndex = sequence.indexOf(theme);
    const nextTheme = sequence[(currentIndex + 1) % sequence.length];
    saveTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="w-8 h-8 rounded-md flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        aria-label="Toggle theme"
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="w-8 h-8 rounded-md flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer"
      title={`Current: ${theme}. Click to change theme`}
      aria-label={`Current theme: ${theme}. Click to switch theme`}
    >
      {theme === "light" && <Sun className="w-4 h-4" />}
      {theme === "dark" && <Moon className="w-4 h-4" />}
      {theme === "system" && <Laptop className="w-4 h-4" />}
    </button>
  );
}
