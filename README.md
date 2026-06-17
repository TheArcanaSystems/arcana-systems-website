# The Arcana Systems Website

Production-ready static website for [thearcanasystems.com](https://thearcanasystems.com), focused on The Arcana Systems offer catalog, direct checkout, and custom inquiry flow.

## Structure

```text
arcana-systems-website/
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   `-- script.js
|-- images/
|   |-- arcana-systems-logo.png
|   |-- cnelson-headshot.png
|   |-- logo-dark.png
|   `-- logo-light.png
|-- .gitignore
|-- README.md
`-- wrangler.toml
```

## Purchase And Intake Flow

Productized offers link directly from the website offer cards to secure Stripe Checkout:

- Systems Clarity Intensive
- Invoice & Payment Automation Kit
- Client Portal OS Template
- CEO Command Center Dashboard
- SOP Snap Kit
- AI SOP Builder Prompt Pack

The inquiry form is reserved for custom implementation quotes, buyer questions, and tailored next steps.

## TAS CRM Intake

The inquiry form posts to:

```html
https://crm.thearcanasystems.com/api/intake
```

Required client-side fields:

- Offer Interest
- Business Name
- Contact Name
- Email

On successful submission, the page records the inquiry in TAS CRM and shows confirmation copy.

## Cloudflare Pages Setup

1. Create or open the GitHub repository `arcana-systems-website`.
2. Push this project to the `main` branch.
3. In Cloudflare, open **Workers & Pages**.
4. Click **Create application**.
5. Choose **Pages** and **Connect to Git**.
6. Select the `arcana-systems-website` repository.
7. Use these build settings:
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `/`
8. Deploy.
9. Add the custom domain `thearcanasystems.com` under the Pages project's **Custom domains** tab.
10. Confirm SSL is active and the domain resolves to the Pages deployment.

## Local Preview

Run a simple static server from the project root:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Production Checks

- Verify all nav links scroll to their sections.
- Confirm productized offer buttons route directly to the correct secure checkout URL.
- Submit a test CRM inquiry and confirm the success message appears.
- Run Lighthouse for accessibility, performance, best practices, and SEO.
- Test mobile navigation at narrow widths.
