export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgba(26,26,26,0.08)] px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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
            <a href="#" className="hover:text-[color:var(--accent)] transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <p className="text-xs text-[color:var(--sub)] tracking-wider">
          © {year} OrangeStudio
        </p>
      </div>
    </footer>
  );
}
