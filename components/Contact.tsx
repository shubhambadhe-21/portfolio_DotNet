"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass = (hasError?: string) =>
    `w-full rounded-xl border bg-white/70 dark:bg-white/5 px-4 py-3 text-[14px] text-ink-900 dark:text-ink-50 placeholder:text-ink-400 outline-none transition-colors ${
      hasError
        ? "border-red-400 focus:border-red-400"
        : "border-paper-line dark:border-white/10 focus:border-amber"
    }`;

  return (
    <section id="contact" className="relative scroll-mt-28 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="§07 — CONTACT"
          title="Let's build something reliable."
          description="Open to new opportunities — reach out directly or send a message below."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-4">
            {[
              { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
              {
                icon: Linkedin,
                label: profile.linkedinLabel,
                href: profile.linkedin,
              },
              { icon: MapPin, label: "Ghatkopar, Mumbai, India", href: undefined },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 rounded-xl border border-paper-line dark:border-white/10 bg-white/40 dark:bg-white/[0.03] p-4 transition-colors ${
                  item.href ? "hover:border-amber/40 cursor-pointer" : "cursor-default"
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="break-all text-[13.5px] text-ink-700 dark:text-ink-200">
                  {item.label}
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    Name
                  </label>
                  <input
                    id="name"
                    value={values.name}
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={inputClass(errors.name)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-[12px] text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={inputClass(errors.email)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-[12px] text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  placeholder="Tell me a bit about the role or project…"
                  className={inputClass(errors.message)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-[12px] text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-mono text-[13px] font-medium text-ink-950 shadow-lg shadow-amber/20"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Opening mail client…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </motion.button>
              <p className="mt-3 text-[12px] text-ink-400">
                Sends via your default email app, addressed to {profile.email}.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
