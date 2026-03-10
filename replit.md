# TechFlows - Tech Partner for Startup Founders

## Overview

TechFlows is a premium marketing website positioning the company as a tech partner for early-stage startup founders. The site helps founders ship products fast without hiring a CTO, overpaying an agency, or losing equity. It follows a clean, minimalist design philosophy inspired by high-end SaaS products.

**Core Messaging:**
- Primary tagline: "Your technical co-founder. On demand."
- Value proposition: TechFlows helps early-stage startup founders ship their product fast
- Key proof points: 48-hour team assembly, 4-6 week MVP delivery, $0 equity taken, 60%+ cost savings vs agencies
- Primary CTA: "Get a Free Tech Audit" (links to Calendly)

**Founder-Pain-Focused Services:**
1. MVP Builds - "I have an idea but no one to build it"
2. AI Integration - "I need AI features but don't know where to start"
3. CTO-as-a-Service - "I need technical leadership but can't afford a full-time CTO"
4. Tech Strategy - "I'm making tech decisions blind"

**Pricing Tiers:**
- Starter: $1,500-$3,000 (Tech Audit + Build Plan)
- Builder: $3,000-$7,000 (Full MVP in 4-6 weeks)
- Scale: $7,000-$15,000 (Product + AI Integration)
- Retainer: $2,000/mo (Ongoing CTO-as-a-Service)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript
- Vite as build tool and development server
- Wouter for client-side routing
- TanStack Query (React Query) for server state management
- Tailwind CSS with custom design system
- shadcn/ui component library (Radix UI primitives)

**Design System:**
- Premium minimalist aesthetic with monochrome color palette (black/white/grays)
- Typography-first approach using Inter font family
- Custom Tailwind configuration with HSL color variables
- Responsive breakpoint: 768px for mobile
- Contact page: Full black background with white text
- No heavy effects (no glassmorphism, 3D effects, or gradients)

**Component Architecture:**
- Page-based routing with dedicated page components (Home, Services, HowItWorks, About, Contact)
- Reusable UI components following atomic design principles
- Shared components: Navigation, Footer, Hero, CTASection, ContactForm, ServicesGrid, ProcessSteps, PricingSection, TrustSection

**Homepage Sections:**
1. Hero: "Your technical co-founder. On demand." with social proof stats (48hrs/4-6wks/$0/60%+)
2. What founders come to us for: 4 founder-pain-focused service cards
3. Pricing: Simple, founder-friendly pricing (4 tiers)
4. Trust: "Why founders choose TechFlows over agencies" (5 checkmark items)
5. CTA: "Ready to ship your startup's tech?" with Free Tech Audit button

**State Management:**
- React Query for API data fetching and caching
- React Hook Form with Zod validation for forms
- Local component state with React hooks
- Toast notifications via custom hook (use-toast)

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system
- Custom Vite middleware integration for development
- Request logging middleware with response timing

**API Design:**
- RESTful endpoint: POST /api/contact for contact form submissions
- JSON request/response bodies
- Zod schema validation on incoming requests
- Error handling with appropriate HTTP status codes

**Storage Layer:**
- Interface-based storage abstraction (IStorage)
- In-memory implementation (MemStorage) for development
- Methods: getUser, getUserByUsername, createUser, createContactSubmission

### Data Architecture

**Schema Design (Drizzle ORM):**
- Users table: id, username, password
- Contact submissions table: id, name, company, email, message, createdAt
- UUID primary keys with PostgreSQL gen_random_uuid()

**Validation:**
- Drizzle-Zod integration for type-safe schema validation
- Shared schema definitions between client and server

### Build & Development

**Development Mode:**
- Vite dev server with HMR
- Express backend with tsx runtime
- Workflow: `npm run dev`

**Production Build:**
- Client: Vite builds React app to dist/public
- Server: esbuild bundles Express server to dist/index.js

**Path Aliases:**
- @/* maps to client/src/*
- @shared/* maps to shared/*
- @assets/* maps to attached_assets/*

### File Structure

```
client/          # Frontend React application
  src/
    components/  # Reusable UI components (Hero, ServicesGrid, ProcessSteps, PricingSection, TrustSection, CTASection, ContactForm, Navigation, Footer)
    pages/       # Route page components (Home, Services, HowItWorks, About, Contact)
    hooks/       # Custom React hooks
    lib/         # Utilities (queryClient, utils)
server/          # Backend Express application
  index.ts       # Server entry point
  routes.ts      # API route definitions
  storage.ts     # Data storage layer
  vite.ts        # Vite integration
shared/          # Code shared between client/server
  schema.ts      # Database schema & validation
attached_assets/ # Static assets and design docs
```

### External Services
- **Calendly**: https://calendly.com/shashankchauhan7498
- **Contact email**: shashank@techflows.co
- **Favicon**: client/public/favicon.png

### Notes
- Database configured for PostgreSQL but currently uses in-memory storage
- Session management infrastructure in place but not actively implemented
- User authentication schema exists but no auth routes defined
