import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-32 gradient-mesh relative overflow-hidden">
          <div className="floating-dot w-48 h-48 top-20 right-10 opacity-40" style={{ animationDelay: '1s' }} />
          <div className="floating-dot w-32 h-32 bottom-20 left-10 opacity-30" style={{ animationDelay: '3s' }} />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight animate-fade-in-up" data-testid="text-about-heading">
              We're the technical team{" "}
              your startup needed{" "}
              <span className="text-gradient-minimal">from Day 1.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl animate-fade-in-up animate-delay-100" data-testid="text-about-opening">
              Most great startup ideas fail not because of the idea — but because the founder couldn't find the right technical partner fast enough. TechFlows was built to fix that.
            </p>
          </div>
        </section>

        <section className="py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight" data-testid="text-about-story-heading">
                  The Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-about-story-1">
                  I'm Shashank, founder of TechFlows. I've spent years building software products and working with engineering teams across startups and enterprises. Over and over again, I watched brilliant non-technical founders get stuck — burning money on the wrong developers, losing months to bad technical decisions, or giving away equity just to get someone to build their product.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-story-2">
                  So I built TechFlows: an on-demand technical partner that plugs into your startup from Day 1 — giving you the engineering muscle, architectural thinking, and execution speed of a seasoned CTO, without the full-time hire.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 gradient-mesh">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight" data-testid="text-about-different-heading">
              What makes us different
            </h2>

            <div className="space-y-6">
              <div className="glass-card rounded-md p-8 card-3d" data-testid="card-about-agency">
                <div className="flex items-start gap-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-black text-white flex-shrink-0 shadow-3d">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Not an agency</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We don't take on 20 clients at once and hand your project to a junior. We work with a small, curated network of senior engineers (sourced through Coding Ninjas — India's top tech talent pipeline), which means you get elite execution at a fraction of what a Western agency charges. Fast. Accountable. No tech debt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-md p-8 card-3d" data-testid="card-about-team">
                <div className="flex items-start gap-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-black text-white flex-shrink-0 shadow-3d">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Personally overseen</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      At TechFlows, every project is personally overseen by Shashank. You'll never be passed off to someone who doesn't understand your vision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-md p-8 card-3d" data-testid="card-about-speed">
                <div className="flex items-start gap-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-black text-white flex-shrink-0 shadow-3d">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Built for speed</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      48-hour team assembly. 4-6 week MVP delivery. Weekly demos and Slack access so you're never in the dark. We move fast because we know your runway depends on it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-96 h-96 rounded-full bg-white/20 -top-48 -right-48 blur-3xl" />
            <div className="absolute w-96 h-96 rounded-full bg-white/10 -bottom-48 -left-48 blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-cta-heading">
              If you're a founder with a big idea
              <br />
              and no technical co-founder —
              <br />
              we should talk.
            </h2>
            <p className="text-lg text-white/50 mb-12">
              No commitment. Just clarity.
            </p>
            <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-base shadow-3d-lg" data-testid="button-about-audit">
                Get a Free Tech Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
