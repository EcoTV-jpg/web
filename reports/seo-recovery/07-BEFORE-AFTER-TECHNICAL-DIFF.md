# Technical & Content Diff Forensics (September 4 vs September 5–6)

**Audit Scope:** Direct technical, architectural, and content comparison between the pre-collapse baseline (`14f9332`, September 4) and subsequent staging and migration commits (`cb0ef19`, `700e62e`, `ca28dcd`, `453aa56`).  
**Subject Assets:** The 6 verified historical Google Search Console assets:
1. `/best-iptv/iptv-smarters-pro`
2. `/best-iptv/ibo-player`
3. `/best-iptv`
4. `/best-iptv/vlc`
5. `/best-iptv/tivimate`
6. `/best-iptv/gse-smart-iptv`
**Standard Principle:** Rule #1 — No Hallucinations. Every diff and table is extracted from git commits.

---

## 1. Asset-by-Asset Before & After Diff Matrix

### Asset 1: `/best-iptv/iptv-smarters-pro`

| Technical Dimension | BEFORE Drop (`14f9332` — Sep 4, 20:08) | STAGED on Sep 5 (`cb0ef19` — 02:11) | LIVE Production on Sep 5–6 |
| :--- | :--- | :--- | :--- |
| **Canonical Path** | `/best-iptv/iptv-smarters-pro` | `/iptv-players/iptv-smarters-pro` | `/best-iptv/iptv-smarters-pro` |
| **HTTP Status** | `200 OK` (Static pre-rendered HTML) | `308 Permanent Redirect` (on `/best-iptv/*`) | `200 OK` (Serving commit `14f9332`) |
| **Redirect Destination** | None | `/iptv-players/iptv-smarters-pro` | None |
| **Canonical Tag** | `https://www.teleview.me/best-iptv/iptv-smarters-pro` | `https://www.teleview.me/iptv-players/iptv-smarters-pro` | `https://www.teleview.me/best-iptv/iptv-smarters-pro` |
| **Page Title** | IPTV Smarters Pro: Setup, Features & Supported Devices \| Teleview | Identical | Identical |
| **H1 Heading** | IPTV Smarters Pro: Features, Setup & Supported Devices | Identical | Identical |
| **Meta Description** | Complete guide to IPTV Smarters Pro across Android, iOS, Firestick... | Identical | Identical |
| **Robots Tag** | `index, follow, max-image-preview:large...` | Identical | Identical |
| **Breadcrumbs** | `Home > Best IPTV Players > IPTV Smarters Pro` | `Home > IPTV Players > IPTV Smarters Pro` | `Home > Best IPTV Players > IPTV Smarters Pro` |
| **Sitemap Presence** | Included in `sitemap.xml` (`2026-09-04`) | **REMOVED** from sitemap (replaced by `/iptv-players/*`) | Included in `sitemap.xml` |
| **Inbound Internal Links** | **3 inbound links** (from `/best-iptv`, etc.) | **0 inbound links** (Complete starvation) | **3 inbound links** |
| **JSON-LD Schema** | `@type: TechArticle` + `BreadcrumbList` | `@type: TechArticle` + `BreadcrumbList` | `@type: TechArticle` + `BreadcrumbList` |

---

### Asset 2: `/best-iptv/ibo-player`

