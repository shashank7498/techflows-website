import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "After our first conversation, we can have your team assembled, onboarded, and building within 48 hours. We maintain a pre-vetted pool of senior engineers ready to deploy immediately.",
    },
    {
      question: "Can I start with just one person?",
      answer:
        "Absolutely. You can start with a single specialist and scale to a full team as your needs evolve. There are no minimum team sizes or long-term commitments — complete flexibility.",
    },
    {
      question: "What technologies do your engineers work with?",
      answer:
        "Our engineers are experts across the modern tech stack: AI/ML (PyTorch, TensorFlow, LLMs, RAG), Full-Stack (React, Node.js, Python, Go), Cloud & DevOps (AWS, GCP, Azure, Kubernetes), and more. We match talent to your specific tech needs.",
    },
    {
      question: "How do you ensure quality?",
      answer:
        "We only work with senior engineers (7+ years experience) who have proven track records building production systems. Every engineer is thoroughly vetted for technical excellence and professional collaboration.",
    },
    {
      question: "What if I need to scale up or down?",
      answer:
        "Scale as needed, when needed. Add engineers for a major launch or reduce team size between project phases. You're in control with no long-term commitments — just transparent, flexible engagement.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Simple, transparent pricing with up to 70% cost savings compared to traditional hiring. You pay only for the talent you need, with no hidden fees or overhead. Contact us for detailed pricing based on your specific requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight" data-testid="text-how-heading">
              Built for Speed.
              <br />
              Designed for You.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-how-description">
              Deploy world-class engineering teams in 48 hours — with the flexibility to scale exactly as you need.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <ProcessSteps />

        {/* FAQ Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" data-testid="text-faq-heading">
              Common Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-lg border" data-testid={`accordion-faq-${index}`}>
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

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Let's discuss your project and deploy your team within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-6 text-base" data-testid="button-how-contact">
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="px-8 py-6 text-base border-white/20 text-white hover:bg-white/10">
                  Schedule a Call
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
