/**
 * Henoch-Schonlein Purpura (IgA Vasculitis) - Pediatric Condition
 *
 * Comprehensive content on HSP including diagnosis, renal involvement,
 * management, and long-term prognosis.
 */

import { EducationalContent } from '../../types';

export const henochSchonlein: EducationalContent = {
  id: 'condition-henoch-schonlein-purpura',
  type: 'condition',
  name: 'Henoch-Schonlein Purpura',
  nameEs: 'Púrpura de Henoch-Schönlein',
  alternateNames: ['IgA Vasculitis', 'HSP', 'Anaphylactoid Purpura', 'HSP Nephritis'],

  levels: {
    1: {
      level: 1,
      summary: 'Henoch-Schonlein purpura (HSP) is a condition that causes purple spots on the skin, joint pain, belly pain, and kidney problems. It usually happens in young children after an illness and most get better on their own.',
      explanation: `## What is Henoch-Schonlein Purpura?

Henoch-Schonlein purpura (HSP) is a condition that causes inflammation of small blood vessels. This inflammation causes:

1. **Purple spots on the skin** (especially on the legs and buttocks)
2. **Joint pain and swelling**
3. **Belly pain**
4. **Kidney problems** (in some children)

**Who Gets It?**
- Most common in children ages 3-10 years
- Rarely affects adults
- More common in boys than girls
- Often happens after an infection like a cold or strep throat

**The Good News:**
- Most children recover completely
- It usually goes away within 4-6 weeks
- Serious problems are rare

## Warning Signs and Symptoms

**Skin Rash (most common sign):**
- Purple or red spots that don't turn white when pressed
- Usually on legs, buttocks, and elbows
- May start as red bumps then turn purple
- Can come in "crops" or waves

**Joint Problems:**
- Painful swelling, especially in knees and ankles
- Can make it hard to walk
- Doesn't cause permanent joint damage
- Usually goes away in a week or two

**Belly Problems:**
- Stomach pain
- Nausea and vomiting
- Sometimes bloody stools
- Pain can come and go

**Kidney Problems:**
- Usually no symptoms at first
- Found through urine tests
- Can cause blood or protein in urine
- Most children recover completely

## How It's Diagnosed

Doctors diagnose HSP by:
- Looking at the rash (purple spots on legs/buttocks)
- Asking about other symptoms
- Checking urine for blood or protein
- Sometimes doing a skin biopsy

## Treatment

**Most Children Need:**
- Rest and plenty of fluids
- Medicine for pain (acetaminophen)
- Medicine to reduce swelling (ibuprofen)
- Belly pain may need prescription medicine

**For Severe Cases:**
- Hospital observation
- Stronger medicines for inflammation (steroids)
- Careful kidney monitoring

## What to Watch For

**Call the Doctor If:**
- Severe belly pain that doesn't go away
- Bloody stools or vomit that looks like coffee grounds
- Decreased urine or very dark urine
- High fever
- Joint pain preventing walking

**Follow-up is Important:**
- Regular urine tests for several months
- Blood pressure checks
- Kidney function tests

## Long-term Outlook

- Most children recover completely
- Rash usually fades in 2-4 weeks
- Joint pain improves within a week
- Most kidney problems resolve
- A small number of children develop long-term kidney problems (need ongoing monitoring)`,
      keyTerms: [
        { term: 'HSP', definition: 'Henoch-Schonlein purpura; a condition causing inflammation of small blood vessels' },
        { term: 'purpura', definition: 'Purple or red spots on the skin caused by bleeding underneath' },
        { term: 'IgA', definition: 'A type of antibody; builds up in blood vessels in HSP causing inflammation' },
        { term: 'vasculitis', definition: 'Inflammation of blood vessels' },
        { term: 'biopsy', definition: 'Taking a small sample of tissue to examine under a microscope' },
      ],
      analogies: [
        'The blood vessels in HSP are like pipes that get inflamed - this causes leaks (purple spots) and problems in the organs they supply.',
        'The rash in HSP is like a bruise that appears without any injury - the small blood vessels leak blood into the skin.',
        'Think of IgA as "friendly fire" - antibodies meant to fight germs accidentally attack blood vessels instead.',
      ],
      examples: [
        'A 5-year-old develops purple spots on his legs and complains his knees hurt after having a cold last week.',
        'A child with HSP has belly pain so bad she can\'t eat, but the rash looks mild.',
        'During follow-up visits, a child\'s urine is checked for protein because kidney problems can develop even after the rash goes away.',
      ],
      patientCounselingPoints: [
        'Keep all follow-up appointments for urine and blood pressure checks',
        'Call the doctor if your child has severe belly pain or bloody stools',
        'Most children recover completely within 4-6 weeks',
        'Kidney monitoring continues for at least 6 months after diagnosis',
      ],
    },

    2: {
      level: 2,
      summary: 'Henoch-Schonlein purpura (HSP) is an IgA-mediated small-vessel vasculitis primarily affecting children. It presents with palpable purpura, arthritis, abdominal pain, and renal involvement. Most cases are self-limited, but renal disease requires long-term monitoring.',
      explanation: `## What is Henoch-Schonlein Purpura?

Henoch-Schonlein purpura (HSP), also called IgA vasculitis, is the most common systemic vasculitis in children. It involves inflammation of small blood vessels caused by deposits of immunoglobulin A (IgA).

**Epidemiology:**
- Incidence: 10-20 per 100,000 children per year
- Peak age: 4-6 years
- Male to female ratio: 1.5:1
- More common in winter/spring
- Rare in adults (more severe when it occurs)

**Pathogenesis:**
- Abnormal IgA production after triggers (infections, foods, medications)
- IgA deposits in small blood vessels
- Complement activation and inflammation
- Vessel damage causes clinical manifestations

## Clinical Manifestations

**The Classic Tetrad (not all patients have all four):**

| Manifestation | Frequency | Description |
|---------------|-----------|-------------|
| Palpable purpura | 100% (diagnostic requirement) | Purple, raised spots, lower extremities |
| Arthritis/arthralgia | 75% | Large joints (knees, ankles) |
| Abdominal pain | 65% | Colicky, can be severe |
| Renal involvement | 40% | Hematuria, proteinuria |

**Skin Findings:**
- Palpable purpura (raised purple spots)
- Distal extremities (legs, buttocks)
- May start as urticaria (hives) or maculopapular rash
- Can involve arms and trunk in severe cases
- NOT on the face or trunk initially (helps distinguish from other causes)

**Joint Involvement:**
- Large joints: Knees, ankles, wrists, elbows
- Non-erosive arthritis (doesn't damage joints permanently)
- May cause refusal to walk in young children
- No chronic joint changes

**Gastrointestinal Manifestations:**
- Colicky abdominal pain
- Nausea, vomiting
- GI bleeding (occult to gross)
- Severe complications (rare):
  - Intussusception (telescoping of intestines)
  - Bowel ischemia (lack of blood flow)
  - Bowel perforation (hole in bowel wall)

**Renal Involvement:**
- Occurs in ~40% of cases
- Usually within 3 months of rash onset
- Ranges from microscopic hematuria to nephrotic syndrome
- Rare: Rapidly progressive glomerulonephritis

**Other Rare Manifestations:**
- Scrotal swelling (boys) - can mimic testicular torsion
- Pulmonary hemorrhage (very rare)
- CNS involvement (headaches, seizures)

## Diagnosis

**Clinical Diagnostic Criteria (EULAR/PRINTO/PRES):**

*Mandatory:*
1. Palpable purpura (with or without lower extremity predominance)

*PLUS at least one of:*
1. Diffuse abdominal pain
2. Biopsy showing IgA deposition
3. Arthritis or arthralgia
4. Renal involvement (proteinuria or hematuria)

**Laboratory Findings:**

| Test | Expected Findings | Purpose |
|------|-------------------|---------|
| CBC | Normal or mild anemia, thrombocytosis | Exclude thrombocytopenia |
| ESR/CRP | Normal to mildly elevated | Assess inflammation |
| Urinalysis | Hematuria, proteinuria | Detect renal involvement |
| BUN/Creatinine | Usually normal | Assess kidney function |
| IgA levels | Elevated in 50% | Supportive (not diagnostic) |
| Complement C3/C4 | Normal | Exclude other vasculitis |

**Skin Biopsy:**
- Indication: Atypical presentation
- Finding: IgA deposition in vessel walls
- Usually not needed if presentation is classic

**Kidney Biopsy:**
- Indication: Significant renal involvement
- Findings: IgA nephropathy (similar pathology to IgA nephropathy)

## Differential Diagnosis

**Skin Purpura:**
- Idiopathic thrombocytopenic purpura (ITP)
- Meningococcemia
- Rocky Mountain spotted fever
- Leukocytoclastic vasculitis (other causes)
- Trauma or abuse

**Abdominal Pain:**
- Appendicitis
- Intussusception
- Inflammatory bowel disease
- Acute abdomen from other causes

## Treatment

**Supportive Care (most patients):**
- Hydration
- Rest
- NSAIDs for joint pain (if renal function normal)
- Acetaminophen for pain and fever

**Abdominal Pain:**
- Mild: Observation, clear liquids
- Moderate: Corticosteroids (prednisone 1-2 mg/kg/day)
- Severe: Hospital admission, IV fluids, IV steroids

**Renal Disease:**
- Mild (hematuria/proteinuria only): Observation
- Moderate (nephrotic range proteinuria): Corticosteroids
- Severe (crescentic GN): Aggressive therapy (see below)

**Severe/Refractory Disease:**
- Corticosteroids: Prednisone 1-2 mg/kg/day
- IV methylprednisolone for severe disease
- Other immunosuppressants for refractory cases

## Complications

**Gastrointestinal:**
- Intussusception (1-5%)
- GI bleeding (usually self-limited)
- Bowel ischemia/perforation (rare)

**Renal:**
- Hematuria: Usually resolves
- Proteinuria: May persist
- Chronic kidney disease: 1-3%
- End-stage renal disease: <1%

**Other:**
- Scrotal pain/testicular torsion mimic
- Pulmonary hemorrhage (very rare)

## Prognosis and Follow-up

**Short-term:**
- Skin rash: Fades in 2-4 weeks
- Joint symptoms: Resolve within 1-2 weeks
- Abdominal symptoms: Resolve within 1-2 weeks
- Recurrences: Common (30-40%), usually milder

**Long-term Renal Prognosis:**

| Risk Factor | Significance |
|-------------|--------------|
| Normal initial urinalysis | Very low risk of CKD |
| Isolated hematuria | Low risk |
| Nephrotic range proteinuria | Higher risk of CKD |
| Hypertension | Poor prognostic sign |
| Elevated creatinine at onset | Poor prognostic sign |
| Crescentic GN on biopsy | Higher risk of progression |

**Monitoring Schedule:**
- Weekly urinalysis and BP for first month
- Monthly for 3-6 months
- Then every 3-6 months for 1-2 years
- Longer if renal involvement present

**When to Refer to Nephrology:**
- Proteinuria >1+
- Hypertension
- Elevated creatinine
- Nephrotic syndrome`,
      keyTerms: [
        { term: 'IgA vasculitis', definition: 'Inflammation of blood vessels caused by IgA antibody deposits; the modern name for HSP', pronunciation: 'eye-guh-A vas-kyoo-LIE-tis' },
        { term: 'palpable purpura', definition: 'Raised purple spots on skin that can be felt with fingers', pronunciation: 'PAL-pah-bul PER-poo-rah' },
        { term: 'intussusception', definition: 'Telescoping of one segment of intestine into another', pronunciation: 'in-tuh-suh-SEP-shun' },
        { term: 'hematuria', definition: 'Blood in the urine', pronunciation: 'hee-mah-TOOR-ee-ah' },
        { term: 'proteinuria', definition: 'Protein in the urine', pronunciation: 'pro-tee-NOOR-ee-ah' },
        { term: 'nephrotic syndrome', definition: 'Kidney condition causing heavy protein loss in urine and swelling' },
      ],
      analogies: [
        'The small blood vessels in HSP are like garden hoses that develop tiny leaks - blood leaks out causing purple spots on the skin.',
        'IgA is like a letter addressed to the wrong place - antibodies meant for germs get delivered to blood vessels instead.',
        'Kidney monitoring in HSP is like checking your car\'s oil - you need regular checks to catch problems early.',
      ],
      clinicalNotes: 'Any child with HSP and severe abdominal pain should have imaging to rule out intussusception. Ultrasound is preferred (no radiation). Scrotal pain in boys requires ultrasound to rule out testicular torsion.',
    },

    3: {
      level: 3,
      summary: 'IgA vasculitis (HSP) is an immune complex-mediated small-vessel vasculitis characterized by IgA deposition in vessel walls. Clinical presentation includes the classic tetrad of palpable purpura, arthritis, abdominal pain, and nephritis. Most cases are self-limited but renal disease determines long-term prognosis.',
      explanation: `## Pathophysiology

**Immunopathogenesis:**

*Abnormal IgA Response:*
- Trigger: Infections, foods, drugs, or unknown
- Increased galactose-deficient IgA1 (Gd-IgA1)
- Autoantibodies form against Gd-IgA1
- Immune complexes deposit in vessel walls
- Lectin pathway of complement activation

*Vessel Wall Injury:*
- Leukocytoclastic vasculitis (neutrophil infiltration)
- Vessel wall necrosis
- Increased vascular permeability
- Extravasation of RBCs (purpura)
- Deposition in: Skin, GI tract, kidneys, joints

**Genetic Predisposition:**
- HLA-DRB1*01, HLA-DRB1*11 association
- Family clustering reported
- Complement deficiency risk

## Clinical Presentation

**Cutaneous Manifestations:**

*Purpura Distribution:*
- Dependent areas: Lower extremities, buttocks
- Sparing of face, trunk (initially)
- May involve upper extremities in severe disease
- Can affect ears (cartilage)

*Rash Evolution:*
1. Erythematous macules/papules
2. Urticarial lesions
3. Palpable purpura (classic)
4. Petechiae coalescing to ecchymoses
5. Residual hyperpigmentation

**Gastrointestinal Involvement (65%):**

*Pathophysiology:*
- Purpura of bowel wall
- Submucosal edema and hemorrhage
- Can affect any part of GI tract

*Spectrum:*
- Mild: Crampy abdominal pain
- Moderate: Pain + nausea/vomiting
- Severe: GI bleeding, intussusception, perforation

*Intussusception:*
- Ileocolic most common
- Lead point: Purpuric bowel wall
- Ultrasound diagnosis
- May need reduction

**Renal Disease (40%):**

*Timing:*
- Usually within 3 months of rash
- Can be initial presentation (before rash)
- May develop up to 6 months later

*Spectrum:*
- Asymptomatic hematuria/proteinuria (60%)
- Nephritic syndrome (hematuria + RBC casts + hypertension)
- Nephrotic syndrome (heavy proteinuria)
- Mixed nephritic-nephrotic (20%)
- Rapidly progressive GN (rare, <5%)

*Biopsy Findings (HSP Nephritis):*
- Mesangial proliferation
- IgA deposition (dominant)
- C3 deposition (often present)
- Crescents (severe disease)

**Arthritis/Arthralgia (75%):**
- Non-erosive, non-deforming
- Knees > ankles > wrists > elbows
- May cause functional impairment
- Resolves without sequelae

## Classification Criteria

**EULAR/PRINTO/PRES 2010 Criteria:**

*Mandatory:*
- Palpable purpura (with or without lower limb predominance)

*Plus ONE of the following:*
1. Diffuse abdominal pain (acute)
2. Biopsy showing predominant IgA deposition
3. Arthritis or arthralgia (acute)
4. Renal involvement (proteinuria or hematuria)

*Sensitivity:* 100%
*Specificity:* 87%

## Differential Diagnosis

**Vasculitis Mimics:**

| Condition | Distinguishing Features |
|-----------|-------------------------|
| ITP | Thrombocytopenia, non-palpable purpura |
| Meningococcemia | Toxic appearance, shock, fever |
| Rocky Mountain Spotted Fever | Fever, headache, tick exposure |
| Hypersensitivity vasculitis | Drug exposure, no IgA on biopsy |
| Cryoglobulinemic vasculitis | Hepatitis C, cryoglobulins positive |
| SLE | ANA positive, malar rash, other SLE features |

**Abdominal Pain Mimics:**
- Appendicitis (right lower quadrant pain)
- Inflammatory bowel disease
- Intussusception (primary - no purpura)

## Laboratory and Imaging

**Baseline Workup:**

*Routine tests:*
- CBC with platelets
- ESR, CRP
- Comprehensive metabolic panel
- Urinalysis with microscopy
- Urine protein/creatinine ratio
- ANA (if atypical)
- C3, C4 complement
- IgA level (supportive, not diagnostic)

**Imaging for Abdominal Pain:**
- Ultrasound: First-line for intussusception
- Abdominal X-ray: Bowel obstruction
- CT abdomen: If severe pain, unclear diagnosis

## Renal Risk Stratification

**ISKDC Classification (Kidney Biopsy):**

| Grade | Findings | Prognosis |
|-------|----------|-----------|
| I | Minimal mesangial proliferation | Excellent |
| II | Mesangial proliferation | Good |
| III | Crescent formation <50% glomeruli | Variable |
| IV | Crescent formation 50-75% | Guarded |
| V | Crescent formation >75% | Poor |
| VI | Membranoproliferative pattern | Variable |

**Laboratory Risk Markers:**
- Elevated serum IgA
- Reduced factor XIII
- Elevated Gd-IgA1

## Treatment

**Skin/Arthritis:**
- NSAIDs: Ibuprofen, naproxen (if renal function normal)
- Corticosteroids: Indicated for severe arthritis

**Abdominal Pain:**

| Severity | Management |
|----------|-------------|
| Mild | Observation, hydration |
| Moderate | Prednisone 1-2 mg/kg/day |
| Severe | Hospital admission, IV methylprednisolone |

**Renal Disease:**

*Mild (hematuria ± mild proteinuria):*
- Observation
- ACE inhibitor for proteinuria >300 mg/day

*Moderate (nephrotic range proteinuria):*
- Prednisone 2 mg/kg/day (max 60 mg)
- Taper over 2-3 months
- ACE inhibitor

*Severe (crescentic GN, RPGN):*
- IV methylprednisolone pulse: 30 mg/kg/day x 3 days
- Cyclophosphamide: 2 mg/kg/day
- Plasmapheresis (controversial)
- Dialysis if needed

**Refractory Disease:**
- Mycophenolate mofetil
- Azathioprine
- Cyclosporine
- Rituximab (case reports)

## Follow-up Protocol

**Monitoring Schedule:**

| Time Point | Assessments |
|------------|-------------|
| Week 1-4 | Weekly: BP, urine dipstick |
| Month 2-6 | Monthly: BP, urine, creatinine |
| Month 7-12 | Every 2-3 months |
| Year 2+ | Every 3-6 months (if renal involvement) |

**Indications for Nephrology Referral:**
- Proteinuria >1+ or >0.5 g/day
- Hypertension
- Elevated creatinine
- Active urine sediment (RBC casts)
- Nephrotic syndrome

## Prognosis

**Overall:**
- Excellent for most children
- Mortality: <1% (usually from severe renal or GI complications)
- Recurrence rate: 30-40%

**Renal Outcomes:**
- 97%: Complete recovery
- 1-2%: Persistent hematuria/proteinuria
- 1%: End-stage renal disease
- Poor prognostic factors:
  - Nephrotic syndrome at presentation
  - Hypertension
  - Elevated creatinine
  - >50% crescents on biopsy
  - Delayed treatment

**Long-term Monitoring:**
- Children with renal involvement: Monitor into adulthood
- Risk of progression to CKD later in life
- Pregnancy counseling for females with history of HSP nephritis`,
      keyTerms: [
        { term: 'Gd-IgA1', definition: 'Galactose-deficient IgA1; abnormal antibody that forms immune complexes in HSP' },
        { term: 'leukocytoclastic vasculitis', definition: 'Small-vessel vasculitis characterized by neutrophil fragmentation', pronunciation: 'loo-ko-sigh-toh-KLAS-tik' },
        { term: 'crescents', definition: 'Cellular proliferation in Bowman space; indicates severe glomerular injury' },
        { term: 'ISKDC', definition: 'International Study of Kidney Disease in Children; developed HSP nephritis classification' },
        { term: 'RPGN', definition: 'Rapidly progressive glomerulonephritis; acute kidney injury with glomerular inflammation' },
      ],
      clinicalNotes: 'HSP can be the initial presentation of IgA nephropathy. Any child with isolated IgA nephropathy on biopsy should be monitored for development of extrarenal manifestations.',
    },

    4: {
      level: 4,
      summary: 'Advanced management of IgA vasculitis requires understanding of Gd-IgA1 pathophysiology, recognition of atypical presentations, early identification of renal involvement, evidence-based treatment of severe disease, and long-term surveillance for chronic kidney disease.',
      explanation: `## Advanced Pathophysiology

**Gd-IgA1 Hypothesis:**

*Biochemical Abnormality:*
- Under-glycosylated O-linked glycans in IgA1 hinge region
- Reduced galactose and sialic acid residues
- Results in "naked" N-acetylgalactosamine (GalNAc) exposure

*Immune Complex Formation:*
1. Gd-IgA1 produced by plasma cells
2. IgG autoantibodies recognize GalNAc as neoantigen
3. Formation of circulating immune complexes (CICs)
4. CICs deposit in mesangium and vessel walls
5. Complement activation (lectin pathway predominant)

*Mesangial Deposition:*
- Transglutaminase binding to mesangium
- Trapping of immune complexes
- Mesangial cell proliferation
- Cytokine and growth factor release
- Glomerular injury

**Genetic Factors:**
- HLA-DRB1*01: Strong association in Caucasians
- MEFV gene mutations (familial Mediterranean fever): Increased risk
- Complement factor H variants
- Polygenic risk score under development

**Triggers:**
- Infections (Group A Strep, Staphylococcus, Mycoplasma)
- Vaccines (influenza, meningococcal - temporal association)
- Foods (cow milk, wheat, soy)
- Medications (NSAIDs, antibiotics)
- Insect bites

## Atypical Presentations

**Adult-Onset HSP:**
- More severe disease than children
- Higher rate of renal involvement
- More frequent GI complications
- Worse renal prognosis

**Infant HSP (<2 years):**
- Rare
- Often milder cutaneous disease
- Higher rate of scrotal involvement
- Prognosis generally good

**Renal-First Presentation:**
- IgA nephropathy on biopsy
- Later develop purpura
- Same disease spectrum as HSP nephritis
- May have worse renal outcome

**Predominant GI Disease:**
- Severe abdominal pain without prominent rash
- May mimic acute abdomen
- CT may show bowel wall thickening
- Need high index of suspicion

## Advanced Renal Assessment

**Urinary Biomarkers:**

| Biomarker | Significance |
|-----------|--------------|
| Protein/creatinine ratio | Quantifies proteinuria |
| N-acetyl-beta-D-glucosaminidase | Tubular injury |
| Alpha-1 microglobulin | Tubular injury |
| Monocyte chemoattractant protein-1 | Inflammatory activity |

**Serum Biomarkers:**
- Gd-IgA1 levels: Predict renal involvement
- Galactose-deficient IgA1 autoantibodies
- Complement activation products

**Kidney Biopsy Indications:**

*Absolute:*
- Nephrotic syndrome
- Rising creatinine
- Active urine sediment with reduced GFR

*Relative:*
- Persistent proteinuria >1 g/day
- Incomplete recovery after 3 months
- Atypical presentation

**Pathology Classification (ISKDC Revisited):**

| Grade | Light Microscopy | IF | EM |
|-------|------------------|-----|-----|
| I | Normal | Mesangial IgA | Mesangial deposits |
| II | Mesangial proliferation | Mesangial IgA | Mesangial deposits |
| III | Crescent formation <50% | Mesangial IgA | Mesangial + subendothelial |
| IV | Crescent formation 50-75% | Mesangial IgA | Extensive deposits |
| V | Crescent formation >75% | Mesangial IgA | Extensive deposits |
| VI | Membranoproliferative | Mesangial IgA | Subepithelial "humps" |

## Treatment Algorithms

**Skin-Dominant Disease:**
- Observation (most cases)
- Topical steroids for comfort
- Oral antihistamines for pruritus
- Dapsone for severe refractory disease

**Arthritis-Dominant:**
- NSAIDs first-line
- Intra-articular steroids if persistent monoarthritis
- Short-course oral steroids if refractory

**Abdominal Disease:**

*Grade 1 (mild pain):*
- Outpatient management
- Hydration, proton pump inhibitor

*Grade 2 (moderate pain, affecting function):*
- Prednisone 1-2 mg/kg/day
- Taper over 2-4 weeks

*Grade 3 (severe pain, suspected complication):*
- Hospital admission
- IV methylprednisolone 1-2 mg/kg/day
- Surgical consultation if intussusception suspected

**Renal Disease (HSP Nephritis):**

*KDIGO-Based Approach:*

| Presentation | Treatment |
|--------------|------------|
| Isolated hematuria | Observation |
| Proteinuria <0.5 g/day | ACE inhibitor or ARB |
| Proteinuria 0.5-1 g/day | ACE inhibitor or ARB + prednisone |
| Proteinuria >1 g/day | Prednisone 2 mg/kg + ACEi |
| Nephrotic syndrome | Prednisone 2 mg/kg + ACEi ± alkylating agent |
| Crescentic GN (>50%) | IV methylprednisolone + cyclophosphamide |
| Refractory disease | MMF, cyclosporine, or rituximab |

**Steroid Tapering:**
- Initial: 2 mg/kg/day (max 60 mg)
- Duration: 4-6 weeks at full dose
- Taper: Reduce by 25% every 2-3 weeks
- Total duration: 3-6 months

## Refractory Disease Management

**Cyclophosphamide:**
- Indication: Crescentic GN, RPGN
- Dose: 2 mg/kg/day oral OR IV pulse 500-750 mg/m² monthly
- Duration: 3-6 months
- Toxicity: Hemorrhagic cystitis (use Mesna), gonadal toxicity

**Mycophenolate Mofetil:**
- Indication: Steroid-dependent or steroid-resistant
- Dose: 600-1200 mg/m² BID
- Duration: 1-2 years minimum
- Advantage: Better safety profile than cyclophosphamide

**Cyclosporine:**
- Indication: Refractory nephrotic syndrome
- Target trough: 100-200 ng/mL
- Monitor: Renal function, blood pressure

**Rituximab:**
- Indication: Refractory HSP nephritis
- Dose: 375 mg/m² weekly × 4 OR 750 mg/m² × 2 (2 weeks apart)
- Evidence: Limited to case series
- Monitoring: CD19+ B cells, IgG levels

**Plasmapheresis:**
- Indication: Severe RPGN with lung hemorrhage
- Controversial benefit in isolated HSP nephritis
- Protocol: Daily exchange for 5-7 sessions

## Complications Management

**Intussusception:**
- Diagnosis: Ultrasound (target sign)
- Management: Air or contrast enema reduction
- Surgery if perforation or failed reduction
- Recurrence rate: 10-15%

**Severe GI Bleeding:**
- Most respond to steroids
- Consider endoscopy for localization
- Rarely: Surgical resection

**Pulmonary Hemorrhage:**
- Life-threatening complication
- ICU admission required
- IV methylprednisolone
- Plasmapheresis
- Mechanical ventilation support

## Long-term Follow-up

**Risk-Based Surveillance:**

| Risk Category | Definition | Follow-up |
|---------------|------------|-----------|
| Low | No renal involvement | Discharge after 6 months |
| Moderate | Transient hematuria/proteinuria | Monitor for 2 years |
| High | Persistent proteinuria >6 months | Annual monitoring indefinitely |
| Very High | CKD stage 2 or worse | Nephrology indefinitely |

**Transition to Adult Care:**
- Discuss long-term prognosis
- Review need for continued monitoring
- Family planning discussions
- Medication reconciliation

**Pregnancy Considerations:**
- Increased risk of hypertension
- Possible flare of renal disease
- Pre-conception counseling recommended
- High-risk obstetric care if active renal disease

## Prognostic Scoring Systems

**Predictors of Poor Renal Outcome:**
1. Nephrotic syndrome at presentation
2. Hypertension at onset
3. Elevated serum creatinine
4. >50% crescents on biopsy
5. Proteinuria >1 g/day at 6 months
6. Failure to respond to initial therapy

**Combined Risk Score:**
- Points assigned for each risk factor
- Score ≥3: High risk of CKD progression
- Consider early aggressive therapy`,
      keyTerms: [
        { term: 'GalNAc', definition: 'N-acetylgalactosamine; exposed sugar residue on Gd-IgA1 recognized by autoantibodies' },
        { term: 'target sign', definition: 'Ultrasound finding of intussusception - mass with concentric rings' },
        { term: 'KDIGO', definition: 'Kidney Disease: Improving Global Outcomes; provides evidence-based clinical practice guidelines' },
        { term: 'crescentic GN', definition: 'Glomerulonephritis with cellular crescents in Bowman space; indicates severe injury' },
      ],
      clinicalNotes: 'Children with HSP nephritis and proteinuria >1 g/day at 6 months have 20-30% risk of progressive CKD. These patients warrant long-term nephrology follow-up and consideration of biopsy-proven diagnosis to guide therapy.',
    },

    5: {
      level: 5,
      summary: 'Expert-level management of IgA vasculitis integrates molecular understanding of Gd-IgA1 pathogenesis, precision biomarkers for risk stratification, individualized immunosuppressive regimens, management of refractory disease, and lifelong surveillance strategies for chronic kidney disease.',
      explanation: `## Molecular Pathogenesis Frontiers

**Gd-IgA1 Production:**

*Aberrant Glycosylation:*
- Core 1 β1,3-galactosyltransferase (C1GALT1) dysfunction
- Cosmc chaperone deficiency
- Results in GalNAc exposure on IgA1 hinge

*Autoantibody Production:*
- Glycan-specific IgG against GalNAc
- IgA autoantibodies
- Form large circulating immune complexes

*Deposition Mechanisms:*
- Transglutaminase binds to mesangial matrix
- Integrin-mediated binding to endothelial cells
- Receptor for advanced glycation end products (RAGE) involvement

**Complement Activation:**
- Lectin pathway predominant (MASP-1, MASP-2)
- Alternative pathway amplification
- Properdin deficiency increases susceptibility

**Genetic Landscape:**

*GWAS Findings:*
- HLA-DRB1*01: Strongest association
- DEFA locus (alpha-defensins)
- ITGAM-ITGAX integrin cluster
- PSMB8 immunoproteasome gene

*Familial HSP:*
- Rare but reported
- Suggests polygenic inheritance
- No single causative gene identified

**Microbiome Interactions:**
- Mucosal immunity dysfunction
- Altered gut microbiota in HSP patients
- Potential for microbiome-modulating therapies

## Precision Biomarkers

**Serum Gd-IgA1:**
- Commercially available (ELISA)
- Levels correlate with disease activity
- Predict renal involvement
- Monitor treatment response

**Anti-Gd-IgA1 Autoantibodies:**
- IgG and IgA autoantibodies
- Combine with Gd-IgA1 for risk stratification
- Potential for personalized monitoring

**Urinary Biomarkers:**

| Biomarker | Predictive Value |
|-----------|-----------------|
| MCP-1 | Tubulointerstitial inflammation |
| NGAL | Acute kidney injury |
| IL-6 | Disease activity |
| TGF-β1 | Fibrosis risk |

**Genetic Risk Score:**
- Combines multiple susceptibility loci
- Predicts disease severity
- Research stage currently

## Treatment Frontiers

**Targeted Therapies:**

*B-Cell Depletion:*
- Rituximab: Anti-CD20 monoclonal antibody
- Evidence: Case series, small trials
- Indication: Refractory HSP nephritis
- Protocol: 375 mg/m² weekly × 4 OR 1 g × 2 doses
- Monitoring: CD19+ cells, IgG levels

*Complement Inhibition:*
- Eculizumab: C5 inhibitor
- Theoretical benefit in HSP
- Case reports of success
- Cost prohibitive for most cases

*IL-6 Inhibition:*
- Tocilizumab: Anti-IL-6R
- Case reports of refractory disease
- Potential for targeted therapy

*BAFF Inhibition:*
- Belimumab: Anti-BAFF
- Reduces B-cell survival
- Theoretical benefit
- Clinical trials pending

**Supportive Care Advances:**

*Renin-Angiotensin System Blockade:*
- ACE inhibitor or ARB first-line
- Dual blockade (ACEi + ARB): Controversial
- SGLT2 inhibitors: Emerging renal protection

*Anticoagulation:*
- Consider for nephrotic syndrome
- Low molecular weight heparin if hospitalized
- Warfarin if persistent nephrosis

## Refractory Disease Algorithms

**Steroid-Resistant Nephrotic Syndrome:**

1. Verify adherence and exclude secondary causes
2. Repeat kidney biopsy
3. Consider alternative diagnoses
4. Escalate therapy:
   - Calcineurin inhibitor (cyclosporine, tacrolimus)
   - Mycophenolate mofetil
   - Rituximab
   - Combination therapy

**Crescentic GN Management:**

*Induction:*
- IV methylprednisolone: 30 mg/kg × 3-5 days
- Cyclophosphamide: 2 mg/kg/day × 3-6 months
- Plasmapheresis: If concurrent pulmonary hemorrhage

*Maintenance:*
- Azathioprine or MMF for 12-24 months
- Slow steroid taper
- Monitor for relapse

**Chronic Kidney Disease Management:**
- Referral to pediatric CKD clinic
- Transition planning to adult nephrology
- Dialysis access planning if progression expected
- Pre-emptive transplantation evaluation

## International Perspectives

**Epidemiologic Variations:**
- Highest incidence: Asian populations
- Lowest: African populations
- Environmental factors suspected

**Classification Systems:**
- EULAR/PRINTO/PRES (Europe)
- ACR criteria (United States)
- Chapel Hill Consensus (Vasculitis definitions)

**Treatment Variations:**
- Asia: More aggressive immunosuppression
- Europe: Steroid-sparing approaches
- North America: Evidence-based protocols

## Long-term Outcomes Data

**Decades-Long Follow-up:**

*Cohort Studies:*
- 20-year follow-up of Finnish cohort
- 3% ESRD rate
- 10% CKD stage 3+
- Most with normal urinalysis at 20 years

*Predictive Factors:*
- Initial presentation severity
- Time to remission
- Proteinuria at 6 months
- Histologic grade on biopsy

**Adult-Onset HSP:**
- Worse prognosis than childhood-onset
- Higher rate of ESRD (10-15%)
- More frequent relapses
- More aggressive therapy needed

**Pregnancy Outcomes:**
- Most have successful pregnancies
- Increased risk of preeclampsia
- Possible flare of renal disease
- Pre-conception assessment recommended
- High-risk obstetric care for CKD

## Future Directions

**Vaccine Development:**
- No primary prevention available
- Theoretical: Gd-IgA1 conjugate vaccine
- Years away from clinical use

**Microbiome Modulation:**
- Probiotics under investigation
- Fecal microbiota transplant: Case reports
- Mechanism unclear

**Gene Therapy:**
- Theoretical: Correction of C1GALT1/Cosmc
- Years away from clinical reality

**Biomarker Development:**
- Commercial Gd-IgA1 testing available
- Combined biomarker panels in development
- Risk stratification algorithms
- Personalized treatment protocols

**Artificial Intelligence:**
- Image analysis for biopsy interpretation
- Risk prediction models
- Treatment response prediction

## Controversies

**Biopsy for All:**
- Arguments for: More accurate diagnosis and prognosis
- Arguments against: Cost, risk, often doesn't change management
- Current consensus: Biopsy for significant renal disease

**Steroid Duration:**
- Short course (3 months): May be sufficient for mild disease
- Long course (6+ months): Better for severe disease
- Individualize based on response

**Universal Treatment vs. Observation:**
- Observation appropriate for isolated hematuria
- Treatment indicated for proteinuria >0.5-1 g/day
- Controversy for moderate proteinuria without other features

**Adult vs. Pediatric Protocols:**
- Adults: Often more aggressive treatment
- Children: More observation initially
- Biological differences unclear`,
      keyTerms: [
        { term: 'C1GALT1', definition: 'Core 1 beta-1,3-galactosyltransferase; enzyme deficient in HSP leading to Gd-IgA1 production' },
        { term: 'Cosmc', definition: 'Chaperone protein for C1GALT1; deficiency leads to abnormal IgA1 glycosylation' },
        { term: 'MASP', definition: 'Mannan-binding lectin-associated serine protease; activates lectin complement pathway in HSP' },
        { term: 'BAFF', definition: 'B-cell activating factor; target for belimumab therapy in refractory disease' },
      ],
      clinicalNotes: `Expert Practice Pearls:

1. **Biopsy Indications:** Kidney biopsy should be performed for nephrotic syndrome, rising creatinine, or persistent proteinuria >1 g/day after 3 months of conservative therapy.

2. **Steroid Resistance:** Defined as lack of remission after 8-12 weeks of adequate steroid therapy. Prompt biopsy and escalation to calcineurin inhibitor recommended.

3. **Long-term Monitoring:** Children with any degree of HSP nephritis should have annual blood pressure and urinalysis checks through adolescence and into adulthood.

4. **Pregnancy Counseling:** Women with history of HSP nephritis should have pre-conception renal assessment. Discuss risks of flare and preeclampsia.

5. **Gd-IgA1 Testing:** Commercially available assay may help with diagnosis in atypical cases and monitor disease activity. Not yet standard of care.

6. **Transition Planning:** Discuss long-term renal prognosis and need for continued monitoring before transfer to adult care.`,
    },
  },

  media: [
    {
      id: 'hsp-purpura-distribution',
      type: 'diagram',
      filename: 'hsp-purpura-distribution.svg',
      title: 'HSP Purpura Distribution',
      description: 'Typical distribution of palpable purpura in HSP',
    },
    {
      id: 'hsp-clinical-features',
      type: 'diagram',
      filename: 'hsp-clinical-features.svg',
      title: 'HSP Clinical Features Tetrad',
      description: 'The four classic manifestations of Henoch-Schonlein purpura',
    },
  ],

  citations: [
    {
      id: 'eular-hsp-criteria-2010',
      type: 'article',
      title: 'EULAR/PRINTO/PRES Criteria for Henoch-Schonlein Purpura',
      authors: ['Ozen, S.', 'Pistorio, A.', 'Iusan, S.M.', 'et al.'],
      source: 'Annals of the Rheumatic Diseases',
      url: 'https://doi.org/10.1136/ard.2009.110468',
      accessedDate: '2026-01-26',
    },
    {
      id: 'iskdc-classification',
      type: 'article',
      title: 'Prospective Study of HSP Nephritis in Children',
      authors: ['The International Study of Kidney Disease in Children'],
      source: 'Kidney International',
      url: 'https://doi.org/10.1038/ki.1975.94',
      accessedDate: '2026-01-26',
    },
    {
      id: 'kdigo-2021-glomerular-diseases',
      type: 'article',
      title: 'KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases',
      authors: ['Rovin, B.H.', 'et al.'],
      source: 'Kidney International',
      url: 'https://doi.org/10.1016/j.kint.2021.05.023',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'system-renal', targetType: 'system', relationship: 'related', label: 'Renal System' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
    { targetId: 'condition-iga-nephropathy', targetType: 'condition', relationship: 'related', label: 'IgA Nephropathy' },
  ],

  tags: {
    systems: ['renal', 'immune', 'integumentary'],
    topics: ['pediatrics', 'vasculitis', 'nephrology', 'dermatology'],
    keywords: ['HSP', 'IgA vasculitis', 'purpura', 'palpable purpura', 'abdominal pain', 'nephritis', 'glomerulonephritis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'nephrology'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default henochSchonlein;
