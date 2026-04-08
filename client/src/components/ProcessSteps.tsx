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
    <section className="py-28 gradient-mesh" style={{ borderTop: "1px solid #0F1E2E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: "#EEF4FF" }} data-testid="text-process-heading">
            Simple. Fast. Transparent.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-description">
            From first conversation to shipped product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center glass-card rounded-xl p-10 card-3d" data-testid={`card-step-${index}`}>
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                style={{ background: "linear-gradient(135deg,#163a8a,#2D7EF8)" }}
              >
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-6xl font-bold mb-4" style={{ color: "rgba(45,126,248,0.12)" }} data-testid={`text-step-number-${index}`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#EEF4FF" }} data-testid={`text-step-title-${index}`}>
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
