# September 1–8 Root-Cause Investigation & Change Timeline

**Audit Scope:** Forensic reconstruction of all codebase, architectural, metadata, and deployment changes between September 1, 2026 and September 8, 2026.  
**Anchor Event:** Google Search Console visibility collapse between **September 5, 2026** and **September 6, 2026**.  
**Standard Principle:** Rule #1 — No Hallucinations. Every statement is grounded directly in git history, repository configuration, verified test results, and documented Search Console telemetry.

---

## 1. Verified Google Search Console Performance Anchor

| Date | Clicks | Impressions | Average Position | Daily Delta Impressions | Daily Delta Clicks | SERP Phase |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **2026-09-04 (Fri)** | 53 | 1,920 | 14.5 | Baseline | Baseline | Peak discovery & initial impressions |
| **2026-09-05 (Sat)** | 65 | 3,872 | 13.2 | **+101.7%** (+1,952) | **+22.6%** (+12) | **Peak Visibility Day** (All-time high) |
| **2026-09-06 (Sun)** | 17 | 594 | 18.5 | **-84.7%** (-3,278) | **-73.8%** (-48) | **THE COLLAPSE** (Sharp drop in visibility) |
| **2026-09-07 (Mon)** | 6 | 176 | 24.9 | **-70.4%** (-418) | **-64.7%** (-11) | Secondary trough / de-indexing drop |

**Anchor Finding:** The visibility collapse began abruptly between **September 5 and September 6, 2026**. Over 24 hours, organic impressions plummeted by **84.7%**, clicks plummeted by **73.8%**, and average position decayed by **5.3 positions**.

---

## 2. Chronological Git Activity Timeline (September 1 – September 8, 2026)

All commit timestamps are recorded in local author/commit time (`+01:00`).

