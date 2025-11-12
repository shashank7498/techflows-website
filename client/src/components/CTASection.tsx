import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="glass-card p-16 rounded-2xl text-center shadow-3d-lg">
          <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full mb-6 shadow-3d-sm">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-mono uppercase tracking-widest font-semibold">48-Hour Deployment</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-cta-heading">
            Turn Your Idea Into Reality
            <br />
            in 48 Hours
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-cta-description">
            Early-stage startup or growing company? Save 60-70% on development costs while we handle end-to-end 
            technical execution with dedicated AI/ML, Full-Stack, and Cloud teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="px-10 py-6 text-lg shadow-3d hover:shadow-3d-lg transition-all" data-testid="button-cta-consultation">
                Get Started in 48 Hours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg glass hover:bg-white/10 transition-all" data-testid="button-cta-learn">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
