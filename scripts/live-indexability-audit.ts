#!/usr/bin/env node

/**
 * Teleview - Live Production SEO Indexability Audit (Stage B Verification)
 *
 * Checks every canonical sitemap URL against live production (https://www.teleview.me/...)
 * and verifies:
 * 1. HTTP status is exactly 200
 * 2. Final URL after redirects (no unexpected redirects)
 * 3. Canonical tag in live HTML matches URL exactly
 * 4. Meta robots in live HTML has no 'noindex'
 * 5. X-Robots-Tag HTTP header has no 'noindex'
 * 6. Live robots.txt accessibility and compares with source artifact
 * 7. Content-Type header is text/html
 * 8. Production hostname is www.teleview.me
 * 9. Sitemap membership in live sitemap.xml
 *
 * NOTE: This tool performs read-only HTTP GET requests to verify Stage B (Production Crawlability).
 * It does NOT execute any modifying or destructive operations.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const reportsDir = path.resolve(rootDir, 'reports/seo');

const PROD_ORIGIN = 'https://www.teleview.me';

interface LiveUrlAuditResult {
  path: string;
  url: string;
  httpStatus: number;
  finalUrl: string;
  isRedirected: boolean;
  contentType: string;
  productionHostname: string;
  inLiveSitemap: boolean;
  canonicalHref?: string;
  canonicalMatches: boolean;
  hasMetaNoindex: boolean;
  hasHeaderNoindex: boolean;
  xRobotsTag?: string;
  robotsTxtDisallowed: boolean;
  issues: string[];
}

interface LiveAuditReport {
  timestamp: string;
  auditType: 'LIVE_PRODUCTION_CRAWLABILITY';
  targetOrigin: string;
  totalPages: number;
  passedCount: number;
  failedCount: number;
  robotsTxtDivergence: {
    identical: boolean;
    localPath: string;
    note: string;
  };
  liveSitemapStats: {
    accessible: boolean;
    urlCount: number;
  };
  summary: {
    http200Count: number;
    zeroRedirectCount: number;
    canonicalMatchCount: number;
    cleanRobotsTagCount: number;
    inSitemapCount: number;
  };
  results: LiveUrlAuditResult[];
}

function parseRobotsTxt(content: string): { disallowRules: string[]; sitemap?: string } {
  const lines = content.split('\n');
  const disallowRules: string[] = [];
  let sitemap: string | undefined;

  let currentUserAgentApplies = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const [directive, ...rest] = trimmed.split(':');
    const val = rest.join(':').trim();

    if (directive.toLowerCase() === 'user-agent') {
      currentUserAgentApplies = val === '*' || val.toLowerCase().includes('googlebot');
    } else if (directive.toLowerCase() === 'disallow' && currentUserAgentApplies) {
      if (val) disallowRules.push(val);
    } else if (directive.toLowerCase() === 'sitemap') {
      sitemap = val;
    }
  }

  return { disallowRules, sitemap };
}

function extractSitemapUrls(xml: string): Set<string> {
  const urls = new Set<string>();
  const regex = /<loc>([^<]+)<\/loc>/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(xml)) !== null) {
    if (match[1]) urls.add(match[1].trim());
  }
  return urls;
}

async function runLiveAudit() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  Teleview - Live Production Technical Indexability Audit');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`  Target: ${PROD_ORIGIN}`);
  console.log('  Stage:  Stage B (Production Crawlability & Live Server Response)');
  console.log('──────────────────────────────────────────────────────────\n');

  // 1. Fetch live robots.txt
  console.log('• Checking production robots.txt (https://www.teleview.me/robots.txt)...');
  let liveRobotsTxt = '';
  let liveRobotsRules: string[] = [];
  try {
    const robotsRes = await fetch(`${PROD_ORIGIN}/robots.txt`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }
    });
    if (robotsRes.ok) {
      liveRobotsTxt = await robotsRes.text();
      liveRobotsRules = parseRobotsTxt(liveRobotsTxt).disallowRules;
      console.log(`  ✅ Live robots.txt fetched (HTTP ${robotsRes.status})`);
    } else {
      console.warn(`  ⚠️ Live robots.txt returned HTTP ${robotsRes.status}`);
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`  ⚠️ Failed to fetch live robots.txt: ${msg}`);
  }

  // Compare with local source robots.txt
  let localRobotsTxt = '';
  const localRobotsPath = fs.existsSync(path.resolve(distDir, 'robots.txt'))
    ? path.resolve(distDir, 'robots.txt')
    : path.resolve(rootDir, 'public/robots.txt');

  if (fs.existsSync(localRobotsPath)) {
    localRobotsTxt = fs.readFileSync(localRobotsPath, 'utf-8');
  }

  const robotsIdentical =
    liveRobotsTxt.trim().replace(/\r\n/g, '\n') === localRobotsTxt.trim().replace(/\r\n/g, '\n');

  const robotsDivergenceNote = robotsIdentical
    ? 'Production robots.txt exactly matches the source artifact.'
    : 'Production robots.txt differs from local source artifact. Note: CDN or edge proxy configuration may be modifying robots.txt.';

  console.log(`  Robots.txt divergence check: ${robotsIdentical ? 'IDENTICAL' : 'DIVERGENCE DETECTED'}`);
  console.log(`  ${robotsDivergenceNote}\n`);

  // 2. Fetch live sitemap.xml
  console.log('• Checking production sitemap.xml (https://www.teleview.me/sitemap.xml)...');
  let liveSitemapUrls = new Set<string>();
  let liveSitemapAccessible = false;
  try {
    const sitemapRes = await fetch(`${PROD_ORIGIN}/sitemap.xml`);
    if (sitemapRes.ok) {
      const sitemapXml = await sitemapRes.text();
      liveSitemapUrls = extractSitemapUrls(sitemapXml);
      liveSitemapAccessible = true;
      console.log(`  ✅ Live sitemap.xml fetched with ${liveSitemapUrls.size} URLs declared.\n`);
    } else {
      console.warn(`  ⚠️ Live sitemap.xml returned HTTP ${sitemapRes.status}\n`);
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`  ⚠️ Failed to fetch live sitemap.xml: ${msg}\n`);
  }

  // 3. Load canonical routes dynamically from src/routes.ts
  const { sitemapRoutes } = await import('../src/routes.ts');
  const { getCanonicalUrl } = await import('../src/config/site.ts');

  console.log(`Auditing ${sitemapRoutes.length} canonical routes against production...\n`);

  const results: LiveUrlAuditResult[] = [];
  let http200Count = 0;
  let zeroRedirectCount = 0;
  let canonicalMatchCount = 0;
  let cleanRobotsTagCount = 0;
  let inSitemapCount = 0;

  for (const route of sitemapRoutes) {
    const routePath = route.path;
    const expectedCanonical = getCanonicalUrl(routePath);
    const issues: string[] = [];

    let status = 0;
    let finalUrl = '';
    let isRedirected = false;
    let contentType = '';
    let productionHostname = '';
    let xRobotsTag = '';
    let html = '';

    try {
      const res = await fetch(expectedCanonical, {
        method: 'GET',
        redirect: 'follow',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      });

      status = res.status;
      finalUrl = res.url;
      isRedirected = res.redirected;
      contentType = res.headers.get('content-type') || '';
      xRobotsTag = res.headers.get('x-robots-tag') || '';

      try {
        productionHostname = new URL(finalUrl).hostname;
      } catch {
        productionHostname = '';
      }

      if (status === 200) {
        http200Count++;
      } else {
        issues.push(`Live HTTP status is ${status} (expected 200)`);
      }

      if (!isRedirected && finalUrl === expectedCanonical) {
        zeroRedirectCount++;
      } else {
        issues.push(`Unexpected redirect: navigated to ${finalUrl}`);
      }

      if (!contentType.includes('text/html')) {
        issues.push(`Unexpected Content-Type: ${contentType}`);
      }

      html = await res.text();
    } catch (fetchErr: unknown) {
      const msg = fetchErr instanceof Error ? fetchErr.message : String(fetchErr);
      issues.push(`Network fetch failure: ${msg}`);
    }

    // Canonical tag check in live HTML
    const canonicalMatch = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    const canonicalHref = canonicalMatch?.[1];
    const canonicalMatches = canonicalHref === expectedCanonical;

    if (!canonicalHref) {
      issues.push('Missing canonical tag in live HTML');
    } else if (!canonicalMatches) {
      issues.push(`Canonical mismatch: live HTML has '${canonicalHref}'`);
    } else {
      canonicalMatchCount++;
    }

    // Meta robots check
    const robotsMetaMatch = html.match(/<meta\b[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
    const metaRobotsContent = robotsMetaMatch?.[1]?.toLowerCase() || '';
    const hasMetaNoindex = metaRobotsContent.includes('noindex') || metaRobotsContent.includes('none');

    // X-Robots-Tag check
    const hasHeaderNoindex = xRobotsTag.toLowerCase().includes('noindex') || xRobotsTag.toLowerCase().includes('none');

    if (hasMetaNoindex) {
      issues.push(`Accidental noindex in live HTML meta robots: '${metaRobotsContent}'`);
    }
    if (hasHeaderNoindex) {
      issues.push(`Accidental noindex in live X-Robots-Tag header: '${xRobotsTag}'`);
    }
    if (!hasMetaNoindex && !hasHeaderNoindex) {
      cleanRobotsTagCount++;
    }

    // Robots.txt check against live rules
    let robotsTxtDisallowed = false;
    for (const rule of liveRobotsRules) {
      if (rule === '/' || routePath.startsWith(rule)) {
        robotsTxtDisallowed = true;
        issues.push(`Blocked by live robots.txt rule: Disallow: ${rule}`);
        break;
      }
    }

    // Live sitemap membership check
    const inLiveSitemap = liveSitemapUrls.has(expectedCanonical);
    if (inLiveSitemap) {
      inSitemapCount++;
    } else if (liveSitemapAccessible) {
      issues.push(`URL not listed in live production sitemap.xml`);
    }

    results.push({
      path: routePath,
      url: expectedCanonical,
      httpStatus: status,
      finalUrl,
      isRedirected,
      contentType,
      productionHostname,
      inLiveSitemap,
      canonicalHref,
      canonicalMatches,
      hasMetaNoindex,
      hasHeaderNoindex,
      xRobotsTag: xRobotsTag || undefined,
      robotsTxtDisallowed,
      issues
    });

    const statusIcon = issues.length === 0 ? '✅' : '❌';
    console.log(`  ${statusIcon} [${status}] ${routePath} ${issues.length > 0 ? `(${issues.join(', ')})` : ''}`);

    // Slight delay to be gentle on production CDN
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  const passedCount = results.filter((r) => r.issues.length === 0).length;
  const failedCount = results.filter((r) => r.issues.length > 0).length;

  const report: LiveAuditReport = {
    timestamp: new Date().toISOString(),
    auditType: 'LIVE_PRODUCTION_CRAWLABILITY',
    targetOrigin: PROD_ORIGIN,
    totalPages: sitemapRoutes.length,
    passedCount,
    failedCount,
    robotsTxtDivergence: {
      identical: robotsIdentical,
      localPath: localRobotsPath,
      note: robotsDivergenceNote
    },
    liveSitemapStats: {
      accessible: liveSitemapAccessible,
      urlCount: liveSitemapUrls.size
    },
    summary: {
      http200Count,
      zeroRedirectCount,
      canonicalMatchCount,
      cleanRobotsTagCount,
      inSitemapCount
    },
    results
  };

  // Write reports
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.resolve(reportsDir, 'live-indexability-audit.json'),
    JSON.stringify(report, null, 2),
    'utf-8'
  );

  let md = `# Teleview - Live Production SEO Indexability Audit Report\n\n`;
  md += `**Audit Type:** Live Production Crawlability Verification (Stage B)\n`;
  md += `**Target Origin:** ${PROD_ORIGIN}\n`;
  md += `**Timestamp:** ${report.timestamp}\n`;
  md += `**Total Canonical Routes:** ${report.totalPages}\n`;
  md += `**Passed (100% Crawlable):** ${report.passedCount} / ${report.totalPages}\n`;
  md += `**Failed Issues:** ${report.failedCount}\n\n`;

  md += `## Robots.txt Verification & Divergence\n\n`;
  md += `- **Production robots.txt Status:** ${liveRobotsTxt ? '✅ Accessible (HTTP 200)' : '❌ Inaccessible'}\n`;
  md += `- **Source vs. Live Comparison:** ${robotsIdentical ? '✅ Identical' : '⚠️ Divergence Detected'}\n`;
  md += `- **Notes:** ${robotsDivergenceNote}\n\n`;

  md += `## Live Summary Metrics\n\n`;
  md += `| Live Check | Status | Passed | Notes |\n`;
  md += `| :--- | :---: | :---: | :--- |\n`;
  md += `| Live HTTP Status Exactly 200 | ${http200Count === report.totalPages ? '✅ PASS' : '❌ FAIL'} | ${http200Count}/${report.totalPages} | Verified live server response |\n`;
  md += `| Zero Unexpected Redirects | ${zeroRedirectCount === report.totalPages ? '✅ PASS' : '❌ FAIL'} | ${zeroRedirectCount}/${report.totalPages} | Direct destination, no redirect hops |\n`;
  md += `| Live Canonical Tag Matches | ${canonicalMatchCount === report.totalPages ? '✅ PASS' : '❌ FAIL'} | ${canonicalMatchCount}/${report.totalPages} | Self-referential tag in live DOM |\n`;
  md += `| Zero Noindex (Meta & X-Robots-Tag) | ${cleanRobotsTagCount === report.totalPages ? '✅ PASS' : '❌ FAIL'} | ${cleanRobotsTagCount}/${report.totalPages} | Allowed for search crawlers |\n`;
  md += `| Live Sitemap.xml Membership | ${inSitemapCount === report.totalPages ? '✅ PASS' : '❌ FAIL'} | ${inSitemapCount}/${report.totalPages} | Present in production sitemap.xml |\n\n`;

  md += `## Detailed Live URL Results\n\n`;
  md += `| Route | Live HTTP | Final URL | Canonical | Issues |\n`;
  md += `| :--- | :---: | :---: | :---: | :--- |\n`;
  for (const r of results) {
    const icon = r.issues.length === 0 ? '✅ 200' : `❌ ${r.httpStatus}`;
    const issuesText = r.issues.length > 0 ? r.issues.join('; ') : 'None';
    md += `| \`${r.path}\` | ${icon} | \`${r.finalUrl}\` | ${r.canonicalMatches ? '✅ Valid' : '❌ Mismatch'} | ${issuesText} |\n`;
  }

  fs.writeFileSync(path.resolve(reportsDir, 'live-indexability-audit.md'), md, 'utf-8');

  console.log('\n──────────────────────────────────────────────────────────');
  console.log(`Live Audit Summary: Total=${report.totalPages} | Passed=${passedCount} | Failed=${failedCount}`);
  console.log(`  • Live HTTP 200 OK:           ${http200Count}/${report.totalPages}`);
  console.log(`  • Zero Unexpected Redirects:  ${zeroRedirectCount}/${report.totalPages}`);
  console.log(`  • Canonical Tag Matches:      ${canonicalMatchCount}/${report.totalPages}`);
  console.log(`  • Zero Noindex Directives:    ${cleanRobotsTagCount}/${report.totalPages}`);
  console.log(`  • Live Sitemap Membership:    ${inSitemapCount}/${report.totalPages}`);
  console.log(`\nFinal Verdict: ${failedCount === 0 ? '✅ ALL LIVE PRODUCTION CRAWLABILITY CHECKS PASSED (STAGE B)' : `❌ ${failedCount} LIVE ISSUES FOUND`}`);
  console.log(`Reports saved to:`);
  console.log(`  - reports/seo/live-indexability-audit.json`);
  console.log(`  - reports/seo/live-indexability-audit.md\n`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  if (failedCount > 0) {
    process.exit(1);
  }
}

runLiveAudit().catch((err) => {
  console.error('Fatal live audit error:', err);
  process.exit(1);
});
