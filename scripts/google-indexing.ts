#!/usr/bin/env node

/**
 * Google Indexing API CLI Tool
 *
 * Usage:
 *   node scripts/google-indexing.ts --url="https://www.teleview.me/some-page" --action=update --dry-run
 *   node scripts/google-indexing.ts --url="https://www.teleview.me/some-page" --action=status
 *   node scripts/google-indexing.ts --batch=urls.txt --action=update --dry-run
 */

import fs from 'node:fs';
import { googleIndexingClient } from '../server/google-indexing/client.ts';
import { isEligibleForGoogleIndexingApi } from '../server/google-indexing/eligibility.ts';
import { isGoogleIndexingEnabled, validateCredentials } from '../server/google-indexing/auth.ts';
import type { IndexingNotificationType } from '../server/google-indexing/types.ts';

function parseArgs() {
  const args = process.argv.slice(2);
  const options: {
    url?: string;
    action: 'update' | 'delete' | 'status';
    dryRun: boolean;
    batch?: string;
    help: boolean;
  } = {
    action: 'update',
    dryRun: false,
    help: false
  };

  for (const arg of args) {
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg.startsWith('--url=')) {
      options.url = arg.split('=')[1]?.replace(/^["']|["']$/g, '');
    } else if (arg.startsWith('--action=')) {
      const act = arg.split('=')[1]?.toLowerCase();
      if (act === 'update' || act === 'delete' || act === 'status') {
        options.action = act;
      } else {
        console.error(`Unknown action: ${act}. Supported actions: update, delete, status.`);
        process.exit(1);
      }
    } else if (arg.startsWith('--batch=')) {
      options.batch = arg.split('=')[1]?.replace(/^["']|["']$/g, '');
    }
  }

  return options;
}

function printUsage() {
  console.log(`
Google Indexing API CLI
=======================
Official Scope: Strictly supports JobPosting or BroadcastEvent (inside VideoObject) URLs.
Submitting standard pages violates Google's Indexing API guidelines.

Usage:
  node scripts/google-indexing.ts [options]

Options:
  --url=<url>         URL to notify or query
  --action=<action>   Action to perform: update (default), delete, or status
  --dry-run           Validate eligibility and payload without sending network requests
  --batch=<path>      Path to a text file with URLs (one per line) or JSON array
  --help, -h          Show this help message

Environment Variables:
  GOOGLE_INDEXING_ENABLED=true/false   Kill switch (default: false)
  GOOGLE_SERVICE_ACCOUNT_EMAIL         Service account email
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY   RSA private key (PEM format)
  `);
}

async function main() {
  const options = parseArgs();

  if (options.help || (!options.url && !options.batch)) {
    printUsage();
    process.exit(options.help ? 0 : 1);
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  Google Indexing API Client - Teleview SEO Gate');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`  Action:    ${options.action.toUpperCase()}`);
  console.log(`  Dry Run:   ${options.dryRun ? 'YES (No external API calls)' : 'NO'}`);
  console.log(`  Enabled:   ${isGoogleIndexingEnabled() ? 'YES' : 'NO (Kill switch active)'}`);
  console.log('──────────────────────────────────────────────────────────');

  let urls: string[] = [];
  if (options.url) {
    urls.push(options.url);
  } else if (options.batch) {
    if (!fs.existsSync(options.batch)) {
      console.error(`Batch file not found: ${options.batch}`);
      process.exit(1);
    }
    const content = fs.readFileSync(options.batch, 'utf-8').trim();
    if (content.startsWith('[')) {
      urls = JSON.parse(content);
    } else {
      urls = content.split('\n').map((u) => u.trim()).filter((u) => u && !u.startsWith('#'));
    }
  }

  console.log(`Processing ${urls.length} URL(s)...\n`);

  let successCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (const url of urls) {
    console.log(`• Target: ${url}`);

    // Check eligibility
    const eligibility = isEligibleForGoogleIndexingApi(url);
    if (!eligibility.eligible) {
      console.log(`  ⛔ SKIPPED (Eligibility Gate):`);
      console.log(`     Reason: ${eligibility.reason}`);
      console.log(`     Standard Teleview pages must rely on sitemap.xml and Search Console.\n`);
      skippedCount++;
      continue;
    }

    console.log(`  ✅ Eligible: ${eligibility.reason}`);

    if (options.action === 'status') {
      const result = await googleIndexingClient.getStatus(url, { dryRun: options.dryRun });
      console.log(`  Status Result: [${result.status}] ${result.message}`);
      if (result.metadata) {
        console.log(`  Metadata:`, JSON.stringify(result.metadata, null, 2));
      }
      if (result.status === 'SUCCESS') successCount++;
      else if (result.status === 'FAILED') failedCount++;
      else skippedCount++;
    } else {
      const actionType: IndexingNotificationType =
        options.action === 'delete' ? 'URL_DELETED' : 'URL_UPDATED';

      const result = await googleIndexingClient.notify(url, actionType, { dryRun: options.dryRun });
      console.log(`  Result: [${result.status}] ${result.message}`);
      if (result.error) {
        console.log(`  Error Details: ${result.error}`);
      }
      if (result.status === 'SUCCESS') successCount++;
      else if (result.status === 'FAILED') failedCount++;
      else skippedCount++;
    }
    console.log('');
  }

  console.log('──────────────────────────────────────────────────────────');
  console.log(`Summary: Total=${urls.length} | Success=${successCount} | Skipped=${skippedCount} | Failed=${failedCount}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

main().catch((err) => {
  console.error('Fatal CLI Error:', err);
  process.exit(1);
});
