import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/Tech_team_collaboration_hero_83f64830.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Tech team collaboration"
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <Badge className="mb-6 px-6 py-2 text-sm font-mono uppercase tracking-widest shadow-3d glow-white" data-testid="badge-48-hours">
          <Zap className="w-4 h-4 mr-2" />
          48-Hour Team Deployment
        </Badge>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none" data-testid="text-hero-headline">
          Elite Engineering Teams
          <br />
          <span className="text-gradient">Deployed in 48 Hours</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="text-hero-subheadline">
          AI/ML Specialists, Full-Stack Developers, Cloud Experts with 7-8+ years of experience. 
          From frontend to DevOps, we cover your entire tech stack.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link href="/contact">
            <Button size="lg" className="text-base px-10 py-6 shadow-3d-lg hover:shadow-3d glow-white transition-all duration-300" data-testid="button-hero-consultation">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="text-base px-10 py-6 glass-card hover:bg-white/10 transition-all duration-300" data-testid="button-hero-services">
              Explore Services
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-lg">
            <div className="text-4xl font-black mb-2" data-testid="text-stat-specialists">200+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Expert Engineers</div>
          </div>
          <div className="glass-card p-6 rounded-lg">
            <div className="text-4xl font-black mb-2" data-testid="text-stat-models">500+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Projects Delivered</div>
          </div>
          <div className="glass-card p-6 rounded-lg">
            <div className="text-4xl font-black mb-2" data-testid="text-stat-hours">48</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Hours to Start</div>
          </div>
          <div className="glass-card p-6 rounded-lg">
            <div className="text-4xl font-black mb-2" data-testid="text-stat-experience">7-8+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
