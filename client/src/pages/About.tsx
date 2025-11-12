import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Award } from "lucide-react";
import aboutImage from "@assets/stock_images/professional_corpora_e26100e8.jpg";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, communication, and delivery.",
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "Your success is our success. We build long-term relationships based on trust.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "7-8+ years of proven experience in building world-class software products.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-heading">
                Our Mission
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-about-mission">
                Our mission is to empower startups and established companies to build world-class products by
                providing access to elite, experienced engineering talent.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe that great software is built by great teams. That's why we've created a rigorous vetting
                process to ensure that every developer in our network has not just the technical skills, but also
                the communication abilities and professional mindset needed to integrate seamlessly with your team.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our founding, we've helped over 50 companies accelerate their development, scale their teams,
                and bring their products to market faster.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={aboutImage}
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-values-heading">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3" data-testid={`text-value-title-${index}`}>{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-value-description-${index}`}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-years">5+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-clients">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-team">200+</div>
                <div className="text-sm text-muted-foreground">Expert Developers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-projects-completed">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
