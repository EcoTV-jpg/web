# Teleview SEO Recovery Forensics: Old vs. New URL Architecture & Cluster Publication

**Document ID:** `10-OLD-NEW-URL-MAP`  
**Date:** September 18, 2026  
**Auditor:** Senior Technical SEO Recovery Engineer & Search Migration Specialist  
**Production Canonical Target:** `https://www.teleview.me/`  
**Status:** FORENSIC EVIDENCE REPORT (RECOVERY FREEZE ACTIVE)

---

## Executive Summary

This report maps the exact evolution of Teleview's URL inventory across the critical September 3–7 launch and migration window. It rigorously delineates two distinct architectural events that occurred within 48 hours of each other:

1. **The Domain Configuration Migration (September 3):** A config-level switch from boilerplate `teleview.com` (4 URLs) to `teleview.me` (9 URLs), preserving 100% of existing paths with 0 deletions.
2. **The Information Architecture Migration (September 4–7):** The creation of the `/best-iptv/*` player cluster (8 URLs) in commit `14f9332` on Friday, September 4 at 20:08 UTC+1, followed by a branch-staged restructuring to `/iptv-players/*` in commit `cb0ef19` on September 5 (which remained unmerged on production until September 7).
3. **Player Cluster Classification:** All 6 historical assets that generated the 3,872 impressions in Google Search Console on September 5 were **BRAND-NEW URLs** created in commit `14f9332`. They were not migrated from earlier URLs.

---

## Phase 4 — Old and New Sitemaps Forensic Comparison

### Event A: The September 3 Domain Migration Sitemaps

Comparison between commit `d5e7ddb` (Sep 3, 18:12 UTC+1) and commit `7e1a697` (Sep 3, 19:46 UTC+1):

| Old URL (`teleview.com`) | New Equivalent URL (`teleview.me`) | Path Preserved? | Status | Redirect Exists on Domain? |
| :--- | :--- | :---: | :---: | :---: |
| `https://teleview.com/` | `https://teleview.me/` | YES | Exact replacement | NO (Unrelated domain) |
| `https://teleview.com/setup` | `https://teleview.me/setup` | YES | Exact replacement | NO (Unrelated domain) |
| `https://teleview.com/devices` | `https://teleview.me/devices` | YES | Exact replacement | NO (Unrelated domain) |
| `https://teleview.com/faq` | `https://teleview.me/faq` | YES | Exact replacement | NO (Unrelated domain) |
| *(None)* | `https://teleview.me/iptv-subscription` | N/A | **ADDED (New URL)** | N/A |
| *(None)* | `https://teleview.me/iptv-subscription/1-month` | N/A | **ADDED (New URL)** | N/A |
| *(None)* | `https://teleview.me/iptv-subscription/3-months` | N/A | **ADDED (New URL)** | N/A |
| *(None)* | `https://teleview.me/iptv-subscription/6-months` | N/A | **ADDED (New URL)** | N/A |
| *(None)* | `https://teleview.me/iptv-subscription/12-months` | N/A | **ADDED (New URL)** | N/A |

#### Event A Metrics:
- **Number of Old Canonical URLs:** 4
- **Number of Exact-Path Replacements:** 4 (100% path parity)
- **Number of Removed URLs:** 0
- **Number of Newly Created URLs:** 5

---

### Event B: The September 4–5 Information Architecture Sitemaps

On Friday, September 4 at 20:08 UTC+1 (`14f9332`), the sitemap expanded to 25 URLs by introducing the `/best-iptv/*` player cluster. On Saturday, September 5 at 02:11 UTC+1 (`cb0ef19`), the branch staged 40 URLs moving players to `/iptv-players/*`:

