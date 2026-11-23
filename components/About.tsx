"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cta } from "@/lib/ui";
import { doctors } from "@/lib/config";
import Reveal from "./Reveal";
export default function About() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section id="about" className="bg-light py-16 sm:py-24"><div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm"><span className="pulse-dot h-2 w-2 rounded-full bg-secondary" aria-hidden />Our Dentists</span>
        <h2 className="mt-4 font-serif text-3xl text-dark sm:text-4xl">Meet Our Doctors</h2>
      </Reveal>
      <div className="mt-10 space-y-8">
        {doctors.map(d => { const more = expanded === d.name; return (
          <Reveal key={d.name}>
            <div className="grid items-start gap-8 rounded-3xl border border-primary/10 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg sm:p-8 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-12">
              <div className={`group overflow-hidden rounded-[1.75rem] shadow-sm ring-1 ring-black/5`}>
                <Image src={d.image} alt={`Portrait of ${d.name}`} width={1024} height={1536} unoptimized loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-xs object-cover object-top transition duration-500 group-hover:scale-105 sm:max-w-sm lg:max-w-none" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">{d.name}</h3>
                <p className="text-sm font-medium text-dark">{d.role}</p><p className="text-xs">{d.qualification}</p>
                <p className="mt-4">{d.intro[0]}</p>
                {more && (<div id={`more-${d.name}`}>
                  {d.intro.slice(1).map(t => <p key={t} className="mt-3">{t}</p>)}
                  <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-dark">Education &amp; training</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5">{d.training.map(t => <li key={t.label}><span className="font-semibold text-dark">{t.label}:</span> {t.text}</li>)}</ul>
                  <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-dark">Areas of expertise</h4>
                  <div className="mt-2 flex flex-wrap gap-2">{d.expertise.map(e => <span key={e} className="rounded-full border border-primary/20 bg-light px-3 py-1 text-xs font-medium text-primary">{e}</span>)}</div>
                  <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-dark">Practice philosophy</h4>
                  <p className="mt-2 border-l-4 border-secondary pl-4 italic">{d.philosophy}</p>
                </div>)}
                <button type="button" aria-expanded={more} aria-controls={`more-${d.name}`} onClick={() => setExpanded(more ? null : d.name)} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">{more ? "See less" : "See more details"}<ChevronDown className={`h-4 w-4 transition ${more ? "rotate-180" : ""}`} /></button>
                <div><a href="#appointment" className={`${cta} mt-4 inline-block px-6 py-3`}>Book an Appointment</a></div>
              </div>
            </div>
          </Reveal>
        ); })}
      </div>
    </div></section>
  );
}
