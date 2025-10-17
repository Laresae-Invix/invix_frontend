// src/components/Reveal.tsx
import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** animate once (default: true). set false kalau mau hide lagi saat keluar viewport */
  once?: boolean;
  /** offset memicu animasi (contoh: "0px 0px -10% 0px") */
  rootMargin?: string;
  /** arah masuk: up | down | left | right */
  direction?: "up" | "down" | "left" | "right";
  /** tambahan delay ms */
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  once = true,
  rootMargin = "0px 0px -10% 0px",
  direction = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // hormati preferensi user
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { root: null, threshold: 0.15, rootMargin }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [once, rootMargin]);

  const translateClass =
    direction === "up"
      ? "translate-y-6"
      : direction === "down"
      ? "-translate-y-6"
      : direction === "left"
      ? "translate-x-6"
      : " -translate-x-6";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "will-change-transform will-change-opacity",
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translateClass}`,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
