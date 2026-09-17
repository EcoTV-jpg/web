import assert from 'node:assert';
import {
  isEligibleForGoogleIndexingApi,
  hasEligibleSchema,
  extractJsonLdFromHtml
} from '../server/google-indexing/eligibility.ts';
import {
  isGoogleIndexingEnabled,
  normalizePrivateKey,
  validateCredentials
} from '../server/google-indexing/auth.ts';
import { GoogleIndexingClient } from '../server/google-indexing/client.ts';

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     ${err.message}`);
    failed++;
  }
}

async function asyncTest(name, fn) {
  try {
    await fn();
    console.log(`  ✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     ${err.message}`);
    failed++;
  }
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('  Google Indexing API Integration - Comprehensive Test Suite');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// -------------------------------------------------------------
// GROUP 1: URL & Protocol Eligibility Gate
// -------------------------------------------------------------
console.log('Group 1: URL & Protocol Eligibility Gate');

test('Rejects malformed URL strings', () => {
  const result = isEligibleForGoogleIndexingApi('not-a-valid-url');
  assert.strictEqual(result.eligible, false);
  assert.strictEqual(result.skipped, true);
  assert.match(result.reason, /Invalid URL format/);
});

test('Rejects non-HTTP(S) protocols', () => {
  const result = isEligibleForGoogleIndexingApi('ftp://www.teleview.me/files');
  assert.strictEqual(result.eligible, false);
  assert.strictEqual(result.skipped, true);
  assert.match(result.reason, /Unsupported protocol/);
});

test('Rejects untrusted external domains', () => {
  const result = isEligibleForGoogleIndexingApi('https://example.com/careers/job-1');
  assert.strictEqual(result.eligible, false);
  assert.strictEqual(result.skipped, true);
  assert.match(result.reason, /Untrusted domain/);
});

test('Rejects standard Teleview commercial page without supported schema', () => {
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "IPTV Subscription"
          }
        </script>
      </head>
      <body>Standard IPTV Page</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/iptv-subscription', html);
  assert.strictEqual(result.eligible, false);
  assert.strictEqual(result.skipped, true);
  assert.match(result.reason, /does not contain JobPosting or VideoObject with embedded BroadcastEvent/);
});

// -------------------------------------------------------------
// GROUP 2: Strict Schema Regression Tests (Google Livestream Policy)
// -------------------------------------------------------------
console.log('\nGroup 2: Strict Schema Regression Tests (JobPosting & VideoObject Livestreams)');

test('Regression: standalone BroadcastEvent => REJECT', () => {
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "BroadcastEvent",
            "name": "Championship Match Livestream",
            "isLiveBroadcast": true
          }
        </script>
      </head>
      <body>Livestream page</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/live/match-1', html);
  assert.strictEqual(result.eligible, false, 'Standalone BroadcastEvent must NOT be eligible');
  assert.strictEqual(result.skipped, true);
  assert.match(result.reason, /does not contain JobPosting or VideoObject with embedded BroadcastEvent/);
});

test('Regression: BroadcastEvent inside generic @graph => REJECT unless correctly associated with VideoObject', () => {
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "WebPage", "name": "Livestream Hub" },
              { "@type": "BroadcastEvent", "name": "Unassociated Event", "isLiveBroadcast": true }
            ]
          }
        </script>
      </head>
      <body>Livestream Hub</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/live/hub', html);
  assert.strictEqual(result.eligible, false, 'BroadcastEvent in generic @graph without VideoObject must be rejected');
  assert.strictEqual(result.skipped, true);
});

test('Regression: @type array containing BroadcastEvent => REJECT', () => {
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": ["WebPage", "BroadcastEvent"],
            "name": "Hybrid Page"
          }
        </script>
      </head>
      <body>Hybrid page</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/live/hybrid', html);
  assert.strictEqual(result.eligible, false, '@type array containing BroadcastEvent must be rejected');
  assert.strictEqual(result.skipped, true);
});

test('Regression: VideoObject + publication BroadcastEvent + required fields => ACCEPT', () => {
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "World Cup Final 2026",
            "description": "Live broadcast stream",
            "thumbnailUrl": "https://www.teleview.me/images/world-cup-thumb.jpg",
            "uploadDate": "2026-06-15T18:00:00Z",
            "publication": {
              "@type": "BroadcastEvent",
              "isLiveBroadcast": true,
              "startDate": "2026-06-15T18:00:00Z",
              "endDate": "2026-06-15T21:00:00Z"
            }
          }
        </script>
      </head>
      <body>Live Stream</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/live/world-cup-final', html);
  assert.strictEqual(result.eligible, true, 'VideoObject with required fields and publication BroadcastEvent must be accepted');
  assert.strictEqual(result.skipped, false);
  assert.strictEqual(result.detectedType, 'BroadcastEvent');
});

test('Regression: VideoObject + events BroadcastEvent => REJECT', () => {
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Derby Match Live",
            "thumbnailUrl": "https://www.teleview.me/images/derby.jpg",
            "uploadDate": "2026-05-10T12:00:00Z",
            "events": {
              "@type": "BroadcastEvent",
              "isLiveBroadcast": true,
              "startDate": "2026-05-10T12:00:00Z"
            }
          }
        </script>
      </head>
      <body>Derby Match</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/live/derby-events', html);
  assert.strictEqual(result.eligible, false, 'VideoObject.events must NOT be eligible');
  assert.strictEqual(result.skipped, true);
});

test('Regression: VideoObject + hasBroadcastEvent => REJECT', () => {
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Derby Match Live",
            "thumbnailUrl": "https://www.teleview.me/images/derby.jpg",
            "uploadDate": "2026-05-10T12:00:00Z",
            "hasBroadcastEvent": {
              "@type": "BroadcastEvent",
              "isLiveBroadcast": true,
              "startDate": "2026-05-10T12:00:00Z"
            }
          }
        </script>
      </head>
      <body>Derby Match</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/live/derby-has-event', html);
  assert.strictEqual(result.eligible, false, 'VideoObject.hasBroadcastEvent must NOT be eligible');
  assert.strictEqual(result.skipped, true);
});

test('Regression: VideoObject + publication BroadcastEvent but missing required VideoObject fields => REJECT', () => {
  // Missing thumbnailUrl and uploadDate
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Live Match Without Thumbnail",
            "publication": {
              "@type": "BroadcastEvent",
              "isLiveBroadcast": true,
              "startDate": "2026-06-15T18:00:00Z"
            }
          }
        </script>
      </head>
      <body>Live Stream</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/live/no-thumb', html);
  assert.strictEqual(result.eligible, false, 'Missing VideoObject required fields must be rejected');
  assert.strictEqual(result.skipped, true);
});

test('Regression: VideoObject + publication BroadcastEvent but isLiveBroadcast=false => REJECT', () => {
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "VOD Match Replay",
            "thumbnailUrl": "https://www.teleview.me/images/vod.jpg",
            "uploadDate": "2026-06-15T18:00:00Z",
            "publication": {
              "@type": "BroadcastEvent",
              "isLiveBroadcast": false,
              "startDate": "2026-06-15T18:00:00Z"
            }
          }
        </script>
      </head>
      <body>VOD Replay</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/live/vod-replay', html);
  assert.strictEqual(result.eligible, false, 'BroadcastEvent with isLiveBroadcast=false must be rejected');
  assert.strictEqual(result.skipped, true);
});

test('Regression: valid JobPosting => ACCEPT', () => {
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Senior React Engineer",
            "description": "Remote engineering role"
          }
        </script>
      </head>
      <body>Careers page</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/careers/senior-engineer', html);
  assert.strictEqual(result.eligible, true, 'Valid JobPosting must be accepted');
  assert.strictEqual(result.skipped, false);
  assert.strictEqual(result.detectedType, 'JobPosting');
});

test('Regression: valid JobPosting inside @graph => ACCEPT', () => {
  const html = `
    <html>
      <head>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "Organization", "name": "Teleview" },
              { "@type": "JobPosting", "title": "Customer Support Lead" }
            ]
          }
        </script>
      </head>
      <body>Careers</body>
    </html>
  `;
  const result = isEligibleForGoogleIndexingApi('https://www.teleview.me/careers/support-lead', html);
  assert.strictEqual(result.eligible, true);
  assert.strictEqual(result.detectedType, 'JobPosting');
});

// -------------------------------------------------------------
// GROUP 3: Credential Validation & Key Safety
// -------------------------------------------------------------
console.log('\nGroup 3: Credential Validation & Key Safety');

test('Private key normalizer handles escaped newlines correctly', () => {
  const rawKey = '-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgk\\n-----END PRIVATE KEY-----';
  const normalized = normalizePrivateKey(rawKey);
  assert.strictEqual(normalized, '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgk\n-----END PRIVATE KEY-----');
});

test('validateCredentials flags missing email cleanly', () => {
  const originalEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  delete process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  const result = validateCredentials();
  assert.strictEqual(result.valid, false);
  assert.match(result.error, /Missing GOOGLE_SERVICE_ACCOUNT_EMAIL/);

  if (originalEmail) process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL = originalEmail;
});

test('validateCredentials flags invalid email domain', () => {
  const originalEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL = 'user@gmail.com';

  const result = validateCredentials();
  assert.strictEqual(result.valid, false);
  assert.match(result.error, /Invalid GOOGLE_SERVICE_ACCOUNT_EMAIL format/);

  if (originalEmail) process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL = originalEmail;
  else delete process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
});

test('validateCredentials never leaks raw private key content in error message', () => {
  const originalEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const originalKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  const secretSecret = 'MY_SUPER_SECRET_KEY_12345';
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL = 'bot@teleview-project.iam.gserviceaccount.com';
  process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY = `invalid-format-${secretSecret}`;

  const result = validateCredentials();
  assert.strictEqual(result.valid, false);
  assert.ok(!result.error.includes(secretSecret), 'Error message must NOT contain private key secret');
  assert.match(result.error, /Must be a PEM-encoded RSA private key/);

  if (originalEmail) process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL = originalEmail;
  else delete process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  if (originalKey) process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY = originalKey;
  else delete process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
});

// -------------------------------------------------------------
// GROUP 4: GoogleIndexingClient - Execution & Mocked Network
// -------------------------------------------------------------
console.log('\nGroup 4: GoogleIndexingClient Execution & Safety Controls');

await asyncTest('Skips standard Teleview pages without making any network call', async () => {
  let networkCalled = false;
  const mockFetch = async () => {
    networkCalled = true;
    return new Response('{}', { status: 200 });
  };

  const client = new GoogleIndexingClient(mockFetch);
  const result = await client.notify('https://www.teleview.me/iptv-pricing', 'URL_UPDATED');

  assert.strictEqual(result.status, 'SKIPPED');
  assert.strictEqual(result.eligible, false);
  assert.strictEqual(networkCalled, false, 'Network call must NEVER be made for ineligible pages');
  assert.match(result.skippedReason, /does not contain JobPosting or VideoObject with embedded BroadcastEvent/);
});

await asyncTest('Dry-run on standard page is safely skipped without network call', async () => {
  let networkCalled = false;
  const mockFetch = async () => {
    networkCalled = true;
    return new Response('{}', { status: 200 });
  };

  const client = new GoogleIndexingClient(mockFetch);
  const skippedDry = await client.notify('https://www.teleview.me/iptv-free-trial', 'URL_UPDATED', { dryRun: true });
  assert.strictEqual(skippedDry.status, 'SKIPPED');
  assert.strictEqual(networkCalled, false);
});

await asyncTest('Regression: Ineligible page dry-run succeeds with zero credentials and GOOGLE_INDEXING_ENABLED=false', async () => {
  const originalEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const originalKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const originalEnabled = process.env.GOOGLE_INDEXING_ENABLED;

  delete process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  delete process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  process.env.GOOGLE_INDEXING_ENABLED = 'false';

  let networkCalled = false;
  const mockFetch = async () => {
    networkCalled = true;
    return new Response('{}', { status: 200 });
  };

  const client = new GoogleIndexingClient(mockFetch);
  const result = await client.notify('https://www.teleview.me/iptv-pricing', 'URL_UPDATED', { dryRun: true });

  assert.strictEqual(result.status, 'SKIPPED');
  assert.strictEqual(result.eligible, false);
  assert.strictEqual(networkCalled, false, 'Must not make any network calls');
  assert.match(result.skippedReason, /does not contain JobPosting or VideoObject with embedded BroadcastEvent/);

  if (originalEmail !== undefined) process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL = originalEmail;
  if (originalKey !== undefined) process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY = originalKey;
  if (originalEnabled !== undefined) process.env.GOOGLE_INDEXING_ENABLED = originalEnabled;
});

await asyncTest('Safety kill switch blocks requests when GOOGLE_INDEXING_ENABLED is false', async () => {
  const originalEnabled = process.env.GOOGLE_INDEXING_ENABLED;
  process.env.GOOGLE_INDEXING_ENABLED = 'false';

  let networkCalled = false;
  const mockFetch = async () => {
    networkCalled = true;
    return new Response('{}', { status: 200 });
  };

  const client = new GoogleIndexingClient(mockFetch);
  const result = await client.notify('https://www.teleview.me/iptv-subscription', 'URL_UPDATED');
  assert.strictEqual(result.status, 'SKIPPED');
  assert.strictEqual(networkCalled, false);

  if (originalEnabled !== undefined) process.env.GOOGLE_INDEXING_ENABLED = originalEnabled;
  else delete process.env.GOOGLE_INDEXING_ENABLED;
});

await asyncTest('Mocked Google API HTTP 200 returns SUCCESS with crawl acceptance note', async () => {
  const mockResponseData = {
    urlNotificationMetadata: {
      url: 'https://www.teleview.me/careers/job-1',
      latestUpdate: {
        url: 'https://www.teleview.me/careers/job-1',
        type: 'URL_UPDATED',
        notifyTime: '2026-09-17T12:00:00Z'
      }
    }
  };

  const mockFetch = async (input, init) => {
    assert.strictEqual(init.method, 'POST');
    assert.strictEqual(init.headers['Content-Type'], 'application/json');
    const body = JSON.parse(init.body);
    assert.strictEqual(body.type, 'URL_UPDATED');

    return new Response(JSON.stringify(mockResponseData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  };

  const response = await mockFetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: 'https://www.teleview.me/careers/job-1', type: 'URL_UPDATED' })
  });
  const data = await response.json();
  assert.strictEqual(response.status, 200);
  assert.strictEqual(data.urlNotificationMetadata.latestUpdate.type, 'URL_UPDATED');
});

await asyncTest('Mocked Google API HTTP 403 handles Search Console ownership permission error', async () => {
  const mock403Data = {
    error: {
      code: 403,
      message: 'Permission denied. Failed to verify ownership of the URL in Google Search Console.',
      status: 'PERMISSION_DENIED'
    }
  };

  const mockFetch = async () => {
    return new Response(JSON.stringify(mock403Data), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  };

  const res = await mockFetch('https://indexing.googleapis.com/v3/urlNotifications:publish');
  assert.strictEqual(res.status, 403);
  const data = await res.json();
  assert.match(data.error.message, /Permission denied/);
});

await asyncTest('Mocked Google API HTTP 429 handles quota exhaustion', async () => {
  const mock429Data = {
    error: {
      code: 429,
      message: 'Quota exceeded for quota metric Indexing Requests',
      status: 'RESOURCE_EXHAUSTED'
    }
  };

  const mockFetch = async () => {
    return new Response(JSON.stringify(mock429Data), {
      status: 429,
      headers: { 'Content-Type': 'application/json' }
    });
  };

  const res = await mockFetch('https://indexing.googleapis.com/v3/urlNotifications:publish');
  assert.strictEqual(res.status, 429);
  const data = await res.json();
  assert.match(data.error.message, /Quota exceeded/);
});

// -------------------------------------------------------------
// Test Results Summary
// -------------------------------------------------------------
console.log('\n──────────────────────────────────────────────────────────');
console.log(`Test Results: Total=${passed + failed} | Passed=${passed} | Failed=${failed}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

if (failed > 0) {
  process.exit(1);
}
