import { Zap, Award, Globe, DollarSign, Rocket, Target } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save 60-70% on Costs",
      description: "Get elite engineering talent at offshore rates. Reduce your development costs dramatically without compromising on quality or expertise.",
    },
    {
      icon: Target,
      title: "End-to-End Solutions",
      description: "We don't just provide teams - we deliver complete solutions. From technical architecture to production deployment, we handle everything.",
    },
    {
      icon: Rocket,
      title: "Early-Stage Startup Experts",
      description: "Turn your idea into reality. We specialize in helping early-stage startups build MVPs and scale rapidly with dedicated technical teams.",
    },
    {
      icon: Zap,
      title: "48-Hour Deployment",
      description: "No weeks of hiring or lengthy onboarding. Get your dedicated engineering team up and running in just 48 hours.",
    },
    {
      icon: Award,
      title: "7-8+ Years Experience",
      description: "Every engineer has proven expertise across AI/ML, full-stack development, and cloud infrastructure with battle-tested experience.",
    },
    {
      icon: Globe,
      title: "Complete Tech Stack",
      description: "From AI/ML specialists to cloud architects - one partner for all your technical needs. No need to coordinate multiple vendors.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-why-heading">
            Why TechFlows?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-description">
            More than just team hiring - we're your complete technical partner from idea to production
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
