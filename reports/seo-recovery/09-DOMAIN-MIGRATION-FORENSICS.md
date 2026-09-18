# Teleview SEO Recovery Forensics: Domain Migration & Host Configuration

**Document ID:** `09-DOMAIN-MIGRATION-FORENSICS`  
**Date:** September 18, 2026  
**Auditor:** Senior Technical SEO Recovery Engineer & Search Migration Specialist  
**Production Canonical Target:** `https://www.teleview.me/`  
**Status:** FORENSIC EVIDENCE REPORT (RECOVERY FREEZE ACTIVE)

---

## Executive Summary

This report establishes the verified technical facts regarding the alleged September 3 domain migration from `teleview.com` to `teleview.me`. By cross-referencing repository git commit history, DNS resolution records, live HTTP server headers, SSL handshakes, and canonical schemas, this investigation conclusively determines:

1. **`teleview.com` was NEVER a public production Teleview IPTV domain.** It was a temporary boilerplate placeholder in git commit `d5e7ddb` (Sep 3, 18:12 UTC+1) that was replaced 94 minutes later in commit `7e1a697` (Sep 3, 19:46 UTC+1).
2. **`teleview.com` is owned by an entirely unrelated entity**, resolving to Google Workspace / Google Sites hosting (`216.239.36.21`), serving a corporate website titled *"Our Company"* (`a/teleview.com/home/home`), and returning HTTP 404 for all IPTV-related paths.
3. **No 301/308 redirects exist between `teleview.com` and `teleview.me`.** Because Teleview does not control `teleview.com`, no redirect migration occurred or could have occurred between these domains.
4. **All 4 host variants for `teleview.me` resolve correctly** to the canonical target `https://www.teleview.me/`.
5. **Canonicals and Schema entity IDs migrated cleanly** within git history with zero stale `teleview.com` strings remaining anywhere in the repository.

---

## Phase 1 — Identification of the True Old Domain

### Git History & Configuration Forensics

| Timestamp (UTC+1) | Commit | Author | Commit Message | Files Touched | Configured Domain |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **2026-09-03 18:12:12** | `d5e7ddb` | luxiptv | *feat: complete production Teleview website with SEO and Netlify security hardening* | Initial commit (77 files) | `https://teleview.com` |
| **2026-09-03 19:46:25** | `7e1a697` | luxiptv | *fix(domain): change primary domain from teleview.com to teleview.me across site configuration, HTML metadata, sitemap, robots, and SEO tests* | 6 files | `https://teleview.me` |
| **2026-09-04 02:04:19** | `3bd3c6c` | luxiptv | *feat(seo): configure canonical www hostname https://www.teleview.me and Vercel non-www permanent redirect* | 5 files | `https://www.teleview.me` |

### Detailed Code Diff in Commit `d5e7ddb` vs `7e1a697`

In `d5e7ddb` (`src/config/site.ts`):
```typescript
export const siteConfig = {
  url: "https://teleview.com",
  sitemapUrl: "https://teleview.com/sitemap.xml",
  entityIds: {
    organization: "https://teleview.com/#organization",
    website: "https://teleview.com/#website",
    webpage: "https://teleview.com/#webpage",
    product: "https://teleview.com/#product",
    brand: "https://teleview.com/#brand",
  },
};
```

In `7e1a697` (`src/config/site.ts`):
```typescript
export const siteConfig = {
  url: "https://teleview.me",
  sitemapUrl: "https://teleview.me/sitemap.xml",
  entityIds: {
    organization: "https://teleview.me/#organization",
    website: "https://teleview.me/#website",
    webpage: "https://teleview.me/#webpage",
    product: "https://teleview.me/#product",
    brand: "https://teleview.me/#brand",
  },
};
```

### DNS & Infrastructure Ownership Check

Live DNS query results:
```text
teleview.com:
  A: 216.239.36.21 (Google Hosted IP)
  MX: 10 ASPMX.L.GOOGLE.com (Google Workspace Mail)

teleview.me:
  A: 172.67.202.216, 104.21.52.184 (Cloudflare CDN / Vercel Edge)
  MX: 0 mx1.spacemail.com (Namecheap Private Email)
```

### Domain Status Classification

> **CLASSIFICATION: CONFIG-ONLY OLD DOMAIN (NOT VERIFIED AS A PUBLIC TELEVIEW DOMAIN)**  
> There is zero evidence that Teleview IPTV was ever hosted on or owned `teleview.com`. The presence of `teleview.com` in git commit `d5e7ddb` was purely a temporary code boilerplate string that persisted in local development for 1 hour and 34 minutes before being corrected to `teleview.me`.

---

## Phase 2 — Old Domain Redirect Map Probes

Live HTTP curl probes were executed against `teleview.com` using representative IPTV paths:

| Test URL | HTTP Status Chain | Final Effective URL | Final HTTP Code | Notes |
| :--- | :--- | :--- | :---: | :--- |
| `http://teleview.com/` | `301` → `301` → `200` | `https://www.teleview.com/` | `200` | Google Sites "Our Company" page |
| `https://teleview.com/` | Failed | `https://teleview.com/` | `000` | `CURL 35`: SSL handshake failure on apex |
| `https://www.teleview.com/` | Direct | `https://www.teleview.com/` | `200` | Google Sites frontend (`sites-viewer-frontend`) |
| `https://www.teleview.com/best-iptv` | Direct | `https://www.teleview.com/best-iptv` | `404` | Unrelated Google Sites 404 |
| `https://www.teleview.com/best-iptv/iptv-smarters-pro` | Direct | `https://www.teleview.com/best-iptv/iptv-smarters-pro` | `404` | Unrelated Google Sites 404 |
| `https://www.teleview.com/iptv-subscription` | Direct | `https://www.teleview.com/iptv-subscription` | `404` | Unrelated Google Sites 404 |
| `https://www.teleview.com/pricing` | Direct | `https://www.teleview.com/pricing` | `404` | Unrelated Google Sites 404 |
| `https://www.teleview.com/devices` | Direct | `https://www.teleview.com/devices` | `404` | Unrelated Google Sites 404 |

