import { Calendar, Mail, ArrowUpRight } from "lucide-react";
import { userData } from "../data/user.ts";

export function Contact() {
  return (
    <section id="contact" className="py-7 border-b border-stone-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Contact
        </h2>
        <span className="text-[11px] font-mono text-stone-400">
          Get in Touch
        </span>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-stone-700 leading-relaxed font-normal">
          I'm interested in early-stage startup and founding-engineer work. The
          fastest way to reach me is email. For a longer conversation, book time
          on Topmate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Email */}
          <a
            href={userData.socials.email}
            className="p-3.5 rounded-lg border border-stone-200/90 bg-stone-100/30 hover:bg-stone-100 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-md bg-stone-200/60 flex items-center justify-center text-stone-700 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-xs font-medium text-stone-900">
                  Email
                </div>
                <div className="text-[11px] font-mono text-stone-500 truncate">
                  {userData.contact.email}
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors shrink-0" />
          </a>

          {/* Topmate */}
          <a
            href={userData.contact.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-lg border border-stone-200/90 bg-stone-100/30 hover:bg-stone-100 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-stone-200/60 flex items-center justify-center text-stone-700">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-stone-900">
                  Topmate
                </div>
                <div className="text-[11px] font-mono text-stone-500">
                  Schedule a 1:1 call
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
