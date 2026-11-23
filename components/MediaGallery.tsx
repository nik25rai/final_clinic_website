"use client";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { Play } from "lucide-react";
import { allMedia, type MediaItem } from "@/data/media";
import MediaViewer from "./MediaViewer";
import { cta } from "@/lib/ui";
import Reveal from "./Reveal";

const INITIAL = 8;
const tabs = ["All", "Photos", "Videos"] as const;
const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export default function MediaGallery() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const close = useCallback(() => setOpen(null), []);
  const items = useMemo<MediaItem[]>(() => allMedia.filter(m => tab === "All" || (tab === "Photos" ? m.type === "photo" : m.type === "video")), [tab]);
  return (
    <div className="mt-16">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm"><span className="pulse-dot h-2 w-2 rounded-full bg-secondary" aria-hidden />Photos &amp; Videos</span>
        <h3 className="mt-4 font-serif text-2xl text-dark sm:text-3xl">Life at the clinic</h3>
        <div className="mt-5 flex gap-2" role="tablist" aria-label="Filter media">
          {tabs.map(t => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => { setTab(t); setShowAll(false); }} className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${tab === t ? "border-primary bg-primary text-white" : "border-primary/20 bg-white text-primary hover:border-primary"}`}>{t}</button>
          ))}
        </div>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {(showAll ? items : items.slice(0, INITIAL)).map((m, i) => (
          <button key={m.src} type="button" onClick={() => setOpen(i)} aria-label={m.type === "video" ? `Play ${m.alt}` : `Enlarge ${m.alt}`} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-primary">
            <Image src={m.type === "video" ? m.poster : m.src} alt={m.alt} width={480} height={640} unoptimized loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            {m.type === "video" && (<>
              <span className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/30"><span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-primary shadow"><Play className="ml-0.5 h-5 w-5" fill="currentColor" /></span></span>
              <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-0.5 text-[11px] font-semibold text-white">{mmss(m.seconds)}</span>
            </>)}
          </button>
        ))}
      </div>
      {items.length > INITIAL && (
        <div className="mt-6 text-center">
          <button type="button" onClick={() => setShowAll(v => !v)} aria-expanded={showAll} className={`${cta} px-6 py-2.5 text-sm`}>{showAll ? "See less" : `See more (${items.length - INITIAL})`}</button>
        </div>
      )}
      {open !== null && <MediaViewer items={items} index={open} onClose={close} onChange={setOpen} />}
    </div>
  );
}