### Redirect Analysis
- **Old URL → teleview.me Redirects:** **NONE.** No redirects exist from `teleview.com` to `teleview.me`.
- **Redirect Chains:** Inapplicable between domains.
- **Verdict:** Teleview did **not** migrate organic equity or URLs from `teleview.com`. Any hypothesis that organic visibility collapsed due to broken redirects from `teleview.com` is **FACTUALLY REFUTED**.

---

## Phase 3 — Host Variant Resolution Audit

All 8 theoretical host variants across both domains were systematically tested:

### 1. `teleview.com` Variants
| Variant | Live Behavior | Status |
| :--- | :--- | :---: |
| `http://teleview.com` | `301` → `http://www.teleview.com` → `301` → `https://www.teleview.com/` | 200 (Google Sites) |
| `https://teleview.com` | SSL Handshake failure (`exit code 35`) | N/A |
| `http://www.teleview.com` | `301` → `https://www.teleview.com/` | 200 (Google Sites) |
| `https://www.teleview.com` | Direct 200 | 200 (Google Sites) |

### 2. `teleview.me` Variants (Production Target)
| Variant | Live Behavior | Status | Quality Assessment |
| :--- | :--- | :---: | :--- |
| `http://teleview.me` | `301` → `https://teleview.me/` → `308` → `https://www.teleview.me/` | 200 | Clean resolution (2 standard hops: HTTP→HTTPS, Apex→WWW) |
| `https://teleview.me` | `308` → `https://www.teleview.me/` | 200 | Clean direct permanent redirect (1 hop) |
| `http://www.teleview.me` | `301` → `https://www.teleview.me/` | 200 | Clean direct permanent redirect (1 hop) |
| `https://www.teleview.me` | Direct 200 OK | 200 | **CANONICAL TARGET (0 hops)** |

### Host Variant Verdict
All variants of `teleview.me` resolve cleanly and deterministically to `https://www.teleview.me/`. There are no infinite redirect loops, mixed HTTP/HTTPS canonical declarations, or non-resolving production variants.

---

## Phase 5 — Canonical & Schema History Forensics

### Repository Code Search
A full repository audit (`git grep -i "teleview\.com"`) returned **0 matches**.

### Canonical Tag & Schema Evolution

1. **Sep 3, 18:12 (`d5e7ddb`):**
   - Config set to `https://teleview.com`.
   - Never deployed to a public DNS record pointing to Teleview.
2. **Sep 3, 19:46 (`7e1a697`):**
   - Config updated to `https://teleview.me`.
   - All Schema `@id` attributes updated to `https://teleview.me/#organization`, `https://teleview.me/#website`, etc.
3. **Sep 4, 02:04 (`3bd3c6c`):**
   - Config updated to `https://www.teleview.me`.
   - All Schema `@id` attributes and canonical generators standardized to `https://www.teleview.me/#...`.
4. **Current Repository State (`ea3c5e8`):**
   - All canonical tags strictly emit `https://www.teleview.me/[slug]`.
   - Schema graph strictly emits `https://www.teleview.me/#website` and `https://www.teleview.me/#organization`.
   - OpenGraph `og:url` tags match canonical tags exactly.
   - Zero stale references to `teleview.com` exist.

---

## Phase 6 — Google Search Console Change of Address

Because `teleview.com` was not an owned domain of Teleview, a Google Search Console Change of Address tool submission between `teleview.com` and `teleview.me` was **technically impossible** (requires verified ownership of both properties).

### Status: NOT VERIFIED / NOT APPLICABLE
- **Change of Address used for `teleview.com` → `teleview.me`:** **NOT VERIFIED / NOT APPLICABLE** (Different domain owners).
- **Human Verification Required in GSC:**
  1. Check whether any previous domain property existed (e.g. an earlier `.com`, `.org`, or `.tv` domain previously used by Teleview's operators).
  2. In Google Search Console, navigate to:  
     `Settings` → `Change of Address`  
     Verify whether any site move request is pending, active, or was ever submitted for `https://www.teleview.me/`.

---

## Phase 7 — Old Domain Search Console Data Requirements

The GSC dataset provided by the user represents `https://www.teleview.me/` between September 4 and September 7, 2026. If the business operated on a prior domain before September 3, human verification of that prior domain's Search Console property is mandatory:

### Required Human Evidence:
1. **Prior Property Performance Export:**
   - **Date Range:** August 15, 2026 – September 15, 2026.
   - **Dimensions:** Date, Page, Query, Clicks, Impressions, CTR, Position.
2. **Core Forensic Questions:**
   - Did impressions/clicks on the prior domain drop simultaneously as `teleview.me` rose?
   - Did the prior domain suffer an algorithmic penalty or manual action prior to September 3?
   - Did `teleview.me` launch from absolute zero organic impressions on September 1–3?
