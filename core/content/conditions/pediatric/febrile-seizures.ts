/**
 * Febrile Seizures - Pediatric Condition
 *
 * Comprehensive content on febrile seizures including diagnosis,
* lumbar puncture indications, and recurrence management.
 */

import { EducationalContent } from '../../types';

export const febrileSeizures: EducationalContent = {
  id: 'condition-febrile-seizures',
  type: 'condition',
  name: 'Febrile Seizures',
  nameEs: 'Convulsiones Febriles',
  alternateNames: ['Febrile Convulsion', 'Febrile Fit', 'Fever Seizure'],

  levels: {
    1: {
      level: 1,
      summary: 'Febrile seizures are seizures that happen when a young child has a fever. They look scary but are usually harmless. Most children who have them grow up healthy and don\'t develop epilepsy.',
      explanation: `## What are Febrile Seizures?

A febrile seizure is a seizure (convulsion) that happens when a young child has a fever. The fever is usually from a common illness like a cold or ear infection.

**Who Gets Them:**
- Children ages 6 months to 5 years
- Most common between 12-18 months
- About 2-5% of all children will have one
- Tend to run in families

**Important to Know:**
- They look scary but are usually harmless
- They don\'t cause brain damage
- They don\'t mean the child has epilepsy
- Most children outgrow them

## Types of Febrile Seizures

**Simple Febrile Seizure (Most Common):**
- Lasts less than 15 minutes
- Happens once in 24 hours
- Whole body shakes
- Child is normal afterward

**Complex Febrile Seizure (Less Common):**
- Lasts longer than 15 minutes
- Happens more than once in 24 hours
- Only one side of body shakes
- Child may be sleepy afterward

## What to Do During a Seizure

**If your child has a seizure:**

1. **Stay Calm**
   - Most seizures stop on their own
   - Your child needs you to be calm

2. **Keep Child Safe**
   - Lay child on their side
   - Put something soft under their head
   - Move away dangerous objects

3. **DO NOT:**
   - Put anything in their mouth
   - Try to stop the shaking
   - Hold them down
   - Put water on them

4. **Time the Seizure**
   - Look at your watch or clock
   - Note how long it lasts

5. **Call for Help if:**
   - Seizure lasts longer than 5 minutes
   - Child turns blue
   - Child is injured during seizure
   - It\'s their first seizure

## After the Seizure

**What to Expect:**
- Child may be sleepy or confused
- Usually returns to normal within an hour
- May not remember what happened
- May be irritable

**When to Call the Doctor:**
- Any first seizure
- Seizure lasts longer than 5 minutes
- Child seems very sick
- You\'re worried about your child

**Go to Emergency Room if:**
- Child is hard to wake up
- Child can\'t use an arm or leg normally
- Neck is stiff
- Child looks very sick
- You\'re unsure

## Medical Treatment

**Most Children Need:**
- Examination by a doctor
- Treatment for the fever
- Treatment for the illness causing the fever
- Usually no seizure medicine needed

**Some Children May Need:**
- Tests to find the cause of fever
- Medicine to stop a long seizure (if it happens again)
- Special tests if seizure was unusual

## Causes and Triggers

**Common Causes of Fever:**
- Viral infections (colds, flu)
- Ear infections
- Throat infections
- Roseola (common cause)

**The Seizure Happens Because:**
- Fever raises body temperature quickly
- Young child\'s brain is still developing
- Some children\'s brains are more sensitive to fever

## Prevention

**You Can\'t Always Prevent Febrile Seizures, But:**

- Treat fevers promptly
- Keep child cool during illness
- Don\'t overdress a feverish child
- Give fever medicine as directed

**Medicine to Prevent Seizures:**
- Usually NOT recommended
- Side effects may be worse than seizures
- Most doctors don\'t use preventive medicine

## Long-term Outlook

**Good News:**
- Febrile seizures don\'t cause brain damage
- Don\'t affect intelligence
- Don\'t mean your child has epilepsy
- Most children outgrow them by age 5

**Recurrence:**
- About 1 in 3 children have another febrile seizure
- Usually happens within the first year
- Still harmless even if they happen again
- Most stop having them after age 5

**Epilepsy Risk:**
- Slightly higher risk than children without febrile seizures
- Overall risk is still very low (2-3%)
- Most children with febrile seizures NEVER develop epilepsy`,
      keyTerms: [
        { term: 'febrile seizure', definition: 'A seizure caused by fever in a young child' },
        { term: 'seizure', definition: 'A burst of uncontrolled electrical activity in the brain that can cause shaking' },
        { term: 'convulsion', definition: 'Another word for seizure; uncontrollable shaking of the body' },
        { term: 'epilepsy', definition: 'A condition where a person has multiple seizures without fever' },
        { term: 'fever', definition: 'Higher than normal body temperature; usually a sign of infection' },
      ],
      analogies: [
        'A febrile seizure is like a short circuit in the brain caused by fever - the system temporarily overloads but resets afterward.',
        'The young brain is like a new computer - sometimes it overheats (fever) and shuts down briefly, but restarts normally.',
      ],
      examples: [
        'An 18-month-old has a 2-minute seizure during a fever from an ear infection.',
        'A child\'s sibling also had febrile seizures - this tends to run in families.',
        'A toddler has another febrile seizure a year later - this is common and still harmless.',
      ],
      patientCounselingPoints: [
        'Febrile seizures look scary but are usually harmless',
        'Lay child on their side during a seizure - never put anything in their mouth',
        'Time the seizure and call 911 if it lasts longer than 5 minutes',
        'Most children outgrow febrile seizures by age 5',
      ],
    },

    2: {
      level: 2,
      summary: 'Febrile seizures are seizures occurring in children 6 months to 5 years with fever, without CNS infection. Classified as simple (most common, benign) or complex (higher recurrence risk). Diagnosis requires excluding meningitis; LP is indicated in children <12 months or with concerning symptoms.',
      explanation: `## What are Febrile Seizures?

Febrile seizures are seizures associated with febrile illness in children without intracranial infection, metabolic disturbance, or history of afebrile seizures.

**Epidemiology:**
- Age: 6 months to 5 years (peak 12-18 months)
- Incidence: 2-5% of all children
- Male to female ratio: Slight male predominance
- Most common seizure type in childhood

**Genetics:**
- Familial tendency in 25-40%
- Multiple genes involved
- Increased risk if:
  - Parent had febrile seizures
  - Sibling had febrile seizures

## Classification

**Simple Febrile Seizure (75%):**

| Criteria | Definition |
|----------|------------|
| Duration | <15 minutes |
| Type | Generalized (whole body) |
| Frequency | Once in 24 hours |
| Post-ictal | Returns to baseline within 1 hour |

**Complex Febrile Seizure (25%):**

| Criteria | Definition |
|----------|------------|
| Duration | ≥15 minutes |
| Type | Focal (one side) OR |
| Frequency | >1 in 24 hours |
| Post-ictal | Focal deficit or prolonged post-ictal |

**Febrile Status Epilepticus:**
- Seizure lasting ≥30 minutes
- Or recurrent seizures without return to baseline
- Medical emergency

## Clinical Presentation

**During the Seizure:**
- Loss of consciousness
- Tonic-clonic activity (stiffening then shaking)
- Eyes may roll back
- May have automatisms (lip smacking, staring)
- May lose bladder or bowel control

**After the Seizure (Post-ictal):**
- Simple: Returns to baseline within 1 hour
- Complex: May have:
  - Prolonged confusion
  - Focal weakness (Todd paralysis)
  - Sleepiness

## Diagnostic Evaluation

**Immediate Assessment:**

*History:*
- Duration of seizure
- Appearance during seizure (focal vs. generalized)
- Fever height and duration
- Illness symptoms preceding fever
- Previous seizures
- Family history of febrile seizures or epilepsy

*Physical Examination:*
- Temperature measurement
- Thorough neurological exam
- Look for signs of infection:
  - Otoscopy (ear infection)
  - Lung exam (pneumonia)
  - Skin exam (rash)
  - Head/neck exam (meningismus)

**Laboratory Studies:**

*Indicated for Most:*
- CBC with differential
- Blood culture (if febrile)
- Serum electrolytes (if on IV fluids or concerned about dehydration)
- Serum glucose (if hypoglycemia suspected)

*Consider:*
- Urinalysis and culture (especially girls <2 years)
- Viral testing (RSV, influenza, COVID)

**Lumbar Puncture (LP) Indications:**

*Strongly Consider:*
- Age <12 months (AAP recommendation)
- Age 12-18 months with:
  - Incomplete Hib/Pneumococcal vaccination
  - Concern for meningitis on exam
- Any age with:
  - Meningeal signs (stiff neck, Kernig/Brudzinski)
  - Petechial/purpuric rash
  - Prolonged post-ictal changes
  - Complex febrile seizure

*May Consider:*
- Age 12-18 months with simple febrile seizure
- After a complex febrile seizure
- Clinical judgment needed

**Neuroimaging:**
- NOT indicated for typical simple febrile seizure
- Consider CT/MRI for:
  - Focal seizure
  - Prolonged post-ictal deficit
  - Abnormal neurologic exam
  - Signs of increased intracranial pressure

## Differential Diagnosis

**Conditions Mimicking Febrile Seizure:**

| Condition | Distinguishing Features |
|-----------|-------------------------|
| Meningitis | Fever, lethargy, stiff neck, bulging fontanelle |
| Encephalitis | Fever, altered mental status, focal findings |
| Epilepsy | Seizure without fever |
| Shigella encephalopathy | Bloody diarrhea, high fever |
| Dehydration with syncope | No seizure activity, responds to fluids |
| Breath-holding spells | Triggered by pain/upset, cyanosis, brief |
| Migraine | Headache, visual changes, older child |

## Treatment

**Acute Management:**

*During Seizure:*
- ABC (airway, breathing, circulation)
- Position: Recovery position (side-lying)
- Oxygen if hypoxemic
- Do NOT restrain excessively
- Monitor vital signs

*Prolonged Seizure (>5 minutes):*
- Benzodiazepine: Lorazepam 0.1 mg/kg IV OR Diazepam 0.2-0.5 mg/kg PR/IV
- Repeat if seizures continue
- Consider fosphenytoin or phenobarbital for status

**After the Seizure:**

*Fever Management:*
- Acetaminophen 15 mg/kg q4-6h
- Ibuprofen 10 mg/kg q6-8h (≥6 months)
- Tepid sponge bath if fever >40°C (avoid cold water)
- Cooling measures: Light clothing, room temperature

*Treatment of Underlying Cause:*
- Antibiotics if bacterial infection identified
- Supportive care for viral illness

**Discharge Planning:**

*Can be discharged if:*
- Normal neurologic exam
- Returned to baseline
- No signs of serious bacterial infection
- Reliable caregivers
- Understanding of return precautions

*Discharge instructions:*
- Fever control measures
- What to do if another seizure occurs
- When to seek care
- Follow-up arrangement

## Prognosis

**Short-term:**
- Full recovery expected
- No neurologic sequelae
- May be sleepy for several hours

**Recurrence Risk:**
- Overall: 30-35%
- Higher risk if:
  - Age <18 months at first seizure
  - First-degree relative with febrile seizures
  - Lower temperature at first seizure
  - Short duration between fever onset and seizure

**Epilepsy Risk:**
- General population: 1%
- After simple febrile seizure: 2-3%
- After complex febrile seizure: 4-6%
- Still relatively low overall

**Long-term:**
- Normal intelligence
- Normal academic achievement
- No increased mortality
- Most outgrow by age 5-6`,
      keyTerms: [
        { term: 'simple febrile seizure', definition: 'Generalized seizure lasting <15 minutes in a febrile child, with normal neurologic exam' },
        { term: 'complex febrile seizure', definition: 'Febrile seizure with focal onset, duration >15 minutes, or recurrence in 24 hours' },
        { term: 'lumbar puncture', definition: 'Procedure to collect cerebrospinal fluid; tests for meningitis or encephalitis' },
        { term: 'meningismus', definition: 'Symptoms of meningeal irritation including stiff neck and photophobia' },
        { term: 'Todd paralysis', definition: 'Temporary weakness after a seizure, usually resolving within hours' },
      ],
      analogies: [
        'The young brain is more sensitive to fever like a new engine is more sensitive to overheating - it may temporarily shut down but works fine afterward.',
        'Simple vs. complex febrile seizures is like comparing a brief power flicker to a longer electrical problem in your home.',
      ],
      clinicalNotes: 'Children <12 months with febrile seizure should have LP due to higher meningitis risk. Children 12-18 months need LP if not fully vaccinated or if clinical concern exists.',
    },

    3: {
      level: 3,
      summary: 'Febrile seizures are age-specific seizures (6mo-5yr) occurring with fever, without CNS infection or metabolic disturbance. Simple febrile seizures are benign with excellent prognosis. Complex features increase recurrence risk slightly. Diagnosis requires excluding meningitis with LP in young or symptomatic children.',
      explanation: `## Definition and Classification

**ILAE Definition (2017):**
- Seizure occurring in febrile state
- Age 6 months to 5 years
- No CNS infection or inflammation
- No prior unprovoked seizure
- Does not meet criteria for other acute symptomatic seizure

**Classification:**

*Simple Febrile Seizure:*
- Generalized tonic-clonic
- Duration <15 minutes
- No focal features
- No post-ictal deficits
- Occurs once in 24 hours

*Complex Febrile Seizure (Any of):*
- Duration ≥15 minutes
- Focal onset or features
- ≥2 seizures in 24 hours
- Post-ictal Todd paralysis

*Febrile Status Epilepticus:*
- Seizure ≥30 minutes OR
- Recurrent seizures without full recovery
- Medical emergency

## Pathophysiology

**Febrile Seizure Susceptibility:**

*Developmental Factors:*
- Increased neuronal excitability in immature brain
- Excitatory neurotransmission dominant (glutamate)
- Inhibitory systems immature (GABA)
- Higher synaptic density
- Lower seizure threshold

*Genetic Factors:*
- Polygenic inheritance
- Identified genes:
  - SCN1A (sodium channel)
  - GABA receptor subunits
  - IL-1β and IL-1RA variants (fever response)
- Familial cases: 25-40%

**Triggering Factors:**

*Fever Characteristics:*
- Rate of temperature rise more important than absolute height
- Height of fever: Mean 39-40°C
- Time from fever onset: Often early (within hours)

*Inflammatory Mediators:*
- Prostaglandins
- Cytokines (IL-1β, IL-6, TNF-α)
- May directly affect neuronal excitability

**Immature Brain Vulnerability:**

| Age | Seizure Threshold | Explanation |
|-----|-------------------|-------------|
| <6 months | Higher | Incomplete myelination, protective factors |
| 6mo-5yr | Lowest | Peak synaptic density, immature inhibition |
| >5 years | Higher | Myelination complete, inhibition mature |

## Diagnostic Evaluation

**Lumbar Puncture Decision-Making:**

*AAP Recommendations (2011):*

| Age | LP Recommendation |
|-----|-------------------|
| <6 months | Strongly recommended |
| 6-12 months | Strongly recommended |
| 12-18 months | Consider if: |
| | - Incomplete vaccination |
| | - Concern for meningitis |
| | - Prolonged post-ictal |
| >18 months | Only if meningeal signs |

*Clinical Judgment Factors:*
- Appearance of child
- Level of fever
- Exam findings
- Vaccination status (Hib, PCV13)
- Prior antibiotic use (may mask meningitis)

**Meningitis Assessment:**

*Physical Signs:*
- Nuchal rigidity (stiff neck)
- Kernig sign (pain on knee extension with hip flexed)
- Brudzinski sign (hip/knee flexion with neck flexion)
- Bulging fontanelle (infants)
- Photophobia

*Laboratorial:*
- CSF: Cell count, glucose, protein, culture, Gram stain
- Blood: CBC, blood culture
- Procalcitonin: May help distinguish bacterial vs. viral

**Neuroimaging Indications:**

*CT Head:*
- Abnormal neurologic exam
- Prolonged post-ictal deficit
- Focal seizure features
- Signs of increased ICP
- Head trauma suggested

*MRI:*
- Complex febrile seizures
- Recurrent complex febrile seizures
- Abnormal neurologic development
- Pre-existing neurologic abnormalities

**Laboratory Evaluation:**

*Basic Workup:*
- CBC with differential
- Electrolytes, BUN, creatinine
- Glucose
- Calcium, magnesium
- Serum phosphorus

*Indicated Studies:*
- Urinalysis/culture (girls <2 years, uncircumcised boys)
- Blood culture if febrile
- Respiratory viral testing (RSV, influenza, COVID)

**EEG:**
- NOT recommended after first simple febrile seizure
- Consider after complex febrile seizure
- Consider if recurrent febrile seizures
- Yield is low in typical febrile seizures

## Differential Diagnosis

**Serious Bacterial Infections:**

*Meningitis:*
- Fever, headache, photophobia
- Neck stiffness, altered mental status
- Kernig/Brudzinski signs
- Requires emergent LP

*Bacteremia/Sepsis:*
- High fever, toxic appearance
- Hypotension, poor perfusion
- Blood culture positive
- Requires IV antibiotics

**Other Seizure Mimics:**

| Condition | Key Distinguishing Features |
|-----------|---------------------------|
| Epilepsy | Afebrile seizures, recurrent |
| Shigella encephalopathy | Bloody diarrhea, high fever |
| Salmonella encephalopathy | Diarrhea, fever |
| Dehydration syncope | No rhythmic shaking, responds to fluids |
| Breath-holding spell | Triggered by upset, cyanosis then limp |
| Migraine | Headache older child, visual aura |
| Psychogenic nonepileptic seizure | No fever, older child, inconsistent |

## Treatment

**Acute Management Protocol:**

*Initial:*
- ABC assessment
- Oxygen if SpO2 <92%
- Monitor vital signs
- Place in recovery position
- Protect from injury

*Seizure >5 minutes:*
- Lorazepam 0.1 mg/kg IV (max 4 mg)
- OR Diazepam 0.2-0.5 mg/kg PR or IV (max 10 mg)
- Repeat in 5-10 minutes if continues

*Status Epilepticus (>30 min):*
- Second-line: Fosphenytoin 20 mg PE/kg
- OR Phenobarbital 15-20 mg/kg
- OR Levetiracetam 20-60 mg/kg
- Consider intubation for airway protection

**Fever Management:**
- Target: Comfort rather than normal temperature
- Acetaminophen 15 mg/kg q4-6h PRN
- Ibuprofen 10 mg/kg q6-8h PRN (≥6 months)
- Avoid over-aggressive cooling
- Tepid sponge bath if >40°C

**Antipyretic Prophylaxis:**
- NOT recommended routinely
- Does NOT prevent febrile seizures
- May mask signs of infection
- Side effects outweigh benefits

**Antiseizure Prophylaxis:**

*Continuous Prophylaxis:*
- Generally NOT recommended
- Consider only in:
  - Very frequent complex febrile seizures
  - Febrile status epilepticus
  - High-risk situations
- Phenobarbital or valproate if used
- Significant side effect profile

*Intermittent Prophylaxis:*
- Diazepam 0.33 mg/kg PR at fever onset
- Consider for:
  - Frequent recurrences
  - Parental anxiety
  - Complex features
- Reduces recurrence but has side effects

## Prognosis

**Recurrence Risk:**

*Overall:*
- After first febrile seizure: 30-35%
- After second: 50%
- After third: 50%

*Predictors of Recurrence:*
- Age <18 months at first seizure: RR 1.5
- First-degree relative with febrile seizures: RR 1.8
- Low fever at first seizure: RR 1.5
- Short duration between fever onset and seizure: RR 1.5

*Timing:*
- Most recurrences within 1 year
- 75% within 2 years
- Rare after age 5

**Epilepsy Risk:**

| Population | Epilepsy Risk |
|------------|---------------|
| General population | 1% |
| Simple febrile seizure | 2-3% |
| Complex febrile seizure | 4-6% |
| Febrile status epilepticus | 8-10% |
| Pre-existing neurologic abnormality | 15-30% |

*Mesial Temporal Lobe Epilepsy:*
- Possible association with prolonged febrile seizures
- Controversial relationship
- Overall risk remains low

**Neurocognitive Outcomes:**
- Normal intelligence in most
- Normal academic achievement
- No behavioral problems attributable to febrile seizures
- No learning disabilities attributable to febrile seizures

**Mortality:**
- Sudden unexpected death in epilepsy (SUDEP): Not applicable
- No increased mortality from febrile seizures
- Mortality from underlying cause (meningitis, etc.)`,
      keyTerms: [
        { term: 'ILAE', definition: 'International League Against Epilepsy; organization that defines seizure classifications' },
        { term: 'febrile status epilepticus', definition: 'Seizure lasting ≥30 minutes or recurrent seizures without return to baseline' },
        { term: 'Todd paralysis', definition: 'Temporary focal weakness following a seizure; resolves within hours' },
      ],
      clinicalNotes: 'Consider LP in children <12 months with febrile seizure due to higher meningitis risk. In children 12-18 months, LP recommended if not fully vaccinated or clinical concern exists.',
    },

    4: {
      level: 4,
      summary: 'Advanced management of febrile seizures requires understanding age-specific seizure susceptibility, precise LP indications based on age and clinical factors, differentiation from meningitis and other mimics, evidence-based acute management, and appropriate counseling on recurrence risk.',
      explanation: `## Advanced Pathophysiology

**Developmental Neurobiology:**

*Synaptic Development:*
- Synaptic overproduction in early childhood
- Peak density at 2-3 years
- Pruning continues through adolescence
- More excitatory synapses in young brain

*GABA System Development:*
- GABA receptors immature at birth
- GABA excitatory in early development
- Chloride gradient reversal
- Switch to inhibitory function occurs at 3-6 months

*Glutamate System:*
- NMDA receptors overexpressed
- Enhanced calcium influx
- Lower seizure threshold
- Pruned during development

**Genetic Architecture:**

*Identified Genes:*

| Gene | Function | Effect |
|------|----------|--------|
| SCN1A | Sodium channel | Gain/loss of function |
| SCN2A | Sodium channel | Neuronal excitability |
| GABRG2 | GABA receptor | Reduced inhibition |
| GABRD | GABA receptor | Reduced inhibition |
| KCNQ2 | Potassium channel | Neuronal excitability |
| CACNA1A | Calcium channel | Neuronal excitability |

*Cytokine Gene Variants:*
- IL-1β: Pro-inflammatory
- IL-1RA: Anti-inflammatory
- Imbalance increases seizure susceptibility
- Fever response genes

**Fever Dynamics:**

*Rate vs. Height:*
- Rate of temperature rise critical
- Rapid rise → more likely seizure
- Absolute height less important
- Explains seizures with modest fever

*Hypothalamic Set Point:*
- Immature thermoregulation in young children
- Wider temperature fluctuations
- More rapid temperature changes

## Diagnostic Decision-Making

**Lumbar Puncture Algorithm:**

*Age-Based Approach:*

| Age | LP Indicated | Rationale |
|-----|--------------|-----------|
| <6 months | Yes | Limited meningitis signs, high risk |
| 6-12 months | Yes | Intermediate risk, signs may be subtle |
| 12-18 months | Consider* | Vaccination status dependent |
| >18 months | No** | Signs usually present |

\*LP if: Incomplete Hib/PCV vaccination, clinical concern, prolonged post-ictal
\*\*Unless meningeal signs present

*Meningitis Predictors:*

*Clinical Features:*
- Nuchal rigidity: LR 2.3
- Bulging fontanelle: LR 3.1
- Petechial rash: LR 5.7
- Seizure + fever alone: LR 0.6 (protective)

*Laboratory Markers:*
- Procalcitonin >0.5 ng/mL: Sensitivity 95%, Specificity 89%
- CRP >40 mg/L: Sensitivity 90%, Specificity 60%
- CSF pleocytosis: Diagnostic

*Predictive Models:*
- Bacterial Meningitis Score (children >2 months)
- Combines clinical and laboratory features
- High negative predictive value

**Complex Features Analysis:**

*Focal Onset:*
- Increased risk of:
  - Structural brain abnormality
  - Epilepsy development
  - Recurrence

*Prolonged Duration:*
- >15 minutes: Complex
- >30 minutes: Status epilepticus
- Possible hippocampal injury

*Recurrent Seizures:*
- >1 in 24 hours: Complex
- May indicate:
  - Lower seizure threshold
  - Genetic predisposition
  - Underlying neurologic abnormality

## Treatment Optimization

**Benzodiazepine Selection:**

*Lorazepam:*
- Onset: 1-3 minutes IV
- Duration: 12-24 hours
- Advantage: Longer duration, less redistribution
- Dose: 0.1 mg/kg IV (max 4 mg)
- Preferred: IV access available

*Diazepam:*
- Onset: 1-2 minutes IV
- Duration: 15-60 minutes
- Advantage: PR formulation available
- Dose: 0.2-0.5 mg/kg PR or IV (max 10 mg)
- Preferred: No IV access

*Midazolam:*
- Onset: 1-2 minutes IM/buccal/intranasal
- Duration: 30-60 minutes
- Advantage: Multiple routes, good IM absorption
- Dose: 0.2 mg/kg IM (max 10 mg)
- Preferred: Prehospital setting

**Status Epilepticus Management:**

*Protocol:*

| Time | Intervention |
|------|--------------|
| 0-5 min | Positioning, oxygen, monitoring |
| 5 min | Lorazepam 0.1 mg/kg IV |
| 10-15 min | Repeat lorazepam OR |
| | Diazepam PR 0.5 mg/kg |
| 15-30 min | Second-line: |
| | - Fosphenytoin 20 mg PE/kg |
| | OR Levetiracetam 20-60 mg/kg |
| | OR Phenobarbital 15-20 mg/kg |
| 30-60 min | Third-line/intubation: |
| | - Midazolam infusion |
| | - Propofol infusion |
| | - Pentobarbital coma |

**Fever Management Strategies:**

*Target Temperature:*
- Comfort rather than normothermia
- Reducing fever does NOT prevent recurrence
- Goal: Child feels better

*Antipyretic Selection:*
- Acetaminophen 15 mg/kg q4-6h
- Ibuprofen 10 mg/kg q6-8h (≥6 months)
- Alternating: NOT recommended (no clear benefit, more errors)
- Avoid: Aspirin (Reye syndrome risk)

## Prophylaxis Debate

**Continuous Antiseizure Prophylaxis:**

*Evidence:*
- Reduces recurrence by ~50%
- Does NOT improve long-term outcomes
- No effect on epilepsy risk
- Significant side effects:
  - Behavioral changes
  - Cognitive effects
  - Hyperactivity
  - Hypersensitivity reactions

*Recommendation:*
- NOT recommended for most children
- Consider only in:
  - Very frequent complex febrile seizures
  - Febrile status epilepticus
  - Pre-existing neurologic abnormality
  - Family strongly prefers medication

**Intermittent Diazepam Prophylaxis:**

*Protocol:*
- Diazepam 0.33 mg/kg rectally at fever onset
- Can be given every 12 hours while febrile
- Reduces recurrence by ~60%

*Side Effects:*
- Respiratory depression (rare)
- Sedation
- Ataxia
- Irritability

*Recommendation:*
- Consider for:
  - Frequent recurrences causing distress
  - Multiple complex febrile seizures
  - Febrile status epilepticus history
- Discuss risks/benefits with family

## Long-term Risk Stratification

**Epilepsy Risk Factors:**

| Risk Factor | Relative Risk |
|-------------|---------------|
| Simple febrile seizure | 1.5-2x |
| Complex febrile seizure | 2-3x |
| Febrile status epilepticus | 3-4x |
| Pre-existing neurologic abnormality | 10x |
| Family history of epilepsy | 2-3x |

**Mesial Temporal Sclerosis:**

*Controversy:*
- Association with prolonged febrile seizures
- Possible causative relationship
- NOT proven that febrile seizures cause MTLE
- May be marker for underlying susceptibility

*Monitoring:*
- Routine MRI: NOT recommended
- EEG: NOT recommended after simple febrile seizure
- Consider after complex febrile seizure
- Follow-up if afebrile seizures develop

**Neurocognitive Outcomes:**

*Large Cohort Studies:*
- Normal intelligence scores
- Normal academic achievement
- No behavioral problems attributable to febrile seizures
- No learning disabilities
- Normal social development

*Possible Risk Groups:*
- Febrile status epilepticus: Some studies show mild deficits
- Pre-existing abnormalities: Worsening possible
- Multiple recurrences: Some studies show subtle effects

## Special Situations

**Dravet Syndrome (Severe Myoclonic Epilepsy of Infancy):**
- SCN1A mutation
- Presents with febrile seizures in infancy
- Evolves to severe epilepsy
- Clues: Prolonged seizures, hemiclonic, vaccine-triggered
- Consider genetic testing if atypical features

**Generalized Epilepsy with Febrile Seizures Plus (GEFS+):**
- Genetic epilepsy syndrome
- Multiple family members affected
- Febrile seizures persist beyond age 6
- May develop afebrile seizures
- Various gene mutations (SCN1A, SCN2A, GABRG2)`,
      keyTerms: [
        { term: 'synaptic overproduction', definition: 'Excess synapse formation in early brain development; increases excitability' },
        { term: 'GABA excitatory', definition: 'GABA has excitatory rather than inhibitory effect in early development due to chloride gradient' },
        { term: 'meningeal signs', definition: 'Physical signs of meningeal irritation including neck stiffness and positive Kernig/Brudzinski signs' },
      ],
      clinicalNotes: 'Procalcitonin is more accurate than CRP for distinguishing bacterial meningitis from aseptic meningitis. Consider testing when LP decision is uncertain.',
    },

    5: {
      level: 5,
      summary: 'Expert management of febrile seizures integrates developmental neurobiology, genetics, precise LP indications, evidence-based acute and prophylactic therapies, individualized risk assessment, and long-term neurodevelopmental surveillance.',
      explanation: `## Molecular Pathogenesis

**Channelopathy Genetics:**

*SCN1A Spectrum:*
- Gain-of-function: Febrile seizures, GEFS+
- Loss-of-function: Dravet syndrome
- Same gene, different mutations → different phenotypes
- Explains phenotypic variability

*Other Channelopathies:*
- SCN2A: Similar spectrum to SCN1A
- SCN8A: Epileptic encephalopathy
- KCNQ2/KCNQ3: Benign familial neonatal seizures
- CACNA1A: Familial hemiplegic migraine, epilepsy

*GABA Receptor Genes:*
- GABRG2: Febrile seizures, GEFS+
- GABRD: Febrile seizures
- GABRA1: Various epilepsy syndromes

**Cytokine-Mediated Seizure Susceptibility:**

*IL-1β/IL-1RA Balance:*
- IL-1β: Proconvulsant
- IL-1RA: Anticonvulsant
- Polymorphisms affect balance
- Higher IL-1β/IL-1RA ratio → increased susceptibility

*Fever Signaling Pathways:*
- TLR3 activation by viral RNA
- NF-κB pathway activation
- Cytokine production
- Direct neuronal effects

**Epigenetic Factors:**
- DNA methylation patterns
- Histone modifications
- May explain familial clustering without clear mutations
- Research stage currently

## Diagnostic Precision

**Biomarkers for Meningitis:**

*Procalcitonin Algorithms:*
- <0.5 ng/mL: Low risk (NPV >99%)
- 0.5-2.0 ng/mL: Intermediate risk
- >2.0 ng/mL: High risk (PP >95%)

*Combined Models:*
- Procalcitnonin + clinical criteria
- Improved sensitivity and specificity
- May reduce unnecessary LPs

*CSF Analysis:*
- Protein: Elevated in bacterial meningitis
- Glucose: Low in bacterial meningitis
- Cell count: Bacterial (PMN dominant), Viral (lymphocyte dominant)
- PCR: For specific viral pathogens

**EEG Indications - Refined:**

*After Simple Febrile Seizure:*
- Routine EEG: NOT recommended
- Yield: Very low
- Does not change management

*After Complex Febrile Seizure:*
- Consider EEG
- Yield: Higher but still limited
- May identify background abnormalities
- Does not predict epilepsy reliably

*When to Obtain EEG:*
- Focal features on exam
- Prolonged post-ictal deficit
- Recurrent complex febrile seizures
- Pre-existing neurologic abnormality

**Genetic Testing:**

*Indications:*
- Dravet syndrome suspected
- Family history of febrile seizures + epilepsy
- Multiple febrile seizures with atypical features
- Hemiclonic seizures
- Vaccine-triggered prolonged seizures

*Testing Strategy:*
- Epilepsy gene panel (100+ genes)
- SCN1A sequencing if Dravet suspected
- Whole exome sequencing if panel negative
- Genetic counseling important

## Therapeutic Optimization

**Benzodiazepine Pharmacology:**

*Absorption Kinetics:*
- Lorazepam IV: Onset 1-3 min, redistribution minimal
- Diazepam IV: Onset 1-2 min, rapid redistribution
- Diazepam PR: Onset 5-10 min, variable absorption
- Midazolam IM: Onset 5-10 min, reliable absorption
- Midazolam intranasal: Onset 5-10 min, non-invasive

*Redosing Considerations:*
- Lorazepam: Repeat once in 5-10 min if needed
- Diazepam: Repeat once if needed
- Midazolam: Repeat once if needed
- After 2 benzodiazepine doses: Move to second-line

**Second-Line Agents:**

*Levetiracetam:*
- Mechanism: SV2A modulation
- Dose: 20-60 mg/kg IV
- Advantages: Fewer drug interactions, rapid infusion
- Growing evidence in status epilepticus
- Not FDA-approved for status (off-label)

*Fosphenytoin:*
- Mechanism: Sodium channel blockade
- Dose: 20 mg PE/kg IV
- Advantages: Faster infusion, less hypotension
- Cardiac monitoring required
- Established efficacy

*Phenobarbital:*
- Mechanism: GABA potentiation
- Dose: 15-20 mg/kg IV
- Advantages: Single dose, prolonged effect
- Disadvantages: Sedation, respiratory depression
- Less commonly used now

*Valproate:*
- Mechanism: Multiple mechanisms
- Dose: 20-40 mg/kg IV
- Contraindicated in liver disease
- Advantages: Fewer hypotension issues
- Growing evidence for efficacy

**Refractory Status Epilepticus:**

*Third-line Agents:*
- Midazolam infusion: 0.05-2 mg/kg/hour
- Propofol infusion: 1-5 mg/kg/hour
- Pentobarbital coma: 5-15 mg/kg bolus, then 0.5-5 mg/kg/hour

*Monitoring:*
- Continuous EEG
- ICU admission required
- Hemodynamic monitoring

## Risk Communication

**Recurrence Risk Counseling:**

*Absolute Risk:*
- Overall: 30-35%
- Risk depends on multiple factors
- Most recurrences are simple even if first was complex
- Decreases with age

*Individualized Risk Assessment:*
- Calculate based on:
  - Age at first seizure
  - Family history
  - Fever characteristics
  - Seizure characteristics

*Epilepsy Risk:*
- Baseline population risk: 1%
- After simple febrile seizure: 2-3%
- After complex febrile seizure: 4-6%
- Still relatively low

**Parental Anxiety Management:**
- Febrile seizures are very frightening to witness
- Anxiety often disproportionate to risk
- Education reduces anxiety
- Provide written materials
- Teach seizure first aid
- Provide emergency plan

## Prevention Controversies

**Antipyretic Prophylaxis:**

*Evidence:*
- Does NOT prevent febrile seizures
- Does NOT reduce recurrence risk
- May give false sense of security
- May delay recognition of serious illness

*Recommendation:*
- Treat for comfort, not seizure prevention
- Educate parents about this

**Antiseizure Prophylaxis:**

*Continuous:*
- Phenobarbital: Reduces recurrence by 70%
- Valproate: Reduces recurrence by 60%
- Side effects common
- No long-term benefit
- NOT recommended routinely

*Intermittent:*
- Diazepam at fever onset
- Reduces recurrence by 60%
- Side effects less common but possible
- May be appropriate for selected cases
- Shared decision-making

## Long-term Outcomes

**Cognitive Outcomes:**

*Large Cohort Studies:*
- National Collaborative Perinatal Project
- Followed 1,700 children with febrile seizures
- No difference in IQ
- No difference in academic achievement
- No difference in behavioral problems
- No difference in adaptive functioning

*Possible Subtle Effects:*
- Some studies show very minor deficits after status
- Clinical significance unclear
- May be related to underlying cause
- NOT from the seizure itself

**Psychiatric Outcomes:**
- No increased risk of major psychiatric disorders
- Some studies show slight increase in ADHD
- May be related to underlying factors
- NOT clearly caused by febrile seizures

**Quality of Life:**
- No impact on overall QoL
- Parental anxiety may affect child
- Education reduces anxiety
- Most families adapt well

## Global Health Perspective

**Variation in Practice:**
- LP practices vary by country
- Hospitalization rates vary
- Use of prophylactic medications varies
- May reflect cultural factors
- May reflect resource limitations

**Resource-Limited Settings:**
- Higher meningitis risk
- Limited access to LP
- Limited access to antibiotics
- Higher mortality
- Low-cost strategies needed

**Future Directions:**
- Genetic risk profiling
- Biomarkers for recurrence
- Biomarkers for epilepsy risk
- Personalized prevention strategies`,
      keyTerms: [
        { term: 'channelopathy', definition: 'Genetic disorder affecting ion channels; many epilepsy genes are channelopathies' },
        { term: 'SV2A', definition: 'Synaptic vesicle protein 2A; target of levetiracetam' },
        { term: 'reistribution', definition: 'Rapid movement of drug from blood to tissues; terminates diazepam effect faster than lorazepam' },
      ],
      clinicalNotes: `Expert Practice Pearls:

1. **LP Indications:** Strongly recommend LP for children <12 months with febrile seizure. For 12-18 months, LP if not fully vaccinated or clinical concern. For >18 months, LP only if meningeal signs present.

2. **Seizure Duration:** Treat with lorazepam 0.1 mg/kg IV if seizure >5 minutes. Diazepam 0.2-0.5 mg/kg PR if no IV access.

3. **Recurrence Risk:** Overall 30-35%. Higher with age <18 months, family history, lower fever at first seizure, short fever-to-seizure interval.

4. **Epilepsy Risk:** Slightly elevated but still low (2-6% vs. 1% baseline). Most children with febrile seizures never develop epilepsy.

5. **EEG:** Not indicated after simple febrile seizure. Consider after complex febrile seizure or if atypical features present.

6. **Prophylaxis:** Routine antiseizure prophylaxis NOT recommended. Discuss risks/benefits of intermittent diazepam for children with frequent complex febrile seizures.`,
    },
  },

  media: [
    {
      id: 'febrile-seizure-types',
      type: 'diagram',
      filename: 'febrile-seizure-types.svg',
      title: 'Simple vs Complex Febrile Seizure',
      description: 'Comparison of simple and complex febrile seizure features',
    },
    {
      id: 'lp-indications',
      type: 'diagram',
      filename: 'lp-indications-flowchart.svg',
      title: 'Lumbar Puncture Indications Algorithm',
      description: 'Algorithm for when to perform lumbar puncture in febrile seizures',
    },
  ],

  citations: [
    {
      id: 'aap-febrile-seizure-guidelines-2011',
      type: 'article',
      title: 'Clinical Practice Guideline: Febrile Seizures: Guideline for the Neurodiagnostic Evaluation of the Child With a Simple Febrile Seizure',
      authors: ['Subcommittee on Febrile Seizures'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.127.2.389',
      accessedDate: '2026-01-26',
    },
    {
      id: 'neurology-febrile-seizures-2016',
      type: 'article',
      title: 'Summary of Evidence-Based Guideline Update: Evaluation of the Child With a Simple Febrile Seizure',
      authors: ['Shinnar, S.', 'Glauser, T.'],
      source: 'Neurology',
      url: 'https://doi.org/10.1212/WNL.0000000000002969',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'system-nervous', targetType: 'system', relationship: 'related', label: 'Nervous System' },
    { targetId: 'condition-meningitis', targetType: 'condition', relationship: 'see-also', label: 'Meningitis (Differential)' },
    { targetId: 'condition-epilepsy', targetType: 'condition', relationship: 'related', label: 'Epilepsy' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pediatrics', 'neurology', 'seizure disorders', 'emergency medicine'],
    keywords: ['febrile seizure', 'fever seizure', 'convulsion', 'lumbar puncture', 'meningitis', 'status epilepticus', 'diazepam'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'neurology', 'family-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default febrileSeizures;
