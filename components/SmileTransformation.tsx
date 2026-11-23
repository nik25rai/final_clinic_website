import Image from "next/image";
import { cta } from "@/lib/ui";
import Reveal from "./Reveal";
export default function SmileTransformation() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
      <Reveal><h2 className="font-serif text-3xl text-dark sm:text-4xl">Transform Your Smile</h2>
        <p className="mx-auto mt-3 max-w-xl">Every smile is different. Results depend on your teeth, your treatment and how you care for them. Use only clinic-approved before and after photos here.</p></Reveal>
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4">
        {[["gallery-2", "Case 1"], ["gallery-5", "Case 2"]].map(([f, l]) => <figure key={f}><Image src={`/images/${f}.jpeg`} alt={`${l} before and after photo`} width={1280} height={1280} unoptimized className="aspect-square w-full rounded-3xl object-cover" /><figcaption className="mt-2 text-sm font-semibold">{l}</figcaption></figure>)}
      </div>
      <a href="#appointment" className={`${cta} mt-8 inline-block px-7 py-3`}>Start Your Smile Journey</a>
    </section>
  );
}
