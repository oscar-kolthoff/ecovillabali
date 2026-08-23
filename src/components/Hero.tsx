import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  villa?: 'sungai' | 'kailash';
}

export const villaData = {
  sungai: {
    image: '/images/villa-sungai-hero.webp',
    mobileImage: '/images/villa-sungai-hero-mobile.webp',
    width: 1600,
    height: 1067,
    name: 'Villa Sungai',
    spec: ['3 bedrooms', 'Private pool', 'Riverside setting', '8 min walk to Green School Bali', 'Leasehold to Oct 2047'],
    intro: "Villa Sungai is a sustainable 3 bedroom villa near Green School Bali, located in Eco Village Sibang just an 8 minute walk from campus. Designed for families relocating to Bali, it offers modern comfort, natural surroundings and a thriving international community.",
    priceUSD: 'USD 379,000',
    priceIDR: 'IDR 6.7 billion',
  },
  kailash: {
    image: '/images/villa-kailash-hero.webp',
    mobileImage: '/images/villa-kailash-hero-mobile.webp',
    width: 1600,
    height: 1066,
    name: 'Villa Kailash',
    spec: ['3–4 bedrooms', 'Private pool', 'Yoga studio & home office', '8 min walk to Green School Bali', 'Leasehold to Oct 2047'],
    intro: "Villa Kailash is a spacious 3/4 bedroom villa near Green School Bali, located in Eco Village Sibang just an 8 minute walk from campus. Designed for families relocating to Bali, it combines flexible indoor & outdoor living with a yoga studio, home office and entertainment space.",
    priceUSD: 'USD 419,000',
    priceIDR: 'IDR 7.4 billion',
  }
};

// The LCP image is preloaded declaratively in each page's <head> (real SSR
// now, so no need for the client-side <link> injection this used before).
export default function Hero({ villa = 'sungai' }: HeroProps) {
  const currentData = villaData[villa];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero image: a real <img> (not CSS background) so the browser's
          preload scanner can discover it, with fetchpriority=high since this
          is the LCP element on this page. */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentData.image}
          srcSet={`${currentData.mobileImage} 750w, ${currentData.image} 1400w`}
          sizes="100vw"
          alt={`${currentData.name} exterior near Green School Bali`}
          width={currentData.width}
          height={currentData.height}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center items-start pt-20">
        {/* No entrance fade here either: same LCP reasoning as HeroLanding. */}
        <div className="max-w-3xl space-y-5">
          {/* 1. Status badge (styling unchanged) */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wider uppercase">
            For Sale
          </span>

          {/* 2. Villa name is the H1 and the dominant element on the page */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05]">
            {currentData.name}
          </h1>

          {/* 3. Spec line: quiet, dot-separated supporting detail. One row on
              desktop, wraps on mobile. */}
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-white/85 text-xs sm:text-sm sm:gap-x-2.5 lg:flex-nowrap lg:whitespace-nowrap">
            {currentData.spec.map((item, index) => (
              <li key={item} className="flex items-center gap-2.5">
                {index > 0 && <span aria-hidden="true" className="text-secondary/80">·</span>}
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* 4. Asking price (unchanged): USD leads for the international buyer
              audience, with the IDR equivalent as a secondary reference. */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-2">
            <span className="font-serif text-3xl md:text-4xl font-bold text-secondary">
              {currentData.priceIDR}
            </span>
            <span className="text-white/80 text-base md:text-lg">/ {currentData.priceUSD}</span>
          </div>

          {/* 5. Single call to action */}
          <div className="pt-2">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-serif"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Viewing
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
