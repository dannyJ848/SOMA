/**
 * Medication Adjustments - Kidney Disease Management
 */

import { EducationalContent } from '../../types';

export const MEDICATION_ADJUSTMENTS: EducationalContent = {
  id: 'kidney-disease-medication-adjustments',
  type: 'concept',
  name: 'Medication Adjustments in Kidney Disease',
  alternateNames: ['Renal dosing', 'Drug adjustments in CKD', 'Nephrotoxic medications'],

  levels: {
    1: {
      level: 1,
      summary: 'When you have kidney disease, some medications need to be changed because your kidneys cannot clear them as well.',
      explanation: `**Why Medication Adjustments Matter**
Your kidneys help remove many medications from your body. When kidneys don't work as well, medications can build up and cause problems.

**Medications to Avoid or Use Carefully:**

*Pain Medications:*
- AVOID: Ibuprofen (Advil), naproxen (Aleve)
- SAFE: Acetaminophen (Tylenol) in regular doses

*Other Medications to Be Careful With:*
- Some antibiotics
- Some diabetes medications
- Some blood pressure medications
- Certain heartburn medications (PPIs - long-term)

**What to Tell Your Doctor:**
- Tell EVERY doctor and pharmacist that you have kidney disease
- Always ask before taking new medications, including over-the-counter
- Bring a medication list to all appointments

**Tips:**
1. Always check before taking pain relievers
2. Ask about doses when starting new medications
3. Keep a current list of all medications
4. Ask if any tests are needed to monitor medications

**Over-the-Counter Caution:**
- Check labels for kidney warnings
- Ask pharmacist before buying
- Avoid "kidney cleanses" or herbal supplements without asking your doctor`,
      keyTerms: [
        { term: 'NSAIDs', definition: 'Pain medications like ibuprofen that can harm kidneys' },
        { term: 'nephrotoxic', definition: 'Something that can damage the kidneys' },
        { term: 'over-the-counter', definition: 'Medications you can buy without a prescription' },
      ],
      analogies: ['If your kidneys are like a drain that is partially clogged, some medications will back up in your system instead of being flushed out.'],
      examples: ['Tom used to take ibuprofen for his back pain. His nephrologist told him to use acetaminophen instead to protect his kidneys.'],
    },
    2: {
      level: 2,
      summary: 'CKD requires medication review for nephrotoxicity avoidance, dose adjustments based on eGFR, and monitoring for drug-related complications.',
      explanation: `**Nephrotoxic Medications to Avoid:**

| Category | Examples | Risk |
|----------|----------|------|
| NSAIDs | Ibuprofen, naproxen | Reduce GFR, AKI |
| Contrast | IV contrast media | AKI risk |
| Aminoglycosides | Gentamicin, tobramycin | Direct toxicity |
| Lithium | Long-term use | CKD progression |
| PPIs | Long-term use | AIN, CKD progression |

**Dose Adjustments Required:**

*Common Medications:*
| Medication | Adjustment |
|------------|------------|
| Metformin | Reduce/avoid in severe CKD |
| Gabapentin | Reduce dose based on eGFR |
| Allopurinol | Start low, titrate slowly |
| Digoxin | Reduce dose |
| Many antibiotics | Adjust based on eGFR |

**Diabetes Medications in CKD:**

| Drug Class | CKD Considerations |
|------------|-------------------|
| Metformin | Contraindicated if eGFR <30 |
| SGLT2 inhibitors | Reduced glycemic effect but renal benefits |
| GLP-1 RA | Most safe in CKD |
| Sulfonylureas | Increased hypoglycemia risk |
| Insulin | Dose often reduced due to decreased clearance |

**Monitoring:**
- Serum levels when available (digoxin, vancomycin)
- Symptoms of toxicity
- Renal function during nephrotoxic therapy`,
      keyTerms: [
        { term: 'renal dosing', definition: 'Adjusting medication doses based on kidney function' },
        { term: 'drug clearance', definition: 'How the body removes a medication, often through kidneys' },
        { term: 'AKI', definition: 'Acute kidney injury; sudden decrease in kidney function' },
      ],
    },
    3: {
      level: 3,
      summary: 'Pharmacotherapy in CKD requires systematic medication review, evidence-based dose adjustments, therapeutic drug monitoring, and shared decision-making about risk-benefit trade-offs.',
      explanation: `**Pharmacokinetic Changes in CKD:**

*Drug Disposition:*
\`\`\`
Absorption: Usually unchanged
Distribution: May be altered (protein binding, volume)
Metabolism: Hepatic often unchanged; some reduced
Excretion: Reduced renal clearance (primary impact)
\`\`\`

**Dose Adjustment Principles:**

*Approaches:*
| Method | When to Use |
|--------|-------------|
| Reduce dose | Narrow therapeutic index |
| Extend interval | Wide therapeutic index |
| Both | Based on drug properties |

*eGFR Thresholds:*
- Mild (G2): Few adjustments needed
- Moderate (G3): Many drugs need adjustment
- Severe (G4-5): Most renally cleared drugs adjusted

**High-Risk Scenarios:**

*Contrast-Induced AKI:*
- Risk factors: CKD, diabetes, volume depletion
- Prevention: Hydration, minimize contrast volume
- Metformin: Hold around contrast

*Drug-Drug Interactions:*
- ACEi/ARB + NSAIDs + diuretics ("triple whammy")
- Nephrotoxic combinations
- Potassium-raising combinations in CKD

**Kidney-Protective Medications:**

| Drug Class | Indication | Evidence |
|------------|------------|----------|
| ACEi/ARB | Proteinuric CKD | Slows progression |
| SGLT2 inhibitors | CKD, diabetes or not | Slows progression, CV benefit |
| Finerenone | DKD | Slows progression |

**Medication Reconciliation:**
- Review at every visit
- Assess renal clearance for each drug
- Evaluate for nephrotoxicity
- Consider deprescribing`,
      keyTerms: [
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels to guide dosing' },
        { term: 'contrast-induced AKI', definition: 'Kidney injury from radiologic contrast agents' },
        { term: 'finerenone', definition: 'Non-steroidal mineralocorticoid receptor antagonist for diabetic kidney disease' },
      ],
      clinicalNotes: 'Always review medication list for renal dosing needs. SGLT2 inhibitors provide kidney protection even with reduced glucose-lowering at low eGFR. Avoid NSAID + ACEi/ARB + diuretic combination. Contrast risk manageable with hydration and modern protocols.',
    },
    4: {
      level: 4,
      summary: 'Advanced pharmacotherapy in CKD integrates precision dosing, pharmacogenomics, and evidence-based nephroprotection to optimize outcomes while minimizing drug-induced kidney injury.',
      explanation: `**Precision Drug Dosing:**

*Population vs. Individual Dosing:*
\`\`\`
Traditional: eGFR-based dose tables
Precision: Individual factors
- Residual renal function (dialysis)
- Body composition
- Pharmacogenomics
- Drug interactions
- Co-morbidities
\`\`\`

**Pharmacogenomics in CKD:**

| Gene | Drug | Application |
|------|------|-------------|
| CYP2C9 | Warfarin | Dose prediction |
| SLCO1B1 | Statins | Toxicity risk |
| HLA-B*58:01 | Allopurinol | Severe reaction risk |
| CYP2D6 | Codeine | Efficacy/toxicity |

**Nephroprotective Therapies:**

*SGLT2 Inhibitors:*
\`\`\`
Mechanisms:
- Reduced glomerular pressure
- Decreased albuminuria
- Metabolic effects
- Anti-inflammatory

Evidence:
- DAPA-CKD, CREDENCE, EMPA-KIDNEY
- Benefits even without diabetes
- Effective to low eGFR
\`\`\`

*Finerenone:*
- Non-steroidal MRA
- FIDELIO-DKD, FIGARO-DKD trials
- Reduces CKD progression and CV events
- Less hyperkalemia than spironolactone

**Dialysis Pharmacotherapy:**

*Considerations:*
- Dialyzability of drugs
- Timing of administration (pre vs. post HD)
- Residual renal function impact
- Supplemental dosing after dialysis

*Antibiotic Dosing:*
| Drug | HD Adjustment |
|------|---------------|
| Vancomycin | Post-HD dosing, level-guided |
| Levofloxacin | 50% dose, post-HD |
| Ceftriaxone | No adjustment |`,
      keyTerms: [
        { term: 'CREDENCE', definition: 'Trial demonstrating canagliflozin benefit in diabetic kidney disease' },
        { term: 'DAPA-CKD', definition: 'Trial showing dapagliflozin benefit in CKD with and without diabetes' },
        { term: 'dialyzability', definition: 'Extent to which a drug is removed by dialysis' },
      ],
      clinicalNotes: 'SGLT2 inhibitors are now standard of care for CKD regardless of diabetes. Finerenone adds to RAAS inhibition in DKD. Consider pharmacogenomics when available. Dialysis patients require specialized dosing considerations.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art CKD pharmacotherapy leverages model-informed precision dosing, AI-guided optimization, and integrated nephrotoxicity surveillance for personalized medication management.',
      explanation: `**Model-Informed Precision Dosing:**

*Pharmacokinetic Modeling:*
\`\`\`
Population PK Models
+ Individual Patient Data
+ Bayesian Estimation
         ↓
Personalized Dose Prediction
         ↓
TDM Integration
         ↓
Adaptive Dosing
\`\`\`

**AI/ML Applications:**

*Drug Optimization:*
| Application | Approach |
|-------------|----------|
| AKI prediction | ML on drug-lab-clinical data |
| Dose recommendation | Reinforcement learning |
| Drug-drug interaction | NLP, knowledge graphs |
| Nephrotoxicity signal | EHR surveillance |

**Digital Health Integration:**

*Medication Management:*
- Smart pill dispensers
- Adherence monitoring
- Drug information apps
- Telemedicine pharmacy

**Future Directions:**

*Research Priorities:*
- Novel nephroprotective agents
- Biomarker-guided dosing
- AI-optimized regimens
- Polypharmacy management

*Emerging Therapies:*
- GLP-1 RA for CKD
- Novel MRAs
- Anti-fibrotic agents
- Targeted molecular therapies`,
      keyTerms: [
        { term: 'Bayesian dosing', definition: 'Statistical approach incorporating prior knowledge for individualized dosing' },
        { term: 'model-informed precision dosing', definition: 'Using pharmacokinetic models for personalized drug dosing' },
      ],
      clinicalNotes: 'Model-informed dosing available for complex scenarios. AI tools emerging for drug optimization. Evidence-based nephroprotection remains cornerstone. Watch for novel agents in development.',
    },
  },

  media: [],
  citations: [{ id: 'kdigo-ckd', type: 'article', title: 'KDIGO CKD Guidelines', source: 'Kidney International' }],
  crossReferences: [{ targetId: 'kidney-disease-ckd-stages', targetType: 'topic', relationship: 'related', label: 'CKD Stages' }],
  tags: { systems: ['renal'], topics: ['CKD', 'pharmacology'], keywords: ['renal dosing', 'nephrotoxic drugs', 'CKD medications'], clinicalRelevance: 'critical' },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
