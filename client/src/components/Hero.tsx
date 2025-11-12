import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-none" data-testid="text-hero-headline">
          Build your product —
          <br />
          your way.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12" data-testid="text-hero-subheadline">
          From a single expert to a full-fledged engineering team, we help you turn your idea into a world-class product — under your guidance and at up to 70% lower cost.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/contact">
            <Button size="lg" className="text-base px-8 py-6" data-testid="button-hero-consultation">
              Build With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="text-base px-8 py-6" data-testid="button-hero-strategy">
              📞 Book a Free Strategy Call
            </Button>
          </a>
        </div>

        <div className="text-muted-foreground text-sm font-medium mb-24">
          AI/ML • Full-Stack • Cloud • DevOps
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto pt-12 border-t">
          <div>
            <div className="text-5xl font-bold mb-2" data-testid="text-stat-specialists">70%</div>
            <div className="text-sm text-muted-foreground">Cost Savings</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2" data-testid="text-stat-hours">48h</div>
            <div className="text-sm text-muted-foreground">Team Ready</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2" data-testid="text-stat-experience">7+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
