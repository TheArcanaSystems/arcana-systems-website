import type { Metadata } from "next";
import { BuildInquiryForm } from "@/components/BuildInquiryForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AUDIT_CHECKOUT_URL, AUDIT_PRICE, BUSINESS_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact The Arcana Systems™",
  description:
    "Start with the Arcana Audit™ or contact The Arcana Systems about an implementation based on your existing Audit findings.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero page-hero-contact">
          <div className="site-shell page-hero-grid">
            <div>
              <p className="eyebrow eyebrow-light">Start here</p>
              <h1>Clarity first. Then the right next move.</h1>
              <p className="hero-lead">
                If you have not completed an Arcana Audit™, that is the front door.
                If you already have your findings, use the Build inquiry below.
              </p>
            </div>
            <aside className="purchase-card">
              <span className="offer-kicker">New here?</span>
              <h2>Begin with the Audit.</h2>
              <div className="purchase-price">{AUDIT_PRICE}</div>
              <p>Six domains. One connected diagnosis. A 16-page human-reviewed dossier.</p>
              <a className="button button-gold full-width" href={AUDIT_CHECKOUT_URL}>
                Begin your Arcana Audit™ ↗
              </a>
            </aside>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="site-shell contact-grid">
            <div className="section-heading">
              <p className="eyebrow">Already audited?</p>
              <h2>Discuss your Arcana Build™.</h2>
              <p>
                Use this form when you already have Audit findings or need to discuss a
                scoped implementation question. We will review the context before
                recommending a next step.
              </p>
              <div className="direct-contact">
                <span>Email</span>
                <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
              </div>
            </div>
            <BuildInquiryForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
