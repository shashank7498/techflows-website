import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, Rocket } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Users,
      title: "Dedicated Development Team",
      description:
        "Get a full-time, dedicated team that works exclusively on your project. From frontend to backend, QA to project management.",
    },
    {
      icon: UserPlus,
      title: "Team Augmentation",
      description:
        "Fill specific skill gaps in your existing team with one or two of our expert developers who integrate seamlessly.",
    },
    {
      icon: Rocket,
      title: "Full-Product Development",
      description:
        "Take your idea from concept through design and development to a fully launched product with our end-to-end services.",
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-services-heading">
          Our Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
          Flexible engagement models designed to meet your unique needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl" data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed" data-testid={`text-service-description-${index}`}>
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
