"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-28 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="§03 — SKILLS"
          title="The toolkit behind the delivery."
          description="Organized the way I actually reach for it on the job — languages, frameworks, data, and the practices that keep it all shippable."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={(i % 3) * 0.08}
              className="group rounded-2xl border border-paper-line dark:border-white/10 bg-white/40 dark:bg-white/[0.03] p-6 transition-colors hover:border-amber/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-mono text-[12px] uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  {group.label}
                </h3>
                <span className="font-mono text-[11px] text-ink-400">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mb-4 h-[3px] w-full overflow-hidden rounded-full bg-paper-line dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-amber to-signal-cyan"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-paper-line dark:border-white/10 bg-white/70 dark:bg-white/5 px-2.5 py-1 font-mono text-[12px] text-ink-700 dark:text-ink-200 transition-colors group-hover:border-amber/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
