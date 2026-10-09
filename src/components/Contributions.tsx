"use client";

import { useEffect, useRef } from "react";
import type {
  ContributionData,
  ContributionDay,
  ContributionLevel,
} from "../lib/contributions.ts";
import { FollowMe } from "./FollowMe.tsx";

const cellColors: Record<ContributionLevel, string> = {
  NONE: "bg-stone-200 dark:bg-neutral-800",
  FIRST_QUARTILE: "bg-emerald-100 dark:bg-emerald-950",
  SECOND_QUARTILE: "bg-emerald-300 dark:bg-emerald-800",
  THIRD_QUARTILE: "bg-emerald-500 dark:bg-emerald-600",
  FOURTH_QUARTILE: "bg-emerald-800 dark:bg-emerald-400",
};

function longestStreak(weeks: ContributionData["weeks"]) {
  const days = weeks
    .flatMap((week) => week.contributionDays)
    .sort((a, b) => a.date.localeCompare(b.date));

  let current = 0;
  let longest = 0;
  let previousDate: number | null = null;

  for (const day of days) {
    const date = Date.parse(`${day.date}T00:00:00Z`);
    if (day.contributionCount > 0) {
      current =
        previousDate !== null && date - previousDate === 24 * 60 * 60 * 1000
          ? current + 1
          : 1;
      longest = Math.max(longest, current);
      previousDate = date;
    } else {
      current = 0;
      previousDate = date;
    }
  }

  return longest;
}

function dayTitle(day: ContributionDay) {
  const date = new Date(`${day.date}T00:00:00Z`);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
  const contributionWord = day.contributionCount === 1 ? "contribution" : "contributions";
  return `${day.contributionCount} ${contributionWord} on ${formattedDate}`;
}

export function Contributions({ data }: { data: ContributionData | null }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollLeft = gridRef.current.scrollWidth;
    }
  }, [data]);

  if (!data) return null;

  let previousMonth = "";
  const monthLabels = data.weeks.map((week) => {
    const firstDate = week.contributionDays[0]?.date;
    const month = firstDate ? firstDate.slice(0, 7) : "";
    if (month === previousMonth) return "";
    previousMonth = month;
    return firstDate
      ? new Intl.DateTimeFormat("en-US", {
          month: "short",
          timeZone: "UTC",
        }).format(new Date(`${firstDate}T00:00:00Z`))
      : "";
  });

  const streak = longestStreak(data.weeks);

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

      <p className="mb-4 text-sm text-stone-700 dark:text-neutral-300">
        <span className="font-semibold text-stone-900 dark:text-neutral-100">
          {new Intl.NumberFormat("en-US").format(data.totalContributions)}
        </span>
        {" contributions in the last year"}
        <span className="mx-2 text-neutral-400 dark:text-neutral-600" aria-hidden="true">·</span>
        <span className="font-semibold text-stone-900 dark:text-neutral-100">{streak}</span>
        {" "}
        Longest streak: {streak} {streak === 1 ? "day" : "days"}
      </p>

      <div
        ref={gridRef}
        className="overflow-x-auto overscroll-x-contain pb-2"
        aria-label="GitHub contributions by day for the past year"
      >
        <div className="min-w-max">
          <div
            className="mb-1 grid gap-[3px] text-[10px] font-mono text-neutral-500 dark:text-neutral-400"
            style={{
              gridTemplateColumns: `repeat(${data.weeks.length}, 9px)`,
            }}
            aria-hidden="true"
          >
            {monthLabels.map((month, index) => (
              <span key={`${month}-${index}`} className="whitespace-nowrap">
                {month}
              </span>
            ))}
          </div>
          <div
            className="grid gap-[3px]"
            style={{
              gridTemplateColumns: `repeat(${data.weeks.length}, 9px)`,
              gridTemplateRows: "repeat(7, 9px)",
            }}
          >
            {data.weeks.flatMap((week, weekIndex) =>
              week.contributionDays.map((day) => {
                const weekday = new Date(`${day.date}T00:00:00Z`).getUTCDay();
                return (
                  <span
                    key={`${weekIndex}-${day.date}`}
                    title={dayTitle(day)}
                    className={`block h-[9px] w-[9px] rounded-[2px] ${cellColors[day.contributionLevel]}`}
                    style={{
                      gridRowStart: weekday + 1,
                      gridColumnStart: weekIndex + 1,
                    }}
                    aria-label={dayTitle(day)}
                  />
                );
              }),
            )}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-end gap-1.5 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
        <span>Less</span>
        {(["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"] as const).map((level) => (
          <span key={level} className={`block h-[9px] w-[9px] rounded-[2px] ${cellColors[level]}`} />
        ))}
        <span>More</span>
      </div>
      <FollowMe />
    </section>
  );
}
