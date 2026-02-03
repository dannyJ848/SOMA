/**
 * Bladder Conditions - Comprehensive Educational Content
 *
 * Covers overactive bladder, urinary incontinence, interstitial cystitis,
 * neurogenic bladder, and bladder cancer overview.
 */

import { EducationalContent } from '../../types';

export const bladderConditions: EducationalContent = {
  id: 'condition-bladder-conditions',
  type: 'condition',
  name: 'Bladder Conditions',
  alternateNames: ['Bladder Disorders', 'OAB', 'Urinary Incontinence', 'Interstitial Cystitis', 'Neurogenic Bladder'],

  levels: {
    1: {
      level: 1,
      summary: 'Bladder conditions include problems with storing urine (overactive bladder, incontinence) and pain conditions (interstitial cystitis), which can significantly affect daily life.',
      explanation: `The bladder is a muscular bag that stores urine until you are ready to go to the bathroom. Sometimes the bladder does not work properly, causing problems.

**Common Bladder Problems:**

**1. Overactive Bladder (OAB)**
- Sudden, strong urges to urinate that are hard to control
- Needing to urinate very frequently (more than 8 times a day)
- Waking up at night to urinate (nocturia)
- Sometimes leaking urine before reaching the bathroom

**2. Urinary Incontinence (Leaking Urine)**
There are different types:
- **Stress incontinence**: Leaking when you cough, sneeze, laugh, or exercise
- **Urge incontinence**: Leaking because you cannot get to the bathroom in time
- **Overflow incontinence**: Bladder does not empty completely, so it overflows

**3. Interstitial Cystitis (Painful Bladder Syndrome)**
- Chronic bladder pain and pressure
- Feels like a bladder infection, but no infection is present
- May need to urinate very frequently
- More common in women

**4. Neurogenic Bladder**
- Nerve problems affect bladder control
- Can be from diabetes, stroke, spinal cord injury, or multiple sclerosis
- May cause inability to urinate or inability to control urination

**Who Gets Bladder Problems?**
- More common as people get older
- Women more often have stress incontinence (from childbirth, menopause)
- Men more often have overflow incontinence (from enlarged prostate)

**Treatment Options:**
- Lifestyle changes (fluid management, timed voiding)
- Pelvic floor exercises (Kegels)
- Medications to calm the bladder
- In some cases, procedures or surgery`,
      keyTerms: [
        { term: 'overactive bladder', definition: 'A condition where the bladder squeezes at the wrong times, causing urgency and frequency' },
        { term: 'incontinence', definition: 'Leaking urine without meaning to' },
        { term: 'interstitial cystitis', definition: 'Chronic bladder pain and pressure without infection' },
        { term: 'pelvic floor', definition: 'Muscles at the bottom of your pelvis that help control urination' },
      ],
      analogies: [
        'Your bladder is like a water balloon - it should fill slowly and empty when you decide. With overactive bladder, it tries to squeeze when you do not want it to.',
        'Stress incontinence is like a faulty seal - increased pressure (coughing, laughing) pushes urine past the weak seal.',
        'Pelvic floor muscles are like a hammock supporting your bladder - when they are weak, the bladder does not stay in the right position.',
      ],
      examples: [
        'A woman sneezes while shopping and accidentally leaks urine - this is stress incontinence.',
        'A man suddenly feels an urgent need to urinate and cannot make it to the bathroom in time - this is urge incontinence.',
        'A woman has constant bladder pain and goes to the bathroom 20 times a day but has no infection - this might be interstitial cystitis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bladder dysfunction encompasses storage disorders (OAB, incontinence), voiding disorders, and pain syndromes (IC/BPS), each with distinct pathophysiology and management approaches.',
      explanation: `## Overactive Bladder (OAB)

**Definition:**
- Urinary urgency, usually with frequency and nocturia
- With (OAB-wet) or without (OAB-dry) urge incontinence
- In absence of UTI or other pathology

**Epidemiology:**
- Affects 15-20% of adults
- Increases with age
- Equal in men and women (men more often OAB-dry)

**Pathophysiology:**
- Detrusor overactivity: Involuntary bladder contractions during filling
- May involve:
  - Myogenic changes in detrusor muscle
  - Neurogenic mechanisms (afferent sensitization)
  - Urothelial dysfunction

**Symptoms:**
- Urgency: Sudden, compelling desire to urinate
- Frequency: >8 voids/day
- Nocturia: ≥1 void disrupting sleep
- Urge incontinence: Involuntary leakage with urgency

## Urinary Incontinence Types

| Type | Mechanism | Characteristics |
|------|-----------|-----------------|
| Stress | Urethral sphincter weakness | Leakage with cough, sneeze, exercise |
| Urge | Detrusor overactivity | Leakage preceded by strong urgency |
| Mixed | Both mechanisms | Both stress and urge symptoms |
| Overflow | Bladder outlet obstruction or detrusor underactivity | Constant dribbling, incomplete emptying |
| Functional | Physical/cognitive impairment | Cannot reach toilet in time |

**Risk Factors:**
- Female: Childbirth, menopause, pelvic surgery
- Male: Prostate surgery, BPH
- Both: Age, obesity, chronic cough, neurologic disease

## Interstitial Cystitis/Bladder Pain Syndrome (IC/BPS)

**Definition:**
- Chronic pelvic pain, pressure, or discomfort perceived to be related to the bladder
- Accompanied by lower urinary tract symptoms (frequency, urgency)
- Duration ≥6 weeks
- Absence of infection or other identifiable cause

**Epidemiology:**
- Primarily affects women (90%)
- Prevalence: 3-8% of women
- Often associated with other chronic pain syndromes (fibromyalgia, IBS)

**Phenotypes:**
1. **Hunner lesion (ulcerative)**: Inflammatory lesions on bladder wall (5-10%)
2. **Non-ulcerative**: No visible lesions, more common

**Diagnosis:**
- Clinical diagnosis based on symptoms
- Exclude UTI, bladder cancer, other pathology
- Cystoscopy with hydrodistention may help (identifies Hunner lesions)
- Potassium sensitivity test (controversial)

## Neurogenic Bladder

**Causes:**
| Level | Examples | Pattern |
|-------|----------|---------|
| Suprapontine | Stroke, Parkinson's, dementia | Detrusor overactivity with coordinated sphincter |
| Spinal (suprasacral) | MS, spinal cord injury above S2 | Detrusor-sphincter dyssynergia |
| Sacral/peripheral | Diabetes, cauda equina, pelvic surgery | Detrusor underactivity, areflexic bladder |

**Detrusor-Sphincter Dyssynergia:**
- Simultaneous contraction of detrusor and external sphincter
- Causes high bladder pressures
- Risk of upper tract damage
- Requires urodynamics for diagnosis

## Evaluation

**History:**
- Voiding diary (3-day minimum)
- Symptom questionnaires (OAB-q, ICSI/ICPI)
- Impact on quality of life

**Physical Exam:**
- Abdominal exam (distended bladder?)
- Pelvic exam women (prolapse, atrophy, masses)
- Prostate exam men
- Neurologic exam (perineal sensation, reflexes)

**Studies:**
- Urinalysis (rule out UTI, hematuria)
- Post-void residual (PVR)
- Urodynamics if diagnosis unclear or before surgery
- Cystoscopy if hematuria, suspected IC, or refractory symptoms

## Management Overview

**Overactive Bladder:**
1. Behavioral therapy (first-line)
   - Fluid management
   - Bladder training
   - Pelvic floor exercises
2. Pharmacotherapy
   - Antimuscarinics (oxybutynin, tolterodine, solifenacin)
   - Beta-3 agonist (mirabegron, vibegron)
3. Third-line therapies
   - Botulinum toxin injection
   - Sacral neuromodulation
   - Percutaneous tibial nerve stimulation (PTNS)

**Stress Incontinence:**
1. Pelvic floor muscle training (Kegels)
2. Pessary (women)
3. Surgery: Midurethral sling (women), artificial urinary sphincter (men)

**IC/BPS:**
- Multimodal approach
- Dietary modifications
- Oral medications (amitriptyline, pentosan polysulfate)
- Intravesical therapies
- Physical therapy`,
      keyTerms: [
        { term: 'detrusor overactivity', definition: 'Involuntary bladder muscle contractions during filling phase' },
        { term: 'urge incontinence', definition: 'Involuntary urine loss associated with sudden strong urge to void' },
        { term: 'stress incontinence', definition: 'Involuntary urine loss during physical exertion (cough, exercise)' },
        { term: 'Hunner lesion', definition: 'Inflammatory ulcer on bladder wall in some IC/BPS patients' },
        { term: 'detrusor-sphincter dyssynergia', definition: 'Simultaneous contraction of bladder and sphincter causing obstruction' },
      ],
      analogies: [
        'Detrusor overactivity is like a thermostat set too low - the heater (bladder) kicks on before the temperature (volume) actually requires it.',
        'Stress incontinence is like a loose jar lid - it holds fine normally, but when you shake it (cough/sneeze), liquid leaks out.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bladder dysfunction involves complex interactions between the urothelium, detrusor muscle, and nervous system, with pharmacotherapy targeting muscarinic receptors, beta-3 adrenergic receptors, and various neuromodulatory pathways.',
      explanation: `## Bladder Physiology Review

**Storage Phase:**
- Detrusor muscle relaxed (β3-adrenergic mediated)
- Internal sphincter contracted (α1-adrenergic)
- External sphincter contracted (somatic, pudendal nerve)
- Pontine storage center (L-region) active

**Voiding Phase:**
- Pontine micturition center (M-region) activated
- Parasympathetic outflow (S2-4) → detrusor contraction (M3 receptors)
- Sympathetic inhibition → sphincter relaxation
- Pudendal nerve inhibition → external sphincter relaxation

**Urothelial Signaling:**
- Urothelium is not just a barrier - it is sensory
- Releases ATP, ACh, NO in response to stretch
- Communicates with suburothelial afferents
- Urothelial dysfunction may contribute to OAB

## Pharmacotherapy of OAB

**Antimuscarinics:**
| Drug | Receptor Selectivity | Formulation | Notes |
|------|---------------------|-------------|-------|
| Oxybutynin | Non-selective | IR, ER, patch, gel | Most anticholinergic side effects |
| Tolterodine | Non-selective | IR, ER | Better tolerated than oxybutynin IR |
| Solifenacin | M3 selective | ER | Once daily, QTc prolongation rare |
| Darifenacin | M3 selective | ER | Most M3 selective, constipation common |
| Fesoterodine | Non-selective (active metabolite) | ER | Prodrug of 5-HMT |
| Trospium | Non-selective | IR, ER | Quaternary amine, less CNS penetration |

**Side Effects:**
- Dry mouth (M3 in salivary glands)
- Constipation (M3 in gut)
- Cognitive impairment (M1 in CNS) - caution in elderly
- Urinary retention (check PVR)
- Blurred vision (M3 in ciliary muscle)

**Beta-3 Agonists:**
| Drug | Mechanism | Notes |
|------|-----------|-------|
| Mirabegron | β3-adrenergic agonist | No anticholinergic side effects |
| Vibegron | β3-adrenergic agonist | More selective, once daily |

- Relax detrusor during storage phase
- Avoid in uncontrolled hypertension
- Can combine with antimuscarinics

## Third-Line OAB Therapies

**Botulinum Toxin A (Botox):**
- Inhibits ACh release from nerve terminals
- Also affects sensory afferents
- 100-200 units injected cystoscopically
- Duration: 6-9 months typically
- Risk: Urinary retention (may need CIC), UTI

**Sacral Neuromodulation (InterStim):**
- Stimulation of S3 nerve root
- Modulates bladder reflexes
- Two-stage implant: Trial → permanent generator
- Efficacy: ~70% success in responders
- Battery replacement every 5-15 years

**Percutaneous Tibial Nerve Stimulation (PTNS):**
- Needle near posterior tibial nerve (ankle)
- Weekly sessions × 12, then maintenance
- Modulates sacral reflexes via afferent pathway
- Non-invasive alternative to InterStim

## Stress Urinary Incontinence

**Pathophysiology:**
- Intrinsic sphincter deficiency (ISD): Weak sphincter
- Urethral hypermobility: Lack of support allows descent
- Often combination of both

**Evaluation:**
- Cough stress test (standing, full bladder)
- Q-tip test (assess urethral mobility)
- Urodynamics (leak point pressure, Valsalva)
- Abdominal leak point pressure <60 cm H2O suggests ISD

**Surgical Options - Women:**
| Procedure | Approach | Notes |
|-----------|----------|-------|
| Midurethral sling (MUS) | Retropubic (TVT) or transobturator (TOT) | Gold standard; 80-90% success |
| Burch colposuspension | Open or laparoscopic | Historical gold standard |
| Urethral bulking | Cystoscopic injection | Less durable; for poor surgical candidates |
| Autologous fascial sling | Pubovaginal sling | For ISD, revision cases |

**Surgical Options - Men (post-prostatectomy):**
- Male sling (AdVance, Virtue)
- Artificial urinary sphincter (AUS) - gold standard for moderate-severe SUI

## Interstitial Cystitis/BPS Management

**First-Line:**
- Patient education
- Dietary modification (avoid triggers: caffeine, alcohol, acidic foods)
- Stress management
- Physical therapy (pelvic floor, if hypertonic)

**Second-Line:**
- Amitriptyline (10-75 mg nightly)
- Hydroxyzine (antihistamine)
- Pentosan polysulfate sodium (PPS) - only FDA-approved oral agent
- Cimetidine

**Third-Line:**
- Cystoscopy with hydrodistention
- Intravesical therapies:
  - DMSO (dimethyl sulfoxide)
  - Heparin/lidocaine cocktails
  - Hyaluronic acid
- Fulguration of Hunner lesions

**Fourth-Line and Beyond:**
- Sacral neuromodulation
- Cyclosporine A (immunosuppression)
- Cystectomy with urinary diversion (rare, last resort)

## Neurogenic Bladder

**Urodynamic Patterns:**
1. **Detrusor overactivity**: Suprapontine lesions (stroke, PD)
2. **Detrusor overactivity + DSD**: Suprasacral spinal lesions (SCI, MS)
3. **Detrusor areflexia**: Sacral/peripheral lesions (diabetes, cauda equina)

**Management Principles:**
- Protect upper tracts (avoid high detrusor pressures >40 cm H2O)
- Prevent UTI
- Maintain continence
- Maximize independence

**Treatment by Pattern:**
- Areflexic: Clean intermittent catheterization (CIC)
- Overactivity: Antimuscarinics + CIC
- DSD: Alpha-blockers, botox to sphincter, sphincterotomy
- High pressures: Bladder augmentation if refractory`,
      keyTerms: [
        { term: 'M3 receptor', definition: 'Muscarinic receptor subtype mediating detrusor contraction; target of anticholinergics' },
        { term: 'sacral neuromodulation', definition: 'Implanted device stimulating S3 nerve to modulate bladder function' },
        { term: 'midurethral sling', definition: 'Mesh tape placed under mid-urethra to treat stress incontinence' },
        { term: 'intrinsic sphincter deficiency', definition: 'Weak urethral closure pressure contributing to stress incontinence' },
        { term: 'clean intermittent catheterization', definition: 'Self-catheterization technique for bladder emptying; gold standard for neurogenic bladder' },
      ],
      clinicalNotes: 'Avoid antimuscarinics in elderly with cognitive impairment - use beta-3 agonists. Botox for OAB requires willingness to perform CIC if retention occurs. DSD causes dangerous high pressures - must protect kidneys. Pentosan polysulfate linked to pigmentary maculopathy with long-term use.',
    },
    4: {
      level: 4,
      summary: 'Advanced bladder management integrates urodynamic phenotyping, neuromodulatory interventions, minimally invasive surgical techniques, and emerging regenerative therapies to address complex lower urinary tract dysfunction.',
      explanation: `## Urodynamic Phenotyping

**Storage Function Assessment:**
- Cystometric capacity: Normal 400-600 mL
- Compliance: ΔVolume/ΔPressure (normal >20 mL/cm H2O)
- Detrusor overactivity: Involuntary contractions >15 cm H2O
- Sensations: First desire, strong desire, urgency

**Voiding Function Assessment:**
- Qmax: Maximum flow rate (normal >15 mL/s males, >20 mL/s females)
- Pdet@Qmax: Detrusor pressure at max flow
- BOOI: Pdet@Qmax - 2(Qmax); >40 = obstructed
- BCI (Bladder Contractility Index): Pdet@Qmax + 5(Qmax); <100 = weak

**Video Urodynamics:**
- Combines fluoroscopy with pressure measurements
- Visualizes bladder neck, urethral function
- Detects vesicoureteral reflux
- Essential for neurogenic bladder evaluation

## Advanced OAB Management

**Combination Therapy:**
- Antimuscarinic + beta-3 agonist
- SYNERGY trial: Solifenacin + mirabegron superior to monotherapy
- Consider when monotherapy insufficient

**Botulinum Toxin Optimization:**
- Dose: 100 units (idiopathic OAB) vs 200 units (neurogenic)
- Trigone-sparing vs trigone-including (both effective)
- Efficacy: 60-70% improvement in urgency incontinence
- Repeat every 6-12 months as needed

**Device Therapies:**
1. **Sacral Neuromodulation (SNM):**
   - InterStim II, InterStim Micro (rechargeable)
   - MRI-conditional devices now available
   - Bilateral stimulation under investigation

2. **Tibial Nerve Stimulation:**
   - PTNS: 30 min weekly × 12, then monthly maintenance
   - Implantable tibial nerve stimulator (eCoin) emerging

## Stress Incontinence Surgery

**Midurethral Sling Considerations:**
- Retropubic (TVT): Better for ISD, higher complication rate
- Transobturator (TOT): Less bladder injury, possibly less effective for ISD
- Single-incision slings: Less tissue disruption, emerging data

**Mesh Complications:**
- Erosion/exposure: 1-3%
- Pain: 3-5%
- Voiding dysfunction: Variable
- FDA warnings regarding vaginal mesh (2008, 2011, 2016)
- Synthetic slings still standard; autologous options for complex cases

**Artificial Urinary Sphincter:**
- Gold standard for male post-prostatectomy incontinence
- Components: Cuff, pump, pressure-regulating balloon
- Cuff around bulbar urethra
- 90% satisfaction, 20-30% revision rate at 10 years
- Requires manual dexterity for operation

## IC/BPS: Phenotype-Directed Therapy

**Phenotyping Systems:**
- UPOINT (Urinary, Psychosocial, Organ-specific, Infection, Neurologic, Tenderness)
- Hunner lesion vs non-Hunner
- Bladder-centric vs systemic/central sensitization

**Hunner Lesion Treatment:**
- Fulguration (electrocautery) or laser ablation
- Triamcinolone injection into lesion
- Better response than non-ulcerative IC

**Central Sensitization Approach:**
- Amitriptyline, duloxetine (descending inhibition)
- Gabapentin, pregabalin
- Cognitive behavioral therapy
- Pain psychology

**Pelvic Floor Dysfunction:**
- Hypertonic pelvic floor common in IC
- Physical therapy with internal manual therapy
- Trigger point injections
- Pelvic floor botox (off-label)

## Neurogenic Bladder Advanced Management

**Bladder Management by Lesion:**
| Condition | Pattern | Primary Management |
|-----------|---------|-------------------|
| SCI above T6 | DO + DSD, AD risk | CIC + antimuscarinics; monitor for AD |
| SCI below T6 | DO + DSD | CIC + antimuscarinics |
| MS | Variable (often DO) | Antimuscarinics; reassess as disease progresses |
| Parkinson's | DO | Antimuscarinics (caution: cognitive) |
| Diabetic | Areflexia | CIC; timed voiding if incomplete |

**Detrusor Pressure Management:**
- Target: Detrusor pressure <40 cm H2O
- High pressures → vesicoureteral reflux → renal damage
- Annual renal ultrasound, periodic urodynamics

**Augmentation Cystoplasty:**
- For refractory low compliance, small capacity
- Bowel segment (ileum) added to bladder
- Requires lifelong CIC
- Risks: Metabolic (B12 deficiency, acidosis), stones, mucus, perforation
- Rare malignancy risk (long-term)

**Continent Catheterizable Channel:**
- Mitrofanoff (appendix) or Yang-Monti (ileum)
- Alternative catheterization access (abdominal stoma)
- For patients with urethral issues or wheelchair users

## Bladder Cancer Brief Overview

**Epidemiology:**
- 6th most common cancer overall
- 3:1 male predominance
- Smoking is #1 risk factor
- Occupational exposures (aniline dyes, aromatic amines)

**Presentation:**
- Painless gross hematuria (classic)
- Irritative voiding symptoms
- Incidental finding on imaging

**Staging:**
- Non-muscle invasive (Ta, T1, CIS): 70-80%
- Muscle invasive (T2+): 20-30%
- Treatment dramatically differs by stage

**Treatment Principles:**
- NMIBC: TURBT + intravesical therapy (BCG, chemotherapy)
- MIBC: Radical cystectomy with urinary diversion OR chemoradiation
- Metastatic: Systemic chemotherapy, immunotherapy`,
      keyTerms: [
        { term: 'BOOI', definition: 'Bladder Outlet Obstruction Index - urodynamic calculation for obstruction severity' },
        { term: 'augmentation cystoplasty', definition: 'Surgical enlargement of bladder using intestinal segment' },
        { term: 'Mitrofanoff', definition: 'Continent catheterizable channel using appendix connecting bladder to abdominal wall' },
        { term: 'autonomic dysreflexia', definition: 'Life-threatening hypertensive crisis in SCI above T6 triggered by bladder distension' },
        { term: 'BCG', definition: 'Bacillus Calmette-Guerin - intravesical immunotherapy for non-muscle invasive bladder cancer' },
      ],
      clinicalNotes: 'Detrusor pressure >40 cm H2O damages upper tracts in neurogenic bladder. Autonomic dysreflexia in high SCI - bladder distension is common trigger. Augmentation cystoplasty requires lifelong CIC and surveillance. Pentosan polysulfate: ophthalmologic monitoring for pigmentary maculopathy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary bladder dysfunction management leverages molecular biomarkers, precision phenotyping, gene therapy approaches, regenerative medicine, and implantable technologies to optimize individualized treatment outcomes.',
      explanation: `## Molecular Mechanisms and Biomarkers

**OAB Biomarkers:**
- NGF (nerve growth factor): Elevated in OAB, decreases with treatment
- BDNF (brain-derived neurotrophic factor): Similar pattern
- Prostaglandins (PGE2): Sensory afferent sensitization
- ATP: Released by urothelium, activates P2X3 receptors

**IC/BPS Biomarkers:**
- APF (antiproliferative factor): Unique to IC, inhibits epithelial growth
- HB-EGF: Decreased in IC
- Glycosaminoglycan layer deficiency (theoretical)
- Mast cell mediators (histamine, tryptase)

**Urothelial Signaling:**
- TRP channels: TRPV1, TRPV4, TRPM8 - mechanosensory transduction
- Purinergic signaling: P2X, P2Y receptors
- Urothelium-afferent nerve communication via ATP, NO, ACh

## Emerging Pharmacotherapies

**Novel Drug Targets:**
| Target | Mechanism | Status |
|--------|-----------|--------|
| TRPV4 antagonists | Block mechanosensation | Phase 2 |
| P2X3 antagonists | Block purinergic signaling | Phase 2 |
| CGRP antagonists | Reduce neurogenic inflammation | Preclinical |
| EP1 antagonists | Block prostaglandin signaling | Preclinical |
| Beta-3 agonists (new) | Solabegron, ritobegron | Development |

**Gene Therapy:**
- Herpes simplex virus vectors delivering enkephalin
- Reduces bladder afferent signaling
- Phase 1/2 trials for IC/BPS
- Duration of effect under study

**Stem Cell Therapy:**
- Autologous muscle-derived cells for SUI
- Adipose-derived stem cells for detrusor regeneration
- Umbilical cord stem cells
- Mostly early phase trials
- Challenges: Engraftment, differentiation, durability

## Advanced Device Technologies

**Next-Generation Neuromodulation:**
1. **Closed-Loop Systems:**
   - Sense bladder activity, stimulate adaptively
   - Improved efficacy, battery life
   - Research phase

2. **High-Frequency Stimulation:**
   - 10 kHz vs conventional ~14 Hz
   - May improve refractory cases

3. **Pudendal Nerve Stimulation:**
   - Alternative to sacral stimulation
   - May be superior for some phenotypes
   - Implant technical challenges

**Intravesical Drug Delivery:**
- LiRIS (lidocaine-releasing intravesical system): IC/BPS
- GemRIS (gemcitabine): Bladder cancer
- TAR-302 (trospium): OAB
- Continuous release over weeks
- Avoids systemic side effects

## Regenerative Medicine

**Tissue Engineering:**
- Bladder augmentation with engineered tissue
- Acellular matrix scaffolds + autologous cells
- Avoid metabolic complications of bowel
- Clinical trials ongoing

**Organoids:**
- 3D bladder organoid cultures
- Drug screening platforms
- Disease modeling
- Personalized medicine potential

**Neural Regeneration:**
- For neurogenic bladder after SCI
- Epidural stimulation enabling voluntary voiding
- Stem cell + scaffold approaches
- Highly experimental

## Precision Medicine Approaches

**Phenotype-Specific Treatment:**

*OAB Phenotyping:*
- Urgency-predominant → antimuscarinics
- Frequency-predominant → behavioral + beta-3
- Nocturia-predominant → desmopressin, evening fluid restriction
- Mixed → combination therapy

*IC/BPS Phenotyping:*
- Hunner lesion → fulguration, triamcinolone injection
- Non-Hunner/central sensitization → neuromodulators (amitriptyline, gabapentin)
- Pelvic floor dysfunction → physical therapy
- Autoimmune overlap → hydroxyzine, cyclosporine

**Pharmacogenomics:**
- CYP2D6 metabolism affects tolterodine response
- ADRB3 polymorphisms may influence mirabegron response
- Emerging field for bladder pharmacotherapy

## Special Populations

**Frail Elderly:**
- Anticholinergics: Avoid due to cognitive risk (Beers criteria)
- Beta-3 agonists preferred
- Behavioral therapy underutilized
- Incontinence pads/devices if treatment fails
- Address mobility, cognitive issues

**Pediatric:**
- Dysfunctional elimination syndrome (DES)
- Behavioral therapy first-line
- Antimuscarinics if refractory
- Biofeedback effective
- Investigate for occult neuropathic causes

**Transplant Considerations:**
- Neurogenic bladder evaluation before renal transplant
- Augmentation may be needed before transplant
- Ensure adequate bladder capacity/compliance
- CIC ability critical

## Quality Measures and Outcomes

**Patient-Reported Outcomes:**
- OAB-q: OAB symptom and QoL questionnaire
- ICIQ-UI: Incontinence questionnaire
- O'Leary-Sant (ICSI/ICPI): IC/BPS symptoms
- Global Response Assessment (GRA)

**Objective Measures:**
- Voiding diary (frequency, volume, incontinence episodes)
- Pad weight test (quantify leakage)
- Urodynamic parameters
- Post-void residual

**Value-Based Care:**
- Cost-effectiveness of various interventions
- Botox vs InterStim: Cost models vary by time horizon
- Sling vs conservative management
- Shared decision-making critical

## Bladder Cancer in Context

**Risk Stratification (NMIBC):**
- Low risk: Single Ta low-grade, <3cm
- Intermediate: Multiple, recurrent Ta low-grade
- High risk: T1, high-grade, CIS, large, multifocal

**BCG Therapy:**
- Induction: Weekly × 6
- Maintenance: 3 weekly at 3, 6 months then q6 months × 3 years
- Global BCG shortage affecting practice
- Alternatives: Gemcitabine, intravesical taxanes

**Emerging NMIBC Therapies:**
- Pembrolizumab (PD-1 inhibitor): BCG-unresponsive
- Nadofaragene firadenovec: Gene therapy (IFN-α)
- TAR-200 (gemcitabine intravesical device)
- Combinations with BCG`,
      keyTerms: [
        { term: 'antiproliferative factor (APF)', definition: 'IC-specific urothelial factor inhibiting epithelial proliferation' },
        { term: 'closed-loop neuromodulation', definition: 'Sensing-enabled stimulation that adapts to real-time bladder activity' },
        { term: 'organoid', definition: 'Three-dimensional tissue cultures mimicking organ structure for research and drug testing' },
        { term: 'TRPV4', definition: 'Mechanosensitive ion channel in urothelium involved in bladder sensation' },
        { term: 'nadofaragene firadenovec', definition: 'Gene therapy delivering interferon-alpha for BCG-unresponsive bladder cancer' },
      ],
      clinicalNotes: `**Board-Relevant Clinical Pearls:**
- Antimuscarinics in elderly: Cognitive impairment risk; prefer beta-3 agonists
- Detrusor pressure >40 cm H2O in neurogenic bladder: Upper tract damage risk
- Pentosan polysulfate: Only FDA-approved oral for IC; monitor for maculopathy
- BCG maintenance: 3 years for high-risk NMIBC
- Autonomic dysreflexia (SCI T6+): Bladder distension is common trigger
- Botox for OAB: 100 units idiopathic, 200 units neurogenic
- Sacral neuromodulation: MRI-conditional devices now available
- AUS: Gold standard for male post-prostatectomy SUI`,
    },
  },

  media: [
    {
      id: 'bladder-innervation',
      type: 'diagram',
      filename: 'bladder-innervation.svg',
      title: 'Bladder Innervation',
      description: 'Parasympathetic, sympathetic, and somatic pathways controlling bladder function',
    },
    {
      id: 'incontinence-types',
      type: 'diagram',
      filename: 'incontinence-types.svg',
      title: 'Types of Urinary Incontinence',
      description: 'Mechanisms of stress, urge, mixed, and overflow incontinence',
    },
    {
      id: 'oab-treatment-algorithm',
      type: 'diagram',
      filename: 'oab-treatment-algorithm.svg',
      title: 'OAB Treatment Algorithm',
      description: 'Stepwise management from behavioral to surgical interventions',
    },
  ],

  citations: [
    {
      id: 'aua-oab-guidelines',
      type: 'article',
      title: 'Diagnosis and Treatment of Overactive Bladder (Non-Neurogenic) in Adults: AUA/SUFU Guideline',
      authors: ['Gormley EA', 'Lightner DJ', 'Burgio KL', 'et al.'],
      source: 'Journal of Urology',
      chapter: '188(6 Suppl):2455-2463',
    },
    {
      id: 'aua-sui-guidelines',
      type: 'article',
      title: 'Surgical Treatment of Female Stress Urinary Incontinence: AUA/SUFU Guideline',
      authors: ['Kobashi KC', 'Albo ME', 'Dmochowski RR', 'et al.'],
      source: 'Journal of Urology',
      chapter: '198(4):875-883',
    },
    {
      id: 'aua-icbps-guidelines',
      type: 'article',
      title: 'Diagnosis and Treatment of Interstitial Cystitis/Bladder Pain Syndrome: AUA Guideline',
      authors: ['Hanno PM', 'Erickson D', 'Moldwin R', 'Faraday MM'],
      source: 'Journal of Urology',
      chapter: '193(5):1545-1553',
    },
  ],

  crossReferences: [
    { targetId: 'structure-urinary-tract-anatomy', targetType: 'structure', relationship: 'related', label: 'Urinary Tract Anatomy' },
    { targetId: 'condition-benign-prostatic-hyperplasia', targetType: 'condition', relationship: 'related', label: 'BPH' },
    { targetId: 'condition-urinary-tract-infections', targetType: 'condition', relationship: 'related', label: 'UTI' },
    { targetId: 'process-urological-procedures', targetType: 'topic', relationship: 'related', label: 'Urological Procedures' },
  ],

  tags: {
    systems: ['urinary', 'nervous'],
    topics: ['urology', 'neurology', 'gynecology'],
    keywords: ['OAB', 'incontinence', 'IC/BPS', 'neurogenic bladder', 'detrusor', 'neuromodulation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'ob-gyn', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bladderConditions;
