import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HERO_IMAGE = "/images/villa-sungai-hero.webp";

/**
 * Landing hero for the homepage. Introduces BOTH villas equally with two
 * balanced CTAs, rather than presenting a single property. Reuses the visual
 * language of the existing Hero (full-bleed image, gradient overlay, serif
 * headline, entrance animation). The LCP image is preloaded declaratively in
 * the page's <head> (see pages/index.astro) now that this is real SSR.
 */
export default function HeroLanding() {
  const scrollToVillas = () => {
    document.getElementById("villas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background: Villa Sungai has the strongest first impression (river).
          A real <img> (not CSS background) so the preload scanner can find it,
          with fetchpriority=high since this is the LCP element on this page. */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Villa Sungai exterior near Green School Bali"
          width={1600}
          height={1067}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center items-start pt-20">
        {/* No entrance fade on the hero copy: it contains the LCP element
            (the h1), and animating it from opacity:0 was adding ~1.2s of
            invisible-text time directly to the page's LCP score. */}
        <div className="max-w-3xl space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wider uppercase">
            Eco Village Sibang
          </span>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
            Two Eco Villas Near{" "}
            <span className="text-secondary italic">Green School Bali</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light">
            Two unique eco villas within an 8-minute walk of Green School Bali.
            Designed for families looking for nature, community and sustainable
            living.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-serif"
            >
              <a href="/villa-sungai">View Villa Sungai</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white rounded-full px-8 h-14 text-lg font-serif"
            >
              <a href="/villa-kailash">View Villa Kailash</a>
            </Button>
          </div>

          {/* Availability indicator (desktop only) */}
          <div className="hidden sm:flex items-center gap-2.5 pt-2 text-white/80">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
            </span>
            <span className="text-sm tracking-wide">Currently two villas available</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        onClick={scrollToVillas}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full px-4 py-2"
        aria-label="Scroll to villa selection"
      >
        <span className="text-xs uppercase tracking-widest">Choose Your Villa</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.span>
      </motion.button>
    </section>
  );
}
