import { GraduationCap } from "lucide-react";
import { userData } from "../data/user.ts";

export function Education() {
  return (
    <section id="education" className="py-7 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Education
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Academic Foundation
        </span>
      </div>

      <div className="p-3.5 rounded-lg border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100/30 dark:bg-neutral-900/30">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-md bg-neutral-200/70 dark:bg-neutral-800 flex items-center justify-center shrink-0 text-neutral-700 dark:text-neutral-300">
            <GraduationCap className="w-4 h-4" />
          </div>

          <div className="space-y-0.5">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {userData.education.institution}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              {userData.education.degree}
            </p>
            {/* If dates were ever confirmed, they would render here. Kept unset per instructions */}
            {userData.education.dates && (
              <p className="text-[11px] font-mono text-neutral-400">
                {userData.education.dates}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
