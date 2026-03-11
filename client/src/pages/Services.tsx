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
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-32 gradient-mesh relative overflow-hidden">
          <div className="floating-dot w-48 h-48 top-20 right-10 opacity-40" style={{ animationDelay: '1s' }} />
          <div className="floating-dot w-32 h-32 bottom-20 left-20 opacity-30" style={{ animationDelay: '3s' }} />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight animate-fade-in-up" data-testid="text-services-page-heading">
              What founders
              <br />
              <span className="text-gradient-minimal">come to us for</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-100" data-testid="text-services-page-description">
              We solve the tech problems that keep startup founders up at night.
            </p>
          </div>
        </section>

        <section className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="p-8 rounded-md border shadow-3d card-3d bg-white" 
                  data-testid={`card-service-detail-${index}`}
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-black text-white flex-shrink-0 shadow-3d">
                      <service.icon className="h-7 w-7" />
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
                  <p className="text-foreground mb-6 leading-relaxed" data-testid={`text-service-detail-solution-${index}`}>
                    {service.solution}
                  </p>
                  <div className="space-y-2 pl-1">
                    {service.details.map((detail, dIndex) => (
                      <div key={dIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-black flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-96 h-96 rounded-full bg-white/20 -top-48 -right-48 blur-3xl" />
            <div className="absolute w-96 h-96 rounded-full bg-white/10 -bottom-48 -left-48 blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to ship your startup's tech?
            </h2>
            <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto">
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
