"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { MediaItem } from "@/data/media";
export default function MediaViewer({ items, index, onClose, onChange }: { items: MediaItem[]; index: number; onClose: () => void; onChange: (i: number) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const n = items.length;
  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.activeElement as HTMLElement | null;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowRight") onChange((index + 1) % n); if (e.key === "ArrowLeft") onChange((index - 1 + n) % n); };
    window.addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; prev?.focus(); };
  }, [index, n, onClose, onChange]);
  const it = items[index]; const b = "absolute rounded-full bg-white/90 p-3 text-dark";
  return (
    <div role="dialog" aria-modal="true" aria-label="Media viewer" className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
        {it.type === "video"
          ? <video key={it.src} src={it.src} poster={it.poster} controls autoPlay playsInline preload="metadata" aria-label={it.alt} className="mx-auto max-h-[85vh] w-auto max-w-full rounded-2xl bg-black" />
          : <Image src={it.src} alt={it.alt} width={1280} height={1280} unoptimized className="mx-auto h-auto max-h-[85vh] w-auto max-w-full rounded-2xl object-contain" />}
        <button ref={closeRef} onClick={onClose} aria-label="Close" className={`${b} right-2 top-2`}><X /></button>
        <button onClick={() => onChange((index - 1 + n) % n)} aria-label="Previous" className={`${b} left-2 top-1/2 -translate-y-1/2`}><ChevronLeft /></button>
        <button onClick={() => onChange((index + 1) % n)} aria-label="Next" className={`${b} right-2 top-1/2 -translate-y-1/2`}><ChevronRight /></button>
      </div>
    </div>
  );
}
