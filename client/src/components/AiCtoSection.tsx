import { useState } from "react";
import { useForm } from "@formspree/react";
import { ArrowRight, ChevronDown, ChevronUp, Check, Brain, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── constants ─────────────────────────────────────────────────────────────────

const PAIN_POINTS = [
  "No technical co-founder",
  "Don't know what stack to use",
  "MVP stuck or delayed",
  "Wrong architecture",
  "Can't afford a CTO",
  "Freelancer ghosted me",
  "Don't know what to build next",
];

const FAQ_ITEMS = [
  {
    q: "Do I need to know anything about tech?",
    a: "Nope! That's the whole point. You describe your idea in simple words — like telling a friend what you want to build. AI CTO handles all the tech stuff and explains everything in plain English.",
  },
  {
    q: "Is this just another chatbot?",
    a: "Think of the difference between Google Maps and a random person giving directions. Chatbots just answer your questions. AI CTO asks YOU the right questions first, then gives you a complete step-by-step plan — not just generic answers.",
  },
  {
    q: "I've already started building. Is it too late?",
    a: "Not at all! AI CTO can review what you've already built and tell you exactly what to fix, what to keep, and what to do next. Better to check now than to discover a big (expensive) problem later.",
  },
  {
    q: "How is this different from Lovable or Bolt?",
    a: "Lovable and Bolt build the code. AI CTO is the strategist that decides WHAT to build and HOW to structure it before any code is written. Think of AI CTO as the architect. Lovable/Bolt are the construction workers.",
  },
  {
    q: "Why can't I just use ChatGPT?",
    a: "ChatGPT only answers the questions you ask. The problem? You don't know which questions to ask! AI CTO knows exactly which 46 questions every good tech decision needs — and asks them for you.",
  },
  {
    q: "When does it launch?",
    a: "Q3 2026. Founders on the waitlist get in first, get a special founding discount, and get to help shape what we build. Join now — first 50 spots only.",
  },
];

// ─── sub-components ────────────────────────────────────────────────────────────

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
          : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />}
      </button>
      {open && <p className="text-muted-foreground leading-relaxed pb-5 text-sm">{a}</p>}
    </div>
  );
}

