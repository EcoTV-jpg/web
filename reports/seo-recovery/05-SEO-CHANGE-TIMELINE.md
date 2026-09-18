# SEO Change Timeline & Causality Reconstruction (Phases E, G, H)

**Date:** 2026-09-18  
**Subject:** Chronological Audit & Causal Analysis of Teleview Architectural Changes  
**Standard Principle:** Rule #1 — No Hallucinations. Grounded in git commit history and external Search Console telemetry.

---

## 1. Chronological Timeline of Events (September 08 – September 18, 2026)

| Date & Time (UTC) | Commit Hash | Action Description | Technical SEO Impact |
|---|---|---|---|
| **Sep 08 – Sep 10** | Multiple | Initial site expansion; creation of `/best-iptv` pillar hub and player sub-cluster (`/best-iptv/[player]`). | Discovery and indexing phase initiated by Googlebot. |
| **Sep 10 23:42** | `1b8e24e` | Redirects, OG images, freshness, robots updates. | Canonical normalization. |
| **Sep 11 00:20** | `c6959d0` | Internal-link mesh + pricing/subscription intent boundary (+23/-8 links). | Link equity redistribution across core nodes. |
| **Sep 13 01:04** | `d0b80e8` | Sitemap sync (43 -> 51 routes), non-www + pricing 301, footer depth cleanup. | Sitemaps unified to 51 URLs. |
| **Sep 13 01:09** | `53ff6c2` | Documented Cloudflare Managed robots.txt blockage (AI Crawl Control blocking bots). | **CRITICAL SERP EVENT:** Search crawlers were temporarily obstructed by Cloudflare edge rules. |
| **Sep 13 01:23** | `ca7a258` | Cloudflare Pages Function deployed to bypass managed robots.txt blocking. | Search engine access restored. |
| **Sep 13 01:25** | `bf6d716` | Final production verification: 51 routes in sitemap, about 200, clean crawl. | Stable baseline: `/best-iptv` indexable, 7 players under `/best-iptv/*`. |
| **Sep 17 01:59** | `a739400` | **PERMANENT REMOVAL OF `/best-iptv`** with HTTP 410 Gone; player routes migrated from `/best-iptv/[player]` to `/iptv-players/[player]` with 308 redirects. | **MAJOR ARCHITECTURAL EVENT:** High-impression URL purged; 7 core URLs migrated. |
| **Sep 17 16:26** | `9a111ed` | Added SEO content research and strategic architecture report for best IPTV. | Justified 410 removal and pivot to commercial evaluation framework. |
| **Sep 17 16:35** | `6bc69ea` | 5-point buyer stress-test framework transplanted into `/iptv-subscription`. | Content consolidation from deleted hub into subscription landing page. |
| **Sep 17 17:18** | `f57c74b` | Phase 1 consolidation: `/iptv-cost` merged to `/iptv-pricing` (308); `/how-does-iptv-work` merged to `/what-is-iptv` (308); sitemap reduced from 51 to 48. | Sitemap pruned to 48 indexable canonical routes. |
| **Sep 17 18:05** | `db0d1dc` | Google Indexing API eligibility gate and credential security controls. | Automated indexing safety checks. |
| **Sep 17 18:29** | `cbd3d98` | Sanitized legacy Yoast production HTML comments and WordPress artifacts. | DOM cleanup. |
| **Sep 17 20:35** | `72fac07` | Rebuilt 404 UX, stripped error canonicals, automated 404 test suite. | Soft-404 prevention and RFC 9110 compliance. |
| **Sep 18 20:55** | `ea3c5e8` | People-first search intent audit, mapping, and limitation disclosures. | Google Search Essentials & Helpful Content compliance. |

---

## 2. Phase E: Trailing-Slash Redirect Chain Safety Evaluation

### Current Live Behavior
For historical player paths with a trailing slash:
```
Request:  https://www.teleview.me/best-iptv/tivimate/
Hop 1:    HTTP/2 308 Permanent Redirect (Location: https://www.teleview.me/best-iptv/tivimate)
          [Triggered by Vercel platform-level normalizer: "trailingSlash": false]
Hop 2:    HTTP/2 308 Permanent Redirect (Location: /iptv-players/tivimate)
          [Triggered by vercel.json custom redirects rule]
Hop 3:    HTTP/2 200 OK (Clean HTML document served)
```

### Clarification on Googlebot & Search Central Policy
- **Correction Applied:** Permanent redirects (301/308) do **NOT** inherently cause PageRank loss or link equity dilution (Google Webmaster Trends Analysts John Mueller and Gary Illyes have explicitly confirmed 3xx redirects pass 100% PageRank).
- **True Costs of 2-Hop Redirects:**
  1. Additional round-trip network latency (approx. 50–150ms per hop on mobile/satellite).
  2. Crawl budget friction: Googlebot must process two redirect hops before reaching final HTML.
- **Classification:** **P2 TECHNICAL CLEANUP** (not P1 Critical).

