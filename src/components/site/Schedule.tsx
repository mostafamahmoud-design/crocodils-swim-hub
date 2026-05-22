import { Reveal, SectionHeader } from "./Reveal";

const rows = [
  { level: "مبتدئو الأطفال", mon: "4:00 م", wed: "4:00 م", fri: "4:00 م", sat: "10:00 ص" },
  { level: "متوسطو الأطفال", mon: "5:00 م", wed: "5:00 م", fri: "5:00 م", sat: "11:00 ص" },
  { level: "مبتدئو الكبار", mon: "7:00 م", wed: "7:00 م", fri: "—", sat: "9:00 ص" },
  { level: "فرقة التنافس", mon: "6:00 ص", wed: "6:00 ص", fri: "6:00 ص", sat: "7:00 ص" },
  { level: "دروس للسيدات فقط", mon: "—", wed: "6:00 م", fri: "—", sat: "12:00 م" },
  { level: "لياقة مائية", mon: "8:00 ص", wed: "8:00 ص", fri: "8:00 ص", sat: "—" },
];

export function Schedule() {
  return (
    <section id="schedule" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="جدول التدريب"
          title="اختر الوقت المناسب لك"
          subtitle="الجلسات مستمرة طوال العام في مسابحنا المغلقة والمدفأة. احجز مبكراً — المقاعد تمتلئ سريعاً."
        />

        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-right">
              <thead className="gradient-ocean text-white">
                <tr>
                  {["Level", "Mon", "Wed", "Fri", "Sat"].map((h) => (
                    <th key={h} className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.level}
                    className={`transition hover:bg-aqua/10 ${i % 2 ? "bg-foam/60" : ""}`}
                  >
                    <td className="px-6 py-4 font-semibold text-ocean">{r.level}</td>
                    <td className="px-6 py-4 text-sm">{r.mon}</td>
                    <td className="px-6 py-4 text-sm">{r.wed}</td>
                    <td className="px-6 py-4 text-sm">{r.fri}</td>
                    <td className="px-6 py-4 text-sm">{r.sat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border p-6">
            <p className="text-sm text-muted-foreground">
              الأوقات المعروضة محلية. قد يختلف الجدول في العطلات.
            </p>
            <a
              href="#contact"
              className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-105"
            >
              احجز مكانك
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
