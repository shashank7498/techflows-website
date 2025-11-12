import { Link } from "wouter";
import { Mail, Linkedin, Twitter, Github, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center shadow-3d-sm">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <span className="font-bold text-xl">TechFlows</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Elite AI/ML engineering teams deployed in 48 hours.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-white transition-colors" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-white transition-colors" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-github">
                <Github className="h-5 w-5 text-muted-foreground hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-white cursor-pointer transition-colors" data-testid="link-footer-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-blog">
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
                  <span className="text-sm text-muted-foreground hover:text-white cursor-pointer transition-colors" data-testid="link-footer-services">
                    All Services
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-ml">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-ai">
                  AI Agents
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:shashank@techflows.co" className="text-sm text-muted-foreground hover:text-white transition-colors" data-testid="link-email">
                  shashank@techflows.co
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-white cursor-pointer transition-colors" data-testid="link-footer-contact">
                    Contact Form
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 TechFlows. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
