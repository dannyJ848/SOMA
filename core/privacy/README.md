# Privacy Module

Encryption, security, and data sovereignty.

## Responsibilities

- Encrypt/decrypt Biological Self data
- Manage user passphrase (never stored, only derived)
- Secure memory handling
- Data export (encrypted backups)
- Complete data deletion

## Encryption Scheme

```
User Passphrase
      │
      ▼
┌──────────────────────────────────┐
│  Key Derivation (scrypt)         │
│  - Memory-hard                   │
│  - N=131072 (2^17), r=8, p=1    │
│  - OWASP-recommended parameters │
│  - 32-byte random salt per entry │
└───────────────┬──────────────────┘
                │
                ▼
         256-bit AES Key
                │
                ▼
┌──────────────────────────────────┐
│  AES-256-GCM Encryption          │
│  - Authenticated                 │
│  - Tamper-evident                │
│  - 12-byte IV (NIST SP 800-38D) │
└──────────────────────────────────┘
```

### KDF Versioning

Encrypted data includes a version prefix to support safe KDF migration:

| Version | Prefix | Parameters | Status |
|---------|--------|------------|--------|
| v0 | *(none)* | scrypt N=16384, r=8, p=1 (Node.js defaults) | Legacy — decrypt only |
| v1 | `$v1$` | scrypt N=131072, r=8, p=1 (OWASP hardened) | Current |

All new encryptions use v1. Existing v0 data decrypts transparently without
requiring re-encryption, so users never lose access to their data.

## Security Properties

| Property | Implementation |
|----------|----------------|
| Data at rest | AES-256-GCM encrypted |
| Key derivation | scrypt (N=131072, r=8, p=1) — memory-hard |
| Key storage | Never stored — derived from passphrase |
| Memory | Cleared after use (best effort in JS/TS) |
| Network | Zero network calls — fully offline |

## Threat Model

### Protected Against
- Device theft (encrypted at rest)
- Cloud breaches (no cloud storage)
- Corporate data requests (no data to give)
- Network surveillance (no network calls)

### User Responsibility
- Strong passphrase
- Device security
- Backup management

## Data Deletion

User can delete all data with single action:
1. Wipe encrypted SQLite database
2. Clear any cached embeddings
3. Remove all local files
4. Confirm deletion complete
