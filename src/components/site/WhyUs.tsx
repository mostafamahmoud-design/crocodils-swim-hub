import { Reveal, SectionHeader } from "./Reveal";
import { BadgeCheck, Building2, ShieldCheck, Users, CalendarClock, Globe2 } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "مدربون معتمدون", desc: "محترفون معتمدون من FINA وASCA ومنقذون معتمدون." },
  { icon: Building2, title: "مرافق حديثة", desc: "مسابح داخلية مدفأة، مناطق تعافي، وتحليل فيديو." },
  { icon: ShieldCheck, title: "بيئة آمنة", desc: "منقذون حاضرون دائماً. معايير نظافة صارمة." },
  { icon: Users, title: "مجموعات صغيرة", desc: "كحد أقصى 6 طلاب لكل مدرب — اهتمام حقيقي وتقدم ملموس." },
  { icon: CalendarClock, title: "جدول مرن", desc: "فترات صباحية ومسائية وعطلات تناسب العائلات." },
  { icon: Globe2, title: "معايير عالمية", desc: "منهج متوافق مع اتحادات السباحة العالمية." },
];

export function WhyUs() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="لماذا Crocodils"
          title="أكاديمية يثق بها الآباء والرياضيون"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group hover-lift flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-aqua/15 text-ocean transition group-hover:bg-ocean group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-ocean">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
