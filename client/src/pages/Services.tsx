import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Database, Users, UserPlus, Rocket, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import TechStack from "@/components/TechStack";
import servicesImage from "@assets/generated_images/Developers_pair_programming_banner_78f5b139.png";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Engineering",
      description:
        "Deploy production-grade ML models that scale. From computer vision to NLP, our ML engineers have battle-tested experience.",
      features: [
        "Computer Vision & Image Recognition",
        "Natural Language Processing (NLP)",
        "Recommendation Systems",
        "Time Series Forecasting",
        "Deep Learning & Neural Networks",
        "Model Training & Optimization",
      ],
      benefits: [
        "7-8+ years ML experience",
        "Production deployment expertise",
        "MLOps and model monitoring",
        "Scalable ML infrastructure",
      ],
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      description:
        "Build intelligent autonomous agents that reason, plan, and execute complex workflows using cutting-edge LLM technology.",
      features: [
        "RAG (Retrieval Augmented Generation)",
        "LLM Fine-tuning & Prompt Engineering",
        "Multi-Agent Systems",
        "Agentic Workflows & Orchestration",
        "OpenAI, Anthropic, Custom Models",
        "Vector Databases & Embeddings",
      ],
      benefits: [
        "Latest AI/LLM expertise",
        "Production-ready agents",
        "Custom agent frameworks",
        "Enterprise security",
      ],
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description:
        "End-to-end data science solutions from pipeline engineering to advanced analytics and predictive modeling.",
      features: [
        "Data Engineering & ETL Pipelines",
        "Statistical Analysis & Modeling",
        "Predictive Analytics",
        "A/B Testing & Experimentation",
        "Business Intelligence Dashboards",
        "Big Data Processing (Spark, Hadoop)",
      ],
      benefits: [
        "Full-stack data capabilities",
        "Real-time analytics",
        "Cloud-native solutions",
        "Data governance & security",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={servicesImage}
              alt="Our services"
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/80" />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-services-page-heading">
              AI/ML Services
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-services-page-description">
              Elite teams deployed in 48 hours
            </p>
          </div>
        </div>

        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden card-3d shadow-3d-lg" data-testid={`card-service-detail-${index}`}>
                <CardHeader className="bg-card p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center flex-shrink-0 shadow-3d-sm">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl mb-3 font-bold" data-testid={`text-service-detail-title-${index}`}>{service.title}</CardTitle>
                      <CardDescription className="text-lg text-neutral-600" data-testid={`text-service-detail-description-${index}`}>
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-neutral-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Key Benefits:</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-neutral-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <TechStack />

        <section className="py-32 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Deploy your AI/ML team in 48 hours
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-10 py-6 text-lg shadow-3d-lg" data-testid="button-services-contact">
              Schedule a Consultation
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
