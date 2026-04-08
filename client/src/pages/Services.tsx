import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Rocket, Brain, Shield, Compass, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Rocket,
      title: "MVP Builds",
      pain: '"I have an idea but no one to build it"',
      solution: "We scope, design & ship your MVP in 4-6 weeks.",
      details: [
        "Full product scoping & design",
        "End-to-end development",
        "Launch-ready deployment",
        "Post-launch support",
      ],
    },
    {
      icon: Brain,
      title: "AI Integration",
      pain: '"I need AI features but don\'t know where to start"',
      solution: "We add LLMs, automation & smart workflows to your product.",
      details: [
        "LLM integration & fine-tuning",
        "RAG systems & vector databases",
        "Automation workflows",
        "AI-powered features",
      ],
    },
    {
      icon: Shield,
      title: "CTO-as-a-Service",
      pain: '"I need technical leadership but can\'t afford a full-time CTO"',
      solution: "We become your on-demand technical co-founder.",
      details: [
        "Technical strategy & roadmap",
        "Architecture decisions",
        "Team building guidance",
        "Investor-ready tech docs",
      ],
    },
    {
      icon: Compass,
      title: "Tech Strategy",
      pain: '"I\'m making tech decisions blind"',
      solution: "We review your stack, architecture & roadmap.",
      details: [
        "Stack & architecture review",
        "Technical debt assessment",
        "Scalability planning",
        "Build vs. buy analysis",
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#030812" }}>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-32 gradient-mesh relative overflow-hidden">
          <div className="floating-dot w-48 h-48 top-20 right-10 opacity-40" style={{ animationDelay: '1s' }} />
          <div className="floating-dot w-32 h-32 bottom-20 left-20 opacity-30" style={{ animationDelay: '3s' }} />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight animate-fade-in-up" style={{ color: "#EEF4FF" }} data-testid="text-services-page-heading">
              What founders
              <br />
              <span className="text-gradient-minimal">come to us for</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-100" data-testid="text-services-page-description">
              We solve the tech problems that keep startup founders up at night.
            </p>
          </div>
        </section>

        {/* Service cards */}
        <section className="py-28" style={{ background: "#040912", borderTop: "1px solid #0F1E2E" }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl card-3d"
                  style={{ background: "#0C1828", border: "1px solid #1A3048" }}
                  data-testid={`card-service-detail-${index}`}
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className="inline-flex items-center justify-center w-14 h-14 rounded-xl flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#163a8a,#2D7EF8)" }}
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: "#EEF4FF" }} data-testid={`text-service-detail-title-${index}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm italic" style={{ color: "#7A9BB5" }} data-testid={`text-service-detail-pain-${index}`}>
                        {service.pain}
                      </p>
                    </div>
                  </div>
                  <p className="mb-6 leading-relaxed" style={{ color: "#CBD5E1" }} data-testid={`text-service-detail-solution-${index}`}>
                    {service.solution}
                  </p>
                  <div className="space-y-2 pl-1">
                    {service.details.map((detail, dIndex) => (
                      <div key={dIndex} className="text-sm flex items-center gap-2" style={{ color: "#94A3B8" }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2D7EF8" }} />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 relative overflow-hidden" style={{ background: "#030812", borderTop: "1px solid #0F1E2E" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, background: "radial-gradient(ellipse,rgba(45,126,248,.12) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#EEF4FF" }}>
              Ready to ship your startup's tech?
            </h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: "#6B8CAE" }}>
              No commitment. Just clarity.
            </p>
            <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-base shadow-3d-lg" data-testid="button-services-audit">
                Get a Free Tech Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
