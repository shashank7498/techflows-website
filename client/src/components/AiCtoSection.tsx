import { useState } from "react";
import { useForm } from "@formspree/react";
import { ArrowRight, ChevronDown, ChevronUp, Check, Zap, Brain, FileText, Rocket, Headphones, TrendingDown, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── constants ────────────────────────────────────────────────────────────────

const PAIN_POINTS = [
  "No technical co-founder",
  "Don't know what stack to use",
  "MVP stuck or delayed",
  "Wrong architecture",
  "Can't afford a CTO",
  "Freelancer ghosted me",
  "Don't know what to build next",
];

const PROBLEMS = [
  {
    icon: TrendingDown,
    stat: "$47,000",
    label: "Average cost of a bad architecture decision",
    body: "You picked the wrong stack. Six months later your engineer says everything needs a rewrite. This isn't bad luck — it's a knowledge gap that kills startups.",
  },
  {
    icon: Clock,
    stat: "6 months",
    label: "Average time wasted finding a technical co-founder",
    body: "Founder dating, equity negotiations, misaligned visions. Meanwhile, your competitors are shipping. Your runway is burning.",
  },
  {
    icon: AlertTriangle,
    stat: "73%",
    label: "Of non-technical founders make critical tech mistakes in year 1",
    body: "HIPAA violations. Unscalable databases. Security holes. Not because they're incompetent — because nobody told them what questions to ask.",
  },
];

const STEPS = [
  {
    icon: Brain,
    n: "01",
    title: "Tell us about your idea",
    body: '"I\'m building a marketplace for freelance nurses." That\'s enough to start. No technical knowledge required — ever.',
  },
  {
    icon: Zap,
    n: "02",
    title: "AI CTO asks the questions you didn't know to ask",
    body: "The same 46 questions a great CTO asks before writing a single line of code. Architecture. Scale. Compliance. Stack. Surfacing decisions you didn't know you needed to make.",
  },
  {
    icon: FileText,
    n: "03",
    title: "Get your complete Technical Blueprint",
    body: "Architecture decision. Stack recommendation. Risk assessment. Sprint roadmap. Cost estimate. All specific to your product — not generic advice.",
    highlight: true,
  },
  {
    icon: Rocket,
    n: "04",
    title: "Build it — or let us build it for you",
    body: "Take your Blueprint to any engineer, or let TechFlows execute it. Fixed scope. Fixed timeline. Zero equity.",
  },
  {
    icon: Headphones,
    n: "05",
    title: "Your AI CTO stays on — forever",
    body: "After launch, the AI CTO keeps watching. Flags issues before they become crises. Tells you what to build next. Answers technical questions at 3am.",
  },
];

const COMPARE_ROWS = [
  ["Technical strategy",   true,  false, true],
  ["Architecture planning", true, false, true],
  ["Stack recommendation",  true, false, true],
  ["Risk assessment",       true, false, true],
  ["Code generation",       true, true,  true],
  ["Ongoing co-pilot",      true, false, true],
  ["No equity required",    false, true, true],
  ["Ready in 24 hours",     false, true, true],
];

const FAQ_ITEMS = [
  {
    q: "Why not just use ChatGPT for this?",
    a: "ChatGPT answers the questions you ask. The problem: you don't know which questions to ask. TechFlows AI CTO asks them for you — the 46 specific questions a great CTO asks before writing line one of code. It's the difference between a search engine and a doctor.",
  },
  {
    q: "Is this a real CTO or just a chatbot?",
    a: "It doesn't replace a Series B CTO managing 30 engineers. But for pre-seed to seed stage founders, it delivers exactly the structured thinking you need — architecture planning, risk flagging, sprint roadmapping — specific to your product. Not a chatbot. A structured expert system.",
  },
  {
    q: "I have zero technical background. Will I understand this?",
    a: "Built specifically for you. The output explains every decision in plain English: what was chosen, why, and what would happen with a different choice. After reading it, you'll confidently discuss your technical foundation with engineers and investors.",
  },
  {
    q: "How is this different from Lovable or Bolt?",
    a: "Lovable and Bolt generate code beautifully — AI CTO uses them as the build engine. The difference: they don't advise on what to build, how to structure it, or whether your architecture survives 1,000 users. They're the engine. AI CTO is the navigator.",
  },
  {
    q: "I've already started building. Is it too late?",
    a: "Not at all. AI CTO performs a Technical Audit of what you've built — identifying risks and telling you exactly how to move forward without a costly rewrite. Better an audit now than an emergency rebuild later.",
  },
  {
    q: "When does it launch?",
    a: "Q3 2026. Waitlist members get early access before the public launch, an 80% founding discount, and direct input into what gets built first. Join now — first 50 spots only.",
  },
];

// ─── sub-components ───────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex justify-between items-start text-left gap-6 hover:opacity-70 transition-opacity"
      >
        <span className="font-semibold text-base leading-snug">{q}</span>
        {open
          ? <ChevronUp className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
          : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
        }
      </button>
      {open && (
        <p className="text-muted-foreground leading-relaxed pb-5 text-sm">{a}</p>
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
      <div className="bg-white rounded-md border shadow-3d-lg p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-3">You're on the list.</h3>
        <p className="text-muted-foreground leading-relaxed">
          Founding member spot locked in. You'll be the first to know when we launch —
          with your founding discount applied automatically.
          <br /><br />
          Check your inbox. We'll send a quick survey to help shape what we build first.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-md border shadow-3d-lg p-8">
      <input type="hidden" name="source" value="techflows_aicto_waitlist" />
      <input type="hidden" name="pain_points" value={selectedPains.join(", ") || "none selected"} />

      <div className="flex flex-col gap-3 mb-6">
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

      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          What's slowing you down? <span className="normal-case font-normal">(optional — helps us build the right thing)</span>
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
        {state.submitting ? "Locking in your spot…" : "Get early access — it's free"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        No credit card · No spam · 47 founders already waiting
      </p>
    </form>
  );
}

// ─── main ────────────────────────────────────────────────────────────────────

export default function AiCtoSection() {
  return (
    <div id="ai-cto">

      {/* ════════════════════════════════════════════════
          HERO — full-screen dark, clickbait headline
      ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ background: "radial-gradient(ellipse at 60% 0%, rgba(255,255,255,0.06) 0%, transparent 60%)" }}
        />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-md px-4 py-2 text-sm font-semibold mb-10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
            Now Building · Launching Q3 2026
          </div>

          {/* Clickbait headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.02]">
            Your startup has a
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">$47,000 problem.</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-white/10 rounded" />
            </span>
            <br />
            <span className="text-white/50">You just don't know it yet.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            73% of non-technical founders make a critical technical mistake in year one.
            TechFlows AI CTO is the technical brain that stops you from being one of them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a href="#aicto-waitlist">
              <Button size="lg" variant="secondary" className="text-base shadow-3d bg-white text-black hover:bg-white/90 px-8">
                I want early access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#aicto-how" className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
              Show me how it works
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          {/* Social proof bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              <strong className="text-white">47 founders</strong> already on the waitlist
            </span>
            <span>·</span>
            <span>No credit card required</span>
            <span>·</span>
            <span>0% equity taken — ever</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          THE PROBLEM — 3 hard-hitting stats
      ════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">The brutal truth</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Most startups don't fail because
              <br />
              <span className="text-gradient-minimal">the idea was bad.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
              They fail because nobody told the founder what they needed to know before they started building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {PROBLEMS.map((p) => (
              <div key={p.stat} className="p-8 rounded-md border shadow-3d card-3d bg-white text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-black text-white mb-6 shadow-3d">
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="text-5xl font-bold mb-2">{p.stat}</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">{p.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-md border p-8 text-center max-w-3xl mx-auto">
            <p className="text-xl font-semibold leading-relaxed">
              "These are not skill gaps.{" "}
              <span className="text-gradient-minimal">They are knowledge gaps.</span>
              {" "}The kind a great CTO fills in their first week."
            </p>
            <p className="text-muted-foreground text-sm mt-3">— What every non-technical founder realises too late</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PRODUCT REVEAL — the "aha" moment
      ════════════════════════════════════════════════ */}
      <section className="py-28 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6">Introducing</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            TechFlows AI CTO
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-16 leading-relaxed">
            The technical co-founder every non-technical founder deserves —
            without the equity, the 3-month search, or the $150K salary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            {[
              {
                title: "It thinks like a CTO",
                body: "Not a chatbot that answers your questions. A system that asks the 46 questions a great CTO asks before you write a single line of code.",
              },
              {
                title: "It's built for non-technical founders",
                body: "Zero jargon. Every decision explained in plain English. After one session, you'll talk about your tech stack like you've been building for years.",
              },
              {
                title: "It works at every stage",
                body: "Pre-idea, mid-build, post-launch. Whether you haven't started or already have an MVP that's held together with duct tape — AI CTO has a plan.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white/5 border border-white/10 rounded-md p-7 hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════════ */}
      <section id="aicto-how" className="py-28 gradient-mesh">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              From blank napkin to
              <br />
              <span className="text-gradient-minimal">bulletproof blueprint.</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto">Five steps. One session. Everything your startup needs to stop guessing and start building right.</p>
          </div>

          <div className="space-y-4">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className={`flex items-start gap-6 p-7 rounded-md border card-3d ${
                  step.highlight
                    ? "bg-black text-white border-black shadow-3d-xl"
                    : "bg-white shadow-3d"
                }`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-md flex-shrink-0 shadow-3d ${
                  step.highlight ? "bg-white text-black" : "bg-black text-white"
                }`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold tracking-widest mb-1 ${step.highlight ? "text-white/40" : "text-muted-foreground"}`}>
                    STEP {step.n}
                  </p>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${step.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                    {step.body}
                  </p>
                  {step.highlight && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
                      {[
                        "Architecture decision",
                        "Stack recommendation",
                        "Risk assessment",
                        "Sprint roadmap",
                        "Cost estimate",
                        "Key technical decisions",
                      ].map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-white/70">
                          <Check className="h-3 w-3 text-white/50 flex-shrink-0" />
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

      {/* ════════════════════════════════════════════════
          VS COMPARISON — no prices
      ════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Why AI CTO</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Finally. A solution that actually
              <br />
              <span className="text-gradient-minimal">fills the gap.</span>
            </h2>
          </div>

          <div className="rounded-md border shadow-3d-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground w-2/5">Capability</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-muted-foreground">Full-time CTO</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-muted-foreground">Lovable / Bolt</th>
                  <th className="px-4 py-4 text-center text-sm font-bold bg-black text-white">TechFlows AI CTO</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([feat, cto, tool, ours], i) => (
                  <tr key={String(feat)} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-6 py-4 text-sm font-medium border-b">{feat}</td>
                    <td className="px-4 py-4 text-center text-lg border-b">{cto ? "✓" : <span className="text-muted-foreground/40 text-sm">—</span>}</td>
                    <td className="px-4 py-4 text-center text-lg border-b">{tool ? "✓" : <span className="text-muted-foreground/40 text-sm">—</span>}</td>
                    <td className="px-4 py-4 text-center text-lg font-bold border-b bg-black/5">{ours ? "✓" : <span className="text-muted-foreground/40 text-sm">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════ */}
      <section className="py-28 gradient-mesh">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Every objection,
              <br />
              <span className="text-gradient-minimal">answered honestly.</span>
            </h2>
          </div>

          <div className="glass-card rounded-md border shadow-3d-lg px-8 divide-y">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WAITLIST CTA — no prices, pure urgency
      ════════════════════════════════════════════════ */}
      <section id="aicto-waitlist" className="py-28 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ background: "radial-gradient(ellipse at 40% 100%, rgba(255,255,255,0.05) 0%, transparent 60%)" }}
        />

        <div className="relative max-w-xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-md px-4 py-2 text-sm font-semibold mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
            First 50 founding member spots only
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Stop building blind.
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed">
            Join the waitlist now. Be first in line when we launch.
            Founding members get exclusive early access and a discount that never goes away.
          </p>

          <WaitlistForm />
        </div>
      </section>

    </div>
  );
}
