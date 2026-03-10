import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-heading">
          Ready to ship your startup's tech?
        </h2>
        
        <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto" data-testid="text-cta-description">
          No commitment. Just clarity.
        </p>
        
        <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="secondary" className="px-8 py-6 text-base" data-testid="button-cta-audit">
            Get a Free 30-min Tech Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
}
