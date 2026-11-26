function Bento({
  tiles,
}: {
  tiles: [BentoImageTile, BentoImageTile, BentoImageTile, BentoImageTile];
}) {
  const [col1Tall, col1Short, col2Short, col2Tall] = tiles;

  return (
    <div className="grid grid-cols-2 items-start gap-4">
      <div className="flex flex-col gap-4">
        <div className="relative aspect-[272.5/404] w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={col1Tall.src}
            alt={col1Tall.alt}
            fill
            unoptimized
            loading="eager"
            decoding="async"
            sizes="(min-width:1024px) 25vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[274/280] w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={col1Short.src}
            alt={col1Short.alt}
            fill
            unoptimized
            loading="eager"
            decoding="async"
            sizes="(min-width:1024px) 25vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative aspect-[274/280] w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={col2Short.src}
            alt={col2Short.alt}
            fill
            unoptimized
            loading="eager"
            decoding="async"
            sizes="(min-width:1024px) 25vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[272.5/404] w-full overflow-hidden rounded-2xl bg-[#ABE0FF]">
          <Image
            src={col2Tall.src}
            alt={col2Tall.alt}
            fill
            unoptimized
            loading="eager"
            decoding="async"
            sizes="(min-width:1024px) 25vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
