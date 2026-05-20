"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "success" | "error";

const ACCESS_KEY = "b70cd730-0cf1-4ec2-b9af-e8bc2bf21613";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "【OrangeStudio HP】お問い合わせ");
    formData.append("from_name", "OrangeStudio HP");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact-form" className="section px-6 border-t border-[rgba(26,26,26,0.06)]">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.4em] uppercase text-[color:var(--accent)] text-center">
            Contact Form
          </p>
          <h2 className="text-xl md:text-2xl font-normal tracking-wide leading-[1.6] mb-4 text-center">
            メールでのお問い合わせ
          </h2>
          <p className="text-sm text-[color:var(--sub)] leading-[1.9] mb-12 text-center">
            ご相談・ご質問など、お気軽にお寄せください。
          </p>
        </Reveal>

        {status === "success" ? (
          <Reveal>
            <div className="text-center py-16 border border-[color:var(--accent)] bg-[rgba(224,122,44,0.04)]">
              <p className="text-base text-[color:var(--fg)] mb-3">送信完了しました</p>
              <p className="text-sm text-[color:var(--sub)] leading-[1.9]">
                内容を確認のうえ、ご返信いたします。
                <br />
                返信まで少しお時間をいただく場合がございます。
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-xs tracking-[0.2em] text-[color:var(--sub)] mb-2">
                  お名前 <span className="text-[color:var(--accent)]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="例：山田 太郎 / 〇〇（ハンドル名）"
                  className="w-full border-b border-[rgba(26,26,26,0.2)] bg-transparent py-3 text-sm text-[color:var(--fg)] focus:outline-none focus:border-[color:var(--accent)] transition-colors placeholder:text-[rgba(26,26,26,0.3)]"
                />
              </div>

              <div>
                <label htmlFor="sns" className="block text-xs tracking-[0.2em] text-[color:var(--sub)] mb-2">
                  X など連絡先URL
                </label>
                <input
                  id="sns"
                  type="text"
                  name="sns_url"
                  placeholder="例：https://x.com/your_account"
                  className="w-full border-b border-[rgba(26,26,26,0.2)] bg-transparent py-3 text-sm text-[color:var(--fg)] focus:outline-none focus:border-[color:var(--accent)] transition-colors placeholder:text-[rgba(26,26,26,0.3)]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-[0.2em] text-[color:var(--sub)] mb-2">
                  メールアドレス <span className="text-[color:var(--accent)]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="例：your@example.com"
                  className="w-full border-b border-[rgba(26,26,26,0.2)] bg-transparent py-3 text-sm text-[color:var(--fg)] focus:outline-none focus:border-[color:var(--accent)] transition-colors placeholder:text-[rgba(26,26,26,0.3)]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.2em] text-[color:var(--sub)] mb-2">
                  お問い合わせ内容 <span className="text-[color:var(--accent)]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="ご相談内容や、ご質問をご記入ください。"
                  className="w-full border border-[rgba(26,26,26,0.2)] bg-transparent p-4 text-sm text-[color:var(--fg)] focus:outline-none focus:border-[color:var(--accent)] transition-colors leading-[1.9] placeholder:text-[rgba(26,26,26,0.3)] resize-y"
                />
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-block px-12 py-4 text-sm tracking-[0.3em] bg-[color:var(--accent)] text-white border border-[color:var(--accent)] hover:bg-[#C66A22] hover:border-[#C66A22] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "送信中..." : "送信する"}
                </button>
              </div>

              {status === "error" && (
                <p className="text-sm text-center text-[color:var(--accent)] mt-4">
                  送信中にエラーが発生しました。お手数ですが、XのDMよりご連絡ください。
                </p>
              )}
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
