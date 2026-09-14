---
layout: default
title: Specification
description: Normative specification KTP-001.
---

# KTP-001 · Specification

> Normative document. Read the full text at
> [`protocol/KTP-001.md`](https://github.com/Marcorojas17/kronos-protocol/blob/main/protocol/KTP-001.md).

## Scope

KTP-001 defines:

- The universal folio format `FVD-(MARCA)-NNNNN`.
- The canonical JSON serialization (RFC 8785).
- The signature profile (JWS detached, RFC 7797).
- The timestamping profile (RFC 3161, double-seal).
- The blockchain anchoring profile.
- The logical state model `0` (GREEN) / `1` (RED).
- A reproducible verification procedure.

## Conformance keywords

**MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, **MAY** per RFC 2119 / 8174.

## Folio

```regex
^FVD-\([A-Z0-9]{2,20}\)-[0-9]{5,}$
```

## Verification

A verifier MUST:

1. Validate the folio against the regex.
2. Validate the credential against the JSON Schema.
3. Canonicalize per JCS.
4. Recompute SHA-256.
5. Verify the JWS signature.
6. Verify each timestamp.
7. Verify the anchor.
8. Query the current state.

The verification MUST be reproducible by any third party using
standard tools, without contacting the issuer.

## What KTP does NOT cover

- Evaluation methodology.
- Commercial certification.
- Legal validity.
- Identity or authorship.

## Full text

The authoritative specification lives in the repository:
[`protocol/KTP-001.md`](https://github.com/Marcorojas17/kronos-protocol/blob/main/protocol/KTP-001.md).
