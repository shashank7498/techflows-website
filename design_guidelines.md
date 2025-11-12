# Design Guidelines: Software Solutions Startup Website

## Design Approach

**Selected Approach:** Design System (Material Design) with B2B Tech Inspiration

Drawing from successful B2B platforms like Stripe, Vercel, and Linear, this design prioritizes clarity, credibility, and conversion while maintaining modern sophistication. The focus is on building immediate trust with technical decision-makers through clean layouts and strategic content hierarchy.

## Core Design Elements

### A. Typography

**Primary Font:** Inter (Google Fonts)
- Headings (H1): 3.5rem (56px) font-bold, tracking-tight
- Headings (H2): 2.5rem (40px) font-bold
- Headings (H3): 1.875rem (30px) font-semibold
- Body Large: 1.125rem (18px) font-normal, leading-relaxed
- Body: 1rem (16px) font-normal, leading-relaxed
- Small/Meta: 0.875rem (14px) font-medium

**Secondary Font:** Roboto Mono (for tech stack labels and code-adjacent content)

### B. Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component gaps: gap-8 to gap-16
- Container max-width: max-w-7xl with px-6 to px-8

**Grid Structure:**
- Homepage Hero: Single column, centered
- Services Grid: 3-column (lg:grid-cols-3, md:grid-cols-2, base:grid-cols-1)
- Tech Stack: 4-6 column grid for logo showcase
- Testimonials: 2-column layout
- Process Steps: 4-column horizontal on desktop, stacked on mobile

### C. Component Library

**Navigation:**
- Fixed header with backdrop blur (backdrop-blur-lg)
- Logo left, navigation links center/right
- CTA button ("Book Consultation") with elevated prominence
- Mobile: Hamburger menu with slide-out drawer

**Hero Section (Homepage):**
- Height: 85vh minimum
- Large hero image: Modern office setting or collaborative tech team
- Overlay: subtle gradient for text readability
- Headline + subheadline centered over image
- Dual CTAs: Primary ("Get Free Consultation") + Secondary ("View Our Work")
- Trust indicator bar below fold: "Trusted by 50+ Companies" with client logos

**Service Cards:**
- Rounded corners (rounded-xl)
- Icon at top (64px, use Heroicons)
- Title (text-xl font-semibold)
- Description (2-3 lines, text-base)
- Subtle border, hover lift effect (shadow-lg on hover)
- "Learn More" link with arrow

**Process Steps:**
- Numbered cards (1-4) with large, bold numbers
- Icon + emoji combination for visual interest
- Step title and 2-3 line description
- Connecting lines between steps (desktop only)

**Technology Stack Showcase:**
- Logo grid with grayscale filter, color on hover
- Technology categories as section headers
- Logos sized 48-64px for consistency

**Team/Founder Cards:**
- Square headshot images (rounded-full)
- Name, title, 2-line bio
- LinkedIn icon link
- 2-3 column grid

**Contact Form:**
- 2-column layout: Form left (60%), Context right (40%)
- Form fields: Name, Company, Email, Message (textarea)
- Large submit button
- Right side: Office hours, response time promise, direct email, Calendly embed suggestion

**Footer:**
- 4-column grid: Company info, Quick links, Services, Newsletter signup
- Social media icons
- Trust badges: "GDPR Compliant," "ISO Certified" (if applicable)
- Copyright and legal links

### D. Component Enrichment Details

**Homepage Structure (8 sections minimum):**
1. Hero with image + CTA
2. Trust bar (client logos)
3. Services overview (3-column grid)
4. Why Choose Us (stat counters + benefit cards)
5. Tech stack showcase
6. Testimonials (2-column)
7. CTA section ("Ready to Scale Your Team?")
8. Footer

**Services Page:**
- Hero banner (shorter, 40vh)
- 3 main service offerings (dedicated sections each)
- Technology stack detailed view
- Process integration section
- Case study preview cards

**How It Works:**
- Visual timeline/process flow
- 4-step detailed breakdown
- FAQ accordion at bottom

**About Us:**
- Mission statement section (centered, max-w-3xl)
- Founder profiles (2-3 column grid)
- Company values (icon + text cards)
- Team photo or office image

**Contact:**
- Split layout with form and meeting scheduler
- Map integration suggestion (if office location)
- Alternative contact methods clearly visible

## Images

**Hero Images Required:**
- **Homepage:** Large hero (1920x1080+) - Modern tech team collaborating in bright office, diverse developers at workstations, or abstract tech/code visualization with professional aesthetic
- **Services Page:** Smaller banner (1920x600) - Close-up of developers working together or abstract tech patterns
- **About Us:** Team photo (1200x800) - Founder(s) or core team in professional setting

**Supporting Images:**
- Client logos (standardized to 120x60px containers)
- Technology stack logos (official brand assets, 64x64px)
- Headshots for team members (400x400px, cropped to circles)

**Image Placement Strategy:**
- Hero sections: Full-width with text overlay
- Service cards: Icon-based (no images)
- Process steps: Icon + emoji (no photography)
- Testimonials: Small circular headshots (80x80px)

## Accessibility & Interactions

- Focus states: Visible 2px offset ring
- Button states: Subtle scale (scale-105) and shadow changes
- Link states: Underline offset with smooth transitions
- Form validation: Inline error messages with icons
- Skip navigation link for keyboard users
- Minimum touch targets: 44x44px

## Animations (Minimal)

- Page transitions: Fade in only
- Scroll reveals: Subtle fade-up for section entry (once, not repeated)
- Hover effects: Transform scale (1.02-1.05) and shadow depth
- No parallax scrolling
- No continuous/looping animations

This design creates a professional, conversion-focused experience that immediately establishes credibility while making it effortless for potential clients to understand services and take action.