import HeadingUnderline from "@/components/ui/HeadingUnderline";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-16 max-w-2xl">
      {eyebrow && (
        <p className="mb-4 text-xs tracking-[0.3em] uppercase text-[color:var(--accent)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-normal tracking-wide">{title}</h2>
      <HeadingUnderline className="mt-5" />
      {description && (
        <p className="mt-6 text-sm md:text-base text-[color:var(--sub)] leading-[1.9]">
          {description}
        </p>
      )}
    </div>
  );
}
