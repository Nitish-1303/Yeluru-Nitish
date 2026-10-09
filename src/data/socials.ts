export const socials = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Nitish-1303",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/yeluru-nitish",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/Vibe_User",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@buildwithnitish",
  },
  {
    id: "topmate",
    label: "Topmate",
    href: "https://topmate.io/yeluru_nitish",
  },
] as const;

export type SocialId = (typeof socials)[number]["id"];

export function socialHref(id: SocialId): string {
  const social = socials.find((item) => item.id === id);
  if (!social) {
    throw new Error(`Unknown social profile: ${id}`);
  }
  return social.href;
}
