import { buildLog } from "../data/buildlog.ts";

function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function BuildLog() {
  const entries = buildLog
    .map((entry, index) => ({ entry, index }))
    .sort(
      (a, b) =>
        b.entry.date.localeCompare(a.entry.date) || a.index - b.index,
    )
    .map(({ entry }) => entry);

  return (
    <section
      id="now-shipping"
      className="scroll-mt-20 py-7 border-b border-neutral-200 dark:border-neutral-800/80"
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Now shipping
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Build log
        </span>
      </div>

      <ol>
        {entries.map((entry, index) => (
          <li
            key={`${entry.date}-${index}`}
            className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 border-t border-neutral-200/80 py-3 first:border-t-0 dark:border-neutral-800/80 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-4"
          >
            <time
              dateTime={entry.date}
              className="pt-0.5 text-[11px] font-mono text-neutral-500 dark:text-neutral-400"
            >
              {formatDate(entry.date)}
            </time>
            <p className="min-w-0 text-sm leading-relaxed text-stone-800 dark:text-neutral-200">
              {entry.link ? (
                <a
                  href={entry.link}
                  className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700 dark:decoration-neutral-700 dark:hover:decoration-neutral-300 dark:focus-visible:outline-neutral-300"
                >
                  {entry.text}
                </a>
              ) : (
                entry.text
              )}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
