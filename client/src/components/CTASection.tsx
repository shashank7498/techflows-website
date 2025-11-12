import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-heading">
            Ready to Scale Your Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
            Join 50+ companies that trust us to deliver world-class engineering talent. Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="px-8" data-testid="button-cta-consultation">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="px-8" data-testid="button-cta-learn">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
