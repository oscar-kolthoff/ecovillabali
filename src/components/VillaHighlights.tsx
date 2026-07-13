import FAQAccordion from "@/components/FAQAccordion";

interface VillaHighlightsProps {
  villa?: 'sungai' | 'kailash';
}

export const villaHighlightsData = {
  kailash: {
    name: "Villa Kailash",
    intro:
      "Between the yoga studio, the dedicated office, and the game room, Villa Kailash is built around one idea: family life near Green School shouldn't require constant compromise. Here's what that looks like in practice.",
    features: [
      {
        title: "Spacious Premium Living",
        description:
          "3 bedrooms with flexible spaces including dedicated home office, game & cinema room, and yoga studio. Perfect for families who need room to grow and work from home.",
      },
      {
        title: "Sustainable Luxury",
        description:
          "Built from mud, teak, bamboo, and grass with premium finishes. Combines eco-conscious design with luxury amenities and comfort.",
      },
      {
        title: "Hosting & Entertaining",
        description:
          "Large private pool, spacious open living areas, and flexible rooms make Villa Kailash ideal for hosting family and guests.",
      },
      {
        title: "Work & Wellness",
        description:
          "Dedicated home office space and yoga studio support remote work lifestyle and wellness practices. Designed for modern family living.",
      },
    ],
    comparisonRows: [
      { feature: "Distance to Green School", thisVilla: "8 minutes walk", typical: "30-45 minutes by car" },
      { feature: "Bedrooms", thisVilla: "3 flexible bedrooms", typical: "2-4 bedrooms" },
      { feature: "Dedicated Spaces", thisVilla: "Office, yoga studio, game & cinema room", typical: "Standard rooms" },
      { feature: "Pool", thisVilla: "Large natural pool", typical: "Standard chlorine pool" },
      { feature: "Work from Home", thisVilla: "Dedicated office space", typical: "Limited" },
      { feature: "Wellness", thisVilla: "Yoga studio included", typical: "Not typical" },
    ],
    faqs: [
      {
        question: "Is Villa Kailash suitable for remote work?",
        answer:
          "Yes. Villa Kailash features a dedicated home office space on the second floor, making it ideal for families where one or both parents work remotely. The spacious layout provides separation between work and living areas.",
      },
      {
        question: "What makes Villa Kailash different from Villa Sungai?",
        answer:
          "While both villas are sustainable and near Green School, Villa Kailash offers more space with 3 bedrooms, dedicated work and wellness spaces (office, yoga studio, game room), and a larger pool. It's designed for families seeking premium, flexible living.",
      },
      {
        question: "Can I use the yoga studio for personal wellness?",
        answer:
          "Yes. The yoga studio is a dedicated space perfect for personal yoga practice, meditation, or fitness activities. It's an ideal space for maintaining wellness routines while living in Bali.",
      },
      {
        question: "Is Villa Kailash good for hosting guests?",
        answer:
          "Absolutely. Villa Kailash's spacious layout, large pool, open living areas, and flexible bedrooms make it perfect for hosting family and friends. The game room and multiple entertaining spaces provide great options for gatherings.",
      },
      {
        question: "What sustainability features does Villa Kailash have?",
        answer:
          "Villa Kailash is built from sustainable materials (mud, teak, bamboo, grass) and features a natural pool, rainwater harvesting, and eco-conscious design. It combines environmental responsibility with premium comfort.",
      },
    ],
    keyTakeaways: [
      "8-minute walk to Green School Bali in Eco Village Sibang",
      "3 spacious bedrooms with flexible office and game room",
      "Dedicated yoga studio for wellness and fitness",
      "Large natural pool perfect for entertaining",
      "Sustainable construction with premium finishes",
      "Ideal for remote work and hosting guests",
    ],
  },
  sungai: {
    name: "Villa Sungai",
    intro:
      "Villa Sungai's compact footprint and riverside setting aren't a trade-off, they're the point. Families who choose it are opting for a genuinely different pace of life. Here's what makes that possible.",
    features: [
      {
        title: "Riverside Sanctuary",
        description:
          "A private natural pool with river views and jungle surroundings create a tranquil, immersive setting that's rare even in Bali.",
      },
      {
        title: "Sustainable Craftsmanship",
        description:
          "Built from mud, teak, and grass, with a closed living and kitchen area that opens onto a private deck through large bifold doors.",
      },
      {
        title: "Family-Friendly Flexibility",
        description:
          "Two additional bedrooms with lofts plus a separate TV/office space offer room to grow, work from home, or host guests.",
      },
      {
        title: "Effortless Green School Access",
        description:
          "Just an 8-minute walk to campus, with air conditioning throughout and a washer/dryer on the main level for easy daily living.",
      },
    ],
    comparisonRows: [
      { feature: "Distance to Green School", thisVilla: "8 minutes walk", typical: "30-45 minutes by car" },
      { feature: "Bedrooms", thisVilla: "3 bedrooms (2 with lofts)", typical: "2-4 bedrooms" },
      { feature: "Pool", thisVilla: "Private natural pool with river view", typical: "Standard chlorine pool" },
      { feature: "Living Area", thisVilla: "Closed living with large bifold doors", typical: "Open-air only" },
      { feature: "Laundry", thisVilla: "Washer/dryer on main floor", typical: "Often separate or outsourced" },
      { feature: "Setting", thisVilla: "Riverside jungle setting", typical: "Standard garden plot" },
    ],
    faqs: [
      {
        question: "Is Villa Sungai suitable for families with young children?",
        answer:
          "Yes. The primary bedroom and bathroom are on the first floor for easy access, and the natural pool sits within a calm, enclosed riverside setting that works well for family life.",
      },
      {
        question: "What makes Villa Sungai different from Villa Kailash?",
        answer:
          "Villa Sungai is more intimate, with 3 bedrooms, a closed living design, and a riverside setting, while Villa Kailash offers more space with a dedicated office and yoga studio. Villa Sungai suits families wanting a cozier, nature-immersed home.",
      },
      {
        question: "Does Villa Sungai have space for a home office?",
        answer:
          "Yes. The separate TV/office space on the second floor can flex as a workspace or as an extra guest bedroom.",
      },
      {
        question: "What sustainability features does Villa Sungai have?",
        answer:
          "Villa Sungai is built from mud, teak, and grass, with a natural pool and passive cooling design that works with Bali's climate rather than against it.",
      },
      {
        question: "Is the natural pool safe and private?",
        answer:
          "Yes. The pool sits within a private, enclosed section of the property with river views, offering a secluded space for family swimming.",
      },
    ],
    keyTakeaways: [
      "8-minute walk to Green School Bali in Eco Village Sibang",
      "3 bedrooms, including 2 with cozy loft spaces",
      "Private natural pool with riverside views",
      "Closed living and kitchen area with large bifold doors",
      "Sustainable construction from mud, teak, and grass",
      "Ideal for families wanting an intimate, nature-immersed home",
    ],
  },
};

export default function VillaHighlights({ villa = 'sungai' }: VillaHighlightsProps) {
  const data = villaHighlightsData[villa];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Why Families Choose */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Why Families Choose</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
            Why Families Choose {data.name}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{data.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {data.features.map((feature) => (
            <div key={feature.title} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            How {data.name} Compares
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border text-sm">
              <thead className="bg-muted/50">
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">{data.name}</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Bali Villa</th>
                </tr>
              </thead>
              <tbody>
                {data.comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="px-4 py-3 font-semibold whitespace-nowrap">{row.feature}</td>
                    <td className="px-4 py-3 text-primary">{row.thisVilla}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={data.faqs} idPrefix={`${villa}-highlights-faq`} />
        </div>

        {/* Key Takeaways */}
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">Key Takeaways</h3>
          <ul className="space-y-2">
            {data.keyTakeaways.map((point) => (
              <li key={point} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-accent mt-1">&#10003;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
