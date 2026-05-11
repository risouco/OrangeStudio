import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { getPlans } from "@/lib/notion";

export default async function Plans() {
  const plans = await getPlans();

  return (
    <section id="plans" className="section px-6 bg-[rgba(201,104,60,0.03)]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Plans"
            title="プランのご案内"
            description="依頼内容や目的に合わせて、お選びいただけます。"
          />
        </Reveal>

        {plans.length === 0 ? (
          <Reveal>
            <p className="text-sm text-[color:var(--sub)]">プランは準備中です。</p>
          </Reveal>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plans.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <article className="bg-white/60 border border-[rgba(26,26,26,0.08)] p-8 h-full flex flex-col hover:border-[color:var(--accent)] transition-colors duration-500">
                  <h3 className="text-lg font-normal mb-3">{p.name || "（無題）"}</h3>
                  {p.target && (
                    <p className="text-xs text-[color:var(--accent)] tracking-wider mb-4">
                      {p.target}
                    </p>
                  )}
                  <p className="text-sm text-[color:var(--sub)] leading-[1.9] mb-8 flex-1">
                    {p.description || "—"}
                  </p>
                  <div className="border-t border-[rgba(26,26,26,0.08)] pt-4">
                    {p.price !== null ? (
                      <p className="text-xl">
                        ¥{p.price.toLocaleString()}
                        {p.priceUnit && (
                          <span className="text-xs text-[color:var(--sub)] ml-2 tracking-wider">
                            / {p.priceUnit}
                          </span>
                        )}
                      </p>
                    ) : (
                      <p className="text-sm text-[color:var(--sub)]">要相談</p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
