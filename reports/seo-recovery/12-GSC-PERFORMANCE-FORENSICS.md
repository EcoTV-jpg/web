# Google Search Console Performance Forensics: Deep Data Audit & Signal Attribution

**Document ID:** `12-GSC-PERFORMANCE-FORENSICS`  
**Date:** September 18, 2026  
**Auditor:** Senior Technical SEO Recovery Engineer & Search Console Analyst  
**Data Source:** Google Search Console Official XLSX Export (`https___www.teleview.me_-Performance-on-Search-2026-09-18.xlsx`)  
**Status:** EVIDENCE-GROUNDED PERFORMANCE REPORT (RECOVERY FREEZE ACTIVE)

---

## Executive Summary

This report performs a comprehensive performance forensic audit on the official Google Search Console export covering the lifecycle of `https://www.teleview.me/` from inception (**September 2, 2026**) through **September 15, 2026**.

Key findings:
1. **Insufficient Historical Baseline:** GSC records for `teleview.me` begin on **September 2, 2026** (0 impressions) and **September 3, 2026** (1 impression). There is **zero pre-existing historical baseline** in this property. September 5 (3,872 impressions) was the highest day visible in the supplied dataset, driven by brand-new URLs published on September 4.
2. **Date × Page Attribution Limitation:** The current GSC export does **not** contain Date × Page cross-tabulation. Therefore:
   > **THE CURRENT EXPORT CANNOT ATTRIBUTE THE SEPTEMBER 5 SPIKE TO INDIVIDUAL PAGES.**
3. **Observed Ranking Decline:** Between September 5 and September 7, site-wide average position deteriorated from **13.2 → 18.5 → 24.9**. This is an **OBSERVED RANKING DECLINE**; the underlying Google algorithmic mechanism is **NOT VERIFIED**.
4. **Dominance of Player Cluster:** Within the exported Pages table, legacy `/best-iptv/*` player URLs accounted for **73.7% of all recorded impressions** (5,594 / 7,592) and **63.2% of clicks** (103 / 163).
5. **Commercial & Free Trial Latent Intent:** `/iptv-free-trial` demonstrated an exceptional **11.05% CTR** (20 clicks, 181 impressions) even from deep average positions (pos 38.9), showing intense commercial demand.
6. **Technical State:** Current repository and production audits have **not identified a technical crawl/indexability defect sufficient to explain the September 5→6 decline**.

---

## 1. Dataset Integrity & Data Dictionary

### Export File Metadata
- **File Name:** `https___www.teleview.me_-Performance-on-Search-2026-09-18.xlsx`
- **File Format:** Microsoft Excel OpenXML Spreadsheet (.xlsx)
- **Active Search Console Property:** `https://www.teleview.me/`
- **Search Type Filter:** `Web`
- **Date Range Filter:** `Last 3 months` (Actual property active span: `2026-09-02` to `2026-09-15`)
- **Country / Device / Appearance Filters:** None applied.

### Data Dictionary & Sheet Inventory

| Sheet Name | Internal XML Ref | Total Data Rows | Columns Present | Scope & Aggregation Level |
| :--- | :--- | :---: | :--- | :--- |
| **Chart** | `sheet1.xml` | **14** | `Date`, `Clicks`, `Impressions`, `CTR`, `Position` | Site-level daily aggregates (Includes all anonymized traffic) |
| **Queries** | `sheet2.xml` | **1,000** | `Top queries`, `Clicks`, `Impressions`, `CTR`, `Position` | Top 1,000 queries aggregated over the entire 14-day date window |
| **Pages** | `sheet3.xml` | **47** | `Top pages`, `Clicks`, `Impressions`, `CTR`, `Position` | Top 47 URLs aggregated over the entire 14-day date window |
| **Countries** | `sheet4.xml` | **169** | `Country`, `Clicks`, `Impressions`, `CTR`, `Position` | Country distribution over the entire date window |
| **Devices** | `sheet5.xml` | **3** | `Device`, `Clicks`, `Impressions`, `CTR`, `Position` | Device distribution (Mobile, Desktop, Tablet) |
| **Search appearance** | `sheet6.xml` | **1** | `Search Appearance`, `Clicks`, `Impressions`, `CTR`, `Position` | Filter for `Product snippets` |
| **Filters** | `sheet7.xml` | **2** | `Filter`, `Value` | Search type (`Web`), Date (`Last 3 months`) |

