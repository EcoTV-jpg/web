/* ------------------------------------------------------------------
   Claim Consistency Audit — detects divergence in Teleview factual claims.

   Expectations come from src/data/claim-registry.json (single source of
   truth). The audit FAILS (exit 1) when known critical claims diverge,
   including while the activation wording contradiction is unresolved.

   Usage: npm run test:claims
------------------------------------------------------------------- */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const srcDir = path.join(rootDir, "src");

const registry = JSON.parse(
  fs.readFileSync(path.join(srcDir, "data", "claim-registry.json"), "utf-8"),
);
const claimById = Object.fromEntries(registry.claims.map((c) => [c.id, c]));

function collectFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(full, out);
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const files = collectFiles(srcDir);
const contents = new Map(files.map((f) => [f, fs.readFileSync(f, "utf-8")]));
const rel = (f) => path.relative(rootDir, f);

function lineOf(content, index) {
  return content.slice(0, index).split("\n").length;
}

const results = [];
function check(id, label, fn) {
  try {
    const { pass, detail, evidence } = fn();
    results.push({ id, label, pass, detail, evidence: evidence || [] });
  } catch (err) {
    results.push({ id, label, pass: false, detail: `audit error: ${err.message}`, evidence: [] });
  }
}

function scanAll(re) {
  const hits = [];
  for (const [file, content] of contents) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(content)) !== null) {
      hits.push({ file, line: lineOf(content, m.index), match: m[0], groups: m.slice(1), index: m.index });
    }
  }
  return hits;
}

const windowBefore = (file, index, n) =>
  contents.get(file).slice(Math.max(0, index - n), index);
const windowAfter = (file, index, matchLen, n) =>
  contents.get(file).slice(index + matchLen, index + matchLen + n);

/* C1 — channel count: every thousands-figure attached to "channels" must be 25,000 */
check("C1", "channels.count = 25,000+", () => {
  const hits = scanAll(/(\d{1,3}(?:,\d{3})+)\s*\+?\s*(?:live\s+)?(?:tv\s+)?channels?/gi);
  const totalClaims = hits.filter((h) => {
    const lineStart = contents.get(h.file).lastIndexOf("\n", h.index) + 1;
    const lineEnd = contents.get(h.file).indexOf("\n", h.index);
    const line = contents.get(h.file).slice(lineStart, lineEnd === -1 ? undefined : lineEnd);
    return !/(channelCount|count)\s*:\s*"/.test(line); // per-category breakdown fields, not the total
  });
  const bad = totalClaims.filter((h) => h.groups[0] !== "25,000");
  return {
    pass: bad.length === 0 && totalClaims.length > 0,
    detail: `${totalClaims.length} total-count occurrences (${hits.length - totalClaims.length} category breakdowns excluded), ${bad.length} divergent`,
    evidence: bad.map((h) => `${rel(h.file)}:${h.line} :: ${h.match.trim()}`),
  };
});

/* C2 — VOD count: every thousands-figure attached to VOD/movies/titles must be 100,000 */
check("C2", "vod.count = 100,000+", () => {
  const hits = scanAll(/(\d{1,3}(?:,\d{3})+)\s*\+?\s*(?:on-demand\s+)?(?:movies|titles|vod\b)/gi);
  const bad = hits.filter((h) => h.groups[0] !== "100,000");
  return {
    pass: bad.length === 0 && hits.length > 0,
    detail: `${hits.length} VOD-count occurrences, ${bad.length} divergent`,
    evidence: bad.map((h) => `${rel(h.file)}:${h.line} :: ${h.match.trim()}`),
  };
});

