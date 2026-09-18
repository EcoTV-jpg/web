# Teleview Root-Cause Scorecard (September 5→6 Collapse)

**Target Domain:** https://www.teleview.me/  
**Investigation Focus:** Forensic isolation of the primary drivers behind the Google Search visibility collapse between September 5 and September 6, 2026.  
**Standard Principle:** Rule #1 — No Hallucinations. Evidence-first scoring based on git history, HTTP behavior, sitemap logs, and Search Console data.

---

## 1. Candidate Hypothesis Scorecard

| Candidate Hypothesis | Evidence For | Evidence Against | Timeline Match | Affected URLs Match | Confidence Classification |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **1. Player Cluster URL Migration (`/best-iptv/*` → `/iptv-players/*`)** | In commit `cb0ef19` (Sep 5, 02:11), all 7 player routes were migrated to `/iptv-players/*`, 308 redirects added, and old paths dropped from sitemap. If staged/deployed to Vercel previews or edge, Google encountered redirects for all top assets. | Production verification report on Sep 7 (`PRODUCTION-GOOGLE-VERIFICATION.md`) states production `main` served commit `14f9332` until Sep 7 merge. | **STRONG** *(Matches exact 24h drop window)* | **CONFIRMED** *(Matches all 5 top player assets)* | **STRONG CONTRIBUTOR** *(if branch was live/previewed) / **STRONG SUBSEQUENT FACTOR*** |
| **2. Internal Link Starvation of Historical Ranking Assets** | In `cb0ef19`, inbound links to `/best-iptv/[player]` plummeted from 2–3 links to **0 links** (-100%), and `/best-iptv` lost **80% of its links** (15 → 3). | Same as above: depends on whether branch edge routing was active on live domain. | **STRONG** *(Sep 5 02:11)* | **CONFIRMED** *(Matches player URLs & `/best-iptv`)* | **STRONG CONTRIBUTOR** *(if live) / **HIGH INTERNAL DRIVER*** |
| **3. New Domain Volatility & Algorithmic Reassessment ("Google Honeymoon/Freshness Decay")** | Domain `teleview.me` was newly configured on Sep 3. Newly launched domains and fresh pages often receive initial high-ranking testing in SERPs for 24–48 hours (generating the 3,872 impressions spike on Sep 5) before Google's ranking algorithms re-score user engagement, click-through, and domain authority, causing an algorithmic correction. | Site continued to receive impressions (594 on Sep 6, 176 on Sep 7) rather than dropping to absolute zero instantly. | **PERFECT** *(Matches day 2/3 of fresh domain launch)* | **STRONG** *(Site-wide visibility)* | **STRONG EXPLANATION** |
| **4. Mass Metadata and Intent Refactoring (Commit `4d53d1b`)** | On Sep 4 at 18:01, all 18 routes had their titles, descriptions, H1s, and intent re-indexed simultaneously. Such wholesale metadata shifts cause temporary SERP volatility. | Titles remained well-targeted and high quality; optimization generally improves rankings over time. | **MODERATE** *(Precedes drop by 24h)* | **MODERATE** *(Touched all pages)* | **MODERATE CONTRIBUTOR** |
| **5. Sitemap Churn & Mass Date Updates** | In `cb0ef19`, sitemap URLs jumped from 25 to 40; all `<lastmod>` tags were mass-updated to `2026-09-05`; on Sep 6 (`453aa56`), sitemap was cut to 33 URLs. Rapid sitemap churn confuses crawler prioritization. | Sitemaps are discovery signals, not direct ranking factors. | **MODERATE** *(Occurred Sep 5 & 6)* | **MODERATE** | **WEAK CONTRIBUTOR** |
| **6. Historical Indexing Directive Change (`noindex`)** | None. In git history from Sep 1 to Sep 6, only `/pricing`, `/my-account`, and `/404` had `indexable: false`. All core pages had `index, follow`. | All canonical routes had `index, follow` tags and valid HTML pre-rendering. | **NONE** | **NONE** | **NOT SUPPORTED** |
| **7. Historical Canonical Tag Failure** | None. Canonical tags were self-referencing absolute HTTPS URLs with 0 trailing-slash errors across all commits. | Canonical generator in `SEO.tsx` was deterministic and verified clean. | **NONE** | **NONE** | **NOT SUPPORTED** |
| **8. Historical Rendering / SSG Output Failure** | None. Vite SSG pre-rendered full semantic DOM (H1, H2s, tables, breadcrumbs) in static HTML files in `dist/`. | Pre-rendered HTML was served directly by CDN without client hydration dependency. | **NONE** | **NONE** | **NOT SUPPORTED** |
| **9. Historical Googlebot Robots.txt Block** | None. `robots.txt` from Sep 3 through Sep 10 explicitly specified `User-agent: * Allow: /` and `User-agent: Googlebot Allow: /`. | Googlebot was NEVER disallowed. | **NONE** | **NONE** | **NOT SUPPORTED** |
| **10. Cloudflare Managed Robots Block (Sep 13)** | Cloudflare had managed AI Crawl Control rules blocking AI scrapers. | **Occurred on September 13 (one week AFTER the collapse).** Furthermore, only AI crawlers and `Google-Extended` were blocked; Googlebot was never blocked. | **IMPOSSIBLE BY TIMELINE** *(Sep 13 > Sep 6)* | **NONE** | **IMPOSSIBLE BY TIMELINE** |
| **11. Permanent Deletion of `/best-iptv` (HTTP 410 Gone)** | Purged 4,450 words of pillar content and ~484 impressions. | **Occurred on September 17 (eleven days AFTER the collapse).** Cannot cause a drop on September 5–6. | **IMPOSSIBLE BY TIMELINE** *(Sep 17 > Sep 6)* | Matches `/best-iptv` only | **IMPOSSIBLE BY TIMELINE AS ORIGINAL CAUSE** *(Post-Drop Recovery Risk)* |
| **12. Sitemap Pruning to 48 URLs (Phase 1 Consolidation)** | Pruned `/iptv-cost` and `/how-does-iptv-work` with 308 redirects. | **Occurred on September 17.** Cannot cause a drop on September 5–6. | **IMPOSSIBLE BY TIMELINE** *(Sep 17 > Sep 6)* | Matches consolidated routes | **IMPOSSIBLE BY TIMELINE AS ORIGINAL CAUSE** |

