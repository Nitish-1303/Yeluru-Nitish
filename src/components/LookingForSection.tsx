import { lookingForContent } from "../data/lookingFor.ts";

export function LookingForSection() {
  return (
    <section
      id="work-with-me"
      className="scroll-mt-20 py-7 border-b border-neutral-200 dark:border-neutral-800/80"
    >
      <h2 className="mb-3 text-xl sm:text-2xl font-semibold tracking-tight text-stone-900 dark:text-neutral-50">
        What I'm looking for
      </h2>
      <p className="max-w-prose text-sm leading-relaxed text-stone-700 dark:text-neutral-300">
        {lookingForContent.paragraph}
      </p>
      <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-stone-700 dark:text-neutral-300">
        {lookingForContent.filters.map((filter) => (
          <li key={filter}>{filter}</li>
        ))}
      </ul>
    </section>
  );
}
