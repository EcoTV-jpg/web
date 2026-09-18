# Teleview — Master Search Intent & Cannibalization Architecture Map

**Generated:** 2026-09-18  
**Standard Principle:** *ONE SEARCH INTENT → ONE PRIMARY URL → ONE EXCELLENT ANSWER.*  
**Rule:** Cannibalization requires substantially overlapping search intent, not merely sharing a keyword.

---

## 1. Single Topic-to-URL Intent Mapping Registry

Every core topic across the Teleview ecosystem is assigned strictly to **one authoritative primary URL**. Supporting pages must cross-link contextually rather than attempting to answer the entire topic.

| Topic / User Search Goal | Primary Authoritative URL | User Goal / Core Query Handled | Secondary Cross-Link Touchpoints |
|---|---|---|---|
| **Homepage & Brand Entity** | `https://www.teleview.me/` | What is Teleview and what does it provide? Overview of service, specs, and global coverage. | All hub pages |
| **IPTV Subscription (Catalog)** | `/iptv-subscription` | Commercial comparison of subscription tiers, plan duration selection (1, 3, 6, 12 months). | `/`, `/iptv-pricing`, `/iptv-free-trial` |
| **IPTV Pricing & Economics** | `/iptv-pricing` | How much does IPTV cost? Monthly vs annual plans, discount calculations, and Total Cost of Ownership (TCO). | `/iptv-subscription`, `/iptv-vs-cable` |
| **IPTV Cost (Educational TCO)** | `/iptv-pricing` *(Merged)* | Hardware investments, broadband ISP costs, hidden app fees, and free vs paid IPTV economics. | `/iptv-vs-cable`, `/devices` |
| **IPTV Free Trial** | `/iptv-free-trial` | How can I test Teleview before paying? 24-hour evaluation, line credential dispatch. | `/iptv-subscription`, `/setup` |
| **What Is IPTV?** | `/what-is-iptv` | Foundational streaming technology guide: how IP television works vs cable/satellite. | `/setup`, `/iptv-vs-cable` |
| **IPTV Legality** | `/is-iptv-legal` | Is IPTV legal? Copyright frameworks, licensing models, and regulatory compliance. | `/is-iptv-safe`, `/about` |
| **IPTV Safety & Security** | `/is-iptv-safe` | Is IPTV safe to stream? Cybersecurity, malware risks, VPN privacy, and network protection. | `/is-iptv-legal`, `/help-center` |
| **IPTV vs Cable** | `/iptv-vs-cable` | Cord-cutting comparison: monthly bills, hardware fees, contract lock-ins, channel breadth. | `/iptv-pricing`, `/what-is-iptv` |
| **Live TV Channels** | `/iptv-channels` | Channel roster, category breakdown, 25,000+ live feeds, regional lineups. | `/iptv-sports`, `/iptv-movies` |
| **Live Sports Streaming** | `/iptv-sports` | Live 50/60 FPS sports coverage, major leagues, pay-per-view events, stream stability. | `/iptv-channels`, `/iptv-subscription` |
| **Movies & VOD Library** | `/iptv-movies` | 100,000+ on-demand cinema titles, series, 4K HDR availability, subtitle support. | `/iptv-channels`, `/iptv-subscription` |
| **Supported Devices Hub** | `/devices` | Hardware compatibility directory: streaming sticks, smart TVs, boxes, RAM requirements. | `/setup`, Individual device guides |
| **Device-Specific Guides (8)** | `/devices/[slug]` | Exact step-by-step installation instructions for Firestick, Samsung, LG, Apple TV, etc. | `/devices`, `/setup`, `/iptv-players` |
| **IPTV Players Hub** | `/iptv-players` | Directory of third-party player applications, platform compatibility, and features. | Individual player guides, `/devices` |
| **Player App Guides (7)** | `/iptv-players/[slug]` | Dedicated setup manuals for TiviMate, IPTV Smarters, IBO Player, SmartOne, VLC, etc. | `/iptv-players`, `/setup` |
| **Master Setup Guide** | `/setup` | Master installation hub: Xtream Codes vs M3U protocol overview and 3-step setup. | `/devices/*`, `/iptv-players/*` |
| **Help Center & Troubleshooting** | `/help-center` | Knowledge base hub and diagnosis selector for playback, buffering, and network issues. | Individual troubleshooting guides |
| **Buffering Troubleshooting** | `/help-center/buffering` | Diagnostic guide for video stutter, stream freezing, CDN load, and buffer sizing. | `/help-center/internet-speed` |
| **Service Not Working** | `/help-center/not-working` | Step-by-step resolution when service goes dark: account expiration, server maintenance. | `/help-center`, `/contact` |
| **EPG Not Working** | `/help-center/epg-not-working` | Fixing missing TV guide listings, XMLTV URL synchronization, and timezone offsets. | `/iptv-players/*`, `/setup` |
| **Channels Not Loading** | `/help-center/channels-not-loading`| Resolving 403 Forbidden, playlist timeouts, codec mismatches, and dead channel feeds. | `/help-center/buffering`, `/help-center` |
| **Connection Problems** | `/help-center/connection-problems` | Network diagnostics: ISP throttling, router DNS configuration, and VPN bypass. | `/help-center/internet-speed` |
| **Internet Speed Requirements** | `/help-center/internet-speed` | Minimum bandwidth rules: 15 Mbps (HD), 30 Mbps (4K), latency, and jitter tolerances. | `/help-center/buffering`, `/devices` |
| **Multiple Connections** | `/iptv-subscription` *(Section)* | Single active connection policy and how to add multi-screen access for households. | `/faq`, `/contact` |
| **Xtream Codes API** | `/setup` *(Section)* | How to enter Server URL, Port, Username, and Password in third-party players. | `/iptv-players/*`, `/what-is-iptv` |
| **M3U / M3U8 Playlists** | `/setup` *(Section)* | How to load playlist URLs and M3U files into legacy and smart TV players. | `/iptv-players/*`, `/what-is-iptv` |
| **Refunds & Guarantees** | `/refund-policy` | 14-day refund conditions, eligibility criteria, and payment protection terms. | `/terms-conditions`, `/pricing` |
| **Customer Support** | `/contact` | 24/7 technical support access via WhatsApp, Telegram, and ticket dispatch. | `/help-center`, `/faq` |
| **Company Information** | `/about` | Teleview Media background, editorial integrity, mission, and operating standards. | `/` |

