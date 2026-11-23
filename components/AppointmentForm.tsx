"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type AppointmentInput } from "@/lib/schema";
import { services } from "@/data/services";
import { extra, waLink } from "@/lib/config";
import { cta } from "@/lib/ui";
const f = "mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800";
const Err = ({ m }: { m?: string }) => (m ? <p role="alert" className="mt-1 text-sm text-red-700">{m}</p> : null);
export default function AppointmentForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<AppointmentInput>({ resolver: zodResolver(appointmentSchema) });
  const [st, setSt] = useState<{ ok: boolean; msg: string } | null>(null);
  const onSubmit = async (d: AppointmentInput) => {
    setSt(null);
    if (!extra.formEndpoint) {
      const m = `Hello, I would like to book a dental appointment.\nName: ${d.name}\nPhone: ${d.phone}\nDate: ${d.date || "-"}\nTime: ${d.time || "-"}\nTreatment: ${d.service || "-"}\n${d.message || ""}`;
      window.open(waLink(m), "_blank", "noopener");
      setSt({ ok: true, msg: "WhatsApp opened with your details. Press send there to contact the clinic. Nothing is booked until they reply." });
      return;
    }
    try {
      const r = await fetch(extra.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) throw new Error();
      setSt({ ok: true, msg: "Enquiry sent. The clinic will contact you to confirm a time." }); reset();
    } catch { setSt({ ok: false, msg: "Could not send your enquiry. Please call or use WhatsApp." }); }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4 text-left sm:grid-cols-2">
      <div><label htmlFor="name">Name *</label><input id="name" className={f} autoComplete="name" {...register("name")} /><Err m={errors.name?.message} /></div>
      <div><label htmlFor="phone">Phone *</label><input id="phone" type="tel" className={f} autoComplete="tel" {...register("phone")} /><Err m={errors.phone?.message} /></div>
      <div><label htmlFor="date">Preferred date</label><input id="date" type="date" className={f} {...register("date")} /><Err m={errors.date?.message} /></div>
      <div><label htmlFor="time">Preferred time</label><input id="time" type="time" className={f} {...register("time")} /></div>
      <div className="sm:col-span-2"><label htmlFor="service">Treatment</label><select id="service" className={f} {...register("service")}><option value="">Not sure yet</option>{services.map(s => <option key={s.slug}>{s.name}</option>)}</select></div>
      <div className="sm:col-span-2"><label htmlFor="message">Message</label><textarea id="message" rows={3} className={f} {...register("message")} /></div>
      <div className="sm:col-span-2">
        <button disabled={isSubmitting} className={`${cta} w-full px-8 py-3 disabled:opacity-60 sm:w-auto`}>{isSubmitting ? "Sending…" : extra.formEndpoint ? "Send enquiry" : "Continue on WhatsApp"}</button>
        {st && <p role="status" className={`mt-4 rounded-xl p-4 text-sm ${st.ok ? "bg-light text-dark" : "bg-red-50 text-red-800"}`}>{st.msg}</p>}
      </div>
    </form>
  );
}
