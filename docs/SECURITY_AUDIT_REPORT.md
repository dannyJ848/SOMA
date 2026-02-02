# SOMA Security Audit Report

**Date:** 2026-01-30
**Scope:** Encryption implementation, Tauri IPC, permission model, secrets management, database encryption at rest
**App Version:** 1.0.0

---

## Executive Summary

SOMA is a local-first medical education app storing personal health data entirely on-device. The architecture avoids cloud storage and network calls for health data, which is a strong foundational posture. However, the audit identified 13 findings across HIGH, MEDIUM, LOW, and INFORMATIONAL severity.

---

## HIGH Severity Findings

### FINDING-01: scrypt Used Instead of Documented Argon2id; Default Cost Parameters

**File:** `core/biological-self/store.ts` (lines 42-44)

The privacy README (`core/privacy/README.md`) documents Argon2id as the KDF, but the actual implementation uses Node.js `scryptSync` with **default parameters** (no explicit N, r, p cost factors):

```typescript
function deriveKey(passphrase: string, salt: Buffer): Buffer {
  return scryptSync(passphrase, salt, KEY_LENGTH);
}
```

Node.js defaults are N=16384, r=8, p=1 (~14-bit cost), which is insufficient for medical data. Argon2id is the OWASP-recommended KDF. Either implement Argon2id as documented, or explicitly configure scrypt with hardened parameters.

### FINDING-02: SQLite Database Not Encrypted at Rest (No SQLCipher)

**File:** `core/biological-self/store.ts` (lines 86-89)

The database is opened as plain `better-sqlite3` without SQLCipher:

```typescript
this.db = new Database(dbPath);
```

While data in the `data` column is AES-256-GCM encrypted at the application layer, the database file itself leaks: table schemas, column names, row IDs, and **plaintext timestamps** (`created_at`, `updated_at`). WAL/journal files may contain data fragments. No usage of `better-sqlite3-multiple-ciphers` or SQLCipher was found anywhere in the codebase.

---

## MEDIUM Severity Findings

### FINDING-03: AES-256-GCM IV Length is 16 Bytes Instead of 12

**File:** `core/biological-self/store.ts` (line 38)

`IV_LENGTH = 16` deviates from NIST SP 800-38D which recommends 12 bytes (96 bits) for AES-GCM. Non-96-bit IVs trigger an internal GHASH reduction that slightly increases collision probability. The IV is correctly generated via `randomBytes()` (CSPRNG).

### FINDING-04: Passphrase Stored in Memory Indefinitely; No Lock Command

**File:** `src-tauri/src/lib.rs` (lines 312-329)

The passphrase lives in a global `OnceLock<Mutex<Option<String>>>` and is set on unlock but **never cleared**. There is no `lock_database` Tauri command. The passphrase persists for the entire app lifetime. In TypeScript, the passphrase is stored as an immutable string property (`store.ts` line 84) that cannot be securely zeroed.

### FINDING-05: Passphrase Passed via Environment Variable to Child Process

**File:** `src-tauri/src/lib.rs` (lines 384-392)

```rust
.env("BIOSELF_PASSPHRASE", &passphrase)
```

On macOS/Linux, environment variables of running processes are readable by the same user via `ps eww` or `/proc/[pid]/environ`. The passphrase should be passed via stdin pipe instead.

### FINDING-06: No Tauri Capabilities Defined; withGlobalTauri Enabled

**File:** `src-tauri/tauri.conf.json` (lines 76, 78)

The `capabilities` array is empty and no capabilities files exist. `withGlobalTauri: true` exposes the Tauri API globally (accessible from browser console or injected scripts). The `shell` plugin is enabled with `open: true`, allowing opening arbitrary URLs.

### FINDING-07: CSP connect-src Allows All Localhost Ports

**File:** `src-tauri/tauri.conf.json` (line 57)

`connect-src` includes `http://localhost:* ws://localhost:*`, allowing connections to any local service on any port, which could enable data exfiltration to a malicious local proxy.

---

## LOW Severity Findings

### FINDING-08: contentProtected Disabled

**File:** `src-tauri/tauri.conf.json` (line 32)

`contentProtected: false` -- screenshots and screen recording of medical data are not prevented.

### FINDING-09: Updater Public Key is Empty

**File:** `src-tauri/tauri.conf.json` (line 173)

`"pubkey": ""` -- auto-updates cannot verify package authenticity, enabling supply chain attacks if the GitHub endpoint is compromised.

### FINDING-10: No Backend Input Validation on IPC Commands

**File:** `src-tauri/src/lib.rs`

No backend-enforced passphrase minimum length. String IDs not validated for format/length. Symptom JSON passed as command-line argument to child process without size limits.

### FINDING-11: DEV_SKIP_AUTH Bypass Flag

**File:** `src/App.tsx` (line 175)

`DEV_SKIP_AUTH` allows bypassing the unlock screen. Must be verified `false` in production.

---

## INFORMATIONAL Findings

### FINDING-12: Apple Development Team ID in Config

**File:** `src-tauri/tauri.conf.json` (line 160) -- Team ID `NDJZ6S9Q4L` exposed.

### FINDING-13: .env Files Not Fully Covered by .gitignore

**Files:** `.env.production`, `.env.development`, `.env.test` are present but not gitignored. Currently no secrets in them, but `.env.example` has commented-out `ANTHROPIC_API_KEY` placeholder, creating risk of future accidental commits.

---

## Positive Security Observations

1. **Local-first architecture** -- zero network calls for health data; eliminates cloud breach risk.
2. **AES-256-GCM** -- sound authenticated encryption with tamper detection.
3. **CSPRNG for salt and IV** -- `crypto.randomBytes()` used correctly.
4. **Fresh salt and IV per encryption** -- no salt/IV reuse.
5. **No hardcoded keys, IVs, or secrets** found in source code.
6. **freezePrototype: true** -- prevents prototype pollution.
7. **CSP defined** with `object-src: 'none'`, `frame-src: 'none'`, `base-uri: 'self'`.
8. **Auth-gated IPC commands** -- database queries require prior unlock.
9. **Passphrase strength indicator** with minimum 8-character enforcement in UI.

---

## Priority Remediation Order

1. FINDING-01 -- Fix key derivation (Argon2id or hardened scrypt)
2. FINDING-02 -- Add SQLCipher for full database encryption at rest
3. FINDING-05 -- Switch passphrase delivery from env var to stdin
4. FINDING-04 -- Add lock/logout with secure memory clearing
5. FINDING-03 -- Fix IV length to 12 bytes per NIST SP 800-38D
6. FINDING-06 -- Define explicit Tauri capabilities
7. FINDING-07 -- Tighten CSP for production
8. FINDING-09 -- Configure updater public key before release
9. FINDING-08 -- Enable contentProtected
10. FINDING-10 through FINDING-13 -- Address in regular hardening
