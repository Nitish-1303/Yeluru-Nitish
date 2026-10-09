import { FollowMe } from "./FollowMe.tsx";
import { socialHref } from "../data/socials.ts";

const testimonials = [
  {
    quote:
      "Nitish contributed to AI evaluation workflows with a strong focus on technical accuracy, consistency, and structured reasoning.",
    name: "Alignerr",
    role: "AI Evaluation",
  },
  {
    quote:
      "Nitish brought a hands-on engineering approach to building and improving AI-powered software workflows.",
    name: "Paasa",
    role: "Engineering",
  },
  {
    quote:
      "Nitish worked across the MERN stack, building application features and gaining practical experience with modern web development.",
    name: "SmartInternz",
    role: "Full-Stack Development",
  },
  {
    quote: "Thanks for this. Clamping is the right fix for #99",
    name: "Tom Greenwald",
    role: "Maintainer, Magnitude",
    href: "https://github.com/magnitudedev/magnitude/pull/120",
  },
  {
    quote: "Thanks for the contribution",
    name: "masenf",
    role: "Maintainer, Reflex",
    href: "https://github.com/reflex-dev/reflex/pull/7275",
  },
];

export function Testimonials() {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="flex flex-col justify-between gap-5 border border-stone-200 bg-[#faf8f4] p-4 sm:p-5 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <blockquote className="text-sm leading-relaxed text-stone-800 dark:text-neutral-200">
              <span
                aria-hidden="true"
                className="block mb-1 font-serif text-3xl leading-none text-stone-400 dark:text-neutral-500"
              >
                “
              </span>
              {testimonial.quote}
            </blockquote>
            <div className="border-t border-stone-200 pt-3 dark:border-neutral-800">
              <p className="text-sm font-semibold text-stone-900 dark:text-neutral-100">
                {testimonial.href ? (
                  <a
                    href={testimonial.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700 dark:decoration-neutral-700 dark:hover:decoration-neutral-300"
                  >
                    {testimonial.name}
                  </a>
                ) : (
                  testimonial.name
                )}
              </p>
              <p className="mt-0.5 text-xs text-stone-600 dark:text-neutral-400">{testimonial.role}</p>
            </div>
          </article>
        ))}

        <article className="flex flex-col justify-between gap-5 border border-stone-200 bg-[#faf8f4] p-4 sm:p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm leading-relaxed text-stone-800 dark:text-neutral-200">
            Merged PRs in Reflex and Magnitude. Open PRs in ParadeDB and InsForge.
          </p>
          <div className="border-t border-stone-200 pt-3 dark:border-neutral-800">
            <a
              href={socialHref("github")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-300"
            >
              Open Source Contributions
            </a>
          </div>
        </article>
      </div>
      <FollowMe />
    </section>
  );
}
