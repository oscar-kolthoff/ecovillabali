import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";

const breadcrumbSchema = buildBreadcrumbSchema("Inquire Now", "/inquire-now");

export default function InquireNowPage() {
  usePageMeta({
    title: "Inquire Now: Villa Sungai & Villa Kailash",
    description:
      "Request availability, more information, or schedule a viewing for Villa Sungai or Villa Kailash, two eco villas near Green School Bali.",
    path: "/inquire-now",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <JsonLd data={breadcrumbSchema} />
      <Navigation />
      
      <main className="flex-grow pt-8">
        <div className="container pt-16 pb-4 text-center">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3">
            Inquire About Villa Sungai or Villa Kailash
          </h1>
        </div>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
