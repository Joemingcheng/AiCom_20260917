"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  speed?: number;
  className?: string;
  children: ReactNode;
  /** true = element is position:fixed and should drift by raw scroll position (for background layers) */
  fixed?: boolean;
};

export function Parallax({ speed = 0.15, className, children, fixed = false }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const update = () => {
      if (fixed) {
        el.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
      } else {
        const rect = el.getBoundingClientRect();
        const delta = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translate3d(0, ${delta * speed}px, 0)`;
      }
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed, fixed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
