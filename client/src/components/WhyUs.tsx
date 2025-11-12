import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-why-heading">
            Why TechFlows?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-why-description">
            More than just team hiring - we're your complete technical partner from idea to production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center card-3d shadow-3d-lg" data-testid={`card-benefit-${index}`}>
              <CardContent className="pt-12 pb-8">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-3d">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" data-testid={`text-benefit-title-${index}`}>{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed" data-testid={`text-benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
