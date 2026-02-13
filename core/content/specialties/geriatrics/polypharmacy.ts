/**
 * Polypharmacy - Comprehensive Educational Content
 *
 * Covers medication management in older adults, drug interactions,
 * potentially inappropriate medications, and deprescribing strategies.
 */

import { EducationalContent } from '../../types';

export const polypharmacy: EducationalContent = {
  id: 'concept-polypharmacy',
  type: 'concept',
  name: 'Polypharmacy',
  alternateNames: ['Multiple Medication Use', 'Medication Burden', 'Drug Overload'],

  levels: {
    1: {
      level: 1,
      summary: 'Polypharmacy means taking many different medicines at the same time, which can sometimes cause problems for older adults.',
      explanation: `As people get older, they often develop more health conditions. Each condition might need its own medicine. Before long, someone might be taking 5, 10, or even more different pills every day!

**Why Is This a Problem?**

Taking many medicines at once can cause issues:

**1. Medicines Can Fight Each Other**
- Some medicines don't work well together
- One medicine might make another one too strong or too weak
- This is like mixing foods that don't go well together - the result isn't good!

**2. Side Effects Add Up**
- Every medicine can cause side effects
- When you take many medicines, you might have more side effects
- Sometimes a side effect is treated with another medicine, creating a cycle

**3. It's Hard to Keep Track**
- Taking many pills is confusing
- Different medicines at different times
- Easy to forget doses or take wrong amounts

**4. More Risk of Falls and Confusion**
- Some medicines make you dizzy or sleepy
- This is more dangerous for older adults
- Can lead to falls and injuries

**Common Medicines That Can Cause Problems:**
- Sleeping pills
- Pain medicines
- Blood pressure pills
- Medicines for anxiety

**What Can Help?**

- Keep a list of ALL medicines (including vitamins and supplements)
- Use one pharmacy so they can check for problems
- Ask the doctor: "Do I still need all these medicines?"
- Use a pill organizer with compartments for each day
- Ask family members to help keep track

**Important Questions to Ask:**
- What is this medicine for?
- Can I stop taking any of my medicines?
- Are there simpler ways to treat my condition?
- What side effects should I watch for?

The goal is to take only the medicines that truly help, not to take as many medicines as possible!`,
      keyTerms: [
        { term: 'polypharmacy', definition: 'Taking many different medicines at the same time, usually 5 or more' },
        { term: 'side effect', definition: 'An unwanted reaction caused by a medicine' },
        { term: 'drug interaction', definition: 'When medicines affect each other in the body' },
        { term: 'pharmacist', definition: 'A medicine expert who can help check if your medicines are safe together' },
      ],
      analogies: [
        'Polypharmacy is like having too many cooks in the kitchen - they might bump into each other and spoil the meal.',
        'Taking many medicines is like juggling - the more balls you add, the harder it is to keep them all in the air.',
        'Medicines in your body are like cars on a highway - too many can cause traffic jams and accidents.',
      ],
      examples: [
        'A grandmother who takes 12 different pills each morning and gets confused about which ones she has already taken.',
        'An older man whose new blood pressure medicine made him dizzy because it interacted with his diabetes medicine.',
        'A family who helped their grandfather reduce his medicines from 15 to 8 by talking with his doctor about which ones were truly necessary.',
      ],
    },
    2: {
      level: 2,
      summary: 'Polypharmacy, typically defined as taking 5+ medications, increases risk of adverse drug events, drug-drug interactions, falls, cognitive impairment, and hospitalizations in older adults.',
      explanation: `## Understanding Polypharmacy

### Definitions
- **Polypharmacy**: Generally defined as taking 5+ medications
- **Excessive polypharmacy**: Taking 10+ medications
- **Appropriate polypharmacy**: Multiple medications when each is needed and evidence-based
- **Inappropriate polypharmacy**: Including medications that are unnecessary or harmful

### The Scope of the Problem
- 40% of adults ≥65 take 5+ medications
- 20% of adults ≥65 take 10+ medications
- Average nursing home resident takes 7-8 medications
- Polypharmacy is the #1 risk factor for adverse drug events (ADEs)

## Why Older Adults Are More Vulnerable

### Pharmacokinetic Changes with Age
| Process | Change | Clinical Effect |
|---------|--------|-----------------|
| Absorption | Minimal change | Generally preserved |
| Distribution | More body fat, less water | Fat-soluble drugs accumulate |
| Metabolism | Liver function decreases | Drugs stay active longer |
| Excretion | Kidney function decreases | Drugs build up in body |

### Pharmacodynamic Changes
- Increased sensitivity to many drug classes
- Impaired homeostatic mechanisms
- Reduced receptor responsiveness
- Greater vulnerability to CNS effects

## Common Problems with Polypharmacy

### 1. Adverse Drug Events (ADEs)
- Risk increases exponentially with medication number
- 5 medications: ~35% ADE risk
- 10+ medications: ~80% ADE risk
- 10-17% of hospital admissions in elderly due to ADEs

### 2. Drug-Drug Interactions
Common high-risk interactions:
- **Warfarin + NSAIDs**: Increased bleeding
- **ACE inhibitors + Potassium-sparing diuretics**: Hyperkalemia
- **Opioids + Benzodiazepines**: Respiratory depression
- **SSRIs + NSAIDs**: GI bleeding risk
- **Fluoroquinolones + QT-prolonging drugs**: Arrhythmias

### 3. Prescribing Cascade
When a drug side effect is treated with another drug:
1. Calcium channel blocker → ankle edema
2. Diuretic prescribed for edema → hypokalemia
3. Potassium supplement prescribed → GI upset
4. PPI prescribed for GI upset → and so on...

### 4. High-Risk Medications (Beers Criteria Categories)
- **Anticholinergics**: Confusion, falls, constipation, urinary retention
- **Benzodiazepines**: Falls, confusion, dependence
- **Opioids**: Falls, confusion, constipation, respiratory depression
- **First-generation antihistamines**: Confusion, sedation
- **Non-benzodiazepine sleep aids**: Falls, confusion

## Assessment and Management

### Medication Review Process
1. **Brown bag review**: Patient brings ALL medications
2. **Reconciliation**: Compare what's prescribed vs. what's taken
3. **Check for**:
   - Duplications
   - Drug-drug interactions
   - Drug-disease interactions
   - Therapeutic appropriateness

### Tools for Assessment
- **Beers Criteria**: List of potentially inappropriate medications for elderly
- **STOPP/START Criteria**: What to stop and what to start
- **Medication Appropriateness Index**: 10-question assessment

### Deprescribing Approach
1. Identify highest-risk medications
2. Assess if indication still valid
3. Determine if benefits outweigh risks
4. Create tapering plan if discontinuing
5. Monitor closely after changes

### Red Flags for Medication Problems
- New confusion or worsening cognition
- Falls or dizziness
- Fatigue or weakness
- Weight loss or appetite changes
- Constipation
- Frequent hospitalizations`,
      keyTerms: [
        { term: 'adverse drug event', definition: 'Harm caused by a medication, including side effects and allergic reactions', pronunciation: 'ad-VERS drug ee-VENT' },
        { term: 'Beers Criteria', definition: 'A list of medications that are potentially inappropriate for older adults' },
        { term: 'prescribing cascade', definition: 'When a side effect from one medication leads to prescribing another medication' },
        { term: 'deprescribing', definition: 'Carefully reducing or stopping medications that may no longer be beneficial' },
        { term: 'medication reconciliation', definition: 'Process of comparing all medications a patient takes to identify problems' },
        { term: 'anticholinergic', definition: 'A type of medication that blocks acetylcholine and can cause confusion in elderly', pronunciation: 'an-tee-koh-lin-ER-jik' },
      ],
      analogies: [
        'The prescribing cascade is like a row of dominoes - one tips over and causes a chain reaction.',
        'Medication review is like cleaning out a closet - you need to look at everything and decide what to keep and what to discard.',
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based polypharmacy management requires systematic evaluation using validated tools (Beers, STOPP/START), understanding pharmacokinetic/pharmacodynamic changes, and implementing structured deprescribing protocols.',
      explanation: `## Pharmacology of Aging

### Age-Related Pharmacokinetic Changes

**Absorption:**
- Minimal clinically significant changes
- Decreased gastric acid may affect some medications
- Transdermal absorption may be reduced

**Distribution:**
| Change | Mechanism | Example Drug Impact |
|--------|-----------|---------------------|
| ↑ Body fat (20-40%) | Adipose accumulation | Diazepam Vd doubles; prolonged effect |
| ↓ Total body water (10-15%) | Dehydration tendency | Digoxin Vd decreases; higher levels |
| ↓ Lean body mass | Muscle loss | Aminoglycosides; adjust dose |
| ↓ Serum albumin (15-25%) | Decreased synthesis | Phenytoin, warfarin; ↑ free fraction |
| ↓ α1-acid glycoprotein | Variable | Basic drugs affected |

**Metabolism:**
- Phase I reactions (oxidation, reduction) ↓ 30-40%
  - Cytochrome P450 activity decreases
  - First-pass metabolism reduced
- Phase II reactions (conjugation) relatively preserved
- Hepatic blood flow decreases ~40% by age 65
- Significant interindividual variability

**Excretion:**
- GFR ↓ 0.75-1.0 mL/min/year after age 40
- Creatinine may appear normal (↓ muscle mass)
- **Always calculate CrCl/eGFR for dosing**
- Common renally-cleared drugs requiring adjustment:
  - Digoxin, lithium, aminoglycosides
  - Fluoroquinolones, gabapentin, metformin
  - DOACs, vancomycin, allopurinol

### Pharmacodynamic Changes

**Increased Sensitivity:**
- CNS depressants (benzodiazepines, opioids)
- Anticoagulants
- Antihypertensives (orthostatic hypotension)
- Anticholinergics

**Decreased Sensitivity:**
- Beta-adrenergic agonists/antagonists
- Dopaminergic agents

**Impaired Homeostasis:**
- Baroreceptor reflex: ↑ orthostatic hypotension
- Thermoregulation: Drug-induced hypo/hyperthermia
- Fluid balance: Dehydration risk

## Potentially Inappropriate Medications (PIMs)

### 2023 AGS Beers Criteria Categories

**1. Avoid in Most Older Adults:**

| Drug Class | Concern | Alternative |
|------------|---------|-------------|
| Benzodiazepines | Falls, cognitive impairment, paradoxical agitation | Non-pharm; low-dose trazodone |
| First-gen antihistamines | Anticholinergic effects | 2nd-gen antihistamines |
| Long-acting sulfonylureas | Hypoglycemia | Shorter-acting agents |
| Meperidine | Neurotoxic metabolite | Other opioids |
| Proton pump inhibitors (>8 weeks) | C. diff, fractures, hypomagnesemia | H2 blocker if needed |
| Antipsychotics for BPSD | Mortality, stroke | Non-pharm first |

**2. Avoid in Specific Conditions:**

| Condition | Avoid | Reason |
|-----------|-------|--------|
| Dementia | Anticholinergics | Worsens cognition |
| Falls history | Benzodiazepines, antipsychotics | Increases fall risk |
| Parkinson's | Antiemetics (metoclopramide) | Worsens parkinsonism |
| Heart failure | NSAIDs, CCBs (non-dihydropyridine) | Fluid retention |
| CKD | NSAIDs | Worsens kidney function |

### STOPP/START Criteria v3 (2023)

**STOPP** (Screening Tool of Older Persons' Prescriptions):
- 133 criteria for potentially inappropriate prescribing
- Examples:
  - STOPP: PPI for uncomplicated peptic ulcer >8 weeks
  - STOPP: Loop diuretic for ankle edema without evidence of HF
  - STOPP: Benzodiazepine >4 weeks

**START** (Screening Tool to Alert to Right Treatment):
- 43 criteria for prescribing omissions
- Examples:
  - START: ACEi in systolic HF with reduced EF
  - START: Vitamin D in documented deficiency
  - START: Statin in documented atherosclerotic disease

### Anticholinergic Burden

**Anticholinergic Cognitive Burden (ACB) Scale:**
- Score 1: Possible anticholinergic activity
- Score 2: Definite anticholinergic activity
- Score 3: Definite anticholinergic activity with high cognitive effects

**Cumulative ACB correlates with:**
- Cognitive decline
- Delirium risk
- Falls
- Mortality

**High ACB Score Drugs (Score 3):**
- Amitriptyline, nortriptyline
- Diphenhydramine, chlorpheniramine
- Oxybutynin, tolterodine
- Paroxetine
- Promethazine

## Deprescribing Evidence and Protocols

### Evidence for Deprescribing

| Drug Class | Evidence for Deprescribing |
|------------|---------------------------|
| PPIs | RCTs show successful cessation in 50-80% |
| Benzodiazepines | Improved cognition, no rebound insomnia with tapering |
| Antihypertensives | DANTE study: Some can be stopped in frail elderly |
| Statins | Limited benefit in very elderly/limited life expectancy |
| Bisphosphonates | Drug holiday after 3-5 years reasonable in some |

### Deprescribing Algorithms

**General Framework:**
1. Comprehensive medication list
2. Identify medications for potential discontinuation
3. Prioritize based on harm potential
4. Plan deprescribing intervention (stop vs. taper)
5. Document rationale and plan
6. Monitor and follow up

**Tapering Guidelines:**
- Benzodiazepines: Reduce by 10-25% every 2-4 weeks
- PPIs: Step down to H2 blocker or alternate-day dosing
- Antidepressants: Reduce by 25% every 2-4 weeks
- Antihypertensives: Monitor BP 1-2 weeks after changes`,
      keyTerms: [
        { term: 'STOPP/START', definition: 'Validated criteria for identifying inappropriate medications (STOPP) and prescribing omissions (START)' },
        { term: 'ACB Scale', definition: 'Anticholinergic Cognitive Burden Scale; cumulative score predicts cognitive decline' },
        { term: 'first-pass metabolism', definition: 'Drug metabolism in liver before reaching systemic circulation; decreased with age' },
        { term: 'drug holiday', definition: 'Planned temporary discontinuation of a medication (e.g., bisphosphonates)' },
        { term: 'time to benefit', definition: 'Time required for a medication to produce meaningful clinical benefit; important in limited life expectancy' },
        { term: 'PIM', definition: 'Potentially Inappropriate Medication; drug with risks that may outweigh benefits in elderly' },
      ],
      clinicalNotes: 'Every medication visit should include medication reconciliation. Calculate eGFR for all patients; don\'t trust "normal" creatinine in elderly. The ACB score is a practical tool - sum it up and aim to minimize. Deprescribing requires follow-up; schedule it proactively.',
    },
    4: {
      level: 4,
      summary: 'Advanced polypharmacy management integrates systematic deprescribing, understanding of medication appropriateness in context of life expectancy and goals, pharmacogenomics considerations, and quality improvement frameworks.',
      explanation: `## Systematic Approach to Medication Optimization

### Framework: Patient-Centered Medication Review

**1. Goals Alignment:**
- What matters most to the patient?
- Symptom management vs. disease prevention
- Life expectancy estimation
- Functional goals

**2. Life Expectancy Considerations:**

| Preventive Therapy | Time to Benefit | Consider Stopping If Life Expectancy < |
|--------------------|-----------------|----------------------------------------|
| Statins (primary prevention) | 2-5 years | 5 years |
| Bisphosphonates (fracture prevention) | 1-3 years | 3 years |
| Tight glycemic control | 8-10 years | 10 years |
| Colorectal cancer screening | 10+ years | 10 years |

**3. Number Needed to Treat (NNT) in Elderly:**
Benefits often overestimated; harms underestimated:
- Statin for primary prevention in 75+ year old: NNT ~40-100 over 5 years
- Bisphosphonate for fracture: NNT ~20 over 3 years
- Must weigh against NNH (Number Needed to Harm)

### Medication Appropriateness Index (MAI)

10-item validated assessment:
1. Indication for drug?
2. Effective for condition?
3. Dosage correct?
4. Directions correct?
5. Directions practical?
6. Drug-drug interactions?
7. Drug-disease interactions?
8. Unnecessary duplication?
9. Acceptable duration?
10. Least expensive alternative?

Each item scored 1-3; higher scores = less appropriate

### ARMOR Tool for Systematic Review

- **A**ssess: Review all medications
- **R**eview: Check for PIMs, interactions
- **M**inimize: Reduce doses where possible
- **O**ptimize: Ensure optimal dosing for age/function
- **R**eassess: Continuous monitoring

## Advanced Deprescribing

### STOPPFrail Criteria
For patients with limited life expectancy/severe frailty:

**Strong recommendations to deprescribe:**
- Lipid-lowering agents (unless recent CV event)
- Alpha-blockers for hypertension
- Calcium supplements
- Proton pump inhibitors at full dose
- Memantine/cholinesterase inhibitors in advanced dementia

### Evidence Synthesis: Deprescribing Outcomes

**OPTIMISE Trial (2020):**
- Structured medication review by pharmacist
- 70+ patients with polypharmacy
- Significant reduction in medication burden
- No difference in hospitalizations

**TASMANIAN Study:**
- Deprescribing in nursing homes
- Reduced falls, improved QoL
- Family/staff initially anxious but accepting

**Paradox of Evidence:**
- Many medications lack evidence FOR continuation in elderly
- But also lack evidence for deprescribing
- "Evidence absence ≠ absence of benefit"
- Clinical judgment essential

### Pharmacogenomics in Geriatrics

**Clinical Utility:**
| Gene | Drug | Clinical Action |
|------|------|-----------------|
| CYP2D6 | Codeine, tramadol | Poor metabolizers: No effect; Ultra-rapid: Toxicity |
| CYP2C19 | Clopidogrel | Poor metabolizers: Reduced efficacy |
| VKORC1/CYP2C9 | Warfarin | Dose adjustment algorithm |
| HLA-B*5701 | Abacavir | Avoid if positive |
| HLA-B*1502 | Carbamazepine | Asian populations; Stevens-Johnson |

**Considerations in Elderly:**
- Polypharmacy increases phenoconversion (drug-induced CYP changes)
- Drug interactions may override genetic predictions
- Limited prospective evidence in >75 population
- Testing valuable for high-risk drugs (warfarin, clopidogrel)

### Drug-Drug Interaction Management

**High-Risk Combinations (Contraindicated):**
- Clopidogrel + omeprazole (CYP2C19 inhibition)
- Linezolid + SSRIs (serotonin syndrome)
- Clarithromycin + colchicine (CKD) (fatal toxicity)
- Amiodarone + quinidine (torsades)

**Moderate Risk (Monitor Closely):**
- Warfarin + almost anything
- QTc-prolonging combinations
- Potassium-elevating combinations
- Serotonergic combinations

**Tools:**
- Lexicomp, Micromedex, Epocrates
- Beers interaction table
- Electronic health record alerts (high false-positive rate)

## Quality Improvement in Medication Management

### Institutional Approaches

**Medication Stewardship Programs:**
- Pharmacist-led medication review
- Automatic alerts for PIMs
- Deprescribing protocols for common drugs
- Education for prescribers

**Metrics for Quality:**
- % patients with medication reconciliation
- % patients on ≥10 medications
- Rate of PIMs prescribed
- Anticholinergic burden scores
- Hospital readmission for ADEs

### Transitions of Care

**High-Risk Period:**
- 35% of patients have medication discrepancies at discharge
- 12% experience ADE within 2 weeks of discharge
- Most common: Drug omissions, duplications, wrong doses

**Interventions:**
- Pharmacist-led medication reconciliation
- Teach-back for new medications
- Post-discharge phone calls
- Medication therapy management (MTM)

### Communication Strategies

**When Discussing Deprescribing:**
- Frame as optimization, not withdrawal
- Explain risks of continuing
- Involve patient/family in decisions
- Reassure that changes can be reversed
- Schedule follow-up

**Documentation:**
- Clear rationale for stopping
- Monitoring plan
- Instructions for patient/family
- Communication to other providers`,
      keyTerms: [
        { term: 'time to benefit', definition: 'Time needed for preventive therapy to provide meaningful benefit; critical in limited life expectancy' },
        { term: 'STOPPFrail', definition: 'Deprescribing criteria specifically for frail elderly with limited life expectancy' },
        { term: 'ARMOR', definition: 'Systematic medication review framework: Assess, Review, Minimize, Optimize, Reassess' },
        { term: 'phenoconversion', definition: 'Drug-induced changes in CYP enzyme activity affecting drug metabolism' },
        { term: 'medication therapy management', definition: 'Comprehensive medication review service provided by pharmacists' },
        { term: 'MAI', definition: 'Medication Appropriateness Index; 10-item validated tool scoring prescribing appropriateness' },
      ],
      clinicalNotes: 'Life expectancy estimation is crucial but imprecise. Use prognostic indices (ePrognosis.org). For statins in primary prevention, 5-year cardiovascular risk must be weighed against pill burden and side effects. Deprescribing conversations take time - schedule dedicated visits.',
    },
    5: {
      level: 5,
      summary: 'Contemporary polypharmacy management integrates precision medicine approaches, health system interventions, shared decision-making frameworks, and emerging technologies to optimize medication use while addressing the limitations of guideline-based recommendations in multimorbid elderly.',
      explanation: `## Limitations of Guidelines in Multimorbidity

### The Guideline Paradox
- Single-disease guidelines recommend cumulative 12+ medications for typical 75-year-old
- Guidelines largely exclude elderly and multimorbid patients from trials
- Extrapolation to real-world elderly population uncertain

**Example: Hypothetical 78-year-old with:**
- Hypertension → 2-3 medications
- Diabetes → 2-3 medications
- Coronary artery disease → 4 medications (statin, aspirin, ACEi, beta-blocker)
- Atrial fibrillation → anticoagulant
- COPD → 2-3 inhalers
- Depression → SSRI
- GERD → PPI
- Osteoporosis → bisphosphonate + calcium + vitamin D
**Total: 15-18 medications if following guidelines**

### Evidence Gaps
- Trials exclude elderly (median trial age 60-65)
- Multimorbidity exclusion criterion in most trials
- Frailty not assessed
- Outcomes focus on disease-specific, not patient-centered

## Precision Deprescribing

### Risk Stratification for Targeted Intervention

**High Yield Deprescribing Targets:**
| Characteristic | Intervention |
|----------------|--------------|
| Frailty index >0.35 | Apply STOPPFrail |
| Life expectancy <2 years | Stop primary prevention |
| High anticholinergic burden | Systematic ACB reduction |
| Recent fall | Review psychotropics, antihypertensives |
| Cognitive decline | Reduce anticholinergics, benzos |
| Recurrent ADEs | Pharmacist-led comprehensive review |

### Machine Learning for Deprescribing

**Emerging Applications:**
- Prediction of ADE risk from polypharmacy patterns
- Identification of deprescribing candidates
- Personalized drug interaction alerts
- Natural language processing of clinical notes for drug problems

**Current Tools:**
- MedStopper: Deprescribing guidance app
- Medstopper algorithm prioritizes medications by deprescribing potential
- INTERCheck: AI-assisted interaction checking

### Pharmacometrics in Geriatrics

**Population PK Modeling:**
- Elderly-specific PK parameters
- Model-informed precision dosing
- Accounts for:
  - Age-related organ function changes
  - Drug-drug interactions
  - Genetic polymorphisms

**Application:**
- Vancomycin, aminoglycosides dosing
- Anticoagulant management
- Emerging: Oncology drug dosing in frail elderly

## Health System Interventions

### Deprescribing as Quality Metric

**CMS Quality Measures:**
- Medication reconciliation post-discharge
- Avoidance of certain PIMs
- Antipsychotic use in dementia

**Proposed Measures:**
- Anticholinergic burden tracking
- Deprescribing rates
- Patient-reported medication burden

### Collaborative Care Models

**IMPACT Model Adaptation:**
- Psychiatrist + pharmacist + PCP
- Systematic medication review
- Protocol-driven deprescribing
- Monitoring and follow-up

**Pharmacist Integration:**
- Embedded clinical pharmacists
- Deprescribing consultations
- Patient education
- Provider education

### Electronic Health Record Optimization

**Current Problems:**
- Alert fatigue (>90% alerts overridden)
- Non-specific interaction warnings
- Lack of age-specific guidance

**Solutions:**
- Tiered alerting (high/moderate/low risk)
- Interruptive alerts only for high risk
- Integrated Beers/STOPP criteria
- Anticholinergic burden score display
- Deprescribing decision support

## Shared Decision-Making for Medication Decisions

### Decision Aid Development

**Components of Medication Decision Aids:**
1. Explain current medications and rationale
2. Present options (continue, reduce, stop)
3. Quantify benefits and harms (visual representations)
4. Elicit patient values and preferences
5. Facilitate shared decision

**Example: Statin Decision Aid for Primary Prevention**
- 100 people like you taking statin for 5 years:
  - 2-3 will avoid a heart attack
  - 10-20 will experience muscle aches
  - 97-98 will have neither event
- What matters most to you?

### Values Elicitation

**Key Questions:**
- What activities are most important to you?
- How do you feel about taking multiple pills?
- What side effects concern you most?
- What are your priorities: Length of life vs. quality of life?

**Patient Priorities Care (PPC):**
- Emerging model from Mary Tinetti et al.
- Identify health outcome goals
- Identify care preferences
- Align medications with priorities
- Stop medications misaligned with goals

## Special Populations

### Nursing Home Residents

**Unique Considerations:**
- Highest polypharmacy rates
- Most PIMs
- CMS regulations affect prescribing
- Antipsychotic reduction initiatives

**Interventions Studied:**
- OPTIMISE trial: Pharmacist medication review
- COSMOS: Deprescribing + non-pharm intervention
- Results: Reduced medications, maintained outcomes

### End of Life

**Comfort Care Transition:**
- Keep: Analgesics, antiemetics, anxiolytics, secretion control
- Stop: Preventive medications, chronic disease management
- Individualize: Based on symptoms and prognosis

**PEACE Tool:**
- Plan: Discuss goals of care
- Educate: Explain medication changes
- Assess: Review all medications
- Comfort: Prioritize symptom management
- Eliminate: Stop non-essential medications

### Cognitive Impairment

**Specific Considerations:**
- Limited capacity for shared decision-making
- Surrogate involvement
- Greater vulnerability to drug effects
- Caregiver burden

**Interventions:**
- Simplify regimens
- Reduce anticholinergic burden
- Consider adherence aids
- Involve caregiver in medication management

## Future Directions

### Precision Prescribing/Deprescribing
- Multi-omic risk stratification
- Integrated pharmacogenomics
- Real-time therapeutic drug monitoring
- AI-assisted clinical decision support

### Research Priorities
- Trials including frail, multimorbid elderly
- Patient-centered outcomes (function, QoL)
- Deprescribing comparative effectiveness
- Implementation science for deprescribing programs

### Policy Implications
- Revise guidelines for multimorbidity
- Regulatory incentives for deprescribing
- Coverage for medication therapy management
- Training in geriatric prescribing principles`,
      keyTerms: [
        { term: 'Patient Priorities Care', definition: 'Care model aligning medications with individual patient health priorities and goals' },
        { term: 'precision deprescribing', definition: 'Targeted medication reduction based on individual risk factors and patient characteristics' },
        { term: 'model-informed precision dosing', definition: 'Using pharmacokinetic/pharmacodynamic modeling for individualized drug dosing' },
        { term: 'alert fatigue', definition: 'Clinician desensitization to drug alerts due to excessive, non-specific warnings' },
        { term: 'guideline paradox', definition: 'Phenomenon where following single-disease guidelines leads to inappropriate polypharmacy' },
        { term: 'PEACE tool', definition: 'Framework for medication management during end-of-life transitions' },
      ],
      clinicalNotes: `Key practice points for polypharmacy mastery:

1. **Calculate always**: GFR for drug dosing; ACB score for cognition; life expectancy for prevention
2. **Question guidelines**: Single-disease guidelines don't apply to multimorbid patients
3. **Use STOPPFrail**: For frail patients, this is your deprescribing roadmap
4. **Involve pharmacists**: Collaborative deprescribing is more effective and sustainable
5. **Patient Priorities Care**: Ask what matters most; align medications accordingly
6. **Document rationale**: Both for starting AND for continuing medications
7. **Schedule follow-up**: Deprescribing isn't done until you've assessed the outcome`,
    },
  },

  media: [
    {
      id: 'polypharmacy-cascade',
      type: 'diagram',
      filename: 'prescribing-cascade.svg',
      title: 'The Prescribing Cascade',
      description: 'Visual representation of how drug side effects lead to additional prescriptions',
    },
    {
      id: 'deprescribing-algorithm',
      type: 'diagram',
      filename: 'deprescribing-algorithm.svg',
      title: 'Deprescribing Decision Algorithm',
      description: 'Step-by-step approach to medication discontinuation',
    },
  ],

  citations: [
    {
      id: 'beers-criteria-2023',
      type: 'article',
      title: '2023 American Geriatrics Society Beers Criteria Update',
      authors: ['By the 2023 American Geriatrics Society Beers Criteria Update Expert Panel'],
      source: 'Journal of the American Geriatrics Society',
    },
    {
      id: 'stopp-start-v3',
      type: 'article',
      title: 'STOPP/START criteria for potentially inappropriate prescribing v3',
      authors: ['OMahony D', 'Cherubini A', 'Guiteras AR', 'et al.'],
      source: 'Age and Ageing',
    },
    {
      id: 'deprescribing-guidelines',
      type: 'website',
      title: 'Deprescribing.org Evidence-Based Guidelines',
      source: 'Bruyère Research Institute',
      url: 'https://deprescribing.org',
    },
  ],

  crossReferences: [
    { targetId: 'concept-aging-physiology', targetType: 'concept', relationship: 'related', label: 'Aging Physiology' },
    { targetId: 'concept-falls-prevention', targetType: 'concept', relationship: 'related', label: 'Falls Prevention' },
    { targetId: 'concept-delirium-dementia', targetType: 'concept', relationship: 'related', label: 'Delirium vs Dementia' },
    { targetId: 'concept-end-of-life-planning', targetType: 'concept', relationship: 'related', label: 'End-of-Life Planning' },
  ],

  tags: {
    systems: ['multi-system'],
    topics: ['geriatrics', 'pharmacology', 'patient safety', 'quality improvement'],
    keywords: ['polypharmacy', 'deprescribing', 'Beers criteria', 'drug interactions', 'medication reconciliation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default polypharmacy;
