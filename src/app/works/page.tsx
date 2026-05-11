import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import WorksGallery, { type WorkItem } from "@/components/sections/WorksGallery";
import { getWorks } from "@/lib/notion";
import { extractYouTubeId, fetchYouTubeTitle } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Works",
};

export const revalidate = 60;

export default async function WorksPage() {
  const works = await getWorks();

  const items: WorkItem[] = await Promise.all(
    works.map(async (w) => {
      const videoId = extractYouTubeId(w.videoUrl);
      let title = w.title;
      if (!title && w.videoUrl) {
        const fetched = await fetchYouTubeTitle(w.videoUrl);
        title = fetched ?? videoId ?? "";
      }
      if (!title) title = videoId ?? "";
      return {
        id: w.id,
        title,
        videoId,
        type: w.type,
        genres: w.genres,
        effects: w.effects,
      };
    })
  );

  return (
    <>
      <PageTitle
        eyebrow="Works"
        title="制作実績"
        description="これまで手がけた音源を一部ご紹介します。"
      />
      <WorksGallery items={items} />
    </>
  );
}
