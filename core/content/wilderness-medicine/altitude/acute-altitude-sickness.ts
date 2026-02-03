/**
 * Acute Mountain Sickness (AMS) - Comprehensive Educational Content
 *
 * Detailed coverage of the most common form of altitude illness.
 *
 * IMPORTANT: This content is for educational purposes only. If symptoms
 * worsen or do not improve, descend immediately.
 */

import { EducationalContent } from '../../types';

export const acuteAltitudeSickness: EducationalContent = {
  id: 'wilderness-acute-mountain-sickness',
  type: 'condition',
  name: 'Acute Mountain Sickness',
  alternateNames: ['AMS', 'Mild Altitude Sickness', 'Soroche'],

  levels: {
    1: {
      level: 1,
      summary: 'Acute mountain sickness is like a bad hangover that happens when you go to the mountains too fast. You get a headache and feel sick, but it usually gets better if you rest or go back down.',
      explanation: `## What Is Acute Mountain Sickness?

Acute mountain sickness (AMS) is the mildest form of altitude sickness. It happens because there's less oxygen in the air when you're high up in the mountains.

## How Do You Know If You Have It?

The most important sign is a **headache** plus at least one of these:
- Feeling sick to your stomach
- Feeling very tired
- Feeling dizzy
- Having trouble sleeping

## When Does It Happen?

- Usually starts 6-12 hours after you arrive at high altitude
- Most common above 8,000 feet (about 2,500 meters)
- Gets worse if you keep going higher

## What Should You Do?

1. **Stop climbing** - Stay at the same altitude
2. **Rest** - Your body needs time to adjust
3. **Drink water** - But don't overdo it
4. **Take medicine** - Ibuprofen can help your headache
5. **Go down** if you don't feel better in a day

## The Good News

- Most people feel better in 1-3 days
- Your body learns to adjust
- You can usually continue your trip after resting

## Warning Signs to Watch For

If you have any of these, you need to go down RIGHT AWAY:
- Can't walk in a straight line
- Acting confused or strange
- Very hard to breathe even when resting
- Coughing up pink or frothy stuff`,
      keyTerms: [
        { term: 'acute', definition: 'Something that happens suddenly and is usually short-term' },
        { term: 'AMS', definition: 'Short for Acute Mountain Sickness' },
        { term: 'altitude', definition: 'How high up you are above sea level' },
      ],
      analogies: [
        'AMS is like jet lag for your body - it just needs time to catch up with where you are.',
        'Your headache from AMS is your brain\'s way of saying "Hey, I need more oxygen up here!"',
      ],
      examples: [
        'A hiker drives from the beach to a ski resort at 9,000 feet and wakes up with a headache and nausea the next morning.',
        'Someone hiking the Colorado 14ers gets a pounding headache after climbing from 10,000 to 14,000 feet in one day.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acute Mountain Sickness (AMS) is a syndrome of headache plus nonspecific symptoms occurring 6-12 hours after ascent to altitudes above 8,000 feet. It affects 25-50% of people with rapid ascent and resolves with acclimatization or descent.',
      explanation: `## Definition and Diagnosis

AMS requires:
1. Recent gain in altitude
2. **Headache** (required symptom)
3. Plus at least one of:
   - Gastrointestinal symptoms (nausea, vomiting, loss of appetite)
   - Fatigue or weakness
   - Dizziness or lightheadedness
   - Difficulty sleeping

## Lake Louise Score (Simplified)

Rate each symptom 0-3:
- 0 = None
- 1 = Mild
- 2 = Moderate
- 3 = Severe

**AMS = Headache + Total score of 3 or more**

## Who Gets AMS?

**Risk Factors:**
- Rapid ascent rate (>1,000 ft/day above 8,000 ft)
- Sleeping at high altitude (vs. day trips)
- Previous history of AMS
- Home altitude (sea level residents at higher risk)
- Individual susceptibility

**Not Risk Factors:**
- Physical fitness (doesn't protect you!)
- Age (if anything, older adults may be less susceptible)
- Gender (equal risk)

## Timeline

| Time After Arrival | What Happens |
|-------------------|--------------|
| 0-6 hours | Usually feel fine |
| 6-12 hours | Symptoms begin |
| 12-24 hours | Symptoms peak |
| 24-72 hours | Improvement if you stay at altitude |
| 3-5 days | Full acclimatization for moderate altitudes |

## Treatment Approach

### Mild AMS (Score 3-4)
- Stop ascending
- Rest at current altitude
- Ibuprofen or acetaminophen for headache
- Ondansetron or ginger for nausea
- Adequate hydration (not excessive)
- Usually can resume ascent after 24-48 hours of symptom-free time

### Moderate AMS (Score 5-6)
- Same as mild, plus:
- Consider acetazolamide 250mg twice daily (speeds acclimatization)
- Low threshold for descent if no improvement in 24 hours

### Severe AMS (Score 7+)
- Prepare for descent
- Monitor closely for progression to HACE/HAPE
- Acetazolamide + consider dexamethasone

## Medications

**Acetazolamide (Diamox)**
- Speeds acclimatization
- Dose: 125-250mg twice daily
- Side effects: Tingling in fingers/toes, carbonated drinks taste flat, frequent urination
- Start 1 day before ascent for prevention

**Dexamethasone**
- Reduces brain swelling
- Used for severe AMS or HACE
- Does not help acclimatization
- Can mask worsening symptoms

## Prevention

1. **Ascend gradually:** Above 8,000 ft, increase sleeping altitude by no more than 1,000 ft per day
2. **Climb high, sleep low:** It's okay to climb higher during the day if you return to sleep lower
3. **Take rest days:** Every 3,000 ft of elevation gain
4. **Stay hydrated:** But don't over-hydrate (can cause dangerous low sodium)
5. **Avoid alcohol:** Especially first 48 hours
6. **Consider medication:** Acetazolamide for high-risk situations

## When to Worry

AMS can progress to dangerous conditions:
- **HACE:** Confusion, can't walk straight
- **HAPE:** Severe breathlessness, coughing

**Any signs of HACE or HAPE = IMMEDIATE DESCENT**`,
      keyTerms: [
        { term: 'Lake Louise Score', definition: 'A standardized system to diagnose and rate the severity of AMS based on symptom scores' },
        { term: 'acclimatization', definition: 'The process by which the body adjusts to reduced oxygen at altitude' },
        { term: 'acetazolamide', definition: 'A medication that helps the body acclimatize faster by changing blood chemistry' },
      ],
    },
    3: {
      level: 3,
      summary: 'AMS is a clinical syndrome characterized by nonspecific symptoms following altitude gain, diagnosed using Lake Louise criteria. Pathophysiology involves relative hypoventilation, mild cerebral edema, and fluid retention. Management includes symptomatic treatment and pharmacological aids to acclimatization, with descent reserved for refractory or severe cases.',
      explanation: `## Pathophysiology

### Central Hypothesis
AMS results from relative hypoventilation compared to the ideal ventilatory response to hypoxia.

### Contributing Mechanisms

1. **Hypoxic Ventilatory Response (HVR)**
   - Individual variation in chemoreceptor sensitivity
   - Blunted HVR = inadequate hyperventilation = more hypoxemia = higher AMS risk
   - Genetic component to HVR variability

2. **Cerebral Blood Flow Changes**
   - Hypoxia causes cerebral vasodilation
   - Increased CBF → increased cerebral blood volume
   - Mild vasogenic edema (demonstrable on MRI)
   - Elevated intracranial pressure likely causes headache

3. **Fluid Retention**
   - ADH elevation with hypoxia
   - Aldosterone effects
   - Sodium and water retention
   - Contributes to tissue edema

4. **Oxidative Stress and Inflammation**
   - Free radical generation
   - Inflammatory mediator release
   - May contribute to BBB permeability

## Lake Louise Criteria (2018 Revision)

### Scoring System

| Symptom | 0 | 1 | 2 | 3 |
|---------|---|---|---|---|
| Headache | None | Mild | Moderate | Severe/incapacitating |
| GI symptoms | None | Poor appetite or nausea | Moderate nausea or vomiting | Severe nausea/vomiting |
| Fatigue/weakness | None | Mild | Moderate | Severe/incapacitating |
| Dizziness | None | Mild | Moderate | Severe/incapacitating |

**Diagnosis:**
- Must have recent altitude gain
- Must have headache
- Total score ≥3 (including headache point)

*Note: Sleep disturbance removed from 2018 criteria as it occurs universally at altitude*

## Differential Diagnosis

| Condition | Distinguishing Features |
|-----------|------------------------|
| Dehydration | Concentrated urine, dry mucous membranes, tachycardia |
| Migraine | History of migraines, aura, photophobia |
| Viral illness | Fever, prodrome, sick contacts |
| Carbon monoxide | Enclosed space, stove use, multiple people affected |
| Intracranial pathology | Focal neurological signs, fever, meningismus |
| Hangover | Alcohol consumption, early morning, improving through day |

## Pharmacological Management

### Acetazolamide

**Mechanism:**
- Carbonic anhydrase inhibitor
- Causes bicarbonaturia → metabolic acidosis
- Acidosis stimulates ventilation (mimics acclimatization effect)
- Diuretic effect may reduce fluid retention

**Evidence:**
- Prevention: RR 0.47 for AMS (NNT ~4)
- Treatment: Less robust evidence, likely effective

**Dosing:**
- Prevention: 125-250mg PO BID, starting 24h before ascent
- Treatment: 250mg PO BID

**Contraindications:**
- Sulfonamide allergy (cross-reactivity rare but consider)
- Severe hepatic disease
- Caution with renal disease

### Dexamethasone

**Mechanism:**
- Reduces vasogenic edema
- Stabilizes blood-brain barrier
- Anti-inflammatory effects
- Does NOT facilitate acclimatization

**Indications:**
- Severe AMS (as bridge to descent)
- When acetazolamide contraindicated
- HACE treatment

**Dosing:**
- Prevention: 2-4mg q6-12h
- Treatment: 4mg q6h

**Risks:**
- Masks symptoms without treating hypoxia
- Hyperglycemia, insomnia, mood changes
- Rebound if stopped without descent

### Ibuprofen

**Evidence:**
- Meta-analysis shows effectiveness for AMS prevention
- May work via central prostaglandin inhibition

**Dosing:**
- 600mg PO TID (starting before ascent)

## Oxygen Supplementation

- Improves symptoms rapidly
- 1-2 L/min via nasal cannula often sufficient
- Useful overnight to improve sleep
- Not a substitute for descent if worsening

## Monitoring and Decision Points

**Continue at altitude if:**
- Symptoms mild and stable
- Responding to treatment
- No signs of HACE or HAPE

**Descend if:**
- Symptoms worsening despite treatment
- Moderate symptoms not improving in 24 hours
- Any confusion or ataxia (HACE)
- Any respiratory distress at rest (HAPE)

## Prevention Protocols

### Gradual Ascent (Primary Prevention)
- Above 3000m: sleeping altitude increase ≤500m/day
- Rest day every 1000m elevation gain
- "Climb high, sleep low" - day excursions okay

### Staging
- For very high altitude targets, spend 2-3 nights at intermediate altitude
- Example: Fly to 2500m, spend 2 nights, then proceed

### Pharmacological Prevention
- Acetazolamide: High-risk individuals or rapid ascent required
- Dexamethasone: Second-line, doesn't aid acclimatization`,
      keyTerms: [
        { term: 'hypoxic ventilatory response', definition: 'The increase in breathing triggered by low oxygen; individual variation affects AMS susceptibility' },
        { term: 'vasogenic edema', definition: 'Brain swelling due to increased permeability of blood vessels' },
        { term: 'carbonic anhydrase', definition: 'Enzyme inhibited by acetazolamide, leading to metabolic acidosis and increased ventilation' },
      ],
      clinicalNotes: 'The 2018 Lake Louise criteria removed sleep disturbance since periodic breathing at altitude is nearly universal and not specific to AMS. Ibuprofen is emerging as a viable alternative for AMS prevention when acetazolamide is contraindicated.',
    },
    4: {
      level: 4,
      summary: 'AMS pathophysiology involves complex interactions between hypoxic ventilatory response variability, cerebral hemodynamic changes, fluid and electrolyte shifts, and inflammatory cascades. Individual susceptibility has genetic determinants. Evidence-based pharmacological interventions target specific mechanisms, though graded ascent remains the cornerstone of prevention.',
      explanation: `## Advanced Pathophysiology

### Cerebrovascular Dynamics

**Hypoxia-CBF Relationship:**
- Hypoxia → cerebral vasodilation (via adenosine, NO)
- Hypocapnia (from hyperventilation) → cerebral vasoconstriction
- Net effect varies by HVR:
  - High HVR: more hypocapnia, relatively protected
  - Low HVR: less hypocapnia, more vasodilation, more edema

**Autoregulation:**
- Cerebral autoregulation maintained initially
- Extreme altitude or severe hypoxia → loss of autoregulation
- Rising MAP transmitted to cerebral capillaries

### Edema Formation

**Vasogenic Component:**
- Increased hydrostatic pressure in cerebral capillaries
- VEGF upregulation → increased vascular permeability
- Aquaporin dysregulation
- Tight junction protein redistribution

**Cytotoxic Component:**
- Cellular ATP depletion
- Na+/K+-ATPase dysfunction
- Intracellular sodium and water accumulation
- Less prominent in AMS, more significant in HACE

**MRI Evidence:**
- T2 signal changes in white matter in AMS subjects
- Changes correlate with symptom severity
- Reversible with descent and acclimatization

### Fluid Balance Alterations

**Hormonal Changes:**
- ADH (vasopressin): Elevated in AMS
- Aldosterone: Variable, may be elevated
- Atrial natriuretic peptide: May be relatively suppressed
- Net effect: Sodium and water retention

**Renin-Angiotensin-Aldosterone System:**
- Hypoxia activates RAAS
- Angiotensin II: Vasoconstrictor and pro-inflammatory
- Mineralocorticoid receptor activation → sodium retention

### Inflammatory and Oxidative Mechanisms

**Cytokine Profile:**
- IL-6, IL-1β elevated in AMS
- TNF-α controversial
- May reflect systemic stress response

**Oxidative Stress:**
- Mitochondrial ROS production increases with hypoxia
- Antioxidant depletion at altitude
- Lipid peroxidation products elevated

**Nitric Oxide:**
- Exhaled NO lower in AMS-susceptible individuals
- Decreased NO bioavailability may impair cerebral vascular regulation

## Genetic Susceptibility

### HIF Pathway Polymorphisms

| Gene | Variant Effect |
|------|---------------|
| EPAS1 (HIF-2α) | Tibetan variant → adapted phenotype |
| EGLN1 (PHD2) | Variants affect oxygen sensing |
| HIF-1α | Polymorphisms affect transcriptional response |

### Other Candidate Genes

- **ACE I/D polymorphism:** Controversial association with altitude performance
- **VEGF polymorphisms:** May affect vascular permeability
- **eNOS variants:** Affect NO production

### Heritability Studies

- Twin studies suggest significant heritability of AMS susceptibility
- Likely polygenic with environmental interaction
- Population-level adaptations (Tibetan, Andean, Ethiopian) confirm genetic component

## Pharmacological Mechanisms: Deep Dive

### Acetazolamide

**Primary Mechanism:**
\`\`\`
Carbonic anhydrase inhibition
     ↓
HCO3- wasting in urine
     ↓
Metabolic acidosis
     ↓
Respiratory compensation (hyperventilation)
     ↓
Improved oxygenation
\`\`\`

**Secondary Effects:**
- Diuresis → may reduce fluid retention
- Direct effect on carotid body chemoreceptors (controversial)
- May reduce CSF production
- Sleep-related respiratory effects

**Pharmacokinetics:**
- Peak: 2-4 hours
- Half-life: 6-9 hours
- Renal excretion (reduce dose in renal impairment)

### Dexamethasone

**Mechanisms:**
1. Genomic: Glucocorticoid receptor activation → anti-inflammatory gene expression
2. Non-genomic: Rapid membrane-stabilizing effects
3. BBB stabilization: Reduced VEGF expression, tight junction preservation
4. Cerebral vasculature: May reduce cerebral blood volume

**Critical Limitation:**
- Does not address underlying hypoxemia
- Does not facilitate acclimatization
- Risk of rebound upon discontinuation

### Ibuprofen

**Proposed Mechanisms:**
- COX inhibition → reduced prostaglandin synthesis
- Prostaglandins implicated in cerebral vasodilation and pain
- May have central effects beyond peripheral analgesia
- Anti-inflammatory properties

**Evidence:**
- Meta-analysis (2012): OR 0.37 for AMS prevention
- 600mg TID appears effective
- Comparable to acetazolamide in some studies

## Advanced Diagnostics

### Biomarkers (Research Context)

| Biomarker | Association |
|-----------|-------------|
| BNP/NT-proBNP | Elevated in AMS, correlates with pulmonary pressure |
| Copeptin | Marker of AVP, elevated in AMS |
| S100B | BBB permeability marker, elevated in severe AMS |
| Asymmetric dimethylarginine (ADMA) | Elevated, inhibits NOS |

### Imaging

- **MRI:** White matter T2 changes, increased brain volume
- **CT:** Generally normal in AMS
- **Transcranial Doppler:** Increased cerebral blood flow velocity

## Complex Management Scenarios

### AMS in Remote Setting Without Descent Option

1. Strict rest
2. Supplemental O2 if available
3. Acetazolamide 250mg BID
4. Consider dexamethasone 4mg q6h
5. Portable hyperbaric chamber if available
6. Close monitoring for HACE/HAPE progression
7. Arrange evacuation at first opportunity

### AMS with Concurrent Illness

- Respiratory infection: Increases hypoxemia, lower threshold for descent
- Dehydration: Correct but avoid over-hydration
- Concurrent medications: Check for interactions with altitude drugs

### Recurrent AMS

- Consider acetazolamide prophylaxis for future ascents
- Very gradual ascent protocol
- Pre-acclimatization strategies (hypoxic tent sleeping)
- Rule out underlying cardiopulmonary disease`,
      keyTerms: [
        { term: 'hypercapnic ventilatory response', definition: 'Breathing increase triggered by elevated CO2; may partially compensate for blunted HVR' },
        { term: 'S100B', definition: 'Calcium-binding protein released with blood-brain barrier disruption' },
        { term: 'ADMA', definition: 'Asymmetric dimethylarginine, endogenous NOS inhibitor elevated at altitude' },
        { term: 'hypoxic preconditioning', definition: 'Controlled hypoxia exposure before altitude travel to induce adaptive responses' },
      ],
      clinicalNotes: 'Emerging data support ibuprofen as an alternative to acetazolamide for AMS prevention. The distinction between upper (AMS/HACE) and lower (HAPE) altitude illness pathophysiology has therapeutic implications. Individual HVR testing may eventually guide personalized prevention strategies.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of AMS integrates neuroimaging evidence of cerebral edema, molecular insights into hypoxia signaling, and population genetics of altitude adaptation. Research continues to refine diagnostic biomarkers, elucidate genotype-phenotype relationships in altitude susceptibility, and develop targeted therapeutic and preventive strategies. Future directions include personalized medicine approaches based on genetic and physiological profiling.',
      explanation: `## Neuroimaging Insights

### Structural MRI Findings

**IHAC Study and Follow-up Research:**
- Prospective studies with pre/post altitude MRI
- Quantitative volumetric analysis shows brain swelling in AMS subjects
- Preferential involvement of white matter
- Gray matter changes less pronounced

**Regional Specificity:**
- Corpus callosum particularly vulnerable (especially splenium)
- Periventricular white matter
- Occipital predominance in some studies

**Quantitative Measures:**
- Brain parenchymal fraction increases by 0.5-1.5% in AMS
- Correlates with symptom severity
- Reverses with descent over hours to days

### Advanced MRI Techniques

**Diffusion-Weighted Imaging:**
- ADC (apparent diffusion coefficient) values help distinguish vasogenic vs. cytotoxic edema
- In AMS: predominantly vasogenic (increased ADC in affected areas)
- In HACE: mixed pattern may emerge

**Perfusion MRI:**
- Arterial spin labeling shows increased CBF in AMS
- Regional heterogeneity of perfusion changes

**Susceptibility-Weighted Imaging:**
- Microhemorrhages reported in HACE
- Uncertain if present in isolated AMS

### Functional Implications

**Cognitive Studies:**
- Measurable declines in:
  - Short-term memory
  - Executive function
  - Processing speed
- Correlate with imaging changes
- Recovery parallels symptom resolution

## Molecular Mechanisms: Current Concepts

### Aquaporin Dysregulation

**AQP4 (Aquaporin-4):**
- Primary water channel in astrocyte endfeet
- Critical for brain water homeostasis
- Hypoxia affects AQP4 expression and localization
- AQP4 redistribution may impair edema clearance

**Therapeutic Implications:**
- AQP4 modulators under investigation
- May have role in HACE more than AMS

### Tight Junction Biology

**Claudins and Occludin:**
- Key tight junction proteins maintaining BBB
- Hypoxia-induced redistribution
- VEGF signaling affects claudin expression
- MMP activation degrades tight junction proteins

### Glymphatic System

**Emerging Concept:**
- Brain waste clearance system
- Depends on perivascular water flux via AQP4
- Impaired at altitude during sleep (due to periodic breathing)
- May contribute to morning symptom peak in AMS

## Population Genetics of Altitude Adaptation

### Tibetan High-Altitude Adaptation

**EPAS1 (HIF-2α):**
- Most strongly selected variant
- Derived from Denisovan introgression (~50,000 years ago)
- Results in blunted erythropoietic response to hypoxia
- Lower hemoglobin levels at altitude (avoids hyperviscosity)

**EGLN1 (PHD2):**
- Variants affect oxygen sensing
- Altered HIF regulation
- Lower Hb at altitude

**Phenotypic Outcomes:**
- Tibetans maintain saturation with normal Hb
- Enhanced metabolic efficiency
- Lower HACE/HAPE rates

### Andean Adaptation

**Different Strategy:**
- Elevated hemoglobin (polycythemia)
- Larger lung volumes
- Higher diffusing capacity
- Genetic variants in different pathways

**Chronic Mountain Sickness Risk:**
- Higher prevalence than Tibetans
- Excessive erythrocytosis can be pathological
- Suggests Tibetan solution more optimal

### Ethiopian Highlanders

**Unique Adaptations:**
- Maintain SaO2 at altitude without polycythemia
- Elevated exhaled NO
- Different genetic variants than Tibetan or Andean
- Independent evolutionary experiment

## Biomarker Development

### Current Research Candidates

| Biomarker | Physiology | Evidence |
|-----------|------------|----------|
| Copeptin | AVP surrogate | Elevated in AMS, correlates with severity |
| sST2 | IL-33 receptor | Elevated, reflects cardiopulmonary stress |
| Cystatin C | Renal function/filtration | Changes with altitude |
| NGAL | Tubular stress | May reflect renal hypoxia |
| microRNAs | Gene regulation | Circulating profiles differ in AMS |

### Challenges

- Distinguishing AMS-specific changes from altitude-induced changes in healthy individuals
- Need for rapid, point-of-care assays
- Validation across diverse populations and altitude profiles

## Therapeutic Frontiers

### Novel Pharmacological Targets

**HIF Pathway Modulation:**
- PHD inhibitors (roxadustat, vadadustat): Stabilize HIF, induce erythropoiesis
- Paradoxically, may help by mimicking acclimatization
- Clinical trials at altitude pending

**Nitric Oxide Donors:**
- Inhaled NO: Reduces pulmonary pressures (more relevant to HAPE)
- Systemic NO donors: Under investigation

**Antioxidants:**
- N-acetylcysteine, ascorbic acid: Mixed results
- Mitochondrial-targeted antioxidants: MitoQ under study

### Non-Pharmacological Interventions

**Hypoxic Preconditioning:**
- Intermittent hypoxic exposure before travel
- Induces molecular adaptations
- Various protocols (hypoxic tent, mask systems)
- Evidence supports benefit for AMS reduction

**Exercise Preconditioning:**
- Does not prevent AMS
- But fitness matters for performance at altitude

**Pre-acclimatization:**
- Spending time at intermediate altitude before target
- Most reliable method to reduce AMS
- Logistically challenging

## Decision Support: Risk Stratification

### Pre-Trip Assessment

**High Risk Features:**
1. Prior AMS/HACE/HAPE
2. Rapid ascent planned
3. Home altitude <1000m
4. Limited descent options (volcano summit, etc.)
5. Known blunted HVR (if tested)

**Prophylaxis Recommendations:**

| Risk Level | Recommendation |
|------------|----------------|
| Low (gradual ascent, moderate altitude) | None required |
| Moderate (faster ascent, very high altitude) | Consider acetazolamide |
| High (rapid ascent, extreme altitude, prior illness) | Acetazolamide +/- gradual ascent |
| Very high (prior HACE/HAPE) | Acetazolamide + dexamethasone + very gradual ascent |

### Monitoring Parameters

**Minimum Field Assessment:**
- Symptom questionnaire (Lake Louise)
- Heart rate
- SpO2 if available

**Enhanced Monitoring (Expeditions):**
- Twice daily SpO2 and symptoms
- Orthostatic vitals
- Tandem gait testing (ataxia screen)

## Future Directions

### Personalized Medicine

**Genetic Testing:**
- EPAS1, EGLN1 genotyping
- May identify high-risk individuals
- Currently research only

**Physiological Profiling:**
- HVR testing
- Exercise capacity at simulated altitude
- Predict individual acclimatization trajectory

### Technology Integration

**Wearable Monitoring:**
- Continuous SpO2 during ascent
- Sleep quality tracking
- Automatic warning algorithms

**Telemedicine:**
- Real-time expert consultation from remote locations
- AI-assisted decision support
- Image transmission for examination

### Research Priorities

1. Validate biomarkers for point-of-care use
2. Head-to-head pharmacological trials
3. Optimal pre-acclimatization protocols
4. Long-term outcomes of repeated altitude illness
5. Novel therapeutics targeting HIF/AQP/NO pathways`,
      keyTerms: [
        { term: 'glymphatic system', definition: 'Brain waste clearance system using perivascular channels; may be impaired at altitude' },
        { term: 'PHD inhibitors', definition: 'Prolyl hydroxylase domain inhibitors that stabilize HIF; potential novel altitude medications' },
        { term: 'hypoxic preconditioning', definition: 'Controlled pre-trip hypoxia exposure to induce adaptive molecular changes' },
        { term: 'Denisovan introgression', definition: 'Transfer of genetic variants from Denisovans to humans, source of Tibetan EPAS1 adaptation' },
      ],
      clinicalNotes: `Clinical Pearls for AMS:
1. Lake Louise 2018 revision removed sleep disturbance - periodic breathing is universal at altitude
2. Ibuprofen 600mg TID is a reasonable alternative to acetazolamide for prevention
3. Genetic testing may eventually personalize altitude risk assessment
4. Wearable SpO2 monitoring has expedition medicine applications but thresholds remain to be defined
5. Hypoxic preconditioning protocols vary widely; optimal regimens are being studied
6. The Tibetan EPAS1 variant represents an optimal evolutionary solution - hemoglobin remains normal
7. Morning symptom peak may relate to impaired glymphatic clearance during altitude-disturbed sleep
8. Copeptin is a promising biomarker for future point-of-care AMS assessment`,
    },
  },

  media: [
    {
      id: 'lake-louise-score-card',
      type: 'diagram',
      filename: 'lake-louise-score.svg',
      title: 'Lake Louise AMS Scoring Card',
      description: 'Visual scoring guide for AMS diagnosis',
    },
  ],

  citations: [
    {
      id: 'roach-lake-louise-2018',
      type: 'article',
      title: 'The 2018 Lake Louise Acute Mountain Sickness Score',
      authors: ['Roach, R.C.', 'Hackett, P.H.', 'et al.'],
      source: 'High Altitude Medicine & Biology',
    },
    {
      id: 'wms-altitude-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Acute Altitude Illness',
      source: 'Wilderness & Environmental Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-altitude-sickness-overview', targetType: 'condition', relationship: 'parent', label: 'Altitude Sickness Overview' },
    { targetId: 'wilderness-hace', targetType: 'condition', relationship: 'sibling', label: 'High Altitude Cerebral Edema' },
    { targetId: 'wilderness-hape', targetType: 'condition', relationship: 'sibling', label: 'High Altitude Pulmonary Edema' },
  ],

  tags: {
    systems: ['neurological'],
    topics: ['altitude', 'wilderness-medicine'],
    keywords: ['AMS', 'headache', 'acclimatization', 'acetazolamide'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acuteAltitudeSickness;