---

## 2. Intent Collision & Cannibalization Analysis

### 2.1 Commercial Cluster Overlap Investigation

#### Cluster A: `/` vs `/iptv-subscription` vs `/iptv-pricing` vs `/iptv-free-trial`

| Pair / Comparison | Shared Keyword / Query Space | Intent A | Intent B | Overlap Severity | Clean Boundary Definition | Required Action |
|---|---|---|---|---|---|---|
| **`/` vs `/iptv-subscription`** | `IPTV service`, `IPTV subscription` | Primary brand entity and global service snapshot. | Commercial catalog: comparing 1, 3, 6, 12-month packages and feature lists. | **LOW** | Homepage provides high-level feature highlights and links to `/iptv-subscription`. Subscription page focuses strictly on plan terms and purchasing selection. | **KEEP BOUNDARY.** Ensure homepage pricing card acts as a preview, not a replacement for `/iptv-subscription`. |
| **`/iptv-subscription` vs `/iptv-pricing`** | `IPTV subscription pricing`, `how much is IPTV` | Plan duration selector and direct checkout entrypoint. | Deep economic guide: effective monthly costs, annual savings percentages, and TCO. | **LOW** | Subscription page owns transactional selection (`$16`, `$39`, `$60`, `$90`). Pricing page owns analytical economics (comparing $7.50/mo vs $16/mo, cord-cutting ROI). | **KEEP BOUNDARY.** Cross-link from pricing table to subscription checkout. |
| **`/iptv-subscription` vs Duration Pages (`/1-month`, etc.)** | `1 month IPTV`, `12 month IPTV subscription` | Parent hub comparing all four durations side-by-side. | Individual product landing pages targeting exact duration and specific price points. | **LOW** | Subpages carry unique `Product` schemas, distinct prices, and term-specific savings breakdowns. Parent page carries `Service` schema. | **KEEP BOTH.** Verified 0 canonical conflicts. |
| **`/iptv-pricing` vs `/iptv-free-trial`** | `IPTV trial cost`, `free vs paid IPTV` | Complete breakdown of paid plan economics and long-term costs. | Risk-free 24-hour testing intent before committing money. | **NONE** | Pricing addresses financial commitment; Free trial addresses risk elimination. | **KEEP BOTH.** Maintain clear cross-links. |

