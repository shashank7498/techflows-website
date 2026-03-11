import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-28 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-white/20 -top-48 -right-48 blur-3xl" />
        <div className="absolute w-96 h-96 rounded-full bg-white/10 -bottom-48 -left-48 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-cta-heading">
          Ready to ship your
          <br />
          startup's tech?
        </h2>
        
        <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto" data-testid="text-cta-description">
          No commitment. Just clarity.
        </p>
        
        <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="secondary" className="text-base shadow-3d-lg" data-testid="button-cta-audit">
            Get a Free 30-min Tech Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
}
