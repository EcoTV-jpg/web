/**
 * Google Indexing API Integration - Type Definitions
 *
 * Strictly adheres to Google Indexing API v3 documentation:
 * https://developers.google.com/search/apis/indexing-api/v3/using-api
 *
 * Supported schemas: JobPosting or BroadcastEvent embedded in VideoObject.
 */

export type IndexingNotificationType = 'URL_UPDATED' | 'URL_DELETED';

export type IndexingActionStatus = 'SUCCESS' | 'SKIPPED' | 'FAILED' | 'DRY_RUN';

export interface EligibilityResult {
  url: string;
  eligible: boolean;
  skipped: boolean;
  reason: string;
  detectedType?: 'JobPosting' | 'BroadcastEvent';
}

export interface GoogleIndexingMetadata {
  url: string;
  latestUpdate?: {
    url: string;
    type: IndexingNotificationType;
    notifyTime: string;
  };
  latestRemove?: {
    url: string;
    type: IndexingNotificationType;
    notifyTime: string;
  };
}

export interface IndexingApiResult {
  url: string;
  action: IndexingNotificationType | 'STATUS';
  status: IndexingActionStatus;
  statusCode?: number;
  message: string;
  eligible: boolean;
  skippedReason?: string;
  notifyTime?: string;
  metadata?: GoogleIndexingMetadata;
  error?: string;
}

export interface BatchIndexingResult {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
  dryRun: boolean;
  results: IndexingApiResult[];
}

export interface IndexingClientOptions {
  dryRun?: boolean;
}

export interface ServiceAccountCredentials {
  clientEmail: string;
  privateKey: string;
  projectId?: string;
}
