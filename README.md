# The Arcana Systems™ Website

Canonical production website for **https://thearcanasystems.com**.

## Commercial Architecture

The website has one primary sales path:

```
Arcana Audit™ — $497
        ↓
Paid Business Systems Diagnostic
        ↓
Human-reviewed 16-page dossier
        ↓
Arcana Build™ — implementation from $10,000
```

**ArcanaOS™** is the operating methodology behind both engagements. It is not a separate software product or subscription.

## Canonical Routes

| Route | Purpose |
| --- | --- |
| `/` | Primary conversion homepage |
| `/audit` | Arcana Audit™ offer and direct checkout |
| `/pricing` | Arcana Build™ implementation |
| `/method` | ArcanaOS™ methodology |
| `/about` | Founder and consultancy positioning |
| `/contact` | Build inquiry for audited / implementation-ready prospects |

Legacy `.html`, product, blog, and services URLs are redirected in `worker/index.ts` so old links do not expose competing offer models.

## Live Purchase Flow

The Arcana Audit™ checkout URL is stored once in:

```
lib/site.ts
```

Current live Stripe Payment Link:

```
https://buy.stripe.com/dRmeVf2uC7Hn9se3Pq2ZO03
```

Stripe redirects successful payments to the canonical Jotform Business Systems Diagnostic and passes the Checkout Session ID for paid-order reconciliation.

Do not hard-code alternate Audit prices or checkout links elsewhere in the site.

## Application Structure

```text
app/
  page.tsx
  audit/page.tsx
  pricing/page.tsx
  method/page.tsx
  about/page.tsx
  contact/page.tsx
  services/page.tsx     # redirect compatibility
  layout.tsx
  globals.css
  robots.ts
  sitemap.ts

components/
  SiteHeader.tsx
  SiteFooter.tsx
  BuildInquiryForm.tsx

lib/
  site.ts               # commercial constants + shared methodology data

worker/
  index.ts               # Vinext entry + legacy URL redirects
```

The repository still contains historical static files under the root and `public/` for compatibility/history. They are **not** the commercial source of truth.

## Non-Negotiable Offer Rules

- Arcana Audit™ is the front door.
- Public Audit price: **$497 one time**.
- Arcana Build™ starts at **$10,000** and is scoped separately.
- 100% of the Audit fee is credited toward a Build initiated within 30 days.
- Do not advertise the retired $997 intensive, $8,500 build floor, 22-module menu, digital-product ladder, or monthly retainer as the primary sales model.
- Do not bypass the paid Audit with a free diagnostic or generic guided assessment.
- Human QA remains mandatory before an Audit dossier can be delivered.

## Build / Hosting

This codebase uses Next.js 16 + React 19 through Vinext / Vite and a Cloudflare-compatible Worker entry.

Configuration:
- `package.json`
- `vite.config.ts`
- `worker/index.ts`
- `.openai/hosting.json`

## Release QA

Before promoting a website release:

1. Verify `/`, `/audit`, `/pricing`, `/method`, `/about`, and `/contact`.
2. Confirm every Audit CTA resolves to the live $497 Stripe Payment Link.
3. Confirm legacy `.html` and `/products/*` URLs redirect to canonical routes.
4. Test the Build inquiry against `https://crm.thearcanasystems.com/api/intake`.
5. Check mobile navigation, CTA visibility, form validation, and footer year.
6. Verify canonical metadata, sitemap, robots, Open Graph, and social share image.
7. Do not publish if the site exposes old pricing or a competing sales ladder.