| Technical Dimension | BEFORE Drop (`14f9332` — Sep 4, 20:08) | STAGED on Sep 5 (`cb0ef19` — 02:11) | LIVE Production on Sep 5–6 |
| :--- | :--- | :--- | :--- |
| **Canonical Path** | `/best-iptv/ibo-player` | `/iptv-players/ibo-player` | `/best-iptv/ibo-player` |
| **HTTP Status** | `200 OK` (Static pre-rendered HTML) | `308 Permanent Redirect` | `200 OK` |
| **Redirect Destination** | None | `/iptv-players/ibo-player` | None |
| **Canonical Tag** | `https://www.teleview.me/best-iptv/ibo-player` | `https://www.teleview.me/iptv-players/ibo-player` | `https://www.teleview.me/best-iptv/ibo-player` |
| **Page Title** | IBO Player: IPTV Setup & Compatible Smart TVs \| Teleview | Identical | Identical |
| **H1 Heading** | IBO Player: Smart TV Setup, Features & Device Activation | Identical | Identical |
| **Meta Description** | Guide to installing and activating IBO Player on Samsung Tizen and LG webOS... | Identical | Identical |
| **Robots Tag** | `index, follow...` | Identical | Identical |
| **Breadcrumbs** | `Home > Best IPTV Players > IBO Player` | `Home > IPTV Players > IBO Player` | `Home > Best IPTV Players > IBO Player` |
| **Sitemap Presence** | Included in `sitemap.xml` | **REMOVED** from sitemap | Included in `sitemap.xml` |
| **Inbound Internal Links** | **2 inbound links** | **0 inbound links** (Complete starvation) | **2 inbound links** |
| **JSON-LD Schema** | `@type: TechArticle` + `BreadcrumbList` | `@type: TechArticle` + `BreadcrumbList` | `@type: TechArticle` + `BreadcrumbList` |

---

### Asset 3: `/best-iptv`

| Technical Dimension | BEFORE Drop (`14f9332` — Sep 4, 20:08) | STAGED on Sep 5 (`cb0ef19`) / Sep 6 (`08066bc`) | LIVE Production on Sep 5–6 |
| :--- | :--- | :--- | :--- |
| **Canonical Path** | `/best-iptv` | `/best-iptv` | `/best-iptv` |
| **HTTP Status** | `200 OK` | `200 OK` | `200 OK` |
| **Canonical Tag** | `https://www.teleview.me/best-iptv` | `https://www.teleview.me/best-iptv` | `https://www.teleview.me/best-iptv` |
| **Page Title** | `Best IPTV Players & Apps in 2026 \| Teleview` | `Best IPTV Services in 2026: Comparison & Buying Guide \| Teleview` *(Sep 6)* | `Best IPTV Players & Apps in 2026 \| Teleview` |
| **H1 Heading** | `Best IPTV Players & Apps` | `Best IPTV Services in 2026` *(Sep 6)* | `Best IPTV Players & Apps` |
| **Meta Description** | Compare the best IPTV players in 2026. Verified features, platform compatibility... | Compare IPTV services in 2026 using practical criteria for streaming stability... *(Sep 6)* | Compare the best IPTV players in 2026... |
| **Primary Intent** | Commercial Investigation & IPTV Player Comparison | Editorial Comparison (Sep 5) → Dual Pillar (Sep 6) → Buying Guide (Sep 6) | Player Comparison |
| **Primary Keyword** | `best IPTV players` | `best IPTV service and best IPTV players` (Sep 6) | `best IPTV players` |
| **Content Word Count** | ~1,650 words (App directory + comparison) | ~4,450 words (Expanded to 19 sections in `08066bc`) | ~1,650 words |
| **Sitemap Presence** | Included in `sitemap.xml` | Included in `sitemap.xml` | Included in `sitemap.xml` |
| **Inbound Internal Links** | **15 inbound links** | **3 inbound links** (Lost 80% on Sep 5) → 6 links (Sep 6) | **15 inbound links** |
| **JSON-LD Schema** | `Article` + `FAQPage` + `BreadcrumbList` | `Article` + `FAQPage` (6 items) + `BreadcrumbList` | `Article` + `FAQPage` + `BreadcrumbList` |

---

### Asset 4: `/best-iptv/vlc`

| Technical Dimension | BEFORE Drop (`14f9332` — Sep 4, 20:08) | STAGED on Sep 5 (`cb0ef19`) | LIVE Production on Sep 5–6 |
| :--- | :--- | :--- | :--- |
| **Canonical Path** | `/best-iptv/vlc` | `/iptv-players/vlc` | `/best-iptv/vlc` |
| **HTTP Status** | `200 OK` | `308 Permanent Redirect` | `200 OK` |
| **Canonical Tag** | `https://www.teleview.me/best-iptv/vlc` | `https://www.teleview.me/iptv-players/vlc` | `https://www.teleview.me/best-iptv/vlc` |
| **Page Title** | VLC Media Player for IPTV: M3U Playback & Codec Setup \| Teleview | Identical | Identical |
| **H1 Heading** | VLC Media Player for IPTV: M3U Setup & Stream Diagnostics | Identical | Identical |
| **Sitemap Presence** | Included in `sitemap.xml` | **REMOVED** from sitemap | Included in `sitemap.xml` |
| **Inbound Internal Links** | **2 inbound links** | **0 inbound links** | **2 inbound links** |