/* C3 — plan prices: duration→price pairings must match the canonical map */
check("C3", "price.plans = 16/39/60/90", () => {
  const expected = { 1: 16, 3: 39, 6: 60, 12: 90 };
  const bad = [];
  let checked = 0;
  const forward = scanAll(/\b(\d+)\s*-\s*months?\b[^$]{0,120}?\$(\d+(?:\.\d{2})?)/gi);
  for (const h of forward) {
    const months = Number(h.groups[0]);
    if (!(months in expected)) continue;
    const dollarIndex = h.index + h.match.lastIndexOf("$");
    const middle = contents.get(h.file).slice(h.index + h.groups[0].length, dollarIndex);
    if (/\b\d+\s*-\s*months?\b|\bannual\b|\byearly\b|\bmonth-by-month\b|\bsav(e|ing|ings)\b/i.test(middle)) continue; // comparison sentence or savings mention ('saving $102'), not the plan price
    const before = windowBefore(h.file, dollarIndex, 60);
    const after = windowAfter(h.file, dollarIndex, h.match.length - (dollarIndex - h.index), 25);
    if (/typically|usually|market|average|between|range/i.test(before)) continue; // market-range prose, not our price
    if (/effective|\/mo|per month/i.test(after)) continue; // effective-monthly rate, checked separately
    if (/month-by-month|sav(e|ing|ings)/i.test(after)) continue; // '$16 month-by-month' comparisons, '$102 saved' savings
    checked += 1;
    if (Number(h.groups[1]) !== expected[months]) {
      bad.push(`${rel(h.file)}:${h.line} :: ${months}-month paired with $${h.groups[1]} (expected $${expected[months]})`);
    }
  }
  // NOTE: no 'annual → $90' forward check. The word 'annual' overwhelmingly appears
  // beside derived figures (effective rates, savings, per-day cost, competitor totals),
  // so a proximity check misfires; the 12-month plan price is enforced via N-month pairings.
  const reverse = scanAll(/\$(\d+(?:\.\d{2})?)\s+for\s+(\d+)\s*-?\s*months?\b/gi);
  for (const h of reverse) {
    const months = Number(h.groups[1]);
    if (!(months in expected)) continue;
    checked += 1;
    if (Number(h.groups[0]) !== expected[months]) {
      bad.push(`${rel(h.file)}:${h.line} :: $${h.groups[0]} for ${months} months (expected $${expected[months]})`);
    }
  }
  return {
    pass: bad.length === 0 && checked > 0,
    detail: `${checked} plan-price pairings checked, ${bad.length} divergent`,
    evidence: bad,
  };
});

/* C3b — effective monthly rates must be exactly the derived set */
check("C3b", "price.effectiveMonthly in {7.50,10,13,16}", () => {
  const allowed = new Set(["7.50", "10", "10.00", "13", "13.00", "16", "16.00"]);
  const hits = scanAll(/\$(\d+(?:\.\d{2})?)\s*(?:\/mo\b|per month)/gi);
  const bad = [];
  let checked = 0;
  for (const h of hits) {
    const before = windowBefore(h.file, h.index, 120);
    const after = windowAfter(h.file, h.index, h.match.length, 60);
    if (/\$\d[\d.]*\s*-\s*$/.test(before)) continue; // '$90 - $180/mo' style market ranges
    if (/typically|usually|averages?|market|industry|cable|satellite|competitor|reseller|provider|charges|expensive|bills|legacy|ranges? between/i.test(before)) continue; // market/cable context
    if (/programming|fee|rental|regional|streaming pass|equipment|reseller|markup|competitor|market/i.test(after)) continue; // cable-fee footnotes, reseller-markup prose
    checked += 1;
    if (!allowed.has(h.groups[0])) {
      bad.push(`${rel(h.file)}:${h.line} :: $${h.groups[0]}/mo is not a canonical effective rate`);
    }
  }
  return {
    pass: bad.length === 0 && checked > 0,
    detail: `${checked} effective-rate occurrences checked, ${bad.length} divergent`,
    evidence: bad,
  };
});

/* C4 — trial duration: every N-hour near "trial" must be 24 */
check("C4", "trial.duration = 24-hour", () => {
  const hits = scanAll(/(\d+)\s*-\s*hours?\b/gi);
  const bad = [];
  let checked = 0;
  for (const h of hits) {
    const ctx = windowBefore(h.file, h.index, 80) + windowAfter(h.file, h.index, h.match.length, 80);
    if (!/trial/i.test(ctx)) continue;
    checked += 1;
    if (Number(h.groups[0]) !== 24) {
      bad.push(`${rel(h.file)}:${h.line} :: ${h.match.trim()} near trial context`);
    }
  }
  return {
    pass: bad.length === 0 && checked > 0,
    detail: `${checked} trial-duration occurrences checked, ${bad.length} divergent`,
    evidence: bad,
  };
});

