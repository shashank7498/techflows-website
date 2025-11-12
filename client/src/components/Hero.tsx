import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/Tech_team_collaboration_hero_83f64830.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="inline-block mb-8 px-4 py-1 border border-black/10 rounded-full" data-testid="badge-48-hours">
          <span className="text-sm font-medium">48-Hour Deployment</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-none" data-testid="text-hero-headline">
          Elite Engineering Teams
          <br />
          Deployed in 48 Hours
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12" data-testid="text-hero-subheadline">
          Build faster. Scale smarter. Spend less.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
          <Link href="/contact">
            <Button size="lg" className="text-base px-8 py-6" data-testid="button-hero-consultation">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="text-base px-8 py-6" data-testid="button-hero-services">
              Explore Services
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto pt-12 border-t">
          <div>
            <div className="text-5xl font-bold mb-2" data-testid="text-stat-specialists">200+</div>
            <div className="text-sm text-muted-foreground">Expert Engineers</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2" data-testid="text-stat-hours">48</div>
            <div className="text-sm text-muted-foreground">Hours to Start</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2" data-testid="text-stat-experience">7-8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
