/**
 * Obsessive-Compulsive Disorder - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const ocd: EducationalContent = {
  id: 'condition-ocd',
  type: 'condition',
  name: 'Obsessive-Compulsive Disorder',
  nameEs: 'Trastorno Obsesivo-Compulsivo',
  alternateNames: ['OCD', 'Obsessive-Compulsive Neurosis'],
  hpoId: 'HP:0000722',

  levels: {
    1: {
      level: 1,
      summary: 'OCD is a condition where a person has unwanted, recurring thoughts (obsessions) and feels driven to do certain routines repeatedly (compulsions) to reduce anxiety.',
      explanation: `Everyone has occasional unwanted thoughts or habits. But OCD is when these thoughts and behaviors take up a lot of time and interfere with daily life.

**Obsessions are unwanted thoughts that:**
- Keep coming back, even when you try to stop them
- Cause anxiety or distress
- Don't make sense to you
- Can include fears of germs, unwanted aggressive thoughts, or need for things to be "just right"

**Compulsions are behaviors you feel driven to do:**
- Repeatedly washing hands or cleaning
- Checking things over and over (locks, stove)
- Arranging or ordering things
- Counting, repeating words, or tapping
- Asking for reassurance repeatedly

**The OCD cycle:**
1. Obsession (unwanted thought) appears
2. Anxiety increases
3. Compulsion (behavior) temporarily reduces anxiety
4. Relief is temporary—thought comes back

**Treatment helps:**
- Therapy that exposes you to fears while preventing compulsions (ERP)
- Medications (usually SSRIs)
- Learning to tolerate uncertainty
- Support from understanding people

**Important:**
- OCD is not about being "organized" or "particular"
- People with OCD usually know their fears are irrational but cannot stop
- With proper treatment, people can regain control of their lives`,
      keyTerms: [
        { term: 'obsession', definition: 'An unwanted, intrusive thought that causes anxiety' },
        { term: 'compulsion', definition: 'A repetitive behavior done to reduce anxiety from an obsession' },
        { term: 'ERP', definition: 'Exposure and Response Prevention; the most effective therapy for OCD' },
      ],
      analogies: [
        "OCD is like having a hiccup in your brain—a thought you can't stop thinking and a behavior you can't stop doing.",
        'Compulsions are like scratching a mosquito bite—it feels good for a moment, but then the itch comes back stronger.',
      ],
      examples: [
        'A person who washes their hands 50 times a day because they fear germs, until their skin becomes raw and painful.',
        'Someone who checks the door lock 20 times before leaving the house, or returns home repeatedly to check the stove.',
      ],
      patientCounselingPoints: [
        'Resisting compulsions is hard at first but gets easier with practice',
        'Family members should not help with compulsions (called accommodation)',
        'Set aside specific "worry time" rather than obsessing all day',
      ],
    },
    2: {
      level: 2,
      summary: 'OCD is characterized by obsessions (intrusive thoughts) and/or compulsions (repetitive behaviors) that are time-consuming (>1 hour/day) or cause clinically significant distress.',
      explanation: `## Diagnostic Criteria (DSM-5)

**Presence of obsessions, compulsions, or both:**

**Obsessions (1+):**
- Recurrent, persistent thoughts, urges, or images
- Experienced as intrusive and unwanted
- Cause marked anxiety or distress
- Person tries to ignore or suppress with thought or action

**Compulsions (1+):**
- Repetitive behaviors or mental acts
- Driven to perform in response to obsession or rigid rules
- Aimed at preventing/reducing anxiety or dreaded event
- Not connected realistically or clearly excessive

**Additional criteria:**
- Obsessions/compulsions are time-consuming (>1 hour/day) OR cause significant distress or impairment
- Not attributable to substance, medication, or medical condition
- Not better explained by another mental disorder

## Common OCD Symptom Dimensions

**1. Contamination/Cleaning:**
- Fear of germs, dirt, illness
- Excessive or ritualized washing
- Cleaning of objects or surroundings

**2. Harm/Checking:**
- Fear of causing harm (fire, burglary, mistakes)
- Checking locks, appliances, work
- Reassurance-seeking

**3. Symmetry/Ordering:**
- Need for things "just right"
- Arranging, ordering, counting
- Evening-up behaviors

**4. Forbidden Thoughts (Taboo):**
- Unwanted violent or sexual thoughts
- Religious/moral obsessions (scrupulosity)
- Fear of acting on impulses

**5. Hoarding:**
- Difficulty discarding possessions
- Distress if items are discarded
- Accumulation of items (now separate diagnosis)

## Treatment

**First-Line Psychotherapy:**
- **Exposure and Response Prevention (ERP):** Gold standard
- Habituation to anxiety through exposure
- Prevention of compulsive response

**First-Line Medications:**
- **SSRIs:** Fluoxetine, fluvoxamine, paroxetine, sertraline, citalopram, escitalopram
- **Clomipramine:** TCA, most effective but more side effects
- High doses often needed (above antidepressant doses)

**Treatment Duration:**
- Minimum 2-3 months at adequate dose before judging response
- Many require long-term treatment

## Differential Diagnosis
- OCPD: Preoccupation with orderliness, perfectionism, control (ego-syntonic)
- GAD: Worries are about real-life problems, not obsessions
- Psychosis: Lack of insight; obsessions recognized as unrealistic in OCD
- Tics: Tourette's (can co-occur)
- Autism: Repetitive behaviors; different motivation and nature`,
      keyTerms: [
        { term: 'exposure', definition: 'Intentionally facing feared thoughts or situations to reduce anxiety over time' },
        { term: 'response prevention', definition: 'Resisting the urge to perform compulsions while facing fears' },
        { term: 'habituation', definition: 'Decreased response to a stimulus after repeated exposure' },
        { term: 'ego-syntonic', definition: "Consistent with one's self-image; OCPD traits are usually ego-syntonic unlike OCD" },
      ],
      patientCounselingPoints: [
        'OCD is treatable—most people improve significantly with proper treatment',
        'Family should not accommodate compulsions (help with rituals)',
        'Medication may take 10-12 weeks to see full benefit',
      ],
    },
    3: {
      level: 3,
      summary: 'OCD involves cortico-striatal-thalamo-cortical circuit dysfunction, serotonin and glutamate abnormalities, with ERP therapy and high-dose SSRIs as first-line treatments.',
      explanation: `## Pathophysiology

**Neuroanatomy:**
- **Cortico-striatal-thalamo-cortical (CSTC) circuits:**
  - Orbitofrontal cortex: Error detection, threat assessment
  - Anterior cingulate: Error monitoring
  - Striatum (caudate): Habit formation
  - Thalamus: Sensory gating
- Circuit hyperactivity in untreated OCD
- Normalization with successful treatment

**Neurotransmitters:**
- **Serotonin:** Dysregulated; SSRIs effective
- **Glutamate:** Elevated in CSTC circuits
- **Dopamine:** May play role in tic-related OCD

**Genetics:**
- Heritability: 40-50%
- Multiple genes of small effect
- SLC1A1 (glutamate transporter)
- OCD-related genes overlap with Tourette's

**Neuroimmunology:**
- PANDAS/PANS: Pediatric autoimmune neuropsychiatric disorders
- Group A strep infection triggering OCD onset
- Anti-basal ganglia antibodies
- Controversial but real subset

## Evidence-Based Treatments

**Exposure and Response Prevention (ERP):**

| Component | Description |
|-----------|-------------|
| **Exposure** | Systematic, gradual confrontation with feared stimuli |
| **Response Prevention** | Refraining from compulsions during exposure |
| **Habituation** | Anxiety decreases over time with exposure |
| **Inhibitory Learning** | New learning that feared outcomes don't occur |

**ERP Hierarchy:**
1. Identify obsessions and compulsions
2. Rank fears from least to most distressing (SUDS 1-100)
3. Start with moderately distressing items
4. Expose to trigger without ritualizing
5. Remain in exposure until anxiety decreases by half
6. Process learning and move up hierarchy

**Medication Dosing:**

| Medication | Starting Dose | Target Dose | Max Dose |
|------------|---------------|-------------|----------|
| Fluoxetine | 20 mg | 40-60 mg | 80 mg |
| Fluvoxamine | 50 mg | 200-300 mg | 300 mg |
| Sertraline | 25-50 mg | 150-200 mg | 200 mg |
| Paroxetine | 20 mg | 40-60 mg | 60 mg |
| Escitalopram | 10 mg | 20-30 mg | 40 mg |
| Citalopram | 20 mg | 40-60 mg | 60 mg* |
| Clomipramine | 25 mg | 150-250 mg | 250 mg |

*Citalopram warning: QTc prolongation >40 mg

**Clomipramine:**
- Most effective medication (TCA)
- Potent serotonin reuptake inhibitor
- Side effects: Anticholinergic, sedation, orthostasis
- Seizure risk at high doses
- Requires ECG

## Treatment-Resistant OCD

**Definition:**
- Inadequate response to:
  - Adequate SSRI trial (≥12 weeks, ≥max dose)
  - AND adequate ERP trial (≥20 sessions)

**Approach:**
1. Confirm diagnosis and treatment adequacy
2. Optimize SSRI (switch to clomipramine or try different SSRI)
3. **Augmentation strategies:**
   - Atypical antipsychotic (risperidone, haloperidol, aripiprazole)
   - Most evidence for risperidone
4. Intensive ERP (daily for 3 weeks)
5. Consider neurosurgical options for severe, refractory cases`,
      keyTerms: [
        { term: 'CSTC circuits', definition: 'Cortico-striatal-thalamo-cortical brain circuits; dysfunction causes OCD symptoms' },
        { term: 'SUDS', definition: 'Subjective Units of Distress Scale; 0-100 scale for rating anxiety' },
        { term: 'PANDAS', definition: 'Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal infections' },
        { term: 'habituation', definition: 'Decreased anxiety response after prolonged exposure to feared stimulus' },
        { term: 'inhibitory learning', definition: "New learning that feared outcomes don't occur; alternative explanation for ERP effectiveness" },
      ],
      clinicalNotes: 'OCD often requires high SSRI doses. Fluoxetine 60-80 mg, sertraline 200 mg, fluvoxamine 300 mg may be needed. Always assess for tic disorders—may require different approach.',
      patientCounselingPoints: [
        'Medication may need to be at higher doses than typical antidepressant dosing',
        'Therapy involves facing fears, which is uncomfortable but necessary',
        'Stopping rituals causes temporary increase in anxiety that will decrease with time',
      ],
    },
    4: {
      level: 4,
      summary: 'Treatment-resistant OCD requires pharmacological augmentation, specialized intensive CBT protocols, and consideration of neuromodulation approaches while addressing common comorbidities.',
      explanation: `## Augmentation Strategies

**Atypical Antipsychotics:**

| Medication | Evidence | Typical Dose | Key Side Effects |
|------------|----------|--------------|------------------|
| Risperidone | Strongest | 1-3 mg | EPS, prolactin, weight gain |
| Haloperidol | Moderate | 2-5 mg | EPS, TD |
| Aripiprazole | Moderate | 5-15 mg | Akathisia, nausea |
| Olanzapine | Limited | 5-10 mg | Metabolic, sedation |
| Quetiapine | Limited | 100-400 mg | Sedation, metabolic |

**Risperidone augmentation:**
- Meta-analysis: ~35% response rate
- Best evidence among antipsychotics
- Consider for SSRI-resistant OCD
- Monitor for EPS and metabolic effects

**Glutamate-Modulating Agents:**
- **Riluzole:** 50-100 mg bid; limited but promising evidence
- **Memantine:** 10-20 mg; mixed results
- **N-acetylcysteine (NAC):** 2000-3000 mg/day; some evidence
- Topiramate: Limited evidence

## Intensive Treatment Programs

**Daily ERP:**
- 2-3 hours daily, 3-4 weeks
- More effective than weekly for refractory cases
- Requires specialized center

**Partial Hospitalization:**
- Daily treatment, return home evenings
- Combination of ERP, medication, skills training

**Residential Treatment:**
- For severe, disabling OCD
- 30-90 day programs
- 24/7 exposure opportunities

## Neuromodulation

**Repetitive TMS (rTMS):**
- FDA-cleared for OCD (2018)
- Targets medial prefrontal cortex/ACC
- Sessions: 20-30 minutes daily, 4-6 weeks
- Limited but promising evidence

**Deep Brain Stimulation (DBS):**
- FDA approved for severe, refractory OCD (Humanitarian Device Exemption)
- Targets: VC/VS (ventral capsule/ventral striatum), STN, ALIC
- Requires bilateral implanted electrodes
- ~60% response in carefully selected patients
- Requires specialized center

**Lesion Neurosurgery:**
- Anterior capsulotomy
- Cingulotomy
- Rarely performed today; DBS preferred (adjustable, reversible)

## Comorbidities

**Tic Disorders:**
- 10-30% have Tourette's or chronic tics
- May require antipsychotic regardless of OCD severity
- Consider haloperidol, risperidone, aripiprazole

**Depression (50-70%):**
- SSRIs treat both
- OCD symptoms usually primary
- Treat OCD first if possible
- Consider ECT for severe, comorbid depression

**Anxiety Disorders (25%):**
- GAD, panic, social anxiety
- ERP helpful for OCD-specific symptoms
- Additional CBT for other anxiety disorders

**Autism Spectrum:**
- Higher rates of OCD symptoms
- Treatment adaptation needed
- Visual supports, concrete language
- May need higher medication doses

**Body Dysmorphic Disorder:**
- Related to OCD (obsessive-compulsive spectrum)
- Similar treatment (ERP adapted)
- May be more treatment-resistant

## Special Populations

**Pediatric OCD:**
- Onset typically 8-12 years
- Boys > girls in childhood
- Family-based ERP
- Medication: SSRIs (monitor for activation)
- PANDAS/PANS evaluation

**Perinatal/Postpartum:**
- Onset or worsening common
- Harm obsessions toward infant
- Severe distress, avoidance
- ERP adapted for postpartum
- Medication risk-benefit discussion

**Late-Onset OCD:**
- Consider neurologic causes
- Rule out neurodegenerative disease
- Lesions, basal ganglia disorders

## Insight in OCD
- DSM-5 specifiers: Good/fair, poor, absent/delusional
- Poor insight predicts worse prognosis
- Delusional OCD: Poor insight but not psychosis
- Treatment similar regardless of insight level
- Insight can improve with treatment`,
      keyTerms: [
        { term: 'tic-related OCD', definition: 'OCD with comorbid tic disorder; may respond differently to treatment' },
        { term: 'delusional OCD', definition: 'OCD with absent insight (poor insight specifier); not psychotic disorder' },
        { term: 'VC/VS', definition: 'Ventral capsule/ventral striatum; DBS target for OCD' },
      ],
      clinicalNotes: 'Up to 50% of OCD patients do not respond adequately to first-line treatments. Risperidone augmentation has best evidence. Consider DBS referral for severe, treatment-refractory cases.',
    },
    5: {
      level: 5,
      summary: 'Emerging OCD treatments include glutamate modulators, targeted neurosurgical approaches, precision medicine based on neuroimaging biomarkers, and novel digital therapeutics.',
      explanation: `## Novel Pharmacotherapies

**Serotonin Receptor Modulators:**
- **Psilocybin:** Investigational for OCD
- **5-HT2A antagonists:** Being studied
- **Psilocybin-assisted therapy:** Early trials

**Glutamate System:**
- **Riluzole:** Most evidence among glutamate agents
- **Memantine:** NMDA antagonist; mixed results
- **N-acetylcysteine (NAC):** Glutamate modulation
- **D-cycloserine:** Fear extinction facilitator

**Other Targets:**
- **Opioid system:** Limited evidence for morphine, tramadol
- **Cannabinoids:** Limited evidence
- **Benzodiazepines:** Limited benefit, dependence risk

## Neuroimaging Biomarkers

**Predictive Markers:**
- **Glutamate levels:** MRS predicts SSRI response
- **Anterior cingulate thickness:** May predict treatment response
- **Amygdala reactivity:** Fear circuit activation
- **Connectivity patterns:** Resting state fMRI

**Treatment Response Prediction:**
- Not yet clinically useful
- Research focus on personalized treatment
- May guide medication vs. therapy selection

## Deep Brain Stimulation

**Targets:**

| Target | Evidence | Advantages | Disadvantages |
|--------|----------|------------|---------------|
| VC/VS | Strongest | Most studied | Mood side effects |
| STN | Moderate | Established for Parkinson's | Requires more programming |
| ALIC | Moderate | Established | Less flexible |
| NAcc | Limited | Investigational | Limited data |

**Mechanisms:**
- Modulates CSTC circuit hyperactivity
- Normalizes activity on PET/fMRI
- May enhance plasticity

**Outcomes:**
- 60-70% response in carefully selected
- Best for severe, treatment-refractory OCD
- Requires specialized programming
- Expensive, invasive

**Selection Criteria:**
- Severe, disabling OCD (Y-BOCS >30)
- Failed adequate SSRI + clomipramine trials
- Failed adequate ERP trials
- Failed antipsychotic augmentation
- Reasonable medical health
- Realistic expectations

## Transcranial Magnetic Stimulation

**FDA-Cleared Protocol (2018):**
- Target: Medial prefrontal cortex (MPC)
- Frequency: 1 Hz (inhibitory)
- Sessions: 20-30 minutes, daily for 4-6 weeks
- Evidence: Moderate effect size

**Investigational Protocols:**
- Deep TMS (dTMS): H-coils, deeper penetration
- Theta burst: Faster protocol
- Accelerated TMS: Multiple daily sessions

**Limitations:**
- Limited access
- Cost
- Modest effect sizes
- Best used as augmentation

## Digital Therapeutics

**Internet-Based CBT (iCBT):**
- Effective for OCD
- BTSteps (specific to OCD)
- Increased access, reduced barriers
- Comparable to face-to-face for motivated patients

**Augmented Reality (AR):**
- Virtual exposure for contamination fears
- Checking simulations
- Still experimental

**Smartphone Apps:**
- NOCD: ERP coaching app
- Act CBT: Self-guided ERP
- Symptom tracking and reminder
- Between-session homework support

**Digital Phenotyping:**
- Smartphone sensors for compulsions
- GPS for checking behaviors
- Accelerometer for ritual detection
- Privacy concerns

## Biological Subtypes

**Immune-Mediated:**
- PANDAS/PANS
- Anti-basal ganglia antibodies
- Treatment: IVIG, plasmapheresis, antibiotics (controversial)

**Genetic Subtypes:**
- SLITRK1 mutations (rare)
- DLGAP1/HOXB8 variants
- Research-stage findings

**Neurodevelopmental:**
- Autism-related OCD
- ADHD-related OCD
- Tourette's-related OCD
- Different treatment considerations

## Future Directions

**Personalized Medicine:**
- Symptom dimensions may predict treatment response
- Neuroimaging biomarkers
- Genetic predictors
- Endophenotype-based treatment

**New Therapeutic Targets:**
- 5-HT2C agonists
- mGluR modulators
- Neurokinin-1 antagonists
- Vasopressin receptors

**Combination Therapies:**
- D-cycloserine + ERP
- Psilocybin + therapy
- TMS + ERP
- Optimal sequencing being studied

**Prevention:**
- Early identification
- Treatment of subthreshold OCD
- Pediatric autoimmune screening`,
      keyTerms: [
        { term: 'endophenotype', definition: 'Heritable, disease-associated biomarker intermediate between genes and clinical symptoms' },
        { term: 'MRS', definition: 'Magnetic resonance spectroscopy; measures brain metabolites including glutamate' },
        { term: 'BTSteps', definition: 'Evidence-based internet CBT program specifically for OCD' },
      ],
      clinicalNotes: `Key clinical pearls:

1. **High SSRI doses are often needed:** Fluoxetine 60-80 mg, sertraline 200 mg, fluvoxamine 300 mg. Don't abandon too early.

2. **ERP is essential:** Medication alone is rarely sufficient. ERP is the gold standard psychotherapy. Referral to OCD specialist if possible.

3. **Family accommodation:** Families often participate in rituals (accommodation). This must stop for recovery. Family psychoeducation essential.

4. **Insight varies:** Many patients have poor insight. They recognize thoughts are irrational but still can't resist. Not psychosis.

5. **Tic comorbidity changes treatment:** If tics present, antipsychotic may be first-line augmentation (haloperidol, risperidone).

6. **PANDAS is controversial but real:** Sudden onset OCD in children with strep exposure. Consider antibiotics, immunomodulation in selected cases.

7. **Treatment resistance is common:** Up to 50% don't respond adequately to SSRI monotherapy. Augmentation with risperidone has best evidence.

8. **DBS is an option:** For severe, refractory cases. Requires careful screening, specialized center. Response rates ~60% in selected patients.

9. **Y-BOCS for severity:** Use Yale-Brown Obsessive Compulsive Scale to track severity and treatment response.

10. **Avoidant coping maintains OCD:** Reassurance-seeking, distraction, ritual avoidance all maintain symptoms. Face the fear, don't ritualize.`,
    },
  },

  media: [],
  citations: [
    { id: 'apa-ocd-2007', type: 'article', title: 'APA Practice Guideline for Treatment of Patients with OCD', source: 'American Psychiatric Association' },
    { id: 'nice-ocd-2005', type: 'article', title: 'NICE Guidelines on OCD', source: 'National Institute for Health and Care Excellence' },
    { id: 'farrant-ocd-2022', type: 'article', title: 'Evidence-Based Pharmacotherapy for OCD', source: 'CNS Spectrums' },
  ],
  crossReferences: [
    { targetId: 'condition-generalized-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'Generalized Anxiety Disorder' },
    { targetId: 'condition-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['psychiatry', 'mental health', 'anxiety disorders'],
    keywords: ['OCD', 'obsession', 'compulsion', 'ERP', 'SSRI', 'clomipramine'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ocd;
