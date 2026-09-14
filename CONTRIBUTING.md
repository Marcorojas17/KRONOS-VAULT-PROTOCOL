<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!--  KRONOS VAULT PROTOCOL · CONTRIBUTING · v0.1.0                               -->
<!--  github.com/Marcorojas17/kronos-protocol                                     -->
<!--  CC-BY-4.0 · DCO required · RFC process for normative changes                -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

# Contributing to Kronos Vault Protocol

Thanks for contributing to **KTP**. This document defines how to
propose changes, what sign-off is required, and how the review works.

Normative keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and
**MAY** are to be interpreted as described in RFC 2119 and RFC 8174.

---

## `// 01` — Scope of contributions

| Area | How |
|------|-----|
| Specification (`protocol/KTP-001.md`) | RFC process · see §03 |
| Schemas (`protocol/schemas/`) | RFC process · see §03 |
| Test vectors (`protocol/test-vectors/`) | RFC process · see §03 |
| Conformance levels (`protocol/conformance/`) | RFC process · see §03 |
| Documentation (`docs/`, `README.md`, etc.) | Pull request · see §04 |
| Reference implementation (`reference-implementation/`) | Pull request · see §04 |
| Brand assets (`brand/`) | Not open for external contribution |

Trademark-related files under `brand/` are governed by
`brand/TRADEMARK.md` and are not open to community contributions.

---

## `// 02` — Developer Certificate of Origin (DCO)

This project uses the **Developer Certificate of Origin** version 1.1.
It does **NOT** require a Contributor License Agreement (CLA).

**Every commit MUST be signed off.** The sign-off is a plain-text line
at the end of the commit message:

```
Signed-off-by: Full Name <email@example.com>
```

The name and email MUST be real and MUST match the commit author.

### How to sign off

If you commit from the command line:

```bash
git commit -s -m "your message"
```

If you commit via the GitHub web interface, add the `Signed-off-by:` line
manually at the end of the extended description.

### What you are certifying

By signing off, you certify the Developer Certificate of Origin 1.1,
which states that you have the right to submit the contribution under
the project's license and that you are not violating any third party's
rights. Full text: <https://developercertificate.org/>

Commits without a valid `Signed-off-by:` line will be rejected.

---

## `// 03` — RFC process (normative changes)

Any change to the normative specification — `KTP-001.md`, schemas,
test vectors, or conformance levels — MUST go through the RFC process
defined in [`protocol/rfcs/0000-process.md`](protocol/rfcs/0000-process.md).

Summary:

```text
  1. Open an issue using the `rfc_proposal.md` template.
  2. Discussion window: ≥ 14 days.
  3. If consensus: submit a pull request with a new RFC file
     at protocol/rfcs/NNNN-title.md.
  4. Maintainer review.
  5. If approved: merge, update CHANGELOG, bump version.
```

Editorial fixes (typos, non-normative clarifications) do NOT require
an RFC. They can go directly as a pull request.

| Change type | RFC required | Version bump |
|-------------|:------------:|:------------:|
| Typo / wording | No | Patch |
| Non-normative clarification | No | Patch |
| New optional field | Yes | Minor |
| Change of existing field | Yes | Major |
| Removal of a field | Yes | Major |
| Security mitigation | Yes (expedited) | Patch or Minor |

---

## `// 04` — Pull request guidelines

For non-normative changes (documentation, reference code, examples):

```text
  ┌──────────────────────────────────────────────────────────────────┐
  │  1. Fork the repository.                                        │
  │  2. Create a branch: feat/<short-name> or fix/<short-name>.     │
  │  3. Make focused commits, each with Signed-off-by.              │
  │  4. Open the PR against main.                                   │
  │  5. Fill the PR template.                                       │
  │  6. Wait for review.                                            │
  └──────────────────────────────────────────────────────────────────┘
```

### PR requirements

- **Title:** conventional commit style (`docs:`, `fix:`, `spec:`, `feat:`).
- **Description:** explain *why*, not just *what*.
- **Scope:** one concern per PR. Do not mix unrelated changes.
- **DCO:** every commit MUST be signed off.
- **Tests:** if you change schemas or test vectors, include updates
  to `protocol/test-vectors/`.
- **Docs:** if behavior changes, update the corresponding `.md`.

### Commit message format

```text
<emoji> <type>(<scope>): <short description>

<optional body>

Signed-off-by: Full Name <email@example.com>
```

Allowed types: `docs`, `spec`, `fix`, `feat`, `refactor`, `test`,
`chore`, `license`, `security`, `conformance`, `schema`, `brand`.

---

## `// 05` — Documentation style

- Language: **Spanish** as the operational language; **English** for
  technical sections or when quoting standards.
- Headings: sentence case, not title case.
- Code blocks: always specify a language (`bash`, `json`, `text`, `toml`).
- Normative keywords (`MUST`, `SHOULD`, `MAY`) MUST be uppercase when
  used in a normative sense.
- No emojis in normative sections of `KTP-001.md`.
- Avoid marketing language in the specification. Describe, do not sell.

---

## `// 06` — Code style (reference implementation)

When `reference-implementation/` is populated:

- License: Apache-2.0.
- Formatting: enforced by the tooling included in that directory.
- Tests: required for any new behavior.
- Documentation: every public function MUST have a docstring.
- No dependency on the specification beyond what the schemas define.

---

## `// 07` — Proposing a new conformance level

Conformance levels 1–4 are defined in
[`protocol/conformance/LEVELS.md`](protocol/conformance/LEVELS.md).

Proposing a new level requires:

1. An RFC explaining the gap not covered by current levels.
2. Reference test vectors that verify the new level.
3. Documentation updates in `LEVELS.md` and in `docs/conformidad.md`.
4. Version bump (minor, unless the change is incompatible).

Levels MUST be verifiable by automated tests. Descriptive-only levels
are not accepted.

---

## `// 08` — Code of conduct

All contributions are subject to
[`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md). Report unacceptable behavior
to `proyectokronos@hotmail.com`.

---

## `// 09` — Licensing of contributions

By submitting a contribution, you agree that:

- Contributions to `protocol/` are licensed under **CC-BY-4.0**.
- Contributions to `docs/` and root documentation are licensed under
  **CC-BY-4.0**.
- Contributions to `reference-implementation/` are licensed under
  **Apache-2.0**.
- Contributions do not grant rights over the project identifiers
  (`Kronos`, `KTP`, the logo), which are governed by
  `brand/TRADEMARK.md`.

Full mapping: [`LICENSE`](LICENSE) and [`LICENSES/`](LICENSES/).

---

## `// 10` — Getting help

- Read [`GOVERNANCE.md`](GOVERNANCE.md) for roles and decision authority.
- Read [`protocol/rfcs/0000-process.md`](protocol/rfcs/0000-process.md)
  for the RFC process.
- Open an issue for questions before starting large changes.
- Contact: `proyectokronos@hotmail.com`.

---

*Last updated: 2026-09-14 · Status: draft · v0.1.0*
