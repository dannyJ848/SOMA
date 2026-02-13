/**
 * Restless Legs Syndrome - Comprehensive Educational Content
 *
 * Covers restless legs syndrome (RLS/Willis-Ekbom Disease) pathophysiology,
 * diagnosis, and treatment, as well as periodic limb movement disorder (PLMD).
 */

import { EducationalContent } from '../types';

export const restlessLegsSyndrome: EducationalContent = {
  id: 'condition-restless-legs-syndrome',
  type: 'condition',
  name: 'Restless Legs Syndrome',
  alternateNames: ['RLS', 'Willis-Ekbom Disease', 'WED', 'Periodic Limb Movement Disorder', 'PLMD'],

  levels: {
    1: {
      level: 1,
      summary: 'Restless legs syndrome is an uncomfortable urge to move your legs, especially when resting or trying to sleep, that gets better when you move around.',
      explanation: `Imagine trying to fall asleep but your legs feel so uncomfortable that you just have to move them. That's what restless legs syndrome (RLS) feels like.

**What Does It Feel Like?**
People with RLS describe feelings in their legs like:
- Creepy-crawly sensations
- Tingling or "pins and needles"
- Pulling or tugging
- Itching deep inside
- Like something is crawling under the skin
- An overwhelming urge to move

**Key Features:**
1. **Urge to move**: You feel like you absolutely have to move your legs
2. **Worse at rest**: It happens when you're sitting still or lying down
3. **Better with movement**: Walking or stretching makes it better
4. **Worse at night**: It usually gets worse in the evening or when trying to sleep

**How It Affects Sleep:**
- Hard to fall asleep because legs won't stay still
- May wake you up at night
- Makes you tired during the day
- Can affect bed partners (legs moving during sleep)

**What Causes It?**
- Often runs in families
- Low iron levels can cause or worsen it
- Some medications can trigger it
- Pregnancy can bring it on temporarily
- More common with certain conditions (kidney disease, nerve problems)

**Treatment:**
- Check iron levels (and treat if low)
- Lifestyle changes (regular exercise, avoid caffeine)
- Medications can help when symptoms are severe
- Simple measures like walking, stretching, or warm baths

The good news is that treatment can really help most people feel better!`,
      keyTerms: [
        { term: 'restless legs syndrome', definition: 'A condition causing uncomfortable sensations in the legs and an urge to move them, especially at rest' },
        { term: 'urge to move', definition: 'A strong feeling that you need to move your legs to get relief' },
        { term: 'iron', definition: 'A mineral in your blood that helps carry oxygen; low iron can worsen RLS' },
      ],
      analogies: [
        'RLS is like having an itch you can\'t scratch, except it\'s deep in your legs and only moving makes it better.',
        'The urge to move in RLS is like the feeling when you need to sneeze - you just can\'t ignore it.',
      ],
      examples: [
        'Someone with RLS might not be able to sit through a movie because their legs feel so uncomfortable they have to get up and walk around.',
        'A person with RLS might dread long airplane flights because sitting still makes their symptoms much worse.',
      ],
    },
    2: {
      level: 2,
      summary: 'Restless legs syndrome (RLS/Willis-Ekbom disease) is a sensorimotor disorder characterized by an urge to move the legs with uncomfortable sensations, worsening at rest and evening, relieved by movement. It\'s associated with iron deficiency and dopamine dysfunction.',
      explanation: `Restless legs syndrome (RLS) is a neurological condition that significantly impacts sleep quality and quality of life.

**Diagnostic Criteria (Essential Features):**
All five must be present:
1. **Urge to move legs** - usually with uncomfortable sensations
2. **Begins or worsens at rest** - during inactivity
3. **Partially or totally relieved by movement** - walking, stretching
4. **Occurs mainly in evening/night** - circadian pattern
5. **Not solely explained by another condition** - leg cramps, positional discomfort, etc.

**Symptom Descriptions:**
- Dysesthesias (unpleasant sensations)
- Words used: creeping, crawling, pulling, aching, itching, electric
- Deep in the legs, not superficial
- May affect arms (less common)
- Urge to move is the defining feature

**Associated Features:**

*Periodic Limb Movements of Sleep (PLMS):*
- Involuntary leg jerks during sleep
- Present in 80-90% of RLS patients
- Can occur without RLS symptoms
- Detected on sleep study

*Periodic Limb Movement Disorder (PLMD):*
- PLMS with clinical consequences
- Sleep disruption, daytime sleepiness
- But NO RLS symptoms
- Less common than RLS

**Epidemiology:**
- Prevalence: 5-10% of adults (frequent symptoms: 2-3%)
- Women > men (2:1)
- Increases with age
- Strong genetic component (40-60% have family history)

**Associated Conditions:**
| Condition | Mechanism |
|-----------|-----------|
| Iron deficiency | Reduced brain iron |
| End-stage kidney disease | Very high prevalence (up to 40%) |
| Pregnancy | Especially third trimester |
| Neuropathy | Peripheral nerve damage |
| Parkinson's disease | Dopamine pathway overlap |

**Iron and RLS:**
- Brain iron deficiency is central to pathophysiology
- Can occur even with normal serum iron/hemoglobin
- Check ferritin - aim for >75-100 ng/mL for RLS
- IV iron may help when oral iron inadequate

**Treatment Approach:**

*Non-Pharmacological:*
- Iron supplementation if ferritin <75-100
- Avoid triggers (caffeine, alcohol, antihistamines)
- Regular moderate exercise
- Good sleep hygiene
- Leg massage, warm baths

*Pharmacological (for moderate-severe):*
| Class | Examples | Notes |
|-------|----------|-------|
| Alpha-2-delta ligands | Gabapentin, pregabalin | First-line per guidelines |
| Dopamine agonists | Pramipexole, ropinirole, rotigotine | Effective but augmentation risk |
| Low-dose opioids | For refractory cases | When other treatments fail |`,
      keyTerms: [
        { term: 'dysesthesia', definition: 'An unpleasant abnormal sensation, often described as burning, tingling, or crawling', pronunciation: 'dis-es-THEE-zhuh' },
        { term: 'PLMS', definition: 'Periodic Limb Movements of Sleep; repetitive leg jerks during sleep seen in most RLS patients' },
        { term: 'PLMD', definition: 'Periodic Limb Movement Disorder; PLMS with sleep disruption symptoms but without RLS sensations' },
        { term: 'ferritin', definition: 'A blood test measuring iron stores; should be >75-100 ng/mL in RLS patients' },
        { term: 'augmentation', definition: 'Worsening of RLS symptoms with long-term dopamine agonist treatment' },
      ],
      analogies: [
        'PLMS is like your legs having hiccups while you sleep - involuntary repeated movements you can\'t control.',
        'The circadian pattern of RLS is like your legs have their own alarm clock set for evening, reminding you to move.',
      ],
    },
    3: {
      level: 3,
      summary: 'Restless legs syndrome involves dopaminergic dysfunction and brain iron deficiency, presenting with sensorimotor symptoms following a circadian pattern. Diagnosis requires meeting IRLSSG criteria, excluding mimics, and assessing iron status. First-line treatment includes alpha-2-delta ligands, with dopamine agonists reserved due to augmentation risk.',
      explanation: `## Pathophysiology

### Dopaminergic Hypothesis

**Evidence for Dopamine Involvement:**
- RLS improves with dopaminergic medications
- Dopamine receptor imaging shows subtle abnormalities
- Symptoms have circadian pattern (dopamine function varies)
- Overlap with dopamine-related conditions (Parkinson's, depression)

**However, not simple dopamine deficiency:**
- Imaging studies inconsistent
- May involve dopamine receptor function, not just levels
- Pre-synaptic vs. post-synaptic changes
- Regional specificity (A11 dopaminergic neurons)

### Iron Deficiency Hypothesis

**Brain Iron Deficiency:**
\`\`\`
Central mechanism:
- Brain iron stores reduced in RLS (even with normal serum iron)
- Iron deficiency affects dopamine synthesis and function:
  - Tyrosine hydroxylase (rate-limiting DA synthesis enzyme) requires iron
  - Dopamine receptors may be downregulated

Assessment:
- CSF ferritin reduced in RLS
- MRI shows reduced iron in substantia nigra
- Serum ferritin <75-100 suggests deficiency relevant to RLS
\`\`\`

**Secondary RLS Causes:**
| Cause | Mechanism |
|-------|-----------|
| Iron deficiency anemia | ↓ Iron transport to brain |
| End-stage renal disease | Uremia affects iron metabolism, DA function |
| Pregnancy | ↓ Iron stores, hormonal |
| Neuropathy | Peripheral afferent input abnormalities |
| Medications (antidepressants, antihistamines) | Serotonergic, histaminergic effects on DA |

### Genetics

**Heritability:**
- 40-60% of patients have first-degree relative with RLS
- Early-onset RLS more likely familial
- Autosomal dominant pattern observed

**Associated Loci (GWAS):**
- MEIS1 (strongest association)
- BTBD9, MAP2K5, PTPRD
- MEIS1 involved in iron homeostasis and neuronal development

## Diagnosis

### IRLSSG Diagnostic Criteria

**All five essential criteria required:**
1. Urge to move legs, usually with uncomfortable sensations
2. Urge begins or worsens during rest/inactivity
3. Urge is partially or totally relieved by movement
4. Urge is worse in evening/night OR occurs only in evening/night
5. Features not solely accounted for by another condition

**Supportive Criteria:**
- Family history of RLS
- Response to dopaminergic therapy
- Presence of PLMS

### Differential Diagnosis

| Condition | Distinguishing Features |
|-----------|------------------------|
| Leg cramps | Painful muscle contraction, visible/palpable |
| Positional discomfort | Related to position, no urge to move |
| Akathisia | Inner restlessness, not leg-specific, drug-related |
| Peripheral neuropathy | Numbness, burning, doesn't require movement |
| Arthritis | Joint pain, not circadian pattern |
| Venous insufficiency | Heaviness, edema, relieved by elevation |

### Workup

**Laboratory:**
- Serum ferritin (target >75-100 ng/mL)
- Iron, TIBC, transferrin saturation
- CBC
- BMP (for renal function)
- Consider B12, folate, glucose, TSH if indicated

**Sleep Study (PSG):**
- Not required for RLS diagnosis
- Useful to diagnose PLMD (when no RLS symptoms)
- Quantify PLMS index (PLM/hour of sleep)
- PLMS index >15 is abnormal

## Treatment

### Iron Repletion

**Indications:**
- Ferritin <75 ng/mL: Definitely treat
- Ferritin 75-100 ng/mL: Consider treatment
- Ferritin >100 ng/mL: Unlikely to benefit from iron

**Oral Iron:**
- Ferrous sulfate 325 mg + vitamin C on empty stomach
- Alternate day dosing may improve absorption
- Recheck ferritin in 3-6 months
- GI side effects limit adherence

**IV Iron:**
- Consider if ferritin <100 and:
  - Oral iron not tolerated
  - Malabsorption
  - Inadequate response to oral
- Iron sucrose, ferumoxytol, ferric carboxymaltose
- Can produce rapid improvement

### Pharmacotherapy

**Alpha-2-Delta Ligands (First-Line per 2016 IRLSSG):**
\`\`\`
Gabapentin enacarbil (Horizant):
- Prodrug of gabapentin
- FDA-approved for RLS
- 600 mg once daily in evening
- Advantage: Consistent absorption

Gabapentin:
- 300-1800 mg in evening
- Variable absorption
- Off-label for RLS

Pregabalin:
- 75-300 mg in evening
- Also helps sleep, anxiety
- Off-label for RLS
\`\`\`

**Dopamine Agonists:**
\`\`\`
Pramipexole: 0.125-0.5 mg
Ropinirole: 0.25-4 mg
Rotigotine patch: 1-3 mg/24h

Efficacy: Very effective initially
Concern: AUGMENTATION

Augmentation:
- Earlier symptom onset
- Spread to arms, trunk
- Shorter duration of benefit
- Increased intensity
- Occurs in up to 50% with long-term use
\`\`\`

**Augmentation Management:**
1. Reduce/discontinue dopamine agonist (gradually)
2. Ensure iron replete (ferritin >75-100)
3. Switch to alpha-2-delta ligand or opioid
4. Expect worsening for 1-2 weeks during transition

**Opioids (Refractory):**
- Low-dose oxycodone, methadone, tramadol
- Reserved for severe, refractory RLS
- Requires careful monitoring`,
      keyTerms: [
        { term: 'IRLSSG', definition: 'International Restless Legs Syndrome Study Group; develops diagnostic and treatment guidelines' },
        { term: 'augmentation', definition: 'Paradoxical worsening of RLS with dopamine agonist use: earlier onset, greater intensity, spread to other body parts' },
        { term: 'MEIS1', definition: 'Gene most strongly associated with RLS in GWAS; involved in iron homeostasis' },
        { term: 'A11 neurons', definition: 'Dopaminergic neurons in diencephalon that project to spinal cord; implicated in RLS' },
        { term: 'gabapentin enacarbil', definition: 'Prodrug of gabapentin with improved bioavailability; FDA-approved for RLS' },
      ],
      clinicalNotes: 'Key clinical points: 1) Always check ferritin - target >75-100 ng/mL. IV iron can provide rapid relief. 2) Alpha-2-delta ligands are now first-line (over dopamine agonists) due to augmentation risk. 3) Many medications can worsen RLS: antidepressants (especially SSRIs, SNRIs), antihistamines, antipsychotics, metoclopramide. 4) Pregnancy-related RLS usually resolves postpartum. 5) If augmentation occurs, don\'t increase the dopamine agonist - switch classes.',
    },
    4: {
      level: 4,
      summary: 'RLS pathophysiology involves interplay between dopaminergic dysfunction, brain iron deficiency, and genetic susceptibility. Treatment has evolved to prioritize alpha-2-delta ligands over dopamine agonists due to augmentation risk. Phenotypic heterogeneity and genetic markers may guide personalized treatment approaches.',
      explanation: `## Advanced Pathophysiology

### Iron-Dopamine Interaction

\`\`\`
Brain Iron Deficiency Model:

↓ Brain iron (especially in SN)
↓
↓ Tyrosine hydroxylase activity (requires iron)
↓
↓ Dopamine synthesis (regional)
↓
Compensatory D2 receptor changes
↓
Circadian pattern: DA function lowest in evening
↓
RLS symptoms (worse at night)
\`\`\`

**Imaging Evidence:**
- MRI (R2*): Reduced iron in substantia nigra, thalamus
- PET/SPECT: Variable findings for dopamine system
- Autopsy: Reduced ferritin, increased transferrin receptor in SN

### A11 Diencephalic-Spinal Pathway

\`\`\`
A11 dopaminergic neurons:
- Located in posterior hypothalamus/thalamus
- Only CNS dopamine neurons projecting to spinal cord
- Modulate spinal sensorimotor function
- Dysfunction may explain both sensory and motor features

Animal models:
- A11 lesions produce RLS-like phenotype
- Iron deficiency models show similar changes
\`\`\`

### Genetic Architecture

**GWAS Loci:**
| Gene | Odds Ratio | Proposed Function |
|------|------------|-------------------|
| MEIS1 | 1.9 | Transcription factor; iron homeostasis, neuronal development |
| BTBD9 | 1.5 | Iron metabolism; associated with PLMS, ferritin |
| MAP2K5 | 1.4 | Cell signaling |
| PTPRD | 1.3 | Neuronal development, synapse formation |
| TOX3 | 1.2 | Transcriptional regulation |
| SKOR1 | 1.2 | Neuronal specification |

**Clinical Implications:**
- Genetic risk score may predict severity
- BTBD9 variants associated with PLMS even without RLS symptoms
- Potential for pharmacogenomic treatment matching

### PLMS Physiology

**Characteristics:**
\`\`\`
EMG pattern:
- Repetitive dorsiflexion of ankle ± knee/hip flexion
- Duration: 0.5-10 seconds per movement
- Interval: 5-90 seconds (typically 20-40 sec)
- Occur in clusters, primarily early NREM

Associated features:
- Heart rate increase with movements
- BP elevation (often precedes movement)
- Cortical arousal (may or may not follow)
- Sympathetic activation

Clinical significance:
- PLMS index >15/hour is abnormal
- PLM-arousal index may be more clinically relevant
- Link to hypertension proposed but debated
\`\`\`

## Augmentation: Deep Dive

### Diagnostic Criteria (IRLSSG)

**Required:**
- RLS symptoms worsen despite stable/increased dopamine agonist dose

**Plus at least one:**
1. Earlier onset by ≥4 hours
2. Shorter latency with rest
3. Spread to other body parts (arms)
4. Greater intensity
5. Shorter duration of benefit

### Risk Factors for Augmentation

| Factor | Risk |
|--------|------|
| Longer duration of DA agonist use | ↑↑ |
| Higher doses | ↑↑ |
| Low ferritin | ↑↑ |
| Earlier age of RLS onset | ↑ |
| Frequency of RLS symptoms | ↑ |
| Levodopa (highest risk) | ↑↑↑ |

### Mechanism Hypothesis

\`\`\`
Proposed mechanism:
D2/D3 receptor overstimulation
↓
Receptor downregulation
↓
Relative dopamine deficiency (in setting of exogenous agonist)
↓
Requires increasing doses → worsening spiral

Why dopamine agonists cause augmentation:
- Long-acting stimulation (unlike pulsatile physiologic)
- High D3 affinity (D3 receptors downregulate)
- May worsen underlying iron deficiency
\`\`\`

## Treatment Protocol

### IRLSSG 2016 Guidelines Algorithm

\`\`\`
RLS Diagnosed (Meet criteria, exclude mimics)
│
├── Iron Status
│   ├── Ferritin <75: Oral or IV iron
│   └── Ferritin 75-100: Consider iron
│
├── Intermittent RLS (symptoms <2x/week)
│   ├── As-needed dopamine agonist or
│   ├── Low-potency opioid or
│   └── Benzodiazepine or non-BZD hypnotic
│
├── Chronic-Persistent RLS
│   ├── First-line: Alpha-2-delta ligand (gabapentin, pregabalin)
│   ├── If inadequate: Add low-dose dopamine agonist
│   └── If intolerant/ineffective: Low-dose opioid
│
└── Refractory RLS
    ├── IV iron trial (even if ferritin >100)
    ├── Combination therapy
    └── Opioid (tramadol, oxycodone, methadone)
\`\`\`

### Medication Specifics

**Alpha-2-Delta Ligands:**
\`\`\`
Mechanism:
- Bind alpha-2-delta subunit of voltage-gated calcium channels
- Reduce excitatory neurotransmitter release
- Analgesic, anxiolytic, sleep-promoting effects

Advantages over DA agonists:
- No augmentation
- May improve sleep quality
- Helps comorbid pain, anxiety

Dosing:
- Gabapentin: 300-1800 mg, 1-2 hours before bed
- Pregabalin: 75-300 mg before bed
- Gabapentin enacarbil: 600 mg at 5 PM (FDA-approved dose)
\`\`\`

**Dopamine Agonist Prescribing (if used):**
\`\`\`
If choosing DA agonist:
- Use lowest effective dose
- Ensure iron replete first
- Counsel about augmentation
- Monitor for impulse control disorders
- Consider rotigotine patch (more stable levels)

Early augmentation signs (ask at each visit):
- Symptoms starting earlier in day?
- Symptoms spreading to arms?
- Need to increase dose?
→ If yes, consider transition off DA agonist
\`\`\`

### Opioid Use in RLS

\`\`\`
Evidence:
- RCT: Extended-release oxycodone-naloxone effective
- Methadone: Long-acting, may be helpful
- Low abuse potential in RLS population (pain-related indication)

Considerations:
- Reserve for refractory cases
- Sleep study to rule out SDB (opioids worsen CSA)
- Start low, titrate slowly
- Avoid in history of substance use disorder
- DEA scheduling and monitoring requirements
\`\`\`

### PLMD Treatment

\`\`\`
When to treat PLMD (without RLS):
- Significant sleep disruption
- Daytime consequences
- Rule out other sleep disorders

Treatment:
- Similar to RLS
- Alpha-2-delta ligands
- Dopamine agonists (with caution)
- Benzodiazepines (clonazepam) if mild
- Iron if deficient
\`\`\``,
      keyTerms: [
        { term: 'PLM-arousal index', definition: 'Number of periodic limb movements associated with EEG arousal per hour; may be more clinically relevant than total PLMS' },
        { term: 'impulse control disorder', definition: 'Behavioral side effect of dopamine agonists including pathological gambling, hypersexuality, compulsive shopping' },
        { term: 'D3 receptor', definition: 'Dopamine receptor subtype with high affinity for dopamine agonists; downregulation may contribute to augmentation' },
        { term: 'rotigotine', definition: 'Dopamine agonist available as transdermal patch; provides stable drug levels' },
      ],
      clinicalNotes: 'Practical pearls: 1) Augmentation prevention is key: use lowest DA agonist dose, maintain ferritin >75-100, prefer alpha-2-delta first-line. 2) If augmentation occurs, taper DA agonist over 2-4 weeks while adding alpha-2-delta ligand or opioid. 3) Screen for impulse control disorders with DA agonists. 4) PLMS without symptoms (found incidentally on PSG) usually doesn\'t require treatment. 5) Pregnancy: Iron most important; avoid medications if possible (category C).',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of RLS integrates neuroimaging, genetic, and pharmacological evidence pointing to dopaminergic-iron interactions. Phenotypic heterogeneity and genetic risk stratification may enable precision medicine approaches. The evolving treatment paradigm emphasizes augmentation avoidance and individualized therapy based on symptom characteristics and biomarkers.',
      explanation: `## Advanced Concepts and Research Frontiers

### Neuroimaging Findings

**Structural MRI:**
\`\`\`
Iron-sensitive sequences (R2*, SWI):
- Reduced iron in substantia nigra (primary finding)
- Also thalamus, red nucleus, pallidum
- Correlates with symptom severity in some studies
- Not reliable for individual diagnosis

Morphometry:
- Variable findings (increased/decreased volumes)
- White matter changes in some studies
- Unclear specificity for RLS
\`\`\`

**Functional MRI:**
\`\`\`
Task-based fMRI during symptoms:
- Activation of sensorimotor cortex, cerebellum, thalamus
- Deactivation of limbic regions

Resting-state fMRI:
- Altered connectivity in sensorimotor networks
- Thalamic connectivity changes
- May normalize with treatment
\`\`\`

**PET/SPECT:**
\`\`\`
Dopamine transporter (DAT):
- Inconsistent findings (normal, increased, decreased)
- May reflect compensatory mechanisms

D2 receptor availability:
- Generally reduced or normal
- Not sufficient for diagnosis

Opioid receptor imaging:
- Reduced binding in some regions (thalamus)
- Supports opioid system involvement
\`\`\`

### Genetic-Phenotype Correlations

**MEIS1 Studies:**
\`\`\`
Functional analysis:
- Transcription factor for neuronal development
- Regulates iron homeostasis genes
- Expression in substantia nigra, cortex

Clinical correlations:
- MEIS1 risk variants associated with:
  - Earlier age of onset
  - Family history
  - Response to certain medications (under investigation)
\`\`\`

**Genetic Risk Score:**
\`\`\`
Combining risk loci:
- Higher genetic risk → Earlier onset
- Higher genetic risk → More severe PLMS
- May predict treatment response (research stage)
\`\`\`

### Phenotypic Subtypes

**Proposed Classifications:**
| Phenotype | Characteristics | Implications |
|-----------|-----------------|--------------|
| Early-onset (<45 years) | Strong family history, slowly progressive, genetic | May respond better to dopaminergics |
| Late-onset (≥45 years) | Often secondary causes, more rapid progression | Rule out comorbidities, iron deficiency |
| Intermittent | Symptoms <2x/week | PRN treatment, identify triggers |
| Chronic-persistent | Daily or near-daily | Chronic medication, augmentation prevention |
| Refractory | Failed standard therapies | Combination therapy, opioids, IV iron |

### Comorbidity Integration

**RLS and Cardiovascular Disease:**
\`\`\`
Proposed mechanisms:
- PLMS → Sympathetic surges → Hypertension
- Sleep fragmentation → Inflammation
- Shared genetic susceptibility

Evidence:
- Epidemiologic association with CVD, hypertension
- PLMS associated with BP variability
- Causality uncertain

Clinical approach:
- Screen for CVD risk factors
- Address PLMS if significant
- Consider this in risk assessment
\`\`\`

**RLS and Depression/Anxiety:**
\`\`\`
Bidirectional relationship:
- RLS → Sleep disruption → Depression/anxiety
- Shared dopaminergic pathways
- Some antidepressants worsen RLS

Treatment implications:
- Alpha-2-delta ligands may help both
- Avoid serotonergic antidepressants if possible
- Bupropion is RLS-neutral/positive
- Trazodone may help sleep without worsening
\`\`\`

### Emerging Therapeutics

**Dipyridamole:**
\`\`\`
Mechanism:
- Adenosine reuptake inhibitor
- Enhances adenosine signaling
- May modulate dopamine through A2A receptors

Evidence:
- Small open-label studies promising
- May help refractory cases
- Further study needed
\`\`\`

**Intravenous Iron (Expanded Use):**
\`\`\`
Iron carboxymaltose / ferumoxytol:
- Single-dose infusion (1000 mg)
- Rapid ferritin increase
- May benefit even with ferritin 75-100 in some patients

Research direction:
- Repeat infusions for maintenance
- Predictors of response
- Target ferritin levels (>100? >200?)
\`\`\`

**Perampanel:**
\`\`\`
Mechanism: AMPA receptor antagonist
Status: Under investigation for RLS
Rationale: Modulates glutamatergic excitability
\`\`\`

### Management Algorithm: Refractory RLS

\`\`\`
Refractory RLS (failed standard therapy)
│
├── Reassess Diagnosis
│   ├── Confirm IRLSSG criteria met
│   ├── Exclude mimics
│   └── Assess for augmentation (if on DA agonist)
│
├── Optimize Iron
│   ├── IV iron even if ferritin 75-100
│   ├── Target ferritin >100-200
│   └── Repeat in 3 months if needed
│
├── Medication Adjustment
│   ├── If augmented: Taper DA agonist
│   ├── Switch to alpha-2-delta ligand
│   ├── Add or switch to opioid
│   └── Combination therapy
│
├── Address Comorbidities
│   ├── Review all medications for culprits
│   ├── Treat depression/anxiety appropriately
│   └── Manage chronic pain
│
└── Specialty Consultation
    ├── Sleep medicine
    ├── Neurology (movement disorders)
    └── Psychiatry (if comorbid depression)
\`\`\`

### PLMS-Specific Considerations

**PLMS Without RLS:**
\`\`\`
When discovered incidentally on PSG:
1. PLMS index >15 but asymptomatic: Usually observe
2. PLMS with arousals and daytime symptoms: May treat
3. PLMS with cardiovascular disease: Consider treatment (limited evidence)

Cardiovascular hypothesis:
- Each PLM associated with sympathetic surge
- Repeated surges may contribute to HTN
- Treatment may reduce CV risk (theoretical, unproven)
\`\`\`

**PLMS and Cardiovascular Outcomes:**
\`\`\`
Research findings:
- Association with incident HTN (some studies)
- Association with heart failure (MrOS study)
- PLM-related heart rate changes predict risk

Clinical uncertainty:
- Association vs. causation unclear
- No RCTs of PLMS treatment on CV outcomes
- Current approach: Individualized decision
\`\`\`

### Pregnancy and Pediatric Considerations

**Pregnancy:**
\`\`\`
Epidemiology:
- Up to 25% develop RLS in pregnancy
- Peak in third trimester
- Usually resolves postpartum

Management:
- Iron status critical (check ferritin)
- Non-pharmacological measures first
- Medications largely category C
- Iron supplementation if deficient (beneficial anyway)
- Severe cases: Consider gabapentin (discuss risks)
\`\`\`

**Pediatric RLS:**
\`\`\`
Diagnostic challenges:
- Children may not articulate sensations
- "Growing pains" overlap
- Family history helpful

Treatment:
- Iron is first-line
- Non-pharmacological measures
- Medications: Very limited evidence
- Alpha-2-delta ligands preferred over DA agonists
\`\`\``,
      keyTerms: [
        { term: 'A2A receptor', definition: 'Adenosine receptor subtype that modulates dopamine signaling; target for emerging RLS therapies' },
        { term: 'SWI', definition: 'Susceptibility-weighted imaging; MRI technique sensitive to iron content' },
        { term: 'perampanel', definition: 'AMPA receptor antagonist under investigation for RLS' },
        { term: 'iron carboxymaltose', definition: 'Intravenous iron formulation allowing single-dose infusion of 1000 mg' },
        { term: 'genetic risk score', definition: 'Composite of multiple genetic variants to estimate disease risk or severity' },
      ],
      clinicalNotes: 'Advanced clinical pearls: 1) IV iron can benefit patients with ferritin 75-100 who don\'t respond to oral iron; consider empiric trial in refractory cases. 2) Genetic testing not yet clinical but research suggests phenotype-specific treatment responses. 3) For pregnant patients, iron repletion is safe and important. 4) PLMS cardiovascular implications remain uncertain; treat for symptoms, not just index. 5) Bupropion is a good antidepressant option in RLS (dopaminergic, doesn\'t worsen RLS). 6) Dipyridamole is an emerging option for refractory cases.',
    },
  },

  media: [
    {
      id: 'rls-diagnostic-criteria',
      type: 'diagram',
      filename: 'rls-diagnostic-criteria.svg',
      title: 'RLS Diagnostic Criteria',
      description: 'IRLSSG essential diagnostic criteria for restless legs syndrome',
    },
    {
      id: 'plms-psg',
      type: 'diagram',
      filename: 'plms-psg-example.svg',
      title: 'Periodic Limb Movements on PSG',
      description: 'EMG tracing showing characteristic periodic limb movements during sleep',
    },
    {
      id: 'rls-treatment-algorithm',
      type: 'diagram',
      filename: 'rls-treatment-algorithm.svg',
      title: 'RLS Treatment Algorithm',
      description: 'Flowchart for treatment selection based on symptom severity and iron status',
    },
  ],

  citations: [
    {
      id: 'irlssg-guidelines',
      type: 'article',
      title: 'An update on the management of restless legs syndrome',
      authors: ['Winkelman, J.W.', 'Armstrong, M.J.', 'Allen, R.P.'],
      source: 'JAMA',
      chapter: '316(24):2608-2617',
    },
    {
      id: 'allen-iron-rls',
      type: 'article',
      title: 'Evidence-based and consensus clinical practice guidelines for the iron treatment of restless legs syndrome/Willis-Ekbom disease',
      authors: ['Allen, R.P.', 'Picchietti, D.L.', 'Auerbach, M.'],
      source: 'Sleep Medicine',
      chapter: '41:27-44',
    },
    {
      id: 'earley-augmentation',
      type: 'article',
      title: 'Augmentation of restless legs syndrome with dopaminergic medications',
      authors: ['Garcia-Borreguero, D.', 'Silber, M.H.', 'Winkelman, J.W.'],
      source: 'Sleep Medicine',
      chapter: '16(4):495-504',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-sleep', targetType: 'process', relationship: 'related', label: 'Sleep Physiology' },
    { targetId: 'diagnostic-sleep-studies', targetType: 'topic', relationship: 'related', label: 'Sleep Studies' },
    { targetId: 'condition-iron-deficiency', targetType: 'condition', relationship: 'see-also', label: 'Iron Deficiency' },
    { targetId: 'condition-parkinsons', targetType: 'condition', relationship: 'see-also', label: 'Parkinson\'s Disease' },
  ],

  tags: {
    systems: ['nervous', 'musculoskeletal'],
    topics: ['sleep medicine', 'neurology', 'movement disorders'],
    keywords: ['restless legs syndrome', 'RLS', 'PLMS', 'periodic limb movements', 'Willis-Ekbom', 'iron deficiency', 'augmentation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'psychiatry'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default restlessLegsSyndrome;
