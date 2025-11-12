import { Card, CardContent } from "@/components/ui/card";
import { Phone, Users, CheckCircle, Rocket } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Discovery Call",
      description:
        "We schedule a 30-minute call to understand your project goals, technical needs, and team requirements.",
    },
    {
      icon: Users,
      number: "02",
      title: "Team Matching",
      description:
        "We handpick the best-fit developers from our talent pool based on your requirements. You can interview them.",
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "Onboarding & Integration",
      description:
        "We seamlessly integrate our team into your project, tools (like Slack, Jira), and workflow.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Development & Delivery",
      description:
        "Your new team starts building, with regular communication and transparent progress reporting.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-process-heading">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-description">
            A simple, transparent process to get you started in days, not weeks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover-elevate transition-all duration-300" data-testid={`card-step-${index}`}>
              <CardContent className="pt-8">
                <div className="text-6xl font-bold text-primary/10 mb-4" data-testid={`text-step-number-${index}`}>
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-testid={`text-step-title-${index}`}>{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
