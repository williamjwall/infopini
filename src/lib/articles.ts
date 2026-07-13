import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article, Category } from "@/types/article";

const contentDir = path.join(process.cwd(), "content", "articles");

function parseArticle(filename: string): Article {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category as Category,
    author: data.author ?? "Infopini Staff",
    date: data.date,
    featured: data.featured ?? false,
    sector: data.sector,
    dataState: data.dataState,
    tags: data.tags,
    image: data.image,
    imageCredit: data.imageCredit,
    imageCreditUrl: data.imageCreditUrl,
    content,
  };
}

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  return files
    .map(parseArticle)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;
  return parseArticle(`${slug}.md`);
}

export function getArticlesByCategory(category: Category): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getFeaturedArticle(): Article | undefined {
  return getAllArticles().find((a) => a.featured);
}
