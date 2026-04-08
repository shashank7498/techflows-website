import React, { useState } from "react";
import { useForm } from "@formspree/react";

// ─── constants ─────────────────────────────────────────────────────────────────

const PAIN_OPTIONS = [
  "No technical co-founder",
  "Don't know what stack to use",
  "MVP stuck or delayed",
  "Wrong architecture risk",
  "Can't afford a CTO",
  "Freelancer ghosted me",
  "Don't know what to build next",
];

// ─── FAQ data ──────────────────────────────────────────────────────────────────

interface FAQItemData { q: string; a: React.ReactNode }

const p = (text: React.ReactNode, extra?: React.CSSProperties) => (
  <p style={{ fontSize: 13, color: "#7A9BB5", lineHeight: 1.8, marginBottom: 10, ...extra }}>{text}</p>
);

const FAQ_ITEMS: FAQItemData[] = [
  {
    q: "Why not just use ChatGPT or Claude directly — they're free?",
    a: (<>
      {p('GPT and Claude give you answers to the questions you ask. The problem: you don\'t know which questions to ask. A non-technical founder types "what database should I use?" and gets a generic 500-word essay on PostgreSQL vs MongoDB.', { marginTop: 14 })}
      {p('What they needed to ask was: "Given that I\'m building a multi-tenant HealthTech SaaS with HIPAA requirements, scaling from 10 to 100 clinics, which database architecture prevents a complete rewrite at client #15?"')}
      {p(<>TechFlows AI CTO asks that second question automatically — and 46 others like it — based on your specific situation. Think of it as the difference between a search engine and a doctor.</>)}
    </>),
  },
  {
    q: "Is this a real CTO or just another AI chatbot?",
    a: (<>
      {p("Let's be direct: it does not replace a CTO at a Series B company with 30 engineers. That person manages teams, handles board relationships, and carries accountability with their career.", { marginTop: 14 })}
      {p("What it IS: a structured AI system built on real startup technical decisions that gives every pre-seed and seed-stage non-technical founder access to specific CTO thinking — architecture planning, risk flagging, sprint roadmapping — specific to their product, industry, compliance needs, and scale. Not a chatbot. A structured expert process.")}
    </>),
  },
  {
    q: "I have zero technical background. Will I understand the Blueprint?",
    a: (<>
      {p('This is built specifically for you. Zero technical knowledge required to start — "I\'m building a marketplace for freelance nurses" is enough.', { marginTop: 14 })}
      {p("The Blueprint explains every decision in plain English: what was chosen, why it was chosen, and what would happen if a different choice was made. After reading it, you'll fully understand the technical foundation of your own product — and can confidently discuss it with engineers, freelancers, and investors.")}
    </>),
  },
  {
    q: "How is this different from Lovable, Bolt, or v0?",
    a: (<>
      {p("Lovable, Bolt, and v0 are excellent — and TechFlows AI CTO uses them as the build engine. They generate code brilliantly. The difference: they don't advise on what to build, how to structure it, whether your architecture survives 1,000 users, or whether you're HIPAA compliant.", { marginTop: 14 })}
      {p('They\'re the engine. AI CTO is the navigator. Most non-technical founders hit the "Technical Cliff" — Lovable builds something beautiful, then you need to connect a database, configure auth, set up deployment. AI CTO ensures your foundation is right before you build on it.')}
    </>),
  },
  {
    q: "Is my idea and data safe? Who can see it?",
    a: (<>
      {p("Your idea and data are completely private. TechFlows never shares, sells, or uses your product details for any purpose other than delivering your Blueprint.", { marginTop: 14 })}
      {p("We use the Anthropic Claude API for AI processing. By default, Anthropic does not use API data to train their models. All data is encrypted in transit and at rest. You can request full deletion of your project data at any time.")}
    </>),
  },
  {
    q: "When does it launch? What do waitlist members actually get?",
    a: (<>
      {p("Launching Q3 2026. We're currently in private development with a small group of early founders whose feedback is shaping the product.", { marginTop: 14 })}
      {p(<>Waitlist benefits: First 50 founders get the Technical Blueprint at <strong style={{ color: "#EEF4FF" }}>$99 instead of $499</strong> (80% off founding price). Early access before public launch. Invited to direct feedback sessions with the founding team. No credit card needed to join.</>)}
    </>),
  },
  {
    q: "What industries and product types does it work for?",
    a: (<>
      {p("AI CTO works for any digital product — SaaS, marketplaces, AI tools, FinTech, HealthTech, EdTech, PropTech, and more. Built specifically for pre-seed to seed stage (idea through first 500 users).", { marginTop: 14 })}
      {p("It has deep knowledge of industry-specific compliance — HIPAA, GDPR, PCI DSS, SOC 2. When your product triggers a compliance requirement, the AI CTO flags it immediately and explains exactly what it means for your architecture — before it becomes an expensive problem.")}
    </>),
  },
  {
    q: "I've already started building. Is it too late?",
    a: (<>
      {p("Not at all. The Technical Blueprint works at any stage. If you've already started, the AI CTO performs a Technical Audit of your existing choices — identifying risks in what's been built, and recommending how to move forward without unnecessary rewrites.", { marginTop: 14 })}
      {p('Many founders who come to TechFlows have an existing MVP that "works but I\'m scared it will break." The audit tells you exactly what will break, when, and what to do before it happens. Better a $499 audit now than a $30K emergency rewrite later.')}
    </>),
  },
];