/** Visual product glimpse: mock AI chat conversation */
function MockChat() {
  return (
    <div className="bg-[#0f0f0f] text-white rounded-2xl overflow-hidden border border-white/10 shadow-3d-xl">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.03]">
        <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
          <Brain className="h-4 w-4 text-black" />
        </div>
        <div>
          <p className="text-sm font-bold">AI CTO</p>
          <p className="text-xs text-white/30">Your personal tech expert</p>
        </div>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          Online
        </span>
      </div>

      {/* Messages */}
      <div className="p-5 space-y-4">
        {/* AI greeting */}
        <div className="flex gap-3">
          <div className="w-7 h-7 bg-white/10 rounded-full flex-shrink-0 mt-0.5" />
          <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
            <p className="text-sm">Hey! Tell me what app you want to build — in one sentence is fine 👋</p>
          </div>
        </div>

        {/* User */}
        <div className="flex gap-3 justify-end">
          <div className="bg-white text-black rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
            <p className="text-sm">An app for booking dog walkers near me</p>
          </div>
        </div>

        {/* AI response with question card */}
        <div className="flex gap-3">
          <div className="w-7 h-7 bg-white/10 rounded-full flex-shrink-0 mt-0.5" />
          <div className="space-y-2 max-w-[90%]">
            <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3">
              <p className="text-sm">Got it! I've got 12 quick questions before we pick your tech stack ⚡</p>
            </div>
            <div className="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3">
              <p className="text-xs text-white/30 mb-1.5">Question 1 of 12</p>
              <p className="text-sm font-medium mb-3">How many users do you expect in your first 3 months?</p>
              <div className="flex gap-2 flex-wrap">
                {["Less than 100", "100–1,000", "1,000+"].map((opt) => (
                  <span key={opt} className="text-xs bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-lg cursor-pointer">
                    {opt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex gap-3">
          <div className="w-7 h-7 bg-white/10 rounded-full flex-shrink-0 mt-0.5" />
          <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3">
            <div className="flex gap-1.5 items-center">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Visual product glimpse: mock blueprint output */
function MockBlueprint() {
  const items = [
    { emoji: "🛠️", label: "Recommended Tech Stack", value: "React Native + Node.js + PostgreSQL" },
    { emoji: "⏱️", label: "Time to Build MVP",       value: "6–8 weeks" },
    { emoji: "💰", label: "Estimated Cost",           value: "$8,000 – $12,000" },
    { emoji: "⚠️", label: "Biggest Risk to Avoid",   value: "Payment compliance (Stripe required)" },
    { emoji: "🚀", label: "Build This First",         value: "Booking flow + Walker profiles" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-3d-xl p-7">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-5 border-b">
        <div className="w-11 h-11 bg-black text-white rounded-xl flex items-center justify-center flex-shrink-0">
          <FileText className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-base">Technical Blueprint</p>
          <p className="text-xs text-muted-foreground">Dog Walker Booking App · Generated in 4 min</p>
        </div>
        <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full font-semibold flex-shrink-0">
          ✓ Ready
        </span>
      </div>

      {/* Blueprint items */}
      <div className="space-y-2.5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <span className="text-2xl flex-shrink-0">{item.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-semibold truncate">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 bg-black text-white rounded-xl px-4 py-3 text-sm text-center font-medium">
        + 40 more decisions explained in plain English →
      </div>
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
      <div className="bg-white rounded-2xl border shadow-3d-lg p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-3">You're in!</h3>
        <p className="text-muted-foreground leading-relaxed">
          Your spot is saved. You'll get early access before anyone else —
          with your founding member discount locked in forever.
          <br /><br />
          Check your inbox — we'll send a quick survey so you can help shape what we build first.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border shadow-3d-lg p-8">
      <input type="hidden" name="source"       value="techflows_aicto_waitlist" />
      <input type="hidden" name="pain_points"  value={selectedPains.join(", ") || "none selected"} />

      <div className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full border rounded-xl px-4 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-black transition"
        />
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="w-full border rounded-xl px-4 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-black transition"
        />
      </div>

      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          What's your biggest challenge?{" "}
          <span className="normal-case font-normal">(optional — helps us build the right thing first)</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {PAIN_POINTS.map((pain) => {
            const on = selectedPains.includes(pain);
            return (
              <button
                key={pain}
                type="button"
                onClick={() => togglePain(pain)}
                className={`px-3 py-1.5 text-xs rounded-xl border font-medium transition-all ${
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

      <Button type="submit" disabled={state.submitting} className="w-full rounded-xl shadow-3d" size="lg">
        {state.submitting ? "Saving your spot…" : "Claim my early access spot — it's free"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-xs text-muted-foreground text-center mt-4">
        No credit card · No spam · 47 founders already waiting
      </p>
    </form>
  );
}

// ─── main ──────────────────────────────────────────────────────────────────────

export default function AiCtoSection() {
  return (
    <div id="ai-cto">

      {/* ══════════════════════════════════════════════════════════
          1. HERO — 2-col: copy left, mock chat right
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 60%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm font-semibold mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Launching Q3 2026 · 47 founders on the waitlist
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight mb-6 leading-[1.07]">
                You have an idea.
                <br />
                <span className="text-white/35">Don't build it</span>
                <br />
                <span className="text-white/35">the wrong way.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/55 mb-10 leading-relaxed max-w-lg">
                AI CTO is like having a super-smart tech friend who's built hundreds of apps.
                Tell it your idea — it tells you <em>exactly</em> what to do, in plain English.
                No tech knowledge needed. Ever.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start mb-14">
                <a href="#aicto-waitlist">
                  <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90 rounded-xl px-8 text-base shadow-3d">
                    Get early access — it's free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="#aicto-how"
                  className="text-white/40 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 mt-3 sm:mt-4"
                >
                  See how it works
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>

              {/* 3 quick stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {[
                  { n: "$47K",   label: "Average cost of one bad tech decision" },
                  { n: "73%",   label: "Founders make critical mistakes in year one" },
                  { n: "6 mo.", label: "Wasted finding a technical co-founder" },
                ].map((s) => (
                  <div key={s.n}>
                    <p className="text-2xl font-bold">{s.n}</p>
                    <p className="text-xs text-white/35 mt-1 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mock chat */}
            <div className="lg:pl-4">
              <MockChat />
              <p className="text-xs text-white/25 text-center mt-3">← This is what AI CTO actually looks like</p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. EXPLAINER — "What even IS a CTO?" (simple language)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Let's keep it simple</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              What the heck is
              <br />
              <span className="text-gradient-minimal">an AI CTO? 🤔</span>
            </h2>
          </div>

          {/* GPS analogy card */}
          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 mb-12 text-center max-w-3xl mx-auto">
            <div className="text-7xl mb-6">🗺️</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Think of it like GPS for your startup</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When you drive somewhere new, GPS tells you exactly which roads to take.
              You don't need to know every road —{" "}
              <strong className="text-foreground">you just follow the directions.</strong>
              <br /><br />
              AI CTO does the same thing for building your app.
              You don't need to know how to code.
              <strong className="text-foreground"> You just follow the plan it gives you.</strong>
            </p>
          </div>

          {/* 3-card explainer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🧑‍💼",
                title: "What's a CTO?",
                body: "A CTO (Chief Technology Officer) is the tech expert at a company. They decide WHAT to build, HOW to build it, and which tools to use. Big companies pay them $200,000+ a year.",
              },
              {
                emoji: "😩",
                title: "Why most founders don't have one",
                body: "Hiring a CTO takes 6 months and costs a fortune. Most early-stage founders are left making huge tech decisions completely alone — decisions that can quietly kill their startup.",
              },
              {
                emoji: "🤖",
                title: "What AI CTO does",
                body: "We trained AI on how the world's best CTOs think. Now you get the same expert guidance — instantly, in plain English, without hiring anyone or giving up equity.",
              },
            ].map((card) => (
              <div key={card.title} className="p-8 rounded-2xl border shadow-3d card-3d bg-white text-center">
                <div className="text-5xl mb-5">{card.emoji}</div>
                <h3 className="font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. THE PROBLEM — story-driven, not bullet points
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 gradient-mesh">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Does this sound familiar?</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              This is what happens
              <br />
              <span className="text-gradient-minimal">without an AI CTO</span>
            </h2>
          </div>

          {/* Story timeline */}
          <div className="space-y-4 mb-14">
            {[
              {
                emoji: "💡",
                step: "Month 1",
                title: "You have an amazing idea",
                body: "You're excited. You start describing it to developers. They nod and give you a quote. It all seems simple.",
                dark: false,
              },
              {
                emoji: "🤝",
                step: "Month 2",
                title: "You hire developers and start building",
                body: "Things seem to be going well. But quietly, dozens of technical decisions are being made — and you have no idea they're happening.",
                dark: false,
              },
              {
                emoji: "😰",
                step: "Month 5",
                title: "Things start breaking",
                body: "The app is slow. It crashes with 100 users. The developers go quiet, then say... \"We need to rebuild it from scratch.\"",
                dark: false,
              },
              {
                emoji: "💸",
                step: "Month 6",
                title: "You've lost $47,000 and 6 months",
                body: "Not because you had a bad idea. Because nobody set up the right foundation before building. A CTO would have caught this on Day 1.",
                dark: true,
              },
            ].map((card) => (
              <div
                key={card.step}
                className={`flex items-start gap-6 p-7 rounded-2xl border card-3d ${
                  card.dark
                    ? "bg-black text-white border-black shadow-3d-xl"
                    : "bg-white shadow-3d"
                }`}
              >
                <div className="text-4xl flex-shrink-0">{card.emoji}</div>
                <div>
                  <p className={`text-xs font-bold tracking-widest mb-1.5 ${card.dark ? "text-white/30" : "text-muted-foreground"}`}>
                    {card.step.toUpperCase()}
                  </p>
                  <h3 className="font-bold text-lg mb-1.5">{card.title}</h3>
                  <p className={`text-sm leading-relaxed ${card.dark ? "text-white/60" : "text-muted-foreground"}`}>
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl border p-8 text-center max-w-2xl mx-auto">
            <p className="text-xl font-bold mb-2">
              This doesn't happen because you're not smart enough. 😔
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              It happens because you didn't have a tech expert in your corner <em>before</em> you started.
              That's exactly what AI CTO fixes.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. HOW IT WORKS — 4 big simple steps
      ══════════════════════════════════════════════════════════ */}
      <section id="aicto-how" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              From blank idea to
              <br />
              <span className="text-gradient-minimal">complete plan. In minutes.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                n: "01",
                emoji: "💬",
                title: "Tell us your idea",
                body: "Just say it in plain English. \"I want to build an app for booking dog walkers.\" No tech words needed. Ever.",
                dark: false,
              },
              {
                n: "02",
                emoji: "🧠",
                title: "AI CTO asks the smart questions",
                body: "It asks the same 46 questions a great CTO asks before building anything. You just answer honestly. No jargon, no stress.",
                dark: false,
              },
              {
                n: "03",
                emoji: "📋",
                title: "You get your complete blueprint",
                body: "What to build, how to build it, in what order, with what tools, and how much it'll cost. All written in plain English.",
                dark: true,
                extras: ["Best tech stack", "Step-by-step roadmap", "Cost estimate", "Risks to avoid", "What to build first", "Plain English — always"],
              },
              {
                n: "04",
                emoji: "🚀",
                title: "Build it — or let us do it",
                body: "Take your blueprint to any developer. Or let TechFlows build it for you — fixed price, fixed timeline, zero equity.",
                dark: false,
              },
            ].map((step) => (
              <div
                key={step.n}
                className={`p-8 rounded-2xl border card-3d ${
                  step.dark
                    ? "bg-black text-white border-black shadow-3d-xl"
                    : "bg-white shadow-3d"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="text-4xl flex-shrink-0">{step.emoji}</div>
                  <div>
                    <p className={`text-xs font-bold tracking-widest mb-2 ${step.dark ? "text-white/30" : "text-muted-foreground"}`}>
                      STEP {step.n}
                    </p>
                    <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                    <p className={`text-sm leading-relaxed ${step.dark ? "text-white/60" : "text-muted-foreground"}`}>
                      {step.body}
                    </p>
                    {step.extras && (
                      <div className="mt-5 grid grid-cols-2 gap-2">
                        {step.extras.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-white/55">
                            <Check className="h-3 w-3 text-white/35 flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. PRODUCT GLIMPSE — chat + blueprint side by side
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 65%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/30 mb-4">A sneak peek 👀</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Here's what you actually get
            </h2>
            <p className="text-xl text-white/40 mt-4 max-w-xl mx-auto">
              No fluff. No jargon. Just clear answers — specific to your idea.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xs font-semibold text-white/30 mb-4 uppercase tracking-widest">The conversation with AI CTO</p>
              <MockChat />
            </div>
            <div>
              <p className="text-xs font-semibold text-white/30 mb-4 uppercase tracking-widest">Your blueprint (what you walk away with)</p>
              <MockBlueprint />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. COMPARISON TABLE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">How we compare</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              The only solution that
              <br />
              <span className="text-gradient-minimal">actually fills the gap.</span>
            </h2>
          </div>

          <div className="rounded-2xl border shadow-3d-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-6 py-5 text-left font-semibold text-muted-foreground w-2/5">What you get</th>
                  <th className="px-4 py-5 text-center font-semibold text-muted-foreground">Full-time CTO</th>
                  <th className="px-4 py-5 text-center font-semibold text-muted-foreground">Lovable / Bolt</th>
                  <th className="px-4 py-5 text-center font-bold bg-black text-white">AI CTO ✦</th>
                </tr>
              </thead>
              <tbody>
                {(
                  [
                    ["Tech strategy & planning",       true,  false, true],
                    ["Architecture decisions",          true,  false, true],
                    ["Plain English explanations",     false,  false, true],
                    ["Risk assessment",                 true,  false, true],
                    ["Ready in 24 hours",              false,  true,  true],
                    ["No salary or equity needed",     false,  true,  true],
                    ["Stays with you post-launch",      true,  false, true],
                  ] as [string, boolean, boolean, boolean][]
                ).map(([feat, cto, tool, ours], i) => (
                  <tr key={feat} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                    <td className="px-6 py-4 font-medium border-b">{feat}</td>
                    <td className="px-4 py-4 text-center border-b">
                      {cto  ? <span className="text-emerald-600 font-bold text-base">✓</span> : <span className="text-gray-300 text-base">—</span>}
                    </td>
                    <td className="px-4 py-4 text-center border-b">
                      {tool ? <span className="text-emerald-600 font-bold text-base">✓</span> : <span className="text-gray-300 text-base">—</span>}
                    </td>
                    <td className="px-4 py-4 text-center border-b bg-black/[0.04] font-bold">
                      {ours ? <span className="text-emerald-600 font-bold text-base">✓</span> : <span className="text-gray-300 text-base">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. FAQ — simple language
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 gradient-mesh">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Got questions?</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We've got
              <br />
              <span className="text-gradient-minimal">simple answers.</span>
            </h2>
          </div>
          <div className="glass-card rounded-2xl border shadow-3d-lg px-8 divide-y">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. WAITLIST CTA
      ══════════════════════════════════════════════════════════ */}
      <section id="aicto-waitlist" className="py-24 bg-black text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 65%)" }}
        />

        <div className="relative max-w-xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚀</div>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm font-semibold mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
            Only 50 founding member spots
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Ready to build
            <br />
            the right way?
          </h2>
          <p className="text-lg text-white/45 mb-10 leading-relaxed">
            Join the waitlist. Get in before everyone else.
            Founding members get early access and a special discount that never expires.
          </p>

          <WaitlistForm />
        </div>
      </section>

    </div>
  );
}
