<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!--  KRONOS VAULT PROTOCOL · protocol/CHANGELOG · v0.1.0                         -->
<!--  CC-BY-4.0 · tracks specification changes only                               -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

# Protocol Changelog

This file tracks changes to the **KTP specification** itself.
Project-level changes (repository structure, governance, tooling)
are tracked in [`../CHANGELOG.md`](../CHANGELOG.md).

Format: [Keep a Changelog](https://keepachangelog.com/)
Versioning: [SemVer 2.0.0](https://semver.org/)

---

## [Unreleased]

### Added

- *(nothing yet)*

### Changed

- *(nothing yet)*

### Fixed

- *(nothing yet)*

---

## [0.1.0] — 2026-09-14

### Added

- `KTP-001.md` — initial normative specification.
  - Universal folio format `FVD-(MARCA)-NNNNN`.
  - Canonical serialization per RFC 8785.
  - SHA-256 mandatory; SHA-512 optional.
  - JWS detached signature profile (RFC 7797).
  - Ed25519 required; ECDSA P-256 allowed.
  - RFC 3161 double-seal timestamping.
  - Blockchain anchoring profile (Ethereum, Polygon, OpenTimestamps).
  - Logical states `0` (GREEN) and `1` (RED), irreversible.
  - Verification procedure reproducible by any third party.
  - Error-handling requirements.
- `SECURITY-CONSIDERATIONS.md` — threat analysis.
- `PRIVACY-CONSIDERATIONS.md` — data-minimization analysis.
- `conformance/LEVELS.md` — levels 1 through 4.
- `schemas/` — folio, credential, revocation schemas with examples.
- `test-vectors/` — valid, invalid, and signature vectors.
- `rfcs/0000-process.md` — change process.
- `rfcs/0001-template.md` — RFC template.

### Notes

- Status: DRAFT. Not a recognized international standard.
- Not endorsed by IETF, W3C, ISO, ITU-T, or any SDO.
- Subject to professional legal review.

---

## Version scheme

| Change | Bump |
|--------|:----:|
| Breaking change to normative requirements | MAJOR |
| New optional field, new profile, new level | MINOR |
| Editorial or non-normative clarification | PATCH |

---

*Last updated: 2026-09-14*
