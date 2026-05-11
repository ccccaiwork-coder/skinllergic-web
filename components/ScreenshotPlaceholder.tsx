export function ScreenshotPlaceholder({ caption, index }: { caption: string; index: number }) {
  return (
    <figure className="flex w-[260px] shrink-0 flex-col gap-3 snap-center">
      <div className="aspect-[9/19.5] w-full rounded-[2.2rem] border border-line bg-gradient-to-br from-brand-tint via-white to-brand-light/60 shadow-[0_30px_60px_-30px_rgba(224,92,74,0.35)] flex items-center justify-center text-ink-muted text-sm font-medium">
          <span className="opacity-60">Screenshot {index + 1}</span>
      </div>
      <figcaption className="text-sm text-ink-muted leading-snug">{caption}</figcaption>
    </figure>
  );
}
