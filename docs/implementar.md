---
layout: default
title: Implement
description: How to implement KTP-001.
---

# Implement KTP-001

No authorization is required. No registration. No fee.

## Steps

```bash
# 1. Read the specification
cat protocol/KTP-001.md

# 2. Validate a folio
echo "FVD-(DEMO)-00001" | grep -E '^FVD-\([A-Z0-9]{2,20}\)-[0-9]{5,}$'

# 3. Validate against the JSON Schema
ajv validate \
  -s protocol/schemas/credential.schema.json \
  -d protocol/schemas/examples/valid-01.json

# 4. Run test vectors
make test-vectors

# 5. Run conformance tests
make conformance-test LEVEL=1
```

## Minimum viable implementation

A Level 1 implementation MUST:

- Parse the folio regex.
- Validate the credential schema.
- Canonicalize per RFC 8785.
- Compute SHA-256.
- Verify the JWS detached signature.
- Reject malformed input.

## Declaring compliance

If your implementation meets all MUST requirements of level N and
all lower levels, you MAY declare it:

> This implementation is KTP-001 Level N compliant.

No permission needed.

## Resources

- [Specification](especificacion.html)
- [Schemas](https://github.com/Marcorojas17/kronos-protocol/tree/main/protocol/schemas)
- [Test vectors](https://github.com/Marcorojas17/kronos-protocol/tree/main/protocol/test-vectors)
- [Conformance levels](conformidad.html)
