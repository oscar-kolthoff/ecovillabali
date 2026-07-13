import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/images/villa-sungai-hero.jpg",
      width: 1600,
      height: 1067,
      alt: "Villa Sungai Exterior",
      title: "Jungle Sanctuary",
      desc: "The villa nestled in lush jungle with private natural pool and river views"
    },
    {
      src: "/images/VS2.jpg",
      width: 2048,
      height: 1366,
      alt: "Villa Main Structure",
      title: "Main Villa Structure",
      desc: "Beautiful bamboo and teak construction with thatched roof nestled in nature"
    },
    {
      src: "/images/villa-interior.jpg",
      width: 2048,
      height: 1366,
      alt: "Living Space",
      title: "Living Area with Hanging Chairs",
      desc: "Spacious indoor-outdoor living space with hanging chairs and jungle views"
    },
    {
      src: "/images/VS3.jpg",
      width: 2048,
      height: 1366,
      alt: "Main Living Room",
      title: "Main Living Room",
      desc: "Elegant living space with hanging chairs, sofa, and open design with pool views"
    },
    {
      src: "/images/villa-kitchen.jpg",
      width: 2048,
      height: 1366,
      alt: "Kitchen & Dining",
      title: "Open Kitchen & Dining",
      desc: "Modern open-plan kitchen with teak beams, dining area, and large bifold doors"
    },
    {
      src: "/images/VS5.jpg",
      width: 2048,
      height: 1366,
      alt: "Covered Deck with Pool",
      title: "Covered Deck & Pool Area",
      desc: "Spacious covered deck with hanging chairs overlooking the natural pool"
    },
    {
      src: "/images/VS6.jpg",
      width: 2048,
      height: 1366,
      alt: "Kitchen & Dining Area",
      title: "Kitchen & Dining Space",
      desc: "Well-equipped kitchen with modern appliances, dining table, and teak architecture"
    },
    {
      src: "/images/villa-bathroom.jpg",
      width: 2048,
      height: 1366,
      alt: "Spa-like Bathroom",
      title: "Primary Bathroom",
      desc: "Luxurious primary bathroom with soaking tub, teak details, and spa-like ambiance"
    },
    {
      src: "/images/VS8.jpg",
      width: 2048,
      height: 1366,
      alt: "Bedroom",
      title: "Bedroom",
      desc: "Luxurious bedroom with canopy bed and balcony with a view to the lush village"
    },
    {
      src: "/images/VS9.jpg",
      width: 2048,
      height: 1366,
      alt: "TV Room/Office Space",
      title: "TV room/office space",
      desc: "Comfortable TV room/office space which can be used as guest bedroom as well"
    },
    {
      src: "/images/VS10.jpg",
      width: 2048,
      height: 1366,
      alt: "Bedroom",
      title: "Bedroom",
      desc: "Beautiful bedroom with cosy single bed and extra bed underneath"
    },
    {
      src: "/images/VS12.jpg",
      width: 2048,
      height: 1366,
      alt: "Loft Bedroom",
      title: "Loft Bedroom Space",
      desc: "Cozy loft bedroom with exposed teak beams and unique architectural design"
    },
    {
      src: "/images/BPS08156.jpg",
      width: 1365,
      height: 2048,
      alt: "Architectural Details",
      title: "Teak & Bamboo Architecture",
      desc: "Stunning architectural details showcasing the craftsmanship of teak and bamboo construction"
    },
    {
      src: "/images/BPS08144.jpg",
      width: 2048,
      height: 1365,
      alt: "Covered Outdoor Space",
      title: "Covered Balcony with Jungle Views",
      desc: "Serene covered outdoor space with thatched roof overlooking the lush jungle landscape"
    },
    {
      src: "/images/BPS08035.jpg",
      width: 2048,
      height: 1365,
      alt: "Master Suite",
      title: "Master Suite Bedroom",
      desc: "Luxurious master suite with canopy bed and abundant natural light"
    },
    {
      src: "/images/BPS08045.jpg",
      width: 2048,
      height: 1365,
      alt: "Bathroom",
      title: "Bathroom ensuite to the master bedroom",
      desc: "Modern bathroom featuring rain shower, natural materials, and spa-like atmosphere"
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663274498489/8n6646SQwY4TnXNqV7Rqb2/IMG_5403_eb31c991.jpg",
      width: 4032,
      height: 3024,
      alt: "Villa Sungai",
      title: "Villa Sungai",
      desc: "Immerse yourself with nature and jungle surroundings"
    },
  ];

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-24 bg-muted/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Photo Gallery</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Experience the Beauty
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Explore the stunning spaces and natural surroundings of Villa Sungai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg h-80"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="font-serif text-xl font-bold text-white">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            role="dialog"
            tabIndex={0}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm z-20">
                {selectedImage + 1} / {galleryImages.length}
              </div>

              {/* Image Info */}
              <div className="mt-8 pb-20 text-white text-center">
                <h3 className="font-serif text-2xl font-bold">{galleryImages[selectedImage].title}</h3>
                <p className="text-white/80">{galleryImages[selectedImage].desc}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
