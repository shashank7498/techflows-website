import { Brain, Bot, Database, Code2, Cloud, Globe } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Engineers",
      description:
        "Expert ML engineers who build, train, and deploy production-grade models. From computer vision to NLP, we cover the full ML spectrum.",
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      description:
        "Build intelligent autonomous agents that reason, plan, and execute complex tasks. RAG systems, LLM integrations, and agentic workflows.",
    },
    {
      icon: Database,
      title: "Data Science Teams",
      description:
        "End-to-end data science solutions from data engineering pipelines to advanced analytics and predictive modeling.",
    },
    {
      icon: Code2,
      title: "Full-Stack Developers",
      description:
        "Expert frontend, backend, and full-stack developers. React, Node.js, Python, Java, Go - we cover your entire application stack.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Experts",
      description:
        "AWS, GCP, Azure certified engineers. Infrastructure as code, CI/CD pipelines, Kubernetes, and cloud architecture at scale.",
    },
    {
      icon: Globe,
      title: "Complete Product Teams",
      description:
        "From concept to production deployment. We handle the entire product lifecycle with world-class engineering talent.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-heading">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            AI/ML specialists and full-stack engineering teams deployed in 48 hours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border hover-lift" data-testid={`card-service-${index}`}>
              <service.icon className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3" data-testid={`text-service-title-${index}`}>{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