---

### Asset 5: `/best-iptv/tivimate`

| Technical Dimension | BEFORE Drop (`14f9332` — Sep 4, 20:08) | STAGED on Sep 5 (`cb0ef19`) | LIVE Production on Sep 5–6 |
| :--- | :--- | :--- | :--- |
| **Canonical Path** | `/best-iptv/tivimate` | `/iptv-players/tivimate` | `/best-iptv/tivimate` |
| **HTTP Status** | `200 OK` | `308 Permanent Redirect` | `200 OK` |
| **Canonical Tag** | `https://www.teleview.me/best-iptv/tivimate` | `https://www.teleview.me/iptv-players/tivimate` | `https://www.teleview.me/best-iptv/tivimate` |
| **Page Title** | TiviMate IPTV Player: Setup, Features & Compatible Devices \| Teleview | Identical | Identical |
| **H1 Heading** | TiviMate IPTV Player: Features, Setup & Compatibility | Identical | Identical |
| **Sitemap Presence** | Included in `sitemap.xml` | **REMOVED** from sitemap | Included in `sitemap.xml` |
| **Inbound Internal Links** | **2 inbound links** | **0 inbound links** | **2 inbound links** |

---

### Asset 6: `/best-iptv/gse-smart-iptv`

| Technical Dimension | BEFORE Drop (`14f9332` — Sep 4, 20:08) | STAGED on Sep 5 (`cb0ef19`) | LIVE Production on Sep 5–6 |
| :--- | :--- | :--- | :--- |
| **Canonical Path** | `/best-iptv/gse-smart-iptv` | `/iptv-players/gse-smart-iptv` | `/best-iptv/gse-smart-iptv` |
| **HTTP Status** | `200 OK` | `308 Permanent Redirect` | `200 OK` |
| **Canonical Tag** | `https://www.teleview.me/best-iptv/gse-smart-iptv` | `https://www.teleview.me/iptv-players/gse-smart-iptv` | `https://www.teleview.me/best-iptv/gse-smart-iptv` |
| **Page Title** | GSE Smart IPTV: Apple iOS, Apple TV Setup & Features \| Teleview | Identical | Identical |
| **H1 Heading** | GSE Smart IPTV: Features, Apple TV Setup & iOS Compatibility | Identical | Identical |
| **Sitemap Presence** | Included in `sitemap.xml` | **REMOVED** from sitemap | Included in `sitemap.xml` |
| **Inbound Internal Links** | **2 inbound links** | **0 inbound links** | **2 inbound links** |

---

## 2. Inbound Internal Link Graph Shift

Forensic calculation of inbound internal links across all `.tsx` components in the repository:

| Target URL | Commit `14f9332` (Sep 4) | Commit `cb0ef19` (Sep 5 02:11) | Commit `700e62e` (Sep 5 17:04) | Delta (`14f9332` → `cb0ef19`) |
| :--- | :---: | :---: | :---: | :---: |
| `/` (Homepage) | 1 | 2 | 2 | +1 |
| **`/best-iptv`** | **15** | **3** | **6** | **-80.0%** (-12 links) |
| **`/best-iptv/iptv-smarters-pro`** | **3** | **0** | **0** | **-100%** (Starved) |
| **`/best-iptv/ibo-player`** | **2** | **0** | **0** | **-100%** (Starved) |
| **`/best-iptv/tivimate`** | **2** | **0** | **0** | **-100%** (Starved) |
| `/iptv-subscription` | 19 | 22 | 26 | +3 |
| `/iptv-players` | 0 | 19 | 21 | +19 (New hub) |
| `/iptv-players/iptv-smarters-pro`| 0 | 3 | 3 | +3 |
| `/iptv-players/ibo-player` | 0 | 2 | 2 | +2 |
| `/iptv-players/tivimate` | 0 | 2 | 2 | +2 |

