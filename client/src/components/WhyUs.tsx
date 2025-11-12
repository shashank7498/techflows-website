import { Zap, Award, Globe, DollarSign, Rocket, Target } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      icon: Zap,
      title: "Flexible Engagement",
      description: "Start with one expert, scale up anytime. We adapt to your needs whether you need a single specialist or a complete product team.",
    },
    {
      icon: Target,
      title: "Work Under Your Guidance",
      description: "We align with your process and culture. You stay in control while we execute - delivering exactly what you envision.",
    },
    {
      icon: Rocket,
      title: "End-to-End Ownership",
      description: "Design → Development → Deployment. We handle the complete product lifecycle, not just isolated features.",
    },
    {
      icon: Award,
      title: "Top-Tier Expertise",
      description: "AI/ML • Full-Stack • Cloud • DevOps. Every engineer brings 7+ years of proven experience across modern tech stacks.",
    },
    {
      icon: DollarSign,
      title: "70% Cost Efficiency",
      description: "High-quality engineering at optimized rates. Get world-class talent without the Silicon Valley price tag.",
    },
    {
      icon: Globe,
      title: "48-Hour Deployment",
      description: "Your team goes live within 48 hours. No lengthy hiring processes or multi-week onboarding delays.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-why-heading">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-description">
            We're not just contractors — we're your product-building partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 border rounded-lg hover-lift" data-testid={`card-benefit-${index}`}>
              <benefit.icon className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3" data-testid={`text-benefit-title-${index}`}>{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-benefit-description-${index}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
