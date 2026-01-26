/**
 * Symptom Management Overview - Educational Content
 *
 * Comprehensive overview of symptom assessment and management
 * in palliative care, covering the multidimensional approach
 * to symptom control.
 */

import { EducationalContent } from '../../types';

export const symptomManagementOverview: EducationalContent = {
  id: 'symptom-overview',
  type: 'concept',
  name: 'Symptom Management Overview',
  alternateNames: ['Symptom Control', 'Symptom Assessment', 'Palliative Symptom Management'],

  levels: {
    1: {
      level: 1,
      summary: 'Symptom management means helping people feel as comfortable as possible by treating problems like pain, tiredness, trouble breathing, and feeling sick to the stomach.',
      explanation: `**What Are Symptoms?**

Symptoms are the uncomfortable feelings your body has when you are sick. Common symptoms include:

- **Pain**: Hurting in different parts of your body
- **Tiredness**: Feeling very weak and having no energy
- **Trouble Breathing**: Feeling like you cannot get enough air
- **Nausea**: Feeling like you might throw up
- **Not Being Hungry**: Not wanting to eat
- **Constipation**: Having trouble going to the bathroom
- **Feeling Worried or Sad**: Emotions that are hard to handle

**Why Symptom Management Matters**

When symptoms are not controlled, it is hard to:
- Enjoy time with family and friends
- Do things you like
- Sleep well
- Feel like yourself

Good symptom management helps you feel better so you can focus on what matters most to you.

**How the Care Team Helps**

Your care team will:
1. **Ask questions** about how you feel
2. **Listen carefully** to understand your symptoms
3. **Use medicines and other treatments** to help you feel better
4. **Check back** to see if the treatments are working
5. **Adjust** if you need more help

**You Are Part of the Team**

It is important to:
- Tell your care team how you really feel
- Speak up if something is not working
- Ask questions about your treatments
- Let them know what bothers you most`,
      keyTerms: [
        { term: 'symptom', definition: 'An uncomfortable feeling your body has when something is wrong' },
        { term: 'nausea', definition: 'Feeling like you might throw up' },
        { term: 'constipation', definition: 'Having trouble going to the bathroom to have a bowel movement' },
      ],
      analogies: [
        'Symptoms are like warning lights on a car dashboard - they tell us something needs attention. The care team helps figure out how to turn off those lights and get you running smoothly.',
        'Managing symptoms is like adjusting the temperature in your house - the care team keeps making adjustments until you are comfortable.',
      ],
      examples: [
        'If someone has pain, they might get medicine and also learn ways to relax that help the pain feel less strong.',
        'If someone is very tired, the care team might look at what is causing it and find ways to help them have more energy for important activities.',
      ],
    },
    2: {
      level: 2,
      summary: 'Symptom management in palliative care involves systematic assessment of physical and psychological symptoms, multimodal treatment approaches, and regular reassessment to optimize patient comfort and function.',
      explanation: `## Approach to Symptom Management

### The Symptom Assessment Process

**1. Identify Symptoms**
Common symptoms in serious illness:
- Pain (present in 70-80% of advanced cancer patients)
- Fatigue (80-90% of patients)
- Dyspnea (shortness of breath)
- Nausea and vomiting
- Anorexia (loss of appetite) and cachexia (weight loss)
- Constipation
- Depression and anxiety
- Delirium (confusion)
- Insomnia

**2. Characterize Each Symptom**
For each symptom, assess:
- Severity (using rating scales 0-10)
- Pattern (constant, intermittent, predictable)
- What makes it better or worse
- Impact on daily life
- Current treatments and their effectiveness

**3. Understand the Cause**
Symptoms may be caused by:
- The disease itself
- Treatment side effects
- Other medical conditions
- Medications
- Psychological factors

### Treatment Approaches

**Pharmacological (Medications)**
- Medications targeted to specific symptoms
- Start low, titrate slowly
- Consider side effects and interactions
- Use long-acting medications for constant symptoms
- Add breakthrough medications for fluctuations

**Non-Pharmacological**
- Physical therapy and rehabilitation
- Relaxation techniques and meditation
- Cognitive behavioral therapy
- Music therapy, art therapy
- Heat, cold, massage
- Acupuncture

**Integrated Approach**
Most effective symptom management combines:
- Multiple medication classes when needed
- Non-medication therapies
- Addressing psychological and spiritual aspects
- Family education and involvement

### Monitoring and Adjustment

**Regular Reassessment**
- Symptom rating scales at each visit
- Tracking changes over time
- Identifying new symptoms early

**Response Evaluation**
- Is the symptom improving?
- Are side effects acceptable?
- Is quality of life better?
- What does the patient want to prioritize?

### Communication Is Key

Patients should feel comfortable:
- Reporting symptoms honestly
- Expressing concerns about medications
- Describing how symptoms affect their lives
- Stating their goals and preferences`,
      keyTerms: [
        { term: 'dyspnea', definition: 'Shortness of breath or difficulty breathing', pronunciation: 'DISP-nee-uh' },
        { term: 'cachexia', definition: 'Severe weight loss and muscle wasting in serious illness', pronunciation: 'kuh-KEK-see-uh' },
        { term: 'anorexia', definition: 'Loss of appetite and desire to eat', pronunciation: 'an-oh-REK-see-uh' },
        { term: 'delirium', definition: 'Sudden confusion affecting thinking and awareness', pronunciation: 'dih-LEER-ee-um' },
        { term: 'titrate', definition: 'To gradually increase or decrease a medication dose' },
      ],
      analogies: [
        'Symptom management is like being a detective - you gather clues (symptoms), look for the cause, try different solutions, and keep investigating until the problem is solved.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive symptom management requires validated assessment instruments, understanding of symptom pathophysiology, evidence-based multimodal interventions, and integration of pharmacological and non-pharmacological approaches within an interdisciplinary framework.',
      explanation: `## Symptom Assessment Framework

### Validated Assessment Tools

**Edmonton Symptom Assessment System-revised (ESAS-r)**
Nine symptoms rated 0-10:
1. Pain
2. Tiredness
3. Drowsiness
4. Nausea
5. Lack of appetite
6. Shortness of breath
7. Depression
8. Anxiety
9. Well-being

Scoring:
- 0-3: Mild
- 4-6: Moderate
- 7-10: Severe

**Memorial Symptom Assessment Scale (MSAS)**
- 32 symptoms
- Frequency, severity, and distress for each
- Short form (MSAS-SF) available

**Symptom Distress Scale**
- 13 symptoms
- Includes physical and psychological symptoms
- Validated in oncology populations

### Symptom Burden

**Definition**: Total impact of symptoms on patient function and quality of life

**Components**:
- Number of concurrent symptoms
- Severity of each symptom
- Distress caused by each symptom
- Functional impact

**Symptom Clusters**: Groups of symptoms that often occur together
- Pain-fatigue-sleep disturbance
- Nausea-vomiting-anorexia
- Depression-anxiety-pain

### Pathophysiology-Based Approach

**Pain**
- Nociceptive (somatic, visceral)
- Neuropathic
- Mixed
- Treatment differs based on mechanism

**Dyspnea**
- Respiratory causes
- Cardiac causes
- Anemia
- Anxiety component
- Multimodal treatment essential

**Fatigue**
- Multifactorial etiology
- Cancer-related vs. treatment-related
- Reversible causes (anemia, hypothyroid, depression)

**Nausea/Vomiting**
- Chemoreceptor trigger zone (CTZ)
- GI tract
- Vestibular
- Cortical (anticipatory)
- Receptor-based antiemetic selection

### Evidence-Based Interventions

**WHO Analgesic Ladder (modified)**
Originally:
1. Non-opioid +/- adjuvant
2. Weak opioid + non-opioid +/- adjuvant
3. Strong opioid + non-opioid +/- adjuvant

Current approach:
- Start with strong opioid for moderate-severe pain
- Combine with appropriate adjuvants
- Interventional approaches when indicated

**Dyspnea Management**
- Opioids (strong evidence)
- Oxygen (if hypoxemic)
- Bronchodilators (if bronchospasm)
- Anxiolytics (if anxiety component)
- Fan therapy, positioning
- Pulmonary rehabilitation

**Fatigue Interventions**
- Exercise (strongest evidence)
- Psychostimulants (methylphenidate)
- Treat reversible causes
- Energy conservation strategies
- Mind-body interventions

### Interdisciplinary Approach

**Team Members**
- Palliative medicine physician/NP
- Palliative care nurse
- Social worker
- Chaplain
- Physical/occupational therapist
- Pharmacist
- Psychologist

**Integration**
- Regular team meetings
- Shared care plans
- Clear communication
- Family involvement`,
      keyTerms: [
        { term: 'ESAS-r', definition: 'Edmonton Symptom Assessment System-revised, validated screening tool for 9 symptoms' },
        { term: 'symptom cluster', definition: 'Group of related symptoms that frequently occur together' },
        { term: 'nociceptive pain', definition: 'Pain from tissue damage stimulating pain receptors', pronunciation: 'NO-sih-SEP-tiv' },
        { term: 'neuropathic pain', definition: 'Pain from nerve damage or dysfunction', pronunciation: 'noor-oh-PATH-ik' },
        { term: 'CTZ', definition: 'Chemoreceptor trigger zone - brain area that triggers vomiting' },
      ],
      clinicalNotes: 'Implement routine ESAS-r screening at every visit. Address the most distressing symptom first. Consider symptom clusters when treating - addressing one may improve others. Always assess for reversible causes before symptomatic treatment.',
    },
    4: {
      level: 4,
      summary: 'Advanced symptom management integrates mechanistic understanding of symptom pathophysiology, receptor pharmacology for drug selection, multimodal analgesia principles, recognition of refractory symptoms requiring specialized interventions, and attention to special populations.',
      explanation: `## Advanced Symptom Pathophysiology

### Pain Mechanisms

**Nociceptive Pain**
*Somatic*
- Well-localized
- Described as aching, throbbing
- Bone metastases, soft tissue infiltration
- Responsive to opioids and NSAIDs

*Visceral*
- Poorly localized, referred
- Described as pressure, cramping
- Organ involvement, obstruction
- Responsive to opioids; anticholinergics for colic

**Neuropathic Pain**
- Burning, shooting, electric
- Allodynia (pain from non-painful stimuli)
- Hyperalgesia (increased pain from painful stimuli)
- Requires adjuvants: gabapentinoids, SNRIs, TCAs

**Central Sensitization**
- Amplification of pain signals in CNS
- Wind-up phenomenon
- May require NMDA antagonists (ketamine)
- Multimodal approach essential

### Receptor Pharmacology for Antiemetics

**Dopamine (D2) Receptors**
- Location: CTZ, GI tract
- Antagonists: prochlorperazine, haloperidol, metoclopramide
- Use: Chemotherapy, metabolic, opioid-induced

**Serotonin (5-HT3) Receptors**
- Location: CTZ, vagal afferents
- Antagonists: ondansetron, granisetron
- Use: Chemotherapy (acute), radiation

**Histamine (H1) Receptors**
- Location: Vestibular, CTZ
- Antagonists: meclizine, diphenhydramine
- Use: Motion, vestibular, increased ICP

**Muscarinic (ACh) Receptors**
- Location: GI tract, vestibular
- Antagonists: scopolamine, hyoscine
- Use: Motion, bowel obstruction

**NK-1 Receptors**
- Location: CTZ, GI
- Antagonists: aprepitant, fosaprepitant
- Use: Highly emetogenic chemotherapy

### Multimodal Analgesia

**Principles**
- Combine medications with different mechanisms
- Lower doses of each = fewer side effects
- Additive or synergistic effects
- Address all pain types present

**Components**
- Opioid (mu receptor agonist)
- Non-opioid (NSAID or acetaminophen)
- Adjuvant (neuropathic: gabapentinoid, SNRI)
- Interventional (nerve block, neuraxial)
- Non-pharmacological (PT, psychological)

### Refractory Symptoms

**Definition**: Symptoms not adequately controlled despite appropriate treatment

**Management Options**

*Opioid Rotation*
- Switch to different opioid
- Incomplete cross-tolerance may improve response
- Recalculate dose with conversion factors

*Interventional Approaches*
- Nerve blocks (celiac plexus for pancreatic cancer)
- Intrathecal pumps for cancer pain
- Palliative radiation for bone pain
- Palliative chemotherapy for symptom control

*Palliative Sedation*
- For truly refractory symptoms at end of life
- Proportional sedation first
- Continuous sedation for refractory distress
- Ethical framework and documentation essential

### Special Populations

**Renal Impairment**
- Avoid morphine (active metabolites accumulate)
- Prefer fentanyl, hydromorphone (with caution)
- Adjust gabapentinoids
- Avoid NSAIDs

**Hepatic Impairment**
- Prolonged half-lives
- Start lower, titrate slowly
- Avoid codeine (requires activation)

**Elderly**
- Start at 25-50% of usual dose
- Longer intervals
- Higher sensitivity to CNS effects
- Watch for anticholinergic effects

**Opioid Use Disorder**
- Requires special approach
- Distinguish addiction from tolerance/dependence
- Consider addiction medicine consultation
- Buprenorphine may be useful

**Pediatric**
- Weight-based dosing
- Age-appropriate assessment tools (FLACC, Wong-Baker)
- Same medications, adjusted doses
- Consider developmental stage`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Increased excitability of CNS neurons leading to pain amplification' },
        { term: 'allodynia', definition: 'Pain from stimulus that normally does not cause pain' },
        { term: 'hyperalgesia', definition: 'Increased pain response to painful stimulus' },
        { term: 'opioid rotation', definition: 'Switching from one opioid to another to improve efficacy or reduce side effects' },
        { term: 'palliative sedation', definition: 'Intentional reduction of consciousness to relieve refractory suffering at end of life' },
      ],
      clinicalNotes: 'For refractory pain, consider: inadequate dose, wrong opioid, unaddressed neuropathic component, psychological factors, or need for interventional approach. Opioid rotation with dose reduction (25-50%) for incomplete cross-tolerance. Document palliative sedation discussions and informed consent thoroughly.',
    },
    5: {
      level: 5,
      summary: 'Expert symptom management requires integration of emerging pharmacological approaches, precision medicine for symptom control, evidence synthesis for complex symptoms, implementation of symptom-focused clinical pathways, and leadership in symptom management research.',
      explanation: `## Emerging Pharmacological Approaches

### Novel Analgesics

**NMDA Receptor Antagonists**
- Ketamine: For refractory pain, especially neuropathic
- Subanesthetic dosing (0.1-0.5 mg/kg/hr)
- Oral, IV, SC, intranasal routes
- Monitor for psychomimetic effects

**Cannabinoids**
- Modest evidence for cancer pain
- May reduce opioid requirements
- Nabilone, dronabinol FDA-approved
- Cannabis products variable quality

**Sodium Channel Blockers**
- Lidocaine IV infusion for refractory pain
- 1-5 mg/kg/hr
- Mexiletine oral continuation

### Advanced Antiemetic Strategies

**Olanzapine**
- Superior to standard antiemetics for chemotherapy-induced N/V
- 5-10 mg orally
- Effective for breakthrough nausea
- Consider in refractory nausea

**Dronabinol**
- Cannabinoid for refractory nausea
- 2.5-5 mg BID-TID

**Combination Regimens**
- Highly emetogenic chemo: NK1 + 5HT3 + dexamethasone + olanzapine
- Four-drug regimens now standard

### Fatigue Management Advances

**Targeted Interventions**
- Methylphenidate for fatigue (5-10 mg AM and noon)
- Modafinil (evidence mixed)
- Corticosteroids short-term
- Exercise programs (NCCN recommended)

**Emerging Research**
- Inflammatory cytokine targets
- Mitochondrial dysfunction
- Circadian rhythm interventions

## Precision Medicine in Symptom Control

### Pharmacogenomics

**Opioid Metabolism**
- CYP2D6 polymorphisms
- Poor metabolizers: Codeine and tramadol ineffective
- Ultra-rapid metabolizers: Increased morphine toxicity from codeine
- Consider genotyping for refractory pain

**Pharmacogenomic Testing Applications**
- CYP2D6: Codeine, tramadol, oxycodone, hydrocodone
- CYP3A4: Fentanyl, methadone
- OPRM1: Opioid requirements

### Biomarkers for Symptom Prediction

**Inflammatory Markers**
- CRP, IL-6, TNF-alpha associated with fatigue
- Potential for targeted anti-inflammatory approaches

**Tumor-Related**
- Specific tumor markers associated with symptoms
- Targeted therapies may improve symptoms

## Complex Symptom Syndromes

### Cancer Cachexia

**Pathophysiology**
- Systemic inflammation
- Altered metabolism
- Anorexia
- Muscle wasting (sarcopenia)

**Assessment**
- Weight loss >5% in 6 months
- BMI <20 plus weight loss >2%
- Appendicular muscle mass depletion

**Treatment**
- Multimodal: nutrition, exercise, pharmacology
- Megestrol (modest benefit, thrombosis risk)
- Corticosteroids (short-term appetite)
- Emerging: ghrelin agonists, selective androgen receptor modulators

### Malignant Bowel Obstruction

**Conservative Management**
- NGT decompression vs. venting gastrostomy
- Octreotide (reduces secretions)
- Corticosteroids (reduce edema)
- Antiemetics
- Anticholinergics (reduce colic)

**Interventional Options**
- Endoscopic stenting
- Palliative surgery (selected patients)
- Percutaneous drainage

### Terminal Secretions

**Death Rattle**
- Anticholinergics: glycopyrrolate, scopolamine, atropine
- Positioning
- Family education critical

## Implementation and Quality

### Symptom Management Pathways

**Elements**
- Standardized assessment tools
- Medication protocols
- Escalation criteria
- Documentation templates
- Quality metrics

**Example: Pain Pathway**
1. Assess using validated tool
2. Classify pain type
3. Initiate appropriate therapy
4. Reassess at defined intervals
5. Escalate if not controlled

### Quality Metrics

**Structure**
- Palliative care consultation availability
- Opioid availability
- Staff training

**Process**
- Pain assessment documented
- Symptom screening performed
- Treatment plan documented

**Outcome**
- Pain scores over time
- Symptom burden reduction
- Patient satisfaction

### Research Priorities

**Trial Design Challenges**
- Heterogeneous populations
- Attrition from illness progression
- Ethical considerations
- Outcome measure selection

**Priority Areas**
- Opioid-sparing approaches
- Non-pharmacological interventions
- Precision symptom management
- Implementation science
- Disparities in symptom control`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of how genes affect individual response to medications' },
        { term: 'CYP2D6', definition: 'Cytochrome P450 enzyme that metabolizes many opioids and other drugs' },
        { term: 'cachexia', definition: 'Metabolic syndrome of weight loss, muscle wasting, and systemic inflammation' },
        { term: 'sarcopenia', definition: 'Loss of skeletal muscle mass and strength' },
        { term: 'death rattle', definition: 'Noisy breathing from secretions in the airway near death' },
        { term: 'malignant bowel obstruction', definition: 'Bowel blockage caused by cancer' },
      ],
      clinicalNotes: `Expert-level symptom management priorities:
1. Consider pharmacogenomic testing for patients with unexpected opioid responses
2. Use multimodal approaches for all significant symptoms
3. Implement symptom management pathways with quality metrics
4. For refractory symptoms: ketamine, opioid rotation, interventional procedures
5. Address cachexia with multimodal approach (nutrition, exercise, targeted pharmacology)
6. Lead research and quality improvement initiatives in symptom management`,
    },
  },

  media: [
    {
      id: 'esas-diagram',
      type: 'diagram',
      filename: 'esas-symptom-scale.svg',
      title: 'ESAS Symptom Assessment Scale',
      description: 'Visual representation of the Edmonton Symptom Assessment System',
    },
    {
      id: 'multimodal-analgesia-diagram',
      type: 'diagram',
      filename: 'multimodal-analgesia.svg',
      title: 'Multimodal Analgesia Approach',
      description: 'Diagram showing different components of multimodal pain management',
    },
  ],

  citations: [
    {
      id: 'esas-validation',
      type: 'article',
      title: 'The Edmonton Symptom Assessment System (ESAS): A Simple Method for the Assessment of Palliative Care Patients',
      authors: ['Bruera, E.', 'Kuehn, N.', 'Miller, M.J.', 'et al.'],
      source: 'Journal of Palliative Care',
    },
    {
      id: 'who-cancer-pain',
      type: 'website',
      title: 'WHO Guidelines for the Pharmacological and Radiotherapeutic Management of Cancer Pain',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/9789241550390',
    },
  ],

  crossReferences: [
    { targetId: 'symptom-pain', targetType: 'topic', relationship: 'child', label: 'Pain Management' },
    { targetId: 'symptom-nausea', targetType: 'topic', relationship: 'child', label: 'Nausea Management' },
    { targetId: 'symptom-dyspnea', targetType: 'topic', relationship: 'child', label: 'Dyspnea Management' },
    { targetId: 'concept-quality-of-life', targetType: 'concept', relationship: 'related', label: 'Quality of Life Focus' },
  ],

  tags: {
    systems: ['palliative-care'],
    topics: ['symptom management', 'pain', 'symptom assessment', 'palliative medicine'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default symptomManagementOverview;
