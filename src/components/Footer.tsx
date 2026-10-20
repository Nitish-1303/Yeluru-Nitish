"use client";

import { ArrowUp } from "lucide-react";

export function Footer({ name }: { name: string }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-neutral-200/80 dark:border-neutral-800/80 py-8 mt-6">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center gap-2 flex-wrap text-center sm:text-left">
          <span>© {new Date().getFullYear()} {name}</span>
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
