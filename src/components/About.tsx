import { userData } from "../data/user.ts";

export function About() {
  return (
    <section id="about" className="py-7 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          About
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
    </section>
  );
}
