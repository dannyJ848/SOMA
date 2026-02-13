/**
 * Geriatric Syndromes - Comprehensive Educational Content
 *
 * Covers the major geriatric syndromes including delirium, incontinence,
 * pressure injuries, functional decline, and the geriatric giants.
 */

import { EducationalContent } from '../../types';

export const geriatricSyndromes: EducationalContent = {
  id: 'concept-geriatric-syndromes',
  type: 'concept',
  name: 'Geriatric Syndromes',
  alternateNames: ['Geriatric Giants', 'Common Conditions in Elderly', 'Multifactorial Geriatric Conditions'],

  levels: {
    1: {
      level: 1,
      summary: 'Geriatric syndromes are common health problems in older adults that do not fit into one disease category and often have multiple causes.',
      explanation: `As people get older, they may experience certain health problems that are very common in the elderly. Doctors call these "geriatric syndromes." These conditions are different from specific diseases because they usually have many causes working together.

**The Main Geriatric Syndromes**

**1. Falls**
- When older adults accidentally go to the ground
- Very common - about 1 in 3 adults over 65 falls each year
- Can cause serious injuries like broken hips
- Usually caused by many factors: weak muscles, poor vision, medications

**2. Confusion (Delirium)**
- Sudden change in thinking and attention
- Person may seem "out of it" or act differently
- Often caused by infections, medications, or hospital stays
- Different from dementia - delirium comes on suddenly

**3. Urinary Incontinence**
- Trouble controlling the bladder
- Leaking urine accidentally
- Very common but often not discussed
- Many treatments can help

**4. Pressure Injuries (Bedsores)**
- Skin damage from staying in one position too long
- Usually on bony areas like heels, hips, or tailbone
- Can be prevented by moving and changing positions
- Range from red spots to deep wounds

**5. Weight Loss and Poor Nutrition**
- Losing weight without trying
- Not eating enough
- Can be caused by depression, dental problems, medications
- Leads to weakness and other problems

**6. Memory Problems**
- Some forgetfulness is normal with aging
- Serious memory problems (dementia) are not normal
- Can affect daily life and safety
- Many causes, some treatable

**Why Do These Happen?**

These syndromes usually have multiple causes:
- Normal aging changes
- Multiple diseases working together
- Medications and their side effects
- Changes in the environment (like hospital stays)
- Social factors (living alone, isolation)

**Why Are They Important?**

Geriatric syndromes:
- Reduce quality of life
- Make people need more help with daily activities
- Increase the chance of going to the hospital
- Can lead to loss of independence
- Are often preventable or treatable

**What Can Be Done?**

**For Families:**
- Watch for changes in your loved one
- Help them stay active
- Make sure they eat well
- Keep their home safe
- Communicate with their doctors

**For Doctors:**
- Check for all these syndromes regularly
- Review medications
- Look for underlying causes
- Create a comprehensive care plan
- Work with the family`,
      keyTerms: [
        { term: 'geriatric syndrome', definition: 'A health condition common in older adults that has many different causes working together' },
        { term: 'delirium', definition: 'Sudden confusion or change in mental state that comes on quickly', pronunciation: 'deh-LEER-ee-um' },
        { term: 'incontinence', definition: 'Loss of bladder or bowel control', pronunciation: 'in-CON-tin-ence' },
        { term: 'pressure injury', definition: 'Damage to skin and tissue from staying in one position too long; also called bedsores' },
      ],
      analogies: [
        'Geriatric syndromes are like a perfect storm - many small problems come together to cause a big problem.',
        'An older person is like a house with wear and tear in many systems - fixing one thing may not be enough if multiple systems need attention.',
        'These syndromes are like the "check engine" light - they signal that something needs attention.',
      ],
      examples: [
        'A grandmother who fell because of weak muscles, poor lighting, and a medication that made her dizzy - many causes, one fall.',
        'A grandfather who became confused in the hospital because of a urinary infection, new medications, and being in an unfamiliar place.',
        'An older woman who lost weight because she had trouble chewing, felt depressed, and had medications that reduced her appetite.',
      ],
    },
    2: {
      level: 2,
      summary: 'Geriatric syndromes are multifactorial conditions in older adults that share common risk factors and result from accumulated impairments across multiple systems, requiring comprehensive assessment and multi-pronged interventions.',
      explanation: `## What Are Geriatric Syndromes?

### Definition
Geriatric syndromes are common conditions in older adults that:
- Don't fit traditional disease categories
- Have multiple contributing factors
- Share common risk factors
- Indicate vulnerability and decreased reserve

### The Classic "Geriatric Giants" (Originally by Bernard Isaacs)
1. **Immobility**
2. **Instability** (falls)
3. **Incontinence**
4. **Intellectual impairment** (delirium, dementia)

### Expanded Modern List
- Falls
- Delirium
- Dementia
- Urinary incontinence
- Fecal incontinence
- Pressure injuries
- Functional decline
- Malnutrition/weight loss
- Sleep disturbances
- Polypharmacy effects
- Sensory impairment

## Major Geriatric Syndromes

### Delirium

**What is it?**
Acute confusional state with:
- Sudden onset (hours to days)
- Fluctuating course
- Inattention
- Altered consciousness level
- Disorganized thinking

**Types:**
| Type | Presentation |
|------|--------------|
| Hyperactive | Agitated, restless, pulling at lines |
| Hypoactive | Quiet, withdrawn, sleepy (often missed) |
| Mixed | Alternates between above |

**Common Causes (Think "DELIRIUM"):**
- **D**rugs (anticholinergics, opioids, sedatives)
- **E**lectrolyte abnormalities
- **L**ack of drugs (withdrawal)
- **I**nfection (UTI, pneumonia most common)
- **R**educed sensory input (vision, hearing aids)
- **I**ntracranial (stroke, bleeding)
- **U**rinary retention/fecal impaction
- **M**yocardial (heart attack, heart failure)

**Prevention is Key:**
- Orientation cues (clock, calendar, familiar items)
- Early mobilization
- Sleep hygiene
- Hydration and nutrition
- Glasses and hearing aids
- Minimize unnecessary medications

### Urinary Incontinence

**Types:**

| Type | Description | Causes |
|------|-------------|--------|
| Stress | Leaks with cough, laugh, exercise | Weak pelvic floor |
| Urge | Sudden strong urge, can't make it in time | Overactive bladder |
| Overflow | Frequent small leaks, incomplete emptying | Obstruction, weak bladder |
| Functional | Physical or cognitive barriers | Mobility, dementia |
| Mixed | Combination of above | Multiple causes |

**Reversible Causes (Think "DIAPPERS"):**
- Delirium
- Infection (UTI)
- Atrophic vaginitis
- Pharmaceuticals
- Psychological (depression)
- Excess fluid/diuretics
- Restricted mobility
- Stool impaction

**Treatment:**
- Treat reversible causes first
- Behavioral: Timed voiding, bladder training, pelvic floor exercises
- Medications: Vary by type
- Devices: Pessary, catheter (last resort)
- Surgery: For appropriate candidates

### Pressure Injuries (Pressure Ulcers)

**Staging:**

| Stage | Description |
|-------|-------------|
| Stage 1 | Intact skin, non-blanchable redness |
| Stage 2 | Partial thickness loss (blister, shallow crater) |
| Stage 3 | Full thickness loss, fat visible |
| Stage 4 | Full thickness, bone/tendon exposed |
| Unstageable | Covered by slough/eschar |
| Deep Tissue | Purple discoloration, intact skin |

**Risk Factors (Braden Scale Components):**
- Sensory perception
- Moisture exposure
- Activity level
- Mobility
- Nutrition
- Friction/shear

**Prevention:**
- Reposition every 2 hours (bed) or hourly (chair)
- Pressure-redistributing surfaces
- Keep skin dry
- Optimize nutrition
- Lift (don't drag) when repositioning
- Regular skin inspection

### Functional Decline

**Definition:**
Loss of ability to perform activities needed for daily living.

**Types of Activities:**
| ADLs (Basic) | IADLs (Instrumental) |
|--------------|---------------------|
| Bathing | Managing finances |
| Dressing | Medication management |
| Toileting | Transportation |
| Transferring | Shopping |
| Continence | Housekeeping |
| Feeding | Telephone use |

**Causes:**
- Acute illness (hospitalization)
- Deconditioning
- Pain
- Depression
- Medications
- Progressive diseases

**Prevention:**
- Early mobilization in hospital
- Physical and occupational therapy
- Treat underlying causes
- Adaptive equipment
- Home modifications

## Shared Risk Factors

| Risk Factor | Falls | Delirium | Incontinence | Functional Decline |
|-------------|-------|----------|--------------|-------------------|
| Advanced age | + | + | + | + |
| Cognitive impairment | + | + | + | + |
| Medications | + | + | + | + |
| Sensory impairment | + | + | - | + |
| Functional limitation | + | + | + | + |
| Comorbidities | + | + | + | + |

## Comprehensive Geriatric Assessment (CGA)

**Domains:**
1. Medical: Comorbidities, medications, nutrition
2. Functional: ADLs, IADLs, mobility
3. Psychological: Cognition, mood
4. Social: Support, living situation, finances

**Why It Matters:**
- Identifies hidden problems
- Predicts outcomes better than single measures
- Guides comprehensive intervention
- Improves survival and function`,
      keyTerms: [
        { term: 'geriatric giants', definition: 'Original term for major geriatric syndromes: immobility, instability, incontinence, intellectual impairment' },
        { term: 'ADLs', definition: 'Activities of Daily Living: basic self-care tasks (bathing, dressing, eating, toileting, transferring, continence)' },
        { term: 'IADLs', definition: 'Instrumental Activities of Daily Living: tasks needed for independent living (finances, medications, shopping, transportation)' },
        { term: 'Braden Scale', definition: 'Risk assessment tool for pressure injuries based on 6 factors' },
        { term: 'hypoactive delirium', definition: 'Quiet, withdrawn presentation of delirium; often missed because patient is not agitated' },
        { term: 'Comprehensive Geriatric Assessment', definition: 'Systematic evaluation of medical, functional, psychological, and social domains' },
      ],
      analogies: [
        'Geriatric syndromes are like a multi-system failure - problems in one area cascade to affect others.',
        'CGA is like a thorough home inspection - you need to check all systems to understand the overall condition.',
        'Treating one syndrome without addressing others is like fixing a leak while ignoring a cracked foundation.',
      ],
    },
    3: {
      level: 3,
      summary: 'Geriatric syndromes represent the clinical expression of accumulated deficits across multiple physiological systems, requiring systematic assessment with validated tools and evidence-based multicomponent interventions.',
      explanation: `## Pathophysiology of Geriatric Syndromes

### Shared Pathological Framework

**Concept of Vulnerability:**
- Geriatric syndromes arise from accumulated subclinical impairments
- Multiple systems affected: muscular, sensory, neurological, cardiovascular
- No single system failure sufficient alone
- Threshold effect: Clinical syndrome manifests when cumulative burden exceeds reserve

**Common Underlying Mechanisms:**
| Mechanism | Contributing Syndromes |
|-----------|------------------------|
| Sarcopenia | Falls, functional decline, pressure injuries |
| Neurodegeneration | Delirium, dementia, falls |
| Vascular dysfunction | Delirium, falls, incontinence |
| Chronic inflammation | All syndromes |
| Sensory decline | Falls, delirium, functional decline |

### Delirium: Pathophysiology

**Neurotransmitter Hypothesis:**
- Acetylcholine deficiency (anticholinergics worsen)
- Dopamine excess (dopamine blockers help)
- Serotonin, GABA, glutamate dysregulation

**Neuroinflammatory Model:**
- Systemic inflammation → Blood-brain barrier disruption
- Cytokine entry → Microglial activation
- Neuroinflammation → Synaptic dysfunction
- Explains delirium with peripheral infection

**Stress Response:**
- HPA axis activation
- Elevated cortisol → Hippocampal dysfunction
- Disrupted circadian rhythms

**Biomarkers Under Investigation:**
- S100B, NSE (neuronal injury)
- Inflammatory markers (CRP, IL-6, TNF-α)
- Cortisol levels
- Anticholinergic burden scales

### Pressure Injury: Pathophysiology

**Tissue Damage Cascade:**
1. Pressure exceeds capillary closing pressure (~32 mmHg)
2. Ischemia and hypoxia develop
3. Metabolic waste accumulation
4. Tissue necrosis begins (can occur within 1-2 hours)
5. Reperfusion injury when pressure released

**Contributing Factors:**
| Factor | Mechanism |
|--------|-----------|
| Shear | Stretches blood vessels, causing microthrombi |
| Friction | Damages epidermis |
| Moisture | Macerates skin, increases friction |
| Temperature | Elevated skin temp increases oxygen demand |

**Microclimate:**
- Interface between skin and support surface
- Heat and humidity affect tissue tolerance
- Managing microclimate reduces risk

## Assessment Tools

### Delirium Assessment

**Confusion Assessment Method (CAM):**
Requires features 1 AND 2 AND (3 OR 4):
1. Acute onset and fluctuating course
2. Inattention
3. Disorganized thinking
4. Altered level of consciousness

Sensitivity: 94-100%, Specificity: 90-95%

**4AT:**
- 4 items, <2 minutes
- No training required
- Scores: 0 (delirium unlikely), 1-3 (possible), ≥4 (possible delirium)

**Delirium Severity Measures:**
- CAM-S (severity)
- Memorial Delirium Assessment Scale
- Delirium Rating Scale-Revised-98

### Incontinence Assessment

**Evaluation Components:**
1. History: Type of incontinence, frequency, severity, impact
2. Voiding diary (3-7 days)
3. Physical exam: Abdominal, rectal, pelvic
4. Post-void residual (bladder scan)
5. Urinalysis

**Red Flags Requiring Specialist Referral:**
- Hematuria
- Recurrent UTIs
- Pelvic organ prolapse
- Previous pelvic surgery/radiation
- Uncertain diagnosis
- Failed conservative treatment

### Functional Assessment Tools

| Tool | What It Measures | Scoring |
|------|------------------|---------|
| Katz ADL | Basic ADLs | 0-6 (6 = independent) |
| Lawton IADL | Instrumental ADLs | 0-8 (8 = independent) |
| Barthel Index | ADLs detailed | 0-100 |
| FIM | Comprehensive function | 18-126 |
| Gait speed | Physical function | m/s (normal >1.0) |
| SPPB | Physical performance | 0-12 |

### Pressure Injury Risk

**Braden Scale:**
| Component | Score Range | Low Risk |
|-----------|-------------|----------|
| Sensory perception | 1-4 | 4 |
| Moisture | 1-4 | 4 |
| Activity | 1-4 | 4 |
| Mobility | 1-4 | 4 |
| Nutrition | 1-4 | 4 |
| Friction/shear | 1-3 | 3 |

Total: 6-23; <18 indicates risk; <12 high risk

## Evidence-Based Interventions

### Hospital Elder Life Program (HELP)

**Targeted Interventions:**
| Risk Factor | Intervention |
|-------------|--------------|
| Cognitive impairment | Orientation, cognitive activities |
| Sleep deprivation | Sleep protocol, non-pharm sleep aids |
| Immobility | Early mobilization, exercise |
| Dehydration | Hydration assistance |
| Vision impairment | Visual aids, large print |
| Hearing impairment | Hearing aids, communication |

**Evidence:**
- 40% reduction in delirium incidence
- Reduced functional decline
- Cost-effective (saves $6,000+ per patient)

### Multicomponent Fall Prevention

**Cochrane Evidence:**
- Exercise: Reduces falls by 23%
- Multifactorial assessment and intervention: Mixed evidence
- Home safety modification (high-risk): Reduces falls

**Program Components:**
1. Strength and balance exercise
2. Medication review
3. Vision assessment
4. Home hazard modification
5. Orthostatic hypotension management
6. Footwear advice

### Incontinence Management

**Conservative First-Line:**

*Behavioral:*
- Bladder training (urge)
- Prompted voiding (functional/cognitive)
- Pelvic floor muscle training (stress)
- Lifestyle: Fluid management, caffeine reduction

*Medications (if behavioral insufficient):*
| Type | Drug Classes | Considerations |
|------|--------------|----------------|
| Urge | Antimuscarinics, β3-agonists | Anticholinergic effects |
| Stress | Duloxetine | Limited efficacy |
| Overflow | α-blockers (men), catheter | Address obstruction |

### Pressure Injury Prevention Bundle

**AHRQ Recommendations:**
1. Risk assessment on admission and routinely
2. Structured skin assessment
3. Documentation and communication
4. Repositioning (every 2 hrs bed, 1 hr chair)
5. Nutrition optimization
6. Moisture management
7. Support surfaces (foam mattresses minimum)

## Cascade Effects and Interactions

### Delirium → Long-Term Consequences

**Cognitive:**
- Accelerated cognitive decline
- Increased dementia risk
- Persistent cognitive impairment (25-40%)

**Functional:**
- Greater functional decline during hospitalization
- Slower recovery
- Higher nursing home placement

**Mortality:**
- 2x higher 1-year mortality
- Each day of delirium increases mortality risk

### Falls → Cascade

\`\`\`
Fall
  ↓
Fear of Falling
  ↓
Activity Restriction
  ↓
Deconditioning
  ↓
Increased Fall Risk
  ↓
More Falls
\`\`\`

### Syndromes Begetting Syndromes

- Delirium → Falls → Hip fracture → Immobility → Pressure injury
- Incontinence → Skin moisture → Pressure injury risk
- Functional decline → Immobility → Falls, Pressure injuries, Delirium`,
      keyTerms: [
        { term: 'CAM', definition: 'Confusion Assessment Method; validated tool for delirium detection with high sensitivity and specificity' },
        { term: '4AT', definition: 'Rapid 4-item delirium screening tool requiring no special training' },
        { term: 'HELP', definition: 'Hospital Elder Life Program; evidence-based multicomponent delirium prevention program' },
        { term: 'anticholinergic burden', definition: 'Cumulative effect of medications with anticholinergic properties; increases delirium and cognitive impairment risk' },
        { term: 'cascade iatrogeny', definition: 'Chain of complications where treatment of one problem leads to another problem' },
        { term: 'post-void residual', definition: 'Amount of urine remaining in bladder after voiding; elevated suggests overflow incontinence' },
      ],
      clinicalNotes: 'Hypoactive delirium is frequently missed - maintain high suspicion in any hospitalized elder with new "depression" or lethargy. The 4AT is quick and doesn\'t require training. HELP program components are simple and can be implemented without dedicated unit. Always check medications when evaluating any geriatric syndrome.',
    },
    4: {
      level: 4,
      summary: 'Advanced geriatric syndrome management integrates precision phenotyping, biomarker-guided interventions, pharmacological considerations for the complex older adult, and system-level approaches to reduce iatrogenic harm.',
      explanation: `## Advanced Delirium Management

### Prediction Models

**PRE-DELIRIC Model (ICU):**
- Age, APACHE-II, admission category, coma, infection, metabolic acidosis, morphine use, sedation, urea, urgent admission
- AUC 0.87 for ICU delirium prediction

**AWOL Score (Medical/Surgical):**
- Age ≥80, inability to spell WORLD backwards, disorientation, illness severity
- Simple, validated

### Biomarker-Guided Approaches

**Current Research:**
| Biomarker | Association | Potential Use |
|-----------|-------------|---------------|
| Anticholinergic Activity (SAA) | Higher = ↑ delirium risk | Medication selection |
| Cortisol | Elevated in delirium | Stress response marker |
| S100B | Blood-brain barrier disruption | Prognosis, severity |
| IL-6, IL-8 | Neuroinflammation | Risk stratification |
| Neopterin | Immune activation | Prognosis |

### Pharmacological Management

**When to Treat with Medications:**
- Severe agitation threatening safety
- Inability to complete essential medical care
- Distress not manageable with non-pharmacological approaches

**First-Line Agents:**
| Agent | Dose | Considerations |
|-------|------|----------------|
| Haloperidol | 0.25-0.5 mg PO/IM | QTc monitoring; avoid in Parkinson's/LBD |
| Risperidone | 0.25-0.5 mg PO | Lower EPS than haloperidol |
| Quetiapine | 12.5-25 mg PO | Preferred in Parkinson's/LBD |
| Olanzapine | 2.5-5 mg PO/IM | Anticholinergic effects |

**Agents to Avoid:**
- Benzodiazepines (except alcohol/benzo withdrawal)
- Anticholinergics (diphenhydramine, promethazine)

**Dexmedetomidine:**
- α2-agonist, ICU sedation
- May reduce delirium duration vs. other sedatives
- Role expanding in prevention and treatment

### Post-Delirium Care

**Cognitive Recovery Monitoring:**
- Serial cognitive assessments
- Many have persistent deficits (PICS - Post-Intensive Care Syndrome)
- Referral for cognitive rehabilitation if persistent

**Communication:**
- Discuss delirium with patient and family
- Document future delirium risk
- Plan for prevention in future hospitalizations

## Complex Incontinence Management

### Advanced Urodynamic Evaluation

**Indications:**
- Failed empiric treatment
- Neurological conditions affecting bladder
- Prior incontinence surgery
- Mixed symptoms, unclear diagnosis
- Before surgical intervention

**Components:**
- Uroflowmetry
- Cystometry (filling pressure, capacity, compliance)
- Voiding pressure study
- Urethral pressure profile
- Electromyography

### Medication Optimization

**Antimuscarinics:**
| Agent | Cognitive Safety | Other Notes |
|-------|------------------|-------------|
| Oxybutynin | Poor (crosses BBB) | Avoid in elderly |
| Tolterodine | Moderate | Consider ER formulation |
| Solifenacin | Moderate-Good | Less cognitive effect |
| Darifenacin | Better (M3 selective) | Consider in cognitive risk |
| Fesoterodine | Moderate | Active metabolite |
| Trospium | Better (doesn't cross BBB) | BID dosing, renal adjustment |

**β3-Agonists (Mirabegron, Vibegron):**
- Different mechanism (relaxes detrusor)
- No anticholinergic effects
- HTN precaution (minimal with vibegron)
- Can combine with antimuscarinic

### Neuromodulation

**Percutaneous Tibial Nerve Stimulation (PTNS):**
- Non-invasive neuromodulation
- 12 weekly 30-minute sessions
- Efficacy comparable to antimuscarinics
- No systemic side effects

**Sacral Neuromodulation:**
- Implanted device
- For refractory urge incontinence
- 50-70% improvement rate
- Requires surgery, staged procedure

### Surgical Options

**For Stress Incontinence:**
- Mid-urethral slings (TVT, TOT)
- Bulking agents
- Colposuspension

**For Overflow/Obstruction:**
- TURP (benign prostatic hypertrophy)
- UroLift, Rezum (newer BPH procedures)

## Advanced Pressure Injury Management

### Wound Assessment

**TIME Framework:**
- **T**issue: Debride non-viable tissue
- **I**nfection/Inflammation: Manage bioburden
- **M**oisture: Balance wound moisture
- **E**dge: Support epithelialization

**Biofilm Recognition:**
- Present in 60-90% of chronic wounds
- Impedes healing
- Requires debridement + antimicrobial approach

### Advanced Wound Therapies

| Therapy | Indication | Mechanism |
|---------|------------|-----------|
| NPWT (VAC) | Stage 3-4, post-surgical | Removes fluid, promotes granulation |
| Bioengineered skin | Non-healing wounds | Growth factors, matrix |
| Hyperbaric oxygen | Refractory wounds | ↑ Oxygen delivery, angiogenesis |
| Ultrasound | Non-healing wounds | Stimulates healing |
| Electrical stimulation | Non-healing wounds | Stimulates healing |

### Nutritional Support

**Assessment:**
- Prealbumin (half-life 2-3 days)
- Weight trends
- Intake monitoring

**Interventions:**
- Protein: 1.25-1.5 g/kg/day for healing
- Calories: 30-35 kcal/kg/day
- Micronutrients: Zinc, Vitamin C, Vitamin A
- Consider arginine and glutamine supplementation (limited evidence)

## Systems Approaches

### Reducing Hospital-Acquired Geriatric Syndromes

**NICHE (Nurses Improving Care for Healthsystem Elders):**
- Nurse-driven model
- Geriatric resource nurses
- Evidence-based protocols
- Environmental modifications

**ACE (Acute Care for Elders) Units:**
- Prepared environment (clocks, calendars, reduced noise)
- Patient-centered care
- Medical review emphasizing function
- Early rehabilitation
- Early discharge planning

**Outcomes:**
- Reduced functional decline
- Lower delirium rates
- Shorter length of stay
- Lower costs

### Electronic Health Record Integration

**Clinical Decision Support:**
- Automated delirium risk calculation
- Medication alerts for high-risk drugs
- Prompts for prevention protocols
- Order sets for geriatric syndromes

**Dashboards:**
- Unit-level falls rates
- Pressure injury incidence
- CAM screening compliance
- Hospital-acquired condition tracking

### Quality Metrics

**Hospital-Acquired Conditions (CMS):**
- Stage 3/4 pressure injuries
- Falls with injury
- Catheter-associated UTI

**Process Measures:**
- Delirium screening rates
- Pressure injury risk assessment
- Fall risk assessment
- Mobility documentation

## Frailty and Geriatric Syndromes

### Bidirectional Relationship

\`\`\`
Frailty ←→ Geriatric Syndromes
   ↓              ↓
Hospitalization
   ↓
More Syndromes
   ↓
Worse Frailty
\`\`\`

### Frailty-Adjusted Care

**Surgical Decision-Making:**
- Frailty assessment predicts complications
- Goals of care discussions
- Consider less invasive approaches
- Prehabilitation when feasible

**Acute Illness:**
- Lower threshold for CGA
- Anticipate complications
- Early rehabilitation
- Discharge planning from admission`,
      keyTerms: [
        { term: 'PRE-DELIRIC', definition: 'Validated ICU delirium prediction model using 10 risk factors' },
        { term: 'PTNS', definition: 'Percutaneous Tibial Nerve Stimulation; non-invasive neuromodulation for overactive bladder' },
        { term: 'NPWT', definition: 'Negative Pressure Wound Therapy (wound VAC); promotes healing of complex wounds' },
        { term: 'TIME framework', definition: 'Wound assessment approach: Tissue, Infection, Moisture, Edge' },
        { term: 'ACE unit', definition: 'Acute Care for Elders; specialized inpatient unit with protocols to prevent functional decline' },
        { term: 'NICHE', definition: 'Nurses Improving Care for Healthsystem Elders; program to improve hospital care for older adults' },
      ],
      clinicalNotes: 'Oxybutynin should generally be avoided in older adults due to CNS penetration - consider trospium or mirabegron instead. NPWT is powerful for complex wounds but requires appropriate patient selection. ACE unit principles can be applied anywhere - you don\'t need a dedicated unit. Frailty should inform all treatment decisions in the geriatric syndromes population.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art geriatric syndrome care integrates multi-omic phenotyping, precision biomarker-guided therapy, emerging pharmacological and device interventions, and health systems transformation to deliver comprehensive, patient-centered care.',
      explanation: `## Precision Phenotyping of Geriatric Syndromes

### Delirium Subtypes and Precision Medicine

**Neuroinflammatory Subtype:**
- Elevated peripheral inflammatory markers
- More common with infection, surgery
- May respond to anti-inflammatory approaches

**Cholinergic Deficiency Subtype:**
- High anticholinergic burden
- Dementia patients predisposed
- Target: Reduce anticholinergic load; avoid antipsychotics

**Hypoxic/Metabolic Subtype:**
- Cardiopulmonary disease, anemia
- Fluctuating oxygen delivery
- Target: Optimize hemodynamics, oxygen

**Sleep Disruption/Circadian Subtype:**
- ICU patients, post-surgical
- Melatonin rhythm disrupted
- Target: Sleep hygiene, melatonin, light exposure

### Multi-Omic Approaches

**Transcriptomics:**
- Gene expression signatures in delirium
- Potential for risk stratification
- Research stage

**Metabolomics:**
- Kynurenine pathway metabolites elevated in delirium
- Tryptophan depletion
- Potential therapeutic targets

**Proteomics:**
- Plasma protein signatures
- Inflammatory proteins
- Blood-brain barrier integrity markers

### Neuroimaging

**MRI Findings in Delirium:**
- White matter hyperintensities predispose
- Brain volume loss (vulnerability marker)
- Diffusion abnormalities during delirium

**EEG:**
- Generalized slowing (theta/delta)
- Reduced alpha
- Quantitative EEG for monitoring
- May detect delirium before clinical signs

## Emerging Therapies

### Delirium Prevention and Treatment

**Pharmacological Prevention:**
| Agent | Evidence | Status |
|-------|----------|--------|
| Melatonin/Ramelteon | Mixed results | Reasonable to try |
| Dexmedetomidine | Reduces ICU delirium | Increasing use |
| Haloperidol prophylaxis | Not effective (REDUCE trial) | Not recommended |
| Ketamine (sub-anesthetic) | Some positive data | Research |

**Anti-inflammatory Approaches:**
- NSAIDs showed promise then harm in trials
- IL-6 inhibitors (tocilizumab): Case reports
- Targeting specific inflammatory pathways: Research

**Cholinergic Enhancement:**
- Donepezil/Rivastigmine: Trials negative for prevention
- May have role in established delirium (research)

### Incontinence: Novel Therapies

**Botulinum Toxin (Bladder):**
- OnabotulinumtoxinA approved for OAB
- Injected into detrusor muscle
- 50-70% improvement
- Risk: Urinary retention (may need self-catheterization)
- Duration: 6-12 months

**Gene Therapy:**
- Preclinical research
- Target: Ion channels, receptors
- Far from clinical application

**Stem Cell Therapy:**
- Research for stress incontinence
- Aim to regenerate sphincter muscle
- Early clinical trials

### Pressure Injury: Advanced Modalities

**Bioengineered Products:**
| Product | Composition | Mechanism |
|---------|-------------|-----------|
| Cellular products | Living cells (fibroblasts, keratinocytes) | Directly contribute to healing |
| Acellular matrices | Scaffolds from dermis/other | Provide structure for cell migration |
| Growth factors | PDGF (becaplermin) | Stimulate cell proliferation |

**Platelet-Rich Plasma (PRP):**
- Autologous growth factors
- Some evidence for chronic wounds
- Variability in preparation methods

**Oxygen Therapies:**
| Modality | Mechanism | Evidence |
|----------|-----------|----------|
| Hyperbaric oxygen | Systemic hyperoxygenation | Mixed; specific indications |
| Topical oxygen | Local oxygen delivery | Emerging evidence |

### Digital Therapeutics

**Wearables for Fall Prevention:**
- Continuous gait monitoring
- Fall detection and alerting
- Pre-fall signature detection
- Personalized exercise feedback

**Smart Home Monitoring:**
- Activity pattern detection
- Early warning for functional decline
- Delirium detection through behavior changes
- Integration with care systems

## Health Systems Innovation

### Geriatric Emergency Department Accreditation

**GEDA Criteria:**
- Geriatric-trained staff
- Appropriate environment (lighting, noise, mobility)
- Screening for geriatric syndromes
- Care transitions processes
- Quality improvement programs

**Outcomes:**
- Reduced return visits
- Better care transitions
- Earlier syndrome detection

### Hospital at Home

**Concept:**
- Acute hospital-level care delivered at home
- IV medications, monitoring, therapy
- Reduced delirium (familiar environment)
- Reduced hospital-acquired complications

**Evidence:**
- Lower 30-day mortality
- Lower readmission rates
- Patient preference
- Cost savings

### Transitional Care Interventions

**BOOST (Better Outcomes by Optimizing Safe Transitions):**
- Risk assessment
- Patient/family engagement
- Teach-back education
- Timely follow-up

**INTERACT (Interventions to Reduce Acute Care Transfers):**
- Nursing home focused
- SBAR communication
- Care pathways
- Advance care planning

### Payment Models

**Value-Based Care:**
- Geriatric syndromes affect all-cause outcomes
- Quality measures increasingly include geriatric metrics
- Bundled payments incentivize prevention
- Medicare Advantage risk adjustment includes frailty

## Research Frontiers

### Prevention Paradigm Shift

**From Reactive to Predictive:**
1. Identify high-risk individuals (pre-frail, multiple risk factors)
2. Intensive prevention before hospitalization
3. "Geriatric syndrome vaccine" - multicomponent prevention program
4. Continuous monitoring with early intervention

**Population Health Approach:**
- Community screening
- Risk factor modification programs
- Exercise programs (Otago, Tai Chi at scale)
- Nutritional intervention
- Medication optimization

### Longevity Medicine Integration

**Shared Biology:**
- Geriatric syndromes and aging share mechanisms
- Inflammaging, mitochondrial dysfunction, cellular senescence
- Interventions targeting aging biology may prevent syndromes

**Geroprotector Applications:**
| Agent | Potential Application |
|-------|----------------------|
| Metformin | May reduce frailty progression |
| Rapamycin | Immune function, possibly delirium |
| Senolytics | Clear senescent cells contributing to syndromes |
| NAD+ precursors | Mitochondrial function |

**Research Questions:**
- Can senolytics reduce geriatric syndrome burden?
- Will rapamycin improve delirium outcomes?
- Does targeting aging biology prevent functional decline?

### Artificial Intelligence Applications

**Prediction:**
- ML models for fall prediction outperform traditional tools
- Natural language processing for delirium detection
- Pattern recognition in physiological monitoring

**Decision Support:**
- Medication optimization algorithms
- Personalized intervention recommendations
- Dynamic risk stratification

**Monitoring:**
- Computer vision for mobility assessment
- Voice analysis for cognitive monitoring
- Wearable data integration`,
      keyTerms: [
        { term: 'GEDA', definition: 'Geriatric Emergency Department Accreditation; standards for elder-friendly emergency care' },
        { term: 'Hospital at Home', definition: 'Model delivering acute hospital-level care in patient\'s home; reduces geriatric syndromes' },
        { term: 'INTERACT', definition: 'Interventions to Reduce Acute Care Transfers; nursing home program to reduce hospitalizations' },
        { term: 'kynurenine pathway', definition: 'Tryptophan metabolic pathway; metabolites elevated in delirium and associated with outcomes' },
        { term: 'geroprotector', definition: 'Agent targeting fundamental aging biology; may prevent multiple age-related conditions' },
        { term: 'biofilm', definition: 'Organized microbial community in wounds resistant to treatment; requires debridement' },
      ],
      clinicalNotes: `Key practice integration:

1. **Delirium phenotyping** is emerging - consider dominant mechanism (inflammatory, anticholinergic, hypoxic)
2. **Botulinum toxin** is effective for refractory OAB but counsel about retention risk
3. **Hospital at Home** dramatically reduces delirium and functional decline - advocate for expansion
4. **GEDA accreditation** for your ED improves geriatric care
5. **Digital therapeutics** (wearables, smart home) are increasingly practical for monitoring
6. **Geroprotectors** may eventually prevent syndromes, but current focus should be on proven interventions
7. **AI/ML prediction** models are coming - will change how we identify and intervene for high-risk patients
8. **Prevention paradigm shift**: Move from reactive treatment to predictive prevention`,
    },
  },

  media: [
    {
      id: 'geriatric-syndromes-overview',
      type: 'diagram',
      filename: 'geriatric-syndromes-interconnection.svg',
      title: 'Interconnection of Geriatric Syndromes',
      description: 'Visual showing how geriatric syndromes share risk factors and cascade effects',
    },
    {
      id: 'cam-algorithm',
      type: 'diagram',
      filename: 'cam-algorithm.svg',
      title: 'Confusion Assessment Method Algorithm',
      description: 'Step-by-step CAM assessment for delirium diagnosis',
    },
  ],

  citations: [
    {
      id: 'inouye-delirium-nejm',
      type: 'article',
      title: 'Delirium in Older Persons',
      authors: ['Inouye SK', 'Westendorp RGJ', 'Saczynski JS'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'help-program',
      type: 'article',
      title: 'A Multicomponent Intervention to Prevent Delirium in Hospitalized Older Patients',
      authors: ['Inouye SK', 'Bogardus ST Jr', 'Charpentier PA', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'npuap-pressure-injury',
      type: 'website',
      title: 'Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline',
      source: 'National Pressure Ulcer Advisory Panel',
    },
  ],

  crossReferences: [
    { targetId: 'concept-delirium-vs-dementia', targetType: 'concept', relationship: 'child', label: 'Delirium vs Dementia' },
    { targetId: 'concept-falls-prevention', targetType: 'concept', relationship: 'related', label: 'Falls Prevention' },
    { targetId: 'concept-frailty-sarcopenia', targetType: 'concept', relationship: 'sibling', label: 'Frailty and Sarcopenia' },
    { targetId: 'concept-polypharmacy', targetType: 'concept', relationship: 'related', label: 'Polypharmacy' },
  ],

  tags: {
    systems: ['multi-system', 'neurological', 'urological', 'integumentary'],
    topics: ['geriatrics', 'patient safety', 'hospital medicine', 'nursing'],
    keywords: ['delirium', 'incontinence', 'pressure injury', 'functional decline', 'geriatric giants'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default geriatricSyndromes;
