#!/usr/bin/env npx tsx
/**
 * The Biological Self - Terminal Interface
 *
 * Interactive CLI for building your biological self and asking questions.
 *
 * Run with: npx tsx cli.ts
 */

import * as readline from 'readline';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

import { BiologicalSelfStore } from './core/biological-self/store.js';
import type { BiologicalSelf, DepthLevel, Condition, Medication } from './core/biological-self/types.js';
import { DEPTH_LEVEL_NAMES } from './core/biological-self/types.js';
import { OllamaClient } from './core/explanation-engine/ollama-client.js';
import { VectorStore, KnowledgeRetriever, seedKnowledgeBase, needsSeeding } from './core/knowledge-base/index.js';

// ============================================================================
// Configuration
// ============================================================================

const DATA_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DATA_DIR, 'biological-self.db');
const KNOWLEDGE_DB_PATH = join(DATA_DIR, 'knowledge.db');

// ============================================================================
// Terminal UI Helpers
// ============================================================================

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function color(text: string, c: keyof typeof COLORS): string {
  return `${COLORS[c]}${text}${COLORS.reset}`;
}

function header(text: string): void {
  console.log('\n' + color('═'.repeat(60), 'cyan'));
  console.log(color(`  ${text}`, 'bright'));
  console.log(color('═'.repeat(60), 'cyan') + '\n');
}

function subheader(text: string): void {
  console.log('\n' + color(`── ${text} ──`, 'yellow') + '\n');
}

function success(text: string): void {
  console.log(color('✓ ', 'green') + text);
}

function error(text: string): void {
  console.log(color('✗ ', 'red') + text);
}

function info(text: string): void {
  console.log(color('ℹ ', 'blue') + text);
}

function warn(text: string): void {
  console.log(color('⚠ ', 'yellow') + text);
}

// ============================================================================
// Main CLI Class
// ============================================================================

class BiologicalSelfCLI {
  private rl: readline.Interface;
  private store: BiologicalSelfStore;
  private self: BiologicalSelf | null = null;
  private ollama: OllamaClient;
  private vectorStore: VectorStore;
  private retriever: KnowledgeRetriever;
  private passphrase: string = '';

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // Ensure data directory exists
    if (!existsSync(DATA_DIR)) {
      mkdirSync(DATA_DIR, { recursive: true });
    }