### Site Totals vs. Table Row Totals (Anonymized Data Gap)

Google Search Console enforces strict privacy thresholds and row export limits:

| Dimension | Chart Total (Site Level) | Exported Table Sum | Variance / Anonymized Gap | % Accounted in Table |
| :--- | :---: | :---: | :---: | :---: |
| **Clicks** | **159** | **98** (Queries table) | **-61 clicks** | **61.6%** |
| **Impressions** | **6,926** | **4,169** (Queries table) | **-2,757 impressions** | **60.2%** |
| **Pages Table Clicks** | **159** | **163** (Pages table) | **+4 clicks** *(multi-page SERP count)* | **102.5%** |
| **Pages Table Impressions**| **6,926** | **7,592** (Pages table) | **+666 impressions** *(multi-page SERP)* | **109.6%** |

> [!IMPORTANT]
> **Analytical Rule:** Site-wide trends must be calculated from the **Chart** sheet. Individual query rows represent visible sampled queries; missing query rows represent anonymized queries filtered by Google, **not zero search demand**.

---

## 2. Daily Performance Forensics

### Daily Teleview Performance Table (September 2 – September 15, 2026)

| Date | Clicks | Impressions | CTR | Average Position | $\Delta$ Clicks | $\Delta$ Impressions | $\Delta$ Position | Significance / Event |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **2026-09-02** | 0 | 0 | — | — | — | — | — | Property inception / zero data |
| **2026-09-03** | 0 | 1 | 0.00% | 1.0 | 0 | +1 | — | Initial verification crawl |
| **2026-09-04** | 53 | 1,920 | 2.76% | 14.5 | +53 | +1,919 | — | Rapid discovery of site & new cluster |
| **2026-09-05** | **65** | **3,872** | **1.68%** | **13.2** | **+12** | **+1,952** | **+1.3** | **Highest day visible in dataset** |
| **2026-09-06** | **17** | **594** | **2.86%** | **18.5** | **-48** | **-3,278** | **-5.3** | **LARGEST IMPRESSION & CLICK DROP** |
| **2026-09-07** | **6** | **176** | **3.41%** | **24.9** | **-11** | **-418** | **-6.4** | **LARGEST POSITION DETERIORATION** |
| **2026-09-08** | 4 | 136 | 2.94% | 18.8 | -2 | -40 | +6.1 | Continued low-volume plateau |
| **2026-09-09** | 2 | 47 | 4.26% | 35.7 | -2 | -89 | -16.9 | Rank degradation across remaining terms |
| **2026-09-10** | 0 | 20 | 0.00% | 36.1 | -2 | -27 | -0.4 | Zero-click day |
| **2026-09-11** | 0 | 24 | 0.00% | 23.5 | 0 | +4 | +12.6 | Low impression fluctuation |
| **2026-09-12** | 0 | 33 | 0.00% | 24.4 | 0 | +9 | -0.9 | Low impression fluctuation |
| **2026-09-13** | 10 | 76 | 13.16% | 42.9 | +10 | +43 | -18.5 | **LARGEST CTR SURGE** (Free trial intent) |
| **2026-09-14** | 1 | 10 | 10.00% | 28.1 | -9 | -66 | +14.8 | Low volume tail |
| **2026-09-15** | 1 | 17 | 5.88% | 29.5 | 0 | +7 | -1.4 | Current baseline tail |

