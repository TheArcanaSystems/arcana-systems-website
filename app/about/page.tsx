import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AUDIT_CHECKOUT_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About The Arcana Systems™ | Operations & Systems Architecture",
  description:
    "The Arcana Systems is a founder-led operations and systems architecture consultancy built to turn operational complexity into usable business infrastructure.",
};

const standards = [
  "Practical execution over ornamental strategy.",
  "Architecture before platform selection.",
  "Automation with ownership, controls, and exception paths.",
  "Documentation that can survive a handoff.",
  "Premium client experience without founder dependence.",
  "Systems designed for maintenance, not just launch day.",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero page-hero-about">
          <div className="site-shell page-hero-grid">
            <div>
              <p className="eyebrow eyebrow-light">The Arcana Systems™</p>
              <h1>We design the structure beneath the work.</h1>
              <p className="hero-lead">
                The visible problem may be onboarding, reporting, SOPs, a CRM, or
                automation. The real work is designing the operating architecture that
                makes those pieces function together.
              </p>
            </div>
            <div className="founder-portrait-large">
              <img src="/images/cnelson-headshot-clean.png" alt="Caitilin Nelson, Founder and Lead Systems Architect" />
            </div>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="site-shell about-story">
            <div className="section-heading">
              <p className="eyebrow">Founder & Lead Systems Architect</p>
              <h2>Caitilin Nelson</h2>
            </div>
            <div className="prose-column">
              <p>
                Caitilin built The Arcana Systems around a pattern she had seen across
                operations, billing, accounts receivable, onboarding, contracts, vendor
                management, IT coordination, executive support, documentation, and process
                design: businesses rarely strain because people are unwilling to work.
                They strain because the system depends on people remembering what the
                system should have handled.
              </p>
              <p>
                TAS exists to move that responsibility out of memory, inboxes, private
                spreadsheets, scattered apps, and founder intervention—and into an
                operating environment a team can actually run.
              </p>
              <p>
                The work is platform agnostic by design. Microsoft 365, SharePoint,
                Power Automate, Notion, CRMs, dashboards, portals, Stripe, and other tools
                are selected and configured according to the architecture, not the other
                way around.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-mist">
          <div className="site-shell">
            <div className="section-heading narrow">
              <p className="eyebrow">How we work</p>
              <h2>Precision without unnecessary complexity.</h2>
            </div>
            <div className="standard-grid">
              {standards.map((standard, index) => (
                <article key={standard}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{standard}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-plum">
          <div className="site-shell split-layout">
            <div className="section-heading">
              <p className="eyebrow eyebrow-light">The goal</p>
              <h2>Build a business that can carry more without asking more of you.</h2>
              <p>
                Clean systems create capacity. They make expectations visible, handoffs
                repeatable, decisions traceable, information findable, and growth easier
                to absorb.
              </p>
            </div>
            <div className="pathway-card pathway-card-dark">
              <strong>Clarity</strong>
              <p>Know what is actually creating the pressure.</p>
              <strong>Structure</strong>
              <p>Give work, information, and ownership a coherent operating model.</p>
              <strong>Freedom</strong>
              <p>Reduce the amount of business logic that has to live in the founder.</p>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="site-shell final-cta-inner">
            <p className="eyebrow">Begin with clarity</p>
            <h2>Your business does not need more duct tape.</h2>
            <a className="button button-gold" href={AUDIT_CHECKOUT_URL}>
              Begin your Arcana Audit™ <span aria-hidden="true">↗</span>
            </a>
            <Link className="text-link" href="/method">Explore ArcanaOS™</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
