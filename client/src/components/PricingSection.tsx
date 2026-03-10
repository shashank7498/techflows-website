import { Card, CardContent } from "@/components/ui/card";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$1,500 - $3,000",
      description: "Tech Audit + Build Plan",
    },
    {
      name: "Builder",
      price: "$3,000 - $7,000",
      description: "Full MVP in 4-6 weeks",
    },
    {
      name: "Scale",
      price: "$7,000 - $15,000",
      description: "Product + AI Integration",
    },
    {
      name: "Retainer",
      price: "$2,000/mo",
      description: "Ongoing CTO-as-a-Service",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-pricing-heading">
            Simple, founder-friendly pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden fees. No equity. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className="text-center" data-testid={`card-pricing-${index}`}>
              <CardContent className="pt-8 pb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4" data-testid={`text-plan-name-${index}`}>
                  {plan.name}
                </h3>
                <div className="text-2xl font-bold mb-4" data-testid={`text-plan-price-${index}`}>
                  {plan.price}
                </div>
                <p className="text-muted-foreground text-sm" data-testid={`text-plan-description-${index}`}>
                  {plan.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
