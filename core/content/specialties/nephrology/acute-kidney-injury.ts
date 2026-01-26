/**
 * Acute Kidney Injury (AKI) - Comprehensive Educational Content
 *
 * Covers prerenal, intrinsic (ATN, AIN, glomerular), and postrenal causes
 * with pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const acuteKidneyInjury: EducationalContent = {
  id: 'condition-acute-kidney-injury',
  type: 'condition',
  name: 'Acute Kidney Injury',
  alternateNames: ['AKI', 'Acute Renal Failure', 'ARF', 'Acute Kidney Failure'],

  levels: {
    1: {
      level: 1,
      summary: 'Acute kidney injury is when your kidneys suddenly stop working properly and cannot filter waste from your blood.',
      explanation: `Imagine your kidneys are like the filters in a fish tank. They clean your blood all day long, removing waste and extra water to make urine. Acute kidney injury (AKI) happens when something causes these filters to suddenly stop working well.

There are three main reasons this can happen:

**1. Not Enough Blood Flow (Prerenal)**
Think of it like a drought - your kidneys need blood to filter, but if they don't get enough blood (like from being very dehydrated or losing a lot of blood), they can't do their job.

**2. Damage to the Kidneys Themselves (Intrinsic)**
Sometimes the kidney filters themselves get hurt. This can happen from certain medicines, infections, or not getting enough oxygen.

**3. Blocked Pipes (Postrenal)**
If the tubes that carry urine from your kidneys to your bladder get blocked (like by a kidney stone), urine backs up and the kidneys can't work properly.

When kidneys aren't working, waste products build up in your blood. Signs include:
- Making less urine or none at all
- Swelling in your legs or feet
- Feeling very tired
- Feeling confused or foggy

The good news is that with quick treatment, many people's kidneys can recover completely!`,
      keyTerms: [
        { term: 'acute', definition: 'Happening suddenly, over hours to days' },
        { term: 'kidney injury', definition: 'When your kidneys are hurt and cannot filter blood well' },
        { term: 'urine', definition: 'The liquid waste (pee) your kidneys make' },
        { term: 'dehydration', definition: 'Not having enough water in your body' },
      ],
      analogies: [
        'AKI is like a coffee maker that suddenly stops working - it might be unplugged (not enough blood), the filter might be clogged (kidney damage), or the pot might be blocked (obstruction).',
        'Your kidneys are like a water treatment plant. AKI happens when the plant suddenly shuts down and waste starts building up.',
      ],
      examples: [
        'A person who has severe vomiting and diarrhea might develop AKI because they lose too much fluid.',
        'Someone taking certain pain medications for too long might hurt their kidneys.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acute kidney injury (AKI) is a rapid decline in kidney function occurring over hours to days, classified by KDIGO criteria and categorized as prerenal, intrinsic, or postrenal based on the underlying cause.',
      explanation: `Acute kidney injury (AKI) is defined as a sudden decrease in kidney function, typically occurring within 48 hours to 7 days. It's diagnosed using the KDIGO criteria:

**KDIGO AKI Staging:**
- **Stage 1**: Creatinine rise 1.5-1.9x baseline OR ≥0.3 mg/dL increase OR urine output <0.5 mL/kg/hr for 6-12 hours
- **Stage 2**: Creatinine rise 2.0-2.9x baseline OR urine output <0.5 mL/kg/hr for ≥12 hours
- **Stage 3**: Creatinine rise ≥3x baseline OR creatinine ≥4.0 mg/dL OR initiation of dialysis OR urine output <0.3 mL/kg/hr for ≥24 hours OR anuria for ≥12 hours

## Types of AKI

**1. Prerenal AKI (55-60% of cases)**
The kidneys themselves are healthy, but they don't receive enough blood flow. This can be due to:
- Hypovolemia (dehydration, bleeding, vomiting/diarrhea)
- Decreased cardiac output (heart failure)
- Vasodilation (sepsis, liver failure)
- Medications that affect kidney blood flow (NSAIDs, ACE inhibitors)

The kidneys respond by conserving sodium and water, so urine is very concentrated with low sodium.

**2. Intrinsic AKI (35-40% of cases)**
Direct damage to kidney tissue:
- **Acute Tubular Necrosis (ATN)**: Most common; caused by ischemia or nephrotoxins
- **Acute Interstitial Nephritis (AIN)**: Often drug-induced, allergic reaction in kidney
- **Glomerulonephritis**: Inflammation of the filtering units
- **Vascular**: Blood clots or inflammation of kidney blood vessels

**3. Postrenal AKI (5-10% of cases)**
Obstruction of urine flow:
- Kidney stones
- Enlarged prostate (BPH)
- Tumors
- Blood clots in the urinary tract

## Key Lab Tests

| Test | Prerenal | Intrinsic (ATN) |
|------|----------|-----------------|
| BUN/Creatinine ratio | >20:1 | <15:1 |
| Urine sodium (FENa) | <1% | >2% |
| Urine osmolality | >500 mOsm/kg | <350 mOsm/kg |
| Urine sediment | Normal/hyaline casts | Muddy brown casts |

Treatment depends on the type: fluids for prerenal, removing the cause for intrinsic, and relieving the blockage for postrenal.`,
      keyTerms: [
        { term: 'creatinine', definition: 'A waste product from muscles that kidneys normally filter out; rises when kidneys fail', pronunciation: 'kree-AT-ih-neen' },
        { term: 'BUN', definition: 'Blood Urea Nitrogen; another waste product that builds up when kidneys fail' },
        { term: 'oliguria', definition: 'Making less than 400 mL of urine per day', pronunciation: 'ol-ih-GYOOR-ee-uh' },
        { term: 'ATN', definition: 'Acute Tubular Necrosis; death of the kidney tube cells' },
        { term: 'FENa', definition: 'Fractional Excretion of Sodium; helps tell prerenal from intrinsic AKI' },
        { term: 'KDIGO', definition: 'Kidney Disease Improving Global Outcomes; organization that sets AKI criteria' },
      ],
      analogies: [
        'Prerenal AKI is like a pump that works but has no water to pump. Intrinsic AKI is like a broken pump. Postrenal is like a working pump with a blocked drain.',
      ],
    },
    3: {
      level: 3,
      summary: 'AKI involves complex pathophysiology including tubular injury, microvascular dysfunction, and inflammatory cascades, with diagnosis requiring integration of clinical context, laboratory indices, and imaging findings.',
      explanation: `## Pathophysiology of AKI

### Prerenal AKI
Decreased renal perfusion triggers autoregulatory mechanisms:
- Afferent arteriolar vasodilation (prostaglandins)
- Efferent arteriolar vasoconstriction (angiotensin II)
- ADH and aldosterone release for sodium/water retention

If hypoperfusion persists beyond autoregulatory capacity (MAP <60-65 mmHg), ischemic ATN develops.

**Drugs affecting autoregulation:**
- NSAIDs: Block prostaglandin-mediated afferent dilation
- ACEi/ARBs: Block angiotensin II-mediated efferent constriction
- These are particularly harmful in volume-depleted states

### Intrinsic AKI - Acute Tubular Necrosis (ATN)

**Ischemic ATN Pathophysiology:**
1. **Initiation phase**: ATP depletion → disruption of Na+/K+-ATPase → cell swelling
2. **Extension phase**: Ongoing hypoxia → inflammatory cell infiltration
3. **Maintenance phase**: GFR reduced; tubular cell regeneration begins
4. **Recovery phase**: Tubular regeneration; polyuric phase

**Nephrotoxic ATN:**
- Aminoglycosides: Accumulate in proximal tubules, cause apoptosis
- Contrast agents: Direct cytotoxicity + vasoconstriction
- Myoglobin (rhabdomyolysis): Precipitates in tubules, generates ROS
- Cisplatin: Proximal tubular necrosis

**S3 Segment Vulnerability:**
The S3 segment of the proximal tubule (in outer medulla) is most susceptible to ischemia due to:
- High metabolic demand
- Low oxygen tension in outer medulla
- Countercurrent exchange maintains hypoxia

### Acute Interstitial Nephritis (AIN)
- Type IV hypersensitivity reaction to drugs (most common), infections, or autoimmune disease
- Classic triad (present in ~30%): Fever, rash, eosinophilia
- Drug causes: Beta-lactams, PPIs, NSAIDs, sulfonamides, allopurinol

### Diagnostic Workup

**Laboratory Assessment:**
- Basic metabolic panel (creatinine, BUN, electrolytes)
- Urinalysis with microscopy
- FENa or FEUrea (if on diuretics)
- Complete blood count
- Creatine kinase (if rhabdomyolysis suspected)

**Urinalysis Findings:**
| Type | Urine Findings |
|------|----------------|
| Prerenal | Bland sediment, hyaline casts |
| ATN | Muddy brown granular casts, epithelial cell casts |
| AIN | WBC casts, eosinophiluria, sterile pyuria |
| Glomerulonephritis | RBC casts, dysmorphic RBCs, proteinuria |
| Postrenal | May be normal or show crystals |

**Imaging:**
- Renal ultrasound: Assess size, echogenicity, hydronephrosis
- CT without contrast: For stones or masses
- Doppler ultrasound: Vascular causes

**FENa Calculation:**
FENa (%) = (UNa × PCr) / (PNa × UCr) × 100

Limitations:
- Unreliable with diuretics (use FEUrea instead)
- May be low in contrast nephropathy, rhabdomyolysis, early ATN
- May be elevated in pre-existing CKD

### Novel Biomarkers
- **NGAL**: Rises 2-4 hours after injury (vs 24-48 hours for creatinine)
- **KIM-1**: Specific for proximal tubular injury
- **IL-18**: Marker of ATN
- **[TIMP-2] × [IGFBP7]**: FDA-approved for AKI risk prediction`,
      keyTerms: [
        { term: 'muddy brown casts', definition: 'Pigmented granular casts from necrotic tubular epithelial cells; pathognomonic for ATN' },
        { term: 'FEUrea', definition: 'Fractional Excretion of Urea; more reliable than FENa when patient is on diuretics' },
        { term: 'NGAL', definition: 'Neutrophil Gelatinase-Associated Lipocalin; early biomarker of tubular injury' },
        { term: 'S3 segment', definition: 'Portion of proximal tubule in outer medulla; most vulnerable to ischemic injury' },
        { term: 'dysmorphic RBCs', definition: 'Distorted red blood cells indicating glomerular origin of hematuria' },
        { term: 'autoregulation', definition: 'Kidney\'s ability to maintain stable GFR despite changes in blood pressure' },
      ],
      clinicalNotes: 'Always check medications and recent contrast exposure. FENa <1% can be seen in early ATN, contrast nephropathy, and rhabdomyolysis. Renal ultrasound should be obtained within 24-48 hours in all AKI to rule out obstruction.',
    },
    4: {
      level: 4,
      summary: 'Advanced AKI management requires understanding of hemodynamic targets, nephrotoxin avoidance, renal replacement therapy indications, and recognition of special populations including hepatorenal syndrome, cardiorenal syndrome, and AKI in critical illness.',
      explanation: `## Advanced Pathophysiology

### Microvascular Dysfunction in AKI
- Endothelial activation and leukocyte adhesion
- Loss of endothelial glycocalyx
- Microvascular thrombosis
- Impaired microcirculatory flow despite adequate macrocirculation
- Extension of injury beyond initial insult

### Maladaptive Repair and AKI-to-CKD Transition
- Incomplete tubular regeneration
- G2/M cell cycle arrest in tubular cells
- Profibrotic TGF-β signaling
- Myofibroblast activation
- Capillary rarefaction in medulla
- ~25% of AKI patients develop CKD within 3 years

## Specific AKI Syndromes

### Contrast-Induced AKI (CI-AKI)
- Incidence: 2-7% in general population; up to 50% in high-risk patients
- Risk factors: Pre-existing CKD (eGFR <60), diabetes, heart failure, high contrast volume, hypotension
- Pathophysiology: Direct cytotoxicity + outer medullary vasoconstriction
- Timeline: Creatinine rises 24-48 hours, peaks 3-5 days, recovers 7-14 days
- Prevention:
  - IV normal saline (1 mL/kg/hr × 12 hours pre/post)
  - Minimize contrast volume (contrast/eGFR <3)
  - Hold metformin (risk of lactic acidosis if AKI develops)
  - Avoid concurrent nephrotoxins
- No proven benefit: N-acetylcysteine, sodium bicarbonate

### Rhabdomyolysis-Induced AKI
- Triad: Elevated CK (often >10,000 U/L), myoglobinuria, AKI
- Mechanisms:
  - Myoglobin precipitation (especially in acidic urine)
  - Direct proximal tubular toxicity
  - Afferent arteriolar vasoconstriction
  - Intravascular volume depletion from fluid sequestration
- Management:
  - Aggressive IV crystalloid (target UOP 200-300 mL/hr)
  - Bicarbonate controversial (theoretically prevents myoglobin precipitation)
  - Monitor for hyperkalemia, hypocalcemia, compartment syndrome

### Hepatorenal Syndrome (HRS)
- Functional renal failure in advanced cirrhosis
- Type 1 HRS: Rapidly progressive (doubling of creatinine to >2.5 mg/dL in <2 weeks)
- Type 2 HRS: Gradual decline, often with refractory ascites
- Pathophysiology: Splanchnic vasodilation → compensatory renal vasoconstriction
- Diagnostic criteria: Cirrhosis with ascites, AKI, no response to albumin challenge, no shock/nephrotoxins, no proteinuria/hematuria
- Treatment:
  - Albumin 1 g/kg on day 1, then 20-40 g/day
  - Vasoconstrictors: Terlipressin (first-line outside US), norepinephrine, or midodrine + octreotide
  - Definitive treatment: Liver transplant

### Cardiorenal Syndrome
**Type 1**: Acute heart failure → AKI
- Mechanisms: Venous congestion, reduced cardiac output, neurohormonal activation
- Management: Loop diuretics (continuous infusion may be superior), ultrafiltration if diuretic-resistant

**Type 3**: AKI → Acute cardiac dysfunction
- Volume overload → pulmonary edema
- Uremia → pericarditis, arrhythmias
- Electrolyte disturbances

**Type 5**: Systemic conditions (sepsis) affecting both

## Renal Replacement Therapy (RRT) in AKI

### Indications for Urgent RRT
**"AEIOU" mnemonic:**
- **A**cidosis: Severe metabolic acidosis (pH <7.1) refractory to bicarbonate
- **E**lectrolytes: Refractory hyperkalemia (>6.5 mEq/L despite medical management)
- **I**ngestions: Toxic alcohols (methanol, ethylene glycol), lithium, salicylates
- **O**verload: Refractory volume overload with pulmonary edema
- **U**remia: Encephalopathy, pericarditis, bleeding diathesis

### Timing of RRT Initiation
- STARRT-AKI trial (2020): No benefit to early initiation (KDIGO stage 2-3) vs. delayed (standard indications)
- AKIKI-2 trial (2021): Delayed strategy had more complications; "very delayed" strategy not recommended
- Current practice: Initiate when urgent indications present or clinical trajectory deteriorating

### RRT Modality Selection in AKI
| Modality | Advantages | Disadvantages |
|----------|------------|---------------|
| Intermittent HD | Rapid correction, efficient | Hemodynamic instability |
| CRRT | Hemodynamically stable | ICU-only, higher cost, anticoagulation |
| SLED/PIRRT | Middle ground | Less experience |

**CRRT preferred in:**
- Hemodynamic instability
- Cerebral edema/intracranial hypertension
- Severe volume overload requiring gradual removal
- Hepatic failure (citrate anticoagulation)`,
      keyTerms: [
        { term: 'hepatorenal syndrome', definition: 'Functional AKI in advanced cirrhosis due to extreme renal vasoconstriction; requires liver transplant for definitive cure' },
        { term: 'cardiorenal syndrome', definition: 'Bidirectional heart-kidney interaction where dysfunction in one precipitates dysfunction in the other' },
        { term: 'CI-AKI', definition: 'Contrast-Induced AKI; rises 24-48 hours post-contrast, peaks at 3-5 days' },
        { term: 'CRRT', definition: 'Continuous Renal Replacement Therapy; slow, continuous dialysis for hemodynamically unstable patients' },
        { term: 'STARRT-AKI', definition: 'Landmark 2020 trial showing no benefit to early RRT initiation in AKI' },
        { term: 'terlipressin', definition: 'Vasopressin analog used in hepatorenal syndrome; causes splanchnic vasoconstriction' },
        { term: 'capillary rarefaction', definition: 'Loss of microvascular density contributing to AKI-to-CKD transition' },
      ],
      clinicalNotes: 'In septic AKI, hemodynamic targets (MAP >65 mmHg) take priority. Avoid nephrotoxins aggressively. Consider HRS in any cirrhotic patient with AKI - albumin challenge is diagnostic and therapeutic. RRT timing remains controversial; follow clinical trajectory rather than arbitrary thresholds.',
    },
    5: {
      level: 5,
      summary: 'Optimal AKI care integrates molecular biomarkers for subphenotyping, precision nephrology approaches, emerging therapeutics targeting cellular injury pathways, and systems-based quality improvement to reduce AKI incidence and improve outcomes.',
      explanation: `## Molecular Subphenotyping of AKI

### Biomarker-Based Classification
Traditional AKI staging (KDIGO) does not distinguish injury patterns. Novel biomarkers enable subclassification:

**Damage Biomarkers:**
- KIM-1, NGAL, L-FABP: Indicate tubular injury regardless of creatinine
- May identify "subclinical AKI" (biomarker positive, creatinine negative)
- TRIBE-AKI consortium data: Biomarker-positive/creatinine-negative patients have worse outcomes than biomarker-negative

**Functional Biomarkers:**
- Creatinine, cystatin C: Reflect GFR decline
- Time lag limits early detection

**Stress Biomarkers:**
- [TIMP-2] × [IGFBP7] (NephroCheck): FDA-approved for AKI risk stratification in ICU
- Identifies G1 cell cycle arrest - precedes manifest injury
- High negative predictive value; can guide AKI bundle implementation

### AKI Subphenotypes
Research identifies distinct subphenotypes with different outcomes:
- **Subphenotype 1**: Hyperinflammatory, high IL-6/TNF-α, higher mortality
- **Subphenotype 2**: Hypoinflammatory, lower mortality
- Implications for targeted therapy (e.g., anti-inflammatory agents may benefit subphenotype 1)

## Emerging Therapeutics

### Targeting Injury Pathways

**Ischemia-Reperfusion Injury:**
- Mitochondrial protection: MitoQ, SS-31 (elamipretide)
- Ferroptosis inhibitors: Ferrostatin-1, liproxstatin
- RIPK1 inhibitors: Necrostatin-1

**Inflammation:**
- Selective JAK inhibitors
- Anti-IL-17 agents
- Regulatory T-cell therapies

**Cell Cycle Arrest:**
- Senolytic agents to clear G2/M-arrested tubular cells
- May reduce AKI-to-CKD progression

**Regeneration Enhancement:**
- Mesenchymal stem cell therapy (MSC): Phase 2 trials ongoing
- Extracellular vesicles from MSCs
- Growth factors: HGF, EGF

### Current Evidence and Guidelines

**Pharmacologic Interventions (No Evidence of Benefit):**
- Loop diuretics: Do not prevent or treat AKI; may be used for volume management
- Dopamine ("renal dose"): No benefit, potentially harmful
- Fenoldopam: Initial promise not confirmed in larger trials
- Atrial natriuretic peptide: No benefit

**Evidence-Based Prevention:**
- Volume resuscitation in prerenal states
- Nephrotoxin avoidance
- Glycemic control in postoperative patients
- Goal-directed hemodynamic therapy in high-risk surgery

## Quality Improvement and Systems Approaches

### AKI Electronic Alert Systems
- Automated creatinine-based alerts to clinicians
- Mixed evidence: Some studies show improved recognition, others no mortality benefit
- Key: Alerts must be paired with actionable response pathways

### AKI Care Bundles
**Example bundle (implemented at multiple institutions):**
1. Volume status assessment
2. Hold/avoid nephrotoxins (NSAIDs, aminoglycosides, contrast)
3. Avoid hyperglycemia
4. Consider need for diagnostic workup
5. Pharmacist medication review
6. Consider nephrology consultation

Studies show 30-40% reduction in AKI progression with bundle adherence.

### KDIGO "AKI-0" Care Bundle for Prevention
In high-risk patients (surgery, contrast exposure, sepsis):
- Discontinue nephrotoxins when possible
- Ensure volume status and perfusion pressure
- Consider functional hemodynamic monitoring
- Monitor creatinine and urine output
- Avoid hyperglycemia
- Consider alternatives to contrast procedures

## Special Populations

### AKI in COVID-19
- Incidence: 20-40% of hospitalized patients, up to 70% in ICU
- Mechanisms: Direct viral injury (ACE2 on tubular cells), cytokine storm, hypercoagulability, nephrotoxins
- Associated with 3-fold higher mortality
- Histology: Primarily ATN, some collapsing glomerulopathy (especially APOL1 risk variants)

### AKI in Oncology
- Tumor lysis syndrome: Uric acid and phosphate precipitation; prevent with hydration + rasburicase
- Cisplatin nephrotoxicity: Proximal tubule; magnesium wasting common
- Immune checkpoint inhibitor AKI: Usually AIN; may respond to steroids
- CAR-T associated AKI: Cytokine release syndrome, tumor lysis

### Pediatric AKI
- Different reference ranges for creatinine (muscle-mass dependent)
- pRIFLE and KDIGO criteria adapted for children
- Neonatal AKI: Distinct pathophysiology; SCr initially reflects maternal levels

## Prognosis and Long-Term Outcomes

### AKI as a Risk Factor for CKD
- Even "recovered" AKI increases CKD risk 2-3 fold
- Dose-response relationship: More severe AKI → higher CKD risk
- Multiple AKI episodes compound risk

### Post-AKI Follow-up Recommendations
**KDIGO guidelines suggest:**
- Nephrology follow-up at 3 months for KDIGO stage 2-3 AKI
- Assess for CKD development (eGFR, proteinuria)
- Medication reconciliation (restart held medications appropriately)
- Patient education on AKI recurrence risk

**Recommended post-AKI monitoring:**
| Timepoint | Assessment |
|-----------|------------|
| 2-4 weeks | Creatinine, electrolytes, medication review |
| 3 months | eGFR, UACR, blood pressure |
| 12 months | Reassess kidney function; nephrology if persistent CKD |

## Future Directions

1. **Precision AKI**: Biomarker-guided subphenotyping for targeted therapy
2. **AI/ML for AKI prediction**: Continuous vital sign monitoring for early detection
3. **Regenerative therapies**: Stem cells, extracellular vesicles
4. **Targeted drug delivery**: Nanoparticle-based renal-specific delivery
5. **Wearable technology**: Continuous creatinine monitoring (in development)`,
      keyTerms: [
        { term: 'NephroCheck', definition: 'FDA-approved urinary biomarker test ([TIMP-2]×[IGFBP7]) for AKI risk stratification in ICU patients' },
        { term: 'subclinical AKI', definition: 'Tubular injury (biomarker positive) without creatinine rise; associated with worse outcomes' },
        { term: 'AKI subphenotypes', definition: 'Molecular classifications (hyperinflammatory vs hypoinflammatory) that may guide targeted therapy' },
        { term: 'ferroptosis', definition: 'Iron-dependent regulated cell death implicated in ischemic AKI; potential therapeutic target' },
        { term: 'senolytic', definition: 'Agent that selectively eliminates senescent cells; may reduce AKI-to-CKD progression' },
        { term: 'AKI care bundle', definition: 'Standardized set of evidence-based interventions shown to reduce AKI progression when implemented together' },
        { term: 'pRIFLE', definition: 'Pediatric version of AKI staging criteria adapted for children' },
      ],
      clinicalNotes: `Key clinical pearls for nephrology practice:
1. Biomarker-positive/creatinine-negative AKI has prognostic significance - don't dismiss normal creatinine in high-risk patients
2. Post-AKI follow-up is critical but often missed - establish systems for 3-month nephrology referral
3. AKI care bundles work when adherence is monitored; consider quality improvement initiatives
4. In oncology patients, always consider checkpoint inhibitor-AIN; trial of steroids may be warranted
5. COVID-19 AKI in patients with APOL1 risk variants may present as collapsing FSGS
6. The AKI-to-CKD transition is not inevitable - aggressive risk factor modification post-AKI may reduce progression`,
    },
  },

  media: [
    {
      id: 'aki-classification-diagram',
      type: 'diagram',
      filename: 'aki-classification.svg',
      title: 'AKI Classification: Prerenal, Intrinsic, Postrenal',
      description: 'Flowchart showing the three main categories of AKI with causes and lab findings',
    },
    {
      id: 'aki-biomarker-timeline',
      type: 'diagram',
      filename: 'aki-biomarker-timeline.svg',
      title: 'AKI Biomarker Timeline',
      description: 'Temporal relationship between injury biomarkers and creatinine rise',
    },
  ],

  citations: [
    {
      id: 'kdigo-aki-2012',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury',
      authors: ['KDIGO AKI Work Group'],
      source: 'Kidney International Supplements',
      chapter: '2(1)',
      page: '1-138',
      url: 'https://kdigo.org/guidelines/acute-kidney-injury/',
    },
    {
      id: 'starrt-aki-2020',
      type: 'article',
      title: 'Timing of Initiation of Renal-Replacement Therapy in Acute Kidney Injury',
      authors: ['STARRT-AKI Investigators'],
      source: 'New England Journal of Medicine',
      page: '383:240-251',
    },
    {
      id: 'brenner-rector-aki',
      type: 'textbook',
      title: 'Acute Kidney Injury',
      source: 'Brenner and Rector\'s The Kidney',
      chapter: '31-33',
    },
  ],

  crossReferences: [
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD (AKI-to-CKD transition)' },
    { targetId: 'process-dialysis', targetType: 'process', relationship: 'related', label: 'Dialysis' },
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'related', label: 'Nephron Structure' },
    { targetId: 'concept-nephrotoxic-drugs', targetType: 'topic', relationship: 'related', label: 'Nephrotoxic Drugs' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    topics: ['nephrology', 'critical care', 'pathophysiology', 'emergency medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acuteKidneyInjury;
