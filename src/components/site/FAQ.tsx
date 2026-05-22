import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const faqs = [
<<<<<<< HEAD
  { q: "ما العمر الذي يمكن لطفلي أن يبدأ فيه دروس السباحة؟", a: "برنامج الأطفال لدينا يبدأ من سن 4 سنوات. وللأطفال الصغار نقدم جلسات تعريفية مع الوالدين حسب الطلب." },
  { q: "هل يجب أن أعرف السباحة قبل الانضمام؟", a: "ليس بالضرورة. برامج المبتدئين مصممة للمبتدئين تماماً — للأطفال والكبار على حد سواء." },
  { q: "هل المسابح مدفأة وآمنة؟", a: "نعم. جميع مسابح Crocodils مغلقة ومدفأة على مدار العام، ويشرف عليها منقذون محترفون في كل جلسة." },
  { q: "هل يمكنني حجز درس تجربة مجاني؟", a: "بالتأكيد. يحصل الطلاب الجدد على جلسة تجربة مجانية لتجربة التدريب بشكل مباشر." },
  { q: "هل تقدمون دروسًا للنساء فقط؟", a: "نعم — نقدم جلسات مخصصة للنساء فقط مع مدربات معتمدات في بيئة خاصة." },
  { q: "كيف أتابع تقدم طفلي؟", a: "يوفر المدربون تقارير تقدم منظمة وتحديثات شهرية عبر بوابة الأهل." },
=======
  { q: "What age can my child start swimming lessons?", a: "Our Kids program starts from age 4. For toddlers, we offer parent-child intro sessions on request." },
  { q: "Do I need to know how to swim before joining?", a: "Not at all. Our beginner programs are designed for absolute first-timers — kids and adults alike." },
  { q: "Are the pools heated and safe?", a: "Yes. All Crocodils pools are indoor, heated year-round, and supervised by certified lifeguards on every session." },
  { q: "Can I book a free trial class?", a: "Absolutely. New students get one complimentary trial session to experience our coaching firsthand." },
  { q: "Do you offer female-only classes?", a: "Yes — we run dedicated female-only sessions with certified female coaches in a private environment." },
  { q: "How do I track my child's progress?", a: "Coaches provide structured progress reports and live updates via our parent portal each month." },
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-foam py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
<<<<<<< HEAD
          eyebrow="الأسئلة المتكررة"
          title="أسئلة، وإجابات"
          subtitle="كل ما يطرحه الأهل والسباحون قبل الانضمام إلى Crocodils."
=======
          eyebrow="FAQ"
          title="Questions, Answered"
          subtitle="Everything parents and swimmers ask before joining Crocodils."
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
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
<<<<<<< HEAD
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
=======
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
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
