import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
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
    <div className="min-h-screen" style={{ background: "#030812" }}>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-32 gradient-mesh relative overflow-hidden">
          <div className="floating-dot w-48 h-48 top-10 right-20 opacity-30" style={{ animationDelay: '0s' }} />
          <div className="floating-dot w-32 h-32 bottom-10 left-20 opacity-40" style={{ animationDelay: '2s' }} />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight animate-fade-in-up" style={{ color: "#EEF4FF" }} data-testid="text-how-heading">
              Built for Speed.
              <br />
              <span className="text-gradient-minimal">Designed for You.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-100" data-testid="text-how-description">
              From first call to shipped product — here's how we work with founders.
            </p>
          </div>
        </section>

        <ProcessSteps />

        {/* FAQ */}
        <section className="py-28" style={{ background: "#030812", borderTop: "1px solid #0F1E2E" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: "#EEF4FF" }} data-testid="text-faq-heading">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl card-3d"
                  style={{ background: "#0C1828", border: "1px solid #1A3048" }}
                  data-testid={`accordion-faq-${index}`}
                >
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#EEF4FF" }} data-testid={`button-faq-${index}`}>
                    {faq.question}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#7A9BB5" }} data-testid={`text-faq-answer-${index}`}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 relative overflow-hidden" style={{ background: "#040912", borderTop: "1px solid #0F1E2E" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, background: "radial-gradient(ellipse,rgba(45,126,248,.12) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#EEF4FF" }}>
              Ready to ship your startup's tech?
            </h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: "#6B8CAE" }}>
              No commitment. Just clarity.
            </p>
            <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-base shadow-3d-lg" data-testid="button-how-audit">
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
