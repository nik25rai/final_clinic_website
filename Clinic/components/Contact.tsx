import { ArrowRight, ExternalLink, Home, Mail, MapPin, Phone, Clock } from "lucide-react";
import { clinic, extra, hours, homeLink } from "@/lib/config";
import { cta } from "@/lib/ui";
import AppointmentForm from "./AppointmentForm";
const Row = ({ Icon, title, children }: { Icon: typeof Phone; title: string; children: React.ReactNode }) => (
  <li className="flex gap-4"><span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-white text-primary shadow-sm"><Icon aria-hidden /></span><div><h3 className="font-semibold text-dark">{title}</h3><div className="text-sm">{children}</div></div></li>
);
export default function Contact() {
  const tel = clinic.phone.replace(/\s/g, "");
  return (
    <section id="contact" className="bg-light py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          {extra.practoUrl && (
            <div className="mb-8 rounded-3xl bg-primary p-6 text-white"><h3 className="font-serif text-2xl">Book via Practo</h3><p className="mt-1 text-sm text-white/80">Prefer Practo? Book your appointment there.</p>
              <a href={extra.practoUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary">Book on Practo <ExternalLink size={16} aria-hidden /></a></div>
          )}
          <h2 className="font-serif text-3xl text-dark sm:text-4xl">Get in Touch</h2>
          <p className="mt-3">Ready to transform your smile? Book an appointment or reach out with any questions.</p>
          <ul className="mt-8 space-y-6">
            <Row Icon={MapPin} title="Clinic Address"><address className="not-italic">{clinic.address}</address></Row>
            <Row Icon={Phone} title="Contact"><a href={`tel:${tel}`} className="hover:text-primary">{clinic.phone}</a></Row>
            <Row Icon={Mail} title="Email"><a href={`mailto:${clinic.email}`} className="hover:text-primary">{clinic.email}</a></Row>
            <Row Icon={Clock} title="Clinic Timings">{hours.map(h => <p key={h.days}>{h.days}: {h.time}</p>)}
              {hours.length === 1 && hours[0].days === "Daily" && <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary"><span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />Open 7 days a week</span>}
            </Row>
          </ul>
          <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${cta} mt-8 inline-flex items-center gap-2 px-6 py-3`}><MapPin size={18} aria-hidden />View Clinic on Google Maps</a>
          {extra.mapsEmbed && <iframe title="Clinic location map" src={extra.mapsEmbed} loading="lazy" className="mt-6 h-72 w-full rounded-3xl border-0" />}
        </div>
        <div id="appointment" className="scroll-mt-24 self-start rounded-3xl bg-white p-6 text-slate-700 shadow-lg sm:p-8">
          {extra.homeVisit && (
            <a href={homeLink()} target="_blank" rel="noopener noreferrer" className="group mb-6 flex items-center gap-4 rounded-2xl border border-primary/15 bg-light p-4 transition hover:shadow-md">
              <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-primary text-white"><Home aria-hidden /></span>
              <span className="flex-1"><span className="block font-semibold text-dark">Book Home Dental</span><span className="block text-sm">Home visits available. Message us on WhatsApp to arrange.</span></span>
              <ArrowRight aria-hidden className="flex-none text-primary transition group-hover:translate-x-1" />
            </a>
          )}
          <h3 className="font-serif text-2xl text-dark">Book an Appointment</h3>
          <div className="mt-4"><AppointmentForm /></div>
        </div>
      </div>
    </section>
  );
}
