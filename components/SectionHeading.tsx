import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-3 font-mono text-[12px] text-amber">
        <span className="h-px w-8 bg-amber/60" />
        {index}
      </div>
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">
          {description}
        </p>
      )}
    </Reveal>
  );
}
