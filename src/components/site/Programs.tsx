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
  { icon: Baby, title: "Kids Swimming Classes", desc: "Playful, structured progression for ages 4–12 with water-safety first." },
  { icon: User, title: "Adult Swimming Lessons", desc: "Beginner-friendly to stroke refinement. Build confidence and stamina." },
  { icon: Trophy, title: "Competitive Training", desc: "Race technique, starts, turns, and meet preparation for elite athletes." },
  { icon: Sparkles, title: "Female-Only Classes", desc: "Private, comfortable sessions with certified female coaches." },
  { icon: UserCheck, title: "Private Coaching", desc: "1-on-1 personalized programs accelerating measurable progress." },
  { icon: Activity, title: "Aqua Fitness", desc: "Low-impact, high-result group workouts for strength & recovery." },
];

export function Programs() {
  return (
    <section id="programs" className="relative bg-foam py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Programs"
          title="A Program for Every Swimmer"
          subtitle="From first splash to podium finish — find the right lane for your goals."
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
