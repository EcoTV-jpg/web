# Migration Forensics & Historical Asset Mapping (Phase 3 & Phase 4)

**Date:** 2026-09-18  
**Analysis:** Migration from `/best-iptv/*` to `/iptv-players/*` and retirement of `/best-iptv`

---

## 1. Complete Migration Matrix for Player Cluster

Every historical player URL under `/best-iptv/` was individually tested on the live production environment (`https://www.teleview.me`).

| Historical URL | Live HTTP Status | Location Header | Final Destination | Final HTTP | Final Canonical | Final Meta Robots | In Sitemap? | Inbound Internal Links | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| `/best-iptv/tivimate` | **308** | `/iptv-players/tivimate` | `/iptv-players/tivimate` | **200 OK** | `https://www.teleview.me/iptv-players/tivimate` | `index, follow...` | **NO** (0) | **0** | ✅ PASS (Single Hop) |
| `/best-iptv/iptv-smarters-pro` | **308** | `/iptv-players/iptv-smarters-pro` | `/iptv-players/iptv-smarters-pro` | **200 OK** | `https://www.teleview.me/iptv-players/iptv-smarters-pro` | `index, follow...` | **NO** (0) | **0** | ✅ PASS (Single Hop) |
| `/best-iptv/ibo-player` | **308** | `/iptv-players/ibo-player` | `/iptv-players/ibo-player` | **200 OK** | `https://www.teleview.me/iptv-players/ibo-player` | `index, follow...` | **NO** (0) | **0** | ✅ PASS (Single Hop) |
| `/best-iptv/smartone` | **308** | `/iptv-players/smartone` | `/iptv-players/smartone` | **200 OK** | `https://www.teleview.me/iptv-players/smartone` | `index, follow...` | **NO** (0) | **0** | ✅ PASS (Single Hop) |
| `/best-iptv/gse-smart-iptv` | **308** | `/iptv-players/gse-smart-iptv` | `/iptv-players/gse-smart-iptv` | **200 OK** | `https://www.teleview.me/iptv-players/gse-smart-iptv` | `index, follow...` | **NO** (0) | **0** | ✅ PASS (Single Hop) |
| `/best-iptv/vlc` | **308** | `/iptv-players/vlc` | `/iptv-players/vlc` | **200 OK** | `https://www.teleview.me/iptv-players/vlc` | `index, follow...` | **NO** (0) | **0** | ✅ PASS (Single Hop) |
| `/best-iptv/ott-navigator` | **308** | `/iptv-players/ott-navigator` | `/iptv-players/ott-navigator` | **200 OK** | `https://www.teleview.me/iptv-players/ott-navigator` | `index, follow...` | **NO** (0) | **0** | ✅ PASS (Single Hop) |

---

## 2. Trailing Slash Edge Cases & Redirect Chains

### Observed Behavior (Production Curl Evidence):
When requesting the historical player URLs with a trailing slash (e.g. `https://www.teleview.me/best-iptv/tivimate/`):
- **Hop 1:** `https://www.teleview.me/best-iptv/tivimate/` → **HTTP 308** (Location: `/best-iptv/tivimate`)
- **Hop 2:** `https://www.teleview.me/best-iptv/tivimate` → **HTTP 308** (Location: `/iptv-players/tivimate`)
- **Hop 3:** `https://www.teleview.me/iptv-players/tivimate` → **HTTP 200 OK**

### Finding:
- **Status:** **CONFIRMED 2-hop redirect chain** for trailing-slash variants of legacy redirected URLs.
- **Root Cause:** Vercel edge normalizer (`trailingSlash: false` in `vercel.json`) intercepts trailing slashes before custom redirect rules or middleware execute, redirecting `/[path]/` to `/[path]` before the rule redirects `/[path]` to `/[target]`.
- **Severity:** **P1** — Redirect chains dilute PageRank transfer and slow crawler discovery of migrated endpoints.

---

## 3. Special Case Forensics: `/best-iptv`

### Live Production Response (curl evidence):
```text
HTTP/2 410 Gone
x-robots-tag: noindex, nofollow
cache-control: public, max-age=31536000, immutable
```

### Git & Codebase Investigation:
1. **Commit `a739400`:** `BestIptvHubPage.tsx` (1,357 lines) was completely deleted, and `/best-iptv` was configured to return a hard **HTTP 410 Gone** via edge middleware and serverless fallback.
2. **Prior Strategy Rationale:** `reports/seo/BEST-IPTV-RESEARCH-AND-STRATEGY.md` indicates that previous engineers believed `/best-iptv` was an affiliate-style listicle that ranked Teleview #1 against competitors, which they feared violated Google Review System guidelines. They removed the page and attempted to merge the `best IPTV` intent into `/iptv-subscription`.
3. **Search Console Evidence Check:**
   - There are **ZERO** Google Search Console CSV, JSON, or API exports in the repository.
   - We cannot verify what specific queries, clicks, or impressions `/best-iptv` historically held prior to deletion.
4. **Classification:** **INSUFFICIENT DATA.**
5. **Action:** **KEEP CURRENT STATE (HTTP 410 Gone)** and flag for human review. Do not guess or alter without explicit Search Console data from the user.
