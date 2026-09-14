<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!--  KRONOS VAULT PROTOCOL · SECURITY CONSIDERATIONS · v0.1.0                    -->
<!--  CC-BY-4.0 · IETF-style security analysis                                    -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

# Security Considerations · KTP-001

This section is normative when the words MUST, MUST NOT, SHOULD,
SHOULD NOT, and MAY are used in uppercase (RFC 2119 / RFC 8174).

---

## 1. Threat model

```text
  ┌─[ ASSETS ]───────────────────────────────────────────────────────────────┐
  │                                                                          │
  │  A1  Integrity of the credential                                        │
  │  A2  Authenticity of the signature                                      │
  │  A3  Trustworthiness of the timestamps                                  │
  │  A4  Immutability of the anchor                                         │
  │  A5  Availability of the state query                                    │
  │                                                                          │
  └──────────────────────────────────────────────────────────────────────────┘

  ┌─[ ADVERSARIES ]──────────────────────────────────────────────────────────┐
  │                                                                          │
  │  T1  Malicious issuer                                                   │
  │  T2  Malicious verifier                                                 │
  │  T3  Network attacker                                                   │
  │  T4  Compromised TSA                                                    │
  │  T5  Compromised chain                                                  │
  │  T6  Compromised signing key                                            │
  │  T7  Post-quantum adversary                                             │
  │                                                                          │
  └──────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Hash algorithm

- SHA-1 and MD5 MUST NOT be used.
- SHA-256 MUST be the primary hash.
- SHA-512 MAY be included for defense in depth.
- A verifier MUST recompute the hash; it MUST NOT trust a provided hash.

---

## 3. Signature

- Ed25519 MUST be supported.
- ECDSA P-256 MAY be supported.
- RSA MUST NOT be used in new credentials.
- The private key MUST be stored in an HSM or equivalent.
- The signing key SHOULD be rotated at least every 24 months.
- Compromise of a signing key MUST trigger the key-revocation
  procedure (see `../SECURITY.md`).

---

## 4. Timestamping

- A single TSA is a single point of trust.
- Two independent TSAs MUST be present in every credential.
- At least one TSA MUST be external to the issuer.
- A verifier MUST validate the TSA certificate chain up to a trusted root.
- A verifier MUST reject revoked or expired TSA certificates.

---

## 5. Blockchain anchoring

- Anchoring alone MUST NOT be treated as proof of authorship.
- Anchoring MUST NOT contain personal data.
- A verifier MUST validate the transaction hash and the block depth.
- Reorganization depth SHOULD be at least 12 blocks on Ethereum.

---

## 6. State query

- The state query MUST be publicly verifiable.
- The transition `0 → 1` MUST be irreversible.
- Log integrity SHOULD be protected by an append-only structure.
- Downtime of the state service MUST NOT alter the current state.

---

## 7. Post-quantum

- Ed25519 and ECDSA are vulnerable to Shor's algorithm.
- A future version SHOULD support ML-DSA (Dilithium) or equivalent.
- Implementers SHOULD plan for hybrid signatures during the
  transition period.

---

## 8. Replay and confusion

- A verifier MUST reject credentials whose folio does not match the
  requested folio.
- A verifier MUST reject credentials whose signature was produced for
  a different payload.
- Cross-protocol signature reuse MUST be prevented by domain
  separation (e.g. a `ktp:` prefix in the signed payload).

---

## 9. Denial of service

- The verification procedure MUST be locally executable.
- A verifier SHOULD cache TSA roots and chain headers.
- A verifier SHOULD NOT depend on a single RPC endpoint.

---

## 10. Disclosure

Report vulnerabilities per [`../SECURITY.md`](../SECURITY.md).

---

*Last updated: 2026-09-14*
