/**
 * CSP compliance audit: verifies every prerendered HTML file in dist/
 * against the Content-Security-Policy declared in vercel.json.
 *
 * Checks per page:
 *  - external subresource URLs (scripts, stylesheets, images, fonts, preloads)
 *    are allowed by the matching directive
 *  - inline executable <script> / inline event handlers require
 *    script-src 'unsafe-inline' (architecturally required: vite-plugin-singlefile
 *    inlines the whole React bundle; static headers cannot use nonces)
 *  - inline <style> requires style-src 'unsafe-inline' (Tailwind is inlined)
 *  - JSON-LD blocks are non-executable and CSP-exempt
 *  - no <iframe>/<object>/<embed>, no external form actions, no <base> hijack
 *
 * Usage: node scripts/verify-csp.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const SELF_ORIGIN = "https://www.teleview.me";

function loadPolicy() {
  const vercel = JSON.parse(fs.readFileSync(path.resolve(rootDir, "vercel.json"), "utf-8"));
  const global = vercel.headers.find((h) => h.source === "/(.*)");
  const csp = global.headers.find((h) => h.key === "Content-Security-Policy");
  if (!csp) throw new Error("No Content-Security-Policy in vercel.json /(.*) headers");
  const directives = {};
  for (const part of csp.value.split(";")) {
    const tokens = part.trim().split(/\s+/).filter(Boolean);
    if (tokens.length) directives[tokens[0]] = tokens.slice(1);
  }
  return { raw: csp.value, directives };
}

function directiveFor(policy, name) {
  return policy.directives[name] || policy.directives["default-src"] || [];
}

function urlAllowed(sources, url) {
  if (sources.includes("'none'")) return false;
  // Relative URL -> same origin
  if (!/^[a-z][a-z0-9+.-]*:/i.test(url) && !url.startsWith("//")) {
    return sources.includes("'self'");
  }
  let parsed;
  try {
    parsed = new URL(url, SELF_ORIGIN);
  } catch {
    return false;
  }
  if (["data:", "blob:", "javascript:"].includes(parsed.protocol)) {
    return sources.includes(parsed.protocol);
  }
  const selfOrigin = new URL(SELF_ORIGIN);
  if (parsed.origin === selfOrigin.origin) return sources.includes("'self'");
  const host = parsed.hostname.toLowerCase();
  for (const src of sources) {
    if (src.startsWith("'")) continue;
    const m = src.match(/^(https?:\/\/)?(\*\.)?([^/]+)(\/.*)?$/);
    if (!m) continue;
    const [, scheme, wildcard, hostPattern] = m;
    if (scheme && `${parsed.protocol}//` !== scheme) continue;
    if (wildcard) {
      if (host === hostPattern.toLowerCase() || host.endsWith(`.${hostPattern.toLowerCase()}`)) return true;
    } else if (host === hostPattern.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function collectFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(full, out);
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

const policy = loadPolicy();
const failures = [];
let pagesChecked = 0;
let externalUrlsChecked = 0;

function fail(page, message) {
  failures.push(`${page}: ${message}`);
}

for (const file of collectFiles(distDir)) {
  const page = path.relative(distDir, file);
  const html = fs.readFileSync(file, "utf-8");
  pagesChecked++;

  // 1. External script srcs
  for (const m of html.matchAll(/<script[^>]*\ssrc=["']([^"']+)["']/gi)) {
    externalUrlsChecked++;
    if (!urlAllowed(directiveFor(policy, "script-src"), m[1])) {
      fail(page, `blocked script src: ${m[1]}`);
    }
  }

  // 2. Inline executable scripts (type absent/module/javascript) need 'unsafe-inline'
  for (const m of html.matchAll(/<script(?![^>]*\ssrc=)([^>]*)>/gi)) {
    const type = (m[1].match(/type=["']([^"']+)["']/i) || [])[1] || "";
    const executable = type === "" || /javascript|module|ecmascript/i.test(type);
    if (executable && !directiveFor(policy, "script-src").includes("'unsafe-inline'")) {
      fail(page, "inline executable script without script-src 'unsafe-inline'");
      break;
    }
  }

  // 3. Inline event handlers need script-src 'unsafe-inline'
  if (/\s(onload|onclick|onerror|onsubmit|onchange|onmouse[a-z]+|onfocus|onblur|onkeydown|onkeyup|oninput)\s*=/i.test(html)) {
    if (!directiveFor(policy, "script-src").includes("'unsafe-inline'")) {
      fail(page, "inline event handler without script-src 'unsafe-inline'");
    }
  }

  // 4. Stylesheets / preloads as=style -> style-src; preload as=font -> font-src; as=image -> img-src; as=script -> script-src
  for (const m of html.matchAll(/<link[^>]*>/gi)) {
    const tag = m[0];
    const href = (tag.match(/href=["']([^"']+)["']/i) || [])[1];
    if (!href || href.startsWith("#")) continue;
    const rel = ((tag.match(/rel=["']([^"']+)["']/i) || [])[1] || "").toLowerCase();
    const as = ((tag.match(/as=["']([^"']+)["']/i) || [])[1] || "").toLowerCase();
    let directive = null;
    if (rel === "stylesheet") directive = "style-src";
    else if (rel === "preload" || rel === "modulepreload") {
      directive = { style: "style-src", script: "script-src", font: "font-src", image: "img-src" }[as] || null;
    } else if (rel === "icon" || rel === "apple-touch-icon" || rel === "shortcut icon") {
      directive = "img-src";
    } else {
      continue; // canonical, manifest, preconnect, dns-prefetch: not CSP-gated fetches
    }
    if (directive) {
      externalUrlsChecked++;
      if (!urlAllowed(directiveFor(policy, directive), href)) {
        fail(page, `blocked <link rel=${rel}> ${href} (${directive})`);
      }
    }
  }

  // 5. Inline <style> needs style-src 'unsafe-inline'
  if (/<style[\s>]/i.test(html) && !directiveFor(policy, "style-src").includes("'unsafe-inline'")) {
    fail(page, "inline <style> without style-src 'unsafe-inline'");
  }

  // 6. Images: img src/srcset + source srcset + video poster -> img-src
  for (const m of html.matchAll(/<(?:img|source)[^>]*>/gi)) {
    const tag = m[0];
    const urls = [];
    const src = tag.match(/\ssrc=["']([^"']+)["']/i);
    if (src) urls.push(src[1]);
    const srcset = tag.match(/\ssrcset=["']([^"']+)["']/i);
    if (srcset) {
      for (const part of srcset[1].split(",")) {
        const u = part.trim().split(/\s+/)[0];
        if (u) urls.push(u);
      }
    }
    for (const u of urls) {
      externalUrlsChecked++;
      if (!urlAllowed(directiveFor(policy, "img-src"), u)) {
        fail(page, `blocked image: ${u}`);
      }
    }
  }

  // 7. Frames / objects must be absent (frame-src/object-src 'none')
  if (/<iframe[\s>]/i.test(html)) fail(page, "<iframe> present but frame-src is 'none'");
  if (/<(?:object|embed)[\s>]/i.test(html)) fail(page, "<object>/<embed> present but object-src is 'none'");

  // 8. Form actions -> form-action
  for (const m of html.matchAll(/<form[^>]*>/gi)) {
    const action = (m[0].match(/\saction=["']([^"']+)["']/i) || [])[1];
    if (action && !urlAllowed(directiveFor(policy, "form-action"), action)) {
      fail(page, `blocked form action: ${action}`);
    }
  }

  // 9. <base href> -> base-uri
  for (const m of html.matchAll(/<base[^>]*href=["']([^"']+)["']/gi)) {
    if (!urlAllowed(directiveFor(policy, "base-uri"), m[1])) {
      fail(page, `blocked base href: ${m[1]}`);
    }
  }

  // 10. javascript: URLs in actual URL attributes are never allowed
  // (raw-text scan would false-positive on React DOM's built-in
  // javascript:-protocol sanitizer strings inside the bundle)
  for (const m of html.matchAll(/\s(?:href|src|xlink:href|action|formaction)\s*=\s*["']([^"']+)["']/gi)) {
    if (/^\s*javascript:/i.test(m[1])) fail(page, `javascript: URL in attribute: ${m[1].slice(0, 40)}`);
  }

  // 11. JSON-LD present and non-executable (CSP-exempt by type)
  const ldJson = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>/gi) || [];
  const isAuxFile = page.includes("404") || page.startsWith("google");
  if (ldJson.length === 0 && !isAuxFile) {
    fail(page, "missing JSON-LD structured data");
  }
}

// 12. Policy hygiene assertions
const mustExist = ["default-src", "script-src", "style-src", "img-src", "font-src", "connect-src", "frame-src", "object-src", "base-uri", "form-action", "frame-ancestors"];
for (const d of mustExist) {
  if (!policy.directives[d]) failures.push(`policy: missing directive ${d}`);
}
if (directiveFor(policy, "script-src").includes("'unsafe-eval'")) {
  failures.push("policy: script-src contains 'unsafe-eval' (not required by this codebase)");
}
if ((policy.directives["img-src"] || []).includes("data:")) {
  failures.push("policy: img-src allows data: but dist contains no data: URIs (over-permissive)");
}
for (const [name, sources] of Object.entries(policy.directives)) {
  if (sources.includes("*")) failures.push(`policy: directive ${name} contains bare * wildcard`);
}

console.log(`[CSP] Checked ${pagesChecked} page(s), ${externalUrlsChecked} subresource URL(s) against vercel.json policy.`);
if (failures.length) {
  console.error(`[CSP] FAIL: ${failures.length} violation(s):`);
  for (const f of failures.slice(0, 40)) console.error(`  - ${f}`);
  process.exit(1);
}
console.log("[CSP] PASS: all prerendered pages comply with the Content-Security-Policy.");
