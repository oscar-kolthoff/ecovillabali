import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Bed,
  Bath,
  Waves,
  ChefHat,
  Sofa,
  Footprints,
  Trees,
  Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const villas = [
  {
    name: "Villa Sungai",
    href: "/villa-sungai",
    image: "/images/villa-sungai-hero.jpg",
    tagline: "Riverside setting",
    taglineIcon: Waves,
    highlights: [
      { icon: Bed, label: "3 Bedrooms" },
      { icon: Bath, label: "2 Bathrooms" },
      { icon: Trees, label: "Private pool" },
      { icon: ChefHat, label: "Enclosed kitchen with large bifold doors" },
      { icon: Footprints, label: "8 minute walk to Green School" },
    ],
  },
  {
    name: "Villa Kailash",
    href: "/villa-kailash",
    image: "/images/villa-kailash-hero.jpg",
    tagline: "Rice field views",
    taglineIcon: Sprout,
    highlights: [
      { icon: Bed, label: "4 Bedrooms" },
      { icon: Bath, label: "3 Bathrooms" },
      { icon: Trees, label: "Private pool" },
      { icon: ChefHat, label: "Open kitchen" },
      { icon: Sofa, label: "Open & closed living room" },
      { icon: Footprints, label: "8 minute walk to Green School" },
    ],
  },
];

/**
 * The core decision point of the landing page: two property cards with exactly
 * equal visual weight so neither reads as the "primary" villa. Placed directly
 * below the hero so the choice happens within the first screen or two, which is
 * the whole point of the IA change.
 */
export default function ChooseVilla() {
  return (
    <section id="villas" className="py-24 bg-background scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Two Properties
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            Choose Your Villa
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Which villa suits your family?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {villas.map((villa, index) => {
            const TaglineIcon = villa.taglineIcon;
            return (
              <motion.article
                key={villa.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary/40"
              >
                {/* Image */}
                <Link
                  href={villa.href}
                  className="relative block aspect-[4/3] overflow-hidden"
                  onClick={() => window.scrollTo({ top: 0 })}
                  aria-label={`Explore ${villa.name}`}
                >
                  <img
                    src={villa.image}
                    alt={`${villa.name} near Green School Bali`}
                    width={800}
                    height={600}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
                    <TaglineIcon className="h-4 w-4" aria-hidden="true" />
                    {villa.tagline}
                  </span>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">
                    {villa.name}
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                    {villa.highlights.map((h) => {
                      const Icon = h.icon;
                      return (
                        <li
                          key={h.label}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="text-sm">{h.label}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="mt-auto w-full rounded-full h-14 text-base font-serif bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link
                      href={villa.href}
                      onClick={() => window.scrollTo({ top: 0 })}
                    >
                      Explore {villa.name}
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
