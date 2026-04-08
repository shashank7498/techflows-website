import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import TrustSection from "@/components/TrustSection";
import AiCtoSection from "@/components/AiCtoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <AiCtoSection />
        <ServicesGrid />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
