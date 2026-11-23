"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, Home, Phone, ShieldCheck, Stethoscope } from "lucide-react";
import { clinic, extra, homeLink } from "@/lib/config";
import { cta } from "@/lib/ui";
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-light"><div className="hero-bg" aria-hidden /><div className="hero-dots" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm">
            <span className="pulse-dot h-2 w-2 rounded-full bg-secondary" aria-hidden />Advanced dental care in {clinic.city}
          </span>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-dark sm:text-5xl lg:text-6xl">Your Smile Deserves <span className="text-primary">Exceptional Care</span></h1>
          <p className="mt-5 max-w-lg text-lg">Personalized, modern dental care designed to keep your smile healthy, confident and beautiful.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#appointment" className={`${cta} inline-flex items-center gap-2 px-6 py-3`}><CalendarCheck size={18} aria-hidden /> Book Appointment</Link>
            {extra.homeVisit && <a href={homeLink()} target="_blank" rel="noopener noreferrer" className={`${cta} inline-flex items-center gap-2 px-6 py-3`}><Home size={18} aria-hidden /> Book Home Appointment</a>}
            <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className={`${cta} inline-flex items-center gap-2 px-6 py-3`}><Phone size={18} aria-hidden /> Call Now</a>
          </div>
        </motion.div>
  <div className="overflow-hidden rounded-[3rem_3rem_10rem_3rem]">
    <Image
      src="/images/C.png"
      alt="Modern dental clinic"
      width={1200}
      height={1500}
      className="h-full w-full object-cover"
      priority
    />
  </div>
</div>
        

    </section>
  );
}
