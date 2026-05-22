import { Reveal, SectionHeader } from "./Reveal";
import { BadgeCheck, Building2, ShieldCheck, Users, CalendarClock, Globe2 } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "Certified Coaches", desc: "FINA, ASCA & lifeguard certified professionals." },
  { icon: Building2, title: "Modern Facilities", desc: "Heated indoor pools, recovery areas, video analysis." },
  { icon: ShieldCheck, title: "Safe Environment", desc: "Lifeguards always on deck. Strict hygiene standards." },
  { icon: Users, title: "Small Group Sizes", desc: "Max 6 per coach — real attention, real progress." },
  { icon: CalendarClock, title: "Flexible Scheduling", desc: "Morning, evening, and weekend slots that fit families." },
  { icon: Globe2, title: "International Standards", desc: "Curriculum aligned with global swimming federations." },
];

export function WhyUs() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Crocodils"
          title="An Academy Parents & Athletes Trust"
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
