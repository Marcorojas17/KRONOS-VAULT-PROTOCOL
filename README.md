<!-- ═══════════════════════════════════════════════════════════════════════════ -->
<!--  KRONOS VAULT PROTOCOL · KTP-001 · v0.1.0                                    -->
<!--  Open standard for digital evidence · CC-BY-4.0                              -->
<!--  github.com/Marcorojas17/kronos-protocol                                     -->
<!-- ═══════════════════════════════════════════════════════════════════════════ -->

```text
    ██╗  ██╗████████╗██████╗      ██████╗  ██████╗  ██╗
    ██║ ██╔╝╚══██╔══╝██╔══██╗    ██╔═████╗██╔═████╗███║
    █████╔╝    ██║   ██████╔╝    ██║██╔██║██║██╔██║╚██║
    ██╔═██╗    ██║   ██╔═══╝     ████╔╝██║████╔╝██║ ██║
    ██║  ██╗   ██║   ██║         ╚██████╔╝╚██████╔╝ ██║
    ╚═╝  ╚═╝   ╚═╝   ╚═╝          ╚═════╝  ╚═════╝  ╚═╝
    ─────────────────────────────────────────────────
    K R O N O S   ·   V A U L T   ·   P R O T O C O L
    ─────────────────────────────────────────────────
```

```
[open standard] · [digital evidence] · [verifiable] · [no central authority]
```

> **Kronos Vault Protocol (KTP)** es un estándar abierto para representar, sellar y verificar evidencia digital interoperable. Resuelve la falta de un formato común para comprobar la existencia, integridad y estado de un activo digital, sin depender de una autoridad central.

---

```bash
$ ktp status
─────────────────────────────────────────────────────────────────
  spec ............ KTP-001
  version ......... v0.1.0
  status .......... DRAFT · EXPERIMENTAL
  stability ....... UNSTABLE
  production ...... NOT RECOMMENDED
  legal review .... PENDING · subject to professional revision
  license ......... CC-BY-4.0 (with exceptions)
  repo ............ github.com/Marcorojas17/kronos-protocol
─────────────────────────────────────────────────────────────────

$ ktp check --international-standard
  [FAIL] KTP is NOT an approved international standard
  [FAIL] Not endorsed by IETF, W3C, ISO, ITU-T, or any SDO
  [INFO] This is a technical draft subject to change without notice

$ _
```

