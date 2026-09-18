# Teleview — Master SEO Action Decision Matrix

**Generated:** 2026-09-18  
**Standard Principle:** Prioritize user usefulness, factual accuracy, intent clarity, and information gain over keyword density.

### Priority Definitions:
- **P0**: Critical indexing, canonical, or severe technical compliance issues.
- **P1**: Major search intent, cannibalization, or content collision problem.
- **P2**: High-value content quality, information gain, UX, or internal linking improvement.
- **P3**: High-opportunity missing content creation.
- **P4**: Low-priority or optional optimization.

---

## Complete SEO Action Matrix

| Priority | Target URL / Area | Primary Intent | Current Problem | Evidence | Recommended Action | Expected User Benefit | Cannibalization Risk | Technical Risk | Implementation Complexity |
|---|---|---|---|---|---|---|---|---|---|
| **P0** | `/404` in `src/routes.ts` | Error Page Definition | Title tag mismatch in `src/routes.ts` (`404 Not Found | Teleview` vs `Page Not Found | Teleview`). | `src/routes.ts` line 1291 specifies `title: "404 Not Found \| Teleview"`, whereas `prerender.mjs` and `NotFoundPage.tsx` use `"Page Not Found \| Teleview"`. | **Align `src/routes.ts` line 1291** to `"Page Not Found \| Teleview"`. | Ensures single source of truth across SSR/SSG and client router. | None | Zero | Low |
| **P1** | `/iptv-cost` vs `/iptv-pricing` | TCO vs Plan Pricing | Risk of splitting equity if `/iptv-cost` is recreated as a thin second pricing page. | `vercel.json` already has a 308 redirect; `/iptv-pricing` already contains the full TCO, hardware, and broadband economics sections. | **MAINTAIN 308 REDIRECT.** Do not recreate `/iptv-cost`. Keep `/iptv-pricing` as the single authoritative economics guide. | Prevents fragmented search intent; users find complete pricing and TCO data on one deep page. | High if separated; Zero if unified | Zero (preserves status quo) | Low |
| **P1** | `/` vs `/iptv-subscription` | Entity Overview vs Duration Catalog | Homepage could over-index on full duration sales copy instead of acting as the brand gateway. | `HomePage.tsx` contains `Pricing.tsx`, which previews plans, while `/iptv-subscription` provides duration selection. | **KEEP DISTINCT.** Ensure homepage pricing section focuses on plan highlights and routes deep duration selection to `/iptv-subscription`. | Clear customer journey from overview to subscription selection. | Low | Low | Low |
| **P2** | `/` (`CoastToCoast.tsx`) | Global Availability | City cloud badges could resemble doorway/city-page tactics if misconstrued by crawlers. | `CoastToCoast.tsx` lists major city names as visual chips for "Available Worldwide". | **REFINE COPY & STYLING.** Emphasize that Teleview is a global IP service accessible from any internet connection worldwide, avoiding any localized city-doorway claims. | Eliminates any perception of geographic doorway pages; reinforces global accessibility. | None | Low | Low |
| **P2** | Commercial Pages (`/`, `/iptv-subscription`, etc.) | Purchase & Evaluation | Need explicit, transparent limitation disclosures to prevent misleading claims. | Google Search Central guidance and user prompt Phase 5 emphasize factual qualifiers. | **ENSURE QUALIFIERS**: "where available", "supported source feeds", "1 active connection per standard line", "prepaid billing, no auto-rebill". | Transparency and trust; aligns with FTC and Google Quality Rater guidelines. | None | Low | Low |
| **P2** | `/setup` & `/what-is-iptv` | Master Setup & Technology Architecture | Technical distinction between Xtream Codes API and M3U playlist format could be even clearer. | Users frequently ask which format to pick when setting up TiviMate or Smart TV apps. | **STRENGTHEN XTREAM VS M3U COMPARISON.** Highlight setup speed, EPG auto-sync, and connection stability differences. | Immediate clarity for non-technical users configuring player applications. | None | Low | Low |
| **P2** | In-Body Internal Link Graph | Crawl & User Navigation | Contextual cross-links between hardware guides, player guides, and troubleshooting guides should be robust. | Audit shows 100% crawl connectivity, but contextual links from device guides to specific player apps can be enriched. | **STRENGTHEN CONTEXTUAL LINKS.** Add descriptive in-body cross-references between `/devices/*` and `/iptv-players/*`. | Smooth navigation paths from device purchase to app installation and troubleshooting. | None | Low | Low |
| **P3** | Multiple Simultaneous Connections (Future Guide) | Multi-Room / Multi-Device Streaming | Users with multiple household TVs frequently ask if 1 line works on multiple screens simultaneously. | Currently addressed in `/faq` and `/iptv-subscription`, but could be an educational guide. | **HIGH OPPORTUNITY SCORE.** Prepare dedicated guide or enhanced section explaining active stream limits vs credential installations. | Resolves top pre-purchase question for families. | Low (distinct intent) | Low | Medium |
| **P3** | How to Choose an IPTV Service (Future Guide) | Buyer Protection & Evaluation Guide | Streamers seeking guidance on evaluating providers without getting scammed. | High user search demand with high opportunity score; aligns with Teleview's transparent trial and refund model. | **HIGH OPPORTUNITY SCORE.** Prepare comprehensive informational guide on evaluating trial streams, EPG, and refund terms. | Establishes Teleview as an authoritative, trustworthy streaming educator. | None | Low | Medium |
| **P4** | `/free-trial` and `/plans` URLs | Legacy Convenience | Unmapped legacy paths return 404 on edge if someone types them directly. | Canonical pages are `/iptv-free-trial` and `/iptv-subscription`. | **ADD 308 REDIRECTS** in `vercel.json` if user traffic indicates direct navigation. | Seamless recovery for direct URL typers. | None | Zero | Low |

---

## Immediate Implementation Action Plan (Step-by-Step)

1. **P0 Step 1:** Update `/404` route title in `src/routes.ts` line 1291 from `"404 Not Found | Teleview"` to `"Page Not Found | Teleview"` to maintain 100% architectural parity with `prerender.mjs` and `NotFoundPage.tsx`.
2. **P1 Step 2:** Preserve the active permanent 308 redirect for `/iptv-cost` → `/iptv-pricing` without recreating a competing page.
3. **P2 Step 3:** Refine `CoastToCoast.tsx` copy on the homepage to ensure city chips clearly reinforce universal global internet access and avoid any doorway-page footprint.
4. **P2 Step 4:** Verify and reinforce factual qualification phrases across `src/data/` and core components ("where available", "supported feeds", "1 active connection per standard line").
5. **P2 Step 5:** Enhance contextual internal links connecting `/devices/*` and `/iptv-players/*` with natural anchor text.
6. **Rebuild & Verify:** Run `npm run build` and all 14 test scripts to guarantee 100% test pass rate.
