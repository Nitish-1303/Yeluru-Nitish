export interface BuildLogEntry {
  date: string;
  text: string;
  link?: string;
}

// Add completed, truthful entries with a YYYY-MM-DD date, concise text, and an optional link.
// Keep entries newest first; entries without links render as plain text. Do not add plans or unverified claims.
// Template: { date: "YYYY-MM-DD", text: "Completed work." },
export const buildLog: BuildLogEntry[] = [
  {
    date: "2026-10-08",
    text: "Portfolio live on Vercel.",
    link: "https://yeluru-nitish.vercel.app/",
  },
  {
    date: "2026-10-08",
    text: "Opened InsForge PR #2116: safer default proxy configuration. Awaiting review.",
    link: "https://github.com/InsForge/InsForge/pull/2116",
  },
  {
    date: "2026-10-08",
    text: "Opened InsForge PR #2115: sign-in rate limiting. Awaiting review.",
    link: "https://github.com/InsForge/InsForge/pull/2115",
  },
];
