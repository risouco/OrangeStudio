"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";

export type WorkItem = {
  id: string;
  title: string;
  videoId: string | null;
  type: string | null;
  genres: string[];
  effects: string[];
};

type Props = {
  items: WorkItem[];
};

const ITEMS_PER_PAGE = 15;

const TYPE_OPTIONS = ["すべて", "Mix", "Inst制作", "Inst制作+Mix"] as const;

const GENRE_OPTIONS = [
  "すべて",
  "ボカロ",
  "j-pop",
  "k-pop",
  "洋楽",
  "アニソン",
  "アイドル",
  "その他",
] as const;

const EFFECT_OPTIONS = [
  "すべて",
  "カットアップ加工",
  "ケロケロ加工",
  "空間演出",
] as const;

export default function WorksGallery({ items }: Props) {
  const [typeFilter, setTypeFilter] = useState<string>("すべて");
  const [genreFilter, setGenreFilter] = useState<string>("すべて");
  const [effectFilter, setEffectFilter] = useState<string>("すべて");
  const [page, setPage] = useState(1);
  const gridTopRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    return items.filter((it) => {
      if (typeFilter !== "すべて" && it.type !== typeFilter) return false;
      if (genreFilter !== "すべて" && !it.genres.includes(genreFilter)) return false;
      if (effectFilter !== "すべて" && !it.effects.includes(effectFilter)) return false;
      return true;
    });
  }, [items, typeFilter, genreFilter, effectFilter]);

  // フィルタが変わったら1ページ目に戻す
  useEffect(() => {
    setPage(1);
  }, [typeFilter, genreFilter, effectFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * ITEMS_PER_PAGE;
  const visible = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  function goToPage(p: number) {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    // ページ変更時はグリッド上部にスクロール
    gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="section px-6">
      <div className="max-w-6xl mx-auto">
        {/* Filters */}
        <div className="mb-12 md:mb-16 space-y-6">
          <FilterRow
            label="Type"
            options={TYPE_OPTIONS as readonly string[]}
            value={typeFilter}
            onChange={setTypeFilter}
          />
          <FilterRow
            label="Genre"
            options={GENRE_OPTIONS as readonly string[]}
            value={genreFilter}
            onChange={setGenreFilter}
          />
          <FilterRow
            label="Effect"
            options={EFFECT_OPTIONS as readonly string[]}
            value={effectFilter}
            onChange={setEffectFilter}
          />
        </div>

        {/* Grid top anchor */}
        <div ref={gridTopRef} className="scroll-mt-24" />

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-sm text-[color:var(--sub)] tracking-wide py-16 text-center">
            {items.length === 0
              ? "現在登録されている作品はありません。"
              : "条件に合う作品が見つかりませんでした。"}
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visible.map((w, i) => (
                <Reveal key={w.id} delay={(i % 6) * 60}>
                  <article className="border border-[rgba(26,26,26,0.08)] bg-white/40">
                    <div className="relative aspect-video bg-[rgba(26,26,26,0.05)]">
                      {w.videoId ? (
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${w.videoId}`}
                          title={w.title}
                          loading="lazy"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center text-xs tracking-[0.3em] text-[color:var(--sub)]">
                          準備中
                        </span>
                      )}
                    </div>
                    <div className="px-5 py-5">
                      <h3 className="text-sm font-normal tracking-wide truncate">
                        {w.title || "Untitled"}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {w.type && <Badge kind="accent">{w.type}</Badge>}
                        {w.genres.map((g) => (
                          <Badge key={g} kind="sub">
                            {g}
                          </Badge>
                        ))}
                        {w.effects.map((e) => (
                          <Badge key={e} kind="accent-soft">
                            {e}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                onChange={goToPage}
              />
            )}

            <p className="mt-8 text-center text-xs text-[color:var(--sub)] tracking-wider">
              {filtered.length}件中 {startIdx + 1}–{Math.min(startIdx + ITEMS_PER_PAGE, filtered.length)}件を表示
            </p>
          </>
        )}
      </div>
    </section>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onChange,
}: {
  currentPage: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  const pages = buildPageNumbers(currentPage, totalPages);

  return (
    <div className="mt-14 flex items-center justify-center gap-1 md:gap-2 text-sm">
      <button
        type="button"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-xs tracking-[0.15em] border border-[rgba(26,26,26,0.15)] text-[color:var(--sub)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="前のページ"
      >
        ← 前
      </button>

      <div className="flex items-center gap-1 mx-1">
        {pages.map((p, idx) =>
          p === "..." ? (
            <span key={`dots-${idx}`} className="px-2 text-[color:var(--sub)]">
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              className={`min-w-9 px-3 py-2 text-xs border transition-colors ${
                p === currentPage
                  ? "bg-[color:var(--accent)] border-[color:var(--accent)] text-white"
                  : "border-[rgba(26,26,26,0.15)] text-[color:var(--sub)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              }`}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-xs tracking-[0.15em] border border-[rgba(26,26,26,0.15)] text-[color:var(--sub)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="次のページ"
      >
        次 →
      </button>
    </div>
  );
}

function buildPageNumbers(current: number, total: number): Array<number | "..."> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: Array<number | "..."> = [];
  pages.push(1);
  if (current > 3) pages.push("...");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-5">
      <p className="text-xs tracking-[0.4em] uppercase text-[color:var(--accent)] md:w-20 shrink-0 md:pt-1.5">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`px-4 py-1.5 text-xs tracking-[0.15em] border transition-colors ${
                active
                  ? "bg-[color:var(--accent)] border-[color:var(--accent)] text-white"
                  : "border-[rgba(26,26,26,0.15)] text-[color:var(--sub)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Badge({ children, kind }: { children: React.ReactNode; kind: "accent" | "sub" | "accent-soft" }) {
  const cls =
    kind === "accent"
      ? "border-[color:var(--accent)] text-[color:var(--accent)]"
      : kind === "accent-soft"
      ? "border-[color:var(--accent)] text-[color:var(--accent)] bg-[color:var(--accent-soft)]"
      : "border-[rgba(26,26,26,0.15)] text-[color:var(--sub)]";
  return (
    <span className={`inline-block px-2 py-0.5 text-[10px] tracking-[0.15em] border ${cls}`}>
      {children}
    </span>
  );
}
