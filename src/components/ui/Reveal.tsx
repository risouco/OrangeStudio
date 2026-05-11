"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  delay?: number;
};

export default function Reveal({ children, className = "", as: Tag = "div", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref} className={`fade-in ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Comp>
  );
}
