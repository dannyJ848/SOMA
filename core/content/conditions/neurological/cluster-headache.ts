/**
 * Cluster Headache - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const clusterHeadache: EducationalContent = {
  id: 'condition-cluster-headache',
  type: 'condition',
  name: 'Cluster Headache',
  nameEs: 'Cefalea en Racimos',
  alternateNames: ['Cluster Headache Syndrome', 'CH', 'Hortons Headache', 'Suicide Headache'],
  hpoId: 'HP:0002076',

  levels: {
    1: {
      level: 1,
      summary: 'Cluster headaches are severe, one-sided headaches that happen in groups or clusters, causing intense pain around one eye.',
      explanation: `Cluster headaches are among the most painful conditions known. They are called "cluster" because they happen in groups.

**Key features:**
- Extremely severe pain (often on one side)
- Pain behind or around one eye
- Headaches occur in clusters (weeks to months)
- Then long headache-free periods
- Same side usually affected each time

**Associated symptoms:**
- Red, watery eye
- Runny or stuffy nose
- Drooping eyelid
- Restlessness (pacing, rocking)

**Patterns:**
- **Episodic:** Clusters with long remissions
- **Chronic:** No long breaks between clusters

**Triggers:**
- Alcohol during cluster period
- Strong smells
- Heat
- Certain medications (nitroglycerin)

**Important:** These are NOT migraines. The pain is shorter but more intense.`,
      keyTerms: [
        { term: 'cluster headache', definition: 'Very severe one-sided headaches that occur in groups or cycles' },
        { term: 'remission', definition: 'A period of time without symptoms' },
      ],
      analogies: ['Cluster headaches are like lightning strikes—brief but incredibly intense, and they tend to strike in storms (clusters).'],
      examples: ['A man wakes up at 2 AM every night for 6 weeks with excruciating pain behind his right eye, with tearing and nasal congestion.'],
    },
    2: {
      level: 2,
      summary: 'Cluster headache is a trigeminal autonomic cephalalgia characterized by severe unilateral orbital pain with autonomic symptoms, occurring in circadian and circannual patterns.',
      explanation: `## Clinical Features (ICHD-3)

**Attack characteristics:**
- Severe unilateral orbital/temporal pain
- Duration: 15-180 minutes
- Frequency: Every other day to 8 times/day
- Restlessness (agitation, pacing) is characteristic

**Autonomic symptoms (ipsilateral):**
- Ptosis (drooping eyelid)
- Miosis (constricted pupil)
- Lacrimation (tearing)
- Conjunctival injection
- Rhinorrhea or nasal congestion
- Forehead/facial sweating

**Patterns:**
- **Episodic CH (80-90%):** Clusters lasting 2 weeks to 3 months, separated by ≥1 month remission
- **Chronic CH (10-20%):** No remission or remission <1 month

**Circadian patterns:**
- Nocturnal attacks common
- Attacks often same time daily
- Clusters may occur seasonally

**Triggers:**
- Alcohol (only during cluster period)
- Nitroglycerin
- Histamine
- Hypoxia (high altitude)

**Clinical pearl:** Unlike migraine, patients with cluster headache are restless and agitated during attacks.`,
      keyTerms: [
        { term: 'trigeminal autonomic cephalalgia', definition: 'Group of headache disorders involving trigeminal nerve activation and autonomic symptoms' },
        { term: 'ipsilateral', definition: 'On the same side as the pain' },
        { term: 'ptosis', definition: 'Drooping of the upper eyelid' },
        { term: 'miosis', definition: 'Constriction of the pupil' },
        { term: 'circadian', definition: 'Related to daily or 24-hour cycles' },
      ],
    },
    3: {
      level: 3,
      summary: 'Cluster headache involves hypothalamic activation and trigeminal-autonomic reflexes, treated with acute oxygen therapy, triptans, and preventive agents including verapamil and galcanezumab.',
      explanation: `## Pathophysiology
- **Hypothalamus:** Central generator (imaging shows activation)
- **Trigeminal-autonomic reflex:** Trigeminal nerve → parasympathetic outflow
- **Circadian rhythms:** Hypothalamic involvement explains timing
- **Posterior hypothalamic gray matter:** Increased metabolism on PET
- **Genetic:** HLA associations, autosomal dominant inheritance in some families

## Diagnostic Criteria (ICHD-3)
**At least 5 attacks of:**
- Severe unilateral orbital/temporal pain lasting 15-180 min
- At least 1 ipsilateral autonomic symptom
- Circadian and circannual patterns
- At least 1 of the following: agitation, restlessness

## Treatment

**Acute (abortive):**
- **High-flow oxygen (100%, 12-15 L/min):** 70-80% effective
- **Sumatriptan:** Subcutaneous 6mg (most effective), nasal 20mg
- **Zolmitriptan:** Nasal spray 5-10mg
- **Intranasal lidocaine:** Adjunctive

**Preventive:**
- **Verapamil:** First-line (240-960 mg/day divided)
- **Galcanezumab:** CGRP mAb (FDA approved)
- **Lithium:** For chronic CH or refractory cases
- **Topiramate, valproate:** Alternatives

**Transitional/short-term:**
- Prednisone taper (for cluster initiation)
- Occipital nerve blocks
- Greater occipital nerve stimulation`,
      keyTerms: [
        { term: 'verapamil', definition: 'Calcium channel blocker; first-line preventive for cluster headache' },
        { term: 'galcanezumab', definition: 'CGRP monoclonal antibody; FDA approved for cluster headache' },
        { term: 'occipital nerve block', definition: 'Injection of anesthetic and steroid near occipital nerve for pain relief' },
      ],
      clinicalNotes: 'Oxygen is the only non-invasive acute treatment. Monitor ECG with verapamil due to risk of heart block. ESR should be monitored on verapamil. Glaucoma is a contraindication to triptans.',
    },
    4: {
      level: 4,
      summary: 'Refractory cluster headache management includes neuromodulation devices, surgical options, melatonin augmentation, and specialized protocols for verapamil dosing with ECG monitoring.',
      explanation: `## Verapamil Protocol
**Dosing:**
- Start: 80 mg TID (240 mg/day)
- Increase by 80 mg every 1-2 weeks
- Target: 480-960 mg/day (divided TID)
- Monitor ECG at baseline, after each dose change, and periodically

**ECG monitoring:**
- PR interval prolongation is common
- Stop if PR >200 ms or develops heart block
- May need cardiology consultation for high doses

**ESR monitoring:**
- Baseline and periodic checks
- Can cause granulomatous disease at high doses

## Refractory Cluster Headache
**Definition:** Failure of adequate trial of verapamil and at least 2 other preventives

**Neuromodulation:**
- **Occipital nerve stimulation:** 60-70% response rate
- **Sphenopalatine ganglion stimulation:** FDA approved
- **Vagus nerve stimulation:** Emerging evidence

**Surgical options (last resort):**
- Radiofrequency ablation of trigeminal ganglion
- Microvascular decompression
- Hypothalamic deep brain stimulation (very rare, high risk)

## Special Situations

**Pediatric cluster headache:**
- Rare but reported
- Similar treatment to adults
- Verapamil dosing weight-based

**Pregnancy:**
- Oxygen is safe (first-line acute)
- Verapamil generally considered safe
- Avoid triptans if possible (limited data)
- Occipital nerve blocks preferred over medications

**Elderly:**
- Start verapamil at lower doses
- Monitor closely for cardiac effects
- Consider comorbidities`,
      keyTerms: [
        { term: 'PR interval', definition: 'ECG measurement reflecting conduction through atrioventricular node' },
        { term: 'sphenopalatine ganglion', definition: 'Neural cluster involved in autonomic symptoms of cluster headache' },
        { term: 'deep brain stimulation', definition: 'Neurosurgical implant for modulating brain activity in refractory cases' },
      ],
      clinicalNotes: 'PR interval prolongation is common with verapamil—required ECG monitoring prevents complications. Sphenopalatine ganglion stimulation offers non-pharmacologic option for refractory cases.',
    },
    5: {
      level: 5,
      summary: 'Emerging cluster headache research identifies novel targets including PACAP, orexin, and hypothalamic neuropeptides, with advances in neuroimaging, genetic profiling, and personalized treatment approaches.',
      explanation: `## Novel Molecular Targets

**PACAP (Pituitary Adenylate Cyclase-Activating Polypeptide):**
- Elevation during cluster attacks
- PACAP-38 induces attacks in CH patients
- Monoclonal antibodies in development
- May complement CGRP pathway

**Orexin/Hypocretin:**
- Hypothalamic neuropeptide
- Sleep-wake regulation
- Low CSF levels in cluster patients
- Orexin antagonists under investigation

**Melatonin:**
- Circadian regulation
- Low urinary melatonin in CH
- Adjunctive preventive (10 mg at bedtime)
- Pineal calcification associations

## Advanced Neuroimaging
- **Hypothalamic activation:** fMRI, PET studies
- **Microstructural changes:** DTI shows white matter alterations
- **Functional connectivity:** Default mode network changes
- **Voxel-based morphometry:** Gray matter volume changes

## Genetic Insights
- **CACNA1A:** Calcium channel gene mutations
- **ADRB2:** Beta-2 adrenergic receptor polymorphism
- **HCRTR2:** Hypocretin receptor 2 variants
- **Familial patterns:** Autosomal dominant with incomplete penetrance

## Precision Medicine
- **Chronotherapy:** Timing medications to circadian patterns
- **Biomarker-guided:** PACAP and CGRP levels
- **Genetic profiling:** Treatment response prediction
- **Phenotype-specific:** Autonomic vs pain predominance

## Future Directions
- **Non-invasive neuromodulation:** Transcutaneous VNS, tVNS
- **Gene therapy:** Theoretical for refractory cases
- **Monoclonal antibodies:** Anti-PACAP, dual CGRP/PACAP
- **Hypothalamic stimulation refinement:** Safer targeting methods`,
      keyTerms: [
        { term: 'PACAP-38', definition: 'Specific isoform of PACAP implicated in cluster headache pathophysiology' },
        { term: 'CSF hypocretin', definition: 'Low levels found in cluster patients; involved in sleep regulation' },
        { term: 'chronotherapy', definition: 'Treatment timed to circadian or seasonal patterns' },
      ],
      clinicalNotes: 'PACAP represents the next major therapeutic target after CGRP. Melatonin offers a safe adjunctive option, especially for circadian patterning. Genetic profiling may eventually guide preventive medication selection.',
    },
  },

  media: [],
  citations: [
    { id: 'ichd-3', type: 'article', title: 'The International Classification of Headache Disorders, 3rd edition', source: 'Cephalalgia' },
    { id: 'aanh-2021', type: 'article', title: 'American Headache Society Consensus Statement on Cluster Headache', source: 'Headache' },
  ],
  crossReferences: [
    { targetId: 'condition-migraine', targetType: 'condition', relationship: 'related', label: 'Migraine' },
    { targetId: 'condition-tension-headache', targetType: 'condition', relationship: 'sibling', label: 'Tension Headache' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['neurology', 'pain management'],
    keywords: ['cluster headache', 'trigeminal autonomic cephalalgia', 'TAC', 'verapamil', 'oxygen therapy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'medicine'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default clusterHeadache;
