import { userData } from "../data/user.ts";
import { FollowMe } from "./FollowMe.tsx";

export function About() {
  return (
    <section id="about" className="py-7 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
          AI Engineer building LLM products, AI agents &amp; developer tools
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Focus & Engineering
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-start">
        <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
          {userData.about.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <img
          src="/nitish.jpg"
          alt="Nitish Yeluru"
          className="w-full max-w-sm aspect-[4/3] sm:aspect-[3/4] object-cover object-[68%_center] border border-neutral-200 dark:border-neutral-800"
        />
      </div>
      <FollowMe />
    </section>
  );
}
