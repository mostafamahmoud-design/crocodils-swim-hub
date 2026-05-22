import { motion } from "framer-motion";
import { ChevronRight, Play, Trophy, Users, ShieldCheck, Droplets } from "lucide-react";
import heroImg from "@/assets/hero-swimmer.jpg";

const stats = [
<<<<<<< HEAD
  { icon: Users, value: "500+", label: "طلاب مدرَّبون" },
  { icon: Trophy, value: "محترفون", label: "مدربون معتمدون" },
  { icon: ShieldCheck, value: "أولمبي", label: "تدريب بمعايير" },
  { icon: Droplets, value: "مغلق", label: "مسابح مدفأة" },
=======
  { icon: Users, value: "500+", label: "Students Trained" },
  { icon: Trophy, value: "Certified", label: "Pro Coaches" },
  { icon: ShieldCheck, value: "Olympic", label: "Standard Training" },
  { icon: Droplets, value: "Indoor", label: "Heated Pools" },
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-dvh w-full overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Competitive swimmer training underwater in Olympic-standard pool"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep/85 via-ocean/70 to-aqua/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#0A3D62_100%)] opacity-60" />
      </div>

      {/* floating bubbles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/20 blur-sm animate-float"
            style={{
              width: `${20 + i * 14}px`,
              height: `${20 + i * 14}px`,
              left: `${10 + i * 14}%`,
              top: `${20 + (i % 3) * 22}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-4 pb-32 pt-32 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white"
        >
          <span className="h-2 w-2 rounded-full bg-coral animate-pulse" />
          Enrollment open · 2026 season
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
<<<<<<< HEAD
          تدرّب مثل البطل في أكاديمية <span className="gradient-text">Crocodils</span> للسباحة
=======
          Train Like a Champion at{" "}
          <span className="gradient-text">Crocodils</span> Swimming Academy
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl"
        >
<<<<<<< HEAD
          تدريب سباحة احترافي للأطفال والمبتدئين والرياضيين التنافسيين — بإشراف مدربين عالميين في مسابح بمعايير أولمبية.
=======
          Professional swimming coaching for kids, beginners, and competitive
          athletes — guided by world-class coaches in Olympic-standard pools.
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03] animate-pulse-ring"
          >
<<<<<<< HEAD
            احجز تجربة مجانية
=======
            Book a Free Trial
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
            <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold text-white hover:bg-white/20"
          >
            <Play className="h-4 w-4" />
<<<<<<< HEAD
            عرض البرامج
=======
            View Programs
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
          </a>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-4 text-white sm:p-5"
            >
              <s.icon className="mb-3 h-6 w-6 text-aqua" />
              <div className="font-display text-2xl font-bold sm:text-3xl">{s.value}</div>
              <div className="text-xs text-white/75 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* wave divider */}
      <div className="absolute bottom-0 left-0 right-0 -z-0 overflow-hidden leading-none">
        <svg
          className="relative block h-[80px] w-[200%] animate-wave"
          viewBox="0 0 2880 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,40 C320,80 640,0 960,40 C1280,80 1600,0 1920,40 C2240,80 2560,0 2880,40 L2880,80 L0,80 Z"
            fill="hsl(var(--background) / 1)"
            style={{ fill: "var(--background)" }}
          />
        </svg>
      </div>
    </section>
  );
}
