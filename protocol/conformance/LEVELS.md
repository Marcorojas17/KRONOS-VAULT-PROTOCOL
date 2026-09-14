# Conformance Levels · KTP-001

Levels are cumulative. Level N implies levels 1..N-1.

---

## Level 1 · BASIC

An implementation MUST:

- Parse a folio matching `^FVD-\([A-Z0-9]{2,20}\)-[0-9]{5,}$`.
- Validate a credential against `credential.schema.json`.
- Canonicalize the credential per RFC 8785.
- Compute SHA-256 over the canonical bytes.
- Verify the JWS detached signature (RFC 7797).
- Reject credentials missing required members.

Passing criterion: all Level 1 vectors in `test-vectors/valid/` and
`test-vectors/invalid/` produce the expected result.

---

## Level 2 · INTERMEDIATE

Level 1 plus:

- Verify at least two RFC 3161 timestamps.
- Verify the TSA certificate chain up to a trusted root.
- Reject credentials with fewer than two timestamps.
- Reject expired or revoked TSA certificates.

Passing criterion: all Level 2 vectors produce the expected result.

---

## Level 3 · COMPLETE

Level 2 plus:

- Verify a blockchain anchor.
- Confirm the anchor's transaction includes the credential hash.
- Reject credentials whose anchor cannot be confirmed.

Supported chains at this level: `ethereum`, `polygon`,
`opentimestamps`.

Passing criterion: all Level 3 vectors produce the expected result.

---

## Level 4 · ADVANCED

Level 3 plus:

- Query the current state publicly.
- Support DID-based issuer identity.
- Support W3C Verifiable Credentials interoperability.
- Reject credentials that attempt `1 → 0` state transitions.

Passing criterion: all Level 4 vectors produce the expected result,
including negative tests for illegal transitions.

---

## Summary table

| Requirement | L1 | L2 | L3 | L4 |
|-------------|:--:|:--:|:--:|:--:|
| Folio regex | ✓ | ✓ | ✓ | ✓ |
| Schema validation | ✓ | ✓ | ✓ | ✓ |
| JCS canonicalization | ✓ | ✓ | ✓ | ✓ |
| SHA-256 | ✓ | ✓ | ✓ | ✓ |
| JWS signature | ✓ | ✓ | ✓ | ✓ |
| Double timestamp |  | ✓ | ✓ | ✓ |
| TSA chain |  | ✓ | ✓ | ✓ |
| Blockchain anchor |  |  | ✓ | ✓ |
| Public state query |  |  |  | ✓ |
| DID / VC support |  |  |  | ✓ |

---

## Declaring compliance

Example statement:

> This implementation is KTP-001 Level 3 compliant.

No authorization is required. No registration is required. No fee
is required.

---

## Badge

An implementation MAY display the following text (not the logo,
which is governed by `brand/`):

```text
KTP-001 Level N · compliant
```

---

*Last updated: 2026-09-14*
