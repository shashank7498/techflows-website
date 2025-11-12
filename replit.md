# TechFlows - AI/ML Engineering Platform

## Overview

TechFlows is a premium marketing website for an AI/ML engineering staffing and solutions company. The platform showcases services ranging from individual ML engineers to complete product development teams, emphasizing rapid deployment (48 hours) and cost efficiency (70% savings). The site follows a clean, minimalist design philosophy inspired by high-end SaaS products like Apple, Stripe, and Linear.

**Core Messaging:**
- Primary tagline: "Build your product — your way."
- Value proposition: From a single expert to a full-fledged engineering team, helping founders turn ideas into world-class products under their guidance at up to 70% lower cost
- Key themes: Flexible engagement, work under your guidance, end-to-end ownership, transparent pricing
- Process philosophy: "You lead. We build. Together, we scale."

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
- No heavy effects (no glassmorphism, 3D effects, or gradients)
- Contact page: Full black background with white text for maximum contrast and impact

**Component Architecture:**
- Page-based routing with dedicated page components (Home, Services, HowItWorks, About, Contact)
- Reusable UI components following atomic design principles
- Shared components: Navigation, Footer, Hero, CTASection, ContactForm, etc.
- All components use TypeScript with proper type definitions

**Homepage Sections:**
1. Hero: "Build your product — your way" with 70% cost savings messaging
2. What We Do: Transformation messaging with "You lead. We build. Together, we scale."
3. How It Works: 3-step process (Tell Us, Assemble, Build)
4. Why Choose Us: 6 benefits (Flexible Engagement, Work Under Your Guidance, End-to-End Ownership, Top-Tier Expertise, 70% Cost Efficiency, 48-Hour Deployment)
5. CTA: "Ready to build your product — your way?"

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

**Session Management:**
- Architecture supports Postgres session store (connect-pg-simple)
- Currently using in-memory storage for development

**Storage Layer:**
- Interface-based storage abstraction (IStorage)
- In-memory implementation (MemStorage) for development
- Designed to swap to database-backed storage
- Methods: getUser, getUserByUsername, createUser, createContactSubmission

### Data Architecture

**Schema Design (Drizzle ORM):**
- Users table: id, username, password
- Contact submissions table: id, name, company, email, message, createdAt
- UUID primary keys with PostgreSQL gen_random_uuid()
- Timestamp fields with automatic defaulting

**Validation:**
- Drizzle-Zod integration for type-safe schema validation
- Shared schema definitions between client and server
- Insert schemas derived from table schemas

**Database Configuration:**
- PostgreSQL dialect configured via Drizzle Kit
- Migrations directory: ./migrations
- Schema location: ./shared/schema.ts
- Connection via DATABASE_URL environment variable

### Build & Development

**Development Mode:**
- Vite dev server with HMR
- Express backend with tsx runtime
- Replit-specific plugins (cartographer, dev-banner, runtime-error-modal)
- Source maps for debugging

**Production Build:**
- Client: Vite builds React app to dist/public
- Server: esbuild bundles Express server to dist/index.js
- Platform: Node.js with ESM format
- External packages not bundled

**Path Aliases:**
- @/* maps to client/src/*
- @shared/* maps to shared/*
- @assets/* maps to attached_assets/*

### File Structure

```
client/          # Frontend React application
  src/
    components/  # Reusable UI components
    pages/       # Route page components
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

## External Dependencies

### UI Component Libraries
- **Radix UI**: Headless UI primitives for accessibility (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component system built on Radix UI
- **Lucide React**: Icon library
- **cmdk**: Command palette component
- **Embla Carousel**: Carousel/slider functionality

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod integration for React Hook Form

### Data Fetching
- **TanStack Query**: Server state management and caching
- **date-fns**: Date manipulation utilities

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Class name utilities
- **PostCSS & Autoprefixer**: CSS processing

### Database & ORM
- **Drizzle ORM**: Type-safe SQL ORM
- **@neondatabase/serverless**: Neon PostgreSQL driver
- **drizzle-kit**: Schema migrations
- **drizzle-zod**: Zod schema generation from Drizzle schemas

### Backend
- **Express**: Web server framework
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Development Tools
- **Vite**: Build tool and dev server
- **@vitejs/plugin-react**: React support for Vite
- **TypeScript**: Static typing
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds

### Replit Integration
- **@replit/vite-plugin-cartographer**: Replit file navigation
- **@replit/vite-plugin-dev-banner**: Development mode banner
- **@replit/vite-plugin-runtime-error-modal**: Runtime error overlay

### Fonts
- **Inter**: Primary sans-serif font (Google Fonts)
- **Roboto Mono**: Monospace font for technical elements

### External Services Referenced
- **Calendly**: Booking integration (shashankchauhan7498)
- Placeholder social media links (LinkedIn, Twitter, GitHub)

### Notes
- Database configured for PostgreSQL but currently uses in-memory storage
- Session management infrastructure in place but not actively implemented
- User authentication schema exists but no auth routes defined
- Ready to connect to Neon Postgres or similar managed database service