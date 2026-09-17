import { isEligibleForGoogleIndexingApi } from './eligibility.ts';
import { isGoogleIndexingEnabled, validateCredentials, getAccessToken } from './auth.ts';
import type {
  IndexingNotificationType,
  IndexingApiResult,
  BatchIndexingResult,
  IndexingClientOptions,
  GoogleIndexingMetadata
} from './types.ts';

const INDEXING_API_PUBLISH_URL = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
const INDEXING_API_METADATA_URL = 'https://indexing.googleapis.com/v3/urlNotifications/metadata';

export class GoogleIndexingClient {
  private customFetch?: typeof fetch;

  constructor(customFetch?: typeof fetch) {
    this.customFetch = customFetch;
  }

  private async fetchFn(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    if (this.customFetch) {
      return this.customFetch(input, init);
    }
    return fetch(input, init);
  }

  /**
   * Publishes a URL update or delete notification to Google Indexing API.
   *
   * Enforces strict eligibility gate: Only URLs with JobPosting or BroadcastEvent
   * schemas are allowed. All other URLs are blocked and safely skipped.
   */
  async notify(
    url: string,
    action: IndexingNotificationType,
    options: IndexingClientOptions = {}
  ): Promise<IndexingApiResult> {
    // 1. Strict Eligibility Gate
    const eligibility = isEligibleForGoogleIndexingApi(url);
    if (!eligibility.eligible) {
      return {
        url,
        action,
        status: 'SKIPPED',
        eligible: false,
        skippedReason: eligibility.reason,
        message: `Notification skipped: ${eligibility.reason}`
      };
    }

    // 2. Dry Run Check
    if (options.dryRun) {
      const credValidation = validateCredentials();
      const credStatus = credValidation.valid
        ? 'Credentials verified valid.'
        : `Note on credentials: ${credValidation.error}`;

      return {
        url,
        action,
        status: 'DRY_RUN',
        eligible: true,
        message: `[DRY RUN] Would send ${action} notification to Google Indexing API for eligible URL: ${url}. (${credStatus})`
      };
    }

    // 3. Safety Kill Switch
    if (!isGoogleIndexingEnabled()) {
      return {
        url,
        action,
        status: 'SKIPPED',
        eligible: true,
        skippedReason: 'GOOGLE_INDEXING_ENABLED is not set to true. Submission blocked by safety kill switch.',
        message: 'Notification skipped: GOOGLE_INDEXING_ENABLED is false.'
      };
    }

    // 4. Validate Credentials
    const credValidation = validateCredentials();
    if (!credValidation.valid) {
      return {
        url,
        action,
        status: 'FAILED',
        eligible: true,
        error: credValidation.error,
        message: `Authentication failed: ${credValidation.error}`
      };
    }

    // 5. Send authenticated request to Google Indexing API
    try {
      const accessToken = await getAccessToken();

      const response = await this.fetchFn(INDEXING_API_PUBLISH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          url,
          type: action
        })
      });

      const statusCode = response.status;
      const responseData = await response.json().catch(() => null);

      if (response.ok) {
        return {
          url,
          action,
          status: 'SUCCESS',
          statusCode,
          notifyTime: responseData?.urlNotificationMetadata?.latestUpdate?.notifyTime ||
                      responseData?.urlNotificationMetadata?.latestRemove?.notifyTime ||
                      new Date().toISOString(),
          message: 'HTTP 200: Notification successfully accepted by Google Indexing API. Note: Google treats this as a crawl request signal, not an indexing guarantee.',
          eligible: true
        };
      }

      // Handle specific HTTP error status codes
      let errorDetail = responseData?.error?.message || response.statusText || 'Unknown error';
      let contextualHelp = '';

      if (statusCode === 400) {
        contextualHelp = 'Bad Request: The submitted URL or payload is malformed.';
      } else if (statusCode === 401) {
        contextualHelp = 'Unauthorized: OAuth token is invalid or expired.';
      } else if (statusCode === 403) {
        contextualHelp = 'Permission Denied: Ensure the service account email is added as an Owner in Google Search Console for this domain property.';
      } else if (statusCode === 429) {
        contextualHelp = 'Quota Exceeded: The Google Indexing API daily rate limit (200 requests/day default) has been reached.';
      } else if (statusCode >= 500) {
        contextualHelp = 'Google Server Error: Temporary failure on Google servers. Retry with exponential backoff.';
      }

      return {
        url,
        action,
        status: 'FAILED',
        statusCode,
        error: `${errorDetail}${contextualHelp ? ` (${contextualHelp})` : ''}`,
        message: `Google Indexing API error HTTP ${statusCode}: ${errorDetail}`,
        eligible: true
      };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      return {
        url,
        action,
        status: 'FAILED',
        error: errorMsg,
        message: `Network/Request failure communicating with Google Indexing API: ${errorMsg}`,
        eligible: true
      };
    }
  }

  /**
   * Retrieves metadata about Google's latest indexing notifications for a URL.
   */
  async getStatus(url: string, options: IndexingClientOptions = {}): Promise<IndexingApiResult> {
    const eligibility = isEligibleForGoogleIndexingApi(url);
    if (!eligibility.eligible) {
      return {
        url,
        action: 'STATUS',
        status: 'SKIPPED',
        eligible: false,
        skippedReason: eligibility.reason,
        message: `Status check skipped: ${eligibility.reason}`
      };
    }

    if (options.dryRun) {
      return {
        url,
        action: 'STATUS',
        status: 'DRY_RUN',
        eligible: true,
        message: `[DRY RUN] Would query Google Indexing API metadata endpoint for URL: ${url}`
      };
    }

    if (!isGoogleIndexingEnabled()) {
      return {
        url,
        action: 'STATUS',
        status: 'SKIPPED',
        eligible: true,
        skippedReason: 'GOOGLE_INDEXING_ENABLED is false.',
        message: 'Status query skipped: GOOGLE_INDEXING_ENABLED is false.'
      };
    }

    try {
      const accessToken = await getAccessToken();
      const metadataUrl = `${INDEXING_API_METADATA_URL}?url=${encodeURIComponent(url)}`;

      const response = await this.fetchFn(metadataUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const statusCode = response.status;
      const responseData = await response.json().catch(() => null);

      if (response.ok) {
        const metadata: GoogleIndexingMetadata = {
          url: responseData?.url || url,
          latestUpdate: responseData?.latestUpdate,
          latestRemove: responseData?.latestRemove
        };

        return {
          url,
          action: 'STATUS',
          status: 'SUCCESS',
          statusCode,
          metadata,
          message: 'Google Indexing metadata retrieved successfully.',
          eligible: true
        };
      }

      const errorDetail = responseData?.error?.message || response.statusText || 'Status query failed';
      return {
        url,
        action: 'STATUS',
        status: 'FAILED',
        statusCode,
        error: errorDetail,
        message: `Google Indexing API status query returned HTTP ${statusCode}: ${errorDetail}`,
        eligible: true
      };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      return {
        url,
        action: 'STATUS',
        status: 'FAILED',
        error: errorMsg,
        message: `Error querying Google Indexing API metadata: ${errorMsg}`,
        eligible: true
      };
    }
  }

  /**
   * Processes a batch of URLs with rate limiting.
   */
  async batchNotify(
    urls: string[],
    action: IndexingNotificationType,
    options: IndexingClientOptions = {}
  ): Promise<BatchIndexingResult> {
    const results: IndexingApiResult[] = [];
    let successful = 0;
    let skipped = 0;
    let failed = 0;

    for (const url of urls) {
      const result = await this.notify(url, action, options);
      results.push(result);

      if (result.status === 'SUCCESS') {
        successful++;
      } else if (result.status === 'SKIPPED' || result.status === 'DRY_RUN') {
        skipped++;
      } else {
        failed++;
      }

      // Respect API rate limits between requests (except when skipped immediately)
      if (result.status === 'SUCCESS' || result.status === 'FAILED') {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }

    return {
      total: urls.length,
      successful,
      skipped,
      failed,
      dryRun: Boolean(options.dryRun),
      results
    };
  }
}

// Singleton convenience export
export const googleIndexingClient = new GoogleIndexingClient();

export async function notifyGoogleUrlUpdated(
  url: string,
  options?: IndexingClientOptions
): Promise<IndexingApiResult> {
  return googleIndexingClient.notify(url, 'URL_UPDATED', options);
}

export async function notifyGoogleUrlDeleted(
  url: string,
  options?: IndexingClientOptions
): Promise<IndexingApiResult> {
  return googleIndexingClient.notify(url, 'URL_DELETED', options);
}

export async function getGoogleIndexingStatus(
  url: string,
  options?: IndexingClientOptions
): Promise<IndexingApiResult> {
  return googleIndexingClient.getStatus(url, options);
}
