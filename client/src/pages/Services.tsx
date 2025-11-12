import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Rocket, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import TechStack from "@/components/TechStack";
import servicesImage from "@assets/generated_images/Developers_pair_programming_banner_78f5b139.png";

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Dedicated Development Team",
      description:
        "A full-time, dedicated team that works exclusively on your project with complete focus and commitment.",
      features: [
        "Frontend Developers (React, Angular, Vue.js)",
        "Backend Developers (Node.js, Python, Java, Go)",
        "QA Engineers & Test Automation Specialists",
        "DevOps Engineers & Cloud Architects",
        "Project Managers & Scrum Masters",
        "UI/UX Designers",
      ],
      benefits: [
        "100% dedicated to your project",
        "Direct communication channels",
        "Flexible team scaling",
        "Monthly billing model",
      ],
    },
    {
      icon: UserPlus,
      title: "Team Augmentation",
      description:
        "Quickly fill specific skill gaps in your existing team with expert developers who integrate seamlessly.",
      features: [
        "Specialized skill-set matching",
        "Quick onboarding (within days)",
        "Works with your existing tools & processes",
        "Flexible engagement duration",
      ],
      benefits: [
        "No long-term commitments",
        "Immediate availability",
        "Cost-effective scaling",
        "Risk-free trial period available",
      ],
    },
    {
      icon: Rocket,
      title: "Full-Product Development",
      description:
        "End-to-end product development from initial concept through design, development, testing, and launch.",
      features: [
        "Product Strategy & Planning",
        "UI/UX Design & Prototyping",
        "Full-Stack Development",
        "Quality Assurance & Testing",
        "Cloud Infrastructure Setup",
        "Post-Launch Support & Maintenance",
      ],
      benefits: [
        "Single point of contact",
        "Proven delivery methodology",
        "Transparent milestone tracking",
        "Ongoing support included",
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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-page-heading">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground" data-testid="text-services-page-description">
              Flexible engagement models tailored to your specific needs and budget
            </p>
          </div>
        </div>

        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden" data-testid={`card-service-detail-${index}`}>
                <CardHeader className="bg-card">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2" data-testid={`text-service-detail-title-${index}`}>{service.title}</CardTitle>
                      <CardDescription className="text-base" data-testid={`text-service-detail-description-${index}`}>
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
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

        <section className="py-20 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss which service model is the best fit for your project
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8" data-testid="button-services-contact">
              Schedule a Consultation
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
