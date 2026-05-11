import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import Flow from "@/components/sections/Flow";

export const metadata: Metadata = {
  title: "Flow | OrangeStudio",
};

export default function FlowPage() {
  return (
    <>
      <PageTitle
        eyebrow="Flow"
        title="ご依頼の流れ"
        description="お問い合わせから納品までのステップをまとめています。"
      />
      <Flow />
    </>
  );
}
