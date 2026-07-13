export type Category = "tech" | "biotech" | "policy";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  date: string;
  featured?: boolean;
  sector?: string;
  dataState?: string;
  tags?: string[];
  image?: string;
  imageCredit?: string;
  imageCreditUrl?: string;
  content: string;
}

export const CATEGORIES: { slug: Category; label: string; description: string }[] = [
  {
    slug: "tech",
    label: "Tech",
    description: "Software, AI, and the companies reshaping how we work and live.",
  },
  {
    slug: "biotech",
    label: "Biotech",
    description: "Breakthroughs in medicine, genomics, and the science of life.",
  },
  {
    slug: "policy",
    label: "Policy",
    description: "Regulation, governance, and the decisions that shape industries.",
  },
];

export function getCategoryLabel(category: Category): string {
  return CATEGORIES.find((c) => c.slug === category)?.label ?? category;
}