### Finding on Internal Links
In commit `cb0ef19`, **all 5 top-performing historical player URLs lost 100% of their internal inbound links**, and `/best-iptv` lost **80% of its internal links**, as equity was redirected to `/iptv-players/*`.

---

## 3. Robots.txt History & Googlebot Verification

We extracted and compared the exact `public/robots.txt` content across every commit from September 3 through September 14:

| Date | Commit Hash | Googlebot Rule | Googlebot-Image Rule | Google-Extended Rule | AI Scrapers Rule | Disallow Directives | Was Googlebot Blocked? |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- | :---: |
| **Sep 03** | `d5e7ddb` | `Allow: /` | `Allow: /` | `Allow: /` | `Allow: /` | None | **NO** |
| **Sep 03** | `7f52acb` | `Allow: /` | `Allow: /` | `Allow: /` | `Allow: /` | None | **NO** |
| **Sep 04** | `0aa4218` | `Allow: /` | `Allow: /` | `Allow: /` | `Allow: /` | None | **NO** |
| **Sep 04** | `14f9332` | `Allow: /` | `Allow: /` | `Allow: /` | `Allow: /` | None | **NO** |
| **Sep 05** | `cb0ef19` | `Allow: /` | `Allow: /` | `Allow: /` | `Allow: /` | None | **NO** |
| **Sep 06** | `ca28dcd` | `Allow: /` | `Allow: /` | `Allow: /` | `Allow: /` | None | **NO** |
| **Sep 07** | `d652d3d` | `Allow: /` | `Allow: /` | `Allow: /` | `Allow: /` | None | **NO** |
| **Sep 10** | `1b8e24e` | `Allow: /` | `Allow: /` | `Allow: /` | `Allow: /` | None | **NO** |
| **Sep 13** | `53ff6c2` | `Allow: /` | `Allow: /` | Disallowed on Cloudflare | Disallowed on Cloudflare | Conflicting Cloudflare Managed block for AI bots only | **NO (Googlebot NEVER blocked)** |

### Definitive Finding on Robots
1. **Googlebot was NEVER blocked at any time in `robots.txt`** (always explicitly `User-agent: Googlebot Allow: /` or covered by `User-agent: * Allow: /`).
2. The Cloudflare incident on September 13 applied solely to **AI crawlers** (`Amazonbot`, `Applebot-Extended`, `Bytespider`, `CCBot`, `ClaudeBot`, `Google-Extended`, `GPTBot`, `meta-externalagent`).
3. **Google-Extended is Google's Gemini training crawler, NOT Googlebot (Search crawler).**
4. Blocking Google-Extended has **zero impact on Google Search indexing**.
5. Therefore, robots.txt blocking is **100% ruled out as a cause of the September 5→6 collapse**.

---

## 4. Mass Metadata Change Forensics (Commit `4d53d1b` — Sep 4, 18:01)

Exactly 2 hours before commit `14f9332`, commit `4d53d1b` executed a **site-wide metadata rewrite** touching 18 routes in `src/routes.ts`:

- **Affected URLs:** 18 URLs simultaneously.
- **Before Example (`/` Homepage):**
  - Title: `Teleview | Premium IPTV Subscription | 25,000+ Channels & 4K Sports`
  - H1: `Best IPTV Service in 2026`
  - Intent: Not registered.
- **After Example (`/` Homepage):**
  - Title: `Teleview – Best IPTV Service in 2026 | 25,000+ Live Channels & 4K Sports`
  - H1: `Best IPTV Service in 2026`
  - Intent: `Navigational & Brand Proposition`
  - Primary Keyword: `best IPTV service 2026`
  - Secondary Topics: `["premium IPTV provider", "4K sports IPTV", "anti-freeze streaming", "Xtream Codes M3U", "multi-device TV service"]`
- **Before Example (`/pricing`):**
  - Primary Keyword: `IPTV pricing`
- **After Example (`/pricing`):**
  - Redirected to `/iptv-subscription`; later keyword marked as `legacy-pricing-redirect`.
