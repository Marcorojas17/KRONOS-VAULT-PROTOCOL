<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!--  KRONOS VAULT PROTOCOL · CHANGELOG · v0.1.0                                  -->
<!--  github.com/Marcorojas17/kronos-protocol                                     -->
<!--  CC-BY-4.0 · DRAFT · subject to professional legal review                    -->
<!--  Format: Keep a Changelog · Versioning: SemVer 2.0.0                         -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

```text
    ██████╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███████╗██╗      ██████╗  ██████╗
   ██╔════╝██║  ██║██╔══██╗████╗  ██║██╔════╝ ██╔════╝██║     ██╔═══██╗██╔════╝
   ██║     ███████║███████║██╔██╗ ██║██║  ███╗█████╗  ██║     ██║   ██║██║  ███╗
   ██║     ██╔══██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██║     ██║   ██║██║   ██║
   ╚██████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝███████╗███████╗╚██████╔╝╚██████╔╝
    ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝ ╚═════╝  ╚═════╝
   ─────────────────────────────────────────────────────────────────────────
   K R O N O S   ·   V A U L T   ·   C H A N G E L O G
   ─────────────────────────────────────────────────────────────────────────
```

> Project changelog for the **Kronos Vault Protocol** repository.
>
> This file tracks **project-level changes** (repository structure,
> governance, tooling). Protocol specification changes are tracked
> separately in [`protocol/CHANGELOG.md`](protocol/CHANGELOG.md).

```bash
$ ktp changelog --status
─────────────────────────────────────────────────────────────────
  document ........ CHANGELOG.md
  scope ........... project (repository)
  format .......... Keep a Changelog
  versioning ...... SemVer 2.0.0
  license ......... CC-BY-4.0
  spec changelog .. protocol/CHANGELOG.md
─────────────────────────────────────────────────────────────────
```

---

## `// 01` — FORMAT

