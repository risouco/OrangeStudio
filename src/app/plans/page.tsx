import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import Reveal from "@/components/ui/Reveal";
import SmoothAnchor from "@/components/ui/SmoothAnchor";

export const metadata: Metadata = {
  title: "Plans",
};

type PlanCard = {
  targetId: string;
  name: string;
  price: string;
  lead: string;
  comingSoon?: boolean;
  featured?: boolean;
};

const CARDS: PlanCard[] = [
  {
    targetId: "coupon",
    name: "回数券",
    price: "3回 / 5回 / 10回",
    lead: "複数本まとめてご依頼される方向けのパックです。",
  },
  {
    targetId: "basic",
    name: "基本フルコーラスMix",
    price: "¥18,000 / 曲",
    lead: "1曲まるごとを丁寧に仕上げる、基本のMixプランです。",
    featured: true,
  },
  {
    targetId: "short",
    name: "ShortMix",
    price: "準備中",
    lead: "1本のご依頼からセットプランまで。",
    comingSoon: true,
  },
];

export default function PlansPage() {
  return (
    <>
      <PageTitle
        eyebrow="Plans"
        title="プランのご案内"
        description="ご用意しているプランをまとめています。詳細は各プランの説明をご覧ください。"
      />

      <section id="plans" className="section px-6 bg-[rgba(201,104,60,0.03)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 md:items-stretch">
            {CARDS.map((c, i) => (
              <Reveal key={c.targetId} delay={i * 80}>
                <SmoothAnchor
                  targetId={c.targetId}
                  className={`group block h-full p-8 border border-[rgba(26,26,26,0.1)] transition-all duration-500 hover:border-[color:var(--accent)] ${
                    c.featured
                      ? "bg-[rgba(224,122,44,0.04)] shadow-[0_4px_14px_rgba(224,122,44,0.06)] hover:shadow-[0_6px_18px_rgba(224,122,44,0.12)]"
                      : "bg-white/60"
                  }`}
                >
                  <article className="h-full flex flex-col">
                    <h3 className="text-lg font-normal mb-3">
                      {c.name}
                      {c.comingSoon && (
                        <span className="ml-2 text-[10px] tracking-[0.3em] text-[color:var(--sub)] align-middle">
                          COMING SOON
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-[color:var(--sub)] leading-[1.9] mb-8 flex-1">
                      {c.lead}
                    </p>
                    <div className="border-t border-[rgba(26,26,26,0.08)] pt-4 flex items-end justify-between">
                      <p className={`text-base ${c.comingSoon ? "text-[color:var(--sub)]" : "text-[color:var(--accent)]"}`}>
                        {c.price}
                      </p>
                      <span className="text-xs tracking-[0.2em] text-[color:var(--accent)] group-hover:translate-x-1 transition-transform duration-300">
                        詳しく見る ↓
                      </span>
                    </div>
                  </article>
                </SmoothAnchor>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 各プランの説明ブロック */}
      <section className="section px-6">
        <div className="max-w-3xl mx-auto space-y-24">
          {/* 基本フルコーラスMix */}
          <Reveal>
            <article id="basic" className="scroll-mt-24">
              <p className="text-xs tracking-[0.4em] uppercase text-[color:var(--accent)] mb-4">
                Plan 01
              </p>
              <h2 className="text-2xl font-normal tracking-wide mb-8">
                基本フルコーラスMix
              </h2>

              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
                <div className="border-l border-[color:var(--accent)] pl-4">
                  <p className="text-[10px] tracking-[0.3em] text-[color:var(--sub)] mb-2">
                    PRICE
                  </p>
                  <p className="text-lg font-light text-[color:var(--accent)]">
                    ¥18,000
                  </p>
                  <p className="text-[11px] text-[color:var(--sub)] mt-1">
                    税込 / 1曲
                  </p>
                </div>
                <div className="border-l border-[color:var(--accent)] pl-4">
                  <p className="text-[10px] tracking-[0.3em] text-[color:var(--sub)] mb-2">
                    DELIVERY
                  </p>
                  <p className="text-lg font-light">
                    <span className="text-[color:var(--accent)]">10</span>日
                  </p>
                  <p className="text-[11px] text-[color:var(--sub)] mt-1">
                    納期目安
                  </p>
                </div>
                <div className="border-l border-[color:var(--accent)] pl-4">
                  <p className="text-[10px] tracking-[0.3em] text-[color:var(--sub)] mb-2">
                    REVISION
                  </p>
                  <p className="text-lg font-light">
                    <span className="text-[color:var(--accent)]">翌日</span>対応
                  </p>
                  <p className="text-[11px] text-[color:var(--sub)] mt-1">
                    回数無制限
                  </p>
                </div>
              </div>

              <p className="text-sm text-[color:var(--sub)] leading-[1.9] mb-6">
                ノイズ除去から音質の補整、Editing（ピッチ・タイミング補正）、ハモリ作成、Mixing、Masteringまで、1曲まるごとを丁寧に仕上げます。投稿プラットフォームに合わせた最終調整を行い、修正は翌日対応・回数無制限でお受けします。
              </p>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-[color:var(--sub)] mb-10">
                <li>・ノイズ除去</li>
                <li>・音質の補整</li>
                <li>・Editing</li>
                <li>・ハモリ作成</li>
                <li>・Mixing</li>
                <li>・Mastering</li>
                <li>・修正無制限</li>
              </ul>

              <details className="group border-t border-b border-[rgba(26,26,26,0.08)] py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-sm tracking-[0.2em] text-[color:var(--fg)]">
                    オプション一覧
                  </span>
                  <span className="text-[color:var(--accent)] text-lg leading-none transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-6 space-y-6 text-sm">
                  <ul className="space-y-3 text-[color:var(--sub)]">
                    <li className="flex justify-between gap-4 border-b border-[rgba(26,26,26,0.05)] pb-3">
                      <span>コラボ追加</span>
                      <span className="text-[color:var(--fg)] whitespace-nowrap">+¥5,000 / 名</span>
                    </li>
                    <li className="flex justify-between gap-4 border-b border-[rgba(26,26,26,0.05)] pb-3">
                      <span>ガイドメロディー作成</span>
                      <span className="text-[color:var(--fg)] whitespace-nowrap">¥2,000</span>
                    </li>
                    <li className="flex justify-between gap-4 border-b border-[rgba(26,26,26,0.05)] pb-3">
                      <span>メイン抜き音源</span>
                      <span className="text-[color:var(--fg)] whitespace-nowrap">¥1,000</span>
                    </li>
                    <li className="border-b border-[rgba(26,26,26,0.05)] pb-3">
                      <div className="flex justify-between gap-4">
                        <span>トラック追加</span>
                        <span className="text-[color:var(--fg)] whitespace-nowrap">¥500 〜</span>
                      </div>
                      <p className="text-[11px] text-[color:var(--sub)] leading-[1.7] mt-1.5">
                        メインボーカル＋ハモリトラック（メインと同量）まで無料、以降オプション料金となります。
                      </p>
                    </li>
                    <li className="flex justify-between gap-4 border-b border-[rgba(26,26,26,0.05)] pb-3">
                      <span>アカペラ音源</span>
                      <span className="text-[color:var(--fg)] whitespace-nowrap">¥1,000</span>
                    </li>
                    <li className="flex justify-between gap-4 pb-1">
                      <span>エンコード</span>
                      <span className="text-[color:var(--fg)] whitespace-nowrap">¥1,000</span>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--accent)] mb-3">
                      納期短縮
                    </p>
                    <ul className="space-y-3 text-[color:var(--sub)]">
                      <li className="flex justify-between gap-4 border-b border-[rgba(26,26,26,0.05)] pb-3">
                        <span className="pl-3">7日</span>
                        <span className="text-[color:var(--fg)] whitespace-nowrap">+¥3,000</span>
                      </li>
                      <li className="flex justify-between gap-4 border-b border-[rgba(26,26,26,0.05)] pb-3">
                        <span className="pl-3">5日</span>
                        <span className="text-[color:var(--fg)] whitespace-nowrap">+¥6,000</span>
                      </li>
                      <li className="flex justify-between gap-4 border-b border-[rgba(26,26,26,0.05)] pb-3">
                        <span className="pl-3">3日</span>
                        <span className="text-[color:var(--fg)] whitespace-nowrap">+¥10,000</span>
                      </li>
                      <li className="flex justify-between gap-4 pb-1">
                        <span className="pl-3">即日</span>
                        <span className="text-[color:var(--fg)] whitespace-nowrap">+¥13,000 〜</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </article>
          </Reveal>

          {/* 回数券 */}
          <Reveal>
            <article id="coupon" className="scroll-mt-24">
              <p className="text-xs tracking-[0.4em] uppercase text-[color:var(--accent)] mb-4">
                Plan 02
              </p>
              <h2 className="text-2xl font-normal tracking-wide mb-8">
                回数券
              </h2>

              <p className="text-sm text-[color:var(--sub)] leading-[1.9] mb-10">
                複数本まとめてご依頼される方向けのパックです。本数とご利用ペースに合わせて、3つの階層からお選びいただけます。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="border border-[rgba(26,26,26,0.08)] p-5">
                  <p className="text-xs tracking-[0.3em] text-[color:var(--accent)] mb-3">
                    LIGHT
                  </p>
                  <p className="text-base font-normal mb-1">3回</p>
                  <p className="text-lg font-light text-[color:var(--accent)] mb-2">
                    ¥42,000
                  </p>
                  <p className="text-[11px] text-[color:var(--sub)]">
                    有効期限 4ヶ月
                  </p>
                </div>
                <div className="border border-[rgba(26,26,26,0.08)] p-5">
                  <p className="text-xs tracking-[0.3em] text-[color:var(--accent)] mb-3">
                    MID
                  </p>
                  <p className="text-base font-normal mb-1">5回</p>
                  <p className="text-lg font-light text-[color:var(--accent)] mb-2">
                    ¥67,500
                  </p>
                  <p className="text-[11px] text-[color:var(--sub)]">
                    有効期限 8ヶ月
                  </p>
                </div>
                <div className="border border-[rgba(26,26,26,0.08)] p-5">
                  <p className="text-xs tracking-[0.3em] text-[color:var(--accent)] mb-3">
                    DEEP
                  </p>
                  <p className="text-base font-normal mb-1">10回</p>
                  <p className="text-lg font-light text-[color:var(--accent)] mb-2">
                    ¥130,000
                  </p>
                  <p className="text-[11px] text-[color:var(--sub)]">
                    有効期限 12ヶ月
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* shortMixセット */}
          <Reveal>
            <article id="short" className="scroll-mt-24">
              <p className="text-xs tracking-[0.4em] uppercase text-[color:var(--accent)] mb-4">
                Plan 03
              </p>
              <h2 className="text-2xl font-normal tracking-wide mb-8">
                shortMixセット
                <span className="ml-3 text-[10px] tracking-[0.3em] text-[color:var(--sub)] align-middle">
                  COMING SOON
                </span>
              </h2>

              <p className="text-sm text-[color:var(--sub)] leading-[1.9]">
                ショート尺の楽曲をまとめてご依頼いただけるセットを準備中です。詳細が決まり次第、こちらでお知らせします。
              </p>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
