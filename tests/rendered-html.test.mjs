import assert from "node:assert/strict";
import test from "node:test";

async function request(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
      IMAGES: {
        input() {
          throw new Error("Image optimization should not run during route smoke tests");
        },
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function html(path) {
  const response = await request(path);
  assert.equal(response.status, 200, `${path} should render successfully`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("homepage renders the canonical Audit-first commercial path", async () => {
  const body = await html("/");
  assert.match(body, /Your business has outgrown being held together by you/i);
  assert.match(body, /Begin your Arcana Audit/i);
  assert.match(body, /\$497/);
  assert.match(body, /\$10,000/);
  assert.match(body, /ArcanaOS/i);
  assert.match(body, /Building systems that move like magic/i);
  assert.doesNotMatch(body, /\$997|22 Arcana|Guided Assessment|SOP Snap Kit|AI SOP Builder/i);
});

test("Arcana Audit route exposes the locked public offer", async () => {
  const body = await html("/audit");
  assert.match(body, /Clarity is a competitive advantage/i);
  assert.match(body, /Six domains\. One connected diagnosis/i);
  assert.match(body, /16-page/i);
  assert.match(body, /human quality review/i);
  assert.match(body, /\$497/);
  assert.doesNotMatch(body, /\$997|90-minute/i);
});

test("Arcana Build route uses the current implementation floor", async () => {
  const body = await html("/pricing");
  assert.match(body, /A business that runs beyond your memory/i);
  assert.match(body, /\$10,000/);
  assert.match(body, /Audit is the scope foundation/i);
  assert.doesNotMatch(body, /\$8,500|Modular Custom Buildout|Retainer/i);
});

test("legacy services URL permanently redirects to the canonical Build page", async () => {
  const response = await request("/services.html");
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), "http://localhost/pricing");
});
