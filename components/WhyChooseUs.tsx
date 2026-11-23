import Link from "next/link";
import { UserCheck, Cpu, ClipboardList, Armchair, MessagesSquare, HeartHandshake, Users, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import Stats from "./Stats";
const items = [
  [UserCheck, "Experienced Dental Professionals", "Care led by trained dentists."], [Cpu, "Modern Dental Technology", "Up-to-date equipment for accurate diagnosis."],
  [ClipboardList, "Personalized Treatment Plans", "Plans built around your needs."], [Armchair, "Comfortable Clinic Environment", "A calm, clean space."],
  [MessagesSquare, "Transparent Communication", "Options and costs explained upfront."], [HeartHandshake, "Patient-First Care", "Your comfort comes first."],
  [Users, "Kids & Family Dentistry", "Care for children, adults and families under one roof."],
] as const;
export default function WhyChooseUs() {
  return (
    <section id="speciality" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="dots-bg opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-light px-4 py-1.5 text-xs font-semibold text-primary"><span className="pulse-dot h-2 w-2 rounded-full bg-secondary" aria-hidden />Why patients choose us</span>
          <h2 className="mt-4 font-serif text-3xl text-dark sm:text-4xl">Our <span className="text-primary">Speciality</span></h2>
          <p className="mt-3">Advanced, compassionate dental care delivered with modern technology and a personal touch.</p>
        </Reveal>
        <Stats />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([I, t, d]) => (
            <li key={t} className="card-shine rounded-3xl border-2 border-primary/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-light text-primary"><I aria-hidden /></span>
              <h3 className="mt-4 font-semibold text-dark">{t}</h3><p className="mt-1 text-sm">{d}</p>
            </li>
          ))}
          <li>
            <Link href="#appointment" className="card-shine block h-full rounded-3xl border-2 border-primary bg-primary p-6 text-white transition duration-300 hover:-translate-y-1 hover:border-white/60 hover:shadow-lg">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><PhoneCall aria-hidden /></span>
              <span className="mt-3 inline-block rounded-full bg-white/15 px-3 py-0.5 text-xs font-semibold">Urgent care</span>
              <h3 className="mt-2 font-semibold">Emergency Dental Support</h3><p className="mt-1 text-sm text-white/80">Quick help for tooth pain, fractures and urgent concerns. Call or message us.</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
