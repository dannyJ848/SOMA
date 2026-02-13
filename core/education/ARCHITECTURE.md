# Granular Educational Architecture

## Core Vision
Transform medical education - from what specialists learn in training - into accessible, modular patient education.

## Educational Philosophy

### The Physician Training → Patient Education Bridge

| Physician Training Stage | Patient Education Equivalent |
|--------------------------|------------------------------|
| Medical school pre-clinical | **Foundation Level** - Basic concepts, analogies |
| Medical school clinical | **Application Level** - Connecting concepts to their body |
| Residency | **Specialty Level** - Deep dives into their conditions |
| Fellowship | **Expert Level** - Research-level understanding |
| Continuing Medical Education | **Lifelong Learning** - Staying updated |

### Educational Design Principles

1. **Constructivist Learning**: Build on what they know
2. **Spaced Repetition**: Revisit concepts at intervals
3. **Active Recall**: Quizzes and self-assessment
4. **Elaborative Interrogation**: "Why" questions built-in
5. **Dual Coding**: Visual + verbal explanations
6. **Concrete Examples**: Always tied to their actual data

---

## Directory Structure

```
core/education/
├── curriculum/                  # Structured learning paths
│   ├── foundations/            # Medical school year 1 equivalent
│   │   ├── anatomy-essentials/
│   │   │   ├── body-regions.ts
│   │   │   ├── organ-systems-overview.ts
│   │   │   └── homeostasis-intro.ts
│   │   │
│   │   ├── physiology-basics/
│   │   │   ├── cellular-function.ts
│   │   │   ├── membrane-transport.ts
│   │   │   └── energy-metabolism.ts
│   │   │
│   │   ├── biochemistry-for-patients/
│   │   │   ├── macronutrients.ts
│   │   │   ├── enzymes-explained.ts
│   │   │   └── metabolic-pathways-simplified.ts
│   │   │
│   │   └── genetics-primer/
│   │       ├── dna-rna-basics.ts
│   │       ├── inheritance-patterns.ts
│   │       └── pharmacogenomics-intro.ts
│   │
│   ├── clinical-application/    # Medical school years 3-4 equivalent
│   │   ├── history-taking/
│   │   │   ├── symptom-description.ts
│   │   │   └── timeline-construction.ts
│   │   │
│   │   ├── physical-exam-understanding/
│   │   │   ├── vital-signs-meaning.ts
│   │   │   ├── exam-techniques.ts
│   │   │   └── what-doctors-look-for.ts
│   │   │
│   │   ├── lab-interpretation/
│   │   │   ├── cbc-explained.ts
│   │   │   ├── metabolic-panel.ts
│   │   │   ├── lipid-panel.ts
│   │   │   ├── thyroid-function.ts
│   │   │   └── inflammatory-markers.ts
│   │   │
│   │   ├── imaging-understanding/
│   │   │   ├── x-ray-basics.ts
│   │   │   ├── ct-scan-explained.ts
│   │   │   ├── mri-principles.ts
│   │   │   └── ultrasound-basics.ts
│   │   │
│   │   └── differential-diagnosis-thinking/
│   │       ├── how-doctors-think.ts
│   │       ├── common-vs-serious.ts
│   │       └── red-flags.ts
│   │
│   ├── specialties/            # Residency-level deep dives
│   │   ├── cardiology/
│   │   │   ├── electrophysiology/
│   │   │   ├── heart-failure/
│   │   │   ├── coronary-artery-disease/
│   │   │   ├── hypertension/
│   │   │   └── arrhythmias/
│   │   │
│   │   ├── endocrinology/
│   │   │   ├── diabetes/
│   │   │   │   ├── type-1-pathophysiology.ts
│   │   │   │   ├── type-2-pathophysiology.ts
│   │   │   │   ├── glucose-metabolism.ts
│   │   │   │   ├── insulin-action.ts
│   │   │   │   ├── complications-prevention.ts
│   │   │   │   └── monitoring-essentials.ts
│   │   │   │
│   │   │   ├── thyroid/
│   │   │   ├── adrenal/
│   │   │   └── pituitary/
│   │   │
│   │   ├── gastroenterology/
│   │   │   ├── upper-gi/
│   │   │   ├── lower-gi/
│   │   │   ├── liver/
│   │   │   ├── pancreas/
│   │   │   └── gut-microbiome/
│   │   │
│   │   ├── neurology/
│   │   │   ├── central-nervous-system/
│   │   │   ├── peripheral-nervous-system/
│   │   │   ├── headache-disorders/
│   │   │   ├── seizure-disorders/
│   │   │   └── neurodegenerative/
│   │   │
│   │   ├── rheumatology/
│   │   │   ├── autoimmune-basics/
│   │   │   ├── inflammatory-arthritis/
│   │   │   ├── connective-tissue/
│   │   │   └── pain-mechanisms.ts
│   │   │
│   │   ├── pulmonology/
│   │   │   ├── asthma/
│   │   │   ├── copd/
│   │   │   ├── sleep-apnea/
│   │   │   └── respiratory-physiology/
│   │   │
│   │   ├── nephrology/
│   │   │   ├── kidney-function/
│   │   │   ├── electrolytes/
│   │   │   ├── acid-base/
│   │   │   └── dialysis-principles/
│   │   │
│   │   ├── hematology/
│   │   │   ├── blood-cell-production/
│   │   │   ├── clotting-cascade/
│   │   │   └── anemia-types/
│   │   │
│   │   ├── infectious-disease/
│   │   │   ├── immune-response/
│   │   │   ├── antibiotics-explained/
│   │   │   └── viral-infections/
│   │   │
│   │   ├── oncology/
│   │   │   ├── cancer-biology/
│   │   │   ├── staging-explained/
│   │   │   ├── treatment-modalities/
│   │   │   └── survivorship/
│   │   │
│   │   ├── psychiatry/
│   │   │   ├── neurotransmitter-basics/
│   │   │   ├── mood-disorders/
│   │   │   ├── anxiety-disorders/
│   │   │   └── medication-mechanisms/
│   │   │
│   │   ├── dermatology/
│   │   ├── ophthalmology/
│   │   ├── ent/
│   │   ├── orthopedics/
│   │   └── obgyn/
│   │
│   └── subspecialties/         # Fellowship-level content
│       ├── interventional-cardiology/
│       ├── electrophysiology/
│       ├── hepatology/
│       ├── inflammatory-bowel/
│       ├── movement-disorders/
│       ├── epilepsy/
│       └── reproductive-endocrinology/
│
├── content-modules/            # Reusable educational content blocks
│   ├── concept-explanations/   # Individual concept explanations
│   │   ├── what-is-inflammation.ts
│   │   ├── how-do-antibodies-work.ts
│   │   ├── understanding-pain.ts
│   │   ├── metabolism-explained.ts
│   │   └── ...
│   │
│   ├── procedure-guides/       # What to expect guides
│   │   ├── colonoscopy-prep.ts
│   │   ├── before-surgery.ts
│   │   ├── imaging-contrast.ts
│   │   └── blood-draw-tips.ts
│   │
│   ├── medication-guides/      # Drug class education
│   │   ├── ace-inhibitors-explained.ts
│   │   ├── statins-mechanism.ts
│   │   ├── insulin-types.ts
│   │   └── biologics-basics.ts
│   │
│   └── lifestyle-modules/      # Lifestyle interventions
│       ├── sleep-hygiene.ts
│       ├── anti-inflammatory-diet.ts
│       ├── stress-management.ts
│       └── exercise-prescription.ts
│
├── adaptive-learning/          # Personalized learning engine
│   ├── knowledge-assessment/
│   │   ├── diagnostic-quiz.ts  # What do they already know?
│   │   ├── gap-analyzer.ts     # What's missing?
│   │   └── learning-style.ts   # How do they learn best?
│   │
│   ├── path-generation/
│   │   ├── prerequisite-map.ts # What concepts build on what?
│   │   ├── path-builder.ts     # Construct learning path
│   │   └── difficulty-adjuster.ts
│   │
│   ├── content-personalization/
│   │   ├── complexity-adjuster.ts
│   │   ├── example-generator.ts # Generate examples from their data
│   │   └── analogy-selector.ts  # Pick right analogies
│   │
│   └── spaced-repetition/
│       ├── review-scheduler.ts
│       ├── retention-tracker.ts
│       └── quiz-generator.ts
│
├── assessment/                 # Knowledge checking
│   ├── question-types/
│   │   ├── multiple-choice.ts
│   │   ├── fill-in-blank.ts
│   │   ├── matching.ts
│   │   └── case-study.ts
│   │
│   ├── quiz-generation/
│   │   ├── from-content.ts
│   │   ├── adaptive-difficulty.ts
│   │   └── personalized-cases.ts
│   │
│   └── progress-tracking/
│       ├── mastery-calculator.ts
│       ├── weakness-identifier.ts
│       └── confidence-scorer.ts
│
├── teaching-strategies/        # Pedagogical methods
│   ├── analogy-library/
│   │   ├── mechanical-analogies.ts
│   │   ├── electrical-analogies.ts
│   │   ├── plumbing-analogies.ts
│   │   └── everyday-experience.ts
│   │
│   ├── visualization-guides/
│   │   ├── diagram-interpretation.ts
│   │   ├── 3d-navigation.ts
│   │   └── graph-reading.ts
│   │
│   ├── storytelling/
│   │   ├── case-narratives.ts
│   │   ├── pathway-stories.ts
│   │   └── journey-maps.ts
│   │
│   └── socratic-method/
│       ├── question-chains.ts
│       └── guided-discovery.ts
│
└── accessibility/              # Making content accessible
    ├── reading-level/
    │   ├── flesch-kincaid.ts
    │   ├── auto-simplifier.ts
    │   └── technical-term-explainer.ts
    │
    ├── multilingual/
    │   ├── translation-gateways.ts
    │   ├── medical-term-localization.ts
    │   └── cultural-adaptation.ts
    │
    └── alternative-formats/
        ├── audio-generation.ts
        ├── visual-summaries.ts
        └── interactive-simulations.ts
```

