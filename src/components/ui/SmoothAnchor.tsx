"use client";

import { ReactNode, MouseEvent } from "react";

type Props = {
  targetId: string;
  duration?: number;
  offset?: number;
  className?: string;
  children: ReactNode;
};

const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function SmoothAnchor({
  targetId,
  duration = 1400,
  offset = 80,
  className,
  children,
}: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;
    const startY = window.scrollY;
    const targetY = el.getBoundingClientRect().top + window.scrollY - offset;
    const distance = targetY - startY;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    if (history.replaceState) {
      history.replaceState(null, "", `#${targetId}`);
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