### Performance Change Analysis
- **Largest Impression Decline:** September 5 → September 6 (**-3,278 impressions**, **-84.7% drop**).
- **Largest Click Decline:** September 5 → September 6 (**-48 clicks**, **-73.8% drop**).
- **Largest Position Deterioration:** September 6 → September 7 (**-6.4 positions**, 18.5 → 24.9).
- **Largest CTR Surge:** September 12 → September 13 (**+13.16% CTR**, 10 clicks from 76 impressions on high-intent terms).

---

## 3. Spike vs. Baseline Assessment

> **OFFICIAL DETERMINATION: INSUFFICIENT HISTORICAL BASELINE**

### Evidence-Based Rationale:
1. **Zero Pre-September 4 History:** In the supplied GSC property, September 2 had 0 impressions and September 3 had 1 impression. The site has no documented history of 3,000+ daily impressions prior to September 4.
2. **Newly Published Asset Timing:** The `/best-iptv/*` player cluster driving this search volume was committed to the repository in `14f9332` on **Friday, September 4 at 20:08 UTC+1**.
3. **Observation:** September 5 was the **first full calendar day** after those URLs were deployed. Therefore, September 5 represents **NEW SEARCH VISIBILITY ON RECENTLY PUBLISHED URLs**, not a proven long-term historical baseline.
4. **Conclusion:** Whether September 5 was an abnormal temporary surge or September 6 was an unexpected drop from a stable state **cannot be proven** without Search Console data from prior months on any predecessor property.

---

## 4. Page-Level Asset Performance (Pages Sheet Analysis)

Across the entire 14-day reporting period, 47 distinct page paths recorded search impressions.

### Complete Priority URL Performance Matrix

