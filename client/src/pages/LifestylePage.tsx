import Navigation from "@/components/Navigation";
import Lifestyle from "@/components/Lifestyle";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";

const breadcrumbSchema = buildBreadcrumbSchema("Lifestyle", "/lifestyle");

export default function LifestylePage() {
  usePageMeta({
    title: "Lifestyle: A Day in Eco Village Sibang",
    description:
      "What daily life actually looks like in Eco Village Sibang: mornings walking to Green School, organic food, cultural immersion, and an international community of families.",
    path: "/lifestyle",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      <main className="flex-grow pt-8">
        <section className="py-16 md:py-20">
          <div className="container max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium tracking-widest uppercase text-sm">A Day in the Life</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              What Living in Eco Village Sibang Actually Looks Like
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mornings start early: children walk or cycle to Green School through bamboo groves and rice paddies while parents share coffee in shaded community spaces. Afternoons bring school pickups and shared meals with neighbors from a dozen countries. By evening, the pace slows into family time and the kind of casual, cross-cultural friendships that only form when everyone chose the same unconventional life on purpose.
            </p>
          </div>
        </section>
        <Lifestyle />
      </main>

      <Footer />
    </div>
  );
}
