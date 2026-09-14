# Conformance · KTP-001

Defines what it means to be "KTP-001 compliant".

## Levels

```text
  LEVEL 1  BASIC         folio + signature + SHA-256
  LEVEL 2  INTERMEDIATE  Level 1 + double timestamp
  LEVEL 3  COMPLETE      Level 2 + blockchain anchor
  LEVEL 4  ADVANCED      Level 3 + public state + DID/VC
```

Full definitions: [`LEVELS.md`](LEVELS.md).

## Verification

Every level MUST be testable by automated means.
Reference command (implementation-defined):

```
make conformance-test LEVEL=1
make conformance-test LEVEL=2
make conformance-test LEVEL=3
make conformance-test LEVEL=4
```

## Declaring compliance

An implementation MAY declare itself "KTP-001 Level N compliant"
if and only if all MUST requirements of level N and all lower
levels are met.

No registration is required.

## License

CC-BY-4.0.
