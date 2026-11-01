import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  robots: { index: false, follow: true },
};

export default function ServicesCompatibilityPage() {
  return (
    <main style={{ padding: "4rem 1.25rem", fontFamily: "Inter, sans-serif" }}>
      <meta httpEquiv="refresh" content="0;url=/pricing" />
      <p>
        Services have moved to <Link href="/pricing">Arcana Build™</Link>.
      </p>
    </main>
  );
}
