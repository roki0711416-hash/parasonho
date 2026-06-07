import Photo from "./Photo";

export interface ProgramItem {
  name: string;
  region: string;
  tag: string;
  desc: string;
  src?: string;
}

export default function ProgramGallery({ items }: { items: ProgramItem[] }) {
  return (
    <div className="ps-scroller px-1">
      {items.map((item) => (
        <article
          key={item.name}
          className="ps-snap ps-card group relative w-[80vw] overflow-hidden sm:w-[56vw] md:w-[24rem] lg:w-[26rem]"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Photo
              src={item.src}
              alt={item.name}
              placeholderLabel={item.name}
              sizes="(max-width: 768px) 80vw, 26rem"
              className="transition duration-700 group-hover:scale-[1.06]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1322] via-[#0E1322]/30 to-transparent" />
              <div className="flex h-full flex-col justify-between p-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#F5B041]/40 bg-black/30 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-[#FFD98A] backdrop-blur-sm">
                  {item.tag}
                </span>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-[#F5B041]">{item.region}</p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-white drop-shadow">
                    {item.name}
                  </h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-6 text-white/0 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:text-white/85 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Photo>
          </div>
        </article>
      ))}
    </div>
  );
}
