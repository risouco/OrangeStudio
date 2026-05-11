import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import FaqList from "@/components/sections/FaqList";
import { getFaqs } from "@/lib/notion";

export default async function Faq() {
  const faqs = await getFaqs();
  if (faqs.length === 0) return null;

  return (
    <section id="faq" className="section px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionHeader eyebrow="FAQ" title="よくあるご質問" />
        </Reveal>

        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}
