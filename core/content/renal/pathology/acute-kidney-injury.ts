/**
 * Acute Kidney Injury - Pathology Educational Content
 *
 * Covers sudden loss of kidney function including prerenal,
 * intrinsic, and postrenal causes with histological correlates.
 */

import { EducationalContent } from '../../types';

export const acuteKidneyInjury: EducationalContent = {
  id: 'pathology-acute-kidney-injury',
  type: 'condition',
  name: 'Acute Kidney Injury',
  alternateNames: ['AKI', 'Acute Renal Failure', 'ARF', 'Acute Kidney Disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Acute kidney injury is when the kidneys suddenly stop working properly, causing waste to build up in the blood.',
      explanation: `Acute kidney injury (AKI) is a sudden decrease in kidney function that happens over hours to days. The kidneys cannot filter blood properly, and waste products build up.

**What Causes It:**

1. **Not Enough Blood Flow (Prerenal)**
   - Dehydration from vomiting or diarrhea
   - Heart failure
   - Blood loss
   - Severe infection

2. **Direct Kidney Damage (Intrinsic)**
   - Medicines that harm kidneys
   - Infections
   - Muscle breakdown
   - Inflammation of kidney filters

3. **Blockage (Postrenal)**
   - Kidney stones
   - Enlarged prostate
   - Tumors blocking urine flow

**Signs:**
- Little or no urine
- Swelling in legs
- Confusion
- Nausea
- Abnormal blood tests

**Treatment:**
- Find and treat the cause
- Fluids if dehydrated
- Stop harmful medications
- Dialysis if severe

Most people recover if treated quickly, but some may have permanent kidney damage.`,
      keyTerms: [
        { term: 'acute kidney injury', definition: 'Sudden loss of kidney function over hours to days' },
        { term: 'creatinine', definition: 'A waste product in blood that kidneys filter; rises when kidneys fail' },
        { term: 'urea', definition: 'A waste product from protein breakdown; also called BUN' },
        { term: 'dialysis', definition: 'Treatment that filters blood when kidneys fail' },
        { term: 'dehydration', definition: 'Not having enough water in the body' },
      ],
      analogies: [
        'AKI is like a traffic jam in the kidneys - waste cannot get through and backs up.',
        'Prerenal AKI is like a drought - the river (blood flow) dries up so the dam (kidneys) cannot work.',
        'Intrinsic AKI is like the dam itself breaking - the kidney tissue is damaged.',
      ],
      examples: [
        'A marathon runner who drinks only water can develop AKI from low sodium and poor blood flow.',
        'Certain antibiotics can damage kidney tubules and cause AKI.',
        'A blocked kidney stone can cause AKI by preventing urine from flowing out.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acute kidney injury is defined by rapid decline in kidney function measured by creatinine rise or oliguria, classified into prerenal, intrinsic, and postrenal causes with distinct pathophysiology and management approaches.',
      explanation: `**Definition (KDIGO):**
- Increase in serum creatinine by >= 0.3 mg/dL within 48 hours, OR
- Increase in serum creatinine to >= 1.5 times baseline within 7 days, OR
- Urine volume < 0.5 mL/kg/hour for 6 hours

**Staging:**
- **Stage 1:** Cr x 1.5-1.9 or increase >= 0.3 mg/dL
- **Stage 2:** Cr x 2.0-2.9
- **Stage 3:** Cr x 3.0, Cr >= 4.0 mg/dL with acute rise, OR dialysis

**Classification by Cause:**

**Prerenal (40-55%):**
- Reduced renal perfusion
- Kidneys structurally normal
- Rapidly reversible with restoration of perfusion
- Causes: Hypovolemia, heart failure, cirrhosis, sepsis, renal artery stenosis

**Intrinsic (35-45%):**
- Direct parenchymal injury
- ATN (ischemic or nephrotoxic): 85% of intrinsic
- Glomerulonephritis
- Interstitial nephritis
- Vascular (vasculitis, TTP/HUS, cholesterol emboli)

**Postrenal (5-10%):**
- Obstruction of urinary tract
- Bilateral or solitary kidney
- Causes: BPH, stones, tumors, neurogenic bladder

**Epidemiology:**
- Hospital-acquired: 5-7% of admissions
- ICU: 30-50% of patients
- Mortality: 10-50% depending on severity
- Risk factors: Age, CKD, diabetes, heart failure, sepsis

**Clinical Assessment:**

**History:**
- Medications (nephrotoxins)
- Volume status
- Infections
- Procedures (contrast)
- Systemic diseases

**Physical Exam:**
- Volume status (orthostatic BP, JVP, skin turgor, edema)
- Bladder distension
- Rash (vasculitis, drug reaction)

**Diagnostic Workup:**
- Urinalysis and sediment
- Urine electrolytes (FeNa, FeUrea)
- Renal ultrasound
- Serologies (ANCA, anti-GBM, complements)
- Kidney biopsy if etiology unclear

**Management:**
- Treat underlying cause
- Optimize volume status
- Stop nephrotoxins
- Avoid contrast
- Dialysis if indicated
- Nutrition support`,
      keyTerms: [
        { term: 'oliguria', definition: 'Low urine output, typically < 400 mL/day or < 0.5 mL/kg/hour' },
        { term: 'FeNa', definition: 'Fractional excretion of sodium; helps differentiate prerenal from ATN' },
        { term: 'acute tubular necrosis', definition: 'Death of tubular cells; most common cause of intrinsic AKI' },
        { term: 'nephrotoxin', definition: 'Substance that damages kidney tissue' },
        { term: 'intrinsic AKI', definition: 'Kidney damage from direct parenchymal injury' },
      ],
      analogies: [
        'Prerenal AKI is like a power outage - the factory (kidneys) is fine but has no electricity (blood flow).',
        'ATN is like a factory fire - the machinery (tubule cells) is damaged and needs time to rebuild.',
        'Postrenal AKI is like a clogged drain - everything backs up until the blockage is removed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acute kidney injury pathophysiology involves distinct mechanisms in prerenal azotemia, acute tubular necrosis, and obstructive nephropathy, with diagnosis supported by urinalysis, urinary indices, imaging, and occasionally biopsy.',
      explanation: `**Prerenal Azotemia Pathophysiology:**

**Compensatory Mechanisms:**
- Afferent arteriole dilation (PGI2, NO)
- Efferent arteriole constriction (Ang II)
- Sodium/water retention
- Maintenance of GFR despite reduced perfusion

**Biomarkers:**
- FeNa < 1% (if not on diuretics)
- FeUrea < 35% (more reliable with diuretics)
- BUN:Cr ratio > 20:1
- Urine specific gravity > 1.018
- Hyaline casts

**Acute Tubular Necrosis Pathophysiology:**

**Ischemic ATN:**
- Severe hypoperfusion exceeding compensatory capacity
- Outer medulla most vulnerable (low oxygen)
- Tubular cell injury and death
- Tubular obstruction by casts
- Back-leak of filtrate
- Inflammatory response

**Nephrotoxic ATN:**
- Direct tubular cell toxicity
- Concentrated in medulla
- Mitochondrial injury
- Apoptosis and necrosis

**Phases:**
1. Initiation: Insult occurs
2. Extension: Ongoing injury, inflammation
3. Maintenance: Established injury, low GFR
4. Recovery: Cell regeneration

**Urinalysis in AKI:**

**Prerenal:**
- Normal sediment or hyaline casts
- High specific gravity

**ATN:**
- "Muddy brown" granular casts (pathognomonic)
- Tubular epithelial cells
- Low specific gravity
- FeNa > 2%

**Glomerulonephritis:**
- RBC casts
- Dysmorphic RBCs
- Proteinuria

**Interstitial Nephritis:**
- WBC casts
- WBCs, eosinophils
- Crystals (drug-related)

**Obstruction:**
- May be normal early
- Eventually WBCs, RBCs
- Crystals

**Specific Causes:**

**Sepsis-Associated AKI:**
- Most common cause in ICU
- Inflammatory mechanisms, not just ischemia
- May have normal tubular histology (new understanding)

**Contrast-Induced AKI:**
- Vasoconstriction + direct toxicity
- Risk factors: CKD, diabetes, volume depletion, high contrast dose
- Prevention: IV fluids, minimize contrast, NAC (limited benefit)

**Rhabdomyolysis:**
- Myoglobinuria
- Direct tubular toxicity
- Pigmented granular casts
- CK > 5x normal, often > 5000
- Aggressive fluid resuscitation

**Tumor Lysis Syndrome:**
- Purine release -> uric acid
- Calcium phosphate precipitation
- Prevention: Hydration, rasburicase, allopurinol

**Hepatorenal Syndrome:**
- Functional prerenal azotemia in cirrhosis
- Splanchnic vasodilation
- Extreme renal vasoconstriction
- Treatment: Terlipressin + albumin, TIPS, transplant

**Cardiorenal Syndrome:**
- Bidirectional heart-kidney dysfunction
- Type 1: Acute HF causes AKI
- Type 2: Chronic HF causes CKD
- Volume management challenging

**Kidney Biopsy in AKI:**

**Indications:**
- Etiology unclear after workup
- Suspected GN or vasculitis
- Suspected allergic interstitial nephritis
- Systemic disease involvement
- No recovery as expected

**Findings:**
- ATN: Tubular injury, loss of brush border, casts
- AIN: Interstitial infiltrate, tubulitis
- GN: Glomerular hypercellularity, crescents
- Vasculitis: Vessel inflammation, necrosis
- TMA: Thrombi in glomerular capillaries`,
      keyTerms: [
        { term: 'FeUrea', definition: 'Fractional excretion of urea; more reliable than FeNa with diuretic use' },
        { term: 'muddy brown casts', definition: 'Granular casts containing degenerated tubular cells; hallmark of ATN' },
        { term: 'tubulitis', definition: 'Inflammatory cells infiltrating tubular epithelium; seen in AIN' },
        { term: 'hepatorenal syndrome', definition: 'Functional AKI in advanced liver disease due to renal vasoconstriction' },
        { term: 'rhabdomyolysis', definition: 'Muscle breakdown releasing myoglobin that damages kidneys' },
      ],
      clinicalNotes: 'FeNa is unreliable in patients receiving diuretics - use FeUrea instead (FEUrea < 35% suggests prerenal). Muddy brown granular casts are pathognomonic for ATN. Hepatorenal syndrome is a diagnosis of exclusion - must rule out other causes of AKI in cirrhosis.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive AKI management includes fluid therapy optimization, avoidance of nephrotoxins, pharmacological prevention strategies, renal replacement therapy indications, and prevention of AKI-to-CKD transition.',
      explanation: `**Fluid Management:**

**Prerenal AKI:**
- Fluid challenge if hypovolemic
- Isotonic crystalloids (NS or LR)
- Monitor response (urine output, creatinine)
- Avoid fluid overload

**ATN:**
- Match intake to output + insensible losses
- Avoid both hypovolemia and overload
- Fluid overload associated with worse outcomes
- CRRT may be needed for volume control

**Nephrotoxin Avoidance:**
- Adjust drug doses for renal function
- Avoid NSAIDs
- Avoid IV contrast if possible
- Aminoglycoside alternatives
- Liposomal amphotericin preferred

**Prevention Strategies:**

**Contrast-Induced AKI:**
- IV isotonic fluids before and after
- Minimize contrast volume
- Hold metformin 48 hours
- N-acetylcysteine (limited evidence)
- Consider bicarbonate (controversial)

**Perioperative AKI:**
- Avoid hypotension
- Goal-directed therapy
- Avoid hydroxyethyl starch
- Maintain adequate volume

**Pharmacological Agents:**

**Loop Diuretics:**
- Do not prevent or treat AKI
- May help with fluid management
- High-dose may cause harm

**Dopamine:**
- Not beneficial
- May cause harm
- Do not use "renal dose"

**Fenoldopam:**
- Selective dopamine-1 agonist
- No proven benefit

**Atrial Natriuretic Peptide:**
- No proven benefit

**Renal Replacement Therapy:**

**Indications (AEIOU):**
- **A**cidosis (refractory)
- **E**lectrolytes (hyperkalemia)
- **I**ntoxications (lithium, methanol, etc.)
- **O**verload (fluid, pulmonary edema)
- **U**remia (pericarditis, encephalopathy, bleeding)

**Modalities:**
- **Intermittent HD:** Hemodynamically stable
- **CRRT:** ICU, hemodynamic instability
- **SLED:** Hybrid approach
- **Peritoneal dialysis:** Limited AKI use

**Timing:**
- Earlier vs later trials show mixed results
- Initiate when refractory to medical therapy
- Consider cumulative indications

**Biomarkers in AKI:**

**Serum:**
- NGAL: Early marker (2 hours)
- Cystatin C: Alternative GFR marker
- Procalcitonin: Distinguish sepsis

**Urine:**
- NGAL: Tubular injury marker
- KIM-1: Proximal tubule injury
- L-FABP: Tubular injury
- IGFBP7 x TIMP-2: Cell cycle arrest markers (FDA approved)

**AKI to CKD Transition:**

**Risk Factors:**
- Severity and duration of AKI
- Incomplete recovery
- Pre-existing CKD
- Older age
- Diabetes

**Mechanisms:**
- Maladaptive repair
- Senescence (p16, p53)
- Persistent inflammation
- Fibrosis

**Prevention:**
- Avoid repeated insults
- Optimize control of risk factors
- Close follow-up after AKI
- Nephrology referral if not recovering

**Long-Term Outcomes:**
- 25% of AKI survivors have CKD
- Increased cardiovascular risk
- Higher mortality
- Need for ongoing monitoring

**Specific Clinical Scenarios:**

**Cardiac Surgery-Associated AKI:**
- Common (up to 30%)
- Risk factors: Low EF, prolonged CPB
- Prevention: Avoid anemia, maintain perfusion
- No proven pharmacological prevention

**Sepsis-Associated AKI:**
- Optimize hemodynamics
- Source control
- Avoid nephrotoxins
- Timely antibiotics

**Drug-Induced AIN:**
- Stop offending drug
- Steroids if severe (controversial)
- Recovery may take weeks to months
- Never rechallenge with culprit drug

**Thrombotic Microangiopathy:**
- TTP: ADAMTS13 deficiency
- aHUS: Complement dysregulation (eculizumab)
- HUS: Shiga toxin (STEC), complement
- DIC, malignant hypertension
- APLA syndrome`,
      keyTerms: [
        { term: 'maladaptive repair', definition: 'Incomplete tubule regeneration leading to fibrosis and CKD after AKI' },
        { term: 'cell cycle arrest', definition: 'Tubular cells in G1 arrest; IGFBP7 and TIMP-2 mark this state' },
        { term: 'goal-directed therapy', definition: 'Hemodynamic optimization using cardiac output monitoring' },
        { term: 'contrast-induced AKI', definition: 'AKI following iodinated contrast administration' },
        { term: 'thrombotic microangiopathy', definition: 'Microvascular occlusion causing hemolysis and organ injury' },
      ],
      clinicalNotes: 'Do not use "renal dose dopamine" - it does not work and may cause harm. Loop diuretics do not prevent or treat AKI but may help with fluid management. Close follow-up after AKI is critical - 25% of survivors develop CKD. Cell cycle arrest markers ([TIMP-2] x [IGFBP7]) are FDA approved for predicting AKI risk.',
    },
    5: {
      level: 5,
      summary: 'Advanced AKI management encompasses critical care nephrology, biomarker-guided therapy, precision medicine approaches, novel therapeutic targets, and quality improvement initiatives to reduce hospital-acquired AKI.',
      explanation: `**Critical Care Nephrology:**

**Timing of RRT Initiation:**
- STARRT-AKI: No benefit to accelerated initiation
- AKIKI: Similar findings
- Standard: Traditional indications
- Individualize based on cumulative factors

**Anticoagulation for CRRT:**
- Regional citrate anticoagulation preferred
- Less bleeding than heparin
- Requires calcium replacement
- Monitor for citrate accumulation (liver failure)

**CRRT Dosing:**
- Effluent rate 20-25 mL/kg/hour
- Adjust for predilution
- Circuit life important

**Precision Medicine in AKI:**

**Subphenotypes:**
- Endotypes based on biomarkers
- Trajectory-based classification
- Predictive enrichment

**Pharmacogenomics:**
- Vancomycin nephrotoxicity risk
- Statins and CK
- ACE inhibitor response

**Biomarker-Guided Trials:**
- Standard of care vs biomarker-guided
- Enrichment strategies
- Adaptive trial design

**Emerging Therapeutics:**

**Stem Cells:**
- Mesenchymal stem cells
- Exosomes
- Anti-inflammatory, pro-repair
- Clinical trials ongoing

**Mitochondrial-Targeted Therapy:**
- SS-31 (elamipretide)
- Protects mitochondria
- Ischemia-reperfusion models

**Anti-Inflammatory Agents:**
- IL-6 inhibitors
- Complement inhibitors
- HMGB1 inhibitors

**Repair Enhancement:**
- HGF (hepatocyte growth factor)
- BMP-7
- Wnt pathway modulation

**Quality Improvement:**

**AKI Bundles:**
- Stop nephrotoxins
- Optimize volume status
- Avoid hyperosmolar agents
- Monitor creatinine
- Consult nephrology early

**Electronic Alerts:**
- KDIGO stage-based alerts
- Care bundle triggers
- Mixed results on outcomes

**Checklists:**
- Perioperative AKI prevention
- Contrast administration
- Medication dosing

**Health Services Research:**

**Disparities:**
- Racial/ethnic differences in AKI rates
- Access to RRT
- Outcome differences
- Social determinants

**Costs:**
- AKI increases hospital costs
- Long-term costs of CKD
- Economic burden

**Long-Term Follow-Up:**
- Nephrology referral post-AKI
- CKD surveillance
- Cardiovascular risk reduction
- Medication reconciliation

**Novel Research Directions:**

**Single-Cell Analysis:**
- Cell-specific injury signatures
- Repair mechanisms
- Drug targets

**Organoids:**
- Kidney organoids for drug testing
- Disease modeling
- Personalized medicine

**Wearable Devices:**
- Continuous creatinine monitoring (emerging)
- Urine output sensors
- Early detection

**Artificial Intelligence:**
- AKI prediction models
- Risk stratification
- Resource allocation
- Deep learning for diagnosis

**Global AKI:**

**Community-Acquired AKI:**
- More common in developing world
- Diarrheal diseases
- Snake bites
- Herbal toxins
- Obstetric causes

**Prevention Strategies:**
- Oral rehydration
- Community education
- Early recognition

**ISN 0by25 Initiative:**
- Goal: Zero preventable AKI deaths by 2025
- Global advocacy
- Education and training
- Resource-limited settings

**Future Directions:**

**Prevention:**
- Better risk stratification
- Targeted interventions
- Personalized bundles

**Diagnosis:**
- Point-of-care biomarkers
- Rapid assessment tools
- Machine learning integration

**Treatment:**
- Disease-modifying therapies
- Regenerative medicine
- Precision approaches

**Recovery:**
- Accelerate repair
- Prevent CKD transition
- Long-term optimization`,
      keyTerms: [
        { term: 'endotype', definition: 'Biological subtype of disease based on molecular characteristics' },
        { term: 'regional citrate anticoagulation', definition: 'Using citrate to anticoagulate CRRT circuit; requires calcium replacement' },
        { term: '0by25', definition: 'ISN initiative to eliminate preventable deaths from AKI by 2025' },
        { term: 'care bundle', definition: 'Set of evidence-based practices performed together to improve outcomes' },
        { term: 'elamipretide', definition: 'Mitochondria-targeted peptide (SS-31) being studied for AKI protection' },
      ],
      clinicalNotes: `Advanced AKI management pearls:
1. Regional citrate anticoagulation is preferred for CRRT - less bleeding than heparin but requires careful monitoring for citrate accumulation in liver failure
2. Large trials (STARRT-AKI, AKIKI) showed no benefit to accelerated RRT initiation - wait for traditional indications or cumulative criteria
3. AKI endotypes based on biomarkers may predict treatment response - precision medicine approaches being tested
4. 25-50% of AKI survivors develop CKD - post-AKI follow-up is essential but often neglected
5. Mesenchymal stem cells and exosomes show promise for AKI treatment but need larger trials
6. The ISN 0by25 initiative highlights that most AKI deaths are preventable with basic interventions like hydration`,
    },
  },

  media: [
    {
      id: 'atn-biopsy',
      type: 'histology',
      filename: 'acute-tubular-necrosis.jpg',
      title: 'Acute Tubular Necrosis Biopsy',
      description: 'Light microscopy showing tubular epithelial injury and casts',
    },
  ],

  citations: [
    {
      id: 'kdigo-aki',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury',
      source: 'Kidney International',
    },
    {
      id: 'hoste-aki',
      type: 'article',
      title: 'Epidemiology of Acute Kidney Injury in Critically Ill Patients',
      source: 'Critical Care',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'parent', label: 'Nephron Structure' },
    { targetId: 'histology-renal-tubules', targetType: 'structure', relationship: 'related', label: 'Renal Tubules' },
    { targetId: 'pathology-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['pathology', 'clinical', 'emergency', 'critical-care'],
    keywords: ['acute kidney injury', 'AKI', 'ATN', 'nephrotoxicity', 'renal failure'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acuteKidneyInjury;
