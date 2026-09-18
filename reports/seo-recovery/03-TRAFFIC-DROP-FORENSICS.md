# Traffic Drop Diagnostic Tree & Forensics (Phase 11 & Phase 12)

**Date:** 2026-09-18  
**Standard Principle:** Rule #1 — No Hallucinations. Distinguish direct evidence from hypothesis.

---

## 1. Search Console Evidence Availability

- **Direct Search Console Export Files in Repository:** **NONE FOUND.** (No CSV, TSV, JSON, or BigQuery GSC exports exist).
- **Query × Page Performance Matrix:** **NOT VERIFIED — insufficient evidence.** (Requires Google Search Console performance export).
- **Reported Visibility Drop:** Documented in user request context and git history (`feat(seo): complete permanent removal of /best-iptv`, migration of player cluster from `/best-iptv/*` to `/iptv-players/*`).

---

## 2. Diagnostic Category Analysis

### Category A: URL Migration & Search Index Reprocessing
- **Evidence Supporting:** Commit `a739400` moved all 7 major player URLs from `/best-iptv/[player]` to `/iptv-players/[player]`. In any substantial URL migration, Google must recrawl old URLs, process 308 redirects, evaluate canonical signals, and transfer equity to the new URLs. During this transition, rankings frequently fluctuate or drop temporarily.
- **Evidence Contradicting:** 308 redirects are active and returning single-hop responses for canonical paths.
- **Confidence:** **LIKELY CONTRIBUTOR.**
- **Required Verification:** Google Search Console URL Inspection of old player URLs vs new player URLs (checking crawl date and "Google-selected canonical").

---

### Category B: Indexability Failure
- **Evidence Supporting:** None.
- **Evidence Contradicting:** Production HTTP checks show all 48 canonical pages return `HTTP/2 200 OK` with `index, follow` robots tags.
- **Confidence:** **NOT SUPPORTED.**
- **Required Verification:** Continuous HTTP monitoring (already verified live).

---

### Category C: Canonical Tag Failure
- **Evidence Supporting:** None on current canonical pages.
- **Evidence Contradicting:** All 48 pages have self-referencing absolute HTTPS canonical tags matching `sitemap.xml`.
- **Confidence:** **NOT SUPPORTED.**
- **Required Verification:** Google Search Console "Page Indexing" report (verifying whether Google selected user-declared canonical).

---

### Category D: Redirect Failure & Redirect Chains
- **Evidence Supporting:** Trailing slash variants of migrated URLs (e.g. `/best-iptv/tivimate/` and `/pricing/`) execute a 2-hop chain (`308 -> 308 -> 200`) due to Vercel's edge trailing slash normalizer.
- **Evidence Contradicting:** Clean paths (without trailing slash) execute a clean 1-hop 308 redirect.
- **Confidence:** **CONFIRMED DEFECT (Minor Contributor).**
- **Required Verification:** Edge configuration adjustments.

---

### Category E: Sitemap Inconsistency
- **Evidence Supporting:** None.
- **Evidence Contradicting:** `live_sitemap.xml` and `dist/sitemap.xml` are 100% identical and contain only the 48 canonical indexable URLs with 0 redirects, 0 404s, and 0 noindex URLs.
- **Confidence:** **NOT SUPPORTED.**
- **Required Verification:** Search Console Sitemap submission status.

---

### Category F: Robots.txt Blocking
- **Evidence Supporting:** Git history notes that historically, Cloudflare had an AI Crawl Control managed rule that injected Disallow rules for certain bots.
- **Evidence Contradicting:** Live `https://www.teleview.me/robots.txt` currently returns `HTTP/2 200 OK` explicitly allowing `Googlebot`, `*`, and major search crawlers.
- **Confidence:** **NOT SUPPORTED (Historical possibility, currently resolved).**
- **Required Verification:** Google Search Console "Robots.txt Tester".

---

### Category G: Rendering & SSG Output Failure
- **Evidence Supporting:** None.
- **Evidence Contradicting:** Pre-rendered HTML contains fully rendered semantic DOM (H1, H2s, body copy, tables, breadcrumbs) before client-side hydration.
- **Confidence:** **NOT SUPPORTED.**
- **Required Verification:** Inspecting raw `curl -sL` response (verified).

---

### Category H: Internal Link Equity Loss
- **Evidence Supporting:** None.
- **Evidence Contradicting:** 100% of internal links point directly to final canonical destinations. Zero internal links point to 404, 410, or redirected URLs.
- **Confidence:** **NOT SUPPORTED.**
- **Required Verification:** Automated link crawl (verified: 0 broken links).

---

### Category I: Permanent Deletion of Pillar Content (`/best-iptv` → 410 Gone)
- **Evidence Supporting:** Commit `a739400` completely deleted `BestIptvHubPage.tsx` (1,357 lines of content) and returned an **HTTP 410 Gone** with `noindex, nofollow` on `/best-iptv`. If `/best-iptv` was previously Teleview's primary organic ranking asset for high-volume keywords like "best iptv" or "best iptv service", issuing a hard 410 instructed Google to purge the page from the search index immediately.
- **Evidence Contradicting:** None in repository.
- **Confidence:** **CONFIRMED ARCHITECTURAL ACTION — LIKELY PRIMARY DRIVER OF VISIBILITY LOSS.**
- **Required Verification:** Google Search Console historical Page Performance data for `/best-iptv` prior to September 17, 2026.

---

### Category J: Google Core / Helpful Content / Review Systems Update
- **Evidence Supporting:** The previous strategy document (`BEST-IPTV-RESEARCH-AND-STRATEGY.md`) explicitly noted industry volatility in IPTV and streaming queries where affiliate-style listicles were demoted by Google algorithms.
- **Evidence Contradicting:** Insufficient external SERP telemetry to isolate external algorithmic timing from internal site changes.
- **Confidence:** **POSSIBLE CONTRIBUTOR.**
- **Required Verification:** Correlating Google Search Console drop dates with Google Search Central official ranking release dates.

---

## 3. Summary of Diagnostic Findings

| Factor | Classification | Summary Evidence |
|---|---|---|
| **1. Deletion of `/best-iptv` (410 Gone)** | **CONFIRMED ACTION / LIKELY PRIMARY DRIVER** | 1,357 lines of pillar content deleted; HTTP 410 instructs Google to drop index entry. |
| **2. Player URL Migrations (`/best-iptv/*` → `/iptv-players/*`)** | **CONFIRMED ACTION / LIKELY TRANSITIONAL DRIVER** | 7 key player URLs migrated; Google takes time to recrawl, redirect, and transfer equity. |
| **3. Trailing-Slash Redirect Chains** | **CONFIRMED DEFECT / MINOR FACTOR** | 2-hop redirect chain on trailing slash variants (`/best-iptv/tivimate/` → `/best-iptv/tivimate` → `/iptv-players/tivimate`). |
| **4. Technical Architecture (Canonicals, Sitemap, Robots, SSG)** | **CONFIRMED CLEAN** | 100% pass across all 14 test suites; 0 drift between local and live production. |
| **5. Google Manual Action / Penalties** | **NOT VERIFIED — insufficient evidence** | No GSC Manual Action data available in repository. |
