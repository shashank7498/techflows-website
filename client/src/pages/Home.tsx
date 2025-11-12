import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import ProcessSteps from "@/components/ProcessSteps";
import TechStack from "@/components/TechStack";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <ServicesGrid />
        <WhyUs />
        <TechStack />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
