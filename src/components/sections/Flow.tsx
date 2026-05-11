import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

type Step = {
  title: string;
  body: string;
  link?: { href: string; label: string };
};

const STEPS: Step[] = [
  {
    title: "ご相談",
    body: "「この音源でいいのか」「自分に合った楽曲は？」「録音の仕方は？」など、完全初心者の方から、上級者の方の細かいディレクションまで、お気軽にご相談いただけます。",
  },
  {
    title: "ご依頼受付・お見積もり",
    body: "フォームからのご依頼でも、直接DMでも構いません。フォームをご利用いただくと、ヒアリングシートで意図やご希望を丁寧に伺ったうえで進めます。",
    link: { href: "https://forms.gle/wZskn2r85vem6jmQ7", label: "フォームはこちら →" },
  },
  {
    title: "お振込み・着手",
    body: "ご依頼内容を確定し、お振込みのご確認後にエンジニアが制作に着手します。",
  },
  {
    title: "Editチェック",
    body: "音質の補整、音程・タイミングを補正したMix前の音源をご確認いただきます。フレーズの微細な箇所までこの段階でご確認いただけます。",
  },
  {
    title: "Mix初稿納品",
    body: "音の質感など、いわゆるMixとマスタリングをした音源をお渡しします。用語が分からなくても、感覚的な修正ご指摘で大丈夫です。もちろん細かいご指摘もお受けします。Editチェックで気付かれなかった箇所のご指摘も可能です。修正回数は無制限・無料です。",
  },
  {
    title: "納品",
    body: "ご納得いただける仕上がりを最終データとしてお渡しし、納品となります。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="section px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionHeader eyebrow="Flow" title="ご依頼の流れ" />
        </Reveal>

        <ol className="space-y-12">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={i} delay={i * 60}>
              <div className="flex gap-6 md:gap-10 items-start">
                <span className="text-xs tracking-[0.3em] text-[color:var(--accent)] pt-1 min-w-[3.5rem]">
                  STEP {String(i).padStart(2, "0")}
                </span>
                <div className="flex-1 border-l border-[rgba(26,26,26,0.1)] pl-6 md:pl-8 pb-2">
                  <h3 className="text-lg font-normal mb-3">{s.title}</h3>
                  <p className="text-sm text-[color:var(--sub)] leading-[1.9]">{s.body}</p>
                  {s.link && (
                    <a
                      href={s.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm tracking-[0.2em] text-[color:var(--accent)] hover:opacity-70 transition-opacity"
                    >
                      {s.link.label}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-20 pt-12 border-t border-[rgba(26,26,26,0.08)] text-center">
            <div className="mb-10" aria-hidden="true" />
            <a
              href="https://forms.gle/wZskn2r85vem6jmQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 text-sm tracking-[0.3em] bg-[color:var(--accent)] text-white border border-[color:var(--accent)] hover:bg-[#C66A22] hover:border-[#C66A22] transition-colors duration-300"
            >
              実際に依頼をする
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