---

## Educational Content Example: Diabetes Module

```typescript
// core/education/curriculum/specialties/endocrinology/diabetes/type-2-pathophysiology.ts

import type { EducationalModule, ComplexityLevel } from '../../types.js';

export const type2DiabetesModule: EducationalModule = {
  id: 'diabetes-type-2-pathophysiology',
  title: 'Understanding Type 2 Diabetes: What Happens in Your Body',
  
  // Prerequisites - what should they know first?
  prerequisites: [
    'glucose-metabolism-basics',
    'insulin-action-basics',
    'pancreas-function',
  ],
  
  // Estimated time at each complexity level
  estimatedTime: {
    1: '10 minutes',
    2: '15 minutes',
    3: '20 minutes',
    4: '30 minutes',
    5: '45 minutes',
    6: '60 minutes',
  },
  
  // Content organized by complexity level
  content: {
    // Level 1: Foundation (8th grade)
    1: {
      summary: `Your body needs sugar (glucose) for energy. Normally, a key called "insulin" opens doors on your cells to let sugar in. In Type 2 diabetes, those doors get sticky and don't open as well. Also, your body doesn't make enough keys. So sugar builds up in your blood instead of getting into cells.`,
      
      analogy: `Think of insulin like a key to your house. Type 2 diabetes is like:
