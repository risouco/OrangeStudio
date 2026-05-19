import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
};

const ITEMS: Array<{ label: string; value: string }> = [
  { label: "販売事業者名", value: "OrangeStudio" },
  { label: "運営責任者", value: "請求があれば遅滞なく開示します" },
  { label: "所在地", value: "請求があれば遅滞なく開示します" },
  { label: "電話番号", value: "請求があれば遅滞なく開示します" },
  { label: "お問い合わせ", value: "お問い合わせフォーム、もしくはX（@OrangeStudio_x）のDMよりご連絡ください" },
  { label: "販売価格", value: "基本フルコーラスMix：¥18,000（税込）/曲\n回数券・オプション料金は各プランの詳細をご確認ください" },
  { label: "商品代金以外の必要料金", value: "振込手数料はお客様にご負担いただきます" },
  { label: "支払い方法", value: "銀行振込" },
  { label: "支払い時期", value: "ご依頼確定後、お振込みのご確認が取れ次第、制作に着手いたします" },
  { label: "商品引渡時期", value: "フルコーラスMix：初稿納品まで基本10日\n（混雑状況により前後する場合がございます）" },
  { label: "返品・キャンセルについて", value: "制作物の性質上、ご依頼確定後のキャンセル・返品はお受けできません\n（修正対応は納品後、無制限・翌日対応にて承ります）" },
];

export default function TokuteiPage() {
  return (
    <>
      <PageTitle
        eyebrow="Legal"
        title="特定商取引法に基づく表記"
      />

      <section className="section px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <dl className="divide-y divide-[rgba(26,26,26,0.08)] border-y border-[rgba(26,26,26,0.08)]">
              {ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-6 py-6"
                >
                  <dt className="text-xs tracking-[0.2em] uppercase text-[color:var(--accent)] md:pt-1">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-[color:var(--sub)] leading-[1.9] whitespace-pre-line">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
