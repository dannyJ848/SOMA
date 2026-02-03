/**
 * Hyperkalemia - Nephrology Educational Content
 */
import { EducationalContent } from '../../../types';

export const hyperkalemia: EducationalContent = {
  id: 'nephro-hyperkalemia',
  type: 'condition',
  name: 'Hyperkalemia',
  nameEs: 'Hiperpotasemia',
  alternateNames: ['High Potassium', 'Hyperpotassemia', 'Hyperkaliaemia'],
  hpoId: 'HP:0002153',
  levels: {
    1: {
      level: 1,
      summary: 'Hyperkalemia means your blood potassium level is too high, which can be dangerous because potassium controls your heartbeat.',
      explanation: `Potassium is a mineral that helps your muscles work, especially your heart. Your kidneys normally keep potassium at the right level by removing extra in your urine.

When potassium gets too high (usually from kidney problems or certain medications), it can make your heart beat irregularly or even stop.

**Symptoms:** Muscle weakness, tingling, nausea. Often there are NO symptoms until it becomes dangerous.

**Common causes:**
- Kidney disease (kidneys can't remove enough potassium)
- Medications: ACE inhibitors, potassium-sparing diuretics, NSAIDs
- Eating too many high-potassium foods when kidneys are weak

**Treatment:** Medications to protect the heart, shift potassium into cells, and remove potassium from the body.`,
      keyTerms: [
        { term: 'potassium', definition: 'A mineral that helps muscles and nerves work; too much can be dangerous for your heart' },
        { term: 'arrhythmia', definition: 'An abnormal heart rhythm that can be caused by high potassium' },
      ],
      analogies: ['Potassium for your heart is like gas for a car engine -- the right amount makes it run, but too much floods the engine and it stalls.'],
      patientCounselingPoints: ['Avoid salt substitutes (they contain potassium).', 'Have blood tests regularly if you take medications that raise potassium.'],
    },
    2: {
      level: 2,
      summary: 'Hyperkalemia (K >5.0 mEq/L) is a potentially life-threatening electrolyte emergency, most commonly caused by CKD and RAAS inhibitors, with ECG changes progressing from peaked T waves to fatal arrhythmias.',
      explanation: `## Classification
- Mild: 5.0-5.5 mEq/L
- Moderate: 5.5-6.5 mEq/L
- Severe: >6.5 mEq/L (or any level with ECG changes)

**First step:** Rule out pseudohyperkalemia (hemolyzed sample, tourniquet, fist clenching, thrombocytosis, leukocytosis).

## ECG Progression
1. Peaked T waves (earliest) -- "tall, narrow, tented"
2. PR prolongation, flattened P waves
3. QRS widening
4. Sine wave pattern
5. Ventricular fibrillation / asystole

## Causes
| Mechanism | Examples |
|-----------|----------|
| Decreased excretion | CKD, AKI, hypoaldosteronism (Type 4 RTA) |
| Medications | ACEi, ARBs, spironolactone, trimethoprim, NSAIDs, heparin |
| Transcellular shift OUT | Acidosis, insulin deficiency, beta-blockers, cell lysis (rhabdomyolysis, tumor lysis) |
| Increased intake | IV KCl, potassium supplements (rarely sole cause) |

## Treatment (ABC approach)
1. **A - Antagonize cardiac effects:** IV calcium gluconate (10 mL of 10%, over 2-3 min) -- works in minutes, does NOT lower K
2. **B - shift K into cells:** Insulin (10 units) + dextrose (25g D50); albuterol nebulizer; sodium bicarbonate (if acidotic)
3. **C - remove K from body:** Kayexalate (SPS), patiromer, SZC; loop diuretics; hemodialysis (definitive)`,
      keyTerms: [
        { term: 'peaked T waves', definition: 'Earliest ECG sign of hyperkalemia; tall, narrow, pointed T waves' },
        { term: 'calcium gluconate', definition: 'Emergency IV medication that stabilizes cardiac membrane against hyperkalemia; does not lower potassium' },
        { term: 'pseudohyperkalemia', definition: 'Falsely elevated potassium from blood sample handling (hemolysis, clotting)' },
        { term: 'patiromer', definition: 'Potassium binder taken orally to lower potassium; works in the gut' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hyperkalemia management involves rapid ECG assessment, membrane stabilization, intracellular shifting agents, and potassium elimination strategies, with newer oral binders (patiromer, SZC) enabling safer RAAS inhibitor continuation in CKD.',
      explanation: `## Potassium Homeostasis
- Total body K: ~3500 mEq; 98% intracellular (maintained by Na/K-ATPase)
- Normal intake: 40-120 mEq/day
- Excretion: 90% renal (collecting duct principal cells via ROMK and BK channels), 10% GI (increased in CKD)
- Regulated by: Aldosterone (primary), insulin, catecholamines, acid-base status

**Aldosterone's Role:**
- Binds mineralocorticoid receptor in principal cells
- Upregulates ENaC (Na reabsorption) and ROMK (K secretion)
- Deficiency or resistance = Type 4 RTA with hyperkalemia

## Detailed Treatment Protocol
**Step 1 -- Cardiac Membrane Stabilization (onset: 1-3 min, duration: 30-60 min):**
- Calcium gluconate 10% 10-20 mL IV over 2-3 min
- Calcium chloride 10% for central line (3x more elemental calcium, caustic peripherally)
- Does NOT lower K; repeat if ECG not improved

**Step 2 -- Intracellular Shift (onset: 15-30 min, duration: 4-6h):**
- Regular insulin 10 units IV + D50W 25g (MUST give dextrose to prevent hypoglycemia; monitor glucose)
- Albuterol 10-20 mg nebulized (additive with insulin; avoid in cardiac patients)
- NaHCO3: Only if acidotic; limited efficacy alone

**Step 3 -- Potassium Removal:**
| Agent | Onset | Mechanism | Notes |
|-------|-------|-----------|-------|
| Loop diuretic | 30 min | Renal excretion | Requires some renal function |
| SPS (Kayexalate) | 2-6h | GI cation exchange | Risk of intestinal necrosis (rare); falling out of favor |
| Patiromer (Veltassa) | 7h | GI K binding | Better tolerated; not for acute use |
| SZC (Lokelma) | 1-2h | GI K binding | Can be used acutely; binds K in GI lumen |
| Hemodialysis | Immediate | Removes K directly | Definitive for severe/refractory; remove 80-120 mEq in 3-4h |

## RAAS Inhibitor Management in CKD
- Hyperkalemia is #1 reason for RAAS inhibitor discontinuation/downtitration
- New K binders (patiromer, SZC) enable continued RAAS inhibitor use
- AMBER trial: Patiromer enabled more patients to continue spironolactone in CKD
- DIALIZE trial: SZC maintained normokalemia in dialysis patients`,
      keyTerms: [
        { term: 'ROMK', definition: 'Renal outer medullary potassium channel; primary route of K secretion in collecting duct, regulated by aldosterone' },
        { term: 'SZC (sodium zirconium cyclosilicate)', definition: 'Novel potassium binder (Lokelma); exchanges Na/H for K in GI tract; faster onset than patiromer' },
        { term: 'ENaC', definition: 'Epithelial sodium channel in principal cells; drives sodium reabsorption creating electrochemical gradient for K secretion' },
      ],
      clinicalNotes: 'Always give dextrose with insulin to prevent hypoglycemia (occurs in ~20% of patients). Insulin-dextrose dose should be: 10 units regular insulin + 25g D50. Monitor glucose at 1, 2, and 4 hours. SZC has faster onset than patiromer and can be used in acute settings.',
    },
    4: {
      level: 4,
      summary: 'Advanced hyperkalemia management integrates RAAS inhibitor optimization with novel potassium binders, recognition of pseudohyperkalemia syndromes, and evidence from landmark CKD trials addressing the hyperkalemia-RAAS inhibitor paradox.',
      explanation: `## The Hyperkalemia-RAAS Inhibitor Paradox
RAAS inhibitors are cornerstone CKD therapy but cause hyperkalemia:
- ACEi/ARB: Reduce aldosterone, decrease K excretion
- Spironolactone/eplerenone: Block aldosterone receptor
- SGLT2 inhibitors: May modestly REDUCE hyperkalemia risk (natriuresis/kaliuresis effect)
- Finerenone: Lower hyperkalemia rates than steroidal MRAs (FIDELIO/FIGARO)

**Strategy:** Use novel binders to maintain RAAS inhibitor therapy rather than discontinuing nephroprotective agents

## Novel Binder Evidence
- **HARMONIZE:** SZC corrected K within 48h; maintained for 28 days
- **OPAL-HK:** Patiromer maintained normokalemia for 52 weeks
- **AMBER:** Patiromer + spironolactone in resistant HTN with CKD -- enabled continued MRA use
- **DIALIZE:** SZC reduced pre-dialysis hyperkalemia and interdialytic hyperkalemic events

## Renal Potassium Handling -- Detailed Physiology
- Proximal tubule: 65% reabsorption (paracellular, solvent drag)
- Thick ascending limb: 25% reabsorption (NKCC2 cotransporter)
- Collecting duct: Fine-tuning of secretion (principal cells) and reabsorption (alpha-intercalated cells via H/K-ATPase)
- Flow-dependent secretion: High distal flow activates BK channels for K secretion
- WNK-SPAK pathway: WNK4 kinase regulates NCC and ROMK; explains hypertension with hyperkalemia in Gordon syndrome

## Special Scenarios
- **Dialysis patients:** Potassium accumulates interdialytically; dietary restriction + SZC on non-dialysis days
- **Acidosis correction:** Each 0.1 pH unit decrease shifts K up ~0.6 mEq/L (variable; less reliable for organic acidoses)
- **Succinylcholine:** Contraindicated if K >5.5; depolarizing paralytic causes further K release
- **Cardiac arrest:** Hyperkalemia is a reversible cause (H's and T's); calcium, insulin/glucose, bicarb, dialysis`,
      keyTerms: [
        { term: 'WNK-SPAK pathway', definition: 'Kinase signaling cascade regulating NCC and ROMK in distal nephron; mutations cause Gordon syndrome (hyperkalemia + hypertension)' },
        { term: 'Gordon syndrome', definition: 'Pseudohypoaldosteronism type II; genetic hyperkalemia with hypertension from WNK kinase mutations' },
        { term: 'AMBER trial', definition: 'RCT demonstrating patiromer enables continued spironolactone use in CKD with resistant hypertension' },
      ],
      clinicalNotes: 'Do NOT discontinue RAAS inhibitors for mild hyperkalemia (5.0-5.5) -- instead optimize diet, add a binder, and address other contributors. Finerenone has lower hyperkalemia rates than spironolactone. SGLT2 inhibitors may have a modest potassium-lowering effect.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hyperkalemia research focuses on enabling maximal RAAS blockade through novel binder strategies, WNK pathway pharmacology, real-world outcomes of potassium management, and the role of continuous potassium monitoring in high-risk populations.',
      explanation: `## Emerging Science and Therapeutics

**WNK Pathway as Therapeutic Target:**
- WNK kinases regulate the "aldosterone paradox" -- how aldosterone can promote Na reabsorption or K secretion depending on context
- WNK4 inhibitors could theoretically enhance K secretion without Na retention
- Preclinical development ongoing

**Novel Approaches:**
- Continuous potassium monitoring: Wearable sensors in development (analogous to CGM for glucose)
- AI-driven potassium prediction: EHR-based algorithms predicting hyperkalemic events 24-48h before lab confirmation
- Gene therapy for monogenic hyperkalemia (Gordon syndrome): Conceptual stage

## Real-World Evidence
- Rates of RAAS inhibitor discontinuation for hyperkalemia: 20-30% in CKD trials
- Patients who discontinue RAAS inhibitors have 30% higher cardiovascular event rates
- Binder-enabled RAAS optimization programs reduce MACE in observational data
- Cost-effectiveness analyses support binder use to maintain RAAS inhibitors in CKD G3b-G5

## Guideline Evolution
- KDIGO 2024: Recommends addressing hyperkalemia to enable RAAS inhibitor continuation rather than dose reduction
- AHA/ACC: Novel binders included in HF management algorithms
- Consensus: Tolerate mild hyperkalemia (5.0-5.5) in the setting of evidence-based cardio-renal therapy

## Unresolved Questions
1. Optimal K target: Is strict normokalemia (3.5-5.0) necessary, or is 5.0-5.5 acceptable in CKD?
2. Long-term binder safety: Patiromer binds other cations (Mg depletion); SZC provides Na load
3. Impact of binder-enabled full-dose RAAS inhibition on hard outcomes: No completed RCT yet
4. Role of dietary potassium: Plant-based K (with alkali) may be less dangerous than supplemental KCl`,
      keyTerms: [
        { term: 'aldosterone paradox', definition: 'The ability of aldosterone to selectively regulate Na reabsorption or K secretion depending on volume status, mediated by WNK kinases' },
        { term: 'binder-enabled RAAS optimization', definition: 'Strategy of using oral K binders to maintain full-dose RAAS inhibitor therapy despite hyperkalemia risk in CKD' },
      ],
      clinicalNotes: 'The paradigm has shifted from "stop the RAAS inhibitor" to "enable the RAAS inhibitor with a binder." This approach is expected to reduce cardiovascular and renal events. Monitor magnesium with patiromer and sodium balance with SZC. Plant-based dietary potassium may be safer than previously thought due to accompanying alkali load.',
    },
  },
  media: [],
  citations: [
    { id: 'kdigo-ckd-2024', type: 'article', title: 'KDIGO 2024 Clinical Practice Guideline for CKD', source: 'Kidney International' },
    { id: 'palmer-hyperkalemia', type: 'article', title: 'Regulation of Potassium Homeostasis', authors: ['Palmer BF', 'Clegg DJ'], source: 'Clinical Journal of the American Society of Nephrology' },
  ],
  crossReferences: [
    { targetId: 'nephro-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'nephro-renal-tubular-acidosis', targetType: 'condition', relationship: 'see-also', label: 'Renal Tubular Acidosis (Type 4)' },
    { targetId: 'nephro-hyponatremia', targetType: 'condition', relationship: 'sibling', label: 'Hyponatremia' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
  ],
  tags: {
    systems: ['renal', 'cardiovascular'],
    topics: ['electrolytes', 'critical care', 'therapeutics'],
    keywords: ['hyperkalemia', 'potassium', 'RAAS', 'patiromer', 'SZC', 'ECG', 'cardiac arrest'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency medicine', 'surgery'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hyperkalemia;