// ─── sub-components ────────────────────────────────────────────────────────────

function FAQItem({ q, a }: FAQItemData) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: "#0C1828", border: "1px solid #1A3048", borderRadius: 12, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", padding: "17px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", textAlign: "left", gap: 12 }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: "#CBD5E1", lineHeight: 1.4 }}>{q}</span>
        <span style={{ color: "#3D6080", fontSize: 22, fontWeight: 300, flexShrink: 0, lineHeight: 1 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div style={{ padding: "0 20px 18px", borderTop: "1px solid #0F1828" }}>{a}</div>
      )}
    </div>
  );
}

function WaitlistForm() {
  const [state, handleSubmit] = useForm("mpqonrob");
  const [selectedPains, setSelectedPains] = useState<string[]>([]);

  const toggle = (pain: string) =>
    setSelectedPains(prev => prev.includes(pain) ? prev.filter(x => x !== pain) : [...prev, pain]);

  if (state.succeeded) {
    return (
      <div style={{ background: "#0C1828", border: "1px solid rgba(0,229,160,.28)", borderRadius: 16, padding: "36px 28px" }}>
        <div style={{ fontSize: 34, marginBottom: 12 }}>🎉</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#00E5A0", marginBottom: 8 }}>You're in!</div>
        <div style={{ fontSize: 14, color: "#7A9BB5", lineHeight: 1.7 }}>
          Founding member spot saved. You'll get an email when early access opens — locked in at{" "}
          <strong style={{ color: "#EEF4FF" }}>$99</strong> instead of $499.<br /><br />
          Watch your inbox. We'll also send a short survey to help shape what we build first.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: "#0C1828", border: "1px solid rgba(45,126,248,.22)", borderRadius: 16, padding: 28 }}>
      <input type="hidden" name="source" value="techflows_aicto_waitlist" />
      <input type="hidden" name="pain_points" value={selectedPains.join(", ") || "none selected"} />

      <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 14 }}>
        <input
          type="text" name="name" placeholder="Your name"
          style={{ width: "100%", background: "#070E18", border: "1px solid #1A3048", borderRadius: 10, padding: "13px 15px", color: "#EEF4FF", fontSize: 14, outline: "none", fontFamily: "inherit" }}
          onFocus={e => (e.target.style.borderColor = "#2D7EF8")}
          onBlur={e => (e.target.style.borderColor = "#1A3048")}
        />
        <input
          type="email" name="email" placeholder="your@email.com" required
          style={{ width: "100%", background: "#070E18", border: "1px solid #1A3048", borderRadius: 10, padding: "13px 15px", color: "#EEF4FF", fontSize: 14, outline: "none", fontFamily: "inherit" }}
          onFocus={e => (e.target.style.borderColor = "#2D7EF8")}
          onBlur={e => (e.target.style.borderColor = "#1A3048")}
        />
      </div>

      <div style={{ marginBottom: 18, textAlign: "left" }}>
        <div style={{ fontSize: 12, color: "#3D5580", marginBottom: 8, fontWeight: 600 }}>
          What's your biggest challenge right now?{" "}
          <span style={{ fontWeight: 400, color: "#2A4060" }}>(helps us build the right thing)</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {PAIN_OPTIONS.map(pain => {
            const on = selectedPains.includes(pain);
            return (
              <button
                key={pain} type="button" onClick={() => toggle(pain)}
                style={{ padding: "5px 12px", background: on ? "rgba(45,126,248,0.14)" : "#070E18", border: `1px solid ${on ? "#2D7EF8" : "#1A3048"}`, borderRadius: 20, color: on ? "#93C5FD" : "#6B8CAE", fontSize: 11, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" }}
              >{pain}</button>
            );
          })}
        </div>
      </div>

      <button
        type="submit" disabled={state.submitting}
        style={{ width: "100%", padding: 15, background: "linear-gradient(135deg,#163a8a,#2D7EF8)", border: "none", borderRadius: 11, color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}
      >
        {state.submitting ? "Reserving your spot…" : "Reserve my founding spot →"}
      </button>
      <div style={{ fontSize: 11, color: "#243550", textAlign: "center", marginTop: 10 }}>
        No credit card · No spam · <span style={{ color: "#2D4870", fontWeight: 600 }}>47 founders</span> already on the list
      </div>
    </form>
  );
}

// ─── main export ───────────────────────────────────────────────────────────────

export default function AiCtoSection() {
  // shared dot-grid background
  const dotGrid = { backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" };

  return (
    <div id="ai-cto" style={{ fontFamily: "'Segoe UI',system-ui,-apple-system,sans-serif" }}>

      {/* ══════════════════════════════════════════════════════════
          ANNOUNCEMENT BAR
      ══════════════════════════════════════════════════════════ */}
      <div style={{ background: "linear-gradient(90deg,#080D1C,#0D1630,#080D1C)", borderBottom: "1px solid #162040", padding: "11px 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(0,229,160,.1)", border: "1px solid rgba(0,229,160,.28)", borderRadius: 20, padding: "3px 12px" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00E5A0", animation: "acp 2s infinite" }} />
          <span style={{ fontSize: 11, fontWeight: 800, color: "#00E5A0", letterSpacing: "0.08em" }}>NOW BUILDING</span>
        </div>
        <span style={{ fontSize: 13, color: "#94A3B8" }}>Introducing <strong style={{ color: "#fff" }}>TechFlows AI CTO</strong> — technical co-founder intelligence, on demand.</span>
        <a href="#aicto-waitlist" style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "linear-gradient(135deg,#163a8a,#2D7EF8)", borderRadius: 20, padding: "5px 14px", color: "#fff", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
          Get early access →
        </a>
      </div>

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#030812", padding: "88px 24px 72px", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 900, height: 500, background: "radial-gradient(ellipse at 50% 0%,rgba(45,126,248,.13) 0%,transparent 62%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "15%", width: 500, height: 300, background: "radial-gradient(ellipse,rgba(0,212,255,.05) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(45,126,248,.1)", border: "1px solid rgba(45,126,248,.32)", borderRadius: 20, padding: "7px 18px", marginBottom: 28 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#2D7EF8" strokeWidth="1.5"/><path d="M6 3.5v2.5l1.5 1.5" stroke="#2D7EF8" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#2D7EF8", letterSpacing: "0.07em", textTransform: "uppercase" }}>Launching Q3 2026 — Join the Waitlist</span>
          </div>

          <h2 style={{ fontSize: "clamp(34px,6vw,62px)", fontWeight: 900, color: "#EEF4FF", lineHeight: 1.06, letterSpacing: "-0.04em", marginBottom: 20 }}>
            Your startup needs a CTO.<br />
            <span style={{ background: "linear-gradient(135deg,#2D7EF8,#00D4FF,#00E5A0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200%", animation: "acsh 4s linear infinite", display: "inline-block" }}>
              Now you have one.
            </span>
          </h2>

          <p style={{ fontSize: 18, color: "#7A9BB5", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 48px" }}>
            Non-technical founder? Stop guessing about architecture, stack, and technical decisions. TechFlows AI CTO thinks <em>with</em> you — not just for you. The CTO brain every founder deserves, at a price every founder can afford.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 52 }}>
            <a href="#aicto-waitlist" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1a4fa8,#2D7EF8)", borderRadius: 12, padding: "14px 28px", color: "#fff", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><path d="M8 2l1.8 3.8L14 6.5l-3 2.9.7 4L8 11.3l-3.7 2.1.7-4-3-2.9 4.2-.7z"/></svg>
              Join Waitlist — Free
            </a>
            <a href="#aicto-how" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1px solid #1E3A5F", borderRadius: 12, padding: "14px 28px", color: "#94A3B8", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
              See how it works ↓
            </a>
          </div>

          {/* stat pills */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { n: "$499", label: "vs $150K CTO salary" },
              { n: "24hrs", label: "full blueprint" },
              { n: "0%", label: "equity taken" },
            ].map(s => (
              <div key={s.n} style={{ background: "#0C1828", border: "1px solid #1A3048", borderRadius: 20, padding: "8px 18px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 19, fontWeight: 900, color: "#EEF4FF" }}>{s.n}</span>
                <span style={{ fontSize: 12, color: "#6B8CAE" }}>{s.label}</span>
              </div>
            ))}
            <div style={{ background: "#0C1828", border: "1px solid rgba(0,229,160,.28)", borderRadius: 20, padding: "8px 18px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00E5A0", animation: "acp 2s infinite" }} />
              <span style={{ fontSize: 12, color: "#00E5A0", fontWeight: 600 }}>47 founders on waitlist</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THE PROBLEM
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#040912", padding: "72px 24px", borderTop: "1px solid #0F1E2E" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#F87171", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>The problem every non-technical founder knows</div>
            <h3 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: "#EEF4FF", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              You're building blind.<br /><span style={{ color: "#7A9BB5", fontWeight: 400 }}>And it's not your fault.</span>
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 10, marginBottom: 36 }}>
            {[
              { title: '❌ "I don\'t know what stack to choose"', body: "You pick React because everyone talks about it. Six months later your engineer says the whole architecture needs a rewrite. That's a $30K mistake." },
              { title: '❌ "My freelancer disappeared mid-build"', body: "No documentation. No handoff. You own code you can't read, built on an architecture nobody explained to you. Starting over costs more than starting right." },
              { title: '❌ "I used Lovable but hit a wall"', body: 'Beautiful UI in 60 seconds. Then "connect your Supabase." Three days debugging RLS policies later, you realise the tool generated frontend magic but nobody warned you about the backend.' },
              { title: '❌ "Am I HIPAA / GDPR compliant?"', body: "You're building a healthcare product and storing user data. Nobody told you HIPAA requires a Business Associate Agreement with your cloud provider before you write line one." },
              { title: '❌ "Can\'t find a technical co-founder"', body: "6 months of founder dating. Nobody wants to join pre-revenue. The ones who do want 20–25% equity before writing a line of code. Your runway is burning." },
              { title: '❌ "I don\'t know what to build next"', body: "MVP is live. Users are using it. You have 30 feature requests, mounting technical debt, and investor pressure. No technical brain to help you prioritise." },
            ].map(card => (
              <div key={card.title} style={{ background: "#0A1520", border: "1px solid #1A3048", borderLeft: "3px solid #F87171", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#FCA5A5", marginBottom: 6 }}>{card.title}</div>
                <div style={{ fontSize: 12, color: "#6B8CAE", lineHeight: 1.7 }}>{card.body}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(45,126,248,.07)", border: "1px solid rgba(45,126,248,.18)", borderRadius: 14, padding: "22px 28px", textAlign: "center" }}>
            <p style={{ fontSize: 15, color: "#CBD5E1", lineHeight: 1.7 }}>
              These are not skill gaps. They are <strong style={{ color: "#EEF4FF" }}>knowledge gaps</strong> — the kind a great CTO fills in their first week. A great CTO costs <strong style={{ color: "#EEF4FF" }}>$150,000/year + equity</strong>. Until now, you had no alternative.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════════ */}
      <section id="aicto-how" style={{ background: "#030812", padding: "80px 24px", borderTop: "1px solid #0F1E2E" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#00D4FF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>How it works</div>
            <h3 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: "#EEF4FF", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              From idea to built product.<br />With a CTO at every step.
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {/* Step 1 */}
            <StepRow n="1" circleGrad="linear-gradient(135deg,#163a8a,#2D7EF8)" lineGrad="linear-gradient(#2D7EF8,#1A3048)" borderColor="#1A3048" emoji="💬" title="Describe your idea in plain English" meta="5 minutes · no technical knowledge needed" metaColor="#3D5580" last={false}>
              <p style={{ fontSize: 13, color: "#7A9BB5", lineHeight: 1.7 }}>"I'm building a marketplace for freelance nurses" is enough to start. No jargon required.</p>
            </StepRow>

            {/* Step 2 */}
            <StepRow n="2" circleGrad="linear-gradient(135deg,#0d6efd,#00D4FF)" lineGrad="linear-gradient(#00D4FF,#1A3048)" borderColor="#1A3048" emoji="🧠" title="AI CTO asks the questions you didn't know to ask" meta="structured 6-question technical discovery" metaColor="#3D5580" last={false}>
              <p style={{ fontSize: 13, color: "#7A9BB5", lineHeight: 1.7, marginBottom: 10 }}>The same questions a great CTO asks before writing a single line of code — surfacing decisions you didn't know you needed to make.</p>
              <div style={{ background: "#070E18", borderRadius: 8, padding: "11px 14px" }}>
                <div style={{ fontSize: 11, color: "#3D5580", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 7 }}>Example questions it asks:</div>
                <div style={{ fontSize: 12, color: "#94A3B8", lineHeight: 1.9 }}>
                  → Do you store personal health data? <span style={{ color: "#3D6080" }}>(triggers HIPAA check)</span><br />
                  → How many users in year 2? <span style={{ color: "#3D6080" }}>(determines architecture pattern)</span><br />
                  → Do clients need data isolation? <span style={{ color: "#3D6080" }}>(multi-tenancy decision)</span><br />
                  → Are you pitching investors? <span style={{ color: "#3D6080" }}>(affects tech stack choices)</span>
                </div>
              </div>
            </StepRow>

            {/* Step 3 */}
            <StepRow n="3" circleGrad="linear-gradient(135deg,#065f46,#00E5A0)" lineGrad="linear-gradient(#00E5A0,#1A3048)" borderColor="rgba(0,229,160,.2)" emoji="📋" title="Get your Technical Blueprint" meta="delivered in 24 hours · $499" metaColor="#00E5A0" last={false}>
              <p style={{ fontSize: 13, color: "#7A9BB5", lineHeight: 1.7, marginBottom: 12 }}>A complete technical plan specific to your product — not generic advice:</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
                {[["Architecture decision","with full reasoning"],["Stack recommendation","for your specific case"],["Risk assessment","— 3 things that could kill it"],["Sprint roadmap","— week-by-week build plan"],["Cost estimate","— realistic MVP budget"],["Key decisions","— 5 choices that determine everything"]].map(([b, r]) => (
                  <div key={b} style={{ background: "#070E18", borderRadius: 7, padding: "9px 11px", fontSize: 12, color: "#94A3B8", display: "flex", gap: 6 }}>
                    <span style={{ color: "#00E5A0", flexShrink: 0 }}>✓</span>
                    <span><strong style={{ color: "#CBD5E1" }}>{b}</strong> {r}</span>
                  </div>
                ))}
              </div>
            </StepRow>

            {/* Step 4 */}
            <StepRow n="4" circleGrad="linear-gradient(135deg,#4c1d95,#9B6FFF)" lineGrad="linear-gradient(#9B6FFF,#1A3048)" borderColor="#1A3048" emoji="🚀" title="Build + launch with TechFlows" meta="$3K–$15K · fixed price · 4–6 weeks" metaColor="#3D5580" last={false}>
              <p style={{ fontSize: 13, color: "#7A9BB5", lineHeight: 1.7 }}>Optionally, TechFlows engineers execute the Blueprint. AI code generation (Lovable, Bolt, Cursor) for speed, human engineers for complexity. Fixed price. No equity.</p>
            </StepRow>

            {/* Step 5 */}
            <StepRow n="5" circleGrad="linear-gradient(135deg,#78350f,#FFB800)" lineGrad={null} borderColor="rgba(255,184,0,.2)" emoji="🤝" title="AI CTO Co-pilot — always on" meta="$500–$2,000/month · cancel anytime" metaColor="#FFB800" last={true}>
              <p style={{ fontSize: 13, color: "#7A9BB5", lineHeight: 1.7 }}>After launch, the AI CTO stays. Monitors your live product, flags issues before they become crises, tells you what to build next based on actual usage, answers technical questions 24/7.</p>
            </StepRow>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#040912", padding: "72px 24px", borderTop: "1px solid #0F1E2E" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#FFB800", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>How it compares</div>
            <h3 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, color: "#EEF4FF", lineHeight: 1.2, letterSpacing: "-0.02em" }}>Everything you need. Nothing you don't.</h3>
          </div>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 540 }}>
              <thead>
                <tr>
                  <th style={{ padding: "11px 14px", textAlign: "left", fontSize: 12, color: "#3D6080", fontWeight: 600, borderBottom: "1px solid #1A3048", width: "34%" }}>Feature</th>
                  <th style={{ padding: "11px 14px", textAlign: "center", fontSize: 12, color: "#3D6080", fontWeight: 600, borderBottom: "1px solid #1A3048", width: "22%" }}>Full-time CTO</th>
                  <th style={{ padding: "11px 14px", textAlign: "center", fontSize: 12, color: "#3D6080", fontWeight: 600, borderBottom: "1px solid #1A3048", width: "22%" }}>Lovable / Bolt</th>
                  <th style={{ padding: "11px 14px", textAlign: "center", fontSize: 12, color: "#2D7EF8", fontWeight: 700, borderBottom: "2px solid #2D7EF8", background: "rgba(45,126,248,.07)", width: "22%" }}>TechFlows AI CTO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px 14px", fontSize: 13, color: "#94A3B8", borderBottom: "1px solid #0F1828" }}>Cost</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: 12, color: "#F87171", borderBottom: "1px solid #0F1828" }}>$150K+ + equity</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: 12, color: "#94A3B8", borderBottom: "1px solid #0F1828" }}>$20–100/mo</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: 13, fontWeight: 700, color: "#00E5A0", borderBottom: "1px solid #0F1828", background: "rgba(45,126,248,.04)" }}>$499 blueprint</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 14px", fontSize: 13, color: "#94A3B8", borderBottom: "1px solid #0F1828" }}>Time to start</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: 12, color: "#F87171", borderBottom: "1px solid #0F1828" }}>3–6 months</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: 12, color: "#00E5A0", borderBottom: "1px solid #0F1828" }}>Minutes</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: 13, fontWeight: 700, color: "#00E5A0", borderBottom: "1px solid #0F1828", background: "rgba(45,126,248,.04)" }}>Same day</td>
                </tr>
                {[
                  ["Technical strategy", true, false, true],
                  ["Architecture planning", true, false, true],
                  ["Code generation", true, true, true],
                  ["Risk assessment", true, false, true],
                  ["Ongoing co-pilot", true, false, true],
                ].map(([feat, cto, tool, ours]) => (
                  <tr key={String(feat)}>
                    <td style={{ padding: "10px 14px", fontSize: 13, color: "#94A3B8", borderBottom: "1px solid #0F1828" }}>{feat}</td>
                    <td style={{ padding: "10px 14px", textAlign: "center", borderBottom: "1px solid #0F1828" }}>{cto ? "✅" : <span style={{ color: "#F87171" }}>✗</span>}</td>
                    <td style={{ padding: "10px 14px", textAlign: "center", borderBottom: "1px solid #0F1828" }}>{tool ? "✅" : <span style={{ color: "#F87171" }}>✗</span>}</td>
                    <td style={{ padding: "10px 14px", textAlign: "center", borderBottom: "1px solid #0F1828", background: "rgba(45,126,248,.04)" }}>{ours ? "✅" : <span style={{ color: "#F87171" }}>✗</span>}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ padding: "10px 14px", fontSize: 13, color: "#94A3B8" }}>Equity required</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: 12, color: "#F87171" }}>3–7%</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: 12, color: "#00E5A0" }}>0%</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: 13, fontWeight: 700, color: "#00E5A0", background: "rgba(45,126,248,.04)" }}>0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#030812", padding: "72px 24px", borderTop: "1px solid #0F1E2E" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#9B6FFF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Pricing</div>
            <h3 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, color: "#EEF4FF", lineHeight: 1.2, letterSpacing: "-0.02em" }}>Simple. Transparent. No equity.</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 12 }}>
            {/* Think */}
            <div style={{ background: "#0C1828", border: "1px solid #1A3048", borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6B8CAE", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>Think</div>
              <div style={{ fontSize: 34, fontWeight: 900, color: "#EEF4FF", lineHeight: 1, marginBottom: 3 }}>$499</div>
              <div style={{ fontSize: 13, color: "#6B8CAE", marginBottom: 18 }}>one-time · 24hr delivery</div>
              <div style={{ height: 1, background: "#1A3048", marginBottom: 16 }} />
              {[["Technical Blueprint"],["Architecture recommendation"],["Stack with full reasoning"],["Risk assessment"],["Sprint roadmap"],["Cost estimate"]].map(([f]) => (
                <div key={f} style={{ display: "flex", gap: 7, fontSize: 13, color: "#94A3B8", marginBottom: 9 }}>
                  <span style={{ color: "#2D7EF8" }}>→</span>{f}
                </div>
              ))}
            </div>

            {/* Think + Build — highlighted */}
            <div style={{ background: "#0C1828", border: "2px solid #2D7EF8", borderRadius: 14, padding: 24, position: "relative" }}>
              <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#163a8a,#2D7EF8)", borderRadius: 20, padding: "3px 14px", fontSize: 11, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>Most popular</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#2D7EF8", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>Think + Build</div>
              <div style={{ fontSize: 34, fontWeight: 900, color: "#EEF4FF", lineHeight: 1, marginBottom: 3 }}>$3K–$15K</div>
              <div style={{ fontSize: 13, color: "#6B8CAE", marginBottom: 18 }}>per project · fixed price</div>
              <div style={{ height: 1, background: "#1A3048", marginBottom: 16 }} />
              {[["Everything in Think"],["AI-orchestrated build"],["Human engineers for complexity"],["QA + deployment included"],["MVP in 4–6 weeks"]].map(([f]) => (
                <div key={f} style={{ display: "flex", gap: 7, fontSize: 13, color: "#94A3B8", marginBottom: 9 }}>
                  <span style={{ color: "#00E5A0" }}>✓</span>{f}
                </div>
              ))}
            </div>

            {/* Co-pilot */}
            <div style={{ background: "#0C1828", border: "1px solid #1A3048", borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#FFB800", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>Co-pilot</div>
              <div style={{ fontSize: 34, fontWeight: 900, color: "#EEF4FF", lineHeight: 1, marginBottom: 3 }}>$500</div>
              <div style={{ fontSize: 13, color: "#6B8CAE", marginBottom: 18 }}>per month · cancel anytime</div>
              <div style={{ height: 1, background: "#1A3048", marginBottom: 16 }} />
              {[["Always-on AI CTO"],["Product health monitoring"],["What to build next"],["Code review on changes"],["Technical Q&A 24/7"]].map(([f]) => (
                <div key={f} style={{ display: "flex", gap: 7, fontSize: 13, color: "#94A3B8", marginBottom: 9 }}>
                  <span style={{ color: "#FFB800" }}>→</span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#040912", padding: "72px 24px", borderTop: "1px solid #0F1E2E" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#00D4FF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>FAQ</div>
            <h3 style={{ fontSize: "clamp(24px,4vw,34px)", fontWeight: 800, color: "#EEF4FF", lineHeight: 1.2, letterSpacing: "-0.02em" }}>Every question, answered.</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQ_ITEMS.map(item => <FAQItem key={item.q} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WAITLIST
      ══════════════════════════════════════════════════════════ */}
      <section id="aicto-waitlist" style={{ background: "#030812", padding: "80px 24px", borderTop: "1px solid #0F1E2E" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 350, background: "radial-gradient(ellipse,rgba(45,126,248,.11) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(45,126,248,.1)", border: "1px solid rgba(45,126,248,.28)", borderRadius: 20, padding: "6px 16px", marginBottom: 20 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="#2D7EF8"><path d="M6 1L7.5 4.5H11L8.5 6.5L9.5 10L6 8L2.5 10L3.5 6.5L1 4.5H4.5L6 1Z"/></svg>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2D7EF8" }}>First 50 founders — 80% off at launch</span>
            </div>

            <h3 style={{ fontSize: "clamp(26px,5vw,42px)", fontWeight: 900, color: "#EEF4FF", lineHeight: 1.14, letterSpacing: "-0.03em", marginBottom: 12 }}>
              Reserve your founding<br />member spot.
            </h3>
            <p style={{ fontSize: 15, color: "#6B8CAE", lineHeight: 1.7, marginBottom: 32 }}>
              Get the Technical Blueprint at <strong style={{ color: "#EEF4FF" }}>$99</strong> instead of $499 when we launch. No credit card. No spam. Just early access and a direct say in shaping the product.
            </p>

            <WaitlistForm />
          </div>
        </div>
      </section>

    </div>
  );
}

// ─── StepRow helper ────────────────────────────────────────────────────────────

function StepRow({
  n, circleGrad, lineGrad, borderColor, emoji, title, meta, metaColor, last, children,
}: {
  n: string; circleGrad: string; lineGrad: string | null; borderColor: string;
  emoji: string; title: string; meta: string; metaColor: string; last: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: 0, alignItems: "stretch" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 50, flexShrink: 0 }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: circleGrad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, color: "#fff" }}>{n}</div>
        {!last && lineGrad && (
          <div style={{ width: 2, flex: 1, background: lineGrad, margin: "5px 0", minHeight: 24 }} />
        )}
      </div>
      <div style={{ background: "#0C1828", border: `1px solid ${borderColor}`, borderRadius: 12, padding: "20px 22px", marginLeft: 14, marginBottom: last ? 0 : 10, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 9 }}>
          <span style={{ fontSize: 18 }}>{emoji}</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#EEF4FF" }}>{title}</div>
            <div style={{ fontSize: 11, color: metaColor, marginTop: 1 }}>{meta}</div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
