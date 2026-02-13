/**
 * Delirium vs Dementia - Comprehensive Educational Content
 *
 * Covers the critical distinction between delirium and dementia,
 * including diagnosis, management, and prevention strategies.
 */

import { EducationalContent } from '../../types';

export const deliriumVsDementia: EducationalContent = {
  id: 'concept-delirium-vs-dementia',
  type: 'concept',
  name: 'Delirium vs Dementia',
  alternateNames: ['Acute Confusion', 'Acute Brain Failure', 'Encephalopathy'],

  levels: {
    1: {
      level: 1,
      summary: 'Delirium is sudden confusion that can be treated, while dementia is a slow decline in memory and thinking that happens over time.',
      explanation: `When older adults become confused, it's very important to figure out if it's delirium or dementia - because they are very different problems that need different treatments.

**Delirium (Sudden Confusion)**

Delirium is like a sudden "brain fog" that comes on quickly, usually over hours or days. Think of it like a computer that suddenly starts glitching.

**Signs of Delirium:**
- Confusion that started suddenly
- Person seems "not themselves"
- Can't pay attention or follow conversations
- May see or hear things that aren't there
- Often worse at night
- Sleepiness or agitation
- May be very different from hour to hour

**Common Causes:**
- Infections (especially urinary or pneumonia)
- Medications (especially new ones)
- Dehydration
- Pain
- Constipation
- Being in the hospital
- Surgery
- Not enough sleep

**The Good News:** Delirium can usually be fixed when you treat the cause!

**Dementia (Slow Memory Loss)**

Dementia is a gradual loss of memory and thinking abilities over months to years. Think of it like a slow fade, not a sudden change.

**Signs of Dementia:**
- Memory problems that developed slowly
- Forgetting recent events
- Difficulty with familiar tasks
- Getting lost in known places
- Personality changes over time
- The person is alert but forgetful

**Key Differences:**

| Feature | Delirium | Dementia |
|---------|----------|----------|
| How it starts | Suddenly (hours/days) | Slowly (months/years) |
| Attention | Very poor | Usually okay early on |
| Awareness | Clouded, drowsy | Clear and alert |
| Changes during day | Comes and goes | Stays about the same |
| Can it be fixed? | Usually yes | Not curable, but manageable |

**Why This Matters**

- Delirium is a medical emergency - it means something is wrong in the body
- People with dementia are MORE likely to get delirium when sick
- If an older person suddenly becomes confused, they need medical help right away
- Don't assume confusion is "just dementia" - always check for delirium causes`,
      keyTerms: [
        { term: 'delirium', definition: 'Sudden confusion that usually has a treatable cause', pronunciation: 'deh-LEER-ee-um' },
        { term: 'dementia', definition: 'A slow loss of memory and thinking ability over time', pronunciation: 'deh-MEN-sha' },
        { term: 'attention', definition: 'The ability to focus and concentrate on something' },
        { term: 'hallucination', definition: 'Seeing or hearing things that are not really there' },
      ],
      analogies: [
        'Delirium is like a TV signal suddenly going fuzzy - something is interfering and it can usually be fixed. Dementia is like an old TV slowly wearing out.',
        'Delirium is like a sudden power outage - find the problem and the lights come back on. Dementia is like lights slowly dimming over years.',
        'Delirium is like catching a cold in your brain - it comes on fast but goes away. Dementia is like aging - it happens gradually.',
      ],
      examples: [
        'A grandmother who was fine yesterday but today doesn\'t know where she is - this is likely delirium.',
        'A grandfather who has been slowly forgetting names over the past two years - this is likely dementia.',
        'An older man with dementia who suddenly becomes much more confused after starting a new medication - he now has delirium ON TOP OF his dementia.',
      ],
    },
    2: {
      level: 2,
      summary: 'Delirium is an acute, fluctuating disturbance in attention and awareness with an underlying medical cause, while dementia is a chronic, progressive decline in multiple cognitive domains affecting daily function.',
      explanation: `## Understanding the Distinction

### Why Differentiation Matters
- Delirium is a medical emergency requiring urgent evaluation
- Delirium has treatable underlying causes
- Delirium is associated with increased mortality, longer hospital stays, and risk of long-term cognitive decline
- Dementia is a risk factor FOR delirium
- Both can coexist (delirium superimposed on dementia)

## Delirium

### Definition (DSM-5)
1. Disturbance in attention AND awareness
2. Develops over short period (hours to days)
3. Fluctuates during the day
4. Additional cognitive disturbance (memory, orientation, language, perception)
5. Not explained by pre-existing neurocognitive disorder
6. Evidence of underlying medical cause

### Types of Delirium
| Type | Characteristics | % of Cases |
|------|-----------------|------------|
| Hyperactive | Agitation, restlessness, pulling at tubes | 25% |
| Hypoactive | Lethargy, decreased activity, withdrawn | 25% |
| Mixed | Alternates between both | 45% |

**Important:** Hypoactive delirium is most commonly missed!

### Common Causes (Mnemonic: DELIRIUM)

- **D**rugs (anticholinergics, opioids, benzodiazepines, steroids)
- **E**lectrolyte imbalances (sodium, calcium, glucose)
- **L**ack of drugs (alcohol/benzo withdrawal)
- **I**nfection (UTI, pneumonia, sepsis)
- **R**educed sensory input (vision/hearing impairment)
- **I**ntracranial (stroke, bleed, seizure)
- **U**rinary retention, constipation
- **M**yocardial (MI, heart failure, hypoxia)

### Risk Factors
**Predisposing (Patient Factors):**
- Age ≥65
- Pre-existing dementia (biggest risk factor)
- Severe illness
- Sensory impairment
- Depression
- Alcohol use
- Functional dependence

**Precipitating (Triggering Factors):**
- Medications (especially polypharmacy)
- Surgery/anesthesia
- Infection
- Dehydration
- Sleep deprivation
- Pain
- Immobility
- Urinary catheter

### Screening and Diagnosis

**Confusion Assessment Method (CAM):**
Requires BOTH:
1. Acute onset AND fluctuating course
2. Inattention

Plus ONE of:
3. Disorganized thinking
4. Altered level of consciousness

Sensitivity: 94-100%, Specificity: 90-95%

**Testing Attention:**
- Days of week backward
- Months of year backward
- Spell "WORLD" backward
- Digit span (normal ≥5 forward, ≥3 backward)

## Dementia

### Definition
Significant cognitive decline from prior level in one or more domains:
- Learning/memory
- Language
- Executive function
- Complex attention
- Perceptual-motor
- Social cognition

AND interferes with independence in everyday activities.

### Key Features
- Insidious onset (months to years)
- Progressive course
- Alert (unless late stage)
- Stable symptoms day-to-day
- Memory prominent in most types
- No acute medical precipitant

### Common Types
1. **Alzheimer's disease** (60-80%): Memory first, then other domains
2. **Vascular dementia** (10-20%): Stepwise decline, focal signs
3. **Lewy body dementia** (5-10%): Fluctuations, hallucinations, parkinsonism
4. **Frontotemporal dementia** (5%): Behavior/language, younger onset

## Side-by-Side Comparison

| Feature | Delirium | Dementia |
|---------|----------|----------|
| Onset | Acute (hours-days) | Insidious (months-years) |
| Course | Fluctuating | Progressive (usually stable day-to-day) |
| Duration | Days to weeks | Months to years |
| Attention | Severely impaired | Relatively preserved early |
| Consciousness | Altered (drowsy or hyperalert) | Clear until late stages |
| Hallucinations | Common (especially visual) | Less common (except Lewy body) |
| Reversibility | Usually reversible | Not reversible |
| Sleep-wake | Disrupted (worse at night) | May have changes but less acute |
| Speech | Incoherent, slurred | Word-finding difficulty |

## Delirium Superimposed on Dementia

- Very common: Up to 65% of delirium occurs in patients with dementia
- More difficult to diagnose (baseline cognitive impairment)
- Worse outcomes
- Key: Know the baseline!
- Any acute change from baseline = evaluate for delirium

### Detection Tips
- Ask family: "Is this their normal?"
- Review medications
- Check for infection
- Look for pain
- Assess hydration`,
      keyTerms: [
        { term: 'CAM', definition: 'Confusion Assessment Method; the most widely used delirium screening tool' },
        { term: 'hypoactive delirium', definition: 'Delirium presenting with lethargy and decreased activity; frequently missed' },
        { term: 'hyperactive delirium', definition: 'Delirium presenting with agitation, restlessness, and hypervigilance' },
        { term: 'predisposing factors', definition: 'Patient characteristics that increase baseline vulnerability to delirium' },
        { term: 'precipitating factors', definition: 'Acute insults that trigger delirium in a vulnerable patient' },
        { term: 'inattention', definition: 'Inability to focus, sustain, or shift attention; hallmark of delirium' },
      ],
      analogies: [
        'Predisposing and precipitating factors work like a scale - the more baseline vulnerability, the smaller the trigger needed to tip into delirium.',
        'CAM is like checking the four pillars of delirium - if the key ones are present, the diagnosis is supported.',
      ],
    },
    3: {
      level: 3,
      summary: 'Delirium pathophysiology involves neurotransmitter imbalances (reduced cholinergic, excess dopaminergic activity), neuroinflammation, and impaired oxidative metabolism, while dementia results from progressive neurodegeneration with specific neuropathological signatures.',
      explanation: `## Delirium Pathophysiology

### Neurotransmitter Hypothesis

**Cholinergic Deficiency:**
- Primary mechanism
- Acetylcholine critical for attention, memory, REM sleep
- Anticholinergic drugs → dose-dependent delirium risk
- Serum anticholinergic activity correlates with delirium severity
- Explains why older adults (↓ baseline ACh) more susceptible

**Dopaminergic Excess:**
- DA excess relative to ACh
- Hallucinations, agitation (hyperactive delirium)
- Antipsychotics (DA blockers) may reduce symptoms
- L-DOPA, cocaine can precipitate delirium

**Other Neurotransmitters:**
- GABA: Sedative/hypnotics, alcohol withdrawal
- Glutamate: Excitotoxicity in acute illness
- Serotonin: Serotonin syndrome
- Melatonin: Circadian disruption

### Neuroinflammation

**Systemic Inflammation → Brain:**
- Peripheral cytokines (IL-1, IL-6, TNF-α) cross BBB
- Activated microglia produce neuroinflammation
- Disrupts synaptic function
- Increases BBB permeability
- Explains delirium in sepsis, surgery

**Biomarkers of Inflammation:**
- Elevated CRP, IL-6, TNF-α in delirium
- S100B (glial injury marker) elevated
- NSE (neuronal injury marker) elevated

### Oxidative Metabolism

**Metabolic Stress:**
- Hypoxia
- Hypoglycemia
- Thiamine deficiency
- Hepatic/renal failure

These impair neuronal oxidative metabolism → acute brain dysfunction.

### Network Disruption

- EEG shows diffuse slowing (reduced alpha, increased theta/delta)
- fMRI shows disrupted default mode network connectivity
- Attentional networks particularly vulnerable

## Delirium Screening Tools

### Confusion Assessment Method (CAM)

**Original CAM (Inpatient):**
| Feature | Assessment |
|---------|------------|
| 1. Acute onset & fluctuating | "Is there a change from baseline? Does it come and go?" |
| 2. Inattention | Days backward, months backward, spell WORLD |
| 3. Disorganized thinking | Illogical ideas, tangential, incoherent |
| 4. Altered LOC | Alert, vigilant, lethargic, stupor, coma |

Positive = Feature 1 + 2 + (3 OR 4)

**CAM-ICU (For Intubated Patients):**
- Feature 1: RASS fluctuation from baseline
- Feature 2: Visual/auditory attention tests (pictures, letters)
- Features 3 & 4: Modified for non-verbal patients

**3D-CAM (3-Minute Diagnostic):**
- Brief, structured interview
- Can be administered by non-physicians
- Sensitivity 95%, Specificity 94%

**4AT (Alternative Rapid Screen):**
- 4 items, no formal training needed
- Alertness, AMT-4, Attention, Acute change
- Score ≥4: Likely delirium

### Delirium Detection in Dementia

**Challenges:**
- Baseline cognitive impairment masks acute changes
- Difficulty with standardized testing
- Informant history crucial

**Strategies:**
- Know the patient's baseline (document!)
- Any CHANGE from baseline = delirium until proven otherwise
- Use CAM with informant for Feature 1
- Serial assessments
- Consider Delirium Rating Scale-Revised (DRS-R-98) for severity

## Workup for Delirium

### Essential Evaluation

**History:**
- Timeline of changes (acute = hours/days)
- Medication review (new, changed, stopped)
- Substance use
- Baseline cognition
- Recent illness, surgery, hospitalization

**Physical Examination:**
- Vital signs (fever, hypoxia, hypotension)
- Mental status (attention testing critical)
- Neurological exam (focal deficits)
- Signs of infection
- Urinary retention, fecal impaction

**Laboratory:**
| Test | Looking For |
|------|-------------|
| CBC | Infection, anemia |
| CMP | Electrolytes, renal/hepatic function, glucose |
| Urinalysis | UTI |
| Chest X-ray | Pneumonia |
| Thyroid panel | Thyroid dysfunction |
| Consider: Ammonia | Hepatic encephalopathy |
| Consider: B12 | Deficiency |
| Consider: Drug levels | Toxicity |
| Consider: Blood cultures | Sepsis |
| Consider: ABG | Hypoxia, hypercapnia |

**Imaging:**
- CT head if: Focal deficits, head trauma, anticoagulation, unexplained decline
- MRI if: Concern for stroke, encephalitis

**Lumbar Puncture if:**
- Fever + mental status change without clear source
- Meningeal signs
- Immunocompromised
- Unexplained encephalopathy

### ECG
- Arrhythmias causing hypoperfusion
- QTc prolongation before starting antipsychotics

## Delirium Prevention

### Hospital Elder Life Program (HELP)

**Evidence-Based Interventions:**
| Intervention | Target |
|--------------|--------|
| Orientation board (date, names, schedule) | Orientation |
| Familiar objects from home | Orientation |
| Cognitive stimulation activities | Cognition |
| Early mobilization | Immobility |
| Sleep hygiene (noise reduction, no nighttime vitals) | Sleep deprivation |
| Vision/hearing aids | Sensory impairment |
| Hydration protocol | Dehydration |
| Medication review | Polypharmacy |

**Outcomes:**
- 40% reduction in delirium incidence
- 24% reduction in total delirium days
- Cost-effective

### Pharmacologic Prevention

**Generally NOT recommended for prevention:**
- Antipsychotics: No benefit in prevention trials
- Melatonin/ramelteon: Mixed evidence, may help sleep
- Cholinesterase inhibitors: No benefit

**Exception:**
- Dexmedetomidine (ICU sedation): May reduce delirium vs. benzodiazepines`,
      keyTerms: [
        { term: 'cholinergic deficiency hypothesis', definition: 'Theory that delirium results from reduced acetylcholine activity, explaining anticholinergic drug effects' },
        { term: 'HELP', definition: 'Hospital Elder Life Program; evidence-based multicomponent delirium prevention program' },
        { term: 'CAM-ICU', definition: 'Confusion Assessment Method for the ICU; validated for intubated/non-verbal patients' },
        { term: '4AT', definition: 'Rapid 4-item delirium screening tool not requiring formal training' },
        { term: 'sundowning', definition: 'Worsening confusion in evening/night; seen in both delirium and dementia' },
        { term: 'S100B', definition: 'Glial injury biomarker elevated in delirium; reflects blood-brain barrier disruption' },
      ],
      clinicalNotes: 'Hypoactive delirium is easily missed - actively screen! Every patient with altered mental status needs medication review. UTI in elderly may present with delirium alone (no dysuria, fever). HELP program components can be implemented anywhere - they are simple, non-pharmacologic interventions.',
    },
    4: {
      level: 4,
      summary: 'Advanced delirium management requires stratified diagnostic approaches, understanding of pharmacologic and non-pharmacologic treatment evidence, recognition of special populations, and appreciation of long-term cognitive outcomes.',
      explanation: `## Stratified Diagnostic Approach

### Preoperative Cognitive Assessment

**Importance:**
- Baseline cognition predicts delirium risk
- Enables detection of postoperative change
- Guides perioperative management

**Recommended Tools:**
- Mini-Cog or MoCA preoperatively
- Document baseline clearly
- Inform surgical/anesthesia team

### Delirium Risk Stratification

**Prediction Models:**
| Model | Population | Key Variables |
|-------|------------|---------------|
| PRE-DELIRIC | ICU | Age, APACHE-II, coma, infection, metabolic acidosis, sedation, morphine |
| AWOL | Medical | Age, Whispered Test, Orientation, Severity of Illness |

**Clinical Risk Tiers:**
- Low risk: No dementia, age <65, few medications
- Moderate risk: Age ≥65 OR ≥1 risk factor
- High risk: Pre-existing dementia, multiple risk factors, major surgery

### EEG in Delirium

**Typical Findings:**
- Diffuse slowing (theta/delta predominance)
- Reduced alpha rhythm
- Poor reactivity to stimulation
- Triphasic waves (hepatic encephalopathy)

**When to Order:**
- Suspected non-convulsive status epilepticus
- Altered mental status unexplained by standard workup
- Fluctuations suggesting seizures

## Treatment Approaches

### Non-Pharmacologic Management (First-Line)

**Reorientation:**
- Clocks, calendars visible
- Frequent verbal orientation
- Consistent caregivers
- Family presence
- Familiar objects

**Sleep-Wake Cycle:**
- Natural light exposure during day
- Dark, quiet room at night
- Avoid nighttime interruptions
- No daytime sleeping >90 min

**Sensory Optimization:**
- Glasses and hearing aids AT BEDSIDE
- Clean glasses, working hearing aid batteries
- Clear communication

**Mobility:**
- Early mobilization
- Physical therapy
- Avoid restraints (worsen delirium)
- Minimize tethers (catheters, lines)

**Medical Optimization:**
- Treat underlying cause
- Adequate hydration
- Pain control (preferably non-opioid)
- Avoid constipation
- Oxygen if hypoxic

### Pharmacologic Treatment

**General Principles:**
- Treat underlying cause first
- Non-pharmacologic interventions always
- Medications only for severe agitation threatening safety
- Use lowest effective dose, shortest duration
- Monitor for adverse effects

**Antipsychotics:**
| Agent | Dose | Route | Considerations |
|-------|------|-------|----------------|
| Haloperidol | 0.5-1 mg | PO/IV/IM | Avoid in Parkinson's, Lewy body |
| Quetiapine | 12.5-25 mg | PO | Sedating, less EPS |
| Olanzapine | 2.5-5 mg | PO/IM | Sedating, less EPS |
| Risperidone | 0.25-0.5 mg | PO | Less sedating |

**Evidence:**
- No trials show mortality benefit
- May reduce symptom severity
- MIND-USA trial: No benefit for delirium duration
- APA 2023 guidelines: Recommend against routine use
- Reserve for severe agitation endangering patient/staff

**Contraindications/Cautions:**
- QTc prolongation (get ECG)
- Parkinson's disease
- Lewy body dementia (severe sensitivity)
- History of neuroleptic malignant syndrome

**Benzodiazepines:**
- First-line ONLY for alcohol/benzo withdrawal delirium
- Otherwise AVOID (worsen delirium)
- May use if antipsychotic contraindicated

**Dexmedetomidine (ICU):**
- Alpha-2 agonist
- May reduce delirium vs. benzos for sedation
- Useful for ventilated patients
- Hypotension, bradycardia risks

### Special Populations

**Delirium Tremens (Alcohol Withdrawal):**
- Onset 48-96 hours after last drink
- Autonomic hyperactivity, hallucinations, seizures
- Benzodiazepines first-line (symptom-triggered dosing)
- Thiamine before glucose

**ICU Delirium:**
- Up to 80% of ICU patients
- ABCDEF Bundle:
  - **A**ssess, prevent, manage pain
  - **B**oth SAT and SBT (awakening and breathing trials)
  - **C**hoice of sedation (avoid benzodiazepines)
  - **D**elirium monitoring and management
  - **E**arly mobility
  - **F**amily engagement

**Postoperative Delirium:**
- Risk factors: Pre-existing dementia, major surgery, benzodiazepines, anticholinergics
- Prevention: Regional anesthesia when possible, avoid anticholinergics/benzos
- BIS-guided anesthesia may reduce incidence

**Palliative Care/Terminal Delirium:**
- Up to 90% in dying patients
- May be irreversible
- Goals shift to comfort
- Family education critical
- May need sedation for refractory symptoms

## Long-Term Outcomes

### Cognitive Outcomes

**Delirium → Cognitive Decline:**
- Delirium accelerates cognitive decline
- Delirium may unmask preclinical dementia
- Each delirium episode increases dementia risk
- BRAIN-ICU study: ICU delirium → cognitive impairment at 1 year

**Mechanisms of Lasting Injury:**
- Neuroinflammation persistence
- Hippocampal atrophy
- White matter injury
- Synaptic dysfunction

### Mortality

- In-hospital mortality: 22-76% in some series
- 12-month mortality increased
- Independent of underlying illness severity

### Post-Hospitalization Management

**Discharge Planning:**
- Assess cognition before discharge
- May need increased support at home
- Caregiver education
- Medication reconciliation (stop any new high-risk meds)
- Follow-up cognitive assessment

**Follow-Up:**
- Reassess cognition at 3-6 months
- If deficits persist → Neuropsychological testing
- Screen for depression, PTSD
- Family/caregiver support`,
      keyTerms: [
        { term: 'ABCDEF Bundle', definition: 'ICU liberation bundle targeting sedation, delirium, and early mobility' },
        { term: 'BIS', definition: 'Bispectral Index; EEG-based anesthesia depth monitor; guided anesthesia may reduce delirium' },
        { term: 'PRE-DELIRIC', definition: 'Prediction model for ICU delirium risk' },
        { term: 'terminal delirium', definition: 'Delirium occurring in the dying process; often irreversible, managed with comfort focus' },
        { term: 'symptom-triggered dosing', definition: 'Protocol-driven benzodiazepine dosing based on withdrawal symptoms rather than fixed schedule' },
        { term: 'SAT/SBT', definition: 'Spontaneous Awakening Trial and Spontaneous Breathing Trial; paired daily assessment in ICU' },
      ],
      clinicalNotes: 'Antipsychotics are NOT first-line - use non-pharmacologic interventions first. Get ECG before antipsychotics (QTc). NEVER use typical antipsychotics in Lewy body dementia. Delirium has lasting cognitive consequences - this is not a transient, benign condition.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of delirium integrates biomarker-driven diagnosis, precision prevention strategies, pathophysiology-informed treatment, and health systems approaches to reduce delirium incidence and long-term sequelae.',
      explanation: `## Biomarkers and Mechanistic Insights

### Biomarkers of Delirium

**Neuroinflammation Markers:**
| Biomarker | Finding in Delirium | Interpretation |
|-----------|--------------------|--------------------|
| IL-6, IL-8 | Elevated | Systemic inflammation |
| S100B | Elevated | Astrocytic injury, BBB disruption |
| NSE | Elevated | Neuronal injury |
| NfL | Elevated | Axonal damage |
| CRP | Elevated | Non-specific inflammation |

**Cholinergic Markers:**
- Serum anticholinergic activity (SAA) correlates with delirium
- CSF acetylcholinesterase activity altered
- Potential for cholinergic augmentation trials

**Melatonin/Circadian:**
- Melatonin secretion disrupted
- Cortisol rhythm abnormalities
- Supports circadian-based interventions

### Neuroimaging Insights

**Structural MRI:**
- Pre-existing white matter hyperintensities predict delirium
- Pre-existing brain atrophy predicts delirium
- Hippocampal volume associated with risk

**Functional Imaging:**
- fMRI shows disrupted default mode network
- Reduced connectivity between attention networks
- PET shows diffuse hypometabolism

**Post-Delirium Changes:**
- Accelerated brain atrophy after delirium
- Hippocampal volume loss
- White matter changes
- Correlates with cognitive decline

### Genetic Risk Factors

**APOE ε4:**
- Inconsistent association
- May increase risk in some populations
- May affect recovery

**Other Candidates:**
- Dopamine receptor polymorphisms
- Cytokine gene variants
- Cholinergic gene variants
- Ongoing GWAS studies

## Precision Delirium Prevention

### Risk Stratification for Targeted Prevention

**Approach:**
1. Identify high-risk patients at admission
2. Implement tiered prevention strategies
3. Intensive interventions for highest risk

**Risk-Based Protocol:**
| Risk Level | Strategy |
|------------|----------|
| Low | General education, standard care |
| Moderate | HELP-type interventions, med review |
| High | All interventions + Geriatrics consult + proactive monitoring |

### Pharmacologic Prevention Trials

**No Consistent Benefit:**
- Haloperidol prophylaxis: Mixed results, recent negative trials
- Donepezil: No benefit
- Melatonin: Some positive signals, inconsistent
- Ramelteon: Small positive trial, needs replication
- Dexmedetomidine: ICU setting, promising for prevention

**Perioperative Trials:**
- Regional vs. general anesthesia: May reduce delirium
- Depth of anesthesia monitoring: Some benefit
- Avoiding anticholinergics: Logical, limited data

### Innovative Prevention Strategies

**Prehabilitation:**
- Preoperative cognitive/physical optimization
- Exercise programs before surgery
- Cognitive training
- Nutritional optimization

**Digital Interventions:**
- Tablet-based cognitive stimulation
- Virtual reality for orientation
- Telemedicine family connection

**Sleep Enhancement:**
- Ear plugs and eye masks
- Melatonin (as sleep aid, not delirium-specific)
- Circadian lighting
- Noise reduction protocols

## Treatment: Pathophysiology-Directed Approaches

### Cholinergic Augmentation

**Rationale:**
- Cholinergic deficiency hypothesis
- Anticholinergics cause delirium
- Cholinesterase inhibitors might help

**Evidence:**
- Rivastigmine trial (REVIVE): Increased mortality, terminated early
- Donepezil: Small negative trials
- Currently NOT recommended
- May be worth revisiting with better patient selection

### Anti-Inflammatory Approaches

**Rationale:**
- Neuroinflammation central to pathophysiology
- Cytokine storm drives delirium

**Agents Under Investigation:**
- Dexamethasone: Mixed results postoperatively
- Statins: Pleiotropic effects; inconsistent delirium data
- Targeted cytokine blockade: Theoretical

### Circadian Rhythm Restoration

**Approaches:**
- Light therapy (bright light during day)
- Melatonin at night
- Structured day/night routines
- Minimizing nighttime disruptions

**Evidence:**
- Logical physiological target
- Limited rigorous trial data
- Included in multicomponent programs

## Health Systems Approaches

### Delirium as Quality Indicator

**Current Metrics:**
- Delirium screening rates
- Delirium incidence
- Physical restraint use
- Antipsychotic use

**Proposed Quality Measures:**
- Time to delirium recognition
- Implementation of non-pharmacologic interventions
- Post-delirium follow-up

### Implementation Science

**HELP Implementation:**
- Requires dedicated staff/volunteers
- Elder Life Specialists
- Cultural change needed
- Cost-effective but requires investment

**Barriers:**
- Staff time
- Knowledge gaps
- Competing priorities
- Lack of standardized protocols

**Facilitators:**
- Leadership support
- Dedicated champions
- Electronic health record integration
- Family engagement

### Technology-Enabled Detection

**Electronic Health Record Alerts:**
- Algorithm-based delirium risk scores
- Automated CAM prompts
- Medication alerts for anticholinergics

**Wearable Monitoring:**
- Activity monitoring
- Sleep pattern detection
- Vital sign trends
- Research stage

## Special Considerations

### Delirium in Dementia Research

**Challenges:**
- High prevalence of delirium superimposed on dementia
- Diagnostic difficulty
- Consent and capacity issues
- Exclusion from many trials

**Approaches:**
- Informant-based assessment
- Change from individual baseline
- Specialized tools (e.g., Cognitive Assessment Method)

### End-of-Life Delirium

**Prevalence:**
- 85-90% in final days
- Often irreversible

**Management Approach:**
- Goals of care discussion
- Comfort-focused treatment
- Family education ("This is common, this is the disease")
- Consider palliative sedation if refractory

**Pharmacology:**
- Haloperidol for agitation
- Benzodiazepines if anxiety/seizure risk
- Midazolam for refractory symptoms
- Balance symptom control vs. sedation

### Post-Delirium Cognitive Impairment (PDCI)

**Recognition:**
- Persistent cognitive deficits after delirium resolves
- May last months to years
- May represent unmasked dementia or new injury

**Management:**
- Cognitive rehabilitation
- Occupational therapy
- Monitor for dementia emergence
- Address depression, PTSD
- Caregiver support

## Future Directions

### Research Priorities

1. **Biomarker development** for early detection and monitoring
2. **Precision prevention** based on individual risk profiles
3. **Mechanistic trials** targeting specific pathways
4. **Long-term outcomes** research
5. **Health services research** on implementation

### Emerging Therapies

- Targeted anti-inflammatory agents
- Microbiome modulation
- Neuromodulation (tDCS, TMS)
- Neuroprotective agents

### Precision Medicine Vision

- Pre-admission risk assessment
- Biomarker-guided monitoring
- Tailored prevention protocols
- Mechanistically targeted treatment
- Post-delirium recovery optimization`,
      keyTerms: [
        { term: 'post-delirium cognitive impairment', definition: 'Persistent cognitive deficits lasting months to years after delirium; may reflect new brain injury or unmasked dementia' },
        { term: 'serum anticholinergic activity', definition: 'Biomarker measuring cumulative anticholinergic burden; correlates with delirium risk and severity' },
        { term: 'prehabilitation', definition: 'Preoperative optimization program including exercise and cognitive training to reduce surgical complications' },
        { term: 'delirium superimposed on dementia', definition: 'Acute delirium occurring in a patient with pre-existing dementia; high-risk combination with worse outcomes' },
        { term: 'circadian disruption', definition: 'Abnormality in day-night rhythm contributing to delirium; target for light therapy and melatonin' },
        { term: 'Elder Life Specialist', definition: 'Trained staff/volunteer in HELP program providing orientation, cognitive stimulation, and mobility assistance' },
      ],
      clinicalNotes: `Key practice points for delirium mastery:

1. **Screen systematically**: Use CAM or 4AT routinely; don't wait for "obvious" delirium
2. **Know the baseline**: Document cognition at admission; any CHANGE triggers evaluation
3. **Hypoactive delirium kills**: Actively look for it; it's more common and more dangerous
4. **Prevention works**: HELP-type interventions reduce delirium by 40%; implement them
5. **Treat the cause**: Medications are adjuncts, not substitutes for treating underlying etiology
6. **Delirium has sequelae**: Long-term cognitive and mortality impact; follow up appropriately
7. **Involve families**: They know baseline, they can help with non-pharmacologic interventions
8. **QI opportunity**: Delirium rates are a measure of hospital care quality`,
    },
  },

  media: [
    {
      id: 'cam-algorithm',
      type: 'diagram',
      filename: 'cam-algorithm.svg',
      title: 'Confusion Assessment Method Algorithm',
      description: 'Step-by-step CAM scoring flowchart',
    },
    {
      id: 'delirium-dementia-comparison',
      type: 'diagram',
      filename: 'delirium-vs-dementia-table.svg',
      title: 'Delirium vs Dementia Comparison',
      description: 'Side-by-side comparison of key differentiating features',
    },
  ],

  citations: [
    {
      id: 'inouye-delirium',
      type: 'article',
      title: 'Delirium in elderly people',
      authors: ['Inouye SK', 'Westendorp RG', 'Saczynski JS'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(13)60688-1',
    },
    {
      id: 'help-program',
      type: 'article',
      title: 'A Multicomponent Intervention to Prevent Delirium in Hospitalized Older Patients',
      authors: ['Inouye SK', 'Bogardus ST Jr', 'Charpentier PA', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'cam-validation',
      type: 'article',
      title: 'Clarifying Confusion: The Confusion Assessment Method',
      authors: ['Inouye SK', 'van Dyck CH', 'Alessi CA', 'et al.'],
      source: 'Annals of Internal Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cognitive-impairment-assessment', targetType: 'concept', relationship: 'related', label: 'Cognitive Assessment' },
    { targetId: 'concept-polypharmacy', targetType: 'concept', relationship: 'related', label: 'Polypharmacy' },
    { targetId: 'concept-falls-prevention', targetType: 'concept', relationship: 'related', label: 'Falls Prevention' },
    { targetId: 'topic-alzheimers-disease', targetType: 'topic', relationship: 'related', label: 'Alzheimer\'s Disease' },
  ],

  tags: {
    systems: ['neurological'],
    topics: ['geriatrics', 'neurology', 'hospital medicine', 'critical care'],
    keywords: ['delirium', 'dementia', 'confusion', 'CAM', 'altered mental status', 'encephalopathy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology', 'psychiatry', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default deliriumVsDementia;
