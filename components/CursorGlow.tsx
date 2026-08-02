"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || !isFinePointer || !ref.current) return;

    const el = ref.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf: number;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const render = () => {
      el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      raf = requestAnimationFrame(render);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[400px] w-[400px] rounded-full opacity-[0.06] blur-3xl md:block"
      style={{
        background:
          "radial-gradient(circle, #D98E3F 0%, #4F9DDE 45%, transparent 70%)",
      }}
    />
  );
}
