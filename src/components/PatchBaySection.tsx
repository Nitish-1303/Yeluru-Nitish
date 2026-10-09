import { patchBayContent } from "../data/patchbay.ts";

export function PatchBaySection() {
  return (
    <section
      id="what-im-building"
      className="scroll-mt-20 py-7 border-b border-neutral-200 dark:border-neutral-800/80"
    >
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-900 dark:text-neutral-50">
          What I'm building
        </h2>
        <h3 className="mt-3 text-base font-semibold text-stone-900 dark:text-neutral-100">
          {patchBayContent.projectName}
        </h3>
        <p className="mt-1 max-w-prose text-sm leading-relaxed text-stone-700 dark:text-neutral-300">
          {patchBayContent.description}
        </p>
      </div>

      <dl className="divide-y divide-neutral-200 dark:divide-neutral-800">
        <div className="grid grid-cols-1 gap-1.5 py-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
          <dt className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {patchBayContent.problem.label}
          </dt>
          <dd className="text-sm leading-relaxed text-stone-700 dark:text-neutral-300">
            {patchBayContent.problem.paragraph}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1.5 py-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
          <dt className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {patchBayContent.approach.label}
          </dt>
          <dd className="text-sm leading-relaxed text-stone-700 dark:text-neutral-300">
            {patchBayContent.approach.paragraph}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1.5 py-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
          <dt className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {patchBayContent.currentStatus.label}
          </dt>
          <dd>
            <p className="text-sm font-medium leading-relaxed text-stone-900 dark:text-neutral-100">
              {patchBayContent.currentStatus.status}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-neutral-400">
              {patchBayContent.currentStatus.supporting}
            </p>
          </dd>
        </div>
      </dl>

      <p className="mt-3 text-sm font-medium text-stone-800 dark:text-neutral-200">
        {patchBayContent.closing}
      </p>
    </section>
  );
}
