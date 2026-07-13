import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VillaDetails from "@/components/VillaDetails";
import GalleryKailash from "@/components/GalleryKailash";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Villa Kailash",
  description:
    "Spacious 3/4-bedroom eco villa in Eco Village Sibang with rice field views, a natural pool, yoga studio, and 950 sqm of land, an 8-minute walk from Green School Bali.",
  image: "https://ecovillabali.com/images/villa-kailash-hero.jpg",
  brand: {
    "@type": "Organization",
    name: "Eco Villa Bali",
  },
  category: "Eco family villa for sale",
};

const breadcrumbSchema = buildBreadcrumbSchema("Villa Kailash", "/villa-kailash");

export default function VillaKailash() {
  usePageMeta({
    title: "Villa Kailash: Spacious Eco Villa Near Green School Bali",
    description:
      "Villa Kailash is a spacious 4-bedroom eco villa in Sibang with rice field views and a natural pool, just an 8-minute walk from Green School Bali.",
    path: "/villa-kailash",
    image: "https://ecovillabali.com/images/villa-kailash-hero.jpg",
    type: "product",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation currentVilla="kailash" />

      <main className="flex-grow">
        <Hero villa="kailash" />
        <VillaDetails villa="kailash" />
        <GalleryKailash />
        <Contact villa="kailash" />
      </main>

      <Footer />
    </div>
  );
}
