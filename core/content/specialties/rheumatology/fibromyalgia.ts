/**
 * Fibromyalgia - Comprehensive Educational Content
 *
 * Chronic widespread pain syndrome with central sensitization
 * and associated symptoms.
 */

import { EducationalContent } from '../../types';

export const fibromyalgiaContent: EducationalContent = {
  id: 'condition-fibromyalgia',
  type: 'condition',
  name: 'Fibromyalgia',
  alternateNames: ['FM', 'Fibromyalgia Syndrome', 'FMS', 'Central Sensitization Syndrome'],
  hpoId: 'HP:0040129',

  levels: {
    1: {
      level: 1,
      summary: 'Fibromyalgia is a condition that causes widespread pain throughout the body, along with fatigue, sleep problems, and memory issues.',
      explanation: `Fibromyalgia is a chronic condition that causes pain all over your body.

**What Happens:**
- Your brain processes pain signals differently
- Things that should not hurt become painful
- Your body becomes more sensitive to pain

**Common Symptoms:**
- Widespread pain (aching, burning, throbbing)
- Fatigue and tiredness
- Sleep problems (waking up tired)
- Brain fog (trouble concentrating)
- Headaches
- Depression and anxiety

**Who Gets Fibromyalgia:**
- More common in women
- Often starts in middle age
- May occur after physical or emotional stress
- Can coexist with other conditions (arthritis, lupus)

**Treatment:**
- Regular exercise (most important)
- Better sleep habits
- Stress reduction
- Medications for pain and sleep
- Physical therapy`,
      keyTerms: [
        { term: 'widespread pain', definition: 'Pain affecting many parts of the body' },
        { term: 'central sensitization', definition: 'When the nervous system becomes overly sensitive to pain' },
        { term: 'brain fog', definition: 'Difficulty thinking clearly or concentrating' },
      ],
      analogies: [
        'Your nervous system is like a volume control for pain. In fibromyalgia, the volume is turned up too high, making everything feel more painful.',
      ],
      examples: [
        'A woman in her 40s feels exhausted and achy all over, especially after poor sleep.',
        'Someone with fibromyalgia finds that gentle exercise and stress reduction help reduce their pain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fibromyalgia is a central sensitization syndrome characterized by chronic widespread pain, fatigue, and sleep disturbance; diagnosis is clinical based on symptoms and exclusion of other conditions.',
      explanation: `Fibromyalgia is a disorder of pain processing and central sensitization.

**Diagnostic Criteria (2016 ACR):**
- Widespread pain index (WPI) and symptom severity (SS) scale
- WPI ≥7 and SS ≥5, OR WPI ≥5 and SS ≥9
- Symptoms for ≥3 months
- No alternative diagnosis explaining symptoms

**Core Symptoms:**
- Chronic widespread pain
- Fatigue (present in 90%)
- Sleep disturbance (non-restorative sleep)
- Cognitive dysfunction ("fibro fog")

**Associated Conditions:**
- Irritable bowel syndrome
- Temporomandibular disorder
- Chronic pelvic pain
- Migraine
- Interstitial cystitis

**Pathophysiology:**
- Central sensitization: Lowered pain threshold
- Altered central pain processing
- Neuroendocrine abnormalities (HPA axis)
- Small fiber neuropathy in subset

**Treatment Approach:**
- Non-pharmacologic first: Education, exercise, CBT
- Pharmacologic: Duloxetine, milnacipran, pregabalin
- Multidisciplinary approach most effective`,
      keyTerms: [
        { term: 'WPI', definition: 'Widespread Pain Index; count of painful body areas' },
        { term: 'central sensitization', definition: 'Amplified pain processing in CNS' },
        { term: 'CBT', definition: 'Cognitive behavioral therapy; effective for fibromyalgia' },
      ],
    },
    3: {
      level: 3,
      summary: 'Fibromyalgia treatment prioritizes non-pharmacologic interventions (exercise, CBT); FDA-approved medications include duloxetine, milnacipran, and pregabalin; aerobic exercise is most effective intervention.',
      explanation: `Evidence-based fibromyalgia management integrates multiple treatment modalities.

**Non-Pharmacologic Treatment:**

*Exercise:*
- Aerobic exercise: Most effective intervention
- Start low, progress slowly
- Pool/water exercise well-tolerated
- Strength and flexibility training also beneficial

*Cognitive Behavioral Therapy:*
- Addresses pain catastrophizing
- Improves self-efficacy
- Group format effective

*Other Interventions:*
- Sleep hygiene education
- Stress management
- Tai chi, yoga: Evidence of benefit

**Pharmacologic Treatment:**

*FDA-Approved:*
- Duloxetine: SNRI, 30-60 mg daily
- Milnacipran: SNRI, 50 mg twice daily
- Pregabalin: Alpha-2-delta ligand, 150-450 mg daily

*Off-Label:*
- Amitriptyline: TCA, low dose (10-50 mg at bedtime)
- Gabapentin: Alpha-2-delta ligand
- Cyclobenzaprine: Muscle relaxant

**Treatment Principles:**
- Start with non-pharmacologic
- Combine pharmacologic and non-pharmacologic
- Set realistic expectations
- Address comorbid depression/anxiety`,
      keyTerms: [
        { term: 'pain catastrophizing', definition: 'Exaggerated negative mental response to pain' },
        { term: 'milnacipran', definition: 'SNRI FDA-approved for fibromyalgia' },
        { term: 'self-efficacy', definition: 'Confidence in managing one\'s condition' },
      ],
    },
    4: {
      level: 4,
      summary: 'Fibromyalgia management requires patient education, graduated exercise, and targeted pharmacotherapy; avoid opioids; comorbid conditions (depression, sleep disorders) require treatment; multidisciplinary care is optimal.',
      explanation: `Comprehensive fibromyalgia management addresses all aspects of the syndrome.

**Assessment Tools:**
- Fibromyalgia Impact Questionnaire (FIQ)
- Pain severity and interference scales
- Screening for depression (PHQ-9), anxiety (GAD-7)
- Sleep quality assessment

**Medication Selection:**
- Comorbid depression: Duloxetine, milnacipran
- Sleep disturbance: Amitriptyline, cyclobenzaprine, pregabalin
- Comorbid anxiety: Duloxetine, pregabalin
- Combination therapy may be needed

**Opioids:**
- NOT recommended for fibromyalgia
- No evidence of benefit
- Risk of hyperalgesia, dependence
- May worsen central sensitization

**Comorbidities:**
- Depression/anxiety: Common; treat concurrently
- Sleep disorders: Screen for OSA, restless legs
- Rheumatic diseases: Common comorbidity; address both

**Prognosis:**
- Chronic condition with fluctuating course
- Improvement achievable in most patients
- Early intervention may improve outcomes
- Complete remission rare`,
      keyTerms: [
        { term: 'hyperalgesia', definition: 'Increased sensitivity to pain; can be opioid-induced' },
        { term: 'FIQ', definition: 'Fibromyalgia Impact Questionnaire; measures disease impact' },
        { term: 'multidisciplinary care', definition: 'Team approach including medicine, PT, psychology' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert fibromyalgia management integrates patient-centered care, evidence-based treatments, and treatment of comorbid conditions; emerging therapies target norepinephrine and glutamate systems; patient education is fundamental.',
      explanation: `Advanced fibromyalgia care addresses treatment optimization and emerging approaches.

**Mechanism-Based Treatment:**
- Serotonin-norepinephrine: SNRIs (duloxetine, milnacipran)
- Glutamate/GABA: Pregabalin, gabapentin
- Central pain modulation: TCAs, tizanidine
- Small fiber neuropathy subtype: IVIG (investigational)

**Treatment-Resistant Cases:**
- Verify diagnosis: Exclude mimics
- Optimize current treatments
- Address comorbidities: Sleep, mood, other pain conditions
- Consider combination therapy
- Referral to specialized center

**Patient Education:**
- Validate the condition (real, not "all in your head")
- Explain central sensitization model
- Set realistic expectations
- Emphasize self-management
- Support groups

**Emerging Therapies:**
- Low-dose naltrexone: Small studies suggest benefit
- NMDA receptor antagonists: Ketamine (investigational)
- Transcranial magnetic stimulation: Preliminary data
- Virtual reality: Adjunctive therapy

**Quality of Life:**
- Focus on function, not just pain reduction
- Work accommodations may be needed
- Social support crucial
- Address stigma and invalidation`,
      keyTerms: [
        { term: 'low-dose naltrexone', definition: 'Investigational treatment; may modulate glial activation' },
        { term: 'NMDA receptor', definition: 'Glutamate receptor; target for pain modulation' },
        { term: 'small fiber neuropathy', definition: 'Present in subset of fibromyalgia patients' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['nervous', 'musculoskeletal'],
    topics: ['pain', 'chronic pain', 'central sensitization'],
    keywords: ['fibromyalgia', 'chronic pain', 'central sensitization', 'FM'],
    clinicalRelevance: 'medium',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default fibromyalgiaContent;
