import Navigation from "@/components/Navigation";
import HeroLanding from "@/components/HeroLanding";
import ChooseVilla from "@/components/ChooseVilla";
import GreenSchool from "@/components/GreenSchool";
import HomeGallery from "@/components/HomeGallery";
import Lifestyle from "@/components/Lifestyle";
import StillDeciding from "@/components/StillDeciding";
import HomeInquiryCTA from "@/components/HomeInquiryCTA";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Eco Villas for Sale Near Green School Bali",
    description:
      "Discover two unique eco villas within walking distance of Green School Bali. Sustainable homes designed for families seeking nature, community and exceptional living.",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <Navigation />

      <main className="flex-grow">
        <HeroLanding />
        {/* Property choice comes first, right after the hero, on every device */}
        <ChooseVilla />
        {/* Why the location matters for both villas */}
        <GreenSchool />
        {/* A mixed look at both homes */}
        <HomeGallery />
        <Lifestyle />
        <StillDeciding />
        <HomeInquiryCTA />
      </main>

      <Footer />
    </div>
  );
}
