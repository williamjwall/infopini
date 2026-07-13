import { ArticleCard } from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/lib/articles";
import { CATEGORIES, type Category } from "@/types/article";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};

  return {
    title: cat.label,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  const articles = getArticlesByCategory(category as Category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-10 border-b border-stone-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
          Section
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-stone-900">
          {cat.label}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-stone-500">{cat.description}</p>
      </header>

      {articles.length === 0 ? (
        <p className="text-stone-400">No articles in this section yet.</p>
      ) : (
        <div className="max-w-3xl">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
