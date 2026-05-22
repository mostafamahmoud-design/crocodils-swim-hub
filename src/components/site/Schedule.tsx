import { Reveal, SectionHeader } from "./Reveal";

const rows = [
  { level: "Kids Beginner", mon: "4:00 PM", wed: "4:00 PM", fri: "4:00 PM", sat: "10:00 AM" },
  { level: "Kids Intermediate", mon: "5:00 PM", wed: "5:00 PM", fri: "5:00 PM", sat: "11:00 AM" },
  { level: "Adult Beginner", mon: "7:00 PM", wed: "7:00 PM", fri: "—", sat: "9:00 AM" },
  { level: "Competitive Squad", mon: "6:00 AM", wed: "6:00 AM", fri: "6:00 AM", sat: "7:00 AM" },
  { level: "Female-Only", mon: "—", wed: "6:00 PM", fri: "—", sat: "12:00 PM" },
  { level: "Aqua Fitness", mon: "8:00 AM", wed: "8:00 AM", fri: "8:00 AM", sat: "—" },
];

export function Schedule() {
  return (
    <section id="schedule" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Training Schedule"
          title="Find Your Perfect Time Slot"
          subtitle="Sessions run year-round in our heated indoor pools. Reserve early — spots fill fast."
        />

        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
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
              Times shown are local. Schedule may vary on holidays.
            </p>
            <a
              href="#contact"
              className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-105"
            >
              Reserve Your Spot
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
