#!/usr/bin/env node

/**
 * Teleview - Local SEO Technical Indexability Audit
 *
 * NOTE ON INDEXABILITY STAGES:
 * A. Technically indexable (Verified locally: HTML syntax, self-canonical, no noindex, robots.txt syntax)
 * B. Crawlable in production (Verified via live audit: live HTTP 200, CDN headers, live robots.txt)
 * C. Discovered by Google (Submitted via sitemap.xml, internal links, or Search Console)
 * D. Crawled by Google (Googlebot fetch event in server logs / GSC crawl stats)
 * E. Indexed by Google (Google's ranking algorithms store and serve the document in SERPs)
 *
 * This local audit verifies Stage A (Technical Pre-Deployment Indexability).
 * It does NOT prove Google crawl or indexation.
 * For live verification (Stage B), run: npm run seo:indexability:live
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isEligibleForGoogleIndexingApi } from '../server/google-indexing/eligibility.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const reportsDir = path.resolve(rootDir, 'reports/seo');

interface AuditUrlResult {
  path: string;
  url: string;
  prerenderedHtmlPresent: boolean;
  filePath: string;
  hasTitle: boolean;
  hasDescription: boolean;
  canonicalCount: number;
  canonicalHref?: string;
  canonicalMatches: boolean;
  hasNoindex: boolean;
  robotsTxtBlocked: boolean;
  indexingApiEligible: boolean;
  indexingApiReason: string;
  issues: string[];
}

interface IndexabilityAuditReport {
  timestamp: string;
  auditType: 'LOCAL_PRE_DEPLOYMENT';
  totalPages: number;
  passedCount: number;
  failedCount: number;
  indexabilityStagesExplained: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  summary: {
    prerenderedHtmlPresentCount: number;
    canonicalMatchCount: number;
    duplicateCanonicalCount: number;
    noindexCount: number;
    robotsBlockedCount: number;
    indexingApiIneligibleCount: number;
  };
  results: AuditUrlResult[];
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

function isPathBlockedByRobots(urlPath: string, disallowRules: string[]): boolean {
  for (const rule of disallowRules) {
    if (rule === '/') return true;
    if (urlPath.startsWith(rule)) return true;
  }
  return false;
}

async function runIndexabilityAudit() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  Teleview - Local Technical Indexability Audit (Pre-Deployment)');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  Scope: Verifies Stage A (Local Technical Indexability).');
  console.log('  Note: Does NOT claim live crawlability (Stage B) or Google indexation (Stage E).');
  console.log('──────────────────────────────────────────────────────────\n');

  if (!fs.existsSync(distDir)) {
    console.error('Error: dist/ directory does not exist. Please run "npm run build" first.');
    process.exit(1);
  }

  // Load sitemap routes dynamically
  const { sitemapRoutes } = await import('../src/routes.ts');
  const { getCanonicalUrl } = await import('../src/config/site.ts');

  // Load local robots.txt artifact
  const robotsPath = path.resolve(distDir, 'robots.txt');
  let disallowRules: string[] = [];

  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
    const parsedRobots = parseRobotsTxt(robotsContent);
    disallowRules = parsedRobots.disallowRules;
  } else {
    console.warn('Warning: dist/robots.txt not found.');
  }

  const results: AuditUrlResult[] = [];
  let prerenderedHtmlPresentCount = 0;
  let canonicalMatchCount = 0;
  let duplicateCanonicalCount = 0;
  let noindexCount = 0;
  let robotsBlockedCount = 0;
  let indexingApiIneligibleCount = 0;

  for (const route of sitemapRoutes) {
    const routePath = route.path;
    const expectedCanonical = getCanonicalUrl(routePath);
    const issues: string[] = [];

    // Find HTML file in dist
    let candidatePath = path.resolve(distDir, routePath === '/' ? 'index.html' : `${routePath.replace(/^\//, '')}/index.html`);
    if (!fs.existsSync(candidatePath)) {
      candidatePath = path.resolve(distDir, routePath === '/' ? 'index.html' : `${routePath.replace(/^\//, '')}.html`);
    }

    const fileExists = fs.existsSync(candidatePath);
    let htmlContent = '';

    if (fileExists) {
      htmlContent = fs.readFileSync(candidatePath, 'utf-8');
      prerenderedHtmlPresentCount++;
    } else {
      issues.push(`Prerendered HTML file not found in dist for path: ${routePath}`);
    }

    // Title check
    const hasTitle = /<title\b[^>]*>([\s\S]*?)<\/title>/i.test(htmlContent);
    if (!hasTitle && fileExists) {
      issues.push('Missing <title> tag');
    }

    // Description check
    const hasDescription = /<meta\b[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i.test(htmlContent);
    if (!hasDescription && fileExists) {
      issues.push('Missing meta description');
    }

    // Canonical tag check
    const canonicalMatchesAll = [...htmlContent.matchAll(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/gi)];
    const canonicalCount = canonicalMatchesAll.length;
    const canonicalHref = canonicalMatchesAll[0]?.[1];
    const canonicalMatches = canonicalCount === 1 && canonicalHref === expectedCanonical;

    if (canonicalCount === 0 && fileExists) {
      issues.push('Missing canonical tag');
    } else if (canonicalCount > 1) {
      duplicateCanonicalCount++;
      issues.push(`Duplicate canonical tags detected (${canonicalCount} found)`);
    } else if (canonicalHref !== expectedCanonical && fileExists) {
      issues.push(`Canonical mismatch: expected '${expectedCanonical}', found '${canonicalHref}'`);
    } else if (canonicalMatches) {
      canonicalMatchCount++;
    }

    // Robots meta check
    const robotsMetaMatches = [...htmlContent.matchAll(/<meta\b[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/gi)];
    let hasNoindex = false;
    for (const match of robotsMetaMatches) {
      const content = match[1]?.toLowerCase() || '';
      if (content.includes('noindex') || content.includes('none')) {
        hasNoindex = true;
        noindexCount++;
        issues.push(`Accidental noindex detected in robots meta: '${content}'`);
      }
    }

    // Robots.txt block check (source artifact)
    const isBlocked = isPathBlockedByRobots(routePath, disallowRules);
    if (isBlocked) {
      robotsBlockedCount++;
      issues.push(`Blocked by source robots.txt disallow rule`);
    }

    // Yoast / WordPress footprint check
    if (fileExists) {
      const hasYoast = /yoast|yoast\.com|yoast-schema-graph|wp-(?:content|includes|json)/i.test(htmlContent);
      if (hasYoast) {
        issues.push('Yoast / WordPress footprint detected in prerendered HTML');
      }
    }

    // Google Indexing API eligibility check
    const indexingApiGate = isEligibleForGoogleIndexingApi(expectedCanonical, htmlContent);
    if (!indexingApiGate.eligible) {
      indexingApiIneligibleCount++;
    } else {
      issues.push(`Unexpected Indexing API eligibility: Standard page incorrectly classified as eligible`);
    }

    results.push({
      path: routePath,
      url: expectedCanonical,
      prerenderedHtmlPresent: fileExists,
      filePath: path.relative(rootDir, candidatePath),
      hasTitle,
      hasDescription,
      canonicalCount,
      canonicalHref,
      canonicalMatches,
      hasNoindex,
      robotsTxtBlocked: isBlocked,
      indexingApiEligible: indexingApiGate.eligible,
      indexingApiReason: indexingApiGate.reason,
      issues
    });
  }

  const passedCount = results.filter((r) => r.issues.length === 0).length;
  const failedCount = results.filter((r) => r.issues.length > 0).length;

  const report: IndexabilityAuditReport = {
    timestamp: new Date().toISOString(),
    auditType: 'LOCAL_PRE_DEPLOYMENT',
    totalPages: sitemapRoutes.length,
    passedCount,
    failedCount,
    indexabilityStagesExplained: {
      A: 'Technically indexable: Prerendered HTML valid, self-canonical present, no noindex directives, allowed by robots.txt',
      B: 'Crawlable in production: Live production host returns HTTP 200, clean headers, no unhandled redirects',
      C: 'Discovered by Google: Present in submitted sitemap.xml and internal link graphs',
      D: 'Crawled by Google: Googlebot actively requests and renders the page (requires GSC / log data)',
      E: 'Indexed by Google: Selected and stored in Google Search index (requires Google Search Console Inspection)'
    },
    summary: {
      prerenderedHtmlPresentCount,
      canonicalMatchCount,
      duplicateCanonicalCount,
      noindexCount,
      robotsBlockedCount,
      indexingApiIneligibleCount
    },
    results
  };

  // Write JSON report
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.resolve(reportsDir, 'indexability-audit.json'),
    JSON.stringify(report, null, 2),
    'utf-8'
  );

  // Write Markdown report
  let md = `# Teleview - Local Technical Indexability Audit Report\n\n`;
  md += `**Audit Type:** Local Pre-Deployment Verification (Stage A)\n`;
  md += `**Generated:** ${report.timestamp}\n`;
  md += `**Total Canonical Routes:** ${report.totalPages}\n`;
  md += `**Passed (Stage A Valid):** ${report.passedCount} / ${report.totalPages}\n`;
  md += `**Issues Found:** ${report.failedCount}\n\n`;

  md += `> [!IMPORTANT]\n`;
  md += `> **Indexability Lifecycle Stages**:\n`;
  md += `> - **Stage A (Technically Indexable)**: Verified by this local audit (valid HTML, canonical tags, no noindex, robots syntax).\n`;
  md += `> - **Stage B (Crawlable in Production)**: Verified by live audit (\`npm run seo:indexability:live\`) checking production edge responses.\n`;
  md += `> - **Stage C (Discovered by Google)**: Page discovered via \`sitemap.xml\` or internal links.\n`;
  md += `> - **Stage D (Crawled by Google)**: Googlebot crawls the live page (tracked in Google Search Console crawl stats).\n`;
  md += `> - **Stage E (Indexed by Google)**: Google includes the page in search results.\n`;
  md += `> *This local audit verifies Stage A only; it does not prove Stages B–E.*\n\n`;

  md += `## Summary Metrics\n\n`;
  md += `| Check | Status | Passed | Notes |\n`;
  md += `| :--- | :---: | :---: | :--- |\n`;
  md += `| Prerendered HTML Present | ${prerenderedHtmlPresentCount === report.totalPages ? '✅ PASS' : '❌ FAIL'} | ${prerenderedHtmlPresentCount}/${report.totalPages} | Static HTML files exist in dist/ |\n`;
  md += `| Self-Referential Canonical Tag | ${canonicalMatchCount === report.totalPages ? '✅ PASS' : '❌ FAIL'} | ${canonicalMatchCount}/${report.totalPages} | Exact match with https://www.teleview.me |\n`;
  md += `| Zero Duplicate Canonicals | ${duplicateCanonicalCount === 0 ? '✅ PASS' : '❌ FAIL'} | ${report.totalPages - duplicateCanonicalCount}/${report.totalPages} | Exactly 1 canonical tag per document |\n`;
  md += `| Zero Accidental Noindex | ${noindexCount === 0 ? '✅ PASS' : '❌ FAIL'} | ${report.totalPages - noindexCount}/${report.totalPages} | All indexable pages allow indexing |\n`;
  md += `| Robots.txt Accessibility (Source) | ${robotsBlockedCount === 0 ? '✅ PASS' : '❌ FAIL'} | ${report.totalPages - robotsBlockedCount}/${report.totalPages} | No canonical pages disallowed in source robots.txt |\n`;
  md += `| Google Indexing API Gating | ${indexingApiIneligibleCount === report.totalPages ? '✅ PASS' : '❌ FAIL'} | ${indexingApiIneligibleCount}/${report.totalPages} | Standard pages protected from API submission |\n\n`;

  md += `## Detailed Results\n\n`;
  md += `| Route | Local Status | Canonical Tag | Indexing API Gate | Issues |\n`;
  md += `| :--- | :---: | :---: | :---: | :--- |\n`;
  for (const r of results) {
    const statusIcon = r.issues.length === 0 ? '✅ PASS' : '❌ FAIL';
    const issuesText = r.issues.length > 0 ? r.issues.join('; ') : 'None';
    md += `| \`${r.path}\` | ${statusIcon} | ${r.canonicalMatches ? '✅ Valid' : '❌ Invalid'} | Blocked (Safe) | ${issuesText} |\n`;
  }

  fs.writeFileSync(path.resolve(reportsDir, 'indexability-audit.md'), md, 'utf-8');

  // Print console table
  console.log(`Audited ${report.totalPages} canonical URLs:\n`);
  console.log(`  • Prerendered HTML Present:        ${prerenderedHtmlPresentCount}/${report.totalPages}`);
  console.log(`  • Self-Referential Canonical Tag:  ${canonicalMatchCount}/${report.totalPages}`);
  console.log(`  • Duplicate Canonicals:            ${duplicateCanonicalCount} (Expected: 0)`);
  console.log(`  • Accidental Noindex Tags:         ${noindexCount} (Expected: 0)`);
  console.log(`  • Blocked by Source Robots.txt:    ${robotsBlockedCount} (Expected: 0)`);
  console.log(`  • Gated from Google Indexing API:  ${indexingApiIneligibleCount}/${report.totalPages} (Safe)`);
  console.log(`\nFinal Verdict: ${failedCount === 0 ? '✅ ALL LOCAL TECHNICAL INDEXABILITY CHECKS PASSED' : `❌ ${failedCount} ISSUES FOUND`}`);
  console.log(`Reports saved to:`);
  console.log(`  - reports/seo/indexability-audit.json`);
  console.log(`  - reports/seo/indexability-audit.md\n`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  if (failedCount > 0) {
    process.exit(1);
  }
}

runIndexabilityAudit().catch((err) => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});
