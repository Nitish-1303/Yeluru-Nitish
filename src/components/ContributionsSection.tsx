"use client";

import { Suspense, useEffect, useState } from "react";
import { GitHubContributions, GitHubContributionsFallback } from "@/components/github-contributions";

type ContributionJSON = {
  total: { lastYear: number };
  contributions: Array<{ date: string; count: number; level: number }>;
};

type Activity = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

function ContributionsClient() {
  const [contributionsPromise, setContributionsPromise] = useState<Promise<Activity[]> | null>(null);

  useEffect(() => {
    // Create promise after mount, when window is available
    const promise = fetch("/contributions.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contributions");
        return res.json();
      })
      .then((data: ContributionJSON): Activity[] => {
        return data.contributions.map((c) => ({
          date: c.date,
          count: c.count,
          level: c.level as 0 | 1 | 2 | 3 | 4,
        }));
      });
    
    setContributionsPromise(promise);
  }, []);

  if (!contributionsPromise) {
    return <GitHubContributionsFallback />;
  }

  return (
    <Suspense fallback={<GitHubContributionsFallback />}>
      <GitHubContributions
        contributions={contributionsPromise}
        githubProfileUrl="https://github.com/Nitish-1303"
      />
    </Suspense>
  );
}

export function ContributionsSection() {
  return (
    <section
      id="contributions"
      className="scroll-mt-20 py-7 border-b border-neutral-200 dark:border-neutral-800/80"
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Contributions
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Past year
        </span>
      </div>

      <ContributionsClient />
    </section>
  );
}
