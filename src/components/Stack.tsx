import { userData } from "../data/user.ts";
import { TechIcon } from "./TechIcon.tsx";

export function Stack() {
  return (
    <section id="stack" className="py-7 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Stack
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Tools & Technologies
        </span>
      </div>

      <div className="space-y-4">
        {userData.stackGroups.map((group) => (
          <div key={group.number} className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
                  {group.number}
                </span>
                <span className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                  {group.title}
                </span>
              </div>
              {group.description && (
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-normal pl-6 sm:pl-0 sm:text-right">
                  {group.description}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 pl-6 sm:pl-6.5">
              {group.items.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200/90 dark:border-neutral-800/90 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors select-none"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5 opacity-80 shrink-0" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
