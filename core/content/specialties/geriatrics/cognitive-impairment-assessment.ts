/**
 * Cognitive Impairment Assessment - Comprehensive Educational Content
 *
 * Covers screening tools, diagnostic workup, and evaluation of cognitive
 * decline in older adults, including mild cognitive impairment and dementia.
 */

import { EducationalContent } from '../../types';

export const cognitiveImpairmentAssessment: EducationalContent = {
  id: 'concept-cognitive-impairment-assessment',
  type: 'concept',
  name: 'Cognitive Impairment Assessment',
  alternateNames: ['Dementia Screening', 'Memory Assessment', 'Cognitive Testing'],

  levels: {
    1: {
      level: 1,
      summary: 'Cognitive impairment means problems with memory, thinking, or reasoning that are more than normal aging.',
      explanation: `As we get older, it's normal to occasionally forget names or misplace keys. But when memory or thinking problems start to affect daily life, it may be a sign of something more serious.

**Normal Aging vs. Concerning Changes**

**Normal Aging:**
- Occasionally forgetting names or appointments
- Sometimes losing things
- Taking longer to learn new things
- Forgetting a word once in a while
- Making occasional errors with money or bills

**Concerning Changes:**
- Forgetting recent events or conversations
- Getting lost in familiar places
- Having trouble following directions
- Difficulty managing money or medications
- Personality changes or unusual behavior
- Asking the same questions repeatedly

**Why Is Assessment Important?**

Finding memory problems early is important because:
- Some causes can be treated and reversed
- Planning for the future is easier when started early
- Medications may help slow down some types of memory loss
- Safety issues can be addressed (like driving)
- Families can get support and education

**What Happens During an Assessment?**

When a doctor checks memory and thinking, they might:

**1. Talk with You and Family**
- Ask about memory concerns
- Find out when problems started
- Learn what daily life is like
- Review medications
- Ask about mood (depression can affect memory)

**2. Give Simple Tests**
- Remember a list of words
- Draw a clock showing a specific time
- Follow simple directions
- Answer questions about today's date and where you are
- Count backward or spell words backward

**3. Check for Other Causes**
- Blood tests (thyroid, vitamin deficiencies)
- Sometimes brain scans (CT or MRI)
- Test for infections or other conditions

**What Might They Find?**

- **No problem**: Normal age-related changes
- **Mild Cognitive Impairment (MCI)**: Memory problems more than normal, but still able to do daily activities
- **Dementia**: Significant memory and thinking problems that affect daily life

**If There's a Problem**

- Treatment depends on the cause
- Some causes can be fixed (vitamin deficiency, thyroid problems, medication effects)
- For Alzheimer's and other dementias, treatments can help manage symptoms
- Support and planning become very important`,
      keyTerms: [
        { term: 'cognitive', definition: 'Related to thinking, memory, and reasoning abilities', pronunciation: 'KOG-nih-tiv' },
        { term: 'dementia', definition: 'A condition where memory and thinking problems are severe enough to affect daily life', pronunciation: 'deh-MEN-sha' },
        { term: 'Mild Cognitive Impairment', definition: 'Memory problems greater than normal aging but not severe enough to be dementia', pronunciation: 'MCI' },
        { term: 'screening', definition: 'Simple tests to check if there might be a problem' },
      ],
      analogies: [
        'The brain is like a filing cabinet - normal aging might slow down finding files, but dementia is like files going missing or the cabinet becoming disorganized.',
        'Memory testing is like a vision test for your brain - it helps find problems early when they might be easier to address.',
        'Your brain has different types of memory, like different rooms in a house - testing checks each room to see which ones are affected.',
      ],
      examples: [
        'A grandmother who can\'t remember that she already ate lunch, so she eats again.',
        'A grandfather who gets lost driving to the grocery store he\'s been going to for 20 years.',
        'An older adult whose "memory problems" turned out to be a thyroid problem that was fixed with medication.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cognitive assessment involves standardized screening tools, comprehensive neuropsychological testing when indicated, and evaluation for reversible causes of cognitive decline.',
      explanation: `## Why Assess Cognition?

### Importance of Early Detection
- Identify reversible causes (10-15% of dementia symptoms have treatable causes)
- Enable early intervention when available
- Allow advance care planning while patient can participate
- Address safety concerns (driving, medication management, finances)
- Connect families with resources and support
- Improve quality of life through appropriate interventions

## Cognitive Domains

Understanding which areas of thinking are tested:

| Domain | What It Does | Examples |
|--------|--------------|----------|
| Memory | Store and recall information | Remembering appointments, recent events |
| Executive Function | Planning, problem-solving, judgment | Managing finances, making decisions |
| Language | Understanding and producing speech | Word-finding, following conversations |
| Visuospatial | Understanding space and visual information | Navigation, recognizing faces |
| Attention | Focusing and concentrating | Following instructions, avoiding distractions |

## Screening Tools

### Mini-Mental State Examination (MMSE)
- 30-point test
- Takes 5-10 minutes
- Tests orientation, memory, attention, language, visuospatial
- Score interpretation:
  - 24-30: Normal
  - 18-23: Mild impairment
  - <18: Moderate-severe impairment
- Limitations: Copyrighted (cost), education/language bias, ceiling effect

### Montreal Cognitive Assessment (MoCA)
- 30-point test
- Takes 10-15 minutes
- Better at detecting mild impairment than MMSE
- Tests executive function more thoroughly
- Score interpretation:
  - ≥26: Normal (add 1 point if ≤12 years education)
  - <26: May indicate impairment
- Free to use

### Mini-Cog
- 3-minute screen
- Two components:
  1. 3-word recall (0-3 points)
  2. Clock drawing (0 or 2 points)
- Score 0-2: Positive screen (need further evaluation)
- Score 3-5: Negative screen
- Good for primary care due to brevity

### Other Common Tests
- **SLUMS** (Saint Louis University Mental Status): 30 points, free
- **AD8**: 8-question informant interview
- **GPCOG**: Brief screen with patient and informant components

## When to Refer for Neuropsychological Testing

Formal testing (2-4 hours with psychologist) is indicated when:
- Screening suggests impairment but diagnosis unclear
- Differentiation between dementia types needed
- Baseline before treatment
- Assessing capacity for specific decisions
- Young-onset symptoms (<65)
- Atypical presentations

## Workup for Reversible Causes

### Essential Laboratory Tests
| Test | Condition Screened |
|------|-------------------|
| TSH | Hypothyroidism |
| Vitamin B12 | B12 deficiency |
| Complete Metabolic Panel | Electrolyte abnormalities, kidney/liver disease |
| Complete Blood Count | Anemia, infection |
| Consider: RPR/VDRL | Neurosyphilis (if risk factors) |

### Neuroimaging
- **CT or MRI**: Rule out structural causes
  - Stroke
  - Tumor
  - Normal pressure hydrocephalus
  - Subdural hematoma
- MRI preferred for detecting vascular changes, atrophy patterns

### Additional Testing (Selected Cases)
- EEG: If seizures suspected
- Lumbar puncture: If infection, inflammation, or certain biomarkers needed
- PET scan: For specific dementia type determination
- Genetic testing: Family history of early-onset dementia

## Red Flags Requiring Urgent Evaluation

- Rapid onset (days to weeks)
- Fluctuating level of consciousness
- New headaches
- Fever
- Focal neurological signs
- Recent head trauma
- Falls
- New medications

These suggest delirium or other acute causes, not dementia.

## After the Assessment

### If Mild Cognitive Impairment (MCI)
- Monitor every 6-12 months
- Address modifiable risk factors (BP, diabetes, hearing)
- Encourage cognitive and physical activity
- Discuss advance directives while capacity intact
- About 10-15% per year convert to dementia

### If Dementia Diagnosed
- Determine type (Alzheimer's, vascular, Lewy body, frontotemporal)
- Discuss prognosis and treatment options
- Address safety (driving, medications, finances)
- Caregiver education and support
- Advance care planning
- Community resources`,
      keyTerms: [
        { term: 'MoCA', definition: 'Montreal Cognitive Assessment; a 30-point test that is sensitive for detecting mild cognitive impairment' },
        { term: 'MMSE', definition: 'Mini-Mental State Examination; widely used 30-point cognitive screen' },
        { term: 'Mini-Cog', definition: 'A brief 3-minute screening tool combining 3-word recall and clock drawing' },
        { term: 'executive function', definition: 'Higher-level thinking skills including planning, judgment, and problem-solving' },
        { term: 'visuospatial', definition: 'The ability to understand and process visual and spatial information' },
        { term: 'neuropsychological testing', definition: 'Comprehensive cognitive testing performed by a psychologist, lasting several hours' },
      ],
      analogies: [
        'The MoCA is like a more sensitive smoke detector - it can catch problems earlier than the MMSE.',
        'Cognitive domains are like different instruments in an orchestra - testing evaluates how each one performs.',
      ],
    },
    3: {
      level: 3,
      summary: 'Systematic cognitive assessment requires selection of appropriate validated instruments based on clinical context, comprehensive workup for secondary causes, and integration with functional assessment and informant history.',
      explanation: `## Screening Tool Selection

### Characteristics of Ideal Screening Tool
- High sensitivity (minimize false negatives)
- Acceptable specificity
- Brief administration time
- Free or low cost
- Validated in target population
- Minimal education/language bias
- Tests multiple domains

### Comparative Performance

| Tool | Time | Sensitivity | Specificity | Best For |
|------|------|-------------|-------------|----------|
| MMSE | 7-10 min | 79-100% | 46-100% | Moderate-severe dementia |
| MoCA | 10-15 min | 80-100% | 50-76% | MCI, early dementia |
| Mini-Cog | 3 min | 76-99% | 89-93% | Quick primary care screen |
| SLUMS | 7 min | 92-100% | 81-98% | Education-fair alternative |
| AD8 | 3 min | 74-85% | 86% | Informant-based screen |

### Detailed Tool Analysis

**Montreal Cognitive Assessment (MoCA):**

*Domains Tested:*
- Visuospatial/Executive: Trail-making, cube copy, clock drawing
- Naming: 3 animals
- Memory: 5-word recall (delayed)
- Attention: Digit span, serial 7s, vigilance
- Language: Sentence repetition, fluency
- Abstraction: Similarities
- Orientation: Time and place

*Interpretation:*
- Score ≥26/30: Normal
- Score 18-25: Mild impairment
- Score 10-17: Moderate impairment
- Score <10: Severe impairment
- Add 1 point if ≤12 years education (max 30)

*Limitations:*
- Ceiling effect in highly educated
- Floor effect in severe dementia
- Some cultural/language bias
- Requires intact vision and motor function

**Clock Drawing Test:**

*Administration:*
"Draw a clock, put in all the numbers, and set the hands to 10 after 11"

*Scoring Systems:*
- Qualitative (pass/fail)
- Quantitative (multiple scoring systems, 0-10 or 0-6)

*What It Tests:*
- Visuospatial ability
- Executive function (planning)
- Semantic memory (concept of clock)
- Attention

*Error Types and Associations:*
| Error | Possible Implication |
|-------|---------------------|
| Stimulus-bound hands (hands at 10 and 11) | Executive dysfunction |
| Missing numbers | Visuospatial deficit |
| Numbers outside circle | Hemispatial neglect |
| Planning errors (crowded numbers) | Executive dysfunction |

## Comprehensive Evaluation Components

### History from Patient
- Chief complaint and timeline
- Specific cognitive symptoms
- Impact on daily activities
- Psychiatric symptoms (depression, anxiety)
- Medical history
- Medication review (including OTC, supplements)
- Substance use (alcohol critical)
- Sleep history
- Social history (education, occupation, living situation)

### Informant History (Critical)

**Why Informant History Matters:**
- Patients may lack insight (anosognosia)
- Patients may minimize or deny symptoms
- Informants observe functional changes
- Helps distinguish normal aging from pathology

**Informant Questionnaires:**
- AD8 (8 questions)
- IQCODE (26 or 16 items)
- FAQ (Functional Activities Questionnaire)

### Functional Assessment

**Instrumental Activities of Daily Living (IADLs):**
Higher-level functions; affected early
- Managing finances
- Medication management
- Shopping
- Food preparation
- Housekeeping
- Transportation
- Using telephone/technology

**Basic Activities of Daily Living (ADLs):**
Fundamental self-care; affected later
- Bathing
- Dressing
- Toileting
- Transferring
- Continence
- Feeding

### Neurological Examination

**Key Elements:**
- Mental status (including affect, insight)
- Cranial nerves
- Motor exam (rigidity, bradykinesia → LBD, parkinsonism)
- Gait (magnetic gait → NPH; shuffling → parkinsonism)
- Reflexes (frontal release signs)
- Sensory (peripheral neuropathy → B12, diabetes)

**Frontal Release Signs:**
- Grasp reflex
- Palmomental reflex
- Snout reflex
- Glabellar tap (persistent blinking)

## Differential Diagnosis

### Reversible/Treatable Causes (~10-15%)

| Category | Examples | How to Identify |
|----------|----------|-----------------|
| Metabolic | Hypothyroidism, B12 deficiency, hyponatremia | Laboratory tests |
| Infectious | Neurosyphilis, HIV, Lyme | Serologic testing, LP |
| Structural | NPH, SDH, tumor | Neuroimaging |
| Psychiatric | Depression (pseudodementia) | Clinical assessment |
| Toxic | Alcohol, medications | History, medication review |
| Sleep | Severe OSA | Sleep history, polysomnography |

### Normal Pressure Hydrocephalus (NPH)
**Classic Triad:**
1. Gait disturbance (magnetic gait) - usually first
2. Cognitive impairment
3. Urinary incontinence

**Diagnosis:**
- MRI showing ventriculomegaly out of proportion to atrophy
- High-volume lumbar puncture with gait assessment before/after

### Depression (Pseudodementia)

**Features Suggesting Depression:**
- Relatively rapid onset
- Patient emphasizes cognitive problems
- Poor effort on testing ("I don't know")
- History of depression
- Prominent mood symptoms
- Memory complaints worse than performance

**Features Suggesting Dementia:**
- Insidious onset
- Patient minimizes problems
- Makes effort, makes mistakes (near-miss answers)
- No psychiatric history
- Mood changes secondary to cognitive decline
- Memory performance worse than complaint

## Biomarkers and Advanced Testing

### CSF Biomarkers (Alzheimer's)
- Aβ42: Decreased (brain deposition)
- Total tau: Increased (neurodegeneration)
- Phospho-tau: Increased (specific to AD)
- Aβ42/40 ratio: More sensitive

### Amyloid PET Imaging
- Florbetapir, flutemetamol, florbetaben
- Visualizes amyloid plaques
- Indications: Atypical presentation, early-onset, clinical trial enrollment
- Positive scan doesn't confirm AD (amyloid present in normal aging)
- Negative scan largely rules out AD

### Tau PET
- Flortaucipir approved 2020
- Correlates with cognitive decline better than amyloid
- Research use expanding`,
      keyTerms: [
        { term: 'anosognosia', definition: 'Lack of awareness or insight into one\'s own cognitive deficits', pronunciation: 'a-NO-sog-NO-zhuh' },
        { term: 'pseudodementia', definition: 'Cognitive impairment secondary to psychiatric illness, especially depression' },
        { term: 'frontal release signs', definition: 'Primitive reflexes that reemerge with frontal lobe dysfunction' },
        { term: 'IADL', definition: 'Instrumental Activities of Daily Living; complex tasks like managing finances and medications' },
        { term: 'NPH', definition: 'Normal Pressure Hydrocephalus; potentially reversible cause with classic triad of gait, cognition, urinary symptoms' },
        { term: 'amyloid PET', definition: 'Imaging study that visualizes amyloid-beta plaques in the brain' },
      ],
      clinicalNotes: 'Always get informant history - patients with dementia often lack insight. The clock drawing test is quick and informative; include it routinely. Don\'t miss NPH - it\'s treatable! Test gait before and after high-volume LP. Depression and dementia commonly coexist; treat depression even if dementia present.',
    },
    4: {
      level: 4,
      summary: 'Advanced cognitive assessment integrates clinical phenotyping, biomarker interpretation, differential diagnosis among dementia subtypes, and assessment of specific functional capacities including driving and decision-making.',
      explanation: `## Clinical Phenotyping of Dementia Subtypes

### Alzheimer's Disease

**Typical (Amnestic) Presentation:**
- Insidious onset
- Episodic memory impairment (can't form new memories)
- Language difficulties (word-finding) develop
- Visuospatial deficits later
- Executive dysfunction
- Relatively preserved motor function until late

**Atypical Presentations (~10%):**
| Variant | Primary Deficit | Key Features |
|---------|-----------------|--------------|
| Posterior cortical atrophy | Visuospatial | Visual agnosia, Balint syndrome |
| Logopenic aphasia | Language | Word-finding pauses, phonologic errors |
| Frontal variant | Executive/behavior | Apathy, disinhibition |

**Biomarker Profile:**
- CSF: ↓Aβ42, ↑tau, ↑p-tau
- Amyloid PET: Positive
- MRI: Medial temporal atrophy (hippocampus)
- FDG-PET: Temporoparietal hypometabolism

### Vascular Cognitive Impairment

**Clinical Features:**
- Stepwise decline (may be gradual in subcortical type)
- Focal neurological signs
- Executive dysfunction prominent
- Memory less affected early (retrieval > encoding)
- Gait disturbance early
- Pseudobulbar affect possible

**Subtypes:**
- Multi-infarct dementia
- Strategic infarct dementia
- Subcortical ischemic (small vessel disease)
- Mixed (AD + vascular)

**Imaging:**
- MRI: White matter hyperintensities, lacunes, microbleeds
- Strategic locations: Thalamus, angular gyrus, PCA territory

### Dementia with Lewy Bodies

**Core Features (2 of 4 for probable DLB):**
1. Fluctuating cognition/alertness
2. Recurrent visual hallucinations (detailed, formed)
3. REM sleep behavior disorder
4. Parkinsonism

**Supportive Features:**
- Severe neuroleptic sensitivity
- Postural instability
- Repeated falls
- Autonomic dysfunction
- Depression

**Distinguishing from Parkinson's Disease Dementia:**
- DLB: Dementia within 1 year of motor symptoms
- PDD: Dementia >1 year after motor symptoms

**Biomarkers:**
- DaTscan: Reduced dopamine transporter uptake
- Polysomnography: REM without atonia
- MIBG cardiac scintigraphy: Reduced uptake

### Frontotemporal Dementia Syndromes

**Behavioral Variant (bvFTD):**
- Early behavioral/personality change
- Disinhibition, apathy, loss of empathy
- Hyperorality, dietary changes
- Executive dysfunction
- Relative memory preservation early
- Young onset typical (45-65)

**Semantic Variant (svPPA):**
- Loss of word meaning
- Can speak fluently but words lack meaning
- Progressive naming difficulty
- Surface dyslexia/dysgraphia
- Left > right temporal atrophy

**Nonfluent/Agrammatic Variant (nfvPPA):**
- Effortful, halting speech
- Agrammatism
- Speech sound errors
- Left inferior frontal atrophy

## Capacity Assessment

### Decision-Making Capacity

**Four Core Abilities (Appelbaum criteria):**
1. **Understanding**: Comprehends information
2. **Appreciation**: Applies information to own situation
3. **Reasoning**: Weighs options, consequences
4. **Expressing choice**: Can communicate decision

**Assessment Approach:**
- Decision-specific (capacity for one decision ≠ all decisions)
- Can fluctuate
- Can be enhanced with accommodations
- Documentation of specific reasoning

### Driving Assessment

**Red Flags for Unsafe Driving:**
- Getting lost in familiar areas
- Difficulty with turns or lane changes
- Near misses or accidents
- Family concerns
- Police reports

**Formal Evaluation:**
- Clinical Dementia Rating (CDR) ≥1: Consider evaluation
- Neuropsychological testing: Visuospatial, attention, processing speed
- Occupational therapy driving assessment
- On-road evaluation (gold standard)

**Recommendations by CDR:**
| CDR | Driving Recommendation |
|-----|------------------------|
| 0 | Can drive |
| 0.5 | Evaluate; may have restrictions |
| 1 | Strong recommendation to stop |
| ≥2 | Should not drive |

**Reporting Requirements:**
- Varies by state/jurisdiction
- Some require mandatory reporting
- Others permit voluntary reporting
- Document conversation with patient/family

### Financial Capacity

**Domains:**
- Basic monetary skills (counting change)
- Financial concepts (understanding statements)
- Cash transactions
- Bank statement management
- Bill payment
- Checkbook management
- Financial judgment

**Assessment:**
- Financial Capacity Instrument
- Direct observation
- Review of recent financial decisions
- Bank statements review (if available)

## Advanced Biomarker Interpretation

### ATN Framework for Alzheimer's Biomarkers

**A (Amyloid):**
- CSF Aβ42 or Aβ42/40 ratio
- Amyloid PET

**T (Tau):**
- CSF phosphorylated tau
- Tau PET

**N (Neurodegeneration):**
- CSF total tau
- FDG-PET (hypometabolism)
- MRI (atrophy)

**Classification:**
- A+T+N+: Alzheimer's disease
- A+T-N-: Alzheimer's pathologic change
- A-T+N+: Non-AD pathologic change
- A-T-N-: Normal biomarkers

### Blood-Based Biomarkers (Emerging)

**Available/Near-Term:**
- Plasma Aβ42/40 ratio
- Plasma p-tau181, p-tau217
- NfL (neurofilament light)

**Clinical Utility:**
- Screening for amyloid status
- May reduce need for PET/CSF
- p-tau217 showing promise for AD diagnosis

**Limitations:**
- Standardization ongoing
- Less validated than CSF
- Best for ruling out rather than confirming

### Genetic Testing

**Indications:**
- Early-onset dementia (<65)
- Strong family history (autosomal dominant pattern)
- Research participation

**Deterministic Genes (Autosomal Dominant AD):**
- APP (chromosome 21)
- PSEN1 (chromosome 14) - most common
- PSEN2 (chromosome 1)

**Risk Gene:**
- APOE ε4
- Heterozygous: 3-4x risk
- Homozygous: 12-15x risk
- Not diagnostic; not recommended for clinical diagnosis
- Role in clinical trials, personalized risk assessment

**Counseling Required:**
- Implications for family members
- Insurance/employment discrimination concerns
- No preventive treatment currently`,
      keyTerms: [
        { term: 'ATN framework', definition: 'Classification system for Alzheimer\'s biomarkers: Amyloid, Tau, Neurodegeneration' },
        { term: 'logopenic aphasia', definition: 'Atypical AD variant presenting with word-finding difficulty and phonologic errors' },
        { term: 'posterior cortical atrophy', definition: 'Atypical AD variant presenting with visuospatial deficits and visual agnosia' },
        { term: 'REM sleep behavior disorder', definition: 'Loss of muscle atonia during REM sleep; strong predictor of synucleinopathy' },
        { term: 'Appelbaum criteria', definition: 'Four-part framework for assessing decision-making capacity: understanding, appreciation, reasoning, choice' },
        { term: 'p-tau217', definition: 'Phosphorylated tau biomarker showing promise for blood-based Alzheimer\'s diagnosis' },
      ],
      clinicalNotes: 'DLB requires high clinical suspicion - ask about visual hallucinations and sleep behavior. NEVER give typical antipsychotics to suspected DLB. Driving is often the most contentious issue - get formal OT driving eval when in doubt. Document capacity assessments thoroughly; they may have legal implications.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cognitive assessment integrates precision diagnostics with emerging plasma biomarkers, digital cognitive assessments, and personalized risk prediction while addressing the complexities of early detection, disclosure, and pre-symptomatic testing.',
      explanation: `## Emerging Diagnostic Technologies

### Plasma Biomarkers

**Current State of Evidence:**

| Biomarker | Performance | Clinical Stage | Utility |
|-----------|-------------|----------------|---------|
| p-tau217 | AUC 0.93-0.98 vs AD | Near-term clinical | Best performer for AD diagnosis |
| p-tau181 | AUC 0.85-0.91 vs AD | FDA breakthrough | Good differentiation AD vs non-AD |
| Aβ42/40 | AUC 0.80-0.87 vs amyloid PET | Clinical trials | Screening for amyloid |
| NfL | Non-specific | Research | Neurodegeneration (all causes) |
| GFAP | AUC 0.85 for AD | Research | Astrocytic activation |

**Clinical Integration Pathways:**
1. Symptomatic patient → Plasma biomarker → If positive → Confirmatory PET/CSF → Diagnosis
2. Symptomatic patient → Plasma biomarker → If negative → Low probability AD → Other workup
3. Potential for primary care screening (future)

**Limitations:**
- Standardization across platforms ongoing
- Comorbidity effects (CKD, stroke)
- Cutoffs not universally established
- Not yet reimbursed in most settings

### Digital Cognitive Assessment

**Types:**
| Category | Examples | Advantages |
|----------|----------|------------|
| Self-administered tablet/app | BrainCheck, Cognigram, Cogstate | Home use, repeated measures |
| Clinician-administered digital | Automated MoCA, ADAS-Cog digital | Standardized administration |
| Passive monitoring | Smartphone sensors, typing patterns | Continuous, ecological |
| Gamified assessment | Sea Hero Quest | Engaging, research population |

**Research Findings:**
- Correlate with traditional tests
- May detect decline earlier
- Less practice effects
- Enable remote and frequent assessment
- Big data approaches possible

**Challenges:**
- Validation against clinical outcomes needed
- Digital divide in elderly
- Regulatory pathway unclear
- Data privacy concerns

### Artificial Intelligence Applications

**Current and Emerging Uses:**
- Automated MRI volumetrics (hippocampal volume)
- Retinal imaging analysis
- Speech and language analysis
- Gait analysis from video
- Multimodal risk prediction

**Performance:**
- AI analysis of speech: 82-93% accuracy for MCI
- Retinal biomarkers: Research stage
- Combined multimodal: Promising in research

## Pre-Symptomatic Detection and Disclosure

### Preclinical Alzheimer's Disease

**NIA-AA Research Framework:**
- Stage 1: Amyloid positive, no tau, no symptoms
- Stage 2: Amyloid and tau positive, no symptoms
- Stage 3: Amyloid and tau positive, subtle decline

**Prevalence of Preclinical AD:**
- Age 60-69: 10-20%
- Age 70-79: 20-30%
- Age 80+: 30-50%

**Clinical Implications:**
- Not all progress to dementia in lifetime
- No approved preventive treatments (yet)
- Trials for prevention ongoing (AHEAD, TRAILBLAZER-ALZ 3)

### Ethical Considerations in Early/Pre-Symptomatic Testing

**Arguments For:**
- Autonomy: Right to know
- Planning: Financial, legal, personal
- Risk reduction: Lifestyle modifications
- Research: Enable prevention trials
- Relief (if negative)

**Arguments Against:**
- No cure/effective prevention
- Psychological harm
- Insurance/employment discrimination
- Uncertain prognosis

**REVEAL Study Findings (APOE Disclosure):**
- No clinically significant distress at 12 months
- No difference in rates of depression/anxiety
- Many make lifestyle changes
- Results may not generalize to AD biomarkers

### Disclosure Frameworks

**Recommended Approach for Biomarker Disclosure:**
1. Pre-test counseling
2. Assess readiness and reasons for testing
3. Provide information about uncertainty
4. Offer results in person with support
5. Allow processing time
6. Provide follow-up resources
7. Consider genetic counseling referral

**Research vs. Clinical Disclosure:**
- Research: Typically no disclosure historically
- Changing: A4 study, DIAN disclosed to participants
- FDA guidance evolving for return of results

## Comprehensive Geriatric Cognitive Assessment Integration

### Incorporating Into Comprehensive Geriatric Assessment (CGA)

**Assessment Domains:**
| Domain | Tools | Integration with Cognition |
|--------|-------|---------------------------|
| Medical | History, exam, labs | Cognitive symptoms may indicate medical conditions |
| Functional | ADL/IADL | Cognitive impairment affects function |
| Psychological | GDS, GAD-7 | Depression/anxiety affect cognition |
| Social | Support assessment | Caregiver capacity affects management |
| Nutritional | MNA, albumin | Malnutrition affects cognition |
| Sensory | Vision/hearing | Sensory loss mimics/worsens impairment |

### Risk Prediction Models

**CAIDE Dementia Risk Score:**
- Age, education, sex
- Blood pressure
- BMI
- Total cholesterol
- Physical activity
- APOE (in extended version)
- AUC ~0.75 for 20-year dementia risk

**Cardiovascular Risk Factor, Aging, and Dementia (CAIDE):**
- Modifiable risk factors account for ~40% of dementia
- Prevention potential even late in life

### Modifiable Risk Factors (Lancet Commission 2020)

**Early Life (Education):**
- Low education: PAF 7%
- Intervention: Education access

**Midlife:**
- Hearing loss: PAF 8%
- TBI: PAF 3%
- Hypertension: PAF 2%
- Alcohol excess: PAF 1%
- Obesity: PAF 1%

**Late Life:**
- Smoking: PAF 5%
- Depression: PAF 4%
- Social isolation: PAF 4%
- Physical inactivity: PAF 2%
- Air pollution: PAF 2%
- Diabetes: PAF 1%

## Clinical Implementation

### Primary Care Integration

**Annual Wellness Visit:**
- Detection of cognitive impairment required
- Tools: Mini-Cog, GP-Cog, or similar
- Abnormal screen → Diagnostic workup

**Algorithm:**
\`\`\`
Cognitive concern (patient, family, screening)
        ↓
    Brief screen (Mini-Cog, MoCA)
        ↓
    ┌───┴───┐
Normal      Abnormal
   ↓           ↓
Monitor    Comprehensive evaluation:
annually   - History (patient + informant)
           - Physical/neuro exam
           - Labs (TSH, B12, CBC, CMP)
           - Neuroimaging (MRI preferred)
           - Consider: neuropsych testing
                ↓
         Diagnosis established
                ↓
    ┌─────┬─────┼─────┬─────┐
   MCI    AD   VaD   DLB   FTD
    ↓      ↓     ↓     ↓     ↓
 Specific management by diagnosis
\`\`\`

### Quality Metrics

**CMS Quality Measures:**
- Dementia: Cognitive assessment annually
- Dementia: Functional status assessment
- Dementia: Caregiver education and support
- Care planning: Including advance care planning

### Research and Trial Readiness

**For Disease-Modifying Therapy Trials:**
- Biomarker confirmation of AD pathology
- Appropriate disease stage (typically MCI or mild AD)
- Capacity for informed consent
- Reliable study partner
- ARIA risk assessment (APOE status)

**Implications of Lecanemab/Donanemab Approval:**
- Biomarker confirmation required before treatment
- MRI monitoring for ARIA
- APOE genotyping for risk stratification
- Infrastructure for infusions and monitoring
- Cost and access considerations`,
      keyTerms: [
        { term: 'preclinical AD', definition: 'Stage of Alzheimer\'s with pathology (amyloid/tau) but no symptoms; may or may not progress to clinical disease' },
        { term: 'PAF', definition: 'Population Attributable Fraction; proportion of disease cases that could be prevented by eliminating a risk factor' },
        { term: 'CAIDE score', definition: 'Cardiovascular Risk Factors, Aging, and Dementia score; predicts 20-year dementia risk from modifiable factors' },
        { term: 'ARIA', definition: 'Amyloid-Related Imaging Abnormalities; side effect of amyloid-targeting therapies (edema, microhemorrhages)' },
        { term: 'digital phenotyping', definition: 'Using passive smartphone/wearable data to infer cognitive and behavioral status' },
        { term: 'REVEAL study', definition: 'Landmark study showing psychological safety of APOE disclosure with appropriate counseling' },
      ],
      clinicalNotes: `Key practice considerations for cognitive assessment mastery:

1. **Plasma biomarkers are coming**: p-tau217 and others will transform diagnosis; stay informed on implementation
2. **Prevention is real**: 40% of dementia is attributable to modifiable factors; counsel patients accordingly
3. **Early detection has value** even without cure: planning, safety, research enrollment, caregiver support
4. **Capacity is decision-specific**: A patient may have capacity for some decisions and not others
5. **Biomarker disclosure requires counseling**: Don't order tests you're not prepared to discuss
6. **Screen systematically**: Annual Wellness Visit is an opportunity; use validated tools
7. **Document thoroughly**: Cognitive and capacity assessments have legal implications`,
    },
  },

  media: [
    {
      id: 'moca-sample',
      type: 'image',
      filename: 'moca-sample.png',
      title: 'Sample MoCA Test',
      description: 'Example of Montreal Cognitive Assessment with scoring instructions',
    },
    {
      id: 'dementia-subtypes-imaging',
      type: 'diagram',
      filename: 'dementia-mri-patterns.svg',
      title: 'MRI Patterns in Dementia Subtypes',
      description: 'Characteristic atrophy and imaging findings in AD, DLB, FTD, and VaD',
    },
  ],

  citations: [
    {
      id: 'moca-validation',
      type: 'article',
      title: 'The Montreal Cognitive Assessment, MoCA: A Brief Screening Tool For Mild Cognitive Impairment',
      authors: ['Nasreddine ZS', 'Phillips NA', 'Bédirian V', 'et al.'],
      source: 'Journal of the American Geriatrics Society',
    },
    {
      id: 'nia-aa-criteria',
      type: 'article',
      title: 'NIA-AA Research Framework: Toward a biological definition of Alzheimer\'s disease',
      authors: ['Jack CR Jr', 'Bennett DA', 'Blennow K', 'et al.'],
      source: 'Alzheimer\'s & Dementia',
    },
    {
      id: 'lancet-dementia-prevention',
      type: 'article',
      title: 'Dementia prevention, intervention, and care: 2020 report of the Lancet Commission',
      authors: ['Livingston G', 'Huntley J', 'Sommerlad A', 'et al.'],
      source: 'Lancet',
    },
  ],

  crossReferences: [
    { targetId: 'concept-delirium-dementia', targetType: 'concept', relationship: 'related', label: 'Delirium vs Dementia' },
    { targetId: 'concept-polypharmacy', targetType: 'concept', relationship: 'related', label: 'Polypharmacy' },
    { targetId: 'concept-caregiver-support', targetType: 'concept', relationship: 'related', label: 'Caregiver Support' },
    { targetId: 'topic-alzheimers-disease', targetType: 'topic', relationship: 'related', label: 'Alzheimer\'s Disease' },
  ],

  tags: {
    systems: ['neurological'],
    topics: ['geriatrics', 'neurology', 'neuropsychology', 'screening'],
    keywords: ['dementia', 'cognitive impairment', 'MoCA', 'MMSE', 'Alzheimer\'s', 'memory loss'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology', 'psychiatry', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cognitiveImpairmentAssessment;
