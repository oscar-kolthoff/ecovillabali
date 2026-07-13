import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd, { buildBreadcrumbSchema } from "@/components/JsonLd";

const breadcrumbSchema = buildBreadcrumbSchema("FAQ", "/faq");

const faqs = [
  {
    question: "Can foreigners buy a villa near Green School Bali?",
    answer: "Yes, foreigners can acquire property in Bali through leasehold agreements or by setting up a legal entity such as a PT PMA. Many international families choose to invest in eco villas near Green School Bali as a long-term lifestyle and relocation decision."
  },
  {
    question: "What is it like to live near Green School Bali?",
    answer: "Living near Green School Bali offers a unique lifestyle focused on sustainability, nature, and community. Areas like Eco Village Sibang are home to international families who value conscious living, education, and a close connection to the environment."
  },
  {
    question: "Are there eco villas within walking distance of Green School Bali?",
    answer: "Yes, but they are rare. Eco friendly properties within walking distance of Green School Bali are limited and highly sought after, especially among families relocating to Bali. Eco Village Sibang is one of the few locations where this is possible."
  },
  {
    question: "Is Eco Village Sibang a good location for families?",
    answer: "Eco Village Sibang is considered one of the most family-friendly areas near Green School Bali. It offers a peaceful, nature-rich environment with a strong sense of community, making it ideal for families looking for a safe and sustainable lifestyle."
  },
  {
    question: "Why do families move to Bali for Green School?",
    answer: "Many families relocate to Bali specifically for Green School because of its innovative approach to education, focus on sustainability, and global community. Living nearby allows children to fully engage with the school while enjoying a balanced lifestyle in nature."
  },
  {
    question: "How far is Eco Village Sibang from Green School Bali?",
    answer: "Eco Village Sibang is located approximately an 8-minute walk from Green School Bali, making it one of the closest residential communities to the campus."
  },
  {
    question: "Is buying an eco villa in Bali a good investment?",
    answer: "Eco villas in Bali are increasingly popular due to growing demand for sustainable living and unique properties. Locations near Green School Bali are particularly valuable because of limited supply and consistent interest from international families."
  },
  {
    question: "Can you live in Bali full-time with a family?",
    answer: "Yes, many international families live in Bali full-time, especially around areas like Ubud and Sibang. With access to international schools like Green School, healthcare, and a strong expat community, Bali is a viable long-term living destination."
  },
  {
    question: "What makes properties near Green School Bali unique?",
    answer: "Properties near Green School Bali are unique due to their combination of location, community, and lifestyle. Being within walking distance of the school, surrounded by nature, and part of an eco-conscious environment makes these homes highly desirable and rare."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  usePageMeta({
    title: "FAQ: Buying a Villa Near Green School Bali",
    description:
      "Answers to common questions about buying property in Bali as a foreigner, living near Green School Bali, and what makes Eco Village Sibang unique.",
    path: "/faq",
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      <main className="flex-grow pt-8">
        <div className="container max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Help & Support</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Considering a move to Bali or buying a home near Green School? Here are answers to the most common questions from families and international buyers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-answer-${index}`;
              return (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
                  >
                    <h3 className="font-serif text-lg font-semibold text-left text-foreground">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-accent flex-shrink-0 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Always rendered so crawlers/AI engines that don't simulate
                      clicks can still read every answer; visually collapsed via
                      CSS when closed, matching Google's own guidance on
                      accordion content. */}
                  <div
                    id={panelId}
                    className={cn(
                      "px-6 py-4 border-t border-border bg-background/50",
                      !isOpen && "hidden"
                    )}
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
            <h3 className="font-serif text-2xl font-semibold text-primary mb-3">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us directly for more information about our eco villas and the lifestyle near Green School Bali.
            </p>
            <a
              href="/inquire-now"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
