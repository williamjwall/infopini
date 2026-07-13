import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/types/article";

export function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
      <div className="border-b border-stone-100 bg-stone-900 text-stone-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs">
          <span>{today}</span>
          <span className="hidden sm:inline">
            Intelligence for technology, biotech &amp; policy leaders
          </span>
          <span className="font-medium text-white">Infopini Intelligence</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="group">
            <span className="font-serif text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Infopini
            </span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <span className="text-xs font-medium uppercase tracking-widest text-stone-400">
              Sections
            </span>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        <nav className="flex items-center gap-6 overflow-x-auto border-t border-stone-100 py-2.5 md:hidden">
          <Link href="/" className="shrink-0 text-sm font-medium text-stone-600">
            Latest
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="shrink-0 text-sm font-medium text-stone-600"
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
