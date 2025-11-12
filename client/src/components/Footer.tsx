import { Link } from "wouter";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-lg">TechTalent</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Elite offshore engineering teams to accelerate your product development.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-twitter">
                <Twitter className="h-5 w-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-github">
                <Github className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer" data-testid="link-footer-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer" data-testid="link-footer-services">
                    All Services
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-dedicated">
                  Dedicated Teams
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-augmentation">
                  Team Augmentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:hello@techtalent.com" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-email">
                  hello@techtalent.com
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer" data-testid="link-footer-contact">
                    Contact Form
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 TechTalent Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
