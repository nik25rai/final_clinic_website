import Image from "next/image";
import { clinicPhotos } from "@/data/cases";
import Reveal from "./Reveal";

const tiles = [
  "col-span-2 aspect-[4/3] md:col-span-3 md:aspect-[16/9] lg:col-span-1 lg:aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[3/4]",
  "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[3/4]",
];

export default function ClinicTour() {
  return (
    <section id="clinic" className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal className="grid items-end gap-4 lg:grid-cols-2 lg:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-light px-3 py-1 text-xs font-semibold text-primary"><span className="pulse-dot h-2 w-2 rounded-full bg-secondary" aria-hidden />Our Clinic</span>
          <h2 className="mt-4 font-serif text-3xl text-dark sm:text-4xl">A calm, modern space for your care</h2>
        </div>
        <p className="text-sm lg:max-w-md lg:justify-self-end">A welcoming reception, a clean treatment area and equipment set up for careful dentistry.</p>
      </Reveal>
      <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-[1.333fr_.75fr_.75fr_.75fr]">
        {clinicPhotos.map((p, i) => (
          <figure key={p.src} className={`group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl ${tiles[i]}`}>
            <Image src={p.src} alt={p.alt} width={1280} height={960} unoptimized loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-10 text-xs font-medium text-white sm:text-sm">{p.caption}</figcaption>
          </figure>
        ))}
      </Reveal>
    </div></section>
  );
}
