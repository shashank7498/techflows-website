import { MessageSquare, Users, Code } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Tell Us What You Need",
      description:
        "Share your vision and technical requirements. Whether it's a single specialist or a full team, we'll shape the right solution for you.",
    },
    {
      icon: Users,
      number: "02",
      title: "We Assemble & Onboard",
      description:
        "We match you with the perfect talent and handle all onboarding. Your team is integrated and productive within 48 hours.",
    },
    {
      icon: Code,
      number: "03",
      title: "You Guide, We Build",
      description:
        "You stay in the driver's seat. We build under your direction, delivering exactly what you envision with full transparency.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" data-testid="text-process-heading">
            Simple. Fast. Transparent.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-description">
            From first conversation to deployed team in just 48 hours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center" data-testid={`card-step-${index}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6">
                <step.icon className="h-8 w-8" />
              </div>
              <div className="text-5xl font-bold text-muted-foreground/20 mb-4" data-testid={`text-step-number-${index}`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid={`text-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
