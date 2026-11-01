import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function html(route = "") {
  const normalized = route.replace(/^\/+|\/+$/g, "");
  const path = normalized
    ? new URL(`../dist/client/${normalized}/index.html`, import.meta.url)
    : new URL("../dist/client/index.html", import.meta.url);
  return readFile(path, "utf8");
}

test("static export emits the canonical Audit-first homepage", async () => {
  const body = await html();
  assert.match(body, /Your business has outgrown being held together by you/i);
  assert.match(body, /Begin your Arcana Audit/i);
  assert.match(body, /\$497/);
  assert.match(body, /\$10,000/);
  assert.match(body, /ArcanaOS/i);
  assert.match(body, /Building systems that move like magic/i);
  assert.doesNotMatch(body, /\$997|22 Arcana|Guided Assessment|SOP Snap Kit|AI SOP Builder/i);
});

test("static export emits the Arcana Audit offer", async () => {
  const body = await html("audit");
  assert.match(body, /Clarity is a competitive advantage/i);
  assert.match(body, /Six domains\. One connected diagnosis/i);
  assert.match(body, /16-page/i);
  assert.match(body, /human quality review/i);
  assert.match(body, /\$497/);
  assert.doesNotMatch(body, /\$997|90-minute/i);
});

test("static export emits current Arcana Build pricing", async () => {
  const body = await html("pricing");
  assert.match(body, /A business that runs beyond your memory/i);
  assert.match(body, /\$10,000/);
  assert.match(body, /Audit is the scope foundation/i);
  assert.doesNotMatch(body, /\$8,500|Modular Custom Buildout|Retainer/i);
});

test("Cloudflare Pages redirects retire legacy offer URLs", async () => {
  const redirects = await readFile(
    new URL("../dist/client/_redirects", import.meta.url),
    "utf8",
  );
  assert.match(redirects, /^\/services \/pricing 308$/m);
  assert.match(redirects, /^\/services\.html \/pricing 308$/m);
  assert.match(redirects, /^\/products\/\* \/audit 308$/m);
  assert.match(redirects, /^\/audit\.html \/audit 308$/m);
});
