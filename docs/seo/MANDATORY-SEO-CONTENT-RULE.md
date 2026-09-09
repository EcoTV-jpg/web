# MANDATORY SEO CONTENT RULE

For every SEO content task in this repository, you MUST first read:

`docs/seo/PROMPTS-THREE-PHASE-SYSTEM.md`

This file is the authoritative SEO content operating system for the project.

You MUST follow its four-stage workflow:

0. STAGE 0: CONTENT ARCHITECTURE GATE (`docs/seo/STAGE-0-CONTENT-ARCHITECTURE-GATE.md`)
1. PHASE 1: RESEARCH & SEO BRIEF
2. PHASE 2: COPYWRITING
3. PHASE 3: SEO QUALITY ENGINE

Never skip Stage 0, Phase 1, Phase 2, or Phase 3.
No SEO content may proceed to Phase 1 until Stage 0 has passed.

Never publish SEO content without passing Phase 3.

The Quality Engine is an adversarial gate. Its purpose is to find reasons to reject the content, not to approve it automatically.

If Phase 3 returns FAIL or REVISE:
* Do NOT publish.
* Fix the identified problems.
* Re-run the Quality Engine.
* Continue until the content passes.

Never fabricate:
* First-hand experience
* Testing
* Screenshots
* Statistics
* Customer experiences
* Quotes
* Sources
* Technical specifications
* Compatibility
* Pricing
* Performance results

If required evidence is unavailable, explicitly mark it as:
`[REQUIRES VERIFICATION]`
or
`[ADD FIRST-HAND EVIDENCE]`

AI may assist with drafting, editing, research organization, and rewriting.
AI must NOT replace genuine experience, evidence, factual verification, or editorial judgment.

Never optimize content merely for:
* Word count
* Keyword density
* Number of headings
* Number of FAQs
* Number of entities
* Number of internal links

Optimize for:
USER VALUE > SEARCH INTENT > ORIGINALITY > ACCURACY > EXPERIENCE > CLARITY > SEO

Before any content is considered complete, report:
* Phase 1 status
* Phase 2 status
* Phase 3 status
* Final PASS/FAIL
* Critical issues
* Required fixes
* Missing evidence

This rule applies to ALL future SEO content work in this repository.

---

## ARCHITECTURE & CANNIBALIZATION PRE-CHECK RULE

NEVER create a new SEO URL before checking:
1. Existing site architecture (`src/routes.ts`, `src/App.tsx`)
2. Current indexable routes and sitemap (`public/sitemap.xml`)
3. Canonical tag definitions (`src/components/SEO.tsx`)
4. Existing redirects (`_redirects`, `netlify.toml`, `vercel.json`)
5. Existing pages targeting the same or overlapping search intent

If an existing page already covers the target intent or keyword cluster, IMPROVE or CONSOLIDATE that page rather than creating a competing URL that introduces keyword cannibalization or orphan content risks.
