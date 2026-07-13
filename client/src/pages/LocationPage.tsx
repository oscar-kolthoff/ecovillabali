import Navigation from "@/components/Navigation";
import Location from "@/components/Location";

import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";

const breadcrumbSchema = buildBreadcrumbSchema("Location", "/location");

export default function LocationPage() {
  usePageMeta({
    title: "Location: Eco Village Sibang Near Green School Bali",
    description:
      "Eco Village Sibang sits an 8-minute walk from Green School Bali, 25 minutes from Ubud, and along the Ayung River. See travel times and what makes this location rare.",
    path: "/location",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      <main className="flex-grow pt-8">
        <Location />
      </main>

      <Footer />
    </div>
  );
}
