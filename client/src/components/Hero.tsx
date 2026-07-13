import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface HeroProps {
  villa?: 'sungai' | 'kailash';
}

const villaData = {
  sungai: {
    image: '/images/villa-sungai-hero.jpg',
    width: 1600,
    height: 1067,
    name: 'Villa Sungai',
    headline: 'Living Near Green School Bali',
    description: "Villa Sungai is a sustainable 3 bedroom villa near Green School Bali, located in Eco Village Sibang just an 8 minute walk from campus. Designed for families relocating to Bali, it offers modern comfort, natural surroundings and a thriving international community.",
  },
  kailash: {
    image: '/images/villa-kailash-hero.jpg',
    width: 1600,
    height: 1066,
    name: 'Villa Kailash',
    headline: 'Your Home Near Green School Bali',
    description: "Villa Kailash is a spacious 3/4 bedroom villa near Green School Bali, located in Eco Village Sibang just an 8 minute walk from campus. Designed for families relocating to Bali, it combines flexible indoor & outdoor living with a yoga studio, home office and entertainment space.",
  }
};

/** Preloads the LCP hero image for the current route as early as possible. */
function useHeroPreload(href: string) {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>(`link[rel="preload"][data-hero-preload]`);
    if (!link) {
      link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.setAttribute("data-hero-preload", "true");
      document.head.appendChild(link);
    }
    link.href = href;
  }, [href]);
}

export default function Hero({ villa = 'sungai' }: HeroProps) {
  const currentData = villaData[villa];
  useHeroPreload(currentData.image);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero image: a real <img> (not CSS background) so the browser's
          preload scanner can discover it, with fetchpriority=high since this
          is the LCP element on this page. */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentData.image}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wider uppercase">
            For Sale
          </span>
          
          <div className="space-y-0">
            <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.2]">
              <div className="text-secondary italic">{currentData.name}</div>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.2]">
              {currentData.headline}
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light">
            {currentData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-serif"
              onClick={() => document.getElementById('villa')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover the Villa
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 hover:text-white rounded-full px-8 h-14 text-lg font-serif"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Viewing
            </Button>
          </div>
        </motion.div>
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
