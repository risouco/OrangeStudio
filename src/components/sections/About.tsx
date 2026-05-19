import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="section px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="About"
            title="OrangeStudioについて"
          />
        </Reveal>
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 mt-4">
            <div>
              <p className="text-sm md:text-base text-[color:var(--sub)] leading-[1.9]">
                OrangeStudioは、歌ってみたのMixをはじめ、Inst制作、BGM制作、オリジナル楽曲制作まで、インターネットで活動するすべての方のクリエイティブを音にして届けるお手伝いをしています。
              </p>
            </div>
            <div>
              <p className="text-sm md:text-base text-[color:var(--sub)] leading-[1.9]">
                大切にしているのは、依頼者の音楽に込めた想いや質感を、ぶれさせずに聴き手まで届けること。納品までのやり取りも、仕上がりへの修正も、納得していただけるまで最後まで丁寧にお受けします。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
