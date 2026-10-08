"use client";

import { useEffect, useState } from "react";
import { Copy, Check, Clock, MapPin, Briefcase } from "lucide-react";
import { userData } from "../data/user.ts";

export function Overview() {
  const [istTime, setIstTime] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [copyError, setCopyError] = useState<boolean>(false);

  // Hydration-safe live IST clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-IN", {
          timeZone: userData.location.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setIstTime(formatted);
      } catch (err) {
        // Fallback for unexpected locale/timezone issue
        setIstTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(userData.contact.email);
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      // Fallback if clipboard API is disallowed
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <section id="overview" className="py-7 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Overview
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Status & Presence
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Status card */}
        <div className="p-3.5 rounded-lg border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100/40 dark:bg-neutral-900/40 space-y-2">
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px] uppercase tracking-wider">Role & Affiliation</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-md bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
              <span className="w-4 h-4 rounded-sm bg-white p-0.5 shrink-0">
                <img src="/logos/stealth.png" alt="" aria-hidden="true" className="w-full h-full object-contain" />
              </span>
              {userData.status.founderRole}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-md bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              <span className="w-4 h-4 rounded-sm bg-white p-0.5 shrink-0">
                <img src="/logos/alignerr.png" alt="" aria-hidden="true" className="w-full h-full object-contain" />
              </span>
              {userData.status.pastRole}
            </span>
          </div>
        </div>

        {/* Location & Time card */}
        <div className="p-3.5 rounded-lg border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100/40 dark:bg-neutral-900/40 space-y-2">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Location & Time</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
              <Clock className="w-3 h-3" />
              <span>{istTime ? `${istTime} IST` : "IST"}</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 pt-0.5">
            {userData.location.display}
          </p>
        </div>
      </div>

      {/* Email Copy Bar */}
      <div className="mt-3 p-3 rounded-lg border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100/30 dark:bg-neutral-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">Contact:</span>
          <span className="text-xs sm:text-sm font-mono text-neutral-800 dark:text-neutral-200 select-all">
            {userData.contact.email}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopyEmail}
          className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-md border transition-all cursor-pointer ${
            copied
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
              : copyError
              ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
              : "bg-neutral-50 dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-600"
          }`}
          aria-label="Copy email address to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied!</span>
            </>
          ) : copyError ? (
            <span>Could not copy</span>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
