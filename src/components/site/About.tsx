import { Reveal, SectionHeader } from "./Reveal";
import { ShieldCheck, Award, HeartHandshake } from "lucide-react";
import facility from "@/assets/facility.jpg";
import kids from "@/assets/kids-class.jpg";

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
<<<<<<< HEAD
          eyebrow="عن الأكاديمية"
          title="حيث يُصنع الأبطال المستقبليون"
          subtitle="في أكاديمية Crocodils للسباحة، نجمع بين التدريب الأولمبي والبيئة الآمنة والممتعة. كل جولة هي خطوة نحو الثقة والانضباط والنجاح الدائم."
=======
          eyebrow="About the Academy"
          title="Where Future Champions Are Made"
          subtitle="At Crocodils Swimming Academy, we blend Olympic-standard coaching with a safe, joyful environment. Every lap is a step toward confidence, discipline, and lifelong achievement."
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={facility}
                alt="Modern Crocodils indoor swimming facility with lane markers"
                width={1280}
                height={896}
                loading="lazy"
                className="rounded-3xl shadow-soft"
              />
              <img
                src={kids}
                alt="Happy kids swimming class with smiling young students in goggles"
                width={1024}
                height={1024}
                loading="lazy"
<<<<<<< HEAD
                className="absolute -bottom-10 -left-6 hidden w-56 rounded-2xl border-4 border-background shadow-glow sm:block sm:w-64 animate-float"
=======
                className="absolute -bottom-10 -right-6 hidden w-56 rounded-2xl border-4 border-background shadow-glow sm:block sm:w-64 animate-float"
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="text-2xl font-bold text-ocean sm:text-3xl">
<<<<<<< HEAD
              مبنية على السلامة والانضباط والإنجاز.
            </h3>
            <p className="mt-4 text-muted-foreground">
              من أول درس طفو للطفل إلى التحضير للمسابقات العليا، يقدم مدربونا المعتمدون مساراً منظماً بنتائج واضحة — في بيئة مدفأة وعالمية المستوى.
=======
              Built on safety, discipline & achievement.
            </h3>
            <p className="mt-4 text-muted-foreground">
              From a child's first floating lesson to elite competition prep,
              our certified coaches deliver structured progression with
              measurable results — in a heated, world-class environment.
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
            </p>

            <ul className="mt-8 space-y-5">
              {[
<<<<<<< HEAD
                { icon: ShieldCheck, t: "ثقافة السلامة أولاً", d: "حراس إنقاذ في كل منصة، ونسب مدرب/طالب منخفضة." },
                { icon: Award, t: "معايير تدريب محترفة", d: "منهج متوافق مع FINA وASCA يستخدمه كبار الأكاديميات." },
                { icon: HeartHandshake, t: "صديقة للعائلة", d: "برامج للأعمار من 4 سنوات فأكثر مع تقارير تقدم تحبها الأهل." },
=======
                { icon: ShieldCheck, t: "Safety-first culture", d: "Lifeguards on every deck, low coach-to-student ratios." },
                { icon: Award, t: "Pro coaching standards", d: "FINA & ASCA aligned curriculum used by elite academies." },
                { icon: HeartHandshake, t: "Family-friendly", d: "Programs for ages 4+ with progress tracking parents love." },
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
              ].map((f) => (
                <li key={f.t} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aqua/15 text-ocean">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold text-ocean">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
