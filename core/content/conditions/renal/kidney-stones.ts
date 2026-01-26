/**
 * Kidney Stones - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const kidneyStones: EducationalContent = {
  id: 'condition-kidney-stones',
  type: 'condition',
  name: 'Kidney Stones',
  alternateNames: ['Nephrolithiasis', 'Renal Calculi', 'Urolithiasis'],
  hpoId: 'HP:0000787',

  levels: {
    1: {
      level: 1,
      summary: 'Kidney stones are hard deposits of minerals that form in your kidneys and can cause severe pain when passing through your urinary tract.',
      explanation: `Kidney stones form when your urine has too much of certain substances that crystallize together.

**Symptoms:**
- Severe pain in back or side
- Pain that comes in waves
- Blood in urine
- Nausea and vomiting
- Frequent urination

**Prevention:**
- Drink plenty of water (2-3 liters daily)
- Limit salt and animal protein
- Avoid excess calcium supplements

**Treatment:**
- Pain management
- Drink fluids to help pass stone
- Procedures for large stones (shock waves, surgery)`,
      keyTerms: [
        { term: 'kidney stone', definition: 'Hard mineral deposit that forms in the kidney' },
        { term: 'ureter', definition: 'Tube connecting kidney to bladder where stones can get stuck' },
      ],
      analogies: ['A kidney stone is like a pebble getting stuck in a garden hose—it blocks the flow and causes pressure.'],
      examples: ['A man with sudden severe flank pain radiating to the groin with bloody urine likely has a kidney stone.'],
    },
    2: {
      level: 2,
      summary: 'Kidney stones are classified by composition (calcium, uric acid, struvite, cystine), with management depending on stone size, location, and composition, plus metabolic evaluation for recurrent formers.',
      explanation: `## Stone Types
| Type | Frequency | Radiopaque | Risk Factors |
|------|-----------|------------|--------------|
| Calcium oxalate | 70-80% | Yes | Hypercalciuria, hyperoxaluria |
| Calcium phosphate | 10-15% | Yes | Hyperparathyroidism, RTA |
| Uric acid | 5-10% | No | Low urine pH, gout, diabetes |
| Struvite | 5-10% | Yes | UTI with urease-producing bacteria |
| Cystine | 1-2% | Mild | Cystinuria (genetic) |

## Diagnosis
- Non-contrast CT (gold standard)
- Urinalysis: Blood, crystals, pH
- BMP: Calcium, creatinine

## Management
**<5mm:** Usually pass spontaneously; hydration, pain control, alpha-blocker (tamsulosin)
**5-10mm:** May pass; consider intervention if not progressing
**>10mm:** Usually require intervention
- Shock wave lithotripsy (SWL)
- Ureteroscopy with laser
- Percutaneous nephrolithotomy (PCNL) for large stones

## Prevention
- Hydration (urine output >2L/day)
- Dietary modification based on stone type`,
      keyTerms: [
        { term: 'lithotripsy', definition: 'Breaking kidney stones with shock waves (ESWL)' },
        { term: 'ureteroscopy', definition: 'Passing scope through bladder/ureter to remove or laser stones' },
        { term: 'tamsulosin', definition: 'Alpha-blocker that relaxes ureter to help pass stones' },
      ],
    },
    3: {
      level: 3,
      summary: 'Nephrolithiasis results from supersaturation, nucleation, and crystal aggregation, with 24-hour urine analysis guiding stone-specific prevention strategies and metabolic evaluation identifying treatable causes.',
      explanation: `## Pathophysiology
- **Supersaturation:** Urine concentration exceeds solubility
- **Nucleation:** Crystal formation begins
- **Crystal growth and aggregation:** Stones enlarge
- **Retention:** Stones anchor to renal papilla (Randall's plaques)

## 24-Hour Urine Analysis
**Measure:**
- Volume, pH, calcium, oxalate, citrate, uric acid, sodium, creatinine

**Targets:**
- Volume >2L
- Citrate >450 mg/day
- Calcium <200 mg/day
- Oxalate <40 mg/day

## Metabolic Evaluation
**Calcium Stones:**
- Check PTH if hypercalcemic
- Evaluate for absorptive vs renal hypercalciuria

**Uric Acid Stones:**
- Alkalinize urine (potassium citrate) to pH 6.5-7
- Allopurinol if hyperuricosuria

**Cystine Stones:**
- Alkalinization, high fluid intake
- Tiopronin if severe

## Prevention Medications
- Thiazides: Reduce urinary calcium
- Potassium citrate: Increases citrate, alkalinizes urine
- Allopurinol: For uric acid stones or hyperuricosuric calcium stones`,
      keyTerms: [
        { term: 'supersaturation', definition: 'Urine concentration exceeding solubility limit, promoting crystallization' },
        { term: 'Randall\'s plaque', definition: 'Calcified interstitial deposits where calcium stones nucleate' },
        { term: 'citrate', definition: 'Urinary stone inhibitor; low levels increase stone risk' },
      ],
      clinicalNotes: '24-hour urine should be done on usual diet after acute episode resolves. Low citrate is the most common metabolic abnormality—potassium citrate is first-line for most calcium stone formers.',
    },
    4: {
      level: 4,
      summary: 'Complex stone management addresses staghorn calculi, genetic stone disorders, surgical techniques, and stone prevention in special populations including bariatric surgery patients.',
      explanation: `## Staghorn Calculi
- Large stones filling renal pelvis and calyces
- Usually struvite (infection) or cystine
- Require PCNL, often multiple stages
- Untreated infection stones destroy kidney

## Genetic Stone Disorders
**Cystinuria:**
- Defective renal cystine reabsorption
- Hexagonal crystals
- Treatment: Hydration, alkalinization, tiopronin, d-penicillamine

**Primary Hyperoxaluria:**
- Oxalate overproduction (PH1, PH2, PH3)
- Recurrent stones, nephrocalcinosis
- Lumasiran (siRNA for PH1)

## Special Populations
**Post-Bariatric Surgery:**
- Increased oxalate absorption (especially RYGB)
- Calcium with meals (binds oxalate)
- Low oxalate diet

**Pregnancy:**
- Ultrasound first-line
- MRI without contrast if needed
- Ureteroscopy safe if required

## Advanced Surgical Techniques
- Flexible ureteroscopy with laser
- Mini-PCNL
- Robot-assisted stone surgery`,
      keyTerms: [
        { term: 'staghorn calculus', definition: 'Large branching stone filling renal collecting system' },
        { term: 'PCNL', definition: 'Percutaneous nephrolithotomy; surgery for large kidney stones' },
        { term: 'lumasiran', definition: 'siRNA therapy for primary hyperoxaluria type 1' },
      ],
      clinicalNotes: 'Staghorn stones from infection are surgical emergencies if infected. Bariatric surgery patients need lifelong stone prevention—calcium with meals is key.',
    },
    5: {
      level: 5,
      summary: 'Precision stone prevention integrates genetic testing, microbiome analysis, and novel therapeutics targeting oxalate absorption and crystallization, while endourologic innovation improves stone removal.',
      explanation: `## Genetic Testing
- Primary hyperoxaluria gene panel
- Cystinuria (SLC3A1, SLC7A9)
- Dent disease (CLCN5)
- Polygenic risk scores for common stone formers

## Microbiome
- Oxalobacter formigenes degrades dietary oxalate
- Probiotic approaches
- Fecal microbiota associations with stone risk

## Novel Therapeutics
**Oxalate Reduction:**
- Lumasiran (siRNA): Reduces hepatic oxalate production
- Nedosiran: Alternative siRNA for PH1
- Oxalobacter colonization

**Crystallization Inhibitors:**
- Novel citrate formulations
- Targeted crystal growth inhibitors

## Surgical Innovation
- Ultra-mini PCNL (4-8Fr)
- Single-use digital ureteroscopes
- Thulium fiber laser (TFL)
- AI-assisted surgical planning

## Prediction and Monitoring
- CT-based stone prediction
- Wearable hydration monitoring
- App-based dietary tracking`,
      keyTerms: [
        { term: 'Oxalobacter formigenes', definition: 'Gut bacterium that degrades oxalate, potentially preventing stones' },
        { term: 'TFL', definition: 'Thulium fiber laser; emerging laser technology for stone dusting' },
        { term: 'nedosiran', definition: 'siRNA therapy for primary hyperoxaluria type 1' },
      ],
      clinicalNotes: 'Lumasiran is approved for primary hyperoxaluria type 1—dramatically reduces oxalate levels. Microbiome-targeted approaches are promising but not yet standard care.',
    },
  },

  media: [],
  citations: [{ id: 'aua-stones-2022', type: 'article', title: 'AUA Guideline on Surgical Management of Stones', source: 'Journal of Urology' }],
  crossReferences: [{ targetId: 'condition-gout', targetType: 'condition', relationship: 'related', label: 'Gout' }],
  tags: { systems: ['renal', 'urinary'], topics: ['urology', 'nephrology'], keywords: ['kidney stones', 'nephrolithiasis', 'colic', 'lithotripsy'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default kidneyStones;
