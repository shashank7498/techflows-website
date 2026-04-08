import { useState } from "react";
import { useForm } from "@formspree/react";
import { ArrowRight, Clock, Brain, FileText, Rocket, Headphones, Check, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ────────────────────────────────────────────────────────────────────

const PAIN_POINTS = [
  "No technical co-founder",
  "Don't know what stack to use",
  "MVP stuck or delayed",
  "Wrong architecture risk",
  "Can't afford a CTO",
  "Freelancer ghosted me",
  "Don't know what to build next",
];

const PROBLEMS = [
  {
    title: '"I don\'t know what stack to choose"',
    body: "You pick React because everyone talks about it. Six months later your engineer says the architecture needs a rewrite. That's a $30K mistake.",
  },
  {
    title: '"My freelancer disappeared mid-build"',
    body: "No documentation. No handoff. You own code you can't read, built on an architecture nobody explained to you.",
  },
  {
    title: '"I used Lovable but hit a wall"',
    body: "Beautiful UI in 60 seconds. Then \"connect your Supabase.\" Three days debugging later, nobody warned you about the backend.",
  },
  {
    title: '"Am I HIPAA / GDPR compliant?"',
    body: "You're building a healthcare product. Nobody told you HIPAA requires a Business Associate Agreement before you write line one.",
  },
  {
    title: '"Can\'t find a technical co-founder"',
    body: "6 months of founder dating. Nobody joins pre-revenue. The ones who do want 20–25% equity before writing a single line of code.",
  },
  {
    title: '"I don\'t know what to build next"',
    body: "MVP is live. You have 30 feature requests, technical debt, and investor pressure. No technical brain to help prioritise.",
  },
];

const STEPS = [
  {
    icon: Brain,
    n: "01",
    title: "Describe your idea in plain English",
    sub: "5 minutes · no technical knowledge needed",
    body: '"I\'m building a marketplace for freelance nurses" is enough. No jargon required.',
  },
  {
    icon: Zap,
    n: "02",
    title: "AI CTO asks the questions you didn't know to ask",
    sub: "Structured 6-question technical discovery",
    body: "The same questions a great CTO asks before writing a single line of code — surfacing decisions you didn't know you needed to make.",
  },
  {
    icon: FileText,
    n: "03",
    title: "Receive your Technical Blueprint",
    sub: "Delivered in 24 hours · $499",
    body: "Architecture decision, stack recommendation, risk assessment, sprint roadmap, cost estimate — all specific to your product.",
    highlight: true,
  },
  {
    icon: Rocket,
    n: "04",
    title: "Build + launch with TechFlows",
    sub: "$3K–$15K · fixed price · 4–6 weeks",
    body: "TechFlows engineers execute the Blueprint. Fixed price. No equity.",
  },
  {
    icon: Headphones,
    n: "05",
    title: "AI CTO Co-pilot — always on",
    sub: "$500–$2,000/month · cancel anytime",
    body: "After launch, the AI CTO stays. Monitors your live product, flags issues, tells you what to build next.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Why not just use ChatGPT or Claude directly — they're free?",
    a: "GPT and Claude answer the questions you ask. The problem: you don't know which questions to ask. TechFlows AI CTO asks the right ones automatically — the same 46 questions a great CTO asks before writing a single line of code. It's the difference between a search engine and a doctor.",
  },
  {
    q: "Is this a real CTO or just another AI chatbot?",
    a: "It doesn't replace a Series B CTO managing 30 engineers. But for pre-seed to seed stage founders, it delivers exactly the structured thinking you need: architecture planning, stack recommendations, risk flagging, and sprint roadmapping — specific to your product. Not a chatbot. A structured expert process.",
  },
  {
    q: "I have zero technical background. Will I understand the Blueprint?",
    a: "Built specifically for you. Zero technical knowledge required. The Blueprint explains every decision in plain English — what was chosen, why, and what would happen with a different choice. After reading it, you'll confidently discuss your technical foundation with engineers and investors.",
  },
  {
    q: "How is this different from Lovable, Bolt, or v0?",
    a: "Lovable, Bolt, and v0 generate code brilliantly — and TechFlows AI CTO uses them as the build engine. The difference: they don't advise on what to build, how to structure it, or whether your architecture survives 1,000 users. They're the engine. AI CTO is the navigator.",
  },
  {
    q: "When does it launch? What do waitlist members get?",
    a: "Launching Q3 2026. First 50 founders get the Technical Blueprint at $99 instead of $499 (80% off). Early access before public launch. Direct feedback sessions with the founding team. No credit card needed.",
  },
  {
    q: "I've already started building. Is it too late?",
    a: "Not at all. The AI CTO performs a Technical Audit of your existing choices — identifying risks and recommending how to move forward without unnecessary rewrites. Better a $499 audit now than a $30K emergency rewrite later.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-md overflow-hidden bg-white shadow-3d">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex justify-between items-center text-left gap-4 hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-base">{q}</span>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 border-t">
          <p className="text-muted-foreground leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

function WaitlistForm() {
  const [state, handleSubmit] = useForm("mpqonrob");
  const [selectedPains, setSelectedPains] = useState<string[]>([]);

  const togglePain = (pain: string) =>
    setSelectedPains((prev) =>
      prev.includes(pain) ? prev.filter((p) => p !== pain) : [...prev, pain]
    );

  if (state.succeeded) {
    return (
      <div className="glass-card rounded-md p-10 text-center border shadow-3d-lg">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-2">You're in!</h3>
        <p className="text-muted-foreground leading-relaxed">
          Founding member spot saved. You'll get an email when early access opens — locked in at{" "}
          <strong className="text-foreground">$99</strong> instead of $499.
          <br />
          We'll also send a short survey to help shape what we build first.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-md border shadow-3d-lg p-8">
      <input type="hidden" name="source" value="techflows_aicto_waitlist" />
      <input type="hidden" name="pain_points" value={selectedPains.join(", ") || "none selected"} />

      <div className="flex flex-col gap-3 mb-5">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full border rounded-md px-4 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-black transition"
        />
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="w-full border rounded-md px-4 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-black transition"
        />
      </div>

      <div className="mb-5">
        <p className="text-xs text-muted-foreground font-semibold mb-3 uppercase tracking-wide">
          What's your biggest challenge? <span className="normal-case font-normal">(helps us build the right thing)</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {PAIN_POINTS.map((pain) => {
            const on = selectedPains.includes(pain);
            return (
              <button
                key={pain}
                type="button"
                onClick={() => togglePain(pain)}
                className={`px-3 py-1.5 text-xs rounded-md border font-medium transition-all ${
                  on
                    ? "bg-black text-white border-black"
                    : "bg-white text-muted-foreground border-border hover:border-black hover:text-foreground"
                }`}
              >
                {pain}
              </button>
            );
          })}
        </div>
      </div>

      <Button type="submit" disabled={state.submitting} className="w-full shadow-3d" size="lg">
        {state.submitting ? "Saving your spot…" : "Reserve my founding spot"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-xs text-muted-foreground text-center mt-3">
        No credit card · No spam · 47 founders already on the list
      </p>
    </form>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AiCtoSection() {
  return (
    <div id="ai-cto">

      {/* ── ANNOUNCEMENT BANNER ── */}
      <div className="bg-black text-white text-sm py-3 px-6 text-center flex items-center justify-center gap-3 flex-wrap">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-semibold">Now Building:</span>
          <span className="opacity-80">TechFlows AI CTO — technical co-founder intelligence, on demand.</span>
        </span>
        <a
          href="#aicto-waitlist"
          className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Get early access →
        </a>
      </div>

      {/* ── HERO ── */}
      <section className="py-28 gradient-mesh relative overflow-hidden">
        <div className="floating-dot w-72 h-72 top-10 -right-20 opacity-50" style={{ animationDelay: "1s" }} />
        <div className="floating-dot w-48 h-48 bottom-10 left-10 opacity-30" style={{ animationDelay: "3s" }} />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white border shadow-3d rounded-md px-4 py-2 text-sm font-semibold mb-8">
              <Clock className="h-3.5 w-3.5" />
              Launching Q3 2026 — Join the Waitlist
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Your startup needs a CTO.
              <br />
              <span className="text-gradient-minimal">Now you have one.</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Non-technical founder? Stop guessing on architecture, stack, and technical decisions.
              TechFlows AI CTO thinks <em>with</em> you — not just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a href="#aicto-waitlist">
                <Button size="lg" className="text-base shadow-3d">
                  Join Waitlist — Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#aicto-how">
                <Button size="lg" variant="outline" className="text-base">
                  See how it works
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            {[
              { value: "$499", label: "vs $150K CTO salary" },
              { value: "24 hrs", label: "Full blueprint" },
              { value: "0%", label: "Equity taken" },
              { value: "47+", label: "Founders waiting" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-md p-5 card-3d text-center">
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">The problem every non-technical founder knows</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              You're building blind.
              <br />
              <span className="text-gradient-minimal">And it's not your fault.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              These aren't skill gaps — they're knowledge gaps. The kind a great CTO fills in their first week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="p-7 rounded-md border shadow-3d card-3d bg-white border-l-4 border-l-black">
                <p className="font-bold mb-2 italic">{p.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-md p-7 border text-center max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              A great CTO costs <strong>$150,000/year + equity</strong>.
              Until now, you had no alternative.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="aicto-how" className="py-28 gradient-mesh">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              From idea to built product.
              <br />
              <span className="text-gradient-minimal">With a CTO at every step.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className={`flex items-start gap-6 p-7 rounded-md border card-3d shadow-3d ${
                  step.highlight ? "bg-black text-white border-black" : "bg-white"
                }`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-md flex-shrink-0 shadow-3d ${
                  step.highlight ? "bg-white text-black" : "bg-black text-white"
                }`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-xs font-bold tracking-widest ${step.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                      {step.n}
                    </span>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                  </div>
                  <p className={`text-xs font-semibold mb-2 ${step.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                    {step.sub}
                  </p>
                  <p className={`text-sm leading-relaxed ${step.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                    {step.body}
                  </p>
                  {step.highlight && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                      {["Architecture decision", "Stack recommendation", "Risk assessment", "Sprint roadmap", "Cost estimate", "Key decisions"].map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-white/80">
                          <Check className="h-3 w-3 text-white flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">How it compares</p>
            <h2 className="text-4xl md:text-5xl font-bold">Everything you need.<br /><span className="text-gradient-minimal">Nothing you don't.</span></h2>
          </div>

          <div className="rounded-md border shadow-3d-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left text-sm text-muted-foreground font-semibold w-2/5">Feature</th>
                  <th className="p-4 text-center text-sm text-muted-foreground font-semibold">Full-time CTO</th>
                  <th className="p-4 text-center text-sm text-muted-foreground font-semibold">Lovable / Bolt</th>
                  <th className="p-4 text-center text-sm font-bold bg-black text-white">TechFlows AI CTO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cost", "$150K+ + equity", "$20–100/mo", "$499 blueprint"],
                  ["Time to start", "3–6 months", "Minutes", "Same day"],
                  ["Technical strategy", "✓", "✗", "✓"],
                  ["Architecture planning", "✓", "✗", "✓"],
                  ["Code generation", "✓", "✓", "✓"],
                  ["Risk assessment", "✓", "✗", "✓"],
                  ["Ongoing co-pilot", "✓", "✗", "✓"],
                  ["Equity required", "3–7%", "0%", "0%"],
                ].map(([feat, cto, tool, ours], i) => (
                  <tr key={feat} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="p-4 text-sm font-medium border-b">{feat}</td>
                    <td className="p-4 text-center text-sm text-muted-foreground border-b">{cto}</td>
                    <td className="p-4 text-center text-sm text-muted-foreground border-b">{tool}</td>
                    <td className="p-4 text-center text-sm font-bold border-b bg-black/5">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-28 gradient-mesh">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold">Simple. Transparent.<br /><span className="text-gradient-minimal">No equity.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Think",
                price: "$499",
                period: "one-time · 24hr delivery",
                features: ["Technical Blueprint", "Architecture recommendation", "Stack with full reasoning", "Risk assessment", "Sprint roadmap", "Cost estimate"],
                featured: false,
              },
              {
                label: "Think + Build",
                price: "$3K–$15K",
                period: "per project · fixed price",
                features: ["Everything in Think", "AI-orchestrated build", "Human engineers for complexity", "QA + deployment included", "MVP in 4–6 weeks"],
                featured: true,
              },
              {
                label: "Co-pilot",
                price: "$500",
                period: "per month · cancel anytime",
                features: ["Always-on AI CTO", "Product health monitoring", "What to build next", "Code review on changes", "Technical Q&A 24/7"],
                featured: false,
              },
            ].map((plan) => (
              <div
                key={plan.label}
                className={`rounded-md border p-8 card-3d relative ${
                  plan.featured ? "bg-black text-white shadow-3d-xl border-black" : "bg-white shadow-3d"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-4 py-1 rounded-md border shadow-3d whitespace-nowrap">
                    Most popular
                  </div>
                )}
                <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${plan.featured ? "text-white/60" : "text-muted-foreground"}`}>
                  {plan.label}
                </p>
                <div className="text-4xl font-bold mb-1">{plan.price}</div>
                <p className={`text-sm mb-6 ${plan.featured ? "text-white/60" : "text-muted-foreground"}`}>{plan.period}</p>
                <div className={`h-px mb-6 ${plan.featured ? "bg-white/20" : "bg-border"}`} />
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div className={`inline-flex items-center justify-center w-5 h-5 rounded-sm flex-shrink-0 mt-0.5 ${plan.featured ? "bg-white text-black" : "bg-black text-white"}`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className={plan.featured ? "text-white/80" : "text-muted-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold">Every question,<br /><span className="text-gradient-minimal">answered.</span></h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section id="aicto-waitlist" className="py-28 gradient-mesh">
        <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border shadow-3d rounded-md px-4 py-2 text-sm font-semibold mb-8">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
            First 50 founders — 80% off at launch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reserve your founding
            <br />
            <span className="text-gradient-minimal">member spot.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get the Technical Blueprint at <strong className="text-foreground">$99</strong> instead of $499 when we launch.
            No credit card. No spam.
          </p>

          <WaitlistForm />
        </div>
      </section>
    </div>
  );
}
