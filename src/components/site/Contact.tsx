import { useState } from "react";
import { Mail, MapPin, Phone, Send, Instagram, Facebook, Youtube } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Dive In — Book Your Free Trial"
          subtitle="Tell us a bit about you and we'll get back within 24 hours."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
              }}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-ocean">Full Name</span>
                  <input
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ocean">Phone</span>
                  <input
                    required
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30"
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="text-sm font-medium text-ocean">Email</span>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30"
                />
              </label>
              <label className="mt-4 block">
                <span className="text-sm font-medium text-ocean">Program of interest</span>
                <select className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30">
                  <option>Kids Swimming</option>
                  <option>Adult Lessons</option>
                  <option>Competitive Training</option>
                  <option>Female-Only Classes</option>
                  <option>Private Coaching</option>
                  <option>Aqua Fitness</option>
                </select>
              </label>
              <label className="mt-4 block">
                <span className="text-sm font-medium text-ocean">Message</span>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/30"
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 font-semibold text-white shadow-soft transition hover:scale-[1.02] hover:shadow-glow"
              >
                {sent ? "Thanks! We'll be in touch." : (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
                <h3 className="text-xl font-bold text-ocean">Visit the Academy</h3>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-aqua/15 text-ocean">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-medium text-ocean">Crocodils HQ Pool</div>
                      <div className="text-sm text-muted-foreground">
                        24 Marina Boulevard, Bay District
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-aqua/15 text-ocean">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-medium text-ocean">+1 (555) 123-4567</div>
                      <div className="text-sm text-muted-foreground">Mon–Sat · 8am – 8pm</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-aqua/15 text-ocean">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-medium text-ocean">hello@crocodils.academy</div>
                      <div className="text-sm text-muted-foreground">We reply within 24h</div>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex gap-3">
                  {[Instagram, Facebook, Youtube].map((I, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="Social link"
                      className="grid h-10 w-10 place-items-center rounded-full bg-foam text-ocean transition hover:bg-ocean hover:text-white"
                    >
                      <I className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <iframe
                  title="Crocodils Swimming Academy location"
                  src="https://www.google.com/maps?q=swimming%20pool&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  className="block w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
