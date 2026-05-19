import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <>
      <PageTitle
        eyebrow="Legal"
        title="プライバシーポリシー"
      />

      <section className="section px-6">
        <div className="max-w-3xl mx-auto space-y-12 text-sm text-[color:var(--sub)] leading-[1.9]">
          <Reveal>
            <p>
              OrangeStudio（以下「当スタジオ」といいます）は、Mix制作依頼に関連してお預かりするお客様の個人情報について、以下のとおり取り扱います。
            </p>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="text-base text-[color:var(--fg)] font-normal mb-4">
                <span className="text-[color:var(--accent)] mr-2">1.</span>
                取得する個人情報
              </h2>
              <p>
                ご依頼受付およびご連絡の過程で、以下の情報を取得する場合があります。
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside">
                <li>お名前またはハンドルネーム</li>
                <li>SNSアカウント（X等）</li>
                <li>連絡先（メールアドレス等）</li>
                <li>依頼内容に関する情報（参考音源・録音データ・希望する仕上がり等）</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="text-base text-[color:var(--fg)] font-normal mb-4">
                <span className="text-[color:var(--accent)] mr-2">2.</span>
                利用目的
              </h2>
              <p>取得した個人情報は、以下の目的のためにのみ利用します。</p>
              <ul className="mt-3 space-y-1 list-disc list-inside">
                <li>Mix制作依頼の受付・進行管理</li>
                <li>ご依頼内容の確認・お見積もりの提示</li>
                <li>制作物の納品およびその後のご連絡</li>
                <li>お問い合わせへの対応</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="text-base text-[color:var(--fg)] font-normal mb-4">
                <span className="text-[color:var(--accent)] mr-2">3.</span>
                第三者への提供
              </h2>
              <p>
                当スタジオは、運営とエンジニアの分業体制で制作を行っています。ご依頼内容や録音データは、担当するエンジニアへ制作上必要な範囲で共有いたします。
              </p>
              <p className="mt-3">
                上記以外の第三者へ、お客様の個人情報を本人の同意なく開示・提供することはありません。ただし、法令に基づき開示が求められた場合はこの限りではありません。
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="text-base text-[color:var(--fg)] font-normal mb-4">
                <span className="text-[color:var(--accent)] mr-2">4.</span>
                個人情報の管理
              </h2>
              <p>
                取得した個人情報の漏洩・紛失・改ざんを防止するため、適切な安全管理を行います。ご依頼が完了し、保管の必要がなくなった情報については、速やかに削除いたします。
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="text-base text-[color:var(--fg)] font-normal mb-4">
                <span className="text-[color:var(--accent)] mr-2">5.</span>
                開示・訂正・削除のご請求
              </h2>
              <p>
                ご本人からの個人情報の開示・訂正・削除のご請求があった場合は、本人確認のうえ、合理的な範囲で速やかに対応いたします。お問い合わせ窓口よりご連絡ください。
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="text-base text-[color:var(--fg)] font-normal mb-4">
                <span className="text-[color:var(--accent)] mr-2">6.</span>
                本ポリシーの改定
              </h2>
              <p>
                当スタジオは、必要に応じて本ポリシーを改定することがあります。改定後の内容は本ページ上で告知いたします。
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="text-base text-[color:var(--fg)] font-normal mb-4">
                <span className="text-[color:var(--accent)] mr-2">7.</span>
                お問い合わせ窓口
              </h2>
              <p>
                本ポリシーに関するお問い合わせは、お問い合わせフォーム、もしくはX（@OrangeStudio_x）のDMよりご連絡ください。
              </p>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-xs text-[color:var(--sub)] pt-12">
              制定日：2026年5月15日
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
