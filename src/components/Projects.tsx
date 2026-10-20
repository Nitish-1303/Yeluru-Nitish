"use client";

import { ExternalLink } from "lucide-react";
import { ProjectVideo } from "./ProjectVideo";

type FeaturedProject = {
  id: string;
  title: string;
  badge: string;
  logo: string;
  logoAlt: string;
  video: string;
  videoNote: string;
  description: string;
  links: { label: string; href: string }[];
};

// Logos are each project's real logo/favicon, served from public/logos/.
// CipherBill's README embed URL 404s while the repo is private, so its video
// is served from the site itself: public/videos/cipherbill-walkthrough.mp4.
const featuredProjects: FeaturedProject[] = [
  {
    id: "migma",
    title: "Migma x Spotify - Music Campaign Automator",
    badge: "Concept demo",
    logo: "/logos/migma-icon.webp",
    logoAlt: "Migma logo",
    video: "/videos/migma-demo.mp4",
    videoNote: "1:10 demo, with narration",
    description:
      "A Spicetify plugin concept for a gap Migma does not cover: artists cannot email the audience Spotify owns. It turns a playlist, track, show or artist roster into a ready-to-send Migma campaign without leaving the client. Three pieces: a TypeScript custom app, a zero-dependency Node proxy that holds the Migma key and swaps the Spotify session for a scoped one, and a live storyboard. All six campaign types reuse Migma's generate-and-poll pipeline; everything except final generation runs on the real Spotify API, the one spot no API covers is marked MOCK, and the proxy and client ship test suites. Concept demo, not an official Migma product.",
    links: [
      { label: "Live storyboard", href: "https://migma-wireframe.vercel.app/" },
      { label: "Repository", href: "https://github.com/Nitish-1303/Migma" },
    ],
  },
  {
    id: "cipherbill",
    title: "CipherBill",
    badge: "Privacy payments",
    logo: "/logos/cipherbill-icon.svg",
    logoAlt: "CipherBill logo",
    video: "/videos/cipherbill-walkthrough.mp4",
    videoNote: "1:27 walkthrough, with narration and captions",
    description:
      "Privacy-first invoicing and a private-payment workspace on Starknet: a console of 20 switchable modules covering invoicing, treasury, risk and operations, plus an auditor disclosure viewer. Built with Next.js, TypeScript and Starknet.js for the STRK20 Private Sprint. Nothing executes on-chain until a wallet signs.",
    links: [{ label: "Live app", href: "https://cipher-bill.vercel.app/" }],
  },
  {
    id: "healthychef",
    title: "HealthyChef",
    badge: "Invoicing",
    logo: "/logos/healthychef-favicon.svg",
    logoAlt: "HealthyChef logo",
    video:
      "https://github.com/user-attachments/assets/592aa415-398f-4587-8baf-85e5a41b1f10",
    videoNote: "1:40 walkthrough, with narration and captions",
    description:
      "Invoicing, pantry and payment tracking for meal-prep and nutrition businesses, replacing the chat-and-spreadsheet order flow. Invoices build from reusable pantry items with GST and discounts calculated server-side; the server assigns sequential invoice numbers and revenue counts paid invoices only. Single-user login with constant-time password checks, lockout after five failures and signed HttpOnly sessions, plus a read-only demo mode over fake data. Express API as one Vercel serverless function; SQLite locally, a private Vercel Blob in production.",
    links: [
      { label: "Live app", href: "https://healthy-chef-ruddy.vercel.app" },
      { label: "Repository", href: "https://github.com/Nitish-1303/HealthyChef" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-7 border-b border-stone-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-stone-600">
          Projects
        </h2>
        <span className="text-[11px] font-mono text-stone-600">
          Building & Publishing
        </span>
      </div>

      {/* Featured projects: logo, video, description, live + repo links */}
      <div className="space-y-4">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-stone-200 bg-white/70 p-4 sm:p-5 space-y-3"
          >
            <div className="flex items-center gap-2.5 flex-wrap">
              <img
                src={project.logo}
                alt={project.logoAlt}
                className="w-8 h-8 rounded-md border border-stone-200/80 object-contain bg-white"
                loading="lazy"
              />
              <h3 className="text-base sm:text-lg font-semibold text-stone-900">
                {project.title}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-200/80 text-stone-600">
                {project.badge}
              </span>
            </div>

            <div className="space-y-1">
              <ProjectVideo
                src={project.video}
                poster={`/videos/posters/${project.id}.jpg`}
              />
              <p className="text-[11px] font-mono text-stone-600">
                {project.videoNote}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs font-mono">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-900 hover:underline underline-offset-4 decoration-stone-400 transition-colors"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
