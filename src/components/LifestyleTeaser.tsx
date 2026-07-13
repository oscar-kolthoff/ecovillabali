import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Condensed pointer to /lifestyle. The full "Sustainable Luxury Living" section
 * lives only on the dedicated page so the two aren't duplicate content.
 */
export default function LifestyleTeaser() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm">The Lifestyle</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            More Than a Home
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Organic gardens, Balinese traditions, and a community of Green School families: living in Sibang Kaja means being part of something beyond the villa itself.
          </p>

          <Button
            asChild
            size="lg"
            className="rounded-full px-8 h-14 text-base font-serif bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="/lifestyle">
              Explore the Lifestyle
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
