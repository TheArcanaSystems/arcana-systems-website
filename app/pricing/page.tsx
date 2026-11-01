import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AUDIT_CHECKOUT_URL, AUDIT_PRICE, BUILD_STARTING_INVESTMENT } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Arcana Build™ — Systems Implementation | The Arcana Systems",
  description:
    "Scoped systems implementation for founders ready to turn their Arcana Audit architecture into connected workflows, SOPs, automation, portals, dashboards, and operating infrastructure.",
};

const buildPillars = [
  ["01", "Connected client operations", "CRM structure, onboarding, client portals, and delivery handoffs designed around the client journey."],
  ["02", "Documented ways of working", "SOPs, templates, ownership, and operating guidance your team can find and use."],
  ["03", "Automation with accountability", "Repeatable workflows with defined triggers, exception handling, monitoring, and maintenance ownership."],
  ["04", "Visibility for leadership", "Dashboards and reporting that put the right information in front of the people making decisions."],
];

export default function BuildPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero page-hero-build">
          <div className="site-shell page-hero-grid">
            <div>
              <p className="eyebrow eyebrow-light">The Arcana Build™</p>
              <h1>A business that runs beyond your memory.</h1>
              <p className="hero-lead">
                Turn the architecture into an operation your team can use, maintain,
                and grow.
              </p>
            </div>
            <aside className="purchase-card">
              <span className="offer-kicker">Prescribed. Scoped. Built.</span>
              <h2>Arcana Build™</h2>
              <div className="purchase-price purchase-price-small">
                {BUILD_STARTING_INVESTMENT}
              </div>
              <p>Starting implementation investment. Scope is defined from the Audit findings.</p>
              <Link className="button button-gold full-width" href="/contact">
                Discuss your Build
              </Link>
              <small>Your {AUDIT_PRICE} Audit fee is credited toward a Build initiated within 30 days.</small>
            </aside>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="site-shell">
            <div className="section-heading narrow">
              <p className="eyebrow">The right systems. In the right order.</p>
              <h2>Implementation is prescribed from the architecture.</h2>
              <p>
                We use your Audit findings to define the implementation scope,
                dependencies, sequencing, and priorities. Your proposal sets the
                deliverables and commercial terms before work begins.
              </p>
            </div>
            <div className="four-card-grid">
              {buildPillars.map(([number, title, copy]) => (
                <article className="editorial-card light-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-plum">
          <div className="site-shell before-after">
            <div>
              <p className="eyebrow eyebrow-light">Before</p>
              <h2>Founder-held.</h2>
              <ul>
                <li>You route the work.</li>
                <li>Information lives everywhere.</li>
                <li>People recreate the same steps.</li>
                <li>Documentation falls behind.</li>
                <li>Exceptions become your job.</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow eyebrow-light">Built for what’s next</p>
              <h2>Team-ready.</h2>
              <ul>
                <li>Work has a defined owner and next step.</li>
                <li>Information has a canonical home.</li>
                <li>Repeatable work follows documented workflows.</li>
                <li>Maintenance has an owner and a routine.</li>
                <li>True exceptions have a clear escalation path.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-mist">
          <div className="site-shell build-feature">
            <div className="section-heading">
              <p className="eyebrow">Architecture before software</p>
              <h2>Your tools should serve the business.</h2>
              <p>
                We assess what to retain, connect, consolidate, or replace. Microsoft 365,
                SharePoint, Notion, CRMs, dashboards, automation platforms, portals, and
                reporting tools are implementation materials—not the strategy.
              </p>
            </div>
            <div className="build-panel light-panel">
              <span className="offer-kicker">Build Ready?</span>
              <h3>Your Audit is the scope foundation.</h3>
              <p>
                Already completed an Arcana Audit™? Bring the findings into a Build
                conversation. If you have not, the Audit is the cleanest first step.
              </p>
              <div className="stacked-actions">
                <Link className="button button-plum" href="/contact">Discuss your Build</Link>
                <a className="text-link" href={AUDIT_CHECKOUT_URL}>Begin the Audit first ↗</a>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="site-shell final-cta-inner">
            <p className="eyebrow">Build with intention</p>
            <h2>Know what matters. Then build what holds.</h2>
            <Link className="button button-gold" href="/contact">Discuss Arcana Build™</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
