import { motion } from "framer-motion";

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">The Lifestyle</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Sustainable Luxury Living
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Embrace a life where modern comfort meets ecological responsibility. Living in Sibang Kaja means being part of a community that values the earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Organic Living",
              desc: "Access to fresh, organic produce from local permaculture gardens and community farms.",
              image: "/images/organic-living.jpg",
              width: 2500,
              height: 1667,
            },
            {
              title: "Cultural Immersion",
              desc: "Participate in local ceremonies, learn Balinese dance, and connect with the village traditions.",
              image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663274498489/8n6646SQwY4TnXNqV7Rqb2/cultural-immersion_bca16791.jpg",
              width: 4032,
              height: 3024,
            },
            {
              title: "Mindful Community",
              desc: "Join a vibrant international community of families, educators, and changemakers centered around Green School.",
              image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663274498489/8n6646SQwY4TnXNqV7Rqb2/mindful-community_013756d3.jpg",
              width: 4032,
              height: 3024,
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
