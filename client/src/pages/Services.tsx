import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Database, Code2, Cloud, Layers, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI/ML Experts",
      tagline: "Build intelligent models that drive insight",
      description:
        "Deploy production-grade ML models that scale. From computer vision to NLP, our ML engineers bring battle-tested expertise to transform your data into actionable intelligence.",
      capabilities: [
        "Computer Vision & NLP",
        "Deep Learning & Neural Networks",
        "MLOps & Model Monitoring",
        "Production Deployment at Scale",
      ],
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      tagline: "Autonomous agents that reason and execute",
      description:
        "Build intelligent agents using cutting-edge LLM technology. From RAG systems to multi-agent workflows, we create AI that thinks, plans, and delivers results.",
      capabilities: [
        "RAG & Vector Databases",
        "LLM Fine-tuning & Orchestration",
        "Multi-Agent Systems",
        "Enterprise AI Solutions",
      ],
    },
    {
      icon: Database,
      title: "Data Science Teams",
      tagline: "Turn data into decisions",
      description:
        "End-to-end data science solutions from pipeline engineering to advanced analytics. We build the infrastructure and insights that power data-driven products.",
      capabilities: [
        "Data Engineering & ETL",
        "Predictive Analytics",
        "Real-time Processing",
        "Business Intelligence",
      ],
    },
    {
      icon: Code2,
      title: "Full-Stack Engineers",
      tagline: "From idea to interface, we own the stack",
      description:
        "Expert developers who build scalable web applications from the ground up. Modern frameworks, clean architecture, and production-ready code.",
      capabilities: [
        "React, Vue, Angular",
        "Node.js, Python, Go",
        "Microservices & APIs",
        "Real-time Applications",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      tagline: "Scalable, secure, and cost-optimized delivery",
      description:
        "AWS, GCP, and Azure certified engineers who design cloud-native infrastructure. Automated pipelines, container orchestration, and optimized costs.",
      capabilities: [
        "Cloud Architecture (AWS/GCP/Azure)",
        "Infrastructure as Code",
        "CI/CD & Kubernetes",
        "Security & Compliance",
      ],
    },
    {
      icon: Layers,
      title: "Complete Product Teams",
      tagline: "End-to-end product delivery",
      description:
        "Dedicated cross-functional teams that handle your entire product lifecycle. From strategy to launch and beyond, we're your embedded tech arm.",
      capabilities: [
        "Product Strategy & Design",
        "Full Development Lifecycle",
        "QA & Test Automation",
        "Ongoing Support & Scaling",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight" data-testid="text-services-page-heading">
              Services Built
              <br />
              Around You
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-page-description">
              From one expert to a full product team — flexible, scalable engineering solutions that adapt to your needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg border hover-lift" 
                  data-testid={`card-service-detail-${index}`}
                >
                  <service.icon className="h-10 w-10 mb-6" />
                  <h3 className="text-2xl font-bold mb-2" data-testid={`text-service-detail-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 italic">
                    {service.tagline}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-service-detail-description-${index}`}>
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.capabilities.map((capability, cIndex) => (
                      <div key={cIndex} className="text-sm">
                        • {capability}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold mb-4">70%</div>
                <div className="text-lg font-medium mb-2">Cost Savings</div>
                <div className="text-sm text-muted-foreground">
                  World-class talent at optimized rates
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-4">48h</div>
                <div className="text-lg font-medium mb-2">Deployment Time</div>
                <div className="text-sm text-muted-foreground">
                  From first call to team delivery
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-4">7+</div>
                <div className="text-lg font-medium mb-2">Years Experience</div>
                <div className="text-sm text-muted-foreground">
                  Battle-tested senior engineers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to build your way?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Start with one expert or scale to a full team. You lead, we build.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-6 text-base" data-testid="button-services-contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="px-8 py-6 text-base border-white/20 text-white hover:bg-white/10">
                  Book a Strategy Call
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
