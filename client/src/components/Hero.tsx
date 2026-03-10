import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight" data-testid="text-hero-headline">
          Your technical co-founder.
          <br />
          On demand.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="text-hero-subheadline">
          TechFlows helps early-stage startup founders ship their product fast — without hiring a CTO, overpaying an agency, or losing equity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-base px-8 py-6" data-testid="button-hero-audit">
              Get a Free Tech Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <Link href="/how-it-works">
            <Button size="lg" variant="outline" className="text-base px-8 py-6" data-testid="button-hero-how">
              See how it works
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t">
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1" data-testid="text-stat-assembly">48 hrs</div>
            <div className="text-sm text-muted-foreground">Team assembled</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1" data-testid="text-stat-mvp">4-6 wks</div>
            <div className="text-sm text-muted-foreground">MVP to market</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1" data-testid="text-stat-equity">$0</div>
            <div className="text-sm text-muted-foreground">Equity taken</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1" data-testid="text-stat-savings">60%+</div>
            <div className="text-sm text-muted-foreground">Cost vs. agency</div>
          </div>
        </div>
      </div>
    </div>
  );
}
