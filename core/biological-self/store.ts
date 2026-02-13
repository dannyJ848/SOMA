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
  LabResult,
  VitalSign,
  ImagingReport,
  Symptom,
  Demographics,
  LifestyleFactors,
  UserSettings,
  DepthLevel,
  PharmacogenomicProfile,
  NeuropsychologicalEvaluation,
  WhoopCycle,
  WhoopWorkout,
  AppleHealthDailySummary,
  AppleHealthWorkout,
} from './types.js';

// ============================================================================
// Encryption Utilities
// ============================================================================

const ALGORITHM = 'aes-256-gcm';
// NIST SP 800-38D recommends 96-bit (12-byte) IVs for AES-GCM. Non-96-bit IVs
// trigger an internal GHASH reduction that slightly increases collision probability.
// Changed from 16 to 12 per security audit FINDING-03.
//
// Backward compatibility: existing data encrypted with 16-byte IVs will still
// decrypt correctly because decrypt() parses the IV from the stored hex string
// (salt:iv:authTag:ciphertext format) rather than relying on this constant.
// This constant only governs newly generated IVs in encrypt().
const IV_LENGTH = 12;
const SALT_LENGTH = 32;
const KEY_LENGTH = 32;

// ---------------------------------------------------------------------------
// KDF versioning (FINDING-01 fix)
// ---------------------------------------------------------------------------
// Version prefix added to encrypted data format to support KDF migration.
//
// v0 (implicit/no prefix): Original scrypt with Node.js defaults (N=16384, r=8, p=1).
//     Data format: salt:iv:authTag:ciphertext
//
// v1: Hardened scrypt with OWASP-recommended parameters (N=131072, r=8, p=1).
//     Data format: $v1$salt:iv:authTag:ciphertext
//
// All new encryptions use v1. Decryption auto-detects the version and uses
// the correct parameters, so existing data remains accessible without migration.
// ---------------------------------------------------------------------------
const KDF_VERSION_PREFIX = '$v1$';

// OWASP-recommended scrypt parameters for sensitive data (2023 guidelines):
// N=2^17 (131072) provides ~17-bit cost, r=8, p=1, maxmem raised to accommodate.
// This is 8x harder than Node.js defaults (N=2^14=16384).
const SCRYPT_PARAMS = {
  N: 131072,  // CPU/memory cost parameter (2^17)
  r: 8,       // Block size
  p: 1,       // Parallelization
  maxmem: 256 * 1024 * 1024,  // 256 MB — must be >= 128 * N * r
};

/**
 * Derive an AES-256 key from a passphrase and salt using hardened scrypt (v1).
 */
function deriveKeyV1(passphrase: string, salt: Buffer): Buffer {
  return scryptSync(passphrase, salt, KEY_LENGTH, SCRYPT_PARAMS);
}

/**
 * Derive an AES-256 key using legacy scrypt defaults (v0).
 * Used only for decrypting data that was encrypted before the KDF hardening.
 */
function deriveKeyV0(passphrase: string, salt: Buffer): Buffer {
  return scryptSync(passphrase, salt, KEY_LENGTH);
}

