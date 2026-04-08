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
    <section className="py-28 gradient-mesh" style={{ borderTop: "1px solid #0F1E2E" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" data-testid="text-trust-heading" style={{ color: "#EEF4FF" }}>
          Why founders choose TechFlows
          <br />
          <span className="text-gradient-minimal">over agencies</span>
        </h2>

        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-5 glass-card rounded-md p-5 card-3d" data-testid={`item-trust-${index}`}>
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-md flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#163a8a,#2D7EF8)" }}
              >
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-lg font-medium" style={{ color: "#CBD5E1" }}>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
