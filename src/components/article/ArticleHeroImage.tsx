import Image from "next/image";

export function ArticleHeroImage({
  src,
  alt,
  credit,
  creditUrl,
}: {
  src: string;
  alt: string;
  credit?: string;
  creditUrl?: string;
}) {
  return (
    <figure className="relative -mx-4 mb-10 overflow-hidden md:mx-0 md:rounded-sm">
      <div className="relative aspect-[16/9] w-full bg-stone-100 md:aspect-[2/1]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>
      {credit && (
        <figcaption className="mt-2 text-right text-xs text-stone-400">
          {creditUrl ? (
            <a
              href={creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-stone-300 underline-offset-2 hover:text-stone-600"
            >
              {credit}
            </a>
          ) : (
            credit
          )}
        </figcaption>
      )}
    </figure>
  );
}
