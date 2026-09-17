# Google Indexing API Integration & Technical SEO Compliance Guide

This document defines the architecture, security policies, implementation details, and operational workflows for the Google Indexing API and SEO Indexability audit tooling within the Teleview project.

---

## 1. Official Google Policy & Scope Constraints

### Google's Official Policy
According to Google's official documentation for the **Google Search Indexing API v3**:
> *"Currently, the Indexing API can only be used to crawl pages with either `JobPosting` or `BroadcastEvent` embedded in a `VideoObject`. For websites with many short-lived pages like job postings or livestream videos, the Indexing API keeps search results fresh because it allows updates to be pushed individually."*
>
> — **Google Search Central Documentation**

> [!IMPORTANT]
> **Google Policy Statement**:
> Google states that the Indexing API can only be used for JobPosting pages or BroadcastEvent pages embedded in VideoObject, and Google's spam policies apply to content submitted through the API.

### Strict Compliance Rules for Teleview
1. **Never Submit Standard Website Pages**:
   - Google **strictly restricts** the Indexing API to job postings and livestream videos. Normal commercial pages, IPTV subscriptions, pricing plans, setup guides, blog articles, help center articles, or homepage URLs must **never** be submitted to the Indexing API.
2. **BroadcastEvent Eligibility Rule**:
   - `BroadcastEvent` is accepted **ONLY** when embedded inside a legitimate `VideoObject` (in its `publication` or `events` structure) according to Google's livestream structured data model.
   - Standalone `@type: "BroadcastEvent"`, generic `@graph` nodes with unassociated `BroadcastEvent`, or `@type` arrays containing `BroadcastEvent` are **strictly rejected**.
3. **Do NOT Fake Structured Data**:
   - Never add artificial `JobPosting` or fake `BroadcastEvent` schemas to standard pages. Google's spam policies apply to content submitted through the API.
4. **HTTP 200 Acceptance ≠ Guaranteed Indexation**:
   - An HTTP `200 OK` response from the Google Indexing API confirms that Google has **accepted the crawl notification**. It is a crawl scheduling signal, not a guarantee that the URL will be crawled, indexed, or ranked.

---

## 2. Technical Indexability Lifecycle Stages

To avoid conflating local code compilation with live Google Search results, the Teleview audit system clearly distinguishes five lifecycle stages:

| Stage | Name | Verification Method | Teleview Status |
| :---: | :--- | :--- | :--- |
| **Stage A** | **Technically Indexable** | Verified locally via `npm run seo:indexability` (prerendered HTML present, self-referential canonical tag, no noindex directives, robots.txt syntax) | Verified (100% of canonical routes pass) |
| **Stage B** | **Crawlable in Production** | Verified via `npm run seo:indexability:live` (live HTTP 200 OK, zero redirect hops, live headers, live robots.txt match) | Verified on `https://www.teleview.me` |
| **Stage C** | **Discovered by Google** | Search engine discovery through `sitemap.xml`, internal links, and Google Search Console sitemap processing | Active via `sitemap.xml` |
| **Stage D** | **Crawled by Google** | Googlebot requests and renders the live URL (monitored in Google Search Console Crawl Stats report) | Tracked in Google Search Console |
| **Stage E** | **Indexed by Google** | Google's ranking systems store and display the URL in search results (verified via GSC URL Inspection tool) | Tracked in Google Search Console |

> [!NOTE]
> Local file existence (`dist/` HTML) proves **Stage A (Technically Indexable)** only. It does not prove or guarantee Stages B, C, D, or E.

---

## 3. Standard Pages Indexation Architecture

Standard Teleview pages do **not** use the Google Indexing API. Instead, they rely on standard technical SEO:

1. **Static XML Sitemap (`sitemap.xml`)**:
   - Generated dynamically from `src/routes.ts` via `scripts/generate-sitemap.mjs` and validated via `npm run test:sitemap`.
   - Contains all current canonical URLs (currently 48 canonical URLs; dynamic based on route registry) with accurate `lastmod` timestamps.
2. **Self-Referential Canonical Tags**:
   - Every prerendered page contains a single, matching `<link rel="canonical" href="https://www.teleview.me/..." />`.
3. **Clean HTTP Statuses**:
   - Direct HTTP 200 OK responses with zero redirect chains for all canonical URLs.
   - Clean 308 permanent server-side redirects in `vercel.json` for deprecated paths.
4. **Search Engine Discovery**:
   - **Google**: Discovers updates automatically via `sitemap.xml` (declared in `robots.txt`) and Google Search Console URL Inspection.
   - **Bing & Yandex**: Automated instant indexation notifications via the **IndexNow API** (`npm run indexnow`).

---

## 4. Implementation Architecture & The Eligibility Gate

The Google Indexing API infrastructure is built as a server-side only module in `server/google-indexing/` and `scripts/`:

```
server/google-indexing/
├── types.ts          # TypeScript interfaces and notification action types
├── eligibility.ts    # Strict schema and URL eligibility verification gate
├── auth.ts           # Service account credential loader, key normalizer & JWT signer
├── client.ts         # GoogleIndexingClient with dry-run support & rate limiting
└── index.ts          # Central module export barrel

scripts/
├── google-indexing.ts          # CLI tool for notification, status query, and batch execution
├── indexability-audit.ts       # Local pre-deployment indexability audit (Stage A)
├── live-indexability-audit.ts  # Live production crawlability audit (Stage B)
└── test-google-indexing.mjs    # Comprehensive test suite (21 unit/integration tests)
```

