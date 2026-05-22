import { Reveal, SectionHeader } from "./Reveal";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import c1 from "@/assets/coach-1.jpg";
import c2 from "@/assets/coach-2.jpg";
import c3 from "@/assets/coach-3.jpg";

const coaches = [
  { img: c1, name: "Marco Silva", role: "المدير الفني", exp: "15+ عامًا", certs: "معتمد FINA مستوى 3 · مدرب أولمبي" },
  { img: c2, name: "Sara Mitchell", role: "مديرة برامج الأطفال والنساء", exp: "10+ سنوات", certs: "معتمدة ASCA · إنقاذ محترفة" },
  { img: c3, name: "Daniel Ortega", role: "مدرب الأداء", exp: "12+ عامًا", certs: "ماجستير علوم الرياضة · قوة وتكيّف" },
];

export function Coaches() {
  return (
    <section id="coaches" className="relative bg-foam py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="التعرّف على المدربين"
          title="خبراء عالميون. رعاية حقيقية."
          subtitle="يجمع مدربونا بين الخبرة القوية والشغف في رعاية كل سباح."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <article className="group hover-lift overflow-hidden rounded-3xl bg-card shadow-soft">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={c.img}
                    alt={`${c.name}, ${c.role} at Crocodils Swimming Academy`}
                    width={768}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/85 via-ocean/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="text-xs font-semibold uppercase tracking-widest text-aqua">{c.role}</div>
                    <h3 className="mt-1 text-2xl font-bold">{c.name}</h3>
                    <p className="mt-1 text-sm text-white/85">{c.certs}</p>
                    <p className="mt-1 text-xs text-white/70">{c.exp} experience</p>
                    <div className="mt-4 flex gap-2">
                      {[Instagram, Twitter, Linkedin].map((Ic, idx) => (
                        <a
                          key={idx}
                          href="#"
                          aria-label="Social profile"
                          className="grid h-9 w-9 place-items-center rounded-full glass text-white transition hover:bg-coral"
                        >
                          <Ic className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
