import { GitMerge, Briefcase } from "lucide-react";

const mergedPRs = [
  { label: "Gitea", url: "https://github.com/go-gitea/gitea/pull/39155" },
  { label: "Reflex", url: "https://github.com/reflex-dev/reflex/pull/7275" },
  { label: "Unsloth", url: "https://github.com/unslothai/unsloth/pull/11634" },
  { label: "Magnitude #120", url: "https://github.com/magnitudedev/magnitude/pull/120" },
  { label: "Magnitude #125", url: "https://github.com/magnitudedev/magnitude/pull/125" },
  { label: "neatroots", url: "https://github.com/neatlogs/neatroots/pull/257" },
];

const proofLink =
  "underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700 hover:text-stone-950 transition-colors";

export function Proof() {
  return (
    <section id="proof" className="py-7 border-b border-stone-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Proof
        </h2>
        <span className="text-[11px] font-mono text-stone-400">
          Merged & Verifiable
        </span>
      </div>

      <div className="space-y-3">
        <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
          <span className="inline-flex items-center gap-1.5 font-medium text-stone-900">
            <GitMerge className="w-4 h-4 text-purple-600" />6 merged open-source PRs
          </span>{" "}
          across{" "}
          <a href={mergedPRs[0].url} target="_blank" rel="noopener noreferrer" className={proofLink}>Gitea</a>,{" "}
          <a href={mergedPRs[1].url} target="_blank" rel="noopener noreferrer" className={proofLink}>Reflex</a>,{" "}
          <a href={mergedPRs[2].url} target="_blank" rel="noopener noreferrer" className={proofLink}>Unsloth</a>,{" "}
          Magnitude (
          <a href={mergedPRs[3].url} target="_blank" rel="noopener noreferrer" className={proofLink}>#120</a>,{" "}
          <a href={mergedPRs[4].url} target="_blank" rel="noopener noreferrer" className={proofLink}>#125</a>
          ) and{" "}
          <a href={mergedPRs[5].url} target="_blank" rel="noopener noreferrer" className={proofLink}>neatroots</a>.
        </p>

        <p className="flex items-center gap-2 text-xs sm:text-sm text-stone-600">
          <Briefcase className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span>
            <span className="font-medium text-stone-800">Full-Stack Developer (Independent Projects)</span>
            {" · "}Self-employed{" · "}2025 - Present
          </span>
        </p>
      </div>
    </section>
  );
}