This changelog follows [Keep a Changelog](https://keepachangelog.com/)
and [Semantic Versioning 2.0.0](https://semver.org/).

### Categories

```text
┌─[ CHANGE CATEGORIES ]────────────────────────────────────────────────────────┐
│                                                                              │
│  Added ......... new files, sections, or capabilities.                       │
│  Changed ....... modifications to existing behavior or structure.            │
│  Deprecated .... features still present but discouraged.                     │
│  Removed ....... features or files that no longer exist.                     │
│  Fixed ......... corrections to errors, inconsistencies, or typos.           │
│  Security ...... vulnerability fixes and hardening.                          │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Version scheme

```text
  MAJOR   Breaking changes to the normative specification or governance.
  MINOR   New files, sections, or backwards-compatible additions.
  PATCH   Editorial corrections, clarifications, or typo fixes.
```

---

## `// 02` — RELEASES

## [Unreleased]

### Added

- *(nothing yet)*

### Changed

- *(nothing yet)*

### Fixed

- *(nothing yet)*

---

## [0.1.0] — 2026-09-14

Initial public draft of the project. Establishes the legal, operational,
and governance foundation for the Kronos Vault Protocol.

### Added

```text
┌─[ ROOT · IDENTITY & GOVERNANCE ]─────────────────────────────────────────────┐
│                                                                              │
│  ✓  README.md                                                                │
│       · Project README v2 (IETF-style)                                       │
│       · Statement of purpose: open standard for digital evidence             │
│       · Sections "What it is / What it is NOT"                               │
│       · Optional professional services line (IETF-style)                     │
│       · English summary                                                      │
│                                                                              │
│  ✓  LICENSE                                                                  │
│       · Multi-license repository · licensing by scope                        │
│       · CC-BY-4.0 for spec, docs, and root documentation                     │
│       · CC0-1.0 for repository plumbing                                      │
│       · Apache-2.0 for reference implementation (when added)                 │
│       · LicenseRef-Kronos-Brand-Policy for brand assets                      │
│                                                                              │
│  ✓  REUSE.toml                                                               │
│       · REUSE compliance declaration                                         │
│       · Override rules for docs/_config.yml and docs/assets/img/logo.*       │
│                                                                              │
│  ✓  GOVERNANCE.md                                                            │
│       · Roles: maintainer, reviewers, contributors                           │
│       · Change categories and version mapping                                │
│       · RFC process, DCO, SemVer                                             │
│       · Conflict resolution and security-critical path                       │
│                                                                              │
│  ✓  CONTRIBUTING.md                                                          │
│       · Developer Certificate of Origin (DCO) required                       │
│       · RFC process for normative changes                                    │
│       · PR guidelines and commit message format                              │
│                                                                              │
│  ✓  SECURITY.md                                                              │
│       · Private disclosure channels                                          │
│       · SLAs: 48h acknowledgment · 14-day triage · 90-day fix                │
│       · Severity classification and coordinated disclosure                   │
│       · Key compromise and revocation procedure                              │
│                                                                              │
│  ✓  CODE_OF_CONDUCT.md                                                       │
│       · Adapted from Contributor Covenant v2.1                               │
│       · Enforcement ladder and appeals process                               │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

┌─[ LICENSES/ ]────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ✓  LICENSES/README.md                                                       │
│       · Index of license texts and SPDX mapping                              │
│                                                                              │
│  ✓  LICENSES/LicenseRef-Kronos-Brand-Policy.txt                              │
│       · Custom policy for project identifiers and logo                       │
│       · Trademark status: pending · not registered                           │
│                                                                              │
│  ⏳ LICENSES/CC-BY-4.0.txt         (pending: download from official source)  │
│  ⏳ LICENSES/CC0-1.0.txt           (pending: download from official source)  │
│  ⏳ LICENSES/Apache-2.0.txt        (pending: download from official source)  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Notes

- Status: **DRAFT** · subject to professional legal review.
- Not a recognized international standard. Not endorsed by IETF, W3C,
  ISO, ITU-T, or any SDO.
- The specification itself (`protocol/KTP-001.md`) is scheduled for
  a subsequent release in this same version line.

---

## `// 03` — PLANNED

The following items are planned but **not yet released**:

```text
┌─[ PROTOCOL SPECIFICATION ]───────────────────────────────────────────────────┐
│                                                                              │
│  ▸ protocol/KTP-001.md              normative specification                  │
│  ▸ protocol/CHANGELOG.md            protocol-specific changelog              │
│  ▸ protocol/SECURITY-CONSIDERATIONS.md                                       │
│  ▸ protocol/PRIVACY-CONSIDERATIONS.md                                        │
│  ▸ protocol/rfcs/0000-process.md    RFC process                              │
│  ▸ protocol/rfcs/0001-template.md   RFC template                             │
│  ▸ protocol/schemas/*.json          JSON Schemas                             │
│  ▸ protocol/test-vectors/*          reproducible test vectors                │
│  ▸ protocol/conformance/LEVELS.md   conformance levels 1-4                   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

┌─[ DOCUMENTATION SITE ]───────────────────────────────────────────────────────┐
│                                                                              │
│  ▸ docs/_config.yml                 Jekyll configuration                     │
│  ▸ docs/_layouts/default.html       custom layout                            │
│  ▸ docs/_includes/*.html            header, nav, footer                      │
│  ▸ docs/assets/css/style.css        hacker-themed stylesheet                 │
│  ▸ docs/assets/js/background.js     animated background                      │
│  ▸ docs/*.md                        site content                             │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

┌─[ BRAND & EVIDENCE ]─────────────────────────────────────────────────────────┐
│                                                                              │
│  ▸ brand/README.md                                                           │
│  ▸ brand/TRADEMARK.md               trademark status                         │
│  ▸ brand/USAGE.md                   permitted use                            │
│  ▸ brand/assets/logo.svg            official logo                            │
│  ▸ evidence/README.md               non-normative declaration                │
│  ▸ evidence/idfile.txt              root document hashes                     │
│  ▸ evidence/safecreative-*.md       historical registry                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

┌─[ REFERENCE IMPLEMENTATION (Phase 2) ]───────────────────────────────────────┐
│                                                                              │
│  ▸ reference-implementation/LICENSE Apache-2.0                               │
│  ▸ reference-implementation/README.md                                        │
│  ▸ reference-implementation/…       code, tests, examples                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## `// 04` — HOW TO UPDATE THIS FILE

```text
┌─[ EDITING RULES ]────────────────────────────────────────────────────────────┐
│                                                                              │
│  1. Every user-facing change MUST be documented here.                        │
│  2. Add new entries under [Unreleased].                                      │
│  3. When releasing, rename [Unreleased] to [X.Y.Z] — YYYY-MM-DD.             │
│  4. Use the categories defined in §01.                                       │
│  5. Do not modify entries of an already-released version.                    │
│  6. Protocol changes belong in protocol/CHANGELOG.md, not here.              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Commit message for changelog updates

```bash
📊 changelog: update for <version>

Signed-off-by: Full Name <email@example.com>
```

---

## `// 05` — LEGAL REVIEW STATUS

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║  This changelog is part of a project in DRAFT status.                        ║
║  The underlying governance and licensing documents are subject to            ║
║  PROFESSIONAL LEGAL REVIEW before being considered final.                    ║
║                                                                              ║
║  Contact: proyectokronos@hotmail.com                                         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

<details>
<summary><b>🇬🇧 English summary</b> · click to expand</summary>

<br>

**Changelog · Kronos Vault Protocol**

Follows [Keep a Changelog](https://keepachangelog.com/) and
[SemVer 2.0.0](https://semver.org/).

This file tracks **project-level** changes. Protocol specification
changes are tracked in `protocol/CHANGELOG.md`.

**Current release:** `0.1.0` (2026-09-14) — initial public draft.

**Includes:**
- README, LICENSE, REUSE.toml
- GOVERNANCE.md, CONTRIBUTING.md, SECURITY.md, CODE_OF_CONDUCT.md
- LICENSES/README.md, LICENSES/LicenseRef-Kronos-Brand-Policy.txt

**Pending:**
- LICENSES/CC-BY-4.0.txt, CC0-1.0.txt, Apache-2.0.txt (manual download)
- protocol/ specification and schemas
- docs/ site
- brand/ and evidence/
- reference-implementation/ (Phase 2)

**Status:** Draft · subject to legal review.

</details>

---

*Last updated: 2026-09-14 · Status: draft · v0.1.0*
