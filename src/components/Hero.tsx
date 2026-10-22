import { Github, Linkedin, Youtube, Calendar, Mail, ArrowUpRight } from "lucide-react";
import { HeroIntro } from "./HeroIntro";
import { userData } from "../data/user.ts";
import { WireframeBlocks } from "./WireframeBlocks.tsx";

// Clean custom X (formerly Twitter) icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero" className="pt-6 sm:pt-10 pb-8 border-b border-stone-200">
      <HeroIntro />

      <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
        {/* Left column: Name, Role, Line, CTAs, Socials */}
        <div className="flex-1 space-y-4">
          {/* Avatar and Name row */}
          <div className="flex items-center gap-3.5">
            <div
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-stone-100 border border-stone-300 flex items-center justify-center shrink-0 shadow-xs"
              aria-label="Nitish Yeluru avatar"
            >
              {userData.hero.photoUrl ? (
                <img
                  src={userData.hero.photoUrl}
                  alt={userData.name}
                  width={96}
                  height={96}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-[68%_center]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-900 font-mono font-bold text-sm tracking-tighter select-none">
                  NY
                </div>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-900">
              Nitish Yeluru - Full-Stack &amp; GenAI Engineer
            </h1>
          </div>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
            I build AI products and full-stack systems that solve real
            problems. Open to remote engineering roles, including US-based
            teams.
          </p>

          {/* Primary actions */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href={userData.socials.email}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-md bg-stone-900 text-stone-50 hover:bg-stone-700 border border-stone-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email me</span>
            </a>
            <a
              href={userData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-md bg-transparent text-stone-900 hover:bg-stone-100 border border-stone-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Secondary social links */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <a
              href={userData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (yeluru-nitish)"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-stone-100 text-stone-700 hover:text-stone-950 hover:bg-stone-200/80 border border-stone-200/80 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={userData.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X profile (@Vibe_User)"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-stone-100 text-stone-700 hover:text-stone-950 hover:bg-stone-200/80 border border-stone-200/80 transition-colors"
            >
              <XIcon className="w-3.5 h-3.5" />
              <span>X</span>
            </a>

            <a
              href={userData.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube (@buildwithnitish)"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-stone-100 text-stone-700 hover:text-stone-950 hover:bg-stone-200/80 border border-stone-200/80 transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>

            <a
              href={userData.contact.topmate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Topmate 1:1 sessions"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-stone-100 text-stone-700 hover:text-stone-950 hover:bg-stone-200/80 border border-stone-200/80 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Topmate</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Right column: Original isometric wireframe blocks */}
        <div className="shrink-0 mx-auto sm:mx-0">
          <WireframeBlocks />
        </div>
      </div>
    </section>
  );
}
