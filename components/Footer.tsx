import Image from "next/image";
import { InstagramLogo, WhatsAppLogo, YouTubeLogo } from "./BrandIcons";
import { clinic, hours, nav, waLink } from "@/lib/config";
import FooterServices from "./FooterServices";
export default function Footer() {
  const l = "hover:text-white";
  return (
    <footer className="bg-dark text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <span className="inline-flex items-center rounded-xl bg-white px-3 py-2"><Image src="/images/logo-trimmed.png" alt={clinic.name} width={800} height={400} className="h-14 w-auto" /></span>
          <p className="mt-3 text-sm">Modern, patient-centered <br></br>dental care in {clinic.city}.</p>
          <div className="mt-5 flex items-center gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:scale-110"><WhatsAppLogo size={24} /></a>
            <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:scale-110"><InstagramLogo size={22} /></a>
            <a href={clinic.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:scale-110"><YouTubeLogo size={24} /></a>
          </div>
        </div>
        <div><h2 className="font-semibold text-white">Quick links</h2><ul className="mt-3 space-y-2 text-sm">{nav.map(n => <li key={n.href}><a className={l} href={n.href}>{n.label}</a></li>)}</ul></div>
        <div><h2 className="font-semibold text-white">Services</h2><FooterServices /></div>
        <div><h2 className="font-semibold text-white">Contact</h2><address className="mt-3 space-y-2 text-sm not-italic"><p>{clinic.address}</p><p className="pt-2 font-semibold text-white">Contact</p><p><a href={`tel:${clinic.phone.replace(/\s/g, "")}`}>{clinic.phone}</a></p>{hours.map(h => <p key={h.days}>{h.days}: {h.time}</p>)}</address></div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 py-5 text-xs"><span>© {new Date().getFullYear()} {clinic.name}</span><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a></div>
    </footer>
  );
}
