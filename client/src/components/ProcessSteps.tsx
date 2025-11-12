import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Rocket } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Tell Us What You Need",
      description:
        "From one developer to a complete product team, we shape the setup around your project goals.",
    },
    {
      icon: Users,
      number: "02",
      title: "We Assemble & Onboard",
      description:
        "Your team goes live within 48 hours, fully integrated with your tools and workflow.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "You Guide, We Build",
      description:
        "You stay in control — we deliver milestones, updates, and results exactly to your direction.",
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-process-heading">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-description">
            From first call to deployed team in 48 hours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative card-3d shadow-3d-lg" data-testid={`card-step-${index}`}>
              <CardContent className="pt-8 pb-8">
                <div className="text-8xl font-black text-neutral-200 mb-4 leading-none" data-testid={`text-step-number-${index}`}>
                  {step.number}
                </div>
                <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-4 shadow-3d-sm">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" data-testid={`text-step-title-${index}`}>{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed" data-testid={`text-step-description-${index}`}>
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
