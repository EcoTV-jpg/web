import fs from 'node:fs';
import path from 'node:path';
import type { EligibilityResult, EligibilityAuditSummary } from './types.ts';

/**
 * Expected production hostname for Teleview
 */
export const ALLOWED_HOSTS = new Set([
  'www.teleview.me',
  'teleview.me',
  'localhost',
  '127.0.0.1'
]);

/**
 * Helper to validate if an object represents a compliant BroadcastEvent according to Google livestream guidelines:
 * - @type must be "BroadcastEvent"
 * - isLiveBroadcast must be strictly true
 * - startDate must be a valid non-empty string
 * - endDate (if provided) must be a valid string not preceding startDate
 */
function isValidBroadcastEvent(item: unknown): boolean {
  if (!item || typeof item !== 'object') return false;
  const obj = item as Record<string, unknown>;

  // 1. @type must be BroadcastEvent
  if (obj['@type'] !== 'BroadcastEvent') return false;

  // 2. isLiveBroadcast must be strictly boolean true
  if (obj.isLiveBroadcast !== true) return false;

  // 3. startDate must be provided as a non-empty string
  if (typeof obj.startDate !== 'string' || !obj.startDate.trim()) return false;

  // 4. If endDate is present, validate it does not precede startDate
  if (obj.endDate !== undefined) {
    if (typeof obj.endDate !== 'string' || !obj.endDate.trim()) return false;
    const startMs = Date.parse(obj.startDate);
    const endMs = Date.parse(obj.endDate);
    if (!isNaN(startMs) && !isNaN(endMs) && endMs < startMs) {
      return false;
    }
  }

  return true;
}

/**
 * Validates that a VideoObject contains Google's documented required video fields:
 * - name (string)
 * - thumbnailUrl (string or string[])
 * - uploadDate (string)
 * AND has a valid BroadcastEvent embedded specifically under the .publication property.
 *
 * Non-documented shortcuts like .events or .hasBroadcastEvent are strictly rejected.
 */
function checkVideoObjectLivestream(obj: Record<string, unknown>): boolean {
  const type = obj['@type'];
  const isVideoObject =
    type === 'VideoObject' ||
    (Array.isArray(type) && type.includes('VideoObject'));

  if (!isVideoObject) return false;

  // 1. Validate required VideoObject properties
  if (typeof obj.name !== 'string' || !obj.name.trim()) return false;

  if (!obj.thumbnailUrl) return false;
  if (typeof obj.thumbnailUrl === 'string') {
    if (!obj.thumbnailUrl.trim()) return false;
  } else if (Array.isArray(obj.thumbnailUrl)) {
    if (obj.thumbnailUrl.length === 0 || !obj.thumbnailUrl.some((u) => typeof u === 'string' && u.trim())) {
      return false;
    }
  } else {
    return false;
  }

  if (typeof obj.uploadDate !== 'string' || !obj.uploadDate.trim()) return false;

  // 2. BroadcastEvent MUST be nested specifically under .publication
  // Shortcuts like .events or .hasBroadcastEvent are strictly rejected.
  if (!obj.publication) return false;

  if (Array.isArray(obj.publication)) {
    return obj.publication.some(isValidBroadcastEvent);
  }

  return isValidBroadcastEvent(obj.publication);
}

/**
 * Checks if an object represents a JobPosting schema.
 */
function isJobPostingObject(obj: Record<string, unknown>): boolean {
  const type = obj['@type'];
  if (typeof type === 'string' && type === 'JobPosting') return true;
  if (Array.isArray(type) && type.includes('JobPosting')) return true;
  return false;
}

/**
 * Checks whether an object, array, or @graph contains a supported schema:
 * 1. JobPosting
 * 2. BroadcastEvent ONLY when nested under VideoObject.publication meeting Google's livestream requirements
 *
 * Standalone BroadcastEvent schemas, generic @graph entries with standalone BroadcastEvent,
 * @type arrays containing BroadcastEvent, or non-publication properties (.events, .hasBroadcastEvent)
 * are STRICTLY REJECTED.
 */
export function hasEligibleSchema(jsonLd: unknown): {
  eligible: boolean;
  detectedType?: 'JobPosting' | 'BroadcastEvent';
} {
  if (!jsonLd || typeof jsonLd !== 'object') {
    return { eligible: false };
  }

  if (Array.isArray(jsonLd)) {
    for (const item of jsonLd) {
      const result = hasEligibleSchema(item);
      if (result.eligible) return result;
    }
    return { eligible: false };
  }

  const obj = jsonLd as Record<string, unknown>;

  // Check if this object is a JobPosting
  if (isJobPostingObject(obj)) {
    return { eligible: true, detectedType: 'JobPosting' };
  }

  // Check if this object is a valid VideoObject containing BroadcastEvent under .publication
  if (checkVideoObjectLivestream(obj)) {
    return { eligible: true, detectedType: 'BroadcastEvent' };
  }

  // Check @graph array: inspect each item specifically for JobPosting or VideoObject+publication BroadcastEvent
  if (Array.isArray(obj['@graph'])) {
    for (const item of obj['@graph']) {
      if (item && typeof item === 'object') {
        const itemObj = item as Record<string, unknown>;
        if (isJobPostingObject(itemObj)) {
          return { eligible: true, detectedType: 'JobPosting' };
        }
        if (checkVideoObjectLivestream(itemObj)) {
          return { eligible: true, detectedType: 'BroadcastEvent' };
        }
      }
    }
  }

  return { eligible: false };
}

