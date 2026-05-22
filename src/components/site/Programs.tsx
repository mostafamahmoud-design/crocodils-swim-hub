import { Reveal, SectionHeader } from "./Reveal";
import {
  Baby,
  User,
  Trophy,
  Sparkles,
  UserCheck,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const programs = [
  { icon: Baby, title: "دروس سباحة للأطفال", desc: "تقدّم ممتعة ومنظمة للأعمار من 4 إلى 12 سنة مع التركيز على السلامة في الماء." },
  { icon: User, title: "دروس سباحة للكبار", desc: "مناسبة للمبتدئين وحتى تحسين الأسلوب. تبني الثقة والقوة." },
  { icon: Trophy, title: "تدريب تنافسي", desc: "تقنيات سباق، انطلاقات، دوران، والتحضير للبطولات للرياضيين المتميزين." },
  { icon: Sparkles, title: "دروس للنساء فقط", desc: "جلسات خاصة ومريحة مع مدربات معتمدات." },
  { icon: UserCheck, title: "تدريب خاص", desc: "برامج فردية موزعة لتسريع التقدم القابل للقياس." },
  { icon: Activity, title: "لياقة مائية", desc: "تمارين منخفضة التأثير وفعّالة للمقاومة والتعافي." },
];

export function Programs() {
  return (
    <section id="programs" className="relative bg-foam py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="البرامج"
          title="برنامج لكل سباح"
          subtitle="من أول غطسة إلى منصة التتويج — اعثر على المسار المناسب لهدفك."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group hover-lift relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aqua to-coral opacity-0 transition group-hover:opacity-100" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-ocean text-white shadow-soft">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-ocean">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-coral transition group-hover:gap-2"
                >
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
