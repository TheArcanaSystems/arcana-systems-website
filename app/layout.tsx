import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Arcana Systems | Operational Architecture for Founders",
  description:
    "The Arcana Systems designs workflows, SOPs, automations, client portals, dashboards, and business operating systems for founders who have outgrown duct-taped operations.",
  metadataBase: new URL("https://thearcanasystems.com"),
  openGraph: {
    title: "The Arcana Systems | Building Systems That Move Like Magic",
    description:
      "Operational architecture for founders who have outgrown duct-taped workflows.",
    url: "https://thearcanasystems.com/",
    siteName: "The Arcana Systems",
    images: ["/images/arcana-reference-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Arcana Systems | Building Systems That Move Like Magic",
    description:
      "Operational architecture for founders who have outgrown duct-taped workflows.",
    images: ["/images/arcana-reference-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
