import type { GitHubStats } from "../lib/github-stats.ts";

export function GitHubActivity({ stats }: { stats: GitHubStats }) {
  return (
    <section
      id="github-activity"
      className="py-8 border-b border-neutral-200 dark:border-neutral-800/80"
    >
      <div className="flex items-end justify-between gap-3 mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-900 dark:text-neutral-50">
          GitHub Activity
        </h2>
        <span className="text-[11px] font-mono text-stone-500 dark:text-neutral-400 text-right">
          Open Source in Motion
        </span>
      </div>

      <a
        href="https://github.com/Nitish-1303"
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-stone-200 bg-[#faf8f4] p-3 sm:p-4 dark:border-neutral-800 dark:bg-neutral-900"
        aria-label="View Nitish Yeluru's GitHub profile and contribution graph"
      >
        <img
          src="https://ghchart.rshah.org/Nitish-1303"
          alt="GitHub contribution graph for Nitish-1303"
          className="block w-full h-auto"
          loading="lazy"
        />
      </a>

      <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-neutral-400">
        <span className="font-semibold text-stone-900 dark:text-neutral-100">{stats.publicRepos}</span>
        {" "}public repositories
        <span className="mx-2 text-stone-400 dark:text-neutral-600" aria-hidden="true">·</span>
        <span className="font-semibold text-stone-900 dark:text-neutral-100">{stats.followers}</span>
        {" "}followers
      </p>
    </section>
  );
}
