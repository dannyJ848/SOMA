/**
 * Biological Self - Demo Script
 *
 * This demonstrates the core functionality:
 * 1. Creating a biological self with health data
 * 2. Asking a question at different depth levels
 * 3. Getting personalized explanations from local AI
 *
 * Run with: npx tsx demo.ts
 */

import { BiologicalSelfStore } from './core/biological-self/store.js';
import { OllamaClient } from './core/explanation-engine/ollama-client.js';
import type { DepthLevel } from './core/biological-self/types.js';
import { mkdirSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';

// ============================================================================
// Demo Configuration
// ============================================================================

const DATA_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DATA_DIR, 'demo-biological-self.db');
const PASSPHRASE = 'demo-passphrase-change-in-production';

// ============================================================================
// Main Demo
// ============================================================================

async function main() {
  console.log('\n╔═══════════════════════════════════════════════════════════════╗');
  console.log('║           THE BIOLOGICAL SELF - DEMO                          ║');
  console.log('║   Understand your body like a physician understands patients  ║');
  console.log('╚═══════════════════════════════════════════════════════════════╝\n');

  // Ensure data directory exists
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  // Clean up any previous demo database
  if (existsSync(DB_PATH)) {
    unlinkSync(DB_PATH);
  }

  // ========================================
  // Step 1: Create Biological Self
  // ========================================
  console.log('📋 Step 1: Creating your Biological Self...\n');

  const store = new BiologicalSelfStore(DB_PATH, PASSPHRASE);
  const self = store.create({ defaultDepthLevel: 3 });

  console.log(`   ✓ Created Biological Self (ID: ${self.id.slice(0, 8)}...)`);

  // Add some health data (simulating Danny's history)
  store.addSurgery(self, {
    procedure: 'Emergency appendectomy with laparotomy',
    ageAtSurgery: 9,
    reason: 'Ruptured appendix with early sepsis',
    complications: ['Adhesion formation', 'Extended ICU stay'],
    outcome: 'Survived with extensive adhesive disease',
  });

  store.addCondition(self, {
    name: 'Intestinal Adhesions',
    status: 'chronic',
    severity: 'severe',
    notes: '4 CT-confirmed small bowel obstructions, 8+ self-managed partial obstructions',
  });

  store.addCondition(self, {
    name: 'ADHD',
    status: 'active',
    severity: 'severe',
    notes: 'Treatment-resistant, diagnosed 2018',
  });

  store.addMedication(self, {
    name: 'Atomoxetine',
    genericName: 'atomoxetine',
    status: 'current',
    dosage: { amount: 100, unit: 'mg' },
    frequency: 'once daily',
    prescribedFor: 'ADHD',
  });

  store.addLabResult(self, {
    testName: 'Ferritin',
    value: 33,
    unit: 'ng/mL',
    referenceRange: { low: 30, high: 400 },
    status: 'abnormal-low',
    collectedAt: new Date('2025-10-15'),
    notes: 'Suggests possible malabsorption',
  });

  console.log('   ✓ Added surgical history (appendectomy age 9)');
  console.log('   ✓ Added conditions (adhesions, ADHD)');
  console.log('   ✓ Added current medication (atomoxetine)');
  console.log('   ✓ Added lab result (ferritin)');

  // ========================================
  // Step 2: Build Context
  // ========================================
  console.log('\n📊 Step 2: Building context from your Biological Self...\n');

  const context = buildContext(self, store);
  console.log('   Context preview:');
  console.log('   ' + context.split('\n').slice(0, 5).join('\n   ') + '...\n');

  // ========================================
  // Step 3: Check Ollama
  // ========================================
  console.log('🤖 Step 3: Connecting to local AI (Ollama)...\n');

  const ollama = new OllamaClient('llama3.1:8b');
  const health = await ollama.healthCheck();

  if (!health.ok) {
    console.error('   ✗ ' + health.error);
    console.error('\n   Please ensure Ollama is running: brew services start ollama');
    console.error('   And the model is pulled: ollama pull llama3.1:8b\n');
    process.exit(1);
  }

  console.log('   ✓ Ollama connected');
  console.log('   ✓ Model: llama3.1:8b\n');

  // ========================================
  // Step 4: Ask a Question
  // ========================================
  const question = 'Why do I get bloated after eating, and how might my surgical history be related?';

  console.log('❓ Step 4: Asking a question at different depth levels...\n');
  console.log(`   Question: "${question}"\n`);

  // Test at Level 1 (simple)
  console.log('─'.repeat(65));
  console.log('📗 LEVEL 1 (8th Grade - Foundation)\n');

  const response1 = await ollama.explain({
    question,
    depthLevel: 1 as DepthLevel,
    context,
    knowledge: getRelevantKnowledge(),
  });

  console.log(formatResponse(response1.explanation));
  console.log(`\n   [Tokens used: ${response1.tokensUsed}]\n`);

  // Test at Level 4 (advanced)
  console.log('─'.repeat(65));
  console.log('📘 LEVEL 4 (College - Advanced)\n');

  const response4 = await ollama.explain({
    question,
    depthLevel: 4 as DepthLevel,
    context,
    knowledge: getRelevantKnowledge(),
  });

  console.log(formatResponse(response4.explanation));
  console.log(`\n   [Tokens used: ${response4.tokensUsed}]\n`);

  // ========================================
  // Cleanup
  // ========================================
  console.log('─'.repeat(65));
  console.log('\n✅ Demo complete!\n');
  console.log('Your Biological Self is stored locally at:');
  console.log(`   ${DB_PATH}`);
  console.log('\nAll data is encrypted with AES-256. No data left your device.\n');

  store.close();
}

