import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAiCtoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location === "/") {
      scrollToSection("ai-cto");
    } else {
      setLocation("/");
      setTimeout(() => scrollToSection("ai-cto"), 150);
    }
  };

  const handleWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location === "/") {
      scrollToSection("aicto-waitlist");
    } else {
      setLocation("/");
      setTimeout(() => scrollToSection("aicto-waitlist"), 150);
    }
  };

  const pageLinks = [
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="font-bold text-xl">TechFlows</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#ai-cto"
              onClick={handleAiCtoClick}
              data-testid="link-nav-ai-cto"
              className="text-sm font-medium cursor-pointer transition-colors text-muted-foreground hover:text-foreground"
            >
              AI CTO ✦
            </a>

            {pageLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <span
                  className={`text-sm font-medium cursor-pointer transition-colors ${
                    location === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <a href="#aicto-waitlist" onClick={handleWaitlistClick}>
              <Button data-testid="button-join-waitlist" size="sm">
                Join Waitlist
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 space-y-3">
            <a
              href="#ai-cto"
              onClick={handleAiCtoClick}
              data-testid="link-mobile-ai-cto"
              className="block py-2 text-base font-medium cursor-pointer text-muted-foreground"
            >
              AI CTO ✦
            </a>

            {pageLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`block py-2 text-base font-medium cursor-pointer ${
                    location === link.href ? "text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </div>
              </Link>
            ))}

            <a href="#aicto-waitlist" onClick={handleWaitlistClick}>
              <Button className="w-full mt-2" data-testid="button-mobile-waitlist">
                Join Waitlist
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
