import { motion } from "framer-motion";

/**
 * Trust section placed just before the contact form. Sold direct-from-owner
 * (no agency), so the sellers' own credibility is the main trust signal —
 * this puts a real face and story to "Oscar" before someone hands over
 * their contact details.
 */
export default function MeetTheOwners() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/images/oscar-iris.webp"
              alt="Oscar and Iris at a community ceremony in Eco Village Sibang"
              width={800}
              height={857}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm">From the Owners</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
              Meet Oscar & Iris
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For two years, Oscar and Iris called Eco Village Sibang home. Their children walked to Green
              School Bali every morning, and their family became part of the same community you'd be
              joining. When they decided to sell, they chose to do it themselves, personally, rather than
              hand it to an agency. If you reach out, you're talking directly to people who actually lived
              here, not a broker reciting a listing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
