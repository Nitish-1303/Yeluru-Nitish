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
];
