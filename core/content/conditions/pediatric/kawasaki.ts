/**
 * Kawasaki Disease - Pediatric Condition
 *
 * Comprehensive content on Kawasaki disease including diagnosis, echocardiogram findings,
 * treatment protocols, and coronary artery aneurysm management.
 */

import { EducationalContent } from '../../types';

export const kawasaki: EducationalContent = {
  id: 'condition-kawasaki-disease',
  type: 'condition',
  name: 'Kawasaki Disease',
  alternateNames: ['Mucocutaneous Lymph Node Syndrome', 'Kawasaki Syndrome', 'KD'],

  levels: {
    1: {
      level: 1,
      summary: 'Kawasaki disease is a condition that causes swelling in blood vessels throughout the body, mostly affecting young children. It needs quick treatment to prevent heart problems.',
      explanation: `## What is Kawasaki Disease?

Kawasaki disease is a childhood illness that causes inflammation (swelling) in blood vessels throughout the body. It mostly affects children under 5 years old, especially those of Asian descent.

The good news is that with treatment, most children recover completely without lasting problems.

## Warning Signs and Symptoms

Kawasaki disease has several telltale signs. Doctors remember them with letters:

**F - Fever** (very high, lasting more than 5 days)
**R - Rash** (often on the trunk)
**E - Red eyes** (both eyes, without discharge)
**C - Cracked lips** and strawberry tongue
**A - Abnormal hands/feet** (swelling, redness)
**L - Large lymph nodes** in the neck

The fever is usually very high (often 102-104°F or 39-40°C) and doesn't get better with usual fever medicines.

## Why Quick Treatment Matters

The biggest concern with Kawasaki disease is its effect on the heart. The inflammation can cause the blood vessels that supply the heart (coronary arteries) to weaken and form balloon-like bulges called aneurysms.

Getting treatment early (within 10 days of fever starting) greatly reduces the risk of heart damage.

## Treatment

Children with Kawasaki disease stay in the hospital for treatment:

1. **IVIG (Intravenous Immunoglobulin)**: A special medicine given through a vein that helps calm the immune system
2. **Aspirin**: Helps reduce fever and prevent blood clots

Most children feel much better within 24-48 hours after starting IVIG treatment.

## Follow-up Care

After treatment, children need regular heart check-ups with echocardiograms (heart ultrasound) for several months to make sure the heart arteries are staying healthy.

Most children fully recover and can live normal, healthy lives!`,
      keyTerms: [
        { term: 'Kawasaki disease', definition: 'A childhood illness that causes swelling in blood vessels throughout the body' },
        { term: 'inflammation', definition: 'Redness, swelling, heat, and pain that happens when the body fights infection or injury' },
        { term: 'aneurysm', definition: 'A weak spot in a blood vessel wall that bulges out like a balloon' },
        { term: 'echocardiogram', definition: 'An ultrasound test that uses sound waves to create pictures of the heart' },
        { term: 'IVIG', definition: 'A medicine made from antibodies that helps calm down an overactive immune system' },
      ],
      analogies: [
        'Kawasaki disease is like the body\'s security system getting confused and attacking friendly blood vessels instead of just germs.',
        'An aneurysm is like a weak spot on a bicycle tire that bulges out when filled with air.',
        'IVIG is like sending in a special team of peacekeepers to calm down an overactive security system.',
      ],
      examples: [
        'A 2-year-old boy has had high fever for 6 days, bright red eyes, swollen hands, and a rash. His doctor suspects Kawasaki disease.',
        'A 4-year-old girl receives IVIG treatment and her fever goes away within 24 hours.',
        'A child who had Kawasaki disease gets echocardiograms every few months to check her heart arteries.',
      ],
      patientCounselingPoints: [
        'Complete the full course of aspirin as prescribed, even if your child feels better',
        'Seek medical care if fever returns after initial treatment',
        'Keep all follow-up appointments for heart monitoring',
        'Most children recover completely with proper treatment',
      ],
    },

    2: {
      level: 2,
      summary: 'Kawasaki disease is an acute vasculitis of childhood affecting medium-sized arteries, particularly the coronary arteries. Prompt diagnosis and treatment with IVIG and aspirin within 10 days significantly reduces the risk of coronary artery aneurysms.',
      explanation: `## What is Kawasaki Disease?

Kawasaki disease (KD) is an acute systemic vasculitis that primarily affects children under 5 years old. It is the leading cause of acquired heart disease in children in developed countries.

**Key Statistics:**
- Peak age: 6 months to 2 years (80% of cases)
- More common in boys than girls
- Higher incidence in children of Asian descent
- About 4,000-5,000 cases per year in the United States

The exact cause is unknown, but evidence suggests an abnormal immune response to an infectious trigger in genetically susceptible children.

## Diagnostic Criteria

**Classic (Complete) Kawasaki Disease: Fever ≥5 days PLUS 4 of 5 criteria:**

1. **Extremity changes:**
   - Acute phase: Erythema, edema of hands/feet
   - Subacute phase: Desquamation (peeling) of fingers/toes

2. **Rash:** Polymorphous, often truncal

3. **Conjunctivitis:** Bilateral, non-exudative (no discharge)

4. **Oral changes:**
   - Strawberry tongue
   - Cracked, red lips
   - Pharyngeal erythema

5. **Cervical lymphadenopathy:** Usually unilateral, ≥1.5 cm

**Incomplete (Atypical) Kawasaki Disease:**
- Fever ≥5 days PLUS 2-3 of the above criteria
- More common in infants (<6 months)
- Higher risk of coronary complications
- Diagnosis supported by laboratory findings and echocardiogram

## Laboratory Findings

**Common abnormalities:**
- Elevated ESR and CRP (markers of inflammation)
- Leukocytosis (high white blood cell count)
- Thrombocytosis (high platelets - peaks in week 2-3)
- Mild anemia
- Elevated liver enzymes (AST/ALT)
- Hyponatremia (low sodium)

## Cardiac Complications

**Coronary Artery Abnormalities:**
- Coronary artery dilation (early)
- Coronary artery aneurysms (peak ~4 weeks)
- Can lead to myocardial infarction, sudden death

**Other cardiac findings:**
- Mitral regurgitation
- Pericardial effusion
- Myocarditis (inflammation of heart muscle)

## Treatment

**Initial Therapy (within 10 days of fever):**

| Treatment | Dose | Purpose |
|-----------|------|---------|
| IVIG | 2 g/kg over 10-12 hours | Reduce inflammation, prevent aneurysms |
| Aspirin | High dose (80-100 mg/kg/day) | Anti-inflammatory, antiplatelet |

**After fever resolves (48-72 hours):**
- Switch aspirin to low dose (3-5 mg/kg/day) for 6-8 weeks
- Continue longer if coronary abnormalities present

**Refractory Kawasaki Disease:**
- ~10-20% fail initial IVIG (persistent or recurrent fever)
- Second dose of IVIG
- May add corticosteroids, infliximab, or other therapies

## Echocardiogram Monitoring

**Baseline:** At diagnosis
**2 weeks:** After treatment
**6-8 weeks:** Reassessment
**Long-term:** If abnormalities found

Echocardiogram evaluates:
- Coronary artery size (z-scores)
- Left ventricular function
- Valve function
- Pericardial effusion

## Long-term Outlook

- With treatment: <5% develop coronary aneurysms
- Without treatment: 15-25% develop coronary aneurysms
- Most aneurysms resolve within 1-2 years
- Giant aneurysms (>8 mm) may cause lifelong complications`,
      keyTerms: [
        { term: 'vasculitis', definition: 'Inflammation of blood vessels', pronunciation: 'vas-kyoo-LIE-tis' },
        { term: 'conjunctivitis', definition: 'Inflammation of the conjunctiva (the clear membrane covering the white part of the eye)', pronunciation: 'kon-junk-tih-VYE-tis' },
        { term: 'desquamation', definition: 'Peeling or shedding of the skin', pronunciation: 'des-kwah-MAY-shun' },
        { term: 'thrombocytosis', definition: 'Abnormally high platelet count in the blood', pronunciation: 'throm-boh-sigh-TOE-sis' },
        { term: 'coronary artery aneurysm', definition: 'Abnormal dilation of a coronary artery, the main complication of Kawasaki disease' },
        { term: 'refractory', definition: 'Resistant to treatment; disease that doesn\'t respond to initial therapy' },
      ],
      analogies: [
        'Kawasaki disease is like a friendly fire incident - the body\'s immune system mistakenly attacks its own blood vessels.',
        'Coronary arteries are like fuel lines to an engine - if they weaken and bulge, the engine can\'t get proper fuel supply.',
        'IVIG is like sending reinforcements to help calm down an overactive immune system.',
      ],
      clinicalNotes: 'Incomplete Kawasaki disease should be strongly considered in any infant with prolonged fever ≥7 days and even one clinical feature. Early echocardiogram and consultation are crucial as infants have highest risk of coronary complications.',
    },

    3: {
      level: 3,
      summary: 'Kawasaki disease is an acute medium-vessel vasculitis of childhood with a predilection for coronary arteries. Diagnosis relies on clinical criteria supported by inflammatory markers. Prompt IVIG and aspirin therapy dramatically reduces coronary artery aneurysm formation from 25% to <5%.',
      explanation: `## Pathophysiology and Etiology

**Current Understanding:**
- Etiology unknown; likely triggered by infectious agent(s) in genetically susceptible children
- No person-to-person transmission
- Higher incidence in winter/spring months
- Possible association with viral pathogens (based on seasonal patterns)

**Immunopathogenesis:**
- Superantigen-mediated immune activation
- T-cell activation and cytokine storm (IL-1, IL-6, TNF-α)
- Endothelial cell injury and vascular inflammation
- Predilection for medium-sized muscular arteries

**Genetic Susceptibility:**
- Higher risk in Asian populations (particularly Japan, Korea)
- Familial cases suggest genetic component
- Associated genes: ITPKC, CASP3, BLK, CD40

## Clinical Presentation

**Phases of Kawasaki Disease:**

| Phase | Duration | Key Features |
|-------|----------|--------------|
| Acute | Days 1-10 | High fever, rash, red eyes, swollen hands/feet, irritability |
| Subacute | Weeks 2-4 | Desquamation, thrombocytosis, coronary aneurysms may develop |
| Convalescent | Weeks 6-8 | Symptoms resolve, inflammatory markers normalize |

**Atypical Presentations:**
- KD shock syndrome: Hemodynamic instability, capillary leak
- KD with retropharyngeal edema: May mimic retropharyngeal abscess
- KD with MAS: Macrophage activation syndrome overlap

## Diagnostic Criteria

**Classic Kawasaki Disease (AHA Criteria):**
- Fever ≥5 days (or fewer if treated)
- PLUS ≥4 of 5 clinical criteria:
  1. Extremity changes (acute edema OR subacute desquamation)
  2. Polymorphous exanthem
  3. Bilateral non-exudative conjunctivitis
  4. Oral changes (strawberry tongue, cracked lips)
  5. Cervical lymphadenopathy (≥1.5 cm, usually unilateral)

**Incomplete Kawasaki Disease:**
- Fever ≥5 days with 2-3 clinical criteria
- OR fever ≥7 days with any features
- Diagnosis requires:
  - Supporting lab findings (CRP ≥3.0 mg/dL, ESR ≥40 mm/h)
  - Positive echocardiogram (coronary abnormalities)
  - Exclusion of other diagnoses

**AHA Algorithm for Incomplete KD:**
1. Assess for CRP ≥3.0 AND ESR ≥40
2. If both elevated, perform echocardiogram
3. If coronary abnormalities (z-score ≥2.5) → diagnose KD
4. If normal echo but ≥3 supplemental lab criteria → diagnose KD

## Laboratory Diagnosis

**Inflammatory Markers:**
- CRP: Usually ≥3 mg/dL (often >10)
- ESR: Usually ≥40 mm/h (often >60)
- Procalcitonin: Normal/mildly elevated (helps distinguish from bacterial infection)

**Complete Blood Count:**
- Leukocytosis: WBC 12,000-20,000 (neutrophil predominance)
- Anemia: Normocytic, normochromic
- Thrombocytosis: Platelets >450,000 (peaks week 2-3)

**Chemistry:**
- Mild transaminitis (AST/ALT elevation in 40%)
- Hypoalbuminemia (<3 g/dL)
- Hyponatremia (Na <135)

**Urinalysis:**
- Sterile pyuria (white cells in urine without bacteria)

## Cardiovascular Complications

**Coronary Artery Abnormalities (CAA):**

| Timeframe | Risk |
|-----------|------|
| Untreated | 15-25% develop CAA |
| Treated <10 days | <5% develop CAA |
| Treated >10 days | Risk increases with delay |

**Aneurysm Classification (Japanese Ministry of Health):**

| Classification | Z-score | Internal Diameter |
|----------------|---------|-------------------|
| No abnormality | <2.5 | - |
| Dilation only | 2.5 to <2.5 | - |
| Small aneurysm | ≥2.5 to <5.0 | - |
| Medium aneurysm | - | 5-8 mm |
| Giant aneurysm | - | ≥8 mm |

**Risk Factors for CAA:**
- Male sex
- Age <1 year (incomplete presentation common)
- Delayed IVIG treatment (>10 days)
- Persistent fever after IVIG
- Laboratory markers: Higher CRP, lower albumin, higher WBC
- Resistance to initial IVIG

**Other Cardiac Manifestations:**
- Myocarditis: 20-50% (usually mild)
- Pericardial effusion: ~25%
- Mitral regurgitation: ~20%
- Aortic root dilation
- Ischemia/infarction (from coronary thrombosis)

## Treatment

**Initial Therapy (within 10 days):**

| Medication | Dose | Duration |
|------------|------|----------|
| IVIG | 2 g/kg | Single infusion over 10-12 hours |
| Aspirin | 80-100 mg/kg/day | Until afebrile 48-72 hours |
| Aspirin | 3-5 mg/kg/day | 6-8 weeks minimum |

**IVIG Resistance (Refractory KD):**
- Definition: Persistent or recrudescent fever 36-48 hours after initial IVIG
- Incidence: 10-20%
- Management:
  - Second dose IVIG (2 g/kg)
  - Corticosteroids (methylprednisolone 2 mg/kg/day or pulse 30 mg/kg)
  - Infliximab (5 mg/kg one-time) - TNF-α inhibitor
  - Cyclosporine, anakinra (IL-1 inhibitor) in refractory cases

**Risk Scores for IVIG Resistance:**
- Kobayashi score (Japan)
- Egami score (Japan)
- Formulations less predictive in non-Japanese populations

## Echocardiographic Assessment

**Baseline Studies:**
- Coronary artery diameter measurements (z-scores)
- LV systolic function
- Valvar regurgitation
- Pericardial effusion

**Follow-up Schedule:**

| Timing | Normal Echo | Abnormal Echo |
|--------|-------------|---------------|
| At diagnosis | Baseline | Baseline |
| 2 weeks | Repeat | Repeat |
| 6-8 weeks | Repeat | Repeat |
| Additional | As indicated | 1-3 months, then every 3-6 months |

**Long-term Monitoring:**
- No CAA: Discharge after 6-8 week normal echo
- Regression of CAA: Annual monitoring until regression complete
- Persistent CAA: Lifelong monitoring

## Long-term Management

**Patients with Coronary Aneurysms:**
- Low-dose aspirin (antiplatelet)
- Add warfarin or LMWH for giant aneurysms (>8 mm)
- Consider clopidogrel if aspirin alone insufficient
- Activity restrictions based on aneurysm size
- Stress testing, CT angiography as indicated

**Prognosis:**
- Mortality <0.5% with appropriate treatment
- 50-75% of aneurysms regress within 1-2 years
- Giant aneurysms rarely regress
- Long-term risk of premature atherosclerosis`,
      keyTerms: [
        { term: 'z-score', definition: 'Statistical measure of how many standard deviations a value is from the mean; used to classify coronary artery size in Kawasaki disease' },
        { term: 'superantigen', definition: 'Antigen that activates large numbers of T-cells, causing massive cytokine release' },
        { term: 'retropharyngeal edema', definition: 'Fluid accumulation behind the pharynx; can occur in KD mimicking abscess' },
        { term: 'sterile pyuria', definition: 'White blood cells in urine without bacterial infection; seen in 30-40% of KD cases' },
        { term: 'giant aneurysm', definition: 'Coronary artery aneurysm with internal diameter ≥8 mm; highest risk for thrombosis and ischemia' },
        { term: 'IVIG resistance', definition: 'Failure to respond to initial IVIG with persistent fever >48 hours after infusion' },
      ],
      clinicalNotes: 'In infants <6 months with prolonged fever, maintain high index of suspicion for incomplete KD. Consider empiric IVIG if inflammatory markers elevated and no alternative diagnosis. These infants have highest risk of coronary complications.',
    },

    4: {
      level: 4,
      summary: 'Kawasaki disease represents an immune-mediated vasculitis with specific coronary artery tropism. Advanced understanding includes risk stratification for IVIG resistance, refined echocardiographic criteria, management of refractory cases, and evidence-based long-term cardiovascular surveillance.',
      explanation: `## Advanced Pathophysiology

**Vascular Pathology:**

*Acute Phase (Days 1-10):*
- Necrotizing arteritis with neutrophil infiltration
- Destruction of media and elastica fibers
- Edematous intimal thickening
- Vessel wall inflammation → weakening → aneurysm formation

*Subacute Phase (Weeks 2-4):*
- Lymphocytic infiltration
- Proliferative changes
- Thrombus formation in aneurysms
- Luminal narrowing

*Chronic/Healing Phase:*
- Fibrosis and scarring
- Intimal thickening
- Possible stenosis or recanalization
- Accelerated atherosclerosis in affected segments

**Cytokine Profile:**

| Cytokine | Role | Clinical Correlation |
|----------|------|---------------------|
| TNF-α | Endothelial activation | Fever, acute phase response |
| IL-1 | Systemic inflammation | Coronary artery dilation |
| IL-6 | CRP induction | Thrombocytosis |
| IL-8 | Neutrophil chemotaxis | Vascular inflammation |
| MMPs | Matrix degradation | Vessel wall damage |

**Genetic Associations:**
- **ITPKC**: regulates T-cell signaling; loss-of-function increases KD risk
- **CASP3**: apoptosis-related gene; variants associated with CAA
- **BLK**: B-cell differentiation
- **FCGR2A**: IgG receptor gene polymorphism
- **HLA region**: specific class II alleles

## Diagnostic Refinements

**AHA 2017 Diagnostic Criteria Updates:**

*Coronary Artery Z-score Criteria:*
- Z-score ≥2.5: Coronary artery dilation
- Z-score ≥2.5-<5.0: Small aneurysm
- Z-score ≥5.0-<10.0: Medium/giant aneurysm classification based on absolute size
- Z-score ≥10.0: Giant aneurysm

**Incomplete KD Algorithm (AHA 2017):**

*Step 1:* Fever ≥5 days, 2-3 clinical criteria
*Step 2:* Check CRP ≥3.0 mg/dL AND ESR ≥40 mm/hr
*Step 3:* If both positive → echocardiogram
*Step 4:* If coronary abnormalities (z-score ≥2.5) → treat as KD
*Step 5:* If echo normal but ≥3 supplemental lab criteria → treat as KD

**Supplemental Laboratory Criteria (≥3 required):**
- Albumin ≤3.0 g/dL
- Anemia for age
- Elevated ALT
- WBC ≥15,000
- Platelets ≥450,000 (after day 7)
- Sterile pyuria
- Normal CSF (≤5 WBC) if LP performed

## Risk Stratification for IVIG Resistance

**Kobayashi Score (Japan):**

| Risk Factor | Points |
|-------------|--------|
| Na ≤133 mEq/L | 2 |
| Days of illness ≤4 | 2 |
| AST ≥100 IU/L | 2 |
| CRP ≥10 mg/dL | 1 |
| Age ≤12 months | 1 |
| Platelets ≤300,000 | 1 |

*Score ≥4 predicts resistance with 86% sensitivity, 67% specificity*

**Formosa Score (Taiwan):**
- Better predictor in non-Japanese populations
- Includes age, AST, total bilirubin, platelet count

**Harada Score (Japan):**
- Similar to Kobayashi, alternative validation

**Clinical Implications:**
- High-risk patients: Consider initial adjunctive therapy
- Low-risk patients: Standard IVIG may be sufficient

## Treatment of Refractory Disease

**Definitions:**
- **IVIG resistance:** Persistent/recurrent fever 36-48h after initial IVIG
- **Refractory KD:** Failure of second IVIG dose

**Evidence-Based Options:**

*1. Corticosteroids:*
- **RAISE study:** Prednisolone + IVIG superior for high-risk KD
- **Regimen:** 2 mg/kg/day prednisolone tapered over 3-5 weeks
- **Pulse methylprednisolone:** 30 mg/kg/day for 1-3 days for severe cases
- Reduces CAA in high-risk patients (NNT ~8)

*2. Infliximab (TNF-α inhibitor):*
- **Dose:** 5 mg/kg IV single dose
- **Onset:** Fever resolution usually within 24 hours
- **Evidence:** Small RCTs show faster fever resolution
- **Indication:** IVIG resistance with persistent inflammation

*3. Anakinra (IL-1 receptor antagonist):*
- **Dose:** 4-10 mg/kg/day subcutaneous
- **ANAKID trial:** Ongoing investigation
- **Useful in:** KD shock syndrome, MAS overlap

*4. Cyclosporine:*
- **Mechanism:** Calcineurin inhibitor, reduces T-cell activation
- **Dose:** 3-5 mg/kg/day divided BID
- **Indication:** Refractory after infliximab

*5. Plasma Exchange:*
- **Indication:** KD shock syndrome, refractory MAS
- **Mechanism:** Removes inflammatory mediators, replaces with fresh plasma

## Echocardiographic Surveillance

**Coronary Artery Measurement Protocol:**

1. **Standard views:**
   - LCA: Measured from ostium to bifurcation
   - RCA: Proximal, mid, distal segments
   - LMCA: Short axis measurement

2. **Z-score calculation:**
   - Adjusts for body surface area
   - Use established nomograms (de Zorzi, Dallaire, McCindle)

3. **Aneurysm morphology:**
   - Saccular vs. fusiform
   - Number of aneurysms
   - Presence of thrombus

**Advanced Imaging:**

*CT Angiography:*
- Indication: Poor echo windows, older patients with calcified lesions
- Radiation exposure consideration in children

*MRI:*
- Coronary assessment without radiation
- Limited availability for small children (requires sedation)

*Intravascular Ultrasound:*
- Research tool, not standard care

## Long-term Cardiovascular Management

**Risk Stratification Based on Aneurysm Status:**

| Risk Category | Echo Findings | Management |
|---------------|---------------|-------------|
| Risk Level I | Never had CAA | No cardiology follow-up needed |
| Risk Level II | Regressed CAA | Discharge if current echo normal |
| Risk Level III | Current dilation only | Annual evaluation |
| Risk Level IV | Small aneurysm (z 2.5-5) | Cardiology follow-up every 1-2 years |
| Risk Level V | Medium/giant aneurysm | Lifelong cardiology follow-up |

**Antithrombotic Therapy:**

*Small Aneurysms (<5 mm or z-score <5):*
- Low-dose aspirin 3-5 mg/kg/day
- Continue until regression documented

*Medium Aneurysms (5-8 mm):*
- Low-dose aspirin + clopidogrel 1 mg/kg/day
- Consider warfarin if thrombus present

*Giant Aneurysms (≥8 mm):*
- Triple therapy: Aspirin + clopidogrel + warfarin
- Target INR 2.0-3.0
- Alternative: LMWH if warfarin contraindicated

**Activity Guidelines:**
- No restrictions for normal coronaries or regressed aneurysms
- Small aneurysms: Low to moderate intensity exercise
- Giant aneurysms: Restrict competitive sports, high-intensity exercise

**Ischemia Monitoring:**
- Stress testing starting at age 8-10 for giant aneurysms
- myocardial perfusion imaging if aneurysm persistent
- Coronary angiography if ischemia suspected

## Adult Survivors of Kawasaki Disease

**Long-term Concerns:**
- Premature atherosclerosis in affected coronary segments
- Myointimal hyperplasia leading to stenosis
- Need for CABG in some with giant aneurysms

**Pregnancy Considerations:**
- High-risk patients: Pre-conception cardiology evaluation
- Stress testing prior to pregnancy
- Low-dose aspirin may be continued`,
      keyTerms: [
        { term: 'necrotizing arteritis', definition: 'Inflammation of arterial wall causing tissue death; hallmark of acute KD pathology' },
        { term: 'MMPs', definition: 'Matrix metalloproteinases; enzymes that degrade extracellular matrix contributing to vessel wall damage' },
        { term: 'KD shock syndrome', definition: 'Rare presentation with hemodynamic instability, capillary leak, requiring pressors' },
        { term: 'myointimal hyperplasia', definition: 'Thickening of the intimal layer of blood vessels; contributes to long-term coronary stenosis' },
        { term: 'NNT', definition: 'Number needed to treat; patients needed to treat to prevent one adverse outcome' },
      ],
      clinicalNotes: 'For children presenting with KD shock syndrome, early recognition is critical. These patients may require pressor support, plasma exchange, and intensive monitoring. Mortality approaches 5% in this subset compared to <0.5% for typical KD.',
    },

    5: {
      level: 5,
      summary: 'Expert-level management of Kawasaki disease integrates advanced immunopathology, precision risk stratification, evidence-based use of biologics, sophisticated cardiovascular imaging, and individualized long-term surveillance strategies based on coronary outcomes data.',
      explanation: `## Immunopathogenesis Frontiers

**Current Research Directions:**

*Viral Trigger Hypothesis:*
- Studies using next-generation sequencing
- Candidate viruses: Newberger virus, coronavirus, adenovirus
- No single causative agent identified

*Superantigen Model:*
- TSST-1-like superantigens implicated
- Vβ2 T-cell expansion in acute KD
- Explains massive cytokine release

*Genetic Architecture:*
- GWAS findings across populations:
  - ITPKC (inositol 1,4,5-trisphosphate 3-kinase C)
  - CASP3 (caspase-3)
  - BLK (B-lymphoid tyrosine kinase)
  - CD40 (TNF receptor superfamily member 5)
  - HLA class II alleles (HLA-DRB1*11)

*Immune Profiling:*
- Acute phase: Neutrophil activation, NETosis
- Subacute: Monocyte/macrophage polarization to M1 phenotype
- T-cell subsets: Th17 skewing, Treg depletion
- B-cell activation: Autoantibody production

## Precision Treatment Approaches

**Biomarker-Guided Therapy:**

*Natriuretic Peptides:*
- BNP and NT-proBNP markedly elevated in acute KD
- Levels correlate with coronary artery abnormalities
- May identify high-risk patients earlier than echocardiography

*Protein C and Antithrombin III:*
- Decreased levels associated with aneurysm formation
- May identify patients benefitting from anticoagulation

*MicroRNA Signatures:*
- miR-223, miR-145 differentiate KD from other fevers
- Research stage, not clinically available

**Front-Line Therapy Optimization:**

*IVIG Dose:*
- Standard: 2 g/kg (single infusion)
- Evidence: Superior to 400 mg/kg/day for 4 days
- Optimal timing: Within 10 days of fever onset
- No benefit to pre-treatment with corticosteroids in low-risk patients

*Aspirin Controversies:*
- High-dose anti-inflammatory: No clear superiority over medium dose
- Low-dose antiplatelet: Standard 3-5 mg/kg/day
- Duration: 6-8 weeks minimum, longer with CAA
- Reye syndrome: Theoretical risk, not reported at low doses

**Refractory Disease Algorithm:**

*First-line Adjunctive (after failed IVIG):*
1. Second IVIG dose (2 g/kg)
   - Response in ~50% of IVIG-resistant patients
   - No additional benefit beyond second dose

2. Corticosteroids (if not already given)
   - Methylprednisolone 30 mg/kg × 1-3 days (pulse)
   - OR prednisolone 2 mg/kg/day tapered over 3-5 weeks
   - RAISE trial: Reduced CAA in high-risk (Kobayashi ≥4)

*Second-line Adjunctive (persistent fever):*
3. Infliximab 5 mg/kg IV (single dose)
   - Fever resolution median 2 days
   - No clear mortality benefit
   - Watch for infusion reactions, infection risk

4. Anakinra (IL-1 blockade)
   - Dose: 4-10 mg/kg/day SC divided
   - ANAKID trial ongoing
   - Particularly effective in KD-MAS overlap

5. Cyclosporine
   - Target trough: 100-200 ng/mL
   - Consider in TNF-α inhibitor failures

*Third-line (for refractory shock/MAS):*
6. Plasma exchange
   - Removes cytokines, autoantibodies
   - Replaces with fresh plasma

7. Abatacept (CTLA4-Ig)
   - Case reports of success
   - Mechanism: T-cell costimulation blockade

## Advanced Cardiovascular Imaging

**Echocardiography Advances:**

*3D Echocardiography:*
- Better volumetric assessment
- More accurate aneurysm characterization
- Limited availability in children

*Speckle Tracking Echocardiography:*
- Detects subclinical LV dysfunction
- Global longitudinal strain reduced in acute KD
- May identify patients needing closer monitoring

**CT Angiography:**
- Best for older children, adolescents
- High spatial resolution
- Radiation concerns: Use prospective gating
- Coronary calcium scoring in long-term follow-up

**MRI/MRA:**
- No radiation
- Late gadolinium enhancement for myocardial fibrosis
- T1/T2 mapping for tissue characterization
- Limited for small coronaries in infants

**PET/CT:**
- Assess myocardial perfusion in aneurysm territories
- Detect ischemia before stress testing
- Research application currently

## Long-term Outcomes Data

**Coronary Aneurysm Natural History:**

*Regression Rates:*
- Small aneurysms: 70-80% regress
- Medium aneurysms: 50% regress
- Giant aneurysms: <10% regress

*Regression Timeline:*
- Most regression occurs within 2 years
- Later regression possible up to 10+ years
- Regressed aneurysms may become stenotic

**Adult Outcomes (40+ year follow-up):**

*Patients with Normal Coronaries:*
- No increased cardiovascular mortality
- No exercise restrictions
- No long-term medications needed

*Patients with Regressed CAA:*
- Small risk of focal stenosis at former aneurysm site
- Consider stress imaging before competitive sports
- May develop premature atherosclerosis

*Patients with Persistent Giant Aneurysms:*
- High lifetime cardiovascular risk
- Require lifelong antithrombotic therapy
- May need coronary revascularization (CABG)
- Pregnancy requires cardiac assessment

## Special Populations

**Kawasaki Disease in Infants <6 Months:**
- Highest risk of incomplete presentation
- Highest risk of coronary complications (up to 50%)
- Low threshold for echocardiography
- Consider empiric IVIG if suggestive features

**Kawasaki Disease Recurrence:**
- Rate: ~3% in Japan, ~1% in North America
- Higher in patients with initial CAA
- Treat recurrence as initial episode
- Family screening not indicated

**KD with MAS Overlap:**
- Features: Persistent fever, cytopenias, hyperferritinemia
- Diagnosis: Use HLH-2004 criteria
- Treatment: Anakinra ± plasma exchange

**Kawasaki Disease During Pregnancy (Adult Survivors):**
- Risk Level I/II: No special precautions
- Risk Level III: Consider stress testing pre-conception
- Risk Level IV/V: High-risk cardiology follow-up
- Giant aneurysms: Pregnancy may be contraindicated

## International Management Variations

**Japan vs. North America:**

| Aspect | Japan | North America |
|--------|-------|---------------|
| IVIG dose | 2 g/kg | 2 g/kg |
| Initial aspirin | 30-50 mg/kg/day | 80-100 mg/kg/day |
| Steroid use | Common in high-risk | Selective use |
| Z-score nomogram | Japanese norms | Dallaire/McCrindle |

**Rationale for Differences:**
- Genetic differences in susceptibility
- Different baseline coronary dimensions
- Variation in IVIG resistance rates

## Future Directions

**Vaccine Development:**
- No vaccine available
- Challenge: Unknown pathogen

**Targeted Biologics:**
- Ongoing trials: Ravulizumab (C5 inhibitor)
- JAK inhibitors: Tofacitinib under investigation
- Personalized medicine based on cytokine profile

**Prevention of Long-term Sequelae:**
- Statins for patients with giant aneurysms
- ACE inhibitors for ventricular dysfunction
- Lifestyle interventions for premature atherosclerosis

**International Collaboration:**
- International Kawasaki Disease Registry
- Standardized outcome measures
- Genomic studies across populations`,
      keyTerms: [
        { term: 'NETosis', definition: 'Neutrophil extracellular trap formation; contributes to vasculitis in KD' },
        { term: 'Th17 skewing', definition: 'Predominance of T-helper 17 cells producing IL-17; pro-inflammatory phenotype' },
        { term: 'CTLA4-Ig', definition: 'Cytotoxic T-lymphocyte-associated protein 4 immunoglobulin; abatacept mechanism of action' },
        { term: 'global longitudinal strain', definition: 'Speckle tracking measure of LV systolic deformation; detects subclinical dysfunction' },
        { term: 'late gadolinium enhancement', definition: 'MRI finding of myocardial fibrosis; hyperenhanced scar tissue' },
      ],
      clinicalNotes: `Expert Practice Pearls:

1. **IVIG Resistance:** Consider initial adjunctive corticosteroids for high-risk patients (Kobayashi ≥4) based on RAISE trial data.

2. **Infant KD:** In infants <6 months with fever ≥7 days, obtain echocardiogram and consider empiric IVIG even with incomplete clinical features.

3. **Aneurysm Thrombosis:** Giant aneurysms (>8 mm) warrant anticoagulation (warfarin INR 2-3) plus dual antiplatelet therapy.

4. **Refractory Disease:** After failed second IVIG dose, infliximab is preferred second-line. Anakinra for MAS overlap or refractory cases.

5. **Long-term Follow-up:** Patients with giant aneurysms require lifelong cardiology follow-up with periodic stress imaging.

6. **Pregnancy Counseling:** Women with persistent giant aneurysms should receive pre-conception cardiovascular assessment and may require high-risk obstetric care.`,
    },
  },

  media: [
    {
      id: 'kawasaki-clinical-features',
      type: 'diagram',
      filename: 'kawasaki-clinical-features.svg',
      title: 'Kawasaki Disease Clinical Features',
      description: 'Visual summary of diagnostic criteria including strawberry tongue, conjunctivitis, rash, and extremity changes',
    },
    {
      id: 'coronary-aneurysm-classification',
      type: 'diagram',
      filename: 'coronary-aneurysm-classification.svg',
      title: 'Coronary Aneurysm Classification',
      description: 'Classification system for coronary artery abnormalities in Kawasaki disease',
    },
  ],

  citations: [
    {
      id: 'aha-kawasaki-guidelines-2017',
      type: 'article',
      title: 'Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease: A Scientific Statement for Health Professionals From the American Heart Association',
      authors: ['McCrindle, B.W.', 'Rowley, A.H.', 'Newburger, J.W.', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000484',
      accessedDate: '2026-01-26',
    },
    {
      id: 'kobayashi-score-2007',
      type: 'article',
      title: 'Prediction of Intravenous Immunoglobulin Unresponsiveness in Patients With Kawasaki Disease',
      authors: ['Kobayashi, T.', 'Inoue, Y.', 'Takeuchi, K.', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIRCULATIONAHA.107.694822',
      accessedDate: '2026-01-26',
    },
    {
      id: 'raise-trial-2012',
      type: 'article',
      title: 'Primary Corticosteroid Treatment for Kawasaki Disease: A Randomized Controlled Trial',
      authors: ['Ogata, S.', 'Ogihara, Y.', 'Honda, T.', 'et al.'],
      source: 'The Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(12)60536-6',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'related', label: 'Cardiovascular System' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
    { targetId: 'condition-pediatric-fever', targetType: 'condition', relationship: 'sibling', label: 'Pediatric Fever Evaluation' },
  ],

  tags: {
    systems: ['cardiovascular', 'immune'],
    topics: ['pediatrics', 'vasculitis', 'coronary artery disease', 'infectious disease'],
    keywords: ['Kawasaki', 'IVIG', 'coronary aneurysm', 'pediatric fever', 'vasculitis', 'mucocutaneous lymph node syndrome'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default kawasaki;
