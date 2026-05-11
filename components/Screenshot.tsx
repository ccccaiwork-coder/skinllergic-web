import Image from "next/image";

export function Screenshot({
  src,
  caption,
  index,
}: {
  src: string;
  caption: string;
  index: number;
}) {
  return (
    <figure className="flex w-[260px] shrink-0 flex-col gap-3 snap-center">
      <div className="aspect-[9/19.5] w-full overflow-hidden rounded-[2.2rem] border border-line bg-white shadow-[0_30px_60px_-30px_rgba(224,92,74,0.35)]">
        <Image
          src={src}
          alt={caption}
          width={520}
          height={1127}
          priority={index < 2}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="text-sm text-ink-muted leading-snug">{caption}</figcaption>
    </figure>
  );
}
