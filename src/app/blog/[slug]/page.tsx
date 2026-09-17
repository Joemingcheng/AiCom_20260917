import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseGraphic } from "@/components/CaseGraphic";
import { Reveal } from "@/components/Reveal";
import { blogArticles, getArticleBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | 愛康科技 Comtrend`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-6 pt-16 pb-24 sm:pt-20 lg:pt-24">
        <Reveal>
          <Link href="/blog" className="text-sm text-slate-500 transition hover:text-cyan-700">
            ← 返回技術文章
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
            <span className="font-medium tracking-[0.15em] text-cyan-700 uppercase">{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">{article.title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{article.excerpt}</p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <CaseGraphic variant={article.variant} />
        </Reveal>

        <div className="mt-10 flex flex-col gap-10">
          {article.sections.map((section, i) => (
            <Reveal key={section.heading} delay={100 + i * 60}>
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{section.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-14 rounded-2xl border border-slate-900/8 bg-white/70 p-7 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-slate-900">想進一步了解這類整合方案？</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            歡迎與愛康科技業務團隊聯繫，討論適合您場域的 ESP32 與 AI 整合方案。
          </p>
          <a
            href="mailto:sales@comtrend.com"
            className="mt-4 inline-block rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-600"
          >
            sales@comtrend.com
          </a>
        </Reveal>
      </article>
    </main>
  );
}