| Page URL | Clicks | Impressions | CTR | Average Position | Share of Table Impressions | Share of Table Clicks | Cluster Category |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| `.../best-iptv/iptv-smarters-pro` | **43** | **3,075** | **1.40%** | **11.63** | **40.50%** | **26.38%** | Legacy Player Asset |
| `.../iptv-free-trial` | **20** | **181** | **11.05%** | **38.93** | **2.38%** | **12.27%** | Commercial Lander |
| `.../` (Homepage) | **16** | **220** | **7.27%** | **29.07** | **2.90%** | **9.82%** | Brand / Commercial Hub |
| `.../best-iptv/ibo-player` | **15** | **565** | **2.65%** | **12.87** | **7.44%** | **9.20%** | Legacy Player Asset |
| `.../best-iptv` | **14** | **484** | **2.89%** | **23.93** | **6.38%** | **8.59%** | Legacy Hub Page |
| `.../best-iptv/vlc` | **12** | **411** | **2.92%** | **23.72** | **5.41%** | **7.36%** | Legacy Player Asset |
| `.../best-iptv/tivimate` | **7** | **369** | **1.90%** | **16.46** | **4.86%** | **4.29%** | Legacy Player Asset |
| `.../setup` | **6** | **243** | **2.47%** | **26.28** | **3.20%** | **3.68%** | Technical Guide |
| `.../best-iptv/gse-smart-iptv` | **5** | **379** | **1.32%** | **15.60** | **4.99%** | **3.07%** | Legacy Player Asset |
| `.../iptv-subscription` | **5** | **71** | **7.04%** | **32.70** | **0.94%** | **3.07%** | Commercial Hub |
| `.../best-iptv/smartone` | **4** | **219** | **1.83%** | **17.66** | **2.88%** | **2.45%** | Legacy Player Asset |
| `.../devices/google-tv` | **3** | **116** | **2.59%** | **12.57** | **1.53%** | **1.84%** | Device Guide |
| `.../best-iptv/ott-navigator` | **3** | **92** | **3.26%** | **23.36** | **1.21%** | **1.84%** | Legacy Player Asset |
| `.../iptv-players/gse-smart-iptv`| **2** | **162** | **1.23%** | **14.53** | **2.13%** | **1.23%** | New Player Route |
| `.../devices/formuler` | **2** | **128** | **1.56%** | **14.09** | **1.69%** | **1.23%** | Device Guide |
| `.../devices` | **1** | **167** | **0.60%** | **24.84** | **2.20%** | **0.61%** | Hardware Hub |
| `.../devices/android-tv` | **1** | **87** | **1.15%** | **24.87** | **1.15%** | **0.61%** | Device Guide |
| `.../iptv-players` | **1** | **29** | **3.45%** | **29.00** | **0.38%** | **0.61%** | New Players Hub |
| `.../iptv-players/tivimate` | **1** | **25** | **4.00%** | **10.40** | **0.33%** | **0.61%** | New Player Route |
| `.../iptv-subscription/1-month` | **1** | **22** | **4.55%** | **41.00** | **0.29%** | **0.61%** | Commercial Product |
| `.../iptv-subscription/3-months`| **1** | **17** | **5.88%** | **41.24** | **0.22%** | **0.61%** | Commercial Product |
| `.../faq` | 0 | 62 | 0.00% | 19.18 | 0.82% | 0.00% | Support FAQ |
| `.../iptv-players/vlc` | 0 | 61 | 0.00% | 21.33 | 0.80% | 0.00% | New Player Route |
| `.../contact` | 0 | 42 | 0.00% | 14.76 | 0.55% | 0.00% | Support Contact |
| `.../help-center/not-working` | 0 | 34 | 0.00% | 25.79 | 0.45% | 0.00% | Troubleshooting |
| `.../devices/samsung-smart-tv` | 0 | 31 | 0.00% | 29.03 | 0.41% | 0.00% | Device Guide |
| `.../dmca` | 0 | 24 | 0.00% | 3.92 | 0.32% | 0.00% | Legal Notice |
| `.../devices/firestick` | 0 | 24 | 0.00% | 9.04 | 0.32% | 0.00% | Device Guide |
| `.../terms-conditions` | 0 | 24 | 0.00% | 9.79 | 0.32% | 0.00% | Legal Agreement |
| `.../iptv-players/iptv-smarters` | 0 | 24 | 0.00% | 11.83 | 0.32% | 0.00% | New Player Route |
| `.../my-account` | 0 | 23 | 0.00% | 17.04 | 0.30% | 0.00% | Subscriber Portal |
| `.../disclaimer` | 0 | 22 | 0.00% | 4.82 | 0.29% | 0.00% | Legal Notice |
| `.../devices/lg-smart-tv` | 0 | 21 | 0.00% | 38.00 | 0.28% | 0.00% | Device Guide |
| `.../help-center/internet-speed`| 0 | 20 | 0.00% | 49.45 | 0.26% | 0.00% | Troubleshooting |
| `.../refund-policy` | 0 | 16 | 0.00% | 11.06 | 0.21% | 0.00% | Legal Policy |
| `.../iptv-subscription/12-months`| 0 | 16 | 0.00% | 40.25 | 0.21% | 0.00% | Commercial Product |
| `.../iptv-subscription/6-months` | 0 | 15 | 0.00% | 39.13 | 0.20% | 0.00% | Commercial Product |
| `.../privacy-policy` | 0 | 10 | 0.00% | 10.80 | 0.13% | 0.00% | Legal Policy |
| `.../iptv-players/ibo-player` | 0 | 9 | 0.00% | 17.33 | 0.12% | 0.00% | New Player Route |
| `.../help-center` | 0 | 8 | 0.00% | 8.50 | 0.11% | 0.00% | Help Hub |
| `.../help-center/connection` | 0 | 8 | 0.00% | 21.12 | 0.11% | 0.00% | Troubleshooting |
| `.../iptv-cost` | 0 | 8 | 0.00% | 23.00 | 0.11% | 0.00% | Commercial Guide |
| `.../iptv-players/ott-navigator` | 0 | 7 | 0.00% | 18.14 | 0.09% | 0.00% | New Player Route |
| `.../help-center/epg-not-working`| 0 | 6 | 0.00% | 26.33 | 0.08% | 0.00% | Troubleshooting |
| `.../devices/apple-tv` | 0 | 5 | 0.00% | 13.00 | 0.07% | 0.00% | Device Guide |
| `.../help-center/channels-load` | 0 | 5 | 0.00% | 29.00 | 0.07% | 0.00% | Troubleshooting |
| `.../devices/roku` | 0 | 5 | 0.00% | 29.60 | 0.07% | 0.00% | Device Guide |

