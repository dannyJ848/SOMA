/**
 * Storage Type Definitions
 *
 * Comprehensive type definitions for the data persistence layer.
 * Includes storage providers, data models, operations, and encryption.
 */

// ============================================
// Storage Provider Types
// ============================================

/**
 * Supported storage backends
 */
export type StorageBackend = 'localStorage' | 'indexedDB' | 'encrypted' | 'memory';

/**
 * Storage operation result
 */
export interface StorageResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
}

/**
 * Storage operation options
 */
export interface StorageOptions {
  encrypt?: boolean;
  compress?: boolean;
  ttl?: number; // Time to live in milliseconds
  version?: number;
}

/**
 * Storage metadata
 */
export interface StorageMetadata {
  key: string;
  size: number;
  createdAt: number;
  updatedAt: number;
  accessedAt: number;
  accessCount: number;
  version: number;
  encrypted: boolean;
  compressed: boolean;
  expiresAt?: number;
}

/**
 * Storage provider interface
 */
export interface StorageProvider {
  name: StorageBackend;
  isAvailable(): boolean;
  get<T>(key: string): Promise<StorageResult<T>>;
  set<T>(key: string, value: T, options?: StorageOptions): Promise<StorageResult<void>>;
  delete(key: string): Promise<StorageResult<void>>;
  clear(): Promise<StorageResult<void>>;
  keys(): Promise<StorageResult<string[]>>;
  has(key: string): Promise<boolean>;
  getMetadata(key: string): Promise<StorageMetadata | null>;
  getSize(): Promise<number>;
}

/**
 * Storage event types
 */
export type StorageEventType =
  | 'set'
  | 'get'
  | 'delete'
  | 'clear'
  | 'sync'
  | 'migrate'
  | 'error';

/**
 * Storage event
 */
