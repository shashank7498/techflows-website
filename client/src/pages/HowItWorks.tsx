import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HowItWorks() {
  const faqs = [
    {
      question: "How can you deploy a team in just 48 hours?",
      answer:
        "We maintain a pre-vetted pool of elite ML engineers, AI specialists, and data scientists. After your discovery call, we match the perfect team from our talent pool. Once approved, we handle all onboarding, tool access, and integration within 48 hours so your team can start building immediately.",
    },
    {
      question: "What AI/ML technologies do your teams specialize in?",
      answer:
        "Our specialists are experts in PyTorch, TensorFlow, LLM integration (OpenAI, Anthropic, custom models), RAG systems, vector databases, MLOps, computer vision, NLP, and production ML deployment. We cover the entire AI/ML stack from data engineering to model deployment.",
    },
    {
      question: "How do you ensure model quality and performance?",
      answer:
        "We follow rigorous ML best practices including proper train/test splits, cross-validation, hyperparameter tuning, A/B testing, and continuous monitoring. All our engineers have 7-8+ years of experience building production ML systems with proven track records.",
    },
    {
      question: "Can you work with our existing ML infrastructure?",
      answer:
        "Absolutely. Our teams integrate with your existing tools, cloud platforms (AWS, GCP, Azure), MLOps pipelines, and workflows. Whether you use Kubernetes, Docker, MLflow, or custom infrastructure, we adapt to your environment.",
    },
    {
      question: "What if we need to scale the team up or down?",
      answer:
        "Our engagement is completely flexible. Need to add more ML engineers for a big launch? We can scale up within days. Need to reduce team size after a project phase? No long-term commitments. You only pay for what you need, when you need it.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-how-heading">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-description">
            From discovery call to deployed AI/ML team in 48 hours
          </p>
        </section>

        <ProcessSteps />

        <section className="py-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center" data-testid="text-faq-heading">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-lg px-6" data-testid={`accordion-faq-${index}`}>
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6" data-testid={`button-faq-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6" data-testid={`text-faq-answer-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-32 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Schedule your free discovery call and deploy your AI/ML team in 48 hours
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-10 py-6 text-lg shadow-3d-lg" data-testid="button-how-contact">
              Get Started Now
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
