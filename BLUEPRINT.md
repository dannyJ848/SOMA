# The Biological Self - Master Blueprint

> **Version**: 1.0
> **Last Updated**: 2026-01-24
> **Status**: Active Development (Phase 4)

---

## ⚡ START HERE - NEW SESSION

**Copy-paste this prompt when starting a new Claude Code session:**

```
Read BLUEPRINT.md and the HANDOFF SUMMARY at the end of progress.txt.

Then:
1. Check if there are any completed background agents from the previous session using TaskOutput
2. For each completed agent, document what files were created
3. Run `npx tsc --noEmit | grep -c "error TS"` to get current error count
4. Determine: Did the previous batch complete, or was it interrupted?
5. If interrupted: Create continuation agents to finish incomplete work
6. If complete: Start the next batch as documented in progress.txt

Follow the continuation protocol. Launch agents in batches of 10.
```

---

## Table of Contents

1. [Project Vision](#project-vision)
2. [Architecture Overview](#architecture-overview)
3. [Feature Status (100 User Stories)](#feature-status)
4. [Content Module Blueprint](#content-module-blueprint)
5. [Batch Completion Plan](#batch-completion-plan)
6. [Technical Specifications](#technical-specifications)
7. [Continuation Protocol](#continuation-protocol)

---

## Project Vision

**The Biological Self** is a privacy-first, offline-capable medical education and health tracking desktop application built with Tauri (Rust) and React. It combines:

- **3D Anatomical Visualization** (Three.js with Z-Anatomy models)
- **Personal Health Data Tracking** (encrypted local storage)
- **AI-Powered Education** (local LLM via Ollama)
- **Medical Encyclopedia** (RAG-powered with OpenStax, StatPearls)
- **Symptom-Anatomy Integration**
- **Medication-Physiology Visualization**
- **Disease Progression Simulation**

### Core Principles
1. **Privacy First**: All data stays on device, encrypted with user's passphrase
2. **Offline Capable**: Works without internet (local LLM, local database)
3. **Multi-Level Education**: 5 complexity levels (8th grade → Medical Professional)
4. **Clinically Accurate**: Based on OpenStax, StatPearls, FMA ontology

---

## Architecture Overview

```
biological-self/
├── src/                    # React Frontend
│   ├── components/         # UI Components
│   ├── contexts/           # React Contexts
│   ├── hooks/              # Custom Hooks
│   ├── anatomy/            # 3D Anatomy Viewer
│   ├── settings/           # Settings System
│   ├── search/             # Global Search
│   ├── vitals/             # Vital Signs Tracker
│   └── offline/            # Offline Support
│
├── core/                   # Core Business Logic
│   ├── content/            # Educational Content (521+ files)
│   ├── ai/                 # Ollama Integration
│   ├── rag/                # RAG Pipeline
│   ├── biological-self/    # Health Data Store
│   ├── exploration/        # Symptom-Anatomy Mapping
│   ├── medical-simulation/ # Medications, Conditions
│   └── intent-prediction/  # Adaptive UI System
│
├── src-tauri/              # Rust Backend (Tauri)
│   └── src/lib.rs          # IPC Commands
│
└── assets/                 # Static Assets
    └── anatomy/            # 3D Models (GLTF)
```

---

## Feature Status

### User Stories: 100 total (US-009 to US-108)

All 100 user stories are marked as `passes: true` in the PRD, but many need content completion.

| Phase | User Stories | Description |
|-------|--------------|-------------|
| 1 | US-009 to US-019 | Core App (Tauri, Auth, Dashboard, AI Chat) |
| 2 | US-020 to US-027 | 3D Anatomy Viewer |
| 3 | US-028 to US-072 | Educational Content & Learning |
| 4 | US-073 to US-095 | Medical Simulation (Current Phase) |
| 5 | US-096 to US-108 | Adaptive Intent Prediction |

---

## Content Module Blueprint

### Current Status
- **Existing Files**: 521 TypeScript files in core/content/
- **Content Directories**: 280+ specialized directories
- **TypeScript Errors**: 1056 (802 are missing module errors)

### Content Structure

Each content module exports `EducationalContent` type with 5 complexity levels:

```typescript
interface EducationalContent {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  content: {
    [key: number]: {  // 1-5 complexity levels
      summary: string;
      details: string;
      keyPoints: string[];
      commonMisconceptions?: string[];
      clinicalRelevance?: string;
    };
  };
  relatedTopics: string[];
  references: string[];
  lastUpdated: string;
}
```

---

## Complete Content Directory Map

### Body Systems (Anatomy & Physiology)

#### 1. Cardiovascular System
```
core/content/cardiovascular/
├── anatomy/
│   ├── heart-chambers.ts ✅
│   ├── cardiac-valves.ts ✅
│   ├── coronary-arteries.ts ✅
│   └── great-vessels.ts ✅
├── physiology/
│   ├── cardiac-cycle.ts ✅
│   ├── blood-pressure-regulation.ts ✅
│   ├── cardiac-output.ts ✅
│   └── ecg-basics.ts ✅
└── index.ts ✅

core/content/physiology/cardiovascular/
├── cardiac-cycle.ts ✅
├── blood-pressure.ts ✅
├── cardiac-output.ts ✅
├── electrocardiography.ts ✅
├── hemodynamics.ts ✅
└── index.ts ✅
```

#### 2. Respiratory System
```
core/content/respiratory/
├── anatomy/
│   ├── upper-airway.ts ✅
│   ├── lower-airway.ts ✅
│   ├── lung-lobes.ts ✅
│   └── pleura.ts ✅
├── physiology/
│   ├── gas-exchange.ts ✅
│   ├── ventilation.ts ✅
│   ├── lung-compliance.ts ✅
│   └── oxygen-transport.ts ✅
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 3. Nervous System
```
core/content/nervous/
├── anatomy/
│   ├── brain-lobes.ts ✅
│   ├── spinal-cord.ts ✅
│   ├── cranial-nerves.ts ✅
│   └── peripheral-nerves.ts ✅
├── physiology/
│   ├── action-potential.ts ✅
│   ├── neurotransmitters.ts ✅
│   ├── reflexes.ts ✅
│   └── sensory-pathways.ts ✅
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 4. Digestive/GI System
```
core/content/digestive/
├── anatomy/
│   ├── gi-tract-overview.ts ✅
│   ├── liver-anatomy.ts ✅
│   ├── pancreas.ts ✅
│   └── gallbladder.ts ✅
└── index.ts ✅

core/content/physiology/gastrointestinal/
├── digestion.ts ✅
├── absorption.ts ✅
├── motility.ts ✅
├── liver-function.ts ✅
└── index.ts ✅
```

#### 5. Renal/Urinary System
```
core/content/renal/
├── anatomy/
│   ├── kidney-structure.ts ✅
│   ├── nephron.ts ✅
│   ├── ureter-bladder.ts ✅
│   └── urethra.ts ✅
├── physiology/
│   ├── glomerular-filtration.ts ✅
│   ├── tubular-function.ts ✅
│   ├── acid-base.ts ✅
│   └── fluid-balance.ts ✅
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 6. Endocrine System
```
core/content/endocrine/
├── anatomy/
│   ├── pituitary.ts ✅
│   ├── thyroid.ts ✅
│   ├── adrenal.ts ✅
│   └── pancreatic-islets.ts ✅
├── physiology/
│   ├── hormone-signaling.ts ✅
│   ├── feedback-loops.ts ✅
│   ├── glucose-regulation.ts ✅
│   └── calcium-regulation.ts ✅
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 7. Immune System
```
core/content/immune/
├── anatomy/
│   ├── lymph-nodes.ts ✅
│   ├── spleen.ts ✅
│   ├── thymus.ts ✅
│   └── bone-marrow.ts ✅
├── physiology/
│   ├── innate-immunity.ts ✅
│   ├── adaptive-immunity.ts ✅
│   ├── antibodies.ts ✅
│   └── inflammation.ts ✅
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 8. Musculoskeletal System
```
core/content/musculoskeletal/
├── anatomy/
│   ├── bones-overview.ts ✅
│   ├── joints.ts ✅
│   ├── muscles-overview.ts ✅
│   └── connective-tissue.ts ✅
├── physiology/
│   ├── muscle-contraction.ts ✅
│   ├── bone-remodeling.ts ✅
│   └── calcium-homeostasis.ts ✅
└── index.ts ✅
```

#### 9. Reproductive System
```
core/content/reproductive/
├── female/
│   ├── ovaries.ts ✅
│   ├── uterus.ts ✅
│   ├── menstrual-cycle.ts ✅
│   └── pregnancy.ts ✅
├── male/
│   ├── testes.ts ✅
│   ├── prostate.ts ✅
│   └── spermatogenesis.ts ✅
├── physiology/
├── clinical/
├── histology/
├── pathology/
└── index.ts ✅
```

#### 10. Integumentary System
```
core/content/integumentary/
├── anatomy/
│   ├── skin-layers.ts ✅
│   ├── hair-nails.ts ✅
│   └── glands.ts ✅
└── index.ts ✅
```

---

### Medical Specialties

#### Cardiology
```
core/content/cardiology/
├── arrhythmias.ts ✅
├── heart-failure.ts ✅
├── coronary-disease.ts ✅
└── index.ts ✅

core/content/specialties/cardiology/
├── arrhythmias/
│   ├── atrial-fibrillation.ts ✅
│   ├── ventricular-tachycardia.ts ✅
│   └── index.ts ✅
└── index.ts ✅
```

#### Neurology
```
core/content/neurology/
├── stroke.ts ✅
├── headache.ts ✅
├── epilepsy.ts ✅
├── multiple-sclerosis.ts ✅
└── index.ts ✅

core/content/specialties/neurology/
└── index.ts ✅
```

#### Pulmonology
```
core/content/pulmonology/
├── anatomy/
├── conditions/
│   ├── asthma.ts ✅
│   ├── copd.ts ✅
│   └── pneumonia.ts ✅
└── index.ts ✅

core/content/specialties/pulmonology/
└── index.ts ✅
```

#### Gastroenterology
```
core/content/gastroenterology/
├── upper-gi/
│   ├── gerd-acid-reflux.ts ✅ (import path fix needed)
│   └── peptic-ulcer.ts ✅
└── index.ts ✅

core/content/specialties/gastroenterology/
├── conditions/
├── procedures/
└── index.ts ✅
```

#### Endocrinology
```
core/content/endocrinology/
├── diabetes/
│   ├── type-1.ts ✅
│   ├── type-2.ts ✅
│   └── management.ts ✅
├── thyroid/
│   ├── hypothyroidism.ts ✅
│   ├── hyperthyroidism.ts ✅
│   └── thyroid-nodules.ts ✅
├── adrenal/
├── pituitary/
├── bone-calcium/
├── metabolic/
├── reproductive-hormones/
└── index.ts ✅
```

#### Nephrology
```
core/content/nephrology/
├── kidney-function/
│   ├── gfr.ts ✅
│   ├── electrolytes.ts ✅
│   └── acid-base.ts ✅
└── index.ts ✅

core/content/specialties/nephrology/
└── index.ts ✅
```

#### Hematology
```
core/content/hematology/
├── anemia/
├── bleeding-disorders/
├── blood-cancers/
├── bone-marrow/
├── clotting-disorders/
├── lab-understanding/
├── living-with/
├── transfusion/
└── index.ts ✅

core/content/specialties/hematology/
├── anemias/
├── bleeding-disorders/
├── diagnostics/
├── leukemias/
├── lymphomas/
├── plasma-cell-disorders/
├── platelet-disorders/
├── therapeutics/
├── thrombotic-disorders/
├── transfusion/
└── index.ts ✅
```

#### Oncology
```
core/content/oncology/
├── basics/
│   ├── cancer-overview.ts ✅
│   └── staging.ts ✅
└── index.ts ✅

core/content/specialties/oncology/
├── cancers/
├── treatment/
└── index.ts ✅
```

#### Infectious Disease
```
core/content/infectious-disease/
├── antibiotic-stewardship/
├── bacterial-infections/
├── common-infections/
├── prevention/
├── serious-infections/
├── viral-infections/
└── index.ts ✅

core/content/specialties/infectious-disease/
└── index.ts ✅
```

#### Rheumatology
```
core/content/rheumatology/
├── autoimmune/
│   ├── rheumatoid-arthritis.ts ✅
│   ├── lupus.ts ✅
│   └── sjogrens.ts ✅
└── index.ts ✅

core/content/specialties/rheumatology/
└── index.ts ✅
```

#### Dermatology
```
core/content/dermatology/
├── basics/
│   ├── skin-lesions.ts ✅
│   └── skin-exam.ts ✅
└── index.ts ✅

core/content/specialties/dermatology/
├── infections/
├── skin-cancer/
└── index.ts ✅
```

#### Ophthalmology
```
core/content/ophthalmology/
├── eye-anatomy.ts ✅
├── common-conditions.ts ✅
└── index.ts ✅

core/content/specialties/ophthalmology/
└── index.ts ✅
```

#### ENT (Otolaryngology)
```
core/content/ent/
├── ear/
│   ├── hearing-loss.ts ✅
│   └── ear-infections.ts ✅
└── index.ts ✅

core/content/specialties/ent/
├── ear/
├── nose/
├── throat/
└── index.ts ✅
```

#### Orthopedics
```
core/content/orthopedics/
├── anatomy/
│   ├── bones.ts ✅
│   └── joints.ts ✅
└── index.ts ✅

core/content/specialties/orthopedics/
├── anatomy/
├── conditions/
├── procedures/
├── rehabilitation/
└── index.ts ✅
```

#### Urology
```
core/content/urology/
├── anatomy/
│   ├── male-urinary.ts ✅
│   └── prostate.ts ✅
└── index.ts ✅

core/content/specialties/urology/
└── index.ts ✅
```

#### OB/GYN
```
core/content/specialties/obgyn/
├── anatomy/
├── conditions/
├── contraception/
├── gynecologic-oncology/
├── labor-delivery/
├── menopause/
├── physiology/
├── pregnancy/
├── prenatal/
├── screening/
└── index.ts ✅
```

#### Pediatrics
```
core/content/pediatrics/
├── development/
│   ├── milestones.ts ✅
│   └── growth.ts ✅
└── index.ts ✅

core/content/specialties/pediatrics/
└── index.ts ✅
```

#### Geriatrics
```
core/content/geriatrics/
├── aging-physiology.ts ✅
├── falls-prevention.ts ✅
├── polypharmacy.ts ✅
└── index.ts ✅

core/content/specialties/geriatrics/
└── index.ts ✅
```

#### Psychiatry
```
core/content/specialties/psychiatry/
├── anxiety-disorders/
├── eating-disorders/
├── medications/
├── mood-disorders/
├── neuroscience/
├── obsessive-compulsive/
├── psychotic-disorders/
├── substance-use/
├── trauma-disorders/
└── index.ts ✅
```

---

### Clinical Skills & Reasoning

#### Clinical Reasoning
```
core/content/clinical-reasoning/
├── diagnostic-frameworks/
│   ├── hypothesis-generation.ts ✅
│   ├── pattern-recognition.ts ✅
│   └── index.ts ✅
├── cognitive-biases/
│   ├── anchoring-bias.ts ✅
│   ├── availability-bias.ts ✅
│   ├── confirmation-bias.ts ✅
│   └── index.ts ✅
├── diagnostic-algorithms/
├── differential-diagnosis/    ❌ NEEDS: core files
├── history-taking/
├── physical-examination/
├── red-flags/                 ❌ NEEDS: core files
├── urgent-referrals/          ❌ NEEDS: core files
└── index.ts ✅
```

#### Physical Examination
```
core/content/physical-exam/
├── general-survey/
├── vital-signs/
├── heent/
├── cardiovascular/
├── respiratory/
├── abdominal/
├── neurological/
├── musculoskeletal/
├── skin/
└── index.ts ✅
```

#### Lab Interpretation
```
core/content/lab-interpretation/
├── cbc-interpretation.ts ✅
├── cmp-interpretation.ts ✅
├── liver-function-tests.ts ✅
├── thyroid-function-tests.ts ✅
├── lipid-panel.ts ✅
├── urinalysis.ts ✅
├── coagulation-studies.ts ✅
├── cardiac-markers.ts ✅
└── index.ts ✅
```

#### Treatment Algorithms
```
core/content/treatment-algorithms/
├── hypertension-algorithm.ts ✅
├── diabetes-algorithm.ts ✅
├── chest-pain-algorithm.ts ✅
├── dyspnea-algorithm.ts ✅
└── index.ts ✅
```

---

### Conditions Database

#### Cardiovascular Conditions
```
core/content/conditions/cardiovascular/
├── index.ts ✅
├── hypertension.ts ✅
├── heart-failure.ts ✅
├── coronary-artery-disease.ts    ❌ MISSING
├── atrial-fibrillation.ts        ❌ MISSING
├── deep-vein-thrombosis.ts       ❌ MISSING
├── pulmonary-embolism.ts         ❌ MISSING
├── peripheral-artery-disease.ts  ❌ MISSING
├── aortic-aneurysm.ts            ❌ MISSING
├── valvular-heart-disease.ts     ❌ MISSING
└── cardiomyopathy.ts             ❌ MISSING
```

#### Other Condition Directories (Need Index Files)
```
core/content/conditions/
├── cardiovascular/     ✅ (needs 8 files)
├── respiratory/        ❌ NEEDS: index.ts + condition files
├── metabolic/          ❌ NEEDS: index.ts + condition files
├── gastrointestinal/   ❌ NEEDS: index.ts + condition files
├── neurological/       ❌ NEEDS: index.ts + condition files
├── mental-health/      ❌ NEEDS: index.ts + condition files
├── musculoskeletal/    ❌ NEEDS: index.ts + condition files
├── oncology/           ❌ NEEDS: index.ts + condition files
├── infectious/         ❌ NEEDS: index.ts + condition files
├── renal/              ❌ NEEDS: index.ts + condition files
├── dermatology/        ❌ NEEDS: index.ts + condition files
├── hematologic/        ❌ NEEDS: index.ts + condition files
└── index.ts ✅
```

---

### Chronic Disease Management

```
core/content/chronic-disease/
├── care-coordination/
│   ├── care-team.ts ✅
│   ├── appointment-preparation.ts ✅
│   └── index.ts ✅
├── self-management/
│   ├── medication-adherence.ts ✅
│   ├── symptom-tracking.ts ✅
│   ├── warning-signs.ts           ❌ MISSING
│   ├── provider-communication.ts  ❌ MISSING
│   └── index.ts ✅
├── diabetes/                      ❌ NEEDS: 6 files
│   ├── blood-sugar-monitoring.ts
│   ├── a1c-targets.ts
│   ├── diet-carb-counting.ts
│   ├── exercise-with-diabetes.ts
│   ├── foot-care.ts
│   └── complication-prevention.ts
├── heart-disease/                 ❌ NEEDS: 6 files
│   ├── blood-pressure-monitoring.ts
│   ├── daily-weight-chf.ts
│   ├── cardiac-medications.ts
│   ├── heart-healthy-diet.ts
│   ├── activity-recommendations.ts
│   └── cardiac-warning-signs.ts
├── copd/                          ❌ NEEDS: 5 files
│   ├── inhaler-technique.ts
│   ├── breathing-exercises.ts
│   ├── trigger-avoidance.ts
│   ├── action-plans.ts
│   └── treatment-escalation.ts
├── kidney-disease/                ❌ NEEDS: 5 files
│   ├── ckd-stages.ts
│   ├── renal-diet.ts
│   ├── fluid-management.ts
│   ├── medication-adjustments.ts
│   └── dialysis-preparation.ts
└── index.ts ✅
```

---

### Genetics & Genomics

```
core/content/genetics/
├── basics/
│   ├── dna-structure.ts ✅
│   ├── gene-expression.ts ✅
│   └── index.ts ✅
├── inheritance/
│   ├── mendelian-inheritance.ts ✅
│   ├── autosomal-dominant.ts ✅
│   ├── autosomal-recessive.ts ✅
│   ├── x-linked.ts ✅
│   ├── mitochondrial.ts ✅
│   ├── complex-inheritance.ts ✅
│   └── index.ts ✅
├── disorders/
│   ├── chromosomal/
│   │   ├── down-syndrome.ts ✅
│   │   ├── turner-syndrome.ts ✅
│   │   └── index.ts ✅
│   ├── single-gene/
│   │   ├── cystic-fibrosis.ts ✅
│   │   ├── huntington.ts ✅
│   │   ├── sickle-cell.ts ✅
│   │   ├── thalassemia.ts ✅
│   │   ├── hemophilia.ts ✅
│   │   └── index.ts ✅
│   └── index.ts ✅
├── testing/
│   ├── genetic-testing-overview.ts ✅
│   ├── prenatal-testing.ts ✅
│   ├── carrier-screening.ts ✅
│   └── index.ts ✅
├── counseling/
│   ├── genetic-counseling-process.ts ✅
│   ├── results-interpretation.ts ✅
│   └── index.ts ✅
├── pharmacogenomics/
│   ├── drug-metabolism.ts ✅
│   ├── cyp-enzymes.ts ✅
│   └── index.ts ✅
├── cancer-genetics/
│   ├── brca-genes.ts ✅
│   ├── lynch-syndrome.ts ✅
│   └── index.ts ✅
└── index.ts ✅ (import path fixes needed)
```

---

### Caregiver Support

```
core/content/caregiver-support/
├── caregiver-basics/
│   ├── role-of-caregiver.ts ✅
│   ├── getting-started.ts ✅
│   └── index.ts ✅
├── practical-skills/
│   ├── medication-management.ts ✅
│   ├── mobility-assistance.ts ✅
│   ├── personal-care.ts ✅
│   └── index.ts ✅
├── condition-specific/
│   ├── dementia-care.ts ✅
│   ├── stroke-recovery.ts ✅
│   ├── cancer-support.ts ✅
│   └── index.ts ✅
├── communication/
│   ├── healthcare-team.ts ✅
│   ├── family-discussions.ts ✅
│   └── index.ts ✅
├── resources/
│   ├── respite-care.ts ✅
│   ├── home-health.ts ✅
│   ├── support-groups.ts ✅
│   └── index.ts ✅
├── self-care/
│   ├── preventing-burnout.ts ✅
│   ├── managing-stress.ts ✅
│   ├── asking-for-help.ts ✅
│   ├── maintaining-relationships.ts ✅
│   ├── grief-and-anticipatory-grief.ts ✅
│   └── index.ts ✅
├── legal-financial/
│   ├── power-of-attorney.ts ✅
│   ├── healthcare-proxy.ts ✅
│   ├── fmla-basics.ts ✅
│   ├── long-term-care-planning.ts    ❌ MISSING
│   └── index.ts ✅
└── index.ts ✅
```

---

### Dental Health

```
core/content/dental-health/
├── anatomy/
│   ├── tooth-anatomy.ts ✅
│   └── index.ts ✅
├── hygiene/                       ❌ NEEDS: 4 files
│   ├── dental-hygiene-basics.ts
│   ├── brushing-techniques.ts
│   ├── flossing-techniques.ts
│   └── professional-cleanings.ts
├── conditions/                    ❌ NEEDS: 6 files
│   ├── cavities-decay.ts
│   ├── gingivitis.ts
│   ├── periodontitis.ts
│   ├── oral-cancer-screening.ts
│   ├── tmj-disorders.ts
│   └── oral-systemic-health.ts
├── procedures/                    ❌ NEEDS: 6 files
│   ├── dental-fillings.ts
│   ├── root-canal-therapy.ts
│   ├── tooth-extraction.ts
│   ├── dental-implants.ts
│   ├── crowns-bridges.ts
│   └── orthodontics-basics.ts
├── emergencies/
│   ├── pediatric-dental-care.ts ✅
│   ├── dental-emergencies.ts ✅
│   ├── dental-trauma.ts           ❌ MISSING
│   ├── dental-infections.ts       ❌ MISSING
│   └── index.ts ✅
└── index.ts ✅
```

---

### Critical Care

```
core/content/critical-care/
├── shock-states.ts ✅
├── mechanical-ventilation.ts ✅
├── sepsis.ts ✅
├── ards.ts ✅
├── aki-critical-illness.ts ✅
├── sedation-analgesia.ts ✅
├── nutrition-critical-illness.ts ✅
├── icu-delirium.ts ✅
├── weaning-extubation.ts ✅
├── end-of-life-icu.ts ✅
└── index.ts ✅
```

---

### Global Health

```
core/content/global-health/
├── health-disparities/
├── infectious-diseases/
├── maternal-child-health/
├── neglected-tropical-diseases/
├── noncommunicable-diseases/
├── organizations/
├── social-determinants/
├── travel-health/
├── vaccine-preventable/
└── index.ts ✅
```

---

### Integrative Medicine

```
core/content/integrative-medicine/
├── acupuncture.ts ✅
├── herbal-medicine.ts ✅
├── mind-body-practices.ts ✅
├── nutrition-therapy.ts ✅
├── massage-bodywork.ts ✅
├── chiropractic.ts ✅
└── index.ts ✅
```

---

### Women's Health

```
core/content/womens-health/
├── reproductive-health/           ❌ NEEDS: 5 files
│   ├── menstrual-cycle-explained.ts
│   ├── menstrual-disorders.ts
│   ├── contraception-options.ts
│   ├── fertility-basics.ts
│   └── menopause-transition.ts
├── pregnancy/                     ❌ NEEDS: 6 files
│   ├── preconception-care.ts
│   ├── prenatal-care-schedule.ts
│   ├── common-pregnancy-symptoms.ts
│   ├── warning-signs-in-pregnancy.ts
│   ├── labor-and-delivery-overview.ts
│   └── postpartum-care.ts
├── breast-health/                 ❌ NEEDS: 4 files
│   ├── breast-self-exam.ts
│   ├── mammogram-guidelines.ts
│   ├── breast-conditions.ts
│   └── breast-cancer-risk-factors.ts
├── gynecologic-conditions/        ❌ NEEDS: 6 files
│   ├── pelvic-pain.ts
│   ├── pcos.ts
│   ├── endometriosis.ts
│   ├── fibroids.ts
│   ├── vaginitis.ts
│   └── cervical-health-pap-smears.ts
├── bone-health/                   ❌ NEEDS: 3 files
│   ├── osteoporosis-prevention.ts
│   ├── calcium-vitamin-d.ts
│   └── bone-density-testing.ts
├── mental-health/                 ❌ NEEDS: 3 files
│   ├── postpartum-depression.ts
│   ├── premenstrual-disorders.ts
│   └── perimenopause-mood-changes.ts
└── index.ts ✅
```

---

### Wilderness Medicine

```
core/content/wilderness-medicine/
├── altitude/
│   ├── altitude-sickness.ts ✅
│   └── index.ts ✅
├── environmental-injuries/        ❌ NEEDS: 1 file
│   └── high-altitude-sunburn.ts
├── decision-making/               ❌ NEEDS: 3 files
│   ├── evacuation-decisions.ts
│   ├── field-assessment.ts
│   └── emergency-communication.ts
├── equipment/                     ❌ NEEDS: 2 files
│   ├── survival-first-aid-kit.ts
│   └── medication-kit.ts
└── index.ts ✅
```

---

### Wound Care

```
core/content/wound-care/
├── basic-wound-care.ts ✅
├── wound-healing.ts ✅
├── wound-assessment.ts ✅
├── infection-prevention.ts ✅
├── dressing-selection.ts ✅
├── sutures-staples-glue.ts        ❌ MISSING
├── when-to-seek-care.ts           ❌ MISSING
├── chronic-wounds.ts              ❌ MISSING
├── burn-care.ts                   ❌ MISSING
├── scar-management.ts             ❌ MISSING
├── tetanus-prophylaxis.ts         ❌ MISSING
└── index.ts ✅
```

---

### Other Content Areas

#### Emergency Medicine
```
core/content/emergency/
├── cardiac-arrest.ts ✅
├── trauma-assessment.ts ✅
├── airway-management.ts ✅
├── shock.ts ✅
└── index.ts ✅

core/content/emergency-warning-signs/
├── chest-pain-red-flags.ts ✅
├── stroke-signs.ts ✅
├── breathing-emergencies.ts ✅
├── abdominal-emergencies.ts ✅
└── index.ts ✅
```

#### Pain Management
```
core/content/pain-management/
├── acute-pain.ts ✅
├── chronic-pain.ts ✅
├── neuropathic-pain.ts ✅
├── opioid-therapy.ts ✅
├── non-opioid-options.ts ✅
├── interventional.ts ✅
└── index.ts ✅
```

#### Palliative Care
```
core/content/palliative-care/
├── care-planning/
├── comfort-care/
├── symptoms/
└── index.ts ✅
```

#### Sleep Medicine
```
core/content/sleep-medicine/
├── sleep-hygiene.ts ✅
├── insomnia.ts ✅
├── sleep-apnea.ts ✅
├── circadian-disorders.ts ✅
├── parasomnias.ts ✅
└── index.ts ✅
```

#### Sports Medicine
```
core/content/sports-medicine/
├── injuries/
├── physiology/
└── index.ts ✅
```

#### Surgery
```
core/content/surgery/
├── preoperative-care.ts ✅
├── anesthesia-overview.ts ✅
├── postoperative-care.ts ✅
├── common-procedures.ts ✅
├── minimally-invasive.ts ✅
├── surgical-complications.ts ✅
└── index.ts ✅
```

#### Toxicology
```
core/content/toxicology/
├── overdose-management.ts ✅
├── antidotes.ts ✅
├── household-toxins.ts ✅
├── environmental-toxins.ts ✅
└── index.ts ✅
```

---

## UI Components (src/)

### Missing Components

```
src/offline/
├── cacheManager.ts           ❌ MISSING
├── contentPrefetch.ts        ❌ MISSING
└── OfflineProvider.tsx ✅

src/search/
├── GlobalSearch.tsx ✅
├── SearchResults.tsx         ❌ MISSING
└── SearchFilters.tsx         ❌ MISSING

src/settings/
├── SettingsPage.tsx ✅
├── PrivacySettings.tsx       ❌ MISSING
├── NotificationSettings.tsx  ❌ MISSING
├── AccessibilitySettings.tsx ❌ MISSING
└── DataManagement.tsx        ❌ MISSING

src/vitals/
├── VitalsTracker.tsx ✅
├── VitalCorrelations.tsx     ❌ MISSING
├── VitalAlerts.tsx           ❌ MISSING
└── VitalEducation.tsx        ❌ MISSING
```

---

## Batch Completion Plan

### Summary of Missing Content

| Category | Missing Files | Priority |
|----------|---------------|----------|
| Cardiovascular Conditions | 8 | HIGH |
| Chronic Disease Submodules | ~25 | HIGH |
| Clinical Reasoning Core | 3 | HIGH |
| Condition Index Files | 11 | HIGH |
| Women's Health Submodules | ~30 | MEDIUM |
| Wilderness Medicine | ~6 | MEDIUM |
| Wound Care | ~6 | MEDIUM |
| Dental Health | ~18 | MEDIUM |
| Caregiver Support | ~1 | LOW |
| UI Components | ~10 | MEDIUM |

**Total Estimated Missing Files**: ~120

---

### Batch 2 (Current) - 10 Agents

| # | Agent | Files | Status |
|---|-------|-------|--------|
| 1 | Cardiovascular Conditions | 8 | PENDING |
| 2 | Chronic Disease Complete | ~25 | PENDING |
| 3 | Clinical Reasoning | 3 | PENDING |
| 4 | Condition Index Files | 11 | PENDING |
| 5 | Women's Health Complete | ~30 | PENDING |
| 6 | Wilderness Medicine | ~6 | PENDING |
| 7 | Wound Care | ~6 | PENDING |
| 8 | Caregiver Support | ~1 | PENDING |
| 9 | Dental Health | ~18 | PENDING |
| 10 | UI Components | ~10 | PENDING |

### Batch 3 (Next) - Import Path Fixes & Validation

| # | Agent | Description |
|---|-------|-------------|
| 1 | Genetics Import Fixes | Fix ../../../../types paths |
| 2 | Gastroenterology Import Fixes | Fix import paths |
| 3 | Index File Validation | Ensure all index.ts export correctly |
| 4 | TypeScript Error Sweep | Fix remaining type errors |
| 5 | Missing Export Fixes | Add missing exports |
| 6 | Content Validation | Verify EducationalContent structure |
| 7 | Reference Validation | Check cross-references work |
| 8 | Build Verification | Ensure clean build |
| 9 | Test Coverage | Add content tests |
| 10 | Documentation | Generate content docs |

### Batch 4+ (Future) - Enhancement & Polish

- Additional specialty content
- More condition files
- Interactive visualizations
- Quiz content expansion
- Multi-language support
- Performance optimization

---

## Technical Specifications

### Content Type Definition

```typescript
// core/content/types.ts

export interface EducationalContent {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  content: {
    1: ContentLevel; // 8th Grade
    2: ContentLevel; // High School
    3: ContentLevel; // College
    4: ContentLevel; // Graduate
    5: ContentLevel; // Medical Professional
  };
  relatedTopics: string[];
  references: string[];
  lastUpdated: string;
}

interface ContentLevel {
  summary: string;
  details: string;
  keyPoints: string[];
  commonMisconceptions?: string[];
  clinicalRelevance?: string;
}
```

### Import Path Rules

| Directory Depth | Import Path |
|-----------------|-------------|
| `core/content/xyz/file.ts` | `import { EducationalContent } from '../types'` |
| `core/content/xyz/sub/file.ts` | `import { EducationalContent } from '../../types'` |
| `core/content/xyz/sub/deep/file.ts` | `import { EducationalContent } from '../../../types'` |

### Export Pattern

```typescript
// In content file (e.g., heart-failure.ts)
export const heartFailureContent: EducationalContent = { ... };

// In index.ts
export { heartFailureContent } from './heart-failure';
export { coronaryArteryDiseaseContent } from './coronary-artery-disease';
// ... etc
```

---

## Continuation Protocol

See `progress.txt` for the detailed continuation protocol including:

1. **Session Start Checklist**
2. **Session End / Usage Limit Checklist**
3. **Handoff Summary Format**
4. **Batch Continuation Template**
5. **Progress Tracking Commands**

---

## Quick Reference

### Check TypeScript Errors
```bash
npx tsc --noEmit 2>&1 | grep -c "error TS"
```

### Count Missing Modules
```bash
npx tsc --noEmit 2>&1 | grep "Cannot find module" | wc -l
```

### Count Content Files
```bash
find core/content -name "*.ts" | wc -l
```

### List Content Directories
```bash
find core/content -type d | sort
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-24 | Initial blueprint creation |

---

*This document is the master reference for The Biological Self project. Update it when major changes occur.*
