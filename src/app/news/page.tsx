import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import News from "@/components/sections/News";

export const metadata: Metadata = {
  title: "News",
};

export const revalidate = 60;

export default function NewsPage() {
  return (
    <>
      <PageTitle
        eyebrow="News"
        title="お知らせ"
        description="更新情報や告知をこちらに掲載しています。"
      />
      <News />
    </>
  );
}