---

### 2.2 Technical Setup Cluster Overlap Investigation

#### Cluster B: `/setup` vs `/devices/*` vs `/iptv-players/*`

| Pair / Comparison | Shared Keyword / Query Space | Intent A | Intent B | Overlap Severity | Clean Boundary Definition | Required Action |
|---|---|---|---|---|---|---|
| **`/setup` vs `/devices/*` (e.g. `/devices/firestick`)** | `How to setup IPTV on Firestick` | Master installation manual: high-level 3-step setup and credential formats. | Device-specific hardware guide: Fire OS developer options, Downloader app, hardware RAM. | **LOW** | `/setup` gives the universal framework. `/devices/[slug]` gives specific remote clicks, OS settings, and hardware optimization. | **KEEP BOUNDARY.** `/setup` links out to each hardware guide as the authoritative deep-dive. |
| **`/setup` vs `/iptv-players/*` (e.g. `/iptv-players/tivimate`)** | `How to setup TiviMate IPTV` | Master installation manual: universal Xtream Codes vs M3U protocol overview. | Player-specific application guide: UI navigation, playlist entry, EPG sync, recording. | **LOW** | `/setup` explains what Xtream Codes credentials are; the player guide explains where to type them in that specific app. | **KEEP BOUNDARY.** Cross-link contextually. |
| **`/devices/*` vs `/iptv-players/*`** | `Firestick IPTV apps`, `TiviMate on Firestick` | Hardware capabilities and operating system configuration. | Software features, video player decoders, and playback settings. | **LOW** | Device pages recommend 2–3 compatible apps. Player pages focus on app configuration and features. | **KEEP BOUNDARY.** Maintain bi-directional linking. |

---

### 2.3 Diagnostics & Support Overlap Investigation

#### Cluster C: `/help-center` vs Individual Troubleshooting Guides

| Pair / Comparison | Shared Keyword / Query Space | Intent A | Intent B | Overlap Severity | Clean Boundary Definition | Required Action |
|---|---|---|---|---|---|---|
| **`/help-center` vs `/help-center/buffering`** | `IPTV buffering`, `why is IPTV freezing` | Master diagnostic hub categorizing all common IPTV symptoms. | Deep technical guide: MTU sizing, CDN congestion, router QoS, and hardware cache. | **LOW** | Hub routes user to symptom; article provides the step-by-step diagnostic checklist. | **KEEP BOUNDARY.** Hub provides clear symptom triage cards. |
| **`/help-center/buffering` vs `/help-center/internet-speed`** | `Internet speed for IPTV buffering` | Diagnostic troubleshooting for sudden playback interruptions. | Informational bandwidth guide: Mbps benchmarks (HD vs 4K), latency, and jitter. | **LOW** | Buffering page handles when video stops; Internet speed page defines minimum network prerequisites. | **KEEP BOUNDARY.** Buffering guide links to speed guide as a prerequisite check. |
| **`/help-center/channels-not-loading` vs `/help-center/connection-problems`** | `IPTV playlist error`, `cannot connect to IPTV` | Playlist parsing errors, 403 Forbidden, expired Xtream Codes URLs. | Local network issues, ISP throttling, firewall port blocks, and DNS failures. | **LOW** | Channels guide diagnoses playlist/URL syntax; connection guide diagnoses network packet transport. | **KEEP BOUNDARY.** Cross-link between the two diagnostic checklists. |

---

## 3. Special Deep-Dive: `/iptv-cost` Audit & Decision

### 3.1 Historical Context & Repository Evidence
1. In prior migrations (`TECHNICAL-SEO-CONSOLIDATION-PHASE1-FINAL.md`), `/iptv-cost` was consolidated into `/iptv-pricing` via a permanent **HTTP 308 redirect**.
2. All unique Total Cost of Ownership (TCO) models, streaming stick hardware investments ($30–$150), broadband ISP data cap calculations, and low-cost provider risk analyses were moved directly into `/iptv-pricing` (see `src/pages/PricingPage.tsx` lines 499, 535, 578).
3. The live production server and edge routing currently return:
   - `curl -sI https://www.teleview.me/iptv-cost` → **HTTP/2 308 Permanent Redirect** to `https://www.teleview.me/iptv-pricing`.

