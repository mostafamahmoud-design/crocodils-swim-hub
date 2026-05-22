import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "./Reveal";

const reviews = [
  {
    name: "Aisha R.",
<<<<<<< HEAD
    role: "والدة ليو، 8 سنوات",
    text: "تحول ليو من الخوف من الماء إلى السباحة 25 مترًا في ثلاثة أشهر. المدربون يهتمون حقًا.",
=======
    role: "Parent of Leo, 8",
    text: "Leo went from being afraid of water to swimming 25m in three months. The coaches genuinely care.",
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
    rating: 5,
  },
  {
    name: "James K.",
<<<<<<< HEAD
    role: "سباح تنافسي",
    text: "عمل التقنية والتحضير للبطولات في Crocodils رفع زمن 100م حر إلى رقم شخصي جديد. مستوى مميز حقًا.",
=======
    role: "Competitive Swimmer",
    text: "The technique work and meet prep at Crocodils took my 100m freestyle to a new personal best. Truly elite level.",
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
    rating: 5,
  },
  {
    name: "Maya O.",
<<<<<<< HEAD
    role: "مبتدئة بالغة",
    text: "تعلمت السباحة في سن 34! الدروس الصبورة والمنظمة جعلت الأمر ممكنًا منذ اليوم الأول.",
=======
    role: "Adult Beginner",
    text: "I learned to swim at 34! The patient, structured lessons made it feel achievable from day one.",
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
    rating: 5,
  },
  {
    name: "Hassan A.",
<<<<<<< HEAD
    role: "والد ليلى، 11 سنة",
    text: "مرفق آمن، مدربون محترفون، وجو يحفز الأطفال. يستحق كل ريال.",
=======
    role: "Parent of Layla, 11",
    text: "Safe facility, professional coaches, and a vibe that motivates kids. Worth every penny.",
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section id="testimonials" className="relative overflow-hidden gradient-ocean py-24 text-white sm:py-32">
      <div className="absolute inset-0 opacity-30">
<<<<<<< HEAD
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-aqua blur-3xl" />
        <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-coral blur-3xl" />
=======
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-aqua blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-coral blur-3xl" />
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
<<<<<<< HEAD
          آراء العملاء
        </span>
        <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
          محبوبة من الأهل والرياضيين
=======
          Testimonials
        </span>
        <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
          Loved by Parents & Athletes
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
        </h2>

        <div className="mt-12 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass mx-auto max-w-2xl rounded-3xl p-8 sm:p-10"
            >
              <Quote className="mx-auto h-8 w-8 text-aqua" />
              <blockquote className="mt-4 text-lg italic text-white/95 sm:text-xl">
                "{r.text}"
              </blockquote>
              <div className="mt-6 flex justify-center gap-1">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-coral text-coral" />
                ))}
              </div>
              <figcaption className="mt-4">
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-white/70">{r.role}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full glass hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-8 bg-aqua" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((v) => (v + 1) % reviews.length)}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full glass hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
