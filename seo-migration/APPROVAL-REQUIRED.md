# SEO Migration Approval Gate — Action Items Requiring Human Review

**Project:** Teleview ([https://www.teleview.me](https://www.teleview.me))  
**Document:** `seo-migration/APPROVAL-REQUIRED.md`  
**Date:** 2026-09-05  
**Status:** PENDING HUMAN REVIEW (Strict Safety Protocol Active)

---

## Overview

In accordance with Section 1 (Absolute Safety Rule) and Section 39 (Approval Gate) of the Production SEO Migration Master Specification, **no destructive modifications, permanent 301 redirects, indexability removals, or sitemap purges may proceed without explicit human sign-off**.

This document outlines all strategic migration decisions categorized by risk level, providing the technical evidence base, risk assessment, and recommended course of action for each.

---

## 1. High-Risk URL Moves: Player Taxonomy Migration

### Proposed Action:
Migrate 7 player guide URLs from `/best-iptv/:slug` to `/iptv-players/:slug` via single-hop permanent 301 redirects:

1. `/best-iptv/tivimate` → `/iptv-players/tivimate`
2. `/best-iptv/iptv-smarters-pro` → `/iptv-players/iptv-smarters-pro`
3. `/best-iptv/ibo-player` → `/iptv-players/ibo-player`
4. `/best-iptv/smartone` → `/iptv-players/smartone`
5. `/best-iptv/gse-smart-iptv` → `/iptv-players/gse-smart-iptv`
6. `/best-iptv/vlc` → `/iptv-players/vlc`
7. `/best-iptv/ott-navigator` → `/iptv-players/ott-navigator`

### Risk Level:
**MEDIUM-HIGH**

### Evidence & Architectural Analysis:
- **Current State:** The 7 player pages are pre-rendered, 100% compliant with Schema.org TechArticle, included in sitemap.xml, and linked from `/best-iptv` and the footer.
- **Target State:** The master prompt information architecture establishes `/iptv-players/` as the dedicated player application taxonomy, reserving `/best-iptv/` strictly as a commercial comparison and discovery hub.
- **SEO Risk:** Any URL change incurs search engine discovery and re-indexing latency. Even with 301 redirects, temporary fluctuations in rankings or impressions can occur during the transition window.

### Recommended Safety Protocol:
- **Phase A (Structural):** Deploy `/iptv-players/:slug` with identical canonical and self-referencing content, configure 301 single-hop redirects in `vercel.json` and preview server, update all internal links across navigation, footer, comparison cards, and breadcrumbs to point directly to `200` targets (no internal links through redirects).
- **Phase B (Verification):** Validate that `/best-iptv/:slug` returns `301` and `/iptv-players/:slug` returns `200` with self-canonical and zero redirect chains.

**Sign-off required:** Approve execution of 301 player URL taxonomy move.

---

## 2. Sitemap Removal & Indexability Policy: `/my-account`

### Proposed Action:
Remove `/my-account` from `sitemap.xml` and add `noindex, follow` robots meta tag.

### Risk Level:
**MEDIUM**

### Evidence & Architectural Analysis:
- **Current State:** `/my-account` is configured in `src/routes.ts` as `indexable: true` with priority `0.7` and is currently included in `sitemap.xml`.
- **Target State:** Section 7 of the Master Specification explicitly mandates:
  > *"Private pages such as: `/my-account` must not be included in the sitemap unless deliberately indexable."*
- **SEO Risk:** Indexing utility or account lookup tools wastes crawl budget and can trigger "Thin Content" or "Soft 404" classifications in Google Search Console if no active user session exists.
- **Alternative Option:** Keep `/my-account` as a lightweight indexable landing page for navigational branded queries ("teleview account login", "teleview my subscription").

### Recommended Decision:
Set `/my-account` to `indexable: false` in `routes.ts`, exclude from `sitemap.xml`, and emit `<meta name="robots" content="noindex, follow" />`.

**Sign-off required:** Approve removal of `/my-account` from sitemap and transition to noindex.

---

## 3. Preservation of Product Duration Cluster: `/iptv-subscription/*`

### Proposed Action:
**KEEP** all 4 duration landing pages (`/iptv-subscription/1-month`, `3-months`, `6-months`, `12-months`) fully indexable and in the sitemap.

### Risk Level:
**LOW (HIGH if deleted)**

### Evidence & Architectural Analysis:
- **Current State:** These 4 routes represent high-intent commercial landing pages with 1,570–1,650 words each, verified Jaccard phrase differentiation (32%–35%), distinct Schema.org Product/Offer data, and high conversion utility.
- **Target Architecture Alignment:** The master architecture specifies `/iptv-subscription/`. Preserving the duration subpages under this parent directory directly supports intent-specific search queries ("1 month IPTV trial", "annual IPTV subscription") without cannibalization.
- **Safety Rule:** DO NOT DELETE, DO NOT MERGE, DO NOT REDIRECT.

**Sign-off required:** Confirm preservation of all 4 subscription duration pages.

---

## 4. Intent Boundary: `/best-iptv` vs. `/iptv-players`

### Proposed Action:
Create `/iptv-players/` as a technical application directory while retaining `/best-iptv/` as a commercial evaluation and comparison guide.

### Risk Level:
**LOW-MEDIUM**

### Evidence & Architectural Analysis:
- **Section 19 Directive:**
  > *"Keep `/best-iptv/` as a commercial/comparison-focused page. It must have clearly different intent from `/iptv-players/*`. Do not make `/best-iptv/` simply a parent folder for player guides."*
- **Differentiation Strategy:**
  - `/best-iptv/`: Targets broad comparative commercial search intent ("best IPTV players 2026", "what is the best app for IPTV"). Features side-by-side comparison tables, decision criteria, and high-level platform recommendations.
  - `/iptv-players/`: Targets software directory intent ("IPTV apps catalog", "media players for streaming"). Features operating system compatibility filters, protocol capability matrices (Xtream Codes, M3U, Stalker), and links to dedicated player guides.

**Sign-off required:** Confirm intent differentiation strategy between the two hubs.

---

## Summary of Gate Items

| # | Item / Route | Action Proposed | Default Safe Stance | Sign-Off Needed? |
| :- | :--- | :---: | :---: | :---: |
| 1 | `/best-iptv/:slug` (7 URLs) | 301 MOVE to `/iptv-players/:slug` | KEEP + REVIEW | **YES** |
| 2 | `/my-account` | NOINDEX + Remove from Sitemap | KEEP + REVIEW | **YES** |
| 3 | `/iptv-subscription/:duration` (4 URLs) | KEEP (Preserve indexable) | KEEP | **YES** |
| 4 | `/best-iptv` vs `/iptv-players` | BUILD `/iptv-players/` as distinct hub | BUILD | **YES** |
| 5 | Branch Merge | Merge from `seo/teleview-...` | ISOLATED BRANCH | **YES** |
