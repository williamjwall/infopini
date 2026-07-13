import Link from "next/link";
import { CATEGORIES } from "@/types/article";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-2xl font-bold text-brand">Infopini</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-500">
              Independent intelligence on the companies, deals, and policy decisions
              shaping technology and life sciences.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Coverage
            </p>
            <ul className="mt-4 space-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-sm text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              About
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-500">
              Deeply reported analysis with structured data — company profiles, deal
              timelines, executive moves, and sector benchmarks.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-6 text-xs text-stone-400 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Infopini. All rights reserved.</span>
          <span>Editorial intelligence · Validated data · Enterprise-ready</span>
        </div>
      </div>
    </footer>
  );
}
