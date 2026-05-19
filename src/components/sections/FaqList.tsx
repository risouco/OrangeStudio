"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import type { FAQ } from "@/types/cms";

type Props = {
  faqs: FAQ[];
};

export default function FaqList({ faqs }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-[rgba(26,26,26,0.08)] border-y border-[rgba(26,26,26,0.08)]">
      {faqs.map((f, i) => {
        const isOpen = openId === f.id;
        return (
          <Reveal key={f.id} delay={i * 40}>
            <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : f.id)}
                className="w-full text-left cursor-pointer flex items-start gap-4 py-6"
              >
                <span className="text-[color:var(--accent)] text-sm tracking-wider mt-0.5">
                  Q
                </span>
                <span className="flex-1 text-base font-normal leading-[1.7]">
                  {f.question || "—"}
                </span>
                <span className="faq-caret text-[color:var(--accent)] text-xs mt-1">
                  +
                </span>
              </button>
              <div className="faq-content" aria-hidden={!isOpen}>
                <div>
                  <div className="pl-7 md:pl-9 pb-6">
                    <p className="text-sm text-[color:var(--sub)] leading-[1.9]">
                      {f.answer || "—"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
