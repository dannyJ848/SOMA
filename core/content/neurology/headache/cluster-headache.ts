/**
 * Cluster Headache - In-Depth Neurology Content
 *
 * Comprehensive coverage of cluster headache pathophysiology, trigeminal autonomic
 * cephalalgias, acute and preventive management, and emerging therapies.
 */

import { EducationalContent } from '../../types';

export const clusterHeadacheContent: EducationalContent = {
  id: 'neuro-cluster-headache-depth',
  type: 'condition',
  name: 'Cluster Headache',
  nameEs: 'Cefalea en Racimos',
  alternateNames: ['Cluster Cephalalgia', 'Horton Headache', 'Suicide Headache'],
  hpoId: 'HP:0100818',

  levels: {
    1: {
      level: 1,
      summary:
        'Cluster headache causes extremely severe pain around one eye that comes in repeated attacks lasting 15 minutes to 3 hours, often with eye tearing and nasal congestion on the same side.',
      explanation: `## What Is a Cluster Headache?

Cluster headache is one of the most painful conditions known. It causes intense, burning or stabbing pain around one eye or temple. The pain is so severe it has been called "suicide headache."

## How It Feels

- Excruciating pain around one eye (always the same side)
- Pain peaks within minutes and lasts 15 minutes to 3 hours
- Attacks happen 1-8 times per day
- Often occurs at the same time each day (frequently at night, waking from sleep)
- Cannot sit still - patients pace, rock, or press on the painful area

## Associated Symptoms (Same Side as Pain)

- Eye becomes red and watery
- Eyelid droops or swells
- Pupil gets smaller
- Nose gets congested or runny
- Face and forehead sweat

## Cluster Patterns

**Episodic (80-90%):**
- Attacks come in "clusters" lasting weeks to months
- Then go away completely for months to years (remission)
- Often seasonal (spring/fall)

**Chronic (10-20%):**
- Attacks occur for more than a year without a remission period longer than 3 months

## Who Gets Cluster Headaches?

- Much less common than migraine (about 1 in 1,000 people)
- More common in men (3:1 ratio)
- Usually starts between ages 20-40
- Smoking is a risk factor
- Alcohol triggers attacks during a cluster period (but not during remission)

## Treatment

**During an attack:**
- High-flow oxygen through a mask (15 liters/minute) - works in minutes
- Injectable sumatriptan - fast-acting pain relief
- Nasal spray sumatriptan or zolmitriptan

**To prevent attacks:**
- Verapamil (a heart medication) is the main preventive
- Steroids (prednisone) for short-term bridge
- Other options if verapamil does not work`,

      keyTerms: [
        { term: 'cluster headache', definition: 'An extremely painful headache around one eye that comes in repeated attacks over weeks or months' },
        { term: 'cluster period', definition: 'The weeks or months when attacks happen regularly' },
        { term: 'remission', definition: 'A period when cluster attacks stop completely' },
        { term: 'oxygen therapy', definition: 'Breathing pure oxygen through a mask, which quickly relieves cluster headache pain' },
      ],
      analogies: [
        'Cluster headache pain is often described as feeling like a hot poker being pushed through the eye.',
        'The cluster pattern is like a seasonal storm system - attacks come in waves, then clear completely before returning.',
        'High-flow oxygen works on cluster headache like a fire extinguisher on a fire - rapid and effective.',
      ],
      examples: [
        'A man wakes up at 2 AM every night for 6 weeks with searing pain behind his right eye, with tearing and a runny nose on that side.',
        'A smoker gets cluster headaches every spring for 2 months, triggered by even one sip of alcohol during the cluster period.',
        'A patient paces the room pressing on his eye during an attack - unlike migraine patients who lie still in the dark.',
      ],
      patientCounselingPoints: [
        'Keep a high-flow oxygen tank at home during cluster periods - it is the fastest treatment.',
        'Avoid ALL alcohol during a cluster period, even small amounts.',
        'Attacks often come at predictable times - prepare your treatments in advance.',
        'Cluster headache is a recognized medical condition - you deserve proper diagnosis and treatment.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Cluster headache is a trigeminal autonomic cephalalgia (TAC) characterized by strictly unilateral severe periorbital pain with ipsilateral cranial autonomic features, treated acutely with oxygen and triptans and prevented with verapamil.',
      explanation: `## Classification: Trigeminal Autonomic Cephalalgias (TACs)

Cluster headache belongs to a group of headache disorders called TACs, all sharing:
- Unilateral pain in trigeminal distribution
- Ipsilateral autonomic features (tearing, congestion, Horner-like signs)

| Feature | Cluster | Paroxysmal Hemicrania | SUNCT/SUNA | Hemicrania Continua |
|---------|---------|----------------------|------------|---------------------|
| Duration | 15-180 min | 2-30 min | 1-600 sec | Continuous |
| Frequency | 1-8/day | 5-40/day | 3-200/day | Constant |
| Gender | Male 3:1 | Female 2:1 | Male 2:1 | Female slight |
| Treatment | O2, triptans | Indomethacin | Lamotrigine | Indomethacin |
| Restlessness | Yes | Yes | Yes | Less prominent |

## ICHD-3 Criteria for Cluster Headache

A. At least 5 attacks fulfilling B-D:
B. Severe or very severe unilateral orbital, supraorbital, and/or temporal pain lasting 15-180 minutes (untreated)
C. Either or both:
  1. At least one ipsilateral autonomic feature: Conjunctival injection, lacrimation, nasal congestion, rhinorrhea, forehead/facial sweating, miosis, ptosis, eyelid edema
  2. Restlessness or agitation
D. Frequency: 1 every other day to 8 per day during active period
E. Not better accounted for by another diagnosis

**Episodic:** Attacks in periods of 7 days to 1 year, with remission >=3 months
**Chronic:** Attacks for >1 year without remission >=3 months

## Clinical Features in Detail

**Pain Characteristics:**
- Excruciating, often described as 10/10
- Periorbital, retro-orbital, temporal
- Strictly unilateral (may switch sides between cluster periods, rarely)
- Rapid onset (peaks in 5-10 minutes)
- Circadian pattern: Attacks at predictable times, often nocturnal (REM sleep-related)

**Autonomic Features (ipsilateral):**
- Conjunctival injection (red eye): ~80%
- Lacrimation (tearing): ~90%
- Nasal congestion or rhinorrhea: ~75%
- Partial Horner syndrome (miosis, ptosis): ~70%
- Forehead/facial sweating: ~60%
- Eyelid edema: ~40%

**Behavioral Response:**
- Agitation and restlessness (pathognomonic) - patients pace, rock, press on eye
- Cannot lie still (contrast with migraine)

## Acute Treatment

**First-Line:**
1. **High-flow oxygen**: 100% O2 at 12-15 L/min via non-rebreather mask
   - Effective in ~70% within 15 minutes
   - No side effects or contraindications
   - Demand valve or high-flow mask preferred
2. **Subcutaneous sumatriptan**: 6mg SC injection
   - Effective in ~75% within 15 minutes
   - Max 2 injections per day; >=1 hour apart
3. **Zolmitriptan nasal spray**: 5-10mg
   - Alternative to SC sumatriptan

**Second-Line:**
- Intranasal lidocaine (4%) to sphenopalatine fossa
- Octreotide 100mcg SC
- Ergotamine (rarely used)

## Transitional and Preventive Treatment

**Transitional (Bridge):**
- Prednisone: 60-80mg/day x 5 days, then taper over 2-3 weeks
- Rapid onset; bridges while verapamil is titrated
- Greater occipital nerve block with steroid + local anesthetic
- Suboccipital steroid injection

**Preventive (Maintenance):**
1. **Verapamil**: First-line; dose 240-960mg/day (higher than cardiac doses)
   - ECG monitoring at each dose increase (PR prolongation risk)
   - Most patients need 480-720mg/day
   - Continue through cluster period, then taper
2. **Lithium**: 600-1200mg/day; monitor levels and renal/thyroid function
3. **Topiramate**: 100-200mg/day
4. **Melatonin**: 10-25mg at bedtime (adjunctive)
5. **Galcanezumab**: FDA-approved for episodic cluster headache prevention
   - 300mg SC at onset of cluster period; monthly during cluster`,

      keyTerms: [
        { term: 'trigeminal autonomic cephalalgia', definition: 'Group of headache disorders with unilateral trigeminal pain and ipsilateral autonomic features (TACs)' },
        { term: 'conjunctival injection', definition: 'Redness of the white of the eye from dilated blood vessels' },
        { term: 'paroxysmal hemicrania', definition: 'TAC with shorter, more frequent attacks than cluster; responds completely to indomethacin' },
        { term: 'SUNCT', definition: 'Short-lasting Unilateral Neuralgiform headache with Conjunctival injection and Tearing' },
        { term: 'verapamil', definition: 'Calcium channel blocker used as first-line preventive for cluster headache at higher doses than cardiac use' },
      ],
      analogies: [
        'The trigeminal autonomic cephalalgias are like a family of disorders - they share the same features but differ in duration, frequency, and treatment response.',
        'Verapamil for cluster headache is like a dam controlling the flow of attacks - it takes time to build (titrate) but effectively holds them back.',
        'The indomethacin response in paroxysmal hemicrania is so specific it is considered a diagnostic test - like a key fitting only one lock.',
      ],
      examples: [
        'A man with nightly periorbital attacks and tearing responds to high-flow oxygen within 10 minutes - classic episodic cluster headache.',
        'A woman with 20 attacks per day lasting 15 minutes each has complete resolution with indomethacin - paroxysmal hemicrania, not cluster.',
        'A patient started on verapamil needs ECG at each dose increase to monitor for heart block.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Cluster headache pathophysiology involves hypothalamic activation driving trigeminal-autonomic reflex arc activation, with treatment targeting both acute attacks and cluster period suppression.',
      explanation: `## Pathophysiology

**Hypothalamic Driver:**
- Posterior hypothalamus shows activation on PET and fMRI during cluster attacks
- Hypothalamus contains the suprachiasmatic nucleus (circadian pacemaker)
- Explains: Circadian and circannual attack patterns, nocturnal predominance, seasonal periodicity
- Hypothalamic DBS effective in refractory chronic cluster (proof of concept)

**Trigeminal-Autonomic Reflex:**
1. Trigeminal afferents activated (pain pathway)
2. Signal transmitted to trigeminal nucleus caudalis
3. Reflex activation of superior salivatory nucleus (parasympathetic)
4. Parasympathetic outflow via greater superficial petrosal nerve and sphenopalatine ganglion
5. Produces: Lacrimation, nasal congestion, conjunctival injection
6. Additional: Sympathetic hypofunction causes partial Horner syndrome (miosis, ptosis)

**CGRP and Neuropeptides:**
- CGRP elevated during cluster attacks (similar to migraine)
- VIP (vasoactive intestinal peptide) elevated (parasympathetic marker)
- PACAP elevated during attacks
- Basis for galcanezumab (anti-CGRP) efficacy

**Circadian Biology:**
- Melatonin levels altered in cluster headache
- Attack onset correlates with REM sleep
- Seasonal cluster periods correlate with daylight changes
- Basis for melatonin supplementation as adjunctive therapy

## Differential Diagnosis

**Other TACs:**
- Paroxysmal hemicrania: Shorter attacks (2-30 min), more frequent (5-40/day), absolute indomethacin response
- SUNCT/SUNA: Very short (1-600 sec), very frequent (3-200/day), lamotrigine responsive
- Hemicrania continua: Continuous unilateral pain with autonomic features, indomethacin response

**Secondary Causes to Exclude:**
- Pituitary adenoma (especially macroadenoma)
- Carotid or vertebral dissection
- Cavernous sinus pathology (meningioma, aneurysm, thrombosis)
- Posterior fossa lesion
- MRI brain with pituitary views and MRA recommended at first presentation

**Indomethacin Test:**
- Confirms: Paroxysmal hemicrania, hemicrania continua
- Dose: 25mg TID, increase to 75mg TID if no response in 1-2 weeks
- Protect stomach with PPI
- Complete response = diagnostic for indomethacin-responsive headache

## Refractory Cluster Headache Management

**Definition of Refractory:**
- Failure of >=3 adequate preventive trials
- Attacks persist despite optimized treatment
- Significant disability and quality of life impairment

**Options:**
- Occipital nerve stimulation (ONS): Moderate evidence; bilateral leads
- Sphenopalatine ganglion (SPG) stimulation: Pulsante device (Pathway CH-1 study)
  - On-demand stimulation during attack via cheek implant
  - 67% of attacks treated effectively
- Deep brain stimulation of posterior hypothalamus: Limited cases, ethical concerns
- Non-invasive vagus nerve stimulation (gammaCore): Some evidence for episodic cluster
- Psilocybin and psychedelic tryptamines: Observational data on cluster period termination
  - Not yet FDA-approved; clinical trials initiated (NCT02981173)

## Verapamil Management Protocol

**Titration:**
- Start 80mg TID (240mg/day)
- Increase by 80mg every 2 weeks
- ECG at baseline and each dose increase
- Most patients need 480-720mg; some up to 960mg/day
- Monitor for: Constipation, hypotension, edema, heart block

**ECG Monitoring:**
- PR interval >200ms: Hold dose increase, consider alternative
- New heart block: Reduce dose or discontinue
- Particularly important at doses >480mg/day

**Duration:**
- Continue 2 weeks beyond last attack, then taper slowly
- Some chronic cluster patients require indefinite treatment`,

      keyTerms: [
        { term: 'posterior hypothalamus', definition: 'Brain region acting as the pacemaker for cluster attacks; contains circadian clock and shows activation during attacks' },
        { term: 'trigeminal-autonomic reflex', definition: 'Neural pathway where trigeminal pain signals reflexively activate parasympathetic autonomic output' },
        { term: 'sphenopalatine ganglion', definition: 'Parasympathetic ganglion behind the nose that mediates autonomic symptoms in cluster headache; target for stimulation therapy' },
        { term: 'VIP', definition: 'Vasoactive Intestinal Peptide - parasympathetic neuropeptide elevated during cluster attacks' },
        { term: 'indomethacin response', definition: 'Complete headache resolution with indomethacin, diagnostic for paroxysmal hemicrania and hemicrania continua' },
      ],
      clinicalNotes:
        'Always image with MRI + MRA at first presentation of cluster-like headache to exclude secondary causes (especially pituitary pathology). Verapamil requires ECG at every dose escalation. Indomethacin trial is essential to rule out paroxysmal hemicrania and hemicrania continua. Galcanezumab (anti-CGRP) is FDA-approved for episodic cluster headache prevention.',
    },

    4: {
      level: 4,
      summary:
        'Advanced cluster headache management integrates neuromodulation, CGRP-targeted therapy, understanding of chronobiology, and consideration of treatment-refractory interventional options.',
      explanation: `## Advanced Pathophysiology

**Hypothalamic-Brainstem Network:**
- Not just hypothalamus: Network involving posterior hypothalamus, trigeminal nucleus, superior salivatory nucleus, PAG, and locus coeruleus
- Functional MRI: Altered connectivity in hypothalamic-trigeminal circuit during cluster period
- VBM studies: Gray matter volume changes in hypothalamus, cingulate, insula

**Genetic Factors:**
- Familial clustering: 5-18x risk in first-degree relatives
- HCRTR2 gene (hypocretin/orexin receptor 2): Association in some studies
- CLOCK gene polymorphisms: Circadian clock gene associations
- ADH4, MTHFR associations reported
- Polygenic architecture similar to migraine but distinct risk loci

**Chronobiology:**
- Cluster periods correlate with daylight transitions (equinoxes)
- Attacks correlate with REM sleep cycles
- Altered cortisol, melatonin, and testosterone circadian rhythms
- Hypothalamic-pituitary axis dysfunction during active periods

## CGRP Pathway in Cluster Headache

**Galcanezumab (Emgality):**
- Anti-CGRP ligand monoclonal antibody
- FDA-approved for episodic cluster headache prevention
- Dose: 300mg SC at cluster onset, then 300mg monthly during cluster
- Phase 3: Reduced weekly attack frequency by 3.5 vs 0.2 placebo
- NOT effective for chronic cluster headache in Phase 3 trial
- CGRP antibodies: Target ligand but receptor antibody (erenumab) not studied in cluster

**Gepants:**
- Limited data in cluster headache
- Rimegepant and ubrogepant: Not formally studied for cluster
- Potential as acute or preventive adjunct

## Interventional Approaches

**Greater Occipital Nerve Block:**
- Steroid (triamcinolone, methylprednisolone) + local anesthetic
- Ipsilateral to cluster side
- Bridges therapy during preventive titration
- May shorten cluster period duration

**Sphenopalatine Ganglion (SPG) Interventions:**
- *SPG block*: Topical lidocaine applied to posterior nasal wall
  - Rapid but temporary relief
  - Can be self-administered (SphenoCath device)
- *SPG stimulation (Pulsante/ATI)*: Implanted microstimulator
  - On-demand stimulation during attacks
  - 67% attack relief rate, 36% frequency reduction
  - Complications: Facial sensory changes, device-related issues
- *SPG radiofrequency ablation*: Permanent lesion
  - Higher complication rate; less reversible

**Occipital Nerve Stimulation (ONS):**
- Bilateral percutaneous leads at C1-C2 level
- Evidence from several open-label studies and one RCT
- ~60% of refractory patients report meaningful improvement
- Complications: Lead migration, infection, local pain

**Deep Brain Stimulation (DBS):**
- Target: Posterior hypothalamus / ventral tegmental area
- Reserved for severe refractory chronic cluster
- Limited centers; ethical concerns about brain target
- ~60% response rate in published series
- Risks: Intracerebral hemorrhage, mood effects

## Oxygen Therapy Details

**Standard:**
- 100% O2 at 12-15 L/min via non-rebreather mask
- Duration: 15-20 minutes
- Effective in ~70% of attacks

**Optimized:**
- Demand valve system: Higher flow rates (>15 L/min)
- Hyperoxia + hyperventilation technique
- Home oxygen prescription: Portable concentrators less effective than cylinders
- Insurance coverage challenges in many regions

## Cluster Headache and Psychedelics

**Observational Evidence:**
- Patient surveys report cluster period termination with psilocybin or LSD
- BOL-148 (non-hallucinogenic LSD analog): Pilot data promising
- Proposed mechanism: 5-HT2A receptor agonism affecting hypothalamic circuits

**Clinical Trials:**
- Psilocybin: NCT02981173 (Yale), open-label and RCT designs
- DMT (N,N-dimethyltryptamine): Under investigation
- Regulatory barriers: Schedule I substances

**Clinical Implications:**
- Patients may self-medicate; important to discuss openly
- Legal status varies by jurisdiction
- Not yet standard of care; promising avenue`,

      keyTerms: [
        { term: 'HCRTR2', definition: 'Hypocretin/orexin receptor 2 gene with reported association to cluster headache risk' },
        { term: 'SPG stimulation', definition: 'Sphenopalatine ganglion neurostimulation via implanted device for on-demand cluster attack treatment' },
        { term: 'demand valve oxygen', definition: 'High-flow oxygen delivery system providing higher flow rates for optimized cluster headache treatment' },
        { term: 'BOL-148', definition: 'Non-hallucinogenic LSD derivative under investigation for cluster headache prevention' },
        { term: 'voxel-based morphometry', definition: 'MRI technique detecting structural brain changes; shows hypothalamic differences in cluster headache' },
      ],
      clinicalNotes:
        'Galcanezumab is FDA-approved for episodic but NOT chronic cluster headache. Verapamil doses for cluster (480-960mg) far exceed cardiac doses; ECG monitoring is mandatory. SPG stimulation is the most promising interventional approach for refractory cluster. Psilocybin clinical trials are underway but not yet standard of care. Occipital nerve blocks provide useful bridge therapy.',
    },

    5: {
      level: 5,
      summary:
        'Frontier cluster headache research investigates novel neurostimulation targets, psychedelic therapeutics, chronotherapeutic approaches, and precision phenotyping to move beyond empiric treatment toward mechanistic therapies.',
      explanation: `## Emerging Therapeutic Approaches

**Next-Generation Neuromodulation:**
- *Non-invasive vagus nerve stimulation (nVNS)*: gammaCore
  - ACT1 trial: Effective for episodic cluster headache attacks
  - ACT2 and PREVA: Preventive data mixed
  - Advantage: Non-invasive, portable, no drug interactions
- *Transcranial direct current stimulation (tDCS)*: Targeting hypothalamus/prefrontal regions
  - Preliminary data; need larger trials
- *Closed-loop stimulation*: Adaptive neurostimulation triggered by autonomic biosignals
  - Heart rate, skin conductance changes preceding attack may serve as triggers

**Psychedelic Medicine:**
- Psilocybin: Phase 2 RCT at Yale (NCT02981173)
  - Proposed mechanism: 5-HT2A agonism resetting hypothalamic circuitry
  - Single or few doses may terminate entire cluster period
- LSD (low-dose, sub-hallucinogenic): Historical reports of efficacy
  - Regulatory challenges limit research
- BOL-148 (2-bromo-LSD): Non-hallucinogenic derivative
  - Open-label pilot: 5/6 patients responded
  - Lack of pharma investment has slowed development
- Mechanism hypothesis: Serotonergic modulation of hypothalamic-brainstem network

**PACAP-Targeted Therapy:**
- PACAP38 triggers cluster-like attacks in susceptible individuals
- Anti-PACAP antibodies in development for migraine; cluster trials planned
- May complement anti-CGRP approach
- PAC1 receptor particularly relevant for autonomic features

## Chronotherapeutic Approaches

**Melatonin and Circadian Manipulation:**
- Melatonin 10-25mg at bedtime: Adjunctive preventive
- Extended-release melatonin: More physiological profile
- Light therapy: Timed exposure to bright light to shift circadian phase
- Chronotherapy: Structured sleep-wake schedule manipulation

**CLOCK Gene Targeting:**
- CLOCK gene polymorphisms associated with cluster headache
- Circadian clock modulation as therapeutic strategy
- CK1 delta/epsilon inhibitors: Circadian clock period modulators under study
- Intersection with orexin system (wake-promoting)

## Precision Phenotyping

**Subtype Identification:**
- Pure episodic (seasonal, self-limited) vs chronic (year-round)
- Transitional forms: Episodic becoming chronic (and vice versa)
- CGRP-responsive vs CGRP-non-responsive
- Neuromodulation-responsive phenotype

**Biomarker Development:**
- Serum CGRP and VIP levels during attacks
- Hypothalamic functional connectivity signatures on fMRI
- Genetic risk profiling (HCRTR2, CLOCK, ADH4)
- Tears and saliva biomarkers (non-invasive sampling during attacks)

**Deep Phenotyping Registries:**
- International Cluster Headache Registry
- Clusterbusters patient advocacy organization
- Real-world data on treatment patterns and outcomes
- Natural history studies informing trial design

## Novel Drug Targets

**Orexin System:**
- HCRTR2 genetic association implicates orexin pathway
- Suvorexant (DORA): Paradoxical - may help or worsen (sleep vs. headache effects)
- Selective OX2R modulation under consideration
- Orexin connects circadian regulation to pain modulation

**Nitric Oxide Pathway:**
- NO donors trigger cluster attacks (GTN provocation test)
- sGC inhibitors: Potential preventive approach
- NO-sensitive hypothalamic neurons as targets

**Ion Channel Modulators:**
- TRPA1/TRPV1 channels: Expressed on trigeminal afferents
- Selective channel modulators being developed for TACs
- May target both pain and autonomic components

## Access and Advocacy

**Challenges:**
- Average diagnostic delay: 5-7 years
- Misdiagnosis as migraine, sinusitis, dental pain common
- Oxygen therapy: Insurance coverage battles (varies by country)
- CGRP antibodies: Not approved for chronic cluster
- Psychedelics: Schedule I status limits access and research

**Patient Organization Impact:**
- Clusterbusters: Patient advocacy, research funding, support
- OUCH (Organisation for the Understanding of Cluster Headache): International advocacy
- Patient registries improving research enrollment
- Social media connecting isolated patients (rare disease)

**Research Priorities:**
1. Biomarker-guided treatment selection
2. Psychedelic medicine clinical trials
3. Novel neuromodulation targets and devices
4. Transition mechanisms (episodic to chronic)
5. Pediatric cluster headache (under-recognized)
6. Health equity: Access to oxygen, subspecialty care, and approved therapies`,

      keyTerms: [
        { term: 'chronotherapy', definition: 'Therapeutic approach manipulating circadian timing to treat disorders with time-dependent patterns' },
        { term: 'PACAP', definition: 'Pituitary Adenylate Cyclase-Activating Polypeptide - emerging target beyond CGRP for headache disorders' },
        { term: 'psilocybin', definition: 'Psychedelic compound from mushrooms under investigation for cluster headache period termination via 5-HT2A agonism' },
        { term: 'orexin', definition: 'Hypothalamic neuropeptide system involved in wake-sleep regulation and pain; genetically implicated in cluster headache' },
        { term: 'deep phenotyping', definition: 'Detailed clinical, imaging, and biomarker characterization enabling precision treatment selection' },
        { term: 'Clusterbusters', definition: 'Leading patient advocacy organization for cluster headache research and support' },
      ],
      clinicalNotes: `Cluster headache practice pearls:
1. Average diagnostic delay is 5-7 years - maintain high clinical suspicion
2. High-flow oxygen (12-15 L/min) is first-line acute treatment; demand valve systems are optimal
3. Verapamil requires ECG monitoring at every dose increase above 240mg
4. Galcanezumab approved for episodic cluster only; no approved preventive for chronic cluster
5. Psilocybin clinical trials show promise but are not yet standard of care
6. SPG stimulation is the leading interventional approach for refractory chronic cluster
7. Always exclude secondary causes with MRI/MRA at initial presentation
8. Indomethacin trial excludes paroxysmal hemicrania and hemicrania continua
9. Patient advocacy organizations (Clusterbusters, OUCH) are critical resources
10. Insurance coverage for oxygen therapy remains a significant access barrier`,
    },
  },

  media: [
    {
      id: 'cluster-autonomic-features',
      type: 'image',
      filename: 'cluster_headache_autonomic_features.jpg',
      title: 'Cluster Headache: Autonomic Features',
      description: 'Ipsilateral conjunctival injection, lacrimation, ptosis, and miosis during a cluster attack',
    },
    {
      id: 'tac-comparison-diagram',
      type: 'diagram',
      filename: 'trigeminal_autonomic_cephalalgias_comparison.svg',
      title: 'TAC Comparison: Cluster vs PH vs SUNCT vs HC',
      description: 'Duration, frequency, and treatment response comparison across trigeminal autonomic cephalalgias',
    },
  ],

  citations: [
    {
      id: 'may-cluster-lancet-2018',
      type: 'article',
      title: 'Cluster headache',
      authors: ['May A', 'Schwedt TJ', 'Magis D', 'Pozo-Rosich P'],
      source: 'Nature Reviews Disease Primers',
      url: 'https://doi.org/10.1038/nrdp.2018.6',
    },
    {
      id: 'goadsby-galcanezumab-ch-2019',
      type: 'article',
      title: 'Trial of Galcanezumab in Prevention of Episodic Cluster Headache',
      authors: ['Goadsby PJ', 'Dodick DW', 'Leone M'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1813440',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-migraine-depth', targetType: 'condition', relationship: 'sibling', label: 'Migraine' },
    { targetId: 'neuro-seizure-types', targetType: 'condition', relationship: 'see-also', label: 'Seizure Types (differential of episodic events)' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'headache', 'cluster headache', 'trigeminal autonomic cephalalgia', 'neuromodulation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default clusterHeadacheContent;
