import type { ReactNode } from "react";
import { AmiLabsBriefing } from "@/components/articles/AmiLabsBriefing";

const RICH_ARTICLES: Record<string, () => ReactNode> = {
  "ami-labs-briefing": () => <AmiLabsBriefing />,
};

export function getRichArticleContent(slug: string): ReactNode | null {
  const renderer = RICH_ARTICLES[slug];
  return renderer ? renderer() : null;
}

export function hasRichArticle(slug: string): boolean {
  return slug in RICH_ARTICLES;
}
