import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <ServicesGrid />
        <PricingSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
