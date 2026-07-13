export interface Reference {
  id: number;
  text: string;
  url?: string;
}

export function References({ items }: { items: Reference[] }) {
  return (
    <section id="references" className="mt-16 border-t-2 border-stone-900 pt-8">
      <h2 className="font-serif text-xl font-bold text-stone-900">References</h2>
      <ol className="mt-6 space-y-3 text-sm leading-relaxed text-stone-600">
        {items.map((ref) => (
          <li key={ref.id} id={`ref-${ref.id}`} className="flex gap-3">
            <span className="shrink-0 font-medium text-stone-400">[{ref.id}]</span>
            <span className="min-w-0 break-words">
              {ref.text}
              {ref.url && (
                <>
                  {" "}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-800 underline decoration-stone-300 underline-offset-2 hover:decoration-stone-600"
                  >
                    Link
                  </a>
                </>
              )}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
