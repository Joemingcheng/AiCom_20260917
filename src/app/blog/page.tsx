import type { Metadata } from "next";
import Link from "next/link";
import { CaseGraphic } from "@/components/CaseGraphic";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { blogArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "技術文章 | 康全電訊 Comtrend",
  description: "ESP32 與 AI 整合應用的技術文章，從智慧社區、零售門市、產線維護、智慧家庭到銀髮居家照護。",
};

export default function BlogIndexPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-12 sm:pt-20 lg:pt-24">
        <Reveal>
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-slate-400 uppercase">
            <span className="h-px w-8 bg-cyan-600" />
            AI × ESP32 專欄
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">技術文章</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
            五篇關於 ESP32 與 AI 整合應用的實務文章，從智慧社區安防、零售門市分析、
            產線預警式維護、智慧家庭能源監控到銀髮居家照護。
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-5 sm:grid-cols-2">
          {blogArticles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 80}>
              <Parallax speed={i % 2 === 0 ? 0.035 : -0.035}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group block h-full rounded-2xl border border-slate-900/8 bg-white/70 p-6 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:border-cyan-600/40 sm:p-7"
                >
                  <CaseGraphic variant={article.variant} />
                  <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
                    <span className="font-medium tracking-[0.15em] text-cyan-700 uppercase">{article.category}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900 transition group-hover:text-cyan-700">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-700">
                    閱讀全文
                    <span className="transition group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Parallax>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