### Risk Analysis of Implementing a Fix
- Vercel's edge routing applies `"trailingSlash": false` globally at the CDN edge before evaluating serverless functions, middleware, or filesystem rewrites.
- Attempting to bypass this with custom regex matching or edge middleware introduces severe risk of redirect loops, canonical header mismatches, or regression across the 48 verified clean canonical routes.
- **Definitive Recommendation:** **LEAVE ALONE.** The 2-hop chain is functional, terminates at HTTP 200, and is vastly safer than modifying edge routing during an active SEO recovery freeze.

---

## 3. Phase G: Timeline & Causality Reconstruction

To establish root-cause attribution without speculation, we must divide the visibility decline into two distinct hypotheses based on Search Console date telemetry:

```
[Timeline Scenario A: Drop Began BEFORE Sep 17]
Sep 10 -------- Sep 13 (Cloudflare Block) -------- Sep 17 (410 Deletion)
   |                    |                                 |
   |                    +--> [ORIGINAL DROP CAUSE]         +--> [RECOVERY IMPEDIMENT]
   +--> Initial Traffic       Crawl blocked, GSC drop           Killed 484 impressions;
                              begins here.                      prevented recovery.

[Timeline Scenario B: Drop Began ON/AFTER Sep 17]
Sep 13 ------------------------------------------ Sep 17 (410 Deletion + Migration)
                                                          |
                                                          +--> [DIRECT PRIMARY CAUSE]
                                                               Sudden removal of /best-iptv
                                                               (484 imp) + 7 player migrations
                                                               caused sudden ranking cliff.
```

### Scenario A: Traffic Drop Pre-Dates September 17
- **Evidence:** Commit `53ff6c2` (Sep 13) confirms Cloudflare AI Crawl Control actively blocked search crawlers via robots.txt, causing indexation delays and crawl failures.
- **Causal Role of `/best-iptv` Deletion:**
  - If rankings dropped between Sep 11 and Sep 14, the deletion of `/best-iptv` (which happened on Sep 17) **could NOT have been the initial cause**.
  - However, deleting `/best-iptv` on Sep 17 acted as a **POST-DROP RECOVERY RISK / IMPEDIMENT**: purging a page with ~484 impressions and ~14 clicks prevented organic visibility from recovering once the crawler block was lifted.

### Scenario B: Traffic Drop Occurred On or After September 17
- **Evidence:** Commit `a739400` purged `/best-iptv` with a hard `HTTP 410 Gone` and migrated 7 player URLs simultaneously.
- **Causal Role of `/best-iptv` Deletion:**
  - If Search Console shows a sharp cliff starting Sep 17–18, this action is the **PRIMARY DIRECT CAUSE**. Google immediately purged the URL upon receiving HTTP 410, eliminating all 484 impressions and associated clicks overnight, while player URL migrations triggered temporary re-indexing turbulence.

---

## 4. Phase H: Search Console Evidence Status & Classifications

### Search Console Evidence Parameters
- **External Verified Metrics for `/best-iptv`:**
  - Clicks: ~14
  - Impressions: ~484
  - Average Position: ~23.9
- **Query Distribution:** **NOT VERIFIED in repository files.**
  - We cannot confirm the breakdown between generic comparison queries (`best iptv`), player queries (`best iptv player`), or branded terms (`teleview best iptv`).
  - Consequently, we cannot assume any existing single page (like `/iptv-subscription`) satisfies the exact query blend that drove those 484 impressions.

### Rigorous Evidentiary Classifications

| Factor | Evidentiary Status | Forensic Summary |
|---|---|---|
| **Purge of `/best-iptv` (HTTP 410 Gone)** | **CONFIRMED ACTION**<br>*(Primary Driver if drop ≥ Sep 17; Major Recovery Impediment if drop < Sep 17)* | Purged 4,450 words of content and ~484 impressions. Tells Googlebot to immediately de-index the page. |
| **Player URLs Migration (`/best-iptv/*` -> `/iptv-players/*`)** | **CONFIRMED ACTION**<br>*(Likely Transitional Driver)* | 7 URLs migrated with 308 redirects. Temporarily disrupts ranking during index re-evaluation. |
| **Trailing-Slash Redirect Chains** | **CONFIRMED DEFECT**<br>*(Minor P2 Cleanup; Negligible Impact)* | 2-hop redirect on trailing slashes. No PageRank dilution; slight crawl/latency friction. |
| **Cloudflare Managed Robots Block (Sep 13)** | **CONFIRMED HISTORICAL DEFECT**<br>*(Primary Driver if drop occurred Sep 11–14)* | Crawlers blocked at edge before being resolved in `ca7a258`. |
| **Technical Core SEO (Canonical, Sitemap, SSG DOM)** | **CONFIRMED CLEAN**<br>*(Not Supported as Drop Factor)* | 100% pass across all 14 test suites; 48 canonical URLs verified live. |
| **Exact Query Distribution of `/best-iptv`** | **NOT VERIFIED** | External data confirms ~484 impressions, but query-level breakdown is absent from repo. |
| **Google Manual Actions or Spam Penalties** | **NOT VERIFIED** | Requires manual inspection of GSC Security & Manual Actions tab. |
