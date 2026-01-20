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
┌─────────────────────────┐
│  Key Derivation (Argon2)│
│  - Memory-hard          │
│  - Resistant to GPU     │
└───────────┬─────────────┘
            │
            ▼
     256-bit AES Key
            │
            ▼
┌─────────────────────────┐
│  AES-256-GCM Encryption │
│  - Authenticated        │
│  - Tamper-evident       │
└─────────────────────────┘
```

## Security Properties

| Property | Implementation |
|----------|----------------|
| Data at rest | AES-256-GCM encrypted |
| Key derivation | Argon2id (memory-hard) |
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