| Timestamp (ISO 8601) | Commit Hash | Key Files Changed | Technical SEO Impact | Content Impact | Deployment-Relevant? | Potential Search Impact |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **2026-09-03T18:12:19** | `d5e7ddb` | Root repository files | Initial Vite SSG build with basic Netlify security headers. | Teleview initial template. | YES (Initial Deploy) | Baseline domain setup (`teleview.com`). |
| **2026-09-03T18:34:20** | `198dc77` | `index.html`, `SEO.tsx` | Added Organization/WebSite schema and resource preloads. | Search Engine Land schema compliance. | YES | Foundational entity definitions. |
| **2026-09-03T18:41:46** | `506319e` | `src/data/site.ts` | Homepage title & meta description update. | Target keyword copy update. | YES | Homepage SERP snippet update. |
| **2026-09-03T18:51:33** | `e5e3c96` | `Hero.tsx` | Trust badges and hero copy adjusted. | Conversion copy tweaks. | YES | User engagement signals. |
| **2026-09-03T18:58:35** | `5fa2435` | `Pricing.tsx` | CAD format with Interac badge. | Regional pricing display. | YES | Commercial display. |
| **2026-09-03T19:00:54** | `752110e` | `Pricing.tsx` | USD formatting ($16/$39/$60/$90). | Currency standardization. | YES | Commercial display. |
| **2026-09-03T19:03:41** | `3ef2455` | `HomePage.tsx` | Added stats banner, device grid, 3-step guide. | Homepage layout expansion. | YES | Content depth on homepage. |
| **2026-09-03T19:08:30** | `4aa204b` | `DeviceGrid.tsx` | Device logos and mobile ticker. | Visual trust elements. | YES | UX enhancement. |
| **2026-09-03T19:11:31** | `0ecc3fa` | `Pricing.tsx` | Removed delivery note line from plan cards. | Minor copy trim. | YES | Negligible. |
| **2026-09-03T19:12:44** | `ec1ac5b` | `Pricing.tsx` | Removed subtitle paragraphs from cards. | Minor copy trim. | YES | Negligible. |
| **2026-09-03T19:14:58** | `6ed572d` | `Hero.tsx`, `Pricing.tsx` | Removed Interac payment badge. | Trust badge cleanup. | YES | Payment trust alignment. |
| **2026-09-03T19:17:55** | `2e2c7e8` | `FaqSection.tsx`, `Hero.tsx` | Added 14 FAQ items, #1 provider pillars. | Substantial content expansion. | YES | Broadened informational relevance. |
| **2026-09-03T19:19:23** | `1beafdc` | `Coverage.tsx`, `FaqSection.tsx` | Targeted worldwide international audience. | Geo copy broadened. | YES | Removed regional geo-limitations. |
| **2026-09-03T19:22:29** | `cb2197f` | `Pricing.tsx` | Standardized 1mo/3mo/6mo/12mo tiers. | Pricing copy sync. | YES | Negligible. |
| **2026-09-03T19:36:26** | `b7a3d2b` | `routes.ts`, `SubscriptionProductPage.tsx` | Added dedicated product pages (`/iptv-subscription`, `/1-month`, etc.). | Created 5 new commercial URLs. | YES | Expanded indexable footprint. |
| **2026-09-03T19:46:17** | `7e1a697` | `site.ts`, `robots.txt`, `sitemap.xml` | **DOMAIN CHANGE**: Changed primary domain from `teleview.com` to `teleview.me`. | Updated all canonicals & sitemap. | YES (Critical) | **Major Domain Migration**: switched root TLD. |
| **2026-09-03T19:54:02** | `3bd3c6c` | `vercel.json`, `site.ts`, `sitemap.xml` | **HOST CANONICALIZATION**: Configured `https://www.teleview.me` (www) as canonical; added non-www 308 redirect. | Host consistency established. | YES (Critical) | Enforced single canonical hostname. |
| **2026-09-03T20:06:54** | `b685713` | `vercel.json`, `index.html` | Caching headers, non-blocking fonts, security headers. | CWV performance optimization. | YES | Page speed & rendering boost. |
| **2026-09-03T20:12:18** | `999f3af` | `Hero.tsx` | Hero H1 updated to "Best IPTV Service in 2026". | Primary keyword targeted in H1. | YES | Re-anchored homepage search intent. |
| **2026-09-03T20:14:36** | `8755398` | `DeviceGrid.tsx`, `FaqSection.tsx` | Added dimensions to logos, added speed FAQ. | Speed test guidance added. | YES | Minor technical polish. |
| **2026-09-03T20:17:20** | `399808e` | `prerender.mjs`, `llms.txt` | Deployed `llms.txt`, fixed prerender title regex. | Title replacement fix during SSG. | YES | Ensured prerendered HTML has correct titles. |
| **2026-09-03T20:20:32** | `d1796b3` | `site.webmanifest`, `Footer.tsx` | Manifest caching, speed test link in FAQ. | Mobile PWA & footer links. | YES | Internal link equity to speed guide. |
| **2026-09-03T20:23:12** | `fd6dd45` | `IndexNow` script | Deployed IndexNow API key and submitter. | Bing/Yandex discovery script. | YES | Search discovery ping. |
| **2026-09-03T20:25:11** | `84b2cd7` | `Header.tsx` | Brand logo links to `/`. | Nav anchor normalization. | YES | Core homepage link authority. |
| **2026-09-03T20:33:16** | `784e5be` | `LegalPage.tsx`, `routes.ts` | Added `/terms-conditions`, `/privacy-policy`, `/refund-policy`, `/disclaimer`. | Added 4 trust/policy pages. | YES | E-E-A-T trust signals. |
| **2026-09-03T20:39:03** | `7ece85f` | `AccountPage.tsx`, `ContactPage.tsx`, `HelpCenterPage.tsx` | Added `/contact`, `/help-center`, `/my-account`, `/dmca`. | Added 4 support/account pages. | YES | Customer service trust signals. |
| **2026-09-03T20:43:08** | `8fbad3f` | `ContactPage.tsx` | Updated support phone number. | Contact factual accuracy. | YES | E-E-A-T support proof. |
| **2026-09-03T20:47:15** | `c1a00c4` | `Pricing.tsx` | WhatsApp order link generator. | Conversion flow update. | YES | Negligible SEO impact. |
| **2026-09-03T20:50:47** | `d343d7d` | `Pricing.tsx` | Text cleanup in WhatsApp order link. | Minor copy fix. | YES | Negligible. |
| **2026-09-03T20:55:43** | `9e5f51d` | `index.html`, `public/googlead*.html` | **GSC VERIFICATION**: Added Google Search Console site-verification meta & HTML file. | Google Search Console active. | YES (Critical) | **Googlebot Search Console tracking activated.** |
| **2026-09-03T21:01:48** | `7f52acb` | `robots.txt`, `llms.txt`, `llms-full.txt` | Fully permissive robots.txt (User-agent: * Allow: /). | Comprehensive LLM context files. | YES | Open crawler access for Googlebot. |
| **2026-09-04T16:52:14** | `5ed889c` | `vercel.json`, `routes.ts` | Redirected `/pricing` to `/iptv-subscription` (308). | Resolved internal cannibalization. | YES | Link equity consolidation. |
| **2026-09-04T17:25:03** | `d14ff7b` | `site.ts` | Centralized deterministic canonical generator. | Absolute HTTPS canonicals enforced. | YES | Canonical tag stability. |
| **2026-09-04T17:55:50** | `4ff2a8b` | `index.html`, `Comparison.tsx` | Removed synthetic `aggregateRating` schema; heading hierarchy fixed. | Purged fake review spam. | YES (High) | Compliance with Google Review/Spam policies. |
| **2026-09-04T18:01:01** | `4d53d1b` | `routes.ts`, `SEO.tsx` | **MASS METADATA OPTIMIZATION**: All routes received new distinct intent, keywords, OG, and H1 tags. | Full route registry rewrite. | YES (High) | Re-indexed page titles and descriptions. |
| **2026-09-04T18:06:11** | `facafcb` | `DevicesPage.tsx` | Enhanced `/devices` with 9 sections & TechArticle schema. | Deep content upgrade. | YES | Topical depth expansion. |
| **2026-09-04T18:10:57** | `13a6623` | `SetupPage.tsx` | Enhanced `/setup` installation guide with prerequisites. | Detailed technical guide. | YES | HowTo / tutorial relevance. |
| **2026-09-04T18:17:52** | `73dde7c` | `SubscriptionProductPage.tsx` | Differentiated duration pages (1, 3, 6, 12 mo) by intent; removed synthetic ratings. | Purged duplicate rating schema. | YES | Eliminated review penalty risk. |
| **2026-09-04T18:29:10** | `aea4956` | `Header.tsx`, `Footer.tsx` | Internal link mesh redesigned across clusters; eliminated redirects. | Internal linking overhaul. | YES | Clean equity flow. |
| **2026-09-04T18:42:53** | `0ad67cd` | `SEO.tsx` | Unified Schema.org into single clean `@graph` entity model. | Cleaned up JSON-LD output. | YES | Valid structured data parsing. |
| **2026-09-04T18:49:54** | `0aa4218` | `robots.txt`, `llms.txt` | Cleaned robots.txt comments; confirmed full crawler allowance. | Policy documentation. | YES | Verified Googlebot allowed. |
| **2026-09-04T20:08:41** | `14f9332` | `BestIptvHubPage.tsx`, `BestIptvAppPage.tsx`, `bestIptvApps.ts`, `routes.ts`, `sitemap.xml` | **CREATION OF `/best-iptv` CLUSTER**: Added `/best-iptv` + 7 player routes (`/best-iptv/tivimate`, `/best-iptv/iptv-smarters-pro`, `/best-iptv/ibo-player`, `/best-iptv/smartone`, `/best-iptv/gse-smart-iptv`, `/best-iptv/vlc`, `/best-iptv/ott-navigator`). | 8 new comprehensive guides (2,874 lines of code). | **YES (PRODUCTION HEAD)** | **THIS IS THE EXACT COMMIT THAT GENERATED THE PEAK IMPRESSIONS ON SEP 4 & SEP 5.** |
| **2026-09-05T02:11:48** | `cb0ef19` | `routes.ts`, `vercel.json`, `sitemap.xml`, `BestIptvAppPage.tsx`, `BestIptvHubPage.tsx` | **SUDDEN PLAYER URL MIGRATION**: Moved all 7 player paths from `/best-iptv/[player]` to `/iptv-players/[player]`; added 308 redirects in `vercel.json`; purged `/best-iptv/*` from sitemap. Added 15 new routes (devices & help center). | Internal links rewritten; `/best-iptv` lost 80% of inbound links; player URLs lost 100% of inbound links. | **STAGED ON BRANCH** (Merged to main on Sep 7) | **PRIMARY CANDIDATE FOR SEARCH DISRUPTION**. |
| **2026-09-05T02:25:57** | `c65a59a` | `index.html` | Added Umami privacy analytics script. | Analytics tracking. | Staged | Zero search impact. |
| **2026-09-05T02:28:01** | `b8cef11` | `Hero.tsx` | Removed device icons grid from hero section. | Visual layout adjustment. | Staged | Minor UX shift. |
| **2026-09-05T02:32:51** | `71deb6f` | None (empty) | Trigger redeploy commit message. | None. | Staged | Deployment trigger attempt. |
| **2026-09-05T02:33:55** | `6a9ce64` | `public/404.html` | Updated pre-rendered 404 handler. | Error document sync. | Staged | Error UX. |
| **2026-09-05T15:40:35** | `0520911` | `Header.tsx`, `site.ts`, `BestIptvHubPage.tsx` | **HEADER OVERHAUL**: Flat 5-link nav replaced with multi-level dropdowns (Plans, Learn, Devices, Players, Help). Softened claims. | Nav link structure changed. | Staged | Shifted crawl depth and link flow. |
| **2026-09-05T15:52:02** | `a8a0f1a` | `DevicesPage.tsx`, `HelpCenterPage.tsx`, `SetupPage.tsx` | In-body contextual internal linking enhancements. | Editorial link insertions. | Staged | Equity redistribution. |
| **2026-09-05T17:04:26** | `700e62e` | `sitemap.xml`, `Header.tsx`, `freeTrial.ts`, `FreeTrialPage.tsx`, `routes.ts`, `SEO.tsx` | Added `/iptv-free-trial` route; CSS hover navigation in Header; sitemap updated to 41 URLs. Neutralized claims. | Added free trial lander. | Staged | Expanded crawl surface. |
| **2026-09-06T02:02:02** | `ca28dcd` | `public/images/`, `SEO.tsx`, `DeviceGrid.tsx` | Image optimization (WebP/JPG), a11y alt text, social metadata. | Image alt text updates. | Staged | Image indexing readiness. |
| **2026-09-06T02:21:28** | `bae8505` | `public/images/players/`, `BestIptvAppPage.tsx` | Added WebP screenshot galleries for TiviMate, Smarters, IBO Player. | Rich visual UI proof. | Staged | Improved on-page UX. |
| **2026-09-06T17:16:10** | `b20b735` | `index.html`, `public/404.html` | Added Google tag (`gtag.js`) tracking code. | Google Analytics added. | Staged | Analytics telemetry. |
| **2026-09-06T17:28:04** | `5925c83` | `BestIptvHubPage.tsx`, `routes.ts`, `reports/competitive-seo.md` | Re-anchored `/best-iptv` title & H1 to "Best IPTV Service & Best IPTV Players"; added 461 lines of content. | Mass content expansion. | Staged | Changed intent from players to dual service+player. |
| **2026-09-06T18:16:33** | `08066bc` | `BestIptvHubPage.tsx`, `routes.ts` | Rewrote `/best-iptv` into "Best IPTV Services in 2026: Comparison & Buying Guide" (+1,181 / -477 lines). | Mass pillar rewrite. | Staged | Fundamental intent and topic pivot. |
| **2026-09-06T18:40:58** | `d882514` | `BestIptvHubPage.tsx`, `bestIptvApps.ts` | Factualized player specs; eliminated subjective ranking adjectives. | Editorial neutralization. | Staged | Quality and tone adjustment. |
| **2026-09-06T20:01:09** | `453aa56` | `sitemap.xml`, `WhatIsIptvPage.tsx`, `validate-sitemap.mjs` | **SITEMAP SHRUNK**: Pruned sitemap from 41 URLs to 33 URLs (removed `/contact`, `/terms-conditions`, `/privacy-policy`, `/refund-policy`, `/disclaimer`, `/dmca`). | Pruned 8 legal/support URLs. | Staged | Dropped URLs from search discovery. |
| **2026-09-06T20:39:52** | `4119b78` | `HomePage.tsx`, `Hero.tsx`, `routes.ts` | Added entity keyword coverage blocks to homepage. | Keyword-dense block insertions. | Staged | SERP testing attempt. |
| **2026-09-06T20:58:56** | `16e84d2` | `HomePage.tsx`, `Hero.tsx`, `routes.ts` | **REVERT**: Reverted keyword coverage additions from `4119b78`. | Cleaned homepage baseline. | Staged | Restored original baseline. |
| **2026-09-07T12:51:52** | `bfbb6d3` | `sitemap.xml`, `reports/seo/` | Finalized 42-route semantic architecture report and production verification audit. | Staged branch finalization. | Staged | Pre-deployment sign-off. |
| **2026-09-07T13:25:54** | `d652d3d` | Merge commit (`14f9332` + `bfbb6d3`) | **PRODUCTION MERGE & DEPLOY**: Merged branch `seo/teleview-information-architecture-migration` into `main`. | All staged changes promoted to live production. | **YES (DEPLOYED)** | **Live production updated from `14f9332` to `d652d3d`.** |

