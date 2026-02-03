/**
 * Journey Store - Persistent Storage for Intent Prediction
 *
 * Stores user actions and journeys in SQLite for the adaptive
 * intent prediction system. Uses better-sqlite3 for direct DB access.
 */

import Database from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';
import type {
  ActionEvent,
  StoredAction,
  StoredJourney,
  UserJourney,
  JourneyType,
  JourneyHealthContext,
  JourneyOutcome,
  InferredIntent,
} from './types';

// ============================================
// Constants
// ============================================

const DEFAULT_RETENTION_DAYS = 30;

// ============================================
// Store Class
// ============================================

export class JourneyStore {
  private db: Database.Database;

  constructor(dbPath: string) {
    this.db = new Database(dbPath);
    this.initialize();
  }

  private initialize(): void {
    this.db.exec(`
      -- Actions table stores individual user actions
      CREATE TABLE IF NOT EXISTS intent_actions (
        id TEXT PRIMARY KEY,
        session_id TEXT NOT NULL,
        timestamp TEXT NOT NULL,
        feature_area TEXT NOT NULL,
        action_type TEXT NOT NULL,
        payload TEXT NOT NULL,
        duration_ms INTEGER,
        previous_action_id TEXT,
        source_component TEXT,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      );

      -- Journeys table stores session journeys
      CREATE TABLE IF NOT EXISTS intent_journeys (
        journey_id TEXT PRIMARY KEY,
        session_id TEXT NOT NULL,
        started_at TEXT NOT NULL,
        ended_at TEXT,
        journey_type TEXT NOT NULL,
        health_context TEXT NOT NULL,
        completed INTEGER NOT NULL DEFAULT 0,
        outcome TEXT,
        inferred_intent TEXT,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      );

      -- Indexes for fast queries
      CREATE INDEX IF NOT EXISTS idx_actions_session ON intent_actions(session_id);
      CREATE INDEX IF NOT EXISTS idx_actions_timestamp ON intent_actions(timestamp);
      CREATE INDEX IF NOT EXISTS idx_actions_feature ON intent_actions(feature_area);
      CREATE INDEX IF NOT EXISTS idx_journeys_session ON intent_journeys(session_id);
      CREATE INDEX IF NOT EXISTS idx_journeys_started ON intent_journeys(started_at);
    `);
  }

  // ============================================
  // Action Operations
  // ============================================