> [!CAUTION]
> **CRITICAL DATA LIMITATION:** The table above represents total impressions over the full 14-day window. It **does NOT prove** which specific pages generated the 3,872 impressions on September 5. Do not infer daily page spikes without Date × Page data.

---

## 5. Query Semantic Analysis

The 1,000 queries in the export were parsed and classified into 9 semantic intent categories:

| Category | Query Count | Visible Impressions | Visible Clicks | Category CTR | Weighted Avg Position | Dominant Search Intent |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **PLAYER / APP** | **766** | **3,437** | **67** | **1.95%** | **11.81** | App setup, download, M3U config (Smarters, IBO, VLC) |
| **DEVICE** | **172** | **550** | **8** | **1.45%** | **19.74** | Hardware compatibility (Google TV, Firestick, Formuler) |
| **BRAND** | **3** | **64** | **6** | **9.38%** | **6.25** | Navigational brand queries (`teleview`) |
| **SETUP / HOW-TO** | **25** | **60** | **7** | **11.67%** | **33.27** | Playlist installation, M3U linking, player setup |
| **FREE TRIAL** | **7** | **22** | **8** | **36.36%** | **71.09** | High-intent test queries (`free 24hr iptv trial`) |
| **SUBSCRIPTION / PRICING** | **3** | **6** | **1** | **16.67%** | **44.17** | Commercial subscription queries (`iptv subscription`) |
| **TROUBLESHOOTING** | **6** | **6** | **0** | **0.00%** | **11.67** | Error diagnostics (EPG, buffer, not working) |
| **OTHER** | **18** | **24** | **1** | **4.17%** | **10.54** | Miscellaneous non-categorized queries |
| **COMMERCIAL IPTV (Generic)**| **0** | **0** | **0** | — | — | Highly competitive generic terms (anonymized/zero visible) |

---

## 6. Ranking Opportunity Bands

Based exclusively on actual performance data in the Queries sheet:

### Band A: Positions 4–10 (High Impressions, CTR Improvement Opportunity)
*Queries where Teleview already ranks on Page 1; small CTR improvements will yield immediate clicks.*
- **Summary:** 521 queries | 1,936 impressions | 38 clicks | 1.96% CTR | Weighted Avg Pos: 8.51

| Query | Impressions | Clicks | CTR | Average Position | Primary Target Asset |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `ibo player` | 354 | 6 | 1.69% | 7.8 | `/iptv-players/ibo-player` |
| `iptv smarters pro windows` | 143 | 2 | 1.40% | 9.4 | `/iptv-players/iptv-smarters-pro` |
| `gse smart iptv` | 75 | 1 | 1.33% | 9.2 | `/iptv-players/gse-smart-iptv` |
| `teleview` | 59 | 6 | 10.17% | 6.3 | `/` (Homepage) |
| `smartone iptv` | 41 | 0 | 0.00% | 8.5 | `/iptv-players/smartone` |
| `smart one iptv` | 40 | 0 | 0.00% | 8.4 | `/iptv-players/smartone` |
| `gse iptv` | 39 | 0 | 0.00% | 9.7 | `/iptv-players/gse-smart-iptv` |
| `iptv smarters windows` | 33 | 0 | 0.00% | 9.6 | `/iptv-players/iptv-smarters-pro` |
| `iptv smarters pro for pc` | 32 | 2 | 6.25% | 9.1 | `/iptv-players/iptv-smarters-pro` |
| `iptv smarter pro` | 25 | 1 | 4.00% | 9.7 | `/iptv-players/iptv-smarters-pro` |