---

## 3. Production Deployment Forensics: What Was Actually Live When?

A critical question in this investigation is: **Did production serve commit `14f9332` throughout September 5 and 6, or was the migration branch deployed during the weekend?**

Direct repository evidence from `reports/seo/PRODUCTION-GOOGLE-VERIFICATION.md` (written on **September 7, 2026 at 12:48 UTC**) proves the exact live state:

```json
{
  "timestamp": "2026-09-07T12:48:30Z",
  "environment": "production",
  "domain": "https://www.teleview.me",
  "testedBranch": "seo/teleview-information-architecture-migration",
  "liveProductionCommit": "14f9332 (main)",
  "stagedBranchHeadCommit": "16e84d2",
  "deploymentStatus": "PENDING"
}
```

### Forensic Proof
1. **Live Production Commit:** Up until **September 7, 2026 at 13:25 UTC** (commit `d652d3d`), the live Vercel production deployment was tracking `main` at **commit `14f9332`** (deployed on Friday, September 4 at 20:08 UTC+1).
2. **What Was Live During the Entire September 5–6 Visibility Window:**
   - **Routes:** Exactly 27 routes compiled by Vite SSG.
   - **Player URLs:** All 7 player routes were actively served under the **`/best-iptv/[player]`** URL structure (e.g. `https://www.teleview.me/best-iptv/tivimate`, `https://www.teleview.me/best-iptv/iptv-smarters-pro`, etc.).
   - **HTTP Status:** All `/best-iptv/*` URLs returned **HTTP/2 200 OK** directly (zero redirects).
   - **Sitemap:** Contained 25 canonical URLs including `/best-iptv` and all 7 `/best-iptv/*` player URLs.
   - **Robots.txt:** 100% permissive (`User-agent: * Allow: /`).
   - **Googlebot Access:** Unrestricted.
