import fs from 'node:fs';
import path from 'node:path';
import { JWT } from 'google-auth-library';
import type { ServiceAccountCredentials } from './types.ts';

const GOOGLE_INDEXING_SCOPE = 'https://www.googleapis.com/auth/indexing';

let envLoaded = false;

/**
 * Attempts to load environment variables from .env.local or .env once on startup.
 */
export function loadEnvIfNeeded(): void {
  if (envLoaded) return;
  envLoaded = true;

  if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
    return;
  }
  if (typeof process.loadEnvFile === 'function') {
    const candidates = ['.env.local', '.env'];
    for (const file of candidates) {
      if (fs.existsSync(file)) {
        try {
          process.loadEnvFile(file);
          if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) break;
        } catch {
          // Ignore syntax issues in untrusted env files
        }
      }
    }
  }
}

// Initial load on import
loadEnvIfNeeded();

/**
 * Checks if Google Indexing API submission is explicitly enabled via environment variable.
 * Defaults to false as a safety kill switch.
 */
export function isGoogleIndexingEnabled(): boolean {
  loadEnvIfNeeded();
  return process.env.GOOGLE_INDEXING_ENABLED === 'true';
}

/**
 * Normalizes private key strings by converting literal escaped \n to real newlines.
 */
export function normalizePrivateKey(key: string | undefined): string {
  if (!key) return '';
  return key.replace(/\\n/g, '\n').trim();
}

/**
 * Validates the presence and structural correctness of service account credentials.
 * Never includes the private key in error messages.
 */
export function validateCredentials(): {
  valid: boolean;
  email?: string;
  error?: string;
} {
  loadEnvIfNeeded();

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email) {
    return {
      valid: false,
      error: 'Missing GOOGLE_SERVICE_ACCOUNT_EMAIL environment variable.'
    };
  }

  // Basic email pattern check
  if (!email.includes('@') || !email.includes('.iam.gserviceaccount.com')) {
    return {
      valid: false,
      error: 'Invalid GOOGLE_SERVICE_ACCOUNT_EMAIL format. Expected a Google service account email (*@*.iam.gserviceaccount.com).'
    };
  }

  if (!rawKey) {
    return {
      valid: false,
      error: 'Missing GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY environment variable.'
    };
  }

  const normalizedKey = normalizePrivateKey(rawKey);
  if (
    !normalizedKey.includes('-----BEGIN PRIVATE KEY-----') ||
    !normalizedKey.includes('-----END PRIVATE KEY-----')
  ) {
    return {
      valid: false,
      error: 'Invalid GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY format. Must be a PEM-encoded RSA private key.'
    };
  }

  return {
    valid: true,
    email
  };
}

/**
 * Retrieves normalized credentials from environment variables.
 */
export function getServiceAccountCredentials(): ServiceAccountCredentials {
  loadEnvIfNeeded();

  const validation = validateCredentials();
  if (!validation.valid) {
    throw new Error(`Google Service Account configuration error: ${validation.error}`);
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!.trim();
  const privateKey = normalizePrivateKey(process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!);

  return {
    clientEmail,
    privateKey,
    projectId: process.env.GOOGLE_PROJECT_ID?.trim()
  };
}

/**
 * Creates an authorized JWT client for Google Indexing API.
 */
export function getGoogleAuthClient(credentials?: ServiceAccountCredentials): JWT {
  const creds = credentials || getServiceAccountCredentials();

  return new JWT({
    email: creds.clientEmail,
    key: creds.privateKey,
    scopes: [GOOGLE_INDEXING_SCOPE]
  });
}

/**
 * Retrieves a fresh Google OAuth2 access token for the Indexing API scope.
 */
export async function getAccessToken(client?: JWT): Promise<string> {
  const authClient = client || getGoogleAuthClient();
  const tokenResponse = await authClient.getAccessToken();
  if (!tokenResponse || !tokenResponse.token) {
    throw new Error('Failed to obtain Google OAuth2 access token.');
  }
  return tokenResponse.token;
}
