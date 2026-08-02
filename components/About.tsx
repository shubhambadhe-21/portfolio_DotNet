import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, languages } from "@/lib/data";
import { MapPin, Phone, Mail, Languages as LanguagesIcon } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Location", value: "Ghatkopar, Mumbai, India" },
  { icon: Phone, label: "Phone", value: profile.phone },
  { icon: Mail, label: "Email", value: profile.email },
  { icon: LanguagesIcon, label: "Languages", value: languages.join(", ") },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-28 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="§01 — ABOUT"
          title="Ships production code, not prototypes."
          description="A closer look at how I approach building software — and the fundamentals I bring to every sprint."
        />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.05} className="glass rounded-2xl p-8 sm:p-10">
            <p className="text-balance text-[16px] leading-[1.8] text-ink-700 dark:text-ink-200">
              {profile.objective}
            </p>
            <p className="mt-5 text-[15px] leading-[1.8] text-ink-500 dark:text-ink-400">
              Currently building scalable web applications as a Software
              Developer at EPCPROMAN Pvt. Ltd., where I work across the full
              stack — from SQL Server data models and RESTful APIs to
              interactive Kendo UI front ends — while collaborating closely
              with QA and DevOps to ship reliable releases.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {facts.map((f) => (
              <div
                key={f.label}
                className="corner-frame rounded-xl border border-paper-line dark:border-white/10 bg-white/40 dark:bg-white/[0.03] p-5 transition-colors hover:border-amber/40"
              >
                <f.icon className="mb-3 h-4 w-4 text-amber" />
                <p className="font-mono text-[10px] uppercase tracking-wider text-ink-400">
                  {f.label}
                </p>
                <p className="mt-1 break-words text-[13.5px] font-medium text-ink-800 dark:text-ink-100">
                  {f.value}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
