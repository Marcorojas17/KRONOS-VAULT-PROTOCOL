---
layout: default
title: Governance
description: How decisions are made in the KTP project.
---

# Governance

The Kronos Vault Protocol is governed by a documented process.
Full text: [`GOVERNANCE.md`](https://github.com/Marcorojas17/kronos-protocol/blob/main/GOVERNANCE.md).

## Roles

- **Maintainer** — decision authority. Currently: Marcorojas17.
- **Reviewers** — advisory in Phase 1. Voting in Phase 2.
- **Contributors** — anyone who submits an issue, RFC, or PR.

## Change categories

| Type | RFC? | Version bump |
|------|:----:|:------------:|
| Editorial | No | Patch |
| Normative-additive | Yes | Minor |
| Normative-breaking | Yes + supermajority | Major |
| Security-critical | Yes (expedited) | Patch or Minor |

## RFC process

1. Open an issue using the `rfc_proposal` template.
2. Public discussion ≥ 14 days.
3. If consensus: submit a PR with a new RFC file.
4. Maintainer review.
5. If approved: merge, update CHANGELOG, bump version.

## Contributions

- **DCO required.** Every commit MUST be signed off.
- **No CLA.** No contributor license agreement.
- Sign off with: `git commit -s`.

Full DCO text: [developercertificate.org](https://developercertificate.org/)

## Conflict resolution

1. Discussion in the relevant issue or PR.
2. Maintainer issues a written decision with rationale.
3. If normative: an RFC is required.
4. Decisions logged in `CHANGELOG.md`.

## Trademarks

The project identifiers ("Kronos", "KTP", the logo) are governed by
[`brand/TRADEMARK.md`](https://github.com/Marcorojas17/kronos-protocol/blob/main/brand/TRADEMARK.md).
They are **not** covered by CC-BY-4.0.
