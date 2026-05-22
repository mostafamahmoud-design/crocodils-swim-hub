import { Waves, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative gradient-ocean text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                <Waves className="h-5 w-5" />
              </span>
              Crocodils
            </div>
            <p className="mt-4 text-sm text-white/75">
<<<<<<< HEAD
              أكاديمية سباحة بمعايير أولمبية للأطفال والكبار والرياضيين التنافسيين.
=======
              Olympic-standard swimming academy for kids, adults, and competitive athletes.
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
            </p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Facebook, Youtube, Twitter].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-coral"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-aqua">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {["Home", "About", "Coaches", "Schedule", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-aqua">Programs</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {["Kids Swimming", "Adult Lessons", "Competitive", "Female-Only", "Private Coaching", "Aqua Fitness"].map((l) => (
                <li key={l}><a href="#programs" className="hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
<<<<<<< HEAD
            <h4 className="text-sm font-semibold uppercase tracking-widest text-aqua">النشرة</h4>
            <p className="mt-4 text-sm text-white/75">نصائح سباحة، تحديثات الجدول، وعروض الأعضاء المميزة.</p>
=======
            <h4 className="text-sm font-semibold uppercase tracking-widest text-aqua">Newsletter</h4>
            <p className="mt-4 text-sm text-white/75">Swim tips, schedule updates and early-bird offers.</p>
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full bg-white/10 p-1"
            >
              <input
                type="email"
                required
<<<<<<< HEAD
                placeholder="بريدك الإلكتروني"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 outline-none"
              />
              <button className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white hover:scale-105 transition">
                اشترك
=======
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 outline-none"
              />
              <button className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white hover:scale-105 transition">
                Subscribe
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60">
<<<<<<< HEAD
          © {new Date().getFullYear()} أكاديمية Crocodils للسباحة. جميع الحقوق محفوظة.
=======
          © {new Date().getFullYear()} Crocodils Swimming Academy. All rights reserved.
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
        </div>
      </div>
    </footer>
  );
}
