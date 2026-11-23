import { clinic, waLink } from "@/lib/config";
import { InstagramLogo, WhatsAppLogo, YouTubeLogo } from "./BrandIcons";

const base = "grid h-12 w-12 place-items-center rounded-full text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl";

export default function FloatingButtons() {
  return (
    <div aria-label="Social media" className="fixed bottom-20 right-4 z-50 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a href={clinic.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`${base} bg-[#FF0000]`}><YouTubeLogo size={24} color="#fff" /></a>
      <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`${base}`} style={{ background: "radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285AEB 90%)" }}><InstagramLogo size={24} color="#fff" /></a>
      <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={`${base} float-wa bg-[#25D366]`}><WhatsAppLogo size={26} color="#fff" /></a>
    </div>
  );
}
