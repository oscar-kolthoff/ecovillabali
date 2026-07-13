import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * A gentle nudge for undecided visitors. Contrasts the two villas in one line
 * each and offers a direct path into either listing.
 */
export default function StillDeciding() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Two Distinct Lifestyles
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Still deciding?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Both villas offer a unique lifestyle near Green School Bali. Villa
            Sungai is perfect if you love riverside tranquility. Villa Kailash
            offers more space and additional privacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-base font-serif bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="/villa-sungai">
                View Villa Sungai
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base font-serif border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="/villa-kailash">
                View Villa Kailash
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