    this.ollama = new OllamaClient('llama3.1:8b');
    this.vectorStore = new VectorStore(KNOWLEDGE_DB_PATH);
    this.retriever = new KnowledgeRetriever(this.vectorStore);
    this.store = null as unknown as BiologicalSelfStore; // Will be initialized after passphrase
  }

  private prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, resolve);
    });
  }

  private async promptPassword(question: string): Promise<string> {
    // Note: In a real app, we'd hide the password input
    // For now, we just use regular input
    return this.prompt(question);
  }

  async run(): Promise<void> {
    console.clear();
    header('THE BIOLOGICAL SELF');
    console.log('  Understand your body like a physician understands patients.');
    console.log('  ' + color('100% local. 100% private. 100% yours.', 'dim'));
    console.log();

    // Check Ollama
    info('Checking local AI...');
    const health = await this.ollama.healthCheck();
    if (!health.ok) {
      error(health.error || 'Ollama not available');
      console.log('\n  Please ensure Ollama is running:');
      console.log('    brew services start ollama');
      console.log('    ollama pull llama3.1:8b\n');
      process.exit(1);
    }
    success('Local AI ready (llama3.1:8b)');

    // Check/seed knowledge base
    if (needsSeeding(this.vectorStore)) {
      info('Initializing knowledge base...');
      await seedKnowledgeBase(this.vectorStore);
      success('Knowledge base ready');
    } else {
      success(`Knowledge base loaded (${this.vectorStore.getCount()} chunks)`);
    }

    // Get passphrase
    console.log();
    info('Your data is encrypted. Enter a passphrase to unlock/create your Biological Self.');
    this.passphrase = await this.promptPassword(color('  Passphrase: ', 'cyan'));

    if (!this.passphrase) {
      error('Passphrase required');
      process.exit(1);
    }

    // Initialize store
    this.store = new BiologicalSelfStore(DB_PATH, this.passphrase);
    this.self = this.store.get();

    if (!this.self) {
      info('No existing Biological Self found. Creating new one...');
      this.self = this.store.create();
      success('Created new Biological Self');
    } else {
      success('Loaded your Biological Self');
    }

    // Main loop
    await this.mainMenu();
  }

  private async mainMenu(): Promise<void> {
    while (true) {
      header('MAIN MENU');
      console.log('  1. ' + color('Ask a question', 'green') + ' - Get personalized health explanations');
      console.log('  2. ' + color('View my Biological Self', 'blue') + ' - See your health profile');
      console.log('  3. ' + color('Add health data', 'yellow') + ' - Conditions, medications, labs, etc.');
      console.log('  4. ' + color('Settings', 'magenta') + ' - Change depth level, language');
      console.log('  5. ' + color('Exit', 'dim'));
      console.log();

      const choice = await this.prompt(color('  Choose (1-5): ', 'cyan'));

      switch (choice.trim()) {
        case '1':
          await this.askQuestion();
          break;
        case '2':
          await this.viewBiologicalSelf();
          break;
        case '3':
          await this.addHealthData();
          break;
        case '4':
          await this.settings();
          break;
        case '5':
          await this.exit();
          return;
        default:
          warn('Invalid choice');
      }
    }
  }

  private async askQuestion(): Promise<void> {
    if (!this.self) return;

    header('ASK A QUESTION');
    console.log(`  Current depth level: ${color(DEPTH_LEVEL_NAMES[this.self.settings.defaultDepthLevel], 'cyan')}`);
    console.log('  (Change in Settings)\n');

    const question = await this.prompt(color('  Your question: ', 'green'));
    if (!question.trim()) return;

    console.log('\n' + color('  Thinking...', 'dim'));

    try {
      // Build context from biological self
      const context = this.buildContext();

      // Retrieve relevant knowledge
      const knowledge = await this.retriever.retrieve({
        question,
        biologicalSelf: this.self,
        maxChunks: 5,
      });

      // Get explanation
      const response = await this.ollama.explain({
        question,
        depthLevel: this.self.settings.defaultDepthLevel,
        context,
        knowledge: knowledge.content,
      });

      // Display response
      subheader('EXPLANATION');
      console.log(this.wrapText(response.explanation, 70));

      if (knowledge.sources.length > 0) {
        console.log('\n' + color('  Sources:', 'dim'));
        for (const source of knowledge.sources) {
          console.log(color(`    • ${source}`, 'dim'));
        }
      }

      console.log('\n' + color(`  [Tokens: ${response.tokensUsed}]`, 'dim'));

    } catch (err) {
      error(`Failed to get explanation: ${err}`);
    }

    await this.prompt('\n  Press Enter to continue...');
  }

  private async viewBiologicalSelf(): Promise<void> {
    if (!this.self) return;

    header('YOUR BIOLOGICAL SELF');

    // Conditions
    const activeConditions = this.store.getActiveConditions(this.self);
    if (activeConditions.length > 0) {
      subheader('Active Conditions');
      for (const c of activeConditions) {
        console.log(`  • ${color(c.name, 'bright')} (${c.status}, ${c.severity || 'severity unknown'})`);
        if (c.notes) console.log(color(`    ${c.notes}`, 'dim'));
      }
    }

    // Medications
    const currentMeds = this.store.getCurrentMedications(this.self);
    if (currentMeds.length > 0) {
      subheader('Current Medications');
      for (const m of currentMeds) {
        const dose = m.dosage ? ` ${m.dosage.amount}${m.dosage.unit}` : '';
        console.log(`  • ${color(m.name, 'bright')}${dose} ${m.frequency || ''}`);
      }
    }

    // Surgeries
    if (this.self.surgicalHistory.length > 0) {
      subheader('Surgical History');
      for (const s of this.self.surgicalHistory) {
        const when = s.ageAtSurgery ? `age ${s.ageAtSurgery}` : s.date?.toLocaleDateString() || '';
        console.log(`  • ${color(s.procedure, 'bright')} ${when ? `(${when})` : ''}`);
      }
    }

    // Recent labs
    const recentLabs = this.store.getRecentLabs(this.self, 180);
    if (recentLabs.length > 0) {
      subheader('Recent Labs (180 days)');
      for (const l of recentLabs) {
        const status = l.status === 'abnormal-low' || l.status === 'abnormal-high'
          ? color(` [${l.status}]`, 'yellow')
          : '';
        console.log(`  • ${l.testName}: ${l.value} ${l.unit || ''}${status}`);
      }
    }

    // Allergies
    if (this.self.allergies.length > 0) {
      subheader('Allergies');
      for (const a of this.self.allergies) {
        console.log(`  • ${color(a.allergen, 'bright')} (${a.severity})`);
      }
    }

    if (activeConditions.length === 0 && currentMeds.length === 0 &&
        this.self.surgicalHistory.length === 0 && recentLabs.length === 0) {
      info('No health data yet. Add some in "Add health data".');
    }

    await this.prompt('\n  Press Enter to continue...');
  }

  private async addHealthData(): Promise<void> {
    if (!this.self) return;

    header('ADD HEALTH DATA');
    console.log('  1. Add a condition');
    console.log('  2. Add a medication');
    console.log('  3. Add a lab result');
    console.log('  4. Add surgical history');
    console.log('  5. Add an allergy');
    console.log('  6. Back to main menu');
    console.log();

    const choice = await this.prompt(color('  Choose (1-6): ', 'cyan'));

    switch (choice.trim()) {
      case '1':
        await this.addCondition();
        break;
      case '2':
        await this.addMedication();
        break;
      case '3':
        await this.addLabResult();
        break;
      case '4':
        await this.addSurgery();
        break;
      case '5':
        await this.addAllergy();
        break;
    }
  }

  private async addCondition(): Promise<void> {
    if (!this.self) return;

    subheader('ADD CONDITION');

    const name = await this.prompt('  Condition name: ');
    if (!name.trim()) return;

    const statusChoice = await this.prompt('  Status (1=active, 2=chronic, 3=resolved): ');
    const statusMap: Record<string, Condition['status']> = {
      '1': 'active', '2': 'chronic', '3': 'resolved'
    };
    const status = statusMap[statusChoice.trim()] || 'active';

    const severityChoice = await this.prompt('  Severity (1=mild, 2=moderate, 3=severe): ');
    const severityMap: Record<string, Condition['severity']> = {
      '1': 'mild', '2': 'moderate', '3': 'severe'
    };
    const severity = severityMap[severityChoice.trim()];

    const notes = await this.prompt('  Notes (optional): ');

    this.store.addCondition(this.self, {
      name: name.trim(),
      status,
      severity,
      notes: notes.trim() || undefined,
    });

    success(`Added condition: ${name}`);
  }

  private async addMedication(): Promise<void> {
    if (!this.self) return;

    subheader('ADD MEDICATION');

    const name = await this.prompt('  Medication name: ');
    if (!name.trim()) return;

    const dosageStr = await this.prompt('  Dosage (e.g., 100mg): ');
    let dosage: Medication['dosage'];
    const match = dosageStr.match(/^(\d+(?:\.\d+)?)\s*(\w+)$/);
    if (match) {
      dosage = { amount: parseFloat(match[1]), unit: match[2] };
    }

    const frequency = await this.prompt('  Frequency (e.g., once daily): ');

    const statusChoice = await this.prompt('  Status (1=current, 2=as-needed, 3=past): ');
    const statusMap: Record<string, Medication['status']> = {
      '1': 'current', '2': 'as-needed', '3': 'past'
    };
    const status = statusMap[statusChoice.trim()] || 'current';

    this.store.addMedication(this.self, {
      name: name.trim(),
      status,
      dosage,
      frequency: frequency.trim() || undefined,
    });

    success(`Added medication: ${name}`);
  }

  private async addLabResult(): Promise<void> {
    if (!this.self) return;

    subheader('ADD LAB RESULT');

    const testName = await this.prompt('  Test name (e.g., Ferritin): ');
    if (!testName.trim()) return;

    const valueStr = await this.prompt('  Value: ');
    const value = parseFloat(valueStr) || valueStr;

    const unit = await this.prompt('  Unit (e.g., ng/mL): ');

    const refLow = await this.prompt('  Reference range low (optional): ');
    const refHigh = await this.prompt('  Reference range high (optional): ');

    let status: 'normal' | 'abnormal-low' | 'abnormal-high' | undefined;
    if (typeof value === 'number' && refLow && refHigh) {
      const low = parseFloat(refLow);
      const high = parseFloat(refHigh);
      if (value < low) status = 'abnormal-low';
      else if (value > high) status = 'abnormal-high';
      else status = 'normal';
    }

    this.store.addLabResult(this.self, {
      testName: testName.trim(),
      value,
      unit: unit.trim() || undefined,
      referenceRange: refLow || refHigh ? {
        low: refLow ? parseFloat(refLow) : undefined,
        high: refHigh ? parseFloat(refHigh) : undefined,
      } : undefined,
      status,
      collectedAt: new Date(),
    });

    success(`Added lab result: ${testName}`);
  }

  private async addSurgery(): Promise<void> {
    if (!this.self) return;

    subheader('ADD SURGICAL HISTORY');

    const procedure = await this.prompt('  Procedure name: ');
    if (!procedure.trim()) return;

    const ageStr = await this.prompt('  Age at surgery (optional): ');
    const ageAtSurgery = ageStr ? parseInt(ageStr) : undefined;

    const reason = await this.prompt('  Reason for surgery: ');
    const complications = await this.prompt('  Complications (comma-separated, optional): ');

    this.store.addSurgery(this.self, {
      procedure: procedure.trim(),
      ageAtSurgery,
      reason: reason.trim() || undefined,
      complications: complications ? complications.split(',').map(c => c.trim()) : undefined,
    });

    success(`Added surgery: ${procedure}`);
  }

  private async addAllergy(): Promise<void> {
    if (!this.self) return;

    subheader('ADD ALLERGY');

    const allergen = await this.prompt('  Allergen: ');
    if (!allergen.trim()) return;

    const typeChoice = await this.prompt('  Type (1=drug, 2=food, 3=environmental, 4=other): ');
    const typeMap: Record<string, 'drug' | 'food' | 'environmental' | 'other'> = {
      '1': 'drug', '2': 'food', '3': 'environmental', '4': 'other'
    };
    const type = typeMap[typeChoice.trim()] || 'other';

    const severityChoice = await this.prompt('  Severity (1=mild, 2=moderate, 3=severe, 4=life-threatening): ');
    const severityMap: Record<string, 'mild' | 'moderate' | 'severe' | 'life-threatening'> = {
      '1': 'mild', '2': 'moderate', '3': 'severe', '4': 'life-threatening'
    };
    const severity = severityMap[severityChoice.trim()] || 'moderate';

    const reactions = await this.prompt('  Reactions (comma-separated): ');

    this.store.addAllergy(this.self, {
      allergen: allergen.trim(),
      type,
      severity,
      reactions: reactions ? reactions.split(',').map(r => r.trim()) : [],
    });

    success(`Added allergy: ${allergen}`);
  }

  private async settings(): Promise<void> {
    if (!this.self) return;

    header('SETTINGS');
    console.log(`  Current depth level: ${color(DEPTH_LEVEL_NAMES[this.self.settings.defaultDepthLevel], 'cyan')}\n`);

    console.log('  Depth levels:');
    for (let i = 1; i <= 6; i++) {
      const current = i === this.self.settings.defaultDepthLevel ? ' ← current' : '';
      console.log(`    ${i}. ${DEPTH_LEVEL_NAMES[i as DepthLevel]}${color(current, 'green')}`);
    }
    console.log();

    const choice = await this.prompt(color('  New depth level (1-6, or Enter to keep): ', 'cyan'));

    if (choice.trim() && ['1', '2', '3', '4', '5', '6'].includes(choice.trim())) {
      this.store.updateSettings(this.self, {
        defaultDepthLevel: parseInt(choice.trim()) as DepthLevel,
      });
      success(`Depth level set to: ${DEPTH_LEVEL_NAMES[parseInt(choice.trim()) as DepthLevel]}`);
    }

    await this.prompt('\n  Press Enter to continue...');
  }

  private async exit(): Promise<void> {
    header('GOODBYE');
    console.log('  Your Biological Self is saved locally and encrypted.');
    console.log('  ' + color('No data was sent anywhere. Ever.', 'green'));
    console.log();

    this.store?.close();
    this.vectorStore?.close();
    this.rl.close();
  }

  private buildContext(): string {
    if (!this.self) return '';

    const lines: string[] = [];

    // Conditions
    const activeConditions = this.store.getActiveConditions(this.self);
    if (activeConditions.length > 0) {
      lines.push('Active/Chronic Conditions:');
      for (const c of activeConditions) {
        lines.push(`- ${c.name} (${c.status}, ${c.severity || 'severity unknown'})`);
        if (c.notes) lines.push(`  Notes: ${c.notes}`);
      }
    }

    // Surgeries
    if (this.self.surgicalHistory.length > 0) {
      lines.push('\nSurgical History:');
      for (const s of this.self.surgicalHistory) {
        const age = s.ageAtSurgery ? `age ${s.ageAtSurgery}` : '';
        lines.push(`- ${s.procedure} ${age ? `(${age})` : ''}`);
        if (s.reason) lines.push(`  Reason: ${s.reason}`);
        if (s.complications?.length) lines.push(`  Complications: ${s.complications.join(', ')}`);
      }
    }

    // Medications
    const currentMeds = this.store.getCurrentMedications(this.self);
    if (currentMeds.length > 0) {
      lines.push('\nCurrent Medications:');
      for (const m of currentMeds) {
        const dose = m.dosage ? `${m.dosage.amount}${m.dosage.unit}` : '';
        lines.push(`- ${m.name} ${dose} ${m.frequency || ''}`);
      }
    }

    // Recent labs
    const recentLabs = this.store.getRecentLabs(this.self, 180);
    if (recentLabs.length > 0) {
      lines.push('\nRecent Labs:');
      for (const l of recentLabs) {
        const range = l.referenceRange
          ? ` (ref: ${l.referenceRange.low}-${l.referenceRange.high})`
          : '';
        lines.push(`- ${l.testName}: ${l.value} ${l.unit || ''}${range} - ${l.status || ''}`);
      }
    }

    // Allergies
    if (this.self.allergies.length > 0) {
      lines.push('\nAllergies:');
      for (const a of this.self.allergies) {
        lines.push(`- ${a.allergen} (${a.type}, ${a.severity})`);
      }
    }

    return lines.join('\n');
  }

  private wrapText(text: string, width: number): string {
    const lines = text.split('\n');
    return lines.map(line => {
      if (line.length <= width) return '  ' + line;
      const words = line.split(' ');
      let current = '  ';
      const result: string[] = [];
      for (const word of words) {
        if (current.length + word.length > width) {
          result.push(current);
          current = '  ' + word + ' ';
        } else {
          current += word + ' ';
        }
      }
      if (current.trim()) result.push(current);
      return result.join('\n');
    }).join('\n');
  }
}

// ============================================================================
// Run
// ============================================================================

const cli = new BiologicalSelfCLI();
cli.run().catch(console.error);
