import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex items-center justify-center px-6 pt-24 pb-16"
    >
      <Reveal className="text-center max-w-3xl">
        <p className="mb-8 text-xs tracking-[0.4em] uppercase text-[color:var(--accent)]">
          Mix / Inst / BGM / Original
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.15em] leading-[1.4]">
          OrangeStudio
        </h1>
        <p className="mt-10 text-sm md:text-base text-[color:var(--sub)] leading-[1.9]">
          質感やニュアンスを、最大限のクオリティで。
        </p>
        <div className="mt-14">
          <a
            href="/flow"
            className="inline-block text-sm tracking-[0.2em] border-b border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors duration-300 pb-1"
          >
            ご依頼の流れを見る →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
