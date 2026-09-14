<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!--  KRONOS VAULT PROTOCOL · evidence/ README · v0.1.0                           -->
<!--  CC-BY-4.0 · non-normative · does not accredit authorship or ownership       -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

```text
    ███████╗██╗   ██╗██╗██████╗ ███████╗███╗   ██╗ ██████╗███████╗
    ██╔════╝██║   ██║██║██╔══██╗██╔════╝████╗  ██║██╔════╝██╔════╝
    █████╗  ██║   ██║██║██║  ██║█████╗  ██╔██╗ ██║██║     █████╗
    ██╔══╝  ╚██╗ ██╔╝██║██║  ██║██╔══╝  ██║╚██╗██║██║     ██╔══╝
    ███████╗ ╚████╔╝ ██║██████╔╝███████╗██║ ╚████║╚██████╗███████╗
    ╚══════╝  ╚═══╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚══════╝
    ─────────────────────────────────────────────────────────────
    P R O V E N A N C E   ·   N O T   N O R M A T I V E
    ─────────────────────────────────────────────────────────────
```

> This directory contains historical evidence of the project's
> existence. It is **NOT** part of the standard. It does **NOT**
> accredit authorship, ownership, or legal effects.

```bash
$ ktp evidence --status
─────────────────────────────────────────────────────────────────
  directory ....... evidence/
  nature .......... non-normative
  purpose ......... project provenance only
  license ......... CC-BY-4.0
  does NOT prove .. authorship · ownership · legal validity
─────────────────────────────────────────────────────────────────
```

---

## `// 01` — WHAT THIS DIRECTORY IS

The `evidence/` directory documents that the project existed at a
given point in time. It contains:

- A hash manifest of the project's foundational documents.
- A historical record of an external registry entry.

These files serve as **provenance documentation**. They can be useful
to demonstrate that the project's files existed at a specific date.

---

## `// 02` — WHAT THIS DIRECTORY IS NOT

The files in this directory do **NOT**:

- Prove authorship of the specification.
- Prove ownership of the trademarks.
- Constitute certification of the standard.
- Replace registration with a competent authority.
- Establish legal validity of any claim.

External registry services (such as Safe Creative) prove **existence**
of a file at a given time. They do **NOT** determine authorship,
ownership, or legal effects.

---

## `// 03` — FILES

```text
  README.md                       this file
  idfile.txt                      SHA-1, SHA-256, SHA-512 of the root document
  safecreative-2608096674952.md   historical record of the registry entry
```

---

## `// 04` — VERIFYING THE HASHES

The hashes in `idfile.txt` can be recomputed by anyone:

```bash
sha1sum <file>
sha256sum <file>
sha512sum <file>
```

If the recomputed hashes match those in `idfile.txt`, the file is
identical to the one that was recorded.

---

## `// 05` — LICENSE

```text
  SPDX-License-Identifier:  CC-BY-4.0
  Nature:                    non-normative
```

Files in this directory are licensed under CC-BY-4.0 **as
documentation**. This does not imply that the underlying claims are
licensed.

---

## `// 06` — DISCLAIMER

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║  The presence of any file in this directory does NOT:                       ║
║                                                                              ║
║    ▸ certify the standard,                                                ║
║    ▸ establish authorship,                                                ║
║    ▸ establish ownership,                                                 ║
║    ▸ create legal effects,                                                ║
║    ▸ replace any registration before a competent authority.               ║
║                                                                              ║
║  For legal certainty, consult a qualified professional.                     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

*Last updated: 2026-09-14 · v0.1.0*
