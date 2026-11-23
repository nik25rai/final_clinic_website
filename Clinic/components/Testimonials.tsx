"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { extra } from "@/lib/config";
import { GoogleLogo } from "./BrandIcons";
export default function Testimonials() {
  const ref = useRef<HTMLUListElement>(null);
  const go = (d: number) => ref.current?.scrollBy({ left: d * (ref.current.firstElementChild?.clientWidth ?? 300), behavior: "smooth" });
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-primary/10 bg-white px-5 py-2 shadow-sm">
          <GoogleLogo size={22} /><span className="text-sm font-semibold text-dark">Google Reviews</span>
          <span className="font-bold text-dark">{extra.rating}</span>
          <span className="flex text-amber-500" role="img" aria-label={`${extra.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, k) => <Star key={k} size={16} fill="currentColor" />)}</span>
          <span className="text-sm">{extra.reviewCount} Reviews</span>
        </div>
        <h2 className="mt-5 font-serif text-3xl text-dark sm:text-4xl">What Our Patients Say</h2>
        <p className="mt-2 text-sm">Placeholder reviews for layout only. Replace with real reviews.</p>
      </div>
      <div className="mt-6 flex justify-end gap-2"><button onClick={() => go(-1)} aria-label="Previous reviews" className="rounded-full border p-2"><ChevronLeft /></button><button onClick={() => go(1)} aria-label="Next reviews" className="rounded-full border p-2"><ChevronRight /></button></div>
      <ul ref={ref} className="mt-4 flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-4" tabIndex={0} aria-label="Testimonials">
        {testimonials.map((t, i) => <li key={i} className="w-full flex-none snap-start px-2 sm:w-1/2 lg:w-1/3"><figure className="h-full rounded-3xl border border-primary/10 p-6">
          <div className="flex text-amber-500" role="img" aria-label={`${t.rating} out of 5 stars`}>{Array.from({ length: t.rating }, (_, k) => <Star key={k} size={16} fill="currentColor" />)}</div>
          <blockquote className="mt-3">{t.review}</blockquote><figcaption className="mt-4 text-sm"><b>{t.name}</b> · {t.treatment}</figcaption></figure></li>)}
      </ul>
      <a href={extra.reviewsUrl} className="mt-4 inline-block rounded-full border border-primary px-6 py-3 font-semibold text-primary">View Google Reviews</a>
    </section>
  );
}
