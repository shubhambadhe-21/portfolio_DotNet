"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";
import { Github, ExternalLink, Layers } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-28 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="§04 — PROJECTS"
          title="Featured builds."
          description="Two production systems that shaped how I think about architecture, data, and shipping under real constraints."
        />

        <div className="space-y-10">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <article
                id={project.slug}
                className="grid scroll-mt-28 gap-0 overflow-hidden rounded-3xl border border-paper-line dark:border-white/10 lg:grid-cols-2"
              >
                {/* Architecture / system overview panel */}
                <div
                  className={`relative flex min-h-[320px] flex-col justify-between bg-ink-950 p-8 sm:p-10 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,black,transparent)]" />
                  <div className="relative flex items-center gap-2 font-mono text-[11px] text-ink-400">
                    <Layers className="h-3.5 w-3.5 text-signal-cyan" />
                    System overview
                  </div>

                  <div className="relative mt-6 flex flex-1 flex-col justify-center gap-3">
                    {project.features.slice(0, 5).map((f, idx) => (
                      <motion.div
                        key={f}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.06, duration: 0.5 }}
                        className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5"
                      >
                        <span className="font-mono text-[11px] text-amber">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[13px] text-ink-200">{f}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-ink-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Copy panel */}
                <div className="flex flex-col justify-center bg-white/50 dark:bg-white/[0.02] p-8 sm:p-10">
                  <p className="font-mono text-[12px] text-amber">
                    0{i + 1} / {String(projects.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink-950 dark:text-white sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-[14px] text-ink-500 dark:text-ink-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 text-[14.5px] leading-relaxed text-ink-600 dark:text-ink-300">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-ink-400">
                      Highlights
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-[13.5px] leading-relaxed text-ink-600 dark:text-ink-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-ink-950 dark:bg-white px-4 py-2.5 font-mono text-[12px] text-white dark:text-ink-950"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-paper-line dark:border-white/10 px-4 py-2.5 font-mono text-[12px] text-ink-400">
                        <Github className="h-3.5 w-3.5" />
                        Private repository
                      </span>
                    )}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-paper-line dark:border-white/15 px-4 py-2.5 font-mono text-[12px] text-ink-800 dark:text-ink-100 transition-colors hover:border-amber/60"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-paper-line dark:border-white/10 px-4 py-2.5 font-mono text-[12px] text-ink-400">
                        Internal / enterprise system
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
