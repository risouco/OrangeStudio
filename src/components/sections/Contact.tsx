import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="mb-6 text-xs tracking-[0.4em] uppercase text-[color:var(--accent)]">
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-wide leading-[1.6] mb-6">
            まずは、お気軽にご連絡ください。
          </h2>
          <p className="text-sm md:text-base text-[color:var(--sub)] leading-[1.9] mb-14">
            ご依頼の方も、迷われている方も。
            <br />
            それぞれの入口をご用意しています。（プレースホルダー）
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/wZskn2r85vem6jmQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 text-sm tracking-[0.3em] bg-[color:var(--accent)] text-white border border-[color:var(--accent)] hover:bg-[#C66A22] hover:border-[#C66A22] transition-colors duration-300"
            >
              依頼する
            </a>
            <a
              href="https://x.com/OrangeStudio_x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 text-sm tracking-[0.3em] border border-[rgba(26,26,26,0.2)] text-[color:var(--sub)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors duration-300"
            >
              XのDMで相談する
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
