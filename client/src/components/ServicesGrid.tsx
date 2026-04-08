import { Rocket, Brain, Shield, Compass } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Rocket,
      title: "MVP Builds",
      pain: '"I have an idea but no one to build it"',
      solution: "We scope, design & ship your MVP in 4–6 weeks.",
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
    <section className="py-28" style={{ background: "#040912", borderTop: "1px solid #0F1E2E" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p style={{ fontSize: 11, fontWeight: 700, color: "#2D7EF8", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 10 }}>
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-heading" style={{ color: "#EEF4FF" }}>
            What founders come to us for
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl card-3d"
              style={{ background: "#0C1828", border: "1px solid #1A3048" }}
              data-testid={`card-service-${index}`}
            >
              <div className="flex items-start gap-5">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#163a8a,#2D7EF8)" }}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" data-testid={`text-service-title-${index}`} style={{ color: "#EEF4FF" }}>
                    {service.title}
                  </h3>
                  <p className="italic mb-3 text-sm" data-testid={`text-service-pain-${index}`} style={{ color: "#7A9BB5" }}>
                    {service.pain}
                  </p>
                  <p className="leading-relaxed" data-testid={`text-service-solution-${index}`} style={{ color: "#CBD5E1" }}>
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
