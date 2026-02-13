/**
 * Acute Tubular Necrosis (ATN) - Nephrology Educational Content
 */
import { EducationalContent } from '../../../types';

export const acuteTubularNecrosis: EducationalContent = {
  id: 'nephro-acute-tubular-necrosis',
  type: 'condition',
  name: 'Acute Tubular Necrosis',
  nameEs: 'Necrosis Tubular Aguda',
  alternateNames: ['ATN', 'Acute Tubular Injury', 'ATI'],
  hpoId: 'HP:0031418',
  levels: {
    1: {
      level: 1,
      summary: 'Acute tubular necrosis is when the tiny tubes in your kidneys get damaged, usually from low blood flow or toxic substances, causing temporary kidney failure.',
      explanation: `Your kidneys have tiny tubes (tubules) that process the fluid your blood filters make. When these tubes get injured -- from severe dehydration, major surgery, infections, or certain medications -- they stop working properly.

**What happens:** Your kidneys can't make urine normally. Waste builds up in your blood.

**Common causes:**
- Low blood pressure or severe dehydration (ischemic ATN)
- Certain medications (contrast dye, aminoglycoside antibiotics)
- Muscle breakdown (rhabdomyolysis)

**Good news:** The tubules can usually heal themselves in 1-3 weeks with supportive care.`,
      keyTerms: [
        { term: 'tubules', definition: 'Tiny tubes in kidneys that process filtered fluid into urine' },
        { term: 'kidney failure', definition: 'When kidneys can\'t clean blood or make urine properly' },
      ],
      analogies: ['Kidney tubules are like a factory assembly line -- if the workers (cells) get hurt, production (urine) stops, but they can recover.'],
      patientCounselingPoints: ['Stay well hydrated.', 'Your kidneys should recover, but it may take weeks.'],
    },
    2: {
      level: 2,
      summary: 'ATN is the most common cause of intrinsic acute kidney injury, caused by ischemic or nephrotoxic injury to tubular epithelial cells, diagnosed by muddy brown casts on urinalysis and a fractional excretion of sodium >2%.',
      explanation: `## Causes
**Ischemic ATN (most common):**
- Prolonged hypotension (sepsis, cardiogenic shock, hemorrhage)
- Major surgery (cardiac, aortic)
- Renal artery clamping

**Nephrotoxic ATN:**
- Medications: Aminoglycosides, amphotericin B, cisplatin, IV contrast
- Endogenous toxins: Myoglobin (rhabdomyolysis), hemoglobin (hemolysis), uric acid (tumor lysis)

## Diagnosis
| Feature | Pre-renal AKI | ATN |
|---------|--------------|-----|
| FENa | <1% | >2% |
| Urine osmolality | >500 | <350 |
| BUN:Cr ratio | >20:1 | <20:1 |
| Urine sediment | Bland/hyaline casts | Muddy brown granular casts |

## Phases of ATN
1. **Initiation** (hours): Injury occurs
2. **Extension** (1-2 days): Inflammation and continued injury
3. **Maintenance** (1-2 weeks): Oliguria, established AKI
4. **Recovery**: Tubular regeneration, polyuric phase (watch electrolytes)`,
      keyTerms: [
        { term: 'FENa', definition: 'Fractional excretion of sodium; >2% suggests tubular damage (ATN), <1% suggests pre-renal cause' },
        { term: 'muddy brown casts', definition: 'Characteristic urinalysis finding in ATN; degenerating tubular epithelial cells' },
        { term: 'rhabdomyolysis', definition: 'Muscle breakdown releasing myoglobin, which is toxic to kidney tubules' },
      ],
    },
    3: {
      level: 3,
      summary: 'ATN pathophysiology involves tubular epithelial cell ischemia/toxicity leading to loss of cell polarity, shedding, cast formation, and tubuloglomerular feedback-mediated GFR reduction, with management focused on hemodynamic optimization and avoidance of further nephrotoxins.',
      explanation: `## Pathophysiology
**Ischemic ATN:**
1. ATP depletion in tubular cells (S3 segment of proximal tubule, thick ascending limb most vulnerable)
2. Loss of cell polarity -- Na/K-ATPase redistributes from basolateral to apical membrane
3. Cytoskeletal disruption, loss of brush border
4. Cell detachment from basement membrane
5. Cast formation from detached cells and Tamm-Horsfall protein
6. Tubular obstruction raises intratubular pressure
7. Backleak of filtrate through denuded basement membrane
8. Tubuloglomerular feedback: Increased distal NaCl delivery activates macula densa, causing afferent arteriolar vasoconstriction and GFR reduction

**Nephrotoxic ATN:**
- Aminoglycosides: Accumulate in proximal tubular lysosomes; dose-dependent
- Contrast: Medullary ischemia + direct tubular toxicity + reactive oxygen species
- Myoglobin: Precipitates in tubules, generates ROS, causes vasoconstriction

## Management
- **No specific pharmacotherapy** -- supportive care
- Hemodynamic optimization (target MAP >65 mmHg)
- Discontinue nephrotoxins
- Adjust drug doses for decreased GFR
- Avoid hypervolemia (FACTT trial: conservative fluid strategy)
- Renal replacement therapy for refractory indications (acidosis, electrolytes, fluid overload, uremia, toxins)
- Monitor for polyuric recovery phase (aggressive electrolyte replacement)`,
      keyTerms: [
        { term: 'tubuloglomerular feedback', definition: 'Mechanism where increased NaCl at macula densa causes afferent arteriolar constriction, reducing GFR' },
        { term: 'S3 segment', definition: 'Terminal portion of proximal tubule in outer medulla; highly susceptible to ischemic injury due to marginal oxygenation' },
        { term: 'Tamm-Horsfall protein', definition: 'Most abundant urinary protein (uromodulin); forms casts with cellular debris in ATN' },
      ],
      clinicalNotes: 'FENa is unreliable when diuretics have been given -- use FEUrea (<35% suggests pre-renal) instead. In rhabdomyolysis, aggressive IV fluid resuscitation and urine alkalinization are key to preventing ATN.',
    },
    4: {
      level: 4,
      summary: 'Advanced ATN management encompasses early AKI biomarkers for subclinical detection, optimized hemodynamic targets, evidence-based RRT timing, and prevention strategies including KDIGO care bundles.',
      explanation: `## Novel AKI Biomarkers
Traditional markers (creatinine) detect AKI 24-48h after injury. Novel biomarkers detect tubular stress/injury earlier:

| Biomarker | Source | Timing | Use |
|-----------|--------|--------|-----|
| NGAL | Proximal tubule | 2-4h | Early detection |
| KIM-1 | Proximal tubule | 6-12h | Injury severity |
| TIMP-2 x IGFBP7 | Tubular cells | 4h | FDA-approved (NephroCheck); risk stratification |
| L-FABP | Proximal tubule | 4h | Ischemic injury |
| Urinary [TIMP-2]x[IGFBP7] >0.3: High risk for AKI within 12h

## Evidence-Based RRT Decisions
**Indications (AEIOU):** Acidosis, Electrolytes (refractory hyperkalemia), Intoxication, Overload (fluid), Uremia (encephalopathy, pericarditis)

**Timing:** STARRT-AKI and AKIKI trials: Delayed/watchful strategy non-inferior to early initiation; avoid unnecessary RRT
- AKIKI-2: Delayed strategy may increase mortality -- don't delay too long
- Individualize based on trajectory

**Modality:** CVVH vs IHD -- no mortality difference (ATN trial); CRRT preferred in hemodynamic instability

## Prevention Strategies
- **KDIGO AKI care bundle:** Discontinue nephrotoxins, optimize volume/hemodynamics, monitor creatinine/urine output, avoid hyperglycemia
- **Contrast nephropathy prevention:** IV isotonic saline; high-risk patients benefit from iso-osmolar contrast and volume expansion; NAC has no proven benefit (PRESERVE trial)
- **Perioperative:** Goal-directed hemodynamic therapy reduces postoperative AKI`,
      keyTerms: [
        { term: 'NephroCheck', definition: 'FDA-approved urinary biomarker test (TIMP-2 x IGFBP7) for AKI risk stratification in ICU patients' },
        { term: 'STARRT-AKI', definition: 'Landmark trial showing accelerated RRT initiation not superior to standard timing in AKI' },
        { term: 'CRRT', definition: 'Continuous renal replacement therapy; preferred for hemodynamically unstable patients' },
      ],
      clinicalNotes: 'The concept of "subclinical AKI" (biomarker-positive, creatinine-negative) identifies patients at risk who may benefit from KDIGO care bundles. PRESERVE trial definitively showed NAC does not prevent contrast nephropathy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ATN research focuses on AKI-to-CKD transition mechanisms, tubular repair vs maladaptive fibrosis, precision AKI phenotyping, and emerging therapeutic targets including cell cycle arrest pathways and anti-fibrotic agents.',
      explanation: `## AKI-to-CKD Transition
Not all ATN fully recovers. Maladaptive repair drives CKD:
- Failed tubular regeneration: Cell cycle arrest at G2/M promotes profibrotic cytokine secretion (TGF-beta, CTGF)
- Pericyte-to-myofibroblast transition
- Capillary rarefaction reduces medullary oxygen delivery
- Epigenetic reprogramming of injured tubular cells
- Risk factors: Severity of AKI, recurrent episodes, baseline CKD, proteinuria, older age

## Precision AKI Phenotyping
- TRIBE-AKI Consortium: Biomarker combinations predict outcomes
- AKI subphenotypes identified by latent class analysis (hypoinflammatory vs hyperinflammatory) -- differential treatment response
- Electronic health record-based machine learning for AKI prediction (Park model, deployed in several health systems)

## Emerging Therapeutic Targets
- Teprasiran (QPI-1002): siRNA targeting p53 to reduce tubular apoptosis (phase III in cardiac surgery AKI)
- Recombinant alkaline phosphatase: Anti-inflammatory in sepsis-associated AKI
- Mesenchymal stem cells: Paracrine effects promote repair (clinical trials ongoing)
- Nrf2 activators (bardoxolone): Antioxidant pathway activation

## Key Guidelines
- KDIGO AKI 2012 (update expected): Staging, management, follow-up
- Post-AKI follow-up: All AKI episodes warrant nephrology referral within 3 months; check kidney function, proteinuria, blood pressure
- AKI survivors have 8.8x risk of CKD and 3.3x risk of ESKD`,
      keyTerms: [
        { term: 'AKI-to-CKD transition', definition: 'Maladaptive repair after AKI leading to tubular atrophy, interstitial fibrosis, and progressive kidney disease' },
        { term: 'G2/M arrest', definition: 'Cell cycle arrest in injured tubular cells that promotes profibrotic signaling rather than normal regeneration' },
        { term: 'teprasiran', definition: 'Investigational siRNA targeting p53 in tubular cells to prevent apoptosis after ischemic AKI' },
      ],
      clinicalNotes: 'Every AKI episode is a "renal angina" -- patients who survive AKI need structured follow-up to detect CKD progression. AKI severity and duration predict long-term outcomes. Biomarker-guided care bundles may prevent subclinical AKI from progressing.',
    },
  },
  media: [],
  citations: [
    { id: 'kdigo-aki-2012', type: 'article', title: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury', source: 'Kidney International Supplements' },
    { id: 'starrt-aki', type: 'article', title: 'Timing of Initiation of RRT in AKI (STARRT-AKI)', authors: ['STARRT-AKI Investigators'], source: 'New England Journal of Medicine' },
  ],
  crossReferences: [
    { targetId: 'nephro-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'nephro-hyperkalemia', targetType: 'condition', relationship: 'see-also', label: 'Hyperkalemia' },
    { targetId: 'nephro-renal-tubular-acidosis', targetType: 'condition', relationship: 'sibling', label: 'Renal Tubular Acidosis' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['pathology', 'critical care', 'therapeutics'],
    keywords: ['ATN', 'acute kidney injury', 'AKI', 'tubular necrosis', 'rhabdomyolysis', 'contrast nephropathy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acuteTubularNecrosis;
