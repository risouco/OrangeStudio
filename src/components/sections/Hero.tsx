import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[60vh] flex items-center justify-center px-6 pt-24 pb-12"
    >
      <Reveal className="text-center max-w-3xl">
        <p className="mb-8 text-xs tracking-[0.4em] uppercase text-[color:var(--accent)]">
          Mix / Inst / BGM / Original
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.15em] leading-[1.4]">
          OrangeStudio
        </h1>
      </Reveal>
    </section>
  );
}