/* C5 — refund period: every N-day in guarantee/refund context must be 14 */
check("C5", "refund.period = 14-day", () => {
  const hits = scanAll(/(\d+)\s*-\s*days?\b/gi);
  const bad = [];
  let checked = 0;
  for (const h of hits) {
    const before = windowBefore(h.file, h.index, 40);
    const after = windowAfter(h.file, h.index, h.match.length, 60);
    if (!/guarantee|refund|money-back/i.test(before + after)) continue;
    const between = (before.match(/(guarantee|refund|money-back)[^]*$/) || [""])[0] +
      (after.match(/^[^]*?(guarantee|refund|money-back)/) || [""])[0];
    if (/coverage|term|price|lock|subscription|access|service/i.test(between)) continue; // '365-day term/coverage … guarantee' is not the refund claim
    checked += 1;
    if (Number(h.groups[0]) !== 14) {
      bad.push(`${rel(h.file)}:${h.line} :: ${h.match.trim()} in guarantee/refund context`);
    }
  }
  return {
    pass: bad.length === 0 && checked > 0,
    detail: `${checked} guarantee-context occurrences checked, ${bad.length} divergent`,
    evidence: bad,
  };
});

/* C6 — EPG range: every N-day in EPG context must be 7 */
check("C6", "epg.duration = 7-day", () => {
  const hits = scanAll(/(\d+)\s*-\s*days?\b/gi);
  const bad = [];
  let checked = 0;
  for (const h of hits) {
    const ctx = windowBefore(h.file, h.index, 40) + windowAfter(h.file, h.index, h.match.length, 40);
    if (!/EPG|XMLTV|program schedule/i.test(ctx)) continue;
    checked += 1;
    if (Number(h.groups[0]) !== 7) {
      bad.push(`${rel(h.file)}:${h.line} :: ${h.match.trim()} in EPG context`);
    }
  }
  return {
    pass: bad.length === 0 && checked > 0,
    detail: `${checked} EPG-context occurrences checked, ${bad.length} divergent`,
    evidence: bad,
  };
});

/* C7 — activation: CRITICAL. Fails until a human resolves the contradiction. */
check("C7", "activation.time (canonical: typically within 5–15 minutes)", () => {
  const claim = claimById["activation.time"];
  // Strip JSX block comments and full-line // comments (line numbers preserved) so code comments are not counted as claims.
  const stripped = new Map();
  for (const [file, content] of contents) {
    stripped.set(
      file,
      content
        .replace(/\{\/\*[\s\S]*?\*\/\}/g, (m) => m.replace(/[^\n]/g, ""))
        .replace(/^[ \t]*\/\/.*$/gm, ""),
    );
  }
  const scanStripped = (re) => {
    const hits = [];
    for (const [file, content] of stripped) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(content)) !== null) {
        hits.push({ file, line: content.slice(0, m.index).split("\n").length, match: m[0] });
      }
    }
    return hits;
  };
  const fiveMin = scanStripped(/5(?:[–—-]\s*|\s+to\s+)15\s*(?:min(?:ute)?s?)?/gi);
  // Fulfillment-context 'instant' forms (resolved 2026-09-11: all must be gone).
  // Unrelated playback/support uses (EPG, zapping, VOD, buffers, reactivation…) never match these.
  const instant = [
    ...scanStripped(/instant\s+(?:access|activation|delivery|setup|dispatch)/gi),
    // two-word gap forms: 'instant subscription activation', 'instant credential dispatch/assistance', 'instant email dispatch'
    ...scanStripped(/instant\s+(?!VOD\b)\w+\s+(?:access|activation|delivery|dispatch|assistance|credential)/gi),
    ...scanStripped(/instant\s+(?:upon|\(<)/gi), // 'Instant upon order confirmation', 'Instant (< 15 mins)'
    ...scanStripped(/instantly\s+(?:look up|resend|issu\w*)/gi),
    ...scanStripped(/automatically issued after payment/gi),
  ];
  if (claim.resolution == null) {
    return {
      pass: false,
      detail: `UNRESOLVED: ${fiveMin.length} '5–15 min' vs ${instant.length} 'instant access/activation' occurrences — human must decide`,
      evidence: [
        ...fiveMin.map((h) => `${rel(h.file)}:${h.line} :: [5–15] ${h.match.trim()}`),
        ...instant.map((h) => `${rel(h.file)}:${h.line} :: [instant] ${h.match.trim()}`),
      ],
    };
  }
  const decision = claim.resolution.decision;
  const losers = decision === "5-15-min" ? instant : fiveMin;
  return {
    pass: losers.length === 0,
    detail: `resolved as '${decision}', ${losers.length} losing-wording occurrences remain`,
    evidence: losers.map((h) => `${rel(h.file)}:${h.line} :: ${h.match.trim()}`),
  };
});

