import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ARCANA_DOMAINS, AUDIT_CHECKOUT_URL, AUDIT_PRICE, BUILD_STARTING_INVESTMENT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Arcana Audit™ — $497 Business Systems Diagnostic | The Arcana Systems",
  description:
    "A six-domain business systems diagnostic and human-reviewed 16-page dossier for founders who need clarity before investing in tools, automation, or implementation.",
};

const dossierContents = [
  ["Your systems score", "Six domain scores and a weighted Arcana Systems Score™ establish the current operating picture."],
  ["Risk & dependency", "Operational risk, founder dependency, and automation potential make hidden exposure visible."],
  ["Three primary constraints", "A focused executive diagnosis explains where the operation needs attention first."],
  ["Current & future architecture", "See how the business works today and the structure to build toward."],
  ["Automation & documentation", "Five automation opportunities, technology disposition, and SOP requirements."],
  ["Your 90-day roadmap", "A sequenced transformation plan and a recommended next engagement."],
];

const process = [
  ["01", "Purchase", "Secure checkout confirms the paid Audit and opens the diagnostic."],
  ["02", "Diagnose", "Complete the Business Systems Diagnostic across six connected operating domains."],
  ["03", "Analyze", "Your responses are scored and translated into architecture, risks, priorities, and recommendations."],
  ["04", "Review", "Every dossier passes human quality review before it can be authorized for delivery."],
];

export default function AuditPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero page-hero-audit">
          <div className="site-shell page-hero-grid">
            <div>
              <p className="eyebrow eyebrow-light">The Arcana Audit™</p>
              <h1>Clarity is a competitive advantage.</h1>
              <p className="hero-lead">
                Before another tool, hire, automation, or workaround, understand what
                your business actually needs.
              </p>
            </div>
            <aside className="purchase-card">
              <span className="offer-kicker">Founding Client Offer</span>
              <h2>Arcana Audit™</h2>
              <div className="purchase-price">{AUDIT_PRICE}</div>
              <p>One-time diagnostic. A 16-page dossier. A clear next move.</p>
              <a className="button button-gold full-width" href={AUDIT_CHECKOUT_URL}>
                Start my Audit <span aria-hidden="true">↗</span>
              </a>
              <small>
                100% of your Audit fee is credited toward an Arcana Build™ initiated
                within 30 days.
              </small>
            </aside>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="site-shell">
            <div className="section-heading narrow">
              <p className="eyebrow">Your business, examined as a system</p>
              <h2>Six domains. One connected diagnosis.</h2>
            </div>
            <ol className="domain-grid">
              {ARCANA_DOMAINS.map((domain, index) => (
                <li key={domain}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{domain}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section-mist">
          <div className="site-shell dossier-layout">
            <div className="dossier-preview">
              <img
                src="/images/arcana-reference-hero.png"
                alt="Illustrative Arcana Audit dossier reference"
              />
              <p>
                Illustrative reference only. Sample scores and findings are not client
                results or a promise of outcome.
              </p>
            </div>
            <div>
              <div className="section-heading">
                <p className="eyebrow">Inside your client dossier</p>
                <h2>Built to support decisions, not decorate a dashboard.</h2>
              </div>
              <div className="dossier-list">
                {dossierContents.map(([title, copy]) => (
                  <article key={title}>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-plum">
          <div className="site-shell">
            <div className="section-heading narrow">
              <p className="eyebrow eyebrow-light">What happens after checkout</p>
              <h2>Paid. Diagnosed. Reviewed. Delivered.</h2>
              <p>
                The process is designed to preserve both speed and judgment. Automation
                does the repeatable work; human review remains mandatory before delivery.
              </p>
            </div>
            <div className="process-grid">
              {process.map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="site-shell faq-layout">
            <div className="section-heading">
              <p className="eyebrow">Before you begin</p>
              <h2>A few things worth knowing.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>What is included in the {AUDIT_PRICE} Audit?</summary>
                <p>
                  A business systems diagnostic and a 16-page client dossier: six domain
                  scores, your Arcana Systems Score™, operational risk and founder
                  dependency findings, three primary constraints, current- and future-state
                  architecture, five automation opportunities, documentation requirements,
                  and a 90-day roadmap.
                </p>
              </details>
              <details>
                <summary>What happens after I pay?</summary>
                <p>
                  Stripe takes you directly to the Business Systems Diagnostic. Your
                  responses inform the analysis and dossier, and every dossier passes human
                  quality review before delivery. Use the same email at checkout and in the
                  diagnostic so your records can be matched cleanly.
                </p>
              </details>
              <details>
                <summary>Is implementation included?</summary>
                <p>
                  No. The Audit is a standalone diagnostic. Implementation is a separate,
                  scoped Arcana Build™ engagement starting at {BUILD_STARTING_INVESTMENT}.
                  Purchasing an Audit does not commit you to a Build.
                </p>
              </details>
              <details>
                <summary>How does the implementation credit work?</summary>
                <p>
                  The full {AUDIT_PRICE} Audit fee is credited toward an Arcana Build™
                  initiated within 30 days. Scope and engagement terms are confirmed
                  separately.
                </p>
              </details>
              <details>
                <summary>Do I need to replace all of my tools?</summary>
                <p>
                  No. Architecture comes first. We assess what to keep, connect,
                  consolidate, or replace based on the way your business actually operates.
                </p>
              </details>
              <details>
                <summary>Is ArcanaOS™ a software subscription?</summary>
                <p>
                  No. ArcanaOS™ is The Arcana Systems operating methodology. It connects
                  workflows, documentation, technology, automation, ownership, and
                  decision-making using the tools appropriate for the business.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="site-shell final-cta-inner">
            <p className="eyebrow">Start with the diagnosis</p>
            <h2>See what the business needs before you build it.</h2>
            <a className="button button-gold" href={AUDIT_CHECKOUT_URL}>
              Begin your Arcana Audit™ <span aria-hidden="true">↗</span>
            </a>
            <Link className="text-link" href="/method">See how ArcanaOS™ works</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
