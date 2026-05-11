import Link from "next/link";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export const revalidate = 60;

const CARDS = [
  {
    href: "/plans",
    eyebrow: "Plans",
    title: "プランのご案内",
    body: "ご用意しているプランの一覧。",
  },
  {
    href: "/flow",
    eyebrow: "Flow",
    title: "ご依頼の流れ",
    body: "ご相談から納品までのステップ。",
  },
  {
    href: "/works",
    eyebrow: "Works",
    title: "制作実績",
    body: "これまでに手がけた動画。",
  },
  {
    href: "/news",
    eyebrow: "News",
    title: "お知らせ",
    body: "更新情報や告知。",
  },
  {
    href: "/contact",
    eyebrow: "Contact",
    title: "お問い合わせ",
    body: "ご依頼・ご相談はこちら。",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Approach />
      <section className="section px-6 border-t border-[rgba(26,26,26,0.06)]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeader eyebrow="Index" title="ページのご案内" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {CARDS.map((c, i) => (
              <Reveal key={c.href} delay={i * 60}>
                <Link
                  href={c.href}
                  className="group block h-full border border-[rgba(26,26,26,0.08)] bg-white/40 px-7 py-8 hover:border-[color:var(--accent)] transition-colors duration-300"
                >
                  <p className="text-xs tracking-[0.4em] uppercase text-[color:var(--accent)] mb-4">
                    {c.eyebrow}
                  </p>
                  <h3 className="text-base md:text-lg font-normal tracking-wide mb-3">
                    {c.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[color:var(--sub)] leading-[1.9] mb-8">
                    {c.body}
                  </p>
                  <span className="text-xs tracking-[0.3em] text-[color:var(--sub)] group-hover:text-[color:var(--accent)] transition-colors">
                    詳しく見る →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
