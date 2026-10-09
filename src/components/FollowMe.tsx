import { Caveat } from "next/font/google";
import { socials, type SocialId } from "../data/socials.ts";

const caveat = Caveat({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

function SocialIcon({ id }: { id: SocialId }) {
  const common = {
    fill: "none",
    className: "block h-full w-full",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  switch (id) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...common}>
          <path d="M8.5 19.5c-4.2 1.3-4.2-2.2-5.8-2.8M14.8 22v-3.1c0-.9.1-1.6-.4-2.2 3.1-.3 6.3-1.5 6.3-7a5.5 5.5 0 0 0-1.5-3.8 5.1 5.1 0 0 0-.1-3.8s-1.2-.4-4 1.5a13.7 13.7 0 0 0-7.2 0C5.1 1.7 3.9 2.1 3.9 2.1a5.1 5.1 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5.5 3.2 6.7 6.3 7-.5.6-.5 1.4-.5 2.2V22" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...common}>
          <path d="M5 9v10M5 5.5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 9v10" />
          <circle cx="5" cy="5" r=".8" />
          <path d="M3 3h18v18H3z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...common}>
          <path d="m4 4 16 16M20 4 4 20M6 4h4l8 16h-4L6 4Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...common}>
          <path d="M21 7.2a2.8 2.8 0 0 0-2-2C17.2 4.7 12 4.7 12 4.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12a29 29 0 0 0 .5 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z" />
          <path d="m10 15.5 5-3.5-5-3.5v7Z" />
        </svg>
      );
    case "topmate":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...common}>
          <rect x="3.5" y="5" width="17" height="16" rx="2" />
          <path d="M7.5 3v4M16.5 3v4M3.5 9h17M9 12.5h6M12 12.5V18" />
        </svg>
      );
  }
}

export function FollowMe() {
  return (
    <div className="mt-10 flex flex-wrap items-start gap-x-2 pb-1">
      <span
        className={`${caveat.className} whitespace-nowrap text-[24px] leading-8 text-stone-600`}
      >
        follow me
      </span>

      <svg
        className="mt-0.5 h-11 w-16 shrink-0 text-stone-500"
        viewBox="0 0 64 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 3c15 0 14 16 27 20 8 3 13 5 22 9" />
        <path d="m45 30 7 2-1 7" />
      </svg>

      <nav
        aria-label="Follow Nitish"
        className="flex basis-full items-center gap-1 pl-10 pt-1 sm:ml-auto sm:basis-auto sm:gap-2 sm:pt-7 sm:pl-0"
      >
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Nitish on ${social.label}`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-stone-500 transition-colors hover:text-stone-900 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-stone-700"
          >
            <span className="h-[21px] w-[21px]">
              <SocialIcon id={social.id} />
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
