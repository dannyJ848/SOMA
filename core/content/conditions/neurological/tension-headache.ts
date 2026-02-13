/**
 * Tension Headache - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const tensionHeadache: EducationalContent = {
  id: 'condition-tension-headache',
  type: 'condition',
  name: 'Tension Headache',
  nameEs: 'Cefalea Tensional',
  alternateNames: ['Tension-Type Headache', 'TTH', 'Stress Headache', 'Muscle Contraction Headache'],
  hpoId: 'HP:0002076',

  levels: {
    1: {
      level: 1,
      summary: 'Tension headaches are the most common type of headache, causing a dull, squeezing pain on both sides of the head like a tight band.',
      explanation: `Tension headaches feel like a tight band squeezing your head. They are different from migraines because the pain is usually milder and on both sides.

**Common symptoms:**
- Dull, aching head pain
- Pressure or tightness across forehead or back of head
- Pain on both sides of head
- Mild to moderate intensity

**Triggers:**
- Stress and anxiety
- Poor posture
- Eye strain (too much screen time)
- Lack of sleep
- Skipping meals
- Dehydration

**Relief:**
- Rest in a quiet, dark room
- Over-the-counter pain relievers
- Stress management
- Better sleep habits`,
      keyTerms: [
        { term: 'tension headache', definition: 'A common headache with squeezing pain on both sides of the head' },
        { term: 'trigger', definition: 'Something that causes a headache to start' },
      ],
      analogies: ['A tension headache feels like wearing a tight hat or having an invisible band squeezing your head.'],
      examples: ['After studying for hours with poor posture, a student develops a dull ache across their forehead and temples.'],
    },
    2: {
      level: 2,
      summary: 'Tension-type headache is a primary headache disorder characterized by bilateral, pressing or tightening pain of mild to moderate intensity without aggravation by routine physical activity.',
      explanation: `## Clinical Features (ICHD-3 Criteria)

**Infrequent Episodic TTH (<1 headache day/month)**
- Bilateral pain
- Pressing or tightening quality
- Mild or moderate intensity
- No aggravation with routine activity
- No nausea or vomiting
- Photophobia or phonophobia present (but not both)

**Frequent Episodic TTH (1-14 headache days/month)**
- Same features but occurs more often

**Chronic TTH (≥15 headache days/month)**
- Headaches occur very frequently
- Can significantly impact daily life

## Triggers
- **Muscular:** Poor posture, jaw clenching, neck strain
- **Psychological:** Stress, anxiety, depression
- **Environmental:** Bright lights, noise
- **Lifestyle:** Sleep disruption, skipped meals, dehydration

## Treatment
**Acute:**
- NSAIDs (ibuprofen, naproxen)
- Acetaminophen
- Combination analgesics

**Preventive (for chronic TTH):**
- Amitriptyline (tricyclic antidepressant)
- Stress management
- Physical therapy
- Cognitive behavioral therapy`,
      keyTerms: [
        { term: 'ICHD-3', definition: 'International Classification of Headache Disorders, 3rd edition; diagnostic criteria for headaches' },
        { term: 'bilateral', definition: 'Affecting both sides of the head' },
        { term: 'photophobia', definition: 'Sensitivity to light' },
        { term: 'phonophobia', definition: 'Sensitivity to sound' },
      ],
    },
    3: {
      level: 3,
      summary: 'Tension-type headache involves peripheral and central sensitization mechanisms, with episodic and chronic forms requiring different treatment approaches focusing on multimodal management.',
      explanation: `## Pathophysiology
- **Peripheral mechanism:** Myofascial tenderness, pericranial muscle sensitivity
- **Central mechanism:** Deficient endogenous pain inhibition, central sensitization
- **Neurochemical:** Serotonin and nitric oxide involvement
- **Overlap with migraine:** Many patients have both disorders

## Diagnostic Criteria (ICHD-3)
**For TTH, at least 10 episodes occurring on 1-14 days/month:**
- Lasting 30 minutes to 7 days
- At least 2 of: bilateral, pressing/tightening, mild/moderate, not aggravated by routine activity
- Both of: no nausea/vomiting, no more than one of photophobia or phonophobia

## Episodic vs Chronic
**Episodic TTH:**
- <15 headache days/month
- Usually responds to acute medications
- Focus on trigger management

**Chronic TTH:**
- ≥15 headache days/month for >3 months
- Medication overuse can complicate
- Preventive medications often needed

## Treatment
**Acute:**
- Simple analgesics (limit use to <15 days/month)
- Avoid opioids and butalbital

**Preventive:**
- Amitriptyline 10-150 mg nightly
- Mirtazapine, venlafaxine alternatives
- combination with behavioral therapy is most effective

**Non-pharmacologic:**
- Biofeedback
- Relaxation techniques
- Cognitive behavioral therapy
- Physical therapy for posture`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Increased sensitivity of central nervous system pain pathways' },
        { term: 'pericranial', definition: 'Relating to the skull surface and associated muscles' },
        { term: 'myofascial', definition: 'Relating to muscle and connective tissue' },
      ],
      clinicalNotes: 'Distinguish from migraine by absence of associated symptoms (nausea, photophobia+phonophobia together). Medication overuse headache can develop from overuse of acute treatments.',
    },
    4: {
      level: 4,
      summary: 'Complex tension-type headache management addresses comorbid depression and anxiety, pericranial muscle tenderness, medication overuse, and refractory cases requiring multidisciplinary approaches.',
      explanation: `## Comorbidities
- **Psychiatric:** Depression, anxiety (up to 70% with chronic TTH)
- **Sleep disorders:** Insomnia, sleep apnea
- **Other pain conditions:** Fibromyalgia, temporomandibular disorders

## Pericranial Muscle Examination
- Palpate temporalis, masseter, trapezius, suboccipital muscles
- Increased tenderness correlates with headache frequency
- Manual therapy can provide relief

## Medication Overuse Headache
- Develops from ≥10-15 days/month acute medication use
- Must discontinue overused medication
- Transitional medications (prednisone, NSAIDs, nerve blocks)
- Recovery may take weeks to months

## Refractory Chronic TTH
**Options when standard treatments fail:**
- **Botulinum toxin:** Limited evidence, may help with muscular component
- **Occipital nerve blocks:** Diagnostic and therapeutic
- **Tricyclic alternatives:** Nortriptyline (better tolerated), protriptyline
- **SNRI augmentation:** Duloxetine, venlafaxine
- **Multidisciplinary pain program:**
  - Physical therapy (posture, ergonomics)
  - Psychological interventions
  - Occupational therapy

## Special Populations
**Pregnancy:**
- Acetaminophen first-line
- Avoid NSAIDs in third trimester
- Nonpharmacologic options emphasized

**Adolescents:**
- Screen for depression, anxiety
- School accommodations if frequent
- Limit screen time, improve posture`,
      keyTerms: [
        { term: 'medication overuse headache', definition: 'Secondary headache caused by frequent use of acute headache medications' },
        { term: 'temporomandibular disorder', definition: 'Pain and dysfunction of jaw joint and muscles' },
        { term: 'occipital nerve block', definition: 'Injection of anesthetic near occipital nerves for headache relief' },
      ],
      clinicalNotes: 'Chronic TTH with significant depression should have depression treated concurrently. Tricyclic antidepressants treat both conditions. Physical therapy focusing on posture and cervical spine can be highly effective.',
    },
    5: {
      level: 5,
      summary: 'Advanced understanding of tension-type headache explores genetics, neuroimaging findings, novel therapeutic targets, and the distinction between migraine and TTH as a spectrum rather than discrete entities.',
      explanation: `## Neuroimaging Findings
- **Structural:** Gray matter changes in pain modulatory areas
- **Functional:** Altered pain matrix connectivity
- **Trigeminal system:** Enhanced excitability on evoked potentials
- **Biomarkers:** Elevated muscle enzymes, inflammatory markers in some patients

## Genetic Factors
- Familial aggregation suggests genetic component
- COMT gene polymorphism associated with pain perception
- Serotonin transporter gene variants
- Overlap with migraine genetic factors

## Spectrum vs Dichotomy
- Migraine and TTH may exist on continuum
- Many patients have both types
- Some "mixed" headaches share features
- Treatment implications for overlap cases

## Emerging Therapies
**Peripheral mechanisms:**
- Muscle relaxants (tizanidine, baclofen)
- Botulinum toxin for muscular component
- Trigger point injections

**Central modulation:**
- Transcranial magnetic stimulation
- Transcranial direct current stimulation
- Neurofeedback

**Novel pharmacologic:**
- Tonabersat (cortical spreading depression inhibitor)
- Gap junction inhibitors
- Nitric oxide synthase inhibitors

## Precision Medicine
- Genetic profiling for treatment selection
- Quantitative sensory testing for phenotyping
- Biomarkers for medication overuse prediction
- Personalized multidisciplinary approaches`,
      keyTerms: [
        { term: 'quantitative sensory testing', definition: 'Method to measure pain perception thresholds for patient phenotyping' },
        { term: 'tonabersat', definition: 'Cortical spreading depression inhibitor investigated for migraine and TTH' },
        { term: 'gap junction inhibitor', definition: 'Novel class targeting intercellular communication in pain pathways' },
      ],
      clinicalNotes: 'The boundary between migraine and TTH continues to blur as research shows shared mechanisms. Treatment should be individualized based on dominant features rather than rigid categorization.',
    },
  },

  media: [],
  citations: [
    { id: 'ichd-3', type: 'article', title: 'The International Classification of Headache Disorders, 3rd edition', source: 'Cephalalgia' },
    { id: 'aanh-2021', type: 'article', title: 'American Headache Society Guidelines for Tension-Type Headache', source: 'Headache' },
  ],
  crossReferences: [
    { targetId: 'condition-migraine', targetType: 'condition', relationship: 'related', label: 'Migraine' },
    { targetId: 'condition-cluster-headache', targetType: 'condition', relationship: 'sibling', label: 'Cluster Headache' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['neurology', 'pain management'],
    keywords: ['tension headache', 'TTH', 'primary headache', 'stress headache'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'medicine'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tensionHeadache;
