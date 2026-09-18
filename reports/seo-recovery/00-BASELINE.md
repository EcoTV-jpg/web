# Forensic Baseline Report (Phase 1)

**Date:** 2026-09-18  
**Repository Commit SHA:** `ea3c5e8` (`feat(seo): complete people-first search intent audit, mapping, and limitation disclosures`)  
**Branch:** `main` (working tree clean)  
**Production Host:** `https://www.teleview.me/`  

---

## 1. Technical Inventory Summary

| Metric / Dimension | Value | Evidence / Verification Method |
|---|---|---|
| **Git Commit SHA** | `ea3c5e8` | `git log -1` |
| **Local Working Tree** | Clean | `git status` |
| **Vite Build Result** | **SUCCESS** (4.84s) | `npm run build` |
| **Total Defined Application Routes** | **51** | `src/routes.ts` |
| **Indexable Routes** | **48** | `src/routes.ts` (`indexable: true`) |
| **XML Sitemap URL Count** | **48** | `dist/sitemap.xml` & `public/sitemap.xml` |
| **Live Sitemap URL Count** | **48** (100% match) | `curl -sL https://www.teleview.me/sitemap.xml` |
| **Configured Server Redirects** | **24** | `vercel.json` (`redirects`) & `middleware.js` |
| **Configured Edge 410 Responses** | **2** | `middleware.js` & `api/best-iptv.js` (`/best-iptv`, `/guides/best-iptv-service`) |
| **Noindex Utility Routes** | **3** | `/404`, `/my-account`, `/pricing` (redirect) |
| **Broken Internal Links** | **0** | `scripts/verify-internal-links.mjs` |
| **Canonical Errors** | **0** (100% self-referencing) | `scripts/seo-audit.mjs` |
| **JSON-LD Schema Errors** | **0** | `scripts/extract-and-validate-jsonld.mjs` |

---

## 2. Regression Test Suite Baseline

All 14 test scripts evaluated against commit `ea3c5e8`:

| Test Script | Total Checks | Result | Output Summary |
|---|---|---|---|
| `npm run test:seo` (`seo-audit.mjs`) | 1,575 | ✅ **PASS** | 0 errors across 48 pages |
| `npm run test:semantic` (`semantic-seo-audit.mjs`) | 1,175 | ✅ **PASS** | 0 schema or entity graph errors |
| `npm run test:slugs` (`test-unknown-slugs.mjs`) | 205 | ✅ **PASS** | Dynamic unknown slugs return 404 cleanly |
| `npm run test:links` (`verify-internal-links.mjs`) | 50 pages | ✅ **PASS** | 0 broken internal links |
| `npm run test:claims` (`claim-consistency-audit.mjs`) | 11 criteria | ✅ **PASS** | 100% claim alignment with registry |
| `npm run test:sitemap` (`validate-sitemap.mjs`) | 48 URLs | ✅ **PASS** | Canonical match, 0 redirects, 0 404s |
| `npm run test:best-iptv` (`verify-best-iptv.mjs`) | Edge & API | ✅ **PASS** | Returns HTTP 410 Gone |
| `npm run test:indexing` (`test-google-indexing.mjs`) | 25 tests | ✅ **PASS** | Safety kill switch active, 0 calls |
| `npm run seo:404` (`seo-404-audit.mjs`) | 16 tests | ✅ **PASS** | 404 status & schema integrity verified |
| `npm run test:csp` (`verify-csp.mjs`) | Headers | ✅ **PASS** | CSP directives valid |
| `npm run test:differentiation` | Plans | ✅ **PASS** | Product differentiation verified |
| `npm run test:jsonld` | Structure | ✅ **PASS** | JSON-LD syntax valid |
| `npm run test:ai` | Knowledge | ✅ **PASS** | llms.txt aligned |
| `npm run test:freshness` | Content | ✅ **PASS** | Dates consistent |

---

## 3. Production Verification Status

- Live Production Domain: `https://www.teleview.me/`
- Live Robots.txt: HTTP 200 OK (Googlebot allowed, no disallow directives).
- Live Sitemap: HTTP 200 OK (48 URLs, identical to `dist/sitemap.xml`).
- Key Pages Drift: **0 drift** across 12 key pages (Title, Canonical, Robots, H1 identical).
