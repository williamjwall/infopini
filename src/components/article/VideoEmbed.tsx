export function VideoEmbed({
  videoId,
  title,
  compact = false,
}: {
  videoId: string;
  title: string;
  compact?: boolean;
}) {
  return (
    <figure
      className={`max-w-full overflow-hidden rounded-sm border border-stone-200 bg-black ${
        compact ? "" : "my-10"
      }`}
    >
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <figcaption
        className={`break-words bg-stone-900 text-stone-400 ${
          compact
            ? "border-t border-stone-800 px-3 py-2 text-[11px] leading-snug"
            : "border-t border-stone-800 px-5 py-3 text-xs"
        }`}
      >
        {title}
      </figcaption>
    </figure>
  );
}
