"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { clinic, nav, waLink } from "@/lib/config";
import { WhatsAppLogo } from "./BrandIcons";
const wa = "inline-flex items-center justify-center gap-2 rounded-full bg-[#0F7B6C] font-semibold text-white transition hover:brightness-110";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-40 backdrop-blur transition-all ${scrolled ? "bg-white/90 shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label={`${clinic.name} home`} className="flex items-center">
          <Image src="/images/logo-trimmed.png" alt={clinic.name} width={186} height={97} priority className="h-12 w-auto shrink-0 sm:h-14" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="text-sm font-medium hover:text-primary">{n.label}</Link>
          ))}
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className={`${wa} px-5 py-2.5 text-sm`}><WhatsAppLogo size={18} color="#fff" />WhatsApp Us</a>
        </nav>
        <button className="p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-nav" aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden md:hidden">
            <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
              {nav.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium hover:bg-light">{n.label}</Link>)}
              <a href={waLink()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={`${wa} mt-2 py-3`}><WhatsAppLogo size={18} color="#fff" />WhatsApp Us</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
