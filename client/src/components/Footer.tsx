import { Link } from "wouter";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-20" style={{ background: "#030812", borderColor: "#1A3048" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="font-bold text-xl mb-4 block" style={{ color: "#EEF4FF" }}>TechFlows</span>
            <p className="text-sm text-muted-foreground mb-4">
              Tech partner for startup founders. Ship fast, save smart.
            </p>
            <div className="flex gap-3">
              <a href="#" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="#" data-testid="link-twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="#" data-testid="link-github">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#EEF4FF" }}>Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors" data-testid="link-footer-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors" data-testid="link-footer-how">
                    How It Works
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#EEF4FF" }}>Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors" data-testid="link-footer-services">
                    All Services
                  </span>
                </Link>
              </li>
              <li>
                <a href="https://calendly.com/shashankchauhan7498" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-audit">
                  Free Tech Audit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#EEF4FF" }}>Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:shashank@techflows.co" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-email">
                  shashank@techflows.co
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors" data-testid="link-footer-contact">
                    Contact Form
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "#1A3048" }}>
          <p className="text-sm text-muted-foreground">
            2025 TechFlows. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
