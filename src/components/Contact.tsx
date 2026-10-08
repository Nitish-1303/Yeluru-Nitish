import { Mail, Calendar, ArrowUpRight } from "lucide-react";
import { userData } from "../data/user.ts";

export function Contact() {
  return (
    <section id="contact" className="py-7 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Contact
        </h2>
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Get in Touch
        </span>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
          Feel free to reach out directly via email for engineering inquiries or book time on Topmate for a conversation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Email button */}
          <a
            href={`mailto:${userData.contact.email}`}
            className="p-3.5 rounded-lg border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100/30 dark:bg-neutral-900/30 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-neutral-200/60 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                  Email
                </div>
                <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  {userData.contact.email}
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          </a>

          {/* Topmate button */}
          <a
            href={userData.contact.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-lg border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100/30 dark:bg-neutral-900/30 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-neutral-200/60 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                  Topmate
                </div>
                <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  Schedule a 1:1 call
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
