/**
 * Polycystic Kidney Disease - Comprehensive Educational Content
 *
 * Covers ADPKD, ARPKD, pathophysiology, diagnosis, and management
 * with complications and emerging therapies.
 */

import { EducationalContent } from '../../types';

export const polycysticKidneyDisease: EducationalContent = {
  id: 'condition-polycystic-kidney-disease',
  type: 'condition',
  name: 'Polycystic Kidney Disease',
  alternateNames: ['PKD', 'ADPKD', 'ARPKD', 'Autosomal Dominant PKD', 'Autosomal Recessive PKD'],

  levels: {
    1: {
      level: 1,
      summary: 'Polycystic kidney disease is when many fluid-filled sacs called cysts grow in your kidneys, causing them to get bigger and stop working over time.',
      explanation: `Polycystic kidney disease (PKD) is a condition that runs in families where many cysts (like small water balloons) grow inside the kidneys.

**What Are Cysts?**
- Cysts are round sacs filled with fluid
- In PKD, hundreds or thousands of cysts grow in both kidneys
- The cysts slowly get bigger over many years
- As cysts grow, they damage normal kidney tissue

**Why Does This Happen?**
- PKD is caused by changes in genes that you inherit from your parents
- These genes normally help kidney cells grow correctly
- When the genes don't work right, cells form cysts instead of normal tissue

**Two Main Types:**

**1. Adult Type (ADPKD)**
- Most common (1 in 400-1000 people)
- Inherited from one parent
- Symptoms usually start in adulthood (30s-50s)
- Cysts grow slowly over decades

**2. Childhood Type (ARPKD)**
- Rare
- Inherited from both parents
- Often found before birth or in infancy
- More severe

**What Symptoms Might You Notice?**
- Pain in your back or side
- Blood in your urine
- High blood pressure
- Feeling full or bloated (from large kidneys)
- Headaches
- Urinary tract infections

**What Happens Over Time?**
- About half of people with ADPKD will need dialysis or a transplant by age 60
- The kidneys can become very large (sometimes as big as a football!)
- Other organs can also develop cysts (liver is common)

**Can It Be Treated?**
- There is no cure yet, but treatments can slow it down
- Controlling blood pressure is very important
- Drinking plenty of water may help
- New medications can slow cyst growth
- Dialysis or transplant when kidneys fail`,
      keyTerms: [
        { term: 'cyst', definition: 'A round, fluid-filled sac that can grow in organs' },
        { term: 'polycystic', definition: 'Having many cysts', pronunciation: 'pol-ee-SIS-tik' },
        { term: 'inherited', definition: 'Passed down from parents through genes' },
        { term: 'genes', definition: 'Instructions in your cells that control how your body grows and works' },
      ],
      analogies: [
        'Imagine your kidney is like a sponge. In PKD, water balloons grow inside the sponge, taking up space and making it harder for the sponge to do its job.',
        'PKD cysts are like weeds in a garden - they keep growing and crowd out the healthy plants (kidney tissue).',
      ],
      examples: [
        'A 40-year-old man notices blood in his urine and back pain. An ultrasound shows his kidneys are full of cysts like his father who needed a transplant.',
        'A pregnant woman has an ultrasound that shows her baby has very large, bright kidneys - the baby is diagnosed with ARPKD.',
      ],
    },
    2: {
      level: 2,
      summary: 'Polycystic kidney disease is a genetic disorder featuring bilateral renal cysts, with ADPKD (PKD1/PKD2 mutations) being most common and progressing to ESKD in 50% by age 60, while ARPKD presents in childhood with high morbidity.',
      explanation: `## Overview

**Two Major Forms:**

| Feature | ADPKD | ARPKD |
|---------|-------|-------|
| Inheritance | Autosomal dominant | Autosomal recessive |
| Prevalence | 1:400-1000 | 1:20,000 |
| Genes | PKD1 (85%), PKD2 (15%) | PKHD1 |
| Onset | Adulthood | Infancy/childhood |
| Liver involvement | Cysts (common) | Congenital hepatic fibrosis |
| ESKD | ~50% by age 60 | Variable; many in childhood |

## Autosomal Dominant PKD (ADPKD)

### Genetics
- **PKD1** (chromosome 16): 85% of cases; earlier ESKD (average age 55)
- **PKD2** (chromosome 4): 15% of cases; later ESKD (average age 75)
- **Two-hit hypothesis**: Germline mutation + somatic second hit → cyst formation

### Clinical Features
**Renal Manifestations:**
- Progressive cyst growth and kidney enlargement
- Flank/back pain (cyst rupture, hemorrhage, infection)
- Hematuria (gross or microscopic)
- Nephrolithiasis (20%)
- Urinary tract infections
- Hypertension (common and early)
- ESKD (50% by age 60)

**Extrarenal Manifestations:**
- Hepatic cysts (70-80%; more common/severe in women)
- Intracranial aneurysms (5-10%; family history increases risk)
- Cardiac valvular abnormalities (mitral valve prolapse)
- Colonic diverticula
- Abdominal wall/inguinal hernias

### Diagnosis
**Imaging Criteria (Ultrasound):**
| Age | Diagnostic Cysts (per kidney) |
|-----|------------------------------|
| 15-39 | ≥3 total (both kidneys) |
| 40-59 | ≥2 in each kidney |
| ≥60 | ≥4 in each kidney |

- Negative ultrasound at age >40 essentially excludes ADPKD
- CT/MRI more sensitive for small cysts
- Genetic testing if ultrasound inconclusive or for family planning

### Management
**Blood Pressure Control:**
- Target <130/80 mmHg (HALT-PKD)
- ACE inhibitors or ARBs preferred
- Reduces cardiovascular risk and may slow progression

**Tolvaptan:**
- Vasopressin V2 receptor antagonist
- Reduces cyst growth and slows GFR decline
- FDA-approved for adults with rapidly progressive ADPKD
- Requires monitoring for liver toxicity

**General Measures:**
- Adequate hydration (suppress vasopressin)
- Avoid nephrotoxins, caffeine (controversial)
- Pain management (often challenging)
- Treat UTIs promptly (cyst infections need prolonged antibiotics)

## Autosomal Recessive PKD (ARPKD)

### Genetics
- PKHD1 gene (fibrocystin)
- Both parents are carriers
- 25% recurrence risk for each pregnancy

### Clinical Features
- Prenatal: Oligohydramnios, enlarged hyperechoic kidneys
- Neonatal: Pulmonary hypoplasia (may be fatal), Potter sequence
- Childhood: Hypertension, progressive CKD
- Liver: Congenital hepatic fibrosis → portal hypertension

### Prognosis
- 30-50% neonatal mortality (pulmonary hypoplasia)
- Survivors: Variable progression; some reach adulthood
- Liver disease may dominate clinical picture

## Complications and Their Management

### Cyst Infection
- Suspect if fever, flank pain, elevated inflammatory markers
- Diagnosis: CT (cyst wall enhancement), PET scan
- Treatment: Lipophilic antibiotics (fluoroquinolones, TMP-SMX) for 4-6 weeks
- May require cyst drainage or nephrectomy

### Cyst Hemorrhage
- Presents with sudden flank pain, gross hematuria
- Usually self-limited; bed rest, hydration, analgesia
- CT to confirm and rule out other causes
- Rarely requires embolization or surgery

### Intracranial Aneurysm
- Screen high-risk patients (family history of aneurysm, high-risk occupations)
- MRA or CTA
- Refer for neurosurgical evaluation if found
- Rupture risk correlates with aneurysm size`,
      keyTerms: [
        { term: 'ADPKD', definition: 'Autosomal Dominant Polycystic Kidney Disease; most common hereditary kidney disease' },
        { term: 'ARPKD', definition: 'Autosomal Recessive Polycystic Kidney Disease; severe form presenting in childhood' },
        { term: 'PKD1/PKD2', definition: 'Genes encoding polycystin-1 and polycystin-2; mutated in ADPKD' },
        { term: 'tolvaptan', definition: 'Vasopressin receptor blocker that slows cyst growth in ADPKD', pronunciation: 'tol-VAP-tan' },
        { term: 'two-hit hypothesis', definition: 'Model where germline mutation plus somatic second hit triggers cyst formation' },
        { term: 'hepatic fibrosis', definition: 'Liver scarring; seen in ARPKD causing portal hypertension' },
      ],
      analogies: [
        'The two-hit hypothesis is like having a weakened lock (germline mutation) that only breaks when a second stress (somatic mutation) occurs.',
        'Tolvaptan works by turning down a signal (vasopressin) that tells cysts to grow bigger.',
      ],
    },
    3: {
      level: 3,
      summary: 'ADPKD pathophysiology involves ciliary dysfunction leading to abnormal cell proliferation and fluid secretion, with disease progression predicted by total kidney volume and managed through lifestyle modification, tolvaptan, and treatment of complications.',
      explanation: `## Molecular Pathophysiology

### Polycystins and Cilia
**Polycystin-1 (PC1) and Polycystin-2 (PC2):**
- Form a receptor-channel complex on primary cilia
- Primary cilia: Hair-like organelles sensing fluid flow
- PC1: Receptor with large extracellular domain
- PC2: Calcium channel (TRP family)

**Ciliary Dysfunction:**
- Loss of PC1/PC2 function → disrupted Ca²⁺ signaling
- Cells lose polarity and proliferate
- Increased fluid secretion into cyst cavity

### Downstream Pathways

**cAMP Signaling:**
- Low intracellular Ca²⁺ → increased cAMP
- cAMP promotes cell proliferation (via Ras/ERK)
- cAMP promotes fluid secretion (via CFTR)
- Vasopressin (AVP) increases cAMP → Rationale for tolvaptan

**mTOR Pathway:**
- PC1 normally inhibits mTOR
- Loss of PC1 → mTOR hyperactivation → cell growth
- Rationale for mTOR inhibitor trials (mixed results)

**Other Pathways:**
- Wnt signaling
- JAK/STAT signaling
- Growth factors (EGF, VEGF)

### Cyst Formation and Growth
1. **Initiation**: "Second hit" in tubular epithelial cell
2. **Cystic dilation**: Cell proliferation, fluid secretion
3. **Detachment**: Cyst disconnects from tubule when >2mm
4. **Continued growth**: Autonomous fluid secretion; can reach >10cm

### Progression to ESKD
- Cysts compress and destroy normal parenchyma
- Fibrosis, inflammation, ischemia
- GFR preserved until significant parenchyma lost (~60 years typically)

## Clinical Assessment and Prognosis

### Total Kidney Volume (TKV)

**Prognostic Marker:**
- TKV correlates with GFR decline
- height-adjusted TKV (htTKV) standardizes comparison
- >600 mL or htTKV >600 mL/m = likely progressive disease

**Mayo Imaging Classification:**
| Class | htTKV Growth | ESKD Risk |
|-------|--------------|-----------|
| 1A | <1.5%/year | Low |
| 1B | 1.5-3%/year | Low |
| 1C | 3-4.5%/year | Moderate |
| 1D | 4.5-6%/year | High |
| 1E | >6%/year | Very High |

**PROPKD Score:**
- Combines genetic (PKD1 truncating vs. non-truncating), clinical, sex
- Predicts age at ESKD

### Imaging Modalities
- **Ultrasound**: Diagnosis, screening family members
- **MRI**: TKV measurement, research, trial endpoints
- **CT**: Complications (hemorrhage, infection, stones)

## Tolvaptan Therapy

### Mechanism
- Selective V2 receptor antagonist
- Reduces cAMP in collecting duct principal cells
- Decreases cyst fluid secretion and cell proliferation

### Evidence
**TEMPO 3:4 Trial:**
- Slowed TKV growth (2.8% vs. 5.5%/year)
- Slowed eGFR decline
- Early ADPKD with TKV ≥750 mL

**REPRISE Trial:**
- Slowed eGFR decline in later-stage ADPKD (CKD stages 2-4)
- -2.34 mL/min/1.73m²/year difference

### Patient Selection (FDA criteria)
- Adults with ADPKD at risk for rapid progression
- CKD stages 1-4
- Evidence of rapid disease: htTKV >600 mL/m or growth >5%/year

### Practical Management
**Dosing:**
- Start 45/15 mg (morning/afternoon)
- Titrate to 60/30 mg then 90/30 mg if tolerated

**Monitoring:**
- LFTs monthly for 18 months, then every 3 months
- Aquaretic effects: Polyuria (4-6 L/day), thirst, nocturia
- Avoid dehydration; educate about fluid intake
- REMS program (liver safety)

**Contraindications:**
- Liver disease or elevated LFTs
- Inability to perceive thirst or access water
- Concomitant strong CYP3A4 inhibitors

## Management of Complications

### Pain
**Etiologies:**
- Cyst hemorrhage, infection, rupture
- Nephrolithiasis
- Massive kidney enlargement (mass effect)

**Management:**
- Acute: Rule out infection; supportive care
- Chronic: Multimodal approach (avoid NSAIDs if CKD)
- Refractory: Cyst aspiration/sclerotherapy, laparoscopic fenestration
- Nephrectomy for massive symptomatic kidneys (usually at transplant)

### Nephrolithiasis
- 20-25% of ADPKD patients
- Uric acid and calcium oxalate stones most common
- Metabolic workup indicated
- Citrate supplementation may help

### Cyst Infection
**Diagnosis Challenges:**
- Cultures often negative (cyst not communicating with urine)
- CT: Cyst wall thickening, heterogeneous contents
- FDG-PET: Increased uptake in infected cyst

**Treatment:**
- Lipophilic antibiotics: Ciprofloxacin, TMP-SMX, chloramphenicol
- Duration: 4-6 weeks minimum
- Percutaneous or surgical drainage for large, refractory cysts

### Hepatic Cysts
- Usually asymptomatic
- Massive cystic liver disease (severe phenotype, more common in women)
- Symptoms: Abdominal distension, early satiety, pain
- Treatment: Somatostatin analogs (octreotide), fenestration, resection, liver transplant`,
      keyTerms: [
        { term: 'polycystin', definition: 'Proteins (PC1, PC2) encoded by PKD genes; form complex on primary cilia' },
        { term: 'primary cilia', definition: 'Hair-like cellular organelles that sense fluid flow; dysfunctional in PKD' },
        { term: 'TKV', definition: 'Total Kidney Volume; prognostic marker measured by MRI' },
        { term: 'Mayo classification', definition: 'System classifying ADPKD progression risk based on htTKV growth rate' },
        { term: 'CFTR', definition: 'Chloride channel (cystic fibrosis gene); mediates fluid secretion into cysts' },
        { term: 'aquaretic', definition: 'Causing water loss without electrolyte loss; describes tolvaptans effect' },
      ],
      clinicalNotes: 'Use htTKV and Mayo classification to identify patients likely to benefit from tolvaptan. Monitor LFTs vigilantly - tolvaptan requires REMS enrollment. For cyst infections, imaging (CT, PET) is more useful than cultures; treat with lipophilic antibiotics for prolonged courses. Screen for intracranial aneurysms if family history positive.',
    },
    4: {
      level: 4,
      summary: 'Advanced ADPKD management requires integrating prognostic tools, optimizing tolvaptan therapy, managing complex complications, and preparing for kidney replacement therapy while addressing extrarenal manifestations and family planning considerations.',
      explanation: `## Prognostic Models and Risk Stratification

### PROPKD Score
**Components:**
- Male sex: +1 point
- Hypertension before age 35: +2 points
- First urologic event before 35: +2 points
- PKD2 mutation: 0 points
- PKD1 non-truncating: +2 points
- PKD1 truncating: +4 points

**Interpretation:**
| Score | Predicted ESKD Age |
|-------|-------------------|
| 0-3 | Low risk (>70 years) |
| 4-6 | Intermediate (60-70) |
| 7-9 | High risk (<60 years) |

### Mayo htTKV Classification Application
- Class 1C-1E: Consider tolvaptan
- Class 1A-1B: Supportive care; re-evaluate if progression

### Genetic Testing Utility
**Indications:**
- Uncertain diagnosis (atypical imaging, no family history)
- Family planning/preimplantation genetic diagnosis
- Prognostication (PKD1 truncating vs. non-truncating)
- Living donor evaluation (exclude disease)

**Considerations:**
- ~10% have no detectable mutation (deep intronic, mosaicism)
- Genetic counseling essential

## Optimizing Tolvaptan Therapy

### Managing Aquaresis
**Patient Education:**
- Expect 4-6 L urine/day; plan bathroom access
- Fluid intake: Drink to thirst; aim for dilute urine
- Night dose causes nocturia; some adjust timing

**Titration Strategy:**
- Start low, increase monthly if tolerated
- Goal: Highest tolerated dose (90/30 mg)
- Dose reduction if quality of life severely impacted

### Hepatotoxicity
**Monitoring Protocol:**
- ALT/AST monthly for 18 months
- Every 3 months thereafter
- Stop if ALT/AST >3× ULN or symptoms

**Risk Factors:**
- Female sex
- Obesity
- Concomitant hepatotoxic drugs

### Drug Interactions
- CYP3A4 inhibitors (ketoconazole, clarithromycin): Increase levels; avoid or reduce dose
- CYP3A4 inducers (rifampin): Decrease levels; avoid
- Grapefruit juice: Increase levels

## Complex Complications

### Intracranial Aneurysms (ICA)

**Screening Recommendations:**
- Family history of ICA or subarachnoid hemorrhage: Screen all adults
- High-risk occupations (pilots, etc.): Consider screening
- No family history: Controversial; shared decision-making

**Modality:**
- MRA preferred (no contrast, no radiation)
- CTA if MRA contraindicated

**Management:**
- Small aneurysms (<7mm, anterior circulation): Observe, repeat imaging
- Larger or posterior circulation: Neurosurgical evaluation
- Smoking cessation, BP control for all

### Massive Polycystic Liver Disease (PLD)

**Grading (Gigot Classification):**
- Type I: Few large cysts
- Type II: Multiple medium cysts with preserved parenchyma
- Type III: Massive, diffuse involvement

**Symptoms:**
- Abdominal distension, pain
- Early satiety, malnutrition
- Inferior vena cava compression
- Hepatic venous outflow obstruction (rare)

**Treatment Options:**
| Intervention | Indication |
|--------------|------------|
| Somatostatin analogs | Moderate symptoms; may reduce liver volume |
| Cyst aspiration/sclerotherapy | Dominant symptomatic cysts |
| Laparoscopic fenestration | Superficial cysts |
| Hepatic resection | Localized disease |
| Liver transplantation | Massive, refractory disease |

### Cardiac Complications
**Mitral Valve Prolapse:**
- Present in ~25% of ADPKD patients
- Usually mild; routine echo if murmur heard
- Endocarditis prophylaxis per guidelines (only for prosthetic valves)

**Hypertension:**
- Activated RAAS (cyst compression of vasculature)
- Target <130/80 mmHg (HALT-PKD showed benefit)
- ACEi/ARBs preferred (theoretically reno-protective)

## Kidney Replacement Therapy in ADPKD

### Dialysis Considerations
- Large kidneys: Peritoneal dialysis may be challenging (less space)
- Hemodialysis: Standard; higher hematocrit may reduce EPO need
- Cyst complications continue on dialysis

### Transplantation
**Timing of Native Nephrectomy:**
- Not routine; only if symptomatic
- Indications: Recurrent infections, massive size preventing transplant, pain
- Can be done pre-transplant, at transplant, or post-transplant

**Outcomes:**
- Excellent; ADPKD patients do well post-transplant
- No recurrence in transplant

### Living Donor Evaluation
- Screen for PKD before donation
- MRI preferred in young at-risk individuals
- Genetic testing if imaging equivocal
- Careful exclusion essential (donor safety)

## Family Planning

### Preimplantation Genetic Diagnosis (PGD)
- IVF with embryo testing for PKD mutation
- Allows selection of unaffected embryos
- Available for ADPKD and ARPKD

### Prenatal Diagnosis
- Chorionic villus sampling or amniocentesis
- ARPKD: Ultrasound may show enlarged, echogenic kidneys
- Counseling on options

### Pregnancy in ADPKD
- Generally well-tolerated
- Increased risk: Preeclampsia, especially if hypertensive
- Avoid tolvaptan during pregnancy
- ACEi/ARBs contraindicated; switch before conception`,
      keyTerms: [
        { term: 'PROPKD score', definition: 'Clinical and genetic scoring system predicting age at ESKD in ADPKD' },
        { term: 'PGD', definition: 'Preimplantation Genetic Diagnosis; IVF-based testing to select unaffected embryos' },
        { term: 'Gigot classification', definition: 'Grading system for polycystic liver disease severity' },
        { term: 'somatostatin analog', definition: 'Medications (octreotide, lanreotide) that may reduce liver cyst volume' },
        { term: 'native nephrectomy', definition: 'Removal of original kidneys; sometimes needed in ADPKD for symptoms or transplant space' },
        { term: 'HALT-PKD', definition: 'Trial showing intensive BP control (<130/80) slows TKV growth in early ADPKD' },
      ],
      clinicalNotes: 'Combine Mayo htTKV classification with PROPKD score for comprehensive prognostication. Screen for ICA in patients with family history of aneurysm or SAH. Massive polycystic liver disease may require liver transplant in severe cases. Native nephrectomy is not routine at transplant unless symptomatic. Genetic testing helps with family planning and living donor evaluation.',
    },
    5: {
      level: 5,
      summary: 'Expert PKD management integrates molecular genetics, novel therapeutic targets, biomarker-guided therapy, multidisciplinary care models, and cutting-edge research including gene therapy and precision medicine approaches.',
      explanation: `## Advanced Molecular Genetics

### Genotype-Phenotype Correlations

**PKD1 Mutation Types:**
- Truncating (nonsense, frameshift): Most severe; ESKD ~55 years
- Non-truncating (missense): Milder; ESKD ~67 years
- In-frame deletions: Intermediate severity
- 5' mutations more severe than 3'

**PKD2:**
- Uniformly milder than PKD1
- ESKD ~75 years
- More variability than previously thought

**Mosaicism:**
- Somatic mosaicism in ~5-10% with no family history
- May explain milder phenotypes
- Important for genetic counseling (lower recurrence risk)

### Modifier Genes and Environment
- Same family, same mutation → variable phenotypes
- Modifier genes: TSC2 contiguous gene syndrome (severe), GANAB
- Environmental: Caffeine (controversial), smoking, obesity

### Ciliopathy Overlap
- ADPKD is one of many ciliopathies
- Overlap syndromes with nephronophthisis, Bardet-Biedl
- GANAB mutations: Milder PKD + protein processing defects

## Novel Therapeutic Targets

### cAMP Pathway Modulation
**Beyond Tolvaptan:**
- Somatostatin analogs (octreotide): Reduce cAMP in liver and kidney
- LANTERN trial: Lanreotide reduced liver volume
- Kidney effects less pronounced

### mTOR Inhibition
**Sirolimus/Everolimus Trials:**
- Preclinical promise not confirmed in humans
- SUISSE, SIRENA studies: No slowing of TKV or GFR decline
- Toxicity concerns

### Tyrosine Kinase Inhibitors
**Targeting EGFR and Src:**
- Bosutinib (Src inhibitor): Slowed TKV growth but GI toxicity limited use
- EGFR inhibitors: Preclinical interest

### Metabolic Reprogramming
**Warburg Effect in PKD:**
- Cyst cells shift to aerobic glycolysis
- 2-deoxyglucose, ketogenic diet: Preclinical efficacy
- Clinical trials of dietary interventions ongoing

### CFTR Inhibition
- CFTR mediates fluid secretion into cysts
- CFTR inhibitors: Reduce cyst growth in models
- Concern: Could worsen cystic fibrosis carrier phenotype

### STAT3 and JAK Inhibition
- STAT3 activated in cysts
- JAK inhibitors (ruxolitinib): Under investigation

## Gene Therapy and Precision Approaches

### Antisense Oligonucleotides (ASOs)
- Target mRNA to reduce mutant protein
- PKD1 is challenging (very large gene)
- PKHD1 ASOs in development for ARPKD

### Gene Editing
**CRISPR Approaches:**
- Correction of PKD mutations: Proof of concept
- Delivery to kidney tubules remains challenging
- Somatic cell therapy (not germline)

### Personalized Medicine Vision
- Genotype-guided therapy intensity
- Biomarker-driven treatment decisions
- Mutation-specific therapies

## Biomarkers and Imaging Innovation

### Novel Biomarkers
**Blood/Urine:**
- Copeptin: Vasopressin surrogate; correlates with progression
- MCP-1 (urinary): Inflammation marker
- Micro-RNA profiles: Research stage

**Imaging:**
- Automated TKV measurement (AI-based)
- Diffusion-weighted MRI: Tissue characterization
- Cyst burden quantification algorithms

### Functional Imaging
- BOLD MRI: Kidney oxygenation
- ASL (arterial spin labeling): Renal perfusion
- May detect early changes before TKV increases

## Multidisciplinary Care Models

### PKD Specialty Clinics
**Team Composition:**
- Nephrologist with PKD expertise
- Genetic counselor
- Urologist (stone/pain management)
- Hepatologist (severe liver involvement)
- Pain management specialist
- Social worker/patient navigator

**Services:**
- Genetic testing and counseling
- Risk stratification and prognostication
- Tolvaptan initiation and monitoring
- Complication management
- Transition to RRT planning

### Patient Registries and Research Networks
- PKD Foundation ADPKD Registry
- CRISP (Consortium for Radiologic Imaging Studies of PKD)
- European ERPKDC
- Enable clinical trial recruitment and natural history data

## ARPKD Advances

### Neonatal Management
- Respiratory support for pulmonary hypoplasia
- Dialysis feasible in infancy if needed
- Nutritional support

### Long-Term Care
- Hepatorenal fibrocystic disease spectrum
- Portal hypertension may dominate (variceal bleeding)
- Combined liver-kidney transplant in some cases

### Emerging Therapies
- PKHD1-targeted therapies in development
- Gene therapy approaches
- No approved disease-modifying therapy yet

## Global and Ethical Considerations

### Access to Tolvaptan
- Expensive (>$100,000/year in US)
- Access challenges in many countries
- Advocacy for coverage and access

### Genetic Testing Ethics
- Insurance implications
- Disclosure to at-risk relatives
- Testing minors: Wait until adulthood unless medical indication

### Quality of Life Research
- Chronic pain significantly impacts QoL
- Aquaretic symptoms of tolvaptan reduce QoL
- Balance treatment burden vs. benefit

### Clinical Trial Participation
- Essential for advancing therapies
- PKD Foundation resources for trial matching
- Patient engagement in research design`,
      keyTerms: [
        { term: 'copeptin', definition: 'Vasopressin surrogate biomarker; elevated levels predict faster progression' },
        { term: 'CRISP', definition: 'Consortium for Radiologic Imaging Studies of PKD; landmark natural history study' },
        { term: 'ciliopathy', definition: 'Group of genetic disorders caused by defects in primary cilia; includes PKD' },
        { term: 'Warburg effect', definition: 'Shift to aerobic glycolysis in cyst cells; metabolic target for therapy' },
        { term: 'TSC2 contiguous gene syndrome', definition: 'Deletion affecting both PKD1 and TSC2; causes severe early PKD with tuberous sclerosis' },
        { term: 'ASO', definition: 'Antisense oligonucleotide; RNA-targeting therapy approach for genetic diseases' },
      ],
      clinicalNotes: `Key clinical pearls:
1. PKD1 truncating mutations have worst prognosis - genetic testing informs counseling
2. Copeptin is emerging as a progression biomarker complementing TKV
3. Metabolic therapies (ketogenic diet, caloric restriction) under clinical investigation
4. Gene therapy for PKD remains distant but ASOs advancing for ARPKD
5. Multidisciplinary PKD clinics improve outcomes and patient experience
6. Address tolvaptan access barriers; advocate for coverage
7. ARPKD requires hepatology collaboration for portal hypertension management`,
    },
  },

  media: [
    {
      id: 'pkd-pathophysiology',
      type: 'diagram',
      filename: 'pkd-pathophysiology.svg',
      title: 'PKD Molecular Pathophysiology',
      description: 'Diagram showing polycystin signaling and cyst formation pathways',
    },
    {
      id: 'mayo-classification',
      type: 'diagram',
      filename: 'mayo-classification.svg',
      title: 'Mayo htTKV Classification',
      description: 'Visual representation of Mayo imaging classification for ADPKD prognosis',
    },
  ],

  citations: [
    {
      id: 'kdigo-adpkd-2015',
      type: 'article',
      title: 'KDIGO Controversies Conference on ADPKD',
      authors: ['Chapman AB', 'et al.'],
      source: 'Kidney International',
    },
    {
      id: 'tempo-3-4',
      type: 'article',
      title: 'Tolvaptan in Patients with Autosomal Dominant Polycystic Kidney Disease',
      authors: ['Torres VE', 'et al.'],
      source: 'New England Journal of Medicine',
      page: '367:2407-2418',
    },
    {
      id: 'brenner-rector-pkd',
      type: 'textbook',
      title: 'Polycystic Kidney Disease',
      source: "Brenner and Rector's The Kidney",
      chapter: '45',
    },
  ],

  crossReferences: [
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD' },
    { targetId: 'process-dialysis', targetType: 'process', relationship: 'related', label: 'Dialysis' },
    { targetId: 'process-kidney-transplantation', targetType: 'process', relationship: 'related', label: 'Kidney Transplant' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'AKI (cyst complications)' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    topics: ['nephrology', 'genetics', 'chronic disease', 'hereditary disorders'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default polycysticKidneyDisease;
