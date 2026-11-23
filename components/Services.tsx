import { services } from "@/data/services";
import { actionPhotos } from "@/data/cases";
import ServiceCard from "./ServiceCard";
import TreatmentSlider from "./TreatmentSlider";
import Reveal from "./Reveal";
export default function Services() {
  return (
    <section id="services" className="bg-light py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Reveal><h2 className="max-w-xl font-serif text-3xl text-dark sm:text-4xl">Treatments for every stage of dental care</h2></Reveal>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{services.map(s => <ServiceCard key={s.slug} s={s} />)}</ul>
      <Reveal className="mt-14"><TreatmentSlider photos={actionPhotos} /></Reveal>
    </div></section>
  );
}
