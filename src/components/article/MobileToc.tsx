"use client";

export function MobileToc({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav className="mb-8 min-w-0 lg:hidden" aria-label="Article sections">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-400">
        In this briefing
      </p>
      <div className="-mx-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors active:bg-stone-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
