"use client";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/config";
function Num({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion(); const [n, setN] = useState(0);
  useEffect(() => { if (!inView) return; if (reduce) { setN(value); return; }
    const c = animate(0, value, { duration: 1.4, onUpdate: v => setN(Math.round(v*10)/10) }); return () => c.stop(); }, [inView, value, reduce]);
  return <span ref={ref}>{n.toLocaleString("en-IN",{maximumFractionDigits:1})}{suffix}</span>;
}
export default function Stats() {
  return (
    <div aria-label="Clinic statistics" className="mt-10 rounded-3xl border border-primary/10 bg-light px-6 py-8">
      <dl className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
        {stats.map(s => <div key={s.label}><dd className="font-serif text-4xl text-primary sm:text-5xl"><Num value={s.value} suffix={s.suffix} /></dd><dt className="mt-1 text-sm">{s.label}</dt></div>)}
      </dl>
    </div>
  );
}