  /**
   * Add a new action event to the store
   */
  addAction(action: ActionEvent): void {
    const stmt = this.db.prepare(`
      INSERT INTO intent_actions (
        id, session_id, timestamp, feature_area, action_type,
        payload, duration_ms, previous_action_id, source_component
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      action.id,
      action.sessionId,
      action.timestamp,
      action.featureArea,
      action.actionType,
      JSON.stringify(action.payload),
      action.durationMs ?? null,
      action.previousActionId ?? null,
      action.sourceComponent ?? null
    );
  }

  /**
   * Get recent actions for a session
   */
  getRecentActions(sessionId: string, limit = 20): ActionEvent[] {
    const stmt = this.db.prepare(`
      SELECT * FROM intent_actions
      WHERE session_id = ?
      ORDER BY timestamp DESC
      LIMIT ?
    `);

    const rows = stmt.all(sessionId, limit) as StoredAction[];
    return rows.map(this.rowToAction).reverse();
  }

  /**
   * Get all actions for a session
   */
  getSessionActions(sessionId: string): ActionEvent[] {
    const stmt = this.db.prepare(`
      SELECT * FROM intent_actions
      WHERE session_id = ?
      ORDER BY timestamp ASC
    `);

    const rows = stmt.all(sessionId) as StoredAction[];
    return rows.map(this.rowToAction);
  }

  /**
   * Get action count for a session
   */
  getActionCount(sessionId: string): number {
    const stmt = this.db.prepare(`
      SELECT COUNT(*) as count FROM intent_actions WHERE session_id = ?
    `);

    const result = stmt.get(sessionId) as { count: number };
    return result.count;
  }

  /**
   * Get actions by feature area
   */
  getActionsByFeature(featureArea: string, limit = 100): ActionEvent[] {
    const stmt = this.db.prepare(`
      SELECT * FROM intent_actions
      WHERE feature_area = ?
      ORDER BY timestamp DESC
      LIMIT ?
    `);

    const rows = stmt.all(featureArea, limit) as StoredAction[];
    return rows.map(this.rowToAction);
  }

  /**
   * Convert database row to ActionEvent
   */
  private rowToAction(row: StoredAction): ActionEvent {
    return {
      id: row.id,
      sessionId: row.sessionId,
      timestamp: row.timestamp,
      featureArea: row.featureArea as ActionEvent['featureArea'],
      actionType: row.actionType as ActionEvent['actionType'],
      payload: JSON.parse(row.payload),
      durationMs: row.durationMs,
      previousActionId: row.previousActionId,
      sourceComponent: row.sourceComponent,
    };
  }

  // ============================================
  // Journey Operations
  // ============================================

  /**
   * Start a new journey
   */
  startJourney(
    sessionId: string,
    journeyType: JourneyType,
    healthContext: JourneyHealthContext
  ): string {
    const journeyId = uuidv4();
    const now = new Date().toISOString();

    const stmt = this.db.prepare(`
      INSERT INTO intent_journeys (
        journey_id, session_id, started_at, journey_type, health_context, completed
      ) VALUES (?, ?, ?, ?, ?, 0)
    `);

    stmt.run(
      journeyId,
      sessionId,
      now,
      journeyType,
      JSON.stringify(healthContext)
    );

    return journeyId;
  }

  /**
   * Complete a journey with outcome
   */
  completeJourney(
    journeyId: string,
    outcome: JourneyOutcome,
    inferredIntent?: InferredIntent
  ): void {
    const now = new Date().toISOString();

    const stmt = this.db.prepare(`
      UPDATE intent_journeys
      SET ended_at = ?, completed = 1, outcome = ?, inferred_intent = ?
      WHERE journey_id = ?
    `);

    stmt.run(
      now,
      JSON.stringify(outcome),
      inferredIntent ? JSON.stringify(inferredIntent) : null,
      journeyId
    );
  }

  /**
   * Get a journey by ID
   */
  getJourney(journeyId: string): UserJourney | null {
    const journeyStmt = this.db.prepare(`
      SELECT * FROM intent_journeys WHERE journey_id = ?
    `);

    const row = journeyStmt.get(journeyId) as StoredJourney | undefined;
    if (!row) return null;

    // Get associated actions
    const actionsStmt = this.db.prepare(`
      SELECT * FROM intent_actions
      WHERE session_id = ? AND timestamp >= ?
      ORDER BY timestamp ASC
    `);

    const actionRows = actionsStmt.all(row.sessionId, row.startedAt) as StoredAction[];
    const actions = actionRows.map(this.rowToAction);

    return this.rowToJourney(row, actions);
  }

  /**
   * Get journeys for a session
   */
  getSessionJourneys(sessionId: string): UserJourney[] {
    const stmt = this.db.prepare(`
      SELECT * FROM intent_journeys
      WHERE session_id = ?
      ORDER BY started_at DESC
    `);

    const rows = stmt.all(sessionId) as StoredJourney[];
    return rows.map(row => this.rowToJourney(row, []));
  }

  /**
   * Get recent journeys across all sessions
   */
  getRecentJourneys(limit = 10): UserJourney[] {
    const stmt = this.db.prepare(`
      SELECT * FROM intent_journeys
      ORDER BY started_at DESC
      LIMIT ?
    `);

    const rows = stmt.all(limit) as StoredJourney[];
    return rows.map(row => this.rowToJourney(row, []));
  }

  /**
   * Update journey's inferred intent
   */
  updateJourneyIntent(journeyId: string, intent: InferredIntent): void {
    const stmt = this.db.prepare(`
      UPDATE intent_journeys SET inferred_intent = ? WHERE journey_id = ?
    `);

    stmt.run(JSON.stringify(intent), journeyId);
  }

  /**
   * Convert database row to UserJourney
   */
  private rowToJourney(row: StoredJourney, actions: ActionEvent[]): UserJourney {
    return {
      journeyId: row.journeyId,
      sessionId: row.sessionId,
      startedAt: row.startedAt,
      endedAt: row.endedAt,
      journeyType: row.journeyType as JourneyType,
      healthContext: JSON.parse(row.healthContext),
      completed: Boolean(row.completed),
      outcome: row.outcome ? JSON.parse(row.outcome) : undefined,
      inferredIntent: row.inferredIntent ? JSON.parse(row.inferredIntent) : undefined,
      actions,
    };
  }

  // ============================================
  // Cleanup Operations
  // ============================================

  /**
   * Clean up old data beyond retention period
   */
  cleanup(retentionDays: number = DEFAULT_RETENTION_DAYS): { actionsDeleted: number; journeysDeleted: number } {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - retentionDays);
    const cutoffStr = cutoff.toISOString();

    const actionsStmt = this.db.prepare(`
      DELETE FROM intent_actions WHERE timestamp < ?
    `);
    const actionsResult = actionsStmt.run(cutoffStr);

    const journeysStmt = this.db.prepare(`
      DELETE FROM intent_journeys WHERE started_at < ?
    `);
    const journeysResult = journeysStmt.run(cutoffStr);

    return {
      actionsDeleted: actionsResult.changes,
      journeysDeleted: journeysResult.changes,
    };
  }

  /**
   * Get storage statistics
   */
  getStats(): {
    totalActions: number;
    totalJourneys: number;
    oldestAction: string | null;
    newestAction: string | null;
  } {
    const actionsCount = this.db.prepare('SELECT COUNT(*) as count FROM intent_actions').get() as { count: number };
    const journeysCount = this.db.prepare('SELECT COUNT(*) as count FROM intent_journeys').get() as { count: number };

    const oldest = this.db.prepare('SELECT MIN(timestamp) as ts FROM intent_actions').get() as { ts: string | null };
    const newest = this.db.prepare('SELECT MAX(timestamp) as ts FROM intent_actions').get() as { ts: string | null };

    return {
      totalActions: actionsCount.count,
      totalJourneys: journeysCount.count,
      oldestAction: oldest.ts,
      newestAction: newest.ts,
    };
  }

  /**
   * Close the database connection
   */
  close(): void {
    this.db.close();
  }
}

// ============================================
// Factory Function
// ============================================

let _store: JourneyStore | null = null;

/**
 * Get or create the journey store instance
 */
export function getJourneyStore(dbPath?: string): JourneyStore {
  if (!_store && dbPath) {
    _store = new JourneyStore(dbPath);
  }
  if (!_store) {
    throw new Error('Journey store not initialized. Call with dbPath first.');
  }
  return _store;
}

/**
 * Initialize the journey store
 */
export function initJourneyStore(dbPath: string): JourneyStore {
  if (_store) {
    _store.close();
  }
  _store = new JourneyStore(dbPath);
  return _store;
}

/**
 * Close the journey store
 */
export function closeJourneyStore(): void {
  if (_store) {
    _store.close();
    _store = null;
  }
}
