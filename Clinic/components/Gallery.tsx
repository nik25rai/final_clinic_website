"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import { cta } from "@/lib/ui";
import { cases, extras, viewerIndex, viewerItems, type Case } from "@/data/cases";
import Lightbox from "./Lightbox";
import MediaGallery from "./MediaGallery";
import Reveal from "./Reveal";

const frame = "group relative block aspect-[2/1] w-full overflow-hidden rounded-xl bg-light shadow-sm ring-1 ring-black/5";
const chip = "absolute left-2 top-2 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide shadow-sm";

function Pair({ c, open }: { c: Case; open: (src: string) => void }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {([["Before", c.before, "bg-white/90 text-dark"], ["After", c.after, "bg-primary text-white"]] as const).map(([label, src, tone]) => (
        <button key={label} type="button" onClick={() => open(src)} aria-label={`Enlarge ${c.title} ${label.toLowerCase()} photo`} className={frame}>
          <Image src={src} alt={`${c.title} ${label.toLowerCase()}`} width={900} height={450} unoptimized loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <span className={`${chip} ${tone}`}>{label}</span>
        </button>
      ))}
    </div>
  );
}

const card = "rounded-3xl border border-primary/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6";

function Spotlight({ c, flip, open }: { c: Case; flip?: boolean; open: (src: string) => void }) {
  return (
    <Reveal>
      <div className={`${card} grid items-center gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-10 lg:p-8`}>
        <div className={flip ? "lg:order-2" : ""}><Pair c={c} open={open} /></div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Patient case</span>
          <h3 className="mt-2 font-serif text-2xl text-dark">{c.title}</h3>
          <p className="mt-2 text-sm">{c.note}</p>
          <a href="#appointment" className={`${cta} mt-5 inline-block px-6 py-2.5 text-sm`}>Book a Consultation</a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const show = (src: string) => setOpen(viewerIndex(src));
  return (
    <section id="gallery" className="bg-light py-16 sm:py-24"><div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm"><span className="pulse-dot h-2 w-2 rounded-full bg-secondary" aria-hidden />Patient Results</span>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl text-dark sm:text-4xl">Smile transformations from our clinic</h2>
        <p className="mt-3 max-w-xl text-sm">Real before and after photos. Tap any photo to enlarge it.</p>
      </Reveal>

      <div className="mt-10 space-y-6">
        <Spotlight c={cases[0]} open={show} />
        <Spotlight c={cases[1]} flip open={show} />

        <div className="grid gap-6 md:grid-cols-2">
          {cases.slice(2).map(c => (
            <Reveal key={c.id}><div className={`${card} h-full`}>
              <Pair c={c} open={show} />
              <h3 className="mt-4 font-semibold text-dark">{c.title}</h3>
              <p className="mt-1 text-sm">{c.note}</p>
            </div></Reveal>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {extras.map(e => (
            <Reveal key={e.src}><div className={`${card} h-full p-4 sm:p-4`}>
              <button type="button" onClick={() => show(e.src)} aria-label={`Enlarge ${e.title}`} className="group block aspect-[4/3] w-full overflow-hidden rounded-xl bg-light ring-1 ring-black/5">
                <Image src={e.src} alt={e.title} width={1280} height={1280} unoptimized loading="lazy" className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
              </button>
              <h3 className="mt-3 text-sm font-semibold text-dark">{e.title}</h3>
              <p className="text-xs">{e.note}</p>
            </div></Reveal>
          ))}
        </div>
      </div>
      <MediaGallery />
      {open !== null && <Lightbox items={viewerItems} index={open} onClose={close} onChange={setOpen} />}
    </div></section>
  );
}
