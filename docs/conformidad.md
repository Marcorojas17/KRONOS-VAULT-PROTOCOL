---
layout: default
title: Conformance
description: KTP-001 conformance levels 1 through 4.
---

# Conformance levels

Levels are cumulative. Level N implies levels 1..N-1.

| Level | Name | Adds |
|:-----:|------|------|
| 1 | Basic | Folio + schema + JCS + SHA-256 + JWS |
| 2 | Intermediate | + double RFC 3161 timestamp |
| 3 | Complete | + blockchain anchor |
| 4 | Advanced | + public state query + DID/VC |

## Level 1 · Basic

- Parse folio per regex.
- Validate credential against the schema.
- Canonicalize per RFC 8785.
- Compute SHA-256.
- Verify JWS detached signature.
- Reject malformed input.

## Level 2 · Intermediate

Everything in Level 1, plus:

- Verify at least two RFC 3161 timestamps.
- Verify the TSA certificate chain.
- Reject expired or revoked TSA certificates.

## Level 3 · Complete

Everything in Level 2, plus:

- Verify a blockchain anchor.
- Confirm the anchor transaction includes the credential hash.

## Level 4 · Advanced

Everything in Level 3, plus:

- Query the current state publicly.
- Support DID-based issuer identity.
- Support W3C Verifiable Credentials.
- Reject illegal `1 → 0` state transitions.

## Declaring compliance

If your implementation meets all MUST requirements of the level and
all lower levels, you MAY declare:

> This implementation is KTP-001 Level N compliant.

No registration. No authorization. No fee.

Full definitions:
[`protocol/conformance/LEVELS.md`](https://github.com/Marcorojas17/kronos-protocol/blob/main/protocol/conformance/LEVELS.md).
