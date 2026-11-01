export const AUDIT_CHECKOUT_URL = "https://buy.stripe.com/dRmeVf2uC7Hn9se3Pq2ZO03";
export const BUSINESS_EMAIL = "hello@thearcanasystems.com";
export const BUILD_STARTING_INVESTMENT = "$10,000";
export const AUDIT_PRICE = "$497";

export const PRIMARY_NAV = [
  { href: "/audit", label: "The Audit" },
  { href: "/pricing", label: "The Build" },
  { href: "/method", label: "ArcanaOS™" },
  { href: "/about", label: "About" },
] as const;

export const ARCANA_DOMAINS = [
  "Operating Model",
  "Client Lifecycle",
  "Systems & Technology",
  "Process & Documentation",
  "Automation & AI",
  "Scale & Founder Dependency",
] as const;

export const ARCANA_OS_PHASES = [
  {
    number: "01",
    title: "Assess",
    heading: "Understand the operation",
    copy: "Identify the constraints, risks, founder dependency, and hidden friction shaping the business today.",
  },
  {
    number: "02",
    title: "Architect",
    heading: "Design the way forward",
    copy: "Map workflows, ownership, information, controls, and technology before deciding what should be built.",
  },
  {
    number: "03",
    title: "Build",
    heading: "Make the architecture real",
    copy: "Configure the CRM, portals, dashboards, documentation, and operating infrastructure in the right sequence.",
  },
  {
    number: "04",
    title: "Automate",
    heading: "Connect repeatable work",
    copy: "Give recurring work a clear trigger, owner, exception path, and purpose instead of adding brittle automation.",
  },
  {
    number: "05",
    title: "Optimize",
    heading: "Test what matters",
    copy: "Verify handoffs, remove friction, strengthen adoption, and refine the system against real operating outcomes.",
  },
  {
    number: "06",
    title: "Scale",
    heading: "Make growth repeatable",
    copy: "Create the visibility, delegation, maintenance, and governance routines that keep the system useful as the business grows.",
  },
] as const;
