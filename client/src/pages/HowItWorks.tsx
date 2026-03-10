import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
import PricingSection from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "After our first conversation, we can have your team assembled, onboarded, and building within 48 hours. We maintain a pre-vetted pool of senior engineers ready to deploy immediately.",
    },
    {
      question: "What happens during the free Tech Audit?",
      answer:
        "We spend 30 minutes understanding your startup, your biggest tech challenge, and your goals. No pitch, no commitment — just an honest conversation about your technical needs.",
    },
    {
      question: "Do you take equity?",
      answer:
        "Never. We're a partner, not a co-founder. You get fixed-scope pricing with zero equity involvement. We believe founders should keep what they've built.",
    },
    {
      question: "Can you help if I already have a dev team?",
      answer:
        "Absolutely. We offer CTO-as-a-Service to provide technical leadership, architecture reviews, and strategic guidance alongside your existing team.",
    },
    {
      question: "What if I need to scale up or down?",
      answer:
        "Scale as needed, when needed. Add engineers for a major launch or reduce team size between project phases. No long-term commitments — just flexible, transparent engagement.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Fixed-scope pricing so you always know the cost upfront. No hidden fees, no hourly billing surprises. We scope your project and give you a clear price before any work begins.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight" data-testid="text-how-heading">
              Built for Speed.
              <br />
              Designed for You.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-how-description">
              From first call to shipped product — here's how we work with founders.
            </p>
          </div>
        </section>

        <ProcessSteps />

        <PricingSection />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" data-testid="text-faq-heading">
              Common Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-md border" data-testid={`accordion-faq-${index}`}>
                  <h3 className="text-xl font-bold mb-3" data-testid={`button-faq-${index}`}>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-faq-answer-${index}`}>
                    {faq.answer}
                  </p>
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
              <Button size="lg" variant="secondary" className="px-8 py-6 text-base" data-testid="button-how-audit">
                Get a Free 30-min Tech Audit
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
