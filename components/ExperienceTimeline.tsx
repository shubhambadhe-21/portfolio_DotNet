"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-28 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="§02 — EXPERIENCE"
          title="Where I've built."
          description="Two years of hands-on delivery across the .NET stack — from data modeling to production deployment."
        />

        <div className="relative ml-2 border-l border-dashed border-paper-line dark:border-white/15 sm:ml-4">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative pb-2 pl-8 sm:pl-10">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 }}
                className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber ring-4 ring-paper dark:ring-ink-950"
              >
                <Briefcase className="h-2.5 w-2.5 text-ink-950" />
              </motion.span>

              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink-950 dark:text-white">
                    {job.role}
                  </h3>
                  <span className="rounded-full border border-amber/40 bg-amber/10 px-3 py-1 font-mono text-[11px] text-amber-dark dark:text-amber-light">
                    {job.start} — {job.end}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[13px] text-ink-500 dark:text-ink-300">
                  {job.company} &middot; {job.location}
                </p>

                <ul className="mt-5 space-y-3">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-[14.5px] leading-relaxed text-ink-600 dark:text-ink-200"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