---

### Band B: Positions 11–20 (Page 2 High Impressions, Ranking Improvement Opportunity)
*Queries where Teleview is near Page 1; ranking gains directly unlock substantial impression volume.*
- **Summary:** 376 queries | 1,880 impressions | 34 clicks | 1.81% CTR | Weighted Avg Pos: 13.14

| Query | Impressions | Clicks | CTR | Average Position | Strategic Target Asset |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `iptv smarters pro` | 445 | 4 | 0.90% | 13.7 | `/iptv-players/iptv-smarters-pro` |
| `iptv smarters` | 150 | 1 | 0.67% | 14.0 | `/iptv-players/iptv-smarters-pro` |
| `smart iptv` | 84 | 1 | 1.19% | 17.3 | `/iptv-players` (Hub) |
| `iptv smarters pro download` | 84 | 0 | 0.00% | 10.4 | `/iptv-players/iptv-smarters-pro` |
| `iptv smarters player` | 55 | 0 | 0.00% | 11.5 | `/iptv-players/iptv-smarters-pro` |
| `smarters pro` | 53 | 1 | 1.89% | 13.9 | `/iptv-players/iptv-smarters-pro` |
| `iptv smart player` | 48 | 1 | 2.08% | 11.3 | `/iptv-players` (Hub) |
| `iptv smarters pro pc` | 37 | 1 | 2.70% | 11.2 | `/iptv-players/iptv-smarters-pro` |
| `iptv pro` | 35 | 0 | 0.00% | 12.1 | `/iptv-players` (Hub) |
| `smarters iptv` | 27 | 1 | 3.70% | 12.6 | `/iptv-players/iptv-smarters-pro` |

---

### Band C: Positions 21–40 (Proven Google Relevance, Lower Competitiveness)
*Queries where Google understands page relevance but ranks the site on Pages 3–4.*
- **Summary:** 56 queries | 209 impressions | 4 clicks | 1.91% CTR | Weighted Avg Pos: 26.68
- **Representative Queries:** `gse smart iptv pro` (pos 21.5), `ibo player app` (pos 23.1), `iptv smarters pro firestick` (pos 24.8), `iptv vlc setup` (pos 26.2).

---

### Band D: Positions >40 (Discovery Only, High-Intent Conversion Tail)
*Deep long-tail queries demonstrating extraordinary click-through intent despite low visibility.*
- **Summary:** 43 queries | 135 impressions | 21 clicks | **15.56% CTR** | Weighted Avg Pos: 68.28

| Query | Impressions | Clicks | CTR | Position | Intent Profile |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `free 24hr iptv trial` | 7 | 4 | **57.14%** | 78.6 | Transactional Trial Intent |
| `iptv free trial` | 5 | 1 | 20.00% | 69.2 | Commercial Trial Intent |
| `iptv m3u playlist live tv` | 5 | 1 | 20.00% | 64.0 | Technical Streaming Intent |
| `iptv subscription` | 3 | 1 | 33.33% | 43.7 | Commercial Purchase Intent |
| `iptv free trial 24h` | 3 | 1 | 33.33% | 61.7 | Transactional Trial Intent |
| `iptv instant activation` | 1 | 1 | 100.00% | 81.0 | Immediate Purchase Intent |

---

## 7. Player Cluster Performance (Legacy vs. New Routes)

A comparative breakdown of search performance between the legacy `/best-iptv/*` player paths and the current `/iptv-players/*` paths:

| Cluster Version | Pages Count | Total Clicks | Total Impressions | Overall CTR | Avg Position Range | Share of Page Table Impressions | Share of Page Table Clicks |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Legacy `/best-iptv/*` (incl. Hub)** | **8** | **103** | **5,594** | **1.84%** | 11.6 – 23.9 | **73.69%** | **63.19%** |
| **New `/iptv-players/*` (incl. Hub)** | **7** | **4** | **317** | **1.26%** | 10.4 – 29.0 | **4.18%** | **2.45%** |
| **Total Player Authority Footprint** | **15** | **107** | **5,911** | **1.81%** | — | **77.86%** | **65.64%** |

