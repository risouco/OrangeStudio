import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import Contact from "@/components/sections/Contact";
import ContactForm from "@/components/sections/ContactForm";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact",
};

export const revalidate = 60;

export default function ContactPage() {
  return (
    <>
      <PageTitle
        eyebrow="Contact"
        title="お問い合わせ"
        description="ご依頼・ご相談はこちらから。よくあるご質問もあわせてご確認ください。"
      />
      <Contact />
      <ContactForm />
      <Faq />
    </>
  );
}
