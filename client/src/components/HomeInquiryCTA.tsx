import { motion } from "framer-motion";
import { Link } from "wouter";
import { MessageCircle, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/const";

const WHATSAPP_MESSAGE =
  "Hi! I'm interested in the eco villas near Green School Bali. Could you share more information?";

/**
 * Closing call to action for the homepage. Mirrors the premium primary-colored
 * band used by the inquiry form, but keeps the homepage focused on two clear
 * next steps rather than a full form.
 */
export default function HomeInquiryCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern, matching the inquiry section */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6">
            Ready to discover your future home?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
            Arrange a viewing of either villa or send a quick message. I'll
            personally help you find the right fit for your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-base font-serif bg-white text-primary hover:bg-white/90"
            >
              <Link href="/inquire-now" onClick={() => window.scrollTo({ top: 0 })}>
                <CalendarDays className="mr-1 h-5 w-5" aria-hidden="true" />
                Schedule Viewing
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base font-serif border-white text-white bg-transparent hover:bg-white/10 hover:text-white"
            >
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1 h-5 w-5" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
