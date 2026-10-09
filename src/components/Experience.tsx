import { Briefcase, MapPin, Calendar, Lock } from "lucide-react";
import { userData } from "../data/user.ts";
import { TechIcon } from "./TechIcon.tsx";
import { FollowMe } from "./FollowMe.tsx";

export function Experience() {
  return (
    <section id="experience" className="py-7 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Experience
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Career Track Record
        </span>
      </div>

      <div className="space-y-8">
        {userData.experience.map((item, idx) => (
          <div
            key={idx}
            className="relative pl-6 sm:pl-7 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-2.5"
          >
            {/* Timeline node marker with company logo */}
            <div className="absolute -left-[15px] sm:-left-[17px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center p-1 shadow-2xs">
              {item.logoUrl ? (
                <img
                  src={item.logoUrl}
                  alt={`${item.company} logo`}
                  className="w-full h-full object-contain rounded"
                  loading="lazy"
                />
              ) : (
                <Briefcase className="w-3.5 h-3.5 text-neutral-500" />
              )}
            </div>

            {/* Header info */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.company}
                  </span>
                  {item.employmentType && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/80 dark:border-neutral-700/80">
                      {item.employmentType}
                    </span>
                  )}
                  {item.badge && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      <Lock className="w-2.5 h-2.5" />
                      {item.badge}
                    </span>
                  )}
                  {item.isCurrent && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
                  <Calendar className="w-3 h-3 text-neutral-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium text-neutral-800 dark:text-neutral-200">
                  {item.role}
                </span>
                {item.location && (
                  <>
                    <span className="text-neutral-300 dark:text-neutral-700">•</span>
                    <span className="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </>
                )}
              </div>

              {item.projectTitle && (
                <div className="text-xs font-mono text-neutral-700 dark:text-neutral-300 bg-neutral-100/70 dark:bg-neutral-900/70 px-2.5 py-1 rounded-md border border-neutral-200/80 dark:border-neutral-800/80 inline-block mt-1">
                  {item.projectTitle}
                </div>
              )}
            </div>

            {/* Bullets & Achievements */}
            {item.bullets && item.bullets.length > 0 ? (
              <ul className="space-y-1.5 text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed pt-0.5">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-neutral-400 shrink-0 select-none">→</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Stack / Skills pills */}
            {item.skills && item.skills.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mr-1">Stack:</span>
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800/80"
                  >
                    <TechIcon name={skill} className="w-3 h-3 opacity-75 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <FollowMe />
    </section>
  );
}
