---
layout: default
title: Versioning
description: SemVer 2.0.0 applied to KTP-001.
---

# Versioning

The specification follows **Semantic Versioning 2.0.0**.

## Scheme

```text
  MAJOR   Breaking changes to the normative specification
  MINOR   Backwards-compatible additions
  PATCH   Editorial and non-normative clarifications
```

## Where the version lives

- `protocol/KTP-001.md` (header)
- `protocol/CHANGELOG.md`
- `CHANGELOG.md` (root)
- Every published JSON Schema (`ktp_version` field)

## Change mapping

| Change | Bump |
|--------|:----:|
| Fix a typo | PATCH |
| Clarify non-normative text | PATCH |
| Add optional field | MINOR |
| Add new schema | MINOR |
| Add new conformance level | MINOR |
| Change required field | MAJOR |
| Remove a field | MAJOR |
| Change canonicalization | MAJOR |

## Current version

```text
  v0.1.0 · DRAFT
```

Not recommended for production. Subject to change without notice.

## Compatibility promise

- **v0.x.y** — no compatibility promise.
- **v1.0.0+** — backwards-compatible within the same MAJOR version.
