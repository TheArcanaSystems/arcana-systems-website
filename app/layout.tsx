import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thearcanasystems.com"),
  title: {
    default: "The Arcana Systems™ | Operations & Systems Architecture",
    template: "%s | The Arcana Systems™",
  },
  description:
    "The Arcana Systems turns scattered tools, manual handoffs, and founder-held knowledge into business operating systems teams can run.",
  keywords: [
    "operations systems architecture",
    "business systems consultant",
    "SOP consulting",
    "workflow automation",
    "founder dependency",
    "client operations",
    "business operating system",
    "Arcana Audit",
    "Arcana Build",
    "ArcanaOS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://thearcanasystems.com/",
    siteName: "The Arcana Systems",
    title: "The Arcana Systems™ | Operations & Systems Architecture",
    description:
      "Build the business. Stop being the system. Begin with the Arcana Audit™.",
    images: [
      {
        url: "/images/arcana-reference-hero.png",
        width: 1200,
        height: 630,
        alt: "The Arcana Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Arcana Systems™ | Operations & Systems Architecture",
    description:
      "Build the business. Stop being the system. Begin with the Arcana Audit™.",
    images: ["/images/arcana-reference-hero.png"],
  },
  icons: {
    icon: "/images/logo-dark.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Arcana Systems",
  url: "https://thearcanasystems.com",
  email: "hello@thearcanasystems.com",
  description:
    "Operations and systems architecture consultancy for founder-led businesses.",
  founder: {
    "@type": "Person",
    name: "Caitilin Nelson",
  },
  areaServed: "United States",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