/**
 * Parses JSON-LD script blocks from an HTML string.
 */
export function extractJsonLdFromHtml(html: string): unknown[] {
  const jsonLdBlocks: unknown[] = [];
  const regex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    const content = match[1]?.trim();
    if (!content) continue;
    try {
      const parsed = JSON.parse(content);
      jsonLdBlocks.push(parsed);
    } catch {
      // Ignore malformed JSON-LD in third-party scripts
    }
  }

  return jsonLdBlocks;
}

/**
 * Attempts to read prerendered HTML for a given Teleview URL from the local dist/ folder.
 */
export function getPrerenderedHtml(urlStr: string, distDir: string = 'dist'): string | null {
  try {
    const parsed = new URL(urlStr);
    let pathname = parsed.pathname;
    if (pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }

    const candidatePaths = [
      path.join(distDir, pathname, 'index.html'),
      path.join(distDir, `${pathname}.html`),
      pathname === '' ? path.join(distDir, 'index.html') : null
    ].filter(Boolean) as string[];

    for (const candidate of candidatePaths) {
      if (fs.existsSync(candidate)) {
        return fs.readFileSync(candidate, 'utf-8');
      }
    }
  } catch {
    return null;
  }

  return null;
}

/**
 * Validates whether a URL is eligible for Google Indexing API submission.
 *
 * Official Google Guidelines:
 * Google states that the Indexing API can only be used for JobPosting pages or
 * BroadcastEvent pages embedded in VideoObject, and Google's spam policies apply
 * to content submitted through the API. Submitting other pages violates Google guidelines.
 */
export function isEligibleForGoogleIndexingApi(
  urlStr: string,
  htmlContent?: string,
  distDir: string = 'dist'
): EligibilityResult {
  // 1. Validate URL syntax
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(urlStr);
  } catch {
    return {
      url: urlStr,
      eligible: false,
      skipped: true,
      reason: `Invalid URL format: '${urlStr}'. Must be an absolute URL.`
    };
  }

  // 2. Validate protocol
  if (parsedUrl.protocol !== 'https:' && parsedUrl.protocol !== 'http:') {
    return {
      url: urlStr,
      eligible: false,
      skipped: true,
      reason: `Unsupported protocol '${parsedUrl.protocol}'. Only HTTP/HTTPS URLs are allowed.`
    };
  }

  // 3. Validate domain
  if (!ALLOWED_HOSTS.has(parsedUrl.hostname)) {
    return {
      url: urlStr,
      eligible: false,
      skipped: true,
      reason: `Untrusted domain '${parsedUrl.hostname}'. Google Indexing API requests are restricted to Teleview domains (${Array.from(ALLOWED_HOSTS).join(', ')}).`
    };
  }

  // 4. Inspect HTML content if provided or find in dist
  const html = htmlContent || getPrerenderedHtml(urlStr, distDir);

  if (html) {
    const jsonLdBlocks = extractJsonLdFromHtml(html);
    for (const block of jsonLdBlocks) {
      const schemaCheck = hasEligibleSchema(block);
      if (schemaCheck.eligible) {
        return {
          url: urlStr,
          eligible: true,
          skipped: false,
          reason: `URL contains supported schema: ${schemaCheck.detectedType}`,
          detectedType: schemaCheck.detectedType
        };
      }
    }

    return {
      url: urlStr,
      eligible: false,
      skipped: true,
      reason: `Page does not contain JobPosting or VideoObject with embedded BroadcastEvent schema. Google states that the Indexing API can only be used for JobPosting pages or BroadcastEvent pages embedded in VideoObject, and Google's spam policies apply to content submitted through the API. Standard pages must rely on sitemap.xml and Search Console.`
    };
  }

  // 5. If no HTML is found, check if it's a known standard Teleview path
  // Normal commercial/guide/pricing/blog routes are strictly ineligible
  return {
    url: urlStr,
    eligible: false,
    skipped: true,
    reason: `Ineligible standard URL: Teleview standard pages do not contain JobPosting or VideoObject with embedded BroadcastEvent schema. Google states that the Indexing API can only be used for JobPosting pages or BroadcastEvent pages embedded in VideoObject, and Google's spam policies apply to content submitted through the API.`
  };
}

/**
 * Audits a list of URLs and categorizes their Indexing API eligibility.
 */
export function auditUrlsEligibility(
  urls: string[],
  distDir: string = 'dist'
): EligibilityAuditSummary {
  const results: EligibilityResult[] = [];
  let eligibleCount = 0;
  let ineligibleCount = 0;

  for (const url of urls) {
    const check = isEligibleForGoogleIndexingApi(url, undefined, distDir);
    results.push(check);
    if (check.eligible) {
      eligibleCount++;
    } else {
      ineligibleCount++;
    }
  }

  return {
    totalChecked: urls.length,
    eligible: eligibleCount,
    ineligible: ineligibleCount,
    results: results.map((r) => ({
      url: r.url,
      eligible: r.eligible,
      reason: r.reason
    }))
  };
}
