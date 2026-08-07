"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Oversized rep-scheme numeral. On entering the viewport it rolls up like a
 * rep counter — the ONLY motion on the page attaches to numbers.
 * Respects prefers-reduced-motion by rendering the target instantly.
 */
export default function RepNumeral({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Lazy init reads the media query during render, not inside the effect —
  // reduced-motion users start already "settled" so no roll-up ever plays.
  const [settled, setSettled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || settled) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSettled(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [settled]);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`inline-block will-change-transform transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        settled ? "translate-y-0 opacity-100" : "translate-y-[0.4em] opacity-0"
      } ${className}`}
    >
      {value}
    </span>
  );
}
