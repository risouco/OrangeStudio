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
  const latest = news[0];

  if (!latest) return null;

  return (
    <section className="px-6 py-10 border-y border-[rgba(26,26,26,0.06)] bg-[rgba(224,122,44,0.025)]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[color:var(--accent)]">
            News
          </span>
          {latest.date && (
            <span className="text-xs text-[color:var(--sub)] tracking-wider">
              {formatDate(latest.date)}
            </span>
          )}
        </div>

        <Reveal className="flex-1 min-w-0">
          <Link
            href="/news"
            className="block text-sm md:text-base text-[color:var(--fg)] hover:text-[color:var(--accent)] transition-colors truncate"
          >
            {latest.title}
          </Link>
        </Reveal>

        <Link
          href="/news"
          className="shrink-0 text-xs tracking-[0.2em] text-[color:var(--sub)] hover:text-[color:var(--accent)] transition-colors"
        >
          一覧 →
        </Link>
      </div>
    </section>
  );
}
