import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-paper dark:bg-ink-950 px-6 text-center">
      <div className="bg-grid-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
      <p className="relative font-mono text-sm text-amber">HTTP 404</p>
      <h1 className="relative mt-3 font-display text-6xl font-bold text-ink-950 dark:text-white sm:text-7xl">
        Route not found
      </h1>
      <p className="relative mt-4 max-w-md text-[15px] text-ink-500 dark:text-ink-300">
        The endpoint you requested doesn&apos;t exist on this server. Let&apos;s
        get you back to something that resolves.
      </p>
      <Link
        href="/"
        className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-mono text-[13px] font-medium text-ink-950 shadow-lg shadow-amber/20"
      >
        Return home
      </Link>
    </main>
  );
}