1. The locks getting rusty (insulin resistance)
2. The key factory making fewer keys (beta cell decline)
Either way, you can't get inside easily.`,
      
      keyPoints: [
        'Your cells need sugar for energy',
        'Insulin is like a key that opens cell doors',
        'In Type 2 diabetes, cells resist insulin',
        'Sugar stays in blood instead of entering cells',
      ],
      
      visualAid: 'simple-cell-door-diagram',
    },
    
    // Level 2: Developing (10th grade)
    2: {
      summary: `Type 2 diabetes develops when your cells become resistant to insulin's message. Insulin normally binds to receptors on cell surfaces, signaling glucose transporters to move to the membrane. In insulin resistance, this signaling is impaired. Meanwhile, beta cells in the pancreas work harder to compensate, eventually burning out.`,
      
      keyConcepts: [
        {
          term: 'Insulin Resistance',
          explanation: 'Cells don\'t respond normally to insulin',
        },
        {
          term: 'Beta Cells',
          explanation: 'Pancreatic cells that produce insulin',
        },
        {
          term: 'Glucose Transporters',
          explanation: 'Proteins that move glucose into cells (GLUT4)',
        },
      ],
      
      keyPoints: [
        'Insulin binds to cell surface receptors',
        'This triggers glucose transporters (GLUT4)',
        'In insulin resistance, this signal is weak',
        'Pancreas compensates by making more insulin',
        'Beta cells eventually fail from overwork',
      ],
    },
    
    // Level 3: Standard (12th grade)
    3: {
      summary: `Type 2 diabetes mellitus is characterized by two core defects: insulin resistance in peripheral tissues (muscle, liver, adipose) and progressive beta-cell dysfunction. The "twin cycle hypothesis" suggests ectopic fat accumulation in liver and pancreas drives both processes.`,
      
      mechanisms: [
        {
          name: 'Peripheral Insulin Resistance',
          description: 'Decreased glucose uptake in skeletal muscle, increased hepatic glucose production, and impaired suppression of lipolysis in adipose tissue.',
        },
        {
          name: 'Beta-Cell Dysfunction',
          description: 'Glucotoxicity and lipotoxicity impair insulin secretion. Amylin deposition may contribute.',
        },
        {
          name: 'Hepatic Steatosis',
          description: 'Fat accumulation in liver drives gluconeogenesis and VLDL production.',
        },
      ],
      
      clinicalCorrelates: [
        'Fasting hyperglycemia from hepatic glucose overproduction',
        'Postprandial hyperglycemia from impaired peripheral uptake',
        'Dyslipidemia from altered lipid metabolism',
      ],
    },
    
    // Level 4: Advanced (College)
    4: {
      summary: `The pathophysiology of T2DM involves complex interactions between genetic susceptibility, epigenetic modifications, and environmental factors. Key molecular mechanisms include serine phosphorylation of IRS-1, inflammation-mediated insulin resistance via JNK and IKKβ/NF-κB pathways, and ER stress in beta cells.`,
      
      molecularMechanisms: [
        {
          pathway: 'Insulin Signaling Cascade',
          defect: 'Serine phosphorylation of IRS-1/2 impairs PI3K activation',
          consequence: 'Reduced AKT activation → ↓ GLUT4 translocation',
        },
        {
          pathway: 'Inflammatory Signaling',
          defect: 'Activation of JNK and IKKβ by cytokines and lipids',
          consequence: 'Serine phosphorylation of IRS proteins',
        },
        {
          pathway: 'ER Stress',
          defect: 'Chronic protein synthesis demand on beta cells',
          consequence: ' unfolded protein response → apoptosis',
        },
      ],
      
      references: [
        'Kahn SE, et al. (2014). Cell Metabolism',
        'Taylor R (2013). Diabetologia - Twin Cycle Hypothesis',
      ],
    },
    
    // Level 5: Expert (Graduate)
    5: {
      summary: `Contemporary understanding positions T2DM as a spectrum of metabolic dysfunction with variable contributions from insulin resistance and beta-cell failure across populations. Genome-wide association studies have identified >400 loci, yet explain <15% of heritability, suggesting importance of epigenetic and microbiome factors.`,
      
      researchFrontiers: [
        'Personalized medicine approaches based on metabolomic profiles',
        'Beta-cell regeneration strategies',
        'Incretin-based therapies and gastric bypass mechanisms',
        'Gut microbiome modulation',
      ],
    },
    
    // Level 6: Clinical (Physician-level)
    6: {
      summary: `From a clinical perspective, T2DM represents a heterogeneous syndrome requiring individualized phenotyping (SIDD, SIRD, MOD, MARD per Ahlqvist classification). Treatment selection should consider predominant defect (insulin resistance vs secretion), comorbidities, and patient factors. The ADA/EASD algorithm provides evidence-based guidance, but emerging data supports precision medicine approaches.`,
      
      clinicalApproach: [
        'Phenotype-based classification',
        'Individualized HbA1c targets',
        'Cardiorenal protection as primary consideration',
        'Weight-centric treatment paradigms',
      ],
      
      guidelines: [
        'ADA Standards of Medical Care 2024',
        'EASD/ADA Consensus Algorithm',
      ],
    },
  },
  
  // Interactive elements
  interactions: {
    // Based on user's actual data
    personalizedExample: (userData) => {
      const recentGlucose = userData.labResults.find(l => 
        l.testName.toLowerCase().includes('glucose')
      );
      
      if (recentGlucose) {
        return `Your most recent glucose was ${recentGlucose.value} ${recentGlucose.unit}. 
        ${recentGlucose.status === 'abnormal-high' 
          ? 'This elevated level suggests your cells aren\'t responding to insulin effectively.' 
          : 'This is within normal range, suggesting good glucose control.'}`;
      }
      return null;
    },
    
    // 3D anatomy exploration points
    anatomyPoints: [
      { structure: 'pancreas', focus: 'islets-of-langerhans' },
      { structure: 'liver', focus: 'hepatocytes' },
      { structure: 'skeletal-muscle', focus: 'myocytes' },
      { structure: 'adipose-tissue', focus: 'adipocytes' },
    ],
    
    // Related lab tests to explore
    relatedLabs: [
      'glucose-fasting',
      'glucose-pp',
      'hba1c',
      'insulin',
      'c-peptide',
    ],
  },
  
  // Self-assessment
  quiz: {
    questions: [
      {
        complexity: 1,
        question: 'What is insulin\'s main job?',
        options: [
          'Lower blood pressure',
          'Help sugar enter cells for energy',
          'Fight infections',
          'Digest food',
        ],
        correct: 1,
        explanation: 'Insulin acts like a key, allowing glucose (sugar) to enter your cells where it can be used for energy.',
      },
      {
        complexity: 3,
        question: 'What happens to beta cells in Type 2 diabetes over time?',
        options: [
          'They multiply to make more insulin',
          'They become resistant to glucose',
          'They burn out from overwork',
          'They move to the liver',
        ],
        correct: 2,
        explanation: 'Beta cells initially compensate for insulin resistance by working harder, but eventually exhaust and fail.',
      },
      {
        complexity: 6,
        question: 'According to the twin cycle hypothesis, what drives beta-cell recovery after bariatric surgery?',
        options: [
          'Direct effect of surgery on pancreas',
          'Reduced caloric intake alone',
          'Depletion of ectopic fat from liver and pancreas',
          'Changes in gut hormones only',
        ],
        correct: 2,
        explanation: 'Taylor\'s twin cycle hypothesis posits that removing ectopic fat from liver and pancreas restores insulin sensitivity and beta-cell function.',
      },
    ],
  },
};
```

---

## Learning Path Generation

```typescript
// core/education/adaptive-learning/path-generation/path-builder.ts

