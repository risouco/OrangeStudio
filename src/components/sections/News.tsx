import { Tweet } from "react-tweet";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { getNews } from "@/lib/notion";

function fmtDate(d: string | null): string {
  if (!d) return "";
  // ISO date — render as YYYY.MM.DD
  const m = d.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return d;
  return `${m[1]}.${m[2]}.${m[3]}`;
}

// 本文中の X / Twitter ポストURL から status ID を抽出
const TWEET_URL_RE =
  /https?:\/\/(?:x\.com|twitter\.com)\/[^/\s]+\/status\/(\d+)(?:\?\S*)?/g;

function extractTweetIds(body: string): string[] {
  const ids: string[] = [];
  for (const m of body.matchAll(TWEET_URL_RE)) {
    if (!ids.includes(m[1])) ids.push(m[1]);
  }
  return ids;
}

// 本文から X ポストURLを除いた残りテキスト
function stripTweetUrls(body: string): string {
  return body.replace(TWEET_URL_RE, "").replace(/\n{3,}/g, "\n\n").trim();
}

export default async function News() {
  const items = await getNews();

  return (
    <section id="news" className="section px-6 bg-[rgba(201,104,60,0.03)]">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionHeader eyebrow="News" title="お知らせ" />
        </Reveal>

        {items.length === 0 ? (
          <Reveal>
            <p className="text-sm text-[color:var(--sub)] leading-[1.9]">
              現在お知らせはありません。
            </p>
          </Reveal>
        ) : (
        <ul className="divide-y divide-[rgba(26,26,26,0.08)] border-y border-[rgba(26,26,26,0.08)]">
          {items.map((n, i) => (
            <Reveal as="li" key={n.id} delay={i * 50}>
              <article className="py-6 md:py-8 grid md:grid-cols-[8rem_1fr] gap-2 md:gap-8">
                <time className="text-xs tracking-[0.2em] text-[color:var(--accent)] pt-1">
                  {fmtDate(n.date)}
                </time>
                <div>
                  <h3 className="text-base font-normal mb-2">{n.title || "—"}</h3>
                  {(() => {
                    const tweetIds = n.body ? extractTweetIds(n.body) : [];
                    const text = n.body ? stripTweetUrls(n.body) : "";
                    return (
                      <>
                        {text && (
                          <p className="text-sm text-[color:var(--sub)] leading-[1.9] whitespace-pre-wrap">
                            {text}
                          </p>
                        )}
                        {tweetIds.map((id) => (
                          <div key={id} className="mt-3 flex justify-start [&_.react-tweet-theme]:my-0">
                            <Tweet id={id} />
                          </div>
                        ))}
                      </>
                    );
                  })()}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
        )}
      </div>
    </section>
  );
}
