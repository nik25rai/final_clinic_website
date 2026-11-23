"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Photo = { src: string; alt: string };
const btn = "grid h-10 w-10 place-items-center rounded-full border border-primary/20 bg-white text-primary shadow-sm transition hover:border-primary hover:shadow-md disabled:pointer-events-none disabled:opacity-35";

export default function TreatmentSlider({ photos }: { photos: Photo[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const update = useCallback(() => {
    const el = ref.current; if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);
  useEffect(() => { update(); window.addEventListener("resize", update); return () => window.removeEventListener("resize", update); }, [update]);
  const go = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: "smooth" });
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Treatment in action</h3>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(-1)} disabled={edge.start} aria-label="Previous photos" className={btn}><ChevronLeft size={20} aria-hidden /></button>
          <button type="button" onClick={() => go(1)} disabled={edge.end} aria-label="Next photos" className={btn}><ChevronRight size={20} aria-hidden /></button>
        </div>
      </div>
      <ul ref={ref} onScroll={update} tabIndex={0} aria-label="Treatment photos" className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 focus-visible:outline-none">
        {photos.map(p => (
          <li key={p.src} className="group aspect-[4/5] w-56 flex-none snap-start overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-64">
            <Image src={p.src} alt={p.alt} width={960} height={1280} unoptimized loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
          </li>
        ))}
      </ul>
    </div>
  );
}
