const buildoutPaths = [
  {
    title: "Systems Audit",
    copy: "A paid diagnostic that maps your workflows, tools, bottlenecks, risks, and highest-leverage next build.",
  },
  {
    title: "Custom Buildout",
    copy: "A scoped CRM, portal, SOP hub, dashboard, automation layer, internal tool, or SaaS workflow built around your business.",
  },
  {
    title: "Architecture Retainer",
    copy: "Ongoing systems stewardship for founders who need maintenance, documentation, refinement, and new build support.",
  },
];

const signals = [
  "Client delivery lives across too many places.",
  "Your CRM does not match how you actually sell or serve.",
  "SOPs are missing, outdated, or ignored.",
  "Reporting is scattered, manual, or impossible to trust.",
  "You need a custom internal tool or SaaS workflow, not another generic app.",
];

const method = [
  ["Read", "Understand the real operating pattern before choosing tools."],
  ["Architect", "Map workflows, data, ownership, automations, and handoffs."],
  ["Build", "Implement the system inside the platform that fits the business."],
  ["Steward", "Refine, document, maintain, and expand the system over time."],
];

const modules = [
  "CRM Architecture",
  "Client Portals",
  "SOP Libraries",
  "Dashboards",
  "Workflow Automation",
  "SaaS Foundations",
  "Retainer Support",
  "Full System Design",
];

const laneDetails = [
  ["Audit", "Find the bottlenecks, risks, and highest-leverage build before choosing tools."],
  ["Build", "Implement CRM, portals, dashboards, automations, SOP hubs, or internal systems."],
  ["Document", "Deliver SOPs, handoff notes, permissions, and operating guidance."],
  ["Steward", "Keep systems maintained, refined, and expanded as the business changes."],
];

const founderNotes = [
  "Architecture before platform selection",
  "Human judgment over generic automation",
  "Documentation and handoff included",
];

export default function Home() {
  return (
    <main className="arcana-home">
      <div className="atmosphere" aria-hidden="true">
        <span className="smoke smoke-one" />
        <span className="smoke smoke-two" />
        <span className="smoke smoke-three" />
        <span className="stardust stardust-one" />
        <span className="stardust stardust-two" />
        <span className="petal petal-one" />
        <span className="petal petal-two" />
        <span className="petal petal-three" />
      </div>

      <header className="site-header" aria-label="The Arcana Systems">
        <a className="brand-lockup" href="/" aria-label="The Arcana Systems home">
          <span>The Arcana</span>
          <small>Systems</small>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/services.html">Services</a>
          <a href="/pricing.html">Buildouts</a>
          <a href="/about.html">About</a>
          <a href="/contact.html">Contact</a>
        </nav>
        <a className="header-cta" href="/contact.html#interest=Custom%20systems%20assessment">
          Start Assessment
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-art" aria-hidden="true">
          <img src="/images/tas-brand-hero.png" alt="" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Platform-agnostic systems architecture</p>
          <h1>Custom systems architecture and implementation for businesses ready to move like magic.</h1>
          <p className="hero-lead">
            Choose a focused buildout, start with a systems audit, or retain ongoing support.
            The Arcana Systems audits, architects, builds, documents, and hands over custom
            operational infrastructure in the platform that fits your business.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/contact.html#interest=Custom%20systems%20assessment">
              Start the Guided Assessment
            </a>
            <a className="button button-secondary" href="/pricing.html">
              Explore Custom Buildouts
            </a>
          </div>
        </div>
      </section>

      <section className="oracle-strip" aria-label="What The Arcana Systems builds">
        <span>Audit</span>
        <span>Architecture</span>
        <span>Implementation</span>
        <span>Retainer</span>
      </section>

      <section className="section-panel intro-panel">
        <div className="section-intro">
          <p className="eyebrow">The Work</p>
          <h2>Not templates. Not tool worship. Actual systems built around your business.</h2>
          <p>
            You bring the messy reality: scattered tools, unclear handoffs, manual work,
            missing documentation, client experience gaps, or an internal tool idea that
            needs to become real. I turn that into architecture, implementation, SOPs,
            and a handoff your team can use.
          </p>
        </div>
        <div className="path-grid">
          {buildoutPaths.map((path) => (
            <article key={path.title} className="glass-card">
              <span aria-hidden="true">✦</span>
              <h3>{path.title}</h3>
              <p>{path.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-panel split-panel">
        <div>
          <p className="eyebrow">When You Need This</p>
          <h2>Your business is asking for structure.</h2>
        </div>
        <ul className="signal-list">
          {signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </section>

      <section className="section-panel method-panel">
        <div className="section-intro">
          <p className="eyebrow">The Arcana Method</p>
          <h2>Read the system. Architect the flow. Build what holds.</h2>
          <p className="section-kicker">
            A practical sequence for turning operational fog into usable architecture:
            understand the pattern, map the system, implement it cleanly, then keep it
            alive as the business changes.
          </p>
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

      <section className="dark-panel modules-panel">
        <div className="section-intro">
          <p className="eyebrow">Buildout Lanes</p>
          <h2>Choose the business system you need built. The platform comes after the architecture.</h2>
        </div>
        <div className="lane-detail-grid" aria-label="What each buildout can include">
          {laneDetails.map(([title, copy]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="module-cloud">
          {modules.map((module) => (
            <a key={module} href="/pricing.html">
              {module}
            </a>
          ))}
        </div>
      </section>

      <section className="founder-panel">
        <div className="founder-image">
          <img src="/images/cnelson-headshot-clean.png" alt="Caitilin Nelson, founder of The Arcana Systems" />
        </div>
        <div className="founder-copy">
          <p className="eyebrow">Founder-Led</p>
          <h2>Built personally, with the judgment your operations deserve.</h2>
          <p>
            I lead the assessment, architecture, and implementation so the system is not
            merely pretty. It has to work for your real clients, your real tools, and your
            real capacity.
          </p>
          <ul className="founder-notes">
            {founderNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <a className="text-link" href="/about.html">Read Caitilin&apos;s story</a>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Start Here</p>
        <h2>Tell me what your business actually needs.</h2>
        <p>
          The guided assessment is a scoping tool, not a forced bundle. Share your tools,
          pain points, concerns, goals, and logo so I can recommend the right build.
        </p>
        <a className="button button-primary" href="/contact.html#interest=Custom%20systems%20assessment">
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
