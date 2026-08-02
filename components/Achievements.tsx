import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { achievements, extraCurricular } from "@/lib/data";
import { Award, Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative scroll-mt-28 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="§05 — ACHIEVEMENTS" title="Recognition & pursuits." />

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((a) => (
            <Reveal key={a.title} className="corner-frame rounded-2xl border border-amber/30 bg-gradient-to-br from-amber/10 to-transparent p-7">
              <Award className="mb-4 h-6 w-6 text-amber" />
              <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-white">
                {a.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-600 dark:text-ink-300">
                {a.description}
              </p>
            </Reveal>
          ))}

          {extraCurricular.map((e) => (
            <Reveal key={e.title} delay={0.08} className="corner-frame rounded-2xl border border-signal-cyan/30 bg-gradient-to-br from-signal-cyan/10 to-transparent p-7">
              <Trophy className="mb-4 h-6 w-6 text-signal-cyan" />
              <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-white">
                {e.title}
              </h3>
              <p className="mt-2 font-mono text-[13px] text-ink-500 dark:text-ink-400">
                {e.period}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
