export function Cite({ id }: { id: number }) {
  return (
    <sup>
      <a
        href={`#ref-${id}`}
        className="ml-0.5 text-[0.7em] font-medium text-stone-400 no-underline hover:text-stone-700"
      >
        [{id}]
      </a>
    </sup>
  );
}
