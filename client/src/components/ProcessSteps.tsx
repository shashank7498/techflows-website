import { Calendar, FileText, Code } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      icon: Calendar,
      number: "01",
      title: "Book a Free 30-min Tech Audit",
      description:
        "Tell us about your startup and biggest tech challenge. No pitch, no commitment.",
    },
    {
      icon: FileText,
      number: "02",
      title: "We Scope Your Problem",
      description:
        "Within 24 hours, you get a clear tech plan with timeline and fixed price.",
    },
    {
      icon: Code,
      number: "03",
      title: "We Build It",
      description:
        "Our team ships your product. Weekly demos, Slack access, zero surprises.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" data-testid="text-process-heading">
            Simple. Fast. Transparent.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-description">
            From first conversation to shipped product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center" data-testid={`card-step-${index}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6">
                <step.icon className="h-8 w-8" />
              </div>
              <div className="text-5xl font-bold text-muted-foreground/20 mb-4" data-testid={`text-step-number-${index}`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid={`text-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
