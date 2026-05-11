"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
};

export default function HeadingUnderline({ className = "" }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
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
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`heading-underline ${visible ? "is-visible" : ""} ${className}`}
    />
  );
}
