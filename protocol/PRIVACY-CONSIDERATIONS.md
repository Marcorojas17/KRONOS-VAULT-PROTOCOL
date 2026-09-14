<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!--  KRONOS VAULT PROTOCOL · PRIVACY CONSIDERATIONS · v0.1.0                     -->
<!--  CC-BY-4.0 · IETF-style privacy analysis                                     -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

# Privacy Considerations · KTP-001

This section is normative when the words MUST, MUST NOT, SHOULD,
SHOULD NOT, and MAY are used in uppercase (RFC 2119 / RFC 8174).

---

## 1. What KTP proves

KTP proves **existence**, **integrity**, and **logical state** of a
digital asset at a given time.

## 2. What KTP does NOT prove

KTP does NOT prove:

- identity of any natural or legal person,
- authorship,
- ownership or title,
- legal validity of any contract,
- compliance with any regulation.

A verifier MUST NOT present a KTP credential as proof of any of the
above.

---

## 3. Data minimization

- A credential MUST NOT contain personal data unless strictly required.
- When personal data is present, it SHOULD be pseudonymized.
- The anchor MUST NOT contain personal data.
- The state query MUST NOT return personal data.

---

## 4. Right to erasure

- The anchor is immutable and cannot be erased.
- Implementers SHOULD keep personal data off-chain.
- Personal data on-chain is incompatible with erasure rights and
  MUST be avoided.

---

## 5. Cross-border considerations

- A credential MAY reference servers in multiple jurisdictions.
- Implementers SHOULD disclose the location of their TSA and anchor.
- A verifier MUST NOT assume a single legal jurisdiction.

---

## 6. GDPR and LFPDPPP

- Where GDPR applies, the issuer is a data controller.
- Where LFPDPPP applies, the issuer is a data controller.
- The issuer MUST provide a privacy notice covering the credential.
- The verifier SHOULD limit collection to what is strictly needed.

---

## 7. Logging

- Verification logs SHOULD NOT contain personal data.
- If they do, retention MUST be documented and bounded.
- Logs MUST be protected against unauthorized access.

---

## 8. Third-party disclosure

- Issuers MUST NOT disclose a credential holder's data to third
  parties without a legal basis.
- Verifiers MUST NOT republish credentials without consent.

---

## 9. Metadata

- Timestamps reveal when a credential was issued.
- Anchors reveal when the anchor was recorded.
- Both SHOULD be considered public.
- Issuers SHOULD NOT include unnecessary metadata.

---

## 10. Contact

Questions on privacy: `proyectokronos@hotmail.com`.

---

*Last updated: 2026-09-14*
