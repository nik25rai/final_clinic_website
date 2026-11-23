import Image from "next/image";
import type { Service } from "@/data/services";
import { ServiceIcon } from "@/lib/icons";
export default function ServiceCard({ s }: { s: Service }) {
  return (
    <li className="group card-shine flex flex-col overflow-hidden rounded-3xl border-2 border-primary/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-light">
        <Image src={s.image} alt={`${s.name} example`} width={800} height={600} unoptimized loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-full bg-white shadow"><ServiceIcon name={s.icon} className="h-5 w-5 text-primary" /></span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-dark">{s.name}</h3>
        <p className="mt-2 text-sm">{s.short}</p>
        <a href="#appointment" className="mt-auto inline-block pt-4 text-sm font-semibold text-primary" aria-label={`Learn more about ${s.name}`}>Learn more</a>
      </div>
    </li>
  );
}
