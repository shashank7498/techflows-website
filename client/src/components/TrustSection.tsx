import { Check } from "lucide-react";

export default function TrustSection() {
  const reasons = [
    "Fixed-scope pricing — know the cost before you start",
    "48-hour team assembly — no 3-month hiring cycles",
    "AI-native builds — every product built for 2025, not 2020",
    "Founder-first mindset — we've been in your shoes",
    "Zero equity — we're a partner, not a co-founder",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" data-testid="text-trust-heading">
          Why founders choose TechFlows over agencies
        </h2>

        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-4" data-testid={`item-trust-${index}`}>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black text-white flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4" />
              </div>
              <p className="text-lg">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
