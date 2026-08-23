import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface FloorPlansProps {
  villa?: "sungai" | "kailash";
}

// Cropped from the architects' drawing sheets (title blocks removed). Sizes
// match the exported webp files so the layout reserves space and never shifts.
export const floorPlanData = {
  sungai: {
    name: "Villa Sungai",
    plans: [
      { src: "/images/floorplans/sungai-floorplan-ground.webp", caption: "Ground Floor", width: 1900, height: 1441 },
      { src: "/images/floorplans/sungai-floorplan-first.webp", caption: "First Floor", width: 1900, height: 1441 },
      { src: "/images/floorplans/sungai-floorplan-loft.webp", caption: "Loft", width: 1900, height: 1441 },
      { src: "/images/floorplans/sungai-floorplan-elevations.webp", caption: "Elevations", width: 1900, height: 1440 },
    ],
  },
  kailash: {
    name: "Villa Kailash",
    plans: [
      { src: "/images/floorplans/kailash-floorplan-basement.webp", caption: "Basement", width: 1900, height: 1490 },
      { src: "/images/floorplans/kailash-floorplan-ground.webp", caption: "Ground Floor", width: 1900, height: 1446 },
      { src: "/images/floorplans/kailash-floorplan-first.webp", caption: "First Floor", width: 1900, height: 1503 },
      { src: "/images/floorplans/kailash-floorplan-elevations.webp", caption: "Elevations", width: 1900, height: 1441 },
    ],
  },
} as const;

export default function FloorPlans({ villa = "sungai" }: FloorPlansProps) {
  const data = floorPlanData[villa];
  const plans = data.plans;
  const [selected, setSelected] = useState<number | null>(null);

  const previous = () =>
    setSelected((p) => (p === null ? null : p === 0 ? plans.length - 1 : p - 1));
  const next = () =>
    setSelected((p) => (p === null ? null : p === plans.length - 1 ? 0 : p + 1));
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") previous();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") setSelected(null);
  };

  return (
    <section id="floor-plans" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">The Layout</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Floor Plans
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            See how {data.name} is arranged across every level. Select any plan to enlarge it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <button
              type="button"
              key={plan.src}
              onClick={() => setSelected(index)}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Enlarge ${data.name} ${plan.caption} floor plan`}
            >
              <div className="aspect-[4/3] flex items-center justify-center p-4">
                <img
                  src={plan.src}
                  alt={`${data.name} ${plan.caption} floor plan`}
                  width={plan.width}
                  height={plan.height}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <span className="font-serif text-lg font-semibold text-white">{plan.caption}</span>
                <span className="inline-flex items-center gap-1.5 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" aria-hidden="true" /> Enlarge
                </span>
              </div>
            </button>
          ))}
        </div>

        <p className="text-muted-foreground/80 text-sm text-center mt-8 max-w-2xl mx-auto">
          Indicative floor plans only. Some details may differ following renovations,
          and no rights can be derived from them.
        </p>

        {selected !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label={`${data.name} ${plans[selected].caption} floor plan`}
            tabIndex={0}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={plans[selected].src}
                alt={`${data.name} ${plans[selected].caption} floor plan`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg bg-white"
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>

              <button
                onClick={previous}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors z-10"
                aria-label="Previous floor plan"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors z-10"
                aria-label="Next floor plan"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm z-20">
                {plans[selected].caption} · {selected + 1} / {plans.length}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