/* C8 — connections range must be 1 to 4 */
check("C8", "connections.range = 1 to 4", () => {
  const hits = scanAll(/(\d)\s*to\s*(\d)\s*connections?\b/gi);
  const bad = hits.filter((h) => !(h.groups[0] === "1" && h.groups[1] === "4"));
  return {
    pass: bad.length === 0,
    detail: `${hits.length} connection-range occurrences, ${bad.length} divergent`,
    evidence: bad.map((h) => `${rel(h.file)}:${h.line} :: ${h.match.trim()}`),
  };
});

/* C9 — contact: single email + single WhatsApp number */
check("C9", "support.email + support.whatsapp single-sourced", () => {
  const bad = [];
  const emails = scanAll(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g);
  const allowedEmails = new Set(["help@teleview.me", "yourname@example.com", "legal@rightsholder.com"]);
  for (const h of emails) {
    if (!allowedEmails.has(h.match.toLowerCase())) {
      bad.push(`${rel(h.file)}:${h.line} :: unexpected email ${h.match}`);
    }
  }
  const waLinks = scanAll(/wa\.me\/(\d+)/g);
  for (const h of waLinks) {
    if (h.groups[0] !== "447848197761") {
      bad.push(`${rel(h.file)}:${h.line} :: unexpected wa.me number ${h.groups[0]}`);
    }
  }
  const intl = scanAll(/\+44[\s\d]{8,}/g);
  for (const h of intl) {
    if (h.match.replace(/\D/g, "") !== "447848197761") {
      bad.push(`${rel(h.file)}:${h.line} :: unexpected +44 number ${h.match.trim()}`);
    }
  }
  return {
    pass: bad.length === 0,
    detail: `${emails.length} emails, ${waLinks.length} wa.me links scanned, ${bad.length} divergent`,
    evidence: bad,
  };
});

/* C10 — device/player slug references must resolve to canonical guide sets */
check("C10", "devices/players slug integrity + honest Roku stance", () => {
  const devices = new Set(claimById["devices.supported"].canonicalValue);
  const players = new Set(claimById["players.supported"].canonicalValue);
  const union = new Set([...devices, ...players]);
  const bad = [];
  let refs = 0;
  for (const f of files.filter((x) => /(deviceGuides|bestIptvApps)\.ts$/.test(x))) {
    const content = contents.get(f);
    const re = /slug:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(content)) !== null) {
      refs += 1;
      if (!union.has(m[1])) {
        bad.push(`${rel(f)}:${lineOf(content, m.index)} :: unknown slug '${m[1]}'`);
      }
    }
  }
  const nativeRoku = scanAll(/native\s+roku\s+(?:app|player|channel|support)/gi);
  for (const h of nativeRoku) {
    bad.push(`${rel(h.file)}:${h.line} :: contradicts Roku workaround-only stance`);
  }
  return {
    pass: bad.length === 0 && refs > 0,
    detail: `${refs} slug references checked, ${bad.length} divergent`,
    evidence: bad,
  };
});

/* ---- report ---- */
let failures = 0;
console.log("\nClaim Consistency Audit");
console.log("=======================");
for (const r of results) {
  const tag = r.pass ? "PASS" : "FAIL";
  if (!r.pass) failures += 1;
  console.log(`[${tag}] ${r.id} ${r.label} — ${r.detail}`);
  for (const e of r.evidence.slice(0, 25)) console.log(`       ${e}`);
  if (r.evidence.length > 25) console.log(`       … +${r.evidence.length - 25} more`);
}
console.log(`\n${results.length - failures}/${results.length} checks passed.`);
if (failures > 0) {
  console.log("RESULT: FAIL — critical claims diverge. See evidence above.");
  process.exit(1);
}
console.log("RESULT: PASS — all claims consistent with the registry.");
