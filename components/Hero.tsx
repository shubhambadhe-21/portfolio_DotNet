"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import Counter from "./Counter";
import { stats } from "@/lib/data";

const jsonLines = [
  { k: '"name"', v: `"Shubham Madhav Badhe"` },
  { k: '"role"', v: `"Software Developer"` },
  { k: '"stack"', v: `[".NET Core", "C#", "React JS", "SQL Server"]` },
  { k: '"experience"', v: `"2+ years"` },
  { k: '"status"', v: `"open_to_opportunities"` },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Blueprint grid backdrop */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />

      {/* Floating ambient shapes */}
      <motion.div
        className="absolute -top-20 right-[8%] h-72 w-72 rounded-full bg-amber/10 blur-3xl animate-float-slow"
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-10 left-[6%] h-64 w-64 rounded-full bg-signal-cyan/10 blur-3xl animate-float"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8">
        {/* Left: copy */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-paper-line dark:border-white/10 bg-white/60 dark:bg-white/5 px-3.5 py-1.5 font-mono text-[12px] text-ink-600 dark:text-ink-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new roles &middot; Mumbai, IN
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance font-display text-[13vw] leading-[0.95] tracking-tight text-ink-950 dark:text-white sm:text-6xl lg:text-[3.6rem]"
          >
            {profile.name.split(" ")[0]}{" "}
            <span className="text-ink-400 dark:text-ink-400">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 font-display text-xl text-amber sm:text-2xl"
          >
            Backend-focused Software Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 max-w-lg text-balance text-[15px] leading-relaxed text-ink-600 dark:text-ink-300"
          >
            {profile.objective}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resumeFile}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 font-mono text-[13px] font-medium text-ink-950 shadow-lg shadow-amber/20 transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-paper-line dark:border-white/15 px-5 py-3 font-mono text-[13px] text-ink-800 dark:text-ink-100 transition-colors hover:border-amber/60"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper-line dark:border-white/15 text-ink-700 dark:text-ink-200 transition-colors hover:border-amber/60 hover:text-amber"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Animated stat counters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-12 grid max-w-lg grid-cols-4 gap-4 border-t border-paper-line dark:border-white/10 pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-semibold text-ink-950 dark:text-white sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[11px] leading-tight text-ink-500 dark:text-ink-400">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: signature element — live API console + framed photo */}
        <div className="relative flex flex-col items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="corner-frame relative mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-2xl border border-paper-line dark:border-white/10 shadow-2xl shadow-black/10"
          >
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 80vw, 320px"
              className="object-cover grayscale-[8%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent p-4">
              <p className="font-mono text-[11px] text-white/90">
                Ghatkopar, Mumbai, IN
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-[340px] overflow-hidden rounded-xl border border-white/10 bg-ink-950 shadow-2xl shadow-black/30"
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-2 font-mono text-[11px] text-ink-400">
                profile.api.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 text-ink-200">
              <code>
                <span className="text-signal-cyan">const</span>{" "}
                <span className="text-amber">profile</span> = {"{"}
                {"\n"}
                {jsonLines.map((l, i) => (
                  <span key={l.k}>
                    {"  "}
                    <span className="text-[#F0AC5F]">{l.k}</span>
                    <span className="text-ink-500">: </span>
                    <span className="text-emerald-300">{l.v}</span>
                    {i < jsonLines.length - 1 ? "," : ""}
                    {"\n"}
                  </span>
                ))}
                {"}"}
                <span className="animate-blink text-white">▍</span>
              </code>
            </pre>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-[11px] text-ink-400 sm:flex"
        aria-label="Scroll to about section"
      >
        <span>scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
