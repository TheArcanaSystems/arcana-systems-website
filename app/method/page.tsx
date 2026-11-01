import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ARCANA_OS_PHASES, AUDIT_CHECKOUT_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/method" },
  title: "ArcanaOS™ — The Arcana Systems Method",
  description:
    "ArcanaOS™ is The Arcana Systems methodology for assessing, architecting, building, automating, optimizing, and scaling founder-led operations.",
};

const principles = [
  ["Architecture before software", "The operating model defines the system. Tools are selected to support it."],
  ["Automation after clarity", "A broken process does not improve because it moves faster."],
  ["One source of truth", "Critical operating information needs a canonical home and clear ownership."],
  ["Exceptions by design", "A system is not complete until edge cases, escalation, and recovery are defined."],
  ["Documentation as infrastructure", "SOPs, field definitions, ownership, and maintenance are part of the build—not an afterthought."],
  ["Human judgment stays human", "Automation handles repeatable work. High-context decisions retain accountable review."],
];

export default function MethodPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero page-hero-method">
          <div className="site-shell page-hero-grid single-focus">
            <div>
              <p className="eyebrow eyebrow-light">ArcanaOS™</p>
              <h1>The invisible architecture behind a business that runs cleanly.</h1>
              <p className="hero-lead">
                ArcanaOS™ is not a software product. It is the operating methodology
                The Arcana Systems uses to move a business from founder-held complexity
                to a maintainable operating environment.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="site-shell">
            <div className="section-heading narrow">
              <p className="eyebrow">One connected method</p>
              <h2>Assess. Architect. Build. Automate. Optimize. Scale.</h2>
              <p>
                Each phase answers a different operating question. The sequence prevents
                the common mistake of buying tools or building automations before the
                underlying architecture is clear.
              </p>
            </div>
            <div className="phase-grid phase-grid-large">
              {ARCANA_OS_PHASES.map((phase) => (
                <article key={phase.number} className="phase-card">
                  <div className="phase-topline">
                    <span>{phase.number}</span>
                    <strong>{phase.title}</strong>
                  </div>
                  <h3>{phase.heading}</h3>
                  <p>{phase.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-plum">
          <div className="site-shell">
            <div className="section-heading narrow">
              <p className="eyebrow eyebrow-light">Operating principles</p>
              <h2>The standards behind every recommendation.</h2>
            </div>
            <div className="principle-grid">
              {principles.map(([title, copy]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-mist">
          <div className="site-shell split-layout">
            <div className="section-heading">
              <p className="eyebrow">The commercial path</p>
              <h2>Diagnosis first. Implementation second.</h2>
              <p>
                The Arcana Audit™ establishes the evidence, constraints, and architecture.
                Arcana Build™ turns that prescribed architecture into the operating system.
                The methodology remains consistent even when the technology stack changes.
              </p>
            </div>
            <div className="pathway-card">
              <span>01</span>
              <strong>Arcana Audit™</strong>
              <p>Diagnose the operation and define the architecture.</p>
              <span>02</span>
              <strong>Arcana Build™</strong>
              <p>Implement the prescribed systems, documentation, automation, and visibility.</p>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="site-shell final-cta-inner">
            <p className="eyebrow">Start at Assess</p>
            <h2>See the system before you rebuild it.</h2>
            <a className="button button-gold" href={AUDIT_CHECKOUT_URL}>
              Begin your Arcana Audit™ <span aria-hidden="true">↗</span>
            </a>
            <Link className="text-link" href="/audit">Explore the Audit</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
