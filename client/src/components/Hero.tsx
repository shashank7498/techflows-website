import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden">
      <div className="floating-dot w-64 h-64 top-20 -left-20 opacity-60" style={{ animationDelay: '0s' }} />
      <div className="floating-dot w-48 h-48 top-40 right-10 opacity-40" style={{ animationDelay: '2s' }} />
      <div className="floating-dot w-32 h-32 bottom-32 left-1/4 opacity-50" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight" data-testid="text-hero-headline">
            Your technical
            <br />
            co-founder.
            <br />
            <span className="text-gradient-minimal">On demand.</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed animate-fade-in-up animate-delay-100" data-testid="text-hero-subheadline">
          TechFlows helps early-stage startup founders ship their product fast — without hiring a CTO, overpaying an agency, or losing equity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 animate-fade-in-up animate-delay-200">
          <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-base shadow-3d" data-testid="button-hero-audit">
              Get a Free Tech Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <Link href="/how-it-works">
            <Button size="lg" variant="outline" className="text-base" data-testid="button-hero-how">
              See how it works
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up animate-delay-300">
          {[
            { value: "48 hrs", label: "Team assembled", testId: "text-stat-assembly" },
            { value: "4-6 wks", label: "MVP to market", testId: "text-stat-mvp" },
            { value: "$0", label: "Equity taken", testId: "text-stat-equity" },
            { value: "60%+", label: "Cost vs. agency", testId: "text-stat-savings" },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-md p-6 card-3d">
              <div className="text-2xl md:text-3xl font-bold mb-1" data-testid={stat.testId}>{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
