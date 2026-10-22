/**
 * Centralized portfolio data for Nitish Yeluru.
 * Components render directly from this single source of truth.
 */

export interface UserData {
  name: string;
  contact: {
    email: string;
    topmate: string;
  };
  socials: {
    github: string;
    linkedin: string;
    x: string;
    youtube: string;
    email: string;
    paypalMe: string;
  };
  hero: {
    photoUrl: string | null; // unset: intentional NY monogram fallback
  };
  openSource: {
    prNumber: number;
    repo: string;
    title: string;
    mergedDate: string;
    url: string;
    description: string;
    logoUrl?: string;
  }[];
}

export const userData: UserData = {
  name: "Nitish Yeluru",
  contact: {
    email: "yelurunitish006@gmail.com",
    topmate: "https://topmate.io/yeluru_nitish",
  },
  socials: {
    github: "https://github.com/Nitish-1303",
    linkedin: "https://linkedin.com/in/yeluru-nitish",
    x: "https://x.com/Vibe_User",
    youtube: "https://www.youtube.com/@buildwithnitish",
    email: "mailto:yelurunitish006@gmail.com",
    paypalMe: "https://paypal.me/YeluruNitish",
  },
  hero: {
    photoUrl: "/nitish-avatar.jpg",
  },
  openSource: [
    {
      prNumber: 39155,
      repo: "go-gitea/gitea",
      title: 'fix(web): populate the reason for "cannot commit to branch" in web editor commit form',
      mergedDate: "August 28, 2026",
      url: "https://github.com/go-gitea/gitea/pull/39155",
      description: "Fixes #38710. The web editor commit form showed a bare 'cannot commit to branch' error with no reason. The backend now builds the specific denial reason and the template renders it, with related legacy CanContentChange code refactored.",
    },
    {
      prNumber: 120,
      repo: "magnitudedev/magnitude",
      title: "fix: clamp inconsistent system memory observations",
      mergedDate: "September 23, 2026",
      url: "https://github.com/magnitudedev/magnitude/pull/120",
      description: "Fixes #99. Some macOS systems briefly report available memory above physical capacity, which Magnitude treated as fatal and blocked model loading. This clamps the reading to physical capacity while keeping zero capacity invalid.",
      logoUrl: "/logos/magnitude.png",
    },
    {
      prNumber: 125,
      repo: "magnitudedev/magnitude",
      title: "fix(acn): apply remote API key gate to case-variant inference paths",
      mergedDate: "September 24, 2026",
      url: "https://github.com/magnitudedev/magnitude/pull/125",
      description: "Auth-bypass fix. The router matched paths case-insensitively but the API-key gate compared case-sensitively, so GET /INFERENCE/* skipped the key check from remote machines. This normalizes the path before gating.",
      logoUrl: "/logos/magnitude.png",
    },
    {
      prNumber: 7275,
      repo: "reflex-dev/reflex",
      title: "Point reflex db commands at the db extra instead of dumping a traceback",
      mergedDate: "October 1, 2026",
      url: "https://github.com/reflex-dev/reflex/pull/7275",
      description: "Closes #7259. On a bare install, `reflex db init` died with an unhandled traceback when the db extra was missing. The command now fails with a clear message pointing at the missing extra.",
      logoUrl: "/logos/reflex.png",
    },
    {
      prNumber: 11634,
      repo: "unslothai/unsloth",
      title: "Studio: check loopback for an existing listener before taking the port",
      mergedDate: "October 11, 2026",
      url: "https://github.com/unslothai/unsloth/pull/11634",
      description: "Fixes #11623. On Windows, Studio could bind 127.0.0.1:8888 while another process held 0.0.0.0:8888 and silently take over its traffic. The port check now probes loopback too, so Studio falls back to the next port.",
    },
    {
      prNumber: 257,
      repo: "neatlogs/neatroots",
      title: "fix(steer): preserve OpenAI structured-output parse helpers",
      mergedDate: "October 16, 2026",
      url: "https://github.com/neatlogs/neatroots/pull/257",
      description: "Fixes #245. The steering wrapper dropped _thenUnwrap, so OpenAI's chat.completions.parse() and responses.parse() threw before returning parsed results. This forwards it to the original request and adds regression tests for both parse paths.",
    },
  ],
};