import type { BiologicalSelf } from '../../../data/types.js';
import type { LearningModule } from '../../types.js';

export interface LearningPath {
  title: string;
  description: string;
  modules: LearningModule[];
  estimatedTotalTime: string;
  prerequisites: string[];
}

export function generatePersonalizedPath(
  self: BiologicalSelf,
  goal: 'understand-my-conditions' | 'prepare-for-visit' | 'learn-basics'
): LearningPath {
  const path: LearningPath = {
    title: '',
    description: '',
    modules: [],
    estimatedTotalTime: '',
    prerequisites: [],
  };

  if (goal === 'understand-my-conditions') {
    // Build path based on their actual conditions
    for (const condition of self.conditions.filter(c => c.status === 'active')) {
      // Add relevant specialty modules
      const specialtyModule = findSpecialtyModule(condition.name);
      if (specialtyModule) {
        path.modules.push(specialtyModule);
      }
    }

    // Add relevant lab interpretation modules
    for (const lab of self.labResults.slice(0, 5)) {
      const labModule = findLabInterpretationModule(lab.testName);
      if (labModule && !path.modules.includes(labModule)) {
        path.modules.push(labModule);
      }
    }
  }

  return path;
}
```

---

## Integration with Biological Self

The educational system is deeply integrated with the user's actual health data:

1. **Personalized Examples**: Every explanation uses their real lab values, conditions, medications
2. **Relevant Content**: Only show specialties that match their conditions
3. **Gap-Filling**: Identify what they don't understand about their own health
4. **Visit Prep**: Generate questions based on their upcoming appointments
5. **Progress Tracking**: Connect learning to health outcomes
