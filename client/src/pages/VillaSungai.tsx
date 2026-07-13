import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VillaDetails from "@/components/VillaDetails";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Villa Sungai",
  description:
    "Sustainable 3-bedroom eco family villa in Eco Village Sibang, an 8-minute walk from Green School Bali, with a natural pool and riverside setting on 800 sqm of land.",
  image: "https://ecovillabali.com/images/villa-sungai-hero.jpg",
  brand: {
    "@type": "Organization",
    name: "Eco Villa Bali",
  },
  category: "Eco family villa for sale",
};

const breadcrumbSchema = buildBreadcrumbSchema("Villa Sungai", "/villa-sungai");

export default function VillaSungai() {
  usePageMeta({
    title: "Villa Sungai: Eco Family Villa Near Green School Bali",
    description:
      "Villa Sungai is a sustainable 3-bedroom eco family home in Sibang, an 8-minute walk from Green School Bali, with a natural pool and riverside setting.",
    path: "/villa-sungai",
    image: "https://ecovillabali.com/images/villa-sungai-hero.jpg",
    type: "product",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation currentVilla="sungai" />

      <main className="flex-grow">
        <Hero villa="sungai" />
        <VillaDetails villa="sungai" />
        <Gallery />
        <Contact villa="sungai" />
      </main>

      <Footer />
    </div>
  );
}
