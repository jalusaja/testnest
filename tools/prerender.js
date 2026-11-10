#!/usr/bin/env node
/*
 * Optional: bakes the app list into index.html so it is readable without JavaScript
 * (and by search engines). The site works without running this — JS renders the
 * list from js/apps.js on load — but run it after editing apps.js to keep the
 * no-JS fallback in sync:
 *
 *   node tools/prerender.js
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "js/apps.js"), "utf8"), sandbox);
const APPS = sandbox.window.JALU_APPS;
const GROUPS = sandbox.window.JALU_GROUPS;
const R = require(path.join(root, "js/render.js"));
const L = "id";

// Sanity checks: unique ids, known groups/badges, icons exist.
const BADGES = ["noAds", "oneTime", "onDevice", "kids", "hasAds"];
const seen = new Set();
const problems = [];
for (const a of APPS) {
  if (seen.has(a.id)) problems.push(`duplicate id ${a.id}`);
  seen.add(a.id);
  if (!GROUPS.some((g) => g.key === a.group)) problems.push(`${a.id}: unknown group ${a.group}`);
  for (const b of a.badges || []) if (!BADGES.includes(b)) problems.push(`${a.id}: unknown badge ${b}`);
  if ((a.badges || []).includes("noAds") && (a.badges || []).includes("hasAds")) problems.push(`${a.id}: both noAds and hasAds`);
  if (!fs.existsSync(path.join(root, a.icon))) problems.push(`${a.id}: missing icon ${a.icon}`);
  for (const f of ["short", "long"]) for (const l of ["id", "en"]) if (!a[f] || !a[f][l]) problems.push(`${a.id}: missing ${f}.${l}`);
  if (!a.packageName) problems.push(`${a.id}: missing packageName`);
  if (a.privacyUrl && !fs.existsSync(path.join(root, a.privacyUrl))) problems.push(`${a.id}: missing privacyUrl ${a.privacyUrl}`);
}
if (problems.length) { console.error("Problems:\n  " + problems.join("\n  ")); process.exit(1); }

const file = path.join(root, "index.html");
let html = fs.readFileSync(file, "utf8");
function put(name, content) {
  const re = new RegExp(`(<!-- ${name}:START -->)[\\s\\S]*?(<!-- ${name}:END -->)`);
  if (!re.test(html)) throw new Error(`marker ${name} not found`);
  html = html.replace(re, `$1${content}$2`);
}
function putCount(name, content) {
  const re = new RegExp(`(<!-- COUNT:${name} -->)[\\s\\S]*?(<!-- /COUNT:${name} -->)`);
  html = html.replace(re, `$1${content}$2`);
}
const used = GROUPS.filter((g) => APPS.some((a) => a.group === g.key));
put("MOSAIC", R.mosaicHtml(APPS));
put("FILTERS", R.filtersHtml(APPS, GROUPS, L));
put("LEGEND", R.legendHtml(L));
put("APPS", R.listHtml(APPS, GROUPS, L));
putCount("APPS", R.t(L, "hero.count", { n: APPS.length }));
putCount("GROUPS", R.t(L, "hero.groups", { n: used.length }));
fs.writeFileSync(file, html);
console.log(`Prerendered ${APPS.length} apps in ${used.length} groups into index.html`);