export interface StorageEvent {
  type: StorageEventType;
  key?: string;
  timestamp: number;
  backend: StorageBackend;
  success: boolean;
  error?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Storage event listener
 */
export type StorageEventListener = (event: StorageEvent) => void;

// ============================================
// Sync Types
// ============================================

/**
 * Sync status
 */
export type SyncStatus = 'idle' | 'syncing' | 'error' | 'offline';

/**
 * Sync direction
 */
export type SyncDirection = 'up' | 'down' | 'bidirectional';

/**
 * Sync conflict resolution strategy
 */
export type ConflictStrategy = 'local-wins' | 'remote-wins' | 'newest-wins' | 'manual';

/**
 * Sync configuration
 */
export interface SyncConfig {
  enabled: boolean;
  direction: SyncDirection;
  conflictStrategy: ConflictStrategy;
  autoSync: boolean;
  syncInterval: number; // milliseconds
  retryAttempts: number;
  retryDelay: number; // milliseconds
}

/**
 * Sync state
 */
export interface SyncState {
  status: SyncStatus;
  lastSyncAt: number | null;
  pendingChanges: number;
  conflicts: SyncConflict[];
  errors: string[];
}

/**
 * Sync conflict
 */
export interface SyncConflict {
  id: string;
  key: string;
  localValue: unknown;
  remoteValue: unknown;
  localTimestamp: number;
  remoteTimestamp: number;
  resolved: boolean;
  resolution?: 'local' | 'remote' | 'merged';
}

// ============================================
// Migration Types
// ============================================

/**
 * Schema version
 */
export interface SchemaVersion {
  version: number;
  timestamp: number;
  description: string;
}

/**
 * Migration function
 */
export type MigrationFn = (data: unknown, fromVersion: number, toVersion: number) => unknown;

/**
 * Migration definition
 */
export interface Migration {
  fromVersion: number;
  toVersion: number;
  description: string;
  up: MigrationFn;
  down?: MigrationFn;
}

/**
 * Migration result
 */
export interface MigrationResult {
  success: boolean;
  fromVersion: number;
  toVersion: number;
  migratedKeys: string[];
  errors: string[];
  duration: number;
}

// ============================================
// Validation Types
// ============================================

/**
 * Validation rule
 */
export interface ValidationRule<T> {
  name: string;
  validate: (value: T) => boolean;
  message: string;
}

/**
 * Validation result
 */
export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

/**
 * Validation error
 */
export interface ValidationError {
  field: string;
  rule: string;
  message: string;
  value?: unknown;
}

/**
 * Validation warning
 */
export interface ValidationWarning {
  field: string;
  message: string;
  suggestion?: string;
}

// ============================================
// Backup Types
// ============================================

/**
 * Backup format
 */
export type BackupFormat = 'json' | 'encrypted-json' | 'binary';

/**
 * Backup configuration
 */
export interface BackupConfig {
  format: BackupFormat;
  includeMetadata: boolean;
  compress: boolean;
  encrypt: boolean;
  password?: string;
}

/**
 * Backup manifest
 */
export interface BackupManifest {
  id: string;
  version: string;
  createdAt: number;
  deviceId?: string;
  schemaVersion: number;
  dataTypes: string[];
  totalRecords: number;
  encrypted: boolean;
  compressed: boolean;
  checksum: string;
}

/**
 * Backup result
 */
export interface BackupResult {
  success: boolean;
  manifest: BackupManifest;
  data?: Blob;
  error?: string;
}

/**
 * Restore options
 */
export interface RestoreOptions {
  merge: boolean;
  overwrite: boolean;
  password?: string;
  validateSchema: boolean;
  dataTypes?: string[];
}

/**
 * Restore result
 */
export interface RestoreResult {
  success: boolean;
  restoredCount: number;
  skippedCount: number;
  errors: string[];
  warnings: string[];
}

// ============================================
// Import/Export Types
// ============================================

/**
 * Import format
 */
export type ImportFormat = 'json' | 'csv' | 'xml' | 'fhir';

/**
 * Export format
 */
export type ExportFormat = 'json' | 'csv' | 'pdf' | 'html';

/**
 * Import options
 */
export interface ImportOptions {
  format: ImportFormat;
  validate: boolean;
  merge: boolean;
  dryRun: boolean;
  mapping?: Record<string, string>;
}

/**
 * Import result
 */
export interface ImportResult {
  success: boolean;
  importedCount: number;
  skippedCount: number;
  errors: ImportError[];
  warnings: string[];
  preview?: unknown[];
}

/**
 * Import error
 */
export interface ImportError {
  row?: number;
  field?: string;
  message: string;
  data?: unknown;
}

/**
 * Export options
 */
export interface ExportOptions {
  format: ExportFormat;
  includeMetadata: boolean;
  dateRange?: {
    start: Date;
    end: Date;
  };
  dataTypes?: string[];
  filename?: string;
}

/**
 * Export result
 */
export interface ExportResult {
  success: boolean;
  data: Blob | string;
  filename: string;
  mimeType: string;
  recordCount: number;
}

// ============================================
// Encryption Types
// ============================================

/**
 * Encryption algorithm
 */
export type EncryptionAlgorithm = 'AES-GCM' | 'AES-CBC';

/**
 * Key derivation function
 */
export type KeyDerivationFunction = 'PBKDF2' | 'Argon2';

/**
 * Encryption config
 */
export interface EncryptionConfig {
  algorithm: EncryptionAlgorithm;
  keyDerivation: KeyDerivationFunction;
  iterations: number;
  saltLength: number;
  ivLength: number;
  tagLength: number;
}

/**
 * Encrypted data envelope
 */
export interface EncryptedEnvelope {
  version: number;
  algorithm: EncryptionAlgorithm;
  salt: string;
  iv: string;
  data: string;
  tag?: string;
  createdAt: number;
}

/**
 * Key material
 */
export interface KeyMaterial {
  key: CryptoKey;
  salt: Uint8Array;
  createdAt: number;
  expiresAt?: number;
}

// ============================================
// Storage Statistics Types
// ============================================

/**
 * Storage usage statistics
 */
export interface StorageStats {
  totalSize: number;
  usedSize: number;
  availableSize: number;
  itemCount: number;
  byBackend: Record<StorageBackend, BackendStats>;
  byDataType: Record<string, DataTypeStats>;
  lastUpdated: number;
}

/**
 * Backend-specific statistics
 */
export interface BackendStats {
  size: number;
  itemCount: number;
  available: boolean;
  quota?: number;
}

/**
 * Data type statistics
 */
export interface DataTypeStats {
  count: number;
  size: number;
  oldestRecord: number;
  newestRecord: number;
}

// ============================================
// Base Entity Types
// ============================================

/**
 * Base entity with common fields
 */
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  deleted?: boolean;
  deletedAt?: Date;
}

/**
 * Syncable entity
 */
export interface SyncableEntity extends BaseEntity {
  syncedAt?: Date;
  syncStatus: 'pending' | 'synced' | 'conflict' | 'error';
  localOnly?: boolean;
}

/**
 * Auditable entity
 */
export interface AuditableEntity extends BaseEntity {
  createdBy?: string;
  updatedBy?: string;
  auditLog?: AuditEntry[];
}

/**
 * Audit entry
 */
export interface AuditEntry {
  timestamp: Date;
  action: 'create' | 'update' | 'delete' | 'restore';
  userId?: string;
  changes?: Record<string, { old: unknown; new: unknown }>;
}

// ============================================
// Query Types
// ============================================

/**
 * Query operator
 */
export type QueryOperator =
  | 'eq'
  | 'neq'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'in'
  | 'nin'
  | 'contains'
  | 'startsWith'
  | 'endsWith'
  | 'exists'
  | 'between';

/**
 * Query condition
 */
export interface QueryCondition {
  field: string;
  operator: QueryOperator;
  value: unknown;
}

/**
 * Query sort order
 */
export interface QuerySort {
  field: string;
  direction: 'asc' | 'desc';
}

/**
 * Query options
 */
export interface QueryOptions {
  conditions?: QueryCondition[];
  sort?: QuerySort[];
  limit?: number;
  offset?: number;
  includeDeleted?: boolean;
}

/**
 * Query result
 */
export interface QueryResult<T> {
  items: T[];
  total: number;
  hasMore: boolean;
  offset: number;
  limit: number;
}