### 3.2 Evaluation: Recreate `/iptv-cost` vs Maintain Consolidation

| Factor | Option A: Recreate Standalone `/iptv-cost` | Option B: Maintain Consolidation in `/iptv-pricing` (Current) | Recommendation & Impact |
|---|---|---|---|
| **Primary Search Intent** | Informational macro-economics: "What does IPTV really cost overall?" | Comprehensive pricing guide: Teleview rates + Total Cost of Ownership (TCO). | **Option B is Superior.** |
| **Google Search Central Guidance** | Risk of near-duplicate intent: users searching "IPTV pricing" and "IPTV cost" expect the same answers (rates + hidden fees). | "One primary URL → One excellent answer." Having one authoritative, comprehensive guide prevents SERP fragmentation. | **Option B prevents self-competition.** |
| **Information Gain** | Would require stripping the TCO sections out of `/iptv-pricing`, weakening `/iptv-pricing`. | `/iptv-pricing` currently contains 3,238 words of rich, comprehensive analysis including hardware costs and broadband fees. | **Option B preserves maximum depth.** |
| **Link Equity & Redirects** | Breaking the established 308 redirect after Google already processed it risks crawl confusion. | Established 308 redirect channels all historical backlinks and signals into `/iptv-pricing`. | **Option B protects link equity.** |

### 3.3 Final Determination on `/iptv-cost`
- **STATUS:** **DO NOT RECREATE.**
- **ACTION:** Maintain the permanent **HTTP 308 redirect** from `/iptv-cost` → `/iptv-pricing`.
- **RESULT:** `/iptv-pricing` remains Teleview's single authoritative destination for all subscription costs, package rates, hardware investments, and cord-cutting economics.

---

## 4. Content Gap Analysis & Opportunity Scoring

We evaluated prospective topics that Teleview does not currently address with a dedicated standalone URL:

| Topic Candidate | User Problem Solved | Independence from Existing URLs | Ability to Provide Teleview Original Evidence | Content Opportunity Score | Strategic Recommendation |
|---|---|---|---|---|---|
| **A. Multiple Connections (Simultaneous Streams)** | "Can my family watch on 2 TVs at once? What happens if 2 devices use 1 line?" | High. Currently buried in `/iptv-subscription` and `/faq`. | High. Explain Teleview's 1-active-stream policy vs multi-connection plans, IP restrictions, and household scenarios. | **HIGH** | **Candidate for Phase 6.** Add dedicated educational section in `/iptv-subscription` or create focused standalone guide in future phase. |
| **B. Xtream Codes vs M3U** | "Which format should I choose in my player app? Why is Xtream Codes faster?" | High. Explains API protocol vs flat file playlist, EPG sync differences, and security. | High. Teleview provides both formats upon activation. | **HIGH** | Expand existing deep-dive inside `/setup` and `/what-is-iptv`. |
| **C. IPTV Electronic Program Guide (EPG / XMLTV)** | "Why is my TV guide blank or showing the wrong time zone?" | Medium. Currently covered in `/help-center/epg-not-working`. | High. Teleview includes a 7-day XMLTV EPG feed. | **MEDIUM** | Deepen technical explanations inside `/help-center/epg-not-working`. |
| **D. How to Choose an IPTV Service** | "How do I evaluate IPTV providers without getting scammed?" | High. Buyer protection guide: testing during live sports, inspecting refund policies, avoiding lifetime deals. | Very High. Teleview provides 24-hr trial, 14-day refund, and prepaid billing. | **HIGH** | Perfect bridge from informational awareness to trial evaluation. |
| **E. IPTV Total Cost of Ownership (Standalone)** | "Hidden costs of IPTV (VPN, hardware, internet)." | Low. Fully answered inside `/iptv-pricing`. | Low. Would cannibalize `/iptv-pricing`. | **LOW** | Keep unified inside `/iptv-pricing`. |

---

## 5. Summary Conclusion

The Teleview information architecture is structurally sound with **48 canonical indexable URLs**. By maintaining clear boundaries between commercial tiers (`/iptv-subscription`), economic analysis (`/iptv-pricing`), trial evaluation (`/iptv-free-trial`), and technical education (`/what-is-iptv`, `/setup`), Teleview eliminates keyword cannibalization and delivers clear search intent ownership.
