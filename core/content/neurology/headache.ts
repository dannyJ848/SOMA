/**
 * Headache Disorders
 *
 * Primary headache disorders including migraine, tension, and cluster headaches.
 */

import { EducationalContent } from '../types';

export const headacheContent: EducationalContent = {
  id: 'neurology-headache',
  type: 'topic',
  name: 'Headache Disorders',
  alternateNames: ['Cephalgia', 'Migraine', 'Tension Headache', 'Cluster Headache'],

  levels: {
    1: {
      level: 1,
      summary: "Headaches are very common. Most headaches are not dangerous, but severe or sudden headaches can be a sign of a serious problem. The main types are tension headaches and migraines.",
      explanation: `## Types of Headaches

**Tension Headache (Most Common):**
- Dull, aching pain
- Like a tight band around head
- Both sides of head
- Mild to moderate

**Migraine:**
- Throbbing or pulsing pain
- Usually one side
- Moderate to severe
- Nausea, vomiting
- Light and sound bother you
- Aura (visual changes) in some

**Cluster Headache (Rare, Severe):**
- Severe pain around one eye
- Happens in groups (clusters)
- Lasts 15min to 3 hours
- Eye may water, nose run
- More common in men

**Sinus Headache:**
- Pain in cheeks, forehead
- Usually with sinus infection
- Congestion, fever

## Red Flag Symptoms (Call Doctor)

- Sudden, severe "thunderclap" headache
- Headache after head injury
- Fever with stiff neck
- Vision changes
- Numbness or weakness
- Confusion or trouble speaking
- Worst headache of your life

## Prevention

- Manage stress
- Regular sleep schedule
- Drink enough water
- Exercise regularly
- Eat regular meals
- Avoid triggers`,

      keyTerms: [
        { term: 'Migraine', definition: 'Severe headache often with nausea and light sensitivity' },
        { term: 'Aura', definition: 'Visual or sensory changes before migraine starts' },
        { term: 'Tension headache', definition: 'Dull, squeezing headache from muscle tension' },
        { term: 'Thunderclap', definition: 'Sudden, severe headache that peaks within seconds - emergency!' },
      ],
      analogies: [
        'A tension headache is like wearing a too-tight hat all day.',
        'A thunderclap headache is like a bomb going off in your head.',
      ],
      examples: [
        'Person with throbbing one-sided headache and nausea (migraine)',
        'Someone with dull band-like headache from stress (tension)',
        'Man with severe eye pain happening nightly for weeks (cluster)',
      ],
    },

    2: {
      level: 2,
      summary: 'Primary headaches (migraine, tension, cluster) have no secondary cause. Red flags suggest secondary headache requiring urgent evaluation including neuroimaging.',
      explanation: `## Migraine

**Phases:**
1. Prodrome: Mood changes, food cravings (hours before)
2. Aura: Visual, sensory, language changes (30-60 min)
3. Headache: Throbbing, unilateral, 4-72 hours
4. Postdrome: "Hangover" feeling (24-48 hours)

**Diagnostic Criteria (ICHD-3):**
- At least 5 attacks
- Lasting 4-72 hours
- At least 2 of: unilateral, throbbing, moderate-severe, aggravates with activity
- At least 1 of: nausea/vomiting OR photophobia/phonophobia
- Not better accounted for by other diagnosis

## Tension-Type Headache

**Diagnostic Criteria:**
- At least 10 episodes
- Lasting 30min to 7 days
- Bilateral, pressing/tightening quality
- Mild-moderate intensity
- No aggravation with routine activity
- No nausea or vomiting (may have photophobia OR phonophobia, not both)

## Cluster Headache

**Diagnostic Criteria:**
- At least 5 attacks
- Severe unilateral orbital/supraorbital/temporal pain
- 15-180 minutes if untreated
- At least one of: ipsilateral conjunctival injection, lacrimation, nasal congestion, rhinorrhea, eyelid edema, forehead/facial sweating, miosis, ptosis
- Circadian periodicity (occur same time daily)

## Red Flags (SNOOP4)

**S**ystemic symptoms (fever, weight loss)
**N**eurologic symptoms (confusion, weakness)
**O**nset sudden, thunderclap
**O**lder (>50 new onset)
**P**attern change, positional, papilledema
**4** - Precipitated by valsalva, postural`,

      keyTerms: [
        { term: 'Prodrome', definition: 'Early warning symptoms before headache begins' },
        { term: 'Photophobia', definition: 'Light sensitivity' },
        { term: 'Phonophobia', definition: 'Sound sensitivity' },
        { term: 'Conjunctival injection', definition: 'Red, bloodshot eye' },
      ],
      analogies: [
        'The prodrome is like the calm before the storm - warning signs.',
        'Photophobia is like your eyes are too sensitive for the world.',
      ],
      examples: [
        'Person with visual zig-zags before headache (migraine with aura)',
        'Patient with bilateral pressure headache from stress (tension)',
        'Man with nightly cluster headaches at 2am for 6 weeks',
      ],
      clinicalNotes: 'Migraine is underdiagnosed. Only half of migraineurs seek medical help. Aura can occur without headache (acephalgic migraine). Mimics: TIA, stroke. Migraine with aura increases stroke risk 2x, especially in women on OCPs.',
    },

    3: {
      level: 3,
      summary: 'Migraine treatment includes acute (triptans, NSAIDs) and preventive (beta-blockers, topiramate, CGRP antagonists) therapies. Cluster headache requires oxygen and verapamil.',
      explanation: `## Migraine Treatment

**Acute/Abortive:**
- Mild: NSAIDs, acetaminophen, aspirin
- Moderate: Triptans (sumatriptan, rizatriptan, etc.)
- Severe: Sumatriptan SC or nasal, DHE
- Adjunct: Antiemetics (metoclopramide, prochlorperazine)

**Preventive (Indication: ≥4 attacks/month):**
- First-line:
  - Propranolol 40-240mg daily
  - Amitriptyline 25-150mg at bedtime
  - Topiramate 25-100mg daily
- Second-line:
  - Valproate 250-500mg BID
  - CGRP antagonists (erenumab, fremanezumab, galcanezumab)
  - Botox (chronic migraine)

**Contraindications to Triptans:**
- Cardiovascular disease
- Uncontrolled hypertension
- Hemiplegic/basilar migraine
- Within 24 hours of ergot or another triptan

## Cluster Headache Treatment

**Acute:**
- 100% oxygen by non-rebreather (15-20 minutes)
- Sumatriptan SC or nasal (faster than oral)
- Intranasal lidocaine

**Preventive:**
- Verapamil 240-480mg daily (first-line)
- Steroid taper (bridge therapy)
- Greater occipital nerve block
- Lithium (refractory cases)

## Tension Headache Treatment

**Acute:**
- NSAIDs, acetaminophen
- Avoid opioids (can cause MOH)

**Preventive:**
- Amitriptyline 10-100mg at bedtime
- Stress management, CBT
- Physical therapy`,

      keyTerms: [
        { term: 'Triptans', definition: 'Class of drugs specifically for migraines (sumatriptan, etc.)' },
        { term: 'CGRP', definition: 'Calcitonin Gene-Related Peptide - new migraine drug target' },
        { term: 'MOH', definition: 'Medication Overuse Headache - rebound from frequent pain med use' },
        { term: 'Botox', definition: 'Botulinum toxin - used for chronic migraine prevention' },
      ],
      analogies: [
        'Medication overuse headache is like a debt that keeps growing - the more you take, the worse it gets.',
        'Oxygen for cluster headache is like a fire extinguisher - puts out the pain fast.',
      ],
      examples: [
        'Migraine patient with 8 attacks/month starts topiramate',
        'Cluster headache relieved with 100% oxygen',
        'Patient taking ibuprofen daily develops rebound headaches',
      ],
      clinicalNotes: 'Medication overuse headache: ≥10-15 days/month of abortive for >3 months. Treatment: stop overused medication, bridge with preventive, may have withdrawal headache. Triptans: contraindicated in hemiplegic/basilar migraine (may cause stroke).',
    },

    4: {
      level: 4,
      summary: 'Secondary headaches require identification of underlying cause. Red flag symptoms should prompt neuroimaging. Lumbar puncture if meningitis or SAH suspected.',
      explanation: `## Secondary Headaches

**Subarachnoid Hemorrhage:**
- Thunderclap headache
- "Worst headache of my life"
- LP with xanthochromia if CT negative
- CTA to find aneurysm

**Meningitis/Encephalitis:**
- Headache + fever + stiff neck
- Photophobia, altered mental status
- LP for diagnosis
- Treat urgently

**Giant Cell Arteritis:**
- New headache in elderly >50
- Scalp tenderness, jaw claudication
- Vision loss (irreversible!)
- ESR, CRP elevated
- Treat with high-dose steroids (don't wait for biopsy!)

**Temporal Mandibular Joint:**
- Jaw pain with chewing
- Clicking, popping
- Morning headaches

**Cervicogenic:**
- Pain from neck
- Worse with neck movement
- Occipital nerve block diagnostic

**Medication Overuse:**
- Daily analgesic use
- Wakes with headache
- Improves with medication withdrawal

## Headache Triggers

**Migraine Triggers:**
- Stress, hormonal changes
- Sleep changes (too much/little)
- Fasting/dehydration
- Foods: aged cheese, MSG, alcohol (red wine)
- Sensory: bright lights, strong smells

**Lifestyle Modifications:**
- Sleep hygiene
- Regular meals
- Hydration
- Stress reduction
- Exercise (but not during attack)
- Headache diary to identify triggers`,

      keyTerms: [
        { term: 'Xanthochromia', definition: 'Yellowish CSF from blood breakdown - SAH diagnosis' },
        { term: 'Jaw claudication', definition: 'Jaw pain when chewing - sign of GCA' },
        { term: 'Cervicogenic', definition: 'Headache originating from neck problems' },
        { term: 'MSG', definition: 'Monosodium glutamate - food additive that triggers migraines' },
      ],
      analogies: [
        'Xanthochromia is like finding the yellow ticket to diagnose SAH.',
        'Jaw claudication is like your jaw getting tired from eating - a sign of GCA.',
      ],
      examples: [
        'Elderly woman with new headache and vision changes - GCA emergency',
        'Thunderclap headache with normal CT needs LP',
        'Patient with daily Excedrin use develops rebound headaches',
      ],
      clinicalNotes: "GCA: Start prednisone 40-60mg immediately, don't wait for temporal artery biopsy. Biopsy can be done up to 2 weeks after starting steroids. Vision loss is irreversible - prevent by urgent treatment. ESR >50 is suggestive but not required.",
    },

    5: {
      level: 5,
      summary: 'Headache is one of the most common reasons for medical visits. Accurate diagnosis and appropriate treatment can significantly improve quality of life and reduce healthcare utilization.',
      explanation: `## Emerging Therapies

**CGRP Antagonists:**
- Erenumab (Aimovig): Monthly SC injection
- Fremanezumab (Ajovy): Monthly or quarterly
- Galcanezumab (Emgality): Monthly
- Rimegepant (Nurtec): Oral (acute and preventive)
- Ubrogepant (Ubrelvy): Oral acute

**Lasmiditan (Reyvow):**
- Selective 5-HT1F agonist
- Alternative for patients with CVD
- Can cause dizziness, sedation

**Ditans (Lasmiditan):**
- 5-HT1F agonist
- No vasoconstriction (safer in CVD)
- Limited by side effects

**Neuromodulation:**
- Cefaly (external trigeminal nerve stim)
- GammaCore (vagus nerve stim)
- SpringTMS (transcranial magnetic stim)
- eTNS (trigeminal nerve stim)

## Controversies

**PFO Closure for Migraine:**
- MIST trial: showed benefit
- PRIMA trial: negative
- Not routinely recommended
- Consider for refractory migraine with aura

**Opioids for Migraine:**
- Generally contraindicated
- Risk of MOH, addiction
- Limited evidence for efficacy
- Reserve for refractory cases

**Neuroimaging for Chronic Headache:**
- Not indicated if stable pattern, normal exam
- Red flags should prompt imaging
- MRI preferred over CT (better for posterior fossa, tumors)

## Special Populations

**Pregnancy:**
- Avoid valproate, topiramate
- Safe: Acetaminophen, sumatriptan
- NSAIDs after 20 weeks
- Magnesium infusion (acute)
- Biofeedback, relaxation

**Pediatrics:**
- Abdominal migraine common
- Cyclical vomiting syndrome
- Migraine with common aura (Alice in Wonderland)
- Treatment similar to adults but weight-based dosing`,

      keyTerms: [
        { term: 'CGRP', definition: 'Calcitonin Gene-Related Peptide - new migraine drug target' },
        { term: 'PFO', definition: 'Patent Foramen Ovale - hole in heart associated with migraine' },
        { term: 'Biofeedback', definition: 'Technique to control body functions to reduce headache' },
        { term: 'Alice in Wonderland', definition: 'Migraine aura with distorted perception - objects appear too small/large' },
      ],
      analogies: [
        'CGRP antagonists are like specialized bombs targeting migraine pathways.',
        'PFO closure is like patching a hole that might be triggering migraines.',
      ],
      examples: [
        'Patient with CVD gets lasmiditan instead of triptan',
        'Pregnant woman with migraine gets sumatriptan and magnesium',
        'Child with cyclical vomiting diagnosed with abdominal migraine',
      ],
      clinicalNotes: 'Migraine disability assessment (MIDAS) helps quantify impact and guide treatment intensity. Chronic migraine: ≥15 headache days/month for >3 months, with ≥8 having migraine features. Botox indicated for chronic migraine, 31 injections every 12 weeks.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['neurology', 'headache', 'migraine', 'cluster', 'pain'],
    systems: ['nervous'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['neurology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