### Key Findings:
1. **Equity Concentration:** Over 73% of all search impressions captured by Teleview belong to the original `/best-iptv/*` URLs.
2. **Migration Transfer Latency:** The new `/iptv-players/*` routes have accumulated 317 impressions and 4 clicks. Google is crawling and discovering the new URLs, but search visibility remains overwhelmingly attributed to the legacy URLs in Search Console reporting.

---

## 8. Commercial Cluster Performance

| Commercial URL | Total Clicks | Total Impressions | CTR | Average Position | Status & Intent Profile |
| :--- | :---: | :---: | :---: | :---: | :--- |
| `/iptv-free-trial` | **20** | **181** | **11.05%** | **38.93** | Exceptional commercial conversion; ranks deep but captures high CTR |
| `/` (Homepage) | **16** | **220** | **7.27%** | **29.07** | Brand & commercial anchor; strong CTR |
| `/iptv-subscription` | **5** | **71** | **7.04%** | **32.70** | Main commercial hub; solid intent conversion |
| `/iptv-subscription/1-month` | **1** | **22** | **4.55%** | **41.00** | Specific duration commercial intent |
| `/iptv-subscription/3-months` | **1** | **17** | **5.88%** | **41.24** | Specific duration commercial intent |
| `/iptv-subscription/12-months` | 0 | 16 | 0.00% | 40.25 | Commercial duration (indexed, low rank) |
| `/iptv-subscription/6-months` | 0 | 15 | 0.00% | 39.13 | Commercial duration (indexed, low rank) |
| `/iptv-cost` | 0 | 8 | 0.00% | 23.00 | Legacy pricing URL (now permanently redirected) |

### Indexing vs. Ranking Insight
- **Discovery & Indexing:** Confirmed. All commercial pages are fully discovered, crawled, and indexed by Googlebot.
- **Ranking vs. Indexing:** The low impression counts on commercial pages are **NOT an indexing defect**. They reflect Google's ranking placement (average position 29 to 41) in an intensely competitive commercial SERP landscape.

---

## 9. Missing Date × Page Evidence & GSC Extraction Specification

> **CRITICAL CONFIRMATION: THE CURRENT EXPORT CANNOT ATTRIBUTE THE SEPTEMBER 5 SPIKE TO INDIVIDUAL PAGES.**

Because the current export was generated from the top-level performance overview, `Chart` is aggregated by Date, while `Pages` is aggregated across the entire date window.

### Required Human Extraction Specification
To verify exactly which pages crashed on September 6, the human operator must export a **Page-Filtered Performance Report** for each of the following 8 URLs:

1. `https://www.teleview.me/best-iptv`
2. `https://www.teleview.me/best-iptv/iptv-smarters-pro`
3. `https://www.teleview.me/best-iptv/ibo-player`
4. `https://www.teleview.me/best-iptv/tivimate`
5. `https://www.teleview.me/best-iptv/gse-smart-iptv`
6. `https://www.teleview.me/best-iptv/smartone`
7. `https://www.teleview.me/best-iptv/vlc`
8. `https://www.teleview.me/best-iptv/ott-navigator`

**For each URL:**
- In Google Search Console, filter: `Page: Exact URL`.
- Select Date Range: `2026-09-04` to `2026-09-18`.
- Export the `Dates` sheet containing: `Date`, `Clicks`, `Impressions`, `CTR`, `Position`.

---

## 10. Missing Query × Page Evidence & Strategic Value

In the standard overview export, the `Queries` sheet does not specify which URL ranked for which keyword.

### Required Extraction for High-Value Assets
Specifically for:
1. `https://www.teleview.me/best-iptv`
2. `https://www.teleview.me/best-iptv/iptv-smarters-pro`
3. `https://www.teleview.me/best-iptv/ibo-player`

