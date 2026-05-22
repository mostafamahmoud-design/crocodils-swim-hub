import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Sun, Moon } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-[70] h-1 origin-right bg-gradient-to-r from-aqua to-coral"
    />
  );
}

export function FloatingUI() {
  const [show, setShow] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <a
          href="#contact"
          className="block w-full rounded-full bg-coral py-3 text-center text-sm font-semibold text-white shadow-soft"
        >
          احجز تجربة مجانية
        </a>
      </div>

      <div className="fixed bottom-20 left-4 z-50 flex flex-col gap-3 lg:bottom-6">
        <button
          onClick={() => setDark((v) => !v)}
          aria-label="Toggle dark mode"
          className="grid h-12 w-12 place-items-center rounded-full bg-card text-ocean shadow-soft transition hover:scale-110"
        >
          {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <a
          href="https://wa.me/966538962214"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-110 animate-pulse-ring"
        >
          <MessageCircle className="h-6 w-6" />
        </a>

        {show && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-12 w-12 place-items-center rounded-full gradient-ocean text-white shadow-soft transition hover:scale-110"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </>
  );
}
