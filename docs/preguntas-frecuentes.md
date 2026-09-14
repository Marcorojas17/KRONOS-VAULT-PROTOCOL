---
layout: default
title: FAQ
description: Frequently asked questions about KTP.
---

# Frequently asked questions

<details>
<summary>Is KTP a product I have to buy?</summary>

No. KTP is an open standard. You can implement it freely under
CC-BY-4.0. No purchase, registration, or authorization is required.

</details>

<details>
<summary>Does KTP prove that I created something?</summary>

No. KTP proves **existence**, **integrity**, and **logical state**.
It does **NOT** prove authorship, ownership, or legal validity.
Those are determined by law, not by cryptography.

</details>

<details>
<summary>Can I use KTP commercially?</summary>

Yes. The specification is CC-BY-4.0. You may build products and
services on top of it, including commercial ones. You must not use
the names "Kronos" or "KTP" in a way that suggests affiliation.

</details>

<details>
<summary>Do I need permission to use the folio format?</summary>

No. The format `FVD-(MARCA)-NNNNN` is defined in the specification
under CC-BY-4.0. Use it freely.

</details>

<details>
<summary>What happens if I lose my signing key?</summary>

A lost or compromised key must be revoked. See
[`SECURITY.md`](https://github.com/Marcorojas17/kronos-protocol/blob/main/SECURITY.md)
for the revocation procedure. Revocation is irreversible.

</details>

<details>
<summary>Can a credential be deleted?</summary>

Blockchain anchors are immutable and cannot be deleted. Personal
data should never be anchored on-chain. If you need erasability,
keep personal data off-chain.

</details>

<details>
<summary>Is KTP compatible with W3C Verifiable Credentials?</summary>

Level 4 conformance includes DID/VC interoperability. Earlier levels
focus on the core format.

</details>

<details>
<summary>How can I contribute?</summary>

Read
[`CONTRIBUTING.md`](https://github.com/Marcorojas17/kronos-protocol/blob/main/CONTRIBUTING.md).
Every commit must be signed off (DCO). No CLA required.

</details>

<details>
<summary>Is KTP an international standard?</summary>

No. KTP is a **draft** (v0.1.0). It is not endorsed by IETF, W3C, ISO,
ITU-T, or any other standards body. The project may explore alignment
paths in the future, but no approval exists today.

</details>

<details>
<summary>Where can I report a security issue?</summary>

Privately. See
[`SECURITY.md`](https://github.com/Marcorojas17/kronos-protocol/blob/main/SECURITY.md).
Do not open a public issue for vulnerabilities.

</details>
