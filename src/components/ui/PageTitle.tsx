import HeadingUnderline from "@/components/ui/HeadingUnderline";
import Reveal from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageTitle({ eyebrow, title, description }: Props) {
  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6 border-b border-[rgba(26,26,26,0.08)]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          {eyebrow && (
            <p className="mb-5 text-xs tracking-[0.4em] uppercase text-[color:var(--accent)]">
              {eyebrow}
            </p>
          )}
          <h1 className="text-2xl md:text-4xl font-normal tracking-wide leading-[1.6]">
            {title}
          </h1>
          <HeadingUnderline className="mt-6" />
          {description && (
            <p className="mt-6 text-sm md:text-base text-[color:var(--sub)] leading-[1.9] max-w-2xl">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
