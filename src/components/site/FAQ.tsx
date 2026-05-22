import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const faqs = [
  { q: "ما العمر الذي يمكن لطفلي أن يبدأ فيه دروس السباحة؟", a: "برنامج الأطفال لدينا يبدأ من سن 4 سنوات. وللأطفال الصغار نقدم جلسات تعريفية مع الوالدين حسب الطلب." },
  { q: "هل يجب أن أعرف السباحة قبل الانضمام؟", a: "ليس بالضرورة. برامج المبتدئين مصممة للمبتدئين تماماً — للأطفال والكبار على حد سواء." },
  { q: "هل المسابح مدفأة وآمنة؟", a: "نعم. جميع مسابح Crocodils مغلقة ومدفأة على مدار العام، ويشرف عليها منقذون محترفون في كل جلسة." },
  { q: "هل يمكنني حجز درس تجربة مجاني؟", a: "بالتأكيد. يحصل الطلاب الجدد على جلسة تجربة مجانية لتجربة التدريب بشكل مباشر." },
  { q: "هل تقدمون دروسًا للنساء فقط؟", a: "نعم — نقدم جلسات مخصصة للنساء فقط مع مدربات معتمدات في بيئة خاصة." },
  { q: "كيف أتابع تقدم طفلي؟", a: "يوفر المدربون تقارير تقدم منظمة وتحديثات شهرية عبر بوابة الأهل." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-foam py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="الأسئلة المتكررة"
          title="أسئلة، وإجابات"
          subtitle="كل ما يطرحه الأهل والسباحون قبل الانضمام إلى Crocodils."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                  >
                    <span className="font-semibold text-ocean">{f.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-aqua/15 text-ocean transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
