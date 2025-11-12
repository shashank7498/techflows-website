import { Card, CardContent } from "@/components/ui/card";
import { Award, Code2, Clock } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      icon: Award,
      title: "Expert Vetted Talent",
      description: "Our engineers have 7-8+ years of proven experience in building scalable products.",
    },
    {
      icon: Code2,
      title: "Full-Stack Solutions",
      description: "From frontend to backend and DevOps, we cover your entire tech stack.",
    },
    {
      icon: Clock,
      title: "Seamless Integration",
      description: "Our teams work in your time zone and integrate directly with your workflow.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-heading">
            Why Choose TechTalent?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-description">
            We deliver exceptional engineering talent that drives real business results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-benefit-${index}`}>
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-benefit-title-${index}`}>{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-benefit-description-${index}`}>
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
