# Schemas · KTP-001

JSON Schemas (2020-12) and examples for KTP-001 credentials.

## Files

```text
  folio.schema.json        validates a bare folio identifier
  credential.schema.json   validates a full credential
  revocation.schema.json   validates a revocation event
  examples/                valid and invalid examples
```

## Header convention

Every schema declares:

```json
{
  "$id": "...",
  "ktp_version": "0.1.0",
  "license": "CC-BY-4.0",
  "sha256": "..."
}
```

## License

CC-BY-4.0. Full text: [`../../LICENSES/CC-BY-4.0.txt`](../../LICENSES/CC-BY-4.0.txt).
