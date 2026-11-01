import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  ARCANA_OS_PHASES,
  AUDIT_CHECKOUT_URL,
  AUDIT_PRICE,
  BUILD_STARTING_INVESTMENT,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const pressureSignals = [
  "Your tools hold information. You hold the context.",
  "Client handoffs trigger another round of chasing.",
  "Your team needs answers that only exist in your head.",
  "Growth adds work faster than it adds capacity.",
];

const auditOutcomes = [
  ["01", "A clear diagnosis", "See the three primary constraints affecting how the business operates."],
  ["02", "An architecture to build toward", "Understand the current state and the connected operation you need next."],
  ["03", "A practical order of action", "Prioritize automation, documentation, and implementation through a 90-day roadmap."],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Operations & Systems Architecture</p>
              <h1>Your business has outgrown being held together by you.</h1>
              <p className="hero-lead">
                We turn scattered tools, manual handoffs, and knowledge held in your head
                into a business operating system your team can actually run.
              </p>
              <div className="button-row">
                <a className="button button-gold" href={AUDIT_CHECKOUT_URL}>
                  Begin your Arcana Audit™ <span aria-hidden="true">↗</span>
                </a>
                <Link className="text-link" href="/method">Discover the method</Link>
              </div>
              <p className="microcopy">{AUDIT_PRICE} USD · One-time diagnostic · Human-reviewed dossier</p>
            </div>

            <div className="hero-visual" aria-label="Arcana Audit visual reference">
              <div className="visual-frame">
                <img
                  src="/images/arcana-reference-hero.png"
                  alt="The Arcana Systems visual identity and audit reference"
                />
              </div>
              <div className="visual-caption">
                <span>Begin with clarity.</span>
                <strong>Build with intention.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="statement-band">
          <div className="site-shell statement-inner">
            <span>Strategy into structure</span>
            <i>✦</i>
            <span>Knowledge into systems</span>
            <i>✦</i>
            <span>Growth with less dependency</span>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="site-shell split-layout">
            <div className="section-heading">
              <p className="eyebrow">The pattern beneath the pressure</p>
              <h2>A capable founder. An operation that asks too much.</h2>
              <p>
                The work is getting done. But the business still relies on you to remember,
                translate, approve, route, and follow up. We diagnose the structure creating
                that pressure before adding another tool or workaround.
              </p>
            </div>
            <div className="signal-stack">
              {pressureSignals.map((signal) => <p key={signal}>{signal}</p>)}
            </div>
          </div>
        </section>

        <section className="section section-plum">
          <div className="site-shell">
            <div className="section-heading narrow">
              <p className="eyebrow eyebrow-light">The first move / Arcana Audit™</p>
              <h2>See the whole picture. Know what to build.</h2>
              <p>
                A focused diagnostic of six connected areas of your business, translated
                into a decision-ready 16-page dossier.
              </p>
            </div>

            <div className="offer-highlight">
              <div>
                <span className="offer-kicker">Founding Client Offer</span>
                <h3>Arcana Audit™</h3>
              </div>
              <div className="price-lockup">
                <strong>{AUDIT_PRICE}</strong>
                <span>USD / one time</span>
              </div>
              <a className="button button-ivory" href={AUDIT_CHECKOUT_URL}>
                Start my Audit <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="three-card-grid">
              {auditOutcomes.map(([number, title, copy]) => (
                <article className="editorial-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>

            <div className="center-link">
              <Link className="text-link text-link-light" href="/audit">
                Explore exactly what’s inside the Audit
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-mist">
          <div className="site-shell">
            <div className="section-heading narrow">
              <p className="eyebrow">The operating system behind the work</p>
              <h2>Meet ArcanaOS™.</h2>
              <p>
                One connected method—from understanding the business to building the
                infrastructure that supports it.
              </p>
            </div>

            <div className="phase-grid">
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

            <div className="center-link">
              <Link className="text-link" href="/method">Explore ArcanaOS™</Link>
            </div>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="site-shell build-feature">
            <div className="section-heading">
              <p className="eyebrow">From diagnosis to implementation</p>
              <h2>A roadmap is the beginning. We build what comes next.</h2>
              <p>
                Arcana Build™ brings the prescribed architecture to life: connected
                workflows, usable documentation, purposeful automation, and leadership
                visibility across the business.
              </p>
              <p className="investment-note">
                Implementation starts at <strong>{BUILD_STARTING_INVESTMENT}</strong>.
              </p>
              <Link className="button button-plum" href="/pricing">
                Explore Arcana Build™
              </Link>
            </div>

            <div className="build-panel">
              <span className="offer-kicker">Architecture before software</span>
              <h3>Your tools should serve the business.</h3>
              <p>
                We assess what to retain, connect, consolidate, or replace. Technology is
                part of the implementation—not the starting point for the strategy.
              </p>
              <p className="credit-note">
                100% of the {AUDIT_PRICE} Audit fee is credited toward a Build initiated
                within 30 days.
              </p>
            </div>
          </div>
        </section>

        <section className="section founder-strip">
          <div className="site-shell founder-grid">
            <div className="founder-photo">
              <img src="/images/cnelson-headshot-clean.png" alt="Caitilin Nelson, founder of The Arcana Systems" />
            </div>
            <div className="founder-copy">
              <p className="eyebrow eyebrow-light">Founder-led architecture</p>
              <h2>Systems built with operational judgment, not software enthusiasm.</h2>
              <p>
                The Arcana Systems is led by Caitilin Nelson, an operations and systems
                architect with two decades of experience across client service, finance,
                executive support, administration, people operations, and business systems.
              </p>
              <Link className="text-link text-link-light" href="/about">Meet the founder</Link>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="site-shell final-cta-inner">
            <p className="eyebrow">Your next chapter starts with clarity</p>
            <h2>Build the business. Stop being the system.</h2>
            <p>Find what is holding your operations back—and what to build next.</p>
            <a className="button button-gold" href={AUDIT_CHECKOUT_URL}>
              Begin your Arcana Audit™ <span aria-hidden="true">↗</span>
            </a>
            <span className="microcopy">{AUDIT_PRICE} USD · One-time diagnostic</span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
