# Teleview - Live Production SEO Indexability Audit Report

**Audit Type:** Live Production Crawlability Verification (Stage B)
**Target Origin:** https://www.teleview.me
**Timestamp:** 2026-09-17T17:23:48.363Z
**Total Canonical Routes:** 48
**Passed (100% Crawlable):** 0 / 48
**Failed Issues:** 48

## Robots.txt Verification & Divergence

- **Production robots.txt Status:** ❌ Inaccessible
- **Source vs. Live Comparison:** ⚠️ Divergence Detected
- **Notes:** Production robots.txt differs from local source artifact. Note: CDN or edge proxy configuration may be modifying robots.txt.

## Live Summary Metrics

| Live Check | Status | Passed | Notes |
| :--- | :---: | :---: | :--- |
| Live HTTP Status Exactly 200 | ❌ FAIL | 0/48 | Verified live server response |
| Zero Unexpected Redirects | ❌ FAIL | 0/48 | Direct destination, no redirect hops |
| Live Canonical Tag Matches | ❌ FAIL | 0/48 | Self-referential tag in live DOM |
| Zero Noindex (Meta & X-Robots-Tag) | ✅ PASS | 48/48 | Allowed for search crawlers |
| Live Sitemap.xml Membership | ❌ FAIL | 0/48 | Present in production sitemap.xml |

## Detailed Live URL Results

| Route | Live HTTP | Final URL | Canonical | Issues |
| :--- | :---: | :---: | :---: | :--- |
| `/` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/setup` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/devices` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/faq` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-subscription` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-subscription/1-month` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-subscription/3-months` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-subscription/6-months` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-subscription/12-months` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-free-trial` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/contact` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/terms-conditions` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/privacy-policy` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/refund-policy` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/disclaimer` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/help-center` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/dmca` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/what-is-iptv` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-players` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-players/tivimate` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-players/iptv-smarters-pro` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-players/ibo-player` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-players/smartone` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-players/gse-smart-iptv` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-players/vlc` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-players/ott-navigator` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/devices/firestick` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/devices/samsung-smart-tv` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/devices/lg-smart-tv` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/devices/android-tv` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/devices/apple-tv` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/devices/roku` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/devices/google-tv` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/devices/formuler` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/help-center/buffering` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/help-center/not-working` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/help-center/epg-not-working` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/help-center/channels-not-loading` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/help-center/connection-problems` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/help-center/internet-speed` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-pricing` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/is-iptv-legal` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/is-iptv-safe` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-vs-cable` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-channels` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-sports` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/iptv-movies` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
| `/about` | ❌ 0 | `` | ❌ Mismatch | Network fetch failure: fetch failed; Missing canonical tag in live HTML |
