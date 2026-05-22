import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, SectionHeader } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 120, suffix: "+", label: "بطولات مُحرَزة" },
  { value: 850, suffix: "+", label: "طلاب نشطون" },
  { value: 24, suffix: "", label: "مدربون معتمدون" },
  { value: 15, suffix: "+", label: "سنوات خبرة" },
];

export function Achievements() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="الإنجازات"
          title="أرقام تترك أثراً"
        />
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="hover-lift rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
                <div className="font-display text-5xl font-bold text-ocean sm:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
