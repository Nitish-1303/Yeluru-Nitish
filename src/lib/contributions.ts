import { readFileSync } from "node:fs";
import { join } from "node:path";

export type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

export interface ContributionDay {
  contributionCount: number;
  date: string;
  contributionLevel: ContributionLevel;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionData {
  generatedAt: string;
  totalContributions: number;
  weeks: ContributionWeek[];
}

const levels = new Set<ContributionLevel>([
  "NONE",
  "FIRST_QUARTILE",
  "SECOND_QUARTILE",
  "THIRD_QUARTILE",
  "FOURTH_QUARTILE",
]);

function isContributionDay(value: unknown): value is ContributionDay {
  if (typeof value !== "object" || value === null) return false;
  const day = value as Record<string, unknown>;
  return (
    typeof day.contributionCount === "number" &&
    Number.isInteger(day.contributionCount) &&
    day.contributionCount >= 0 &&
    typeof day.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(day.date) &&
    Number.isFinite(Date.parse(`${day.date}T00:00:00Z`)) &&
    typeof day.contributionLevel === "string" &&
    levels.has(day.contributionLevel as ContributionLevel)
  );
}

function isContributionData(value: unknown): value is ContributionData {
  if (typeof value !== "object" || value === null) return false;
  const data = value as Record<string, unknown>;
  if (
    typeof data.generatedAt !== "string" ||
    !Number.isFinite(Date.parse(data.generatedAt)) ||
    typeof data.totalContributions !== "number" ||
    !Number.isInteger(data.totalContributions) ||
    data.totalContributions < 0 ||
    !Array.isArray(data.weeks) ||
    data.weeks.length === 0
  ) {
    return false;
  }

  return data.weeks.every((week) => {
    if (typeof week !== "object" || week === null) return false;
    const contributionDays = (week as Record<string, unknown>).contributionDays;
    return (
      Array.isArray(contributionDays) &&
      contributionDays.length > 0 &&
      contributionDays.every(isContributionDay)
    );
  });
}

export function getContributions(): ContributionData | null {
  try {
    const contents = readFileSync(
      join(process.cwd(), "public", "contributions.json"),
      "utf8",
    );
    const parsed: unknown = JSON.parse(contents);
    if (!isContributionData(parsed)) return null;

    const generatedAt = Date.parse(parsed.generatedAt);
    const maxAgeMs = 2 * 24 * 60 * 60 * 1000;
    if (Date.now() - generatedAt > maxAgeMs) return null;

    return parsed;
  } catch {
    return null;
  }
}