function encrypt(data: string, passphrase: string): string {
  const salt = randomBytes(SALT_LENGTH);
  const iv = randomBytes(IV_LENGTH);
  const key = deriveKeyV1(passphrase, salt);

  const cipher = createCipheriv(ALGORITHM, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag();

  // Format: $v1$salt:iv:authTag:encrypted
  return `${KDF_VERSION_PREFIX}${salt.toString('hex')}:${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}

function decrypt(encryptedData: string, passphrase: string): string {
  // Detect KDF version from prefix
  let payload: string;
  let deriveKey: (passphrase: string, salt: Buffer) => Buffer;

  if (encryptedData.startsWith(KDF_VERSION_PREFIX)) {
    // v1: hardened scrypt parameters
    payload = encryptedData.slice(KDF_VERSION_PREFIX.length);
    deriveKey = deriveKeyV1;
  } else {
    // v0 (legacy): no prefix, Node.js default scrypt parameters
    payload = encryptedData;
    deriveKey = deriveKeyV0;
  }

  const [saltHex, ivHex, authTagHex, encrypted] = payload.split(':');

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
      symptoms: [],
      neuropsychEvaluations: [],
      whoopCycles: [],
      whoopWorkouts: [],
      appleHealthDailySummaries: [],
      appleHealthWorkouts: [],
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

  // --- Pharmacogenomics ---

  setPharmacogenomics(self: BiologicalSelf, profile: Omit<PharmacogenomicProfile, 'id' | 'createdAt' | 'updatedAt'>): PharmacogenomicProfile {
    const now = new Date();
    const newProfile: PharmacogenomicProfile = {
      ...profile,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    };
    self.pharmacogenomics = newProfile;
    this.save(self);
    return newProfile;
  }

  // --- Neuropsychological Evaluations ---

  addNeuropsychEvaluation(
    self: BiologicalSelf,
    evaluation: Omit<NeuropsychologicalEvaluation, 'id' | 'createdAt' | 'updatedAt'>
  ): NeuropsychologicalEvaluation {
    const now = new Date();
    const newEval: NeuropsychologicalEvaluation = {
      ...evaluation,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    };
    self.neuropsychEvaluations.push(newEval);
    this.save(self);
    return newEval;
  }

  // --- Imaging Reports ---

  addImagingReport(
    self: BiologicalSelf,
    report: Omit<ImagingReport, 'id' | 'createdAt' | 'updatedAt'>
  ): ImagingReport {
    const now = new Date();
    const newReport: ImagingReport = {
      ...report,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    };
    self.imaging.push(newReport);
    this.save(self);
    return newReport;
  }

  // --- Symptoms ---

  addSymptom(
    self: BiologicalSelf,
    symptom: Omit<Symptom, 'id' | 'createdAt' | 'updatedAt'>
  ): Symptom {
    const now = new Date();
    const newSymptom: Symptom = {
      ...symptom,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    };
    self.symptoms.push(newSymptom);
    this.save(self);
    return newSymptom;
  }

  updateSymptom(self: BiologicalSelf, id: string, updates: Partial<Symptom>): void {
    const index = self.symptoms.findIndex(s => s.id === id);
    if (index === -1) throw new Error(`Symptom ${id} not found`);

    self.symptoms[index] = {
      ...self.symptoms[index],
      ...updates,
      updatedAt: new Date(),
    };
    this.save(self);
  }

  removeSymptom(self: BiologicalSelf, id: string): void {
    self.symptoms = self.symptoms.filter(s => s.id !== id);
    this.save(self);
  }

  resolveSymptom(self: BiologicalSelf, id: string, resolvedDate?: Date): void {
    const index = self.symptoms.findIndex(s => s.id === id);
    if (index === -1) throw new Error(`Symptom ${id} not found`);

    self.symptoms[index] = {
      ...self.symptoms[index],
      status: 'resolved',
      resolvedDate: resolvedDate || new Date(),
      updatedAt: new Date(),
    };
    this.save(self);
  }

  // --- Whoop Data ---

  addWhoopCycle(
    self: BiologicalSelf,
    cycle: Omit<WhoopCycle, 'id' | 'createdAt'>
  ): WhoopCycle {
    const now = new Date();
    const newCycle: WhoopCycle = {
      ...cycle,
      id: uuidv4(),
      createdAt: now,
    };
    self.whoopCycles.push(newCycle);
    this.save(self);
    return newCycle;
  }

  addWhoopCycles(
    self: BiologicalSelf,
    cycles: Omit<WhoopCycle, 'id' | 'createdAt'>[]
  ): number {
    const now = new Date();
    for (const cycle of cycles) {
      const newCycle: WhoopCycle = {
        ...cycle,
        id: uuidv4(),
        createdAt: now,
      };
      self.whoopCycles.push(newCycle);
    }
    this.save(self);
    return cycles.length;
  }

  addWhoopWorkout(
    self: BiologicalSelf,
    workout: Omit<WhoopWorkout, 'id' | 'createdAt'>
  ): WhoopWorkout {
    const now = new Date();
    const newWorkout: WhoopWorkout = {
      ...workout,
      id: uuidv4(),
      createdAt: now,
    };
    self.whoopWorkouts.push(newWorkout);
    this.save(self);
    return newWorkout;
  }

  addWhoopWorkouts(
    self: BiologicalSelf,
    workouts: Omit<WhoopWorkout, 'id' | 'createdAt'>[]
  ): number {
    const now = new Date();
    for (const workout of workouts) {
      const newWorkout: WhoopWorkout = {
        ...workout,
        id: uuidv4(),
        createdAt: now,
      };
      self.whoopWorkouts.push(newWorkout);
    }
    this.save(self);
    return workouts.length;
  }

  // --- Apple Health Data ---

  addAppleHealthDailySummaries(
    self: BiologicalSelf,
    summaries: Omit<AppleHealthDailySummary, 'id' | 'createdAt'>[]
  ): number {
    const now = new Date();
    for (const summary of summaries) {
      const newSummary: AppleHealthDailySummary = {
        ...summary,
        id: uuidv4(),
        createdAt: now,
      };
      self.appleHealthDailySummaries.push(newSummary);
    }
    this.save(self);
    return summaries.length;
  }

  addAppleHealthWorkouts(
    self: BiologicalSelf,
    workouts: Omit<AppleHealthWorkout, 'id' | 'createdAt'>[]
  ): number {
    const now = new Date();
    for (const workout of workouts) {
      const newWorkout: AppleHealthWorkout = {
        ...workout,
        id: uuidv4(),
        createdAt: now,
      };
      self.appleHealthWorkouts.push(newWorkout);
    }
    this.save(self);
    return workouts.length;
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
   * Get active symptoms
   */
  getActiveSymptoms(self: BiologicalSelf): Symptom[] {
    return self.symptoms.filter(s => s.status === 'active' || s.status === 'recurring');
  }

  /**
   * Get symptoms by body location (supports partial matching for hierarchical codes)
   * e.g., "body.torso" matches "body.torso.abdomen.right-lower-quadrant"
   */
  getSymptomsByLocation(self: BiologicalSelf, locationPrefix: string): Symptom[] {
    return self.symptoms.filter(s =>
      s.bodyLocation.startsWith(locationPrefix) || s.bodyLocation === locationPrefix
    );
  }

  /**
   * Get symptoms within a date range
   */
  getSymptomsByDateRange(self: BiologicalSelf, startDate: Date, endDate: Date): Symptom[] {
    return self.symptoms
      .filter(s => s.onsetDate >= startDate && s.onsetDate <= endDate)
      .sort((a, b) => b.onsetDate.getTime() - a.onsetDate.getTime());
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

    // Search symptoms
    for (const symptom of self.symptoms) {
      if (symptom.description.toLowerCase().includes(lowerQuery) ||
          symptom.bodyLocation.toLowerCase().includes(lowerQuery) ||
          symptom.notes?.toLowerCase().includes(lowerQuery)) {
        results.push({ type: 'symptom', item: symptom });
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
      symptoms: (data.symptoms || []).map(s => ({
        ...s,
        onsetDate: new Date(s.onsetDate),
        resolvedDate: s.resolvedDate ? new Date(s.resolvedDate) : undefined,
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt),
      })),
      neuropsychEvaluations: (data.neuropsychEvaluations || []).map(e => ({
        ...e,
        evaluationDate: new Date(e.evaluationDate),
        createdAt: new Date(e.createdAt),
        updatedAt: new Date(e.updatedAt),
      })),
      whoopCycles: (data.whoopCycles || []).map(c => ({
        ...c,
        cycleStart: new Date(c.cycleStart),
        cycleEnd: c.cycleEnd ? new Date(c.cycleEnd) : undefined,
        sleepOnset: c.sleepOnset ? new Date(c.sleepOnset) : undefined,
        wakeOnset: c.wakeOnset ? new Date(c.wakeOnset) : undefined,
        createdAt: new Date(c.createdAt),
      })),
      whoopWorkouts: (data.whoopWorkouts || []).map(w => ({
        ...w,
        cycleStart: new Date(w.cycleStart),
        cycleEnd: w.cycleEnd ? new Date(w.cycleEnd) : undefined,
        workoutStart: new Date(w.workoutStart),
        workoutEnd: new Date(w.workoutEnd),
        createdAt: new Date(w.createdAt),
      })),
      appleHealthDailySummaries: (data.appleHealthDailySummaries || []).map(s => ({
        ...s,
        date: new Date(s.date),
        createdAt: new Date(s.createdAt),
      })),
      appleHealthWorkouts: (data.appleHealthWorkouts || []).map(w => ({
        ...w,
        startDate: new Date(w.startDate),
        endDate: new Date(w.endDate),
        createdAt: new Date(w.createdAt),
      })),
      pharmacogenomics: data.pharmacogenomics ? {
        ...data.pharmacogenomics,
        testDate: new Date(data.pharmacogenomics.testDate),
        reportDate: data.pharmacogenomics.reportDate ? new Date(data.pharmacogenomics.reportDate) : undefined,
        createdAt: new Date(data.pharmacogenomics.createdAt),
        updatedAt: new Date(data.pharmacogenomics.updatedAt),
      } : undefined,
    };
  }

  /**
   * Close the database connection
   */
  close(): void {
    this.db.close();
  }
}