| Commit `14f9332` URL (Sep 4, 20:08) | Commit `cb0ef19` URL (Sep 5, 02:11) | Path Preserved? | Migration Type | Redirect Configured? |
| :--- | :--- | :---: | :--- | :---: |
| `https://www.teleview.me/` | `https://www.teleview.me/` | YES | Unchanged | N/A |
| `https://www.teleview.me/best-iptv` | `https://www.teleview.me/best-iptv` | YES | Preserved (Hub) | N/A |
| `https://www.teleview.me/best-iptv/iptv-smarters-pro` | `https://www.teleview.me/iptv-players/iptv-smarters-pro` | NO | Path Changed | 308 configured in `vercel.json` |
| `https://www.teleview.me/best-iptv/ibo-player` | `https://www.teleview.me/iptv-players/ibo-player` | NO | Path Changed | 308 configured in `vercel.json` |
| `https://www.teleview.me/best-iptv/vlc` | `https://www.teleview.me/iptv-players/vlc` | NO | Path Changed | 308 configured in `vercel.json` |
| `https://www.teleview.me/best-iptv/tivimate` | `https://www.teleview.me/iptv-players/tivimate` | NO | Path Changed | 308 configured in `vercel.json` |
| `https://www.teleview.me/best-iptv/gse-smart-iptv` | `https://www.teleview.me/iptv-players/gse-smart-iptv` | NO | Path Changed | 308 configured in `vercel.json` |
| `https://www.teleview.me/best-iptv/ott-navigator` | `https://www.teleview.me/iptv-players/ott-navigator` | NO | Path Changed | 308 configured in `vercel.json` |
| `https://www.teleview.me/best-iptv/smartone` | `https://www.teleview.me/iptv-players/smartone` | NO | Path Changed | 308 configured in `vercel.json` |
| *(None)* | `https://www.teleview.me/iptv-players` | N/A | **ADDED (New Hub)** | N/A |
| *(None)* | 8 Device Guide URLs (`/devices/*`) | N/A | **ADDED (New Cluster)**| N/A |
| *(None)* | 6 Help Center URLs (`/help-center/*`)| N/A | **ADDED (New Cluster)**| N/A |
| *(None)* | `https://www.teleview.me/what-is-iptv`| N/A | **ADDED (New Guide)**| N/A |

#### Key Distinction:
> **DOMAIN MIGRATION vs. INFORMATION ARCHITECTURE MIGRATION**  
> Both migrations occurred within 36 hours of each other. The Domain Migration occurred on September 3 (changing hostname config from `teleview.com` to `teleview.me`). The Information Architecture Migration occurred between September 4 (`14f9332`) and September 5 (`cb0ef19`), restructuring content paths from `/best-iptv/[player]` to `/iptv-players/[player]`.

---

## Phase 10 — New Player Cluster Publication Forensics

A central question is whether the player pages that generated 3,872 impressions on September 5 were migrated from an older section of the site or were newly created URLs.

### URL Genesis Table

| Ranking Asset in GSC Export | First Git Appearance | Commit Timestamp | Status | Prior Path in Repository |
| :--- | :--- | :--- | :---: | :---: |
| `/best-iptv/iptv-smarters-pro` | Commit `14f9332` | 2026-09-04 20:08:24 UTC+1 | **NEW URL** | None (Did not exist) |
| `/best-iptv/ibo-player` | Commit `14f9332` | 2026-09-04 20:08:24 UTC+1 | **NEW URL** | None (Did not exist) |
| `/best-iptv` | Commit `14f9332` | 2026-09-04 20:08:24 UTC+1 | **NEW URL** | None (Did not exist) |
| `/best-iptv/vlc` | Commit `14f9332` | 2026-09-04 20:08:24 UTC+1 | **NEW URL** | None (Did not exist) |
| `/best-iptv/tivimate` | Commit `14f9332` | 2026-09-04 20:08:24 UTC+1 | **NEW URL** | None (Did not exist) |
| `/best-iptv/gse-smart-iptv` | Commit `14f9332` | 2026-09-04 20:08:24 UTC+1 | **NEW URL** | None (Did not exist) |

### Search Phenomenon Characterization
- These URLs were **NOT** long-standing historical URLs that lost rankings due to an old domain migration.
- They were **BRAND-NEW URLs** published on Friday evening, September 4.
- The 3,872 impressions recorded on Saturday, September 5 represent:
  > **NEW SEARCH VISIBILITY ON RECENTLY PUBLISHED URLs**
- This visibility was rapidly generated as Googlebot crawled the new sitemap, discovered the high-intent commercial player guides, and initially indexed them.

---

## Phase 11 — External Backlink Migration

### Repository Artifact Search
A comprehensive filesystem and commit search for backlink data (`*backlink*`, `*referring*`, `*links*.csv`) yielded **0 files**.

### Status Classification: NOT VERIFIED

| Asset Cluster | Inbound External Backlinks Documented in Repo? | Status |
| :--- | :---: | :---: |
| `teleview.com` | No | **NOT VERIFIED** |
| `https://www.teleview.me/` | No | **NOT VERIFIED** |
| `https://www.teleview.me/best-iptv/*` | No | **NOT VERIFIED** |

### Human Verification Requirement:
1. In Google Search Console, navigate to: `Links` → `Top linked pages` (External links).
2. Export the external backlink table for `https://www.teleview.me/`.
3. Check whether any high-authority external backlinks pointed to `/best-iptv/*` or if external links point to an old unredirected third-party domain.
