/**
 * Kidney Infections - Educational Content
 */

import { EducationalContent } from '../../types';

export const kidneyInfections: EducationalContent = {
  id: 'condition-kidney-infections',
  type: 'condition',
  name: 'Kidney Infections',
  alternateNames: ['Pyelonephritis', 'Upper UTI', 'Kidney Infection'],

  levels: {
    1: {
      level: 1,
      summary: 'A kidney infection is a serious type of urinary tract infection that occurs when bacteria travel up to one or both kidneys.',
      explanation: `A kidney infection (called pyelonephritis) is more serious than a regular bladder infection. It needs treatment right away.

**Symptoms:**
- Fever and chills
- Pain in your back or side
- Nausea and vomiting
- Feeling very sick
- Burning with urination
- Cloudy or bad-smelling urine

**How It Happens:**
- Usually starts as a bladder infection
- Bacteria travel up the ureters to the kidneys
- Can be very serious if untreated

**When to Seek Help:**
- High fever with back pain
- Unable to keep fluids down
- Blood in urine
- Getting worse despite treatment

**Treatment:**
- Antibiotics (very important!)
- Plenty of fluids
- Rest
- Some people need hospital treatment`,
      keyTerms: [
        { term: 'pyelonephritis', definition: 'Medical term for kidney infection' },
        { term: 'ureter', definition: 'Tube connecting kidney to bladder where bacteria can travel up' },
        { term: 'fever', definition: 'Body temperature above normal, sign of infection' },
      ],
      analogies: [
        'A kidney infection is like a bladder infection that "climbed the ladder" up to the kidneys.',
      ],
      examples: [
        'Back pain on one side with fever is a classic sign that infection has reached the kidney.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pyelonephritis is bacterial infection of the renal parenchyma, classified as uncomplicated or complicated based on host factors and anatomy.',
      explanation: `## Classification

**Uncomplicated Pyelonephritis:**
- Healthy, non-pregnant woman
- Normal urinary tract
- No comorbidities
- Can often treat outpatient

**Complicated Pyelonephritis:**
- Obstruction
- Pregnancy
- Diabetes
- Immunocompromise
- Male sex
- Catheter
- Abnormal anatomy

## Clinical Presentation

**Typical Symptoms:**
- Fever (≥38°C)
- Flank pain
- CVA tenderness
- +/- Lower UTI symptoms

**Laboratory Findings:**
- Leukocytosis
- Elevated CRP
- Pyuria
- Bacteriuria (≥10^5 CFU/mL)

**Atypical Presentations:**
- Elderly: Confusion, falls
- Pediatric: Nonspecific symptoms
- Diabetes: May be afebrile

## Imaging

**When to Image:**
- No improvement in 48-72 hours
- Severe sepsis
- Suspected obstruction
- Recurrent infections

**CT with Contrast:**
- Gold standard
- Shows abscess, obstruction
- Striated nephrogram pattern

## Treatment

**Outpatient (Mild):**
- Fluoroquinolone x 7 days
- TMP-SMX x 14 days
- Follow-up culture

**Inpatient (Severe):**
- IV antibiotics
- IV fluids
- Monitor for sepsis
- Transition to oral when improved`,
      keyTerms: [
        { term: 'CVA tenderness', definition: 'Costovertebral angle pain - classic finding in pyelonephritis' },
        { term: 'pyuria', definition: 'White blood cells in urine indicating infection' },
        { term: 'striated nephrogram', definition: 'CT pattern showing streaky kidney enhancement in pyelonephritis' },
      ],
      analogies: [
        'The striated nephrogram on CT looks like tiger stripes on the kidney.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pyelonephritis pathophysiology involves ascending infection, inflammatory response, and potential progression to abscess, emphysematous infection, or sepsis.',
      explanation: `## Pathophysiology

**Ascending Route (Most Common):**
- Periurethral colonization
- Bladder colonization
- Vesicoureteral reflux or obstruction
- Ascent to kidney

**Hematogenous Route (Rare):**
- Bacteremia seeds kidney
- S. aureus typical organism
- Look for distant focus

**Host Factors:**
- Vesicoureteral reflux
- Obstruction
- Instrumentation
- Diabetes (altered immunity)

## Microbiology

**Community-Acquired:**
- E. coli (70-90%)
- Klebsiella
- Proteus
- Enterococcus

**Healthcare-Associated:**
- ESBL producers
- Pseudomonas
- Enterococcus

## Complicated Infections

**Emphysematous Pyelonephritis:**
- Gas-forming infection
- Diabetes mellitus (90%)
- E. coli most common
- High mortality if untreated
- Requires drainage +/- nephrectomy

**Pyonephrosis:**
- Pus in obstructed system
- Urologic emergency
- Requires drainage
- Stent or nephrostomy

**Renal/Perinephric Abscess:**
- Progression from pyelonephritis
- May need drainage
- Prolonged antibiotics

## Treatment Details

**Empiric Therapy:**
| Setting | Options |
|---------|---------|
| Outpatient | Ciprofloxacin, Levofloxacin |
| Inpatient mild | Ceftriaxone, Gentamicin |
| Inpatient severe | Piperacillin-tazobactam, Cefepime, Carbapenem |

**Duration:**
- Uncomplicated: 7 days (fluoroquinolone)
- Complicated: 10-14 days
- Abscess: 4-6 weeks`,
      keyTerms: [
        { term: 'emphysematous pyelonephritis', definition: 'Gas-forming kidney infection, often in diabetics, surgical emergency' },
        { term: 'pyonephrosis', definition: 'Pus in obstructed collecting system requiring urgent drainage' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase producing bacteria, resistant to many antibiotics' },
      ],
      clinicalNotes: 'Emphysematous pyelonephritis requires urgent CT and urologic consultation. Class 1-2 may be managed with drainage; class 3-4 often require nephrectomy.',
    },
    4: {
      level: 4,
      summary: 'Advanced pyelonephritis management includes risk stratification, drainage strategies, and management of resistant organisms.',
      explanation: `## Risk Stratification

**Sepsis Criteria (qSOFA):**
- Altered mental status
- Respiratory rate ≥22
- Systolic BP ≤100

**Complicated Factors:**
- Obstruction
- Immunocompromise
- Healthcare-associated
- Recent antibiotics
- Resistant organism history

## Imaging Interpretation

**CT Findings:**
- Enlarged kidney
- Perinephric stranding
- Focal hypodensity (abscess)
- Gas (emphysematous)
- Delayed nephrogram
- Rim sign (abscess)

**When to Repeat:**
- No improvement 48-72h
- Worsening clinical status
- Before considering drainage

## Drainage Strategies

**Abscess Management:**
- <3cm: Antibiotics alone often sufficient
- 3-5cm: Consider drainage
- >5cm: Usually requires drainage
- Percutaneous preferred
- Surgical if fails

**Obstructed System:**
- Ureteral stent (retrograde)
- Nephrostomy (antegrade)
- Decision based on severity and anatomy

## Resistant Organisms

**ESBL Treatment:**
- Carbapenems (ertapenem, meropenem)
- May use fosfomycin for UTI (not pyelo)
- ID consultation recommended

**Carbapenem-Resistant:**
- Ceftazidime-avibactam
- Meropenem-vaborbactam
- Plazomicin
- Combination therapy often

## Special Populations

**Pregnancy:**
- Hospitalize most patients
- Avoid fluoroquinolones
- Cephalosporins safe
- Risk of preterm labor

**Transplant Recipients:**
- Low threshold for imaging
- Broader antimicrobial coverage
- Consider opportunistic pathogens
- Immunosuppression adjustment

**Diabetes:**
- Higher risk of complications
- Lower threshold for imaging
- Consider emphysematous infection
- Glucose control important`,
      keyTerms: [
        { term: 'qSOFA', definition: 'Quick Sequential Organ Failure Assessment - sepsis screening tool' },
        { term: 'rim sign', definition: 'CT finding of enhancing rim around abscess cavity' },
        { term: 'percutaneous drainage', definition: 'Image-guided catheter placement to drain abscess' },
      ],
      clinicalNotes: 'Any diabetic with severe pyelonephritis should have CT to evaluate for emphysematous infection. Early drainage is associated with improved outcomes.',
    },
    5: {
      level: 5,
      summary: 'Expert pyelonephritis management encompasses xanthogranulomatous pyelonephritis, renal scarring prevention, and emerging resistance patterns.',
      explanation: `## Xanthogranulomatous Pyelonephritis

**Pathology:**
- Chronic destructive granulomatous process
- Lipid-laden macrophages
- Often associated with obstruction and stones
- Can mimic malignancy

**Clinical Features:**
- Chronic symptoms
- Enlarged, nonfunctioning kidney
- Mass-like appearance on imaging

**Management:**
- Nephrectomy often required
- May need partial nephrectomy
- Rule out malignancy
- Prolonged antibiotics pre-op

## Renal Scarring

**Risk Factors:**
- Young age
- Recurrent pyelonephritis
- Vesicoureteral reflux
- Delayed treatment

**DMSA Scanning:**
- Gold standard for scarring
- Acute: "Cold" areas
- Chronic: Volume loss, cortical thinning

**Prevention:**
- Prompt treatment
- Address underlying causes
- VUR treatment if present
- Prophylaxis in recurrent cases

## Emerging Resistance

**Global Patterns:**
- ESBL increasing worldwide
- Carbapenem resistance emerging
- Fluoroquinolone resistance high

**Stewardship Principles:**
- Culture before antibiotics
- Narrow spectrum when possible
- Appropriate duration
- De-escalation when culture results return

## Novel Therapeutics

**New Antibiotics:**
- Cefiderocol (siderophore cephalosporin)
- Plazomicin (aminoglycoside)
- Eravacycline (tetracycline derivative)

**Beta-lactamase Inhibitor Combinations:**
- Ceftazidime-avibactam
- Meropenem-vaborbactam
- Imipenem-relebactam

## Long-Term Outcomes

**Recurrence Prevention:**
- Identify and treat underlying cause
- Consider prophylaxis if recurrent
- Address behavioral factors
- Follow-up imaging for complications

**CKD Risk:**
- Scarring contributes
- Monitor renal function
- Address other CKD risk factors
- Nephrology referral if declining function

## Quality Metrics

**Appropriate Treatment:**
- Culture-directed therapy
- Adequate duration
- Follow-up to confirm resolution
- Prevention strategy documented`,
      keyTerms: [
        { term: 'xanthogranulomatous pyelonephritis', definition: 'Chronic destructive kidney infection with foamy macrophages, often requiring nephrectomy' },
        { term: 'DMSA scan', definition: 'Nuclear medicine study to assess renal cortical function and scarring' },
        { term: 'cefiderocol', definition: 'Novel siderophore cephalosporin active against many resistant gram-negatives' },
      ],
      clinicalNotes: 'Xanthogranulomatous pyelonephritis can be indistinguishable from renal cell carcinoma on imaging. Preoperative diagnosis is difficult; most are diagnosed pathologically.',
    },
  },

  media: [],
  citations: [
    {
      id: 'idsa-uti-guidelines',
      type: 'article',
      title: 'International Clinical Practice Guidelines for Treatment of Acute Uncomplicated Cystitis and Pyelonephritis',
      source: 'IDSA/ESCMID Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'condition-urinary-tract-infections', targetType: 'condition', relationship: 'parent', label: 'UTIs' },
  ],
  tags: {
    systems: ['urinary', 'renal'],
    topics: ['infection', 'pyelonephritis'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default kidneyInfections;
