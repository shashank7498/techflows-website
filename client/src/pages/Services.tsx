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
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight" data-testid="text-services-page-heading">
              What founders
              <br />
              come to us for
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-page-description">
              We solve the tech problems that keep startup founders up at night.
            </p>
          </div>
        </section>

        <section className="py-24 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-md border hover-elevate" 
                  data-testid={`card-service-detail-${index}`}
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white flex-shrink-0">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2" data-testid={`text-service-detail-title-${index}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground italic" data-testid={`text-service-detail-pain-${index}`}>
                        {service.pain}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground mb-6" data-testid={`text-service-detail-solution-${index}`}>
                    {service.solution}
                  </p>
                  <div className="space-y-2">
                    {service.details.map((detail, dIndex) => (
                      <div key={dIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to ship your startup's tech?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              No commitment. Just clarity.
            </p>
            <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="px-8 py-6 text-base" data-testid="button-services-audit">
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
