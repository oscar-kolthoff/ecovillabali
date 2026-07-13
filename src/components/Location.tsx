import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface LocationProps {
  villa?: 'sungai' | 'kailash';
}

const galleryImages = [
  { src: "/images/location-gallery-01-pathway-thatched-villas.webp", alt: "Stone pathway winding through the jungle past thatched-roof villas", width: 900, height: 1200 },
  { src: "/images/location-gallery-02-stepping-stones-lawn.webp", alt: "Stepping-stone path across a grassy lawn near the villas", width: 900, height: 1200 },
  { src: "/images/location-gallery-03-jungle-steps-shrine.webp", alt: "Stone steps leading uphill through the jungle past a small shrine", width: 900, height: 502 },
  { src: "/images/location-gallery-04-balinese-shrine.webp", alt: "Traditional Balinese shrine surrounded by ferns and jungle trees", width: 900, height: 600 },
  { src: "/images/location-gallery-05-vine-covered-path.webp", alt: "Vine-covered walkway leading through a jungle archway", width: 900, height: 600 },
  { src: "/images/location-gallery-06-villa-in-jungle.webp", alt: "Thatched-roof villa nestled among trees beside a small pond", width: 900, height: 600 },
  { src: "/images/location-gallery-07-aerial-canopy.webp", alt: "Aerial view of Eco Village Sibang's jungle canopy and thatched rooftops", width: 900, height: 599 },
  { src: "/images/location-gallery-08-aerial-misty-sunrise.webp", alt: "Aerial view of misty jungle and rice fields at sunrise with distant volcanoes", width: 900, height: 675 },
  { src: "/images/location-gallery-09-full-moon-villa.webp", alt: "Full moon rising over a villa rooftop at night", width: 900, height: 1200 },
  { src: "/images/location-gallery-10-night-pool-gathering.webp", alt: "Community gathering by the natural pool, lit with string lights at night", width: 900, height: 506 },
  { src: "/images/location-gallery-11-evening-friends.webp", alt: "Friends relaxing by the natural pool in the evening", width: 900, height: 1200 },
  { src: "/images/location-gallery-12-community-group-photo.webp", alt: "Group photo of the Eco Village Sibang community at night", width: 900, height: 675 },
];

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
                <a href="/villa-sungai" className="text-primary font-medium underline underline-offset-4 hover:text-accent">
                  Villa Sungai
                </a>{" "}
                and{" "}
                <a href="/villa-kailash" className="text-primary font-medium underline underline-offset-4 hover:text-accent">
                  Villa Kailash
                </a>
                , or read our{" "}
                <a href="/green-school-villa-bali" className="text-primary font-medium underline underline-offset-4 hover:text-accent">
                  full guide to villas near Green School Bali
                </a>
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

        {/* Impression of Eco Village Sibang Gallery */}
        <div className="mt-24 pt-24 border-t border-border/50">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Impression of Eco Village Sibang</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              Experience the Beauty
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover the lush jungle landscapes, vibrant community moments, and natural serenity that define life in Eco Village Sibang. From sunrise to sunset, this is where sustainable living meets authentic community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.src} className="rounded-2xl overflow-hidden shadow-sm group">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
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
                The Green Corridor is a proposed forested zone through Sibang Kaja: a living community where sustainable architecture, organic food production, and ecological stewardship are daily practice, extending the same values that already define Eco Village Sibang today.
              </p>
              <p>
                A planned cycling track and riverside walking trails would connect the village even more closely to Green School and the wider Ayung River area, buffered from concrete development on the outside.
              </p>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-24 pt-16 border-t border-border/50 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to See It for Yourself?
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Villa Sungai and Villa Kailash are both available now, an 8-minute walk from Green School Bali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/villa-sungai"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              View Villa Sungai
            </a>
            <a
              href="/villa-kailash"
              className="inline-block px-8 py-3 border border-primary/30 text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Villa Kailash
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
