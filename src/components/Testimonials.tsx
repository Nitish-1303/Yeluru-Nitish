"use client";

import { useReducedMotion } from "motion/react";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/components/testimonial";

const testimonials = [
  {
    quote:
      "Nitish contributed to AI evaluation workflows with a strong focus on technical accuracy, consistency, and structured reasoning.",
    name: "Alignerr",
    tagline: "AI Evaluation",
    initials: "AL",
  },
  {
    quote:
      "Nitish brought a hands-on engineering approach to building and improving AI-powered software workflows.",
    name: "Paasa",
    tagline: "Engineering",
    initials: "PA",
  },
  {
    quote:
      "Nitish worked across the MERN stack, building application features and gaining practical experience with modern web development.",
    name: "SmartInternz",
    tagline: "Full-Stack Development",
    initials: "SI",
  },
  {
    quote: "Thanks for this. Clamping is the right fix for #99",
    name: "Tom Greenwald",
    tagline: "Maintainer, Magnitude",
    initials: "TG",
    url: "https://github.com/magnitudedev/magnitude/pull/120",
  },
  {
    quote: "Thanks for the contribution",
    name: "masenf",
    tagline: "Maintainer, Reflex",
    initials: "MA",
    url: "https://github.com/reflex-dev/reflex/pull/7275",
  },
];

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="py-8 border-b border-neutral-200 dark:border-neutral-800/80"
    >
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          Trusted by teams building with AI
        </h2>
      </div>

      <Marquee className="border-y border-stone-200 dark:border-neutral-800">
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent
          play={!shouldReduceMotion}
          speed={32}
          className="[&_.rfm-marquee]:items-stretch [&_.rfm-initial-child-container]:items-stretch"
        >
          {testimonials.map((item) => {
            const inner = (
              <Testimonial>
                <TestimonialQuote>
                  <p>{item.quote}</p>
                </TestimonialQuote>

                <TestimonialAuthor>
                  <TestimonialAvatar>
                    {item.initials}
                    <TestimonialAvatarRing />
                  </TestimonialAvatar>
                  <TestimonialAuthorName>{item.name}</TestimonialAuthorName>
                  <TestimonialAuthorTagline>
                    {item.tagline}
                  </TestimonialAuthorTagline>
                </TestimonialAuthor>
              </Testimonial>
            );

            return (
              <MarqueeItem
                key={item.name}
                className="mx-0 h-full w-80 whitespace-normal border-r border-stone-200 dark:border-neutral-800"
              >
                {item.url ? (
                  <a
                    className="block h-full bg-[#faf8f4] transition-colors ease-out hover:bg-stone-100 dark:bg-neutral-900 dark:hover:bg-neutral-800/60"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="h-full bg-[#faf8f4] dark:bg-neutral-900">
                    {inner}
                  </div>
                )}
              </MarqueeItem>
            );
          })}
        </MarqueeContent>
      </Marquee>

      <p className="mt-4 text-xs text-stone-600 dark:text-neutral-400">
        Merged PRs in Reflex and Magnitude. Open PRs in ParadeDB and InsForge.{" "}
        <a
          href="https://github.com/Nitish-1303"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-300"
        >
          Open Source Contributions
        </a>
      </p>
    </section>
  );
}
