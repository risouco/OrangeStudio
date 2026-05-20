import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { getNews } from "@/lib/notion";

function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export default async function NewsLatest() {
  const news = await getNews();
  const items = news.slice(0, 2);

  if (items.length === 0) return null;

  return (
    <section className="px-6 py-10 border-y border-[rgba(26,26,26,0.06)] bg-[rgba(224,122,44,0.025)]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
        <div className="flex items-center justify-between md:flex-col md:items-start md:justify-start shrink-0 md:w-24">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[color:var(--accent)]">
            News
          </p>
          <Link
            href="/news"
            className="md:mt-3 text-xs tracking-[0.2em] text-[color:var(--sub)] hover:text-[color:var(--accent)] transition-colors"
          >
            一覧 →
          </Link>
        </div>

        <ul className="flex-1 min-w-0 space-y-3">
          {items.map((n, i) => (
            <Reveal key={n.id} as="li" delay={i * 60}>
              <Link
                href="/news"
                className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5 hover:text-[color:var(--accent)] transition-colors"
              >
                {n.date && (
                  <span className="text-xs text-[color:var(--sub)] tracking-wider shrink-0 sm:w-24">
                    {formatDate(n.date)}
                  </span>
                )}
                <span className="text-sm text-[color:var(--fg)] group-hover:text-[color:var(--accent)] transition-colors truncate">
                  {n.title}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
