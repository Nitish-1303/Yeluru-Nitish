"use client";

import { ArrowUp } from "lucide-react";
import { userData } from "../data/user.ts";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-neutral-200/80 dark:border-neutral-800/80 py-8 mt-6">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2 flex-wrap text-center sm:text-left">
          <span>© {new Date().getFullYear()} {userData.name}</span>
          <span>•</span>
          <a
            href="https://chanhdai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 transition-colors"
          >
            layout inspired by chanhdai.com
          </a>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
          aria-label="Scroll back to top of page"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
