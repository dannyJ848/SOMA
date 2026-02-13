# Granular AI Architecture

## Overview
The AI layer is decomposed into specialized, composable sub-modules for different cognitive tasks.

## Directory Structure

```
core/ai/
├── inference/                   # Model inference abstractions
│   ├── ollama/
│   │   ├── client.ts           # HTTP client
│   │   ├── streaming.ts        # Streaming response handlers
│   │   ├── embeddings.ts       # Embedding generation
│   │   ├── model-management.ts # Pull/list/delete models
│   │   └── index.ts
│   │
│   ├── llama-cpp/              # Future: Direct llama.cpp integration
│   │   └── README.md
│   │
│   └── types.ts                # Shared inference types
│
├── prompts/                     # Prompt engineering modules
│   ├── templates/              # Reusable prompt templates
│   │   ├── medical-explanation.ts
│   │   ├── lab-interpretation.ts
│   │   ├── symptom-analysis.ts
│   │   └── index.ts
│   │
│   ├── builders/               # Prompt construction utilities
│   │   ├── context-assembly.ts # Assemble health context
│   │   ├── depth-adjuster.ts   # Adjust for complexity level
│   │   ├── citation-injector.ts # Add source citations
│   │   └── index.ts
│   │
│   └── optimizers/             # Prompt optimization
│       ├── token-counter.ts
│       ├── context-pruner.ts   # Remove low-priority context
│       └── index.ts
│
├── parsing/                     # Output parsing and validation
│   ├── json-extractor.ts       # Extract JSON from responses
│   ├── medical-validator.ts    # Validate medical claims
│   ├── confidence-scorer.ts    # Assign confidence scores
│   └── index.ts
│
├── explanation/                 # Explanation generation pipeline
│   ├── engine.ts               # Main orchestrator
│   ├── steps/
│   │   ├── query-analysis.ts   # Understand user intent
│   │   ├── context-retrieval.ts # Get relevant health data
│   │   ├── knowledge-retrieval.ts # RAG over knowledge base
│   │   ├── prompt-construction.ts # Build final prompt
│   │   ├── generation.ts       # Call LLM
│   │   ├── post-processing.ts  # Format and validate
│   │   └── index.ts
│   └── index.ts
│
├── insights/                    # AI-generated insights
│   ├── pattern-detector.ts
│   ├── correlation-finder.ts
│   ├── anomaly-detector.ts
│   └── index.ts
│
├── cueing/                      # Proactive AI cueing
│   ├── trigger-engine.ts       # When to cue
│   ├── content-generator.ts    # What to say
│   ├── timing-optimizer.ts     # When to show
│   └── index.ts
│
├── recommendations/            # Learning recommendations
│   ├── knowledge-gap-analyzer.ts
│   ├── content-suggester.ts
│   ├── path-planner.ts         # Learning path planning
│   └── index.ts
│
├── safety/                      # AI safety layer
│   ├── content-filter.ts       # Filter unsafe outputs
│   ├── hallucination-detector.ts
│   ├── disclaimer-injector.ts
│   └── index.ts
│
└── evaluation/                  # Quality evaluation
    ├── response-scorer.ts
    ├── feedback-collector.ts
    └── index.ts
```

## Prompt Template Example

```typescript
// core/ai/prompts/templates/medical-explanation.ts

import type { ComplexityLevel } from '../../types.js';
import type { BiologicalSelf } from '../../../data/types.js';

export interface ExplanationContext {
  question: string;
  biologicalSelf: BiologicalSelf;
  retrievedKnowledge: string[];
  complexity: ComplexityLevel;
}

export const MEDICAL_EXPLANATION_TEMPLATE = {
  system: (complexity: ComplexityLevel): string => {
    const base = `You are an educational health assistant. Explain medical concepts clearly and accurately.

CRITICAL RULES:
1. NEVER diagnose conditions
2. NEVER prescribe treatments
3. ALWAYS include: "This is educational information, not medical advice."
4. Cite sources when making factual claims
5. Adjust complexity based on user preference`;

    const complexityGuidance: Record<ComplexityLevel, string> = {
      1: 'Use simple analogies. Avoid jargon. Explain like to a middle schooler.',
      2: 'Introduce basic medical terms with explanations.',
      3: 'Use standard medical terminology. Assume high school biology knowledge.',
      4: 'Use technical terms freely. Reference biochemical pathways.',
      5: 'Academic depth. Include mechanisms and research context.',
      6: 'Clinical depth. Discuss differential diagnoses (educational only).',
    };

    return `${base}\n\nCOMPLEXITY GUIDANCE: ${complexityGuidance[complexity]}`;
  },

  user: (ctx: ExplanationContext): string => {
    return `User's Health Context:
${formatHealthContext(ctx.biologicalSelf, ctx.complexity)}

Relevant Medical Knowledge:
${ctx.retrievedKnowledge.join('\n\n')}

User Question: ${ctx.question}

Provide an educational explanation at complexity level ${ctx.complexity}.`;
  },
};

function formatHealthContext(self: BiologicalSelf, complexity: ComplexityLevel): string {
  // Include only relevant context based on complexity level
  const activeConditions = self.conditions.filter(c => c.status === 'active');
  const currentMeds = self.medications.filter(m => m.status === 'active');
  const recentLabs = self.labResults.slice(0, 10);

  return `
Active Conditions: ${activeConditions.map(c => c.name).join(', ') || 'None'}
Current Medications: ${currentMeds.map(m => m.name).join(', ') || 'None'}
Recent Abnormal Labs: ${recentLabs.filter(l => l.status !== 'normal').map(l => `${l.testName}: ${l.value}`).join(', ') || 'None'}
`;
}
```

## Pipeline Example

```typescript
// core/ai/explanation/steps/prompt-construction.ts

import type { ExplanationContext } from '../../prompts/templates/medical-explanation.js';
import { MEDICAL_EXPLANATION_TEMPLATE } from '../../prompts/templates/medical-explanation.js';
import { countTokens } from '../../prompts/optimizers/token-counter.js';
import { pruneContext } from '../../prompts/optimizers/context-pruner.js';

export interface ConstructedPrompt {
  system: string;
  user: string;
  estimatedTokens: number;
}

export function constructPrompt(
  ctx: ExplanationContext,
  maxTokens: number = 4000
): ConstructedPrompt {
  let system = MEDICAL_EXPLANATION_TEMPLATE.system(ctx.complexity);
  let user = MEDICAL_EXPLANATION_TEMPLATE.user(ctx);

  // Check token count and prune if necessary
  let estimatedTokens = countTokens(system + user);

  while (estimatedTokens > maxTokens * 0.8) {
    ctx = pruneContext(ctx);
    user = MEDICAL_EXPLANATION_TEMPLATE.user(ctx);
    estimatedTokens = countTokens(system + user);
  }

  return { system, user, estimatedTokens };
}
```

## Design Principles

1. **Pipeline Architecture**: Each step is a pure function
2. **Composability**: Steps chain together cleanly
3. **Observability**: Each step logs its input/output
4. **Testability**: Mock LLM responses for testing
5. **Fallbacks**: Degrade gracefully on errors
