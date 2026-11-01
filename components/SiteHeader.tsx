import Link from "next/link";
import { AUDIT_CHECKOUT_URL, PRIMARY_NAV } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link className="brand-lockup" href="/" aria-label="The Arcana Systems home">
          <span className="brand-mark">✦</span>
          <span className="brand-words">
            <strong>The Arcana</strong>
            <small>Systems™</small>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          {PRIMARY_NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>

        <a className="button button-small button-gold" href={AUDIT_CHECKOUT_URL}>
          Begin the Audit <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
