import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/types/article";
import { formatDate } from "@/lib/format";
import { CategoryBadge } from "./CategoryBadge";

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <article className="group">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <CategoryBadge category={article.category} />
          {article.sector && (
            <span className="text-xs text-stone-400">{article.sector}</span>
          )}
        </div>

        <Link href={`/article/${article.slug}`} className="block">
          <div className="grid gap-8 md:grid-cols-5 md:items-center">
            {article.image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-stone-200 md:col-span-2">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            )}
            <div className={article.image ? "md:col-span-3" : ""}>
              <h2 className="font-serif text-3xl font-bold leading-tight text-stone-900 transition-colors group-hover:text-stone-600 md:text-4xl">
                {article.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                {article.excerpt}
              </p>
              <p className="mt-5 text-sm text-stone-400">
                {article.author} &middot; {formatDate(article.date)} &middot; 15
                min read
              </p>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group border-b border-stone-100 py-6 last:border-0">
      <div className="mb-2">
        <CategoryBadge category={article.category} />
      </div>
      <Link href={`/article/${article.slug}`} className="block">
        <div className="flex gap-5">
          {article.image && (
            <div className="relative hidden aspect-[4/3] w-36 shrink-0 overflow-hidden rounded-sm bg-stone-100 sm:block md:w-40">
              <Image
                src={article.image}
                alt=""
                fill
                className="object-cover object-top"
                sizes="160px"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-xl font-bold leading-snug text-stone-900 transition-colors group-hover:text-stone-600">
              {article.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-500">
              {article.excerpt}
            </p>
            <p className="mt-2 text-xs text-stone-400">
              {article.author} &middot; {formatDate(article.date)}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
