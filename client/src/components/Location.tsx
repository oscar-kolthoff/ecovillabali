import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "wouter";

interface LocationProps {
  villa?: 'sungai' | 'kailash';
}

export default function Location({ villa = 'sungai' }: LocationProps) {
  return (
    <section id="location" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">The Location</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Living near Green School Bali
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Close to Green School Bali you’ll find Eco Village Sibang, a 13-villa community where a lovely group of mostly Green School families live.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Strategic Serenity</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 p-2 rounded-full text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <strong className="block text-foreground">Green School Bali</strong>
                    <span className="text-muted-foreground">8 minute walk</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 p-2 rounded-full text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <strong className="block text-foreground">Ubud Center</strong>
                    <span className="text-muted-foreground">25 minutes drive to culture & dining</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 p-2 rounded-full text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <strong className="block text-foreground">Ayung River</strong>
                    <span className="text-muted-foreground">Direct access to riverside</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 p-2 rounded-full text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <strong className="block text-foreground">Ngurah Rai Airport</strong>
                    <span className="text-muted-foreground">50 minutes drive</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="prose prose-lg text-muted-foreground">
              <p>
                The villas in Eco Village Sibang are situated in a private setting surrounded by the Bali jungle. Whether you are a Green School Family looking to walk to school, or just love being in nature, this is a rare opportunity to live in incredible peacefulness."
              </p>
              <p>
                See{" "}
                <Link href="/villa-sungai" className="text-primary font-medium underline underline-offset-4 hover:text-accent">
                  Villa Sungai
                </Link>{" "}
                and{" "}
                <Link href="/villa-kailash" className="text-primary font-medium underline underline-offset-4 hover:text-accent">
                  Villa Kailash
                </Link>
                , or read our{" "}
                <Link href="/green-school-villa-bali" className="text-primary font-medium underline underline-offset-4 hover:text-accent">
                  full guide to villas near Green School Bali
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Image/Map Placeholder */}
          <div className="order-1 lg:order-2 h-[500px] rounded-2xl overflow-hidden shadow-xl relative group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663274498489/8n6646SQwY4TnXNqV7Rqb2/ayung-river_7ee939a1.jpg"
              alt="Ayung River, Eco Village Sibang"
              width={4032}
              height={3024}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <h4 className="font-serif text-2xl font-bold">The Ayung River</h4>
                <p className="opacity-90">Where Eco Village Sibang flows with nature</p>
              </div>
            </div>
          </div>
        </div>

        {/* Green Corridor Section */}
        <div className="mt-24 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm">The Green Corridor</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              A Forested Zone of Sustainable Living
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Where children cycle to school through bamboo groves, communities grow food together, and nature is not a backdrop but a way of life.
            </p>
          </div>

          {/* Image and Text Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl relative group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663274498489/8n6646SQwY4TnXNqV7Rqb2/GreenCorridor_36298ca3.jpeg"
                alt="Green Corridor Map"
                width={1153}
                height={1600}
                loading="lazy"
                decoding="async"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="prose prose-lg text-muted-foreground">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">The Vision</h3>
              <p>
                The Green Corridor is a proposed forested zone running through Sibang Kaja, Bali — a living, breathing community where sustainable architecture, organic food production, nature education, and ecological stewardship are not aspirations but daily practice.
              </p>
              <p>
                Ideally, a cycling track will connect Green Village to Green School, with the Corridor sitting at the centre — creating an extended, interconnected community buffered from concrete development on the outside.
              </p>
              <p>
                Walking trails along both sides of the Ayung River offer an alternate route and a continuous loop through the still-natural river zone.
              </p>
              <p>
                These trails would join us with other key sustainability members: Ibu Eli's organic farm, Gove's orchard home, Green Camp, and Ibuku — weaving together a community of shared values and shared land.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
