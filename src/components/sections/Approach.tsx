import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Approach() {
  return (
    <section id="approach" className="section px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Approach"
            title="依頼者ひとりひとりに合わせて。"
            description="はじめての方から、活動歴のある方まで。それぞれに合った進め方をご提案します。"
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Reveal>
            <article className="border-t border-[rgba(26,26,26,0.12)] pt-10">
              <p className="text-xs tracking-[0.3em] uppercase text-[color:var(--accent)] mb-4">
                For Beginners
              </p>
              <h3 className="text-xl font-normal mb-6">はじめての方へ</h3>
              <p className="text-sm md:text-base text-[color:var(--sub)] leading-[1.9]">
                どう依頼すればいいのかわからなくても大丈夫です。細かく0から手順をお教えできますし、専門用語がわからなくても、雰囲気や必要なことをお伺いしながら汲み取り、作品に落とし込んでいきます。
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="border-t border-[rgba(26,26,26,0.12)] pt-10">
              <p className="text-xs tracking-[0.3em] uppercase text-[color:var(--accent)] mb-4">
                For Quality
              </p>
              <h3 className="text-xl font-normal mb-6">よりクオリティを目指したい方へ</h3>
              <p className="text-sm md:text-base text-[color:var(--sub)] leading-[1.9]">
                これまでの活動で築いてきたスタイルやトーンを尊重し、損なわずによりクオリティアップできるよう丁寧に対応・制作いたします。「こんなところまで？」というレベルの細かい修正やご要望にも、徹底的に形にします。
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
