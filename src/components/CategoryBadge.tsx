import Link from "next/link";
import type { Category } from "@/types/article";
import { getCategoryLabel } from "@/types/article";

const categoryColors: Record<Category, string> = {
  tech: "bg-blue-50 text-blue-700 hover:bg-blue-100",
  biotech: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
  policy: "bg-amber-50 text-amber-800 hover:bg-amber-100",
};

export function CategoryBadge({ category }: { category: Category }) {
  return (
    <Link
      href={`/${category}`}
      className={`inline-block rounded-sm px-2 py-0.5 text-xs font-medium uppercase tracking-wide transition-colors ${categoryColors[category]}`}
    >
      {getCategoryLabel(category)}
    </Link>
  );
}
