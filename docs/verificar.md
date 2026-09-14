---
layout: default
title: Verify
description: How to verify a KTP-001 credential.
---

# Verify a credential

Verification MUST be reproducible by any third party, without
contacting the issuer.

## Procedure

```text
[1/6]  Folio format ................... check regex
[2/6]  Schema validation .............. check required fields
[3/6]  Canonicalization ............... apply RFC 8785
[4/6]  Hash recompute ................. SHA-256
[5/6]  Signature ...................... JWS detached verification
[6/6]  Timestamps + anchor ............ TSA chain + chain query
```

## Result

The verifier reports one of:

| Result | Meaning |
|--------|---------|
| `GREEN` | Credential valid · state 0 |
| `RED` | Credential valid · state 1 (revoked) |
| `INVALID` | Signature, hash, or schema failed |

## What verification proves

- The credential existed at a given time.
- The credential has not been altered.
- The credential is in a known logical state.

## What verification does NOT prove

- Identity of any party.
- Authorship.
- Ownership.
- Legal validity.

## Reference commands

```bash
# Recompute hash
sha256sum credential.json

# Verify the timestamp
openssl ts -reply -in timestamp.asn -text

# Check the anchor
curl https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0x...
```
