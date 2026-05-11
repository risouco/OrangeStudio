"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Plans" },
  { href: "/flow", label: "Flow" },
  { href: "/works", label: "Works" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[rgba(248,247,244,0.85)] backdrop-blur border-b border-[rgba(26,26,26,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center hover:opacity-70 transition-opacity"
          onClick={() => setOpen(false)}
          aria-label="OrangeStudio"
        >
          <Image
            src="/logo.png"
            alt="OrangeStudio"
            width={521}
            height={179}
            priority
            className="h-7 md:h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-xs tracking-[0.2em] text-[color:var(--sub)]">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`hover:text-[color:var(--accent)] transition-colors ${
                    isActive(n.href) ? "text-[color:var(--accent)]" : ""
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] w-6 h-6 items-center justify-center"
        >
          <span
            className={`block w-5 h-px bg-[color:var(--fg)] transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[color:var(--fg)] transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-px bg-[color:var(--fg)] transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-[rgba(248,247,244,0.98)] backdrop-blur ${
          open ? "max-h-96 border-b border-[rgba(26,26,26,0.06)]" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-6 flex flex-col gap-5 text-sm tracking-[0.2em]">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                onClick={() => setOpen(false)}
                className={`block hover:text-[color:var(--accent)] transition-colors ${
                  isActive(n.href) ? "text-[color:var(--accent)]" : ""
                }`}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
