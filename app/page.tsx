const services = [
  {
    title: "Systems Audit",
    copy: "Diagnose workflow friction, documentation gaps, tool sprawl, and the next highest-leverage fix.",
  },
  {
    title: "Custom Buildout",
    copy: "Build the CRM, SOP hub, client portal, dashboard, automation, or operating system the business needs now.",
  },
  {
    title: "Ongoing Support",
    copy: "Maintain, refine, document, and optimize the infrastructure after buildout so it stays useful.",
  },
  {
    title: "Revenue Activation",
    copy: "Clean up the client journey from intake, invoice, booking, kickoff, portal, and delivery.",
  },
];

const method = [
  ["Intake", "Capture the operational friction before the call."],
  ["Diagnose", "Review workflows, tools, documentation, and decisions."],
  ["Blueprint", "Map the architecture before a single workflow is rebuilt."],
  ["Build", "Create the portal, SOP hub, automation, dashboard, or operating system."],
  ["Steward", "Keep the system current through refinement, maintenance, and support."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="smoke-field" aria-hidden="true">
        <span className="smoke-orb smoke-orb-one" />
        <span className="smoke-orb smoke-orb-two" />
        <span className="smoke-orb smoke-orb-three" />
        <span className="smoke-ribbon smoke-ribbon-one" />
        <span className="smoke-ribbon smoke-ribbon-two" />
      </div>

      <header className="site-header">
        <a className="brand-lockup" href="/" aria-label="The Arcana Systems home">
          <img src="/images/arcana-systems-logo.png" alt="The Arcana Systems" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/services.html">Services</a>
          <a href="/pricing.html">Pricing</a>
          <a href="/about.html">About</a>
          <a href="/contact.html">Contact</a>
        </nav>
        <a className="header-cta" href="/contact.html#interest=Tailored%20module%20assessment">
          Start the Assessment
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Intelligence. Elegance. Impact.</p>
          <h1>Operational architecture for founders who have outgrown duct-taped workflows.</h1>
          <p className="hero-lead">
            The Arcana Systems designs the structure beneath the work: workflows, SOPs,
            automations, client portals, dashboards, handoffs, and business operating systems
            that make growth easier to hold.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/pricing.html">
              Explore the Modules
            </a>
            <a className="button button-secondary" href="/contact.html#interest=Tailored%20module%20assessment">
              Take the Assessment
            </a>
          </div>
        </div>
        <div className="hero-brand-card" aria-label="The Arcana Systems brand card">
          <img src="/images/arcana-reference-hero.png" alt="" aria-hidden="true" />
          <div className="brand-card-panel">
            <span>Building systems that move like magic</span>
            <strong>Clarity. Structure. Freedom.</strong>
          </div>
        </div>
      </section>

      <section className="problem-section section-band">
        <div className="section-intro">
          <p className="eyebrow">The Hidden Friction</p>
          <h2>Your business grew. Your backend did not.</h2>
          <p>
            Most growing businesses are held together by inboxes, spreadsheets, memory,
            scattered files, and the founder&apos;s ability to keep every moving part in their head.
            The work gets done, but the way it gets done is fragile.
          </p>
        </div>
        <div className="friction-grid">
          <article>Client onboarding changes from project to project.</article>
          <article>SOPs are missing, outdated, or buried where no one looks.</article>
          <article>Follow-up depends on manual reminders and personal memory.</article>
          <article>Team members create workarounds because the real workflow is unclear.</article>
          <article>The founder becomes the default routing system for every decision.</article>
        </div>
      </section>

      <section className="services-section section-band">
        <div className="section-intro narrow">
          <p className="eyebrow">Operational Infrastructure</p>
          <h2>Built with precision, designed to feel calm.</h2>
          <p>
            We architect practical, elegant systems that bring your people, processes, tools,
            and information into one coherent way of working.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span aria-hidden="true">*</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section">
        <div>
          <p className="eyebrow">Systems First</p>
          <h2>Microsoft 365 and Notion by design.</h2>
          <p>
            The Arcana Systems builds operational infrastructure inside tools that support
            durable delivery. We design the system before the build, then connect workflows,
            documentation, automations, dashboards, portals, and handoffs.
          </p>
        </div>
        <aside>
          <p>Your tools should support the architecture.</p>
          <strong>They should never become the architecture.</strong>
        </aside>
      </section>

      <section className="method-section section-band">
        <div className="section-intro">
          <p className="eyebrow">The Arcana Method</p>
          <h2>Diagnose the chaos. Architect the flow. Build what holds.</h2>
        </div>
        <ol className="method-track">
          {method.map(([title, copy]) => (
            <li key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="founder-section">
        <div className="founder-image">
          <img src="/images/cnelson-headshot.png" alt="Caitilin Nelson, founder of The Arcana Systems" />
        </div>
        <div className="founder-copy">
          <p className="eyebrow">Founder Preview</p>
          <h2>Meet the architect behind the magic.</h2>
          <p>
            Behind The Arcana Systems is Caitilin Nelson, a systems architect with more than
            two decades of experience across recruiting, operations, administration, client
            service, finance, executive support, and technology.
          </p>
          <p>
            Her work is rooted in a simple belief: the purpose of systems is not just
            efficiency. It is freedom.
          </p>
          <a className="text-link" href="/about.html">Read Caitilin&apos;s story</a>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Ready for clarity, structure, and freedom?</p>
        <h2>Ready to build something that actually works?</h2>
        <p>
          Explore the 22 Arcana modules or complete the guided assessment so your
          recommended bundle reflects the systems, concerns, and tools actually inside your business.
        </p>
        <a className="button button-primary" href="/contact.html#interest=Tailored%20module%20assessment">
          Start the Guided Assessment
        </a>
      </section>

      <footer>
        <span>The Arcana Systems</span>
        <span>Building systems that move like magic</span>
        <a href="mailto:hello@thearcanasystems.com">hello@thearcanasystems.com</a>
      </footer>
    </main>
  );
}
