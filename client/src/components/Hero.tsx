import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Tech_team_collaboration_hero_83f64830.png";

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tech team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-headline">
          Build Your Vision with an
          <br />
          <span className="text-primary">Expert Offshore Engineering Team</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-subheadline">
          We provide experienced (7-8+ years) full-stack developers to accelerate your
          product development and scale your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button size="lg" className="text-base px-8" data-testid="button-hero-consultation">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="text-base px-8 bg-background/50 backdrop-blur" data-testid="button-hero-services">
              View Our Services
            </Button>
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span data-testid="text-stat-companies">Trusted by 50+ Companies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span data-testid="text-stat-developers">200+ Expert Developers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span data-testid="text-stat-projects">500+ Projects Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
}
