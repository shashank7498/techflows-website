import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Bot, Database, Users, UserPlus, Rocket } from "lucide-react";

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
      icon: Users,
      title: "Dedicated AI Teams",
      description:
        "Full-time dedicated teams working exclusively on your AI/ML projects. Complete focus and commitment to your success.",
    },
    {
      icon: UserPlus,
      title: "Team Augmentation",
      description:
        "Fill specific AI/ML skill gaps instantly. Seamless integration with your existing team and workflows.",
    },
    {
      icon: Rocket,
      title: "Full-Stack AI Products",
      description:
        "From concept to production deployment. We handle the entire AI product lifecycle with cutting-edge MLOps practices.",
    },
  ];

  return (
    <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-services-heading">
          Our Expertise
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
          World-class AI/ML talent deployed in 48 hours
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="card-3d shadow-3d-lg" data-testid={`card-service-${index}`}>
            <CardHeader>
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4 shadow-3d">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold" data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-neutral-600" data-testid={`text-service-description-${index}`}>
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
