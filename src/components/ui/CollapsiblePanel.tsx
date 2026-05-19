"use client";

import { ReactNode, useState } from "react";

type Props = {
  summary: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export default function CollapsiblePanel({
  summary,
  children,
  defaultOpen = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`faq-item border-t border-b border-[rgba(26,26,26,0.08)] ${
        isOpen ? "is-open" : ""
      }`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between cursor-pointer py-5 text-left"
      >
        <span className="text-sm tracking-[0.2em] text-[color:var(--fg)]">
          {summary}
        </span>
        <span className="faq-caret text-[color:var(--accent)] text-lg leading-none">
          +
        </span>
      </button>
      <div className="faq-content" aria-hidden={!isOpen}>
        <div>
          <div className="pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
