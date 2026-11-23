"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { services } from "@/data/services";
export default function FooterServices() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <ul className="mt-3 space-y-2 text-sm">
      {services.map(s => {
        const isOpen = open === s.slug;
        return (
          <li key={s.slug} className="rounded-xl border border-white/10">
            <button type="button" aria-expanded={isOpen} aria-controls={`fs-${s.slug}`} onClick={() => setOpen(isOpen ? null : s.slug)} className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left hover:text-white">
              {s.name}<ChevronDown size={14} aria-hidden className={`flex-none transition ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p id={`fs-${s.slug}`} className="px-3 pb-3 text-xs leading-relaxed text-white/70">{s.details}</p>}
          </li>
        );
      })}
    </ul>
  );
}
