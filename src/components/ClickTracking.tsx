"use client";

import { useEffect } from "react";

type Op = (method: string, name: string, props?: Record<string, string>) => void;

// Sorts a clicked link into an event name. Matches on the href, so the page
// markup and its look stay as they are.
function classify(a: HTMLAnchorElement): { name: string; props: Record<string, string> } | null {
  const href = a.getAttribute("href") ?? "";
  if (href.startsWith("mailto:")) return { name: "contact_email_click", props: {} };
  if (/\.pdf($|\?)/i.test(href)) return { name: "resume_download", props: { href } };
  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }
  if (url.origin === window.location.origin) return null;
  const host = url.hostname.replace(/^www\./, "");
  const target = `${host}${url.pathname}`;
  if (host === "linkedin.com") return { name: "contact_linkedin_click", props: { target } };
  if (host === "topmate.io") return { name: "contact_topmate_click", props: { target } };
  if (host === "github.com") {
    const inProjects = !!a.closest("#projects");
    return { name: inProjects ? "project_repo_click" : "github_click", props: { target } };
  }
  if (a.closest("#projects")) return { name: "project_demo_click", props: { target } };
  return { name: "external_link_click", props: { target } };
}

/**
 * Sends link-click events to OpenPanel. It does nothing unless OpenPanel is
 * configured (window.op exists only then). See docs/ANALYTICS.md.
 */
export function ClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const op = (window as unknown as { op?: Op }).op;
      if (!op) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const ev = classify(a);
      if (ev) op("track", ev.name, ev.props);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
