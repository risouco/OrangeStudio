import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgba(26,26,26,0.08)] px-6 pt-12 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm tracking-[0.3em] text-[color:var(--fg)]">OrangeStudio</p>

          <ul className="flex gap-6 text-xs tracking-[0.2em] text-[color:var(--sub)]">
            <li>
              <a
                href="https://x.com/OrangeStudio_x"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--accent)] transition-colors"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://note.com/orangestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--accent)] transition-colors"
              >
                Note
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[color:var(--accent)] transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <p className="text-xs text-[color:var(--sub)] tracking-wider">
            © {year} OrangeStudio
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(26,26,26,0.06)] flex flex-wrap gap-x-6 gap-y-2 justify-center text-[11px] tracking-[0.15em] text-[color:var(--sub)]">
          <Link href="/privacy" className="hover:text-[color:var(--accent)] transition-colors">
            プライバシーポリシー
          </Link>
          <span className="text-[rgba(26,26,26,0.15)]">|</span>
          <Link href="/tokutei" className="hover:text-[color:var(--accent)] transition-colors">
            特定商取引法に基づく表記
          </Link>
        </div>
      </div>
    </footer>
  );
}
