import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const CARDS = [
  { href: "/plans", eyebrow: "Plans", title: "プランのご案内" },
  { href: "/flow", eyebrow: "Flow", title: "ご依頼の流れ" },
  { href: "/works", eyebrow: "Works", title: "制作実績" },
];

export default function QuickNav() {
  return (
    <section className="px-6 pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {CARDS.map((c, i) => (
            <Reveal key={c.href} delay={i * 80}>
              <Link
                href={c.href}
                className="group block h-full border border-[color:var(--accent)] bg-[rgba(224,122,44,0.06)] hover:bg-[rgba(224,122,44,0.14)] px-6 py-5 transition-colors duration-300"
              >
                <article className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-[color:var(--accent)] mb-1">
                      {c.eyebrow}
                    </p>
                    <h3 className="text-base md:text-lg font-normal tracking-wide text-[color:var(--fg)] truncate">
                      {c.title}
                    </h3>
                  </div>
                  <span className="text-[color:var(--accent)] text-xl leading-none group-hover:translate-x-1 transition-transform duration-300 shrink-0">
                    →
                  </span>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
