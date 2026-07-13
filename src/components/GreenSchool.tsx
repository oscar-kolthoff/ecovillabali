import { motion } from "framer-motion";
import { BookOpen, Leaf, Users, Award } from "lucide-react";

interface GreenSchoolProps {
  villa?: 'sungai' | 'kailash';
}

export default function GreenSchool({ villa = 'sungai' }: GreenSchoolProps) {
  const highlights = [
    {
      icon: BookOpen,
      title: "World-Renowned Education",
      desc: "Green School is recognized globally for its innovative, sustainability-focused curriculum"
    },
    {
      icon: Leaf,
      title: "Environmental Leadership",
      desc: "Built from bamboo with zero-waste practices, Green School embodies ecological responsibility"
    },
    {
      icon: Users,
      title: "Vibrant Community",
      desc: "Most families in Eco Village Sibang have children attending Green School, creating a tight-knit community"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      desc: "Consistently ranked among Asia's top international schools with rigorous academics and holistic development"
    }
  ];

  return (
    <section id="green-school" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Community Hub</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Green School Bali
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Just an 8-minute walk away, Green School Bali is the heart of the Sibang community. This world-renowned institution shapes the future of its students through innovative, sustainability-focused education.
          </p>

          {/* Single Image Below Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto"
          >
            <img
              src="/images/green-school-3.webp"
              alt="Green School Architecture"
              width={768}
              height={665}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why It Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">
            Perfect for Green School Families
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Eco Village Sibang offers the ideal home for families seeking to be part of the Green School community. With an 8-minute walk to campus, your children can enjoy the independence of a close commute while you benefit from the vibrant, eco-conscious neighborhood.
            </p>
            <p>
              The Eco Village Sibang community is built around shared values of sustainability and education. Most residents are Green School families, creating a supportive network of like-minded parents and children who share your commitment to environmental stewardship and holistic education.
            </p>
            <p>
              Living at Eco Village Sibang means becoming part of a thriving ecosystem where education, nature, and community are seamlessly integrated—exactly what makes Green School families choose to settle in Sibang Kaja.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
