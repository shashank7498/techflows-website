import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-heading">
          Turn Your Idea Into Reality
          <br />
          in 48 Hours
        </h2>
        
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto" data-testid="text-cta-description">
          Early-stage startup or growing company? Save 60-70% on development costs while we handle end-to-end 
          technical execution with dedicated AI/ML, Full-Stack, and Cloud teams.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-base" data-testid="button-cta-consultation">
              Get Started in 48 Hours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button size="lg" variant="outline" className="px-8 py-6 text-base border-white/20 text-white hover:bg-white/10" data-testid="button-cta-learn">
              See How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