// ============================================================================
// Helper Functions
// ============================================================================

function buildContext(self: ReturnType<BiologicalSelfStore['get']>, store: BiologicalSelfStore): string {
  if (!self) return '';

  const lines: string[] = [];

  // Demographics
  if (self.demographics.biologicalSex) {
    lines.push(`Biological sex: ${self.demographics.biologicalSex}`);
  }

  // Conditions
  const activeConditions = store.getActiveConditions(self);
  if (activeConditions.length > 0) {
    lines.push('\nActive/Chronic Conditions:');
    for (const c of activeConditions) {
      lines.push(`- ${c.name} (${c.status}, ${c.severity || 'severity unknown'})`);
      if (c.notes) lines.push(`  Notes: ${c.notes}`);
    }
  }

  // Surgeries
  if (self.surgicalHistory.length > 0) {
    lines.push('\nSurgical History:');
    for (const s of self.surgicalHistory) {
      const age = s.ageAtSurgery ? `age ${s.ageAtSurgery}` : s.date?.toLocaleDateString() || 'date unknown';
      lines.push(`- ${s.procedure} (${age})`);
      if (s.reason) lines.push(`  Reason: ${s.reason}`);
      if (s.complications?.length) lines.push(`  Complications: ${s.complications.join(', ')}`);
    }
  }

  // Current medications
  const currentMeds = store.getCurrentMedications(self);
  if (currentMeds.length > 0) {
    lines.push('\nCurrent Medications:');
    for (const m of currentMeds) {
      const dose = m.dosage ? `${m.dosage.amount}${m.dosage.unit}` : '';
      lines.push(`- ${m.name} ${dose} ${m.frequency || ''}`);
    }
  }

  // Recent labs
  const recentLabs = store.getRecentLabs(self, 180);
  if (recentLabs.length > 0) {
    lines.push('\nRecent Lab Results:');
    for (const l of recentLabs) {
      const range = l.referenceRange
        ? ` (ref: ${l.referenceRange.low}-${l.referenceRange.high})`
        : '';
      lines.push(`- ${l.testName}: ${l.value} ${l.unit || ''}${range} - ${l.status || ''}`);
    }
  }

  return lines.join('\n');
}

function getRelevantKnowledge(): string {
  // In a real implementation, this would come from RAG over medical literature
  // For the demo, we include some relevant knowledge inline
  return `
RELEVANT MEDICAL KNOWLEDGE:

Intestinal Adhesions:
- Adhesions are bands of scar tissue that form between abdominal organs and tissues
- They commonly form after abdominal surgery, especially after peritonitis
- Adhesions can cause partial or complete bowel obstruction by kinking or compressing the intestine
- They can slow intestinal transit time, leading to bacterial overgrowth and malabsorption
- Symptoms include bloating, cramping, nausea, and altered bowel habits

Enteric Nervous System:
- The gut has its own nervous system with over 100 million neurons
- Surgical trauma can damage the enteric nervous system, affecting motility
- The ENS controls peristalsis, secretion, and absorption
- ENS dysfunction can cause delayed gastric emptying and intestinal dysmotility

Post-Surgical Malabsorption:
- Extensive adhesions can reduce effective absorptive surface area
- Bacterial overgrowth from stasis can compete for nutrients
- Low ferritin often indicates iron malabsorption
- Malabsorption can affect medications and nutrients

[Source: Medical Physiology, Guyton & Hall; Surgical Complications, Thompson et al.]
`;
}

function formatResponse(text: string): string {
  // Wrap text for better display
  const lines = text.split('\n');
  const wrapped = lines.map(line => {
    if (line.length <= 65) return '   ' + line;
    const words = line.split(' ');
    let current = '   ';
    const result: string[] = [];
    for (const word of words) {
      if (current.length + word.length > 65) {
        result.push(current);
        current = '   ' + word + ' ';
      } else {
        current += word + ' ';
      }
    }
    if (current.trim()) result.push(current);
    return result.join('\n');
  });
  return wrapped.join('\n');
}

// ============================================================================
// Run
// ============================================================================

main().catch(console.error);