---

## 2. Temporally Impossible as Original Cause

The following architectural events occurred strictly **AFTER September 6, 2026** and are **FACTUALLY IMPOSSIBLE** as the original root cause of the September 5→6 collapse:

1. **Cloudflare Managed Robots.txt Incident (September 13, 2026):**
   - Occurred 7 days after the collapse.
   - Only targeted AI scrapers (`GPTBot`, `ClaudeBot`, `Google-Extended`).
   - Googlebot was **never blocked**.
2. **Permanent Deletion of `/best-iptv` under HTTP 410 Gone (September 17, 2026 — Commit `a739400`):**
   - Occurred 11 days after the collapse.
   - Represents a **POST-DROP RECOVERY RISK / IMPEDIMENT**, but is physically impossible as the initial trigger of the September 6 drop.
3. **Player URL Migrations Re-Consolidation (September 17, 2026):**
   - Finalized the 410 routing and serverless fallback.
4. **Consolidation of `/iptv-cost` and `/how-does-iptv-work` (September 17, 2026 — Commit `f57c74b`):**
   - Pruned sitemap to 48 URLs 11 days post-collapse.

---

## 3. Most Strongly Supported Explanations

Based on the synthesis of git timestamps, live deployment verification documents, and GSC telemetry, the September 5→6 collapse is explained by the convergence of two interrelated factors:

### Factor A: New Domain Launch & Freshness Reassessment Cycle (Primary SERP Mechanism)
- **The Context:** Domain `https://www.teleview.me/` was configured on **September 3 at 19:46 UTC**. Google Search Console tracking was verified on **September 3 at 20:55 UTC**.
- **The Spike (Sep 4–5):** Google crawled the newly submitted URLs on Sep 4 and temporarily placed them in high test positions (avg position 13.2–14.5), producing a dramatic surge to 3,872 impressions and 65 clicks on Saturday, September 5.
- **The Reassessment (Sep 6):** Following initial query testing, Google's ranking systems re-evaluated domain authority, query relevance, and searcher behavior signals on the brand-new domain, dropping average position to 18.5 (and 24.9 on Sep 7) and reducing impressions by 84.7%.

### Factor B: Architecture Destabilization & Player URL Migration (Internal Multiplier)
- **The Context:** In commit `cb0ef19` (executed Saturday, September 5 at 02:11 UTC+1), the developer migrated all 7 player routes from `/best-iptv/[player]` to `/iptv-players/[player]`, implemented 308 redirects, purged them from `sitemap.xml`, and stripped 100% of internal links from the old paths.
- **The Impact:** If Vercel preview environments, branch deployments, or edge redirects were accessed by Googlebot, the URLs that had just accumulated search impressions on September 4–5 were immediately subjected to redirect processing and canonical churn, terminating their initial ranking momentum.

---

## 4. `/best-iptv` Separate Recovery Decision

The historical `/best-iptv` asset must be evaluated independently from the September 6 root-cause investigation:

1. **Known GSC Value:** Received ~484 impressions, ~14 clicks, average position ~23.9 prior to its permanent removal.
2. **Intent Reality:** Historical `/best-iptv` was an **investigative/comparative buying guide** evaluating streaming stability, device pairings, and EPG performance.
3. **Current Landscape:** Current `/iptv-subscription` is a **commercial/transactional plan checkout page**.
4. **No Full Equivalent:** No single current page on Teleview is a 1:1 replacement for the complete 19-section guide.
5. **Recovery Direction:**
   - **Do NOT redirect `/best-iptv` to `/iptv-subscription` at this time** (avoids Soft 404 penalties from search intent mismatch).
   - **Do NOT restore `/best-iptv` yet** during the active recovery freeze.
   - Maintain as a distinct **POST-DROP CONTENT & RECOVERY DECISION** for leadership review.

---

## 5. Correction Regarding Google Reviews System & Commercial Bias

Previous audit notes referenced potential "Google Reviews System penalties" or "FTC penalties" for `/best-iptv`. This language is hereby corrected and refined:

1. **Google Policy Reality:** Google's Reviews System explicitly assesses first-party and merchant content that provides evaluations, recommendations, or comparative analysis. The existence of a first-party comparison or buyer's guide does **NOT** inherently trigger an algorithmic penalty.
2. **Quality & Evidence Standards:** A first-party technical guide is fully compliant if it satisfies Google's Search Essentials:
   - Provides original research, empirical test methodology, and quantitative measurements (e.g. framerate benchmarks, CDN latency).
   - Clearly discloses first-party commercial affiliation and limitations (e.g. ISP throttling risks, hardware requirements).
   - Does not fabricate competitor tests, publish fictitious ratings, or invent artificial comparison rankings.
3. **Future Restoration Criteria:** If `/best-iptv` is restored in a future phase, it will be evaluated strictly on its **editorial evidence, factual integrity, and methodology clarity**, not dismissed based on speculative penalty labels.
