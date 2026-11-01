import Link from "next/link";
import { AUDIT_CHECKOUT_URL, BUSINESS_EMAIL } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <Link className="footer-brand" href="/">THE ARCANA SYSTEMS™</Link>
          <p>Building systems that move like magic.</p>
        </div>

        <div className="footer-links">
          <Link href="/audit">Arcana Audit™</Link>
          <Link href="/pricing">Arcana Build™</Link>
          <Link href="/method">ArcanaOS™</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="footer-contact">
          <a href={AUDIT_CHECKOUT_URL}>Begin your Arcana Audit™ ↗</a>
          <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
          <p>© {year} The Arcana Systems, LLC</p>
        </div>
      </div>
    </footer>
  );
}
