const organizations = [
  {
    label: "Worked with",
    organizations: [
      { name: "Ethos", description: "AskEthos voice AI" },
      { name: "Alignerr" },
    ],
  },
  {
    label: "Open source PRs",
    organizations: [
      { name: "Reflex", pr: "PR #7275", href: "https://github.com/reflex-dev/reflex/pull/7275" },
      { name: "Magnitude", pr: "PR #120", href: "https://github.com/magnitudedev/magnitude/pull/120" },
      { name: "ParadeDB", pr: "PR #6447", href: "https://github.com/paradedb/paradedb/pull/6447" },
      { name: "InsForge", pr: "PR #2115", href: "https://github.com/InsForge/InsForge/pull/2115" },
    ],
  },
];

export function Organizations() {
  return (
    <section
      id="organizations"
      className="space-y-4 py-7 border-b border-neutral-200 dark:border-neutral-800/80"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Organizations
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Teams & Contributions
        </span>
      </div>

      {organizations.map((group) => (
        <div
          key={group.label}
          className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-5"
        >
          <h3 className="w-32 shrink-0 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            {group.label}
          </h3>
          <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            {group.organizations.map((organization) => (
              <li key={organization.name} className="text-sm text-stone-800 dark:text-neutral-200">
                {organization.href ? (
                  <a
                    href={organization.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700 dark:decoration-neutral-700 dark:hover:decoration-neutral-300"
                  >
                    <span className="font-medium">{organization.name}</span>
                    <span className="ml-1 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      {organization.pr}
                    </span>
                  </a>
                ) : (
                  <span>
                    <span className="font-medium">{organization.name}</span>
                    {organization.description && (
                      <span className="ml-1 text-xs text-neutral-500 dark:text-neutral-400">
                        ({organization.description})
                      </span>
                    )}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
