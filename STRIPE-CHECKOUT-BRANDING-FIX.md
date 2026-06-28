# Stripe Checkout Branding Fix

The current Stripe checkout looks off-brand because the hosted payment page is inheriting generic/cto.new-style branding. Fix Stripe first, then use the website as the public offer page.

## Desired Buyer Flow

Public links should go here:

https://thearcanasystems.com/#pricing

Only after the buyer chooses an offer should they continue to Stripe for secure payment.

## Stripe Dashboard Settings

Open:

https://dashboard.stripe.com/account/branding/checkout

Set:

- Business name: `The Arcana Systems LLC`
- Primary brand color: `#D4A15D`
- Accent/button color: `#D4A15D`
- Background color: `#120A24` or `#07050B`
- Font style: closest available serif or elegant classic option
- Border radius: medium or rounded, not pill-heavy
- Logo: `stripe-branding-assets/stripe-logo-primary-stacked.png`
- Icon: `stripe-branding-assets/stripe-icon-as-mark.png`

## Payment Method Settings

Open:

https://dashboard.stripe.com/settings/payment_methods

Review Link:

- If premium presentation matters more than one-click convenience, disable Link for this payment method configuration.
- If conversion matters more, leave Link enabled but accept that Stripe may show its green Link wallet UI for returning customers.

The screenshot looked especially generic because Link was taking over the visible payment panel.

## Product-Level Cleanup

For each product in Stripe:

- Confirm product name exactly matches the website.
- Add a concise premium description.
- Add a product image or branded offer graphic if Stripe allows it.
- Confirm receipt copy and post-payment instructions.

Product names:

- Arcana Audit Intensive
- Invoice & Payment Automation Kit
- Client Portal OS Template
- CEO Command Center Dashboard
- SOP Snap Kit
- AI SOP Builder Prompt Pack

## Best Version

Use the website as the polished sales surface and Stripe as the final secure payment processor.

Do not send raw `buy.stripe.com` links in outreach, social posts, LinkedIn messages, or email.