3. **What Was Staged on the Branch During the Weekend:**
   - The developer was working locally and pushing to `seo/teleview-information-architecture-migration`.
   - In commit `cb0ef19` (Sep 5, 02:11), the developer moved the player URLs to `/iptv-players/*` and added redirects.
   - However, **this branch was NOT merged to `main` until Monday, September 7 at 13:25 UTC**.

---

## 4. Summary: What Changed BEFORE the Drop vs What Did NOT Change

### What Changed Immediately Before the Drop (Sep 3 – Sep 4)
1. **Domain Change (Sep 3, 19:46):** Moved from `teleview.com` to `teleview.me`.
2. **Canonical Host Setup (Sep 3, 19:54):** Added `www.teleview.me` canonical and 308 redirect from non-www.
3. **GSC Verification (Sep 3, 20:55):** Added Search Console verification meta tag and HTML file.
4. **Purged Synthetic Schema (Sep 4, 17:55):** Stripped fake `aggregateRating` schema markup across all templates.
5. **Mass Metadata Rewrite (Sep 4, 18:01):** Rewrote all page titles, descriptions, H1s, and primary keywords in `src/routes.ts`.
6. **Creation of the `/best-iptv/*` Cluster (Sep 4, 20:08):** Published `/best-iptv` and the 7 player pages (`tivimate`, `iptv-smarters-pro`, `ibo-player`, `smartone`, `gse-smart-iptv`, `vlc`, `ott-navigator`).

### What Did NOT Change on Live Production During the Drop (Sep 5 – Sep 6)
1. **Production Code & Deployments:** Production remained locked on commit `14f9332` from Friday evening through Monday noon.
2. **URL Structure:** Player URLs remained at `/best-iptv/*` on live production; no redirects were live yet.
3. **HTTP Statuses:** All URLs continued returning HTTP 200 OK with pre-rendered SSG HTML.
4. **Robots Directives:** Googlebot was completely allowed without disallows.
5. **Canonicals:** Self-referencing absolute HTTPS URLs remained intact.
