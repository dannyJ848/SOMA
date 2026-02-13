/**
 * Migraine - In-Depth Neurology Content
 *
 * Comprehensive coverage of migraine pathophysiology, classification,
 * acute and preventive treatment, and emerging CGRP-targeted therapies.
 */

import { EducationalContent } from '../../types';

export const migraineContent: EducationalContent = {
  id: 'neuro-migraine-depth',
  type: 'condition',
  name: 'Migraine',
  nameEs: 'Migraña',
  alternateNames: ['Migraine Headache', 'Migraine Disorder', 'Hemicrania'],
  hpoId: 'HP:0002076',

  levels: {
    1: {
      level: 1,
      summary:
        'Migraine is a common type of headache that causes intense throbbing pain, usually on one side of the head, often with nausea, vomiting, and sensitivity to light and sound.',
      explanation: `## What Is a Migraine?

A migraine is much more than just a bad headache. It is a neurological condition that causes episodes of intense, throbbing head pain that can last from 4 hours to 3 days.

## Migraine Symptoms

**During an attack:**
- Intense throbbing or pulsing pain, usually on one side of the head
- Nausea and sometimes vomiting
- Extreme sensitivity to light (photophobia)
- Extreme sensitivity to sound (phonophobia)
- Pain gets worse with physical activity
- Some people see flashing lights or zigzag lines before the headache (called an aura)

**Migraine with Aura (about 25% of people):**
- Visual changes: Flashing lights, zigzag lines, blind spots
- Tingling or numbness in the face or hand
- Difficulty speaking
- These warning signs last 20-60 minutes before the headache starts

## Migraine Triggers

- Stress (most common trigger)
- Hormonal changes (menstrual cycle in women)
- Poor sleep or changes in sleep schedule
- Skipping meals or dehydration
- Weather changes
- Certain foods: Alcohol (especially red wine), aged cheeses, processed meats
- Strong smells, bright lights, loud noise

## Who Gets Migraines?

- About 12% of people worldwide
- 3 times more common in women than men
- Often runs in families
- Usually starts in teens or twenties
- Can change in frequency and severity over a lifetime

## Treatment

**During an attack:**
- Over-the-counter pain relievers (ibuprofen, acetaminophen) for mild attacks
- Prescription medications called triptans for moderate-severe attacks
- Rest in a dark, quiet room
- Cold compress on the forehead

**Prevention (for frequent migraines):**
- Daily medications can reduce how often migraines happen
- New injectable medications that target a specific migraine protein (CGRP)
- Lifestyle changes: Regular sleep, exercise, hydration, stress management`,

      keyTerms: [
        { term: 'migraine', definition: 'A neurological condition causing intense throbbing headaches with nausea and sensitivity to light and sound' },
        { term: 'aura', definition: 'Warning signs (visual changes, tingling) that happen before a migraine headache in some people' },
        { term: 'trigger', definition: 'Something that sets off a migraine attack, like stress, certain foods, or lack of sleep' },
        { term: 'triptan', definition: 'A type of prescription medication specifically designed to treat migraine attacks' },
      ],
      analogies: [
        'A migraine is like a thunderstorm in the brain - there is a buildup (prodrome), the storm itself (headache), and calm after it passes.',
        'A migraine aura is like a warning siren before the main event - it alerts you that the headache is coming.',
        'The brain during a migraine is like an overloaded circuit board - normal signals like light and sound become painfully overwhelming.',
      ],
      examples: [
        'A woman gets a throbbing headache on the right side of her head before her period every month, with nausea and light sensitivity - this is menstrual migraine.',
        'A man sees zigzag lines in his vision for 30 minutes, then develops a severe left-sided headache with vomiting - migraine with aura.',
        'A college student gets migraines every time she is stressed and does not sleep well during exams.',
      ],
      patientCounselingPoints: [
        'Keep a headache diary to identify your personal triggers.',
        'Take migraine medication early at the first sign of an attack - do not wait for the pain to get severe.',
        'Regular sleep, meals, exercise, and hydration help prevent migraines.',
        'If you have 4 or more migraines per month, talk to your doctor about preventive treatment.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Migraine is a primary headache disorder classified with or without aura, diagnosed by ICHD-3 criteria, and treated acutely with triptans or NSAIDs and preventively with a range of oral and injectable medications.',
      explanation: `## ICHD-3 Diagnostic Criteria

**Migraine Without Aura:**
- At least 5 attacks fulfilling criteria:
  - Duration: 4-72 hours (untreated)
  - At least 2 of: Unilateral, pulsating, moderate-severe, aggravated by activity
  - At least 1 of: Nausea/vomiting, photophobia and phonophobia
  - Not better explained by another diagnosis

**Migraine With Aura:**
- At least 2 attacks with:
  - Fully reversible visual, sensory, or speech symptoms
  - At least 3 of: Spreads gradually (>5 min), each symptom lasts 5-60 min, at least one unilateral, followed by headache within 60 min
  - Most common: Visual (scintillating scotoma, fortification spectrum)

## Phases of Migraine

**1. Prodrome (hours-days before):**
- Yawning, food cravings, mood changes, neck stiffness, fatigue
- Present in ~60% of patients

**2. Aura (5-60 min, ~25% of patients):**
- Visual: Scintillating scotoma, fortification spectra, photopsia
- Sensory: Tingling/numbness migrating along limb
- Language: Word-finding difficulty, dysphasia
- Rarely: Motor weakness (hemiplegic migraine), brainstem symptoms

**3. Headache (4-72 hours):**
- Unilateral throbbing, moderate-severe
- Worsened by routine physical activity
- Associated nausea, photo/phonophobia

**4. Postdrome (hours-days after):**
- Fatigue, mood changes, food cravings, poor concentration
- "Migraine hangover"

## Epidemiology

- Global prevalence: ~12% (18% women, 6% men)
- Peak prevalence: Ages 25-55 (most productive years)
- #2 cause of global disability (GBD study)
- Chronic migraine: >=15 headache days/month, >=8 with migraine features

## Acute Treatment

**Mild-Moderate:**
- NSAIDs: Ibuprofen 400-800mg, naproxen 500-1000mg
- Acetaminophen 1000mg
- Combination: Acetaminophen + aspirin + caffeine (Excedrin Migraine)

**Moderate-Severe:**
- Triptans (5-HT1B/1D agonists): Sumatriptan, rizatriptan, eletriptan, zolmitriptan
  - Most effective class; take early in attack
  - Contraindicated in: CAD, uncontrolled HTN, hemiplegic migraine, basilar migraine
- Gepants (CGRP receptor antagonists): Ubrogepant, rimegepant
  - No vasoconstriction; safe in cardiovascular disease
  - Can be used for acute and preventive treatment
- Ditans (5-HT1F agonists): Lasmiditan
  - No vasoconstriction; causes dizziness/sedation
  - Cannot drive for 8 hours after taking
- Antiemetics: Metoclopramide, prochlorperazine (also have migraine-specific efficacy)

**Emergency Department:**
- IV metoclopramide + diphenhydramine
- IV prochlorperazine + diphenhydramine
- IV ketorolac
- Avoid opioids (increase recurrence, risk of medication overuse)

## Preventive Treatment

**Indications:**
- >=4 migraine days/month
- Significant disability even if fewer attacks
- Failure, contraindication, or overuse of acute medications
- Certain migraine subtypes (hemiplegic, brainstem aura, frequent prolonged aura)

**Oral Options:**
- Beta-blockers: Propranolol 40-240mg, metoprolol 50-200mg
- Antidepressants: Amitriptyline 10-75mg, venlafaxine 150mg
- Anticonvulsants: Topiramate 50-200mg, valproate 500-1500mg
- Avoid valproate in women of childbearing potential

**Injectable CGRP Pathway Therapies:**
- Erenumab (Aimovig): CGRP receptor antibody, 70-140mg monthly SQ
- Fremanezumab (Ajovy): CGRP ligand antibody, 225mg monthly or 675mg quarterly SQ
- Galcanezumab (Emgality): CGRP ligand antibody, 240mg loading then 120mg monthly SQ
- Eptinezumab (Vyepti): CGRP ligand antibody, 100-300mg quarterly IV
- Well tolerated; constipation is most common side effect

**OnabotulinumtoxinA (Botox):**
- FDA-approved for chronic migraine only
- 155-195 units across 31-39 injection sites every 12 weeks
- "Follow the pain" paradigm with additional injection sites`,

      keyTerms: [
        { term: 'ICHD-3', definition: 'International Classification of Headache Disorders, 3rd edition - the diagnostic standard' },
        { term: 'scintillating scotoma', definition: 'A visual aura with sparkling or shimmering lights and a blind spot' },
        { term: 'chronic migraine', definition: '15 or more headache days per month for 3+ months, with at least 8 having migraine features' },
        { term: 'CGRP', definition: 'Calcitonin Gene-Related Peptide - a key protein in migraine pathophysiology and target of new therapies', pronunciation: 'see-jee-ar-pee' },
        { term: 'medication overuse headache', definition: 'Headache worsening caused by frequent use of acute headache medications (>10-15 days/month)' },
      ],
      analogies: [
        'CGRP-targeting medications are like shutting off a fire alarm that keeps going off unnecessarily - they block the pain signal protein.',
        'Medication overuse headache is like the rebound effect of nose spray - using too much makes the original problem worse.',
        'A migraine aura spreading across the visual field is like a wave rippling across a pond.',
      ],
      examples: [
        'A woman with 12 migraine days per month starts erenumab and reduces to 4 days per month after 3 months.',
        'A man with coronary artery disease uses ubrogepant instead of sumatriptan for his migraines, since gepants are cardiovascular-safe.',
        'A patient using sumatriptan 20 days per month develops daily headaches - medication overuse headache requiring detoxification.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Migraine pathophysiology involves trigeminal activation, CGRP release, cortical spreading depression for aura, and central sensitization, with treatment guided by attack frequency, severity, and comorbidities.',
      explanation: `## Pathophysiology

**Trigeminovascular System:**
1. Trigeminal nerve fibers innervating dural blood vessels are activated
2. Activation releases vasoactive neuropeptides: CGRP, substance P, neurokinin A
3. CGRP causes vasodilation, neurogenic inflammation, and mast cell degranulation
4. Signals transmitted to trigeminal nucleus caudalis in brainstem
5. Ascending pathways to thalamus and cortex generate pain perception

**Cortical Spreading Depression (CSD) - Aura:**
- Wave of neuronal and glial depolarization spreading across cortex at 3-5 mm/min
- Followed by sustained suppression of neural activity
- Corresponds to progression of visual aura across visual field
- Can activate trigeminal afferents (link between aura and headache)

**Central Sensitization:**
- Repeated trigeminal activation leads to:
  - Cutaneous allodynia (normal touch becomes painful)
  - Expansion of pain referral zones
  - Progression to chronic migraine in some patients
- Clinical significance: Triptans less effective once allodynia develops (treat early)

**Brainstem and Hypothalamic Involvement:**
- Periaqueductal gray (PAG): Descending pain modulation
- Hypothalamus: Explains prodromal symptoms (yawning, cravings, mood)
- These structures drive attack initiation, not just secondary response

## Medication Overuse Headache (MOH)

**Criteria:**
- Headache >=15 days/month in patient with pre-existing headache
- Regular overuse for >3 months:
  - Triptans, ergotamines, opioids, combination analgesics: >=10 days/month
  - Simple analgesics: >=15 days/month
- Headache worsened during overuse period

**Management:**
- Education about the cycle
- Abrupt withdrawal (preferred for most) vs gradual taper (opioids, barbiturates)
- Bridge therapy: Naproxen, prednisone short course, or nerve blocks
- Start preventive medication simultaneously
- Most improve within 2-3 months of withdrawal

## Chronic Migraine Management

**Stepwise Approach:**
1. Address medication overuse first
2. Oral preventives (try 2-3 adequate trials)
3. OnabotulinumtoxinA (Botox)
4. CGRP monoclonal antibodies
5. Combination approaches
6. Neuromodulation devices

**CGRP-Targeting Therapies - Detailed:**

*Monoclonal Antibodies (Preventive):*
- Target CGRP ligand: Fremanezumab, galcanezumab, eptinezumab
- Target CGRP receptor: Erenumab
- Efficacy: ~50% of patients achieve >=50% reduction in migraine days
- Onset: Some benefit within first month; full effect by 3 months
- Safety: Excellent; constipation most common side effect
- Long-term data: Stable efficacy over 3+ years in extension studies

*Gepants (Acute and Preventive):*
- CGRP receptor antagonists (small molecules, oral)
- Acute: Ubrogepant (Ubrelvy) 50-100mg, rimegepant (Nurtec ODT) 75mg
- Preventive: Rimegepant 75mg every other day, atogepant (Qulipta) 60mg daily
- No vasoconstriction - safe in cardiovascular disease
- Can cause nausea; hepatotoxicity concern with earlier gepants (resolved with current agents)

## Special Migraine Types

**Hemiplegic Migraine:**
- Aura includes motor weakness (fully reversible)
- Familial (FHM1-3): CACNA1A, ATP1A2, SCN1A mutations
- Sporadic hemiplegic migraine: Same phenotype, no family history
- Contraindications: Triptans and ergotamines (avoid vasoconstriction)
- Preventive: Verapamil, acetazolamide, lamotrigine

**Vestibular Migraine:**
- Recurrent episodes of vestibular symptoms (vertigo, unsteadiness)
- Associated with migraine features
- Diagnosis: ICHD-3 appendix criteria
- Treatment: Same acute and preventive approaches as typical migraine

**Menstrual Migraine:**
- Occurs within day -2 to +3 of menstruation
- Pure menstrual: Only occurs perimenstrually
- Menstrually related: Also occurs at other times
- Perimenstrual prevention: Short-course triptan or naproxen
- Continuous OCP (no placebo week) or estrogen supplementation`,

      keyTerms: [
        { term: 'trigeminovascular system', definition: 'Network of trigeminal nerve fibers innervating meningeal blood vessels; the key pain-generating system in migraine' },
        { term: 'cortical spreading depression', definition: 'Wave of neuronal depolarization across the cortex that produces migraine aura' },
        { term: 'central sensitization', definition: 'Amplification of pain signaling in the CNS causing allodynia and progression to chronic migraine' },
        { term: 'allodynia', definition: 'Pain from normally non-painful stimuli (like touching the scalp or wearing glasses during migraine)', pronunciation: 'al-oh-DIN-ee-ah' },
        { term: 'gepant', definition: 'Small molecule CGRP receptor antagonist for acute and preventive migraine treatment' },
      ],
      clinicalNotes:
        'Treat migraine attacks early before central sensitization develops (allodynia). Address medication overuse headache before optimizing preventives. CGRP monoclonal antibodies and gepants are first-line preventives for many patients. Triptans are contraindicated in cardiovascular disease and hemiplegic migraine - use gepants instead.',
    },

    4: {
      level: 4,
      summary:
        'Advanced migraine management integrates neuromodulation devices, combination preventive strategies, biomarker-guided therapy selection, and management of complex comorbidities including psychiatric conditions and stroke risk.',
      explanation: `## Neuromodulation

**Non-Invasive Devices (FDA-Cleared):**
- *Single-pulse TMS (sTMS)*: Spring TMS device
  - Acute and preventive use; disrupts CSD
- *External trigeminal nerve stimulation (eTNS)*: Cefaly device
  - Supraorbital nerve stimulation; preventive and acute
- *Non-invasive vagus nerve stimulation (nVNS)*: gammaCore
  - Cervical stimulation; acute and preventive
- *Remote electrical neuromodulation (REN)*: Nerivio
  - Upper arm stimulation; conditioned pain modulation
  - Smartphone-controlled

**Invasive (Refractory Cases):**
- Occipital nerve stimulation: Implanted leads at greater occipital nerves
- Sphenopalatine ganglion stimulation: Pulsante device
- Limited evidence; reserved for truly refractory chronic migraine

## Biomarkers and Patient Selection

**CGRP as Biomarker:**
- Elevated interictal serum CGRP predicts response to anti-CGRP therapies
- Not yet standard of care (assay variability)
- Could enable precision treatment selection

**Imaging Biomarkers:**
- Functional connectivity changes in pain matrix
- White matter hyperintensities: More common in migraine with aura
- Iron deposition in PAG in chronic migraine (marker of repeated attacks)

**Genetic Predictors:**
- Common migraine: Polygenic (~40+ risk loci from GWAS)
- HM genes (CACNA1A, ATP1A2, SCN1A): Functional implications for treatment
- Pharmacogenomics: CYP2D6 for triptan metabolism (limited clinical application currently)

## Comorbidities and Complications

**Psychiatric:**
- Depression (2-4x risk): Bidirectional relationship
- Anxiety: Even higher association than depression
- Treatment: Amitriptyline, venlafaxine (treat both migraine and depression)
- Screen with PHQ-9 and GAD-7 at regular intervals

**Cardiovascular:**
- Migraine with aura: 2x increased risk of ischemic stroke
  - Risk highest in women <45 on combined oral contraceptives who smoke
  - Avoid combined OCP in migraine with aura
- Increased risk of MI, particularly in women with aura
- PFO prevalence increased in migraine with aura (~40-50%)
  - PFO closure for migraine: Not yet proven (PREMIUM trial negative)

**Medication Overuse and Opioid Concerns:**
- Opioids worsen migraine over time (increase CGRP, central sensitization)
- Associated with progression to chronic migraine
- Should not be first-line for migraine treatment
- If patient on chronic opioids: Gradual taper with bridge therapy

## Treatment Combinations

**Rational Combinations for Refractory Chronic Migraine:**
- OnabotulinumtoxinA + CGRP monoclonal antibody (emerging evidence supports)
- Oral preventive + CGRP antibody
- Acute: Triptan + NSAID at first sign (stratified care, not step care)

**Emerging Approaches:**
- Dual preventive monoclonal antibodies (not yet evidence-based)
- IV CGRP antibody (eptinezumab) for acute bridge during chronic migraine exacerbation
- Nerve blocks: Greater occipital nerve block with bupivacaine + steroid
  - Bridge therapy during medication changes
  - Every 4-12 weeks for maintenance

## Cluster Headache Mimics and Red Flags

**SNOOP Mnemonic for Secondary Headache Red Flags:**
- **S**ystemic symptoms (fever, weight loss, cancer, HIV)
- **N**eurological symptoms (confusion, focal deficits, papilledema)
- **O**nset sudden (thunderclap - SAH until proven otherwise)
- **O**lder onset (new headache after age 50 - think GCA/mass)
- **P**attern change (progressive headache, positional, Valsalva-triggered)`,

      keyTerms: [
        { term: 'conditioned pain modulation', definition: 'Descending pain inhibition where one pain stimulus reduces perception of another; basis of remote neuromodulation' },
        { term: 'white matter hyperintensities', definition: 'MRI findings more common in migraine with aura, suggesting subclinical vascular injury' },
        { term: 'SNOOP', definition: 'Mnemonic for secondary headache red flags requiring urgent evaluation' },
        { term: 'greater occipital nerve block', definition: 'Injection of local anesthetic and steroid at the occipital nerve for migraine bridge therapy' },
        { term: 'periaqueductal gray', definition: 'Brainstem structure involved in descending pain modulation; shows iron deposition in chronic migraine' },
      ],
      clinicalNotes:
        'Migraine with aura + combined OCP + smoking is a high-risk combination for stroke - avoid combined OCP. OnabotulinumtoxinA + CGRP antibody combination is increasingly used for refractory chronic migraine. Greater occipital nerve blocks provide useful bridge therapy during medication transitions. Always apply SNOOP criteria to identify secondary headache.',
    },

    5: {
      level: 5,
      summary:
        'Frontier migraine research explores novel targets beyond CGRP (PACAP, orexin, KATP channels), precision medicine approaches, digital therapeutics, and the neuroinflammatory-migraine nexus.',
      explanation: `## Beyond CGRP: Novel Therapeutic Targets

**PACAP (Pituitary Adenylate Cyclase-Activating Polypeptide):**
- PACAP38 infusion triggers migraine in susceptible individuals
- Anti-PACAP antibodies: AMG 301, Lu AG09222 in clinical trials
- PAC1 receptor antagonist: Complementary to CGRP pathway

**Orexin System:**
- Orexin-A and -B involved in pain modulation and sleep-wake regulation
- Dual orexin receptor antagonists (DORAs): Under investigation for migraine prevention
- May address migraine-sleep relationship

**KATP Channels:**
- Potassium ATP channels contribute to vasodilation in migraine
- KATP channel blockade (glibenclamide/glyburide): Prevented CGRP-induced headache in proof-of-concept
- Novel selective KATP blockers in development

**Nitric Oxide Pathway:**
- Soluble guanylate cyclase (sGC) inhibitors
- NOS inhibitors: Proof of concept but systemic side effects limit development

**Delta Opioid Receptor Agonists:**
- SNC80, TAN-67: Selective delta agonists reduce CSD without addiction potential
- No mu-receptor activity (avoids opioid-related concerns)

## Precision Medicine in Migraine

**Pharmacogenomics:**
- CGRP pathway polymorphisms may predict anti-CGRP therapy response
- Triptan metabolism: CYP1A2 (frovatriptan), CYP2D6 (rizatriptan, zolmitriptan)
- MTHFR polymorphisms: Relevance to migraine with aura (folate supplementation)

**Machine Learning for Treatment Prediction:**
- AI models using clinical features, headache diaries, and genomics
- Predict response to specific preventive classes
- Digital phenotyping via smartphone data

**Biomarker Development:**
- Serum CGRP levels as treatment response predictor
- Plasma protein panels (proteomics)
- Neuroimaging: Functional connectivity signatures predicting treatment class response
- Goal: Move from trial-and-error to first-time-right treatment

## Digital Health and Remote Management

**Digital Therapeutics:**
- Prescription digital therapeutics for behavioral migraine management
- CBT-based apps with FDA clearance pathway
- Biofeedback via smartphone (HRV training, EMG relaxation)
- Progressive muscle relaxation guided by wearables

**Telemedicine:**
- Virtual headache clinics: Non-inferior outcomes to in-person
- Digital headache diary integration with electronic health records
- Remote neuromodulation device management
- Improved access for rural and underserved populations

**Wearable Technology:**
- Continuous monitoring: Sleep quality, activity, stress indicators
- Trigger identification through pattern recognition
- Seizure/headache prediction algorithms
- Medication adherence tracking

## Clinical Trial Innovation

**Adaptive Trial Designs:**
- REFORM trial: Platform trial testing multiple migraine preventives simultaneously
- Response-adaptive randomization: Allocate more patients to effective arms
- Master protocol approaches for rare migraine subtypes

**Novel Endpoints:**
- Migraine-free days (rather than headache days)
- Disability-weighted outcomes (HIT-6, MIDAS combined with frequency)
- Patient-reported meaningful change thresholds
- Ecological momentary assessment via smartphone

## Global Burden and Access

**Disparities:**
- Migraine is #2 cause of global disability (GBD 2019)
- Underdiagnosed and undertreated worldwide
- Gender disparity: Women disproportionately affected, especially during reproductive years
- CGRP therapies: High cost ($6,000-$20,000/year) limits access
- Biosimilars: First CGRP antibody biosimilars expected by 2026-2027

**Advocacy and Policy:**
- Headache recognized as a neurological disease (not just a symptom)
- WHO classification of headache disorders
- Insurance coverage battles for CGRP therapies
- Workplace accommodations under disability protections

## Emerging Understanding

**Migraine as a Spectrum:**
- Episodic to chronic: Continuum with modifiable progression factors
- Migraine aura without headache (acephalgic migraine): Increasingly recognized
- Persistent migraine aura: Status migrainosus of aura
- Vestibular migraine: Increasingly validated as distinct entity

**Gut-Brain Axis:**
- Altered gut microbiome in migraine
- Probiotics under investigation as adjunctive preventive
- CGRP expressed throughout GI tract (implications for side effects and therapy)

**Glymphatic System:**
- Sleep-dependent brain waste clearance
- Disrupted in migraine (link between sleep disturbance and attack frequency)
- Aquaporin-4 as potential target`,

      keyTerms: [
        { term: 'PACAP', definition: 'Pituitary Adenylate Cyclase-Activating Polypeptide - emerging migraine target beyond CGRP' },
        { term: 'cortical spreading depression', definition: 'Wave of neuronal depolarization underlying migraine aura; target of neuromodulation therapies' },
        { term: 'KATP channel', definition: 'Potassium ATP channel involved in vasodilation during migraine; novel drug target' },
        { term: 'digital therapeutic', definition: 'FDA-regulated software-based intervention for disease management, such as CBT-based migraine apps' },
        { term: 'glymphatic system', definition: 'Brain waste clearance system active during sleep; disrupted in migraine' },
        { term: 'biosimilar', definition: 'Near-identical copy of a biologic medication expected to improve access to CGRP antibody therapies' },
      ],
      clinicalNotes: `Migraine practice pearls:
1. CGRP monoclonal antibodies have transformed chronic migraine management with excellent tolerability
2. Gepants serve dual acute + preventive roles without vasoconstriction risk
3. PACAP pathway is the leading next-generation target beyond CGRP
4. Avoid combined OCP in migraine with aura (increased stroke risk)
5. Treat attacks early before central sensitization/allodynia develops
6. Address medication overuse before optimizing preventive therapy
7. Greater occipital nerve blocks bridge therapy during medication transitions
8. OnabotulinumtoxinA + CGRP antibody combination for refractory chronic migraine
9. CGRP biosimilars expected 2026-2027 should improve access
10. Digital therapeutics and telemedicine expanding access to headache specialty care`,
    },
  },

  media: [
    {
      id: 'migraine-csd-diagram',
      type: 'diagram',
      filename: 'cortical_spreading_depression.svg',
      title: 'Cortical Spreading Depression in Migraine Aura',
      description: 'Wave of neuronal depolarization spreading across the visual cortex generating aura symptoms',
    },
    {
      id: 'cgrp-pathway',
      type: 'diagram',
      filename: 'cgrp_pathway_therapies.svg',
      title: 'CGRP Pathway and Targeted Therapies',
      description: 'CGRP release from trigeminal fibers and sites of action for monoclonal antibodies and gepants',
    },
  ],

  citations: [
    {
      id: 'ashina-migraine-nejm-2020',
      type: 'article',
      title: 'Migraine',
      authors: ['Ashina M'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1915327',
    },
    {
      id: 'dodick-cgrp-lancet-2018',
      type: 'article',
      title: 'CGRP ligand and receptor monoclonal antibodies for migraine prevention',
      authors: ['Dodick DW'],
      source: 'Lancet',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-cluster-headache-depth', targetType: 'condition', relationship: 'sibling', label: 'Cluster Headache' },
    { targetId: 'neuro-ischemic-stroke-depth', targetType: 'condition', relationship: 'related', label: 'Ischemic Stroke (migraine-stroke relationship)' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'headache', 'migraine', 'CGRP', 'pain management'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default migraineContent;
