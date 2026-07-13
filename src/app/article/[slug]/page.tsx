import { ArticleBody } from "@/components/ArticleBody";
import { CategoryBadge } from "@/components/CategoryBadge";
import { MobileToc } from "@/components/article/MobileToc";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { formatDate } from "@/lib/format";
import { getRichArticleContent, hasRichArticle } from "@/lib/rich-articles";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: article.image
      ? { images: [{ url: article.image }] }
      : undefined,
  };
}

const AMI_TOC = [
  { id: "data-wall", label: "Chatbots Don't Know Physics" },
  { id: "autoregressive-failure", label: "The Problem with Chatbots" },
  { id: "jepa", label: "LeCun's Alternative: JEPA" },
  { id: "vjepa", label: "Does the Model 'Get' Physics?" },
  { id: "meta-break", label: "The Break with Meta" },
  { id: "ami-labs", label: "AMI Labs: The Company" },
  { id: "executives", label: "Who's Running It" },
  { id: "competitive", label: "Competitive Position" },
  { id: "takeaway", label: "What to Watch" },
  { id: "references", label: "References" },
];

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const richContent = hasRichArticle(slug) ? getRichArticleContent(slug) : null;
  const isBriefing = slug === "ami-labs-briefing";

  return (
    <div className="w-full overflow-x-clip bg-white">
      {isBriefing && (
        <div className="relative border-b border-stone-200 bg-stone-900">
          {article.image && (
            <div className="absolute inset-0">
              <Image
                src={article.image}
                alt=""
                fill
                className="object-cover object-top opacity-30"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/90 to-stone-900/70" />
            </div>
          )}
          <div className="relative mx-auto max-w-6xl px-4 py-8 md:py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Private Company Briefing
            </p>
            <h1 className="mt-3 max-w-4xl font-serif text-[1.75rem] font-bold leading-tight text-white sm:text-3xl md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-300 md:text-lg">
              {article.excerpt}
            </p>
            <div className="mt-5 flex flex-col gap-1 text-sm text-stone-400 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
              <span className="text-stone-200">By {article.author}</span>
              <span className="hidden sm:inline">&middot;</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span className="hidden sm:inline">&middot;</span>
              <span>15 min read</span>
              {article.sector && (
                <>
                  <span className="hidden sm:inline">&middot;</span>
                  <span>{article.sector}</span>
                </>
              )}
            </div>
            {article.imageCredit && (
              <p className="mt-4 text-xs text-stone-500">
                {article.imageCreditUrl ? (
                  <a
                    href={article.imageCreditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-600 underline-offset-2 hover:text-stone-300"
                  >
                    {article.imageCredit}
                  </a>
                ) : (
                  article.imageCredit
                )}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div
          className={`grid min-w-0 gap-12 ${isBriefing ? "lg:grid-cols-4" : ""}`}
        >
          {isBriefing && (
            <aside className="hidden min-w-0 lg:col-span-1 lg:block">
              <nav className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                  In this briefing
                </p>
                <ul className="mt-4 space-y-2 border-l border-stone-200">
                  {AMI_TOC.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block border-l-2 border-transparent py-1 pl-4 text-sm text-stone-500 transition-colors hover:border-stone-900 hover:text-stone-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}

          <article
            className={`min-w-0 ${isBriefing ? "lg:col-span-3" : "mx-auto max-w-4xl"}`}
          >
            {!isBriefing && (
              <>
                {article.image && (
                  <div className="relative mb-8 aspect-[2/1] overflow-hidden rounded-sm bg-stone-100">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 900px"
                    />
                  </div>
                )}
                <div className="mb-6">
                  <CategoryBadge category={article.category} />
                </div>
                <h1 className="font-serif text-4xl font-bold leading-tight text-stone-900 md:text-5xl">
                  {article.title}
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-stone-500">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-stone-400">
                  <span>By {article.author}</span>
                  <span>&middot;</span>
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                </div>
                <div className="mt-6 border-b border-stone-200 pb-8" />
              </>
            )}

            {isBriefing && (
              <>
                <MobileToc items={AMI_TOC} />
                <div className="mb-8 flex flex-wrap items-center gap-2">
                  <CategoryBadge category={article.category} />
                  {article.dataState && (
                    <span className="rounded-sm border border-stone-200 bg-stone-50 px-2 py-0.5 text-xs font-medium text-stone-500">
                      {article.dataState}
                    </span>
                  )}
                  {article.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-stone-100 px-2 py-0.5 text-xs text-stone-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}

            <div className={isBriefing ? "" : "mt-10"}>
              {richContent ?? <ArticleBody content={article.content} />}
            </div>

            <div className="mt-12 border-t border-stone-200 pt-8">
              <Link
                href={`/${article.category}`}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
              >
                &larr; More in {article.category}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