![Status](https://img.shields.io/badge/status-DRAFT-ff6b00?style=for-the-badge&labelColor=0a0d10)
![Version](https://img.shields.io/badge/version-v0.1.0-00ff41?style=for-the-badge&labelColor=0a0d10)
![License](https://img.shields.io/badge/license-CC--BY--4.0-00ffff?style=for-the-badge&labelColor=0a0d10)
![Spec](https://img.shields.io/badge/spec-KTP--001-8b5cf6?style=for-the-badge&labelColor=0a0d10)
![Central Authority](https://img.shields.io/badge/central%20authority-none-ff00ff?style=for-the-badge&labelColor=0a0d10)

---

## `// 01` — QUÉ ES

```text
┌─[ DEFINITION ]───────────────────────────────────────────────────────────┐
│                                                                          │
│  KTP is an open, neutral, and verifiable specification for              │
│  representing, sealing, and verifying digital evidence.                 │
│                                                                          │
│  It defines a common format so that any system, industry, or            │
│  jurisdiction can prove — independently — that a digital asset:         │
│                                                                          │
│    ▸ existed at a given moment                                          │
│    ▸ has not been altered since                                         │
│    ▸ has a publicly verifiable status                                   │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## `// 02` — QUÉ NO ES

```text
┌─[ LIMITS · READ CAREFULLY ]──────────────────────────────────────────────┐
│                                                                          │
│  ✗  KTP does NOT certify authorship                                      │
│  ✗  KTP does NOT determine legal ownership or title                      │
│  ✗  KTP does NOT prove identity                                          │
│  ✗  KTP does NOT validate legal contracts                                │
│  ✗  KTP does NOT replace legal, forensic, notarial, or certification     │
│     services                                                             │
│  ✗  KTP does NOT require any central server, company, or account         │
│  ✗  KTP is NOT a commercial product, marketplace, or certification body  │
│                                                                          │
│  What KTP proves:  existence · integrity · logical status                │
│  What the law decides:  identity · authorship · ownership · validity     │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Nota normativa de privacidad:** *KTP prueba existencia e integridad. No prueba identidad, autoría, titularidad ni validez jurídica.*

---

## `// 03` — PROBLEMA QUE RESUELVE

```bash
$ ktp explain --problem
─────────────────────────────────────────────────────────────────
  [PROBLEM 01]  Fragmented formats
                Every registry, timestamp, and chain speaks
                a different language.

  [PROBLEM 02]  Third-party dependency
                Verification requires trusting the issuer.

  [PROBLEM 03]  Legal ambiguity
                It is unclear what a technical proof demonstrates
                and what it does not.

  [SOLUTION]    A common, independently verifiable format that
                separates:
                  · what cryptography proves
                  · what the law decides
─────────────────────────────────────────────────────────────────
```

---

## `// 04` — ALCANCE DE LA ESPECIFICACIÓN

```text
┌─[ KTP-001 · SCOPE ]──────────────────────────────────────────────────────┐
│                                                                          │
│  ▸ Universal folio           FVD-(MARCA)-00001                          │
│  ▸ Canonical serialization   JSON · RFC 8785 (JCS)                      │
│  ▸ Signature profile         JWS detached · RFC 7797                    │
│  ▸ Signature algorithms      Ed25519 · ECDSA P-256                      │
│  ▸ Timestamp profile         RFC 3161 · double-seal                     │
│  ▸ Anchoring profile         Ethereum · Polygon · OpenTimestamps        │
│  ▸ Logical states            0 = GREEN · 1 = RED (irreversible)         │
│  ▸ Verification model        Reproducible by any third party            │
│  ▸ Normative language        RFC 2119 / RFC 8174 (MUST, SHOULD, MAY)    │
│  ▸ Versioning                Semantic Versioning (SemVer 2.0.0)         │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘

┌─[ OUT OF SCOPE · NOT DEFINED BY KTP ]────────────────────────────────────┐
│                                                                          │
│  ▸ Evaluation methodology or scoring                                    │
│  ▸ Certification levels (commercial)                                    │
│  ▸ Services, pricing, or products                                       │
│  ▸ Use of the "Kronos" name or logo                                     │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## `// 05` — ESTRUCTURA DEL REPOSITORIO

```text
kronos-protocol/
│
├── README.md                      ← you are here
├── LICENSE                        ← CC-BY-4.0 (with explicit exceptions)
├── GOVERNANCE.md                  ← governance & change process
├── CONTRIBUTING.md                ← how to contribute (DCO)
├── CODE_OF_CONDUCT.md             ← code of conduct
├── SECURITY.md                    ← vulnerability policy
├── CHANGELOG.md                   ← project history
│
├── docs/                          ← GitHub Pages site (informational)
│
├── protocol/                      ← normative specification
│   ├── KTP-001.md
│   ├── CHANGELOG.md
│   ├── SECURITY-CONSIDERATIONS.md
│   ├── PRIVACY-CONSIDERATIONS.md
│   ├── rfcs/                      ← RFC process & templates
│   ├── schemas/                   ← JSON Schemas + examples
│   ├── test-vectors/              ← reproducible test vectors
│   └── conformance/               ← conformance levels
│
├── reference-implementation/      ← Apache-2.0 reference code
│
├── brand/                         ← name & logo usage policy (trademark pending)
│
└── evidence/                      ← project provenance (non-normative)
```

---

## `// 06` — IMPLEMENTAR

```bash
$ ktp implement --guide
─────────────────────────────────────────────────────────────────
  [01]  Read the specification
        → protocol/KTP-001.md

  [02]  Consult JSON Schemas
        → protocol/schemas/

  [03]  Use test vectors
        → protocol/test-vectors/

  [04]  Pick your conformance level
        → protocol/conformance/LEVELS.md

  [05]  Implement.
        No authorization required.
        No registration required.
        No fee required.
─────────────────────────────────────────────────────────────────

$ ktp declare --compatible
  [ OK ]  If your implementation meets the requirements,
          you may declare it "KTP-compatible".
          No registry, no quota, no permission.
```

---

## `// 07` — VERIFICAR

```bash
$ ktp verify --credential ./credential.json
─────────────────────────────────────────────────────────────────
  [1/6]  Folio format ................... OK
  [2/6]  JWS signature vs public key .... OK
  [3/6]  SHA-256 recomputed hash ........ OK
  [4/6]  Timestamps vs TSA root ......... OK
  [5/6]  Blockchain anchor .............. OK
  [6/6]  Current logical state .......... GREEN (0)
─────────────────────────────────────────────────────────────────
  RESULT: valid credential · integrity confirmed
  NOTE:   cryptography ≠ authorship · law decides that
─────────────────────────────────────────────────────────────────
```

Verification is reproducible by any third party using standard tools: `openssl`, `jq`, and any HTTP client.

---

## `// 08` — CONFORMIDAD

```text
┌─[ CONFORMANCE LEVELS · TESTABLE ]────────────────────────────────────────┐
│                                                                          │
│  LEVEL 1  ▸ BASIC        Folio + signature + SHA-256                    │
│  LEVEL 2  ▸ INTERMEDIATE Level 1 + double timestamp                     │
│  LEVEL 3  ▸ COMPLETE     Level 2 + blockchain anchor                    │
│  LEVEL 4  ▸ ADVANCED     Level 3 + public status + DID/VC               │
│                                                                          │
│  Each level MUST be verifiable by automated tests.                      │
│  Reference command:                                                     │
│                                                                          │
│    $ make conformance-test LEVEL=1                                      │
│    $ make conformance-test LEVEL=2                                      │
│    $ make conformance-test LEVEL=3                                      │
│    $ make conformance-test LEVEL=4                                      │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

Full details: [`protocol/conformance/LEVELS.md`](protocol/conformance/LEVELS.md)

---

## `// 09` — GOBERNANZA

```bash
$ ktp governance --show
─────────────────────────────────────────────────────────────────
  protocol changes ... RFC process (protocol/rfcs/0000-process.md)
  project governance . GOVERNANCE.md
  breaking changes ... require approved RFC + major semver bump
  historical log ..... protocol/rfcs/ + GOVERNANCE.md
  contributions ...... DCO (Developer Certificate of Origin)
─────────────────────────────────────────────────────────────────
```

---

## `// 10` — LICENCIA

```text
┌─[ LICENSE · SCOPE ]──────────────────────────────────────────────────────┐
│                                                                          │
│  CC-BY-4.0 applies to:                                                   │
│    ▸ protocol/              specification, schemas, test vectors         │
│    ▸ docs/                  project documentation                        │
│    ▸ README.md, GOVERNANCE.md, CONTRIBUTING.md, SECURITY.md              │
│                                                                          │
│  EXCEPTIONS:                                                             │
│    ▸ reference-implementation/  →  Apache-2.0                            │
│    ▸ brand/                     →  Restricted · trademark pending        │
│    ▸ evidence/                  →  Non-normative · provenance only       │
│                                                                          │
│  CC-BY-4.0 allows commercial use, modification, and redistribution,     │
│  provided attribution is preserved. It does NOT restrict derivative     │
│  implementations.                                                        │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

Full text: [`LICENSE`](LICENSE)

### `$ ktp brand --notice`

```text
  The CC-BY-4.0 license does NOT grant rights over the names
  "Kronos", "KTP", or the associated logo.

  Trademark status:  PENDING · NOT REGISTERED
  Correct symbol:    ™  (not ®)

  You MAY:
    ▸ fork, modify, and redistribute the protocol
    ▸ declare your implementation "compatible with KTP-001"
    ▸ use the specification for commercial purposes

  You MAY NOT:
    ▸ present your fork as the official "Kronos" or "KTP"
    ▸ imply endorsement by the original project
    ▸ use the name in ways that suggest affiliation

  Details: brand/TRADEMARK.md
```

---

## `// 11` — AVISO LEGAL

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║  This repository is a TECHNICAL DRAFT.                                   ║
║  It is subject to PROFESSIONAL LEGAL REVIEW before being                 ║
║  considered final.                                                       ║
║                                                                          ║
║  ▸ KTP does not certify authorship.                                      ║
║  ▸ KTP does not determine ownership.                                     ║
║  ▸ KTP does not prove identity.                                          ║
║  ▸ KTP does not replace legal, forensic, or notarial services.           ║
║  ▸ The specification and code are provided "AS IS", with no warranty.    ║
║  ▸ Production use is the sole responsibility of the implementer.         ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## `// 12` — CONTACTO

```bash
$ ktp contact
─────────────────────────────────────────────────────────────────
  general ..... proyectokronos@hotmail.com
  security .... see SECURITY.md for the private disclosure channel
  repo ........ github.com/Marcorojas17/kronos-protocol
  site ........ marcorojas17.github.io/kronos-protocol/
─────────────────────────────────────────────────────────────────

$ ktp contact --sales
  [ERR] No sales channel.
  [ERR] KTP is not sold.
  [INFO] KTP is a standard, not a product.
```

---

<details>
<summary><b>🇬🇧 English summary</b> · click to expand</summary>

<br>

**Kronos Vault Protocol (KTP)** is an open standard for representing, sealing, and verifying interoperable digital evidence.

It solves the lack of a common format to prove the existence, integrity, and status of a digital asset, without depending on a central authority.

- **Status:** Draft · `v0.1.0` · Not a recognized international standard.
- **Proves:** existence · integrity · logical status.
- **Does NOT prove:** identity · authorship · ownership · legal validity.
- **Does NOT:** require a central server, replace legal services, or act as a commercial product.
- **License:** CC-BY-4.0 (spec & docs) · Apache-2.0 (reference code) · trademark pending.
- **Contributions:** DCO · RFC process in `protocol/rfcs/0000-process.md`.
- **Contact:** proyectokronos@hotmail.com

</details>

---

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║  KRONOS VAULT PROTOCOL · KTP-001 · v0.1.0                                ║
║  Open standard · Neutral · Verifiable                                    ║
║                                                                          ║
║  root@kronos:~# _                                                        ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

*Última actualización: 2026-09-14 · Estado: borrador · v0.1.0 · Revisión legal pendiente*
