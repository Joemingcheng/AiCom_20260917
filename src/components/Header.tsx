"use client";

import { useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "產品與解決方案", href: "/#solutions" },
  { label: "AI 產品應用", href: "/#ai" },
  { label: "技術文章", href: "/blog" },
  { label: "技術支援", href: "/#support" },
  { label: "投資人專區", href: "/#" },
  { label: "利害關係人專區", href: "/#" },
];

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  return (
    <a href={href} onClick={onClick} className="group relative py-1 text-slate-600 transition hover:text-slate-900">
      {label}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-900/8 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 text-sm lg:flex">
          {navLinks.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-cyan-600 sm:inline-block"
          >
            聯絡業務
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="開啟選單"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/15 text-slate-700 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-all ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-900/8 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm">
            {navLinks.map((item) => (
              <NavLink key={item.label} {...item} onClick={() => setOpen(false)} />
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-slate-900 px-5 py-2 text-center text-sm font-medium text-white"
            >
              聯絡業務
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
