import { Logo } from "./Logo";

const columns = [
  {
    title: "產品",
    links: ["Fiber", "VDSL", "Ethernet", "Home Networking", "MDU", "遠端管理 ACS"],
  },
  {
    title: "公司",
    links: ["技術支援", "投資人專區", "利害關係人專區", "聯絡我們"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-900/8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
            領導通訊趨勢 — 為電信商與企業用戶打造穩定可靠的連網基礎建設。
          </p>
          <p className="mt-6 text-sm leading-6 text-slate-500">
            新北市三重區重新路五段609巷10號3樓之1
            <br />
            郵遞區號 241405
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">{col.title}</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-slate-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">聯絡</p>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
            <li>
              <a href="mailto:sales@comtrend.com" className="transition hover:text-slate-900">
                sales@comtrend.com
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-slate-900">
                YouTube 頻道
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900/8 py-6">
        <p className="mx-auto w-full max-w-6xl px-6 text-xs text-slate-400">
          © 2026 Comtrend Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
