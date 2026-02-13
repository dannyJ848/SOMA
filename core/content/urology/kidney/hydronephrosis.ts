/**
 * Hydronephrosis - Educational Content
 */

import { EducationalContent } from '../../types';

export const hydronephrosis: EducationalContent = {
  id: 'condition-hydronephrosis',
  type: 'condition',
  name: 'Hydronephrosis',
  alternateNames: ['Kidney Swelling', 'Dilated Kidney', 'Urinary Obstruction'],

  levels: {
    1: {
      level: 1,
      summary: 'Hydronephrosis is swelling of the kidney due to a buildup of urine that cannot drain properly.',
      explanation: `Hydronephrosis means your kidney is swollen because urine is backing up into it.

**What Causes It:**
- Kidney stones blocking the ureter
- Enlarged prostate in men
- Pregnancy (normal, temporary)
- Scarring or narrowing of the tubes
- Tumors pressing on the urinary tract

**Symptoms May Include:**
- Pain in the side or back
- Nausea or vomiting
- Fever (if infected)
- Difficulty urinating
- Blood in urine

**Sometimes No Symptoms:**
- May be found accidentally on imaging
- Chronic blockages can be painless

**Treatment:**
- Depends on the cause
- May need a tube to drain urine
- Surgery to remove blockage
- Treating the underlying cause`,
      keyTerms: [
        { term: 'hydronephrosis', definition: 'Swelling of the kidney due to urine backup' },
        { term: 'obstruction', definition: 'A blockage preventing urine from flowing' },
        { term: 'ureter', definition: 'The tube connecting kidney to bladder that can become blocked' },
      ],
      analogies: [
        'Hydronephrosis is like water backing up behind a clogged drain.',
        'The kidney swells like a water balloon when urine cannot escape.',
      ],
      examples: [
        'A kidney stone stuck in the ureter can cause sudden hydronephrosis with severe pain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hydronephrosis is dilation of the renal pelvis and calyces due to obstruction or vesicoureteral reflux, graded by severity, with management depending on cause and clinical impact.',
      explanation: `## Causes

**Intrinsic Obstruction:**
- Kidney stones
- Ureteral stricture
- UPJ obstruction
- Blood clots

**Extrinsic Compression:**
- Pregnancy
- Retroperitoneal fibrosis
- Tumors (cervix, prostate, colon)
- Lymphadenopathy

**Functional:**
- Vesicoureteral reflux
- Neurogenic bladder

## Grading (SFU System)

**Grade 1:** Mild dilation of renal pelvis only
**Grade 2:** Mild dilation of pelvis and calyces
**Grade 3:** Moderate dilation with normal parenchyma
**Grade 4:** Severe dilation with thinned parenchyma

## Clinical Presentation

**Acute Obstruction:**
- Severe colicky flank pain
- Nausea/vomiting
- Hematuria
- +/- Infection signs

**Chronic Obstruction:**
- May be asymptomatic
- Vague flank discomfort
- Recurrent UTIs
- Declining renal function

## Evaluation

**Ultrasound:**
- First-line imaging
- No radiation
- Identifies dilation

**CT Urogram:**
- Defines cause
- Shows level of obstruction
- Stone detection

**Nuclear Scan (MAG3):**
- Assesses function
- Obstruction vs non-obstructive dilation
- Split renal function`,
      keyTerms: [
        { term: 'SFU grading', definition: 'Society for Fetal Urology classification of hydronephrosis severity' },
        { term: 'UPJ obstruction', definition: 'Ureteropelvic junction obstruction - common congenital cause' },
        { term: 'MAG3 scan', definition: 'Nuclear medicine study assessing kidney function and drainage' },
      ],
      analogies: [
        'Grading hydronephrosis is like describing how full a balloon is - from slightly expanded to ready to pop.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hydronephrosis pathophysiology involves increased intrapelvic pressure, parenchymal atrophy, and renal function decline, requiring differentiation of obstructive from non-obstructive dilation.',
      explanation: `## Pathophysiology

**Acute Obstruction:**
- Increased intrapelvic pressure
- Afferent arteriolar dilation (initially)
- Then vasoconstriction
- Decreased GFR

**Chronic Obstruction:**
- Tubular atrophy
- Interstitial fibrosis
- Parenchymal thinning
- Progressive functional loss

**Recovery Potential:**
- Depends on duration
- <2 weeks: Good recovery
- >6 weeks: Significant irreversible damage
- Partial obstruction: Better prognosis

## Obstructive vs Non-Obstructive

**Diuretic Renography:**
- Furosemide given IV
- Measures washout time
- T1/2 >20 min: Obstructed
- T1/2 <10 min: Non-obstructed
- 10-20 min: Indeterminate

**Whitaker Test:**
- Gold standard (rarely used)
- Antegrade pressure-flow study
- >22 cm H2O with 10 mL/min: Obstructed

## Common Etiologies

**UPJ Obstruction:**
- Congenital most common cause
- Intrinsic stenosis or crossing vessel
- Presents any age
- Pyeloplasty treatment

**Ureteral Stricture:**
- Post-instrumentation
- Post-radiation
- Post-surgical
- Tuberculosis

**Pregnancy:**
- Normal physiologic dilation
- Right > Left (dextrorotated uterus)
- Resolves postpartum

## Management Principles

**Observation Indications:**
- Mild dilation
- Stable function
- Asymptomatic
- Known non-obstructive cause

**Intervention Indications:**
- Symptomatic
- Infected (emergency)
- Declining function
- Severe dilation
- Solitary kidney`,
      keyTerms: [
        { term: 'diuretic renography', definition: 'Nuclear medicine test using furosemide to differentiate obstruction from dilation' },
        { term: 'T1/2', definition: 'Half-time for tracer washout from kidney - key metric in MAG3 scans' },
        { term: 'pyeloplasty', definition: 'Surgical reconstruction of UPJ for obstruction' },
      ],
      clinicalNotes: 'Obstructed kidney with infection (pyonephrosis) is a urologic emergency requiring immediate drainage regardless of time of day.',
    },
    4: {
      level: 4,
      summary: 'Advanced hydronephrosis management includes surgical planning, salvageability assessment, and management of complex cases.',
      explanation: `## Surgical Options

**Endourologic:**
- Ureteral stent placement
- Balloon dilation of stricture
- Endopyelotomy (incision of UPJ)
- Endoureterotomy

**Open/Robotic:**
- Pyeloplasty (UPJ obstruction)
- Ureteral reimplant
- Psoas hitch/Boari flap
- Ileal ureter

**Drainage Procedures:**
- Nephrostomy tube
- Ureteral stent
- Tandem stenting for long strictures

## Assessing Salvageability

**Function Assessment:**
- Split function <10%: Generally not salvageable
- Split function 10-20%: May recover with decompression
- Split function >40%: Good recovery expected

**Trial of Drainage:**
- Nephrostomy x 6-8 weeks
- Repeat MAG3 scan
- Look for function recovery
- Guides definitive management

## Complex Cases

**Bilateral Obstruction:**
- Bladder outlet obstruction (BPH)
- Bilateral stones
- Pelvic malignancy
- Post-obstructive diuresis risk

**Pregnancy:**
- Stent vs nephrostomy
- Change every 4-6 weeks
- Delivery often curative
- Conservative management first

**Retroperitoneal Fibrosis:**
- Often bilateral
- Responds to steroids
- Stenting for acute relief
- Ureterolysis for definitive

## Pediatric Considerations

**Antenatal Hydronephrosis:**
- Common finding (1-2% of pregnancies)
- Most resolve spontaneously
- SFU grade guides follow-up

**Indications for Surgery:**
- Symptomatic
- Worsening dilation
- Declining function
- UTI despite prophylaxis`,
      keyTerms: [
        { term: 'endopyelotomy', definition: 'Endoscopic incision of UPJ stricture' },
        { term: 'post-obstructive diuresis', definition: 'Excessive urine output after relief of bilateral or solitary kidney obstruction' },
        { term: 'ileal ureter', definition: 'Using ileum to replace damaged ureter' },
      ],
      clinicalNotes: 'After relief of bilateral obstruction or solitary kidney obstruction, monitor for post-obstructive diuresis. Replace fluid losses to avoid dehydration while allowing physiologic diuresis.',
    },
    5: {
      level: 5,
      summary: 'Expert hydronephrosis management encompasses minimally invasive reconstruction, transplant considerations, and emerging diagnostic and therapeutic approaches.',
      explanation: `## Minimally Invasive Reconstruction

**Robotic Pyeloplasty:**
- Gold standard for UPJ obstruction
- 95%+ success rate
- Dismembered (Anderson-Hynes) technique
- Transposition of crossing vessel

**Laparoscopic Approaches:**
- Retroperitoneal or transperitoneal
- Steep learning curve
- Equivalent outcomes to robotic

**Endoscopic Management:**
- Antegrade endopyelotomy
- Retrograde laser endopyelotomy
- Lower success than pyeloplasty
- Select patients only

## Complex Reconstruction

**Long Ureteral Defects:**
- Boari flap (bladder tube)
- Psoas hitch
- Transureteroureterostomy
- Ileal ureter substitution
- Autotransplant

**Selection Factors:**
- Defect length
- Bladder capacity
- Prior radiation
- Contralateral kidney status

## Transplant Considerations

**Native Kidney Management:**
- Assess for ongoing issues
- May need nephrectomy
- Reflux management

**Transplant Complications:**
- Ureteral stricture (1-3%)
- Lymphocele compression
- Recurrent hydronephrosis

## Emerging Approaches

**Biomarkers:**
- Urinary NGAL
- KIM-1
- Predict obstruction severity

**Imaging Advances:**
- MR urography
- Functional MRI
- Quantitative assessment

**Tissue Engineering:**
- Tissue-engineered ureters
- Experimental stage
- Future application

## Outcomes and Quality

**Pyeloplasty Success:**
- Symptom resolution
- Improvement in drainage
- Preserved/improved function
- <5% recurrence

**Long-Term Follow-Up:**
- Annual ultrasound
- Nuclear scan if concerns
- Lifelong surveillance
- Late failures rare but occur

**Quality Metrics:**
- Conversion rate
- Complication rate
- Reoperation rate
- Functional outcomes`,
      keyTerms: [
        { term: 'Anderson-Hynes pyeloplasty', definition: 'Dismembered technique for UPJ reconstruction with excision and reanastomosis' },
        { term: 'autotransplant', definition: 'Moving kidney to iliac fossa to shorten needed ureter length' },
        { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin - biomarker of kidney injury' },
      ],
      clinicalNotes: 'Robotic pyeloplasty has become the standard approach for UPJ obstruction in adults. Endopyelotomy has lower success rates but may be considered for redo cases or poor surgical candidates.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-upj-guidelines',
      type: 'article',
      title: 'Management of UPJ Obstruction',
      source: 'AUA Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'condition-kidney-stones', targetType: 'condition', relationship: 'related', label: 'Kidney Stones' },
  ],
  tags: {
    systems: ['urinary', 'renal'],
    topics: ['obstruction', 'hydronephrosis'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hydronephrosis;
