import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-28 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="§06 — EDUCATION" title="Academic foundation." />

        <div className="space-y-4">
          {education.map((ed) => (
            <Reveal
              key={ed.program}
              className="glass flex flex-col justify-between gap-3 rounded-2xl p-7 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber/10 text-amber">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-white">
                    {ed.program}
                  </h3>
                  <p className="text-[13.5px] text-ink-500 dark:text-ink-300">
                    {ed.institution}
                  </p>
                </div>
              </div>
              <span className="w-fit rounded-full border border-paper-line dark:border-white/10 px-3 py-1.5 font-mono text-[12px] text-ink-500 dark:text-ink-300">
                {ed.period}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
