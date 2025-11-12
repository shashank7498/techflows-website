import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-heading">
          Ready to build your product —
          <br />
          your way?
        </h2>
        
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto" data-testid="text-cta-description">
          Let's turn your idea into a reality with flexible teams, transparent pricing, and end-to-end ownership.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-base" data-testid="button-cta-consultation">
              🚀 Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="px-8 py-6 text-base border-white/20 text-white hover:bg-white/10" data-testid="button-cta-learn">
              📞 Book a Free Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
