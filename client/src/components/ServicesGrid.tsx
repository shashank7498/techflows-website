import { Rocket, Brain, Shield, Compass } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Rocket,
      title: "MVP Builds",
      pain: '"I have an idea but no one to build it"',
      solution: "We scope, design & ship your MVP in 4-6 weeks.",
    },
    {
      icon: Brain,
      title: "AI Integration",
      pain: '"I need AI features but don\'t know where to start"',
      solution: "We add LLMs, automation & smart workflows to your product.",
    },
    {
      icon: Shield,
      title: "CTO-as-a-Service",
      pain: '"I need technical leadership but can\'t afford a full-time CTO"',
      solution: "We become your on-demand technical co-founder.",
    },
    {
      icon: Compass,
      title: "Tech Strategy",
      pain: '"I\'m making tech decisions blind"',
      solution: "We review your stack, architecture & roadmap.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-heading">
            What founders come to us for
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-md border hover-elevate" data-testid={`card-service-${index}`}>
              <div className="flex items-start gap-5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white flex-shrink-0">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" data-testid={`text-service-title-${index}`}>{service.title}</h3>
                  <p className="text-muted-foreground italic mb-3 text-sm" data-testid={`text-service-pain-${index}`}>
                    {service.pain}
                  </p>
                  <p className="text-foreground" data-testid={`text-service-solution-${index}`}>
                    {service.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
