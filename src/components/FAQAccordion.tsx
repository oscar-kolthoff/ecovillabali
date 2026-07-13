import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs, idPrefix = "faq" }: { faqs: FAQ[]; idPrefix?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-answer-${index}`;
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
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
