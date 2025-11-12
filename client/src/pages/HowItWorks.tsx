import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HowItWorks() {
  const faqs = [
    {
      question: "How quickly can we start working together?",
      answer:
        "After the initial discovery call, we can typically have a matched team ready for interviews within 3-5 business days. Once approved, onboarding can begin immediately, and your team can start contributing within a week.",
    },
    {
      question: "What time zones do you work in?",
      answer:
        "Our teams are flexible and can work in your preferred time zone. We have developers across multiple regions and can arrange overlapping hours to ensure smooth communication and collaboration.",
    },
    {
      question: "How do you ensure code quality?",
      answer:
        "We follow industry best practices including code reviews, automated testing, CI/CD pipelines, and regular security audits. All our developers have 7-8+ years of experience and are thoroughly vetted before joining client projects.",
    },
    {
      question: "What if I'm not satisfied with a team member?",
      answer:
        "We offer a risk-free trial period and guarantee satisfaction. If you're not happy with any team member, we'll replace them at no additional cost. Your success is our priority.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer flexible billing models based on your engagement type. Dedicated teams are typically billed monthly, while team augmentation can be hourly or monthly. Full-product development is usually milestone-based. All terms are transparent with no hidden fees.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-how-heading">
            How It Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-description">
            From first contact to successful delivery, we've streamlined the process to get you up and running quickly
          </p>
        </section>

        <ProcessSteps />

        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center" data-testid="text-faq-heading">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border px-6" data-testid={`accordion-faq-${index}`}>
                  <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`button-faq-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed" data-testid={`text-faq-answer-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule your free discovery call today and let's discuss your project
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8" data-testid="button-how-contact">
              Get Started Now
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
