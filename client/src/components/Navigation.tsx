import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-lg">TechTalent</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <span
                  className={`text-sm font-medium cursor-pointer transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button data-testid="button-book-consultation" size="sm">
                Book Consultation
              </Button>
            </Link>
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
        <div className="md:hidden border-t bg-background">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`block py-2 text-base font-medium cursor-pointer ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-2" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-consultation">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
