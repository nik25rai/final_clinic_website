import Image from "next/image";
import Reveal from "./Reveal";
const tech = [["Digital X-Rays", "Images that help plan treatment."], ["Digital Scanning", "Comfortable digital impressions."], ["Advanced Sterilization", "Instrument hygiene protocols."], ["Modern Treatment Equipment", "Tools suited to your treatment."]];
export default function Technology() {
  return (
    <section className="bg-dark py-16 text-white"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
      <Reveal><h2 className="font-serif text-3xl sm:text-4xl">Technology that supports careful dentistry</h2>
        <dl className="mt-6 space-y-4">{tech.map(([t, d]) => <div key={t}><dt className="font-semibold">{t}</dt><dd className="text-sm text-white/75">{d}</dd></div>)}</dl></Reveal>
      <Image src="/images/tech.jpeg" alt="Dental X-ray of a vertical tooth fracture" width={1280} height={1280} unoptimized className="mx-auto aspect-square w-full max-w-lg rounded-[2rem] object-cover" />
    </div></section>
  );
}
