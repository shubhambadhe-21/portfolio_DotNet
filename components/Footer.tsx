import { Linkedin, Mail, Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-paper-line dark:border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-[12px] text-ink-400">
            Software Developer &middot; Mumbai, India
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-line dark:border-white/10 text-ink-600 dark:text-ink-300 transition-colors hover:border-amber/50 hover:text-amber"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-line dark:border-white/10 text-ink-600 dark:text-ink-300 transition-colors hover:border-amber/50 hover:text-amber"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeFile}
            download
            className="flex items-center gap-2 rounded-full border border-paper-line dark:border-white/10 px-4 py-2.5 font-mono text-[12px] text-ink-700 dark:text-ink-200 transition-colors hover:border-amber/50"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-[11px] text-ink-400">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
