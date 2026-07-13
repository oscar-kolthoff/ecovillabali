import { motion } from "framer-motion";
import { Bed, Bath, Square, Trees, Wind, Droplets } from "lucide-react";

interface VillaDetailsProps {
  villa?: 'sungai' | 'kailash';
}

export default function VillaDetails({ villa = 'sungai' }: VillaDetailsProps) {
  const villaData = {
    sungai: {
      title: "Villa Sungai: A Riverside Eco Home in Sibang",
      desc1: "Looking for a villa near Green School Bali? This eco family home in Sibang offers a rare opportunity to live within walking distance of Green School while enjoying a fully sustainable home environment. Villa Sungai combines western comforts with true Balinese style. Built from Mud, Teak & Grass, this special home features a closed living and kitchen area with large bifold doors that open onto a beautiful deck.",
      desc2: "The primary bedroom and bathroom are conveniently located on the first floor, with a washer and dryer in the main level bathroom. Two additional bedrooms with lofts and a separate TV/Office space offer flexibility for families.",
      image1: "/images/villa-interior.jpg",
      image1Width: 2048,
      image1Height: 1366,
      image2: "/images/villa-kitchen.jpg",
      image2Width: 2048,
      image2Height: 1366,
    },
    kailash: {
      title: "Villa Kailash: A Spacious Eco Home with Rice Field Views",
      desc1: "This sustainable villa offers a rare opportunity to live within walking distance of Green School while enjoying a fully sustainable home environment. Villa Kailash combines western comforts with true Balinese style. Built from Mud, Teak, Bamboo & Grass, this special home features a spacious outdoor living, dining and kitchen area.",
      desc2: "Two large bedrooms with a bathroom ensuite are situated on the first floor. The Master bedroom with Spa like bathroom ensuite, walk in closet and spacious TV Room/Office space are located on the second floor. A guest/game/cinema room and a yoga studio are located in the semi-basement. The setup of the house offers great flexibility for families.",
      image1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663274498489/8n6646SQwY4TnXNqV7Rqb2/kailash-overview_29fe6cd0.jpg",
      image1Width: 2048,
      image1Height: 1365,
      image2: "/images/villa-kailash/kailash-garden.jpg",
      image2Width: 2048,
      image2Height: 1365,
    }
  };

  const currentData = villaData[villa];

  const villaFeatures = {
    sungai: [
      { icon: Bed, label: "3 Bedrooms", desc: "Master on 1st Floor, 2 Bedrooms with Lofts on 2nd" },
      { icon: Bath, label: "2 Bathrooms", desc: "Spa-like on 2nd floor" },
      { icon: Wind, label: "Air Conditioning", desc: "In all bedrooms & living" },
      { icon: Droplets, label: "Natural Pool", desc: "Private with River View" },
      { icon: Trees, label: "Mud, Teak, Bamboo & Grass", desc: "Sustainable Construction" },
      { icon: Square, label: "Closed Living", desc: "With large bifold doors" },
    ],
    kailash: [
      { icon: Bed, label: "3/4 Bedrooms", desc: "Master on 2nd Floor, 2 Bedrooms on 1st floor. Office/Game room/Yoga studio in semi-basement" },
      { icon: Bath, label: "3 Bathrooms", desc: "Spa-like on 2nd floor" },
      { icon: Wind, label: "Air Conditioning", desc: "In all bedrooms" },
      { icon: Droplets, label: "Natural Pool", desc: "Large private natural pool with village view" },
      { icon: Trees, label: "Mud, Teak, Bamboo & Grass", desc: "Sustainable Construction" },
      { icon: Square, label: "Open & Closed Living", desc: "The villa has an enclosed living/TV room on the 2nd floor and a spacious open living on the 1st floor" },
    ]
  };

  const features = villaFeatures[villa] || villaFeatures.sungai;

  return (
    <section id="villa" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -z-10 rounded-l-[100px]" />

      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 mt-12"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={currentData.image1}
                  alt="Living Space"
                  width={currentData.image1Width}
                  height={currentData.image1Height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={currentData.image2}
                  alt="Kitchen & Dining"
                  width={currentData.image2Width}
                  height={currentData.image2Height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-medium tracking-widest uppercase text-sm">The Property</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
                {currentData.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {currentData.desc1}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {currentData.desc2}
              </p>
              <p className="text-muted-foreground text-base mb-6">
                Curious why so few homes exist here?{" "}
                <a href="/green-school-villa-bali" className="text-primary font-medium underline underline-offset-4 hover:text-accent">
                  Read our guide to villas near Green School Bali
                </a>
                .
              </p>
              <ul className="space-y-3 text-muted-foreground text-base">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Property type: Eco family villa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Location: Sibang, Bali</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Distance to Green School: 8 minutes</span>
                </li>
              </ul>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-serif font-bold text-foreground">{feature.label}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
