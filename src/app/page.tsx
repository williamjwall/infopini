import { ArticleCard } from "@/components/ArticleCard";
import {
  getAllArticles,
  getArticlesByCategory,
  getFeaturedArticle,
} from "@/lib/articles";
import { CATEGORIES } from "@/types/article";
import Link from "next/link";

export default function HomePage() {
  const featured = getFeaturedArticle();
  const articles = getAllArticles().filter(
    (a) => !a.featured || a.slug !== featured?.slug,
  );
  const latest = articles.slice(0, 6);

  return (
    <>
      {featured && (
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-stone-900 px-2 py-0.5 text-xs font-semibold uppercase tracking-widest text-white">
                Lead Story
              </span>
              <span className="text-xs text-stone-400">Private Company Briefing</span>
            </div>
            <ArticleCard article={featured} featured />
          </div>
        </section>
      )}

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between border-b-2 border-stone-900 pb-2">
              <h2 className="font-serif text-xl font-bold text-stone-900">
                Latest Intelligence
              </h2>
            </div>
            {latest.length > 0 ? (
              latest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))
            ) : (
              <p className="text-stone-400">
                More briefings coming soon.{" "}
                {featured && (
                  <Link
                    href={`/article/${featured.slug}`}
                    className="text-stone-600 underline hover:text-stone-900"
                  >
                    Read the lead story &rarr;
                  </Link>
                )}
              </p>
            )}
          </section>

          <aside className="space-y-10">
            <section className="rounded-sm border border-stone-200 bg-stone-50 p-5">
              <h2 className="font-serif text-lg font-bold text-stone-900">
                What We Cover
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                Structured intelligence on private companies, deal activity, executive
                moves, and sector benchmarks — built from original reporting and
                validated public data.
              </p>
            </section>

            {CATEGORIES.map((cat) => {
              const catArticles = getArticlesByCategory(cat.slug).slice(0, 3);
              if (catArticles.length === 0) return null;

              return (
                <section key={cat.slug}>
                  <div className="mb-4 flex items-center justify-between border-b border-stone-200 pb-2">
                    <h2 className="font-serif text-lg font-bold text-stone-900">
                      {cat.label}
                    </h2>
                    <Link
                      href={`/${cat.slug}`}
                      className="text-xs font-medium uppercase tracking-widest text-stone-400 transition-colors hover:text-stone-700"
                    >
                      All
                    </Link>
                  </div>
                  <ul className="space-y-4">
                    {catArticles.map((article) => (
                      <li key={article.slug}>
                        <Link
                          href={`/article/${article.slug}`}
                          className="group block"
                        >
                          <h3 className="font-serif text-sm font-semibold leading-snug text-stone-800 transition-colors group-hover:text-stone-500">
                            {article.title}
                          </h3>
                          <p className="mt-1 text-xs text-stone-400">
                            {new Date(article.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </aside>
        </div>
      </div>
    </>
  );
}