### The Eligibility Gate (`server/google-indexing/eligibility.ts`)
Before any request is sent to Google, `isEligibleForGoogleIndexingApi(url)` verifies:
1. Valid absolute URL format and HTTPS/HTTP protocol.
2. Hostname belongs to Teleview (`www.teleview.me`, `teleview.me`, or local dev).
3. The page contains either:
   - `@type: "JobPosting"`
   - A `VideoObject` whose `publication` or `events` contains a `BroadcastEvent`
4. If none of the above are met, the request is **safely skipped** (`{ eligible: false, skipped: true }`), and **no external network call is made**.

---

## 5. Security & Compromised Key Protocol

### Critical Security Protocol
> [!CAUTION]
> **COMPROMISED KEY NOTICE**:
> A previously generated service-account private key must be considered **compromised** if it has been copied into chat, logs, documentation, tickets, or any non-secret system.
> **Do NOT reuse a compromised private key under any circumstance.**

### Mandatory Credential Lifecycle Steps:
1. **Revoke and Delete Old Keys**:
   - Open [Google Cloud Console > IAM & Admin > Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts).
   - Locate the service account, click **Keys**, find the old key ID, and click **Delete**.
2. **Generate a Fresh Key**:
   - Click **Add Key > Create new key > JSON**.
   - Download the new key to a secure, private location.
3. **Store Exclusively in Secret Managers or Ignored `.env`**:
   - In production (Vercel): Add the environment variables directly in Project Settings > Environment Variables.
   - In local development: Place only in `.env.local` (which is excluded by `.gitignore`).
4. **Never Commit Secrets**:
   - `.gitignore` strictly blocks all `service-account*.json`, `google-service-account*.json`, `*.pem`, `*.key`, `*.p12`, and `.env*.local` files.
5. **Never Use `VITE_` Prefix**:
   - Never prefix Google service account credentials with `VITE_`. Any variable with `VITE_` is automatically baked into public client-side JavaScript bundles by Vite.
6. **Never Print Private Keys**:
   - CLI tools and error handlers must sanitize output and never print or leak RSA private key strings in error messages.
7. **Safe Template in `.env.example`**:
   - `.env.example` must contain **placeholders only**. Never commit real keys to documentation or example files.

---

## 6. Google Search Console Delegation

### Mandatory Site Owner Permission
> [!IMPORTANT]
> Google's official prerequisites explicitly require adding the service account as a **Site Owner** in Google Search Console.
> If granted only "Full" or "Restricted" permissions, Google will reject all Indexing API requests with:
> `HTTP 403: "Permission denied. Failed to verify ownership of the URL in Google Search Console."`

### Setup Steps:
1. Open [Google Search Console](https://search.google.com/search-console).
2. Select your verified property (`https://www.teleview.me/` or domain property `teleview.me`).
3. Navigate to **Settings > Users and permissions**.
4. Click **Add user**.
5. Enter your Service Account email (e.g., `google-indexing-bot@your-gcp-project.iam.gserviceaccount.com`).
6. Set Permission to **Owner**.
7. Click **Add**.

---

## 7. Current Teleview Indexing API State

For the current Teleview site:
```ini
GOOGLE_INDEXING_ENABLED=false
```
The safety kill switch remains set to `false` because all current Teleview canonical URLs are standard commercial, guide, and informational pages.

Standard pages must rely exclusively on:
- `sitemap.xml`
- Internal links
- Canonical URLs
- Google Search Console
- Normal Googlebot crawling

---

## 8. CLI & Operational Commands

### 1. Local Pre-Deployment Indexability Audit (Stage A)
Audits local static HTML prerender artifacts in `dist/`:
```bash
npm run seo:indexability
```

### 2. Live Production Crawlability Audit (Stage B)
Performs non-destructive HTTP requests against live production to verify live 200 statuses, headers, canonicals, and live robots.txt:
```bash
npm run seo:indexability:live
```

### 3. Automated Test Suite
Executes 21 unit and integration tests with mocked network responses:
```bash
npm run test:indexing
```

### 4. CLI Dry Run
Validates payload and eligibility without contacting Google:
```bash
npm run google:index -- --url="https://www.teleview.me/iptv-subscription" --dry-run
```

---

## 9. HTTP Status Code Reference

| Status Code | Meaning | Cause & Recommended Action |
| :---: | :--- | :--- |
| **200 OK** | **Accepted** | Google received the notification and scheduled the URL for crawling. Note: Acceptance is a crawl signal, not an indexing guarantee. |
| **400** | **Bad Request** | Malformed URL or request body. Ensure URL is absolute and formatted properly. |
| **401** | **Unauthorized** | OAuth2 token is expired or invalid. Check service account email and private key PEM formatting. |
| **403** | **Permission Denied** | The service account is not added as an **Owner** in Google Search Console for the property. |
| **429** | **Quota Exceeded** | Daily request limit reached (default quota is 200 requests/day). Implement exponential backoff. |
| **500 / 503** | **Google Server Error** | Temporary backend issue on Google servers. Retry with exponential backoff. |