**GSC Steps:**
- Filter: `Page: Exact URL`.
- Date Range: `Last 28 days` (or custom Sep 4–18).
- Export the `Queries` table containing: `Top queries`, `Clicks`, `Impressions`, `CTR`, `Position`.

> [!IMPORTANT]
> **Decision Gate:** The permanent architectural destination of `/best-iptv` (whether to restore as an objective comparison hub or redirect to `/iptv-players` or `/`) **must remain frozen** until this query-level attribution is obtained.

---

## 11. Current Technical State Classification

> **FORMAL STATUS STATEMENT:**  
> **Current repository and production audits have not identified a technical crawl/indexability defect sufficient to explain the September 5→6 decline.**

1. **HTTP Status:** All 48 sitemap canonical pages return `HTTP 200 OK`.
2. **Robots Directives:** All canonical pages serve `index, follow`.
3. **Crawl Access:** `robots.txt` explicitly allows `Googlebot` and `*`.
4. **Canonical Declarations:** 100% self-referencing absolute HTTPS canonical tags matching sitemap URLs.
5. **DOM Pre-rendering:** Pre-rendered HTML contains complete semantic DOM without JavaScript execution dependency.
6. **Internal Link Architecture:** 0 broken internal links, 0 links to redirected or 404/410 paths.

---

## 12. Updated Root-Cause Status

### Confirmed Observations (Evidence-Backed Facts)
1. **New Player URL Publication:** The `/best-iptv/*` player cluster was first published on September 4, 2026 (`14f9332`).
2. **Peak Visibility:** Peak impressions (3,872) occurred on September 5, 2026.
3. **Sharp Decline:** Daily impressions dropped -84.7% (3,872 → 594) between September 5 and September 6.
4. **Observed Ranking Decline:** Site-wide average position deteriorated from 13.2 (Sep 5) → 18.5 (Sep 6) → 24.9 (Sep 7).
5. **Concentration of Visibility:** 73.7% of all recorded impressions were captured by the legacy player URLs.

### Possible Explanations (Plausible Hypotheses)
1. **Initial Post-Indexing Volatility:** When brand-new URLs are published, Google frequently tests them in search results before recalculating ranking scores based on click satisfaction, content depth, and domain authority.
2. **Topical Quality Re-Ranking:** Google algorithms re-evaluating the commercial and affiliate-style nature of third-party player guides.

### Disproven Hypotheses
1. **`teleview.com` Domain Migration Failure:** Disproven (Teleview never owned or ran on `teleview.com`).
2. **Commit `cb0ef19` Route Changes:** Disproven as cause of Sep 5→6 collapse (commit was branch-only until September 7).
3. **Googlebot Robots.txt Blocking:** Disproven (Googlebot was continuously allowed).
4. **Accidental Noindex Directive:** Disproven (All canonical pages emitted `index, follow`).
5. **Canonical Configuration Failure:** Disproven (All canonicals deterministic and valid).
6. **SSG Rendering Failure:** Disproven (Full semantic DOM pre-rendered in static HTML).

### Insufficient Data
1. **Pre-September 4 Baseline:** Unknown whether pre-existing traffic existed on another domain.
2. **Daily Performance per Page:** Exact date-by-date trajectory for individual URLs.
3. **Query-to-Page Association:** Exact mapping of queries to ranking URLs.

---

## 13. Recommended Next Evidence Collection

1. **Extract Page-Filtered GSC Data:** Export `Dates` and `Queries` tables for `/best-iptv`, `/best-iptv/iptv-smarters-pro`, and `/best-iptv/ibo-player`.
2. **Audit GSC Page Indexing Status:** Check GSC `Indexing` → `Pages` to examine status counts ("Discovered", "Crawled", "Redirect", "Valid") across September 4–18.
3. **Maintain Recovery Freeze:** Keep all source code, routes, canonicals, sitemaps, and `/best-iptv` unchanged.
