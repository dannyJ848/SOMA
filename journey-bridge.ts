#!/usr/bin/env npx tsx
/**
 * Journey Bridge - Tauri IPC bridge for intent prediction journey store
 *
 * This bridge allows Tauri to interact with the journey store via CLI commands.
 * Usage: npx tsx journey-bridge.ts <command> [args...]
 */

import { JourneyStore } from './core/intent-prediction/journey-store.js';
import type { ActionEvent, JourneyType, JourneyHealthContext, JourneyOutcome, InferredIntent } from './core/intent-prediction/types.js';

// ============================================================================
// Database Path
// ============================================================================

function getDbPath(): string {
  // Use separate database for journey data (unencrypted behavioral data)
  const dbPath = process.env.BIOSELF_JOURNEY_DB_PATH || './data/journeys.db';
  return dbPath;
}

// ============================================================================
// Commands
// ============================================================================

const commands: Record<string, (...args: string[]) => Promise<unknown> | unknown> = {
  /**
   * Add a new action to the store
   */
  'add-action': (actionJson: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const action: ActionEvent = JSON.parse(actionJson);
      store.addAction(action);
      return { success: true, actionId: action.id };
    } finally {
      store.close();
    }
  },

  /**
   * Get recent actions for a session
   */
  'get-recent-actions': (sessionId: string, limit?: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const actions = store.getRecentActions(sessionId, limit ? parseInt(limit, 10) : 20);
      return { actions };
    } finally {
      store.close();
    }
  },

  /**
   * Get all actions for a session
   */
  'get-session-actions': (sessionId: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const actions = store.getSessionActions(sessionId);
      return { actions };
    } finally {
      store.close();
    }
  },

  /**
   * Get action count for a session
   */
  'get-action-count': (sessionId: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const count = store.getActionCount(sessionId);
      return { count };
    } finally {
      store.close();
    }
  },

  /**
   * Start a new journey
   */
  'start-journey': (sessionId: string, journeyType: string, healthContextJson: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const healthContext: JourneyHealthContext = JSON.parse(healthContextJson);
      const journeyId = store.startJourney(sessionId, journeyType as JourneyType, healthContext);
      return { journeyId };
    } finally {
      store.close();
    }
  },

  /**
   * Complete a journey
   */
  'complete-journey': (journeyId: string, outcomeJson: string, intentJson?: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const outcome: JourneyOutcome = JSON.parse(outcomeJson);
      const intent: InferredIntent | undefined = intentJson ? JSON.parse(intentJson) : undefined;
      store.completeJourney(journeyId, outcome, intent);
      return { success: true };
    } finally {
      store.close();
    }
  },

  /**
   * Get a journey by ID
   */
  'get-journey': (journeyId: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const journey = store.getJourney(journeyId);
      return { journey };
    } finally {
      store.close();
    }
  },

  /**
   * Get journeys for a session
   */
  'get-session-journeys': (sessionId: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const journeys = store.getSessionJourneys(sessionId);
      return { journeys };
    } finally {
      store.close();
    }
  },

  /**
   * Get recent journeys
   */
  'get-recent-journeys': (limit?: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const journeys = store.getRecentJourneys(limit ? parseInt(limit, 10) : 10);
      return { journeys };
    } finally {
      store.close();
    }
  },

  /**
   * Update journey intent
   */
  'update-journey-intent': (journeyId: string, intentJson: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const intent: InferredIntent = JSON.parse(intentJson);
      store.updateJourneyIntent(journeyId, intent);
      return { success: true };
    } finally {
      store.close();
    }
  },

  /**
   * Cleanup old data
   */
  'cleanup': (retentionDays?: string) => {
    const store = new JourneyStore(getDbPath());
    try {
      const result = store.cleanup(retentionDays ? parseInt(retentionDays, 10) : 30);
      return result;
    } finally {
      store.close();
    }
  },

  /**
   * Get storage stats
   */
  'get-stats': () => {
    const store = new JourneyStore(getDbPath());
    try {
      const stats = store.getStats();
      return stats;
    } finally {
      store.close();
    }
  },
};

// ============================================================================
// Main Entry Point
// ============================================================================

async function main() {
  const [command, ...args] = process.argv.slice(2);

  if (!command || command === 'help') {
    console.log('Journey Bridge - Available commands:');
    console.log('  add-action <actionJson>');
    console.log('  get-recent-actions <sessionId> [limit]');
    console.log('  get-session-actions <sessionId>');
    console.log('  get-action-count <sessionId>');
    console.log('  start-journey <sessionId> <journeyType> <healthContextJson>');
    console.log('  complete-journey <journeyId> <outcomeJson> [intentJson]');
    console.log('  get-journey <journeyId>');
    console.log('  get-session-journeys <sessionId>');
    console.log('  get-recent-journeys [limit]');
    console.log('  update-journey-intent <journeyId> <intentJson>');
    console.log('  cleanup [retentionDays]');
    console.log('  get-stats');
    process.exit(0);
  }

  const handler = commands[command];
  if (!handler) {
    console.error(`Unknown command: ${command}`);
    process.exit(1);
  }

  try {
    const result = await handler(...args);
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error(JSON.stringify({ error: String(error) }));
    process.exit(1);
  }
}

main();
