import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/competitive.jpg";
import g6 from "@/assets/adult-class.jpg";

const imgs = [
  { src: g1, alt: "Underwater swimmer kicking through clear blue pool water" },
  { src: g2, alt: "Aerial view of multiple swimmers racing in pool lanes" },
  { src: g3, alt: "Young swimmer celebrating a gold medal in the pool" },
  { src: g4, alt: "Coach teaching a toddler to float during swim lesson" },
  { src: g5, alt: "Competitive swimmer diving off racing block" },
  { src: g6, alt: "Adult swimmer practicing freestyle stroke in lane" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-foam py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title="Moments From the Pool Deck"
          subtitle="Real students. Real training. Real progress."
        />

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {imgs.map((img, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <button
                onClick={() => setOpen(i)}
                className="group block w-full overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full transition duration-700 group-hover:scale-110"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-ocean-deep/90 p-4 backdrop-blur"
            onClick={() => setOpen(null)}
          >
            <button
              aria-label="Close gallery"
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full glass text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={open}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={imgs[open].src}
              alt={imgs[open].alt}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-glow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
