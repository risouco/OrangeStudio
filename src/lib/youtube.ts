// YouTube動画URLからvideoIDを抽出
export function extractYouTubeId(input: string): string | null {
  if (!input) return null;
  try {
    const u = new URL(input);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id || null;
    }
    if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com") {
      if (u.pathname === "/watch") {
        return u.searchParams.get("v");
      }
      const parts = u.pathname.split("/").filter(Boolean);
      if (parts[0] === "shorts" || parts[0] === "embed" || parts[0] === "v") {
        return parts[1] || null;
      }
    }
  } catch {
    // not a URL — maybe already an ID
    if (/^[\w-]{6,}$/.test(input)) return input;
  }
  return null;
}

// oEmbed APIで動画タイトルを取得（サーバーサイド）
export async function fetchYouTubeTitle(videoUrl: string): Promise<string | null> {
  if (!videoUrl) return null;
  const endpoint = `https://www.youtube.com/oembed?url=${encodeURIComponent(videoUrl)}&format=json`;
  try {
    const res = await fetch(endpoint, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = (await res.json()) as { title?: string };
    return data.title ?? null;
  } catch {
    return null;
  }
}
