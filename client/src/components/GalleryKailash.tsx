import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryKailash() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663274498489/8n6646SQwY4TnXNqV7Rqb2/01.OverviewVilla1_5a36f70a.jpg",
      width: 2048,
      height: 1365,
      alt: "Villa Kailash Overview",
      title: "Villa Overview",
      desc: "Stunning exterior view of Villa Kailash showcasing its modern design and natural setting"
    },
    {
      src: "/images/villa-kailash/01.Overviewvilla2.jpg",
      width: 2048,
      height: 1365,
      alt: "Villa Kailash Exterior",
      title: "Villa Exterior",
      desc: "Beautiful architectural design with teak and bamboo construction surrounded by lush greenery"
    },
    {
      src: "/images/villa-kailash/01.poolandsundeck.jpg",
      width: 2048,
      height: 1365,
      alt: "Pool and Sundeck",
      title: "Private Pool & Sundeck",
      desc: "Luxurious natural pool with spacious sundeck area perfect for relaxation and entertaining"
    },
    {
      src: "/images/villa-kailash/02.Openliving1.jpg",
      width: 2048,
      height: 1365,
      alt: "Open Living Space",
      title: "Open Living Area",
      desc: "Spacious open-plan living space with modern furnishings and connection to nature"
    },
    {
      src: "/images/villa-kailash/02.Openliving2.jpg",
      width: 2048,
      height: 1365,
      alt: "Living Room",
      title: "Living Room",
      desc: "Comfortable living area with elegant design and abundant natural light"
    },
    {
      src: "/images/villa-kailash/03.Kitchen1.jpg",
      width: 2048,
      height: 1365,
      alt: "Kitchen",
      title: "Modern Kitchen",
      desc: "Well-equipped kitchen with modern appliances and open design for entertaining"
    },
    {
      src: "/images/villa-kailash/03.Kitchendetail1.jpg",
      width: 2048,
      height: 1365,
      alt: "Kitchen Detail",
      title: "Kitchen Details",
      desc: "Beautifully crafted kitchen with premium finishes and functional layout"
    },
    {
      src: "/images/villa-kailash/03.Kitchendetail2.jpg",
      width: 2048,
      height: 1365,
      alt: "Kitchen Counter",
      title: "Kitchen Counter",
      desc: "Elegant kitchen counter with quality materials and modern design"
    },
    {
      src: "/images/villa-kailash/03.Kitchendetail3.jpg",
      width: 2048,
      height: 1365,
      alt: "Kitchen Workspace",
      title: "Kitchen Workspace",
      desc: "Functional kitchen workspace with premium appliances and natural materials"
    },
    {
      src: "/images/villa-kailash/03.MasterBedroom1.jpg",
      width: 2048,
      height: 1365,
      alt: "Master Bedroom",
      title: "Master Bedroom",
      desc: "Luxurious master bedroom with elegant design and comfortable furnishings"
    },
    {
      src: "/images/villa-kailash/03.MasterBedroom2.jpg",
      width: 2048,
      height: 1365,
      alt: "Master Bedroom View",
      title: "Master Bedroom",
      desc: "Spacious master suite with premium bedding and natural light"
    },
    {
      src: "/images/villa-kailash/04.MasterBathroom1.jpg",
      width: 2048,
      height: 1365,
      alt: "Master Bathroom",
      title: "Master Bathroom",
      desc: "Spa-like master bathroom with soaking tub and luxurious finishes"
    },
    {
      src: "/images/villa-kailash/04.MasterBathroom2.jpg",
      width: 2048,
      height: 1365,
      alt: "Bathroom Details",
      title: "Master Bathroom Shower",
      desc: "Modern bathroom with premium fixtures and elegant aesthetic"
    },
    {
      src: "/images/villa-kailash/04.MasterBathroomdetail1.jpg",
      width: 2048,
      height: 1365,
      alt: "Bathroom Detail",
      title: "Master Bathroom",
      desc: "Beautifully designed bathroom with attention to detail and quality materials"
    },
    {
      src: "/images/villa-kailash/05.IndoorTVroom.jpg",
      width: 2048,
      height: 1365,
      alt: "Indoor TV Room",
      title: "Indoor TV/Game Room",
      desc: "Comfortable indoor entertainment space perfect for relaxation and gatherings"
    },
    {
      src: "/images/villa-kailash/09.Walkincloset.jpg",
      width: 2048,
      height: 1365,
      alt: "Walk-in Closet",
      title: "Walk-in Closet",
      desc: "Spacious walk-in closet ensuite of Master Bedroom with ample storage and organization"
    },
    {
      src: "/images/villa-kailash/06.BedroomA1.jpg",
      width: 2048,
      height: 1365,
      alt: "Bedroom A",
      title: "Bedroom A",
      desc: "Bedroom with comfortable furnishings and bathroom ensuite"
    },
    {
      src: "/images/villa-kailash/06.BedroomA2.jpg",
      width: 2048,
      height: 1365,
      alt: "Bedroom A View",
      title: "Bedroom A",
      desc: "Spacious bedroom with quality bedding and elegant design"
    },
    {
      src: "/images/villa-kailash/06.BedroomA3.jpg",
      width: 2048,
      height: 1365,
      alt: "Bedroom A Details",
      title: "Bedroom A",
      desc: "Well-appointed bedroom with premium furnishings"
    },
    {
      src: "/images/villa-kailash/07.BathroomA1.jpg",
      width: 2048,
      height: 1365,
      alt: "Bathroom A",
      title: "Bathroom A",
      desc: "Modern guest bathroom with quality fixtures and clean design"
    },
    {
      src: "/images/villa-kailash/08.BedroomB1.jpg",
      width: 2048,
      height: 1364,
      alt: "Bedroom B",
      title: "Bedroom B",
      desc: "Comfortable secondary bedroom with cozy atmosphere"
    },
    {
      src: "/images/villa-kailash/08.BedroomB2.jpg",
      width: 2048,
      height: 1365,
      alt: "Bedroom B View",
      title: "Bedroom B",
      desc: "Well-designed secondary bedroom with quality furnishings"
    },
    {
      src: "/images/villa-kailash/08.BedroomB3.jpg",
      width: 2048,
      height: 1365,
      alt: "Bedroom B Details",
      title: "Bedroom B",
      desc: "Cozy bedroom space with comfortable bedcouch and natural light"
    },
    {
      src: "/images/villa-kailash/09.BathroomB1.jpg",
      width: 2048,
      height: 1365,
      alt: "Bathroom B",
      title: "Bathroom B",
      desc: "Secondary bathroom with modern fixtures and practical design"
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663274498489/8n6646SQwY4TnXNqV7Rqb2/10.Semi-basement-yoga1_9a16a2f0.jpg",
      width: 2048,
      height: 1365,
      alt: "Yoga Studio",
      title: "Yoga Studio",
      desc: "Serene yoga and meditation space in the semi-basement level"
    },
    {
      src: "/images/villa-kailash/10.Semi-basement-yoga2.jpg",
      width: 2048,
      height: 1365,
      alt: "Yoga Space",
      title: "Yoga / Office Space",
      desc: "Peaceful wellness area perfect for yoga and relaxation"
    },
    {
      src: "/images/villa-kailash/10.Semi-basementguestroom.jpg",
      width: 2048,
      height: 1365,
      alt: "Semi-basement Guest Room",
      title: "Semi-basement Guest Room",
      desc: "Additional guest room in the semi-basement level with comfortable setup"
    },
    {
      src: "/images/villa-kailash/12.Newextendedroof1.jpg",
      width: 1600,
      height: 684,
      alt: "Extended Roof Area",
      title: "Extended Roof Structure",
      desc: "Recently extended roof providing additional covered outdoor space"
    },
    {
      src: "/images/villa-kailash/12.Newextendedroof2.jpg",
      width: 720,
      height: 1600,
      alt: "Roof Extension",
      title: "Roof Extension",
      desc: "Contemporary roof extension with functional and aesthetic design"
    },
    {
      src: "/images/villa-kailash/11.Detailstairs.jpg",
      width: 1365,
      height: 2048,
      alt: "Architectural Stairs",
      title: "Architectural Details",
      desc: "Beautiful staircase showcasing the villa's architectural craftsmanship"
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
            Explore the stunning spaces and natural surroundings of Villa Kailash
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
