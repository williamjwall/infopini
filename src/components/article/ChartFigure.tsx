import type { ReactNode } from "react";
import Link from "next/link";

export function ChartFigure({
  title,
  caption,
  source,
  sourceRef,
  sourceUrl,
  children,
}: {
  title: string;
  caption: string;
  source?: string;
  sourceRef?: number | number[];
  sourceUrl?: string;
  children: ReactNode;
}) {
  const refs = sourceRef
    ? Array.isArray(sourceRef)
      ? sourceRef
      : [sourceRef]
    : [];

  return (
    <figure className="my-8 max-w-full overflow-hidden rounded-sm border border-stone-200 bg-white md:my-10">
      <div className="border-b border-stone-100 bg-stone-50 px-4 py-3 md:px-5">
        <figcaption className="font-serif text-sm font-semibold leading-snug break-words text-stone-800">
          {title}
        </figcaption>
      </div>
      <div className="min-w-0 max-w-full overflow-x-auto px-2 py-5 sm:px-4 md:px-6 md:py-6">
        {children}
      </div>
      <div className="border-t border-stone-100 bg-stone-50 px-4 py-3 md:px-5">
        <p className="text-xs leading-relaxed break-words text-stone-500">{caption}</p>
        {(source || refs.length > 0 || sourceUrl) && (
          <p className="mt-2 text-xs text-stone-400">
            Source:{" "}
            {sourceUrl ? (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 underline decoration-stone-300 underline-offset-2 hover:text-stone-900"
              >
                {source}
              </a>
            ) : (
              <span>{source}</span>
            )}
            {refs.length > 0 && (
              <>
                {" "}
                — see{" "}
                {refs.map((ref, i) => (
                  <span key={ref}>
                    {i > 0 && ", "}
                    <Link
                      href={`#ref-${ref}`}
                      className="font-medium text-stone-600 underline decoration-stone-300 underline-offset-2 hover:text-stone-900"
                    >
                      [{ref}]
                    </Link>
                  </span>
                ))}
              </>
            )}
          </p>
        )}
      </div>
    </figure>
  );
}
