import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { clinic, waLink } from "@/lib/config";
const c = "flex flex-1 flex-col items-center gap-1 py-2 text-xs font-semibold";
export default function MobileCTA() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 flex border-t bg-white md:hidden">
      <a className={c} href={`tel:${clinic.phone.replace(/\s/g, "")}`}><Phone size={18} aria-hidden />Call</a>
      <a className={c} href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden />WhatsApp</a>
      <a className={`${c} bg-primary text-white`} href="#appointment"><CalendarCheck size={18} aria-hidden />Book</a>
    </nav>
  );
}
