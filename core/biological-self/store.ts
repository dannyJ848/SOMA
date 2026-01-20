/**
 * Biological Self - Encrypted Local Storage
 *
 * Stores and retrieves the user's health data model with AES-256 encryption.
 * All data stays on the local device.
 */

import Database from 'better-sqlite3';
import { randomBytes, createCipheriv, createDecipheriv, scryptSync } from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import type {
  BiologicalSelf,
  Condition,
  Medication,
  Allergy,
  Surgery,
  FamilyHistoryItem,
  LabResult,
  VitalSign,
  ImagingReport,
  Demographics,
  LifestyleFactors,
  UserSettings,
  DepthLevel,
  PharmacogenomicProfile,
  GeneticMarker,
} from './types.js';

// ============================================================================
// Encryption Utilities
// ============================================================================

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const SALT_LENGTH = 32;
const KEY_LENGTH = 32;
const AUTH_TAG_LENGTH = 16;

function deriveKey(passphrase: string, salt: Buffer): Buffer {
  return scryptSync(passphrase, salt, KEY_LENGTH);
}

function encrypt(data: string, passphrase: string): string {
  const salt = randomBytes(SALT_LENGTH);
  const iv = randomBytes(IV_LENGTH);
  const key = deriveKey(passphrase, salt);

  const cipher = createCipheriv(ALGORITHM, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag();

  // Format: salt:iv:authTag:encrypted
  return `${salt.toString('hex')}:${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}

function decrypt(encryptedData: string, passphrase: string): string {
  const [saltHex, ivHex, authTagHex, encrypted] = encryptedData.split(':');

  const salt = Buffer.from(saltHex, 'hex');
  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  const key = deriveKey(passphrase, salt);

  const decipher = createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

// ============================================================================
// Store Class
// ============================================================================

export class BiologicalSelfStore {
  private db: Database.Database;
  private passphrase: string;

  constructor(dbPath: string, passphrase: string) {
    this.passphrase = passphrase;
    this.db = new Database(dbPath);
    this.initialize();
  }

  private initialize(): void {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS biological_self (
        id TEXT PRIMARY KEY,
        data TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS sections (
        id TEXT PRIMARY KEY,
        self_id TEXT NOT NULL,
        section_type TEXT NOT NULL,
        data TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        FOREIGN KEY (self_id) REFERENCES biological_self(id)
      );

      CREATE INDEX IF NOT EXISTS idx_sections_self_id ON sections(self_id);
      CREATE INDEX IF NOT EXISTS idx_sections_type ON sections(section_type);
    `);
  }

  // ==========================================================================
  // Core CRUD Operations
  // ==========================================================================

  /**
   * Create a new Biological Self instance
   */
  create(settings?: Partial<UserSettings>): BiologicalSelf {
    const now = new Date();
    const self: BiologicalSelf = {
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
      version: 1,
      demographics: {},
      conditions: [],
      medications: [],
      allergies: [],
      surgicalHistory: [],
      familyHistory: [],
      labResults: [],
      vitalSigns: [],
      imaging: [],
      lifestyle: {},
      settings: {
        defaultDepthLevel: 3 as DepthLevel,
        preferredLanguage: 'en',
        dateFormat: 'us',
        unitSystem: 'imperial',
        ...settings,
      },
    };

    const encrypted = encrypt(JSON.stringify(self), this.passphrase);

    this.db.prepare(`
      INSERT INTO biological_self (id, data, created_at, updated_at)
      VALUES (?, ?, ?, ?)
    `).run(self.id, encrypted, now.toISOString(), now.toISOString());

    return self;
  }

  /**
   * Get the current Biological Self (assumes single user per database)
   */
  get(): BiologicalSelf | null {
    const row = this.db.prepare(`
      SELECT data FROM biological_self LIMIT 1
    `).get() as { data: string } | undefined;

    if (!row) return null;

    const decrypted = decrypt(row.data, this.passphrase);
    return this.deserialize(JSON.parse(decrypted));
  }

  /**
   * Save the entire Biological Self
   */
  save(self: BiologicalSelf): void {
    const now = new Date();
    self.updatedAt = now;
    self.version += 1;

    const encrypted = encrypt(JSON.stringify(self), this.passphrase);

    this.db.prepare(`
      UPDATE biological_self SET data = ?, updated_at = ? WHERE id = ?
    `).run(encrypted, now.toISOString(), self.id);
  }

  /**
   * Delete all data permanently
   */
  deleteAll(): void {
    this.db.exec(`
      DELETE FROM sections;
      DELETE FROM biological_self;
      VACUUM;
    `);
  }

  // ==========================================================================
  // Section-Specific Operations
  // ==========================================================================

  // --- Conditions ---

  addCondition(self: BiologicalSelf, condition: Omit<Condition, 'id' | 'createdAt' | 'updatedAt'>): Condition {
    const now = new Date();
    const newCondition: Condition = {
      ...condition,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    };
    self.conditions.push(newCondition);
    this.save(self);
    return newCondition;
  }

  updateCondition(self: BiologicalSelf, id: string, updates: Partial<Condition>): void {
    const index = self.conditions.findIndex(c => c.id === id);
    if (index === -1) throw new Error(`Condition ${id} not found`);

    self.conditions[index] = {
      ...self.conditions[index],
      ...updates,
      updatedAt: new Date(),
    };
    this.save(self);
  }

  removeCondition(self: BiologicalSelf, id: string): void {
    self.conditions = self.conditions.filter(c => c.id !== id);
    this.save(self);
  }

  // --- Medications ---

  addMedication(self: BiologicalSelf, medication: Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>): Medication {
    const now = new Date();
    const newMed: Medication = {
      ...medication,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    };
    self.medications.push(newMed);
    this.save(self);
    return newMed;
  }

  updateMedication(self: BiologicalSelf, id: string, updates: Partial<Medication>): void {
    const index = self.medications.findIndex(m => m.id === id);
    if (index === -1) throw new Error(`Medication ${id} not found`);

    self.medications[index] = {
      ...self.medications[index],
      ...updates,
      updatedAt: new Date(),
    };
    this.save(self);
  }

  removeMedication(self: BiologicalSelf, id: string): void {
    self.medications = self.medications.filter(m => m.id !== id);
    this.save(self);
  }

  // --- Lab Results ---

  addLabResult(self: BiologicalSelf, lab: Omit<LabResult, 'id' | 'createdAt' | 'updatedAt'>): LabResult {
    const now = new Date();
    const newLab: LabResult = {
      ...lab,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    };
    self.labResults.push(newLab);
    this.save(self);
    return newLab;
  }

  // --- Vital Signs ---

  addVitalSign(self: BiologicalSelf, vital: Omit<VitalSign, 'id' | 'createdAt'>): VitalSign {
    const now = new Date();
    const newVital: VitalSign = {
      ...vital,
      id: uuidv4(),
      createdAt: now,
    };
    self.vitalSigns.push(newVital);
    this.save(self);
    return newVital;
  }

  // --- Surgeries ---

  addSurgery(self: BiologicalSelf, surgery: Omit<Surgery, 'id' | 'createdAt' | 'updatedAt'>): Surgery {
    const now = new Date();
    const newSurgery: Surgery = {
      ...surgery,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    };
    self.surgicalHistory.push(newSurgery);
    this.save(self);
    return newSurgery;
  }

  // --- Allergies ---

  addAllergy(self: BiologicalSelf, allergy: Omit<Allergy, 'id' | 'createdAt' | 'updatedAt'>): Allergy {
    const now = new Date();
    const newAllergy: Allergy = {
      ...allergy,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    };
    self.allergies.push(newAllergy);
    this.save(self);
    return newAllergy;
  }

  // --- Demographics ---

  updateDemographics(self: BiologicalSelf, demographics: Partial<Demographics>): void {
    self.demographics = { ...self.demographics, ...demographics };
    this.save(self);
  }

  // --- Lifestyle ---

  updateLifestyle(self: BiologicalSelf, lifestyle: Partial<LifestyleFactors>): void {
    self.lifestyle = { ...self.lifestyle, ...lifestyle };
    this.save(self);
  }

  // --- Settings ---

  updateSettings(self: BiologicalSelf, settings: Partial<UserSettings>): void {
    self.settings = { ...self.settings, ...settings };
    this.save(self);
  }

  // ==========================================================================
  // Query Operations
  // ==========================================================================

  /**
   * Get all active conditions
   */
  getActiveConditions(self: BiologicalSelf): Condition[] {
    return self.conditions.filter(c => c.status === 'active' || c.status === 'chronic');
  }

  /**
   * Get current medications
   */
  getCurrentMedications(self: BiologicalSelf): Medication[] {
    return self.medications.filter(m => m.status === 'current' || m.status === 'as-needed');
  }

  /**
   * Get recent lab results (within N days)
   */
  getRecentLabs(self: BiologicalSelf, days: number = 90): LabResult[] {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    return self.labResults
      .filter(l => l.collectedAt >= cutoff)
      .sort((a, b) => b.collectedAt.getTime() - a.collectedAt.getTime());
  }

  /**
   * Search across all sections
   */
  search(self: BiologicalSelf, query: string): Array<{ type: string; item: unknown }> {
    const lowerQuery = query.toLowerCase();
    const results: Array<{ type: string; item: unknown }> = [];

    // Search conditions
    for (const condition of self.conditions) {
      if (condition.name.toLowerCase().includes(lowerQuery) ||
          condition.notes?.toLowerCase().includes(lowerQuery)) {
        results.push({ type: 'condition', item: condition });
      }
    }

    // Search medications
    for (const med of self.medications) {
      if (med.name.toLowerCase().includes(lowerQuery) ||
          med.genericName?.toLowerCase().includes(lowerQuery)) {
        results.push({ type: 'medication', item: med });
      }
    }

    // Search surgeries
    for (const surgery of self.surgicalHistory) {
      if (surgery.procedure.toLowerCase().includes(lowerQuery)) {
        results.push({ type: 'surgery', item: surgery });
      }
    }

    // Search lab results
    for (const lab of self.labResults) {
      if (lab.testName.toLowerCase().includes(lowerQuery)) {
        results.push({ type: 'labResult', item: lab });
      }
    }

    return results;
  }

  // ==========================================================================
  // Export / Import
  // ==========================================================================

  /**
   * Export all data as encrypted JSON
   */
  export(self: BiologicalSelf): string {
    return encrypt(JSON.stringify(self), this.passphrase);
  }

  /**
   * Import from encrypted JSON
   */
  import(encryptedData: string): BiologicalSelf {
    const decrypted = decrypt(encryptedData, this.passphrase);
    const self = this.deserialize(JSON.parse(decrypted));

    // Save to database
    const now = new Date();
    const encrypted = encrypt(JSON.stringify(self), this.passphrase);

    // Clear existing and insert imported
    this.db.exec('DELETE FROM biological_self');
    this.db.prepare(`
      INSERT INTO biological_self (id, data, created_at, updated_at)
      VALUES (?, ?, ?, ?)
    `).run(self.id, encrypted, now.toISOString(), now.toISOString());

    return self;
  }

  // ==========================================================================
  // Utilities
  // ==========================================================================

  /**
   * Deserialize dates from JSON
   */
  private deserialize(data: BiologicalSelf): BiologicalSelf {
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
      conditions: data.conditions.map(c => ({
        ...c,
        createdAt: new Date(c.createdAt),
        updatedAt: new Date(c.updatedAt),
        diagnosedDate: c.diagnosedDate ? new Date(c.diagnosedDate) : undefined,
        resolvedDate: c.resolvedDate ? new Date(c.resolvedDate) : undefined,
      })),
      medications: data.medications.map(m => ({
        ...m,
        createdAt: new Date(m.createdAt),
        updatedAt: new Date(m.updatedAt),
        startDate: m.startDate ? new Date(m.startDate) : undefined,
        endDate: m.endDate ? new Date(m.endDate) : undefined,
      })),
      allergies: data.allergies.map(a => ({
        ...a,
        createdAt: new Date(a.createdAt),
        updatedAt: new Date(a.updatedAt),
        confirmedDate: a.confirmedDate ? new Date(a.confirmedDate) : undefined,
      })),
      surgicalHistory: data.surgicalHistory.map(s => ({
        ...s,
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt),
        date: s.date ? new Date(s.date) : undefined,
      })),
      familyHistory: data.familyHistory.map(f => ({
        ...f,
        createdAt: new Date(f.createdAt),
        updatedAt: new Date(f.updatedAt),
      })),
      labResults: data.labResults.map(l => ({
        ...l,
        createdAt: new Date(l.createdAt),
        updatedAt: new Date(l.updatedAt),
        collectedAt: new Date(l.collectedAt),
        reportedAt: l.reportedAt ? new Date(l.reportedAt) : undefined,
      })),
      vitalSigns: data.vitalSigns.map(v => ({
        ...v,
        createdAt: new Date(v.createdAt),
        recordedAt: new Date(v.recordedAt),
      })),
      imaging: data.imaging.map(i => ({
        ...i,
        createdAt: new Date(i.createdAt),
        updatedAt: new Date(i.updatedAt),
        date: new Date(i.date),
      })),
    };
  }

  /**
   * Close the database connection
   */
  close(): void {
    this.db.close();
  }
}
