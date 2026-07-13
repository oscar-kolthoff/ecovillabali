import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * A mixed gallery alternating photos of both villas. Every image carries a
 * subtle villa label so visitors unconsciously register that there are two
 * distinct homes, not one. Links back up to the villa selection to keep the
 * decision flow moving.
 */
const images = [
  { src: "/images/villa-sungai-hero.webp", villa: "Villa Sungai", alt: "Villa Sungai exterior with natural pool and river views", width: 1600, height: 1067 },
  { src: "/images/villa-kailash/01.poolandsundeck.jpg", villa: "Villa Kailash", alt: "Villa Kailash pool and sundeck", width: 2048, height: 1365 },
  { src: "/images/villa-interior.webp", villa: "Villa Sungai", alt: "Villa Sungai indoor-outdoor living area", width: 2048, height: 1366 },
  { src: "/images/villa-kailash/02.Openliving1.jpg", villa: "Villa Kailash", alt: "Villa Kailash open living space", width: 2048, height: 1365 },
  { src: "/images/villa-kitchen.webp", villa: "Villa Sungai", alt: "Villa Sungai open kitchen and dining", width: 2048, height: 1366 },
  { src: "/images/villa-kailash/03.MasterBedroom1.jpg", villa: "Villa Kailash", alt: "Villa Kailash master bedroom", width: 2048, height: 1365 },
  { src: "/images/VS5.webp", villa: "Villa Sungai", alt: "Villa Sungai covered deck overlooking the pool", width: 2048, height: 1366 },
  { src: "/images/villa-kailash/01.Overviewvilla2.jpg", villa: "Villa Kailash", alt: "Villa Kailash exterior surrounded by greenery", width: 2048, height: 1365 },
  { src: "/images/BPS08144.webp", villa: "Villa Sungai", alt: "Villa Sungai covered balcony with jungle views", width: 2048, height: 1365 },
  { src: "/images/villa-kailash/04.MasterBathroom1.jpg", villa: "Villa Kailash", alt: "Villa Kailash spa-like master bathroom", width: 2048, height: 1365 },
];

export default function HomeGallery() {
  const scrollToVillas = () => {
    document.getElementById("villas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 bg-muted/20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Photo Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Two Beautiful Homes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A glimpse inside Villa Sungai and Villa Kailash, both moments from
            Green School Bali.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl shadow-md aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
                {image.villa}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToVillas}
            className="rounded-full px-8 h-14 text-base font-serif border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="mr-1 h-4 w-4" aria-hidden="true" />
            Explore both villas
          </Button>
        </div>
      </div>
    </section>
  );
}
