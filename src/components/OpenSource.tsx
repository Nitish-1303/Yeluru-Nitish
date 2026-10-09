import { GitMerge, ExternalLink } from "lucide-react";
import { userData } from "../data/user.ts";
import { OrgLogo } from "./OrgLogo.tsx";

export function OpenSource() {
  return (
    <section id="opensource" className="py-7 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Open Source
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Merged Contributions
        </span>
      </div>

      <div className="space-y-3.5">
        {userData.openSource.map((pr) => (
          <div
            key={pr.url}
            className="group relative p-3.5 sm:p-4 rounded-xl border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100/30 dark:bg-neutral-900/30 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60 hover:border-neutral-300 dark:hover:border-neutral-700/80 transition-all duration-150"
          >
            <div className="flex items-start gap-3.5">
              {/* Organization Logo Anchor Frame */}
              <div className="w-9 h-9 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800/90 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-colors">
                <OrgLogo repo={pr.repo} localLogoUrl={pr.logoUrl} size={24} />
              </div>

              {/* Main Content Body */}
              <div className="flex-1 min-w-0 space-y-1.5">
                {/* Meta Row: Org/Repo, PR #, Merged Badge, Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200">
                      {pr.repo}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">#{pr.prNumber}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                      <GitMerge className="w-2.5 h-2.5 shrink-0" />
                      Merged
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 shrink-0">
                    {pr.mergedDate}
                  </span>
                </div>

                {/* PR Title as Link */}
                <div>
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-baseline gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors"
                  >
                    <span>{pr.title}</span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity shrink-0 translate-y-0.5" />
                  </a>
                </div>

                {/* Plain Scope Description */}
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {pr.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
