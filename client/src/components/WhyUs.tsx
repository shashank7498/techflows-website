import { Card, CardContent } from "@/components/ui/card";
import { Zap, Award, Clock } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      icon: Zap,
      title: "48-Hour Deployment",
      description: "Get your AI/ML team up and running in just 48 hours. No weeks of hiring, no lengthy onboarding.",
    },
    {
      icon: Award,
      title: "Elite ML Specialists",
      description: "Our engineers have 7-8+ years of proven experience building production ML systems and AI agents.",
    },
    {
      icon: Clock,
      title: "Seamless Integration",
      description: "Our teams work in your time zone, use your tools, and integrate directly with your workflow from day one.",
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-why-heading">
            Why TechFlows?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-description">
            The fastest path from idea to deployed AI/ML solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
