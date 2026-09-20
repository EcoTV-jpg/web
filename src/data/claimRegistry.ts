/* ------------------------------------------------------------------
   Claim Registry — typed access to the single source of truth for
   Teleview factual claims (src/data/claim-registry.json).

   Enforcement is via scripts/claim-consistency-audit.mjs (fails the
   check when critical claims diverge), NOT via string interpolation:
   200+ prose occurrences stay human-readable while the audit keeps
   them consistent. Use CLAIM_VALUES when writing NEW structured
   (non-prose) data so future code reads canonical values directly.
------------------------------------------------------------------- */

import registry from "./claim-registry.json";

export type ClaimVerificationStatus = "consistent" | "human-confirmation-required";

export interface ClaimRecord {
  id: string;
  category: string;
  canonicalValue: unknown;
  sourceFile: string;
  verificationStatus: ClaimVerificationStatus;
  lastVerified: string;
  consumers: string[];
  notes: string;
  humanConfirmationRequired: boolean;
  resolution: unknown;
  activationEvidence?: {
    wordingA_5to15min: string[];
    wordingB_instant: string[];
  };
}

export interface ClaimRegistryFile {
  version: number;
  lastAudited: string;
  auditorNote: string;
  claims: ClaimRecord[];
}

const data = registry as ClaimRegistryFile;

export const CLAIM_REGISTRY_VERSION = data.version;
export const CLAIM_REGISTRY_LAST_AUDITED = data.lastAudited;
export const CLAIMS: ClaimRecord[] = data.claims;

export function getClaim(id: string): ClaimRecord | undefined {
  return CLAIMS.find((claim) => claim.id === id);
}

/** Canonical values keyed by claim ID. `activation.time` is null until a human resolves the contradiction. */
export const CLAIM_VALUES: Record<string, unknown> = Object.fromEntries(
  CLAIMS.map((claim) => [claim.id, claim.canonicalValue]),
);

export function unresolvedClaims(): ClaimRecord[] {
  return CLAIMS.filter((claim) => claim.humanConfirmationRequired && claim.resolution == null);
}

/**
 * Standardized, typed canonical commercial facts for Teleview components.
 * Consumes single-source values from claim-registry.json.
 */
export const canonicalClaims = {
  channelsCount: (CLAIM_VALUES["channels.count"] as string) || "25,000+",
  vodCount: (CLAIM_VALUES["vod.count"] as string) || "100,000+",
  epgDuration: (CLAIM_VALUES["epg.duration"] as string) || "7-day",
  activationTime: (CLAIM_VALUES["activation.time"] as string) || "typically within 5–15 minutes",
  connectionsRange: (CLAIM_VALUES["connections.range"] as string) || "1 to 4 connections",
  credentialsFormat: (CLAIM_VALUES["setup.credentials"] as string) || "Xtream Codes API + M3U playlist",
  trialDuration: (CLAIM_VALUES["trial.duration"] as string) || "24-hour",
  supportEmail: (CLAIM_VALUES["support.email"] as string) || "Help@Teleview.me",
  supportWhatsapp: (CLAIM_VALUES["support.whatsapp"] as string) || "+447848197761",
  paymentStatus: "Available payment options are confirmed during ordering.",
  autoRenewalPolicy: "Prepaid plans. No automatic renewal.",
  refundPeriod: (CLAIM_VALUES["refund.period"] as string) || "14-day",
};

