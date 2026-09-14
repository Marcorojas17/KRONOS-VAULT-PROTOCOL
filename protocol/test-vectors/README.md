# Test Vectors · KTP-001

Reproducible vectors that any implementation can use to validate
conformance.

## Layout

```text
  valid/          inputs that MUST verify successfully
  invalid/        inputs that MUST fail predictably
  signatures/     known signatures + public keys
```

## Vector format

Each vector is a JSON file with the following shape:

```json
{
  "id": "valid-001",
  "description": "Minimal credential",
  "input": { ... },
  "expected": { "result": "GREEN" },
  "sha256": "<hash of canonical input>"
}
```

## Conformance

An implementation MUST pass:

- All vectors in `valid/` (result MUST equal expected).
- All vectors in `invalid/` (result MUST be a specific error).
- All signature vectors in `signatures/` (verification MUST succeed).

## License

CC-BY-4.0.
