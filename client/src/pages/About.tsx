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
      description: "We maintain the highest standards in ML model quality, code excellence, and delivery.",
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "Your AI success is our success. We build long-term relationships based on results.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "7-8+ years of proven experience building production ML systems and AI agents.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight" data-testid="text-about-heading">
                Our Mission
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-about-mission">
                TechFlows empowers companies to build world-class AI/ML products by providing access to 
                elite engineering talent in just 48 hours.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe that breakthrough AI shouldn't take months to staff. Our rigorous vetting process 
                ensures every ML engineer, AI specialist, and data scientist has the technical depth and 
                communication skills to integrate seamlessly with your team.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our founding, we've deployed 200+ AI/ML specialists, built 500+ production models, 
                and helped companies accelerate their AI roadmap by 10x.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-3d-lg">
              <img
                src={aboutImage}
                alt="Our team"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-values-heading">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center card-3d shadow-3d-lg" data-testid={`card-value-${index}`}>
                  <CardContent className="pt-12 pb-8">
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-3d">
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4" data-testid={`text-value-title-${index}`}>{value.title}</h3>
                    <p className="text-neutral-600 leading-relaxed" data-testid={`text-value-description-${index}`}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />

        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="glass-card p-8 rounded-lg text-center">
                <div className="text-5xl font-black mb-3" data-testid="text-stat-years">5+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years in AI/ML</div>
              </div>
              <div className="glass-card p-8 rounded-lg text-center">
                <div className="text-5xl font-black mb-3" data-testid="text-stat-specialists-count">200+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">ML Specialists</div>
              </div>
              <div className="glass-card p-8 rounded-lg text-center">
                <div className="text-5xl font-black mb-3" data-testid="text-stat-models-deployed">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Models Deployed</div>
              </div>
              <div className="glass-card p-8 rounded-lg text-center">
                <div className="text-5xl font-black mb-3" data-testid="text-stat-deployment-time">48h</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Average Deployment</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
